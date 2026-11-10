// Tests zu DEFINITION 119a und 119f (Forge): node --test app/scripts/
import { test } from 'node:test'
import assert from 'node:assert/strict'
import { alleDokumente, anzeigeName } from './wissen-bau.mjs'

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
  assert.deepEqual([...a.keys()], ['beschwerde/gibtsnicht.md', 'beschwerde/schlaf.md', 'kraut/arnika.md', 'kraut/baldrian.md', 'LIESMICH.md', 'rezept/traum-klostermedizin.md', 'rezept/traum.md'].sort((x, y) => x.localeCompare(y)))
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

test('119.R4 bekannte Verweise werden Links, ein Kraut, das die Daten nicht kennen, bleibt Text', () => {
  const docs = alleDokumente(daten())
  const baldrian = docs.get('kraut/baldrian.md')
  assert.match(baldrian, /- \[Schlafthemen\]\(\.\.\/beschwerde\/schlaf\.md\)/)
  assert.match(baldrian, /- \[Gibtsnicht\]\(\.\.\/beschwerde\/gibtsnicht\.md\)/)
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

// 119f: das ganze Heildepot als Bereich, mit Kategorie, Wirkung und Fotos.
const mehr = () => ({
  ...daten(),
  kraeuter: [{ id: 'baldrian', name: 'Baldrian', wirkung: ['beruhigend', 'schlaf, tief'], symptome: ['schlafprobleme', 'uebelkeit'] }, { id: 'ingwer', name: 'Ingwer', symptome: ['uebelkeit'] }],
  beschwerden: [{ id: 'schlaf', name: 'Schlafthemen', tags: ['schlafprobleme'] }],
  kategorien: { krauter: { titel: 'Heilkräuter', bild: 'https://heildepot.wir.ooo/bilder/krauter-800.webp' }, krankheitsbilder: { titel: 'Krankheitsbilder' }, fasten: { titel: 'Fasten & Reinigung' }, produkte: { titel: 'Aus dem Depot' } },
  fotos: { baldrian: [
    { datei: 'baldrian-1.webp', autor: 'AnRo0002', lizenz: 'CC0', quelle: 'https://commons.wikimedia.org/wiki/File:A.jpg' },
    { datei: 'baldrian-2.webp', autor: 'Jemand', lizenz: '', quelle: 'https://commons.wikimedia.org/wiki/File:B.jpg' },
  ] },
  sammlungen: [
    { liste: [{ id: 'wasserfasten', name: 'Wasserfasten', kategorie: 'Große Fastenformen', besonders_bei: ['uebelkeit'] }], kategorie: 'fasten', gruppe: 'Fasten' },
    { liste: [{ id: 'cbd', name: 'CBD-Öl', varianten: [{ menge: '10ml', preis: 22 }], preis: 22 }], kategorie: 'produkte', gruppe: 'Aus dem Depot' },
  ],
})

test('119f jedes Dokument trägt die Kategorie seiner Heildepot-Seite, ein Thema dazu seine Gruppe', () => {
  const docs = alleDokumente(mehr())
  assert.match(docs.get('kraut/baldrian.md'), /^kategorie: "Heilkräuter"$/m)
  assert.match(docs.get('kraut/baldrian.md'), /^kategorie_bild: "https:\/\/heildepot\.wir\.ooo\/bilder\/krauter-800\.webp"$/m)
  assert.match(docs.get('beschwerde/schlaf.md'), /^kategorie: "Krankheitsbilder"$/m)
  const fasten = docs.get('thema/wasserfasten.md')
  assert.match(fasten, /^art: "wissen"$/m)
  assert.match(fasten, /^kategorie: "Fasten & Reinigung"$/m)
  assert.match(fasten, /^gruppe: "Große Fastenformen"$/m)
})

test('119f ein Kraut trägt seine Wirkungen als Liste, eine Wirkung mit Komma bleibt draußen', () => {
  assert.match(alleDokumente(mehr()).get('kraut/baldrian.md'), /^wirkung: \["beruhigend"\]$/m)
})

test('119f jedes Foto steht mit Autor, Lizenz und Quelle, eines ohne Lizenz fehlt', () => {
  const b = alleDokumente(mehr()).get('kraut/baldrian.md')
  assert.match(b, /^bild: "https:\/\/heildepot\.wir\.ooo\/bilder\/kraut\/baldrian-1\.webp"$/m)
  assert.match(b, /^bild_nachweis: "AnRo0002, CC0"$/m)
  assert.match(b, /Foto 1: AnRo0002, CC0, \[Quelle\]\(https:\/\/commons\.wikimedia\.org\/wiki\/File:A\.jpg\)/)
  assert.doesNotMatch(b, /baldrian-2\.webp/)
  assert.doesNotMatch(alleDokumente(mehr()).get('kraut/ingwer.md'), /^bild:/m)
})

test('119f ein Schlagwort einer Beschwerde führt auf sie, ein übriges Stichwort bekommt eine Seite mit allen, die darauf zeigen', () => {
  const docs = alleDokumente(mehr())
  assert.match(docs.get('kraut/baldrian.md'), /- \[Schlafthemen\]\(\.\.\/beschwerde\/schlaf\.md\)/)
  assert.equal(docs.has('beschwerde/schlafprobleme.md'), false)
  const ue = docs.get('beschwerde/uebelkeit.md')
  assert.match(ue, /^name: "Übelkeit"$/m)
  assert.match(ue, /- \[Baldrian\]\(\.\.\/kraut\/baldrian\.md\)\n- \[Ingwer\]\(\.\.\/kraut\/ingwer\.md\)/)
  assert.match(ue, /## Rezepte und Wissen\n\n- \[Wasserfasten\]\(\.\.\/thema\/wasserfasten\.md\)/)
  assert.doesNotMatch([...docs.values()].join('\n'), /\[\[(uebelkeit|schlafprobleme)\]\]/)
})

test('119f Preise bleiben beim Laden, das Produkt steht ohne sie im Wissen', () => {
  const cbd = alleDokumente(mehr()).get('thema/cbd.md')
  assert.match(cbd, /10ml/)
  assert.doesNotMatch(cbd, /preis|22/i)
})

test('119f Namen aus Kennungen bekommen ihre Umlaute zurück, wo sie sicher sind', () => {
  assert.equal(anzeigeName('herzrhythmusstoerungen'), 'Herzrhythmusstörungen')
  assert.equal(anzeigeName('uebersaeuerung'), 'Übersäuerung')
  assert.equal(anzeigeName('vitamin_c_mangel'), 'Vitamin c mangel')
  assert.equal(anzeigeName('feuer'), 'Feuer')
  assert.equal(anzeigeName('aktuell'), 'Aktuell')
  assert.equal(anzeigeName('coenzym'), 'Coenzym')
})
