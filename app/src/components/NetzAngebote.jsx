import { useEffect, useState } from 'react'
import { MapPin, Store } from 'lucide-react'

// Angebote aus dem Marktplatz des Real Life Network zu einem Kraut (Forge,
// DEFINITION 101k). Die Adresse des Netzwerks kommt aus VITE_NETZ_KATALOG.
// Ohne Adresse oder ohne Antwort steht nichts da, das Kraut bleibt vollständig.
const NETZ = import.meta.env.VITE_NETZ_KATALOG || ''
const QUELLE = 'https://heildepot.wir.ooo/katalog.json'
let anfrage = null

function angeboteHolen() {
  if (!NETZ) return Promise.resolve({})
  if (!anfrage) {
    const url = `${NETZ}${NETZ.includes('?') ? '&' : '?'}quelle=${encodeURIComponent(QUELLE)}`
    anfrage = fetch(url, { headers: { accept: 'application/json' } })
      .then(r => (r.ok ? r.json() : {}))
      .then(j => (j && typeof j.angebote === 'object' ? j.angebote : {}))
      .catch(() => ({}))
  }
  return anfrage
}

const sicher = u => (typeof u === 'string' && /^https:\/\//.test(u) ? u : null)

export function NetzAngebote({ krautId }) {
  const [liste, setListe] = useState([])
  useEffect(() => {
    let aktiv = true
    angeboteHolen().then(a => { if (aktiv) setListe(Array.isArray(a[krautId]) ? a[krautId].slice(0, 6) : []) })
    return () => { aktiv = false }
  }, [krautId])
  if (!liste.length) return null
  return (
    <div className="mt-4 rounded-xl border border-green-pale bg-paper p-3">
      <p className="flex items-center gap-1.5 text-xs font-semibold text-green-dark uppercase mb-2" style={{ letterSpacing: '0.12em' }}>
        <Store size={14} /> Im Netzwerk erhältlich
      </p>
      <ul className="space-y-1.5">
        {liste.map(a => {
          const link = sicher(a.link)
          const inhalt = (
            <>
              <span className="font-medium text-green-dark">{a.title}</span>
              <span className="text-text-light"> · {a.preis}</span>
              {a.ort && <span className="inline-flex items-center gap-0.5 text-text-muted text-xs ml-2"><MapPin size={12} />{a.ort}</span>}
              {a.marktstand && <span className="block text-xs text-text-muted">{a.marktstand}</span>}
            </>
          )
          return <li key={a.id} className="text-sm">{link ? <a href={link} target="_blank" rel="noreferrer" className="hover:underline">{inhalt}</a> : inhalt}</li>
        })}
      </ul>
      <p className="mt-2 text-xs text-text-muted">Angebote von Menschen aus dem Real Life Network. Ihr tauscht und übergebt direkt.</p>
    </div>
  )
}
