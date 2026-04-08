import { useState, useMemo } from 'react'
import { ArrowLeft, ShoppingCart, Check, Heart } from 'lucide-react'

// Try to import PRODUCT_GROUPS — may not exist yet
let PRODUCT_GROUPS = null
try {
  const mod = await import('../data/product-details.js')
  PRODUCT_GROUPS = mod.PRODUCT_GROUPS || null
} catch {
  // fallback: no grouping
}

export function ProduktePage({ products, onAddToCart, favorites = [], onToggleFavorite, onSearch, onBack, onSelectProduct }) {
  const [activeKategorie, setActiveKategorie] = useState(null)
  const [addedIds, setAddedIds] = useState({})
  const [selectedVariants, setSelectedVariants] = useState({})

  // Build grouped product list when PRODUCT_GROUPS is available
  const groupedProducts = useMemo(() => {
    if (!PRODUCT_GROUPS) return null

    return PRODUCT_GROUPS.map(group => {
      const variantenList = group.varianten || [{ id: group.id, menge: group.menge, preis: group.preis }]
      const variants = variantenList.map(v => {
        const match = products.find(p => p.id === v.id)
        return { ...v, ...(match || {}), preis: v.preis ?? match?.preis, name: v.name || match?.name || group.name }
      }).filter(v => v.id)

      return {
        ...group,
        variants,
        kategorie: group.kategorie || variants[0]?.kategorie || 'Sonstiges',
      }
    }).filter(g => g.variants.length > 0)
  }, [products])

  // Products to display — either grouped or flat
  const displayItems = useMemo(() => {
    const items = groupedProducts || products.map(p => ({
      id: p.id,
      name: p.name,
      desc: p.desc,
      kategorie: p.kategorie || 'Sonstiges',
      variants: [p],
    }))

    if (!activeKategorie) return items
    if (activeKategorie === '__favs__') {
      return items.filter(item => {
        const ids = item.variants?.map(v => v.id) || [item.id]
        return ids.some(id => favorites.includes(id))
      })
    }
    return items.filter(item => item.kategorie === activeKategorie)
  }, [groupedProducts, products, activeKategorie])

  // Categories from items
  const categories = useMemo(() => {
    const items = groupedProducts || products.map(p => ({
      kategorie: p.kategorie || 'Sonstiges',
    }))
    const cats = [...new Set(items.map(i => i.kategorie))]
    return cats.sort((a, b) => a.localeCompare(b, 'de'))
  }, [groupedProducts, products])

  function getSelectedVariant(item) {
    if (!item.variants || item.variants.length <= 1) {
      return item.variants?.[0] || item
    }
    const selId = selectedVariants[item.id || item.name]
    return item.variants.find(v => v.id === selId) || item.variants[0]
  }

  function handleVariantChange(itemKey, variantId) {
    setSelectedVariants(prev => ({ ...prev, [itemKey]: variantId }))
  }

  function handleAdd(e, productId) {
    e.stopPropagation()
    onAddToCart(productId)
    setAddedIds(prev => ({ ...prev, [productId]: true }))
    setTimeout(() => {
      setAddedIds(prev => ({ ...prev, [productId]: false }))
    }, 1500)
  }

  function handleCardClick(item) {
    if (!onSelectProduct) return
    const variant = getSelectedVariant(item)
    const product = products.find(p => p.id === variant.id) || variant
    onSelectProduct(product)
  }

  return (
    <div className="pt-20 max-w-7xl mx-auto px-4 pb-16">
      {/* Back button only */}
      <div className="flex items-center gap-3 mb-6">
        <button
          onClick={onBack}
          className="w-9 h-9 rounded-xl bg-green-pale/60 flex items-center justify-center text-text-medium hover:bg-green-light hover:text-white transition-all shrink-0"
        >
          <ArrowLeft size={18} />
        </button>
      </div>

      {/* Mobile: horizontal category bar */}
      <div className="lg:hidden sticky top-16 z-10 bg-white/90 backdrop-blur-sm -mx-4 px-4 py-3 mb-4 border-b border-green-pale/50">
        <div className="flex gap-2 overflow-x-auto pb-1 scrollbar-hide">
          <button
            onClick={() => setActiveKategorie(null)}
            className={`whitespace-nowrap px-4 py-2 rounded-lg text-sm font-medium transition-all shrink-0 ${
              activeKategorie === null
                ? 'bg-green-main text-white shadow-sm'
                : 'bg-green-pale/40 text-text-medium hover:bg-green-pale'
            }`}
          >
            Alle
          </button>
          {favorites.length > 0 && (
            <button
              onClick={() => setActiveKategorie('__favs__')}
              className={`whitespace-nowrap px-4 py-2 rounded-lg text-sm font-medium transition-all shrink-0 flex items-center gap-1 ${
                activeKategorie === '__favs__'
                  ? 'bg-red-500 text-white shadow-sm'
                  : 'bg-red-50 text-red-500 hover:bg-red-100'
              }`}
            >
              <Heart size={14} /> Favoriten
            </button>
          )}
          {categories.map(name => (
            <button
              key={name}
              onClick={() => setActiveKategorie(name)}
              className={`whitespace-nowrap px-4 py-2 rounded-lg text-sm font-medium transition-all shrink-0 ${
                activeKategorie === name
                  ? 'bg-green-main text-white shadow-sm'
                  : 'bg-green-pale/40 text-text-medium hover:bg-green-pale'
              }`}
            >
              {name}
            </button>
          ))}
        </div>
      </div>

      {/* Main layout: sidebar + product grid */}
      <div className="flex gap-8">

        {/* Desktop Sidebar */}
        <aside className="hidden lg:block w-56 shrink-0">
          <nav className="sticky top-24">
            <ul className="space-y-1">
              <li>
                <button
                  onClick={() => setActiveKategorie(null)}
                  className={`w-full text-left px-4 py-2.5 rounded-lg text-sm font-medium transition-all ${
                    activeKategorie === null
                      ? 'bg-green-main text-white shadow-sm'
                      : 'text-text-medium hover:bg-green-pale/50 hover:text-text-dark'
                  }`}
                >
                  Alle
                </button>
              </li>
              {favorites.length > 0 && (
                <li>
                  <button
                    onClick={() => setActiveKategorie('__favs__')}
                    className={`w-full text-left px-4 py-2.5 rounded-lg text-sm transition-all flex items-center gap-1.5 ${
                      activeKategorie === '__favs__'
                        ? 'bg-red-500 text-white font-medium shadow-sm'
                        : 'text-red-500 hover:bg-red-50'
                    }`}
                  >
                    <Heart size={14} /> Favoriten ({favorites.length})
                  </button>
                </li>
              )}
              {categories.map(name => (
                <li key={name}>
                  <button
                    onClick={() => setActiveKategorie(name)}
                    className={`w-full text-left px-4 py-2.5 rounded-lg text-sm transition-all ${
                      activeKategorie === name
                        ? 'bg-green-main text-white font-medium shadow-sm'
                        : 'text-text-medium hover:bg-green-pale/50 hover:text-text-dark'
                    }`}
                  >
                    {name}
                  </button>
                </li>
              ))}
            </ul>
          </nav>
        </aside>

        {/* Product Grid */}
        <div className="flex-1 min-w-0">
          {displayItems.length === 0 ? (
            <div className="text-center py-16">
              <p className="text-text-muted text-lg">Keine Produkte gefunden.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4">
              {displayItems.map(item => {
                const variant = getSelectedVariant(item)
                const itemKey = item.id || item.name
                const hasVariants = item.variants && item.variants.length > 1
                const activeId = variant.id

                return (
                  <div
                    key={itemKey}
                    onClick={() => handleCardClick(item)}
                    className="bg-white rounded-xl border border-green-pale/60 p-5 hover:shadow-md hover:border-green-pale transition-all flex flex-col cursor-pointer"
                  >
                    {/* Name + Fav */}
                    <div className="flex items-start justify-between gap-1 mb-1.5">
                      <h3 className="font-semibold text-text-dark text-sm leading-snug">
                        {item.name || variant.name}
                      </h3>
                      {onToggleFavorite && (
                        <button
                          onClick={e => { e.stopPropagation(); onToggleFavorite(variant.id) }}
                          className="shrink-0 p-0.5 transition-colors"
                        >
                          <Heart size={16} className={favorites.includes(variant.id) ? 'fill-red-500 text-red-500' : 'text-gray-300 hover:text-red-400'} />
                        </button>
                      )}
                    </div>

                    {/* Description - max 2 lines */}
                    {(item.desc || variant.desc) && (
                      <p className="text-xs text-text-medium leading-relaxed line-clamp-2 mb-3">
                        {item.desc || variant.desc}
                      </p>
                    )}

                    {/* Variant dropdown */}
                    {hasVariants && (
                      <select
                        value={activeId}
                        onClick={e => e.stopPropagation()}
                        onChange={e => handleVariantChange(itemKey, e.target.value)}
                        className="w-full mb-3 px-3 py-2 rounded-lg border border-green-pale/60 text-sm text-text-dark bg-white focus:outline-none focus:border-green-main transition-colors"
                      >
                        {item.variants.map(v => (
                          <option key={v.id} value={v.id}>
                            {v.menge || v.name}{v.preis != null ? ` — ${v.preis},-` : ''}
                          </option>
                        ))}
                      </select>
                    )}

                    {/* Price */}
                    <div className="flex items-baseline gap-2 mb-3">
                      {variant.preis != null && (
                        <span className="text-green-dark font-bold text-lg">
                          {variant.preis},-
                        </span>
                      )}
                      {!hasVariants && variant.menge && (
                        <span className="text-xs text-text-muted">
                          {variant.menge}
                        </span>
                      )}
                    </div>

                    {/* Spacer to push button to bottom */}
                    <div className="flex-1" />

                    {/* Add to cart button */}
                    <button
                      onClick={e => handleAdd(e, activeId)}
                      disabled={addedIds[activeId]}
                      className={`w-full rounded-lg text-sm font-medium py-2.5 transition-all flex items-center justify-center gap-2 ${
                        addedIds[activeId]
                          ? 'bg-green-main text-white'
                          : 'bg-green-pale/60 text-green-dark hover:bg-green-main hover:text-white'
                      }`}
                    >
                      {addedIds[activeId] ? (
                        <>
                          <Check size={15} />
                          Hinzugefügt
                        </>
                      ) : (
                        <>
                          <ShoppingCart size={15} />
                          In den Warenkorb
                        </>
                      )}
                    </button>
                  </div>
                )
              })}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
