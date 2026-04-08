import { ProductCard } from './ProductCard'
import { Accordion } from './Accordion'
import { Hash, Leaf, Utensils, Clock, ChevronRight, BookOpen, FlaskConical, HeartHandshake } from 'lucide-react'
import { getHerbDeep, ALL_CONDITIONS } from '../data'

export function SearchResults({ query, condResults, prodResults, herbResults, fastResults, nutriResults, topicResults, hexenResults, suchtResults, onSelectCondition, onSelectProduct, onAddToCart, onSearch }) {

  const hasHerbs = herbResults && herbResults.length > 0
  const hasFasting = fastResults && fastResults.length > 0
  const hasNutrition = nutriResults && nutriResults.length > 0
  const hasProducts = prodResults && prodResults.length > 0
  const hasTopics = topicResults && topicResults.length > 0
  const hasHexen = hexenResults && hexenResults.length > 0
  const hasSucht = suchtResults && suchtResults.length > 0
  const hasConditions = condResults && condResults.length > 0
  const hasAnything = hasHerbs || hasFasting || hasNutrition || hasProducts || hasConditions || hasTopics || hasHexen || hasSucht

  return (
    <div className="pt-20 max-w-3xl mx-auto px-4 pb-12">
      <p className="text-text-muted text-sm mb-6">
        Ergebnisse für "{query}"
      </p>

      {!hasAnything && (
        <div className="text-center py-12">
          <p className="text-text-muted">Keine Ergebnisse für "{query}". Versuche einen anderen Begriff.</p>
        </div>
      )}

      {/* Wissensartikel / Topics */}
      {hasTopics && (
        <div className="mb-8">
          <h2 className="flex items-center gap-2 text-lg font-semibold text-green-dark mb-3">
            <BookOpen size={18} /> Wissen & Anleitungen
          </h2>
          <div className="space-y-2">
            {topicResults.slice(0, 5).map(({ topic: t }) => (
              <Accordion key={t.id} title={t.name} variant="nutrition" defaultOpen={topicResults.length === 1}>
                <p className="text-xs text-text-muted mb-2">{t.kategorie}</p>
                <p className="mb-3">{t.inhalt?.einfuehrung}</p>
                {t.inhalt?.abschnitte && t.inhalt.abschnitte.map((a, i) => (
                  <Accordion key={i} title={a.titel} variant="default">
                    <p className="whitespace-pre-line">{a.text}</p>
                  </Accordion>
                ))}
                {t.tags && (
                  <div className="flex flex-wrap gap-1 mt-3">
                    {t.tags.map(tag => (
                      <button key={tag} onClick={() => onSearch(tag.replace('#', ''))}
                        className="text-xs px-2 py-0.5 rounded-full bg-green-bg text-text-light hover:bg-green-main hover:text-white transition-all">
                        {tag}
                      </button>
                    ))}
                  </div>
                )}
              </Accordion>
            ))}
          </div>
        </div>
      )}

      {/* Hexenwissen — Kräutermischungen, Salben, Tinkturen, Alchemie */}
      {hasHexen && (
        <div className="mb-8">
          <h2 className="flex items-center gap-2 text-lg font-semibold text-green-dark mb-3">
            <FlaskConical size={18} /> Hexenwissen & Alchemie
          </h2>
          <div className="space-y-2">
            {hexenResults.slice(0, 8).map(({ item }) => (
              <Accordion key={item.id} title={item.name} variant="gold" defaultOpen={hexenResults.length === 1}>
                <div className="flex gap-2 mb-2">
                  <span className="text-xs px-2 py-0.5 rounded-full bg-gold-light text-text-medium">{item.kategorie}</span>
                  {item.schwierigkeit && (
                    <span className="text-xs px-2 py-0.5 rounded-full bg-green-pale text-text-medium">{item.schwierigkeit}</span>
                  )}
                  <span className="text-xs px-2 py-0.5 rounded-full bg-green-pale/50 text-text-muted">
                    {item._type === 'mischung' ? 'Kräutermischung' : item._type === 'salbe' ? 'Salbe' : item._type === 'tinktur' ? 'Tinktur' : item._type === 'alchemie' ? 'Alchemie' : 'Anleitung'}
                  </span>
                </div>
                {item.beschreibung && <p className="mb-3">{item.beschreibung}</p>}
                {item.zutaten && (
                  <div className="bg-green-pale/20 rounded-lg p-3 mb-2">
                    <strong className="text-xs text-green-dark">Zutaten:</strong>
                    <ul className="mt-1 space-y-1">
                      {item.zutaten.map((z, i) => (
                        <li key={i} className="text-sm flex items-start gap-2">
                          <span className="text-green-main">+</span>
                          <span>
                            <button onClick={() => onSearch(z.name)} className="text-green-dark hover:text-green-main hover:underline">{z.name}</button>
                            {z.menge && <span className="text-text-muted"> -- {z.menge}</span>}
                            {z.wirkung && <span className="text-text-muted text-xs"> ({z.wirkung})</span>}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
                {item.zubereitung && (
                  <div className="bg-white rounded-lg border border-green-pale p-3 mb-2">
                    <strong className="text-xs text-green-dark">Zubereitung:</strong>
                    <p className="mt-1 whitespace-pre-line">{item.zubereitung}</p>
                  </div>
                )}
                {item.anwendung && (
                  <div className="bg-gold-light/20 rounded-lg p-3 mb-2">
                    <strong className="text-xs text-text-dark">Anwendung:</strong>
                    <p className="mt-1">{item.anwendung}</p>
                  </div>
                )}
                {item.hintergrund && <p className="text-xs text-text-muted italic mt-2">{item.hintergrund}</p>}
                {item.haltbarkeit && <p className="text-xs text-text-muted mt-1">Haltbarkeit: {item.haltbarkeit}</p>}
                {item.abschnitte && item.abschnitte.map((a, i) => (
                  <Accordion key={i} title={a.titel} variant="default">
                    <p className="whitespace-pre-line">{a.text}</p>
                  </Accordion>
                ))}
                {item.tags && (
                  <div className="flex flex-wrap gap-1 mt-3">
                    {item.tags.map(tag => (
                      <button key={tag} onClick={() => onSearch(tag.replace('#', ''))}
                        className="text-xs px-2 py-0.5 rounded-full bg-gold-light text-text-medium hover:bg-gold hover:text-white transition-all">
                        {tag}
                      </button>
                    ))}
                  </div>
                )}
              </Accordion>
            ))}
          </div>
        </div>
      )}

      {/* Ernährungsformen */}
      {hasNutrition && (
        <div className="mb-8">
          <h2 className="flex items-center gap-2 text-lg font-semibold text-green-dark mb-3">
            <Utensils size={18} /> Ernährungsformen
          </h2>
          <div className="space-y-2">
            {nutriResults.slice(0, 5).map(({ nutrition: n }) => (
              <Accordion key={n.id} title={n.name} variant="nutrition" defaultOpen={nutriResults.length === 1}>
                {n.beschreibung && <p className="mb-3 whitespace-pre-line">{n.beschreibung}</p>}
                {n.prinzip && (
                  <div className="bg-green-pale/30 rounded-lg p-3 mb-3">
                    <strong className="text-xs text-green-dark">Prinzip:</strong>
                    <p className="mt-1">{n.prinzip}</p>
                  </div>
                )}
                {n.vorteile && n.vorteile.length > 0 && (
                  <div className="mb-3">
                    <strong className="text-xs text-green-dark">Vorteile:</strong>
                    <ul className="mt-1 space-y-1">
                      {n.vorteile.map((v, i) => (
                        <li key={i} className="flex items-start gap-2"><span className="text-green-main">+</span> {v}</li>
                      ))}
                    </ul>
                  </div>
                )}
                {n.herausforderungen && n.herausforderungen.length > 0 && (
                  <div className="mb-3">
                    <strong className="text-xs text-text-light">Herausforderungen:</strong>
                    <ul className="mt-1 space-y-1">
                      {n.herausforderungen.map((h, i) => (
                        <li key={i} className="flex items-start gap-2"><span className="text-gold">!</span> {h}</li>
                      ))}
                    </ul>
                  </div>
                )}
                {n.typische_lebensmittel && (
                  <div className="bg-green-pale/20 rounded-lg p-3 mb-2">
                    <strong className="text-xs text-green-dark">Lebensmittel:</strong>
                    <div className="flex flex-wrap gap-1 mt-1">
                      {n.typische_lebensmittel.map((l, i) => (
                        <span key={i} className="text-xs px-2 py-0.5 rounded-full bg-green-pale text-text-medium">{l}</span>
                      ))}
                    </div>
                  </div>
                )}
                {n.wissenschaft && (
                  <div className="mt-3 pt-3 border-t border-green-pale/50">
                    <strong className="text-xs text-green-dark">Wissenschaft:</strong>
                    <p className="mt-1 text-xs">{n.wissenschaft}</p>
                  </div>
                )}
                {n.tags && (
                  <div className="flex flex-wrap gap-1 mt-3">
                    {n.tags.map(tag => (
                      <button key={tag} onClick={() => onSearch(tag.replace('#', ''))}
                        className="text-xs px-2 py-0.5 rounded-full bg-green-bg text-text-light hover:bg-green-main hover:text-white transition-all">
                        {tag}
                      </button>
                    ))}
                  </div>
                )}
              </Accordion>
            ))}
          </div>
        </div>
      )}

      {/* Fastentechniken */}
      {hasFasting && (
        <div className="mb-8">
          <h2 className="flex items-center gap-2 text-lg font-semibold text-green-dark mb-3">
            <Clock size={18} /> Fasten & Reinigung
          </h2>
          <div className="space-y-2">
            {fastResults.slice(0, 8).map(({ fasting: f }) => (
              <Accordion key={f.id} title={`${f.name} (${f.dauer})`} variant="nutrition" defaultOpen={fastResults.length === 1}>
                <div className="flex gap-2 mb-2">
                  <span className="text-xs px-2 py-0.5 rounded-full bg-green-pale text-text-medium">{f.kategorie}</span>
                  <span className="text-xs px-2 py-0.5 rounded-full bg-gold-light text-text-medium">Intensität: {f.intensitaet}</span>
                </div>
                <p className="mb-3">{f.beschreibung}</p>
                {f.wirkung && (
                  <div className="bg-green-pale/30 rounded-lg p-3 mb-2">
                    <strong className="text-xs text-green-dark">Wirkung:</strong>
                    <p className="mt-1">{f.wirkung}</p>
                  </div>
                )}
                {f.seele && (
                  <div className="bg-gold-light/30 rounded-lg p-3 mb-2">
                    <strong className="text-xs text-text-dark">Seele & Geist:</strong>
                    <p className="mt-1">{f.seele}</p>
                  </div>
                )}
                {f.anleitung && (
                  <div className="bg-white rounded-lg border border-green-pale p-3 mb-2">
                    <strong className="text-xs text-green-dark">So geht's:</strong>
                    <p className="mt-1">{f.anleitung}</p>
                  </div>
                )}
                {f.vorsicht && (
                  <div className="mt-2 bg-red-50/50 rounded-lg p-3">
                    <strong className="text-xs text-red-800/70">Vorsicht:</strong>
                    <p className="mt-1 text-xs">{f.vorsicht}</p>
                  </div>
                )}
                {f.begleitende_mittel && (
                  <div className="flex flex-wrap gap-1 mt-3">
                    <span className="text-xs text-text-muted mr-1">Begleitend:</span>
                    {f.begleitende_mittel.map(m => (
                      <button key={m} onClick={() => onSearch(m)}
                        className="text-xs px-2 py-0.5 rounded-full bg-green-pale text-text-light hover:bg-green-main hover:text-white transition-all">
                        {m}
                      </button>
                    ))}
                  </div>
                )}
              </Accordion>
            ))}
          </div>
        </div>
      )}

      {/* Kräuter */}
      {hasHerbs && (
        <div className="mb-8">
          <h2 className="flex items-center gap-2 text-lg font-semibold text-green-dark mb-3">
            <Leaf size={18} /> Heilkräuter
          </h2>
          <div className="space-y-2">
            {herbResults.slice(0, 10).map(({ herb: h }) => {
              const deep = getHerbDeep(h.name)
              return (
              <Accordion key={h.id} title={h.name} variant="herb" defaultOpen={herbResults.length === 1}>
                {(deep?.vollname || h.lateinisch) && (
                  <p className="text-xs text-text-muted italic mb-2">{deep?.vollname || h.lateinisch} · {deep?.familie || h.familie}</p>
                )}

                {/* Tiefe Beschreibung oder kurze Anwendung */}
                {deep?.beschreibung ? (
                  <p className="text-text-medium leading-relaxed mb-3 whitespace-pre-line">{deep.beschreibung}</p>
                ) : h.anwendung ? (
                  <p className="mb-2">{h.anwendung}</p>
                ) : null}

                {/* Geschichte */}
                {deep?.geschichte && (
                  <Accordion title="Geschichte" variant="gold">
                    <p className="whitespace-pre-line">{deep.geschichte}</p>
                  </Accordion>
                )}

                {/* Wirkungen */}
                <div className="flex flex-wrap gap-1 mb-2 mt-2">
                  {(deep?.wirkungen?.hauptwirkungen || h.wirkung || []).map((w, i) => (
                    <span key={i} className="text-xs px-2 py-0.5 rounded-full bg-green-pale text-text-medium">{w}</span>
                  ))}
                </div>

                {/* Inhaltsstoffe */}
                {deep?.wirkungen?.inhaltsstoffe && (
                  <Accordion title="Inhaltsstoffe" variant="default">
                    <div className="flex flex-wrap gap-1">
                      {deep.wirkungen.inhaltsstoffe.map((s, i) => (
                        <span key={i} className="text-xs px-2 py-0.5 rounded-full bg-green-bg text-text-medium">{s}</span>
                      ))}
                    </div>
                  </Accordion>
                )}

                {/* Zubereitungen */}
                {deep?.zubereitungen && deep.zubereitungen.length > 0 && (
                  <div className="mt-2">
                    <p className="text-xs font-semibold text-green-dark uppercase tracking-wide mb-2">Zubereitungen</p>
                    <div className="space-y-1">
                      {deep.zubereitungen.map((z, i) => (
                        <Accordion key={i} title={z.name} variant="nutrition">
                          <p className="mb-1">{z.anleitung}</p>
                          {z.wirkung && <p className="text-xs text-text-muted italic">Wirkung: {z.wirkung}</p>}
                        </Accordion>
                      ))}
                    </div>
                  </div>
                )}

                {/* Ernte */}
                {deep?.ernte ? (
                  <Accordion title="Ernte & Sammeln" variant="default">
                    {deep.ernte.zeit && <p className="text-sm"><strong>Sammelzeit:</strong> {deep.ernte.zeit}</p>}
                    {deep.ernte.teile && <p className="text-sm"><strong>Pflanzenteile:</strong> {deep.ernte.teile}</p>}
                    {deep.ernte.tipps && <p className="text-sm"><strong>Tipps:</strong> {deep.ernte.tipps}</p>}
                    {deep.ernte.mond && <p className="text-sm italic text-text-light">Mondphasen: {deep.ernte.mond}</p>}
                  </Accordion>
                ) : h.sammelzeit ? (
                  <p className="text-xs text-text-muted mb-2">Sammelzeit: {h.sammelzeit} · Pflanzenteile: {h.pflanzenteile}</p>
                ) : null}

                {/* TCM, Ayurveda, Volksmedizin */}
                {(deep?.tcm || deep?.ayurveda || deep?.volksmedizin) && (
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 mt-2">
                    {deep.tcm && <div className="bg-green-pale/30 rounded-lg p-2"><p className="text-xs font-semibold text-green-dark">TCM</p><p className="text-xs">{deep.tcm}</p></div>}
                    {deep.ayurveda && <div className="bg-gold-light/30 rounded-lg p-2"><p className="text-xs font-semibold">Ayurveda</p><p className="text-xs">{deep.ayurveda}</p></div>}
                    {deep.volksmedizin && <div className="bg-green-bg rounded-lg p-2"><p className="text-xs font-semibold text-green-dark">Volksmedizin</p><p className="text-xs">{deep.volksmedizin}</p></div>}
                  </div>
                )}

                {/* Hilft bei */}
                {(deep?.besonders_bei || h.symptome) && (
                  <div className="mt-2">
                    <p className="text-xs font-semibold text-text-dark uppercase tracking-wide mb-1">Hilft bei</p>
                    <div className="flex flex-wrap gap-1">
                      {(deep?.besonders_bei || h.symptome || []).map((s, i) => {
                        const cond = ALL_CONDITIONS.find(c => c.id === s)
                        return (
                          <button key={i} onClick={() => onSearch(cond?.name || s)}
                            className="text-xs px-2 py-0.5 rounded-full bg-green-pale text-text-light hover:bg-green-main hover:text-white transition-all">
                            {cond?.name || s}
                          </button>
                        )
                      })}
                    </div>
                  </div>
                )}

                {h.tags && (
                  <div className="flex flex-wrap gap-1 mt-2">
                    {h.tags.map(tag => (
                      <button key={tag} onClick={() => onSearch(tag.replace('#', ''))}
                        className="text-xs px-2 py-0.5 rounded-full bg-green-bg text-text-light hover:bg-green-main hover:text-white transition-all">
                        {tag}
                      </button>
                    ))}
                  </div>
                )}
              </Accordion>
              )
            })}
          </div>
        </div>
      )}

      {/* Produkte */}
      {hasProducts && (
        <div className="mb-8">
          <h2 className="text-lg font-semibold text-green-dark mb-3">Produkte im Heildepot</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {prodResults.slice(0, 6).map(({ product: p }) => (
              <ProductCard
                key={p.id}
                product={p}
                onAddToCart={onAddToCart}
                onSelectProduct={onSelectProduct}
                onSearch={onSearch}
              />
            ))}
          </div>
        </div>
      )}

      {/* Sucht & Heilung */}
      {hasSucht && (
        <div className="mb-8">
          <h2 className="flex items-center gap-2 text-lg font-semibold text-green-dark mb-3">
            <HeartHandshake size={18} /> Sucht ist heilbar
          </h2>
          <div className="space-y-2">
            {suchtResults.slice(0, 5).map(({ sucht: s }) => (
              <Accordion key={s.id} title={s.name} variant="gold" defaultOpen={suchtResults.length === 1}>
                {s.beschreibung && <p className="mb-3">{s.beschreibung}</p>}
                {s.koerper && (
                  <Accordion title="Was passiert im Körper?" variant="default">
                    <p>{s.koerper}</p>
                  </Accordion>
                )}
                {s.psyche && (
                  <div className="mt-2">
                    <Accordion title="Die psychische Dimension" variant="default">
                      <p>{s.psyche}</p>
                    </Accordion>
                  </div>
                )}
                {s.seele && (
                  <div className="mt-2">
                    <Accordion title="Die seelische Dimension" variant="gold">
                      <p>{s.seele}</p>
                    </Accordion>
                  </div>
                )}
                {s.heilwege && s.heilwege.length > 0 && (
                  <div className="mt-4">
                    <h4 className="text-sm font-semibold text-green-dark uppercase tracking-wide mb-2">Heilwege</h4>
                    <div className="space-y-2">
                      {s.heilwege.map((h, i) => (
                        <Accordion key={i} title={h.name} variant="nutrition">
                          <p className="mb-2">{h.beschreibung}</p>
                          {h.wirkung && <p className="text-xs text-text-muted">Wirkung: {h.wirkung}</p>}
                          {h.vorsicht && (
                            <div className="mt-2 bg-red-50/50 rounded-lg p-2">
                              <p className="text-xs text-red-800/70">{h.vorsicht}</p>
                            </div>
                          )}
                        </Accordion>
                      ))}
                    </div>
                  </div>
                )}
                {s.abschnitte && s.abschnitte.map((a, i) => (
                  <div className="mt-2" key={i}>
                    <Accordion title={a.titel} variant="default">
                      <p className="whitespace-pre-line">{a.text}</p>
                    </Accordion>
                  </div>
                ))}
                {s.affirmationen && (
                  <div className="mt-4 space-y-1">
                    {s.affirmationen.map((a, i) => (
                      <div key={i} className="flex items-start gap-2 bg-gold-light/30 rounded-lg p-2">
                        <HeartHandshake size={12} className="text-gold mt-0.5 shrink-0" />
                        <span className="text-xs italic text-text-dark">{a}</span>
                      </div>
                    ))}
                  </div>
                )}
                {s.tags && (
                  <div className="flex flex-wrap gap-1 mt-3">
                    {s.tags.map(tag => (
                      <button key={tag} onClick={() => onSearch(tag.replace('#', ''))}
                        className="text-xs px-2 py-0.5 rounded-full bg-gold-light text-text-medium hover:bg-gold hover:text-white transition-all">
                        {tag}
                      </button>
                    ))}
                  </div>
                )}
              </Accordion>
            ))}
          </div>
        </div>
      )}

      {/* Krankheitsbilder */}
      {hasConditions && (
        <div className="mb-8">
          <h2 className="text-lg font-semibold text-green-dark mb-3">Krankheitsbilder</h2>
          <div className="space-y-2">
            {condResults.slice(0, 10).map(({ condition: c }) => (
              <button
                key={c.id}
                onClick={() => onSelectCondition(c)}
                className="w-full text-left bg-white rounded-xl border border-green-pale p-4 hover:shadow-md hover:border-green-light transition-all group flex items-center justify-between"
              >
                <div>
                  <h3 className="font-semibold text-text-dark group-hover:text-green-main transition-colors">
                    {c.name}
                  </h3>
                  <p className="text-sm text-text-muted italic mt-0.5">
                    {c.psychosomatik?.zitat}
                  </p>
                </div>
                <ChevronRight size={16} className="text-text-muted group-hover:text-green-main shrink-0 ml-2" />
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}
