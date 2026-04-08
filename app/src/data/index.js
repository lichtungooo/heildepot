import { CONDITIONS_1 } from './conditions-1'
import { CONDITIONS_2 } from './conditions-2'
import { CONDITIONS_3 } from './conditions-3'
import { CONDITIONS_4 } from './conditions-4'
import { CONDITIONS_5 } from './conditions-5'
import { CONDITIONS_6 } from './conditions-6'
import { PRODUCTS } from './products'

// Lazy-load optional data modules
let _HERBS = [], _FASTING = [], _NUTRITION = [], _COMPARISONS = [], _TOPICS = []
let _KRAEUTERMISCHUNGEN = [], _SALBEN = [], _TINKTUREN = [], _ALCHEMIE = [], _HEXEN_ANLEITUNGEN = []
let _HEXENREZEPTE = [], _HEXENREZEPTE_2 = []
let _BEWUSSTSEINS_PFLANZEN = []
let _ZIRBELDRUESE_WISSEN = [], _ZIRBELDRUESE_REZEPTE = []
let _ALCHEMIE_DEEP = [], _KLOSTERMEDIZIN = [], _GRIMOIRE_REZEPTE = []
let _CONDITIONS_7 = []

try {
  const h = await import('./herbs.js').catch(() => ({}))
  if (h.HERBS) _HERBS = h.HERBS
} catch(e) {}
try {
  const h2 = await import('./herbs-2.js').catch(() => ({}))
  if (h2.HERBS_2) _HERBS = [..._HERBS, ...h2.HERBS_2]
} catch(e) {}
try {
  const h3 = await import('./herbs-3.js').catch(() => ({}))
  if (h3.HERBS_3) _HERBS = [..._HERBS, ...h3.HERBS_3]
} catch(e) {}
try {
  const h4 = await import('./herbs-4.js').catch(() => ({}))
  if (h4.HERBS_4) _HERBS = [..._HERBS, ...h4.HERBS_4]
} catch(e) {}
try {
  const h5 = await import('./herbs-5.js').catch(() => ({}))
  if (h5.HERBS_5) _HERBS = [..._HERBS, ...h5.HERBS_5]
} catch(e) {}
try {
  const f = await import('./fasting.js').catch(() => ({}))
  if (f.FASTING_METHODS) _FASTING = f.FASTING_METHODS
  if (f.NUTRITION_STYLES) _NUTRITION = f.NUTRITION_STYLES
  if (f.NUTRITION_COMPARISONS) _COMPARISONS = f.NUTRITION_COMPARISONS
} catch(e) {}
try {
  const t = await import('./topics.js').catch(() => ({}))
  if (t.TOPICS) _TOPICS = t.TOPICS
} catch(e) {}
try {
  const hw = await import('./hexenwissen.js').catch(() => ({}))
  if (hw.KRAEUTERMISCHUNGEN) _KRAEUTERMISCHUNGEN = hw.KRAEUTERMISCHUNGEN
  if (hw.SALBEN_REZEPTE) _SALBEN = hw.SALBEN_REZEPTE
  if (hw.TINKTUREN_REZEPTE) _TINKTUREN = hw.TINKTUREN_REZEPTE
  if (hw.ALCHEMIE) _ALCHEMIE = hw.ALCHEMIE
  if (hw.HEXENWISSEN_ANLEITUNGEN) _HEXEN_ANLEITUNGEN = hw.HEXENWISSEN_ANLEITUNGEN
} catch(e) {}
try {
  const hr = await import('./hexenrezepte.js').catch(() => ({}))
  if (hr.HEXENREZEPTE) _HEXENREZEPTE = hr.HEXENREZEPTE
} catch(e) {}
try {
  const hr2 = await import('./hexenrezepte-2.js').catch(() => ({}))
  if (hr2.HEXENREZEPTE_2) _HEXENREZEPTE_2 = hr2.HEXENREZEPTE_2
} catch(e) {}
try {
  const bp = await import('./bewusstseins-pflanzen.js').catch(() => ({}))
  if (bp.BEWUSSTSEINS_PFLANZEN) _BEWUSSTSEINS_PFLANZEN = bp.BEWUSSTSEINS_PFLANZEN
} catch(e) {}
try {
  const zd = await import('./zirbeldruese.js').catch(() => ({}))
  if (zd.ZIRBELDRUESE_WISSEN) _ZIRBELDRUESE_WISSEN = zd.ZIRBELDRUESE_WISSEN
  if (zd.ZIRBELDRUESE_REZEPTE) _ZIRBELDRUESE_REZEPTE = zd.ZIRBELDRUESE_REZEPTE
} catch(e) {}
try {
  const ad = await import('./alchemie-deep.js').catch(() => ({}))
  if (ad.ALCHEMIE_DEEP) _ALCHEMIE_DEEP = ad.ALCHEMIE_DEEP
} catch(e) {}
try {
  const km = await import('./klostermedizin.js').catch(() => ({}))
  if (km.KLOSTERMEDIZIN) _KLOSTERMEDIZIN = km.KLOSTERMEDIZIN
} catch(e) {}
try {
  const gr = await import('./grimoire-rezepte.js').catch(() => ({}))
  if (gr.GRIMOIRE_REZEPTE) _GRIMOIRE_REZEPTE = gr.GRIMOIRE_REZEPTE
} catch(e) {}
try {
  const c7 = await import('./conditions-7.js').catch(() => ({}))
  if (c7.CONDITIONS_7) _CONDITIONS_7 = c7.CONDITIONS_7
} catch(e) {}
let _HERB_DEEP = {}, _HERB_DEEP_2 = {}
try {
  const hd = await import('./herb-details.js').catch(() => ({}))
  if (hd.HERB_DEEP) _HERB_DEEP = hd.HERB_DEEP
} catch(e) {}
try {
  const hd2 = await import('./herb-details-2.js').catch(() => ({}))
  if (hd2.HERB_DEEP_2) _HERB_DEEP_2 = hd2.HERB_DEEP_2
} catch(e) {}
let _HERB_DEEP_3 = {}, _HERB_DEEP_4 = {}, _HERB_DEEP_5 = {}, _HERB_DEEP_6 = {}, _HERB_DEEP_7 = {}, _HERB_DEEP_8 = {}, _HERB_DEEP_9 = {}, _HERB_DEEP_10 = {}, _HERB_DEEP_11 = {}, _HERB_DEEP_12 = {}, _HERB_DEEP_13 = {}, _HERB_DEEP_14 = {}, _HERB_DEEP_15 = {}, _HERB_DEEP_16 = {}, _HERB_DEEP_17 = {}, _HERB_DEEP_18 = {}
try { const m = await import('./herb-details-3.js').catch(() => ({})); if (m.HERB_DEEP_3) _HERB_DEEP_3 = m.HERB_DEEP_3 } catch(e) {}
try { const m = await import('./herb-details-4.js').catch(() => ({})); if (m.HERB_DEEP_4) _HERB_DEEP_4 = m.HERB_DEEP_4 } catch(e) {}
try { const m = await import('./herb-details-5.js').catch(() => ({})); if (m.HERB_DEEP_5) _HERB_DEEP_5 = m.HERB_DEEP_5 } catch(e) {}
try { const m = await import('./herb-details-6.js').catch(() => ({})); if (m.HERB_DEEP_6) _HERB_DEEP_6 = m.HERB_DEEP_6 } catch(e) {}
try { const m = await import('./herb-details-7.js').catch(() => ({})); if (m.HERB_DEEP_7) _HERB_DEEP_7 = m.HERB_DEEP_7 } catch(e) {}
try { const m = await import('./herb-details-8.js').catch(() => ({})); if (m.HERB_DEEP_8) _HERB_DEEP_8 = m.HERB_DEEP_8 } catch(e) {}
try { const m = await import('./herb-details-9.js').catch(() => ({})); if (m.HERB_DEEP_9) _HERB_DEEP_9 = m.HERB_DEEP_9 } catch(e) {}
try { const m = await import('./herb-details-10.js').catch(() => ({})); if (m.HERB_DEEP_10) _HERB_DEEP_10 = m.HERB_DEEP_10 } catch(e) {}
try { const m = await import('./herb-details-11.js').catch(() => ({})); if (m.HERB_DEEP_11) _HERB_DEEP_11 = m.HERB_DEEP_11 } catch(e) {}
try { const m = await import('./herb-details-12.js').catch(() => ({})); if (m.HERB_DEEP_12) _HERB_DEEP_12 = m.HERB_DEEP_12 } catch(e) {}
try { const m = await import('./herb-details-13.js').catch(() => ({})); if (m.HERB_DEEP_13) _HERB_DEEP_13 = m.HERB_DEEP_13 } catch(e) {}
try { const m = await import('./herb-details-14.js').catch(() => ({})); if (m.HERB_DEEP_14) _HERB_DEEP_14 = m.HERB_DEEP_14 } catch(e) {}
try { const m = await import('./herb-details-15.js').catch(() => ({})); if (m.HERB_DEEP_15) _HERB_DEEP_15 = m.HERB_DEEP_15 } catch(e) {}
try { const m = await import('./herb-details-16.js').catch(() => ({})); if (m.HERB_DEEP_16) _HERB_DEEP_16 = m.HERB_DEEP_16 } catch(e) {}
try { const m = await import('./herb-details-17.js').catch(() => ({})); if (m.HERB_DEEP_17) _HERB_DEEP_17 = m.HERB_DEEP_17 } catch(e) {}
try { const m = await import('./herb-details-18.js').catch(() => ({})); if (m.HERB_DEEP_18) _HERB_DEEP_18 = m.HERB_DEEP_18 } catch(e) {}

let _SUCHTFORMEN = [], _HEILANSAETZE_SUCHT = []
try {
  const s = await import('./sucht-heilung.js').catch(() => ({}))
  if (s.SUCHTFORMEN) _SUCHTFORMEN = s.SUCHTFORMEN
  if (s.HEILANSAETZE_SUCHT) _HEILANSAETZE_SUCHT = s.HEILANSAETZE_SUCHT
} catch(e) {}

export const ALL_CONDITIONS = [...CONDITIONS_1, ...CONDITIONS_2, ...CONDITIONS_3, ...CONDITIONS_4, ...CONDITIONS_5, ...CONDITIONS_6, ..._CONDITIONS_7]
export { PRODUCTS }
export const HERBS = _HERBS
export const FASTING_METHODS = _FASTING
export const NUTRITION_STYLES = _NUTRITION
export const NUTRITION_COMPARISONS = _COMPARISONS
export const TOPICS = _TOPICS
export const KRAEUTERMISCHUNGEN = _KRAEUTERMISCHUNGEN
export const SALBEN_REZEPTE = _SALBEN
export const TINKTUREN_REZEPTE = _TINKTUREN
export const ALCHEMIE = _ALCHEMIE
export const HEXENWISSEN_ANLEITUNGEN = _HEXEN_ANLEITUNGEN
export const HEXENREZEPTE = [..._HEXENREZEPTE, ..._HEXENREZEPTE_2]
export const BEWUSSTSEINS_PFLANZEN = _BEWUSSTSEINS_PFLANZEN
export const ZIRBELDRUESE_WISSEN = _ZIRBELDRUESE_WISSEN
export const ZIRBELDRUESE_REZEPTE = _ZIRBELDRUESE_REZEPTE
export const ALCHEMIE_DEEP = _ALCHEMIE_DEEP
export const KLOSTERMEDIZIN = _KLOSTERMEDIZIN
export const GRIMOIRE_REZEPTE = _GRIMOIRE_REZEPTE
// Build HERB_DEEP with name-mapping for mismatched keys
const _HERB_DEEP_RAW = { ..._HERB_DEEP, ..._HERB_DEEP_2, ..._HERB_DEEP_3, ..._HERB_DEEP_4, ..._HERB_DEEP_5, ..._HERB_DEEP_6, ..._HERB_DEEP_7, ..._HERB_DEEP_8, ..._HERB_DEEP_9, ..._HERB_DEEP_10, ..._HERB_DEEP_11, ..._HERB_DEEP_12, ..._HERB_DEEP_13, ..._HERB_DEEP_14, ..._HERB_DEEP_15, ..._HERB_DEEP_16, ..._HERB_DEEP_17, ..._HERB_DEEP_18 }
const _HERB_NAME_MAP = {
  'Weissdorn': 'Weißdorn', 'Beifuss': 'Beifuß', 'Echinacea': 'Sonnenhut (Echinacea)',
  'Aloe': 'Aloe Vera', 'Sonnenhut': 'Sonnenhut (Echinacea)', 'Süssholz': 'Süßholz',
  'Oregano': 'Dost (Wilder Oregano)', 'Erdbeere': 'Walderdbeere', 'Goji': 'Goji-Beere',
  'Katzenkralle': "Katzenkralle (Cat's Claw)", 'Mais': 'Mais (Maisbart)', 'Mandel': 'Mandelbaum',
  'Olive': 'Olivenblatt', 'Quendel': 'Quendel (Wilder Thymian)', 'Rhabarber': 'Rhabarber (Medizinischer)',
  'Schachtelhalm': 'Ackerschachtelhalm (Zinnkraut)', 'Schlehe': 'Schlehe (Schwarzdorn)',
  'Tragant': 'Tragant (Astragalus)', 'Tulsi': 'Tulsi (Heiliges Basilikum)',
  'Mucuna': 'Mucuna (Juckbohne)', 'Reishi': 'Reishi (Glänzender Lackporling)',
  'Baobab': 'Baobab (Affenbrotbaum)', 'Schwarznessel': 'Schwarznessel (Ballota)',
  'Schisandra': 'Schisandra (Wu Wei Zi)', 'Rose': 'Rose (Damaszenerrose)',
  'Klee': 'Rotklee',
}
// Add mapped entries so HERB_DEEP["Weißdorn"] works as well as HERB_DEEP["Weissdorn"]
Object.entries(_HERB_NAME_MAP).forEach(([oldKey, newKey]) => {
  if (_HERB_DEEP_RAW[oldKey] && !_HERB_DEEP_RAW[newKey]) {
    _HERB_DEEP_RAW[newKey] = _HERB_DEEP_RAW[oldKey]
  }
})
export const HERB_DEEP = _HERB_DEEP_RAW

// Helper: find deep herb data by any name variant (fuzzy)
export function getHerbDeep(name) {
  if (!name) return null
  // Direct match
  if (_HERB_DEEP_RAW[name]) return _HERB_DEEP_RAW[name]
  // Normalize: ss<->ß, case-insensitive
  const normalized = name.toLowerCase()
  const withSS = normalized.replace(/ß/g, 'ss')
  const withSZ = normalized.replace(/ss/g, 'ß')
  for (const key of Object.keys(_HERB_DEEP_RAW)) {
    const kl = key.toLowerCase()
    if (kl === normalized || kl === withSS || kl === withSZ) return _HERB_DEEP_RAW[key]
    // Partial match: "Weißdorn" should find "Weissdorn" entry
    if (kl.includes(normalized) || normalized.includes(kl)) return _HERB_DEEP_RAW[key]
  }
  return null
}

export const SUCHTFORMEN = _SUCHTFORMEN
export const HEILANSAETZE_SUCHT = _HEILANSAETZE_SUCHT

// Build search index for conditions
export const CONDITION_INDEX = ALL_CONDITIONS.map(c => {
    const blob = [
        c.name, c.id, ...(c.tags || []),
        c.koerper || '', c.psychosomatik?.zitat || '', c.psychosomatik?.text || '',
        ...Object.values(c.traditionen || {}),
        ...(c.kraeuter || []).map(k => k.name + ' ' + k.wirkung),
        ...(c.stoffe || []).map(s => s.name + ' ' + s.wirkung),
        c.ernaehrung?.empfehlung || '', ...(c.ernaehrung?.staerkend || []),
        c.fasten?.text || '', ...(c.fasten?.formen || []),
        c.bewegung?.text || '', ...(c.bewegung?.praktiken || []),
        c.geist?.einheit || '', ...(c.geist?.affirmationen || []), c.geist?.meditation || '', c.geist?.energie || '',
    ].join(' ').toLowerCase()
    return { condition: c, blob }
})

// Build search index for products
export const PRODUCT_INDEX = PRODUCTS.map(p => {
    const blob = [p.name, p.desc || '', p.wirkung || '', p.kategorie || '', ...(p.tags || []), ...(p.symptome || [])].join(' ').toLowerCase()
    return { product: p, blob }
})

// Search functions
export function searchConditions(query) {
    const terms = query.toLowerCase().replace(/#/g, '').split(/\s+/).filter(t => t.length > 1)
    const results = []
    CONDITION_INDEX.forEach(item => {
        let score = 0
        terms.forEach(term => {
            if (item.condition.name.toLowerCase().includes(term)) score += 10
            if (item.condition.id.includes(term)) score += 10
            if ((item.condition.tags || []).some(t => t.replace('#','').includes(term))) score += 8
            if ((item.condition.kraeuter || []).some(k => k.name.toLowerCase().includes(term))) score += 6
            if ((item.condition.stoffe || []).some(s => s.name.toLowerCase().includes(term))) score += 6
            if (item.blob.includes(term)) score += 2
        })
        if (score > 0) results.push({ condition: item.condition, score })
    })
    results.sort((a, b) => b.score - a.score)
    return results
}

export function searchProducts(query) {
    const terms = query.toLowerCase().replace(/#/g, '').split(/\s+/).filter(t => t.length > 1)
    const results = []
    PRODUCT_INDEX.forEach(item => {
        let score = 0
        terms.forEach(term => {
            if (item.product.name.toLowerCase().includes(term)) score += 15
            if ((item.product.kategorie || '').toLowerCase().includes(term)) score += 8
            if ((item.product.tags || []).some(t => t.replace('#','').includes(term))) score += 6
            if (item.blob.includes(term)) score += 2
        })
        if (score > 0) results.push({ product: item.product, score })
    })
    results.sort((a, b) => b.score - a.score)
    return results
}

export function searchHerbs(query) {
    const terms = query.toLowerCase().replace(/#/g, '').split(/\s+/).filter(t => t.length > 1)
    return _HERBS.filter(h => {
        const deep = getHerbDeep(h.name)
        const blob = [
            h.name, h.id, h.lateinisch || '', h.familie || '',
            ...(h.wirkung || []), h.anwendung || '', ...(h.tags || []),
            deep?.vollname || '', deep?.beschreibung || '', deep?.geschichte || '',
            ...(deep?.wirkungen?.hauptwirkungen || []),
            ...(deep?.wirkungen?.inhaltsstoffe || []),
            ...(deep?.mischungen || []),
        ].join(' ').toLowerCase()
        return terms.some(t => blob.includes(t))
    }).map(h => {
        let score = 0
        const deep = getHerbDeep(h.name)
        terms.forEach(t => {
            // Exakter Namens-Match bekommt höchsten Score
            if (h.name.toLowerCase() === t) score += 25
            else if (h.name.toLowerCase().includes(t)) score += 18
            if (h.id === t) score += 20
            if ((h.wirkung || []).some(w => w.toLowerCase().includes(t))) score += 8
            if ((h.tags || []).some(tag => tag.replace('#','').includes(t))) score += 6
            if ((deep?.wirkungen?.hauptwirkungen || []).some(w => w.toLowerCase().includes(t))) score += 5
            if ((deep?.beschreibung || '').toLowerCase().includes(t)) score += 3
        })
        return { herb: h, score }
    }).sort((a, b) => b.score - a.score)
}

export function searchFasting(query) {
    const terms = query.toLowerCase().replace(/#/g, '').split(/\s+/).filter(t => t.length > 1)
    return _FASTING.filter(f => {
        const blob = [f.name, f.kategorie, f.beschreibung, f.wirkung, ...(f.tags || [])].join(' ').toLowerCase()
        return terms.some(t => blob.includes(t))
    }).map(f => {
        let score = 0
        terms.forEach(t => {
            if (f.name.toLowerCase().includes(t)) score += 15
            if (f.kategorie.toLowerCase().includes(t)) score += 8
            if ((f.tags || []).some(tag => tag.replace('#','').includes(t))) score += 6
        })
        return { fasting: f, score }
    }).sort((a, b) => b.score - a.score)
}

export function searchNutrition(query) {
    const terms = query.toLowerCase().replace(/#/g, '').split(/\s+/).filter(t => t.length > 1)
    return _NUTRITION.filter(n => {
        const blob = [n.name, n.beschreibung || '', n.prinzip || '', ...(n.tags || [])].join(' ').toLowerCase()
        return terms.some(t => blob.includes(t))
    }).map(n => {
        let score = 0
        terms.forEach(t => {
            if (n.name.toLowerCase().includes(t)) score += 15
            if ((n.tags || []).some(tag => tag.replace('#','').includes(t))) score += 6
        })
        return { nutrition: n, score }
    }).sort((a, b) => b.score - a.score)
}

export function searchTopics(query) {
    const terms = query.toLowerCase().replace(/#/g, '').split(/\s+/).filter(t => t.length > 1)
    return _TOPICS.filter(t => {
        const blob = [t.name, t.kurz || '', ...(t.tags || []), t.inhalt?.einfuehrung || ''].join(' ').toLowerCase()
        return terms.some(term => blob.includes(term))
    }).map(t => {
        let score = 0
        terms.forEach(term => {
            if (t.name.toLowerCase().includes(term)) score += 15
            if ((t.tags || []).some(tag => tag.replace('#','').includes(term))) score += 8
            if ((t.kurz || '').toLowerCase().includes(term)) score += 4
        })
        return { topic: t, score }
    }).sort((a, b) => b.score - a.score)
}

export function searchHexenwissen(query) {
    const terms = query.toLowerCase().replace(/#/g, '').split(/\s+/).filter(t => t.length > 1)
    const all = [
        ..._KRAEUTERMISCHUNGEN.map(x => ({...x, _type: 'mischung'})),
        ..._SALBEN.map(x => ({...x, _type: 'salbe'})),
        ..._TINKTUREN.map(x => ({...x, _type: 'tinktur'})),
        ..._ALCHEMIE.map(x => ({...x, _type: 'alchemie'})),
        ..._HEXEN_ANLEITUNGEN.map(x => ({...x, _type: 'anleitung'})),
        ..._HEXENREZEPTE.map(x => ({...x, _type: 'hexenrezept'})),
        ..._HEXENREZEPTE_2.map(x => ({...x, _type: 'hexenrezept'})),
        ..._BEWUSSTSEINS_PFLANZEN.map(x => ({...x, _type: 'bewusstsein'})),
        ..._ZIRBELDRUESE_WISSEN.map(x => ({...x, _type: 'zirbeldruese'})),
        ..._ZIRBELDRUESE_REZEPTE.map(x => ({...x, _type: 'zirbeldruese-rezept'})),
        ..._ALCHEMIE_DEEP.map(x => ({...x, _type: 'alchemie-deep'})),
        ..._KLOSTERMEDIZIN.map(x => ({...x, _type: 'klostermedizin'})),
        ..._GRIMOIRE_REZEPTE.map(x => ({...x, _type: 'grimoire'})),
    ]
    return all.filter(item => {
        const blob = [item.name, item.kategorie || '', item.beschreibung || '', item.hintergrund || '', item.geheimtipp || '', item.inhalt || '', ...(item.tags || []), ...(item.besonders_bei || []), ...(item.kernpunkte || [])].join(' ').toLowerCase()
        return terms.some(t => blob.includes(t))
    }).map(item => {
        let score = 0
        terms.forEach(t => {
            if (item.name.toLowerCase().includes(t)) score += 15
            if ((item.kategorie || '').toLowerCase().includes(t)) score += 8
            if ((item.tags || []).some(tag => tag.replace('#','').includes(t))) score += 6
        })
        return { item, score }
    }).sort((a, b) => b.score - a.score)
}

export function searchSucht(query) {
    const terms = query.toLowerCase().replace(/#/g, '').split(/\s+/).filter(t => t.length > 1)
    const results = []
    _SUCHTFORMEN.forEach(s => {
        const blob = [s.name, s.id, s.beschreibung || '', ...(s.tags || []),
            ...(s.heilwege || []).map(h => h.name + ' ' + (h.beschreibung || ''))
        ].join(' ').toLowerCase()
        let score = 0
        terms.forEach(t => {
            if (s.name.toLowerCase().includes(t)) score += 15
            if (s.id.includes(t)) score += 10
            if ((s.tags || []).some(tag => tag.replace('#','').includes(t))) score += 8
            if (blob.includes(t)) score += 3
        })
        if (score > 0) results.push({ sucht: s, score })
    })
    _HEILANSAETZE_SUCHT.forEach(h => {
        const blob = [h.name, h.id, h.beschreibung || '', ...(h.tags || [])].join(' ').toLowerCase()
        let score = 0
        terms.forEach(t => {
            if (h.name.toLowerCase().includes(t)) score += 15
            if ((h.tags || []).some(tag => tag.replace('#','').includes(t))) score += 8
            if (blob.includes(t)) score += 3
        })
        if (score > 0) results.push({ sucht: h, score })
    })
    results.sort((a, b) => b.score - a.score)
    return results
}

export function getProductsForCondition(conditionId) {
    return PRODUCTS.filter(p => p.symptome.includes(conditionId))
}
