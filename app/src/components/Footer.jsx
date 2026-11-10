import { useState } from 'react'
import { X } from 'lucide-react'
import { Logo } from './Header'
import QUELLEN from '../data/bildquellen.json'

const NAMEN = {
  buehne: 'Bühne', krankheitsbilder: 'Krankheitsbilder', krauter: 'Heilkräuter', fasten: 'Fasten & Reinigung',
  ernaehrung: 'Ernährung', hexenwissen: 'Hexenwissen & Alchemie', sucht: 'Sucht ist heilbar', produkte: 'Aus dem Depot',
}

const name = k => {
  const [grund, nr] = k.split(/-(?=\d$)/)
  return (NAMEN[grund] || grund) + (nr ? `, Foto ${nr}` : '')
}

function Bildnachweis({ onClose }) {
  return (
    <div className="fixed inset-0 z-[60] bg-black/50 backdrop-blur-sm flex items-end sm:items-center justify-center p-0 sm:p-4" onClick={onClose}>
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="bildnachweis-titel"
        className="bg-paper w-full sm:max-w-lg max-h-[85vh] overflow-y-auto rounded-t-3xl sm:rounded-3xl p-6 sm:p-8"
        onClick={e => e.stopPropagation()}
      >
        <div className="flex items-start justify-between mb-4">
          <h2 id="bildnachweis-titel" className="text-2xl text-green-dark">Bildnachweis</h2>
          <button onClick={onClose} className="p-1.5 rounded-full hover:bg-green-bg" aria-label="Schließen"><X size={20} /></button>
        </div>
        <p className="text-sm text-text-light mb-5">Alle Fotografien stammen von Wikimedia Commons und stehen unter freien Lizenzen. Danke an die Fotografen. Die Fotos der Kräuter nennen ihren Nachweis direkt unter dem Bild.</p>
        <ul className="space-y-4">
          {Object.entries(QUELLEN).map(([k, q]) => (
            <li key={k} className="text-sm border-t border-green-pale pt-3">
              <p className="font-semibold text-green-dark">{name(k)}</p>
              <p className="text-text-medium">{q.autor || 'unbekannt'} · {q.lizenz}</p>
              <a href={q.quelle} target="_blank" rel="noopener noreferrer" className="text-green-main underline underline-offset-2 break-all text-xs">
                {q.titel}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export function Footer({ onFreunde, onVersand, onLexikon }) {
  const [nachweis, setNachweis] = useState(false)
  const link = 'hover:text-white transition-colors text-left'
  return (
    <footer className="bg-ink text-white/60 mt-10">
      <div className="max-w-6xl mx-auto px-4 py-12 grid gap-10 sm:grid-cols-[2fr_1fr_1fr]">
        <div>
          <Logo hell />
          <p className="text-sm mt-4 max-w-sm leading-relaxed">
            Erfahrungswissen aus Volksmedizin, Klosterheilkunde, TCM und Ayurveda, geteilt unter Freunden.
            Es ergänzt den Rat von Arzt und Heilpraktiker.
          </p>
        </div>
        <nav className="flex flex-col gap-2 text-sm" aria-label="Wissen">
          <p className="text-white font-semibold mb-1">Wissen</p>
          <button onClick={onLexikon} className={link}>Lexikon</button>
          <button onClick={() => setNachweis(true)} className={link}>Bildnachweis</button>
        </nav>
        <nav className="flex flex-col gap-2 text-sm" aria-label="Der Kreis">
          <p className="text-white font-semibold mb-1">Der Kreis</p>
          <button onClick={onFreunde} className={link}>Unter Freunden</button>
          <button onClick={onVersand} className={link}>Versand & Anfragen</button>
          <button onClick={onFreunde} className={link}>Datenschutz</button>
        </nav>
      </div>
      <div className="border-t border-white/10">
        <p className="max-w-6xl mx-auto px-4 py-5 text-xs">Heildepot · von Freund zu Freund</p>
      </div>
      {nachweis && <Bildnachweis onClose={() => setNachweis(false)} />}
    </footer>
  )
}
