import { useEffect, useState } from 'react'
import { Sprout, ChevronRight } from 'lucide-react'
import { falte } from '../data'
import { trefferAus, wissenFragen } from '../data/wissen-index'

// Treffer aus dem Wissensindex unter den eigenen (119c): findet auch andere
// Wortformen und Tippfehler. Ein Tipp sucht den Namen im Depot. Antwortet der
// Index nicht, zeigt der Block nichts. `schonDa` trägt die gefalteten Namen,
// die die Suche im Browser schon zeigt, je Zeile einer.
export function WissenTreffer({ query, schonDa, onSearch }) {
  const [stand, setStand] = useState({ frage: '', zeilen: [] })
  useEffect(() => {
    let aus = false
    wissenFragen(query).then((antwort) => {
      if (!aus) setStand({ frage: query, zeilen: antwort ? trefferAus(antwort, new Set(schonDa.split('\n')), falte) : [] })
    })
    return () => { aus = true }
  }, [query, schonDa])
  const zeilen = stand.frage === query ? stand.zeilen : []
  if (!zeilen.length) return null
  return (
    <div className="mb-8">
      <h2 className="flex items-center gap-2 text-lg font-semibold text-green-dark mb-1">
        <Sprout size={18} /> Verwandt im Wissen
      </h2>
      <p className="text-xs text-text-muted mb-3">Auch mit anderen Wortformen gefunden.</p>
      <div className="space-y-2">
        {zeilen.map((z) => (
          <button key={z.kennung} onClick={() => onSearch(z.name)}
            className="w-full text-left bg-white rounded-xl border border-green-pale p-4 hover:shadow-md hover:border-green-light transition-all group flex items-center justify-between gap-3">
            <div className="min-w-0">
              <h3 className="font-semibold text-text-dark group-hover:text-green-main transition-colors">{z.name}</h3>
              {z.ausschnitt && <p className="text-sm text-text-muted mt-0.5 line-clamp-2">{z.ausschnitt}</p>}
              {z.art && <span className="inline-block mt-1.5 text-xs px-2 py-0.5 rounded-full bg-green-pale/50 text-text-muted">{z.art}</span>}
            </div>
            <ChevronRight size={16} className="text-text-muted group-hover:text-green-main shrink-0" />
          </button>
        ))}
      </div>
    </div>
  )
}
