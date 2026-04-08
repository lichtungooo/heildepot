import { ArrowLeft, Activity, Leaf, ShoppingBag, Clock, Utensils, BookOpen, FlaskConical, HeartHandshake, ChevronRight } from 'lucide-react'
import { ALL_CONDITIONS, HERBS, PRODUCTS, FASTING_METHODS, NUTRITION_STYLES, TOPICS, KRAEUTERMISCHUNGEN, SALBEN_REZEPTE, TINKTUREN_REZEPTE, ALCHEMIE, HEXENWISSEN_ANLEITUNGEN, HEXENREZEPTE, BEWUSSTSEINS_PFLANZEN, ZIRBELDRUESE_WISSEN, ZIRBELDRUESE_REZEPTE, ALCHEMIE_DEEP, KLOSTERMEDIZIN, GRIMOIRE_REZEPTE, SUCHTFORMEN, HEILANSAETZE_SUCHT } from '../data'

const CATEGORIES = [
  {
    id: 'krankheitsbilder',
    title: 'Krankheitsbilder',
    desc: 'Von Erkältung bis Trauma -- ganzheitlich beleuchtet',
    icon: Activity,
    color: 'bg-green-pale/40 border-green-main/20',
    count: () => ALL_CONDITIONS.length,
    action: 'category',
    category: 'krankheitsbilder',
  },
  {
    id: 'krauter',
    title: 'Heilkräuter',
    desc: 'Über 300 Pflanzen mit Wirkung, Ernte und Zubereitungen',
    icon: Leaf,
    color: 'bg-green-pale/40 border-green-main/20',
    count: () => (HERBS || []).length,
    action: 'category',
    category: 'krauter',
  },
  {
    id: 'fasten',
    title: 'Fasten & Reinigung',
    desc: 'Intervallfasten, Wasserfasten, Ölziehen, Parasitenkur',
    icon: Clock,
    color: 'bg-gold-light/30 border-gold/20',
    count: () => (FASTING_METHODS || []).length,
    action: 'category',
    category: 'fasten',
  },
  {
    id: 'ernaehrung',
    title: 'Ernährung',
    desc: 'Keto, Vegan, Rohkost, Ayurveda, TCM und mehr',
    icon: Utensils,
    color: 'bg-green-pale/40 border-green-main/20',
    count: () => (NUTRITION_STYLES || []).length,
    action: 'category',
    category: 'ernaehrung',
  },
  {
    id: 'hexenwissen',
    title: 'Hexenwissen & Alchemie',
    desc: 'Liebestränke, Alchemie, Bewusstseins-Pflanzen, Zirbeldrüse, Jahreskreis & mehr',
    icon: FlaskConical,
    color: 'bg-gold-light/30 border-gold/20',
    count: () => (KRAEUTERMISCHUNGEN?.length || 0) + (SALBEN_REZEPTE?.length || 0) + (TINKTUREN_REZEPTE?.length || 0) + (ALCHEMIE?.length || 0) + (HEXENWISSEN_ANLEITUNGEN?.length || 0) + (HEXENREZEPTE?.length || 0) + (BEWUSSTSEINS_PFLANZEN?.length || 0) + (ZIRBELDRUESE_WISSEN?.length || 0) + (ZIRBELDRUESE_REZEPTE?.length || 0) + (ALCHEMIE_DEEP?.length || 0) + (KLOSTERMEDIZIN?.length || 0) + (GRIMOIRE_REZEPTE?.length || 0),
    action: 'category',
    category: 'hexenwissen',
  },
  {
    id: 'sucht',
    title: 'Sucht ist heilbar',
    desc: 'Iboga, Bruno Gröning, Meditation, NAD+ und mehr',
    icon: HeartHandshake,
    color: 'bg-gold-light/30 border-gold/20',
    count: () => (SUCHTFORMEN || []).length + (HEILANSAETZE_SUCHT || []).length,
    action: 'category',
    category: 'sucht',
  },
  {
    id: 'wissen',
    title: 'Wissen & Anleitungen',
    desc: 'Kolloidales Silber, Borax, CBD, Schwermetall-Ausleitung',
    icon: BookOpen,
    color: 'bg-green-pale/40 border-green-main/20',
    count: () => (TOPICS || []).length,
    action: 'search',
    query: 'Kolloidales Silber',
  },
  {
    id: 'produkte',
    title: 'Produkte',
    desc: 'CBD, Zeolith, Borax, Heilkräuter und mehr',
    icon: ShoppingBag,
    color: 'bg-green-pale/40 border-green-main/20',
    count: () => PRODUCTS.length,
    action: 'produkte',
  },
]

export function Lexikon({ onSearch, onBack, onCategory }) {

  function handleClick(cat) {
    if (cat.action === 'category' && onCategory) {
      onCategory(cat.category)
    } else if (cat.action === 'produkte') {
      // Will be handled by parent
      onCategory?.('produkte')
    } else if (cat.action === 'search') {
      onSearch(cat.query)
    }
  }

  return (
    <div className="pt-16 max-w-4xl mx-auto px-4 pb-16">
      {/* Header */}
      <div className="flex items-center gap-3 mb-1 pt-4">
        <button
          onClick={onBack}
          className="w-9 h-9 rounded-xl bg-green-pale/60 flex items-center justify-center text-text-medium hover:bg-green-light hover:text-white transition-all shrink-0"
        >
          <ArrowLeft size={18} />
        </button>
        <h1 className="text-2xl font-semibold text-green-dark">
          Lexikon
        </h1>
      </div>
      <p className="text-text-muted text-sm mb-8 ml-12">
        Das gesamte Wissen auf einen Blick
      </p>

      {/* Category tiles */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {CATEGORIES.map(cat => {
          const Icon = cat.icon
          const count = cat.count()
          return (
            <button
              key={cat.id}
              onClick={() => handleClick(cat)}
              className={`text-left rounded-2xl border p-6 hover:shadow-lg hover:-translate-y-0.5 transition-all group ${cat.color}`}
            >
              <div className="flex items-start justify-between mb-3">
                <div className="w-12 h-12 rounded-xl bg-white/80 flex items-center justify-center shadow-sm">
                  <Icon size={24} className="text-green-main" />
                </div>
                <ChevronRight size={18} className="text-text-muted group-hover:text-green-main transition-colors mt-1" />
              </div>
              <h3 className="font-semibold text-green-dark text-lg mb-1 group-hover:text-green-main transition-colors">
                {cat.title}
              </h3>
              <p className="text-sm text-text-medium leading-relaxed">
                {cat.desc}
              </p>
              {count > 0 && (
                <p className="text-xs text-text-muted mt-2">{count} Einträge</p>
              )}
            </button>
          )
        })}
      </div>
    </div>
  )
}
