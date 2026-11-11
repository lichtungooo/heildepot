// Tests zur Suche im Wissensindex (DEFINITION 119c der Forge).
import { test } from 'node:test'
import assert from 'node:assert/strict'
import { schlicht, trefferAus, wissenFragen } from '../src/data/wissen-index.js'

const ANTWORT = {
  ms: 7,
  treffer: [
    { kennung: 'heildepot:wissen/beschwerde/schlaf.md#schlaf', titel: 'Schlaf', tags: { art: 'beschwerde', name: 'Schlaf' }, ausschnitt: '**Kräuter:** [[baldrian|Baldrian]], *Melisse*' },
    { kennung: 'heildepot:wissen/kraut/baldrian.md#anwendung', titel: 'Anwendung', tags: { art: 'kraut', name: 'Baldrian' }, ausschnitt: 'Als Tee bei [Einschlafstörungen](../beschwerde/einschlafprobleme.md).' },
    { kennung: 'heildepot:wissen/kraut/baldrian.md#wirkung', titel: 'Wirkung', tags: { art: 'kraut', name: 'Baldrian' }, ausschnitt: 'beruhigend' },
    { kennung: 'heildepot:wissen/kraut/hopfen.md#hopfen', titel: 'Hopfen', tags: { art: 'kraut', name: 'Hopfen' }, ausschnitt: '' },
  ],
}

test('119c je Dokument eine Zeile, mit Art und Abschnitt, Markdown ohne Zeichen', () => {
  const z = trefferAus(ANTWORT)
  assert.deepEqual(z.map((x) => x.name), ['Schlaf', 'Baldrian', 'Hopfen'])
  assert.equal(z[0].ausschnitt, 'Kräuter: Baldrian, Melisse')
  assert.equal(z[1].abschnitt, 'Anwendung')
  assert.equal(z[1].art, 'Kraut')
  assert.equal(z[2].abschnitt, '')
})

test('119c was die Suche im Browser schon zeigt, steht nicht doppelt', () => {
  assert.deepEqual(trefferAus(ANTWORT, new Set(['baldrian'])).map((x) => x.name), ['Schlaf', 'Hopfen'])
})

test('119c fragt allein die Quelle heildepot und bleibt still, wenn der Index nicht antwortet', async () => {
  let adresse = ''
  const antwort = await wissenFragen('kann nicht schlafen', { basis: 'https://index.test/wissen/', holen: async (u) => { adresse = u; return { ok: true, json: async () => ANTWORT } } })
  assert.equal(antwort, ANTWORT)
  assert.match(adresse, /^https:\/\/index\.test\/wissen\/breite\?frage=kann\+nicht\+schlafen&quelle=heildepot&grenze=8$/)
  assert.equal(await wissenFragen('Baldrian', { basis: 'x', holen: async () => { throw new Error('weg') } }), null)
  assert.equal(await wissenFragen('Baldrian', { basis: 'x', holen: async () => ({ ok: false }) }), null)
  assert.equal(await wissenFragen('ab', { basis: 'x', holen: async () => assert.fail('fragt nicht') }), null)
  assert.equal(await wissenFragen('Baldrian', { basis: '' }), null)
})

test('119c schlicht lässt Bilder weg und behält Wörter mit Unterstrich', () => {
  assert.equal(schlicht('![Foto](a.webp) Tee _warm_ trinken, magen_darm bleibt'), 'Tee warm trinken, magen_darm bleibt')
})
