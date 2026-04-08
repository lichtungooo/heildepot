import { useRef } from 'react'
import { Activity, Leaf, ShoppingBag, Clock, FlaskConical, Sparkles, ArrowRight, Heart, Utensils, HeartHandshake, BookOpen } from 'lucide-react'

const FEATURED = [
  { title: 'Ketogene Ernährung', sub: 'Die Revolution für deinen Stoffwechsel', teaser: 'Wie Ketose Entzündungen senkt, den Geist klärt und chronische Krankheiten herausfordert.', search: 'Ketogene Ernährung', color: 'border-green-main/30 bg-green-pale/30' },
  { title: 'Schwefel', sub: 'Das Wundermittel für den Darm', teaser: 'Warum dieses unterschätzte Mineral dein Immunsystem und deine Darmgesundheit transformiert.', search: 'Schwefel', color: 'border-gold/30 bg-gold-light/30' },
  { title: 'Kolloidales Silber', sub: 'Selbst herstellen', teaser: 'Anleitung, Dosierung und Erfahrungswissen rund um das natürliche Breitband-Antiseptikum.', search: 'Kolloidales Silber', color: 'border-green-main/30 bg-green-pale/30' },
  { title: 'Iboga', sub: 'Die heilige Pflanze gegen Sucht', teaser: 'Uraltes Wissen aus Westafrika -- wie Ibogain tiefgreifende Heilung bei Abhängigkeit ermöglicht.', search: 'Iboga', color: 'border-gold/30 bg-gold-light/30' },
  { title: 'Spagyrik', sub: 'Die alchemische Heilkunst', teaser: 'Sal, Mercurius, Sulphur -- die drei Prinzipien der Heilmittelveredelung nach Paracelsus.', search: 'Spagyrik', color: 'border-green-main/30 bg-green-pale/30' },
  { title: 'Schwermetall-Ausleitung', sub: 'Nach Klinghardt', teaser: 'Chlorella, Bärlauch, Koriander -- das bewährte Protokoll zur sanften Entgiftung.', search: 'Schwermetall', color: 'border-gold/30 bg-gold-light/30' },
]

const SCOPE = [
  { label: '80 Krankheitsbilder', desc: 'Von Erkältung bis Trauma', icon: Activity, action: 'lexikon' },
  { label: '307 Heilkräuter', desc: 'Von Alant bis Zistrose', icon: Leaf, action: 'lexikon' },
  { label: '67 Produkte', desc: 'CBD, Zeolith, Borax u.v.m.', icon: ShoppingBag, action: 'produkte' },
  { label: '28 Fastentechniken', desc: 'Intervallfasten bis Visionssuche', icon: Clock, action: 'search', query: 'Fasten' },
  { label: 'Hexenwissen & Tränke', desc: '90+ Rezepte: Liebestränke, Kater-Killer, Jahreskreis', icon: FlaskConical, action: 'category', category: 'hexenwissen' },
  { label: 'Alchemie & Bewusstsein', desc: 'Spagyrik, Zirbeldrüse, Visionspflanzen', icon: Sparkles, action: 'category', category: 'hexenwissen' },
  { label: '10 Ernährungsstile', desc: 'Keto, Vegan, Rohkost, Ayurveda...', icon: Utensils, action: 'search', query: 'Ketogene Ernährung' },
  { label: 'Sucht ist heilbar', desc: 'Iboga, Bruno Gröning, Meditation', icon: HeartHandshake, action: 'search', query: 'Alkoholsucht' },
]

function FadeIn({ children, className = '' }) {
  const ref = useRef(null)
  return (
    <div ref={ref} className={`animate-fade-in ${className}`}>
      {children}
    </div>
  )
}

export function Landing({ onSearch, onLexikon, onProdukte, onFkOpen, onCategory }) {

  function handleScope(item) {
    if (item.action === 'lexikon') onLexikon()
    else if (item.action === 'produkte') onProdukte()
    else if (item.action === 'category' && onCategory) onCategory(item.category)
    else if (item.action === 'search') onSearch(item.query)
  }

  return (
    <div className="pt-14">

      {/* Hero — kompakt */}
      <div className="bg-gradient-to-b from-green-pale/30 to-transparent py-8 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-text-light text-sm">
            Ganzheitliches Heilwissen -- von Freund zu Freund
          </p>
        </div>
      </div>

      {/* Featured Articles */}
      <div className="max-w-5xl mx-auto px-4 py-12">
        <h2 className="text-xl font-semibold text-green-dark mb-6 flex items-center gap-2">
          <BookOpen size={20} /> Wissen entdecken
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {FEATURED.map((a, i) => (
            <button
              key={i}
              onClick={() => onSearch(a.search)}
              className={`text-left rounded-xl border p-5 hover:shadow-md hover:-translate-y-0.5 transition-all group ${a.color}`}
            >
              <h3 className="font-semibold text-green-dark group-hover:text-green-main transition-colors">{a.title}</h3>
              <p className="text-xs text-text-light font-medium mb-2">{a.sub}</p>
              <p className="text-sm text-text-medium leading-relaxed mb-3">{a.teaser}</p>
              <span className="text-xs text-green-main flex items-center gap-1 group-hover:gap-2 transition-all">
                Weiterlesen <ArrowRight size={12} />
              </span>
            </button>
          ))}
        </div>
      </div>

      {/* Was findest du hier? */}
      <div className="bg-green-bg/50 py-12 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-xl font-semibold text-green-dark mb-6 text-center">Was findest du hier?</h2>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {SCOPE.map((item, i) => {
              const Icon = item.icon
              return (
                <button
                  key={i}
                  onClick={() => handleScope(item)}
                  className="bg-white rounded-xl border border-green-pale p-4 text-left hover:shadow-md hover:border-green-main/30 transition-all group"
                >
                  <div className="w-10 h-10 rounded-lg bg-green-pale/50 flex items-center justify-center mb-3 group-hover:bg-green-main/10 transition-colors">
                    <Icon size={20} className="text-green-main" />
                  </div>
                  <h3 className="font-semibold text-text-dark text-sm">{item.label}</h3>
                  <p className="text-xs text-text-muted mt-0.5">{item.desc}</p>
                </button>
              )
            })}
          </div>
        </div>
      </div>

      {/* Freundeskreis Teaser */}
      <div className="max-w-3xl mx-auto px-4 py-16 text-center">
        <Heart size={28} className="text-gold mx-auto mb-4" />
        <h2 className="text-2xl font-semibold text-green-dark mb-4">Unter Freunden</h2>
        <p className="text-text-medium leading-relaxed mb-6 max-w-lg mx-auto">
          Das Heildepot ist kein Shop. Es ist ein Kreis von Menschen, die sich im echten Leben begegnet sind.
          Wir teilen Erfahrungswissen, Kräuter und Heilmittel -- von Freund zu Freund, im Rahmen des internationalen Privatrechts.
        </p>
        <button
          onClick={onFkOpen}
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-green-main text-white font-medium text-sm hover:bg-green-dark transition-colors"
        >
          Mehr erfahren <ArrowRight size={14} />
        </button>
      </div>

      {/* Footer */}
      <div className="border-t border-green-pale py-8 text-center">
        <p className="text-text-muted text-xs max-w-md mx-auto">
          Erfahrungswissen aus Volksmedizin, TCM, Ayurveda und ganzheitlicher Heilkunde -- geteilt unter Freunden, nicht als medizinischer Rat.
        </p>
      </div>

      <style>{`
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in { animation: fade-in 0.5s ease-out both; }
      `}</style>
    </div>
  )
}
