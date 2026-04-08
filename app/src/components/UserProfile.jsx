import { useState, useEffect } from 'react'
import { X, User, LogOut, Heart, Clock, ChevronRight, Eye, EyeOff, MapPin, Mail } from 'lucide-react'
import { apiRegister, apiLogin, apiLogout, apiGetProfile, apiUpdateProfile, apiGetAnfragen, isLoggedIn } from '../api'

const STORAGE_KEY = 'heildepot_user'

export function getUser() {
  try { return JSON.parse(localStorage.getItem(STORAGE_KEY) || 'null') }
  catch { return null }
}

export function saveUser(user) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(user))
}

export function addOrder(order) {
  // Orders now saved server-side via API — this is a local fallback
  const orders = JSON.parse(localStorage.getItem('heildepot_orders') || '[]')
  orders.unshift({ ...order, id: Date.now(), datum: new Date().toLocaleDateString('de-DE') })
  localStorage.setItem('heildepot_orders', JSON.stringify(orders.slice(0, 50)))
}

export function UserProfileDrawer({ open, onClose, user, onLogin, onLogout, favorites, products, onToggleFavorite, onSelectProduct }) {
  const [mode, setMode] = useState(user ? 'profile' : 'login') // login | register | profile
  const [showPw, setShowPw] = useState(false)
  const [form, setForm] = useState({ email: '', passwort: '', benutzername: '', vorname: '', nachname: '', strasse: '', plz: '', ort: '', land: 'DE', telefon: '' })
  const [error, setError] = useState('')
  const [activeTab, setActiveTab] = useState('profil') // profil | favoriten | anfragen
  const [loading, setLoading] = useState(false)
  const [orders, setOrders] = useState([])
  const [ordersLoaded, setOrdersLoaded] = useState(false)

  // Load orders from API when profile tab opens
  useEffect(() => {
    if (open && user && activeTab === 'anfragen' && !ordersLoaded) {
      apiGetAnfragen().then(data => { setOrders(data); setOrdersLoaded(true) }).catch(() => {
        const local = JSON.parse(localStorage.getItem('heildepot_orders') || '[]')
        setOrders(local)
        setOrdersLoaded(true)
      })
    }
  }, [open, user, activeTab, ordersLoaded])

  if (!open) return null

  function update(key, val) { setForm(f => ({ ...f, [key]: val })) }

  async function handleLogin(e) {
    e.preventDefault()
    setError('')
    setLoading(true)
    try {
      const data = await apiLogin(form.email, form.passwort)
      const u = { ...data.user, benutzername: data.user.email.split('@')[0] }
      onLogin(u)
      setMode('profile')
    } catch (err) {
      setError(err.message || 'E-Mail oder Passwort falsch.')
    }
    setLoading(false)
  }

  async function handleRegister(e) {
    e.preventDefault()
    setError('')
    if (!form.email || !form.passwort) {
      setError('Bitte E-Mail und Passwort eingeben.')
      return
    }
    if (form.passwort.length < 4) {
      setError('Passwort muss mindestens 4 Zeichen haben.')
      return
    }
    setLoading(true)
    try {
      const data = await apiRegister(form.email, form.passwort)
      const u = { ...data.user, benutzername: data.user.email.split('@')[0] }
      onLogin(u)
      setMode('profile')
    } catch (err) {
      setError(err.message || 'Registrierung fehlgeschlagen.')
    }
    setLoading(false)
  }

  function handleLogout() {
    apiLogout()
    onLogout()
    setMode('login')
    setForm({ email: '', passwort: '', benutzername: '', vorname: '', nachname: '', strasse: '', plz: '', ort: '', land: 'DE', telefon: '' })
    setOrdersLoaded(false)
  }

  async function handleSaveProfile() {
    if (!user) return
    const profile = { vorname: form.vorname || user.vorname, nachname: form.nachname || user.nachname, strasse: form.strasse || user.strasse, plz: form.plz || user.plz, ort: form.ort || user.ort, land: form.land || user.land, telefon: form.telefon || user.telefon }
    try {
      const updated = await apiUpdateProfile(profile)
      onLogin({ ...updated, benutzername: updated.email?.split('@')[0] })
    } catch {
      // Fallback local
      const updated = { ...user, ...profile }
      onLogin(updated)
    }
  }
  const favProducts = (favorites || []).map(id => products.find(p => p.id === id)).filter(Boolean)

  // ─── LOGIN ──────────────────────────────
  function renderLogin() {
    return (
      <div className="p-5 space-y-4">
        <div className="text-center mb-2">
          <div className="w-14 h-14 rounded-full bg-green-pale/50 flex items-center justify-center mx-auto mb-3">
            <User size={28} className="text-green-main" />
          </div>
          <h3 className="font-serif text-lg font-semibold text-green-dark">Willkommen zurueck</h3>
          <p className="text-xs text-text-muted mt-1">Melde dich im Freundeskreis an</p>
        </div>

        <form onSubmit={handleLogin} className="space-y-3">
          <input type="email" placeholder="E-Mail Adresse" value={form.email} onChange={e => update('email', e.target.value)}
            className="w-full px-3 py-2.5 rounded-lg border border-green-pale text-sm focus:outline-none focus:border-green-main" />
          <div className="relative">
            <input type={showPw ? 'text' : 'password'} placeholder="Passwort" value={form.passwort} onChange={e => update('passwort', e.target.value)}
              className="w-full px-3 py-2.5 rounded-lg border border-green-pale text-sm focus:outline-none focus:border-green-main pr-10" />
            <button type="button" onClick={() => setShowPw(!showPw)} className="absolute right-3 top-1/2 -translate-y-1/2 text-text-muted">
              {showPw ? <EyeOff size={16} /> : <Eye size={16} />}
            </button>
          </div>
          {error && <p className="text-xs text-red-500">{error}</p>}
          <button type="submit" disabled={loading} className={`w-full py-2.5 rounded-xl font-medium text-sm transition-colors ${loading ? 'bg-gray-300 text-gray-500' : 'bg-green-main text-white hover:bg-green-dark'}`}>
            {loading ? 'Wird angemeldet...' : 'Anmelden'}
          </button>
        </form>

        <p className="text-xs text-text-muted text-center">
          Noch kein Konto?{' '}
          <button onClick={() => { setMode('register'); setError('') }} className="text-green-main font-medium hover:underline">
            Registrieren
          </button>
        </p>
      </div>
    )
  }

  // ─── REGISTER ──────────────────────────────
  function renderRegister() {
    return (
      <div className="p-5 space-y-4">
        <div className="text-center mb-2">
          <div className="w-14 h-14 rounded-full bg-green-pale/50 flex items-center justify-center mx-auto mb-3">
            <User size={28} className="text-green-main" />
          </div>
          <h3 className="font-serif text-lg font-semibold text-green-dark">Konto erstellen</h3>
          <p className="text-xs text-text-muted mt-1">Einfach E-Mail und Passwort vergeben</p>
        </div>

        <form onSubmit={handleRegister} className="space-y-3">
          <input type="email" placeholder="E-Mail Adresse" value={form.email} onChange={e => update('email', e.target.value)}
            className="w-full px-3 py-2.5 rounded-lg border border-green-pale text-sm focus:outline-none focus:border-green-main" />
          <div className="relative">
            <input type={showPw ? 'text' : 'password'} placeholder="Passwort vergeben" value={form.passwort} onChange={e => update('passwort', e.target.value)}
              className="w-full px-3 py-2.5 rounded-lg border border-green-pale text-sm focus:outline-none focus:border-green-main pr-10" />
            <button type="button" onClick={() => setShowPw(!showPw)} className="absolute right-3 top-1/2 -translate-y-1/2 text-text-muted">
              {showPw ? <EyeOff size={16} /> : <Eye size={16} />}
            </button>
          </div>
          {error && <p className="text-xs text-red-500">{error}</p>}
          <button type="submit" disabled={loading} className={`w-full py-2.5 rounded-xl font-medium text-sm transition-colors ${loading ? 'bg-gray-300 text-gray-500' : 'bg-green-main text-white hover:bg-green-dark'}`}>
            {loading ? 'Wird erstellt...' : 'Konto erstellen'}
          </button>
        </form>

        <p className="text-xs text-text-muted text-center">
          Schon ein Konto?{' '}
          <button onClick={() => { setMode('login'); setError('') }} className="text-green-main font-medium hover:underline">
            Anmelden
          </button>
        </p>
      </div>
    )
  }

  // ─── PROFILE ──────────────────────────────
  function renderProfile() {
    return (
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* User Info */}
        <div className="p-4 bg-green-pale/20 border-b border-green-pale/50">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-green-main/10 flex items-center justify-center">
              <User size={20} className="text-green-main" />
            </div>
            <div className="min-w-0 flex-1">
              <p className="font-semibold text-text-dark text-sm truncate">{user.benutzername}</p>
              <p className="text-xs text-text-muted truncate">{user.email}</p>
            </div>
            <button onClick={handleLogout} className="text-text-muted hover:text-red-500 transition-colors p-1.5" title="Abmelden">
              <LogOut size={16} />
            </button>
          </div>
        </div>

        {/* Tabs */}
        <div className="flex border-b border-green-pale/50">
          {[
            { id: 'profil', label: 'Profil', icon: User },
            { id: 'favoriten', label: 'Favoriten', icon: Heart },
            { id: 'anfragen', label: 'Anfragen', icon: Clock },
          ].map(tab => {
            const Icon = tab.icon
            return (
              <button key={tab.id} onClick={() => setActiveTab(tab.id)}
                className={`flex-1 py-2.5 text-xs font-medium flex items-center justify-center gap-1.5 transition-all border-b-2 ${
                  activeTab === tab.id
                    ? 'text-green-main border-green-main'
                    : 'text-text-muted border-transparent hover:text-text-dark'
                }`}>
                <Icon size={14} /> {tab.label}
              </button>
            )
          })}
        </div>

        {/* Tab Content */}
        <div className="flex-1 overflow-y-auto p-4">
          {activeTab === 'profil' && renderProfilTab()}
          {activeTab === 'favoriten' && renderFavoritenTab()}
          {activeTab === 'anfragen' && renderAnfragenTab()}
        </div>
      </div>
    )
  }

  function renderProfilTab() {
    return (
      <div className="space-y-3">
        <p className="text-xs font-semibold text-text-dark uppercase tracking-wide flex items-center gap-1.5">
          <MapPin size={13} className="text-green-main" /> Lieferadresse
        </p>
        <div className="grid grid-cols-2 gap-2">
          <input type="text" placeholder="Vorname" defaultValue={user.vorname || ''} onBlur={e => { form.vorname = e.target.value }}
            className="px-3 py-2 rounded-lg border border-green-pale text-sm focus:outline-none focus:border-green-main" />
          <input type="text" placeholder="Nachname" defaultValue={user.nachname || ''} onBlur={e => { form.nachname = e.target.value }}
            className="px-3 py-2 rounded-lg border border-green-pale text-sm focus:outline-none focus:border-green-main" />
        </div>
        <input type="text" placeholder="Strasse & Hausnummer" defaultValue={user.strasse || ''} onBlur={e => { form.strasse = e.target.value }}
          className="w-full px-3 py-2 rounded-lg border border-green-pale text-sm focus:outline-none focus:border-green-main" />
        <div className="grid grid-cols-3 gap-2">
          <input type="text" placeholder="PLZ" defaultValue={user.plz || ''} onBlur={e => { form.plz = e.target.value }}
            className="px-3 py-2 rounded-lg border border-green-pale text-sm focus:outline-none focus:border-green-main" />
          <input type="text" placeholder="Ort" defaultValue={user.ort || ''} onBlur={e => { form.ort = e.target.value }}
            className="col-span-2 px-3 py-2 rounded-lg border border-green-pale text-sm focus:outline-none focus:border-green-main" />
        </div>
        <input type="tel" placeholder="Telefon" defaultValue={user.telefon || ''} onBlur={e => { form.telefon = e.target.value }}
          className="w-full px-3 py-2 rounded-lg border border-green-pale text-sm focus:outline-none focus:border-green-main" />
        <button onClick={handleSaveProfile} className="w-full py-2 rounded-lg bg-green-main text-white text-sm font-medium hover:bg-green-dark transition-colors">
          Adresse speichern
        </button>
        <p className="text-xs text-text-muted flex items-center gap-1">
          <Mail size={12} /> {user.email} · Mitglied seit {user.registriert}
        </p>
      </div>
    )
  }

  function renderFavoritenTab() {
    if (favProducts.length === 0) {
      return <p className="text-sm text-text-muted text-center py-8">Noch keine Favoriten. Druecke das Herz bei Produkten.</p>
    }
    return (
      <div className="space-y-2">
        {favProducts.map(p => (
          <button key={p.id} onClick={() => { onSelectProduct?.(p); onClose() }}
            className="w-full text-left bg-green-pale/15 rounded-lg p-3 hover:bg-green-pale/30 transition-all flex items-center justify-between">
            <div className="min-w-0">
              <p className="text-sm font-medium text-text-dark truncate">{p.name}</p>
              {p.menge && <p className="text-xs text-text-muted">{p.menge}</p>}
            </div>
            <div className="flex items-center gap-2 shrink-0">
              {p.preis != null && <span className="text-sm font-semibold text-green-dark">{p.preis},-</span>}
              <Heart size={14} className="fill-red-500 text-red-500" onClick={e => { e.stopPropagation(); onToggleFavorite?.(p.id) }} />
            </div>
          </button>
        ))}
      </div>
    )
  }

  function renderAnfragenTab() {
    if (orders.length === 0) {
      return <p className="text-sm text-text-muted text-center py-8">Noch keine Anfragen gesendet.</p>
    }
    return (
      <div className="space-y-3">
        {orders.map(order => (
          <div key={order.id} className="bg-green-pale/15 rounded-lg p-3">
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-medium text-text-dark">{order.datum || order.erstellt?.split('T')[0] || ''}</span>
              <span className="text-xs font-semibold text-green-dark">{order.total} EUR</span>
            </div>
            <div className="space-y-0.5">
              {order.items.map((item, i) => (
                <p key={i} className="text-xs text-text-medium">{item.qty}x {item.name}</p>
              ))}
            </div>
          </div>
        ))}
      </div>
    )
  }

  return (
    <>
      <div className="fixed inset-0 bg-black/30 z-50" onClick={onClose} />
      <div className="fixed right-0 top-0 bottom-0 w-full max-w-sm bg-white z-50 shadow-2xl flex flex-col animate-slide-in">
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-green-pale">
          <h2 className="font-serif text-lg font-semibold text-green-dark">
            {mode === 'login' && 'Anmelden'}
            {mode === 'register' && 'Registrieren'}
            {mode === 'profile' && 'Mein Profil'}
          </h2>
          <button onClick={onClose} className="text-text-muted hover:text-text-dark transition-colors p-1">
            <X size={20} />
          </button>
        </div>

        {mode === 'login' && renderLogin()}
        {mode === 'register' && renderRegister()}
        {mode === 'profile' && renderProfile()}

        <style>{`
          @keyframes slide-in {
            from { transform: translateX(100%); }
            to { transform: translateX(0); }
          }
          .animate-slide-in { animation: slide-in 0.25s ease-out; }
        `}</style>
      </div>
    </>
  )
}
