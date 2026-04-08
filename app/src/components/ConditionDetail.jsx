import { useState } from 'react'
import { SectionNav } from './SectionNav'
import { ProductCard } from './ProductCard'
import { Accordion } from './Accordion'
import { PRODUCTS, getProductsForCondition } from '../data'
import { Heart, ShoppingBag, Hash, ChevronRight, ChevronLeft } from 'lucide-react'

// Try to import psychosomatik deep content
let PSYCHOSOMATIK_DEEP = {}
try {
  const ps = await import('../data/psychosomatik-deep.js').catch(() => ({}))
  if (ps.PSYCHOSOMATIK_DEEP) PSYCHOSOMATIK_DEEP = ps.PSYCHOSOMATIK_DEEP
} catch(e) {}

// Try to import knowledge details (may not exist yet)
let HERB_DETAILS = {}, STOFF_DETAILS = {}, ERNAEHRUNG_DETAILS = {}, FASTEN_DETAILS = {}, BEWEGUNG_DETAILS = {}, GEIST_DETAILS = {}, TRADITION_DETAILS = {}
try {
  const k = await import('../data/knowledge.js').catch(() => ({}))
  if (k.HERB_DETAILS) HERB_DETAILS = k.HERB_DETAILS
  if (k.STOFF_DETAILS) STOFF_DETAILS = k.STOFF_DETAILS
  if (k.ERNAEHRUNG_DETAILS) ERNAEHRUNG_DETAILS = k.ERNAEHRUNG_DETAILS
  if (k.FASTEN_DETAILS) FASTEN_DETAILS = k.FASTEN_DETAILS
  if (k.BEWEGUNG_DETAILS) BEWEGUNG_DETAILS = k.BEWEGUNG_DETAILS
  if (k.GEIST_DETAILS) GEIST_DETAILS = k.GEIST_DETAILS
  if (k.TRADITION_DETAILS) TRADITION_DETAILS = k.TRADITION_DETAILS
} catch(e) {}

// Try to import herbs database
let HERBS = []
try {
  const h = await import('../data/herbs.js').catch(() => ({}))
  if (h.HERBS) HERBS = h.HERBS
} catch(e) {}

const SECTIONS = [
  { id: 'sec-psychosomatik', label: 'Psychosomatik' },
  { id: 'sec-produkte', label: 'Produkte' },
  { id: 'sec-kraeuter', label: 'Kräuter & Stoffe' },
  { id: 'sec-ernaehrung', label: 'Ernährung' },
  { id: 'sec-fasten', label: 'Fasten' },
  { id: 'sec-bewegung', label: 'Bewegung' },
  { id: 'sec-geist', label: 'Seele & Geist' },
  { id: 'sec-traditionen', label: 'Traditionen' },
]

export function ConditionDetail({ condition, onAddToCart, onSelectCondition, onSelectProduct, onSearch, onBack }) {
  const c = condition
  const [showAllProducts, setShowAllProducts] = useState(false)

  const catalogProducts = getProductsForCondition(c.id)
  const topProducts = catalogProducts.slice(0, 2)
  const allTags = [...new Set(catalogProducts.flatMap(p => p.tags || []))]
  const categories = [...new Set(catalogProducts.map(p => p.kategorie))]

  // Find herb info from HERBS database
  function getHerbInfo(name) {
    const n = name.toLowerCase()
    return HERBS.find(h => h.name.toLowerCase() === n || n.includes(h.name.toLowerCase()))
  }

  return (
    <div className="pt-16">
      {/* Back button */}
      {onBack && (
        <div className="max-w-3xl mx-auto px-4 pt-4">
          <button onClick={onBack} className="text-sm text-text-light hover:text-green-main transition-colors flex items-center gap-1 mb-4">
            <ChevronLeft size={16} /> Zurück
          </button>
        </div>
      )}
      {/* Hero */}
      <div className="bg-gradient-to-b from-green-pale/40 to-transparent py-10 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-3xl sm:text-4xl font-semibold text-green-dark mb-3" style={{fontFamily: "'Inter', sans-serif"}}>
            {c.name}
          </h1>
          {c.tags && (
            <div className="flex flex-wrap justify-center gap-2 mb-4">
              {c.tags.map(tag => (
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
        </div>
      </div>

      <SectionNav sections={SECTIONS} />

      <div className="max-w-3xl mx-auto px-4 py-8 space-y-16">

        {/* Psychosomatik */}
        {c.psychosomatik && (() => {
          const deep = PSYCHOSOMATIK_DEEP[c.id]
          return (
          <section id="sec-psychosomatik">
            <SectionTitle>Was will dein Körper dir sagen?</SectionTitle>
            {c.psychosomatik.zitat && (
              <blockquote className="border-l-4 border-gold pl-4 py-2 mb-4 bg-gold-light/30 rounded-r-lg">
                <p className="text-lg italic text-text-dark">
                  "{c.psychosomatik.zitat}"
                </p>
              </blockquote>
            )}
            {c.psychosomatik.text && (
              <p className="text-text-medium leading-relaxed mb-4">{c.psychosomatik.text}</p>
            )}

            {/* Tiefe Psychosomatik */}
            {deep && (
              <div className="space-y-3 mt-4">
                <Accordion title="Tiefere Betrachtung" variant="gold" defaultOpen={false}>
                  <p className="whitespace-pre-line leading-relaxed">{deep.tiefe_betrachtung}</p>
                </Accordion>

                {deep.koerpersymbolik && (
                  <Accordion title="Körpersymbolik" variant="default">
                    <p>{deep.koerpersymbolik}</p>
                  </Accordion>
                )}

                {deep.kernfragen && deep.kernfragen.length > 0 && (
                  <Accordion title="Fragen zur Selbstreflexion" variant="gold">
                    <ul className="space-y-2">
                      {deep.kernfragen.map((f, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <Heart size={12} className="text-gold mt-1 shrink-0" />
                          <span className="italic">{f}</span>
                        </li>
                      ))}
                    </ul>
                  </Accordion>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                  {deep.dahlke && (
                    <div className="bg-green-pale/30 rounded-lg p-3">
                      <p className="text-xs font-semibold text-green-dark mb-1">Dahlke</p>
                      <p className="text-xs text-text-medium">{deep.dahlke}</p>
                    </div>
                  )}
                  {deep.hay && (
                    <div className="bg-gold-light/30 rounded-lg p-3">
                      <p className="text-xs font-semibold text-text-dark mb-1">Louise Hay</p>
                      <p className="text-xs text-text-medium">{deep.hay}</p>
                    </div>
                  )}
                  {deep.hamer_konflikt && (
                    <div className="bg-green-bg rounded-lg p-3">
                      <p className="text-xs font-semibold text-green-dark mb-1">Neue Medizin</p>
                      <p className="text-xs text-text-medium">{deep.hamer_konflikt}</p>
                    </div>
                  )}
                </div>

                {deep.heilweg && (
                  <div className="bg-gold-light/20 border border-gold/20 rounded-lg p-4 mt-2">
                    <p className="text-xs font-semibold text-text-dark mb-1">Heilweg auf Seelenebene</p>
                    <p className="text-sm text-text-medium">{deep.heilweg}</p>
                  </div>
                )}
              </div>
            )}

            {c.koerper && (
              <div className="mt-3">
                <Accordion title="Was passiert im Körper?" variant="default">
                  <p>{c.koerper}</p>
                </Accordion>
              </div>
            )}
          </section>
          )
        })()}

        {/* Produkte — Top 2, dann aufklappbar */}
        <section id="sec-produkte">
          <SectionTitle>Empfohlene Produkte</SectionTitle>

          {topProducts.length > 0 ? (
            <>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                {topProducts.map(p => (
                  <ProductCard
                    key={p.id}
                    product={p}
                    onAddToCart={onAddToCart}
                    onSelectProduct={onSelectProduct}
                    onSearch={onSearch}
                  />
                ))}
              </div>

              {catalogProducts.length > 2 && (
                <button
                  onClick={() => setShowAllProducts(!showAllProducts)}
                  className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-green-pale/50 text-green-dark font-medium text-sm hover:bg-green-pale transition-all"
                >
                  <ShoppingBag size={16} />
                  {showAllProducts
                    ? 'Weniger anzeigen'
                    : `Alle ${catalogProducts.length} Produkte anzeigen`
                  }
                  <ChevronRight size={14} className={`transition-transform ${showAllProducts ? 'rotate-90' : ''}`} />
                </button>
              )}

              {showAllProducts && (
                <div className="mt-6 border border-green-pale rounded-xl overflow-hidden">
                  <div className="bg-green-pale/30 px-4 py-3 border-b border-green-pale">
                    <div className="flex flex-wrap gap-2">
                      {categories.map(cat => (
                        <span key={cat} className="text-xs px-3 py-1 rounded-full bg-white text-text-medium border border-green-pale">
                          {cat}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="px-4 py-2 border-b border-green-pale bg-white overflow-x-auto">
                    <div className="flex gap-1.5 flex-nowrap">
                      {allTags.slice(0, 15).map(tag => (
                        <button
                          key={tag}
                          onClick={() => onSearch(tag.replace('#', ''))}
                          className="text-xs px-2 py-1 rounded-full bg-green-bg text-text-light hover:bg-green-main hover:text-white transition-all whitespace-nowrap flex items-center gap-0.5"
                        >
                          <Hash size={9} />{tag.replace('#', '')}
                        </button>
                      ))}
                    </div>
                  </div>
                  <div className="p-4 grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {catalogProducts.slice(2).map(p => (
                      <ProductCard
                        key={p.id}
                        product={p}
                        onAddToCart={onAddToCart}
                        onSelectProduct={onSelectProduct}
                        onSearch={onSearch}
                        compact
                      />
                    ))}
                  </div>
                </div>
              )}
            </>
          ) : (
            <p className="text-text-muted text-sm">Noch keine Produktempfehlungen vorhanden.</p>
          )}
        </section>

        {/* Kräuter & Stoffe — jetzt mit Accordion */}
        {(c.kraeuter || c.stoffe) && (
          <section id="sec-kraeuter">
            <SectionTitle>Kräuter & Stoffe</SectionTitle>

            {c.kraeuter && c.kraeuter.length > 0 && (
              <div className="mb-6">
                <h3 className="text-sm font-semibold text-green-dark uppercase tracking-wide mb-3">Kräuter</h3>
                <div className="space-y-2">
                  {c.kraeuter.map((k, i) => {
                    const herbInfo = getHerbInfo(k.name)
                    const detail = HERB_DETAILS[k.name]
                    const hasMore = herbInfo || detail

                    return (
                      <Accordion key={i} title={
                        <button
                          onClick={(e) => { e.stopPropagation(); onSearch(k.name) }}
                          className="text-green-dark hover:text-green-main hover:underline transition-colors"
                        >
                          {k.name}
                        </button>
                      } variant="herb">
                        <p className="mb-3">{k.wirkung}</p>
                        {detail && (
                          <>
                            <p className="mb-2">{detail.detail}</p>
                            {detail.anwendung && (
                              <div className="bg-green-pale/30 rounded-lg p-3 mb-2">
                                <strong className="text-xs text-green-dark">Anwendung:</strong>
                                <p className="mt-1">{detail.anwendung}</p>
                              </div>
                            )}
                            {detail.sammelzeit && (
                              <p className="text-xs text-text-muted">Sammelzeit: {detail.sammelzeit}</p>
                            )}
                          </>
                        )}
                        {herbInfo && (
                          <div className="mt-2 pt-2 border-t border-green-pale/50">
                            {herbInfo.lateinisch && (
                              <p className="text-xs text-text-muted italic mb-1">{herbInfo.lateinisch} · {herbInfo.familie}</p>
                            )}
                            {herbInfo.anwendung && (
                              <p className="text-sm text-text-medium mb-2">{herbInfo.anwendung}</p>
                            )}
                            {herbInfo.wirkung && (
                              <div className="flex flex-wrap gap-1 mb-2">
                                {herbInfo.wirkung.map(w => (
                                  <span key={w} className="text-xs px-2 py-0.5 rounded-full bg-green-pale text-text-medium">{w}</span>
                                ))}
                              </div>
                            )}
                            {herbInfo.sammelzeit && (
                              <p className="text-xs text-text-muted">Sammelzeit: {herbInfo.sammelzeit} · Pflanzenteile: {herbInfo.pflanzenteile}</p>
                            )}
                          </div>
                        )}
                        {!hasMore && (
                          <p className="text-xs text-text-muted italic">Weitere Informationen folgen.</p>
                        )}
                      </Accordion>
                    )
                  })}
                </div>
              </div>
            )}

            {c.stoffe && c.stoffe.length > 0 && (
              <div>
                <h3 className="text-sm font-semibold text-green-dark uppercase tracking-wide mb-3">Nährstoffe & Mineralien</h3>
                <div className="space-y-2">
                  {c.stoffe.map((s, i) => {
                    const detail = STOFF_DETAILS[s.name]
                    return (
                      <Accordion key={i} title={
                        <button
                          onClick={(e) => { e.stopPropagation(); onSearch(s.name) }}
                          className="text-green-dark hover:text-green-main hover:underline transition-colors"
                        >
                          {s.name}
                        </button>
                      } variant="default">
                        <p className="mb-2">{s.wirkung}</p>
                        {detail && (
                          <>
                            <p className="mb-2">{detail.detail}</p>
                            {detail.dosierung && (
                              <div className="bg-green-pale/30 rounded-lg p-3 mb-2">
                                <strong className="text-xs text-green-dark">Dosierung:</strong>
                                <p className="mt-1">{detail.dosierung}</p>
                              </div>
                            )}
                            {detail.formen && (
                              <p className="text-xs text-text-muted">Formen: {detail.formen}</p>
                            )}
                          </>
                        )}
                      </Accordion>
                    )
                  })}
                </div>
              </div>
            )}
          </section>
        )}

        {/* Ernährung — mit aufklappbaren Ernährungsformen */}
        {c.ernaehrung && (
          <section id="sec-ernaehrung">
            <SectionTitle>Ernährung</SectionTitle>

            {c.ernaehrung.empfehlung && (
              <p className="text-text-medium leading-relaxed mb-6">{c.ernaehrung.empfehlung}</p>
            )}

            {/* Ernährungsformen als Accordion */}
            {Object.keys(ERNAEHRUNG_DETAILS).length > 0 && (
              <div className="mb-6">
                <h3 className="text-sm font-semibold text-green-dark uppercase tracking-wide mb-3">Ernährungsformen im Detail</h3>
                <div className="space-y-2">
                  {Object.entries(ERNAEHRUNG_DETAILS).slice(0, 5).map(([name, info]) => (
                    <Accordion key={name} title={`${name} -- ${info.kurz}`} variant="nutrition">
                      <p className="mb-3 whitespace-pre-line">{info.detail}</p>
                      {info.lebensmittel && (
                        <div className="bg-green-pale/30 rounded-lg p-3 mb-2">
                          <strong className="text-xs text-green-dark">Lebensmittel:</strong>
                          <p className="mt-1">{info.lebensmittel}</p>
                        </div>
                      )}
                      {info.meiden && (
                        <div className="bg-red-50/50 rounded-lg p-3 mb-2">
                          <strong className="text-xs text-red-800/70">Meiden:</strong>
                          <p className="mt-1">{info.meiden}</p>
                        </div>
                      )}
                      {info.besonders_bei && (
                        <div className="flex flex-wrap gap-1 mt-2">
                          {info.besonders_bei.map(b => (
                            <span key={b} className="text-xs px-2 py-0.5 rounded-full bg-green-pale text-text-light">{b}</span>
                          ))}
                        </div>
                      )}
                    </Accordion>
                  ))}
                </div>
              </div>
            )}

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
              {c.ernaehrung.staerkend && (
                <div className="bg-green-pale/30 rounded-lg p-4">
                  <h4 className="font-semibold text-green-dark text-sm mb-2">Stärkend</h4>
                  <ul className="text-sm text-text-medium space-y-1">
                    {c.ernaehrung.staerkend.map((item, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="text-green-main mt-0.5">+</span> {item}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
              {c.ernaehrung.meiden && (
                <div className="bg-red-50/50 rounded-lg p-4">
                  <h4 className="font-semibold text-red-800/70 text-sm mb-2">Meiden</h4>
                  <ul className="text-sm text-text-medium space-y-1">
                    {c.ernaehrung.meiden.map((item, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="text-red-400 mt-0.5">-</span> {item}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>

            {c.ernaehrung.rezepte && c.ernaehrung.rezepte.length > 0 && (
              <div>
                <h3 className="text-sm font-semibold text-green-dark uppercase tracking-wide mb-3">Rezepte</h3>
                <div className="space-y-2">
                  {c.ernaehrung.rezepte.map((r, i) => (
                    <Accordion key={i} title={r.name} variant="gold">
                      <p className="text-xs text-text-muted mb-2"><strong>Zutaten:</strong> {r.zutaten}</p>
                      <p>{r.zubereitung}</p>
                    </Accordion>
                  ))}
                </div>
              </div>
            )}
          </section>
        )}

        {/* Fasten — mit aufklappbaren Fastentechniken */}
        {c.fasten && (
          <section id="sec-fasten">
            <SectionTitle>Fasten & Reinigung</SectionTitle>

            {c.fasten.text && (
              <p className="text-text-medium leading-relaxed mb-4">{c.fasten.text}</p>
            )}

            {c.fasten.formen && (
              <div className="mb-4">
                <h3 className="text-sm font-semibold text-green-dark uppercase tracking-wide mb-2">Fastenformen</h3>
                <div className="space-y-2">
                  {c.fasten.formen.map((f, i) => {
                    // Try to find matching detail
                    const detailKey = Object.keys(FASTEN_DETAILS).find(k => f.toLowerCase().includes(k.toLowerCase()))
                    const detail = detailKey ? FASTEN_DETAILS[detailKey] : null

                    return detail ? (
                      <Accordion key={i} title={f} variant="nutrition">
                        <p className="mb-2">{detail.detail || detail.kurz}</p>
                        {detail.anleitung && (
                          <div className="bg-green-pale/30 rounded-lg p-3 mb-2">
                            <strong className="text-xs text-green-dark">So geht's:</strong>
                            <p className="mt-1">{detail.anleitung}</p>
                          </div>
                        )}
                        {detail.wirkung && (
                          <p className="text-xs text-text-muted">Wirkung: {detail.wirkung}</p>
                        )}
                      </Accordion>
                    ) : (
                      <div key={i} className="text-sm text-text-medium bg-green-pale/30 rounded-lg p-3">{f}</div>
                    )
                  })}
                </div>
              </div>
            )}

            {c.fasten.reinigung && (
              <div>
                <h3 className="text-sm font-semibold text-green-dark uppercase tracking-wide mb-2">Reinigungstechniken</h3>
                <div className="space-y-2">
                  {c.fasten.reinigung.map((r, i) => {
                    const detailKey = Object.keys(FASTEN_DETAILS).find(k => r.toLowerCase().includes(k.toLowerCase()))
                    const detail = detailKey ? FASTEN_DETAILS[detailKey] : null

                    return detail ? (
                      <Accordion key={i} title={r} variant="default">
                        <p>{detail.detail || detail.kurz}</p>
                        {detail.anleitung && (
                          <div className="bg-green-pale/30 rounded-lg p-3 mt-2">
                            <strong className="text-xs text-green-dark">Anleitung:</strong>
                            <p className="mt-1">{detail.anleitung}</p>
                          </div>
                        )}
                      </Accordion>
                    ) : (
                      <div key={i} className="text-sm text-text-medium bg-white rounded-lg border border-green-pale p-3">{r}</div>
                    )
                  })}
                </div>
              </div>
            )}
          </section>
        )}

        {/* Bewegung — mit Accordion */}
        {c.bewegung && (
          <section id="sec-bewegung">
            <SectionTitle>Bewegung</SectionTitle>

            {c.bewegung.text && (
              <p className="text-text-medium leading-relaxed mb-4">{c.bewegung.text}</p>
            )}

            {c.bewegung.praktiken && (
              <div className="space-y-2">
                {c.bewegung.praktiken.map((p, i) => {
                  const detailKey = Object.keys(BEWEGUNG_DETAILS).find(k => p.toLowerCase().includes(k.toLowerCase()))
                  const detail = detailKey ? BEWEGUNG_DETAILS[detailKey] : null

                  return detail ? (
                    <Accordion key={i} title={p} variant="nutrition">
                      <p>{detail.detail}</p>
                      {detail.einstieg && (
                        <div className="bg-green-pale/30 rounded-lg p-3 mt-2">
                          <strong className="text-xs text-green-dark">Einstieg:</strong>
                          <p className="mt-1">{detail.einstieg}</p>
                        </div>
                      )}
                    </Accordion>
                  ) : (
                    <div key={i} className="text-sm text-text-medium bg-green-pale/30 rounded-lg p-3">{p}</div>
                  )
                })}
              </div>
            )}
          </section>
        )}

        {/* Geist — mit Accordion */}
        {c.geist && (
          <section id="sec-geist">
            <SectionTitle>Seele, Geist & Bewusstsein</SectionTitle>

            {c.geist.einheit && (
              <p className="text-text-medium leading-relaxed mb-6">{c.geist.einheit}</p>
            )}

            {c.geist.affirmationen && (
              <div className="mb-6">
                <h3 className="text-sm font-semibold text-green-dark uppercase tracking-wide mb-3">Heilsätze</h3>
                <div className="space-y-2">
                  {c.geist.affirmationen.map((a, i) => (
                    <div key={i} className="flex items-start gap-2 bg-gold-light/30 rounded-lg p-3">
                      <Heart size={14} className="text-gold mt-0.5 shrink-0" />
                      <span className="text-sm italic text-text-dark">{a}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {c.geist.meditation && (
              <Accordion title="Meditation & Stille" variant="gold">
                <p>{c.geist.meditation}</p>
                {GEIST_DETAILS['Meditation'] && (
                  <div className="mt-3 pt-3 border-t border-gold/20">
                    <p className="text-xs font-semibold text-text-dark mb-2">Meditationsformen:</p>
                    <p>{GEIST_DETAILS['Meditation'].detail}</p>
                    {GEIST_DETAILS['Meditation'].arten && (
                      <div className="flex flex-wrap gap-1 mt-2">
                        {GEIST_DETAILS['Meditation'].arten.map(a => (
                          <span key={a} className="text-xs px-2 py-0.5 rounded-full bg-gold-light text-text-medium">{a}</span>
                        ))}
                      </div>
                    )}
                    {GEIST_DETAILS['Meditation'].einstieg && (
                      <div className="bg-gold-light/30 rounded-lg p-3 mt-2">
                        <strong className="text-xs text-text-dark">Einstieg:</strong>
                        <p className="mt-1">{GEIST_DETAILS['Meditation'].einstieg}</p>
                      </div>
                    )}
                  </div>
                )}
              </Accordion>
            )}

            {c.geist.energie && (
              <div className="mt-2">
                <Accordion title="Energiearbeit" variant="gold">
                  <p>{c.geist.energie}</p>
                  {GEIST_DETAILS['Energiearbeit'] && (
                    <div className="mt-3 pt-3 border-t border-gold/20">
                      <p>{GEIST_DETAILS['Energiearbeit'].detail}</p>
                      {GEIST_DETAILS['Energiearbeit'].arten && (
                        <div className="flex flex-wrap gap-1 mt-2">
                          {GEIST_DETAILS['Energiearbeit'].arten.map(a => (
                            <span key={a} className="text-xs px-2 py-0.5 rounded-full bg-gold-light text-text-medium">{a}</span>
                          ))}
                        </div>
                      )}
                    </div>
                  )}
                </Accordion>
              </div>
            )}
          </section>
        )}

        {/* Traditionen — jetzt mit Accordion */}
        {c.traditionen && (
          <section id="sec-traditionen">
            <SectionTitle>Heiltraditionen</SectionTitle>
            <div className="space-y-2">
              {c.traditionen.volksmedizin && (
                <Accordion title="Europäische Volksmedizin" variant="tradition">
                  <p>{c.traditionen.volksmedizin}</p>
                  {TRADITION_DETAILS['Volksmedizin'] && (
                    <div className="mt-3 pt-3 border-t border-green-pale/50">
                      <p className="text-xs">{TRADITION_DETAILS['Volksmedizin'].detail}</p>
                    </div>
                  )}
                </Accordion>
              )}
              {c.traditionen.tcm && (
                <Accordion title="Traditionelle Chinesische Medizin" variant="tradition">
                  <p>{c.traditionen.tcm}</p>
                  {TRADITION_DETAILS['TCM'] && (
                    <div className="mt-3 pt-3 border-t border-green-pale/50">
                      <p className="text-xs mb-2">{TRADITION_DETAILS['TCM'].detail}</p>
                      {TRADITION_DETAILS['TCM'].konzepte && (
                        <div className="flex flex-wrap gap-1">
                          {TRADITION_DETAILS['TCM'].konzepte.map(k => (
                            <span key={k} className="text-xs px-2 py-0.5 rounded-full bg-green-pale text-text-medium">{k}</span>
                          ))}
                        </div>
                      )}
                    </div>
                  )}
                </Accordion>
              )}
              {c.traditionen.ayurveda && (
                <Accordion title="Ayurveda" variant="tradition">
                  <p>{c.traditionen.ayurveda}</p>
                  {TRADITION_DETAILS['Ayurveda'] && (
                    <div className="mt-3 pt-3 border-t border-green-pale/50">
                      <p className="text-xs">{TRADITION_DETAILS['Ayurveda'].detail}</p>
                    </div>
                  )}
                </Accordion>
              )}
              {c.traditionen.germanisch && (
                <Accordion title="Germanische Heilkunde" variant="tradition">
                  <p>{c.traditionen.germanisch}</p>
                </Accordion>
              )}
              {c.traditionen.alchemie && (
                <Accordion title="Alchemie & Spagyrik" variant="tradition">
                  <p>{c.traditionen.alchemie}</p>
                </Accordion>
              )}
            </div>
          </section>
        )}

        {/* Closing */}
        <div className="text-center py-8 border-t border-green-pale">
          <p className="text-text-muted text-sm italic max-w-lg mx-auto">
            Erfahrungswissen, geteilt unter Freunden. Dein Körper hat die Kraft zu heilen. Dein Geist hat die Kraft, ihn dabei zu führen.
          </p>
        </div>
      </div>
    </div>
  )
}

function SectionTitle({ children }) {
  return (
    <h2 className="text-2xl font-semibold text-green-dark mb-4" style={{fontFamily: "'Inter', sans-serif"}}>
      {children}
    </h2>
  )
}
