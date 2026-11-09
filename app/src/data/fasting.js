// ============================================================================
// FASTING & NUTRITION DATABASE
// Umfassende Datenbank für Fastenmethoden, Ernährungsstile und Vergleiche
// ============================================================================

export const FASTING_METHODS = [

  // =========================================================================
  // GROSSE FASTENFORMEN
  // =========================================================================

  {
    id: 'wasserfasten',
    name: 'Wasserfasten',
    kategorie: 'Große Fastenformen',
    dauer: '3-40 Tage',
    intensitaet: 'Hoch',
    beschreibung:
      'Wasserfasten ist die reinste und älteste Form des Fastens. Es wird ausschließlich Wasser getrunken -- keine Nahrung, keine Säfte, keine Brühe. Der Körper schaltet nach etwa 24-72 Stunden vollständig auf Fettverbrennung und Ketose um. Ab Tag 3 setzt die tiefe Autophagie ein -- der Körper beginnt, beschädigte Zellen, Eiweißablagerungen und entartete Strukturen systematisch abzubauen und zu recyceln. Wasserfasten ist die kraftvollste Form der körperlichen Selbstreinigung und wurde in nahezu allen Heiltraditionen der Welt praktiziert.',
    wirkung:
      'Tiefe Autophagie und Zellregeneration ab Tag 3. Stammzellenaktivierung ab Tag 5-7. Massiver Abbau von Entzündungsmarkern (CRP, IL-6, TNF-alpha). Insulinspiegel fällt auf ein Minimum, Wachstumshormonspiegel steigt um das 5-fache. Der Körper wechselt vollständig in die Ketose -- Ketonkörper (besonders Beta-Hydroxybutyrat) nähren das Gehirn und schützen Nervenzellen. Alte, seneszente Zellen werden abgebaut (Senolytischer Effekt). Das Immunsystem wird nach dem Fasten komplett erneuert.',
    seele:
      'Wasserfasten bringt eine tiefe Stille. Viele berichten ab Tag 3-4 von außergewöhnlicher mentaler Klarheit, lebhaften Traeumen und einem Gefühl innerer Reinheit. Emotionale Altlasten können hochkommen und sich lösen. Es entsteht ein tiefes Vertrauen in die Selbstheilungskraft des Körpers. Manche erleben spirituelle Öffnungen, Visionen oder ein Gefühl tiefer Verbundenheit.',
    anleitung:
      '1. Entladetage: 2-3 Tage vorher nur leichte Kost (Obst, Gemüse, Suppen). 2. Am ersten Fastentag: Morgens Glaubersalz oder Bittersalz zur Darmentleerung. 3. Täglich 2-3 Liter reines, stilles Wasser trinken. Quellwasser oder gefiltertes Wasser bevorzugen. 4. Ruhe einplanen -- besonders die ersten 3 Tage. 5. Leichte Bewegung (Spaziergänge) ist gut, Anstrengung vermeiden. 6. Bei Bedarf: Einläufe alle 2-3 Tage zur Unterstützung der Darmreinigung. 7. Täglich Zungenreinigung. 8. Fastenbrechen sehr behutsam mit einem Apfel oder Wassermelone.',
    vorbereitung:
      '1-2 Wochen vorher: Kaffee, Alkohol, Zucker und verarbeitete Lebensmittel ausschleichen. Letzten 3 Tage: Nur Obst, Gemüse, leichte Suppen. Am Tag vor dem Fasten: Letzte Mahlzeit am frühen Nachmittag, leicht verdaulich. Genug Ruhe einplanen -- kein vollgestopfter Terminkalender während des Fastens.',
    aufbau:
      'Die Aufbautage sind mindestens so wichtig wie das Fasten selbst. Faustregel: Aufbautage = mindestens ein Drittel der Fastendauer. Tag 1: Ein Apfel, langsam und gründlich kauen. Später leichte Gemüsesuppe. Tag 2: Gedämpftes Gemüse, etwas Reis. Tag 3: Langsam Fette einführen (Avocado, Olivenöl). Ab Tag 4: Normale, leichte Kost. Niemals mit schwerem Essen brechen -- die Verdauungsorgane müssen sanft wieder aktiviert werden.',
    vorsicht:
      'Nicht geeignet bei: Schwangerschaft, Stillzeit, Essstörungen (Anorexie, Bulimie), starkem Untergewicht (BMI unter 18.5), Typ-1-Diabetes, schwerer Niereninsuffizienz, akuten Infektionen. Bei längerem Fasten (über 7 Tage) ärztliche Begleitung empfohlen. Medikamente müssen ggf. angepasst werden (besonders Blutdrucksenker, Blutzuckermedikamente). Kinder und Jugendliche sollten nicht länger als 24 Stunden fasten.',
    besonders_bei: ['arthrose', 'entzuendung', 'autoimmun', 'krebs', 'uebergewicht', 'diabetes-typ2', 'bluthochdruck', 'rheuma', 'hauterkrankungen', 'allergien', 'depression', 'chronische-schmerzen'],
    begleitende_mittel: ['Zeolith', 'Brennnesseltee', 'Natron', 'Einläufe', 'Bittersalz', 'Quellwasser', 'Zungenreiniger'],
    tags: ['#fasten', '#wasserfasten', '#autophagie', '#reinigung', '#heilfasten', '#ketose', '#stammzellen']
  },

  {
    id: 'buchinger-heilfasten',
    name: 'Heilfasten nach Buchinger',
    kategorie: 'Große Fastenformen',
    dauer: '5-21 Tage',
    intensitaet: 'Mittel bis Hoch',
    beschreibung:
      'Das Buchinger-Heilfasten wurde von Dr. Otto Buchinger entwickelt, der sich selbst durch Fasten von schwerer rheumatoider Arthritis heilte. Es ist die in Europa am weitesten verbreitete Fastenmethode und wird in vielen Kliniken praktiziert. Im Gegensatz zum reinen Wasserfasten erlaubt es kleine Mengen Gemüsebrühe (250 ml), Obstsäfte (250 ml), Honig (1-2 TL) und reichlich Kräutertee. Diese minimale Kalorienzufuhr (ca. 200-300 kcal) erleichtert den Einstieg und macht das Fasten für viele Menschen zugänglicher, während die wesentlichen Fastenmechanismen erhalten bleiben.',
    wirkung:
      'Autophagie setzt zuverlässig ein, wenn auch etwas später als beim reinen Wasserfasten. Starke Entzündungshemmung -- besonders wirksam bei rheumatischen Erkrankungen. Blutdruck normalisiert sich häufig innerhalb weniger Tage. Insulinresistenz verbessert sich deutlich. Die Brühe liefert wichtige Elektrolyte, was Fastennebenwirkungen (Kopfschmerzen, Schwindel) reduziert. Leberregenerierung. Darmflora wird zurückgesetzt.',
    seele:
      'Buchinger-Fasten wird oft als sanfterer Einstieg in die Fastenerfahrung erlebt. Die warme Brühe am Abend gibt ein Gefühl der Geborgenheit. Mentale Klarheit stellt sich meist ab Tag 3-4 ein. Buchinger selbst sprach von einer "Diät der Seele" -- er empfahl während des Fastens Meditation, Lesen inspirierender Texte und Stille.',
    anleitung:
      '1. Entladetag: Leichter Reistag oder Obsttag (ca. 600 kcal). 2. Darmentleerung mit Glaubersalz (30-40g in 750ml Wasser). 3. Täglich: Morgens Kräutertee mit etwas Honig, mittags 250ml frisch gepresster Obstsaft (1:1 mit Wasser), abends 250ml klare Gemüsebrühe. 4. Über den Tag 2-3 Liter Wasser und Tee. 5. Täglich Bewegung an der frischen Luft (30-60 Minuten Spaziergang). 6. Leberwickel am Nachmittag (feuchtwarmes Tuch auf den rechten Oberbauch, Wärmflasche drüber, 30 Min ruhen). 7. Alle 2 Tage Einlauf.',
    vorbereitung:
      'Eine Woche vorher: Kaffee, Alkohol und Zucker reduzieren. 2-3 Tage vorher: Auf leichte, pflanzliche Kost umsteigen. Genug Ruhezeit einplanen. Fastenverpflegung vorbereiten (Gemüsebrühe kochen, Tees besorgen, Einlauf-Set bereitlegen).',
    aufbau:
      'Tag 1: Fastenbrechen mit einem reifen Apfel -- langsam, achtsam kauen (Buchinger nannte dies den "kostbarsten Apfel des Lebens"). Mittags leichte Kartoffelsuppe. Tag 2: Gedämpftes Gemüse, Kartoffeln. Tag 3: Langsam erweitern. Mindestens 3-4 Aufbautage einplanen. Weiterhin keinen Kaffee, Alkohol oder Zucker.',
    vorsicht:
      'Gleiche Kontraindikationen wie Wasserfasten. Zusätzlich: Fruchtsäfte können bei manchen Menschen Blutzuckerschwankungen auslösen. Bei bekannter Fructoseintoleranz die Säfte weglassen oder durch Gemüsesaft ersetzen. Ärztliche Begleitung bei Fasten über 7 Tage empfohlen.',
    besonders_bei: ['rheuma', 'arthrose', 'bluthochdruck', 'uebergewicht', 'diabetes-typ2', 'hauterkrankungen', 'migraine', 'entzuendung', 'erschoepfung', 'burnout'],
    begleitende_mittel: ['Kräutertee (Pfefferminze, Fenchel, Kamille)', 'Leberwickel', 'Glaubersalz', 'Einläufe', 'Basenpulver', 'Zeolith', 'Brennnesseltee'],
    tags: ['#fasten', '#buchinger', '#heilfasten', '#brühe', '#klinikfasten', '#autophagie']
  },

  {
    id: 'trockenfasten',
    name: 'Trockenfasten',
    kategorie: 'Große Fastenformen',
    dauer: '1-3 Tage (für Erfahrene bis 5 Tage)',
    intensitaet: 'Sehr hoch',
    beschreibung:
      'Beim Trockenfasten wird weder gegessen noch getrunken -- auch kein Wasser. Es ist die intensivste Form des Fastens und wird in verschiedenen Traditionen praktiziert (Ramadan als "weiches" Trockenfasten, russische Fastentraditionen als "hartes" Trockenfasten). Man unterscheidet weiches Trockenfasten (Hautkontakt mit Wasser erlaubt -- Duschen, Baden) und hartes Trockenfasten (kein Wasserkontakt). Der Körper gewinnt sein Wasser aus dem Fettabbau (metabolisches Wasser) und baut dabei etwa 3x schneller ab als beim Wasserfasten.',
    wirkung:
      'Extrem beschleunigte Autophagie -- 1 Tag Trockenfasten entspricht in seiner Wirkung etwa 3 Tagen Wasserfasten (laut Filonov). Der Körper produziert endogenes (eigenes) Wasser aus der Fettverbrennung -- dieses Wasser ist strukturell "neues", reines Wasser. Entzündungen gehen drastisch zurück, da Entzündungsherde Wasser brauchen und bei Trockenheit nicht überleben. Stammzellenaktivierung. Starke Immunstimulation. Seneszente Zellen sterben besonders schnell ab. Parasiten und pathogene Mikroorganismen werden ausgehungert.',
    seele:
      'Trockenfasten bringt eine außerordentliche Stille und Klarheit. Viele berichten von einem Gefühl der Leichtigkeit und Losgelösstheit ab Tag 2. Die Erfahrung, dass der Körper sich selbst versorgen kann -- sogar mit Wasser -- ist zutiefst transformierend. Es entsteht ein tiefes Urvertrauen.',
    anleitung:
      '1. Nur für Fastenerfahrene -- vorher mindestens 2-3 längere Wasserfasten absolviert haben. 2. Letzte Mahlzeit am Vorabend, leicht und wasserreich. 3. Letztes Glas Wasser vor dem Schlafengehen. 4. Am nächsten Tag: Ruhe, keine Anstrengung, warme Kleidung. 5. Weiches Trockenfasten: Duschen und Mundspülen erlaubt. 6. Hartes Trockenfasten: Kein Wasserkontakt. 7. Fastenbrechen: Erst kleine Schlucke warmes Wasser, dann Wassermelone oder dünne Gemüsebrühe.',
    vorbereitung:
      'Mindestens 2-3 Tage vorher: Wasserreiches Obst und Gemüse essen, viel trinken (Hydrierung). 1 Tag vorher: Nur Obst und Rohkost (wasserreich). Am Abend vorher: Genug trinken. Mental vorbereiten -- Trockenfasten erfordert Vertrauen und innere Ruhe.',
    aufbau:
      'Langsam rehydrieren. Erste Stunde: Alle 10-15 Minuten kleine Schlucke warmes Wasser. Dann Wassermelone oder Gurkensaft. Nicht auf einmal große Mengen trinken -- das belastet die Nieren. Erst nach vollständiger Rehydrierung (einige Stunden) leichte Nahrung einführen.',
    vorsicht:
      'Nicht länger als 24 Stunden ohne vorherige Fastenerfahrung. Nicht bei Nierenerkrankungen, Gallensteinen, Herzrhythmusstörungen, Schwangerschaft, Stillzeit, Untergewicht, Essstörungen. Bei heißem Wetter Vorsicht -- Dehydrierung kann gefährlich werden. Bei Schwindel, Herzrasen oder starken Kopfschmerzen sofort brechen. Ärztliche Begleitung bei über 2 Tagen dringend empfohlen.',
    besonders_bei: ['entzuendung', 'oedem', 'wassereinlagerung', 'autoimmun', 'parasiten', 'zysten', 'tumore', 'hauterkrankungen'],
    begleitende_mittel: ['Nichts während des Fastens', 'Danach: Quellwasser', 'Wassermelone zum Brechen', 'Zeolith nach dem Brechen'],
    tags: ['#trockenfasten', '#fasten', '#autophagie', '#entzündung', '#intensiv', '#stammzellen']
  },

  {
    id: 'saftfasten',
    name: 'Saftfasten',
    kategorie: 'Große Fastenformen',
    dauer: '3-14 Tage',
    intensitaet: 'Niedrig bis Mittel',
    beschreibung:
      'Beim Saftfasten werden ausschließlich frisch gepresste Obst- und Gemüsesäfte getrunken. Es ist eine sanftere Form des Fastens, die den Körper mit Vitaminen, Mineralstoffen und Enzymen versorgt, während das Verdauungssystem weitgehend entlastet wird. Bekannt durch Pioniere wie Norman Walker und Max Gerson (Gerson-Therapie). Pro Tag werden 1-1.5 Liter frisch gepresster Saft getrunken, idealerweise aus einem Slow-Juicer, der die Enzyme schont.',
    wirkung:
      'Enzymflut aus rohen Säften unterstützt die Entgiftung. Chlorophyll aus grünen Säften bindet Schwermetalle und entsäuert. Lebhafter Mineralstoffzufluss (Kalium, Magnesium, Eisen). Verdauungssystem bekommt Pause, ohne dass der Körper in einen tiefen Fastenmodus geht. Moderate Entgiftung. Gute Einstiegsform für Fastenneulinge. Bei hauptsächlich Gemüsesäften bleibt der Insulinspiegel niedrig.',
    seele:
      'Saftfasten wird als belebend und erfrischend erlebt. Die Farben und Geschmäcker der Säfte nähren auch emotional. Weniger konfrontativ als Wasser- oder Trockenfasten -- eher ein sanftes Reinigen als eine tiefe Transformation.',
    anleitung:
      '1. Täglich 5-6 Säfte (je 250-300ml). 2. Morgens: Grüner Saft (Sellerie, Gurke, Spinat, Apfel, Ingwer). 3. Vormittags: Karottensaft mit Kurkuma. 4. Mittags: Rote-Bete-Saft mit Apfel. 5. Nachmittags: Grüner Saft. 6. Abends: Warme Gemüsebrühe oder milder Saft. 7. Dazwischen viel Wasser und Kräutertee. 8. Slow-Juicer bevorzugen (weniger Oxidation). 9. Säfte sofort nach dem Pressen trinken.',
    vorbereitung:
      '2-3 Tage vorher: Leichte Kost, viel Rohkost. Slow-Juicer besorgen. Obst und Gemüse in Bio-Qualität kaufen. Rezepte planen.',
    aufbau:
      'Tag 1: Rohkostsalate und Obst. Tag 2: Gedämpftes Gemüse ergänzen. Tag 3: Normale leichte Kost. Aufbau ist weniger kritisch als bei strengerem Fasten, aber dennoch behutsam.',
    vorsicht:
      'Vorsicht bei Diabetes -- Obstsäfte können den Blutzucker stark erhöhen. Besser dann: Hauptsächlich Gemüsesäfte verwenden. Bei Fructoseintoleranz nur Gemüsesäfte. Nicht bei schweren Nierenerkrankungen (hoher Kaliumgehalt). Bei Oxalat-Neigung: Spinat und Rhabarber meiden.',
    besonders_bei: ['entgiftung', 'hauterkrankungen', 'muedigkeit', 'naehrstoffmangel', 'uebersaeuerung', 'einstieg-ins-fasten', 'krebs (Gerson-Therapie)'],
    begleitende_mittel: ['Slow-Juicer', 'Bio-Gemüse', 'Weizengras', 'Gerstengras', 'Chlorella', 'Spirulina', 'Ingwer', 'Kurkuma'],
    tags: ['#saftfasten', '#juicing', '#rohkost', '#entgiftung', '#enzyme', '#gerson']
  },

  {
    id: 'basenfasten',
    name: 'Basenfasten',
    kategorie: 'Große Fastenformen',
    dauer: '7-21 Tage',
    intensitaet: 'Niedrig',
    beschreibung:
      'Basenfasten ist streng genommen kein klassisches Fasten, sondern eine Ernährungsform, bei der ausschließlich basische Lebensmittel gegessen werden. Alles Säurebildende wird weggelassen: Fleisch, Fisch, Milchprodukte, Getreide, Zucker, Kaffee, Alkohol. Erlaubt sind: Gemüse, Obst, Kartoffeln, Mandeln, Sprossen, Keimlinge, kaltgepresste Öle und Kräutertees. Es ist ein sanfter Einstieg in die Welt der Körperreinigung und eignet sich hervorragend für Menschen, die noch nie gefastet haben.',
    wirkung:
      'Entsäuerung des Gewebes. Entlastung von Leber und Nieren. Mineralstoffauffüllung (besonders Kalium, Magnesium, Calcium aus Gemüse). Haut wird klarer. Gelenke werden geschmeidiger. Viele berichten von besserem Schlaf und mehr Energie nach wenigen Tagen. Chronische Entzündungen gehen zurück. Darmflora wird positiv beeinflusst.',
    seele:
      'Basenfasten ist ein sanfter Weg, dem Körper Aufmerksamkeit zu schenken. Es schult das Bewusstsein für Ernährung und Körperwahrnehmung. Viele entdecken dabei neue Lieblingsgerichte und einen frischeren Geschmackssinn.',
    anleitung:
      '1. Drei Mahlzeiten täglich aus basischen Lebensmitteln. 2. Morgens: Obst oder Obstsalat mit Mandeln. 3. Mittags: Großer Gemüsesalat mit kaltgepresstem Öl, Kartoffeln oder Suppe. 4. Abends: Gedämpftes Gemüse, Kartoffelsuppe oder Gemüse-Curry (ohne Reis). 5. Dazwischen: Kräutertees und stilles Wasser. 6. Gut kauen -- jeden Bissen 30-mal. 7. Letzte Mahlzeit vor 18 Uhr.',
    vorbereitung:
      'Säurebildner schrittweise reduzieren. Basische Rezepte sammeln. Bio-Gemüse und -Obst besorgen. Basenpulver und Basenbad besorgen.',
    aufbau:
      'Übergang ist sanft -- langsam andere Lebensmittelgruppen wieder einführen. Idealerweise die basische Grundlage beibehalten und Säurebildner nur in Massen zurückholen. 80/20-Regel: 80% basisch, 20% säurebildend.',
    vorsicht:
      'Sehr sicher und für fast jeden geeignet. Bei starkem Untergewicht zusätzliche Kalorienzufuhr beachten (Avocados, Nüsse, Kartoffeln). Bei Histaminintoleranz: Fermentiertes und bestimmte Gemüse meiden.',
    besonders_bei: ['uebersaeuerung', 'arthrose', 'gicht', 'hauterkrankungen', 'muedigkeit', 'einstieg-fasten', 'rheuma', 'sodbrennen'],
    begleitende_mittel: ['Basenpulver', 'Basenbad', 'Natron', 'Brennnesseltee', 'Löwenzahntee', 'Basen-Fußbäder', 'Bürsten-Massage'],
    tags: ['#basenfasten', '#entsäuerung', '#basisch', '#sanft', '#einstieg']
  },

  {
    id: 'suppenfasten',
    name: 'Suppenfasten / Brühefasten',
    kategorie: 'Große Fastenformen',
    dauer: '3-14 Tage',
    intensitaet: 'Niedrig',
    beschreibung:
      'Beim Suppenfasten ernährt man sich ausschließlich von Gemüsesuppen und Knochenbrühe. Es ist eine der ältesten und natürlichsten Fastenformen -- in vielen Kulturen wurde Kranken zunächst nur Brühe gegeben. Knochenbrühe (Bone Broth) liefert Kollagen, Glycin, Prolin, Gelatine und Mineralien, die Darm, Gelenke und Bindegewebe nähren. Reine Gemüsesuppen liefern basische Mineralien und Ballaststoffe. Eine warme, nährende Form der Reinigung.',
    wirkung:
      'Darmschleimhaut wird regeneriert (Leaky Gut heilt). Kollagen aus Knochenbrühe unterstützt Gelenke und Haut. Glycin unterstützt die Leberentgiftung (Phase-2-Entgiftung). Wärmend und nährend -- besonders gut in der kalten Jahreszeit. Elektrolytversorgung bleibt stabil. Moderate Entgiftung ohne starke Fastenkrisen.',
    seele:
      'Suppe ist Urnahrung -- sie wärmt, tröstet und nährt auf einer tiefen Ebene. Suppenfasten fühlt sich weniger nach Verzicht an als andere Fastenformen und ist daher emotional leichter.',
    anleitung:
      '1. 3-5 Mal täglich eine Schale Suppe (je ca. 300-400ml). 2. Morgens: Warme Knochenbrühe oder klare Gemüsebrühe. 3. Mittags: Pürierte Gemüsesuppe (Kürbis, Brokkoli, Karotte). 4. Nachmittags: Knochenbrühe mit Kurkuma und Ingwer. 5. Abends: Leichte Gemüsesuppe. 6. Dazwischen: Wasser und Kräutertee. 7. Knochenbrühe selbst kochen (Knochen 12-24 Stunden köcheln, Apfelessig zugeben für Minerallösung).',
    vorbereitung:
      'Knochenbrühe vorkochen (mehrere Liter). Bio-Gemüse besorgen. Verschiedene Suppenrezepte vorbereiten.',
    aufbau:
      'Sanfter Übergang -- Stückiges Gemüse in die Suppen geben, dann feste Beilagen ergänzen. Knochenbrühe idealerweise als tägliches Ritual beibehalten.',
    vorsicht:
      'Sehr sicher. Bei Histaminintoleranz: Lang gekochte Knochenbrühe kann Histamin enthalten -- dann kürzere Kochzeiten oder reine Gemüsebrühe verwenden. Vegane Variante möglich (nur Gemüsesuppen).',
    besonders_bei: ['leaky-gut', 'darmbeschwerden', 'gelenkprobleme', 'rekonvaleszenz', 'kaelteempfindlichkeit', 'arthrose', 'hautprobleme'],
    begleitende_mittel: ['Knochenbrühe', 'Kurkuma', 'Ingwer', 'Apfelessig', 'Kollagen-Pulver', 'Meersalz'],
    tags: ['#suppenfasten', '#knochenbrühe', '#bonebroth', '#darmheilung', '#kollagen', '#sanft']
  },

  {
    id: 'fx-mayr-kur',
    name: 'F.X. Mayr-Kur',
    kategorie: 'Große Fastenformen',
    dauer: '14-28 Tage',
    intensitaet: 'Mittel',
    beschreibung:
      'Die F.X. Mayr-Kur wurde vom österreichischen Arzt Franz Xaver Mayr entwickelt und fokussiert sich auf die Regeneration des Verdauungstraktes. Kernelemente sind: gründliches Kauen (jeden Bissen 40-60 Mal), Milch-Semmel-Diät (oder modernere Varianten), Bauchmassage durch den Therapeuten, Bittersalz-Trinkkur und Schonung des Darmes. Der Darm wird als "Wurzel des Menschen" betrachtet -- ist er gesund, ist der Mensch gesund.',
    wirkung:
      'Intensive Darmreinigung und -regeneration. Das gründliche Kauen trainiert die Speichelproduktion und Vorverdauung. Der Dünndarm wird entlastet und kann sich regenerieren. Bauchmassage löst Verklebungen und Stauungen. Typische Mayr-Zeichen (Blähbauch, müde Augen, fahle Haut) verschwinden. Körperhaltung verbessert sich (Hohlkreuz durch geblähteten Darm korrigiert sich).',
    seele:
      'Das extrem achtsame Kauen wird zu einer Meditation. Man lernt, wirklich zu schmecken und präsent beim Essen zu sein. Viele berichten, dass sich ihr Verhältnis zum Essen grundlegend verändert.',
    anleitung:
      '1. Idealerweise in einer Mayr-Klinik oder mit einem ausgebildeten Mayr-Arzt. 2. Morgens: Basische Brühe, dann eine trockene Semmel (oder Dinkelbrot), dazu Milch oder Joghurt. 3. Jeden Bissen mindestens 40 Mal kauen, bis er flüssig ist. 4. Mittags: Das gleiche oder leichte Schonkost. 5. Abends: Nur Brühe oder nichts. 6. Täglich Bittersalz-Wasser morgens nüchtern. 7. Regelmäßige Bauchmassage durch Therapeuten. 8. Kein Rohkost abends.',
    vorbereitung:
      'Mayr-Arzt oder -Klinik finden. Sich auf sehr langsames Essen einstellen. Säurebildner vorher reduzieren.',
    aufbau:
      'Stufenweise Erweiterung der Kost nach Mayr-Schema: Von der Milch-Semmel-Diät über die milde Ableitungsdiät zur normalen Kost. Das achtsame Kauen sollte dauerhaft beibehalten werden.',
    vorsicht:
      'Milch-Semmel-Diät nicht geeignet bei Laktoseintoleranz, Zöliakie oder Weizenunverträglichkeit -- dann moderne Varianten wählen (laktosefrei, glutenfrei). Bittersalz kann Durchfall verursachen -- Dosierung anpassen.',
    besonders_bei: ['reizdarm', 'blaehungen', 'verstopfung', 'sodbrennen', 'hautprobleme', 'muedigkeit', 'uebergewicht', 'nahrungsmittelunvertraeglichkeiten'],
    begleitende_mittel: ['Bittersalz', 'Basenpulver', 'Bauchmassage', 'Leberwickel', 'Dinkelbrot', 'Basische Brühe'],
    tags: ['#mayr', '#darmkur', '#kauen', '#verdauung', '#bauchmassage']
  },

  {
    id: 'schroth-kur',
    name: 'Schroth-Kur',
    kategorie: 'Große Fastenformen',
    dauer: '14-21 Tage',
    intensitaet: 'Mittel',
    beschreibung:
      'Die Schroth-Kur wurde im 19. Jahrhundert von Johann Schroth entwickelt. Sie kombiniert Trink- und Trockentage im Wechsel mit feuchtwarmen Wickeln (Dunstwickeln). An Trockentagen wird kaum getrunken, an Trinktagen reichlich -- dieser Wechsel soll den Körper rhythmisch entgiften. Die Ernährung besteht aus gekochtem Getreide (Grießbrei, Reis), Gemüse und trockenen Brötchen. Typisch ist der Wechsel: Trockentag, kleiner Trinktag, großer Trinktag.',
    wirkung:
      'Der Wechsel zwischen Trocken- und Trinktagen erzeugt eine rhythmische Entgiftung -- an Trockentagen zieht der Körper Wasser aus dem Gewebe (und damit Schlacken), an Trinktagen werden diese ausgeschwemmt. Dunstwickel öffnen die Poren und unterstützen die Ausscheidung über die Haut. Wirkt stark entsäuernd und entwässernd.',
    seele:
      'Der Rhythmus von Mangel und Fülle spiegelt natürliche Lebensrhythmen wider. Die Dunstwickel erzeugen ein Gefühl von Geborgenheit und tiefer Wärme.',
    anleitung:
      '1. Am besten in einer Schroth-Kur-Einrichtung (z.B. Oberstaufen). 2. Ernährung: Grießbrei, Reis, gedämpftes Gemüse, trockene Brötchen. Kein Salz, kein Fett, kein Eiweiß. 3. Trockentage: Maximal 0.5 Liter Flüssigkeit. 4. Kleine Trinktage: 1 Liter. 5. Große Trinktage: 2-3 Liter (inkl. trockener Kurwein nach Tradition). 6. Täglich Dunstwickel: Feuchtwarme Leinentücher um den Körper, darauf Wolltücher, 2-3 Stunden liegen.',
    vorbereitung:
      'Kur-Einrichtung wählen. Sich auf einfache Kost und Rhythmuswechsel einstellen. Nicht im Alleingang ohne Erfahrung.',
    aufbau:
      'Langsame Erweiterung der Kost. Salz und Fett vorsichtig zurückführen. Trinkmenge normalisieren.',
    vorsicht:
      'Die Trockentage können belastend sein -- nicht geeignet bei Nierenerkrankungen, Herzinsuffizienz oder für Menschen, die Trockenfasten nicht vertragen. Der traditionelle Kurwein ist aus heutiger Sicht umstritten -- kann durch Wasser ersetzt werden.',
    besonders_bei: ['rheuma', 'gicht', 'oedem', 'wassereinlagerung', 'hauterkrankungen', 'uebersaeuerung', 'arthrose'],
    begleitende_mittel: ['Dunstwickel', 'Leintücher', 'Basische Kost', 'Kräutertee', 'Trockene Brötchen'],
    tags: ['#schrothkur', '#dunstwickel', '#rhythmus', '#entsäuerung', '#kur']
  },

  // =========================================================================
  // RHYTHMISCHES FASTEN
  // =========================================================================

  {
    id: 'intervallfasten-16-8',
    name: 'Intervallfasten 16:8',
    kategorie: 'Rhythmisches Fasten',
    dauer: 'Dauerhaft möglich',
    intensitaet: 'Niedrig',
    beschreibung:
      'Die populärste Form des Intervallfastens: 16 Stunden fasten, 8 Stunden Essfenster. Typisch: Frühstück auslassen und zwischen 12-20 Uhr essen (oder 10-18 Uhr). Während der Fastenzeit nur Wasser, ungesüssten Tee oder schwarzen Kaffee. Diese einfache Anpassung des Essrhythmus hat beeindruckende Auswirkungen auf Stoffwechsel, Gewicht und Langlebigkeit. Für die meisten Menschen gut in den Alltag integrierbar.',
    wirkung:
      'Insulinspiegel sinkt während der 16 Stunden deutlich ab, was die Fettverbrennung ankurbelt. Leichte Autophagie setzt ab 14-16 Stunden ein. Wachstumshormon steigt. Verbesserte Insulinsensitivität. Gewichtsverlust (besonders Bauchfett). Verbesserte Blutfettwerte. Entzündungsmarker sinken. Zirkadiane Rhythmen werden stabilisiert, wenn das Essfenster auf den Tag gelegt wird.',
    seele:
      'Viele erleben morgens ohne Frühstück eine unerwartete Klarheit und Leichtigkeit. Die Struktur gibt dem Tag einen Rhythmus. Das bewusste Essen in einem Fenster fördert Achtsamkeit.',
    anleitung:
      '1. Ein 8-Stunden-Essfenster wählen (z.B. 12-20 Uhr oder 10-18 Uhr). 2. In den 16 Fastenstunden: Nur Wasser, Kräutertee, schwarzer Kaffee. 3. Keine Kalorien während der Fastenzeit (auch keine Milch im Kaffee). 4. In den 8 Stunden normal und nährstoffreich essen. 5. Langsam starten: Erst 12:12, dann 14:10, dann 16:8. 6. Am Wochenende flexibel handhaben, wenn nötig.',
    vorbereitung:
      'Kaffee-Gewohnheit anpassen (schwarz trinken lernen). Frühstück schrittweise nach hinten verschieben. Gute Mahlzeiten für das Essfenster planen.',
    aufbau:
      'Kein spezieller Aufbau nötig -- kann dauerhaft praktiziert werden. Manche wechseln zwischen 16:8 und 18:6.',
    vorsicht:
      'Nicht geeignet bei Essstörungen, Schwangerschaft, Stillzeit. Bei Nebennierenschwäche (Adrenal Fatigue) vorsichtig -- das lange Nüchtarnsein kann Cortisol erhöhen. Bei Frauen: Manche reagieren empfindlich -- bei Zyklusunregelmäßigkeiten auf 14:10 zurückgehen.',
    besonders_bei: ['uebergewicht', 'diabetes-typ2', 'insulinresistenz', 'entzuendung', 'anti-aging', 'metabolisches-syndrom'],
    begleitende_mittel: ['Schwarzer Kaffee', 'Grüner Tee', 'Apfelessig-Wasser (morgens)', 'Elektrolyte'],
    tags: ['#intervallfasten', '#16:8', '#if', '#alltagstauglich', '#insulinsensitivität']
  },

  {
    id: 'intervallfasten-20-4',
    name: 'Intervallfasten 20:4 (Warrior Diet)',
    kategorie: 'Rhythmisches Fasten',
    dauer: 'Dauerhaft möglich',
    intensitaet: 'Mittel',
    beschreibung:
      'Die "Krieger-Diät" nach Ori Hofmekler: 20 Stunden fasten, 4 Stunden Essfenster. Basiert auf der Idee, dass unsere Vorfahren tagsüber aktiv waren (Jagen, Sammeln) und abends eine große Mahlzeit assen. Während der 20 Stunden sind kleine Mengen rohe Früchte, Gemüse und Nütösse erlaubt. Die Hauptmahlzeit findet abends statt -- reichhaltig und befriedigend.',
    wirkung:
      'Tiefere Autophagie als bei 16:8. Stärkere Fettverbrennung. Wachstumshormon steigt deutlich. Sympathisches Nervensystem wird tagsüber aktiviert (Wachheit, Fokus), parasympathisches abends (Verdauung, Regeneration). Sehr effektiv für Gewichtsverlust und Muskelaufbau gleichzeitig.',
    seele:
      'Viele berichten von einem Gefühl der Stärke und Klarheit -- wie ein Krieger, der erst nach vollbrachter Arbeit isst. Die abendliche Mahlzeit wird zum bewussten Fest.',
    anleitung:
      '1. Tagsüber: Fasten oder nur kleine Mengen roher Nahrung (Obst, Gemüse, Nüsse). 2. Abends: Ein 4-Stunden-Essfenster (z.B. 17-21 Uhr). 3. Reihenfolge beim Essen: Erst Gemüse/Salat, dann Protein, dann Fette, zuletzt (falls gewünscht) Kohlenhydrate. 4. So viel essen, bis man angenehm satt ist.',
    vorbereitung:
      'Erst 16:8 etablieren, dann das Essfenster schrittweise verkürzen.',
    aufbau:
      'Kann dauerhaft praktiziert werden oder im Wechsel mit 16:8.',
    vorsicht:
      'Nicht für Anfänger -- erst Erfahrung mit 16:8 sammeln. Nicht bei Essstörungen, Untergewicht oder Schwangerschaft. Kann soziale Herausforderungen mit sich bringen (kein gemeinsames Mittagessen).',
    besonders_bei: ['uebergewicht', 'fettverbrennung', 'muskelaufbau', 'fokus', 'insulinresistenz'],
    begleitende_mittel: ['Grüner Tee', 'Schwarzer Kaffee', 'Rohes Gemüse', 'Nüsse'],
    tags: ['#warriordiet', '#20:4', '#intervallfasten', '#krieger', '#fettverbrennung']
  },

  {
    id: 'omad',
    name: 'OMAD (One Meal A Day)',
    kategorie: 'Rhythmisches Fasten',
    dauer: 'Dauerhaft möglich',
    intensitaet: 'Mittel bis Hoch',
    beschreibung:
      'OMAD -- eine Mahlzeit am Tag. 23 Stunden fasten, 1 Stunde essen. Die extremste Form des täglichen Intervallfastens. Die eine Mahlzeit muss nährstoffreich und ausreichend kalorienhaltig sein, um den Tagesbedarf zu decken. Für manche Menschen die natürlichste Essform -- ähnlich dem Rhythmus vieler indigener Völker.',
    wirkung:
      'Maximale tägliche Autophagie. Insulinspiegel bleibt fast den ganzen Tag niedrig. Tiefe Ketose möglich (besonders bei kohlenhydratarmer Mahlzeit). Wachstumshormon deutlich erhöht. Sehr effektive Fettverbrennung. Zeitersparnis -- nur einmal am Tag Essen zubereiten.',
    seele:
      'Befreiend für viele -- der ganze Tag gehört der Aktivität, dem Geist, der Kreativität. Die eine Mahlzeit wird zum Ritual, zum bewussten Höhepunkt des Tages.',
    anleitung:
      '1. Eine vollwertige, nährstoffreiche Mahlzeit pro Tag. 2. Idealerweise zur gleichen Zeit (viele wählen den frühen Abend). 3. Die Mahlzeit sollte Protein, gesunde Fette, Gemüse und (optional) komplexe Kohlenhydrate enthalten. 4. Rest des Tages: Nur Wasser, Tee, schwarzer Kaffee. 5. Elektrolyte bei Bedarf (Salz, Magnesium).',
    vorbereitung:
      'Schrittweise über 16:8 und 20:4 dorthin arbeiten. Ernährungswissen aufbauen, um mit einer Mahlzeit alle Nährstoffe abzudecken.',
    aufbau:
      'Im Wechsel mit 16:8 oder 20:4 möglich. Flexibel handhaben -- an geselligen Tagen Ausnahmen machen.',
    vorsicht:
      'Risiko der Unterversorgung, wenn die eine Mahlzeit nicht ausreichend nährstoffreich ist. Nicht bei Essstörungen, Untergewicht, Schwangerschaft. Kann Verdauungsprobleme verursachen, wenn zu viel auf einmal gegessen wird.',
    besonders_bei: ['uebergewicht', 'insulinresistenz', 'autophagie', 'zeitmanagement', 'mentale-klarheit'],
    begleitende_mittel: ['Elektrolyte', 'Mineralsalze', 'Hochwertiges Essen', 'Organfleisch für Nährstoffdichte'],
    tags: ['#omad', '#einemahlzeit', '#intervallfasten', '#autophagie', '#einfach']
  },

  {
    id: 'alternate-day-fasting',
    name: 'Alternate Day Fasting (ADF)',
    kategorie: 'Rhythmisches Fasten',
    dauer: 'Wochen bis Monate',
    intensitaet: 'Mittel bis Hoch',
    beschreibung:
      'Beim Alternate Day Fasting wechseln sich Fastentage und Esstage ab. An Fastentagen wird entweder gar nichts gegessen (strenges ADF) oder maximal 500 kcal (modifiziertes ADF). An Esstagen wird normal gegessen. Gut erforscht -- die Studien von Krista Varady zeigen konsistente Ergebnisse bei Gewichtsverlust, Insulinsensitivität und Herz-Kreislauf-Gesundheit.',
    wirkung:
      'Regelmäßige Autophagie-Phasen (jeden zweiten Tag). Effektiver Fettabbau bei Erhalt der Muskelmasse. Verbesserte Insulinsensitivität. Senkung von Triglyzeriden und LDL-Cholesterin. Entzündungshemmend. Blutdruck sinkt.',
    seele:
      'Der Wechsel lehrt, dass man nicht jeden Tag essen muss und dass Hunger kommt und geht. Es baut Vertrauen in den eigenen Körper auf.',
    anleitung:
      '1. Tag 1: Normal essen (keine Beschränkung). 2. Tag 2: Fasten (nur Wasser, Tee) oder maximal 500 kcal (modifiziert). 3. Diesen Rhythmus beibehalten. 4. An Esstagen nicht über-kompensieren -- normal und bewusst essen.',
    vorbereitung:
      'Erst Erfahrung mit 16:8 oder 24h-Fasten sammeln. Fastentage im Kalender planen.',
    aufbau:
      'Kann dauerhaft praktiziert werden oder als Phasen-Modell (z.B. 4 Wochen ADF, dann 16:8).',
    vorsicht:
      'Kann sozial herausfordernd sein. Nicht bei Essstörungen, Untergewicht, Schwangerschaft. Manche Frauen vertragen ADF schlechter -- auf Zyklus achten.',
    besonders_bei: ['uebergewicht', 'diabetes-typ2', 'herz-kreislauf', 'insulinresistenz', 'langlebigkeit'],
    begleitende_mittel: ['Elektrolyte', 'Kräutertee', 'Schwarzer Kaffee', 'Grüner Tee'],
    tags: ['#adf', '#alternateday', '#fasten', '#wissenschaftlich', '#fettabbau']
  },

  {
    id: 'fasten-5-2',
    name: '5:2 Fasten',
    kategorie: 'Rhythmisches Fasten',
    dauer: 'Dauerhaft möglich',
    intensitaet: 'Niedrig bis Mittel',
    beschreibung:
      'An 5 Tagen der Woche normal essen, an 2 (nicht aufeinanderfolgenden) Tagen die Kalorienzufuhr auf 500-600 kcal begrenzen. Popularisiert durch Dr. Michael Mosley. Eine der sanftesten und alltagstauglichsten Formen des Fastens. Die Fastentage können frei gewählt werden -- viele nehmen Montag und Donnerstag.',
    wirkung:
      'Moderate, aber konsistente Verbesserung von Insulinsensitivität, Blutfetten und Entzündungsmarkern. Sanfter Gewichtsverlust (ca. 0.5-1 kg pro Woche). Leichte Autophagie. Gut für die langfristige Gesunderhaltung.',
    seele:
      'Leicht durchhaltbar -- man weiß, dass man am nächsten Tag wieder normal essen kann. Gut für Menschen, die Struktur brauchen, aber keine extremen Einschränkungen mögen.',
    anleitung:
      '1. 5 Tage pro Woche normal und gesund essen. 2. An 2 nicht aufeinanderfolgenden Tagen: Maximal 500 kcal (Frauen) oder 600 kcal (Männer). 3. Fastentage: Viel Gemüse, etwas Protein, wenig Fett. Beispiel: Mittags ein großer Salat (200 kcal), abends Gemüsesuppe (300 kcal). 4. Viel Wasser und Tee an Fastentagen.',
    vorbereitung:
      'Rezepte für kalorienarme, sättigende Mahlzeiten sammeln. Fastentage vorplanen.',
    aufbau:
      'Kein spezieller Aufbau nötig. Kann dauerhaft beibehalten werden.',
    vorsicht:
      'Sehr sicher. Nicht bei Essstörungen, Schwangerschaft, Stillzeit. An Fastentagen kann die Konzentration nachlassen -- Fastentage am besten auf ruhige Tage legen.',
    besonders_bei: ['uebergewicht', 'praevention', 'anti-aging', 'leichte-insulinresistenz', 'einstieg-fasten'],
    begleitende_mittel: ['Gemüsesuppen', 'Salate', 'Kräutertee', 'Viel Wasser'],
    tags: ['#5:2', '#intermittent', '#sanft', '#alltagstauglich', '#mosley']
  },

  {
    id: 'mondphasen-fasten',
    name: 'Mondphasen-Fasten',
    kategorie: 'Rhythmisches Fasten',
    dauer: '1-3 Tage pro Mondzyklus',
    intensitaet: 'Niedrig bis Mittel',
    beschreibung:
      'Fasten im Rhythmus der Mondphasen -- eine uralte Praxis, die in vielen Kulturen verankert ist. Typisch: Am Vollmond und/oder Neumond wird 24-36 Stunden gefastet. Der Vollmond gilt als Zeit der Fülle und Loslösung (ideal zum Entgiften), der Neumond als Zeit des Rückzugs und der inneren Einkehr. Manche fasten auch an den Viertelmonden -- so entsteht ein rhythmisches Fasten alle 7 Tage, das den Wochen-Rhythmus spiegelt.',
    wirkung:
      'Der Mond beeinflusst Wasserhaushalt und Hormone -- Fasten am Vollmond wird von vielen als besonders wirksam für Entwässerung und Entgiftung erlebt. Regelmäßiges Rhythmus-Fasten hält den Körper in einem ständigen Reinigungsmodus. Die Verbindung mit Naturrhythmen stärkt die innere Uhr und die zirkadianen Rhythmen.',
    seele:
      'Das Mondphasen-Fasten verbindet den Menschen mit kosmischen Rhythmen. Es erinnert daran, dass wir Teil der Natur sind. Vollmond-Fasten wird oft als besonders kraftvoll erlebt -- Emotionen können sich lösen, Traeume werden lebhaft. Neumond-Fasten ist stiller, nach innen gerichtet -- ideal für Meditation und Neuausrichtung.',
    anleitung:
      '1. Einen Mondkalender besorgen oder eine App nutzen. 2. Zu Beginn: Nur am Vollmond fasten (24 Stunden Wasserfasten). 3. Später erweitern: Auch am Neumond fasten. 4. Fortgeschritten: An allen 4 Mondphasen (Neumond, zunehmendes Viertel, Vollmond, abnehmendes Viertel) jeweils 24 Stunden fasten. 5. Während des Fastens: Wasser, Kräutertee. Optional Meditation und Ritual.',
    vorbereitung:
      'Am Vortag leicht essen. Mondkalender konsultieren. Innerlich auf das Fasten einstimmen.',
    aufbau:
      'Nach 24 Stunden: Leicht brechen mit Obst oder Suppe. Kein spezieller Aufbau nötig bei 24-Stunden-Fasten.',
    vorsicht:
      'Sehr sicher bei 24-Stunden-Rhythmus. Die üblichen Fasten-Kontraindikationen gelten.',
    besonders_bei: ['rhythmus', 'zyklusbeschwerden', 'hormonbalance', 'spiritualitaet', 'praevention', 'wassereinlagerung'],
    begleitende_mittel: ['Mondkalender', 'Kräutertee', 'Meditation', 'Rituale', 'Salbei', 'Mondsteine'],
    tags: ['#mondfasten', '#vollmond', '#neumond', '#rhythmus', '#naturverbunden', '#ritual']
  },

  {
    id: 'drei-tage-fasten',
    name: '3-Tage-Fasten (Autophagie-Reset)',
    kategorie: 'Rhythmisches Fasten',
    dauer: '3 Tage (72 Stunden)',
    intensitaet: 'Mittel bis Hoch',
    beschreibung:
      'Das 3-Tage-Fasten (72 Stunden Wasserfasten) ist der "Sweet Spot" der Autophagie. Forschungen von Valter Longo zeigen, dass nach 72 Stunden Fasten das Immunsystem sich komplett erneuert -- alte, beschädigte Immunzellen werden abgebaut und nach dem Fastenbrechen durch frische Stammzellen ersetzt. Es ist lang genug für tiefe Reinigung, aber kurz genug, um es regelmäßig (z.B. vierteljährlich oder monatlich) durchzuführen.',
    wirkung:
      'Maximale Autophagie ab Stunde 48-72. Stammzellen werden aktiviert. Komplette Erneuerung des Immunsystems (Longo-Studie). Wachstumshormon steigt um das 3-5-fache. Insulinresistenz verbessert sich messbar. Entzündungsmarker sinken deutlich. Seneszente Zellen werden abgebaut. IGF-1 sinkt (Anti-Krebs-Effekt).',
    seele:
      'Der erste Tag ist oft der schwerste -- Hunger, Gewohnheit, Gedanken ans Essen. Tag 2 bringt häufig eine Fasteneuphorie. Tag 3 ist für viele ein Zustand klarer, ruhiger Präsenz. Das regelmäßige 3-Tage-Fasten wird zu einem Rhythmus der Erneuerung -- wie eine vierteljährliche Generalreinigung.',
    anleitung:
      '1. Freitag Abend letzte Mahlzeit (leicht). 2. Samstag, Sonntag, Montag: Nur Wasser (2-3 Liter täglich). Optional: Prise Meersalz im Wasser für Elektrolyte. 3. Montag Abend: Fastenbrechen mit einer kleinen Mahlzeit (Brühe, Avocado, gedämpftes Gemüse). 4. Leichte Bewegung ist gut, aber keine intensive Belastung. 5. Einlauf am Tag 2 optional.',
    vorbereitung:
      '1 Tag vorher leicht essen. Wochenende frei halten. Ablenkung planen (Spazieren, Lesen, Sauna).',
    aufbau:
      'Tag 1 nach dem Fasten: Leichte Kost (Brühe, Gemüse, etwas Protein). Tag 2: Normal essen.',
    vorsicht:
      'Für die meisten gesunden Erwachsenen sicher. Erst Erfahrung mit 24-Stunden-Fasten sammeln. Die üblichen Kontraindikationen beachten.',
    besonders_bei: ['autophagie', 'immunsystem', 'anti-aging', 'krebspraevention', 'entzuendung', 'autoimmun', 'stammzellen'],
    begleitende_mittel: ['Quellwasser', 'Meersalz', 'Elektrolyte', 'Einlauf', 'Zeolith'],
    tags: ['#72stunden', '#autophagie', '#stammzellen', '#immunreset', '#longo', '#vierteljährlich']
  },

  // =========================================================================
  // REINIGUNGSTECHNIKEN
  // =========================================================================

  {
    id: 'oelziehen',
    name: 'Ölziehen',
    kategorie: 'Reinigungstechniken',
    dauer: '15-20 Minuten täglich',
    intensitaet: 'Niedrig',
    beschreibung:
      'Ölziehen (Oil Pulling) ist eine ayurvedische Reinigungstechnik, bei der morgens auf nüchternen Magen ein Esslöffel hochwertiges Öl (Kokosöl, Sesamöl oder Sonnenblumenöl) für 15-20 Minuten im Mund hin und her bewegt wird. Das Öl bindet Bakterien, Toxine und Stoffwechselabfallprodukte aus der Mundschleimhaut. Anschließend wird es ausgespuckt (nicht schlucken!) und der Mund mit warmem Wasser gespült.',
    wirkung:
      'Reduziert pathogene Bakterien im Mundraum drastisch. Zahnfleischentzündungen heilen. Mundgeruch verschwindet. Zähne werden weißer. Über die Reflexzonen der Mundschleimhaut werden auch Organe angeregt. Entgiftung über die Mundschleimhaut (eine der dünnsten Schleimhäute des Körpers). Kokosöl wirkt zusätzlich antiviral und antifungal (Laurinsäure).',
    seele:
      'Ölziehen am Morgen wird zu einem meditativen Ritual -- 20 Minuten Stille, während man den Mund nicht benutzen kann. Ein guter Start in den Tag.',
    anleitung:
      '1. Morgens direkt nach dem Aufwachen, vor dem Zähneputzen und Trinken. 2. 1 Esslöffel Kokosöl (oder Sesamöl) in den Mund nehmen. 3. 15-20 Minuten langsam durch die Zähne ziehen, spülen, saugen -- nicht gurgeln. 4. Das Öl wird dünn und milchig-weiß. 5. Ausspucken (in den Mülleimer, nicht ins Waschbecken -- verstopft). 6. Mund mit warmem Wasser spülen. 7. Zunge reinigen. 8. Zähne putzen.',
    vorbereitung:
      'Hochwertiges, kaltgepresstes Bio-Kokosöl oder Sesamöl besorgen.',
    aufbau:
      'Täglich durchführen -- idealerweise als lebenslange Morgenroutine.',
    vorsicht:
      'Nicht herunterschlucken -- das Öl ist nach 20 Minuten voller Bakterien und Toxine. Bei Amalgamfüllungen umstritten -- manche berichten von verstärkter Quecksilberfreisetzung (hier vorsichtig sein und ggf. Schwermetallausleitung begleitend durchführen).',
    besonders_bei: ['zahnfleischentzuendung', 'mundgeruch', 'parodontose', 'entgiftung', 'hautprobleme', 'kopfschmerzen'],
    begleitende_mittel: ['Bio-Kokosöl', 'Bio-Sesamöl', 'Zungenreiniger', 'Natron-Mundspülung'],
    tags: ['#ölziehen', '#oilpulling', '#ayurveda', '#mundgesundheit', '#morgenritual', '#entgiftung']
  },

  {
    id: 'darmreinigung-einlauf',
    name: 'Darmreinigung / Einlauf',
    kategorie: 'Reinigungstechniken',
    dauer: '20-30 Minuten',
    intensitaet: 'Niedrig bis Mittel',
    beschreibung:
      'Der Einlauf (Klistier, Enema) ist eine der ältesten Reinigungstechniken der Menschheit -- bereits im alten Ägypten, in Indien und bei den Essenern praktiziert. Warmes Wasser (ca. 37 Grad) wird über den Enddarm eingeleitet, um den Dickdarm zu spülen. Varianten: Wasser-Einlauf, Kaffee-Einlauf (nach Gerson -- stimuliert die Glutathion-Produktion der Leber um das 600-fache), Kamille-Einlauf (entzündungshemmend). Besonders während des Fastens wichtig, da der Darm ohne Nahrung träge wird und Toxine reabsorbiert werden können.',
    wirkung:
      'Entfernt festsitzende Kotreste und Ablagerungen im Dickdarm. Reduziert Rückvergiftung (Autointoxikation) während des Fastens. Kaffee-Einlauf: Öffnet die Gallengänge, stimuliert Glutathion (körpereigenes Antioxidans) um das 600-fache, entgiftet die Leber massiv. Linderung von Kopfschmerzen, Übelkeit und Fastenbeschwerden. Erleichterndes Gefühl der Sauberkeit.',
    seele:
      'Viele Menschen überwinden zunächst eine Hemmschwelle. Danach berichten fast alle von einem befreienden, leichten Gefühl. Es ist ein Akt der Selbstfürsorge -- den eigenen Körper sauber zu halten.',
    anleitung:
      '1. Irrigator-Set oder Einlaufbecher besorgen. 2. 1 Liter warmes, körpertemperiertes Wasser (ca. 37 Grad) vorbereiten. 3. Optional: 2 Esslöffel Bio-Kaffee in 500ml Wasser 15 Min köcheln, abseihen, auf Körpertemperatur abkühlen lassen (Kaffee-Einlauf). 4. Bequem hinlegen (linke Seite oder Knie-Ellenbogen-Position). 5. Kanüle mit Kokosöl einreiben und sanft einführen. 6. Wasser langsam einlaufen lassen. 7. 5-15 Minuten halten (bei Kaffee-Einlauf: 12-15 Min). 8. Auf der Toilette entleeren. 9. Bei Bedarf wiederholen.',
    vorbereitung:
      'Irrigator-Set und Bio-Kaffee besorgen. Warmes Wasser vorbereiten. Ruhe und Privatsphäre einplanen. Handtücher bereitlegen.',
    aufbau:
      'Während des Fastens: Alle 2-3 Tage. Im Alltag: 1-2 Mal pro Woche bei Bedarf. Danach Darmflora mit Probiotika aufbauen.',
    vorsicht:
      'Nicht bei aktiven Darmentzündungen (Morbus Crohn im Schub, Colitis ulcerosa im Schub), Darmblutungen, nach Darmoperationen, bei Hämorrhoiden (vorsichtig). Kaffee-Einläufe nicht bei Koffeinempfindlichkeit oder hohem Blutdruck. Nicht zu häufig -- der Darm braucht auch seine natürliche Flora.',
    besonders_bei: ['verstopfung', 'fastenbegleitung', 'kopfschmerzen', 'leberentgiftung', 'hautprobleme', 'blaehungen', 'krebs (Gerson-Therapie)'],
    begleitende_mittel: ['Irrigator-Set', 'Bio-Kaffee (für Kaffee-Einlauf)', 'Kokosöl', 'Kamillentee', 'Probiotika (danach)', 'Flohsamenschalen'],
    tags: ['#einlauf', '#darmreinigung', '#kaffeeeinlauf', '#gerson', '#entgiftung', '#leber']
  },

  {
    id: 'leberreinigung-moritz',
    name: 'Leberreinigung nach Andreas Moritz',
    kategorie: 'Reinigungstechniken',
    dauer: '6 Tage Vorbereitung + 1 Abend Reinigung',
    intensitaet: 'Mittel bis Hoch',
    beschreibung:
      'Die Leberreinigung nach Andreas Moritz (aus dem Buch "Die wundersame Leber- und Gallenblasenreinigung") ist eine der bekanntesten Methoden zur Entfernung von Gallensteinen und Leberverstopfungen. 6 Tage lang wird täglich 1 Liter Apfelsaft getrunken (die Apfelsäure weicht die Steine auf). Am Abend des 6. Tages folgt die eigentliche Reinigung mit Bittersalz und einer Mischung aus Olivenöl und Grapefruitsaft. Am nächsten Morgen werden die erweichten Steine ausgeschieden. Viele berichten von grünen und braunen "Steinen" verschiedener Größe.',
    wirkung:
      'Entfernung von Gallensteinen und -grieß aus Leber und Gallenblase. Die Leber ist das zentrale Entgiftungsorgan -- wenn ihre Gallengänge verstopft sind, leidet die gesamte Entgiftungskapazität. Nach einer Reinigung berichten viele von: Besserer Verdauung, klarerer Haut, mehr Energie, weniger Allergien, besserer Fettverdauung, weniger Kopfschmerzen. Moritz empfahl 6-12 Reinigungen im Abstand von 4 Wochen.',
    seele:
      'Die Leber wird in der TCM als Sitz des Zorns betrachtet. Viele berichten, dass nach einer Leberreinigung aufgestaute Emotionen -- besonders Ärger und Frustration -- sich lösen. Ein Gefühl der Leichtigkeit und Befreiung stellt sich ein.',
    anleitung:
      '1. Tag 1-6: Täglich 1 Liter Apfelsaft trinken (über den Tag verteilt, zwischen den Mahlzeiten). Leicht essen, kein Fett am Tag 6. 2. Tag 6, 14 Uhr: Letzte Mahlzeit (leicht, fettfrei). 3. 18 Uhr: Erstes Glas Bittersalz (1 EL in 250ml warmem Wasser). 4. 20 Uhr: Zweites Glas Bittersalz. 5. 22 Uhr: 125ml frisch gepresster Grapefruitsaft mit 125ml Olivenöl kräftig schütteln und schnell trinken. Sofort hinlegen (rechte Seite, Knie angezogen). Mindestens 20 Minuten still liegen bleiben. 6. Nächster Morgen, 6 Uhr: Drittes Glas Bittersalz. 7. 8 Uhr: Viertes Glas Bittersalz. 8. 10 Uhr: Leichtes Obst. 9. Die Steine werden im Laufe des Morgens ausgeschieden.',
    vorbereitung:
      'Zunächst eine Darmreinigung durchführen (Colon-Hydro-Therapie oder Einläufe). Bio-Apfelsaft, Bittersalz (Epsom-Salz), kaltgepresstes Olivenöl und frische Grapefruits besorgen. Am Reinigungstag und am Tag danach frei nehmen.',
    aufbau:
      'Am Tag nach der Reinigung nur leichte Kost (Obst, Suppen, Gemüse). In den nächsten Tagen keine schweren Fette. Darmflora mit Probiotika unterstützen. Nächste Reinigung nach 4-6 Wochen.',
    vorsicht:
      'Nicht ohne vorherige Darmreinigung -- die Steine müssen den Darm passieren können. Nicht bei akuter Gallenkolik, Gallengangsverschluss oder sehr großen Gallensteinen (vorher Ultraschall). Nicht während Schwangerschaft, Stillzeit oder bei akuten Infektionen. Kritiker weisen darauf hin, dass die "Steine" teilweise Seifensteine sein könnten (Olivenöl + Grapefruit + Gallensaeuren). Dennoch berichten viele von deutlichen gesundheitlichen Verbesserungen.',
    besonders_bei: ['gallensteine', 'leberstauung', 'verdauungsprobleme', 'fettverdauungsstoerung', 'hautprobleme', 'allergien', 'kopfschmerzen', 'hormonstoerungen'],
    begleitende_mittel: ['Bio-Apfelsaft', 'Bittersalz (Epsom-Salz)', 'Olivenöl (kaltgepresst)', 'Grapefruit', 'Einläufe', 'Probiotika'],
    tags: ['#leberreinigung', '#moritz', '#gallensteine', '#leber', '#entgiftung', '#olivenöl']
  },

  {
    id: 'nierenreinigung',
    name: 'Nierenreinigung',
    kategorie: 'Reinigungstechniken',
    dauer: '3-6 Wochen',
    intensitaet: 'Niedrig',
    beschreibung:
      'Die Nieren filtern täglich etwa 180 Liter Blut und sind essentiell für die Entgiftung, den Wasserhaushalt und den Säure-Basen-Haushalt. Eine Nierenreinigung unterstützt diese Organe mit speziellen Kräutern und Tees, die die Nierendurchblutung fördern, Ablagerungen lösen und die Filterfunktion verbessern. Klassische Nierenkräuter sind: Goldrute, Bärentraube, Brennnessel, Schachtelhalm, Birke und Löwenzahn.',
    wirkung:
      'Förderung der Nierendurchblutung und Filtration. Lösung von kleinem Nierengrieß. Entsäuerung. Entwässerung von Wassereinlagerungen (natürlich, ohne Mineralverlust wie bei chemischen Diuretika). Unterstützung des Säure-Basen-Haushalts. Klarere Haut, weniger Ödem.',
    seele:
      'Die Nieren gelten in der TCM als Sitz der Lebenskraft (Jing) und der Angst. Eine Nierenreinigung kann helfen, tief sitzende Ängste zu lösen und die Lebenskraft zu stärken.',
    anleitung:
      '1. Täglich 2-3 Tassen Nierentee trinken (Goldrute, Brennnessel, Bärentraube, Schachtelhalm -- als Mischung). 2. Morgens auf nüchternen Magen ein Glas warmes Wasser mit Zitrone. 3. Täglich mindestens 2-3 Liter reines Wasser trinken. 4. Wassermelone essen (natürliches Nieren-Tonikum). 5. Sellerie und Petersilie reichlich verwenden. 6. Salz reduzieren. 7. Koffein und Alkohol meiden. 8. Dauer: 3-6 Wochen.',
    vorbereitung:
      'Nierenkräuter besorgen (Apotheke oder Kräuterhandel). Bio-Zitronen und Wassermelone besorgen.',
    aufbau:
      'Die Kräutertees können langfristig in reduzierter Dosis beibehalten werden (1 Tasse täglich). Ausreichende Wasseraufnahme dauerhaft beibehalten.',
    vorsicht:
      'Nicht bei akuter Nierenentzündung oder schwerer Niereninsuffizienz ohne ärztliche Begleitung. Bei bekannten größeren Nierensteinen vorsichtig -- plötzliche Steinlösung kann Koliken verursachen. Nicht während Schwangerschaft (einige Kräuter sind kontraindiziert).',
    besonders_bei: ['nierengriess', 'wassereinlagerung', 'harnwegsinfekte', 'uebersaeuerung', 'rückenschmerzen (Nierenbereich)', 'aengste'],
    begleitende_mittel: ['Goldrute', 'Brennnessel', 'Bärentraube', 'Schachtelhalm', 'Birkenblätter', 'Löwenzahn', 'Zitronenwasser', 'Wassermelone', 'Petersilie'],
    tags: ['#nieren', '#nierenreinigung', '#kräutertee', '#entwässerung', '#entgiftung']
  },

  {
    id: 'zungenreinigung',
    name: 'Zungenreinigung',
    kategorie: 'Reinigungstechniken',
    dauer: '1-2 Minuten täglich',
    intensitaet: 'Sehr niedrig',
    beschreibung:
      'Die Zungenreinigung (Jihwa Prakshalana im Ayurveda) ist eine einfache, aber wirkungsvolle tägliche Reinigungstechnik. Mit einem Zungenreiniger (Kupfer, Edelstahl oder Silber) wird morgens der Zungenbelag von hinten nach vorne abgekratzt. Dieser Belag (Ama im Ayurveda) besteht aus Bakterien, Toxinen und Stoffwechselabfallprodukten, die der Körper über Nacht ausgeschieden hat. Besonders während des Fastens wird der Zungenbelag oft sehr dick -- ein Zeichen, dass der Körper entgiftet.',
    wirkung:
      'Entfernung von Bakterien, die Mundgeruch, Karies und Zahnfleischentzündung verursachen. Verbesserung des Geschmackssinns. Stimulation der Verdauungsorgane über Reflexzonen der Zunge. Diagnose-Werkzeug: Farbe und Beschaffenheit des Belags zeigen den Zustand der inneren Organe (weiß = Kapha/Schleim, gelb = Pitta/Galle, grau = Ama/Toxine).',
    seele:
      'Ein achtsamer Start in den Tag. Die tägliche Beobachtung des Zungenbelags schult die Körperwahrnehmung.',
    anleitung:
      '1. Morgens direkt nach dem Aufwachen. 2. Zunge herausstrecken. 3. Zungenreiniger am hinteren Drittel der Zunge ansetzen. 4. Mit sanftem Druck nach vorne ziehen. 5. Reiniger abspülen. 6. 5-10 Mal wiederholen, bis kein Belag mehr kommt. 7. Mund ausspülen. 8. Danach Ölziehen oder Zähneputzen.',
    vorbereitung:
      'Kupfer-Zungenreiniger besorgen (Kupfer wirkt antibakteriell).',
    aufbau:
      'Tägliche Gewohnheit -- lebenslang beibehalten.',
    vorsicht:
      'Sanft vorgehen -- die Zunge ist empfindlich. Nicht bei Verletzungen oder Entzündungen der Zunge.',
    besonders_bei: ['mundgeruch', 'zahngesundheit', 'verdauung', 'morgenritual', 'fastenbegleitung'],
    begleitende_mittel: ['Kupfer-Zungenreiniger', 'Ölziehen (danach)', 'Natron-Mundspülung'],
    tags: ['#zungenreinigung', '#ayurveda', '#morgenritual', '#mundgesundheit', '#diagnose']
  },

  {
    id: 'salzwasser-trinken',
    name: 'Salzwasser-Trinken (Shankha Prakshalana)',
    kategorie: 'Reinigungstechniken',
    dauer: '2-4 Stunden (einmalig)',
    intensitaet: 'Hoch',
    beschreibung:
      'Shankha Prakshalana ("Muschelreinigung") ist eine yogische Reinigungstechnik (Shatkarma), bei der warmes Salzwasser getrunken und durch spezielle Körperübungen durch den gesamten Verdauungstrakt geleitet wird. Man trinkt insgesamt 1.5-2 Liter warmes Salzwasser (1 TL Salz pro Liter) und führt zwischen jedem Glas 4-5 spezielle Übungen aus. Nach einiger Zeit entleert sich der Darm -- zuerst Stuhl, dann immer klareres Wasser, bis am Ende klares Wasser ausgeschieden wird. Der gesamte Verdauungstrakt wird so einmal komplett durchgespült.',
    wirkung:
      'Komplette Reinigung des gesamten Verdauungstraktes -- von der Speiseröhre bis zum Enddarm. Entfernung von Ablagerungen, Schleim und Parasiten. "Reset" der Darmflora. Danach fühlt sich der Bauch leer, leicht und sauber an. Verdauung funktioniert nach dem Wiederaufbau häufig besser als je zuvor.',
    seele:
      'Ein intensives, reinigendes Erlebnis. Viele beschreiben ein Gefühl der inneren Reinheit und Leichtigkeit danach, das sie noch nie erlebt haben.',
    anleitung:
      '1. Morgens nüchtern. 2. 6-8 Gläser warmes Salzwasser vorbereiten (1 gehauffter TL Salz pro Liter, angenehm warm). 3. Glas 1-2 trinken, dann die 5 Übungen ausführen (jeweils 8 Mal pro Seite): a) Seitliches Strecken, b) Oberkörperdrehung stehend, c) Cobra mit Drehung, d) Bauchpresse im Sitzen, e) Kniebeuge mit Drehung. 4. Gläser 3-4 trinken, Übungen wiederholen. 5. Weitermachen, bis klares Wasser ausgeschieden wird. 6. Danach 45 Minuten ruhen. 7. Erste Mahlzeit: Weich gekochter Reis mit Ghee (Kitchari).',
    vorbereitung:
      'Am Vortag leicht essen. Morgens nüchtern beginnen. Genug Zeit einplanen (ganzer Vormittag). Nähe zur Toilette sicherstellen. Die 5 Übungen vorher lernen (YouTube oder Yoga-Lehrer).',
    aufbau:
      'Erste Mahlzeit: Kitchari (Reis mit Mungbohnen und Ghee). Nächsten 24 Stunden: Nur warme, leichte Kost. Keine Rohkost, kein Obst, kein Kaffee für 24 Stunden. Danach Darmflora mit Probiotika aufbauen.',
    vorsicht:
      'Nicht bei Bluthochdruck (Salzbelastung), Magen- oder Darmgeschwüren, akuten Darmentzündungen, Schwangerschaft, Nierenproblemen. Elektrolyt-Verschiebungen möglich -- danach gut auf Mineralstoffzufuhr achten. Beim ersten Mal idealerweise mit einem erfahrenen Yoga-Lehrer.',
    besonders_bei: ['darmreinigung', 'verstopfung', 'parasiten', 'blaehungen', 'nahrungsmittelunvertraeglichkeiten', 'neustart-verdauung'],
    begleitende_mittel: ['Meersalz', 'Warmes Wasser', 'Ghee', 'Reis', 'Mungbohnen', 'Probiotika'],
    tags: ['#shankhaprakshalana', '#yoga', '#shatkarma', '#darmreinigung', '#salzwasser', '#intensiv']
  },

  {
    id: 'nasenspuelung',
    name: 'Nasenspülung (Jala Neti)',
    kategorie: 'Reinigungstechniken',
    dauer: '5 Minuten täglich',
    intensitaet: 'Sehr niedrig',
    beschreibung:
      'Jala Neti ist eine yogische Reinigungstechnik (Shatkarma), bei der lauwarmes Salzwasser durch die Nase gespült wird. Mit einem Neti-Kännchen wird Salzwasser in ein Nasenloch gegossen -- es fließt durch die Nasenhöhlen und kommt aus dem anderen Nasenloch heraus. Eine einfache, aber erstaunlich wirksame Technik zur Reinigung der Atemwege, die in Indien seit Jahrtausenden praktiziert wird.',
    wirkung:
      'Entfernung von Staub, Pollen, Schleim und Bakterien aus den Nasenhöhlen. Befeuchtung der Nasenschleimhaut. Linderung bei Allergien, Heuschnupfen und Sinusitis. Vorbeugung gegen Erkältungen. Verbesserung der Nasenatmung. Stimulation des Stirn-Chakras (Ajna). Klarerer Kopf.',
    seele:
      'Freie Nasenatmung fördert Pranayama (Atmübungen) und Meditation. Ein klarer Kopf ist die Basis für klares Denken.',
    anleitung:
      '1. Neti-Kännchen mit lauwarmem Wasser füllen (körperwarm). 2. 1/2 TL feines Salz pro 250ml hinzufügen und auflösen. 3. Über dem Waschbecken stehen, Kopf leicht zur Seite neigen. 4. Tulle des Kännchens in das obere Nasenloch einführen. 5. Durch den Mund atmen. 6. Wasser fließt durch die Nase und kommt aus dem unteren Nasenloch. 7. Die Hälfte des Wassers verwenden, dann Seite wechseln. 8. Anschließend: Kräftig durch die Nase ausatmen (in Taschentuch), um Restwasser zu entfernen.',
    vorbereitung:
      'Neti-Kännchen besorgen (Keramik oder Edelstahl). Feines Meersalz bereitlegen.',
    aufbau:
      'Täglich morgens durchführen -- ideale Morgenroutine zusammen mit Zungenreinigung und Ölziehen.',
    vorsicht:
      'Immer Salz verwenden -- reines Wasser brennt in der Nase. Nicht bei akuter Mittelohrentzündung oder Nasenbluten. Nach der Spülung gründlich ausschnauben, damit kein Restwasser in den Nebenhöhlen bleibt.',
    besonders_bei: ['allergie', 'heuschnupfen', 'sinusitis', 'erkaeltung', 'nasenpolypen', 'schnarchen', 'atemwege'],
    begleitende_mittel: ['Neti-Kännchen', 'Feines Meersalz', 'Lauwarmes Wasser'],
    tags: ['#jalaneti', '#nasenspülung', '#yoga', '#shatkarma', '#allergie', '#atemwege']
  },

  {
    id: 'schwermetall-ausleitung',
    name: 'Schwermetall-Ausleitung',
    kategorie: 'Reinigungstechniken',
    dauer: '3-12 Monate',
    intensitaet: 'Mittel',
    beschreibung:
      'Schwermetalle wie Quecksilber (Amalgam-Füllungen, Impfstoffe), Blei (alte Wasserleitungen, Farben), Aluminium (Deos, Kochgeschirr, Impfstoffe), Cadmium (Zigaretten, Dünger) und Arsen (Reis, Grundwasser) lagern sich im Gewebe ab und stören Enzyme, Nervensystem und Immunfunktion. Die natürliche Ausleitung verwendet vier Hauptmittel: Zeolith/Bentonit (binden Metalle im Darm), Chlorella (bindet Quecksilber), Korianderkraut (löst Metalle aus dem Gewebe -- auch aus dem Gehirn), und Bärlauch (bindet und transportiert ab). Diese Mittel werden nach einem bestimmten Protokoll kombiniert.',
    wirkung:
      'Entfernung von Schwermetallen aus Gewebe, Organen und Gehirn. Verbesserung der Enzymfunktion. Stärkung des Immunsystems. Klareres Denken ("Brain Fog" verschwindet). Weniger Müdigkeit. Bessere Verdauung. Reduzierung von neurologischen Symptomen. Weniger Hautprobleme.',
    seele:
      'Schwermetalle können die Wahrnehmung trüben und Emotionen verstärken (besonders Quecksilber wird mit Reizbarkeit und Depression in Verbindung gebracht). Die Ausleitung kann zu einer spürbaren emotionalen und mentalen Aufhellung führen.',
    anleitung:
      '1. Phase 1 (4 Wochen): Zeolith oder Bentonit (2x täglich, 30 Min vor dem Essen) + Chlorella (3x10 Tabletten täglich). Binden Metalle im Darm und Blut. 2. Phase 2 (ab Woche 5): Zusätzlich frisches Korianderkraut (1 Bund täglich als Pesto oder Smoothie). Löst Metalle aus dem Gewebe. WICHTIG: Koriander NIE ohne gleichzeitige Bindungsmittel (Chlorella, Zeolith) nehmen -- sonst werden Metalle nur umverteilt. 3. Phase 3: Bärlauch-Tinktur ergänzen (15-20 Tropfen, 3x täglich). 4. Dauer: Mindestens 3 Monate, bei starker Belastung 6-12 Monate. 5. Begleitend: Viel Wasser trinken, Sauna, Bewegung.',
    vorbereitung:
      'Zeolith (Klinoptilolith, Medizinprodukt-Qualität), Chlorella (gebrochene Zellwand), frischen Koriander, Bärlauch-Tinktur besorgen. Bei Amalgam-Füllungen: Zuerst Füllungen fachgerecht entfernen lassen (Umweltzahnarzt), dann ausleiten.',
    aufbau:
      'Nach der Ausleitung: Zeolith und Chlorella in reduzierter Dosis beibehalten (Erhaltungsdosis). Regelmäßig Koriander und Bärlauch in die Ernährung einbauen. Jährliche Ausleitungskur sinnvoll.',
    vorsicht:
      'Koriander NIEMALS ohne Bindungsmittel verwenden -- kann sonst Metalle ins Gehirn umverteilen. Bei Amalgam-Füllungen: Zuerst entfernen, dann ausleiten. Entgiftungsreaktionen möglich (Kopfschmerzen, Müdigkeit, Hautausschlag) -- dann Dosis reduzieren. Bei starker Quecksilberbelastung: Ärztliche Begleitung empfohlen (evtl. DMSA/DMPS-Chelat-Therapie).',
    besonders_bei: ['brain-fog', 'muedigkeit', 'depression', 'neurologische-symptome', 'autoimmun', 'amalgam', 'konzentrationsstoerungen', 'hautprobleme', 'allergien'],
    begleitende_mittel: ['Zeolith (Klinoptilolith)', 'Chlorella', 'Korianderkraut', 'Bärlauch-Tinktur', 'Selen', 'Zink', 'Glutathion', 'Vitamin C', 'Sauna', 'Epsom-Salz-Bäder'],
    tags: ['#schwermetall', '#ausleitung', '#zeolith', '#chlorella', '#koriander', '#bärlauch', '#amalgam', '#entgiftung']
  },

  {
    id: 'parasitenkur',
    name: 'Parasitenkur',
    kategorie: 'Reinigungstechniken',
    dauer: '6-12 Wochen',
    intensitaet: 'Mittel',
    beschreibung:
      'Parasiten (Würmer, Einzeller, Egel) sind verbreiteter als die meisten Menschen denken -- Schätzungen zufolge trägt fast jeder Mensch Parasiten in sich. Sie können Nährstoffe stehlen, Toxine ausscheiden, das Immunsystem schwächen und eine Vielzahl unerklärlicher Symptome verursachen (Blähungen, Hautprobleme, Heißhunger auf Zucker, Zähneknrirschen, Juckreiz, Müdigkeit). Die klassische natürliche Parasitenkur nach Dr. Hulda Clark verwendet drei Hauptmittel: Schwarze Walnussschalen-Tinktur, Wermut (Artemisia absinthium) und Gewärznelken.',
    wirkung:
      'Abtötung von Parasiten in verschiedenen Lebensstadien: Walnussschale tötet ausgewachsene Parasiten und Larven, Wermut tötet Larven und Zwischenstadien, Nelken töten die Eier. Nur die Kombination aller drei ist wirksam, da sonst Eier oder Larven überleben und ein neuer Zyklus beginnt. Zusätzlich: Artemisia annua (einjähriger Beifuß) ist hochwirksam gegen Blutparasiten und hat starke Anti-Krebs-Eigenschaften.',
    seele:
      'Parasiten werden in manchen Traditionen als energetische "Mitesser" betrachtet -- sie nähren sich nicht nur von unserem Körper, sondern auch von negativen Emotionen und Energien. Viele berichten nach einer Parasitenkur von mehr Klarheit, weniger Ängsten und weniger Heißhunger (besonders auf Zucker, den Parasiten brauchen).',
    anleitung:
      '1. Schwarze Walnussschalen-Tinktur: Langsam aufbauen (1 Tropfen Tag 1, 2 Tropfen Tag 2 ... bis 20 Tropfen, dann 2 TL, 1x pro Woche). 2. Wermut-Kapseln: Aufbauen von 1 auf 7 Kapseln, 1x täglich vor dem Essen. 3. Nelken-Kapseln: 3x täglich, aufbauen von 1 auf 3 Kapseln pro Dosis. 4. Alle drei gleichzeitig nehmen. 5. Dauer: Mindestens 6 Wochen (deckt mehrere Parasitenzyklen ab). 6. Begleitend: Zucker, Weissmehl und Alkohol komplett meiden (nähren Parasiten). 7. Viel Ballaststoffe (Flohsamenschalen) um abgetötete Parasiten auszuscheiden. 8. Einläufe unterstützen die Ausscheidung.',
    vorbereitung:
      'Hulda-Clark-Tinktur, Wermut-Kapseln und Nelken-Kapseln besorgen. Ernährung vorher umstellen (zuckerfrei). Flohsamenschalen und Einlauf-Set bereitlegen.',
    aufbau:
      'Nach der Kur: Wöchtentliche Erhaltungsdosis (1x pro Woche alle drei Mittel). Ernährung zuckerarm halten. Regelmäßig Kürbiskerne essen (natürliches Antiparasitikum). Jährliche Kur wiederholen.',
    vorsicht:
      'Nicht während Schwangerschaft oder Stillzeit. Wermut nicht bei Magengeschwüren. Absterbende Parasiten können starke Herxheimer-Reaktionen auslösen (Unwohlsein, Kopfschmerzen, Hautausschlag, Durchfall) -- dann Dosis reduzieren und Ausscheidung mit Einläufen unterstützen. Bei starkem Parasitenbefall ärztliche Begleitung.',
    besonders_bei: ['parasiten', 'blaehungen', 'hautprobleme', 'heisshunger', 'zaehneknrirschen', 'allergien', 'autoimmun', 'muedigkeit', 'unerklärliche-symptome'],
    begleitende_mittel: ['Schwarze Walnussschalen-Tinktur', 'Wermut (Artemisia absinthium)', 'Artemisia annua', 'Gewärznelken', 'Kürbiskerne', 'Papaya-Kerne', 'Knoblauch', 'Flohsamenschalen', 'Einläufe', 'Zeolith'],
    tags: ['#parasitenkur', '#hulda-clark', '#wermut', '#artemisia', '#nelken', '#walnuss', '#entgiftung']
  },

  // =========================================================================
  // SPIRITUELLES FASTEN
  // =========================================================================

  {
    id: 'fasten-und-gebet',
    name: 'Fasten und Gebet',
    kategorie: 'Spirituelles Fasten',
    dauer: '1-40 Tage',
    intensitaet: 'Variabel',
    beschreibung:
      'Die Verbindung von Fasten und Gebet ist in nahezu allen spirituellen Traditionen verankert -- Christentum (Jesus fastete 40 Tage), Judentum (Jom Kippur), Islam (Ramadan), Hinduismus, Buddhismus, indigene Traditionen. Die Idee: Durch den Verzicht auf körperliche Nahrung öffnet sich der Mensch für geistige Nahrung. Das Gebet während des Fastens wird als besonders kraftvoll erlebt -- der Geist ist klarer, die Intuition schärfer, die Verbindung zum Göttlichen unmittelbarer. Fasten "verdünnt" die Materie und lässt den Geist leuchten.',
    wirkung:
      'Alle körperlichen Wirkungen des Fastens (Autophagie, Entgiftung, Entzündungshemmung) plus: Erhöhte Empfänglichkeit für Intuition, Traeume und innere Führung. Verstärkte Gebetswirkung. Loslösung von materiellen Bindungen. Vertiefung der spirituellen Praxis. Demut und Dankbarkeit wachsen. Manche erleben mystische Zustände, Visionen oder tiefe Einsichten.',
    seele:
      'Fasten und Gebet zusammen sind eines der kraftvollsten Werkzeuge der spirituellen Entwicklung. Das Fasten schafft die innere Stille, das Gebet füllt sie mit Ausrichtung und Absicht. Viele beschreiben es als das Gefühl, "dünner" zu werden -- die Schleier zwischen Mensch und Göttlichem werden dünner.',
    anleitung:
      '1. Eine klare Gebetsabsicht formulieren (Wofür faste und bete ich?). 2. Die Fastenform wählen (Wasserfasten, Saftfasten, Teilfasten). 3. Die Dauer festlegen (Anfänger: 1-3 Tage). 4. Morgens, mittags und abends feste Gebetszeiten einrichten. 5. Stille Zeiten einbauen (Meditation, kontemplatives Gebet, Lectio Divina). 6. Tagebuch führen (Traeume, Einsichten, innere Bilder). 7. Ablenkungen reduzieren (kein Fernsehen, wenig Handy, wenig Gespräche). 8. Dankbar und achtsam das Fasten brechen.',
    vorbereitung:
      'Gebetsabsicht klären. Fastenform wählen. Stille Umgebung schaffen. Bibel, Gebetsbuch oder spirituelle Texte bereitlegen. Gemeinschaft einladen (gemeinsames Fasten verstärkt).',
    aufbau:
      'Das Fastenbrechen selbst als heiligen Moment gestalten. Die gewonnenen Einsichten in den Alltag integrieren. Regelmäßige Gebetszeiten beibehalten.',
    vorsicht:
      'Körperliche Fasten-Vorsichtsmaßnahmen beachten. Spirituelle Ekstase kann zu längerem Fasten verführen, als körperlich sinnvoll -- auf den Körper hören. Bei psychischer Labilität vorsichtig.',
    besonders_bei: ['spirituelle-entwicklung', 'lebensentscheidungen', 'innere-fuehrung', 'heilung', 'trauer', 'neuanfang'],
    begleitende_mittel: ['Gebet', 'Meditation', 'Heilige Texte', 'Tagebuch', 'Stille', 'Gemeinschaft', 'Weihrauch', 'Kerzen'],
    tags: ['#fasten', '#gebet', '#spirituell', '#40tage', '#stille', '#mystik', '#christlich']
  },

  {
    id: 'visionssuche',
    name: 'Visionssuche (Fasten in der Natur)',
    kategorie: 'Spirituelles Fasten',
    dauer: '1-4 Tage (traditionell 4 Tage und Nächte)',
    intensitaet: 'Hoch',
    beschreibung:
      'Die Visionssuche (Vision Quest) ist ein Übergangsritual indigener Kulturen Nordamerikas (Lakota: Hanbleceya -- "für eine Vision weinen"). Der Suchende zieht sich allein in die Wildnis zurück -- ohne Nahrung, oft ohne Wasser, ohne Ablenkung -- und betet um eine Vision, eine Lebensrichtung, eine Antwort. Traditionell 4 Tage und 4 Nächte in einem kleinen, markierten Kreis sitzend. Es ist eines der tiefgreifendsten Rituale der Menschheit -- ein bewusstes Sterben des Alten und eine Neugeburt.',
    wirkung:
      'Körperlich: Alle Wirkungen des Wasser- oder Trockenfastens. Darüber hinaus: Die Konfrontation mit Alleinsein, Hunger, Kälte und Dunkelheit löst tiefe Schichten. Das Nervensystem schaltet nach anfänglicher Angst in einen Zustand tiefer Ruhe und Präsenz. Die Sinne werden extrem geschärft. Die Grenze zwischen Innen- und Außenwelt wird durchlässig.',
    seele:
      'Die Visionssuche ist eine Begegnung mit sich selbst -- ohne Ablenkung, ohne Flucht. Viele beschreiben sie als den wichtigsten Moment ihres Lebens. Die Natur spricht in Zeichen: Tiere, Wind, Wolken, Traeume werden zu Botschaften. Manche empfangen tatsächlich Visionen -- innere Bilder von außerordentlicher Klarheit über ihren Lebensweg. Das Ritual markiert einen klaren Vorher/Nachher-Punkt im Leben.',
    anleitung:
      '1. Einen erfahrenen Visionssuche-Leiter finden (niemals allein ohne Erfahrung). 2. Vorbereitungszeit (Monate bis 1 Jahr): Intention klären, körperlich und geistig vorbereiten. 3. Vorbereitung im Camp (1-3 Tage): Schwitzhütte, Gebete, Gemeinschaft. 4. Hinausgehen an den gewählten Platz: Kleinen Kreis mit Gebetsfahnen markieren. 5. 1-4 Tage und Nächte im Kreis bleiben: Beten, singen, weinen, schweigen, wach bleiben oder schlafen. 6. Keine Nahrung, nur Wasser (in manchen Traditionen auch kein Wasser). 7. Rückkehr ins Camp: Schwitzhütte, Erzählung der Erfahrung, Spiegelung durch den Leiter. 8. Integration im Alltag (Monate).',
    vorbereitung:
      'Einen vertrauenswürdigen Leiter finden. Monate der inneren Vorbereitung. Intention klären: Was suche ich? Körperliche Fitness -- mehrere kürzere Fasten vorher absolviert haben. Ausrüstung: Schlafsack, Plane, warme Kleidung, Gebetsfahnen.',
    aufbau:
      'Das Fastenbrechen wird in der Gemeinschaft zelebriert. Die Vision wird erzählt und gespiegelt. Die Integration im Alltag ist der eigentliche "Aufbau" -- die Vision muss gelebt werden.',
    vorsicht:
      'NIEMALS allein ohne erfahrene Begleitung. Nicht bei psychischen Erkrankungen (Psychosen, schwere Depression) ohne therapeutische Begleitung. Wetter- und Naturgefahren beachten. Notfallplan haben. Kein "Abenteuerurlaub" -- es ist ein heiliges Ritual, das Respekt und Vorbereitung erfordert.',
    besonders_bei: ['lebensuebergaenge', 'sinnsuche', 'trauer', 'neuanfang', 'maennlichkeit', 'weiblichkeit', 'berufung', 'initiation'],
    begleitende_mittel: ['Gebetsfahnen', 'Salbei', 'Tabak (als Opfergabe)', 'Trommel', 'Schwitzhütte', 'Gemeinschaft', 'Erfahrener Leiter'],
    tags: ['#visionssuche', '#visionquest', '#hanbleceya', '#wildnis', '#ritual', '#initiation', '#indigene-weisheit']
  },

  {
    id: 'ramadan-fasten',
    name: 'Ramadan-Fasten',
    kategorie: 'Spirituelles Fasten',
    dauer: '29-30 Tage (1 Mondmonat)',
    intensitaet: 'Mittel',
    beschreibung:
      'Im Ramadan -- dem neunten Monat des islamischen Mondkalenders -- fasten Muslime von Sonnenaufgang (Fajr) bis Sonnenuntergang (Maghrib). Während dieser Zeit wird weder gegessen noch getrunken. Nach Sonnenuntergang wird das Fasten mit dem Iftar gebrochen (traditionell mit einer Dattel und Wasser), gefolgt von einer Mahlzeit. Vor Sonnenaufgang gibt es eine weitere Mahlzeit (Suhur). Ramadan ist weit mehr als körperliches Fasten -- es ist eine Zeit der Selbstdisziplin, des Gebets, der Großzügigkeit und der Gemeinschaft. Es ist die größte gemeinschaftliche Fastenpraxis der Welt -- über 1.5 Milliarden Menschen fasten gleichzeitig.',
    wirkung:
      'Tägliches Intervallfasten (je nach Breitengrad 12-18 Stunden inklusive Trockenfasten). Verbesserung der Insulinsensitivität. Fettverbrennung tagsüber. Autophagie durch die tägliche Fastenperiode. Die Trockenfasten-Komponente verstärkt die Entgiftung. Studien zeigen: Verbesserte Blutfette, reduzierte Entzündungsmarker, Gewichtsverlust (wenn Iftar maßvoll).',
    seele:
      'Ramadan ist eine zutiefst gemeinschaftliche spirituelle Erfahrung. Das gemeinsame Fastenbrechen (Iftar) stärkt Familien- und Gemeinschaftsbande. Die Erfahrung von Hunger schafft Empathie für Bedürftige. Die nächtlichen Gebete (Tarawih) bringen Tiefe und Ruhe. Viele Muslime beschreiben Ramadan als den spirituell intensivsten und schönsten Monat des Jahres.',
    anleitung:
      '1. Suhur (Mahlzeit vor Sonnenaufgang): Nährstoffreich und sättigend essen. Komplexe Kohlenhydrate, Protein, Fette. Genug trinken. 2. Von Sonnenaufgang bis Sonnenuntergang: Weder Essen noch Trinken. 3. Iftar (Fastenbrechen bei Sonnenuntergang): Mit Datteln und Wasser beginnen. Dann Gebet (Maghrib). Dann Mahlzeit -- nicht überessen. 4. Abends: Tarawih-Gebet. 5. Über den Monat: Quran-Lektüre, Spenden (Zakat), gute Taten.',
    vorbereitung:
      'Tage vorher: Koffein reduzieren. Schlafrhythmus anpassen (frühes Aufstehen für Suhur). Mahlzeiten planen.',
    aufbau:
      'Nach Ramadan: Eid al-Fitr (Fest des Fastenbrechens). Langsam zum normalen Essrhythmus zurückkehren. Die spirituellen Gewohnheiten (Gebet, Quran-Lektüre) beibehalten.',
    vorsicht:
      'Ausnahmen im Islam: Kranke, Reisende, Schwangere, Stillende, Menstruierende und Kinder sind vom Fasten befreit. Bei Diabetes: Ärztliche Beratung nötig (Blutzucker kann stark schwanken). In nördlichen Breitengraden können die Fastentage im Sommer sehr lang sein (bis 18 Stunden) -- dann besonders auf Hydration bei Suhur achten.',
    besonders_bei: ['spiritualitaet', 'gemeinschaft', 'selbstdisziplin', 'dankbarkeit', 'mitgefuehl', 'insulinresistenz'],
    begleitende_mittel: ['Datteln', 'Wasser', 'Nährstoffreiche Mahlzeiten', 'Quran', 'Gemeinschaft', 'Gebet'],
    tags: ['#ramadan', '#islam', '#iftar', '#suhur', '#gemeinschaft', '#spiritual']
  },

  {
    id: 'ayurvedisches-fasten',
    name: 'Ayurvedisches Fasten (Langhana)',
    kategorie: 'Spirituelles Fasten',
    dauer: '1-7 Tage (je nach Konstitution)',
    intensitaet: 'Niedrig bis Mittel',
    beschreibung:
      'Im Ayurveda wird Fasten (Langhana) individuell nach der Konstitution (Dosha) angepasst. Vata-Typen sollten nur kurz und sanft fasten (warme Suppen, Kitchari), Pitta-Typen vertragen Saftfasten und moderate Fastendauern gut, Kapha-Typen profitieren am meisten von strengem Fasten und können länger fasten. Das ayurvedische Fasten betont: Ama (Schlacken) verbrennen, Agni (Verdauungsfeuer) stärken, Doshas ausgleichen. Die Reinigungskur Panchakarma ist die umfassendste ayurvedische Entgiftung.',
    wirkung:
      'Dosha-spezifische Entgiftung und Ausgleich. Stärkung von Agni (Verdauungsfeuer). Verbrennung von Ama (Stoffwechselschlacken). Kitchari-Fasten nährt und reinigt gleichzeitig (Reis + Mungbohnen + Gewürze = leicht verdaulich, basisch, nährstoffreich). Gewürze wie Ingwer, Kurkuma, Kreuzkümmel, Koriander und Fenchel unterstützen aktiv die Entgiftung.',
    seele:
      'Ayurvedisches Fasten ist eingebettet in eine ganzheitliche Lebensphilosophie. Es geht nicht nur um den Körper, sondern um Harmonie aller drei Doshas -- Körper, Geist und Seele. Die Gewürze und die Art der Zubereitung haben eine feinstoffliche Wirkung auf das Bewusstsein.',
    anleitung:
      '1. Dosha bestimmen (Vata, Pitta oder Kapha). 2. Vata: 1-3 Tage Kitchari-Fasten (warmer Reis-Linsen-Brei mit Gewürzen und Ghee). Viel trinken (Ingwertee). 3. Pitta: 3-5 Tage Saftfasten oder Kitchari-Fasten (kühlende Gewürze: Koriander, Fenchel, Kurkuma). 4. Kapha: 3-7 Tage strengeres Fasten (heißes Wasser mit Ingwer, warme Brühe, ggf. Honigwasser). 5. Alle: Morgens warmes Wasser mit Zitrone. Abhängig (Ölmassage) vor dem Duschen. Nasenöl. Meditation. 6. Panchakarma (umfassend): 5-21 Tage unter ärztlicher Leitung mit Ölmassagen, Stirnguss, Einläufen und Ausleitung.',
    vorbereitung:
      'Dosha-Bestimmung (online oder beim Ayurveda-Therapeuten). Kitchari-Zutaten und Gewürze besorgen. Sesamöl für Abhängig. Ruhe einplanen.',
    aufbau:
      'Schrittweise zurück zur normalen Kost -- immer warm, frisch gekocht, würzend. Kaltes, Rohes und Schwerverdauliches zunächst meiden (besonders für Vata).',
    vorsicht:
      'Vata-Typen sollten nie streng oder lang fasten -- das erhöht Vata und kann zu Angst, Schlaflosigkeit und Erschöpfung führen. Kapha-Typen vertragen strenges Fasten am besten. Bei Unsicherheit: Ayurveda-Therapeuten konsultieren.',
    besonders_bei: ['verdauungsstoerungen', 'ama (Schlacken)', 'dosha-ungleichgewicht', 'hautprobleme', 'gelenke', 'erschoepfung', 'übergewicht (Kapha)'],
    begleitende_mittel: ['Kitchari', 'Ghee', 'Ingwer', 'Kurkuma', 'Triphala', 'Sesamöl', 'Abhängig (Ölmassage)', 'Nasya (Nasenöl)', 'Heißes Wasser'],
    tags: ['#ayurveda', '#langhana', '#kitchari', '#panchakarma', '#dosha', '#agni', '#ama']
  },
];


// ============================================================================
// ERNÄHRUNGSSTILE
// ============================================================================

export const NUTRITION_STYLES = [

  {
    id: 'ketogen',
    name: 'Ketogene Ernährung',
    beschreibung:
      'Die ketogene Ernährung ist eine kohlenhydratarme, fettreiche Ernährungsform, die den Körper in den Zustand der Ketose versetzt -- einen Stoffwechselzustand, in dem Fett statt Glukose als primäre Energiequelle dient. Typische Makroverteilung: 70-80% Fett, 15-20% Protein, 5-10% Kohlenhydrate (unter 20-50g pro Tag). Die Leber wandelt Fettsäuren in Ketonkörper um -- hauptsächlich Beta-Hydroxybutyrat (BHB), Acetoacetat und Aceton. Diese Ketonkörper sind ein überlegener Brennstoff für das Gehirn: Sie produzieren pro Einheit mehr ATP (Zellenergie) als Glukose und erzeugen dabei weniger oxidativen Stress (weniger freie Radikale). BHB ist nicht nur ein Energieträger, sondern auch ein Signalmolekül -- es hemmt NLRP3-Inflammasomen (zentrale Entzündungstreiber), aktiviert BDNF (Brain-Derived Neurotrophic Factor, der Nervenzellen schützt und Neuroplastizität fördert) und wirkt epigenetisch als Histon-Deacetylase-Hemmer (schaltet schützende Gene an). Die ketogene Ernährung wurde ursprünglich in den 1920er Jahren zur Behandlung schwerer Epilepsie bei Kindern entwickelt und wird heute als therapeutischer Ansatz bei einer wachsenden Zahl von Erkrankungen erforscht. Ketose ist kein unnatürlicher Zustand -- unsere Vorfahren waren regelmäßig in Ketose (zwischen den Jagden, im Winter, während Fastenperioden). Säuglige werden mit Ketose geboren, und Muttermilch enthält mittelkettige Fettsäuren (MCTs), die direkt in Ketonkörper umgewandelt werden. Ketose ist der Ur-Zustand des menschlichen Stoffwechsels.',
    prinzip:
      'Kohlenhydrate radikal reduzieren (unter 20-50g/Tag) und gesunde Fette erhöhen, sodass der Körper gezwungen wird, Fett als Hauptbrennstoff zu nutzen. Die Leber produziert daraufhin Ketonkörper -- eine saubere, effiziente Energiequelle. Der Schlüssel ist die metabolische Flexibilität: Ein ketoangpasster Körper kann mühelos zwischen Fett- und (gelegentlicher) Glukoseverbrennung wechseln.',
    vorteile: [
      'Stabile Energie den ganzen Tag -- keine Blutzucker-Achterbahn, keine Energietiefs nach dem Essen',
      'Entzündungshemmung: BHB hemmt NLRP3-Inflammasomen, die an chronischen Entzündungen beteiligt sind',
      'Verbesserung der Insulinsensitivität -- zentral bei Diabetes Typ 2, metabolischem Syndrom und PCOS',
      'Mentale Klarheit und Fokus: Ketonkörper sind ein sauberer, stabiler Brennstoff für Nervenzellen',
      'Neuroprotektiv: BHB schützt Nervenzellen, fördert BDNF und kann neurodegenerative Prozesse verlangsamen',
      'Gewichtsverlust (besonders viszerales Bauchfett) ohne Hungern -- Fett sättigt langanhaltend',
      'Förderung der Autophagie -- besonders in Kombination mit Intervallfasten',
      'Mitochondriale Gesundheit: Fettverbrennung erzeugt weniger ROS (reaktive Sauerstoffspezies) und fördert die Mitochondrien-Biogenese',
      'Verbesserte Blutfettwerte: HDL steigt, Triglyzeride sinken, LDL-Partikel werden größer (weniger atherogen)',
      'Anti-Krebs-Potential: Krebszellen sind auf Glukose angewiesen (Warburg-Effekt) -- Ketose entzieht ihnen den Brennstoff',
      'Antiepileptische Wirkung: Therapeutischer Standard bei medikamentenresistenter Epilepsie',
      'Hormonbalance: Stabilisiert Insulin, Leptin und Ghrelin',
      'Reduzierter Heißhunger: Ketonkörper unterdrücken Ghrelin (Hungerhormon)',
      'Anti-Aging: Weniger AGEs (Advanced Glycation End Products), weniger oxidativer Stress, mehr Autophagie'
    ],
    herausforderungen: [
      'Keto-Grippe in den ersten 1-2 Wochen (Kopfschmerzen, Müdigkeit, Reizbarkeit) -- durch Elektrolytmangel, vergeht bei ausreichend Natrium, Kalium und Magnesium',
      'Soziale Herausforderung: Viele Mahlzeiten in Gesellschaft sind kohlenhydratlastig',
      'Anfangs aufwändiger: Ernährungsumstellung erfordert Wissen und Planung',
      'Nicht für jeden ideal: Manche Menschen (besonders manche Frauen) fühlen sich besser mit etwas mehr Kohlenhydraten -- zyklische Ketose kann die Lösung sein',
      'Qualität der Fette entscheidend: Industrielle Pflanzenöle (Sonnenblume, Raps, Soja) sind entzündungsfördernd -- nur gesunde Fette verwenden',
      'Oxalat-Risiko bei viel Spinat und Mandeln -- Variation ist wichtig',
      'Schilddrüsenfunktion: Manche Menschen brauchen gelegentliche Kohlenhydrat-Tage (Carb Cycling), besonders bei Schilddrüsenunterfunktion'
    ],
    besonders_bei: ['epilepsie', 'diabetes-typ2', 'insulinresistenz', 'uebergewicht', 'krebs (begleitend)', 'alzheimer', 'parkinson', 'demenz', 'depression', 'angststoerungen', 'PCOS', 'metabolisches-syndrom', 'entzuendung', 'autoimmun', 'migraine', 'chronische-schmerzen', 'anti-aging'],
    typische_lebensmittel: [
      'Avocado', 'Olivenöl (kaltgepresst)', 'Kokosöl', 'Ghee / Butter (Weidehaltung)',
      'Eier (Freiland)', 'Fetter Fisch (Lachs, Sardinen, Makrele)', 'Fleisch (Weidehaltung)',
      'Organfleisch (Leber -- nährstoffdichtestes Lebensmittel der Welt)',
      'Nüsse (Macadamia, Pecan, Walnuss)', 'Samen (Leinsamen, Chiasamen, Hanfsamen)',
      'Grünes Gemüse (Brokkoli, Spinat, Grünkohl, Zucchini)',
      'Kreuzblütler (Blumenkohl, Rosenkohl, Kohlrabi)',
      'Beeren (in kleinen Mengen: Blaubeeren, Himbeeren)',
      'Fermentiertes (Sauerkraut, Kimchi, Kefir)',
      'MCT-Öl', 'Oliven', 'Kakaobutter', 'Knochenbrühe'
    ],
    meiden: [
      'Zucker und Süßigkeiten aller Art',
      'Getreide (Weizen, Reis, Mais, Hafer, Roggen)',
      'Hülsenfrüchte (Bohnen, Linsen, Kichererbsen) -- hoher Kohlenhydratgehalt und Antinährstoffe',
      'Industrielle Pflanzenöle (Sonnenblumenöl, Rapsöl, Sojaöl -- hochentzündlich, oxidieren leicht)',
      'Stark stärkehaltige Gemüse (Kartoffeln, Susskartoffeln -- nur gelegentlich bei Carb Cycling)',
      'Fruchtsäfte und Softdrinks',
      'Verarbeitete Lebensmittel',
      'Margarine und Transfette',
      'Most processed "keto" Fertigprodukte (enthalten oft Zusatzstoffe)'
    ],
    wissenschaft:
      'Die ketogene Ernährung ist eine der am besten erforschten Ernährungsformen. Schlüsselerkenntnisse: 1) Beta-Hydroxybutyrat (BHB) ist nicht nur Brennstoff, sondern ein Signalmolekül, das über 600 Gene reguliert (Newman & Verdin, Cell Metabolism 2017). 2) Ketonkörper hemmen das NLRP3-Inflammasom -- einen zentralen Treiber chronischer Entzündungen (Youm et al., Nature Medicine 2015). 3) BHB fördert BDNF und schützt Nervenzellen vor oxidativem Stress und Neurodegeneration. 4) Der Warburg-Effekt zeigt: Krebszellen sind auf Glukose und Glutamin angewiesen und können Ketonkörper nur eingeschränkt nutzen -- Ketose als metabolische Therapie bei Krebs wird intensiv erforscht (Seyfried et al.). 5) Die VIRTA-Health-Studie zeigte: Nach 2 Jahren ketogener Ernährung konnten 54% der Typ-2-Diabetiker ihre Medikamente reduzieren oder absetzen. 6) Mitochondrien arbeiten effizienter mit Ketonkörpern -- weniger ROS-Produktion, mehr ATP pro Sauerstoffmolekül. 7) Ketose fördert die Mitochondrien-Biogenese (Bildung neuer Mitochondrien) über PGC-1alpha. 8) BHB wirkt als Histon-Deacetylase-Hemmer (HDAC-Inhibitor) -- es schaltet schützende Gene an, die Entzündung, oxidativen Stress und Alterung bremsen.',
    tags: ['#keto', '#ketogen', '#fettverbrennung', '#ketonkörper', '#BHB', '#lowcarb', '#highfat', '#LCHF', '#entzündungsfrei', '#autophagie', '#mitochondrien', '#metabolisch']
  },

  {
    id: 'vegan',
    name: 'Vegane Ernährung',
    beschreibung:
      'Die vegane Ernährung verzichtet vollständig auf tierische Produkte -- kein Fleisch, Fisch, Milchprodukte, Eier oder Honig. Die Hauptmotivation ist meist ethisch (Tierschutz, Klimaschutz), seltener primär gesundheitlich. Eine gut geplante vegane Ernährung mit viel Gemüse, Obst, Nüssen und Samen kann funktionieren -- sie erfordert aber Wissen, Planung und Supplementierung. Die Realität ist, dass viele Veganer sich hauptsächlich von Getreide, Hülsenfrüchten und verarbeiteten Ersatzprodukten ernähren, was zu Nährstoffmängeln, Verdauungsproblemen und langfristig zu gesundheitlichen Einschränkungen führen kann. Eine ehrliche Betrachtung erkennt sowohl die ethische Kraft als auch die ernährungsphysiologischen Grenzen dieser Lebensweise.',
    prinzip:
      'Vollständiger Verzicht auf tierische Produkte aus ethischen und/oder ökologischen Gründen. Pflanzliche Nahrungsmittel als alleinige Nahrungsquelle.',
    vorteile: [
      'Ethischer Standpunkt: Kein Tierleid für Ernährung -- ein Wert, der Respekt verdient',
      'Ökologischer Fußabdruck kann kleiner sein (abhängig von der konkreten Lebensmittelauswahl)',
      'Hoher Gemüse- und Obstanteil liefert Vitamine, Mineralstoffe und sekundäre Pflanzenstoffe',
      'Ballaststoffreich -- gut für die Darmflora (wenn gut vertragen)',
      'Kann bei bestimmten Erkrankungen kurzfristig entzündungshemmend wirken (Weglassen von konventionellem Fleisch und Milch)',
      'Fördert Bewusstsein für Ernährung und Nachhaltigkeit'
    ],
    herausforderungen: [
      'Vitamin B12: Kommt in verwertbarer Form NUR in tierischen Produkten vor -- Supplementierung ist PFLICHT, sonst drohen irreversible Nervenschäden',
      'Eisen: Pflanzliches Eisen (Non-Häm) wird 5-12% absorbiert, tierisches (Häm) 15-35%. Eisenmangel ist bei Veganerinnen weit verbreitet',
      'Omega-3 (EPA/DHA): Pflanzliche Alpha-Linolensäure (ALA) wird nur zu 5-10% in EPA und kaum in DHA umgewandelt -- Algenöl-Supplementierung nötig',
      'Zink: Phytinsäure in Getreide und Hülsenfrüchten hemmt die Zinkaufnahme erheblich',
      'Vitamin D3: Die tierische Form (Cholecalciferol) ist effektiver als pflanzliches D2',
      'Protein-Qualität: Pflanzliche Proteine haben ein unvollständiges Aminosauere-Profil -- Kombination nötig. Leucin (für Muskelaufbau) ist in pflanzlichen Quellen niedrig',
      'Antinährstoffe: Lektine (Getreide, Hülsenfrüchte), Phytinsäure (bindet Mineralien), Oxalate (Spinat, Rhabarber), Saponine -- können Darmschleimhaut schädigen und Nährstoffaufnahme hemmen',
      'Sojaproblematik: Phytooestrogene können Hormonhaushalt beeinflussen, Schilddrüsenfunktion stören',
      'Viele vegane Ersatzprodukte (Wurst, Käse, Burger) sind hochverarbeitet mit Zusatzstoffen',
      'Langzeit-Veganer berichten häufiger von: Müdigkeit, Haarausfall, Konzentrationsproblemen, depressiven Verstimmungen, Zyklusunregelmäßigkeiten'
    ],
    besonders_bei: ['ethische-motivation', 'kurzfristige-reinigung', 'uebergang-von-standard-ernaehrung'],
    typische_lebensmittel: [
      'Gemüse aller Art', 'Obst', 'Nüsse und Samen', 'Avocado', 'Kokosprodukte',
      'Hülsenfrüchte (Linsen, Bohnen, Kichererbsen)', 'Vollkorngetreide',
      'Tofu, Tempeh', 'Hefe-Flocken (B-Vitamine)', 'Algen (Jod, Omega-3)',
      'Sprossen und Keimlinge', 'Kaltgepresste Öle', 'Pilze'
    ],
    meiden: [
      'Alle tierischen Produkte',
      'Ideal auch: Hochverarbeitete vegane Ersatzprodukte',
      'Industrielle Pflanzenöle',
      'Zucker und Weissmehl'
    ],
    wissenschaft:
      'Die Studienlage ist differenziert: Die EPIC-Oxford-Studie zeigte, dass Veganer zwar niedrigere Raten an Herzerkrankungen haben, aber ein erhöhtes Risiko für Knochenbrüche (30% mehr Hüftfrakturen) und Schlaganfälle (20% mehr). Die deutsche Vegane Studie zeigte bei 40% der Veganer B12-Mangel trotz Supplementierung. Meta-Analysen zeigen konsistent: Veganer haben niedrigere B12-, Eisen-, Zink-, Omega-3- und Calcium-Spiegel. Die China Study (die oft als Beweis für vegane Ernährung zitiert wird) hat erhebliche methodische Schwächen und wurde von mehreren Statistikern kritisiert (Denise Minger, Chris Masterjohn). Fazit: Vegane Ernährung kann funktionieren -- aber sie erfordert Wissen, Supplementierung und regelmäßige Blutkontrolle. Ohne dies ist sie riskant.',
    tags: ['#vegan', '#pflanzlich', '#ethik', '#tierschutz', '#supplementierung', '#B12']
  },

  {
    id: 'rohkost',
    name: 'Rohkost',
    beschreibung:
      'Rohkost (Raw Food) bedeutet: Keine Nahrung wird über 42 Grad Celsius erhitzt. Alles wird roh, getrocknet (unter 42 Grad), fermentiert, gekeimt oder eingeweicht gegessen. Der Grundgedanke: Erhitzen zerstört Enzyme, Vitamine und die "Lebenskraft" (Biophotonen) der Nahrung. Rohe Nahrung ist lebendige Nahrung -- sie trägt noch die volle Sonnenlichtenergie in sich. Rohkost-Pioniere wie Ann Wigmore, David Wolfe und Markus Rothkranz betonen die heilende und verjüngende Kraft ungekochter Nahrung.',
    prinzip:
      'Nur Nahrung, die nicht über 42 Grad erhitzt wurde -- roh, lebendig, enzymreich. Die Enzyme in roher Nahrung unterstützen die Verdauung und reduzieren die Belastung der körpereigenen Enzymproduktion. Biophotonen (Lichtquanten in lebendigen Zellen) werden als feinstoffliche Nahrung betrachtet.',
    vorteile: [
      'Höchster Enzymgehalt aller Ernährungsformen -- Enzyme sind Katalysatoren für alle Lebensprozesse',
      'Höchster Vitamingehalt (kein Verlust durch Kochen)',
      'Biophotonen-reiche Nahrung (nach Prof. Fritz-Albert Popp strahlen lebendige Zellen Licht aus)',
      'Hoher Wassergehalt -- natürliche Hydrierung',
      'Ballaststoffreich -- fördert Darmgesundheit',
      'Viele Menschen berichten von strahlender Haut, klaren Augen und hoher Energie',
      'Entgiftend und reinigend -- besonders in der Umstellungsphase',
      'Chlorophyll aus grüner Rohkost entgiftet und alkalisiert'
    ],
    herausforderungen: [
      'Manche Nährstoffe werden durch Kochen besser verfügbar (Lycopin aus Tomaten, Beta-Carotin aus Karotten)',
      'Bei rein veganer Rohkost: Gleiche Nährstoffmängel wie bei veganer Ernährung (B12, Eisen, Omega-3, Zink)',
      'Kann für manche Verdauungssysteme zu viel Rohfaser sein -- Blähungen, Unverträglichkeit (besonders bei schwachem Verdauungsfeuer)',
      'Im Winter und in kalten Klimazonen: Kann auskühlend wirken -- der Körper braucht auch Wärme',
      'Sozial herausfordernd',
      'Erfordert viel Vorbereitung (Einweichen, Keimen, Dörrgerät)',
      'Gewichtsverlust kann zu stark ausfallen'
    ],
    besonders_bei: ['entgiftung', 'hautprobleme', 'vitalitaet', 'anti-aging', 'uebersaeuerung', 'enzyme-mangel'],
    typische_lebensmittel: [
      'Grünes Blattgemüse', 'Sprossen und Keimlinge', 'Früchte', 'Nüsse (eingeweicht)',
      'Samen (aktiviert)', 'Avocado', 'Kaltgepresste Öle', 'Algen (Nori, Dulse)',
      'Fermentiertes (Sauerkraut, Kimchi)', 'Getrocknet unter 42 Grad (Dörrgerät)',
      'Smoothies und grüne Säfte', 'Rohkost-Schokolade (Kakao)', 'Superfoods (Maca, Spirulina, Goji)'
    ],
    meiden: [
      'Alles über 42 Grad Erhitzte',
      'Verarbeitete Lebensmittel',
      'Gekochtes Getreide (in der strengen Form)',
      'Industrielle Produkte'
    ],
    wissenschaft:
      'Die Forschung zu Enzymen in der Nahrung ist umstritten -- klassische Ernährungswissenschaft sagt, Magenssäure zerstöre die meisten Nahrungsenzyme. Rohkost-Befürworter verweisen auf Dr. Edward Howell (Enzyme Nutrition) und die Beobachtung, dass traditionelle Völker, die viel Rohes assen (Inuit, Hunza), sehr gesund waren. Biophotonen-Forschung (Fritz-Albert Popp) zeigt, dass lebendige Nahrung tatsächlich messbar mehr Licht abstrahlt als gekochte. Praxiserfahrung: Viele Menschen blühen bei Rohkost auf (besonders in warmen Klimazonen), andere gedeihen besser mit einem Anteil gekochter Nahrung.',
    tags: ['#rohkost', '#rawfood', '#enzyme', '#biophotonen', '#lebendigennahrung', '#grün']
  },

  {
    id: 'basisch',
    name: 'Basische Ernährung',
    beschreibung:
      'Die basische Ernährung zielt darauf ab, den Säure-Basen-Haushalt des Körpers zu unterstützen, indem vorwiegend basisch wirkende Lebensmittel gegessen werden. Die Idee: Unsere moderne Ernährung (Fleisch, Milch, Getreide, Zucker, Kaffee, Alkohol) erzeugt bei der Verstoffwechslung Säure, die der Körper neutralisieren muss -- er verbraucht dafür Mineralien (Calcium, Magnesium, Kalium). Chronische Übersäuerung führt zu Mineralstoffverlusten, Entzündungen, Gelenkverschleiß und Müdigkeit. Die basische Ernährung flutet den Körper mit Mineralien und entlastet die Puffersysteme.',
    prinzip:
      '80% basisch wirkende Lebensmittel (Gemüse, Obst, Kartoffeln, Mandeln, Sprossen), 20% säurebildende (Fleisch, Fisch, Getreide, Hülsenfrüchte). Die PRAL-Tabelle (Potential Renal Acid Load) hilft bei der Einordnung. Wichtig: Es geht nicht um den Geschmack (Zitrone schmeckt sauer, wirkt aber basisch), sondern um die Wirkung nach der Verstoffwechselung.',
    vorteile: [
      'Mineralstoffreiche Ernährung -- viel Kalium, Magnesium, Calcium aus Gemüse',
      'Entsäuerung von Gewebe und Gelenken',
      'Weniger Entzündungen',
      'Besserer Schlaf und mehr Energie',
      'Klarere Haut',
      'Unterstützung der Knochengesundheit (weniger Calciumverlust)',
      'Nierenschutz (weniger Säurelast)',
      'Gut kombinierbar mit anderen Ernährungsformen'
    ],
    herausforderungen: [
      'Streng basische Ernährung kann proteinarm sein -- längerfristig Muskelmasse beachten',
      'Nicht alle "säurebildenden" Lebensmittel sind schlecht (Fisch, Eier sind nährstoffreich)',
      'Der Körper hat eigene, sehr effektive Puffersysteme -- ob zusätzliche "Entsäuerung" nötig ist, wird diskutiert',
      'Im Winter: Wenig wärmendes Essen, wenn nur roh und basisch'
    ],
    besonders_bei: ['uebersaeuerung', 'arthrose', 'gicht', 'osteoporose', 'sodbrennen', 'hautprobleme', 'muedigkeit', 'rheuma'],
    typische_lebensmittel: [
      'Gemüse aller Art (besonders: Gurke, Sellerie, Spinat, Brokkoli, Grünkohl)',
      'Kartoffeln', 'Obst (besonders Zitronen, Avocado, Wassermelone)',
      'Mandeln', 'Sprossen', 'Keimlinge', 'Kaltgepresste Öle',
      'Kräutertees (Brennnessel, Löwenzahn)', 'Kürbiskerne'
    ],
    meiden: [
      'Zucker und Süßigkeiten', 'Weissmehl', 'Kaffee (oder stark reduzieren)',
      'Alkohol', 'Softdrinks', 'Konventionelles Fleisch in großen Mengen',
      'Milchprodukte (bis auf Ziegen-/Schafmilch in Massen)', 'Fast Food'
    ],
    wissenschaft:
      'Die klassische Medizin hält den Körper für fähig, seinen pH-Wert selbst zu regulieren (was stimmt -- Blut-pH ist eng reguliert). Die Frage ist: Zu welchem Preis? Naturheilkundler argumentieren, dass chronische Säurebelastung die Puffersysteme erschöpft und Mineralreserven angreift (besonders aus Knochen und Zähnen). Studien zeigen: Obst- und gemüseseiche Ernährung korreliert mit besserer Knochendichte, weniger Muskelabbau im Alter und besserer Nierenfunktion. Der genaue Mechanismus (ob "Entsäuerung" oder einfach "mehr Gemüse") wird diskutiert.',
    tags: ['#basisch', '#säure-basen', '#entsäuerung', '#mineralien', '#gemüse']
  },

  {
    id: 'pflanzlich-vollwertig',
    name: 'Pflanzlich-vollwertige Ernährung',
    beschreibung:
      'Die pflanzlich-vollwertige Ernährung (Whole Food Plant-Based, WFPB) betont unverarbeitete, pflanzliche Vollwertkost -- viel Gemüse, Obst, Vollkorngetreide, Hülsenfrüchte, Nüsse und Samen, aber ohne den dogmatischen Ausschluss aller tierischen Produkte. Es ist der "Mittelweg" zwischen veganer und omnivorer Ernährung: Pflanzen als Basis, kleine Mengen hochwertiger tierischer Produkte optional. Begründet durch T. Colin Campbell, Dean Ornish und Caldwell Esselstyn.',
    prinzip:
      'Ganze, unverarbeitete Pflanzen als Grundlage der Ernährung. Verarbeitete Lebensmittel, Zucker, Weissmehl und industrielle Öle werden gemieden. Tierische Produkte sind nicht verboten, aber nicht die Basis.',
    vorteile: [
      'Hoher Ballaststoffgehalt nährt die Darmflora',
      'Vielfalt an sekundären Pflanzenstoffen',
      'Flexibler als streng vegan -- weniger Mängelrisiko',
      'Gut erforscht bei Herz-Kreislauf-Erkrankungen (Ornish, Esselstyn)',
      'Nachhaltig und umsetzbar',
      'Kein Dogma -- erlaubt individuelle Anpassung'
    ],
    herausforderungen: [
      'Vollkorngetreide und Hülsenfrüchte enthalten Antinährstoffe (Lektine, Phytinsäure) -- richtige Zubereitung wichtig (Einweichen, Keimen, Kochen)',
      'Kann kohlenhydratlastig sein -- für Menschen mit Insulinresistenz nicht ideal',
      'Qualität der tierischen Produkte entscheidend, wenn ergänzt'
    ],
    besonders_bei: ['herz-kreislauf', 'uebergewicht', 'darmgesundheit', 'praevention', 'nachhaltigkeit'],
    typische_lebensmittel: [
      'Gemüse', 'Obst', 'Vollkorngetreide (Hafer, Quinoa, Hirse, Brauner Reis)',
      'Hülsenfrüchte', 'Nüsse und Samen', 'Avocado',
      'Kaltgepresste Öle', 'Optional: Eier, Fisch, fermentierte Milchprodukte'
    ],
    meiden: [
      'Verarbeitete Lebensmittel', 'Zucker', 'Weissmehl',
      'Industrielle Öle', 'Fast Food', 'Fertiggerichte'
    ],
    wissenschaft:
      'Das Ornish-Programm (pflanzlich-vollwertig + Bewegung + Meditation + Gemeinschaft) ist das einzige Lebensstil-Programm, das von der US-Krankenversicherung Medicare erstattet wird -- es hat in Studien Herzerkrankungen nachweislich rückgängig gemacht. Esselstyn zeigte änliche Ergebnisse. Die Blue Zones (Regionen mit den meisten Hundertjährigen) essen überwiegend pflanzlich-vollwertig mit kleinen Mengen tierischer Produkte.',
    tags: ['#pflanzlich', '#vollwertig', '#WFPB', '#ganzheitlich', '#herzgesund', '#bluezones']
  },

  {
    id: 'ayurvedisch',
    name: 'Ayurvedische Ernährung',
    beschreibung:
      'Die ayurvedische Ernährung ist eines der ältesten Ernährungssysteme der Welt -- über 5000 Jahre alt. Im Zentrum steht die individuelle Konstitution (Prakriti), die aus drei Doshas besteht: Vata (Luft/Äther -- leicht, trocken, kalt, beweglich), Pitta (Feuer/Wasser -- heiß, scharf, intensiv) und Kapha (Erde/Wasser -- schwer, feucht, stabil). Jeder Mensch hat eine einzigartige Dosha-Kombination, und die Ernährung wird darauf abgestimmt. Die sechs Geschmäcke (Rasas) -- süß, sauer, salzig, scharf, bitter, herb -- spielen eine zentrale Rolle.',
    prinzip:
      'Essen nach individueller Konstitution (Dosha). Vata-Typen brauchen warme, nährende, ölige Kost. Pitta-Typen brauchen kühlende, milde Kost. Kapha-Typen brauchen leichte, wärmende, trockene Kost. Alle sechs Geschmäcke in jeder Mahlzeit ausbalancieren. Frisch und warm essen. Agni (Verdauungsfeuer) stärken.',
    vorteile: [
      'Hochindividuell -- keine Einheits-Diät, sondern auf den einzelnen Menschen zugeschnitten',
      'Berücksichtigt Jahreszeiten, Tageszeiten und Lebensphase',
      'Gewürze als Medizin (Kurkuma, Ingwer, Kreuzkümmel, Koriander)',
      'Ganzheitlich: Ernährung, Lebensrhythmus, Emotionen und Spiritualität werden zusammen betrachtet',
      'Jahrtausende Erfahrungswissen',
      'Fördert Verdauungskraft und Nährstoffaufnahme',
      'Prävention durch Gleichgewicht'
    ],
    herausforderungen: [
      'Erfordert Wissen über die eigene Konstitution (am besten mit Ayurveda-Arzt)',
      'In westlichen Ländern: Nicht alle empfohlenen Lebensmittel leicht erhältlich',
      'Kann komplex wirken für Anfänger',
      'Rohkost wird für viele Typen (besonders Vata) nicht empfohlen -- widerspricht manchmal Rohkost-Trends'
    ],
    besonders_bei: ['verdauungsstoerungen', 'dosha-ungleichgewicht', 'chronische-krankheiten', 'individuelle-ernaehrung', 'praevention'],
    typische_lebensmittel: [
      'Ghee (geklärte Butter -- das "flüssige Gold" des Ayurveda)',
      'Kitchari (Reis-Mungbohnen-Gericht)', 'Gewürze (Kurkuma, Ingwer, Kreuzkümmel, Kardamom, Zimt)',
      'Basmatireis', 'Mungbohnen', 'Gemüse (je nach Dosha)', 'Warme Milch (mit Gewürzen)',
      'Honig (nie erhitzen!)', 'Sesamöl', 'Triphala (Kräutermischung)'
    ],
    meiden: [
      'Kalte, rohe Nahrung abends (besonders Vata)',
      'Unverträgliche Kombinationen (Milch + Fisch, Milch + Früchte)',
      'Essen ohne Hunger (Agni muss bereit sein)',
      'Reste und aufgewärmtes Essen (verliert Prana/Lebenskraft)',
      'Eiskalte Getränke (löschen das Verdauungsfeuer)'
    ],
    wissenschaft:
      'Ayurveda ist eine der wenigen traditionellen Medizinsysteme, die von der WHO als traditionelle Medizin anerkannt sind. Moderne Forschung bestätigt viele ayurvedische Prinzipien: Kurkuma (Curcumin) ist einer der am besten erforschten pflanzlichen Entzündungshemmer. Ingwer wirkt nachweislich gegen Übelkeit und Entzündung. Triphala zeigt in Studien antimikrobielle und antioxidative Wirkung. Die Dosha-Typen lassen sich teilweise mit modernen Konstitutionstypen und Stoffwechseltypen korrelieren.',
    tags: ['#ayurveda', '#dosha', '#vata', '#pitta', '#kapha', '#gewürze', '#agni', '#individuell']
  },

  {
    id: 'tcm-ernaehrung',
    name: 'TCM-Ernährung (Traditionelle Chinesische Medizin)',
    beschreibung:
      'Die Ernährung nach der Traditionellen Chinesischen Medizin (TCM) betrachtet Nahrung als Medizin. Jedes Lebensmittel hat eine thermische Wirkung (heiß, warm, neutral, kühlend, kalt) und gehört einem der Fünf Elemente an (Holz, Feuer, Erde, Metall, Wasser). Die Ernährung wird auf die individuelle Konstitution und aktuelle Disharmonie abgestimmt. Zentrales Konzept: Die "Mitte" (Milz-Magen-System) ist die Wurzel der Gesundheit -- sie transformiert Nahrung in Qi (Lebensenergie) und Blut. Warme, gekochte, leicht verdauliche Nahrung stärkt die Mitte.',
    prinzip:
      'Nahrung nach ihrer thermischen Wirkung und Elementzugehörigkeit wählen, um die individuelle Konstitution auszugleichen. Warmes, Gekochtes bevorzugen. Die Mitte stärken. Fünf Geschmäcke (sauer, bitter, süß, scharf, salzig) ausbalancieren -- jeder Geschmack nährt ein Organ-System.',
    vorteile: [
      'Hochindividuell -- betrachtet den aktuellen Zustand des Menschen',
      'Thermische Wirkung von Nahrungsmitteln: Geniales Konzept, das Küche und Medizin verbindet',
      'Fördert warme, gekochte Nahrung -- schont die Verdauung',
      'Fünf-Elemente-Ernährung sorgt für natürliche Ausgewogenheit',
      'Jahrtausende Erfahrung',
      'Nahrungsmitteltherapie statt Supplementierung',
      'Saisonale und klimatische Anpassung'
    ],
    herausforderungen: [
      'Erfordert TCM-Diagnostik (Zungen-, Pulsdiagnose) für optimale Anpassung',
      'Manche Konzepte (Qi, Feuchtigkeit, Stagnation) sind für westliche Denkweise ungewohnt',
      'Kann einschränkend wirken, wenn zu streng befolgt'
    ],
    besonders_bei: ['verdauungsschwaeche', 'muedigkeit', 'kaelteempfindlichkeit', 'wassereinlagerung', 'menstruationsbeschwerden', 'chronische-krankheiten'],
    typische_lebensmittel: [
      'Reis (neutral, stärkt die Mitte)', 'Congee (Reisbrei -- TCM-Superfood)',
      'Warme Suppen und Eintöpfe', 'Ingwer (warm)', 'Datteln (warm, blutnährend)',
      'Huhn (warm)', 'Lamm (heiß)', 'Goji-Beeren (warm, blutnährend)',
      'Walnüsse (warm, nierenstärkend)', 'Sesam (neutral, blutnährend)',
      'Susskartoffel (warm, milzstärkend)', 'Kastanien (warm, nierenstärkend)'
    ],
    meiden: [
      'Kalte und rohe Nahrung in Übermas (schwächen die Milz)',
      'Eiskalte Getränke',
      'Zu viel Milchprodukte (erzeugen "Feuchtigkeit")',
      'Zu viel Süßes (schwächen die Milz)',
      'Mikrowelle (zerstört Qi der Nahrung laut TCM)'
    ],
    wissenschaft:
      'Die TCM-Ernährung ist schwer mit westlichen Studiendesigns zu erfassen, da sie hochindividuell ist. Einzelne Aspekte werden jedoch bestätigt: Warme Nahrung ist leichter verdaulich als kalte (Enzymoptimum liegt bei Körpertemperatur). Ingwer, Kurkuma, Goji und viele TCM-Nahrungsmittel haben in Studien entzündungshemmende und antioxidative Wirkungen gezeigt. Das Konzept der "Mitte-Stärkung" findet Parallelen in der modernen Darmforschung.',
    tags: ['#tcm', '#chinesische-medizin', '#fünf-elemente', '#thermik', '#qi', '#mitte', '#warm']
  },

  {
    id: 'paleo',
    name: 'Paleo / Steinzeit-Ernährung',
    beschreibung:
      'Die Paleo-Ernährung orientiert sich an dem, was unsere Vorfahren in der Steinzeit (Paläolithikum) vermutlich gegessen haben: Fleisch, Fisch, Gemüse, Obst, Nüsse, Samen und Eier. Alles, was erst mit der Landwirtschaft kam (Getreide, Hülsenfrüchte, Milchprodukte, Zucker), wird gemieden. Die Argumentation: Unser Genom hat sich in den letzten 10.000 Jahren kaum verändert -- wir sind genetisch immer noch Jäger und Sammler, aber wir essen wie Industriemenschen. Diese Diskrepanz führt zu den "Zivilisationskrankheiten".',
    prinzip:
      'Essen wie unsere paläolithischen Vorfahren: Fleisch (Weidehaltung), Fisch (Wildfang), Gemüse, Obst, Nüsse, Samen, Eier. Kein Getreide, keine Milch, kein Zucker, keine Hülsenfrüchte, keine verarbeiteten Lebensmittel.',
    vorteile: [
      'Eliminiert die Hauptproblem-Lebensmittel der modernen Ernährung (Zucker, Weissmehl, verarbeitete Öle)',
      'Nährstoffdicht: Fleisch, Organfleisch, Fisch und Gemüse liefern alles, was der Körper braucht',
      'Keine Antinährstoffe aus Getreide und Hülsenfrüchten (Lektine, Phytinsäure)',
      'Gut für Autoimmun-Erkrankungen (AIP -- Autoimmun-Paleo-Protokoll)',
      'Stabile Blutzuckerwerte',
      'Gute Sättigung',
      'Evolutionär plausibel'
    ],
    herausforderungen: [
      'Teuer (Fleisch aus Weidehaltung, Bio-Gemüse)',
      'Getreide-Verzicht ist sozial herausfordernd (kein Brot, keine Pasta)',
      'Milchverzicht -- für Menschen, die Milch gut vertragen, nicht zwingend nötig',
      'Manche historische Völker assen durchaus stärkehaltige Knollen und fermentiertes Getreide',
      '"Clean Paleo" erfordert Kochaufwand'
    ],
    besonders_bei: ['autoimmun', 'nahrungsmittelunvertraeglichkeiten', 'entzuendung', 'uebergewicht', 'diabetes-typ2', 'verdauungsprobleme', 'hautprobleme'],
    typische_lebensmittel: [
      'Fleisch (Weide, Wildfleisch)', 'Fisch (Wildfang)', 'Eier (Freiland)',
      'Organfleisch (Leber, Herz, Knochenmark)', 'Gemüse aller Art',
      'Obst (maßvoll)', 'Nüsse (außer Erdnüsse -- sind Hülsenfrüchte)',
      'Samen', 'Avocado', 'Kokosöl', 'Olivenöl', 'Susskartoffeln',
      'Knochenbrühe', 'Kräuter und Gewürze'
    ],
    meiden: [
      'Getreide (Weizen, Reis, Mais, Hafer, Roggen)',
      'Hülsenfrüchte (Bohnen, Linsen, Erdnüsse, Soja)',
      'Milchprodukte (manche Paleo-Varianten erlauben Ghee und Butter)',
      'Zucker', 'Verarbeitete Lebensmittel', 'Industrielle Pflanzenöle',
      'Alkohol (außer gelegentlich trockener Wein)'
    ],
    wissenschaft:
      'Mehrere randomisierte Studien zeigen: Paleo-Ernährung verbessert Insulinsensitivität, Blutfette und Körperkomposition besser als konventionelle Ernährungsempfehlungen (z.B. Lindeberg-Studie, Jönsson et al.). Das Autoimmun-Paleo-Protokoll (AIP) zeigt in Pilotstudien vielversprechende Ergebnisse bei Morbus Crohn und Hashimoto. Kritiker wenden ein, dass wir nicht genau wissen, was Steinzeitmenschen assen, und dass Anpassungen an Milch und Stärke in manchen Populationen stattgefunden haben.',
    tags: ['#paleo', '#steinzeit', '#evolutionär', '#getreidefrei', '#AIP', '#autoimmun', '#ancestral']
  },

  {
    id: 'carnivore',
    name: 'Carnivore Ernährung',
    beschreibung:
      'Die Carnivore-Ernährung (Fleischbasierte Ernährung) besteht ausschließlich oder hauptsächlich aus tierischen Produkten: Fleisch, Fisch, Eier, Organfleisch, Knochenbrühe, tierische Fette. Kein Gemüse, kein Obst, kein Getreide. Was auf den ersten Blick extrem klingt, hat eine wachsende Anhängerschaft -- vor allem unter Menschen mit Autoimmunerkrankungen, chronischen Verdauungsproblemen und Entzündungen, die auf pflanzliche Nahrung reagieren. Die Idee: Pflanzen produzieren Abwehrstoffe (Lektine, Oxalate, Phytinsäure, Saponine), die für empfindliche Menschen problematisch sein können. Fleisch enthalt keine dieser Antinährstoffe.',
    prinzip:
      'Nur tierische Produkte. Die nährstoffdichtesten Lebensmittel auf dem Planeten sind tierischen Ursprungs: Leber, Eier, Knochenmark, fetter Fisch. Das Eliminieren aller pflanzlichen Nahrung kann für manche Menschen die letzte Stufe der Eliminationsdiät sein -- wenn alles andere nicht geholfen hat.',
    vorteile: [
      'Höchste Nährstoffdichte (besonders Organfleisch)',
      'Null Antinährstoffe -- für empfindliche Menschen eine Offenbarung',
      'Starke Entzündungshemmung bei Autoimmunerkrankungen',
      'Exzellente Proteinversorgung',
      'Extreme Sättigung -- kein Hunger, kein Heißhunger',
      'Tiefe Ketose möglich',
      'Einfach: Keine komplizierten Rezepte nötig',
      'Viele Erfahrungsberichte von Heilung schwerer Erkrankungen (Mikhaila Peterson, Dr. Shawn Baker, Dr. Paul Saladino)'
    ],
    herausforderungen: [
      'Sozial sehr herausfordernd',
      'Fehlen von Ballaststoffen -- Darmflora verändert sich (kann positiv oder negativ sein)',
      'Fehlen von sekundären Pflanzenstoffen (deren Bedeutung wird diskutiert)',
      'Qualität des Fleisches entscheidend -- Massentierhaltung ist nicht Carnivore',
      'Langzeitstudien fehlen',
      'Nicht für jeden: Manche Menschen brauchen pflanzliche Nahrung',
      'Ethische Bedenken beim Fleischkonsum -- muss jeder für sich entscheiden',
      'Vitamin C: In frischem Fleisch und Organen enthalten, aber weniger als in Obst'
    ],
    besonders_bei: ['autoimmun', 'crohn', 'colitis', 'reizdarm', 'schwere-allergien', 'histaminintoleranz', 'depression', 'gelenkschmerzen', 'hauterkrankungen'],
    typische_lebensmittel: [
      'Rindfleisch (Weidehaltung)', 'Lamm', 'Schwein', 'Wild',
      'Organfleisch (Leber, Herz, Niere, Knochenmark, Hirn)',
      'Fetter Fisch (Lachs, Sardinen)', 'Eier', 'Butter / Ghee',
      'Knochenbrühe', 'Talg', 'Schmalz', 'Meeresfrüchte'
    ],
    meiden: [
      'Alle pflanzlichen Lebensmittel (strenge Form)',
      'Manche integrieren geringe Mengen Honig oder fermentierte Milch (Animal-Based)',
      'Verarbeitetes Fleisch (Wurst mit Zusätzen)',
      'Industrielle Öle'
    ],
    wissenschaft:
      'Formal gibt es wenige Studien zur reinen Carnivore-Ernährung. Die größte Umfrage (Harvard, Dr. Belinda Lennerz, 2021) mit über 2000 Teilnehmern zeigte: 93% berichteten verbesserte Gesundheit, 95% verbesserte Körperkomposition, Entzündungsmarker sanken, Diabetes-Medikamente wurden reduziert. Historisch: Viele indigene Völker ernährten sich überwiegend tierisch (Inuit, Massai, Plains-Indianer) und waren bemerkenswert gesund (beobachtet von Weston A. Price). Die Befürchtung, reines Fleisch verursache Skorbut, ist falsch -- frisches Fleisch und besonders Organe enthalten genug Vitamin C, wenn keine Kohlenhydrate konkurrieren (Vitamin C und Glukose nutzen denselben Transporter).',
    tags: ['#carnivore', '#fleischbasiert', '#animal-based', '#autoimmun', '#elimination', '#antinährstoffe', '#nährstoffdicht']
  },

  {
    id: 'mediterran',
    name: 'Mediterrane Ernährung',
    beschreibung:
      'Die mediterrane Ernährung orientiert sich an der traditionellen Kost der Mittelmeerländer (Griechenland, Süditalien, Spanien). Sie gilt als eine der am besten erforschten Ernährungsformen und wird von vielen Gesundheitsorganisationen empfohlen. Kennzeichen: Viel Gemüse, Obst, Olivenöl, Fisch, moderate Mengen Wein, wenig rotes Fleisch. Die PREDIMED-Studie zeigte eine 30%ige Reduktion von Herz-Kreislauf-Ereignissen.',
    prinzip:
      'Pflanzliche Kost als Basis, ergänzt durch Fisch, Olivenöl als Hauptfettquelle, moderate Mengen Milchprodukte (Ziege, Schaf), wenig rotes Fleisch, mäßig Wein, gemeinsames Essen als soziales Ritual.',
    vorteile: [
      'Eine der am besten erforschten Ernährungsformen mit konsistent positiven Ergebnissen',
      'Herzschützend: Olivenöl liefert Öolsäure und Polyphenole',
      'Fisch liefert Omega-3-Fettsäuren (EPA/DHA)',
      'Vielfältig und genussvoll -- kein Verzichtsgefühl',
      'Soziale Komponente: Gemeinsames Essen ist Teil der Kultur',
      'Anti-entzündlich',
      'Gut für das Gehirn (MIND-Diät als Abwandlung)',
      'Langlebigkeit: Mittelmeerregionen gehören zu den Blue Zones'
    ],
    herausforderungen: [
      'Olivenöl-Qualität: Viele "Olivenöle" im Handel sind gepanscht -- nur echtes extra vergine verwenden',
      'Wein ist nicht für jeden gesund (Alkohol ist ein Zellgift)',
      'Getreide (Brot, Pasta) ist Teil der Tradition -- für glutenempfindliche Menschen problematisch',
      'Kann kohlenhydratreich sein'
    ],
    besonders_bei: ['herz-kreislauf', 'bluthochdruck', 'praevention', 'gehirngesundheit', 'langlebigkeit', 'depression', 'diabetes-typ2'],
    typische_lebensmittel: [
      'Olivenöl (extra vergine, kaltgepresst)', 'Gemüse (Tomaten, Paprika, Auberginen, Zucchini)',
      'Fisch und Meeresfrüchte', 'Nüsse (Walnüsse, Mandeln)', 'Obst',
      'Krauter (Oregano, Rosmarin, Basilikum, Thymian)', 'Hülsenfrüchte',
      'Vollkorngetreide', 'Ziegen-/Schafkäse (Feta)', 'Oliven',
      'Rotwein (maßvoll)', 'Knoblauch', 'Zwiebeln'
    ],
    meiden: [
      'Verarbeitete Lebensmittel', 'Zucker', 'Industrielle Öle',
      'Fast Food', 'Rotes Fleisch in großen Mengen',
      'Butter (durch Olivenöl ersetzt)'
    ],
    wissenschaft:
      'Die PREDIMED-Studie (über 7000 Teilnehmer, 5 Jahre) zeigte: Mediterrane Ernährung mit Olivenöl oder Nüssen reduzierte Herzinfarkte, Schlaganfälle und kardiovaskuläre Todesfälle um 30%. Die MIND-Studie zeigte: Eine Kombination aus mediterraner und DASH-Ernährung reduzierte das Alzheimer-Risiko um 53%. Meta-Analysen bestätigen konsistent: Niedrigeres Risiko für Herzerkrankungen, Diabetes, Krebs und Gesamtsterblichkeit. Die mediterrane Ernährung ist der Goldstandard der Ernährungsmedizin.',
    tags: ['#mediterran', '#mittelmeer', '#olivenöl', '#herzgesund', '#predimed', '#bluezones', '#langlebigkeit']
  },
];


// ============================================================================
// ERNÄHRUNGSVERGLEICHE
// ============================================================================

export const NUTRITION_COMPARISONS = [

  {
    id: 'keto-vs-vegan',
    title: 'Ketogen vs. Vegan -- eine ehrliche Gegenüberstellung',
    text:
      'Ketogen und Vegan sind fast gegensätzliche Ernährungsphilosophien -- und doch haben beide ihre Berechtigung, wenn auch aus sehr unterschiedlichen Gründen.\n\n' +
      'Die ketogene Ernährung ist primär gesundheitlich motiviert. Sie fragt: Was braucht mein Körper, um optimal zu funktionieren? Die Antwort, stützt auf Biochemie und klinische Forschung: Stabile Energie aus Fett, minimale Blutzuckerschwankungen, tiefe Entzündungshemmung durch Ketonkörper, und Schutz der Nervenzellen. Keto liefert alle essentiellen Nährstoffe ohne Supplementierung -- besonders wenn Organfleisch, Eier und fetter Fisch Teil des Speiseplans sind. Die Studienlage bei Diabetes Typ 2, Epilepsie, neurodegenerativen Erkrankungen und metabolischem Syndrom ist stark.\n\n' +
      'Die vegane Ernährung ist primär ethisch motiviert. Sie fragt: Wie kann ich leben, ohne anderen Lebewesen zu schaden? Das ist eine Frage, die Respekt verdient -- sie kommt aus dem Herzen. Gesundheitlich ist die Lage jedoch komplexer: Mehrere essentielle Nährstoffe (B12, langkettige Omega-3, Häm-Eisen, Retinol, Zink, Kreatin, Carnosin, Taurin) kommen in verwertbarer Form hauptsächlich oder ausschließlich in tierischen Produkten vor. Vegane Ernährung erfordert daher Supplementierung und regelmäßige Blutkontrolle.\n\n' +
      'Ein häufiges Missverständnis: Vegan wird oft mit "gesund" gleichgesetzt. In der Praxis ernähren sich viele Veganer hauptsächlich von Getreide, Hülsenfrüchten und verarbeiteten Ersatzprodukten -- das ist weder nährstoffreich noch entzündungshemmend. Umgekehrt wird Keto manchmal mit "Speck und Butter" gleichgesetzt -- echtes Keto beinhaltet viel Gemüse, hochwertige Fette und nährstoffdichte tierische Produkte.\n\n' +
      'Ein konkreter Vergleich: Entzündungshemmung. Keto hemmt Entzündungen direkt über BHB (hemmt NLRP3-Inflammasomen). Vegan kann Entzündungen senken, wenn viel Gemüse gegessen wird -- aber Hülsenfrüchte (Lektine), industrielle Öle (Omega-6-Überschuss) und Sojaprodukte können Entzündungen fördern. Bei Autoimmunerkrankungen ist die ketogene Ernährung (oder Carnivore als Eliminationsdiät) oft wirksamer als vegan.\n\n' +
      'Nährstoffdichte: 100g Rinderleber enthalten mehr Vitamin A, B12, Eisen, Zink und Kupfer als jedes pflanzliche Lebensmittel. Ein Ei liefert Cholin, DHA, Retinol, B12 und alle essentiellen Aminosäuren. Pflanzliche Quellen können das in dieser Dichte nicht bieten.\n\n' +
      'Gehirngesundheit: Das Gehirn besteht zu 60% aus Fett, braucht DHA (eine Omega-3-Fettsäure, die hauptsächlich aus Fisch kommt) und läuft auf Ketonkörpern effizienter als auf Glukose. Ketogene Ernährung ist hier klar im Vorteil.',
    fazit:
      'Die ketogene Ernährung ist aus gesundheitlicher Perspektive die stärkere Wahl -- sie liefert alle Nährstoffe, hemmt Entzündungen, schützt das Gehirn und erfordert keine Supplementierung. Die vegane Ernährung hat ihre Stärke in der ethischen Dimension. Wer sich vegan ernähren möchte, sollte es bewusst, informiert und mit Supplementierung tun -- und reichlich Gemüse (nicht Getreide) zur Basis machen. Beide Welten können voneinander lernen: Keto kann bewusster bei der Herkunft tierischer Produkte werden (Weidehaltung, Nachhaltigkeit), und Veganer können von der Nährstoff-Wissenschaft der Keto-Bewegung profitieren.'
  },

  {
    id: 'keto-vs-rohkost',
    title: 'Ketogen vs. Rohkost -- zwei Wege, eine Frage',
    text:
      'Ketogen und Rohkost teilen eine gemeinsame Abneigung: Verarbeitete Lebensmittel, Zucker und industrielle Öle haben in keiner der beiden Welten einen Platz. Doch in ihrer Herangehensweise könnten sie kaum unterschiedlicher sein.\n\n' +
      'Rohkost sagt: Erhitzen zerstört Enzyme, Vitamine und die Lebenskraft (Biophotonen) der Nahrung. Lass alles roh, lebendig, voller Licht. Die Philosophie ist poetisch und hat eine tiefe Wahrheit: Frische, lebendige Nahrung trägt eine andere Qualität als tote, überkochte, industrielle Kost.\n\n' +
      'Keto sagt: Es kommt auf die Makronährstoffe an -- wenig Kohlenhydrate, viel Fett, damit der Körper in Ketose kommt und Ketonkörper produziert. Ob das Essen roh oder gekocht ist, spielt biochemisch eine untergeordnete Rolle -- entscheidend ist der Stoffwechselzustand.\n\n' +
      'Wo sich beide treffen: In der Praxis gibt es eine starke Überschneidung bei Avocado, Nüssen, Samen, kaltgepressten Ölen, Kokosnuss und grünen Blattgemüsen. Eine "Roh-Keto"-Ernährung ist möglich und kombiniert die Stärken beider Ansätze.\n\n' +
      'Wo sie sich unterscheiden: Rohkost ist meist frucht- und kohlenhydratreich (besonders wenn viel Obst gegessen wird) -- das verhindert Ketose. Rohkostler in Ketose zu sein, erfordert bewussten Fokus auf fettreiche Rohkost (Avocado, Kokos, Nüsse, Olivenöl) statt auf Früchte.\n\n' +
      'Enzyme: Rohkostler betonen die Bedeutung lebendiger Enzyme. Die klassische Biochemie sagt: Magensaeure denaturiert die meisten Nahrungsenzyme. Die Wahrheit liegt vermutlich dazwischen -- manche Enzyme überleben die Magenpassage und könnten im Darm wirken. Unabhängig davon: Rohe Nahrung hat höhere Vitamin- und sekundäre Pflanzenstoffgehalte als gekochte.\n\n' +
      'Verdaulichkeit: Manche Nahrungsmittel werden durch Kochen besser verdaulich und nährstoffreicher (Lycopin aus Tomaten, Beta-Carotin aus Karotten, Protein aus Eiern). Rohkost kann für empfindliche Verdauungssysteme belastend sein (besonders im Winter, besonders für Vata-Typen im Ayurveda).\n\n' +
      'Praktisch: Rohkost ist einfacher im Sommer und in warmen Klimazonen. Keto ist jahreszeitenunabhängig und in jedem Restaurant möglich (Fleisch/Fisch mit Gemüse bestellen).',
    fazit:
      'Beide Ansätze haben wertvolle Einsichten. Rohkost erinnert uns daran, dass Nahrung lebendig sein sollte und nicht totgekocht. Keto erinnert uns daran, dass der Stoffwechselzustand (Ketose vs. Glukoseverbrennung) tiefgreifende Auswirkungen auf Gesundheit, Gehirn und Langlebigkeit hat. Eine Kombination -- fettreiche Rohkost-Mahlzeiten als Teil einer ketogenen Ernährung -- kann das Beste beider Welten vereinen: Lebendige Nahrung UND metabolische Effizienz.'
  },

  {
    id: 'keto-vs-mediterran',
    title: 'Ketogen vs. Mediterran -- Wissenschaft trifft Tradition',
    text:
      'Die mediterrane Ernährung ist der Goldstandard der konventionellen Ernährungsmedizin. Die ketogene Ernährung ist der aufsteigende Stern der metabolischen Medizin. Beide haben starke Evidenz -- aber für unterschiedliche Dinge.\n\n' +
      'Gemeinsamkeiten: Beide setzen auf echte, unverarbeitete Lebensmittel. Beide nutzen Olivenöl und fetten Fisch. Beide meiden Zucker und industrielle Öle. Beide verbessern Herz-Kreislauf-Marker.\n\n' +
      'Der Hauptunterschied: Kohlenhydrate. Die mediterrane Ernährung erlaubt Vollkorngetreide, Brot, Pasta und Hülsenfrüchte. Keto eliminiert diese. Für metabolisch gesunde Menschen ist die mediterrane Ernährung hervorragend. Für Menschen mit Insulinresistenz, Diabetes Typ 2 oder metabolischem Syndrom -- und das betrifft heute geschätzt 40-50% der Bevölkerung -- ist Keto die präzisere Intervention.\n\n' +
      'PREDIMED zeigte 30% weniger Herzereignisse. Die VIRTA-Studie zeigte: 54% der Typ-2-Diabetiker konnten mit Keto ihre Medikamente reduzieren oder absetzen. Beide Ergebnisse sind beeindruckend -- aber sie adressieren unterschiedliche Probleme.\n\n' +
      'Gehirngesundheit: Die MIND-Diät (mediterran-basiert) reduziert das Alzheimer-Risiko um 53%. Ketogene Ernährung geht weiter: Ketonkörper liefern direkt Energie an das insulinresistente Alzheimer-Gehirn und fördern BDNF. Bei bestehender Neurodegeneration ist Keto möglicherweise wirksamer.\n\n' +
      'Entzündung: Beide sind entzündungshemmend. Keto hat den zusätzlichen Mechanismus der BHB-vermittelten NLRP3-Hemmung. Mediterran hat die Polyphenole aus Olivenöl, Rotwein und Gemüse.\n\n' +
      'Praktikabilität: Mediterran ist einfacher, gesellschaftsfähiger und erfordert weniger Umstellung. Keto ist therapeutisch stärker, aber erfordert mehr Bewusstsein und Anpassung.',
    fazit:
      'Für metabolisch gesunde Menschen, die präventiv leben möchten, ist die mediterrane Ernährung ein exzellenter Weg. Für Menschen mit Insulinresistenz, Diabetes, Übergewicht, Entzündungen oder neurologischen Erkrankungen bietet die ketogene Ernährung einen präziseren, therapeutischeren Ansatz. Die ideale Ernährung könnte eine Verschmelzung sein: Ketogen in der Makronährstoff-Verteilung, mediterran im Geist -- viel Olivenöl, Fisch, Gemüse, Kräuter und die Freude am gemeinsamen Essen.'
  },

  {
    id: 'keto-vs-ayurveda',
    title: 'Ketogen vs. Ayurveda -- moderne Wissenschaft trifft uralte Weisheit',
    text:
      'Auf den ersten Blick scheinen Keto und Ayurveda aus verschiedenen Universen zu kommen. Keto spricht von Makros, Ketonkörpern und Insulin. Ayurveda spricht von Doshas, Agni und Ama. Doch bei genauerer Betrachtung gibt es überraschende Parallelen.\n\n' +
      'Ghee: Im Ayurveda ist Ghee (geklärte Butter) das "flüssige Gold" -- es gilt als das beste aller Fette, nährt das Nervensystem, stärkt Ojas (Lebenskraft) und fördert die Verdauung. In der ketogenen Ernährung ist Ghee ein Grundnahrungsmittel -- hitzebeständig, reich an Buttersäure (nährt die Darmschleimhaut) und kurzkettige Fettsäuren. Beide Traditionen stimmen überein: Ghee ist ein Superfood.\n\n' +
      'Verdauungsfeuer: Ayurveda betont Agni (Verdauungsfeuer) -- ist es stark, kann der Körper alles verdauen und verwerten. Ist es schwach, entsteht Ama (Schlacken). Keto betont metabolische Flexibilität -- ein ketoangpasster Körper kann effizient zwischen Fett- und Glukoseverbrennung wechseln. Beide beschreiben dasselbe Prinzip in unterschiedlicher Sprache: Ein effizienter Stoffwechsel ist die Basis der Gesundheit.\n\n' +
      'Individualisierung: Ayurveda war schon vor 5000 Jahren individuell -- Vata, Pitta und Kapha brauchen verschiedene Nahrung. Moderne Keto-Forschung erkennt zunehmend: Nicht jeder reagiert gleich auf Ketose. Manche Menschen (möglicherweise Kapha-Typen) gedeihen mit sehr wenig Kohlenhydraten. Andere (möglicherweise Vata-Typen) brauchen gelegentlich wärmende, erdende Kohlenhydrate (zyklische Ketose).\n\n' +
      'Fasten: Sowohl Keto als auch Ayurveda nutzen Fasten als Werkzeug. Ayurveda empfiehlt Langhana (Fasten) zur Ama-Verbrennung -- besonders für Kapha-Typen. Keto nutzt Intervallfasten zur Vertiefung der Ketose und Autophagie. Beides zielt auf das Gleiche: Den Körper von Überfluss befreien.\n\n' +
      'Wo sie sich unterscheiden: Ayurveda empfiehlt warm und gekocht (besonders für Vata). Keto hat keine Präferenz für Temperatur. Ayurveda nutzt Gewürze therapeutisch (Kurkuma, Ingwer, Pippali) -- das kann Keto hervorragend integrieren. Ayurveda warnt vor zu viel Protein (erhöhe Pitta) -- ähnlich wie Keto, das moderat Protein empfiehlt (zu viel Protein wird in Glukose umgewandelt).',
    fazit:
      'Keto und Ayurveda widersprechen sich weniger, als man denkt. Eine "Ayurvedische Ketogene Ernährung" wäre: Ghee als Hauptfettquelle, reichlich Gewürze, Dosha-angepasste Gemüsesorten, moderate Proteinmengen, warme Mahlzeiten, Intervallfasten -- und die tiefe ayurvedische Weisheit, dass Ernährung individuell, saisonal und mit Liebe zubereitet sein sollte. Das Beste beider Welten.'
  },

  {
    id: 'fasten-und-ernaehrung',
    title: 'Fasten und Ernährung -- zwei Seiten einer Medaille',
    text:
      'Fasten und Ernährung sind keine Gegensätze -- sie sind Partner. Was du isst (Ernährungsstil) und wann du nicht isst (Fasten) wirken zusammen auf deine Gesundheit.\n\n' +
      'Die kraftvollste Kombination, die die Forschung derzeit kennt, ist: Ketogene Ernährung + Intervallfasten. Warum? Wenn du bereits in Ketose bist (durch ketogene Ernährung), ist der Übergang ins Fasten nahtlos -- dein Körper verbrennt bereits Fett und produziert Ketonkörper. Es gibt keine Umstellungsphase, keinen Hunger-Crash, keine Energietiefs. Du gleitest vom Essen ins Fasten wie ein Fisch ins Wasser.\n\n' +
      'Umgekehrt: Wenn jemand sich kohlenhydratreich ernährt und dann fastet, erlebt er die ersten 1-3 Tage einen schmerzhaften Entzug (Keto-Grippe während des Fastens) -- der Körper muss erst umschalten von Glukose auf Fett. Das ist der Grund, warum viele Menschen Fasten als quälend erleben und aufgeben.\n\n' +
      'Konkrete Empfehlungen für Kombinationen:\n\n' +
      '1. Ketogen + 16:8 Intervallfasten: Die stärkste Alltagskombination. Morgens Kaffee mit MCT-Öl (optional), mittags und abends ketogen essen. Autophagie, Fettverbrennung und mentale Klarheit -- jeden Tag.\n\n' +
      '2. Ketogen + vierteljährliches 3-Tage-Fasten: Alltagsernährung ketogen, alle 3 Monate ein 72-Stunden-Wasserfasten für tiefen Autophagie-Reset und Stammzellen-Erneuerung. Weil der Körper bereits ketoangpasst ist, ist das 3-Tage-Fasten erstaunlich einfach.\n\n' +
      '3. Basische Ernährung + Buchinger-Heilfasten: Sanftere Kombination. Basisch essen als Alltagsbasis, 1-2 Mal pro Jahr ein 7-14-tägiges Buchinger-Fasten zur Tiefenreinigung.\n\n' +
      '4. Ayurvedische Ernährung + saisonales Fasten: Im Frühling (Kapha-Zeit) strenger fasten, im Herbst (Vata-Zeit) nur sanftes Kitchari-Fasten. Im Einklang mit den Jahreszeiten.\n\n' +
      '5. Mediterran + 5:2 Fasten: Die gesellschaftstauglichste Kombination. 5 Tage mediterran genießen, 2 Tage leicht fasten.',
    fazit:
      'Die beste Ernährung ist die, die DU durchhältst, die DIR guttut und die dich NÄHRT -- körperlich, seelisch und geistig. Fasten ist das Pendant dazu: Es reinigt, was die Ernährung aufgebaut hat. Beides zusammen -- bewusstes Essen und bewusstes Nicht-Essen -- ist der Königsweg zur Gesundheit. Höre auf deinen Körper. Er weiß, was er braucht.'
  },
];
