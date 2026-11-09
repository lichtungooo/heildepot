// Schreibt das Heilwissen als Dokumente nach wissen/ (Forge, DEFINITION 119a).
//   node app/scripts/wissen.mjs            schreibt wissen/ neu
//   node app/scripts/wissen.mjs --pruefen  meldet Abweichungen und endet mit 1 (119.R2)
import { mkdirSync, readFileSync, readdirSync, rmSync, writeFileSync, existsSync } from 'node:fs'
import { dirname, join, relative } from 'node:path'
import { fileURLToPath } from 'node:url'
import { alleDokumente } from './wissen-bau.mjs'

const DATEN = fileURLToPath(new URL('../src/data/', import.meta.url))
const ZIEL = fileURLToPath(new URL('../../wissen/', import.meta.url))

async function lade(datei, name) {
  const m = await import(join(DATEN, datei)).catch(() => ({}))
  return m[name]
}

const kraeuter = []
for (const [d, n] of [['herbs.js', 'HERBS'], ['herbs-2.js', 'HERBS_2'], ['herbs-3.js', 'HERBS_3'], ['herbs-4.js', 'HERBS_4'], ['herbs-5.js', 'HERBS_5']]) {
  const l = await lade(d, n)
  if (Array.isArray(l)) kraeuter.push(...l)
}
const tief = {}
for (let i = 1; i <= 18; i++) {
  const d = i === 1 ? 'herb-details.js' : `herb-details-${i}.js`
  const o = await lade(d, i === 1 ? 'HERB_DEEP' : `HERB_DEEP_${i}`)
  if (o && typeof o === 'object') for (const [k, v] of Object.entries(o)) if (!(k in tief)) tief[k] = v
}
const beschwerden = []
for (let i = 1; i <= 7; i++) {
  const l = await lade(`conditions-${i}.js`, `CONDITIONS_${i}`)
  if (Array.isArray(l)) beschwerden.push(...l)
}
const rezepte = [
  { liste: await lade('hexenrezepte.js', 'HEXENREZEPTE'), tradition: 'Hexenwissen' },
  { liste: await lade('hexenrezepte-2.js', 'HEXENREZEPTE_2'), tradition: 'Hexenwissen' },
  { liste: await lade('grimoire-rezepte.js', 'GRIMOIRE_REZEPTE'), tradition: 'Grimoire' },
  { liste: await lade('klostermedizin.js', 'KLOSTERMEDIZIN'), tradition: 'Klostermedizin' },
]

const soll = alleDokumente({ kraeuter, tief, beschwerden, rezepte })

function ist(ordner) {
  const aus = new Map()
  if (!existsSync(ordner)) return aus
  const geh = (d) => {
    for (const e of readdirSync(d, { withFileTypes: true })) {
      const p = join(d, e.name)
      if (e.isDirectory()) geh(p)
      else if (e.name.endsWith('.md')) aus.set(relative(ordner, p).split('\\').join('/'), readFileSync(p, 'utf8'))
    }
  }
  geh(ordner)
  return aus
}

if (process.argv.includes('--pruefen')) {
  const da = ist(ZIEL)
  const fehlt = [...soll.keys()].filter((p) => !da.has(p))
  const zuviel = [...da.keys()].filter((p) => !soll.has(p))
  const anders = [...soll.keys()].filter((p) => da.has(p) && da.get(p) !== soll.get(p))
  if (fehlt.length + zuviel.length + anders.length) {
    console.error(`wissen/ weicht von den Daten ab: ${fehlt.length} fehlen, ${zuviel.length} zu viel, ${anders.length} anders.`)
    for (const p of [...fehlt, ...zuviel, ...anders].slice(0, 20)) console.error(`  ${p}`)
    console.error('Neu erzeugen mit: node app/scripts/wissen.mjs')
    process.exit(1)
  }
  console.log(`wissen/ passt zu den Daten: ${soll.size} Dokumente.`)
} else {
  rmSync(ZIEL, { recursive: true, force: true })
  for (const [p, inhalt] of soll) {
    const datei = join(ZIEL, p)
    mkdirSync(dirname(datei), { recursive: true })
    writeFileSync(datei, inhalt)
  }
  const zahl = (a) => [...soll.keys()].filter((p) => p.startsWith(`${a}/`)).length
  console.log(`wissen/: ${zahl('kraut')} Kräuter, ${zahl('beschwerde')} Beschwerden, ${zahl('rezept')} Rezepte`)
}
