// Tests zu DEFINITION 119a (Forge): node --test app/scripts/
import { test } from 'node:test'
import assert from 'node:assert/strict'
import { alleDokumente } from './wissen-bau.mjs'

const daten = () => ({
  kraeuter: [
    { id: 'baldrian', name: 'Baldrian', lateinisch: 'Valeriana officinalis', familie: 'Geißblattgewächse', anwendung: 'Als Tee bei Unruhe.', sammelzeit: 'Herbst', pflanzenteile: 'Wurzel', tags: ['#schlaf'], symptome: ['schlaf', 'gibtsnicht'], mondzeichen: 'Krebs' },
    { id: 'baldrian', name: 'Baldrian doppelt' },
    { id: 'arnika', name: 'Arnika', sammelzeit: 'Juni, geschützt' },
  ],
  tief: { Baldrian: { vollname: 'Echter Baldrian', beschreibung: 'Erster Absatz.\n\nZweiter Absatz.', tcm: 'Beruhigt den Shen.' } },
  beschwerden: [{ id: 'schlaf', name: 'Schlafthemen', koerper: 'Der Körper ruht.', kraeuter: [{ name: 'Baldrian', wirkung: 'beruhigt' }, { name: 'Unbekanntkraut' }] }],
  rezepte: [{ liste: [{ id: 'traum', name: 'Traumkissen', zutaten: ['Hopfen'], besonders_bei: ['schlaf'] }], tradition: 'Hexenwissen' }, { liste: [{ id: 'traum', name: 'Traumtee' }], tradition: 'Klostermedizin' }],
})

test('119.R2 zweimal erzeugt ergibt dieselben Dateien', () => {
  const a = alleDokumente(daten())
  const b = alleDokumente(daten())
  assert.deepEqual([...a.entries()], [...b.entries()])
  assert.deepEqual([...a.keys()], ['beschwerde/schlaf.md', 'kraut/arnika.md', 'kraut/baldrian.md', 'LIESMICH.md', 'rezept/traum-klostermedizin.md', 'rezept/traum.md'].sort((x, y) => x.localeCompare(y)))
})

test('119.R2 ein Kraut zählt einmal je Id, die erste Fassung gewinnt', () => {
  const d = alleDokumente(daten()).get('kraut/baldrian.md')
  assert.match(d, /^name: "Baldrian"$/m)
  assert.doesNotMatch(d, /doppelt/)
})

test('119.R3 die Kopfzeile nennt allein Felder mit Wert, unbekannte Felder stehen unter Weiteres', () => {
  const docs = alleDokumente(daten())
  const arnika = docs.get('kraut/arnika.md')
  assert.match(arnika, /^schutz: "geschützt"$/m)
  assert.doesNotMatch(arnika, /^latein:/m)
  assert.doesNotMatch(arnika, /: ""$/m)
  const baldrian = docs.get('kraut/baldrian.md')
  assert.match(baldrian, /^art: "kraut"$/m)
  assert.match(baldrian, /^quelle: "heildepot"$/m)
  assert.match(baldrian, /## Weiteres\n\n### mondzeichen\n\nKrebs/)
  assert.match(baldrian, /Erster Absatz\.\n\nZweiter Absatz\./)
  assert.match(baldrian, /## Traditionen\n\n### TCM\n\nBeruhigt den Shen\./)
})

test('119.R4 bekannte Verweise werden Links, unbekannte bleiben als offene Kante', () => {
  const docs = alleDokumente(daten())
  const baldrian = docs.get('kraut/baldrian.md')
  assert.match(baldrian, /- \[Schlafthemen\]\(\.\.\/beschwerde\/schlaf\.md\)/)
  assert.match(baldrian, /- \[\[gibtsnicht\]\]/)
  const schlaf = docs.get('beschwerde/schlaf.md')
  assert.match(schlaf, /### \[Baldrian\]\(\.\.\/kraut\/baldrian\.md\)/)
  assert.match(schlaf, /### Unbekanntkraut\n/)
  assert.match(docs.get('rezept/traum.md'), /\[Schlafthemen\]\(\.\.\/beschwerde\/schlaf\.md\)/)
})

test('119a jedes Kraut und jede Beschwerde führt zurück ins Heildepot', () => {
  const docs = alleDokumente(daten())
  assert.match(docs.get('kraut/baldrian.md'), /\(https:\/\/heildepot\.wir\.ooo\/#results\/Baldrian\)/)
  assert.match(docs.get('beschwerde/schlaf.md'), /#results\/Schlafthemen\)/)
  assert.match(docs.get('LIESMICH.md'), /ersetzt keinen Rat von Ärztin, Arzt oder Heilpraktiker/)
})
