// Die Suche im Wissensindex des Netzwerks (DEFINITION 119c der Forge): Das
// Heildepot fragt die Breite mit der Quelle `heildepot`, ohne Anmeldung, allein
// öffentliches Wissen. Antwortet der Index nicht, bleibt es still, und die Suche
// im Browser trägt allein.

/** Wo der Index antwortet; ein Bau kann ihn mit VITE_WISSEN_INDEX umstellen, leer schaltet ihn ab. */
export const WISSEN_INDEX = import.meta.env?.VITE_WISSEN_INDEX ?? 'https://reallife.network/wissen'

/** Höchstens so lange wartet die Seite auf den Index. */
export const WISSEN_WARTEN_MS = 4000

const ARTEN = { kraut: 'Kraut', beschwerde: 'Beschwerde', rezept: 'Rezept', wissen: 'Wissen' }

/** Markdown in einem Satz Ausschnitt zu lesbarem Text: Betonung, Links und Verweise ohne Zeichen. */
export function schlicht(text = '') {
  return text
    .replace(/!\[[^\]]*\]\([^)]*\)/g, '')
    .replace(/\[\[([^\]|]+)\|([^\]]+)\]\]/g, '$2')
    .replace(/\[\[([^\]]+)\]\]/g, '$1')
    .replace(/\[([^\]]+)\]\([^)]*\)/g, '$1')
    .replace(/\*\*([^*]+)\*\*/g, '$1')
    .replace(/(^|[^\p{L}])[*_]([^*_]+)[*_](?=[^\p{L}]|$)/gu, '$1$2')
    .replace(/\s+/g, ' ')
    .trim()
}

/**
 * Aus der Antwort der Breite die Zeilen für die Seite: je Dokument eine, mit
 * Name, Art, Abschnitt und Ausschnitt. Namen, die die Suche im Browser schon
 * zeigt (`schonDa`, gefaltet), fallen weg, damit nichts doppelt steht.
 */
export function trefferAus(antwort, schonDa = new Set(), falte = (s) => s.toLowerCase()) {
  const zeilen = []
  const gesehen = new Set()
  for (const t of antwort?.treffer ?? []) {
    const tags = t.tags ?? {}
    const name = (Array.isArray(tags.name) ? tags.name[0] : tags.name) || t.titel
    const schluessel = falte(name)
    if (!name || gesehen.has(schluessel) || schonDa.has(schluessel)) continue
    gesehen.add(schluessel)
    const abschnitt = t.titel && falte(t.titel) !== schluessel ? t.titel : ''
    zeilen.push({ kennung: t.kennung, name, art: ARTEN[tags.art] ?? '', abschnitt, ausschnitt: schlicht(t.ausschnitt) })
  }
  return zeilen
}

/** Die Breite fragen. Ohne Adresse, bei Fehler oder nach WISSEN_WARTEN_MS: null. */
export async function wissenFragen(frage, { basis = WISSEN_INDEX, grenze = 8, holen = fetch, warten = WISSEN_WARTEN_MS } = {}) {
  if (!basis || frage.trim().length < 3) return null
  const ab = new AbortController()
  const uhr = setTimeout(() => ab.abort(), warten)
  try {
    const q = new URLSearchParams({ frage: frage.trim(), quelle: 'heildepot', grenze: String(grenze) })
    const r = await holen(`${basis.replace(/\/$/, '')}/breite?${q}`, { signal: ab.signal })
    if (!r.ok) return null
    return await r.json()
  } catch {
    return null
  } finally {
    clearTimeout(uhr)
  }
}
