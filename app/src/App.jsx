import { useState, useEffect } from 'react'
import './index.css'
import { Header } from './components/Header'
import { Landing } from './components/Landing'
import { SearchResults } from './components/SearchResults'
import { ConditionDetail } from './components/ConditionDetail'
import { ProductDetail } from './components/ProductDetail'
import { Cart } from './components/Cart'
import { FreundeskreisModal, VersandModal, PrivacyBanner } from './components/Freundeskreis'
import { UserProfileDrawer, getUser, saveUser, addOrder } from './components/UserProfile'
import { Lexikon } from './components/Lexikon'
import { ProduktePage } from './components/ProduktePage'
import { CategoryPage } from './components/CategoryPage'
import { searchConditions, searchProducts, searchHerbs, searchFasting, searchNutrition, searchTopics, searchHexenwissen, searchSucht, ALL_CONDITIONS, PRODUCTS } from './data'

export default function App() {
  const [view, setView] = useState('landing') // landing | results | condition | product | lexikon | produkte | category | freundeskreis
  const [selectedCategory, setSelectedCategory] = useState(null)
  const [query, setQuery] = useState('')
  const [selectedCondition, setSelectedCondition] = useState(null)
  const [selectedProduct, setSelectedProduct] = useState(null)
  const [cartOpen, setCartOpen] = useState(false)
  const [cartItems, setCartItems] = useState(() => {
    try { return JSON.parse(localStorage.getItem('heildepot_cart') || '[]') }
    catch { return [] }
  })
  const [favorites, setFavorites] = useState(() => {
    try { return JSON.parse(localStorage.getItem('heildepot_favs') || '[]') }
    catch { return [] }
  })
  const [user, setUser] = useState(() => getUser())
  const [userOpen, setUserOpen] = useState(false)
  const [fkModalOpen, setFkModalOpen] = useState(() => !localStorage.getItem('heildepot_fk_seen'))
  const [versandModalOpen, setVersandModalOpen] = useState(false)
  const [condResults, setCondResults] = useState([])
  const [prodResults, setProdResults] = useState([])
  const [herbResults, setHerbResults] = useState([])
  const [fastResults, setFastResults] = useState([])
  const [nutriResults, setNutriResults] = useState([])
  const [topicResults, setTopicResults] = useState([])
  const [hexenResults, setHexenResults] = useState([])
  const [suchtResults, setSuchtResults] = useState([])

  function pushHistory(viewName, data = {}) {
    const state = { view: viewName, ...data }
    const base = document.querySelector('base')?.href || window.location.pathname.replace(/\/[^/]*$/, '/') || '/'
    const url = viewName === 'landing' ? base : `${base}#${viewName}${data.query ? '/' + encodeURIComponent(data.query) : ''}`
    window.history.pushState(state, '', url)
  }

  useEffect(() => {
    function handlePopState(e) {
      if (e.state) {
        const s = e.state
        setView(s.view || 'landing')
        if (s.query) setQuery(s.query)
        if (s.view === 'condition' && s.conditionName) {
          const found = ALL_CONDITIONS.find(c => c.name === s.conditionName)
          if (found) setSelectedCondition(found)
        }
        if (s.view === 'product' && s.productName) {
          const found = PRODUCTS.find(p => p.name === s.productName)
          if (found) setSelectedProduct(found)
        }
        if (s.view === 'category' && s.categoryName) {
          setSelectedCategory(s.categoryName)
        }
        if (s.view === 'results' && s.query) {
          doSearchSilent(s.query)
        }
      } else {
        setView('landing')
        setQuery('')
      }
    }
    window.addEventListener('popstate', handlePopState)
    return () => window.removeEventListener('popstate', handlePopState)
  }, [])

  // Search without pushing history (used by popstate handler)
  function doSearchSilent(q) {
    const trimmed = q.trim()
    if (trimmed.length < 2) return
    setCondResults(searchConditions(trimmed))
    setProdResults(searchProducts(trimmed))
    setHerbResults(searchHerbs(trimmed))
    setFastResults(searchFasting(trimmed))
    setNutriResults(searchNutrition(trimmed))
    setTopicResults(searchTopics(trimmed))
    setHexenResults(searchHexenwissen(trimmed))
    setSuchtResults(searchSucht(trimmed))
  }

  function saveCart(items) {
    setCartItems(items)
    localStorage.setItem('heildepot_cart', JSON.stringify(items))
  }

  function toggleFavorite(productId) {
    const updated = favorites.includes(productId)
      ? favorites.filter(id => id !== productId)
      : [...favorites, productId]
    setFavorites(updated)
    localStorage.setItem('heildepot_favs', JSON.stringify(updated))
  }

  function handleLogin(userData) {
    setUser(userData)
    saveUser(userData)
  }

  function handleLogout() {
    setUser(null)
    saveUser(null)
  }

  function closeFkModal() {
    setFkModalOpen(false)
    localStorage.setItem('heildepot_fk_seen', '1')
  }

  function addToCart(productId) {
    const existing = cartItems.find(i => i.id === productId)
    if (existing) {
      saveCart(cartItems.map(i => i.id === productId ? {...i, qty: i.qty + 1} : i))
    } else {
      saveCart([...cartItems, { id: productId, qty: 1 }])
    }
  }

  function removeFromCart(productId) {
    saveCart(cartItems.filter(i => i.id !== productId))
  }

  function changeQty(productId, delta) {
    const updated = cartItems.map(i => {
      if (i.id !== productId) return i
      return { ...i, qty: i.qty + delta }
    }).filter(i => i.qty > 0)
    saveCart(updated)
  }

  function doSearch(q) {
    const trimmed = q.trim()
    setQuery(trimmed)
    if (trimmed.length < 2) {
      setView('landing')
      return
    }

    const cResults = searchConditions(trimmed)
    const pResults = searchProducts(trimmed)
    const hResults = searchHerbs(trimmed)
    const fResults = searchFasting(trimmed)
    const nResults = searchNutrition(trimmed)
    const tResults = searchTopics(trimmed)
    const hwResults = searchHexenwissen(trimmed)
    const sResults = searchSucht(trimmed)

    setCondResults(cResults)
    setProdResults(pResults)
    setHerbResults(hResults)
    setFastResults(fResults)
    setNutriResults(nResults)
    setTopicResults(tResults)
    setHexenResults(hwResults)
    setSuchtResults(sResults)

    const topProd = pResults[0]
    const topCond = cResults[0]
    const topHerb = hResults[0]

    // If a herb matches strongly, always show mixed results (herbs first)
    if (topHerb && topHerb.score >= 18) {
      setView('results')
      pushHistory('results', { query: trimmed })
      return
    }

    // Direct condition name match — go straight there
    if (topCond && topCond.score >= 10) {
      const nameMatch = topCond.condition.name.toLowerCase().includes(trimmed.toLowerCase()) ||
                         topCond.condition.id === trimmed.toLowerCase()
      if (nameMatch && (cResults.length === 1 || topCond.score > (cResults[1]?.score || 0) * 1.3)) {
        setSelectedCondition(topCond.condition)
        setView('condition')
        pushHistory('condition', { query: topCond.condition.name, conditionName: topCond.condition.name })
        return
      }
    }

    // Direct product name match — only if no herb or condition matches well
    if (topProd && topProd.score >= 15) {
      const nameMatch = topProd.product.name.toLowerCase() === trimmed.toLowerCase()
      if (nameMatch && (!topCond || topProd.score > topCond.score) && (!topHerb || topProd.score > topHerb.score)) {
        setSelectedProduct(topProd.product)
        setView('product')
        pushHistory('product', { query: topProd.product.name, productName: topProd.product.name })
        return
      }
    }

    // Otherwise show mixed results
    setView('results')
    pushHistory('results', { query: trimmed })
  }

  function goHome() {
    setView('landing')
    setQuery('')
    setCondResults([])
    setProdResults([])
    setHerbResults([])
    setFastResults([])
    setNutriResults([])
    setTopicResults([])
    setHexenResults([])
    setSuchtResults([])
    pushHistory('landing')
  }

  function showCondition(condition) {
    setSelectedCondition(condition)
    setView('condition')
    pushHistory('condition', { query: condition.name, conditionName: condition.name })
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  function showProduct(product) {
    setSelectedProduct(product)
    setView('product')
    pushHistory('product', { query: product.name, productName: product.name })
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  function showLexikon() {
    setView('lexikon')
    pushHistory('lexikon')
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  function showCategory(cat) {
    if (cat === 'produkte') {
      showProdukte()
      return
    }
    setSelectedCategory(cat)
    setView('category')
    pushHistory('category', { query: cat, categoryName: cat })
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  function showProdukte() {
    setView('produkte')
    pushHistory('produkte')
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  function goBack() {
    window.history.back()
  }

  function showFreundeskreis() {
    setFkModalOpen(true)
  }

  const cartCount = cartItems.reduce((sum, i) => sum + i.qty, 0)

  return (
    <div className="min-h-screen">
      <Header
        query={query}
        onSearch={doSearch}
        onHome={goHome}
        cartCount={cartCount}
        onCartOpen={() => setCartOpen(true)}
        onUserOpen={() => setUserOpen(true)}
        user={user}
        onLexikon={showLexikon}
        onProdukte={showProdukte}
        collapsed={view !== 'landing'}
      />

      {view === 'landing' && (
        <Landing onSearch={doSearch} onLexikon={showLexikon} onProdukte={showProdukte} onFkOpen={showFreundeskreis} onCategory={showCategory} />
      )}

      {view === 'results' && (
        <SearchResults
          query={query}
          condResults={condResults}
          prodResults={prodResults}
          herbResults={herbResults}
          fastResults={fastResults}
          nutriResults={nutriResults}
          topicResults={topicResults}
          hexenResults={hexenResults}
          suchtResults={suchtResults}
          onSelectCondition={showCondition}
          onSelectProduct={showProduct}
          onAddToCart={addToCart}
          onSearch={doSearch}
        />
      )}

      {view === 'condition' && selectedCondition && (
        <ConditionDetail
          condition={selectedCondition}
          onAddToCart={addToCart}
          onSelectCondition={showCondition}
          onSelectProduct={showProduct}
          onSearch={doSearch}
          onBack={goBack}
        />
      )}

      {view === 'product' && selectedProduct && (
        <ProductDetail
          product={selectedProduct}
          allProducts={PRODUCTS}
          allConditions={ALL_CONDITIONS}
          onAddToCart={addToCart}
          onSelectCondition={showCondition}
          onSelectProduct={showProduct}
          onSearch={doSearch}
          onBack={goBack}
        />
      )}

      {view === 'lexikon' && (
        <Lexikon onSearch={doSearch} onBack={goBack} onCategory={showCategory} />
      )}

      {view === 'category' && selectedCategory && (
        <CategoryPage category={selectedCategory} onSearch={doSearch} onBack={goBack} onSelectCondition={showCondition} />
      )}

      {view === 'produkte' && (
        <ProduktePage
          products={PRODUCTS}
          onAddToCart={addToCart}
          favorites={favorites}
          onToggleFavorite={toggleFavorite}
          onSearch={doSearch}
          onBack={goBack}
          onSelectProduct={showProduct}
        />
      )}

      {/* Footer */}
      <footer className="border-t border-green-pale/50 mt-8 py-6 px-4">
        <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-text-muted">
          <span>Erfahrungswissen, geteilt unter Freunden.</span>
          <div className="flex items-center gap-4">
            <button onClick={() => setFkModalOpen(true)} className="hover:text-green-main transition-colors">Unter Freunden</button>
            <button onClick={() => setVersandModalOpen(true)} className="hover:text-green-main transition-colors">Versand & Anfragen</button>
            <button onClick={() => { setFkModalOpen(true) }} className="hover:text-green-main transition-colors">Datenschutz</button>
          </div>
        </div>
      </footer>

      {/* Modals & Drawers */}
      <Cart
        open={cartOpen}
        onClose={() => setCartOpen(false)}
        items={cartItems}
        products={PRODUCTS}
        onChangeQty={changeQty}
        onRemove={removeFromCart}
        user={user}
        onOrderSent={(orderData) => addOrder(orderData)}
      />

      <UserProfileDrawer
        open={userOpen}
        onClose={() => setUserOpen(false)}
        user={user}
        onLogin={handleLogin}
        onLogout={handleLogout}
        favorites={favorites}
        products={PRODUCTS}
        onToggleFavorite={toggleFavorite}
        onSelectProduct={showProduct}
      />

      <FreundeskreisModal open={fkModalOpen} onClose={closeFkModal} />
      <VersandModal open={versandModalOpen} onClose={() => setVersandModalOpen(false)} />
      <PrivacyBanner />
    </div>
  )
}
