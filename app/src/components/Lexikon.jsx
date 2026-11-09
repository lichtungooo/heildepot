import { ArrowLeft, ArrowRight } from 'lucide-react'
import { KATEGORIEN, bildPfad, bildSrcSet } from '../data/kategorien'

export function Lexikon({ onSearch, onBack, onCategory }) {
  function wahl(k) {
    if (k.aktion === 'category') onCategory?.(k.ziel)
    else if (k.aktion === 'produkte') onCategory?.('produkte')
    else if (k.aktion === 'search') onSearch(k.suche)
  }

  return (
    <div className="pt-24 max-w-6xl mx-auto px-4 pb-20">
      <button
        onClick={onBack}
        className="inline-flex items-center gap-1.5 text-sm text-text-light hover:text-green-dark transition-colors mb-6"
      >
        <ArrowLeft size={16} /> Zurück
      </button>
      <p className="text-gold text-xs font-semibold uppercase mb-2" style={{ letterSpacing: '0.16em' }}>Lexikon</p>
      <h1 className="text-4xl sm:text-5xl text-green-dark">Das ganze Wissen auf einen Blick</h1>
      <p className="text-text-light mt-3 mb-10 max-w-xl">Acht Kammern voller Erfahrung. Wähle eine und tauche ein.</p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {KATEGORIEN.map(k => {
          const anzahl = k.anzahl()
          return (
            <button
              key={k.id}
              onClick={() => wahl(k)}
              className="bild-kachel group text-left rounded-2xl overflow-hidden bg-paper border border-green-pale hover:shadow-xl hover:-translate-y-0.5 transition-all"
            >
              <div className="aspect-[4/3] overflow-hidden bg-green-pale">
                <img
                  src={bildPfad(k.bild)}
                  srcSet={bildSrcSet(k.bild)}
                  sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                  alt=""
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-5">
                <div className="flex items-baseline justify-between gap-2">
                  <h3 className="text-lg text-green-dark group-hover:text-green-main transition-colors">{k.titel}</h3>
                  {anzahl > 0 && <span className="text-xs text-text-muted shrink-0">{anzahl}</span>}
                </div>
                <p className="text-sm text-text-light leading-relaxed mt-1.5">{k.text}</p>
                <span className="mt-3 inline-flex items-center gap-1.5 text-sm font-medium text-gold group-hover:gap-2.5 transition-all">
                  Öffnen <ArrowRight size={14} />
                </span>
              </div>
            </button>
          )
        })}
      </div>
    </div>
  )
}
