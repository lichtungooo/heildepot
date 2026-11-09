import { useEffect, useState } from 'react'
import { ShoppingBag, User, BookOpen, Package } from 'lucide-react'
import { SearchBox } from './SearchBox'

export function Logo({ hell = false }) {
  return (
    <span className="flex items-center gap-2.5">
      <svg width="30" height="30" viewBox="0 0 100 100" aria-hidden="true">
        <rect x="30" y="8" width="40" height="84" rx="16" fill="#7dab5a" />
        <rect x="8" y="30" width="84" height="40" rx="16" fill="#7dab5a" />
      </svg>
      <span
        className={`text-[1.05rem] font-semibold hidden sm:block ${hell ? 'text-white' : 'text-green-light'}`}
        style={{ letterSpacing: '0.14em' }}
      >
        HEILDEPOT
      </span>
    </span>
  )
}

export function Header({ query, onSearch, onHome, cartCount, onCartOpen, onUserOpen, user, onLexikon, onProdukte, collapsed }) {
  const startseite = !collapsed
  const [gescrollt, setGescrollt] = useState(false)

  useEffect(() => {
    const f = () => setGescrollt(window.scrollY > 40)
    f()
    window.addEventListener('scroll', f, { passive: true })
    return () => window.removeEventListener('scroll', f)
  }, [])

  // Auf der Startseite liegt der Kopf durchsichtig über der Bühne, bis gescrollt wird
  const ueberBuehne = startseite && !gescrollt
  const knopf = `flex items-center gap-1.5 rounded-full px-2.5 py-2 text-sm font-medium transition-colors ${
    ueberBuehne ? 'text-white/90 hover:bg-white/15 hover:text-white' : 'text-text-medium hover:bg-green-bg hover:text-green-dark'}`

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-[background,box-shadow,border-color] duration-300 ${
        ueberBuehne ? 'bg-transparent border-b border-transparent' : 'bg-paper/90 backdrop-blur-md border-b border-green-pale/70 shadow-[0_1px_12px_-6px_rgba(0,0,0,0.15)]'}`}
      style={{ paddingTop: 'env(safe-area-inset-top, 0px)' }}
    >
      <div className="max-w-6xl mx-auto px-4 h-16 flex items-center gap-3 sm:gap-5">
        <button onClick={onHome} className="shrink-0 hover:opacity-80 transition-opacity" aria-label="Zur Startseite">
          <Logo hell={ueberBuehne} />
        </button>

        <div className="flex-1 min-w-0 max-w-xl">
          {!startseite && <SearchBox key={query} wert={query} onSearch={onSearch} />}
          {startseite && gescrollt && <SearchBox onSearch={onSearch} />}
        </div>

        <nav className="flex items-center gap-0.5 shrink-0 ml-auto" aria-label="Hauptnavigation">
          <button onClick={onLexikon} className={knopf} title="Lexikon">
            <BookOpen size={18} />
            <span className="hidden md:inline">Lexikon</span>
          </button>
          <button onClick={onProdukte} className={knopf} title="Aus dem Depot">
            <Package size={18} />
            <span className="hidden md:inline">Depot</span>
          </button>
          <button onClick={onUserOpen} className={`${knopf} relative`} title={user ? user.benutzername : 'Anmelden'} aria-label={user ? `Profil ${user.benutzername}` : 'Anmelden'}>
            <User size={18} />
            {user && <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-gold rounded-full ring-2 ring-paper" />}
          </button>
          <button onClick={onCartOpen} className={`${knopf} relative`} title="Anfrage" aria-label={`Anfrage, ${cartCount} Teile`}>
            <ShoppingBag size={18} />
            {cartCount > 0 && (
              <span className="absolute -top-0.5 -right-0.5 bg-rose text-white text-[10px] font-bold rounded-full min-w-[18px] h-[18px] px-1 flex items-center justify-center">
                {cartCount}
              </span>
            )}
          </button>
        </nav>
      </div>
    </header>
  )
}
