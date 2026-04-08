import { useState } from 'react'
import { X, Users, Heart, Shield, BookOpen, Scale, Globe, Lock, Truck, CreditCard, Leaf, Mail } from 'lucide-react'

// ═══════════════════════════════════════════════════════════════════
// FREUNDESKREIS MODAL — Hauptmodal mit Tabs
// ═══════════════════════════════════════════════════════════════════
export function FreundeskreisModal({ open, onClose }) {
  const [tab, setTab] = useState('freundeskreis')

  if (!open) return null

  const tabs = [
    { id: 'freundeskreis', label: 'Freundeskreis', icon: Users },
    { id: 'recht', label: 'Rechtliches', icon: Scale },
    { id: 'datenschutz', label: 'Datenschutz', icon: Lock },
  ]

  return (
    <>
      <div className="fixed inset-0 bg-black/40 z-50" onClick={onClose} />
      <div className="fixed inset-2 sm:inset-auto sm:top-1/2 sm:left-1/2 sm:-translate-x-1/2 sm:-translate-y-1/2 sm:w-full sm:max-w-2xl sm:max-h-[90vh] bg-white rounded-2xl z-50 shadow-2xl flex flex-col overflow-hidden animate-modal-in">
        <div className="flex items-center justify-between p-4 border-b border-green-pale/50">
          <div className="flex items-center gap-3">
            <Users size={22} className="text-green-main" />
            <h2 className="font-serif text-lg font-semibold text-green-dark">Unter Freunden</h2>
          </div>
          <button onClick={onClose} className="text-text-muted hover:text-text-dark transition-colors p-1"><X size={20} /></button>
        </div>

        <div className="flex border-b border-green-pale/50 px-4">
          {tabs.map(t => {
            const Icon = t.icon
            return (
              <button key={t.id} onClick={() => setTab(t.id)}
                className={`flex-1 py-2.5 text-xs font-medium flex items-center justify-center gap-1.5 transition-all border-b-2 ${
                  tab === t.id ? 'text-green-main border-green-main' : 'text-text-muted border-transparent hover:text-text-dark'
                }`}>
                <Icon size={14} /> {t.label}
              </button>
            )
          })}
        </div>

        <div className="flex-1 overflow-y-auto p-5 space-y-4">
          {tab === 'freundeskreis' && <TabFreundeskreis />}
          {tab === 'recht' && <TabRecht />}
          {tab === 'datenschutz' && <TabDatenschutz />}
        </div>

        <style>{`
          @keyframes modal-in { from { opacity: 0; transform: scale(0.95) translateY(10px); } to { opacity: 1; transform: scale(1) translateY(0); } }
          .animate-modal-in { animation: modal-in 0.2s ease-out; }
        `}</style>
      </div>
    </>
  )
}

// ═══════════════════════════════════════════════════════════════════
// VERSAND MODAL
// ═══════════════════════════════════════════════════════════════════
export function VersandModal({ open, onClose }) {
  if (!open) return null

  return (
    <>
      <div className="fixed inset-0 bg-black/40 z-50" onClick={onClose} />
      <div className="fixed inset-2 sm:inset-auto sm:top-1/2 sm:left-1/2 sm:-translate-x-1/2 sm:-translate-y-1/2 sm:w-full sm:max-w-lg sm:max-h-[85vh] bg-white rounded-2xl z-50 shadow-2xl flex flex-col overflow-hidden animate-modal-in">
        <div className="flex items-center justify-between p-4 border-b border-green-pale/50">
          <div className="flex items-center gap-3">
            <Truck size={22} className="text-green-main" />
            <h2 className="font-serif text-lg font-semibold text-green-dark">Versand & Anfragen</h2>
          </div>
          <button onClick={onClose} className="text-text-muted hover:text-text-dark transition-colors p-1"><X size={20} /></button>
        </div>

        <div className="flex-1 overflow-y-auto p-5 space-y-4">
          <Section title="Einfach und sicher anfragen">
            <p>Du kannst sicher und anonym auf unserer Webseite surfen, weil diese per SSL verschluesselt ist.
            Wir verzichten bewusst auf klassische Shop-Systeme, Benutzerkonten und komplizierte Registrierungen.
            Stattdessen sendest du eine persoenliche Anfrage -- wie eine Nachricht an einen Freund.</p>
          </Section>

          <Section title="Warum Anfragen statt Bestellungen?">
            <p>Im Freundeskreis gibt es keine Kaufvertraege. Du teilst deinen Wunsch mit, und wir
            kuemmern uns darum. Das Ganze basiert auf dem internationalen Privatrecht -- dem freien
            Austausch unter Privatpersonen. Deshalb nutzen wir ein System, bei dem du anonym bleibst
            und nur das mitteilst, was du moechtest.</p>
          </Section>

          <Section title="Versandgebiet">
            <p>Wir senden heilsame Mittel an Freunde in der ganzen Welt. Ausnahmen machen wir bei
            CBD-Oel, weil es in bestimmten Staaten noch nicht legalisiert ist. Der Versand erfolgt ueber DHL.</p>
          </Section>

          <Section title="Versandkosten">
            <div className="bg-green-pale/20 rounded-lg p-3 space-y-2">
              <div className="flex justify-between text-xs">
                <span>Deutschland</span><span className="font-medium">5,90 EUR</span>
              </div>
              <div className="flex justify-between text-xs">
                <span>Oesterreich / Schweiz</span><span className="font-medium">12,90 EUR</span>
              </div>
              <div className="flex justify-between text-xs">
                <span>Weltweit</span><span className="font-medium">19,90 EUR</span>
              </div>
              <div className="border-t border-green-pale/50 pt-2 flex justify-between text-xs font-semibold text-green-dark">
                <span>Ab 100,- EUR</span><span>KOSTENLOS</span>
              </div>
            </div>
            <p className="text-[11px] text-text-muted mt-1">Bei Anfragen ab 100,- EUR tragen wir die gesamten Kosten fuer Verpackung und Porto.</p>
          </Section>

          <Section title="Beilagen bestimmen">
            <p>Du bestimmst selbst, welche Materialien deiner Sendung beiliegen -- der Umwelt zuliebe.
            Im Anfrageprozess kannst du Haekchen setzen fuer:</p>
            <ul className="list-disc pl-4 space-y-1 mt-1">
              <li>Anwendungsblaetter zu den Artikeln</li>
              <li>Sonstiges Informationsmaterial</li>
              <li>Kostenlose Artikel (Chartres-Karten, Blume-des-Lebens-Aufkleber, Faltblaetter)</li>
            </ul>
          </Section>

          <Section title="Bestaetigungsmail">
            <p>Du kannst waehlen, ob du eine Bestaetigungsmail erhalten moechtest. Beachte: E-Mails
            werden grundsaetzlich unverschluesselt versendet und koennen von Dritten gelesen werden.
            Bei kostenlosen Anbietern wie Google Mail werden deine Nachrichten analysiert.</p>
          </Section>

          <Section title="Wertausgleich">
            <div className="bg-gold-light/20 border border-gold/30 rounded-lg p-3 space-y-1">
              <p className="text-xs font-medium text-text-dark">Freundeskreis-Konto</p>
              <p className="text-xs font-mono text-text-dark">IBAN: DE84 4765 0130 1110 3213 51</p>
              <p className="text-xs text-text-muted">BIC: WELADE3LXXX · Sparkasse Paderborn-Detmold</p>
            </div>
          </Section>
        </div>

        <style>{`
          @keyframes modal-in { from { opacity: 0; transform: scale(0.95) translateY(10px); } to { opacity: 1; transform: scale(1) translateY(0); } }
          .animate-modal-in { animation: modal-in 0.2s ease-out; }
        `}</style>
      </div>
    </>
  )
}

// ═══════════════════════════════════════════════════════════════════
// PRIVACY BANNER
// ═══════════════════════════════════════════════════════════════════
export function PrivacyBanner() {
  const [dismissed, setDismissed] = useState(() => !!localStorage.getItem('heildepot_privacy_ok'))
  if (dismissed) return null

  function dismiss() {
    setDismissed(true)
    localStorage.setItem('heildepot_privacy_ok', '1')
  }

  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 bg-white border-t border-green-pale shadow-lg animate-slide-up">
      <div className="max-w-4xl mx-auto px-4 py-3 flex items-center gap-4 flex-wrap sm:flex-nowrap">
        <Lock size={18} className="text-green-main shrink-0 hidden sm:block" />
        <p className="text-xs text-text-medium leading-relaxed flex-1">
          <span className="font-semibold text-text-dark">Keine Cookies. Kein Tracking. Keine Werbung.</span>{' '}
          Diese Seite respektiert deine Privatsphaere vollstaendig. Alle Daten bleiben lokal in deinem Browser.
        </p>
        <button onClick={dismiss}
          className="px-4 py-1.5 rounded-lg bg-green-main text-white text-xs font-medium hover:bg-green-dark transition-colors shrink-0">
          Verstanden
        </button>
      </div>
      <style>{`
        @keyframes slide-up { from { transform: translateY(100%); } to { transform: translateY(0); } }
        .animate-slide-up { animation: slide-up 0.3s ease-out; }
      `}</style>
    </div>
  )
}

// ═══════════════════════════════════════════════════════════════════
// TAB: FREUNDESKREIS
// ═══════════════════════════════════════════════════════════════════
function TabFreundeskreis() {
  return (
    <>
      <p className="text-sm text-text-medium leading-relaxed">
        Das Heildepot ist kein Shop. Es ist ein geschlossener Freundeskreis, in dem
        Erfahrungswissen und Naturheilmittel unter echten Menschen geteilt werden --
        persoenlich, auf Vertrauensbasis, ohne kommerziellen Rahmen.
      </p>

      <Section title="Warum agieren wir so?">
        <p>Seit Jahrtausenden teilen Menschen Heilwissen in ihren Gemeinschaften. Was als
        Erfahrungswissen von Mensch zu Mensch weitergegeben wird, braucht keinen kommerziellen
        Rahmen -- es braucht Vertrauen, persoenliche Beziehung und echte Begegnung.</p>
        <p className="mt-2">Im Freundeskreis gibt es keine Kunden und keine Haendler. Es gibt Menschen,
        die einander kennen, sich begegnet sind und fuereinander einstehen. Produkte werden
        nicht verkauft, sondern auf Basis freiwilliger Wertschaetzung geteilt.</p>
      </Section>

      <Section title="Warum ein Anfrage-System statt eines Shops?">
        <p>Wir nutzen bewusst ein System, in dem du <span className="font-semibold">Anfragen</span> stellst
        statt Bestellungen aufzugeben. Das ist kein Marketing-Trick -- es ist die rechtliche
        und philosophische Grundlage unseres Miteinanders:</p>
        <ul className="list-disc pl-4 space-y-1.5 mt-2">
          <li>Es entstehen <span className="font-semibold">keine Kaufvertraege</span> -- damit kein Handelsrecht, kein Widerrufsrecht, keine AGB</li>
          <li>Du bleibst <span className="font-semibold">so anonym wie du moechtest</span> -- kein Konto-Zwang, keine Datensammlung</li>
          <li>Der Wertausgleich ist <span className="font-semibold">freiwillig</span> -- du bestimmst selbst, was dir die Dinge wert sind</li>
          <li>Wir agieren im <span className="font-semibold">internationalen Privatrecht</span> -- dem aeltesten Rechtssystem der Welt</li>
        </ul>
      </Section>

      <div className="grid grid-cols-2 gap-3">
        <PrincipleCard icon={<Users size={18} />} title="Reale Begegnung"
          text="Jedes Mitglied wurde persoenlich eingeladen und hat sich in einer echten Begegnung kennengelernt. Keine anonyme Registrierung." />
        <PrincipleCard icon={<Heart size={18} />} title="Freiwilliger Wertausgleich"
          text="Es gibt keine festen Preise. Was du gibst, bestimmst du selbst -- als Ausdruck deiner Wertschaetzung, nicht als Bezahlung." />
        <PrincipleCard icon={<Shield size={18} />} title="Geschlossener Kreis"
          text="Der Freundeskreis ist nicht oeffentlich zugaenglich. Zugang erfolgt ausschliesslich durch persoenliche Einladung." />
        <PrincipleCard icon={<BookOpen size={18} />} title="Erfahrungswissen"
          text="Alles Wissen stammt aus persoenlicher Erfahrung, ueberlieferten Heiltraditionen und unabhaengiger Forschung." />
      </div>

      <p className="text-xs text-text-muted italic text-center pt-2">
        "Heilung geschieht nicht in Isolation. Sie geschieht in Verbindung --
        mit der Natur, mit dem eigenen Koerper und mit Menschen, denen wir vertrauen."
      </p>
    </>
  )
}

// ═══════════════════════════════════════════════════════════════════
// TAB: RECHT
// ═══════════════════════════════════════════════════════════════════
function TabRecht() {
  return (
    <>
      <div className="bg-green-main/5 rounded-lg p-4 border border-green-main/20">
        <p className="text-sm text-text-medium leading-relaxed">
          Der private Austausch unter Freunden ist durch das aelteste Rechtssystem der Welt geschuetzt:
          das <span className="font-semibold text-green-dark">internationale Privatrecht</span>. Wir agieren
          nicht im Handelsrecht, nicht im Verbraucherrecht und nicht im Gewerberecht -- sondern im Raum
          der privaten Vereinbarung zwischen souveraenen Menschen.
        </p>
      </div>

      <Section title="Warum internationales Privatrecht?">
        <p>Das internationale Privatrecht (IPR) regelt die Rechtsbeziehungen zwischen Privatpersonen
        ueber Laendergrenzen hinweg. Es ist aelter als jedes Handelsrecht und schuetzt die
        grundlegendste Form menschlicher Interaktion: den freiwilligen Austausch unter Gleichen.</p>
        <p className="mt-2">Indem wir als Freundeskreis agieren -- ohne Gewerbe, ohne Handel, ohne feste Preise --
        bewegen wir uns vollstaendig im Bereich des Privatrechts. Das ist kein Schlupfloch,
        sondern die natuerliche Rechtsform des menschlichen Miteinanders.</p>
      </Section>

      <h3 className="text-xs font-semibold text-green-dark uppercase tracking-wide pt-1">Deutsches Recht</h3>
      <div className="space-y-2">
        <LawCard a="Art. 2 Abs. 1 GG" t="Allgemeine Handlungsfreiheit (Privatautonomie)"
          d="Jeder Mensch hat das Recht, seine privaten Angelegenheiten frei zu gestalten -- einschliesslich des freien Austauschs von Waren und Wissen im privaten Kreis. Dieses Grundrecht ist die Basis unseres Handelns." />
        <LawCard a="§ 311 Abs. 1 BGB" t="Vertragsfreiheit"
          d="Private Vereinbarungen zwischen Freunden sind durch die Vertragsfreiheit geschuetzt. Form, Inhalt und Gegenleistung bestimmen die Beteiligten selbst. Es besteht keine Formvorschrift." />
        <LawCard a="§ 516 BGB" t="Schenkung"
          d="Eine Zuwendung ohne vertragliche Gegenleistung gilt als Schenkung. Der freiwillige Wertausgleich im Freundeskreis ist keine Kauftransaktion, sondern ein Ausdruck der Wertschaetzung." />
        <LawCard a="§ 13/14 BGB" t="Verbraucher vs. Unternehmer"
          d="Wer nicht geschaeftsmaessig handelt, ist kein Unternehmer im Sinne des Gesetzes. Im Freundeskreis handeln alle als Privatpersonen. Das Verbraucherschutzrecht (Widerruf, AGB-Recht, Gewaehrleistung) greift daher nicht." />
        <LawCard a="§ 22 Nr. 3 EStG" t="Freigrenze 256 EUR"
          d="Gelegentliche Einkuenfte aus privaten Taetigkeiten sind bis zu einer Freigrenze von 256 EUR pro Jahr steuerfrei. Private Wertausgleiche fallen unter diese Regelung." />
        <LawCard a="§ 1 GewO" t="Gewerbefreiheit (Umkehrschluss)"
          d="Die Gewerbeordnung gilt nur fuer gewerbsmaessige Taetigkeiten. Wer nicht gewerbsmaessig handelt, benoetigt keine Gewerbeanmeldung, kein Impressum nach § 5 TMG und keine AGB." />
      </div>

      <h3 className="text-xs font-semibold text-green-dark uppercase tracking-wide pt-3">Internationales Privatrecht</h3>
      <div className="space-y-2">
        <LawCard a="Art. 3 Rom I-VO" t="Freie Rechtswahl"
          d="Bei grenzueberschreitenden privaten Vereinbarungen koennen die Beteiligten das anwendbare Recht frei waehlen. Der Freundeskreis vereinbart deutsches Privatrecht als Grundlage." />
        <LawCard a="Art. 4 Rom I-VO" t="Mangels Rechtswahl"
          d="Ohne ausdrueckliche Rechtswahl gilt das Recht des Landes, in dem der Leistungserbringer seinen gewoehnlichen Aufenthalt hat -- in unserem Fall Deutschland." />
        <LawCard a="Art. 6 Rom I-VO" t="Verbrauchervertraege"
          d="Die besonderen Verbraucherschutzvorschriften greifen NUR bei geschaeftsmaessigem Handeln eines Unternehmers gegenueber einem Verbraucher. Da im Freundeskreis alle als Privatpersonen handeln, ist Art. 6 nicht anwendbar." />
        <LawCard a="Art. 3-5 EGBGB" t="Eingangsbestimmungen zum BGB"
          d="Das deutsche internationale Privatrecht regelt, welches Recht bei Sachverhalten mit Auslandsbezug gilt. Die Privatautonomie wird als hoechstes Gut geschuetzt." />
        <LawCard a="Haager Uebereinkommen" t="Internationale Zustaendigkeit"
          d="Fuer private, nicht-kommerzielle Vereinbarungen gelten vereinfachte Zustaendigkeitsregeln. Der Gerichtsstand richtet sich nach dem Wohnsitz der beteiligten Privatpersonen." />
        <LawCard a="UN-Kaufrecht (CISG)" t="Ausschluss"
          d="Das UN-Kaufrecht gilt nur fuer gewerbliche Kaufvertraege. Da im Freundeskreis keine Kaufvertraege geschlossen werden, ist das CISG nicht anwendbar." />
      </div>

      <div className="bg-gold-light/20 rounded-lg p-3 mt-2">
        <p className="text-xs text-text-medium leading-relaxed">
          <span className="font-semibold text-text-dark">Zusammengefasst:</span> Der private Austausch unter Freunden ist durch
          Grundgesetz, BGB und europaeisches Recht geschuetzt. Es gibt keine Kaufvertraege, keine
          Gewaehrleistung und keine Widerrufsrechte -- weil es sich nicht um Geschaefte handelt,
          sondern um freiwilligen Austausch unter souveraenen Privatpersonen auf Vertrauensbasis.
          Das ist der aelteste und natuerlichste Rechtsrahmen der Menschheit.
        </p>
      </div>
    </>
  )
}

// ═══════════════════════════════════════════════════════════════════
// TAB: DATENSCHUTZ
// ═══════════════════════════════════════════════════════════════════
function TabDatenschutz() {
  return (
    <>
      <div className="bg-green-main/5 rounded-lg p-4 border border-green-main/20">
        <div className="flex items-center gap-2 mb-2">
          <Lock size={18} className="text-green-main" />
          <h3 className="text-sm font-semibold text-green-dark">Deine Privatsphaere ist uns heilig</h3>
        </div>
        <p className="text-sm text-text-medium leading-relaxed">
          Das Heildepot respektiert deine Privatsphaere vollstaendig. Wir tracken nichts,
          wir analysieren nichts, wir verkaufen nichts. Punkt.
        </p>
      </div>

      <div className="space-y-3">
        <DsCard icon="x" title="Keine Cookies"
          text="Diese Webseite setzt keine Cookies -- weder eigene noch von Drittanbietern. Kein Cookie-Banner noetig, weil es keine Cookies gibt." />
        <DsCard icon="x" title="Kein Tracking"
          text="Kein Google Analytics, kein Facebook Pixel, kein Matomo, kein Hotjar -- gar nichts. Wir wissen nicht, woher du kommst oder was du klickst." />
        <DsCard icon="x" title="Keine Werbung"
          text="Keine Werbeanzeigen, keine Affiliate-Links, keine gesponserten Inhalte. Alles hier dient dem Wissensaustausch, nicht dem Profit." />
        <DsCard icon="x" title="Keine Weitergabe"
          text="Deine Daten werden an niemanden weitergegeben -- nicht an Behoerden, nicht an Werbepartner, nicht an Dritte." />
        <DsCard icon="x" title="Keine serverseitige Speicherung"
          text="Wir betreiben keinen Server der deine Daten speichert. Diese Seite ist eine statische Webseite auf GitHub Pages -- es gibt keine Datenbank, keinen Login-Server, keine Cloud." />
        <DsCard icon="check" title="SSL-Verschluesselung"
          text="Die gesamte Verbindung ist per SSL/TLS verschluesselt. Niemand kann mitlesen." />
        <DsCard icon="check" title="Lokale Datenspeicherung"
          text="Dein Profil, Warenkorb und Favoriten werden ausschliesslich lokal in deinem Browser gespeichert (localStorage). Du hast die volle Kontrolle und kannst alles jederzeit loeschen." />
        <DsCard icon="check" title="Quelloffener Code"
          text="Der gesamte Code dieser Webseite ist oeffentlich einsehbar. Du kannst selbst pruefen, dass wir halten, was wir versprechen." />
      </div>

      <Section title="E-Mail-Hinweis">
        <p>Anfragen werden per E-Mail versendet. E-Mails sind standardmaessig unverschluesselt
        und koennen theoretisch von Dritten gelesen werden. Kostenlose Anbieter wie Gmail
        analysieren deine Nachrichten fuer personalisierte Werbung.</p>
        <p className="mt-1.5 font-medium">Wir empfehlen datenschutzfreundliche Anbieter wie Posteo, Mailbox.org oder Tutanota.</p>
      </Section>

      <div className="bg-gold-light/20 rounded-lg p-3">
        <p className="text-xs text-text-medium leading-relaxed">
          <span className="font-semibold">Dein Recht (DSGVO):</span> Da wir keine personenbezogenen Daten
          serverseitig speichern, entfallen die meisten DSGVO-Pflichten. Deine lokal gespeicherten
          Daten kannst du jederzeit selbst loeschen (Browser-Daten loeschen). Art. 17 DSGVO
          (Recht auf Loeschung) wird damit automatisch erfuellt. Es gibt keinen Verantwortlichen
          im Sinne von Art. 4 Nr. 7 DSGVO, weil keine Verarbeitung stattfindet.
        </p>
      </div>
    </>
  )
}

// ═══════════════════════════════════════════════════════════════════
// HELPER COMPONENTS
// ═══════════════════════════════════════════════════════════════════
function Section({ title, children }) {
  return (
    <div>
      <h3 className="text-xs font-semibold text-green-dark uppercase tracking-wide mb-2">{title}</h3>
      <div className="text-[12px] text-text-medium leading-relaxed">{children}</div>
    </div>
  )
}

function PrincipleCard({ icon, title, text }) {
  return (
    <div className="bg-green-pale/15 rounded-lg p-3">
      <div className="text-green-main mb-2">{icon}</div>
      <h4 className="font-semibold text-text-dark text-xs mb-1">{title}</h4>
      <p className="text-[11px] text-text-medium leading-relaxed">{text}</p>
    </div>
  )
}

function LawCard({ a, t, d }) {
  return (
    <div className="bg-white rounded-lg border border-green-pale/60 p-3">
      <div className="flex items-start gap-2.5">
        <span className="text-[10px] font-mono bg-green-pale text-green-dark px-1.5 py-0.5 rounded shrink-0 mt-0.5">{a}</span>
        <div>
          <h4 className="font-semibold text-text-dark text-xs mb-0.5">{t}</h4>
          <p className="text-[11px] text-text-medium leading-relaxed">{d}</p>
        </div>
      </div>
    </div>
  )
}

function DsCard({ icon, title, text }) {
  return (
    <div className="flex items-start gap-3">
      <div className={`w-6 h-6 rounded-full flex items-center justify-center shrink-0 mt-0.5 ${icon === 'check' ? 'bg-green-main/10 text-green-main' : 'bg-red-50 text-red-400'}`}>
        {icon === 'check' ? (
          <svg width="12" height="12" viewBox="0 0 12 12"><path d="M2 6l3 3 5-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" /></svg>
        ) : (
          <svg width="10" height="10" viewBox="0 0 10 10"><path d="M2 2l6 6M8 2l-6 6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" /></svg>
        )}
      </div>
      <div>
        <h4 className="font-semibold text-text-dark text-xs mb-0.5">{title}</h4>
        <p className="text-[11px] text-text-medium leading-relaxed">{text}</p>
      </div>
    </div>
  )
}
