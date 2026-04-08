import { useState, useMemo } from 'react'
import { ArrowLeft, Clock, Zap, Search, AlertTriangle, Heart, Sparkles, ListChecks, ChevronRight, Leaf, FlaskConical, BookOpen, Flame, Eye, Moon, Skull, Crown } from 'lucide-react'
import { Accordion } from './Accordion'
import {
  FASTING_METHODS, NUTRITION_STYLES, NUTRITION_COMPARISONS,
  KRAEUTERMISCHUNGEN, SALBEN_REZEPTE, TINKTUREN_REZEPTE, ALCHEMIE, HEXENWISSEN_ANLEITUNGEN,
  HEXENREZEPTE, BEWUSSTSEINS_PFLANZEN, ZIRBELDRUESE_WISSEN, ZIRBELDRUESE_REZEPTE,
  ALCHEMIE_DEEP, KLOSTERMEDIZIN, GRIMOIRE_REZEPTE,
  SUCHTFORMEN, HEILANSAETZE_SUCHT, HERBS, ALL_CONDITIONS, getHerbDeep
} from '../data'

// ─── Intensity badge colors ─────────────────────────────────────────
function IntensityBadge({ level }) {
  const colors = {
    'Niedrig': 'bg-green-100 text-green-800',
    'Niedrig bis Mittel': 'bg-green-100 text-green-800',
    'Mittel': 'bg-yellow-100 text-yellow-800',
    'Mittel bis Hoch': 'bg-orange-100 text-orange-800',
    'Hoch': 'bg-red-100 text-red-700',
    'Sehr hoch': 'bg-red-200 text-red-800',
    'Einfach': 'bg-green-100 text-green-800',
    'Mittel': 'bg-yellow-100 text-yellow-800',
    'Fortgeschritten': 'bg-orange-100 text-orange-800',
  }
  return (
    <span className={`text-xs px-2 py-0.5 rounded-full font-medium ${colors[level] || 'bg-gray-100 text-gray-700'}`}>
      {level}
    </span>
  )
}

// ─── Reusable info boxes ────────────────────────────────────────────
function InfoBox({ children, variant = 'default', label }) {
  const styles = {
    green: 'bg-green-50 border-green-200 text-green-900',
    gold: 'bg-amber-50 border-amber-200 text-amber-900',
    red: 'bg-red-50 border-red-200 text-red-900',
    blue: 'bg-blue-50 border-blue-200 text-blue-900',
    default: 'bg-gray-50 border-gray-200 text-gray-800',
  }
  return (
    <div className={`rounded-lg border p-3 text-sm leading-relaxed ${styles[variant]}`}>
      {label && <p className="font-semibold text-xs uppercase tracking-wide mb-1 opacity-70">{label}</p>}
      {children}
    </div>
  )
}

// ─── Clickable chip ────────────────────────────────────────────────
function Chip({ label, onClick }) {
  return (
    <button
      onClick={onClick}
      className="text-xs px-2.5 py-1 rounded-full bg-green-pale/50 text-text-medium hover:bg-green-main hover:text-white transition-all cursor-pointer leading-snug"
    >
      {label}
    </button>
  )
}

// ─── Steps renderer ────────────────────────────────────────────────
function Steps({ text }) {
  if (!text) return null
  const parts = text.split(/(\d+)\.\s+/).filter(Boolean)
  const steps = []
  for (let i = 0; i < parts.length - 1; i += 2) {
    steps.push({ num: parts[i], text: parts[i + 1] })
  }
  if (steps.length === 0) return <p className="text-sm text-text-medium leading-relaxed">{text}</p>
  return (
    <ol className="space-y-2 text-sm text-text-medium leading-relaxed">
      {steps.map((s, i) => (
        <li key={i} className="flex gap-2">
          <span className="shrink-0 w-5 h-5 rounded-full bg-green-main/10 text-green-dark text-xs flex items-center justify-center font-semibold">{s.num}</span>
          <span>{s.text.trim()}</span>
        </li>
      ))}
    </ol>
  )
}

// ─── Section heading ───────────────────────────────────────────────
function SectionHeading({ icon: Icon, children }) {
  return (
    <div className="flex items-center gap-2 mb-4 mt-8 first:mt-0">
      {Icon && <Icon size={20} className="text-green-main" />}
      <h2 className="text-lg font-bold text-text-dark">{children}</h2>
    </div>
  )
}

// ═══════════════════════════════════════════════════════════════════
// FASTEN PAGE
// ═══════════════════════════════════════════════════════════════════
function FastenPage({ onSearch }) {
  const grouped = useMemo(() => {
    const order = ['Grosse Fastenformen', 'Rhythmisches Fasten', 'Reinigungstechniken', 'Spirituelles Fasten']
    const map = {}
    order.forEach(k => { map[k] = [] })
    FASTING_METHODS.forEach(m => {
      const k = m.kategorie || 'Sonstiges'
      if (!map[k]) map[k] = []
      map[k].push(m)
    })
    return order.map(k => ({ name: k, items: map[k] || [] })).filter(g => g.items.length > 0)
  }, [])

  return (
    <div className="space-y-6">
      {grouped.map(group => (
        <div key={group.name}>
          <SectionHeading icon={Flame}>{group.name}</SectionHeading>
          <div className="space-y-3">
            {group.items.map(m => (
              <Accordion key={m.id} title={
                <div className="flex flex-wrap items-center gap-2">
                  <span>{m.name}</span>
                  {m.dauer && (
                    <span className="text-xs px-2 py-0.5 rounded-full bg-blue-100 text-blue-800 font-medium flex items-center gap-1">
                      <Clock size={10} /> {m.dauer}
                    </span>
                  )}
                  {m.intensitaet && <IntensityBadge level={m.intensitaet} />}
                </div>
              }>
                <div className="space-y-3">
                  {m.beschreibung && <p className="text-sm text-text-medium leading-relaxed">{m.beschreibung}</p>}

                  {m.wirkung && (
                    <InfoBox variant="green" label="Wirkung">
                      {m.wirkung}
                    </InfoBox>
                  )}

                  {m.seele && (
                    <InfoBox variant="gold" label="Seele & Geist">
                      {m.seele}
                    </InfoBox>
                  )}

                  {m.anleitung && (
                    <div>
                      <p className="text-xs font-semibold text-text-dark uppercase tracking-wide mb-2">Anleitung</p>
                      <Steps text={m.anleitung} />
                    </div>
                  )}

                  {m.vorbereitung && (
                    <Accordion title="Vorbereitung" variant="nutrition">
                      <Steps text={m.vorbereitung} />
                    </Accordion>
                  )}

                  {m.aufbau && (
                    <Accordion title="Aufbautage" variant="nutrition">
                      <Steps text={m.aufbau} />
                    </Accordion>
                  )}

                  {m.vorsicht && (
                    <InfoBox variant="red" label="Vorsicht">
                      {m.vorsicht}
                    </InfoBox>
                  )}

                  {m.begleitende_mittel && m.begleitende_mittel.length > 0 && (
                    <div>
                      <p className="text-xs font-semibold text-text-dark uppercase tracking-wide mb-2">Begleitende Mittel</p>
                      <div className="flex flex-wrap gap-1.5">
                        {m.begleitende_mittel.map((mittel, i) => (
                          <Chip key={i} label={mittel} onClick={() => onSearch(mittel)} />
                        ))}
                      </div>
                    </div>
                  )}

                  {m.tags && m.tags.length > 0 && (
                    <div className="flex flex-wrap gap-1 pt-1">
                      {m.tags.map((tag, i) => (
                        <span key={i} className="text-xs text-text-muted">{tag}</span>
                      ))}
                    </div>
                  )}
                </div>
              </Accordion>
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}

// ═══════════════════════════════════════════════════════════════════
// ERNAEHRUNG PAGE
// ═══════════════════════════════════════════════════════════════════
function ErnaehrungPage({ onSearch }) {
  return (
    <div className="space-y-6">
      <SectionHeading icon={Leaf}>Ernaehrungsstile</SectionHeading>
      <div className="space-y-3">
        {NUTRITION_STYLES.map(style => (
          <Accordion key={style.id} title={style.name}>
            <div className="space-y-3">
              {style.beschreibung && <p className="text-sm text-text-medium leading-relaxed">{style.beschreibung}</p>}

              {style.prinzip && (
                <InfoBox variant="blue" label="Prinzip">
                  {style.prinzip}
                </InfoBox>
              )}

              {style.vorteile && style.vorteile.length > 0 && (
                <div>
                  <p className="text-xs font-semibold text-green-dark uppercase tracking-wide mb-2">Vorteile</p>
                  <ul className="space-y-1">
                    {style.vorteile.map((v, i) => (
                      <li key={i} className="text-sm text-text-medium flex gap-2">
                        <span className="text-green-main shrink-0">+</span>
                        <span>{v}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {style.herausforderungen && style.herausforderungen.length > 0 && (
                <div>
                  <p className="text-xs font-semibold text-orange-700 uppercase tracking-wide mb-2">Herausforderungen</p>
                  <ul className="space-y-1">
                    {style.herausforderungen.map((h, i) => (
                      <li key={i} className="text-sm text-text-medium flex gap-2">
                        <span className="text-orange-500 shrink-0">!</span>
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {style.typische_lebensmittel && style.typische_lebensmittel.length > 0 && (
                <Accordion title="Typische Lebensmittel" variant="nutrition">
                  <div className="flex flex-wrap gap-1.5">
                    {style.typische_lebensmittel.map((l, i) => (
                      <span key={i} className="text-xs px-2.5 py-1 rounded-full bg-green-pale/50 text-text-medium">{l}</span>
                    ))}
                  </div>
                </Accordion>
              )}

              {style.meiden && style.meiden.length > 0 && (
                <Accordion title="Meiden" variant="default">
                  <ul className="space-y-1">
                    {style.meiden.map((m, i) => (
                      <li key={i} className="text-sm text-red-700 flex gap-2">
                        <span className="shrink-0">-</span>
                        <span>{m}</span>
                      </li>
                    ))}
                  </ul>
                </Accordion>
              )}

              {style.wissenschaft && (
                <Accordion title="Wissenschaft & Studien" variant="default">
                  <p className="text-sm text-text-medium leading-relaxed">{style.wissenschaft}</p>
                </Accordion>
              )}

              {style.besonders_bei && style.besonders_bei.length > 0 && (
                <div>
                  <p className="text-xs font-semibold text-text-dark uppercase tracking-wide mb-2">Besonders geeignet bei</p>
                  <div className="flex flex-wrap gap-1.5">
                    {style.besonders_bei.map((b, i) => (
                      <Chip key={i} label={b} onClick={() => onSearch(b)} />
                    ))}
                  </div>
                </div>
              )}

              {style.tags && style.tags.length > 0 && (
                <div className="flex flex-wrap gap-1 pt-1">
                  {style.tags.map((tag, i) => (
                    <span key={i} className="text-xs text-text-muted">{tag}</span>
                  ))}
                </div>
              )}
            </div>
          </Accordion>
        ))}
      </div>

      {NUTRITION_COMPARISONS && NUTRITION_COMPARISONS.length > 0 && (
        <>
          <SectionHeading icon={BookOpen}>Vergleiche</SectionHeading>
          <div className="space-y-3">
            {NUTRITION_COMPARISONS.map(comp => (
              <Accordion key={comp.id} title={comp.title} variant="gold">
                <div className="space-y-3">
                  {comp.text && (
                    <div className="text-sm text-text-medium leading-relaxed whitespace-pre-line">{comp.text}</div>
                  )}
                  {comp.fazit && (
                    <InfoBox variant="green" label="Fazit">
                      {comp.fazit}
                    </InfoBox>
                  )}
                </div>
              </Accordion>
            ))}
          </div>
        </>
      )}
    </div>
  )
}

// ═══════════════════════════════════════════════════════════════════
// HEXENWISSEN PAGE
// ═══════════════════════════════════════════════════════════════════
function HexenwissenPage({ onSearch }) {
  // Render zutatenliste for recipes
  function ZutatenListe({ zutaten }) {
    if (!zutaten || zutaten.length === 0) return null
    return (
      <div className="space-y-1">
        <p className="text-xs font-semibold text-text-dark uppercase tracking-wide mb-1">Zutaten</p>
        {zutaten.map((z, i) => (
          <div key={i} className="text-sm flex gap-2">
            <span className="text-green-main shrink-0 font-mono">{z.menge}</span>
            <span className="text-text-medium">
              {z.name}
              {z.wirkung && <span className="text-text-muted italic"> -- {z.wirkung}</span>}
            </span>
          </div>
        ))}
      </div>
    )
  }

  // Generic recipe renderer
  function RecipeContent({ item }) {
    return (
      <div className="space-y-3">
        {item.schwierigkeit && (
          <div className="flex gap-2 items-center">
            <IntensityBadge level={item.schwierigkeit} />
            {item.kategorie && <span className="text-xs text-text-muted">{item.kategorie}</span>}
          </div>
        )}
        {item.beschreibung && <p className="text-sm text-text-medium leading-relaxed">{item.beschreibung}</p>}
        <ZutatenListe zutaten={item.zutaten} />
        {item.zubereitung && (
          <div>
            <p className="text-xs font-semibold text-text-dark uppercase tracking-wide mb-2">Zubereitung</p>
            <p className="text-sm text-text-medium leading-relaxed">{item.zubereitung}</p>
          </div>
        )}
        {item.anwendung && (
          <InfoBox variant="green" label="Anwendung">
            {item.anwendung}
          </InfoBox>
        )}
        {item.hintergrund && (
          <InfoBox variant="gold" label="Hintergrund">
            {item.hintergrund}
          </InfoBox>
        )}
        {item.haltbarkeit && (
          <p className="text-sm text-text-muted"><span className="font-medium">Haltbarkeit:</span> {item.haltbarkeit}</p>
        )}
        {item.vorsicht && (
          <InfoBox variant="red" label="Vorsicht">
            {item.vorsicht}
          </InfoBox>
        )}
        {item.geheimtipp && (
          <InfoBox variant="gold" label="Geheimtipp">
            {item.geheimtipp}
          </InfoBox>
        )}
        {item.wirkungszeit && (
          <p className="text-sm text-text-muted"><span className="font-medium">Wirkungszeit:</span> {item.wirkungszeit}</p>
        )}
        {item.mondphase && (
          <p className="text-sm text-text-muted"><span className="font-medium">Mondphase:</span> {item.mondphase}</p>
        )}
        {item.ritual && (
          <InfoBox variant="blue" label="Ritual">
            {item.ritual}
          </InfoBox>
        )}
        {item.wissenschaft && (
          <InfoBox variant="default" label="Wissenschaft">
            {item.wissenschaft}
          </InfoBox>
        )}
        {item.sicherheit && (
          <InfoBox variant="red" label="Sicherheit">
            {item.sicherheit}
          </InfoBox>
        )}
        {item.dosierung && (
          <InfoBox variant="green" label="Dosierung">
            {item.dosierung}
          </InfoBox>
        )}
        {item.set_und_setting && (
          <InfoBox variant="blue" label="Set & Setting">
            {item.set_und_setting}
          </InfoBox>
        )}
        {item.besonders_bei && item.besonders_bei.length > 0 && (
          <div className="flex flex-wrap gap-1.5">
            {item.besonders_bei.map((b, i) => (
              <Chip key={i} label={b} onClick={() => onSearch(b)} />
            ))}
          </div>
        )}
        {item.tags && item.tags.length > 0 && (
          <div className="flex flex-wrap gap-1 pt-1">
            {item.tags.map((tag, i) => (
              <span key={i} className="text-xs text-text-muted">{tag}</span>
            ))}
          </div>
        )}
      </div>
    )
  }

  // Abschnitte renderer (for Alchemie / Anleitungen)
  function AbschnitteContent({ item }) {
    return (
      <div className="space-y-3">
        {item.beschreibung && <p className="text-sm text-text-medium leading-relaxed">{item.beschreibung}</p>}
        {item.abschnitte && item.abschnitte.map((a, i) => (
          <Accordion key={i} title={a.titel} variant="nutrition">
            <p className="text-sm text-text-medium leading-relaxed">{a.text}</p>
          </Accordion>
        ))}
        {item.vorsicht && (
          <InfoBox variant="red" label="Vorsicht">
            {item.vorsicht}
          </InfoBox>
        )}
        {item.tags && item.tags.length > 0 && (
          <div className="flex flex-wrap gap-1 pt-1">
            {item.tags.map((tag, i) => (
              <span key={i} className="text-xs text-text-muted">{tag}</span>
            ))}
          </div>
        )}
      </div>
    )
  }

  // Build grouped navigation: Überkategorien with sub-sections
  const navGroups = useMemo(() => {
    const groups = []

    // 1. Teemischungen
    if (KRAEUTERMISCHUNGEN?.length) groups.push({ id: 'teemischungen', label: 'Teemischungen', sections: [
      { id: 'teemischungen', label: 'Teemischungen', items: KRAEUTERMISCHUNGEN },
    ]})

    // 2. Salben & Balsame
    if (SALBEN_REZEPTE?.length) groups.push({ id: 'salben', label: 'Salben & Balsame', sections: [
      { id: 'salben', label: 'Salben & Balsame', items: SALBEN_REZEPTE },
    ]})

    // 3. Tinkturen
    if (TINKTUREN_REZEPTE?.length) groups.push({ id: 'tinkturen', label: 'Tinkturen', sections: [
      { id: 'tinkturen', label: 'Tinkturen', items: TINKTUREN_REZEPTE },
    ]})

    // 4. Traenke & Rezepte (Hexenrezepte grouped)
    if (HEXENREZEPTE?.length) {
      const cats = [...new Set(HEXENREZEPTE.map(r => r.kategorie))]
      groups.push({ id: 'traenke', label: 'Traenke & Rezepte', sections:
        cats.map(cat => ({ id: 'hr-' + cat, label: cat, items: HEXENREZEPTE.filter(r => r.kategorie === cat) }))
      })
    }

    // 5. Alchemie & Spagyrik
    const alchemieSections = []
    if (ALCHEMIE?.length) alchemieSections.push({ id: 'alchemie-basis', label: 'Grundlagen', items: ALCHEMIE, renderer: 'abschnitte' })
    if (ALCHEMIE_DEEP?.length) {
      const cats = [...new Set(ALCHEMIE_DEEP.map(r => r.kategorie))]
      cats.forEach(cat => alchemieSections.push({ id: 'ad-' + cat, label: cat, items: ALCHEMIE_DEEP.filter(r => r.kategorie === cat) }))
    }
    if (alchemieSections.length) groups.push({ id: 'alchemie', label: 'Alchemie & Spagyrik', sections: alchemieSections })

    // 6. Klostermedizin
    if (KLOSTERMEDIZIN?.length) {
      const cats = [...new Set(KLOSTERMEDIZIN.map(r => r.kategorie))]
      groups.push({ id: 'kloster', label: 'Klostermedizin', sections:
        cats.map(cat => ({ id: 'km-' + cat, label: cat, items: KLOSTERMEDIZIN.filter(r => r.kategorie === cat) }))
      })
    }

    // 7. Bewusstseins-Pflanzen
    if (BEWUSSTSEINS_PFLANZEN?.length) groups.push({ id: 'bewusstsein', label: 'Bewusstseins-Pflanzen', sections: [
      { id: 'bewusstsein', label: 'Bewusstseins-Pflanzen', items: BEWUSSTSEINS_PFLANZEN },
    ]})

    // 8. Zirbeldruese
    const zirbelSections = []
    if (ZIRBELDRUESE_WISSEN?.length) zirbelSections.push({ id: 'zirbel-wissen', label: 'Wissen', items: ZIRBELDRUESE_WISSEN, renderer: 'zirbel' })
    if (ZIRBELDRUESE_REZEPTE?.length) zirbelSections.push({ id: 'zirbel-rezepte', label: 'Rezepte', items: ZIRBELDRUESE_REZEPTE })
    if (zirbelSections.length) groups.push({ id: 'zirbel', label: 'Zirbeldruese', sections: zirbelSections })

    // 9. Grimoire & Volksmagie
    if (GRIMOIRE_REZEPTE?.length) {
      const cats = [...new Set(GRIMOIRE_REZEPTE.map(r => r.kategorie))]
      groups.push({ id: 'grimoire', label: 'Grimoire & Magie', sections:
        cats.map(cat => ({ id: 'gr-' + cat, label: cat, items: GRIMOIRE_REZEPTE.filter(r => r.kategorie === cat), renderer: 'grimoire' }))
      })
    }

    // 10. Anleitungen
    if (HEXENWISSEN_ANLEITUNGEN?.length) groups.push({ id: 'anleitungen', label: 'Anleitungen', sections: [
      { id: 'anleitungen', label: 'Anleitungen & Grundlagen', items: HEXENWISSEN_ANLEITUNGEN, renderer: 'abschnitte' },
    ]})

    return groups
  }, [])

  // Flat list of all sections for content rendering
  const allSections = useMemo(() => navGroups.flatMap(g => g.sections), [navGroups])

  const [activeGroup, setActiveGroup] = useState(null) // null = alle, group id = filter
  const [expandedGroup, setExpandedGroup] = useState(null) // which group is expanded in sidebar

  const displaySections = activeGroup
    ? navGroups.find(g => g.id === activeGroup)?.sections || []
    : allSections

  function handleGroupClick(groupId) {
    if (activeGroup === groupId) {
      setActiveGroup(null)
      setExpandedGroup(null)
    } else {
      setActiveGroup(groupId)
      setExpandedGroup(groupId)
    }
  }

  function handleSubClick(sectionId, groupId) {
    // Find the section element and scroll to it
    setActiveGroup(groupId)
    setExpandedGroup(groupId)
    setTimeout(() => {
      const el = document.getElementById('section-' + sectionId)
      if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }, 50)
  }

  function renderItem(item, section) {
    if (section.renderer === 'abschnitte') return <AbschnitteContent item={item} />
    if (section.renderer === 'zirbel') return (
      <div className="space-y-3">
        {item.inhalt && <p className="text-sm text-text-medium leading-relaxed whitespace-pre-line">{item.inhalt}</p>}
        {item.kernpunkte?.length > 0 && (
          <ul className="list-disc pl-4 space-y-1">
            {item.kernpunkte.map((k, i) => <li key={i} className="text-sm text-text-medium">{k}</li>)}
          </ul>
        )}
        <RecipeContent item={item} />
      </div>
    )
    if (section.renderer === 'grimoire') return (
      <div className="space-y-3">
        {item.quelle && <p className="text-xs italic text-text-muted">Quelle: {item.quelle}</p>}
        <RecipeContent item={item} />
      </div>
    )
    return <RecipeContent item={item} />
  }

  return (
    <div className="flex gap-8">
      {/* Desktop Sidebar */}
      <aside className="hidden lg:block w-52 shrink-0">
        <nav className="sticky top-24 max-h-[calc(100vh-7rem)] overflow-y-auto">
          <ul className="space-y-0.5">
            <li>
              <button
                onClick={() => { setActiveGroup(null); setExpandedGroup(null) }}
                className={`w-full text-left px-3 py-2 rounded-lg text-sm font-medium transition-all ${
                  activeGroup === null
                    ? 'bg-green-main text-white shadow-sm'
                    : 'text-text-medium hover:bg-green-pale/50'
                }`}
              >
                Alle
              </button>
            </li>
            {navGroups.map(group => (
              <li key={group.id}>
                <button
                  onClick={() => handleGroupClick(group.id)}
                  className={`w-full text-left px-3 py-2 rounded-lg text-sm transition-all ${
                    activeGroup === group.id
                      ? 'bg-green-main text-white font-medium shadow-sm'
                      : 'text-text-dark font-medium hover:bg-green-pale/50'
                  }`}
                >
                  {group.label}
                </button>
                {/* Sub-items */}
                {expandedGroup === group.id && group.sections.length > 1 && (
                  <ul className="ml-3 mt-0.5 space-y-0.5 border-l-2 border-green-pale pl-2">
                    {group.sections.map(sec => (
                      <li key={sec.id}>
                        <button
                          onClick={() => handleSubClick(sec.id, group.id)}
                          className="w-full text-left px-2 py-1 rounded text-xs text-text-medium hover:text-green-dark hover:bg-green-pale/30 transition-all"
                        >
                          {sec.label}
                        </button>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </nav>
      </aside>

      {/* Mobile: horizontal category bar — only top-level groups */}
      <div className="lg:hidden fixed top-16 left-0 right-0 z-10 bg-white/90 backdrop-blur-sm px-4 py-3 border-b border-green-pale/50">
        <div className="flex gap-2 overflow-x-auto pb-1 scrollbar-hide">
          <button
            onClick={() => { setActiveGroup(null); setExpandedGroup(null) }}
            className={`whitespace-nowrap px-3 py-1.5 rounded-lg text-xs font-medium transition-all shrink-0 ${
              activeGroup === null
                ? 'bg-green-main text-white shadow-sm'
                : 'bg-green-pale/40 text-text-medium hover:bg-green-pale'
            }`}
          >
            Alle
          </button>
          {navGroups.map(group => (
            <button
              key={group.id}
              onClick={() => handleGroupClick(group.id)}
              className={`whitespace-nowrap px-3 py-1.5 rounded-lg text-xs font-medium transition-all shrink-0 ${
                activeGroup === group.id
                  ? 'bg-green-main text-white shadow-sm'
                  : 'bg-green-pale/40 text-text-medium hover:bg-green-pale'
              }`}
            >
              {group.label}
            </button>
          ))}
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 min-w-0 space-y-6 lg:pt-0 pt-12">
        {displaySections.map(section => (
          <div key={section.id} id={'section-' + section.id}>
            <SectionHeading icon={FlaskConical}>{section.label}</SectionHeading>
            <div className="space-y-3">
              {section.items.map(item => (
                <Accordion key={item.id} title={item.name}>
                  {renderItem(item, section)}
                </Accordion>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

// ═══════════════════════════════════════════════════════════════════
// SUCHT PAGE
// ═══════════════════════════════════════════════════════════════════
function SuchtPage({ onSearch }) {
  return (
    <div className="space-y-6">
      {/* Suchtformen */}
      <SectionHeading icon={Heart}>Suchtformen</SectionHeading>
      <div className="space-y-3">
        {SUCHTFORMEN.map(s => (
          <Accordion key={s.id} title={s.name}>
            <div className="space-y-3">
              {s.beschreibung && <p className="text-sm text-text-medium leading-relaxed">{s.beschreibung}</p>}

              {s.koerper && (
                <InfoBox variant="default" label="Koerper">
                  {s.koerper}
                </InfoBox>
              )}

              {s.psyche && (
                <InfoBox variant="blue" label="Psyche">
                  {s.psyche}
                </InfoBox>
              )}

              {s.seele && (
                <InfoBox variant="gold" label="Seele">
                  {s.seele}
                </InfoBox>
              )}

              {/* Heilwege nested */}
              {s.heilwege && s.heilwege.length > 0 && (
                <div>
                  <p className="text-xs font-semibold text-green-dark uppercase tracking-wide mb-2">Heilwege</p>
                  <div className="space-y-2">
                    {s.heilwege.map((h, i) => (
                      <Accordion key={i} title={h.name} variant="nutrition">
                        <div className="space-y-2">
                          {h.beschreibung && <p className="text-sm text-text-medium leading-relaxed">{h.beschreibung}</p>}
                          {h.wirkung && (
                            <InfoBox variant="green" label="Wirkung">
                              {h.wirkung}
                            </InfoBox>
                          )}
                          {h.vorsicht && (
                            <InfoBox variant="red" label="Vorsicht">
                              {h.vorsicht}
                            </InfoBox>
                          )}
                        </div>
                      </Accordion>
                    ))}
                  </div>
                </div>
              )}

              {/* Affirmationen */}
              {s.affirmationen && s.affirmationen.length > 0 && (
                <Accordion title="Affirmationen" variant="gold">
                  <ul className="space-y-1">
                    {s.affirmationen.map((a, i) => (
                      <li key={i} className="text-sm text-amber-900 flex gap-2">
                        <span className="shrink-0">*</span>
                        <span className="italic">{a}</span>
                      </li>
                    ))}
                  </ul>
                </Accordion>
              )}

              {/* Produkte as chips */}
              {s.produkte && s.produkte.length > 0 && (
                <div>
                  <p className="text-xs font-semibold text-text-dark uppercase tracking-wide mb-2">Empfohlene Mittel</p>
                  <div className="flex flex-wrap gap-1.5">
                    {s.produkte.map((p, i) => (
                      <Chip key={i} label={p} onClick={() => onSearch(p)} />
                    ))}
                  </div>
                </div>
              )}

              {s.tags && s.tags.length > 0 && (
                <div className="flex flex-wrap gap-1 pt-1">
                  {s.tags.map((tag, i) => (
                    <span key={i} className="text-xs text-text-muted">{tag}</span>
                  ))}
                </div>
              )}
            </div>
          </Accordion>
        ))}
      </div>

      {/* Heilansaetze */}
      {HEILANSAETZE_SUCHT && HEILANSAETZE_SUCHT.length > 0 && (
        <>
          <SectionHeading icon={Sparkles}>Heilansaetze im Detail</SectionHeading>
          <div className="space-y-3">
            {HEILANSAETZE_SUCHT.map(h => (
              <Accordion key={h.id} title={h.name} variant="gold">
                <div className="space-y-3">
                  {h.beschreibung && <p className="text-sm text-text-medium leading-relaxed">{h.beschreibung}</p>}
                  {h.abschnitte && h.abschnitte.map((a, i) => (
                    <Accordion key={i} title={a.titel} variant="nutrition">
                      <p className="text-sm text-text-medium leading-relaxed">{a.text}</p>
                    </Accordion>
                  ))}
                  {h.tags && h.tags.length > 0 && (
                    <div className="flex flex-wrap gap-1 pt-1">
                      {h.tags.map((tag, i) => (
                        <span key={i} className="text-xs text-text-muted">{tag}</span>
                      ))}
                    </div>
                  )}
                </div>
              </Accordion>
            ))}
          </div>
        </>
      )}
    </div>
  )
}

// ═══════════════════════════════════════════════════════════════════
// KRAUTER (HERBS) PAGE with A-Z navigation
// ═══════════════════════════════════════════════════════════════════
function KrauterPage({ onSearch, onSelectCondition }) {
  const [activeLetter, setActiveLetter] = useState(null)

  const grouped = useMemo(() => {
    const map = {}
    HERBS.forEach(h => {
      const letter = h.name.charAt(0).toUpperCase()
      if (!map[letter]) map[letter] = []
      map[letter].push(h)
    })
    // Sort herbs within each letter
    Object.values(map).forEach(arr => arr.sort((a, b) => a.name.localeCompare(b.name, 'de')))
    return map
  }, [])

  const letters = useMemo(() => Object.keys(grouped).sort((a, b) => a.localeCompare(b, 'de')), [grouped])

  const visibleLetters = activeLetter ? [activeLetter] : letters

  return (
    <div className="space-y-4">
      {/* A-Z Navigation */}
      <div className="flex flex-wrap gap-1 sticky top-16 bg-white/95 backdrop-blur-sm py-2 z-10 -mx-1 px-1">
        <button
          onClick={() => setActiveLetter(null)}
          className={`w-8 h-8 rounded-lg text-xs font-bold flex items-center justify-center transition-all ${
            activeLetter === null
              ? 'bg-green-main text-white'
              : 'bg-green-pale/50 text-text-medium hover:bg-green-main hover:text-white'
          }`}
        >
          Alle
        </button>
        {letters.map(letter => (
          <button
            key={letter}
            onClick={() => setActiveLetter(activeLetter === letter ? null : letter)}
            className={`w-8 h-8 rounded-lg text-xs font-bold flex items-center justify-center transition-all ${
              activeLetter === letter
                ? 'bg-green-main text-white'
                : 'bg-green-pale/50 text-text-medium hover:bg-green-main hover:text-white'
            }`}
          >
            {letter}
          </button>
        ))}
      </div>

      {/* Herbs grouped by letter */}
      {visibleLetters.map(letter => (
        <div key={letter}>
          <div className="flex items-center gap-2 mb-3 mt-4">
            <span className="w-8 h-8 rounded-lg bg-green-main/10 text-green-dark text-lg font-bold flex items-center justify-center">{letter}</span>
            <span className="text-xs text-text-muted">{grouped[letter]?.length || 0} Kraeuter</span>
          </div>
          <div className="space-y-2">
            {(grouped[letter] || []).map(herb => (
              <Accordion key={herb.id} title={
                <div className="flex flex-wrap items-center gap-2">
                  <span>{herb.name}</span>
                  {herb.lateinisch && <span className="text-xs text-text-muted italic">({herb.lateinisch})</span>}
                </div>
              } variant="herb">
                {(() => {
                  const deep = getHerbDeep(herb.name)
                  return (
                <div className="space-y-3">
                  {/* Tiefe Beschreibung wenn vorhanden */}
                  {deep?.vollname && (
                    <p className="text-xs text-text-muted italic">{deep.vollname} -- {deep.familie || herb.familie}</p>
                  )}
                  {!deep?.vollname && herb.familie && (
                    <p className="text-xs text-text-muted">Familie: {herb.familie}</p>
                  )}

                  {/* Beschreibung -- tief oder kurz */}
                  {deep?.beschreibung ? (
                    <p className="text-text-medium leading-relaxed whitespace-pre-line">{deep.beschreibung}</p>
                  ) : herb.anwendung ? (
                    <InfoBox variant="green" label="Anwendung">{herb.anwendung}</InfoBox>
                  ) : null}

                  {/* Geschichte */}
                  {deep?.geschichte && (
                    <Accordion title="Geschichte & Mythologie" variant="gold">
                      <p className="whitespace-pre-line">{deep.geschichte}</p>
                    </Accordion>
                  )}

                  {/* Wirkungen */}
                  {deep?.wirkungen?.hauptwirkungen ? (
                    <div className="flex flex-wrap gap-1.5">
                      {deep.wirkungen.hauptwirkungen.map((w, i) => (
                        <span key={i} className="text-xs px-2 py-0.5 rounded-full bg-green-100 text-green-800">{w}</span>
                      ))}
                    </div>
                  ) : herb.wirkung && herb.wirkung.length > 0 ? (
                    <div className="flex flex-wrap gap-1.5">
                      {herb.wirkung.map((w, i) => (
                        <span key={i} className="text-xs px-2 py-0.5 rounded-full bg-green-100 text-green-800">{w}</span>
                      ))}
                    </div>
                  ) : null}

                  {/* Inhaltsstoffe */}
                  {deep?.wirkungen?.inhaltsstoffe && (
                    <Accordion title="Inhaltsstoffe" variant="default">
                      <div className="flex flex-wrap gap-1.5">
                        {deep.wirkungen.inhaltsstoffe.map((s, i) => (
                          <span key={i} className="text-xs px-2 py-0.5 rounded-full bg-green-pale text-text-medium">{s}</span>
                        ))}
                      </div>
                    </Accordion>
                  )}

                  {/* Ernte */}
                  {deep?.ernte ? (
                    <Accordion title="Ernte & Sammeln" variant="default">
                      <div className="space-y-2">
                        {deep.ernte.zeit && <p className="text-sm"><span className="font-medium">Sammelzeit:</span> {deep.ernte.zeit}</p>}
                        {deep.ernte.teile && <p className="text-sm"><span className="font-medium">Pflanzenteile:</span> {deep.ernte.teile}</p>}
                        {deep.ernte.tipps && <p className="text-sm"><span className="font-medium">Tipps:</span> {deep.ernte.tipps}</p>}
                        {deep.ernte.mond && <p className="text-sm italic text-text-light">Mondphasen: {deep.ernte.mond}</p>}
                      </div>
                    </Accordion>
                  ) : (
                    <>
                      {herb.sammelzeit && <p className="text-sm text-text-medium"><span className="font-medium">Sammelzeit:</span> {herb.sammelzeit}</p>}
                      {herb.pflanzenteile && <p className="text-sm text-text-medium"><span className="font-medium">Pflanzenteile:</span> {herb.pflanzenteile}</p>}
                    </>
                  )}

                  {/* Zubereitungen */}
                  {deep?.zubereitungen && deep.zubereitungen.length > 0 && (
                    <div>
                      <p className="text-xs font-semibold text-green-dark uppercase tracking-wide mb-2">Zubereitungen</p>
                      <div className="space-y-2">
                        {deep.zubereitungen.map((z, i) => (
                          <Accordion key={i} title={z.name} variant="nutrition">
                            <p className="mb-2">{z.anleitung}</p>
                            {z.wirkung && <p className="text-xs text-text-muted italic">Wirkung: {z.wirkung}</p>}
                          </Accordion>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Mischungen */}
                  {deep?.mischungen && deep.mischungen.length > 0 && (
                    <div>
                      <p className="text-xs font-semibold text-green-dark uppercase tracking-wide mb-1">Kräutermischungen</p>
                      <div className="flex flex-wrap gap-1.5">
                        {deep.mischungen.map((m, i) => (
                          <Chip key={i} label={m} onClick={() => onSearch(m)} />
                        ))}
                      </div>
                    </div>
                  )}

                  {/* TCM, Ayurveda, Volksmedizin */}
                  {(deep?.tcm || deep?.ayurveda || deep?.volksmedizin) && (
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                      {deep.tcm && (
                        <div className="bg-green-pale/30 rounded-lg p-3">
                          <p className="text-xs font-semibold text-green-dark mb-1">TCM</p>
                          <p className="text-xs text-text-medium">{deep.tcm}</p>
                        </div>
                      )}
                      {deep.ayurveda && (
                        <div className="bg-gold-light/30 rounded-lg p-3">
                          <p className="text-xs font-semibold text-text-dark mb-1">Ayurveda</p>
                          <p className="text-xs text-text-medium">{deep.ayurveda}</p>
                        </div>
                      )}
                      {deep.volksmedizin && (
                        <div className="bg-green-bg rounded-lg p-3">
                          <p className="text-xs font-semibold text-green-dark mb-1">Volksmedizin</p>
                          <p className="text-xs text-text-medium">{deep.volksmedizin}</p>
                        </div>
                      )}
                    </div>
                  )}

                  {/* Hilft bei */}
                  {(deep?.besonders_bei || herb.symptome) && (
                    <div>
                      <p className="text-xs font-semibold text-text-dark uppercase tracking-wide mb-1">Hilft bei</p>
                      <div className="flex flex-wrap gap-1.5">
                        {(deep?.besonders_bei || herb.symptome || []).map((s, i) => {
                          const cond = ALL_CONDITIONS.find(c => c.id === s)
                          return (
                            <Chip
                              key={i}
                              label={cond?.name || s}
                              onClick={() => cond && onSelectCondition ? onSelectCondition(cond) : onSearch(cond?.name || s)}
                            />
                          )
                        })}
                      </div>
                    </div>
                  )}
                </div>
                  )
                })()}
              </Accordion>
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}

// ═══════════════════════════════════════════════════════════════════
// MAIN COMPONENT
// ═══════════════════════════════════════════════════════════════════
function KrankheitsbilderPage({ onSearch, onSelectCondition }) {
  const grouped = {}
  ALL_CONDITIONS.forEach(c => {
    const letter = c.name.charAt(0).toUpperCase()
    if (!grouped[letter]) grouped[letter] = []
    grouped[letter].push(c)
  })
  const letters = Object.keys(grouped).sort((a, b) => a.localeCompare(b, 'de'))
  const [activeLetter, setActiveLetter] = useState(null)

  return (
    <div>
      {/* A-Z nav */}
      <div className="flex flex-wrap gap-1 mb-6 sticky top-16 bg-white/95 backdrop-blur-sm py-2 z-10 -mx-1 px-1">
        <button
          onClick={() => setActiveLetter(null)}
          className={`px-2.5 py-1 rounded-lg text-xs font-medium transition-all ${!activeLetter ? 'bg-green-main text-white' : 'bg-green-pale/50 text-text-medium hover:bg-green-pale'}`}
        >Alle</button>
        {letters.map(l => (
          <button
            key={l}
            onClick={() => setActiveLetter(l === activeLetter ? null : l)}
            className={`px-2.5 py-1 rounded-lg text-xs font-medium transition-all ${l === activeLetter ? 'bg-green-main text-white' : 'bg-green-pale/50 text-text-medium hover:bg-green-pale'}`}
          >{l}</button>
        ))}
      </div>

      {/* Conditions */}
      {letters.filter(l => !activeLetter || l === activeLetter).map(letter => (
        <div key={letter} className="mb-6">
          <h3 className="text-lg font-semibold text-green-dark mb-2">{letter}</h3>
          <div className="space-y-2">
            {grouped[letter].map(c => (
              <Accordion key={c.id} title={c.name} variant="default">
                {c.psychosomatik?.zitat && (
                  <p className="italic text-text-medium mb-2">"{c.psychosomatik.zitat}"</p>
                )}
                {c.koerper && <p className="text-sm mb-2">{c.koerper}</p>}
                <button
                  onClick={() => onSelectCondition ? onSelectCondition(c) : onSearch(c.name)}
                  className="text-xs text-green-main hover:underline mt-1"
                >Ganzheitliche Betrachtung anzeigen →</button>
              </Accordion>
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}

const CATEGORY_CONFIG = {
  krankheitsbilder: {
    title: 'Krankheitsbilder',
    icon: Heart,
    component: KrankheitsbilderPage,
  },
  fasten: {
    title: 'Fasten & Reinigung',
    icon: Flame,
    component: FastenPage,
  },
  ernaehrung: {
    title: 'Ernaehrungsformen',
    icon: Leaf,
    component: ErnaehrungPage,
  },
  hexenwissen: {
    title: 'Hexenwissen & Alchemie',
    icon: FlaskConical,
    component: HexenwissenPage,
  },
  sucht: {
    title: 'Sucht ist heilbar',
    icon: Heart,
    component: SuchtPage,
  },
  krauter: {
    title: 'Heilkraeuter-Lexikon',
    icon: Leaf,
    component: KrauterPage,
  },
}

export function CategoryPage({ category, onSearch, onBack, onSelectCondition }) {
  const config = CATEGORY_CONFIG[category]

  if (!config) {
    return (
      <div className="p-4 text-center text-text-muted">
        Kategorie nicht gefunden.
        <button onClick={onBack} className="block mx-auto mt-4 text-green-main hover:underline">Zurueck</button>
      </div>
    )
  }

  const { title, icon: Icon, component: PageComponent } = config

  return (
    <div className="max-w-5xl mx-auto px-4 pb-24 pt-16">
      {/* Back button + Title */}
      <div className="flex items-center gap-3 py-3 sticky top-16 bg-white/95 backdrop-blur-sm z-20 border-b border-green-pale/50 mb-4 -mx-1 px-1">
        <button
          onClick={onBack}
          className="w-9 h-9 rounded-xl bg-green-pale/60 flex items-center justify-center hover:bg-green-pale transition-colors shrink-0"
        >
          <ArrowLeft size={18} className="text-green-dark" />
        </button>
        <div className="flex items-center gap-2 min-w-0">
          <Icon size={20} className="text-green-main shrink-0" />
          <h1 className="text-xl font-bold text-text-dark truncate">{title}</h1>
        </div>
      </div>

      {/* Page content */}
      <PageComponent onSearch={onSearch} onSelectCondition={onSelectCondition} />
    </div>
  )
}
