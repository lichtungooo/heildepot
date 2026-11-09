import { useState, useRef, useId } from 'react'
import { Search, Hash, Leaf, Clock, Utensils, BookOpenCheck, FlaskConical, HeartHandshake, ArrowRight } from 'lucide-react'
import { ALL_CONDITIONS, HERBS, FASTING_METHODS, NUTRITION_STYLES, TOPICS, KRAEUTERMISCHUNGEN, SALBEN_REZEPTE, TINKTUREN_REZEPTE, ALCHEMIE, SUCHTFORMEN, falte } from '../data'

// Vorschläge aus allen Bereichen, Umlaute gefaltet
function vorschlaege(eingabe) {
  const q = falte(eingabe.trim())
  if (!q) return []
  const passt = x => falte(x.name).includes(q) || (x.tags || []).some(t => falte(t.replace('#', '')).includes(q)) || (x.id && falte(x.id).includes(q))
  return [
    ...ALL_CONDITIONS.filter(passt).slice(0, 4).map(c => ({ typ: 'Beschwerde', name: c.name, icon: Hash })),
    ...(HERBS || []).filter(passt).slice(0, 3).map(h => ({ typ: 'Kraut', name: h.name, icon: Leaf })),
    ...(NUTRITION_STYLES || []).filter(passt).slice(0, 2).map(n => ({ typ: 'Ernährung', name: n.name, icon: Utensils })),
    ...(FASTING_METHODS || []).filter(passt).slice(0, 2).map(f => ({ typ: 'Fasten', name: f.name, icon: Clock })),
    ...(TOPICS || []).filter(passt).slice(0, 2).map(t => ({ typ: 'Wissen', name: t.name, icon: BookOpenCheck })),
    ...[...(KRAEUTERMISCHUNGEN || []), ...(SALBEN_REZEPTE || []), ...(TINKTUREN_REZEPTE || []), ...(ALCHEMIE || [])].filter(passt).slice(0, 2).map(x => ({ typ: 'Hexenwissen', name: x.name, icon: FlaskConical })),
    ...(SUCHTFORMEN || []).filter(passt).slice(0, 2).map(s => ({ typ: 'Sucht', name: s.name, icon: HeartHandshake })),
  ].slice(0, 9)
}

/**
 * Suchfeld mit Vorschlägen. groesse: 'gross' (Bühne der Startseite) oder 'klein' (Kopfzeile).
 */
export function SearchBox({ wert = '', onSearch, groesse = 'klein', autoFocus = false }) {
  const [eingabe, setEingabe] = useState(wert)
  const [offen, setOffen] = useState(false)
  const [aktiv, setAktiv] = useState(-1)
  const feld = useRef(null)
  const listId = useId()
  const liste = offen ? vorschlaege(eingabe) : []
  const gross = groesse === 'gross'

  function suchen(text) {
    const t = text.trim()
    if (t.length < 2) return
    setEingabe(t)
    setOffen(false)
    setAktiv(-1)
    feld.current?.blur()
    onSearch(t)
  }

  function taste(e) {
    if (!liste.length) return
    if (e.key === 'ArrowDown') { e.preventDefault(); setAktiv(a => (a + 1) % liste.length) }
    else if (e.key === 'ArrowUp') { e.preventDefault(); setAktiv(a => (a <= 0 ? liste.length - 1 : a - 1)) }
    else if (e.key === 'Escape') { setOffen(false); setAktiv(-1) }
    else if (e.key === 'Enter' && aktiv >= 0) { e.preventDefault(); suchen(liste[aktiv].name) }
  }

  return (
    <div className="relative w-full">
      <form onSubmit={e => { e.preventDefault(); suchen(eingabe) }} role="search">
        <Search
          size={gross ? 22 : 16}
          className={`absolute top-1/2 -translate-y-1/2 text-text-muted pointer-events-none ${gross ? 'left-5' : 'left-3.5'}`}
        />
        <input
          ref={feld}
          type="search"
          value={eingabe}
          autoFocus={autoFocus}
          onChange={e => { setEingabe(e.target.value); setOffen(e.target.value.trim().length >= 1); setAktiv(-1) }}
          onFocus={() => eingabe.trim() && setOffen(true)}
          onBlur={() => setTimeout(() => setOffen(false), 150)}
          onKeyDown={taste}
          placeholder={gross ? 'Kraut oder Beschwerde …' : 'Suchen …'}
          aria-label="Im Heildepot suchen"
          aria-autocomplete="list"
          aria-controls={listId}
          aria-expanded={liste.length > 0}
          enterKeyHint="search"
          className={gross
            ? 'w-full pl-14 pr-32 py-4 sm:py-5 rounded-2xl bg-paper/95 text-base sm:text-lg text-ink placeholder:text-text-muted shadow-[0_20px_60px_-20px_rgba(0,0,0,0.5)] border border-white/40 focus:outline-none focus:ring-4 focus:ring-gold/30 [&::-webkit-search-cancel-button]:hidden'
            : 'w-full pl-10 pr-4 py-2 rounded-full bg-green-bg border border-transparent text-sm text-ink placeholder:text-text-muted focus:outline-none focus:border-green-light focus:bg-paper transition-colors [&::-webkit-search-cancel-button]:hidden'}
        />
        {gross && (
          <button
            type="submit"
            className="absolute right-2.5 top-1/2 -translate-y-1/2 inline-flex items-center gap-2 px-4 sm:px-5 py-2.5 sm:py-3 rounded-xl bg-green-dark text-white text-sm font-semibold hover:bg-green-main transition-colors"
          >
            Finden <ArrowRight size={16} />
          </button>
        )}
      </form>

      {liste.length > 0 && (
        <ul
          id={listId}
          role="listbox"
          className={`absolute left-0 right-0 bg-paper border border-green-pale rounded-2xl shadow-xl overflow-hidden z-50 text-left ${gross ? 'mt-2' : 'mt-1.5'}`}
        >
          {liste.map((v, i) => {
            const Icon = v.icon
            return (
              <li key={`${v.typ}-${v.name}-${i}`} role="option" aria-selected={i === aktiv}>
                <button
                  type="button"
                  onMouseDown={e => { e.preventDefault(); suchen(v.name) }}
                  onMouseEnter={() => setAktiv(i)}
                  className={`w-full px-4 py-3 flex items-center gap-3 text-left transition-colors ${i === aktiv ? 'bg-green-bg' : ''}`}
                >
                  <Icon size={15} className="text-green-light shrink-0" />
                  <span className="text-sm text-ink flex-1 min-w-0 truncate">{v.name}</span>
                  <span className="text-[11px] text-text-muted shrink-0">{v.typ}</span>
                </button>
              </li>
            )
          })}
        </ul>
      )}
    </div>
  )
}
