import { useState } from 'react'
import { ShoppingCart, Check } from 'lucide-react'

export function ProductCard({ product, onAddToCart, onSelectProduct, onSearch, compact }) {
  const [added, setAdded] = useState(false)

  function handleAdd(e) {
    e.stopPropagation()
    onAddToCart(product.id)
    setAdded(true)
    setTimeout(() => setAdded(false), 1500)
  }

  function handleTagClick(e, tag) {
    e.stopPropagation()
    if (onSearch) onSearch(tag.replace('#', ''))
  }

  return (
    <div
      onClick={() => onSelectProduct?.(product)}
      className="bg-white rounded-xl border border-green-pale p-4 hover:shadow-md hover:border-green-light transition-all cursor-pointer group"
    >
      <div className="flex items-start justify-between gap-2 mb-2">
        <div>
          <h3 className={`font-semibold text-text-dark group-hover:text-green-main transition-colors ${compact ? 'text-sm' : ''}`}>
            {product.name}
          </h3>
          {!compact && product.kategorie && (
            <span className="text-xs text-text-muted">{product.kategorie}</span>
          )}
        </div>
        {product.preis != null && (
          <span className="text-green-dark font-semibold text-sm whitespace-nowrap">
            {product.preis},-
          </span>
        )}
      </div>

      {product.menge && (
        <p className="text-xs text-text-muted mb-1">{product.menge}</p>
      )}

      {!compact && (
        <p className="text-sm text-text-medium leading-relaxed mb-3 line-clamp-2">
          {product.desc}
        </p>
      )}

      {!compact && product.tags && product.tags.length > 0 && (
        <div className="flex flex-wrap gap-1 mb-3">
          {product.tags.slice(0, 4).map(tag => (
            <button
              key={tag}
              onClick={(e) => handleTagClick(e, tag)}
              className="text-xs px-2 py-0.5 rounded-full bg-green-pale text-text-light hover:bg-green-light hover:text-white transition-all"
            >
              {tag}
            </button>
          ))}
        </div>
      )}

      <button
        onClick={handleAdd}
        disabled={added}
        className={`w-full rounded-lg text-sm font-medium transition-all flex items-center justify-center gap-2 ${compact ? 'py-1.5' : 'py-2'} ${
          added
            ? 'bg-green-main text-white'
            : 'bg-green-pale text-green-dark hover:bg-green-main hover:text-white'
        }`}
      >
        {added ? (
          <>
            <Check size={14} />
            Hinzugefügt
          </>
        ) : (
          <>
            <ShoppingCart size={14} />
            In den Warenkorb
          </>
        )}
      </button>
    </div>
  )
}
