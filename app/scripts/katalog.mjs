// Der Katalog des Heildepots für den Marktplatz im Real Life Network (Forge,
// DEFINITION 101k, Regel 101.R48): je Kraut Id, Name, lateinischer Name, der
// Weg ins Heildepot und bei geschützten Arten ein Satz zur Sammelregel.
// Läuft vor jedem Bau und schreibt public/katalog.json aus den eigenen Daten.
import { writeFileSync } from 'node:fs'
import { fileURLToPath } from 'node:url'
// Dieselben Dateien und dieselbe Reihenfolge wie src/data/index.js.
const DATEIEN = [['herbs.js', 'HERBS'], ['herbs-2.js', 'HERBS_2'], ['herbs-3.js', 'HERBS_3'], ['herbs-4.js', 'HERBS_4'], ['herbs-5.js', 'HERBS_5']]
const HERBS = []
for (const [datei, name] of DATEIEN) {
  const m = await import(`../src/data/${datei}`).catch(() => ({}))
  if (Array.isArray(m[name])) HERBS.push(...m[name])
}

const BASIS = 'https://heildepot.wir.ooo/'
const GESCHUETZT = /geschützt/i

const gesehen = new Set()
const eintraege = []
for (const h of HERBS) {
  if (!h?.id || !h?.name || gesehen.has(h.id)) continue
  gesehen.add(h.id)
  const geschuetzt = GESCHUETZT.test(`${h.sammelzeit ?? ''} ${h.anwendung ?? ''}`)
  eintraege.push({
    id: h.id,
    name: h.name,
    ...(h.lateinisch ? { latein: h.lateinisch } : {}),
    url: `${BASIS}#results/${encodeURIComponent(h.name)}`,
    ...(geschuetzt ? { schutz: `${h.name} steht unter Schutz. Bitte nicht wild sammeln, biete sie allein aus eigenem Anbau an.` } : {}),
  })
}
eintraege.sort((a, b) => a.name.localeCompare(b.name, 'de'))
const ziel = fileURLToPath(new URL('../public/katalog.json', import.meta.url))
writeFileSync(ziel, JSON.stringify({ name: 'Heildepot', quelle: `${BASIS}katalog.json`, eintraege }) + '\n')
console.log(`katalog.json: ${eintraege.length} Kräuter, ${eintraege.filter((e) => e.schutz).length} geschützt`)
