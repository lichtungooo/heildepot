import { useEffect, useState } from 'react'

// Bis zu drei Fotos je Kraut aus public/bilder/kraut/ (scripts/bilder_holen.py).
// Der Nachweis liegt je Kraut als JSON daneben und lädt erst, wenn das Kraut offen ist.
const geladen = new Map()

function nachweisLaden(id) {
  if (!geladen.has(id)) {
    geladen.set(id, fetch(`/bilder/kraut/${id}.json`).then(r => (r.ok ? r.json() : [])).catch(() => []))
  }
  return geladen.get(id)
}

// Fotos desselben Fotografen unter derselben Lizenz stehen im Nachweis einmal, mit Nummern als Links.
function gruppen(bilder) {
  const aus = []
  bilder.forEach((b, i) => {
    const schluessel = `${b.autor}|${b.lizenz}`
    let g = aus.find(x => x.schluessel === schluessel)
    if (!g) aus.push((g = { schluessel, autor: b.autor, lizenz: b.lizenz, bilder: [] }))
    g.bilder.push({ ...b, nr: i + 1 })
  })
  return aus
}

export function KrautBilder({ id, name }) {
  const [bilder, setBilder] = useState([])
  useEffect(() => {
    let aktiv = true
    if (id) nachweisLaden(id).then(b => { if (aktiv) setBilder(Array.isArray(b) ? b : []) })
    return () => { aktiv = false }
  }, [id])
  if (!bilder.length) return null
  return (
    <figure className="mb-3">
      <div className="grid grid-cols-3 gap-1.5">
        {bilder.map((b, i) => (
          <img
            key={b.datei}
            src={`/bilder/kraut/${b.datei}`}
            alt={`${name}, Foto ${i + 1}`}
            width="400"
            height="300"
            loading="lazy"
            decoding="async"
            className="w-full aspect-[4/3] object-cover rounded-lg bg-green-pale"
          />
        ))}
      </div>
      <figcaption className="text-[11px] text-text-muted mt-1 leading-snug">
        Fotos:{' '}
        {gruppen(bilder).map((g, gi) => (
          <span key={g.schluessel}>
            {gi > 0 && ' · '}
            {g.autor} ({g.lizenz}){' '}
            {g.bilder.map(b => (
              <a key={b.datei} href={b.quelle} target="_blank" rel="noopener noreferrer" className="underline underline-offset-2 hover:text-green-main mr-1">
                {b.nr}
              </a>
            ))}
          </span>
        ))}
        Wikimedia Commons
      </figcaption>
    </figure>
  )
}
