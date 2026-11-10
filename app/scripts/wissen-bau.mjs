// Das Heilwissen als Dokumente für den Wissensindex (Forge, DEFINITION Teil 119,
// Stufen 119a und 119f). Reine Funktionen: aus den Daten des Heildepots wird je
// Kraut, Beschwerde, Rezept und Thema ein Markdown-Dokument mit Kopfzeile,
// Abschnitten und Verweisen. Jedes trägt die Kategorie der Heildepot-Seite, ein
// Kraut dazu seine Wirkungen und Fotos. Gleiche Daten ergeben dieselben Dateien (119.R2).

export const BASIS = 'https://heildepot.wir.ooo/'
const GESCHUETZT = /geschützt/i

const FALT = /[äöüß]/g
const FALT_Z = { ä: 'ae', ö: 'oe', ü: 'ue', ß: 'ss' }
export const falte = (s) => String(s ?? '').trim().toLowerCase().replace(FALT, (z) => FALT_Z[z])

/** Titel der bekannten Felder. Ein Feld, das hier fehlt, landet unter „Weiteres“ (119.R3). */
export const TITEL = {
  beschreibung: 'Beschreibung', geschichte: 'Geschichte', wirkung: 'Wirkung', wirkungen: 'Wirkungen',
  anwendung: 'Anwendung', sammelzeit: 'Sammelzeit', pflanzenteile: 'Pflanzenteile', ernte: 'Ernte',
  zubereitungen: 'Zubereitungen', zubereitung: 'Zubereitung', mischungen: 'Mischungen', zutaten: 'Zutaten',
  hintergrund: 'Hintergrund', wissenschaft: 'Wissenschaft', geheimtipp: 'Geheimtipp', vorsicht: 'Vorsicht',
  gegenanzeigen: 'Gegenanzeigen', nebenwirkungen: 'Nebenwirkungen', koerper: 'Körper', psychosomatik: 'Psychosomatik',
  traditionen: 'Traditionen', kraeuter: 'Kräuter', stoffe: 'Stoffe', ernaehrung: 'Ernährung', fasten: 'Fasten',
  bewegung: 'Bewegung', geist: 'Geist', produkte: 'Produkte', kategorie: 'Kategorie', schwierigkeit: 'Schwierigkeit',
  wirkungszeit: 'Wirkungszeit', mondphase: 'Mondphase', ritual: 'Ritual', quelle: 'Quelle', tcm: 'TCM',
  ayurveda: 'Ayurveda', volksmedizin: 'Volksmedizin', germanisch: 'Germanische Heilkunde', alchemie: 'Alchemie',
  zitat: 'Zitat', text: 'Text', empfehlung: 'Empfehlung', staerkend: 'Stärkend', meiden: 'Meiden', rezepte: 'Rezepte',
  formen: 'Formen', reinigung: 'Reinigung', praktiken: 'Praktiken', einheit: 'Einheit', affirmationen: 'Affirmationen',
  meditation: 'Meditation', energie: 'Energie', anleitung: 'Anleitung', desc: 'Beschreibung', dosierung: 'Dosierung',
}

// Felder, die in der Kopfzeile oder in „Hilft bei“ stehen und keinen eigenen Abschnitt bekommen.
const KOPF = new Set(['id', 'name', 'title', 'titel', 'lateinisch', 'familie', 'url', 'tags', 'vollname', 'symptome', 'besonders_bei', 'preis'])
const TRADITIONEN = ['tcm', 'ayurveda', 'volksmedizin']

const titel = (k) => TITEL[k] ?? k
const leer = (v) => v == null || v === '' || (Array.isArray(v) && v.length === 0) || (typeof v === 'object' && !Array.isArray(v) && Object.keys(v).length === 0)
const zeile = (s) => String(s).replace(/[ \t]+\n/g, "\n").trim()

/** Ein Wert als Markdown unter einer Überschrift der Tiefe `tiefe`. */
function wert(v, tiefe) {
  if (leer(v)) return ''
  if (typeof v !== 'object') return zeile(v) + '\n'
  if (Array.isArray(v)) {
    if (v.every((x) => typeof x !== 'object')) return v.map((x) => `- ${zeile(x)}`).join('\n') + '\n'
    return v.map((x, i) => {
      if (typeof x !== 'object' || x === null) return `- ${zeile(x)}\n`
      const kopf = x.name ?? x.titel ?? `${i + 1}`
      const rest = Object.entries(x).filter(([k]) => k !== 'name' && k !== 'titel' && k !== 'tags')
      const teile = rest.filter(([, w]) => !leer(w)).map(([k, w]) => typeof w === 'object' ? `**${titel(k)}:**\n\n${wert(w, tiefe + 1)}` : `**${titel(k)}:** ${zeile(w)}\n`)
      return `${'#'.repeat(Math.min(tiefe, 6))} ${zeile(kopf)}\n\n${teile.join('\n')}`
    }).join('\n')
  }
  return Object.entries(v).filter(([, w]) => !leer(w)).map(([k, w]) => `${'#'.repeat(Math.min(tiefe, 6))} ${titel(k)}\n\n${wert(w, tiefe + 1)}`).join('\n')
}

function abschnitt(k, v) {
  const inhalt = wert(v, 3)
  return inhalt ? `## ${titel(k)}\n\n${inhalt}` : ''
}

function kopfzeile(felder) {
  const z = ['---']
  for (const [k, v] of Object.entries(felder)) {
    if (leer(v)) continue
    if (Array.isArray(v)) z.push(`${k}: [${v.map((x) => JSON.stringify(String(x))).join(', ')}]`)
    else z.push(`${k}: ${JSON.stringify(String(v))}`)
  }
  z.push('---')
  return z.join('\n') + '\n'
}

const stichworte = (tags) => [...new Set((tags ?? []).map((t) => String(t).replace(/^#/, '').trim()).filter(Boolean))]

const verweisIds = (ids) => [...new Set((ids ?? []).map((x) => String(x).trim()).filter(Boolean))]

/**
 * Die Zeilen „Hilft bei“: jede Beschwerde als Link (119.R4). `ziel` kennt die
 * Beschwerden über Id und Schlagwort und die Stichwort-Seiten (119f); was es
 * nicht kennt, bleibt als offene Kante.
 */
function hilftBei(ids, ziel, von) {
  const liste = verweisIds(ids)
  if (!liste.length) return ''
  return '## Hilft bei\n\n' + liste.map((id) => {
    const b = ziel(id)
    return b ? `- [${b.name}](${von}beschwerde/${b.id}.md)` : `- [[${id}]]`
  }).join('\n') + '\n'
}

/** Ein Name aus einer Kennung wie `herzrhythmusstoerungen`: Umlaute zurück, wo sie sicher sind. */
export function anzeigeName(id) {
  const t = String(id).replace(/[_-]+/g, ' ').trim()
    .replace(/(?<![aeiouqc])ae/g, 'ä').replace(/(?<![aeiouc])oe(?!nz)/g, 'ö').replace(/(?<![aeiouqäöü])ue(?!ll)/g, 'ü')
  return t.charAt(0).toUpperCase() + t.slice(1)
}

const foto = (b, i, name) => `![${name}, Foto ${i + 1}](${BASIS}bilder/kraut/${b.datei})\n\nFoto ${i + 1}: ${b.autor}, ${b.lizenz}, [Quelle](${b.quelle})\n`
const mitNachweis = (b) => b && b.datei && b.autor && b.lizenz && b.quelle

/** Bis zu drei Fotos je Kraut; eines ohne Autor, Lizenz oder Quelle fehlt (119f). */
function fotosVon(liste) {
  return (Array.isArray(liste) ? liste : []).filter(mitNachweis).slice(0, 3)
}

/** Übrige Felder in Reihenfolge der Daten; Unbekanntes unter „Weiteres“ (119.R3). */
function uebrige(obj, schon) {
  const bekannt = []
  const fremd = []
  for (const [k, v] of Object.entries(obj)) {
    if (KOPF.has(k) || schon.has(k) || leer(v)) continue
    if (TITEL[k]) bekannt.push(abschnitt(k, v))
    else fremd.push(`### ${k}\n\n${wert(v, 4)}`)
  }
  return [...bekannt, fremd.length ? `## Weiteres\n\n${fremd.join('\n')}` : ''].filter(Boolean)
}

function dokument(kopf, titelZeile, teile, weg) {
  return `${kopfzeile(kopf)}\n# ${titelZeile}\n\n${teile.filter(Boolean).join('\n')}\n${weg ? `## Im Heildepot\n\n[${titelZeile} im Heildepot öffnen](${weg})\n` : ''}`
}

export function dokumentKraut(h, tief, ziel, { fotos = [], kategorie = {} } = {}) {
  const schutz = GESCHUETZT.test(`${h.sammelzeit ?? ''} ${h.anwendung ?? ''}`)
  const bilder = fotosVon(fotos)
  const wirkung = (Array.isArray(h.wirkung) ? h.wirkung : []).map((w) => String(w).trim()).filter((w) => w && !w.includes(','))
  const kopf = {
    art: 'kraut', id: h.id, name: h.name, latein: h.lateinisch, familie: tief?.familie ?? h.familie,
    pflanzenteile: h.pflanzenteile, schutz: schutz ? 'geschützt' : undefined, tags: stichworte(h.tags), quelle: 'heildepot',
    ...kategorieKopf(kategorie), wirkung,
    bild: bilder[0] ? `${BASIS}bilder/kraut/${bilder[0].datei}` : undefined,
    bild_nachweis: bilder[0] ? `${bilder[0].autor}, ${bilder[0].lizenz}` : undefined,
  }
  const schon = new Set(['wirkung', 'anwendung', 'sammelzeit', 'pflanzenteile', ...TRADITIONEN])
  const teile = [
    tief?.vollname && tief.vollname !== h.name ? `*${zeile(tief.vollname)}*\n` : '',
    abschnitt('wirkung', h.wirkung),
    abschnitt('anwendung', h.anwendung),
    abschnitt('sammelzeit', h.sammelzeit),
    abschnitt('pflanzenteile', h.pflanzenteile),
    hilftBei([...(h.symptome ?? []), ...(tief?.besonders_bei ?? [])], ziel, '../'),
    ...uebrige(h, schon),
    ...(tief ? uebrige(tief, new Set([...TRADITIONEN, 'familie'])) : []),
    tief && TRADITIONEN.some((k) => !leer(tief[k])) ? `## Traditionen\n\n${TRADITIONEN.filter((k) => !leer(tief[k])).map((k) => `### ${titel(k)}\n\n${wert(tief[k], 4)}`).join('\n')}` : '',
    h.url ? `## Mehr dazu\n\n- [${h.name} bei der Quelle](${h.url})\n` : '',
    bilder.length ? `## Fotos\n\n${bilder.map((b, i) => foto(b, i, h.name)).join('\n')}` : '',
  ]
  return dokument(kopf, h.name, teile, `${BASIS}#results/${encodeURIComponent(h.name)}`)
}

/** Kategorie der Heildepot-Seite als Kopfzeilen: Titel und Bild (119f). */
function kategorieKopf(k) {
  return { kategorie: k?.titel, kategorie_bild: k?.bild }
}

export function dokumentBeschwerde(c, kraeuter, kategorie = {}) {
  const kopf = { art: 'beschwerde', id: c.id, name: c.name, tags: stichworte(c.tags), quelle: 'heildepot', ...kategorieKopf(kategorie) }
  const kr = Array.isArray(c.kraeuter) && c.kraeuter.length
    ? '## Kräuter\n\n' + c.kraeuter.map((x) => {
      const name = typeof x === 'object' ? x.name : x
      const k = kraeuter.get(falte(name))
      const kopfzeile = k ? `### [${name}](../kraut/${k.id}.md)` : `### ${name}`
      const rest = typeof x === 'object' ? Object.entries(x).filter(([n, w]) => n !== 'name' && !leer(w)).map(([n, w]) => `**${titel(n)}:** ${zeile(w)}\n`).join('\n') : ''
      return `${kopfzeile}\n\n${rest}`
    }).join('\n')
    : ''
  const teile = [abschnitt('koerper', c.koerper), abschnitt('psychosomatik', c.psychosomatik), kr, ...uebrige(c, new Set(['koerper', 'psychosomatik', 'kraeuter']))]
  return dokument(kopf, c.name, teile, `${BASIS}#results/${encodeURIComponent(c.name)}`)
}

export function dokumentRezept(r, tradition, ziel, kategorie = {}) {
  const kopf = { art: 'rezept', id: r.id, name: r.name, tradition, tags: stichworte(r.tags), quelle: 'heildepot', ...kategorieKopf(kategorie), gruppe: r.kategorie }
  const teile = [hilftBei(r.besonders_bei, ziel, '../'), ...uebrige(r, new Set(['kategorie']))]
  return dokument(kopf, r.name, teile, null)
}

/** Ein Thema aus Fasten, Ernährung, Hexenwissen, Sucht, Produkten oder Wissen (119f). Preise bleiben beim Laden. */
export function dokumentThema(x, gruppe, ziel, kategorie = {}) {
  const name = x.name ?? x.title ?? x.titel
  const kopf = { art: 'wissen', id: x.id, name, tags: stichworte(x.tags), quelle: 'heildepot', ...kategorieKopf(kategorie), gruppe: x.kategorie ?? gruppe }
  const teile = [hilftBei(x.besonders_bei, ziel, '../'), ...uebrige(ohnePreis(x), new Set(['kategorie']))]
  return dokument(kopf, name, teile, `${BASIS}#results/${encodeURIComponent(name)}`)
}

function ohnePreis(v) {
  if (Array.isArray(v)) return v.map(ohnePreis)
  if (!v || typeof v !== 'object') return v
  return Object.fromEntries(Object.entries(v).filter(([k]) => k !== 'preis').map(([k, w]) => [k, ohnePreis(w)]))
}

/** Eine Seite für ein Stichwort, auf das Kräuter oder Rezepte zeigen und das keine Beschwerde ist (119f). */
export function dokumentStichwort(id, von, kategorie = {}) {
  const name = anzeigeName(id)
  const kopf = { art: 'beschwerde', id, name, quelle: 'heildepot', ...kategorieKopf(kategorie), gruppe: 'Stichworte aus den Kräutern' }
  const zeilen = (art) => von.filter((v) => v.art === art).map((v) => `- [${v.name}](../${v.pfad})`).join('\n')
  const teile = [
    'Diese Seite sammelt, was im Heildepot zu diesem Stichwort genannt ist.\n',
    zeilen('kraut') ? `## Kräuter\n\n${zeilen('kraut')}\n` : '',
    zeilen('rezept') || zeilen('wissen') ? `## Rezepte und Wissen\n\n${[zeilen('rezept'), zeilen('wissen')].filter(Boolean).join('\n')}\n` : '',
  ]
  return dokument(kopf, name, teile, null)
}

/**
 * Alle Dokumente aus den Daten: Map Pfad → Inhalt. Ein Kraut zählt einmal je Id
 * (die erste Fassung gewinnt, wie im Katalog), ein Rezept mit schon vergebener
 * Id bekommt den Namen seiner Tradition angehängt. `sammlungen` bringt die
 * übrigen Seiten des Heildepots (119f): `{ liste, kategorie, art, gruppe }`.
 * `kategorien` nennt je Kategorie-Id Titel und Bild, `fotos` je Kraut-Id den Nachweis.
 */
export function alleDokumente({ kraeuter = [], tief = {}, beschwerden = [], rezepte = [], sammlungen = [], kategorien = {}, fotos = {} }) {
  const aus = new Map()
  const kat = (id) => kategorien[id] ?? {}
  const bMap = new Map()
  for (const c of beschwerden) if (c?.id && c?.name && !bMap.has(falte(c.id))) bMap.set(falte(c.id), c)
  // Schlagworte einer Beschwerde führen auf sie, wo keine Beschwerde die Id selbst trägt.
  const alias = new Map()
  for (const c of bMap.values()) for (const t of stichworte(c.tags)) if (!bMap.has(falte(t)) && !alias.has(falte(t))) alias.set(falte(t), c)
  const kMap = new Map()
  const tiefMap = new Map(Object.entries(tief).map(([k, v]) => [falte(k), v]))
  for (const h of kraeuter) {
    if (!h?.id || !h?.name || [...kMap.values()].some((x) => x.id === h.id)) continue
    kMap.set(falte(h.name), h)
  }

  // Erst alle Verweise sammeln: wer zeigt auf welches Stichwort.
  const rezeptPfade = []
  for (const { liste, tradition, kategorie = 'hexenwissen' } of rezepte) {
    for (const r of liste ?? []) {
      if (!r?.id || !r?.name) continue
      let pfad = `rezept/${r.id}.md`
      if (rezeptPfade.some((x) => x.pfad === pfad)) pfad = `rezept/${r.id}-${falte(tradition).replace(/[^a-z0-9]+/g, '-')}.md`
      if (rezeptPfade.some((x) => x.pfad === pfad)) continue
      rezeptPfade.push({ pfad, r, tradition, kategorie })
    }
  }
  const themen = []
  for (const { liste, kategorie, art = 'wissen', gruppe } of sammlungen) {
    for (const x of liste ?? []) {
      const name = x?.name ?? x?.title ?? x?.titel
      if (!x?.id || !name) continue
      const ordner = art === 'rezept' ? 'rezept' : 'thema'
      let pfad = `${ordner}/${x.id}.md`
      if (rezeptPfade.some((y) => y.pfad === pfad) || themen.some((y) => y.pfad === pfad)) continue
      themen.push({ pfad, x, art, kategorie, gruppe, name })
    }
  }
  const stich = new Map()
  const bekannt = (id) => bMap.get(falte(id)) ?? alias.get(falte(id))
  const merke = (ids, v) => { for (const id of verweisIds(ids)) if (!bekannt(id)) { const k = falte(id); if (!stich.has(k)) stich.set(k, { id: k.replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, ''), von: [] }); stich.get(k).von.push(v) } }
  for (const h of kMap.values()) merke([...(h.symptome ?? []), ...(tiefMap.get(falte(h.name))?.besonders_bei ?? [])], { art: 'kraut', name: h.name, pfad: `kraut/${h.id}.md` })
  for (const { pfad, r } of rezeptPfade) merke(r.besonders_bei, { art: 'rezept', name: r.name, pfad })
  for (const { pfad, x, art, name } of themen) merke(x.besonders_bei, { art: art === 'rezept' ? 'rezept' : 'wissen', name, pfad })
  for (const s of stich.values()) if (!s.id || bMap.has(s.id)) s.id = null

  const ziel = (id) => {
    const b = bekannt(id)
    if (b) return b
    const s = stich.get(falte(id))
    return s?.id ? { id: s.id, name: anzeigeName(s.id) } : null
  }

  for (const h of kMap.values()) aus.set(`kraut/${h.id}.md`, dokumentKraut(h, tiefMap.get(falte(h.name)), ziel, { fotos: fotos[h.id], kategorie: kat('krauter') }))
  for (const c of bMap.values()) aus.set(`beschwerde/${c.id}.md`, dokumentBeschwerde(c, kMap, kat('krankheitsbilder')))
  for (const s of stich.values()) if (s.id && !aus.has(`beschwerde/${s.id}.md`)) aus.set(`beschwerde/${s.id}.md`, dokumentStichwort(s.id, s.von, kat('krankheitsbilder')))
  for (const { pfad, r, tradition, kategorie } of rezeptPfade) aus.set(pfad, dokumentRezept(r, tradition, ziel, kat(kategorie)))
  for (const { pfad, x, art, kategorie, gruppe } of themen) {
    aus.set(pfad, art === 'rezept' ? dokumentRezept(x, gruppe, ziel, kat(kategorie)) : dokumentThema(x, gruppe, ziel, kat(kategorie)))
  }
  aus.set('LIESMICH.md', liesmich(aus))
  return new Map([...aus.entries()].sort(([a], [b]) => a.localeCompare(b)))
}

function liesmich(aus) {
  const zahl = (art) => [...aus.keys()].filter((p) => p.startsWith(`${art}/`)).length
  return `# Heilwissen des Heildepots

Dieses Verzeichnis entsteht aus den Daten unter \`app/src/data\` mit \`node app/scripts/wissen.mjs\`. Bitte nicht von Hand ändern: Die Prüfung \`node app/scripts/wissen.mjs --pruefen\` meldet jede Abweichung.

Es dient als Quelle \`heildepot\` im Wissensindex des Real Life Network (Forge, DEFINITION Teil 119). Je Kraut, Beschwerde, Rezept und Thema ein Dokument, mit Kopfzeile, Abschnitten und Verweisen.

- Kräuter: ${zahl('kraut')}
- Beschwerden: ${zahl('beschwerde')}
- Rezepte: ${zahl('rezept')}
- Themen (Fasten, Ernährung, Hexenwissen, Sucht, Produkte, Wissen): ${zahl('thema')}

Jedes Dokument trägt in der Kopfzeile die Kategorie der Heildepot-Seite (\`kategorie\`, \`kategorie_bild\`), wo bekannt eine Gruppe (\`gruppe\`), ein Kraut dazu \`wirkung\` und sein erstes Foto (\`bild\`, \`bild_nachweis\`). Die Fotos stammen von Wikimedia Commons, jedes mit Autor, Lizenz und Quelle im Abschnitt „Fotos“.

Die Texte gehören René und dem Heildepot. Eine Lizenz zum Weitergeben wählt René; bis dahin bleiben alle Rechte beim Heildepot.

Das ersetzt keinen Rat von Ärztin, Arzt oder Heilpraktiker.
`
}
