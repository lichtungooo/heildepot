#!/usr/bin/env python3
"""Holt bis zu drei freie Fotos je Kraut von Wikimedia Commons.

    node scripts/kraeuter-liste.mjs > /tmp/kraeuter.json
    python3 scripts/bilder_holen.py /tmp/kraeuter.json            alle, die noch fehlen
    python3 scripts/bilder_holen.py /tmp/kraeuter.json baldrian    nur diese

Je Kraut entstehen public/bilder/kraut/<id>-1.webp bis -3.webp (400 × 300, mittig auf 4:3, etwa 25 KB)
und public/bilder/kraut/<id>.json mit dem Nachweis (Titel, Autor, Lizenz, Quelle).
Gesucht wird über den lateinischen Namen: erst die Commons-Kategorie der Art,
dann die Suche. Es zählen allein Fotos unter freier Lizenz; Herbarbögen,
Zeichnungen, Karten und Tafeln bleiben draußen. Braucht Pillow mit WebP.
"""
import html
import io
import json
import re
import sys
import time
import urllib.parse
import urllib.request
from concurrent.futures import ThreadPoolExecutor
from pathlib import Path

from PIL import Image

API = "https://commons.wikimedia.org/w/api.php"
UA = "HeildepotBilder/1.0 (https://heildepot.wir.ooo; Bildnachweis je Kraut)"
ZIEL = Path(__file__).resolve().parent.parent / "public" / "bilder" / "kraut"
BREITE = 400
HOEHE = 300
QUALITAET = 45
FREI = re.compile(r"^(cc0|public domain|pd\b|cc by(-sa)? \d)", re.I)
DRAUSSEN = re.compile(r"herbar|specimen|sheet|illustra|drawing|zeichnung|plate|tafel|k[oö]hler|thom[eé]|"
                      r"map|karte|distribution|verbreitung|diagram|structure|formula|molecule|stamp|"
                      r"briefmarke|logo|icon|label|etikett|book|buch|page|seite|scan|microscop|pollen|\bseed bank|"
                      r"illustration|botanical|curtis|flora von|flore|bilderatlas|woodcut|holzschnitt", re.I)


def anfrage(params):
    params = {**params, "format": "json", "formatversion": "2"}
    url = API + "?" + urllib.parse.urlencode(params)
    for versuch in range(4):
        try:
            req = urllib.request.Request(url, headers={"User-Agent": UA})
            with urllib.request.urlopen(req, timeout=30) as r:
                return json.load(r)
        except Exception:
            time.sleep(2 + versuch * 3)
    return {}


def kandidaten(latein):
    art = " ".join(latein.replace("×", "").split()[:2])
    titel = []
    d = anfrage({"action": "query", "list": "categorymembers", "cmtitle": f"Category:{art}", "cmtype": "file", "cmlimit": "60"})
    titel += [m["title"] for m in d.get("query", {}).get("categorymembers", [])]
    if len(titel) < 8:
        d = anfrage({"action": "query", "list": "search", "srnamespace": "6", "srlimit": "30",
                     "srsearch": f'"{art}" filetype:bitmap'})
        titel += [m["title"] for m in d.get("query", {}).get("search", []) if m["title"] not in titel]
    return [t for t in titel if re.search(r"\.(jpe?g)$", t, re.I) and not DRAUSSEN.search(t)]


def infos(titel):
    if not titel:
        return []
    aus = []
    for i in range(0, len(titel), 40):
        d = anfrage({"action": "query", "titles": "|".join(titel[i:i + 40]), "prop": "imageinfo",
                     "iiprop": "url|size|extmetadata|mime", "iiurlwidth": "500"})
        aus += d.get("query", {}).get("pages", [])
    return aus


def text(meta, schluessel):
    roh = (meta.get(schluessel) or {}).get("value", "")
    return html.unescape(re.sub(r"<[^>]+>", "", str(roh))).strip()


def familie(titel):
    """Ähnliche Dateien einer Reihe (Name 01.jpg, Name 02.jpg) zählen als eine."""
    t = re.sub(r"^File:", "", titel).lower()
    t = re.sub(r"[\d_\-\s().]+", " ", re.sub(r"\.jpe?g$", "", t))
    return t.strip()[:18]


def auswahl(seiten, anzahl=3):
    """Erst je Fotograf ein Bild, dann wird aufgefüllt; eine Reihe (Name 01, Name 02) zählt einmal."""
    passend = []
    for s in seiten:
        ii = (s.get("imageinfo") or [{}])[0]
        meta = ii.get("extmetadata") or {}
        lizenz = text(meta, "LicenseShortName")
        if not FREI.search(lizenz) or ii.get("mime") != "image/jpeg":
            continue
        if ii.get("width", 0) < 600 or ii.get("width", 0) < ii.get("height", 0) * 0.6:
            continue
        if DRAUSSEN.search(text(meta, "ImageDescription")[:300]):
            continue
        passend.append({"titel": s["title"].removeprefix("File:"), "autor": text(meta, "Artist")[:120] or "unbekannt",
                        "lizenz": lizenz, "quelle": ii.get("descriptionurl", ""), "url": ii.get("thumburl") or ii.get("url")})
    gewaehlt, autoren, familien = [], set(), set()
    for streng in (True, False):
        for b in passend:
            if len(gewaehlt) == anzahl:
                return gewaehlt
            f = familie(b["titel"])
            if b in gewaehlt or (streng and (b["autor"] in autoren or f in familien)):
                continue
            gewaehlt.append(b)
            autoren.add(b["autor"])
            familien.add(f)
    return gewaehlt


def laden(url):
    req = urllib.request.Request(url, headers={"User-Agent": UA})
    for versuch in range(4):
        try:
            with urllib.request.urlopen(req, timeout=60) as r:
                return r.read()
        except Exception:
            time.sleep(3 + versuch * 4)
    return None


def speichern(roh, datei):
    bild = Image.open(io.BytesIO(roh)).convert("RGB")
    w, h = bild.size
    if w / h > BREITE / HOEHE:
        neu = round(h * BREITE / HOEHE)
        bild = bild.crop(((w - neu) // 2, 0, (w - neu) // 2 + neu, h))
    else:
        neu = round(w * HOEHE / BREITE)
        bild = bild.crop((0, (h - neu) // 2, w, (h - neu) // 2 + neu))
    bild.resize((BREITE, HOEHE), Image.LANCZOS).save(datei, "WEBP", quality=QUALITAET, method=6)


def kraut(k):
    nachweis = ZIEL / f"{k['id']}.json"
    if nachweis.exists():
        return k["id"], "da"
    bilder = auswahl(infos(kandidaten(k["latein"])))
    liste = []
    for i, b in enumerate(bilder, 1):
        roh = laden(b.pop("url"))
        if not roh:
            continue
        datei = ZIEL / f"{k['id']}-{len(liste) + 1}.webp"
        try:
            speichern(roh, datei)
        except Exception:
            continue
        liste.append({"datei": datei.name, **b})
        time.sleep(0.3)
    nachweis.write_text(json.dumps(liste, ensure_ascii=False, indent=1) + "\n", encoding="utf-8")
    return k["id"], len(liste)


def main(argv):
    kraeuter = json.load(open(argv[0], encoding="utf-8"))
    if len(argv) > 1:
        kraeuter = [k for k in kraeuter if k["id"] in argv[1:]]
    ZIEL.mkdir(parents=True, exist_ok=True)
    zahlen = {}
    with ThreadPoolExecutor(max_workers=3) as pool:
        for i, (kid, n) in enumerate(pool.map(kraut, kraeuter), 1):
            zahlen[kid] = n
            if i % 25 == 0:
                print(f"{i}/{len(kraeuter)}", flush=True)
    ohne = [k for k, n in zahlen.items() if n == 0]
    print(f"fertig: {len(zahlen)} Kräuter, {sum(n for n in zahlen.values() if isinstance(n, int))} Bilder neu, ohne Bild: {len(ohne)}")
    if ohne:
        print("ohne Bild: " + ", ".join(ohne))


if __name__ == "__main__":
    main(sys.argv[1:])
