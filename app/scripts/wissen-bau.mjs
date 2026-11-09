// Das Heilwissen als Dokumente für den Wissensindex (Forge, DEFINITION Teil 119,
// Stufe 119a). Reine Funktionen: aus den Daten des Heildepots wird je Kraut,
// Beschwerde und Rezept ein Markdown-Dokument mit Kopfzeile, Abschnitten und
// Verweisen. Gleiche Daten ergeben dieselben Dateien (119.R2).

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
const KOPF = new Set(['id', 'name', 'lateinisch', 'familie', 'url', 'tags', 'vollname', 'symptome', 'besonders_bei'])
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

/** Die Zeilen „Hilft bei“: bekannte Beschwerden als Link, unbekannte als offene Kante (119.R4). */
function hilftBei(ids, beschwerden, von) {
  const liste = [...new Set((ids ?? []).map((x) => String(x).trim()).filter(Boolean))]
  if (!liste.length) return ''
  return '## Hilft bei\n\n' + liste.map((id) => {
    const b = beschwerden.get(falte(id))
    return b ? `- [${b.name}](${von}beschwerde/${b.id}.md)` : `- [[${id}]]`
  }).join('\n') + '\n'
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

export function dokumentKraut(h, tief, beschwerden) {
  const schutz = GESCHUETZT.test(`${h.sammelzeit ?? ''} ${h.anwendung ?? ''}`)
  const kopf = {
    art: 'kraut', id: h.id, name: h.name, latein: h.lateinisch, familie: tief?.familie ?? h.familie,
    pflanzenteile: h.pflanzenteile, schutz: schutz ? 'geschützt' : undefined, tags: stichworte(h.tags), quelle: 'heildepot',
  }
  const schon = new Set(['wirkung', 'anwendung', 'sammelzeit', 'pflanzenteile', ...TRADITIONEN])
  const teile = [
    tief?.vollname && tief.vollname !== h.name ? `*${zeile(tief.vollname)}*\n` : '',
    abschnitt('wirkung', h.wirkung),
    abschnitt('anwendung', h.anwendung),
    abschnitt('sammelzeit', h.sammelzeit),
    abschnitt('pflanzenteile', h.pflanzenteile),
    hilftBei([...(h.symptome ?? []), ...(tief?.besonders_bei ?? [])], beschwerden, '../'),
    ...uebrige(h, schon),
    ...(tief ? uebrige(tief, new Set([...TRADITIONEN, 'familie'])) : []),
    tief && TRADITIONEN.some((k) => !leer(tief[k])) ? `## Traditionen\n\n${TRADITIONEN.filter((k) => !leer(tief[k])).map((k) => `### ${titel(k)}\n\n${wert(tief[k], 4)}`).join('\n')}` : '',
    h.url ? `## Mehr dazu\n\n- [${h.name} bei der Quelle](${h.url})\n` : '',
  ]
  return dokument(kopf, h.name, teile, `${BASIS}#results/${encodeURIComponent(h.name)}`)
}

export function dokumentBeschwerde(c, kraeuter) {
  const kopf = { art: 'beschwerde', id: c.id, name: c.name, tags: stichworte(c.tags), quelle: 'heildepot' }
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

export function dokumentRezept(r, tradition, beschwerden) {
  const kopf = { art: 'rezept', id: r.id, name: r.name, tradition, kategorie: r.kategorie, tags: stichworte(r.tags), quelle: 'heildepot' }
  const teile = [hilftBei(r.besonders_bei, beschwerden, '../'), ...uebrige(r, new Set(['kategorie']))]
  return dokument(kopf, r.name, teile, null)
}

/**
 * Alle Dokumente aus den Daten: Map Pfad → Inhalt. Ein Kraut zählt einmal je Id
 * (die erste Fassung gewinnt, wie im Katalog), ein Rezept mit schon vergebener
 * Id bekommt den Namen seiner Tradition angehängt.
 */
export function alleDokumente({ kraeuter = [], tief = {}, beschwerden = [], rezepte = [] }) {
  const aus = new Map()
  const bMap = new Map()
  for (const c of beschwerden) if (c?.id && c?.name && !bMap.has(falte(c.id))) bMap.set(falte(c.id), c)
  const kMap = new Map()
  const tiefMap = new Map(Object.entries(tief).map(([k, v]) => [falte(k), v]))
  for (const h of kraeuter) {
    if (!h?.id || !h?.name || [...kMap.values()].some((x) => x.id === h.id)) continue
    kMap.set(falte(h.name), h)
  }
  for (const h of kMap.values()) aus.set(`kraut/${h.id}.md`, dokumentKraut(h, tiefMap.get(falte(h.name)), bMap))
  for (const c of bMap.values()) aus.set(`beschwerde/${c.id}.md`, dokumentBeschwerde(c, kMap))
  for (const { liste, tradition } of rezepte) {
    for (const r of liste ?? []) {
      if (!r?.id || !r?.name) continue
      let pfad = `rezept/${r.id}.md`
      if (aus.has(pfad)) pfad = `rezept/${r.id}-${falte(tradition).replace(/[^a-z0-9]+/g, '-')}.md`
      if (aus.has(pfad)) continue
      aus.set(pfad, dokumentRezept(r, tradition, bMap))
    }
  }
  aus.set('LIESMICH.md', liesmich(aus))
  return new Map([...aus.entries()].sort(([a], [b]) => a.localeCompare(b)))
}

function liesmich(aus) {
  const zahl = (art) => [...aus.keys()].filter((p) => p.startsWith(`${art}/`)).length
  return `# Heilwissen des Heildepots

Dieses Verzeichnis entsteht aus den Daten unter \`app/src/data\` mit \`node app/scripts/wissen.mjs\`. Bitte nicht von Hand ändern: Die Prüfung \`node app/scripts/wissen.mjs --pruefen\` meldet jede Abweichung.

Es dient als Quelle \`heildepot\` im Wissensindex des Real Life Network (Forge, DEFINITION Teil 119). Je Kraut, Beschwerde und Rezept ein Dokument, mit Kopfzeile, Abschnitten und Verweisen.

- Kräuter: ${zahl('kraut')}
- Beschwerden: ${zahl('beschwerde')}
- Rezepte: ${zahl('rezept')}

Die Texte gehören René und dem Heildepot. Eine Lizenz zum Weitergeben wählt René; bis dahin bleiben alle Rechte beim Heildepot.

Das ersetzt keinen Rat von Ärztin, Arzt oder Heilpraktiker.
`
}
