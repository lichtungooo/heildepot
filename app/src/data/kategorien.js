// Die Hauptkategorien des Heildepots, eine Quelle für Startseite und Lexikon.
// bild: Name unter public/bilder/ (je -800.webp und -1600.webp), Nachweis in bildquellen.json
import { ALL_CONDITIONS, HERBS, PRODUCTS, FASTING_METHODS, NUTRITION_STYLES, TOPICS, KRAEUTERMISCHUNGEN, SALBEN_REZEPTE, TINKTUREN_REZEPTE, ALCHEMIE, HEXENWISSEN_ANLEITUNGEN, HEXENREZEPTE, BEWUSSTSEINS_PFLANZEN, ZIRBELDRUESE_WISSEN, ZIRBELDRUESE_REZEPTE, ALCHEMIE_DEEP, KLOSTERMEDIZIN, GRIMOIRE_REZEPTE, SUCHTFORMEN, HEILANSAETZE_SUCHT } from './index'

const n = a => (a || []).length

export const KATEGORIEN = [
  {
    id: 'krankheitsbilder',
    titel: 'Krankheitsbilder',
    text: 'Von Erkältung bis Trauma, ganzheitlich beleuchtet: Körper, Seele, Kräuter, Ernährung.',
    bild: 'krankheitsbilder',
    anzahl: () => n(ALL_CONDITIONS),
    einheit: 'Beschwerden',
    aktion: 'category', ziel: 'krankheitsbilder',
  },
  {
    id: 'krauter',
    titel: 'Heilkräuter',
    text: 'Pflanzen mit Wirkung, Ernte, Zubereitung und altem Wissen.',
    bild: 'krauter',
    anzahl: () => n(HERBS),
    einheit: 'Pflanzen',
    aktion: 'category', ziel: 'krauter',
  },
  {
    id: 'fasten',
    titel: 'Fasten & Reinigung',
    text: 'Intervallfasten, Wasserfasten, Ölziehen, Parasitenkur.',
    bild: 'fasten',
    anzahl: () => n(FASTING_METHODS),
    einheit: 'Wege',
    aktion: 'category', ziel: 'fasten',
  },
  {
    id: 'ernaehrung',
    titel: 'Ernährung',
    text: 'Keto, Vegan, Rohkost, Ayurveda, TCM im Vergleich.',
    bild: 'ernaehrung',
    anzahl: () => n(NUTRITION_STYLES),
    einheit: 'Stile',
    aktion: 'category', ziel: 'ernaehrung',
  },
  {
    id: 'hexenwissen',
    titel: 'Hexenwissen & Alchemie',
    text: 'Tränke, Salben, Tinkturen, Spagyrik, Zirbeldrüse und der Jahreskreis.',
    bild: 'hexenwissen',
    anzahl: () => n(KRAEUTERMISCHUNGEN) + n(SALBEN_REZEPTE) + n(TINKTUREN_REZEPTE) + n(ALCHEMIE) + n(HEXENWISSEN_ANLEITUNGEN) + n(HEXENREZEPTE) + n(BEWUSSTSEINS_PFLANZEN) + n(ZIRBELDRUESE_WISSEN) + n(ZIRBELDRUESE_REZEPTE) + n(ALCHEMIE_DEEP) + n(KLOSTERMEDIZIN) + n(GRIMOIRE_REZEPTE),
    einheit: 'Rezepte & Lehren',
    aktion: 'category', ziel: 'hexenwissen',
  },
  {
    id: 'sucht',
    titel: 'Sucht ist heilbar',
    text: 'Iboga, Bruno Gröning, Meditation, NAD+ und Wege zurück ins Leben.',
    bild: 'sucht',
    anzahl: () => n(SUCHTFORMEN) + n(HEILANSAETZE_SUCHT),
    einheit: 'Wege',
    aktion: 'category', ziel: 'sucht',
  },
  {
    id: 'produkte',
    titel: 'Aus dem Depot',
    text: 'CBD, Zeolith, Borax, Kräuter und Öle, geteilt unter Freunden.',
    bild: 'produkte',
    anzahl: () => n(PRODUCTS),
    einheit: 'Produkte',
    aktion: 'produkte',
  },
  {
    id: 'wissen',
    titel: 'Wissen & Anleitungen',
    text: 'Kolloidales Silber, Borax, CBD, Schwermetall-Ausleitung.',
    bild: 'buehne',
    anzahl: () => n(TOPICS),
    einheit: 'Anleitungen',
    aktion: 'search', suche: 'Kolloidales Silber',
  },
]

export const bildPfad = (name, breite = 800) => `/bilder/${name}-${breite}.webp`
export const bildSrcSet = name => `${bildPfad(name, 800)} 800w, ${bildPfad(name, 1600)} 1600w`
