import { useState } from 'react'
import { X, Plus, Minus, Trash2, ChevronRight, ChevronLeft, Check, Truck, CreditCard, FileText, Package } from 'lucide-react'
import { apiSendAnfrage, isLoggedIn } from '../api'

const VERSAND_FREI_AB = 100
const VERSANDKOSTEN_DE = 5.90
const VERSANDKOSTEN_EU = 12.90
const VERSANDKOSTEN_WELT = 19.90

const BANK = {
  empfaenger: 'Freundeskreis Heildepot',
  iban: 'DE84 4765 0130 1110 3213 51',
  bic: 'WELADE3LXXX',
  bank: 'Sparkasse Paderborn-Detmold',
}

export function Cart({ open, onClose, items, products, onChangeQty, onRemove, user, onOrderSent }) {
  const [step, setStep] = useState('cart') // cart | checkout | done
  const [form, setForm] = useState(() => {
    if (user) return { vorname: user.vorname || '', nachname: user.nachname || '', email: user.email || '', strasse: user.strasse || '', plz: user.plz || '', ort: user.ort || '', land: user.land || 'DE', telefon: user.telefon || '' }
    try { return JSON.parse(localStorage.getItem('heildepot_checkout') || '{}') }
    catch { return {} }
  })
  const [options, setOptions] = useState({
    anwendungsblaetter: true,
    infomaterial: true,
    bestaetigungsmail: true,
    gratisartikel: true,
  })
  const [nachricht, setNachricht] = useState('')
  const [sent, setSent] = useState(false)
  const [sending, setSending] = useState(false)

  if (!open) return null

  const cartProducts = items.map(item => {
    const product = products.find(p => p.id === item.id)
    return product ? { ...product, qty: item.qty } : null
  }).filter(Boolean)

  const subtotal = cartProducts.reduce((sum, p) => {
    const price = typeof p.preis === 'number' ? p.preis : parseFloat(String(p.preis || '0').replace(',', '.'))
    return sum + price * p.qty
  }, 0)

  const land = form.land || 'DE'
  const versandkosten = subtotal >= VERSAND_FREI_AB ? 0
    : land === 'DE' ? VERSANDKOSTEN_DE
    : (land === 'AT' || land === 'CH') ? VERSANDKOSTEN_EU
    : VERSANDKOSTEN_WELT
  const total = subtotal + versandkosten

  function updateForm(key, value) {
    const updated = { ...form, [key]: value }
    setForm(updated)
    localStorage.setItem('heildepot_checkout', JSON.stringify(updated))
  }

  function toggleOption(key) {
    setOptions(prev => ({ ...prev, [key]: !prev[key] }))
  }

  function buildMailBody() {
    const lines = cartProducts.map(p => `  ${p.qty}x ${p.name}${p.menge ? ' (' + p.menge + ')' : ''} -- ${p.preis}`)
    const beilagen = []
    if (options.anwendungsblaetter) beilagen.push('Anwendungsblaetter gewuenscht')
    if (options.infomaterial) beilagen.push('Infomaterial gewuenscht')
    if (options.gratisartikel) beilagen.push('Gratisartikel gewuenscht')
    if (!options.bestaetigungsmail) beilagen.push('KEINE Bestaetigungsmail gewuenscht')

    return [
      `Anfrage aus dem Heildepot Freundeskreis`,
      ``,
      `--- Produkte ---`,
      ...lines,
      ``,
      `Zwischensumme: ${subtotal.toFixed(2).replace('.', ',')} EUR`,
      versandkosten > 0 ? `Versandkosten: ${versandkosten.toFixed(2).replace('.', ',')} EUR` : `Versand: KOSTENLOS (ab ${VERSAND_FREI_AB} EUR)`,
      `Gesamt: ${total.toFixed(2).replace('.', ',')} EUR`,
      ``,
      `--- Beilagen ---`,
      ...beilagen,
      ``,
      `--- Adresse ---`,
      `${form.vorname || ''} ${form.nachname || ''}`,
      `${form.strasse || ''}`,
      `${form.plz || ''} ${form.ort || ''}`,
      `${form.land || 'Deutschland'}`,
      form.telefon ? `Tel: ${form.telefon}` : '',
      `E-Mail: ${form.email || ''}`,
      ``,
      nachricht ? `--- Nachricht ---\n${nachricht}\n` : '',
      `--- Bankverbindung fuer Wertausgleich ---`,
      `${BANK.empfaenger}`,
      `IBAN: ${BANK.iban}`,
      `BIC: ${BANK.bic}`,
      `${BANK.bank}`,
    ].filter(Boolean).join('\n')
  }

  function buildMailto() {
    const body = encodeURIComponent(buildMailBody())
    const subject = encodeURIComponent(`Anfrage von ${form.vorname || ''} ${form.nachname || ''} -- Heildepot Freundeskreis`)
    return `mailto:?subject=${subject}&body=${body}`
  }

  function isFormValid() {
    return form.vorname && form.nachname && form.email && form.strasse && form.plz && form.ort
  }

  async function handleSend() {
    const orderData = {
      items: cartProducts.map(p => ({ name: p.name, qty: p.qty, preis: p.preis })),
      total: total.toFixed(2).replace('.', ','),
      adresse: `${form.vorname} ${form.nachname}, ${form.strasse}, ${form.plz} ${form.ort}`,
      optionen: options,
      nachricht: nachricht,
    }

    // Try API first if logged in
    if (isLoggedIn()) {
      setSending(true)
      try {
        await apiSendAnfrage(orderData)
        if (onOrderSent) onOrderSent(orderData)
        setSent(true)
        setStep('done')
        setSending(false)
        return
      } catch (err) {
        console.warn('API-Anfrage fehlgeschlagen, Fallback auf E-Mail:', err.message)
        setSending(false)
      }
    }

    // Fallback: mailto
    if (onOrderSent) onOrderSent(orderData)
    window.location.href = buildMailto()
    setSent(true)
    setStep('done')
  }

  // ─── STEP: CART ─────────────────────────────────────────
  function renderCart() {
    return (
      <>
        <div className="flex-1 overflow-y-auto p-4 space-y-3">
          {cartProducts.length === 0 ? (
            <p className="text-text-muted text-center py-12">Dein Warenkorb ist leer.</p>
          ) : (
            cartProducts.map(p => (
              <div key={p.id} className="bg-green-pale/20 rounded-lg p-3">
                <div className="flex items-start justify-between gap-2 mb-2">
                  <div className="min-w-0">
                    <h3 className="font-semibold text-text-dark text-sm truncate">{p.name}</h3>
                    {p.menge && <span className="text-xs text-text-muted">{p.menge}</span>}
                  </div>
                  <span className="text-sm font-semibold text-green-dark whitespace-nowrap">{p.preis},-</span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <button onClick={() => onChangeQty(p.id, -1)} className="w-7 h-7 rounded-full bg-white border border-green-pale flex items-center justify-center text-text-medium hover:border-green-main transition-colors">
                      <Minus size={14} />
                    </button>
                    <span className="text-sm font-medium w-6 text-center">{p.qty}</span>
                    <button onClick={() => onChangeQty(p.id, 1)} className="w-7 h-7 rounded-full bg-white border border-green-pale flex items-center justify-center text-text-medium hover:border-green-main transition-colors">
                      <Plus size={14} />
                    </button>
                  </div>
                  <button onClick={() => onRemove(p.id)} className="text-text-muted hover:text-red-500 transition-colors p-1">
                    <Trash2 size={16} />
                  </button>
                </div>
              </div>
            ))
          )}
        </div>

        {cartProducts.length > 0 && (
          <div className="border-t border-green-pale p-4 space-y-3">
            {/* Subtotal */}
            <div className="flex items-center justify-between text-sm">
              <span className="text-text-medium">Zwischensumme</span>
              <span className="font-medium text-text-dark">{subtotal.toFixed(2).replace('.', ',')} EUR</span>
            </div>

            {/* Versandkosten-Hinweis */}
            <div className="flex items-center justify-between text-sm">
              <span className="text-text-medium flex items-center gap-1"><Truck size={14} /> Versand</span>
              {subtotal >= VERSAND_FREI_AB ? (
                <span className="font-medium text-green-main">KOSTENLOS</span>
              ) : (
                <span className="text-text-muted">ab {VERSANDKOSTEN_DE.toFixed(2).replace('.', ',')} EUR</span>
              )}
            </div>

            {subtotal < VERSAND_FREI_AB && (
              <div className="bg-gold-light/30 rounded-lg p-2.5">
                <p className="text-xs text-text-medium">
                  Noch <span className="font-semibold text-green-dark">{(VERSAND_FREI_AB - subtotal).toFixed(2).replace('.', ',')} EUR</span> bis zum kostenlosen Versand!
                </p>
                <div className="mt-1.5 h-1.5 bg-green-pale/50 rounded-full overflow-hidden">
                  <div className="h-full bg-green-main rounded-full transition-all" style={{ width: `${Math.min(100, (subtotal / VERSAND_FREI_AB) * 100)}%` }} />
                </div>
              </div>
            )}

            {/* Total */}
            <div className="flex items-center justify-between pt-2 border-t border-green-pale/50">
              <span className="text-text-medium font-medium">Gesamt</span>
              <span className="text-xl font-bold text-green-dark">{total.toFixed(2).replace('.', ',')} EUR</span>
            </div>

            <button
              onClick={() => setStep('checkout')}
              className="w-full py-3 rounded-xl bg-green-main text-white font-medium text-center hover:bg-green-dark transition-colors flex items-center justify-center gap-2"
            >
              Weiter zur Anfrage <ChevronRight size={18} />
            </button>

            <p className="text-xs text-text-muted text-center">
              Kein Online-Shop -- du sendest eine persoenliche Anfrage an den Freundeskreis.
            </p>
          </div>
        )}
      </>
    )
  }

  // ─── STEP: CHECKOUT ─────────────────────────────────────
  function renderCheckout() {
    return (
      <div className="flex-1 overflow-y-auto p-4 space-y-5">
        {/* Zurueck */}
        <button onClick={() => setStep('cart')} className="text-sm text-text-muted hover:text-green-main flex items-center gap-1">
          <ChevronLeft size={16} /> Zurueck zum Warenkorb
        </button>

        {/* Adresse */}
        <div>
          <h3 className="text-sm font-semibold text-text-dark uppercase tracking-wide mb-3 flex items-center gap-2">
            <Package size={16} className="text-green-main" /> Lieferadresse
          </h3>
          <div className="space-y-2.5">
            <div className="grid grid-cols-2 gap-2">
              <input type="text" placeholder="Vorname *" value={form.vorname || ''} onChange={e => updateForm('vorname', e.target.value)}
                className="px-3 py-2.5 rounded-lg border border-green-pale text-sm focus:outline-none focus:border-green-main transition-colors" />
              <input type="text" placeholder="Nachname *" value={form.nachname || ''} onChange={e => updateForm('nachname', e.target.value)}
                className="px-3 py-2.5 rounded-lg border border-green-pale text-sm focus:outline-none focus:border-green-main transition-colors" />
            </div>
            <input type="text" placeholder="Strasse & Hausnummer *" value={form.strasse || ''} onChange={e => updateForm('strasse', e.target.value)}
              className="w-full px-3 py-2.5 rounded-lg border border-green-pale text-sm focus:outline-none focus:border-green-main transition-colors" />
            <div className="grid grid-cols-3 gap-2">
              <input type="text" placeholder="PLZ *" value={form.plz || ''} onChange={e => updateForm('plz', e.target.value)}
                className="px-3 py-2.5 rounded-lg border border-green-pale text-sm focus:outline-none focus:border-green-main transition-colors" />
              <input type="text" placeholder="Ort *" value={form.ort || ''} onChange={e => updateForm('ort', e.target.value)}
                className="col-span-2 px-3 py-2.5 rounded-lg border border-green-pale text-sm focus:outline-none focus:border-green-main transition-colors" />
            </div>
            <select value={form.land || 'DE'} onChange={e => updateForm('land', e.target.value)}
              className="w-full px-3 py-2.5 rounded-lg border border-green-pale text-sm focus:outline-none focus:border-green-main transition-colors bg-white">
              <option value="DE">Deutschland</option>
              <option value="AT">Oesterreich</option>
              <option value="CH">Schweiz</option>
              <option value="EU">Anderes EU-Land</option>
              <option value="WELT">Weltweit</option>
            </select>
          </div>
        </div>

        {/* Kontakt */}
        <div>
          <h3 className="text-sm font-semibold text-text-dark uppercase tracking-wide mb-3 flex items-center gap-2">
            <FileText size={16} className="text-green-main" /> Kontakt
          </h3>
          <div className="space-y-2.5">
            <input type="email" placeholder="E-Mail Adresse *" value={form.email || ''} onChange={e => updateForm('email', e.target.value)}
              className="w-full px-3 py-2.5 rounded-lg border border-green-pale text-sm focus:outline-none focus:border-green-main transition-colors" />
            <input type="tel" placeholder="Telefon (optional)" value={form.telefon || ''} onChange={e => updateForm('telefon', e.target.value)}
              className="w-full px-3 py-2.5 rounded-lg border border-green-pale text-sm focus:outline-none focus:border-green-main transition-colors" />
          </div>
        </div>

        {/* Beilagen-Optionen */}
        <div>
          <h3 className="text-sm font-semibold text-text-dark uppercase tracking-wide mb-3 flex items-center gap-2">
            <Package size={16} className="text-green-main" /> Beilagen & Optionen
          </h3>
          <div className="space-y-2">
            <CheckOption checked={options.anwendungsblaetter} onChange={() => toggleOption('anwendungsblaetter')}
              label="Anwendungsblaetter zu den Artikeln beilegen" />
            <CheckOption checked={options.infomaterial} onChange={() => toggleOption('infomaterial')}
              label="Sonstiges Informationsmaterial beilegen" />
            <CheckOption checked={options.gratisartikel} onChange={() => toggleOption('gratisartikel')}
              label="Kostenlose Artikel beilegen (Chartres-Karten, Blume-des-Lebens-Aufkleber, Faltblaetter)" />
            <CheckOption checked={options.bestaetigungsmail} onChange={() => toggleOption('bestaetigungsmail')}
              label="Bestaetigungsmail erhalten" />
          </div>
          <p className="text-xs text-text-muted mt-2 italic">
            Hinweis: E-Mails werden unverschluesselt versendet. Du kannst die Bestaetigungsmail auch abwaehlen.
          </p>
        </div>

        {/* Nachricht */}
        <div>
          <h3 className="text-sm font-semibold text-text-dark uppercase tracking-wide mb-3">Persoenliche Nachricht</h3>
          <textarea
            placeholder="Gibt es etwas, das wir wissen sollten? Fragen, Wuensche, Anmerkungen..."
            value={nachricht}
            onChange={e => setNachricht(e.target.value)}
            rows={3}
            className="w-full px-3 py-2.5 rounded-lg border border-green-pale text-sm focus:outline-none focus:border-green-main transition-colors resize-none"
          />
        </div>

        {/* Versandinfo */}
        <div className="bg-green-pale/20 rounded-lg p-3 space-y-2">
          <div className="flex items-center gap-2 text-sm font-medium text-text-dark">
            <Truck size={16} className="text-green-main" /> Versandinformationen
          </div>
          <p className="text-xs text-text-medium leading-relaxed">
            Versand ueber DHL. Ab {VERSAND_FREI_AB},- EUR uebernehmen wir die gesamten Versandkosten.
            Wir senden an Freunde in der ganzen Welt -- mit Ausnahme von CBD-Oel in Laendern, wo es nicht legalisiert ist.
          </p>
          <div className="flex items-center justify-between text-xs text-text-medium pt-1 border-t border-green-pale/50">
            <span>Versandkosten</span>
            {versandkosten === 0 ? (
              <span className="font-medium text-green-main">KOSTENLOS</span>
            ) : (
              <span className="font-medium">{versandkosten.toFixed(2).replace('.', ',')} EUR</span>
            )}
          </div>
        </div>

        {/* Zusammenfassung */}
        <div className="bg-white border border-green-pale rounded-lg p-3 space-y-2">
          <h3 className="text-sm font-semibold text-text-dark">Zusammenfassung</h3>
          {cartProducts.map(p => (
            <div key={p.id} className="flex justify-between text-xs text-text-medium">
              <span>{p.qty}x {p.name}</span>
              <span>{p.preis},-</span>
            </div>
          ))}
          <div className="border-t border-green-pale/50 pt-1.5 flex justify-between text-xs">
            <span>Zwischensumme</span>
            <span>{subtotal.toFixed(2).replace('.', ',')} EUR</span>
          </div>
          <div className="flex justify-between text-xs">
            <span>Versand</span>
            <span>{versandkosten === 0 ? 'KOSTENLOS' : versandkosten.toFixed(2).replace('.', ',') + ' EUR'}</span>
          </div>
          <div className="border-t border-green-pale pt-1.5 flex justify-between font-semibold text-sm text-green-dark">
            <span>Gesamt</span>
            <span>{total.toFixed(2).replace('.', ',')} EUR</span>
          </div>
        </div>

        {/* Bankverbindung */}
        <div className="bg-gold-light/20 border border-gold/30 rounded-lg p-3 space-y-1">
          <div className="flex items-center gap-2 text-sm font-medium text-text-dark">
            <CreditCard size={16} className="text-gold" /> Wertausgleich per Ueberweisung
          </div>
          <p className="text-xs text-text-medium">{BANK.empfaenger}</p>
          <p className="text-xs font-mono text-text-dark">{BANK.iban}</p>
          <p className="text-xs text-text-muted">{BANK.bic} -- {BANK.bank}</p>
        </div>

        {/* Submit */}
        <div className="space-y-3 pb-4">
          {!isFormValid() && (
            <p className="text-xs text-red-500 text-center">Bitte fuelle alle Pflichtfelder (*) aus.</p>
          )}
          <button
            onClick={handleSend}
            disabled={!isFormValid()}
            className={`w-full py-3 rounded-xl font-medium text-center transition-colors flex items-center justify-center gap-2 ${
              isFormValid()
                ? 'bg-green-main text-white hover:bg-green-dark'
                : 'bg-gray-200 text-gray-400 cursor-not-allowed'
            }`}
          >
            Anfrage senden <ChevronRight size={18} />
          </button>
          <p className="text-xs text-text-muted text-center">
            Deine Anfrage wird als E-Mail an den Freundeskreis gesendet. Es ist kein Kauf -- nur eine persoenliche Anfrage.
          </p>
        </div>
      </div>
    )
  }

  // ─── STEP: DONE ─────────────────────────────────────────
  function renderDone() {
    return (
      <div className="flex-1 flex flex-col items-center justify-center p-8 text-center">
        <div className="w-16 h-16 rounded-full bg-green-main/10 flex items-center justify-center mb-4">
          <Check size={32} className="text-green-main" />
        </div>
        <h3 className="font-serif text-xl font-semibold text-green-dark mb-2">Anfrage gesendet!</h3>
        <p className="text-sm text-text-medium leading-relaxed mb-6 max-w-xs">
          Deine Anfrage wird in deinem E-Mail-Programm vorbereitet. Sende die E-Mail ab, und wir melden uns bei dir.
        </p>

        <div className="bg-gold-light/20 border border-gold/30 rounded-lg p-4 mb-6 w-full max-w-xs">
          <p className="text-xs font-medium text-text-dark mb-1">Bitte ueberweise den Wertausgleich an:</p>
          <p className="text-xs text-text-medium">{BANK.empfaenger}</p>
          <p className="text-xs font-mono text-text-dark mt-1">{BANK.iban}</p>
          <p className="text-xs text-text-muted">{BANK.bic}</p>
        </div>

        <button
          onClick={() => { setStep('cart'); setSent(false); onClose() }}
          className="px-6 py-2.5 rounded-xl bg-green-pale/60 text-green-dark font-medium text-sm hover:bg-green-main hover:text-white transition-colors"
        >
          Zurueck zum Heildepot
        </button>
      </div>
    )
  }

  return (
    <>
      <div className="fixed inset-0 bg-black/30 z-50 transition-opacity" onClick={onClose} />
      <div className="fixed right-0 top-0 bottom-0 w-full max-w-md bg-white z-50 shadow-2xl flex flex-col animate-slide-in">
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-green-pale">
          <h2 className="font-serif text-xl font-semibold text-green-dark">
            {step === 'cart' && 'Warenkorb'}
            {step === 'checkout' && 'Anfrage senden'}
            {step === 'done' && 'Fertig!'}
          </h2>
          <button onClick={onClose} className="text-text-muted hover:text-text-dark transition-colors p-1">
            <X size={22} />
          </button>
        </div>

        {step === 'cart' && renderCart()}
        {step === 'checkout' && renderCheckout()}
        {step === 'done' && renderDone()}

        <style>{`
          @keyframes slide-in {
            from { transform: translateX(100%); }
            to { transform: translateX(0); }
          }
          .animate-slide-in {
            animation: slide-in 0.25s ease-out;
          }
        `}</style>
      </div>
    </>
  )
}

function CheckOption({ checked, onChange, label }) {
  return (
    <label className="flex items-start gap-2.5 cursor-pointer group">
      <div
        onClick={onChange}
        className={`w-5 h-5 rounded border-2 flex items-center justify-center shrink-0 mt-0.5 transition-all ${
          checked
            ? 'bg-green-main border-green-main'
            : 'border-green-pale group-hover:border-green-main'
        }`}
      >
        {checked && <Check size={13} className="text-white" />}
      </div>
      <span className="text-sm text-text-medium leading-snug">{label}</span>
    </label>
  )
}
