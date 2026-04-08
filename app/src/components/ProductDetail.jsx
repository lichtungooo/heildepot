import { useState } from 'react'
import { ShoppingCart, Check, ChevronLeft, Hash } from 'lucide-react'
import { ProductCard } from './ProductCard'
import { Accordion } from './Accordion'

// Try to import detailed product descriptions
let PRODUCT_GROUPS = []
try {
  const mod = await import('../data/product-details.js').catch(() => ({}))
  if (mod.PRODUCT_GROUPS) PRODUCT_GROUPS = mod.PRODUCT_GROUPS
} catch(e) {}

function findProductGroup(productId) {
  return PRODUCT_GROUPS.find(g =>
    g.id === productId ||
    (g.varianten || []).some(v => v.id === productId)
  )
}

export function ProductDetail({ product, allProducts, allConditions, onAddToCart, onSelectCondition, onSelectProduct, onSearch, onBack }) {
  const group = findProductGroup(product.id)
  const variants = group?.varianten || []
  const hasVariants = variants.length > 1

  const [selectedVariantId, setSelectedVariantId] = useState(product.id)
  const [added, setAdded] = useState(false)

  // Get the active variant's product data
  const activeProduct = hasVariants
    ? allProducts.find(p => p.id === selectedVariantId) || product
    : product

  function handleAdd() {
    onAddToCart(activeProduct.id)
    setAdded(true)
    setTimeout(() => setAdded(false), 1500)
  }

  // Find related conditions
  const relatedConditions = allConditions.filter(c =>
    activeProduct.symptome?.includes(c.id)
  )

  // Find related products (same tags or conditions, exclude variants of same group)
  const variantIds = new Set(variants.map(v => v.id))
  const relatedProducts = allProducts
    .filter(p => p.id !== activeProduct.id && !variantIds.has(p.id))
    .map(p => {
      let relevance = 0
      activeProduct.symptome?.forEach(cid => { if (p.symptome?.includes(cid)) relevance += 3 })
      activeProduct.tags?.forEach(t => { if (p.tags?.includes(t)) relevance += 2 })
      if (p.kategorie === activeProduct.kategorie) relevance += 1
      return { product: p, relevance }
    })
    .filter(r => r.relevance > 0)
    .sort((a, b) => b.relevance - a.relevance)
    .slice(0, 4)
    .map(r => r.product)

  return (
    <main className="pt-16 pb-12 px-4 max-w-3xl mx-auto">
      {/* Back */}
      {onBack && (
        <button onClick={onBack} className="text-sm text-text-light hover:text-green-main transition-colors flex items-center gap-1 mb-4 mt-4">
          <ChevronLeft size={16} /> Zurück
        </button>
      )}

      {/* Product header */}
      <div className="bg-white rounded-2xl border border-green-pale p-6 sm:p-8 mb-8">
        {/* Image placeholder */}
        {group?.bild_placeholder && (
          <div className="w-full h-48 bg-green-pale/30 rounded-xl mb-6 flex items-center justify-center">
            <span className="text-text-muted text-sm">Produktbild folgt</span>
          </div>
        )}

        {activeProduct.kategorie && (
          <span className="text-xs text-text-muted uppercase tracking-wide">{activeProduct.kategorie}</span>
        )}
        <h1 className="text-2xl sm:text-3xl font-semibold text-green-dark mb-2">
          {group?.name || activeProduct.name}
        </h1>

        {/* Kurztext from group */}
        {group?.kurz && (
          <p className="text-text-medium mb-4">{group.kurz}</p>
        )}

        {/* Variant selector */}
        {hasVariants && (
          <div className="mb-4">
            <label className="text-xs text-text-muted block mb-1">Größe wählen</label>
            <select
              value={selectedVariantId}
              onChange={e => setSelectedVariantId(e.target.value)}
              className="w-full sm:w-auto px-4 py-2.5 rounded-xl border border-green-pale text-sm text-text-dark bg-white focus:outline-none focus:border-green-main transition-all"
            >
              {variants.map(v => (
                <option key={v.id} value={v.id}>
                  {v.menge}{v.preis != null ? ` — ${v.preis},-` : ''}
                </option>
              ))}
            </select>
          </div>
        )}

        {/* Price + Menge */}
        <div className="flex items-baseline gap-3 mb-6">
          <span className="text-3xl font-bold text-green-dark">
            {activeProduct.preis},-
          </span>
          {!hasVariants && activeProduct.menge && (
            <span className="text-sm text-text-muted">{activeProduct.menge}</span>
          )}
        </div>

        {/* Cart button */}
        <button
          onClick={handleAdd}
          disabled={added}
          className={`w-full sm:w-auto px-8 py-3 rounded-xl font-medium transition-all flex items-center justify-center gap-2 ${
            added
              ? 'bg-green-dark text-white'
              : 'bg-green-main text-white hover:bg-green-dark'
          }`}
        >
          {added ? (
            <><Check size={18} /> Hinzugefügt</>
          ) : (
            <><ShoppingCart size={18} /> In den Warenkorb</>
          )}
        </button>
      </div>

      {/* Ausführliche Beschreibung from group */}
      {group?.beschreibung && (
        <section className="mb-8">
          <h2 className="text-xl font-semibold text-green-dark mb-3">Über dieses Produkt</h2>
          <div className="bg-white rounded-2xl border border-green-pale p-6">
            <p className="text-text-medium leading-relaxed whitespace-pre-line">{group.beschreibung}</p>
          </div>
        </section>
      )}

      {/* Anwendung */}
      {group?.anwendung && (
        <section className="mb-8">
          <Accordion title="Anwendung & Dosierung" variant="nutrition" defaultOpen>
            <p className="whitespace-pre-line">{group.anwendung}</p>
          </Accordion>
        </section>
      )}

      {/* Qualität */}
      {group?.qualitaet && (
        <section className="mb-8">
          <Accordion title="Qualität & Herkunft" variant="default">
            <p>{group.qualitaet}</p>
          </Accordion>
        </section>
      )}

      {/* Wirkung (from product data) */}
      {activeProduct.wirkung && activeProduct.wirkung !== activeProduct.desc && !group?.beschreibung && (
        <section className="mb-8 bg-green-pale/20 rounded-2xl border border-green-pale p-6">
          <h2 className="text-xl font-semibold text-green-dark mb-3">Wirkung</h2>
          <p className="text-text-medium leading-relaxed whitespace-pre-line">{activeProduct.wirkung}</p>
        </section>
      )}

      {/* Tags */}
      {activeProduct.tags && activeProduct.tags.length > 0 && (
        <div className="flex flex-wrap gap-2 mb-8">
          {activeProduct.tags.map(tag => (
            <button
              key={tag}
              onClick={() => onSearch(tag.replace('#', ''))}
              className="text-xs px-3 py-1 rounded-full bg-green-pale text-text-light hover:bg-green-light hover:text-white transition-all flex items-center gap-1"
            >
              <Hash size={10} />{tag.replace('#', '')}
            </button>
          ))}
        </div>
      )}

      {/* Hilft bei — from group (with WHY explanation) */}
      {group?.hilft_bei && group.hilft_bei.length > 0 && (
        <section className="mb-8">
          <h2 className="text-xl font-semibold text-green-dark mb-3">Hilft bei</h2>
          <div className="space-y-2">
            {group.hilft_bei.map((h, i) => {
              const condition = allConditions.find(c => c.id === h.condition)
              return (
                <Accordion key={i} title={condition?.name || h.condition} variant="default">
                  <p className="text-sm text-text-medium mb-2">{h.kurz}</p>
                  {condition && (
                    <button
                      onClick={() => onSearch(condition.name)}
                      className="text-xs text-green-main hover:underline"
                    >
                      Ganzheitliche Betrachtung →
                    </button>
                  )}
                </Accordion>
              )
            })}
          </div>
        </section>
      )}

      {/* Hilft bei — fallback from product.symptome (without group) */}
      {(!group?.hilft_bei || group.hilft_bei.length === 0) && relatedConditions.length > 0 && (
        <section className="mb-8">
          <h2 className="text-xl font-semibold text-green-dark mb-3">Hilft bei</h2>
          <div className="space-y-2">
            {relatedConditions.map(c => (
              <Accordion key={c.id} title={c.name} variant="default">
                {c.psychosomatik?.zitat && (
                  <p className="italic text-text-medium mb-2">"{c.psychosomatik.zitat}"</p>
                )}
                <button onClick={() => onSearch(c.name)} className="text-xs text-green-main hover:underline mt-1">
                  Ganzheitliche Betrachtung →
                </button>
              </Accordion>
            ))}
          </div>
        </section>
      )}

      {/* Related products */}
      {relatedProducts.length > 0 && (
        <section>
          <h2 className="text-xl font-semibold text-green-dark mb-3">Verwandte Produkte</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {relatedProducts.map(p => (
              <ProductCard
                key={p.id}
                product={p}
                onAddToCart={onAddToCart}
                onSelectProduct={onSelectProduct}
                onSearch={onSearch}
              />
            ))}
          </div>
        </section>
      )}
    </main>
  )
}
