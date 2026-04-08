import { useState, useRef } from 'react'
import { Search, ShoppingCart, User, BookOpen, Package, Hash, Leaf, Clock, Utensils, BookOpenCheck, FlaskConical, HeartHandshake } from 'lucide-react'
import { ALL_CONDITIONS, HERBS, FASTING_METHODS, NUTRITION_STYLES, TOPICS, KRAEUTERMISCHUNGEN, SALBEN_REZEPTE, TINKTUREN_REZEPTE, ALCHEMIE, SUCHTFORMEN } from '../data'

export function Header({ query, onSearch, onHome, cartCount, onCartOpen, onUserOpen, user, onLexikon, onProdukte, collapsed }) {
  const [localQuery, setLocalQuery] = useState(query || '')
  const [showDropdown, setShowDropdown] = useState(false)
  const inputRef = useRef(null)

  function handleSubmit(e) {
    e.preventDefault()
    if (localQuery.trim().length >= 2) {
      onSearch(localQuery.trim())
      setShowDropdown(false)
      inputRef.current?.blur()
    }
  }

  function handleChange(e) {
    const val = e.target.value
    setLocalQuery(val)
    // Only show dropdown, do NOT trigger search
    setShowDropdown(val.trim().length >= 1)
  }

  function selectSuggestion(name) {
    setLocalQuery(name)
    setShowDropdown(false)
    onSearch(name)
    inputRef.current?.blur()
  }

  // Build autocomplete results from ALL categories
  const q = localQuery.trim().toLowerCase()
  const suggestions = q.length >= 1 ? [
    // Ernährung
    ...(NUTRITION_STYLES || []).filter(n =>
      n.name.toLowerCase().includes(q) || (n.tags || []).some(t => t.replace('#','').toLowerCase().includes(q))
    ).slice(0, 2).map(n => ({ type: 'Ernährung', name: n.name, icon: Utensils })),
    // Fasten
    ...(FASTING_METHODS || []).filter(f =>
      f.name.toLowerCase().includes(q) || (f.tags || []).some(t => t.replace('#','').toLowerCase().includes(q))
    ).slice(0, 2).map(f => ({ type: 'Fasten', name: f.name, icon: Clock })),
    // Topics
    ...(TOPICS || []).filter(t =>
      t.name.toLowerCase().includes(q) || (t.tags || []).some(tag => tag.replace('#','').toLowerCase().includes(q))
    ).slice(0, 2).map(t => ({ type: 'Wissen', name: t.name, icon: BookOpenCheck })),
    // Hexenwissen
    ...[...(KRAEUTERMISCHUNGEN || []), ...(SALBEN_REZEPTE || []), ...(TINKTUREN_REZEPTE || []), ...(ALCHEMIE || [])].filter(x =>
      x.name.toLowerCase().includes(q) || (x.tags || []).some(tag => tag.replace('#','').toLowerCase().includes(q))
    ).slice(0, 2).map(x => ({ type: 'Hexenwissen', name: x.name, icon: FlaskConical })),
    // Sucht
    ...(SUCHTFORMEN || []).filter(s =>
      s.name.toLowerCase().includes(q) || (s.tags || []).some(t => t.replace('#','').toLowerCase().includes(q))
    ).slice(0, 2).map(s => ({ type: 'Sucht-Heilung', name: s.name, icon: HeartHandshake })),
    // Kräuter
    ...(HERBS || []).filter(h =>
      h.name.toLowerCase().includes(q) || (h.tags || []).some(t => t.replace('#','').toLowerCase().includes(q))
    ).slice(0, 3).map(h => ({ type: 'Kraut', name: h.name, icon: Leaf })),
    // Krankheitsbilder
    ...ALL_CONDITIONS.filter(c =>
      c.name.toLowerCase().includes(q) || c.id.includes(q) || c.tags.some(t => t.replace('#','').toLowerCase().includes(q))
    ).slice(0, 4).map(c => ({ type: 'Beschwerde', name: c.name, icon: Hash })),
  ].slice(0, 10) : []

  const isLanding = !collapsed

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 ${isLanding ? 'bg-white/90 backdrop-blur-sm border-b border-green-pale/50' : 'bg-white/95 backdrop-blur-sm border-b border-green-pale shadow-sm'}`}>
      <div className="max-w-6xl mx-auto px-4 py-2.5 flex items-center gap-3">
        {/* Logo / Home */}
        <button
          onClick={onHome}
          className="flex items-center gap-2 shrink-0 group"
        >
          <svg width="32" height="32" viewBox="0 0 100 100">
            <rect x="30" y="8" width="40" height="84" rx="16" fill="#7dab5a" />
            <rect x="8" y="30" width="84" height="40" rx="16" fill="#7dab5a" />
          </svg>
          <span className="text-lg font-medium hidden sm:block group-hover:opacity-80 transition-opacity" style={{letterSpacing: '0.06em', color: '#7dab5a'}}>
            HEILDEPOT
          </span>
        </button>

        {/* Search bar — ALWAYS visible */}
        <div className="flex-1 max-w-xl relative">
          <form onSubmit={handleSubmit}>
            <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-text-muted z-10" />
            <input
              ref={inputRef}
              type="text"
              value={localQuery}
              onChange={handleChange}
              onFocus={() => { if (localQuery.trim().length >= 1) setShowDropdown(true) }}
              onBlur={() => setTimeout(() => setShowDropdown(false), 200)}
              placeholder="Beschwerden, Kräuter, Produkte suchen..."
              className="w-full pl-9 pr-4 py-2 rounded-full bg-green-pale/50 border border-green-pale text-sm text-text-dark placeholder:text-text-muted focus:outline-none focus:border-green-main focus:bg-white transition-all"
            />
          </form>

          {/* Autocomplete dropdown */}
          {showDropdown && suggestions.length > 0 && (
            <div className="absolute top-full left-0 right-0 mt-1 bg-white border border-green-pale rounded-xl shadow-lg overflow-hidden z-50">
              {suggestions.map((item, i) => {
                const Icon = item.icon
                return (
                  <button
                    key={`${item.type}-${item.name}-${i}`}
                    onMouseDown={() => selectSuggestion(item.name)}
                    className="w-full text-left px-4 py-2.5 hover:bg-green-pale/50 transition-colors border-b border-green-pale/30 last:border-0 flex items-center gap-3"
                  >
                    <Icon size={14} className="text-green-main shrink-0" />
                    <div className="min-w-0 flex-1">
                      <span className="text-sm text-text-dark">{item.name}</span>
                    </div>
                    <span className="text-[10px] text-text-muted px-1.5 py-0.5 rounded bg-green-pale/50 shrink-0">
                      {item.type}
                    </span>
                  </button>
                )
              })}
            </div>
          )}
        </div>

        {/* Right actions */}
        <div className="flex items-center gap-1.5 shrink-0">
          <button
            onClick={onLexikon}
            className="flex items-center gap-1 text-text-light hover:text-green-main transition-colors text-sm p-1.5"
            title="Lexikon"
          >
            <BookOpen size={18} />
            <span className="hidden lg:inline text-xs">Lexikon</span>
          </button>
          <button
            onClick={onProdukte}
            className="flex items-center gap-1 text-text-light hover:text-green-main transition-colors text-sm p-1.5"
            title="Produkte"
          >
            <Package size={18} />
            <span className="hidden lg:inline text-xs">Produkte</span>
          </button>
          <button
            onClick={onUserOpen}
            className={`relative transition-colors text-sm p-1.5 ${user ? 'text-green-main' : 'text-text-light hover:text-green-main'}`}
            title={user ? user.benutzername : 'Anmelden'}
          >
            <User size={18} />
            {user && (
              <span className="absolute -top-0.5 -right-0.5 w-2.5 h-2.5 bg-green-main rounded-full border-2 border-white" />
            )}
          </button>
          <button
            onClick={onCartOpen}
            className="relative text-text-light hover:text-green-main transition-colors p-1.5"
            title="Warenkorb"
          >
            <ShoppingCart size={18} />
            {cartCount > 0 && (
              <span className="absolute -top-0.5 -right-0.5 bg-green-main text-white text-[10px] font-bold rounded-full w-4 h-4 flex items-center justify-center">
                {cartCount}
              </span>
            )}
          </button>
        </div>
      </div>
    </header>
  )
}
