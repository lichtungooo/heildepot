import { ArrowRight, ArrowUpRight, Users, HeartHandshake, ShieldCheck, BookOpen } from 'lucide-react'
import { SearchBox } from './SearchBox'
import { KATEGORIEN, bildPfad, bildSrcSet } from '../data/kategorien'
import { ALL_CONDITIONS, HERBS } from '../data'

const SCHNELL = ['Erkältung', 'Schlafstörungen', 'Darm', 'Kamille', 'Fasten', 'Entgiftung']

const ARTIKEL = [
  { titel: 'Ketogene Ernährung', art: 'Ernährung', ton: 'text-green-main', text: 'Wie Ketose Entzündungen senkt, den Geist klärt und den Stoffwechsel neu ordnet.', suche: 'Ketogene Ernährung' },
  { titel: 'Schwefel', art: 'Mineral', ton: 'text-gold', text: 'Das unterschätzte Mineral für Darm, Gelenke und ein starkes Immunsystem.', suche: 'Schwefel' },
  { titel: 'Kolloidales Silber', art: 'Anleitung', ton: 'text-text-light', text: 'Selbst herstellen: Anleitung, Dosierung und Erfahrungswissen.', suche: 'Kolloidales Silber' },
  { titel: 'Iboga', art: 'Pflanze', ton: 'text-rose', text: 'Die heilige Wurzel aus Westafrika und ihr Weg aus der Abhängigkeit.', suche: 'Iboga' },
  { titel: 'Spagyrik', art: 'Alchemie', ton: 'text-gold', text: 'Sal, Mercurius, Sulphur: die Heilkunst nach Paracelsus.', suche: 'Spagyrik' },
  { titel: 'Schwermetall-Ausleitung', art: 'Entgiftung', ton: 'text-green-main', text: 'Chlorella, Bärlauch, Koriander: das sanfte Protokoll nach Klinghardt.', suche: 'Schwermetall' },
]

// Kachelgrößen im Raster (4 Spalten ab lg, 2 Spalten darunter)
const FORM = {
  krankheitsbilder: 'col-span-2 row-span-2',
  krauter: 'col-span-2',
  hexenwissen: 'col-span-2',
}

function Kachel({ k, onWahl, gross }) {
  const anzahl = k.anzahl()
  return (
    <button
      onClick={() => onWahl(k)}
      className={`bild-kachel group relative overflow-hidden rounded-2xl text-left isolate bg-green-dark ${FORM[k.id] || ''}`}
    >
      <img
        src={bildPfad(k.bild, gross ? 1600 : 800)}
        srcSet={bildSrcSet(k.bild)}
        sizes={gross ? '(min-width: 1024px) 50vw, 100vw' : '(min-width: 1024px) 25vw, 50vw'}
        alt=""
        loading="lazy"
        decoding="async"
        className="absolute inset-0 w-full h-full object-cover -z-10"
      />
      <div className="absolute inset-0 -z-10 bg-gradient-to-t from-black/85 via-black/45 to-black/10" />
      <div className="h-full flex flex-col justify-end p-4 sm:p-6">
        {anzahl > 0 && (
          <span className="self-start mb-auto rounded-full bg-black/35 backdrop-blur-sm text-white/90 text-[11px] font-medium px-2.5 py-1">
            {anzahl} {k.einheit}
          </span>
        )}
        <h3 className={`text-white leading-tight ${gross ? 'text-2xl sm:text-4xl' : 'text-lg sm:text-xl'}`}>
          {k.titel}
        </h3>
        <p className={`text-white/80 text-sm leading-snug mt-1.5 max-w-md ${gross ? '' : 'hidden sm:block'}`}>
          {k.text}
        </p>
        <span className="mt-3 inline-flex items-center gap-1.5 text-gold-light text-sm font-medium opacity-90 group-hover:gap-2.5 transition-all">
          Öffnen <ArrowRight size={15} />
        </span>
      </div>
    </button>
  )
}

export function Landing({ onSearch, onLexikon, onProdukte, onFkOpen, onCategory }) {
  function wahl(k) {
    if (k.aktion === 'produkte') onProdukte()
    else if (k.aktion === 'category') onCategory(k.ziel)
    else if (k.aktion === 'search') onSearch(k.suche)
  }
  const kacheln = KATEGORIEN.filter(k => k.id !== 'wissen')

  return (
    <div>
      {/* Bühne */}
      <section className="relative isolate min-h-[92svh] sm:min-h-[88vh] flex items-end overflow-hidden bg-green-dark">
        <img
          src={bildPfad('buehne', 1600)}
          srcSet={bildSrcSet('buehne')}
          sizes="100vw"
          alt="Getrocknete Kräuterbüschel hängen an einem Regal"
          fetchPriority="high"
          className="absolute inset-0 w-full h-full object-cover -z-20 scale-105"
        />
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-black/65 via-black/35 to-green-dark/95" />
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-black/40 to-transparent" />

        <div className="w-full max-w-6xl mx-auto px-4 pt-28 pb-10 sm:pb-16">
          <p className="auftauchen text-gold-light/90 text-xs sm:text-sm font-semibold uppercase mb-4" style={{ letterSpacing: '0.18em' }}>
            Ganzheitliches Heilwissen · von Freund zu Freund
          </p>
          <h1 className="auftauchen text-white text-[2.6rem] leading-[1.05] sm:text-6xl lg:text-7xl max-w-3xl" style={{ animationDelay: '80ms' }}>
            Heilwissen, das von <em className="text-gold-light font-normal">Hand zu Hand</em> geht.
          </h1>
          <p className="auftauchen text-white/85 text-base sm:text-lg max-w-xl mt-5 leading-relaxed" style={{ animationDelay: '160ms' }}>
            {HERBS.length} Heilkräuter, {ALL_CONDITIONS.length} Krankheitsbilder und das alte Wissen der Klöster und Kräuterfrauen.
            Gesammelt aus Erfahrung, geteilt im Vertrauen.
          </p>

          <div className="auftauchen max-w-2xl mt-8" style={{ animationDelay: '240ms' }}>
            <SearchBox groesse="gross" onSearch={onSearch} />
            <div className="flex flex-wrap gap-2 mt-4">
              {SCHNELL.map(s => (
                <button
                  key={s}
                  onClick={() => onSearch(s)}
                  className="rounded-full border border-white/30 bg-white/10 backdrop-blur-sm px-3.5 py-1.5 text-sm text-white hover:bg-white hover:text-green-dark transition-colors"
                >
                  {s}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Kategorien */}
      <section className="max-w-6xl mx-auto px-4 pt-16 sm:pt-24 pb-10">
        <div className="flex items-end justify-between gap-4 mb-8">
          <div>
            <p className="text-gold text-xs font-semibold uppercase mb-2" style={{ letterSpacing: '0.16em' }}>Das Depot</p>
            <h2 className="text-3xl sm:text-4xl text-green-dark">Wo möchtest du beginnen?</h2>
          </div>
          <button onClick={onLexikon} className="hidden sm:inline-flex items-center gap-1.5 text-sm font-medium text-green-main hover:text-green-dark shrink-0">
            Ganzes Lexikon <ArrowRight size={15} />
          </button>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-4 auto-rows-[190px] sm:auto-rows-[230px] gap-3 sm:gap-4">
          {kacheln.map(k => (
            <Kachel key={k.id} k={k} onWahl={wahl} gross={k.id === 'krankheitsbilder'} />
          ))}
        </div>
        <button onClick={onLexikon} className="sm:hidden mt-5 w-full rounded-xl border border-green-pale py-3 text-sm font-medium text-green-main">
          Ganzes Lexikon ansehen
        </button>
      </section>

      {/* Wissen entdecken */}
      <section className="max-w-6xl mx-auto px-4 py-14 sm:py-20 grid lg:grid-cols-[1fr_2fr] gap-10 lg:gap-16">
        <div className="lg:sticky lg:top-28 self-start">
          <p className="text-gold text-xs font-semibold uppercase mb-2" style={{ letterSpacing: '0.16em' }}>Zum Lesen</p>
          <h2 className="text-3xl sm:text-4xl text-green-dark leading-tight">Wissen, das berührt</h2>
          <p className="text-text-medium mt-4 leading-relaxed max-w-sm">
            Sechs Themen, nach denen Freunde am häufigsten fragen. Jedes führt tief hinein: Hintergrund, Anwendung, Erfahrung.
          </p>
        </div>
        <ol className="grid sm:grid-cols-2 gap-px bg-green-pale rounded-2xl overflow-hidden border border-green-pale">
          {ARTIKEL.map((a, i) => (
            <li key={a.titel} className="bg-paper">
              <button onClick={() => onSearch(a.suche)} className="group w-full h-full text-left p-6 sm:p-7 hover:bg-white transition-colors">
                <div className="flex items-baseline justify-between mb-3">
                  <span className={`text-[11px] font-semibold uppercase ${a.ton}`} style={{ letterSpacing: '0.14em' }}>{a.art}</span>
                  <span className="font-serif text-text-muted/70 text-sm">{String(i + 1).padStart(2, '0')}</span>
                </div>
                <h3 className="text-xl text-green-dark group-hover:text-green-main transition-colors flex items-start gap-2">
                  {a.titel}
                  <ArrowUpRight size={18} className="mt-1 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-gold" />
                </h3>
                <p className="text-sm text-text-light leading-relaxed mt-2">{a.text}</p>
              </button>
            </li>
          ))}
        </ol>
      </section>

      {/* Unter Freunden */}
      <section className="px-4 pb-16 sm:pb-24">
        <div className="max-w-6xl mx-auto relative overflow-hidden rounded-3xl bg-green-dark text-white">
          <div className="absolute inset-0 papier-korn opacity-60" />
          <div className="absolute -right-24 -top-24 w-80 h-80 rounded-full bg-green-light/20 blur-3xl" />
          <div className="relative grid lg:grid-cols-2 gap-10 p-8 sm:p-14">
            <div>
              <p className="text-gold-light/80 text-xs font-semibold uppercase mb-3" style={{ letterSpacing: '0.16em' }}>Unter Freunden</p>
              <h2 className="text-3xl sm:text-5xl leading-tight">Ein Kreis von Menschen, die sich begegnet sind.</h2>
              <p className="text-white/80 mt-5 leading-relaxed max-w-md">
                Im Heildepot teilen wir Erfahrungswissen, Kräuter und Heilmittel von Freund zu Freund,
                im Rahmen des internationalen Privatrechts. Du bestimmst selbst, was dir die Dinge wert sind.
              </p>
              <button
                onClick={onFkOpen}
                className="mt-8 inline-flex items-center gap-2 rounded-full bg-gold-light text-green-dark px-6 py-3 text-sm font-semibold hover:bg-white transition-colors"
              >
                So funktioniert der Kreis <ArrowRight size={16} />
              </button>
            </div>
            <ul className="grid sm:grid-cols-2 gap-4 self-end">
              {[
                { icon: Users, t: 'Reale Begegnung', d: 'Jedes Mitglied wurde persönlich eingeladen.' },
                { icon: HeartHandshake, t: 'Freier Wertausgleich', d: 'Du gibst, was es dir wert ist.' },
                { icon: ShieldCheck, t: 'Geschlossener Kreis', d: 'Zugang über persönliche Einladung.' },
                { icon: BookOpen, t: 'Erfahrungswissen', d: 'Aus Tradition, Erfahrung und freier Forschung.' },
              ].map(({ icon: Icon, t, d }) => (
                <li key={t} className="rounded-2xl bg-white/[0.06] border border-white/10 p-5">
                  <Icon size={20} className="text-gold-light mb-3" />
                  <p className="font-semibold">{t}</p>
                  <p className="text-sm text-white/70 mt-1 leading-snug">{d}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </div>
  )
}
