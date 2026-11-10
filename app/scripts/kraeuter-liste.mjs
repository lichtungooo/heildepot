import { join } from 'node:path'
// Gibt die Kräuter als JSON aus (id, name, latein), für scripts/bilder_holen.py.
const D = new URL('../src/data/', import.meta.url).pathname
const aus = [], ids = new Set()
for (const [d, n] of [['herbs.js','HERBS'],['herbs-2.js','HERBS_2'],['herbs-3.js','HERBS_3'],['herbs-4.js','HERBS_4'],['herbs-5.js','HERBS_5']]) {
  const m = await import(join(D, d)).catch(() => ({}))
  for (const h of m[n] || []) if (!ids.has(h.id)) { ids.add(h.id); aus.push({ id: h.id, name: h.name, latein: h.lateinisch || '' }) }
}
console.log(JSON.stringify(aus))
