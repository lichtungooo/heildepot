// ===== HEXENWISSEN -- Altes Kräuterwissen, Rezepte & Alchemie =====
// Traditionelles Heilwissen, weitergegeben von Generation zu Generation.
// Mit Respekt vor dem alten Wissen und den Pflanzen, die uns heilen.

// =====================================================================
// KRÄUTERMISCHUNGEN -- Teemischungen für verschiedene Beschwerden
// =====================================================================

export const KRAEUTERMISCHUNGEN = [
  {
    id: "erkaeltungstee-classic",
    name: "Erkältungstee -- Die Klassische Mischung",
    kategorie: "Teemischungen",
    schwierigkeit: "Einfach",
    zutaten: [
      {
        name: "Holunderblüten",
        menge: "30g",
        wirkung: "schweißtreibend, immunstimulierend",
      },
      {
        name: "Lindenblüten",
        menge: "30g",
        wirkung: "schweißtreibend, beruhigend, schleimlösend",
      },
      {
        name: "Thymian",
        menge: "20g",
        wirkung: "schleimlösend, antibakteriell, krampflösend",
      },
      {
        name: "Mädesüß",
        menge: "20g",
        wirkung: "fiebersenkend, schmerzlindernd (natürliches Aspirin)",
      },
    ],
    zubereitung:
      "1. Alle Kräuter in einer Schüssel gut vermischen. " +
      "2. Pro Tasse 2 gehäufte Teelöffel (ca. 3-4g) der Mischung in ein Teesieb oder einen Teefilter geben. " +
      "3. Mit 250ml kochendem Wasser übergießen. " +
      "4. Zugedeckt 10-12 Minuten ziehen lassen -- das Abdecken ist wichtig, damit die ätherischen Öle nicht verdampfen. " +
      "5. Abseihen und so heiß wie möglich trinken. " +
      "6. Bei Bedarf mit etwas Honig süßen (erst nach dem Abkühlen auf Trinktemperatur, damit die Enzyme im Honig erhalten bleiben). " +
      "7. Danach warm einpacken und schwitzen lassen -- der Körper heilt im Schweiß.",
    anwendung:
      "3-5 Tassen täglich bei den ersten Anzeichen einer Erkältung. Am besten abends vor dem Schlafengehen eine große Tasse trinken, warm zudecken und über Nacht schwitzen. Die Mischung wirkt am stärksten in den ersten 24-48 Stunden einer Erkältung.",
    hintergrund:
      "Diese Mischung ist seit Jahrhunderten in der europäischen Volksmedizin bewährt. Holunder und Linde galten als die 'Schwitzpflanzen' schlechthin -- unsere Ahnen wussten, dass Fieber und Schwitzen die natürliche Abwehrreaktion des Körpers sind. Mädesüß enthält natürliche Salicylate, den Vorläufer von Aspirin.",
    besonders_bei: ["erkaeltung", "grippe", "husten", "fieber", "schnupfen"],
    tags: [
      "#teemischung",
      "#erkältung",
      "#schwitzen",
      "#hexenwissen",
      "#fieber",
    ],
  },
  {
    id: "schlaftee-tiefschlaf",
    name: "Schlaftee -- Tiefe Nachtruhe",
    kategorie: "Teemischungen",
    schwierigkeit: "Einfach",
    zutaten: [
      {
        name: "Baldrianwurzel",
        menge: "25g",
        wirkung: "stark beruhigend, schlaffördernd",
      },
      {
        name: "Hopfenzapfen",
        menge: "25g",
        wirkung: "sedierend, entspannend",
      },
      {
        name: "Melissenblätter",
        menge: "20g",
        wirkung: "beruhigend, angstlösend, krampflösend",
      },
      {
        name: "Passionsblumenkraut",
        menge: "20g",
        wirkung: "angstlösend, beruhigend",
      },
      {
        name: "Lavendelblüten",
        menge: "10g",
        wirkung: "entspannend, stimmungsaufhellend",
      },
    ],
    zubereitung:
      "1. Alle Kräuter gründlich vermischen. " +
      "2. Pro Tasse 2-3 Teelöffel der Mischung verwenden. " +
      "3. Mit 250ml kochendem Wasser übergießen. " +
      "4. Zugedeckt 10-15 Minuten ziehen lassen -- Baldrian braucht etwas länger, um seine Wirkstoffe freizusetzen. " +
      "5. Abseihen. " +
      "6. Optional mit Honig oder etwas Milch verfeinern. " +
      "7. Etwa 30-60 Minuten vor dem Schlafengehen in Ruhe trinken. " +
      "8. Dabei am besten schon das Licht dimmen und zur Ruhe kommen.",
    anwendung:
      "1 Tasse 30-60 Minuten vor dem Schlafengehen. Bei stärkerer Schlaflosigkeit kann auch eine zweite Tasse am frühen Abend getrunken werden. Die Wirkung baut sich über einige Tage auf -- am besten als 2-3-wöchige Kur anwenden, dann eine Woche Pause.",
    hintergrund:
      "Die Kombination aus Baldrian und Hopfen ist in Studien bestätigt wirksam -- beide Pflanzen verstärken sich gegenseitig. Unsere Vorfahren hängten Hopfenkissen über das Bett und gaben unruhigen Kindern Baldriantee. Lavendel wurde in Klöstern angebaut und galt als 'Kraut der Stille'.",
    besonders_bei: [
      "schlaflosigkeit",
      "einschlafprobleme",
      "unruhe",
      "nervositaet",
      "stress",
    ],
    tags: [
      "#teemischung",
      "#schlaf",
      "#beruhigung",
      "#hexenwissen",
      "#baldrian",
    ],
  },
  {
    id: "verdauungstee-bitter",
    name: "Verdauungstee -- Bitterkräuter-Mischung",
    kategorie: "Teemischungen",
    schwierigkeit: "Einfach",
    zutaten: [
      {
        name: "Pfefferminzblätter",
        menge: "25g",
        wirkung: "krampflösend, verdauungsfördernd, kühlend",
      },
      {
        name: "Fenchelsamen (leicht angemörsert)",
        menge: "20g",
        wirkung: "entblähend, krampflösend",
      },
      {
        name: "Kamillenblüten",
        menge: "20g",
        wirkung: "entzündungshemmend, krampflösend",
      },
      {
        name: "Schafgarbenkraut",
        menge: "15g",
        wirkung: "bitter, verdauungsanregend, krampflösend",
      },
      {
        name: "Kümmel (leicht angemörsert)",
        menge: "10g",
        wirkung: "entblähend, krampflösend",
      },
      {
        name: "Enzianwurzel",
        menge: "10g",
        wirkung: "stark bitter, regt Magensäfte an",
      },
    ],
    zubereitung:
      "1. Fenchelsamen und Kümmel vor dem Mischen im Mörser leicht anstoßen -- so treten die ätherischen Öle besser aus. " +
      "2. Alle Kräuter gründlich vermischen. " +
      "3. Pro Tasse 2 Teelöffel der Mischung verwenden. " +
      "4. Mit 250ml heißem Wasser (ca. 90 Grad, nicht mehr kochend) übergießen. " +
      "5. Zugedeckt 8-10 Minuten ziehen lassen. " +
      "6. Abseihen. " +
      "7. Bitte NICHT süßen -- die Bitterstoffe sind Teil der Wirkung! Sie regen Leber, Galle und Bauchspeicheldrüse an.",
    anwendung:
      "1 Tasse etwa 20-30 Minuten vor den Mahlzeiten oder direkt nach dem Essen bei Völlegefühl. Bei chronischen Verdauungsbeschwerden als 4-Wochen-Kur: 3x täglich vor den Mahlzeiten.",
    hintergrund:
      "Bitterstoffe sind in der modernen Ernährung fast verschwunden -- unsere Ahnen assen regelmäßig bittere Wildkräuter. Der bittere Geschmack löst reflexartig die Verdauungssäfte aus. Enzian galt in den Alpen als die 'Königin der Bitterstoffe' und wurde als Lebenselixier verehrt.",
    besonders_bei: [
      "verdauung",
      "blaehungen",
      "voellegefuehl",
      "magenkraempfe",
      "appetitlosigkeit",
    ],
    tags: [
      "#teemischung",
      "#verdauung",
      "#bitterstoffe",
      "#hexenwissen",
      "#magen",
    ],
  },
  {
    id: "nerventee-staerkung",
    name: "Nerventee -- Stärkung für stressige Zeiten",
    kategorie: "Teemischungen",
    schwierigkeit: "Einfach",
    zutaten: [
      {
        name: "Johanniskraut",
        menge: "25g",
        wirkung: "stimmungsaufhellend, nervenstärkend",
      },
      {
        name: "Melissenblätter",
        menge: "25g",
        wirkung: "beruhigend, herzstärkend, angstlösend",
      },
      {
        name: "Rosmarinblätter",
        menge: "15g",
        wirkung: "anregend, durchblutungsfördernd, gedächtnisstärkend",
      },
      {
        name: "Haferstroh (Avena sativa)",
        menge: "20g",
        wirkung: "nervenährend, aufbauend bei Erschöpfung",
      },
      {
        name: "Lavendelblüten",
        menge: "15g",
        wirkung: "ausgleichend, beruhigend ohne müde zu machen",
      },
    ],
    zubereitung:
      "1. Alle Kräuter gut vermischen und in einem dunklen Glas aufbewahren. " +
      "2. Pro Tasse 2 gehäufte Teelöffel verwenden. " +
      "3. Mit 250ml kochendem Wasser übergießen. " +
      "4. Zugedeckt 10 Minuten ziehen lassen. " +
      "5. Abseihen und warm trinken. " +
      "6. Optional mit einem Löffel Honig süßen.",
    anwendung:
      "2-3 Tassen täglich über 4-6 Wochen als Kur. Die Wirkung des Johanniskrauts braucht 2-3 Wochen, um sich voll aufzubauen. Bitte beachten: Johanniskraut erhöht die Lichtempfindlichkeit der Haut -- bei starker Sonneneinstrahlung vorsichtig sein. Nicht zusammen mit Antidepressiva oder der Pille einnehmen.",
    hintergrund:
      "Johanniskraut wurde schon von Paracelsus als 'Arnica der Nerven' bezeichnet. Im Mittelalter galt es als Schutzkraut gegen dunkle Mächte -- heute wissen wir, dass es tatsächlich gegen innere Dunkelheit (Depression) wirkt. Haferstroh ist ein unterschätztes Nervenährmittel -- Hildegard von Bingen nutzte es bereits.",
    besonders_bei: [
      "stress",
      "nervositaet",
      "erschoepfung",
      "burnout",
      "stimmungstief",
    ],
    tags: [
      "#teemischung",
      "#nerven",
      "#stress",
      "#hexenwissen",
      "#johanniskraut",
    ],
  },
  {
    id: "frauentee-zyklus",
    name: "Frauentee -- Harmonischer Zyklus",
    kategorie: "Teemischungen",
    schwierigkeit: "Einfach",
    zutaten: [
      {
        name: "Frauenmantelblätter",
        menge: "30g",
        wirkung: "zyklusregulierend, krampflösend, progesteronähnlich",
      },
      {
        name: "Schafgarbenblüten und -kraut",
        menge: "20g",
        wirkung: "krampflösend, blutstillend, entzündungshemmend",
      },
      {
        name: "Gänsefingerkraut",
        menge: "20g",
        wirkung: "stark krampflösend, besonders im Unterleib",
      },
      {
        name: "Himbeerblätter",
        menge: "15g",
        wirkung: "tonisierend für die Gebärmutter, mineralstoffreich",
      },
      {
        name: "Beifußkraut",
        menge: "10g",
        wirkung: "durchblutungsfördernd, wärmend, zyklusfördernd",
      },
      {
        name: "Rosenblütenblätter",
        menge: "5g",
        wirkung: "herzöffnend, ausgleichend, für die Seele",
      },
    ],
    zubereitung:
      "1. Alle Kräuter sorgfältig mischen. " +
      "2. Pro Tasse 2 Teelöffel der Mischung verwenden. " +
      "3. Mit 250ml kochendem Wasser übergießen. " +
      "4. Zugedeckt 10-12 Minuten ziehen lassen. " +
      "5. Abseihen und warm trinken. " +
      "6. Rosenblütenblätter geben dem Tee eine wunderbar sanfte Note.",
    anwendung:
      "2-3 Tassen täglich, ab dem Eisprung (Zyklusmitte) bis zum Ende der Menstruation. Bei starken Krämpfen während der Menstruation alle 2 Stunden eine Tasse trinken. Nicht in der Schwangerschaft anwenden (Beifuß!).",
    hintergrund:
      "Frauenmantel (Alchemilla) trägt seinen alchemistischen Namen nicht umsonst -- die Alchemisten sammelten die Tautropfen aus seinen Blättern als 'himmlisches Wasser'. In der Volksmedizin war er DIE Frauenpflanze schlechthin. Schafgarbe wurde 'Augenbraue der Venus' genannt und galt als heilig für alles Weibliche.",
    besonders_bei: [
      "menstruationsbeschwerden",
      "pms",
      "zyklusbeschwerden",
      "kraempfe",
      "frauengesundheit",
    ],
    tags: [
      "#teemischung",
      "#frauen",
      "#zyklus",
      "#hexenwissen",
      "#frauenmantel",
    ],
  },
  {
    id: "entgiftungstee-fruehling",
    name: "Entgiftungstee -- Frühjahrskur für Leber & Niere",
    kategorie: "Teemischungen",
    schwierigkeit: "Einfach",
    zutaten: [
      {
        name: "Brennnesselblätter",
        menge: "25g",
        wirkung: "harntreibend, blutreinigend, mineralstoffreich",
      },
      {
        name: "Löwenzahnwurzel und -blätter",
        menge: "25g",
        wirkung: "leberanregend, harntreibend, stoffwechselaktivierend",
      },
      {
        name: "Birkenblätter",
        menge: "20g",
        wirkung: "harntreibend, entwässernd, nierenfreundlich",
      },
      {
        name: "Mariendistelsamen (gemahlen)",
        menge: "15g",
        wirkung: "leberschützend, leberregenerierend",
      },
      {
        name: "Pfefferminzblätter",
        menge: "15g",
        wirkung: "verdauungsfördernd, geschmacksverbessernd",
      },
    ],
    zubereitung:
      "1. Mariendistelsamen im Mörser leicht aufbrechen, damit die Wirkstoffe sich lösen können. " +
      "2. Alle Kräuter gut vermischen. " +
      "3. Pro Tasse 2-3 Teelöffel verwenden. " +
      "4. Mit 250ml kochendem Wasser übergießen. " +
      "5. Zugedeckt 12-15 Minuten ziehen lassen (Wurzeln und Samen brauchen länger). " +
      "6. Abseihen und über den Tag verteilt trinken. " +
      "7. Wichtig: Zusätzlich mindestens 1.5 Liter Wasser am Tag trinken, um die gelösten Schlacken auszuschwemmen.",
    anwendung:
      "Als Frühjahrskur: 4-6 Wochen lang 3-4 Tassen täglich. Ideal von März bis Mai. Während der Kur auf Alkohol, Kaffee und schwere Kost möglichst verzichten. Leichte, bitterstoffreiche Ernährung mit viel frischem Gemüse unterstützt die Entgiftung.",
    hintergrund:
      "Die Frühjahrskur ist eine uralte Tradition in Mitteleuropa. Nach dem langen Winter mit schwerer Kost brauchte der Körper eine Reinigung. Brennnessel und Löwenzahn waren die ersten Frühlingskräuter, die gesammelt wurden -- voller Lebenskraft und Mineralien. Die Bauern sagten: 'Im Frühjahr musst du das Blut reinigen, sonst wird der Sommer schwer.'",
    besonders_bei: [
      "entgiftung",
      "fruehjahrskur",
      "leber",
      "niere",
      "stoffwechsel",
      "blutreinigung",
    ],
    tags: [
      "#teemischung",
      "#entgiftung",
      "#leber",
      "#hexenwissen",
      "#frühjahrskur",
    ],
  },
  {
    id: "gelenktee-beweglich",
    name: "Gelenktee -- Für geschmeidige Gelenke",
    kategorie: "Teemischungen",
    schwierigkeit: "Einfach",
    zutaten: [
      {
        name: "Weidenrinde",
        menge: "25g",
        wirkung: "entzündungshemmend, schmerzlindernd (natürliches Salicin)",
      },
      {
        name: "Brennnesselblätter",
        menge: "25g",
        wirkung: "harntreibend, entsäuernd, mineralstoffreich",
      },
      {
        name: "Teufelskrallenwurzel",
        menge: "20g",
        wirkung: "entzündungshemmend, schmerzlindernd bei Gelenkbeschwerden",
      },
      {
        name: "Mädesüß",
        menge: "15g",
        wirkung: "schmerzlindernd, entzündungshemmend",
      },
      {
        name: "Goldrute",
        menge: "15g",
        wirkung: "harntreibend, entsäuernd, nierenunterstützend",
      },
    ],
    zubereitung:
      "1. Alle Kräuter gut vermischen. Die Weidenrinde kann etwas grober sein -- das ist in Ordnung. " +
      "2. Pro Tasse 2-3 Teelöffel der Mischung verwenden. " +
      "3. Die Mischung mit 250ml KALTEM Wasser ansetzen und langsam zum Kochen bringen (Abkochung/Dekokt). " +
      "4. 5 Minuten leicht köcheln lassen. " +
      "5. Vom Herd nehmen und weitere 10 Minuten zugedeckt ziehen lassen. " +
      "6. Abseihen und warm trinken. " +
      "7. Schmeckt herb-bitter -- bei Bedarf mit etwas Honig mildern.",
    anwendung:
      "2-3 Tassen täglich über mindestens 6-8 Wochen. Die Wirkung der Teufelskralle baut sich langsam auf. Zusätzlich viel Wasser trinken, um Harnsäure auszuschwemmen. Nicht zusammen mit Blutverdünnern einnehmen (Weidenrinde!).",
    hintergrund:
      "Weidenrinde ist der Vorläufer von Aspirin -- die Kelten und Germanen kauten sie bei Schmerzen. Teufelskralle stammt aus der traditionellen südafrikanischen Medizin und wurde erst im 20. Jahrhundert in Europa bekannt. Die Kombination von entzündungshemmenden und entsäuernden Kräutern ist der Schlüssel bei Gelenkbeschwerden.",
    besonders_bei: [
      "gelenkschmerzen",
      "arthrose",
      "rheuma",
      "gicht",
      "entzuendung",
    ],
    tags: [
      "#teemischung",
      "#gelenke",
      "#schmerzen",
      "#hexenwissen",
      "#entzündung",
    ],
  },
  {
    id: "immunstaerkungstee",
    name: "Immunstärkungstee -- Schutzschild aus der Natur",
    kategorie: "Teemischungen",
    schwierigkeit: "Einfach",
    zutaten: [
      {
        name: "Echinacea-Kraut (Sonnenhut)",
        menge: "25g",
        wirkung: "immunstimulierend, entzündungshemmend",
      },
      {
        name: "Hagebuttenschalen",
        menge: "25g",
        wirkung: "extrem Vitamin-C-reich, immunstärkend",
      },
      {
        name: "Holunderblüten",
        menge: "15g",
        wirkung: "schweißtreibend, immunstimulierend, antiviral",
      },
      {
        name: "Ingwerwurzel (getrocknet, geschnitten)",
        menge: "10g",
        wirkung: "wärmend, durchblutungsfördernd, antibakteriell",
      },
      {
        name: "Thymian",
        menge: "15g",
        wirkung: "antibakteriell, antiviral, schleimlösend",
      },
      {
        name: "Zimt (Ceylon-Zimt, Stücke)",
        menge: "10g",
        wirkung: "wärmend, antibakteriell, blutzuckerregulierend",
      },
    ],
    zubereitung:
      "1. Hagebuttenschalen und Ingwer mit 300ml kaltem Wasser ansetzen und langsam zum Kochen bringen. " +
      "2. 10 Minuten leicht köcheln lassen. " +
      "3. Vom Herd nehmen, die restlichen Kräuter hinzugeben. " +
      "4. Zugedeckt weitere 10 Minuten ziehen lassen. " +
      "5. Abseihen. " +
      "6. Mit etwas Honig und einem Spritzer Zitrone verfeinern. " +
      "7. Die Hagebuttenschalen brauchen das Köcheln, um das Vitamin C freizusetzen.",
    anwendung:
      "In der Erkältungssaison (Oktober bis März) 2-3 Tassen täglich. Bei akutem Infekt alle 2-3 Stunden eine Tasse. Echinacea nicht länger als 8 Wochen am Stück nehmen, dann 2 Wochen Pause.",
    hintergrund:
      "Echinacea wurde von den Ureinwohnern Nordamerikas seit Jahrhunderten als Heilpflanze verwendet. Die Hagebutte enthält 20-mal mehr Vitamin C als eine Zitrone. Ingwer und Zimt waren im Mittelalter so wertvoll wie Gold -- nicht nur als Gewürz, sondern als Medizin.",
    besonders_bei: [
      "immunsystem",
      "erkaeltungspraevention",
      "abwehrkraefte",
      "winterkur",
    ],
    tags: [
      "#teemischung",
      "#immunsystem",
      "#echinacea",
      "#hexenwissen",
      "#prävention",
    ],
  },
  {
    id: "lebertee-regeneration",
    name: "Lebertee -- Bittere Medizin für das fleißigste Organ",
    kategorie: "Teemischungen",
    schwierigkeit: "Einfach",
    zutaten: [
      {
        name: "Mariendistelsamen (gemahlen)",
        menge: "25g",
        wirkung: "leberschützend, leberregenerierend (Silymarin)",
      },
      {
        name: "Löwenzahnwurzel",
        menge: "25g",
        wirkung: "gallenflussfördernd, leberanregend",
      },
      {
        name: "Artischockenblätter",
        menge: "20g",
        wirkung: "leberschützend, cholesterinsenkend, gallenfördernd",
      },
      {
        name: "Schafgarbenkraut",
        menge: "15g",
        wirkung: "bitter, leberstimulierend, krampflösend",
      },
      {
        name: "Pfefferminze",
        menge: "15g",
        wirkung: "gallenflussfördernd, krampflösend, geschmacksverbessernd",
      },
    ],
    zubereitung:
      "1. Mariendistelsamen im Mörser fein aufbrechen. " +
      "2. Alle Kräuter gut vermischen. " +
      "3. Pro Tasse 2-3 Teelöffel verwenden. " +
      "4. Löwenzahnwurzel und Mariendistelsamen mit 250ml kaltem Wasser ansetzen und zum Kochen bringen. " +
      "5. 5 Minuten köcheln lassen. " +
      "6. Restliche Kräuter hinzufügen, zugedeckt 10 Minuten ziehen lassen. " +
      "7. Abseihen. Nicht süßen -- die Bitterstoffe gehören zur Wirkung!",
    anwendung:
      "2-3 Tassen täglich, idealerweise 20 Minuten vor den Mahlzeiten. Als Kur über 6-8 Wochen, besonders im Frühjahr oder nach Zeiten mit zu viel Alkohol, Medikamenten oder schwerer Kost. Die beste Zeit für eine Leberkur ist zwischen 1 und 3 Uhr nachts -- dann arbeitet die Leber auf Hochtouren. Morgens und abends eine Tasse sind ideal.",
    hintergrund:
      "Die Mariendistel ist die am besten erforschte Leberheilpflanze. Der Wirkstoff Silymarin kann geschädigte Leberzellen tatsächlich zur Regeneration anregen -- das ist wissenschaftlich belegt. In der Signaturenlehre verweisen die weiß-marmorierten Blätter der Mariendistel auf die Leber. Der Legende nach stammen die weißen Flecken von der Milch der Jungfrau Maria.",
    besonders_bei: [
      "leber",
      "gallenblase",
      "entgiftung",
      "fettleber",
      "alkoholfolgen",
    ],
    tags: [
      "#teemischung",
      "#leber",
      "#mariendistel",
      "#hexenwissen",
      "#entgiftung",
    ],
  },
  {
    id: "nierentee-durchspuelung",
    name: "Nierentee -- Sanfte Durchspülung",
    kategorie: "Teemischungen",
    schwierigkeit: "Einfach",
    zutaten: [
      {
        name: "Goldrutenkraut",
        menge: "25g",
        wirkung: "harntreibend, entzündungshemmend, nierenanregend",
      },
      {
        name: "Birkenblätter",
        menge: "25g",
        wirkung: "harntreibend, entwässernd",
      },
      {
        name: "Brennnesselblätter",
        menge: "20g",
        wirkung: "harntreibend, mineralstoffreich, blutreinigend",
      },
      {
        name: "Schachtelhalmkraut (Zinnkraut)",
        menge: "15g",
        wirkung: "harntreibend, kieselsäurereich, bindegewebsstärkend",
      },
      {
        name: "Bärenblätter",
        menge: "15g",
        wirkung: "antibakteriell im Harntrakt, desinfizierend",
      },
    ],
    zubereitung:
      "1. Alle Kräuter gut vermischen. " +
      "2. Pro Tasse 2-3 Teelöffel verwenden. " +
      "3. Schachtelhalm separat mit 250ml kaltem Wasser ansetzen und 15 Minuten köcheln lassen (die Kieselsäure löst sich nur durch Abkochung). " +
      "4. Die restlichen Kräuter mit kochendem Wasser übergießen und 10 Minuten ziehen lassen. " +
      "5. Beide Auszüge mischen und abseihen. " +
      "6. Alternativ alle Kräuter zusammen als Abkochung zubereiten: 15 Minuten köcheln, 10 Minuten nachziehen. " +
      "7. Nicht süßen.",
    anwendung:
      "3-4 Tassen täglich, dazu mindestens 2 Liter Wasser zusätzlich trinken. Als Kur über 3-4 Wochen. Besonders hilfreich bei wiederkehrenden Blasenentzündungen. Den Tee nicht zu spät am Abend trinken -- sonst wird die Nacht unruhig. Nicht bei schweren Nierenerkrankungen ohne ärztlichen Rat anwenden.",
    hintergrund:
      "Goldrute (Solidago) wurde schon von den Germanen als 'Wundkraut' verwendet. In der Volksmedizin der Alpen war Birkenwasser (der Saft der Birke im Frühjahr) ein wichtiges Nierenmittel. Schachtelhalm ist eine Urpflanze -- er existiert seit über 300 Millionen Jahren und hat die höchste Konzentration an Kieselsäure im Pflanzenreich.",
    besonders_bei: [
      "niere",
      "blase",
      "harnwegsinfekt",
      "entwaesserung",
      "blasenentzuendung",
    ],
    tags: [
      "#teemischung",
      "#niere",
      "#blase",
      "#hexenwissen",
      "#durchspülung",
    ],
  },
  {
    id: "hustentee-bronchial",
    name: "Hustentee -- Bronchialbalsam",
    kategorie: "Teemischungen",
    schwierigkeit: "Einfach",
    zutaten: [
      {
        name: "Thymiankraut",
        menge: "25g",
        wirkung: "schleimlösend, antibakteriell, krampflösend",
      },
      {
        name: "Spitzwegerichblätter",
        menge: "25g",
        wirkung: "reizlindernd, antibakteriell, schleimhautschützend",
      },
      {
        name: "Eibischwurzel",
        menge: "20g",
        wirkung: "stark reizlindernd, schleimbildend, schützend",
      },
      {
        name: "Königskerzenblüten",
        menge: "15g",
        wirkung: "schleimlösend, reizlindernd, entzündungshemmend",
      },
      {
        name: "Süßholzwurzel",
        menge: "10g",
        wirkung: "schleimlösend, entzündungshemmend, natürlich süß",
      },
      {
        name: "Anis (gemahlen)",
        menge: "5g",
        wirkung: "schleimlösend, krampflösend, wohlschmeckend",
      },
    ],
    zubereitung:
      "1. Eibischwurzel am besten separat als Kaltauszug zubereiten: 2 Teelöffel in 250ml kaltem Wasser über Nacht (8 Stunden) ansetzen. Die Schleimstoffe werden durch Hitze zerstört! " +
      "2. Die restlichen Kräuter mit 250ml kochendem Wasser übergießen und 10 Minuten zugedeckt ziehen lassen. " +
      "3. Beide Auszüge mischen. " +
      "4. Alternative Schnellmethode: Alle Kräuter mit 80 Grad warmem (nicht kochendem) Wasser übergießen und 15 Minuten zugedeckt ziehen lassen. " +
      "5. Mit Honig süßen -- Honig verstärkt die hustenstillende Wirkung.",
    anwendung:
      "Bei akutem Husten alle 2-3 Stunden eine Tasse, warm und in kleinen Schlucken trinken. Bei trockenem Reizhusten den Eibisch-Anteil erhöhen. Bei produktivem Husten den Thymian-Anteil erhöhen. Auch als Gurgellösung bei Halsschmerzen geeignet.",
    hintergrund:
      "Thymian und Spitzwegerich sind das Traumpaar der Hustenheilung. Thymian löst den Schleim, Spitzwegerich beruhigt die gereizte Schleimhaut. Spitzwegerich wächst an jedem Wegrand -- unsere Ahnen nannten ihn 'König des Weges' (planta = Fußsohle). Königskerze stand in Bauerngärten als Schutzpflanze und wurde als Fackel verwendet.",
    besonders_bei: [
      "husten",
      "bronchitis",
      "reizhusten",
      "halsschmerzen",
      "heiserkeit",
    ],
    tags: [
      "#teemischung",
      "#husten",
      "#bronchien",
      "#hexenwissen",
      "#thymian",
    ],
  },
  {
    id: "beruhigungstee-akut",
    name: "Beruhigungstee -- Soforthilfe bei Angst & Panik",
    kategorie: "Teemischungen",
    schwierigkeit: "Einfach",
    zutaten: [
      {
        name: "Passionsblumenkraut",
        menge: "30g",
        wirkung: "stark angstlösend, beruhigend ohne Benommenheit",
      },
      {
        name: "Melissenblätter",
        menge: "25g",
        wirkung: "beruhigend, herzfrequenzsenkend, angstlösend",
      },
      {
        name: "Lavendelblüten",
        menge: "20g",
        wirkung: "angstlösend, ausgleichend, nervenstärkend",
      },
      {
        name: "Orangenblüten",
        menge: "15g",
        wirkung: "entspannend, stimmungsaufhellend, herzberuhigend",
      },
      {
        name: "Süßholzwurzel",
        menge: "10g",
        wirkung: "harmonisierend, nebennierenstützend, natürlich süß",
      },
    ],
    zubereitung:
      "1. Alle Kräuter gut vermischen. " +
      "2. Pro Tasse 3 gehäufte Teelöffel verwenden (etwas stärker dosieren als üblich). " +
      "3. Mit 250ml kochendem Wasser übergießen. " +
      "4. Zugedeckt 12-15 Minuten ziehen lassen. " +
      "5. Abseihen. " +
      "6. Langsam und bewusst trinken -- das Trinken selbst ist Teil der Beruhigung.",
    anwendung:
      "Bei akuter Angst oder Panikgefühlen sofort eine Tasse trinken. Im Alltag bei hoher Stressbelastung 2-3 Tassen täglich. Wunderbar auch als Abendtee. Nicht zusammen mit Benzodiazepinen einnehmen. Bei hohem Blutdruck die Süßholzwurzel weglassen.",
    hintergrund:
      "Passionsblume wurde von den Urvölkern Mittelamerikas als Beruhigungsmittel verwendet. Die spanischen Eroberer benannten sie nach der Passion Christi wegen der symbolischen Blütenform. In Studien ist Passionsblume bei Angstzuständen vergleichbar wirksam wie Oxazepam -- aber ohne Abhängigkeitspotenzial.",
    besonders_bei: [
      "angst",
      "panik",
      "herzrasen",
      "innere_unruhe",
      "stress",
    ],
    tags: [
      "#teemischung",
      "#beruhigung",
      "#angst",
      "#hexenwissen",
      "#passionsblume",
    ],
  },
  {
    id: "blasentee-akut",
    name: "Blasentee -- Schnelle Hilfe bei Blasenentzündung",
    kategorie: "Teemischungen",
    schwierigkeit: "Einfach",
    zutaten: [
      {
        name: "Bärenblätter",
        menge: "25g",
        wirkung: "stark antibakteriell im Harntrakt (Arbutin)",
      },
      {
        name: "Goldrutenkraut",
        menge: "25g",
        wirkung: "harntreibend, entzündungshemmend",
      },
      {
        name: "Brennnesselblätter",
        menge: "20g",
        wirkung: "durchspülend, mineralstoffreich",
      },
      {
        name: "Preiselbeerblätter",
        menge: "15g",
        wirkung: "verhindern das Anhaften von Bakterien",
      },
      {
        name: "Kamillenblüten",
        menge: "15g",
        wirkung: "entzündungshemmend, krampflösend, wundheilend",
      },
    ],
    zubereitung:
      "1. Alle Kräuter gut mischen. " +
      "2. Pro Tasse 3 Teelöffel verwenden (hohe Dosierung bei akuter Entzündung). " +
      "3. Mit 250ml kochendem Wasser übergießen. " +
      "4. Zugedeckt 15 Minuten ziehen lassen. " +
      "5. Abseihen und möglichst warm trinken. " +
      "6. Wichtig: Während der Behandlung keinen Zucker und keine Säfte trinken -- Zucker füttert die Bakterien.",
    anwendung:
      "Bei akuter Blasenentzündung: alle 2 Stunden eine Tasse, insgesamt 6-8 Tassen am Tag. Dazu mindestens 2 Liter stilles Wasser. Bärenblätter nicht länger als 1 Woche einnehmen. Bei Fieber oder Blut im Urin unbedingt einen Arzt aufsuchen. Vorbeugend: 2-3 Tassen täglich in anfälligen Zeiten.",
    hintergrund:
      "Bärenblätter (Uva ursi) enthalten Arbutin, das im basischen Milieu des Harntrakts in das antibakteriell wirksame Hydrochinon umgewandelt wird. Deshalb sollte man während der Einnahme etwas Natron (eine Messerspitze auf ein Glas Wasser) trinken, um den Harn basisch zu halten. In der Volksmedizin war Goldrute als 'Heidnisch Wundkraut' bekannt.",
    besonders_bei: [
      "blasenentzuendung",
      "harnwegsinfekt",
      "niere",
      "blase",
      "frauen",
    ],
    tags: [
      "#teemischung",
      "#blase",
      "#harnweg",
      "#hexenwissen",
      "#bärentraube",
    ],
  },
  {
    id: "magenberuhigung-tee",
    name: "Magentee -- Sanfte Beruhigung bei Übelkeit",
    kategorie: "Teemischungen",
    schwierigkeit: "Einfach",
    zutaten: [
      {
        name: "Kamillenblüten",
        menge: "30g",
        wirkung: "entzündungshemmend, krampflösend, wundheilend",
      },
      {
        name: "Pfefferminzblätter",
        menge: "20g",
        wirkung: "krampflösend, kühlend, übelkeitslindernd",
      },
      {
        name: "Fenchelsamen (angemörsert)",
        menge: "15g",
        wirkung: "entblähend, krampflösend, beruhigend",
      },
      {
        name: "Melissenblätter",
        menge: "15g",
        wirkung: "beruhigend, krampflösend, nervösen Magen beruhigend",
      },
      {
        name: "Ingwerwurzel (getrocknet)",
        menge: "10g",
        wirkung: "stark übelkeitslindernd, wärmend",
      },
      {
        name: "Kalmuswurzel",
        menge: "10g",
        wirkung: "magenstärkend, appetitanregend, bitter",
      },
    ],
    zubereitung:
      "1. Fenchelsamen im Mörser leicht andrücken. " +
      "2. Alle Kräuter gut vermischen. " +
      "3. Pro Tasse 2 Teelöffel verwenden. " +
      "4. Mit 250ml heißem Wasser (ca. 85 Grad) übergießen -- nicht kochend, das schont die empfindlichen Kamillnöle. " +
      "5. Zugedeckt 8-10 Minuten ziehen lassen. " +
      "6. Abseihen. " +
      "7. In kleinen Schlucken trinken, nicht hastig.",
    anwendung:
      "Bei akuter Übelkeit sofort eine Tasse in kleinen Schlucken trinken. Bei chronischen Magenbeschwerden 3x täglich eine Tasse zwischen den Mahlzeiten. Bei nervösem Magen den Melissenanteil erhöhen. In der Schwangerschaft (Morgenübelkeit) Ingwer auf 5g reduzieren und Kalmus weglassen.",
    hintergrund:
      "Kamille ist die vielleicht älteste und besterforschteste Heilpflanze Europas. Die Ägypter weihten sie dem Sonnengott Ra. In der deutschen Volksmedizin hieß es: 'Kamille macht alles wieder gut.' Ingwer ist in der ayurvedischen und chinesischen Medizin seit über 3000 Jahren als Magenmittel bewährt.",
    besonders_bei: [
      "uebelkeit",
      "magenschmerzen",
      "blaehungen",
      "gastritis",
      "reizdarm",
    ],
    tags: ["#teemischung", "#magen", "#übelkeit", "#hexenwissen", "#kamille"],
  },
  {
    id: "herzstaerkungstee",
    name: "Herztee -- Weißdorn-Stärkung für Herz & Kreislauf",
    kategorie: "Teemischungen",
    schwierigkeit: "Einfach",
    zutaten: [
      {
        name: "Weissdornblüten und -blätter",
        menge: "35g",
        wirkung: "herzstärkend, durchblutungsfördernd, blutdruckregulierend",
      },
      {
        name: "Melissenblätter",
        menge: "20g",
        wirkung: "herzberuhigend, angstlösend, krampflösend",
      },
      {
        name: "Rosmarinblätter",
        menge: "15g",
        wirkung: "kreislaufanregend, durchblutungsfördernd",
      },
      {
        name: "Herzgespannkraut (Leonurus cardiaca)",
        menge: "15g",
        wirkung: "herzberuhigend, bei Herzrasen und nervösem Herz",
      },
      {
        name: "Lavendelblüten",
        menge: "10g",
        wirkung: "beruhigend, angstlösend, harmonisierend",
      },
      {
        name: "Rosenblütenblätter",
        menge: "5g",
        wirkung: "herzöffnend, tröstend, für die Seele",
      },
    ],
    zubereitung:
      "1. Alle Kräuter behutsam mischen. " +
      "2. Pro Tasse 2 Teelöffel verwenden. " +
      "3. Mit 250ml kochendem Wasser übergießen. " +
      "4. Zugedeckt 10-15 Minuten ziehen lassen. " +
      "5. Abseihen. " +
      "6. Langsam trinken -- das Herz mag keine Hektik.",
    anwendung:
      "2-3 Tassen täglich über mindestens 3 Monate. Weißdorn braucht lange, um seine volle Wirkung zu entfalten, ist dafür aber nachhaltig und nebenwirkungsfrei. Gut geeignet für ältere Menschen mit Altersherz. Kann begleitend zu Herzmedikamenten eingenommen werden, aber bitte den Arzt informieren.",
    hintergrund:
      "Weißdorn (Crataegus) ist eine der wenigen Heilpflanzen, die in Studien eine eindeutige Wirksamkeit bei Herzinsuffizienz gezeigt haben. In der keltischen Tradition war der Weißdorn ein heiliger Baum -- ein Tor zur Anderswelt. Herzgespann (Leonurus = Löwenschwanz) wurde schon im antiken Griechenland gegen Herzleiden verwendet. Die Rose steht seit jeher für die Liebe -- und das Herz ist das Organ der Liebe.",
    besonders_bei: [
      "herz",
      "kreislauf",
      "blutdruck",
      "herzrasen",
      "herzschwaeche",
    ],
    tags: [
      "#teemischung",
      "#herz",
      "#weißdorn",
      "#hexenwissen",
      "#kreislauf",
    ],
  },
];

// =====================================================================
// SALBEN-REZEPTE -- Heilsalben, Balsame & aeusserliche Anwendungen
// =====================================================================

export const SALBEN_REZEPTE = [
  {
    id: "ringelblumen-salbe",
    name: "Ringelblumensalbe (Calendula) -- Die Allrounderin",
    kategorie: "Salben & Balsame",
    schwierigkeit: "Mittel",
    zutaten: [
      {
        name: "Ringelblumenblüten (frisch oder getrocknet)",
        menge: "2 große Handvoll (ca. 50g getrocknet oder 100g frisch)",
      },
      {
        name: "Olivenöl (kaltgepresst) oder Sonnenblumenöl",
        menge: "250ml",
      },
      { name: "Bienenwachs (ungebleicht)", menge: "25-30g" },
      {
        name: "Optional: Ätherisches Lavendelöl",
        menge: "5-10 Tropfen",
      },
      {
        name: "Optional: Vitamin-E-Öl (Tocopherol)",
        menge: "5 Tropfen (als natürliches Konservierungsmittel)",
      },
    ],
    zubereitung:
      "SCHRITT 1 -- Ölauszug herstellen (2-4 Wochen vorher): " +
      "Die Ringelblumenblüten in ein sauberes Schraubglas füllen und mit dem Öl vollständig bedecken. Das Glas verschließen und an einen warmen, sonnigen Platz stellen (Fensterbank). 2-4 Wochen ziehen lassen, täglich einmal sanft schütteln. Das Öl färbt sich goldgelb bis orange. Alternativ Warmauszug: Blüten und Öl im Wasserbad bei maximal 60 Grad 2-3 Stunden sanft erwärmen. " +
      "SCHRITT 2 -- Öl abseihen: " +
      "Das Öl durch ein feines Mulltuch oder einen Kaffeefilter abseihen. Die Blüten gut ausdrücken, um möglichst viel wertvolles Öl zu gewinnen. " +
      "SCHRITT 3 -- Salbe herstellen: " +
      "250ml des Ringelblumenöls in einen kleinen Topf geben und bei niedriger Hitze erwärmen. Das Bienenwachs in kleinen Stücken oder Raspeln zugeben und bei ca. 60-65 Grad langsam schmelzen lassen. Nicht kochen! Geduldig rühren, bis das Wachs vollständig geschmolzen ist. " +
      "SCHRITT 4 -- Konsistenztest: " +
      "Einen Tropfen der Mischung auf einen kalten Teller geben. Nach 1-2 Minuten prüfen: Ist die Salbe zu fest, noch etwas Öl zugeben. Ist sie zu flüssig, noch etwas Wachs zugeben. Faustregel: 25g Wachs auf 250ml Öl ergibt eine mittelweiche Salbe. " +
      "SCHRITT 5 -- Abfüllen: " +
      "Wenn die gewünschte Konsistenz erreicht ist, die Mischung vom Herd nehmen. Etwas abkühlen lassen (handwarm), dann die optionalen ätherischen Öle und Vitamin E einrühren. Sofort in saubere, vorgewärmte Tiegelchen oder Gläser füllen. Offen abkühlen lassen, erst dann verschließen.",
    anwendung:
      "Auf kleine Wunden, Schürfrunden, rissige Haut, trockene Hautstellen, Ekzeme, leichte Verbrennungen und Sonnenbrand dünn auftragen. 2-3x täglich. Auch wunderbar als Babypflege für den Windelbereich. Auf offene, tiefe Wunden nicht anwenden.",
    haltbarkeit:
      "Bei sauberer Herstellung und kühler Lagerung 6-12 Monate. Ohne Vitamin E ca. 3-6 Monate. Immer mit Datum beschriften. Bei ranzigem Geruch entsorgen.",
    hintergrund:
      "Die Ringelblume (Calendula officinalis) ist die Königin der Wundheilpflanzen. Schon Hildegard von Bingen lobte sie. Der Name Calendula kommt von 'Calendae' (der erste Tag des Monats) -- sie blüht fast das ganze Jahr. In der Volksmedizin galt: 'Wo die Ringelblume steht, gedeiht Gesundheit.' Hebammen verwendeten Ringelblumensalbe seit jeher für Dammrisse und zur Narbenpflege.",
    besonders_bei: ["haut", "wunden", "neurodermitis", "ekzem", "narbenpflege"],
    tags: ["#salbe", "#ringelblume", "#wundheilung", "#hexenwissen", "#haut"],
  },
  {
    id: "beinwell-salbe",
    name: "Beinwellsalbe -- Knochenheil & Schmerzstiller",
    kategorie: "Salben & Balsame",
    schwierigkeit: "Mittel",
    zutaten: [
      {
        name: "Beinwellwurzel (frisch gerieben oder getrocknet geschnitten)",
        menge: "80g frisch oder 40g getrocknet",
      },
      { name: "Schweineschmalz oder Kokosöl", menge: "200g" },
      { name: "Bienenwachs", menge: "20g" },
      {
        name: "Optional: Ätherisches Rosmarinöl",
        menge: "10 Tropfen",
      },
      {
        name: "Optional: Ätherisches Wintergrünöl",
        menge: "5 Tropfen",
      },
    ],
    zubereitung:
      "SCHRITT 1 -- Wurzel vorbereiten: " +
      "Frische Beinwellwurzel gründlich waschen und fein reiben (Vorsicht, die Wurzel ist sehr schleimig -- das ist gewollt!). Getrocknete Wurzel in kleine Stücke brechen. " +
      "SCHRITT 2 -- Auszug im Fett: " +
      "Schweineschmalz oder Kokosöl in einem Topf bei niedrigster Hitze schmelzen. Die Beinwellwurzel hinzugeben. Bei 50-60 Grad ca. 2-3 Stunden im Wasserbad sanft ausziehen. Das Fett nimmt den Wirkstoff Allantoin auf, der die Zellteilung fördert. Regelmäßig umrühren. " +
      "SCHRITT 3 -- Abseihen: " +
      "Durch ein feines Sieb oder Mulltuch abseihen. Die Wurzelmasse gut ausdrücken. " +
      "SCHRITT 4 -- Salbe fertigstellen: " +
      "Das abgeseihte Fett nochmals sanft erwärmen, Bienenwachs einrühren bis geschmolzen. Konsistenztest machen (Tropfen auf kaltem Teller). Leicht abkühlen lassen und die optionalen ätherischen Öle einrühren. In Tiegel abfüllen. " +
      "WICHTIGER HINWEIS: Beinwell nur aeusserlich anwenden! Nicht auf offene Wunden auftragen. Nicht in der Schwangerschaft verwenden.",
    anwendung:
      "2-3x täglich auf schmerzende Gelenke, Prellungen, Zerrungen, Verstauchungen oder Knochenbruchstellen (nach dem Gipsen) großzügig auftragen und sanft einmassieren. Bei Gelenkschmerzen auch als Wickel über Nacht: Dick auftragen, mit einem Tuch abdecken.",
    haltbarkeit:
      "Im Kühlschrank 6-9 Monate. Die Variante mit Schweineschmalz hält besonders gut. Immer beschriften.",
    hintergrund:
      "Beinwell (Symphytum) heißt im Volksmund 'Knittebeyn' (Knittebein) oder 'Wallwurz' -- weil es Knochen zusammenwachsen lässt (Bein = Knochen). Der wissenschaftliche Name Symphytum kommt von griechisch 'symphyo' = zusammenwachsen. Der Wirkstoff Allantoin ist in der modernen Medizin als Zellregenerator anerkannt. Traditionell wickelten Knochenheiler Beinwellblätter um gebrochene Gliedmaßen.",
    besonders_bei: [
      "knochenbruch",
      "prellung",
      "zerrung",
      "gelenkschmerzen",
      "sehnenscheidenentzuendung",
    ],
    tags: [
      "#salbe",
      "#beinwell",
      "#knochen",
      "#hexenwissen",
      "#schmerzlinderung",
    ],
  },
  {
    id: "johanniskraut-rotoel",
    name: "Johanniskraut-Rotöl -- Das Sonnenlicht eingefangen",
    kategorie: "Salben & Balsame",
    schwierigkeit: "Einfach",
    zutaten: [
      {
        name: "Frische Johanniskrautblüten (Hypericum perforatum)",
        menge: "200g (etwa 2 große Handvoll, gepflückt an einem sonnigen Johannistag)",
      },
      { name: "Olivenöl (kaltgepresst, hochwertig)", menge: "500ml" },
    ],
    zubereitung:
      "SCHRITT 1 -- Ernte: " +
      "Johanniskraut am besten um den Johannistag (24. Juni) herum ernten, wenn es in voller Blüte steht. Nur die Blütenknospen und frisch aufgeblühten Blüten verwenden. Am besten um die Mittagszeit ernten, wenn das Sonnenlicht am stärksten ist. Test: Wenn man eine Blüte zwischen den Fingern zerreibt, färben sich die Finger rot -- das ist das wertvolle Hypericin. " +
      "SCHRITT 2 -- Ansetzen: " +
      "Die Blüten in ein weithalsiges Glasgefäß füllen (nicht waschen, nur kurz schütteln gegen Insekten). Mit dem Olivenöl vollständig bedecken. Das Glas mit einem Tuch (nicht luftdicht) abdecken -- in den ersten Tagen gärt es leicht. " +
      "SCHRITT 3 -- Sonnenextraktion: " +
      "Das Glas an einen sonnigen Platz stellen (Fensterbank nach Süden oder draußen). 6-8 Wochen in der Sonne stehen lassen. Jeden Tag einmal sanft schütteln. Das Öl färbt sich langsam tiefrot -- ein magischer Prozess. Nach etwa 2 Wochen wird es dunkelrot. " +
      "SCHRITT 4 -- Abseihen: " +
      "Nach 6-8 Wochen durch ein Mulltuch abseihen und die Blüten gut ausdrücken. Das leuchtend rote Öl in dunkle Glasflaschen füllen. " +
      "Das Rotöl kann direkt als Öl verwendet werden oder als Basis für eine Salbe dienen. Für eine Salbe: 250ml Rotöl mit 25g Bienenwachs im Wasserbad erwärmen und verrühren.",
    anwendung:
      "Als Öl: Auf Muskelverspannungen, Nervenschmerzen, leichte Verbrennungen (Sonnenbrand -- aber danach nicht mehr in die Sonne!), Narben und Wunden auftragen. Auch bei depressiven Verstimmungen einige Tropfen auf Brust und Solarplexus einreiben. " +
      "ACHTUNG: Johanniskraut-Öl macht die Haut lichtempfindlich! Nach dem Auftragen nicht in die Sonne gehen.",
    haltbarkeit:
      "In dunklen Flaschen und kühl gelagert 1-2 Jahre. Das Öl wird mit der Zeit noch wirksamer.",
    hintergrund:
      "Johanniskraut-Rotöl ist eines der ältesten und mächtigsten Heilmittel der europäischen Tradition. Die rote Farbe wurde als 'Blut Christi' oder 'Blut des Johannes' gedeutet. In der Signaturenlehre zeigt die rote Farbe an, dass es auf Blut und Nerven wirkt. Paracelsus nannte es 'Arnica der Nerven'. Die Herstellung in der Sommersonne ist ein uraltes Ritual -- man fängt das Sonnenlicht ein und kann es im Winter als Medizin nutzen.",
    besonders_bei: [
      "nervenschmerzen",
      "muskelverspannung",
      "verbrennung",
      "narben",
      "depression",
    ],
    tags: [
      "#salbe",
      "#johanniskraut",
      "#rotöl",
      "#hexenwissen",
      "#sonne",
      "#nerven",
    ],
  },
  {
    id: "fichtenharzsalbe",
    name: "Fichtenharzsalbe -- Wald-Medizin gegen Entzündung",
    kategorie: "Salben & Balsame",
    schwierigkeit: "Mittel",
    zutaten: [
      {
        name: "Fichtenharz (frisch gesammelt, goldgelb bis bernsteinfarben)",
        menge: "50g",
      },
      { name: "Olivenöl oder Leinöl", menge: "200ml" },
      { name: "Bienenwachs", menge: "25g" },
      {
        name: "Optional: Ätherisches Fichtennadelöl",
        menge: "10 Tropfen",
      },
    ],
    zubereitung:
      "SCHRITT 1 -- Harz sammeln: " +
      "Nur altes, bereits ausgetretenes Harz von Fichten oder Lärchen sammeln. NIEMALS frische Wunden in die Baeume schneiden! Das verletzt den Baum. Das Harz sollte schon fest geworden sein, aber noch nicht völlig verhärtet. Goldgelbes bis bernsteinfarbenes Harz ist ideal. Im Spätsommer oder Herbst sammeln. " +
      "SCHRITT 2 -- Harz reinigen: " +
      "Das Harz grob zerkleinern und in einem alten Topf (der Topf wird Harz-Topf bleiben!) bei niedrigster Hitze im Öl langsam schmelzen. Das dauert 30-60 Minuten. Nicht über 70 Grad erhitzen. Durch ein Sieb gießen, um Rindenreste und Nadeln zu entfernen. " +
      "SCHRITT 3 -- Salbe herstellen: " +
      "Die Harz-Öl-Mischung nochmals sanft erwärmen. Bienenwachs einrühren und schmelzen lassen. Konsistenztest machen. Leicht abkühlen lassen, optionale ätherische Öle einrühren. In Tiegel abfüllen. " +
      "HINWEIS: Die Salbe hat einen wunderbaren Waldduft und zieht Fäden -- das ist normal und gewollt.",
    anwendung:
      "Auf entzündete Hautstellen, Abszesse, eingewachsene Nägel, Splitter (zieht sie heraus!), Insektenstiche und kleine infizierte Wunden auftragen. Das Harz wirkt stark antibakteriell und desinfizierend. Auch hervorragend bei Muskelschmerzen und Verspannungen als Einreibung.",
    haltbarkeit:
      "Durch das Harz sehr lange haltbar -- 1-2 Jahre und länger. Harz ist ein natürliches Konservierungsmittel.",
    hintergrund:
      "Fichtenharz war in den Alpen und in Skandinavien eines der wichtigsten Heilmittel. Die Harzsalbe war in jeder Bauernstube zu finden. Man nannte sie auch 'Pechsalbe' (Pech = Harz). Baeume produzieren Harz, um ihre eigenen Wunden zu heilen -- und genau diese Heilkraft nutzen wir. In der finnischen Tradition heißt es: 'Der Wald heilt alles' -- Fichtenharz ist der konzentrierte Ausdruck dieser Heilkraft.",
    besonders_bei: [
      "entzuendung",
      "abszess",
      "splitter",
      "insektenstiche",
      "muskelverspannung",
    ],
    tags: [
      "#salbe",
      "#fichtenharz",
      "#wald",
      "#hexenwissen",
      "#entzündung",
    ],
  },
  {
    id: "schwarze-zugsalbe",
    name: "Schwarze Zugsalbe -- Zieht alles heraus",
    kategorie: "Salben & Balsame",
    schwierigkeit: "Fortgeschritten",
    zutaten: [
      {
        name: "Aktivkohle (medizinische Qualität, fein gemahlen)",
        menge: "2 Esslöffel (ca. 10g)",
      },
      {
        name: "Bienenwachs",
        menge: "20g",
      },
      { name: "Kokosöl", menge: "100ml" },
      { name: "Olivenöl", menge: "50ml" },
      {
        name: "Teebaumöl (ätherisch)",
        menge: "15 Tropfen",
      },
      {
        name: "Ätherisches Lavendelöl",
        menge: "10 Tropfen",
      },
      {
        name: "Optional: Ichthammol (Ichthyol, aus der Apotheke)",
        menge: "5g (für die traditionell stärkere Variante)",
      },
    ],
    zubereitung:
      "SCHRITT 1: " +
      "Kokosöl und Olivenöl im Wasserbad bei 60 Grad schmelzen und vermengen. " +
      "SCHRITT 2: " +
      "Bienenwachs in kleinen Stücken zugeben und langsam schmelzen lassen. Gut rühren. " +
      "SCHRITT 3: " +
      "Vom Wasserbad nehmen und die Aktivkohle einrühren. Gründlich vermengen -- die Kohle muss gleichmäßig verteilt sein. Die Mischung wird tiefschwarz. " +
      "SCHRITT 4: " +
      "Optional: Ichthammol einrühren (bei schweren Abszessen die stärkere Variante). " +
      "SCHRITT 5: " +
      "Auf ca. 40 Grad abkühlen lassen, dann die ätherischen Öle einrühren. " +
      "SCHRITT 6: " +
      "In dunkle Tiegel abfüllen. " +
      "HINWEIS: Aktivkohle färbt alles schwarz -- alte Kleidung tragen und Arbeitsfläche abdecken!",
    anwendung:
      "Dick auf Abszesse, entzündete Pickel, Furunkel, infizierte Insektenstiche oder Splitter auftragen. Mit einem Pflaster oder Verband abdecken. Über Nacht einwirken lassen. Die Aktivkohle und das Ichthammol 'ziehen' Eiter, Splitter und Giftstoffe aus der Haut. Täglich wechseln bis die Entzündung abklingt. Nicht auf offene, blutende Wunden auftragen.",
    haltbarkeit:
      "6-12 Monate kühl gelagert. Durch die Kohle optisch schwer zu beurteilen -- im Zweifelsfall am Geruch prüfen.",
    hintergrund:
      "Zugsalben gehören zu den ältesten aeusserlichen Heilmitteln. Bereits die Ägypter verwendeten Kohle-Pasten. Ichthammol wird aus Olschiefer gewonnen -- ein fossiles Material, das seit dem 19. Jahrhundert in der Medizin verwendet wird. Die schwarze Farbe gab der Salbe in der Volksmedizin eine besondere mystische Bedeutung -- 'schwarz zieht schwarz an', sagten die alten Heilerinnen.",
    besonders_bei: [
      "abszess",
      "furunkel",
      "splitter",
      "entzuendung",
      "insektenstiche",
    ],
    tags: [
      "#salbe",
      "#zugsalbe",
      "#aktivkohle",
      "#hexenwissen",
      "#entzündung",
    ],
  },
  {
    id: "lippenbalsam-honig",
    name: "Lippenbalsam -- Honig & Propolis",
    kategorie: "Salben & Balsame",
    schwierigkeit: "Einfach",
    zutaten: [
      {
        name: "Kokosöl (kaltgepresst, bio)",
        menge: "30ml (ca. 2 Esslöffel)",
      },
      {
        name: "Bienenwachs",
        menge: "10g",
      },
      { name: "Sheabutter (roh, unraffiniert)", menge: "10g" },
      { name: "Honig (roh, am besten Manuka)", menge: "1/2 Teelöffel" },
      { name: "Propolis-Tinktur", menge: "10 Tropfen" },
      {
        name: "Optional: Ätherisches Pfefferminzöl oder Vanilleextrakt",
        menge: "3-5 Tropfen",
      },
    ],
    zubereitung:
      "SCHRITT 1: " +
      "Kokosöl, Sheabutter und Bienenwachs im Wasserbad bei niedriger Hitze (ca. 60 Grad) langsam schmelzen. Sanft rühren, bis alles flüssig ist. " +
      "SCHRITT 2: " +
      "Vom Wasserbad nehmen. Den Honig einrühren -- er löst sich nicht vollständig, sondern bildet feine Tröpfchen. Das ist gewollt. " +
      "SCHRITT 3: " +
      "Propolis-Tinktur einrühren. " +
      "SCHRITT 4: " +
      "Auf ca. 40 Grad abkühlen lassen, dann die optionalen ätherischen Öle einrühren. " +
      "SCHRITT 5: " +
      "Sofort in kleine Tiegel oder leere Lippenstifthülsen füllen. Im Kühlschrank fest werden lassen. " +
      "TIPP: Die Menge reicht für ca. 6-8 kleine Tiegel -- wunderbar als Geschenk!",
    anwendung:
      "Bei Bedarf auf die Lippen auftragen. Besonders im Winter bei kaltem Wind und trockener Heizungsluft. Auch über Nacht als intensive Lippenpflege. Propolis schützt vor Lippenherpesausbrüchen.",
    haltbarkeit:
      "6-12 Monate. Durch Propolis und Honig natürlich konserviert.",
    hintergrund:
      "Propolis ist das 'Antibiotikum des Bienenvolkes' -- die Bienen überziehen damit den Eingang ihres Stocks und machen ihn steril. Es wirkt antibakteriell, antiviral und antimykotisch. Honig wurde schon im alten Ägypten auf Wunden aufgetragen. Die Kombination aus Bienenprodukten für die Lippen ist eine wunderbare Symbiose zwischen Mensch und Biene.",
    besonders_bei: [
      "trockene_lippen",
      "lippenherpes",
      "winterpflege",
      "lippenpflege",
    ],
    tags: [
      "#salbe",
      "#lippenbalsam",
      "#propolis",
      "#hexenwissen",
      "#biene",
    ],
  },
  {
    id: "tigerbalsam-alternative",
    name: "Kräuterbalsam -- Natürliche Tiger-Balsam-Alternative",
    kategorie: "Salben & Balsame",
    schwierigkeit: "Mittel",
    zutaten: [
      { name: "Kokosöl", menge: "50ml" },
      { name: "Bienenwachs", menge: "15g" },
      { name: "Olivenöl", menge: "30ml" },
      {
        name: "Ätherisches Pfefferminzöl (Menthol)",
        menge: "20 Tropfen",
      },
      { name: "Ätherisches Eukalyptusöl", menge: "15 Tropfen" },
      {
        name: "Ätherisches Kampferöl (Campher)",
        menge: "10 Tropfen",
      },
      { name: "Ätherisches Rosmarinöl", menge: "10 Tropfen" },
      { name: "Ätherisches Nelkenöl", menge: "5 Tropfen" },
      { name: "Ätherisches Zimtöl", menge: "3 Tropfen" },
      {
        name: "Optional: Cayennepfeffer-Ölauszug",
        menge: "1 Teelöffel (für extra Wärme)",
      },
    ],
    zubereitung:
      "SCHRITT 1: " +
      "Kokosöl, Olivenöl und Bienenwachs im Wasserbad bei 60-65 Grad schmelzen. Gut verrühren. " +
      "SCHRITT 2: " +
      "Optional den Cayennepfeffer-Ölauszug einrühren (Vorsicht, macht die Salbe sehr wärmend!). " +
      "SCHRITT 3: " +
      "Vom Herd nehmen und auf ca. 40 Grad abkühlen lassen. " +
      "SCHRITT 4: " +
      "Alle ätherischen Öle nacheinander einrühren. Gut vermengen. " +
      "SCHRITT 5: " +
      "In Tiegel füllen. Am besten Metalldosen oder Glas verwenden (die ätherischen Öle sind intensiv). " +
      "VORSICHT: Stark riechendes Rezept! Fenster öffnen. Nicht an die Augen fassen während der Herstellung. Handschuhe empfohlen.",
    anwendung:
      "Auf Schlafen bei Kopfschmerzen sanft einmassieren. Auf Brust und Rücken bei Erkältung und Husten einreiben. Auf schmerzende Muskeln und Gelenke auftragen. Nicht auf offene Wunden oder Schleimhäute auftragen. Nicht bei Säuglingen und Kleinkindern anwenden (Kampfer und Menthol!). Nach der Anwendung Hände gründlich waschen.",
    haltbarkeit: "12-18 Monate. Die ätherischen Öle konservieren natürlich.",
    hintergrund:
      "Tiger Balm wurde um 1870 vom burmesischen Kräuter-Apotheker Aw Chu Kin entwickelt. Die Grundprinzipien -- wärmende und kühlende Kräuterextrakte kombiniert -- finden sich aber in vielen Traditionen weltweit. In der europäischen Volksmedizin gab es ähnliche 'Einreibemittel' mit Kampfer und Menthol. Dieses Rezept verbindet asiatische und europäische Kräutertradition.",
    besonders_bei: [
      "kopfschmerzen",
      "muskelverspannung",
      "erkaeltung",
      "gelenkschmerzen",
      "husten",
    ],
    tags: [
      "#salbe",
      "#balsam",
      "#schmerzen",
      "#hexenwissen",
      "#ätherische_öle",
    ],
  },
  {
    id: "wundsalbe-universal",
    name: "Wundsalbe -- Die Hausapotheken-Grundlage",
    kategorie: "Salben & Balsame",
    schwierigkeit: "Mittel",
    zutaten: [
      {
        name: "Ringelblumenöl (selbst hergestellt, siehe Ringelblumensalbe-Rezept)",
        menge: "100ml",
      },
      { name: "Johanniskrautöl (Rotöl)", menge: "100ml" },
      { name: "Bienenwachs", menge: "25g" },
      { name: "Lanolin (Wollwachs)", menge: "10g" },
      { name: "Propolis-Tinktur", menge: "20 Tropfen" },
      { name: "Ätherisches Lavendelöl", menge: "10 Tropfen" },
      { name: "Ätherisches Teebaumöl", menge: "10 Tropfen" },
      { name: "Vitamin-E-Öl", menge: "10 Tropfen" },
    ],
    zubereitung:
      "SCHRITT 1: " +
      "Ringelblumenöl und Johanniskrautöl mischen. Im Wasserbad bei 60 Grad erwärmen. " +
      "SCHRITT 2: " +
      "Bienenwachs und Lanolin zugeben. Langsam schmelzen lassen und verrühren, bis alles homogen ist. Lanolin braucht etwas länger -- Geduld. " +
      "SCHRITT 3: " +
      "Konsistenztest auf kaltem Teller. Die Salbe soll weich und geschmeidig sein, aber nicht zu flüssig. " +
      "SCHRITT 4: " +
      "Auf ca. 40 Grad abkühlen lassen. Propolis-Tinktur, ätherische Öle und Vitamin E einrühren. " +
      "SCHRITT 5: " +
      "In saubere Tiegel füllen. Diese Salbe ist die Basis-Salbe für die Hausapotheke. " +
      "HINWEIS: Lanolin kann bei Wollallergie Reaktionen auslösen. Im Zweifelsfall weglassen und durch etwas mehr Bienenwachs ersetzen.",
    anwendung:
      "Auf alle Arten von kleinen Verletzungen: Schürfrunden, Kratzer, leichte Schnitte (nicht tiefe Wunden), leichte Verbrennungen, rissige Haut, aufgeschürfte Knie bei Kindern. Die Kombination aus Ringelblume (wundheilend), Johanniskraut (schmerzlindernd, nervenstärkend), Propolis (antibakteriell) und Lavendel (beruhigend, heilungsfördernd) macht diese Salbe zum Allrounder.",
    haltbarkeit:
      "8-12 Monate kühl und dunkel gelagert. Durch Propolis und ätherische Öle gut konserviert.",
    hintergrund:
      "Diese Salbe vereint die drei großen Wundheilpflanzen der europäischen Tradition: Ringelblume, Johanniskraut und Lavendel. Ergänzt durch Propolis -- das Heilmittel der Bienen. Lanolin (Wollwachs) wurde schon von den Römern als Salbengrundlage verwendet -- es dringt besonders tief in die Haut ein und transportiert die Wirkstoffe. In jeder Bauernstube stand früher ein Tiegelchen mit 'Heilsalbe' auf dem Küchenbord.",
    besonders_bei: [
      "wunden",
      "schuerfrunden",
      "verbrennung",
      "rissige_haut",
      "kinderverletzungen",
    ],
    tags: [
      "#salbe",
      "#wundheilung",
      "#hausapotheke",
      "#hexenwissen",
      "#universal",
    ],
  },
];

// =====================================================================
// TINKTUREN-REZEPTE -- Alkoholische Pflanzenextrakte
// =====================================================================

export const TINKTUREN_REZEPTE = [
  {
    id: "tinktur-grundrezept",
    name: "Tinktur herstellen -- Das Grundrezept",
    kategorie: "Tinkturen",
    schwierigkeit: "Einfach",
    zutaten: [
      {
        name: "Frische oder getrocknete Kräuter nach Wahl",
        menge: "Frisch: Glas zu 2/3 füllen. Getrocknet: Glas zu 1/3 füllen",
      },
      {
        name: "Alkohol: Vodka (mind. 40%) oder Kornbrand (38-40%) oder Weingeist (70%)",
        menge: "So viel, dass die Kräuter vollständig bedeckt sind (ca. 200-500ml je nach Glasgröße)",
      },
    ],
    zubereitung:
      "SCHRITT 1 -- Glas vorbereiten: " +
      "Ein sauberes Schraubglas (am besten Weckglas oder Einmachglas) mit kochendem Wasser ausspülen und trocknen lassen. " +
      "SCHRITT 2 -- Kräuter vorbereiten: " +
      "Frische Kräuter grob zerkleinern (nicht waschen, wenn möglich -- Morgentau ist in Ordnung). Getrocknete Kräuter können direkt verwendet werden. Das Zerkleinern vergrößert die Oberfläche und verbessert die Extraktion. " +
      "SCHRITT 3 -- Ansetzen: " +
      "Kräuter ins Glas füllen. Frische Kräuter: Glas zu etwa 2/3 füllen. Getrocknete Kräuter: Glas zu 1/3 füllen (sie quellen auf). Mit Alkohol vollständig übergießen -- alle Pflanzenteile müssen bedeckt sein, sonst bildet sich Schimmel. " +
      "SCHRITT 4 -- Mazeration: " +
      "Glas verschließen und an einen dunklen, zimmerwarmen Ort stellen. Täglich einmal sanft schütteln, damit sich die Wirkstoffe gleichmäßig lösen. Mindestens 3 Wochen, besser 4-6 Wochen ziehen lassen. Wurzeln und Rinden brauchen länger (6-8 Wochen). " +
      "SCHRITT 5 -- Abseihen: " +
      "Die Tinktur durch ein feines Mulltuch oder einen Kaffeefilter abseihen. Kräuterreste gut ausdrücken. " +
      "SCHRITT 6 -- Abfüllen: " +
      "In dunkle Tropfflaschen (Braunglas) füllen. Mit Name, Pflanze, Alkoholgehalt und Datum beschriften. " +
      "DOSIERUNG (allgemein): 20-30 Tropfen 2-3x täglich in etwas Wasser oder Tee.",
    anwendung:
      "Je nach verwendeter Pflanze. Tinkturen sind konzentrierter als Tees und eignen sich besonders für Pflanzen, deren Wirkstoffe sich besser in Alkohol als in Wasser lösen (z.B. Harze, ätherische Öle, bestimmte Alkaloide). Für Kinder und Alkoholempfindliche: Die Tropfen in heißes Wasser geben -- der Alkohol verdampft größtenteils.",
    haltbarkeit:
      "Tinkturen sind extrem lange haltbar -- bei richtiger Lagerung (dunkel, kühl) 3-5 Jahre und länger. Der Alkohol konserviert zuverlässig.",
    hintergrund:
      "Das Herstellen von Tinkturen gehört zu den Grundfertigkeiten der Kräutermedizin. Schon Paracelsus (1493-1541) entwickelte unzählige Tinkturen. Das Wort 'Tinktur' kommt vom lateinischen 'tingere' (färben) -- weil die Pflanzen den Alkohol färben. In der Volksmedizin wurden Tinkturen oft 'Tropfen' oder 'Geist' genannt (z.B. Melissengeist, Schwedenbitter). Die beste Zeit zum Ansetzen ist bei zunehmendem Mond.",
    besonders_bei: ["grundrezept", "basis", "kraeuterkunde"],
    tags: [
      "#tinktur",
      "#grundrezept",
      "#alkohol",
      "#hexenwissen",
      "#extraktion",
    ],
  },
  {
    id: "johanniskraut-tinktur",
    name: "Johanniskraut-Tinktur -- Licht für die Seele",
    kategorie: "Tinkturen",
    schwierigkeit: "Einfach",
    zutaten: [
      {
        name: "Frische Johanniskrautblüten und -knospen",
        menge: "100g (etwa 2 große Handvoll)",
      },
      { name: "Kornbrand oder Vodka (40%)", menge: "300ml" },
    ],
    zubereitung:
      "SCHRITT 1 -- Ernte: " +
      "Johanniskraut um den Johannistag (24. Juni) ernten, wenn es in voller Blüte steht. Die oberen 10-15cm mit Blüten und Knospen abschneiden. Am besten um die Mittagszeit an einem sonnigen Tag. Erkennungstest: Blüten zwischen den Fingern zerreiben -- sie müssen rot färben (Hypericin). " +
      "SCHRITT 2 -- Ansetzen: " +
      "Blüten und Knospen grob zerkleinern und in ein Glas füllen (ca. 2/3 voll). Mit dem Alkohol vollständig bedecken. " +
      "SCHRITT 3 -- Ausziehen: " +
      "Glas verschließen. An einen dunklen Ort stellen (bei der Tinktur, anders als beim Rotöl, kein Sonnenlicht!). 4-6 Wochen ziehen lassen. Täglich sanft schütteln. Die Tinktur färbt sich dunkelrot. " +
      "SCHRITT 4 -- Abseihen und abfüllen: " +
      "Durch Mulltuch abseihen, in dunkle Tropfflaschen füllen. Beschriften.",
    anwendung:
      "20-30 Tropfen 2-3x täglich in etwas Wasser oder Tee. Bei depressiven Verstimmungen, Winterdepression, nervöser Unruhe, Angst und Stimmungsschwankungen. Die Wirkung baut sich über 2-3 Wochen auf -- Geduld ist wichtig. " +
      "ACHTUNG: Johanniskraut erhöht die Lichtempfindlichkeit der Haut. Es kann die Wirkung der Pille, von Blutverdünnern und anderen Medikamenten beeinflussen. Im Zweifelsfall ärztlichen Rat einholen.",
    haltbarkeit: "3-5 Jahre in dunklen Flaschen.",
    hintergrund:
      "Johanniskraut (Hypericum perforatum) ist eine der am besten erforschten Heilpflanzen bei leichten bis mittelschweren Depressionen. Die Wirksamkeit ist in zahlreichen Studien belegt. Der Wirkstoff Hypericin -- jener rote Farbstoff -- hemmt die Wiederaufnahme von Serotonin, Noradrenalin und Dopamin, ähnlich wie synthetische Antidepressiva, aber sanfter. In der Volksmedizin galt: 'Johanniskraut vertreibt die bösen Geister' -- heute würden wir sagen: es vertreibt die innere Dunkelheit.",
    besonders_bei: [
      "depression",
      "winterdepression",
      "angst",
      "nervositaet",
      "stimmungstief",
    ],
    tags: [
      "#tinktur",
      "#johanniskraut",
      "#depression",
      "#hexenwissen",
      "#seele",
    ],
  },
  {
    id: "baldrian-tinktur",
    name: "Baldrian-Tinktur -- Der natürliche Schlafbringer",
    kategorie: "Tinkturen",
    schwierigkeit: "Einfach",
    zutaten: [
      {
        name: "Baldrianwurzel (frisch oder getrocknet)",
        menge: "Frisch: 100g fein geschnitten. Getrocknet: 50g",
      },
      { name: "Weingeist (70%) oder Vodka (40%)", menge: "300ml" },
    ],
    zubereitung:
      "SCHRITT 1 -- Wurzel vorbereiten: " +
      "Frische Baldrianwurzel gründlich waschen (sie riecht intensiv -- manche sagen 'wie alte Socken', aber dieser Geruch zeigt die Wirksamkeit an!). In dünne Scheiben schneiden oder fein hacken. Getrocknete Wurzel grob zerkleinern. " +
      "SCHRITT 2 -- Ansetzen: " +
      "Wurzelstücke ins Glas füllen (frisch: 2/3 voll, getrocknet: 1/3 voll). Mit Alkohol vollständig bedecken. " +
      "SCHRITT 3 -- Mazeration: " +
      "6-8 Wochen an einem dunklen Ort ziehen lassen. Täglich schütteln. Wurzeln brauchen länger als Blätter und Blüten. " +
      "SCHRITT 4 -- Abseihen und abfüllen: " +
      "Gründlich abseihen, in Tropfflaschen füllen. Der Geruch ist streng, aber das ist völlig normal. " +
      "TIPP: Der höhere Alkoholgehalt (70%) extrahiert die Baldriansäuren besser. Wenn nur Vodka verfügbar, die Mazerationszeit auf 8-10 Wochen verlängern.",
    anwendung:
      "30-50 Tropfen 30 Minuten vor dem Schlafengehen in warmem Wasser einnehmen. Bei starker Unruhe auch 2-3x täglich 20 Tropfen. Baldrian wirkt kumulativ -- die volle Wirkung entfaltet sich nach etwa 2 Wochen regelmäßiger Einnahme. Nicht zusammen mit Schlafmitteln oder Beruhigungsmitteln einnehmen. Kann die Reaktionsfähigkeit beeinflussen.",
    haltbarkeit: "3-5 Jahre.",
    hintergrund:
      "Baldrian (Valeriana officinalis) wird seit der Antike als Beruhigungsmittel verwendet. Der Name kommt vom lateinischen 'valere' (gesund sein, stark sein). Im Mittelalter galt Baldrian als Schutzkraut gegen böse Mächte -- man legte ihn unter das Kopfkissen. Katzen sind vernarrt in den Geruch (Katzen-Baldrian), weil die Valeratene den Katzenpheromonen ähneln. Die Wirksamkeit bei Schlafstörungen ist klinisch belegt.",
    besonders_bei: [
      "schlaflosigkeit",
      "einschlafprobleme",
      "nervositaet",
      "unruhe",
      "stress",
    ],
    tags: [
      "#tinktur",
      "#baldrian",
      "#schlaf",
      "#hexenwissen",
      "#beruhigung",
    ],
  },
  {
    id: "propolis-tinktur",
    name: "Propolis-Tinktur -- Das Antibiotikum der Bienen",
    kategorie: "Tinkturen",
    schwierigkeit: "Einfach",
    zutaten: [
      {
        name: "Roh-Propolis vom Imker (möglichst frisch und sauber)",
        menge: "30-50g",
      },
      { name: "Weingeist (70%) oder hochprozentiger Alkohol", menge: "200ml" },
    ],
    zubereitung:
      "SCHRITT 1 -- Propolis vorbereiten: " +
      "Roh-Propolis über Nacht in den Gefrierschrank legen. Das gefrorene Propolis lässt sich viel leichter zerkleinern. Am nächsten Tag mit einem Mörser oder einer Reibe fein zerkleinern. Je feiner, desto besser die Extraktion. " +
      "SCHRITT 2 -- Ansetzen: " +
      "Das zerkleinerte Propolis in ein Glas geben und mit dem Alkohol übergießen. Propolis löst sich nur in Alkohol (nicht in Wasser!), daher ist hier hoher Alkoholgehalt wichtig. " +
      "SCHRITT 3 -- Mazeration: " +
      "Mindestens 4 Wochen, besser 6-8 Wochen an einem dunklen Ort ziehen lassen. TÄGLICH kräftig schütteln -- Propolis braucht mechanische Hilfe, um sich zu lösen. Die Tinktur wird goldbraun bis dunkelbraun. " +
      "SCHRITT 4 -- Abseihen: " +
      "Durch einen feinen Kaffeefilter abseihen (Propolis enthält immer kleine Wachsreste). In dunkle Tropfflaschen füllen. " +
      "HINWEIS: Propolis färbt ALLES braun -- Hände, Tücher, Arbeitsflächen. Handschuhe tragen!",
    anwendung:
      "Innerlich: 10-20 Tropfen 2-3x täglich in Wasser oder auf einem Stück Brot bei Erkältung, Halsentzündung, Grippe. " +
      "Äußerlich: Direkt auf kleine Wunden, Herpesbläschen, Pickel tupfen (desinfiziert und heilt). " +
      "Gurgeln: 20 Tropfen in ein Glas warmes Wasser bei Halsentzündung. " +
      "Vorbeugend: In der Erkältungssaison täglich 10 Tropfen.",
    haltbarkeit:
      "Praktisch unbegrenzt haltbar (5-10 Jahre und länger). Propolis ist eines der natürlichsten Konservierungsmittel.",
    hintergrund:
      "Propolis ist das Kittharz der Bienen -- sie sammeln Baumharze, verarbeiten sie mit körpereigenen Enzymen und überziehen damit den Bienenstock. Im Inneren eines Bienenstocks herrschen trotz 35 Grad und hoher Feuchtigkeit nahezu sterile Verhältnisse -- dank Propolis. Es wirkt gegen über 200 Bakterienstämme, viele Viren und Pilze. Die alten Ägypter verwendeten Propolis zum Einbalsamieren. Im Burenkrieg wurde es zur Wundbehandlung eingesetzt. Es enthält über 300 Wirkstoffe -- Flavonoide, Phenolsäuren, Terpene und mehr.",
    besonders_bei: [
      "erkaeltung",
      "halsentzuendung",
      "wunden",
      "immunsystem",
      "herpes",
    ],
    tags: [
      "#tinktur",
      "#propolis",
      "#biene",
      "#hexenwissen",
      "#antibiotikum",
    ],
  },
  {
    id: "baerlauch-tinktur",
    name: "Bärlauch-Tinktur -- Frühlingskur & Entgiftung",
    kategorie: "Tinkturen",
    schwierigkeit: "Einfach",
    zutaten: [
      {
        name: "Frische Bärlauchblätter",
        menge: "150g (etwa 3 große Handvoll)",
      },
      { name: "Vodka oder Kornbrand (40%)", menge: "300ml" },
    ],
    zubereitung:
      "SCHRITT 1 -- Ernte: " +
      "Bärlauch im Frühjahr (März bis Mai) an einem schattigen Waldstandort sammeln. NUR sammeln, wenn man ihn sicher erkennt! Verwechslungsgefahr mit Maiglöckchen (giftig!) und Herbstzeitlose (tödlich!). Erkennungsmerkmale: Jedes Blatt hat einen eigenen Stiel, die Blätter riechen beim Zerreiben intensiv nach Knoblauch. Im Zweifelsfall: Nicht sammeln. " +
      "SCHRITT 2 -- Vorbereitung: " +
      "Die frischen Blätter grob schneiden oder hacken. In ein sauberes Glas füllen (ca. 2/3 voll). " +
      "SCHRITT 3 -- Ansetzen: " +
      "Mit Alkohol vollständig bedecken. Verschließen. " +
      "SCHRITT 4 -- Mazeration: " +
      "3-4 Wochen an einem dunklen Ort ziehen lassen. Täglich schütteln. Die Tinktur wird grünlich und riecht nach Knoblauch. " +
      "SCHRITT 5 -- Abseihen und abfüllen: " +
      "Abseihen, in Tropfflaschen füllen. Beschriften.",
    anwendung:
      "20-30 Tropfen 2-3x täglich in Wasser. Als Frühjahrskur über 4-6 Wochen. Bärlauch wirkt blutdrucksenkend, antibakteriell, verdauungsfördernd und entgiftend. Besonders wirksam zur Schwermetallausleitung (bindet Quecksilber und andere Schwermetalle). Oft in Kombination mit Koriander und Chlorella als Entgiftungsprotokoll nach Dr. Klinghardt.",
    haltbarkeit: "2-3 Jahre.",
    hintergrund:
      "Bärlauch (Allium ursinum) -- der 'Knoblauch des Waldes' -- trägt seinen Namen, weil die Bären ihn nach dem Winterschlaf als erstes fressen, um sich zu reinigen und zu stärken. In der Volksmedizin galt er als kraftvolles Frühjahrs-Reinigungsmittel. Er enthält schwefelhaltige Verbindungen (Allicin), die ähnlich wie Knoblauch wirken, aber sanfter und magenfreundlicher. Karl der Große ordnete an, dass Bärlauch in jedem Klostergarten angebaut werden sollte.",
    besonders_bei: [
      "entgiftung",
      "schwermetallausleitung",
      "blutdruck",
      "fruehjahrskur",
      "verdauung",
    ],
    tags: [
      "#tinktur",
      "#bärlauch",
      "#entgiftung",
      "#hexenwissen",
      "#frühling",
    ],
  },
  {
    id: "echinacea-tinktur",
    name: "Echinacea-Tinktur -- Immunsystem-Booster",
    kategorie: "Tinkturen",
    schwierigkeit: "Einfach",
    zutaten: [
      {
        name: "Frische Echinacea purpurea Wurzel und/oder Kraut mit Blüten",
        menge: "100g frisch (oder 50g getrocknet)",
      },
      { name: "Weingeist (60-70%) oder Vodka (40%)", menge: "300ml" },
    ],
    zubereitung:
      "SCHRITT 1 -- Ernte: " +
      "Die Wurzeln im Herbst (September-Oktober) nach der Blüte ernten -- dann ist die Wirkstoffkonzentration am höchsten. Die Pflanze sollte mindestens 3 Jahre alt sein. Kraut und Blüten können während der Blütezeit im Sommer geerntet werden. " +
      "SCHRITT 2 -- Vorbereitung: " +
      "Wurzeln gründlich waschen und in dünne Scheiben schneiden. Kraut und Blüten grob zerkleinern. Test: Auf ein Stück Wurzel beißen -- es sollte auf der Zunge kribbeln und prickeln (das sind die immunstimulierenden Alkylamide). " +
      "SCHRITT 3 -- Ansetzen: " +
      "Pflanzenteile ins Glas füllen (2/3 voll bei frischem Material). Mit Alkohol vollständig bedecken. Für die stärkste Tinktur Wurzel UND Kraut zusammen verwenden. " +
      "SCHRITT 4 -- Mazeration: " +
      "6-8 Wochen an einem dunklen Ort ziehen lassen. Täglich schütteln. " +
      "SCHRITT 5 -- Abseihen und abfüllen: " +
      "Abseihen, in dunkle Tropfflaschen füllen.",
    anwendung:
      "Vorbeugend in der Erkältungssaison: 20 Tropfen 2x täglich. " +
      "Bei akutem Infekt: In den ersten 3 Tagen alle 2-3 Stunden 30 Tropfen in Wasser (Stoß-Therapie). Dann auf 3x täglich reduzieren. " +
      "Nicht länger als 8 Wochen am Stück einnehmen, dann 2 Wochen Pause. Bei Autoimmunerkrankungen nicht anwenden (stimuliert das Immunsystem zusätzlich!).",
    haltbarkeit: "3-5 Jahre.",
    hintergrund:
      "Echinacea (Sonnenhut) wurde von den Prärieindianern Nordamerikas seit Jahrhunderten verwendet -- gegen Schlangenbisse, Zahnschmerzen und Infektionen. Die Cheyenne kauten die Wurzeln bei Halsentzündung. Ende des 19. Jahrhunderts brachte der amerikanische Arzt H.C.F. Meyer sie nach Europa. Die immunstimulierende Wirkung ist in vielen Studien belegt: Echinacea aktiviert Makrophagen und T-Zellen und erhöht die Interferon-Produktion. Die wichtigsten Wirkstoffe sind Alkylamide, Polysaccharide und Chicorinsäure.",
    besonders_bei: [
      "immunsystem",
      "erkaeltung",
      "grippe",
      "infektabwehr",
      "vorbeugung",
    ],
    tags: [
      "#tinktur",
      "#echinacea",
      "#immunsystem",
      "#hexenwissen",
      "#sonnenhut",
    ],
  },
];

// =====================================================================
// ALCHEMIE -- Spagyrik, Destillation & alchemistische Praxis
// =====================================================================

export const ALCHEMIE = [
  {
    id: "spagyrik-grundlagen",
    name: "Spagyrik -- Die alchemische Heilkunst",
    kategorie: "Alchemie",
    beschreibung:
      "Spagyrik ist die alchemische Aufbereitungsmethode von Heilpflanzen. Das Wort kommt aus dem Griechischen: spao (trennen) und ageiro (vereinen). Der große Alchemist und Arzt Paracelsus (1493-1541) prägte den Begriff und die Methode. Das Grundprinzip: 'Solve et Coagula' -- löse und verbinde. Die Pflanze wird in ihre drei Grundprinzipien zerlegt, diese werden einzeln gereinigt und dann wieder vereint. Das Ergebnis ist eine 'erhöhte' Heilessenz -- die Pflanze in ihrer reinsten, wirksamsten Form.",
    abschnitte: [
      {
        titel: "Die drei Prinzipien -- Sal, Mercurius, Sulphur",
        text:
          "Jede Substanz in der Natur -- ob Pflanze, Mineral oder Metall -- besteht nach der alchemischen Lehre aus drei Prinzipien: " +
          "SAL (der Körper): Repräsentiert das Feste, Materielle, die mineralische Grundlage. In der Pflanze sind das die Mineralsalze und Spurenelemente. Sal gibt Form und Struktur. Element: Erde. Nach der Veraschung bleibt Sal übrig. " +
          "MERCURIUS (der Geist): Repräsentiert das Flüchtige, Bewegliche, den Alkohol. In der Pflanze entsteht Mercurius durch Gärung -- der Pflanzengeist löst sich im Alkohol. Mercurius vermittelt zwischen Körper und Seele. Element: Wasser und Luft. " +
          "SULPHUR (die Seele): Repräsentiert das Ölige, Aromatische, die ätherischen Öle. In der Pflanze sind es die Duftstoffe, Farbstoffe und fetten Öle. Sulphur trägt die individuelle 'Signatur' und Heilkraft der Pflanze. Element: Feuer. " +
          "Diese drei Prinzipien sind nicht nur chemische Bestandteile, sondern auch spirituelle Qualitäten. Die Vereinigung aller drei ergibt ein Heilmittel, das auf Körper, Geist und Seele gleichzeitig wirkt.",
      },
      {
        titel: "Herstellung einer spagyrischen Essenz -- Der Königsweg",
        text:
          "SCHRITT 1 -- Vergärung (Fermentation): " +
          "Die frische Pflanze wird zerkleinert und in ein großes Glasgefäß gegeben. Mit destilliertem Wasser auffüllen (Pflanze sollte vollständig bedeckt sein). Optional: Eine Messerspitze Backhefe hinzugeben, um die Gärung zu beschleunigen. Das Gefäß mit einem Gäraufsatz (kein luftdichter Verschluss -- die Gärung produziert CO2!) verschließen. Bei Zimmertemperatur (18-22 Grad) 2-4 Wochen gären lassen. Es bilden sich Blasen -- der Pflanzengeist (Alkohol/Mercurius) entsteht. Die Gärung ist abgeschlossen, wenn keine Blasen mehr aufsteigen. " +
          "SCHRITT 2 -- Destillation: " +
          "Der vergorene Pflanzenbrei wird destilliert. Wer keinen Destillierapparat hat, kann den vergorenen Brei auch im Wasserbad bei 78 Grad (dem Siedepunkt von Alkohol) langsam eindampfen und den Dampf über einen Kühler auffangen. Das Destillat enthält den Mercurius (Alkohol) und den Sulphur (ätherische Öle). Dieses Destillat sicher aufbewahren. " +
          "SCHRITT 3 -- Veraschung (Kalzination): " +
          "Der Rückstand aus der Destillation (der 'Caput mortuum' -- der tote Kopf) wird getrocknet und dann in einem feuerfesten Gefäß bei hoher Temperatur verascht. Im Backofen bei maximaler Temperatur (250 Grad) stundenlang erhitzen, oder besser: in einem Ofen oder Grilltopf bei 500-600 Grad. Die Asche wird weißgrau. Dieser Vorgang wird mehrfach wiederholt: Die Asche wird mit destilliertem Wasser übergossen, getrocknet und erneut verascht, bis sie reinweiß ist. Diese weiße Asche enthält die Mineralsalze (Sal). " +
          "SCHRITT 4 -- Vereinigung (Conjunctio): " +
          "Die gereinigte Asche (Sal) wird in das Destillat (Mercurius + Sulphur) gegeben. Die drei Prinzipien vereinen sich wieder. Die Mischung wird verschlossen und bei Zimmertemperatur mindestens 1 Monat reifen gelassen. Man nennt diesen Prozess auch 'philosophische Hochzeit'. " +
          "Das Ergebnis ist eine spagyrische Essenz -- ein Heilmittel, das die Pflanze in ihrer reinsten, 'erhöhten' Form enthält.",
      },
      {
        titel: "Spagyrische Essenzen selbst herstellen -- Die vereinfachte Methode",
        text:
          "Für den Hausgebrauch gibt es eine vereinfachte Methode, die ohne Destillierapparat auskommt: " +
          "1. Die frische Pflanze zerkleinern und mit 40%-igem Alkohol (Vodka) übergießen. 4 Wochen mazerieren (wie bei einer Tinktur). Abseihen -- das ist der Mercurius+Sulphur-Auszug. " +
          "2. Den Pflanzenrückstand trocknen und in einem alten Topf auf dem Herd oder im Backofen bei maximaler Hitze veraschen. Die Asche mehrfach mit Wasser waschen und erneut veraschen, bis sie hell ist. Das ist der Sal-Anteil. " +
          "3. Die Asche in den alkoholischen Auszug einrühren und 2-4 Wochen reifen lassen. Abseihen. " +
          "Das Ergebnis ist eine vereinfachte spagyrische Essenz. Sie ist nicht so raffiniert wie bei der vollen Methode, enthält aber dennoch alle drei Prinzipien. " +
          "DOSIERUNG: 5-10 Tropfen 2-3x täglich unter die Zunge.",
      },
    ],
    tags: [
      "#alchemie",
      "#spagyrik",
      "#destillation",
      "#sal",
      "#mercurius",
      "#sulphur",
      "#paracelsus",
    ],
  },
  {
    id: "pflanzenveraschung",
    name: "Pflanzenveraschung -- Sal gewinnen",
    kategorie: "Alchemie",
    beschreibung:
      "Die Veraschung (Kalzination) ist einer der zentralen Prozesse der Alchemie. Durch kontrolliertes Verbrennen wird die organische Materie zerstört und zurück bleiben die anorganischen Mineralsalze -- das Sal, der 'Körper' der Pflanze. Diese Salze sind wasserlöslich und enthalten die gesamte mineralische Information der Pflanze in konzentrierter, hochverfügbarer Form. Veraschung ist nicht Zerstörung, sondern Reinigung und Transformation.",
    abschnitte: [
      {
        titel: "Was ist Sal?",
        text:
          "Sal ist das mineralische Skelett einer Pflanze. Während die organischen Bestandteile (Kohlenstoff, Wasserstoff, Stickstoff) im Feuer verbrennen, bleiben die anorganischen Salze zurück: Kalium, Calcium, Magnesium, Phosphor, Eisen, Silicium und viele Spurenelemente. Diese Salze tragen die 'körperliche Signatur' der Pflanze. Brennnessel-Asche ist z.B. besonders reich an Eisen und Kieselsäure. Schachtelhalm-Asche enthält extrem viel Silicium. Löwenzahn-Asche ist reich an Kalium.",
      },
      {
        titel: "Die Praxis der Veraschung -- Schritt für Schritt",
        text:
          "VORBEREITUNG: " +
          "1. Pflanzenmaterial sammeln und trocknen (je trockener, desto besser verbrennt es). " +
          "2. Ein feuerfestes Gefäß bereitstellen: Tonschale, Keramiktiegel, gusseiserne Pfanne oder Edelstahltopf. KEIN Aluminium! " +
          "3. Den Vorgang im Freien oder bei guter Belüftung durchführen (Rauchentwicklung!). " +
          "ERSTE VERBRENNUNG: " +
          "4. Das getrocknete Pflanzenmaterial in das Gefäß geben und anzünden. Es verbrennt mit Flamme und wird zu schwarzer Kohle. Die schwarze Farbe zeigt, dass noch Kohlenstoff vorhanden ist. " +
          "5. Die schwarze Kohle mit einem Mörser fein zerreiben. " +
          "KALZINATION (Weissbrennen): " +
          "6. Die zerriebene Kohle zurück ins feuerfeste Gefäß geben. " +
          "7. Bei hoher Temperatur (500-600 Grad, z.B. im Grillofen oder Schmelzofen) mehrere Stunden glühen, bis die Asche grau bis weiß wird. Im Backofen bei 250 Grad dauert es entsprechend länger (8-12 Stunden). " +
          "8. Diesen Vorgang wiederholen: Asche mit destilliertem Wasser anfeuchten, trocknen, erneut glühen. Mit jeder Wiederholung wird die Asche heller. " +
          "9. Ziel: Eine möglichst weiße, feine Asche. Sie schmeckt salzig-alkalisch auf der Zunge. " +
          "AUFBEWAHRUNG: " +
          "10. Die fertige Asche in einem luftdicht verschlossenen Glas aufbewahren. Beschriften mit Pflanze und Datum. Sal ist hygroskopisch (zieht Feuchtigkeit an) -- daher immer gut verschlossen halten.",
      },
      {
        titel: "Anwendung der Pflanzen-Asche",
        text:
          "1. In der Spagyrik: Als Sal-Komponente für spagyrische Essenzen (siehe Spagyrik-Grundlagen). " +
          "2. Als Mineralsupplement: Eine Messerspitze Pflanzen-Asche in Wasser auflösen und trinken. Die Mineralien sind in ionischer, hoch bioverfügbarer Form. " +
          "3. Zur Laugenbereitung: Pflanzen-Asche mit Wasser versetzen ergibt eine natürliche Lauge (Pottasche/Kaliumcarbonat). Diese wurde historisch zum Wäschewaschen, Seifenherstellen und in der Glasherstellung verwendet. " +
          "4. Im Garten: Pflanzen-Asche ist ein hervorragender Dünger, reich an Kalium und Spurenelementen.",
      },
    ],
    tags: [
      "#alchemie",
      "#veraschung",
      "#kalzination",
      "#sal",
      "#mineralsalze",
      "#hexenwissen",
    ],
  },
  {
    id: "gold-ash-powder",
    name: "Aurum Potabile & Gold Ash -- Das trinkbare Gold",
    kategorie: "Alchemie",
    beschreibung:
      "In der Alchemie gilt Gold als das vollkommenste Metall -- der Ausdruck der Sonne im Mineralreich. Aurum Potabile (trinkbares Gold) ist eines der höchsten Ziele der alchemischen Kunst. Es repräsentiert die Vereinigung von Materie und Geist, die Transformation des Groben ins Feine. Die alten Alchemisten glaubten, dass Gold in trinkbarer Form Unsterblichkeit verleihen könne -- oder zumindest vollkommene Gesundheit.",
    abschnitte: [
      {
        titel: "Geschichte des trinkbaren Goldes",
        text:
          "Die Idee des trinkbaren Goldes zieht sich durch alle großen alchemischen Traditionen: " +
          "In ÄGYPTEN wurde Gold als 'Fleisch der Götter' betrachtet. Die Pharaonen trugen nicht nur Gold -- sie nahmen es auch zu sich. " +
          "In CHINA entwickelten taoistische Alchemisten das 'Jin Dan' (Goldene Pille), ein Elixier auf Goldbasis für Langlebigkeit. " +
          "In INDIEN kennt das Ayurveda 'Swarna Bhasma' -- kalziniertes Gold als Heilmittel für Herz, Geist und Immunsystem. Es wird dort bis heute in der traditionellen Medizin verwendet. " +
          "In EUROPA arbeiteten Alchemisten wie Paracelsus, Ramon Llull und Basilius Valentinus an Methoden, Gold trinkbar zu machen. Paracelsus schrieb: 'Gold ist das höchste Licht in der Medizin.' " +
          "Die arabischen Alchemisten (besonders Jabir ibn Hayyan, 8. Jahrhundert) entwickelten raffinierte Methoden der Goldauflösung.",
      },
      {
        titel: "Herstellung von Gold Ash (Swarna Bhasma) -- Die ayurvedische Methode",
        text:
          "WARNUNG: Dies ist ein historischer und lehrreicher Text. Die Herstellung von Gold Ash erfordert Fachwissen und Erfahrung. Gold darf niemals mit unbekannten Chemikalien behandelt werden. " +
          "Die traditionelle ayurvedische Methode (Swarna Bhasma): " +
          "1. REINIGUNG (Shodhana): Dünne Goldblättchen (24 Karat, rein) werden abwechselnd in verschiedene Flüssigkeiten getaucht und erhitzt: Sesamöl, Buttermilch, Kuhurin, saure Reiswaschung und ein Absud aus Kurkuma. Jeder Tauchgang reinigt das Gold auf einer anderen Ebene. Dieser Prozess wird 7-mal wiederholt. " +
          "2. VERREIBEN (Marana): Die gereinigten Goldblättchen werden mit Pflanzensäften (oft Aloe Vera oder Zitronensaft) stundenlang im Mörser verrieben, bis eine feine Paste entsteht. " +
          "3. KALZINATION: Die Paste wird in einem luftdicht verschlossenen Tontiegel bei hoher Temperatur (800-1000 Grad) in einem speziellen Ofen (Gaja Puta) gebrannt. Dieser Vorgang wird 20-30 Mal oder sogar öfter wiederholt! Jedes Mal wird das Gold erneut mit Pflanzensäften verrieben und erneut gebrannt. " +
          "4. Das Ergebnis ist ein feines, rotbraunes Pulver -- Gold Ash (Swarna Bhasma). Die Goldpartikel sind auf Nanogrösse reduziert und mit pflanzlichen Verbindungen assoziiert. " +
          "5. QUALITÄTSTEST: Echtes Bhasma muss so fein sein, dass es auf Wasser schwimmt (Varitara). Es muss auf der Zunge geschmack- und geruchlos sein. Und es darf, zwischen die Finger gerieben, keinen metallischen Glanz zeigen (Nischandratva).",
      },
      {
        titel: "Alchemistische Methode -- Gold in Königswasser",
        text:
          "Die europäisch-alchemistische Methode ist anders als die ayurvedische: " +
          "1. Gold wird in Königswasser (Aqua Regia) aufgelöst -- einer Mischung aus 3 Teilen Salzsäure und 1 Teil Salpetersäure. Dies ist die einzige Säure, die Gold auflösen kann. Die Lösung wird goldgelb. " +
          "2. Die Goldlösung wird mit Pflanzenextrakten verbunden -- traditionell verwendet man Rosmarin, Melisse oder Rosenblätter. " +
          "3. Die Mischung wird über Monate oder Jahre in der Erde vergraben. Die Erde und die Zeit transformieren das Gold -- die Alchemisten nannten dies 'Digestio' (Verdauung). " +
          "4. Nach dem Ausgraben wird die Mischung destilliert und weiter gereinigt. " +
          "WICHTIG: Königswasser ist extrem ätzend und giftig! Dieser Prozess darf NUR von erfahrenen Chemikern unter Laborbedingungen durchgeführt werden. Dies ist KEIN Heimexperiment!",
      },
      {
        titel: "Moderne Interpretation: Kolloidales Gold",
        text:
          "Eine moderne, sichere Form des 'trinkbaren Goldes' ist kolloidales Gold -- winzige Goldnanopartikel in destilliertem Wasser. " +
          "Kolloidales Gold kann mit einem Kolloidgenerator hergestellt werden (ähnlich wie kolloidales Silber): Zwei reine Goldstäbe (24 Karat) werden in destilliertes Wasser getaucht und eine Gleichspannung angelegt. Die Goldionen lösen sich langsam im Wasser. " +
          "Die Lösung hat eine rubinrote bis purpurne Farbe (der 'Cassius-Purpur' -- dieser Farbeffekt war schon den mittelalterlichen Glasmachern bekannt). " +
          "Kolloidales Gold wird in der alternativen Medizin verwendet bei: Konzentrationsstörungen, chronischer Müdigkeit, Gelenkbeschwerden (rheumatoide Arthritis), Stimmungsschwankungen und zur allgemeinen Vitalisierung. " +
          "Die Wissenschaft untersucht Goldnanopartikel aktuell intensiv -- in der Krebsforschung, als Trägermaterial für Medikamente und in der Diagnostik. Die alten Alchemisten lagen mit ihrer Intuition nicht falsch.",
      },
    ],
    tags: [
      "#gold",
      "#aurum",
      "#alchemie",
      "#transformation",
      "#kolloidales_gold",
      "#bhasma",
    ],
  },
  {
    id: "pflanzenstein-lapis",
    name: "Der Pflanzenstein (Lapis Vegetabilis) -- Das kleine Meisterwerk",
    kategorie: "Alchemie",
    beschreibung:
      "Der Pflanzenstein (Lapis Vegetabilis) ist das 'Kleine Werk' (Opus Minor) der Alchemie -- die pflanzliche Version des berühmten 'Steins der Weisen'. Er ist ein kristalliner, glasartiger Körper, der aus den gereinigten und wiedervereinigten drei Prinzipien einer einzelnen Pflanze hergestellt wird. Er gilt als die ultimative spagyrische Medizin für das Pflanzenreich und als Vorstufe zum mineralischen Stein der Weisen.",
    abschnitte: [
      {
        titel: "Was ist der Pflanzenstein?",
        text:
          "Der Pflanzenstein ist kein gewöhnliches Heilmittel, sondern ein alchemisches Kunstwerk. Er entsteht, wenn die drei Prinzipien einer Pflanze -- Sal, Mercurius und Sulphur -- so weit gereinigt und wiedervereint werden, dass sie eine feste, kristalline Form annehmen. " +
          "Der Stein ist transparent bis opak, seine Farbe variiert je nach Pflanze (Rosmarin gibt einen grünlichen, Rose einen rötlichen Stein). Er ist wasserlöslich -- man löst ein kleines Stück in Wasser auf und trinkt es als Medizin. " +
          "Die alten Alchemisten berichteten, dass der Pflanzenstein eine enorme Heilkraft besitze -- wenige Tropfen der Lösung genügen, um Krankheiten zu heilen. Ob dies wörtlich oder symbolisch gemeint war, bleibt jedem selbst überlassen.",
      },
      {
        titel: "Herstellung des Pflanzensteins -- Der lange Weg",
        text:
          "SCHRITT 1 -- Pflanze wählen: " +
          "Eine Pflanze wählen, zu der man eine besondere Verbindung hat. Traditionell werden aromatische, kraftvolle Pflanzen bevorzugt: Rosmarin, Melisse, Salbei, Rose. Große Mengen der frischen Pflanze sammeln (mindestens 1-2 Kilogramm). " +
          "SCHRITT 2 -- Vergärung: " +
          "Die Pflanze zerkleinern, mit destilliertem Wasser und etwas Hefe ansetzen. 3-6 Wochen gären lassen, bis der gesamte Zucker in Alkohol umgewandelt ist. " +
          "SCHRITT 3 -- Destillation (Mercurius & Sulphur): " +
          "Den vergorenen Brei destillieren. Das Destillat enthält Alkohol (Mercurius) und ätherische Öle (Sulphur). Dieses Destillat 7x nachdestillieren (rektifizieren) -- mit jeder Destillation wird der Alkohol reiner und 'erhöhter'. Die alten Alchemisten nannten den 7x destillierten Alkohol 'Alkahest' oder 'philosophischen Merkur'. " +
          "SCHRITT 4 -- Veraschung (Sal): " +
          "Den Destillationsrückstand trocknen und veraschen. Die Asche mit destilliertem Wasser auslaugen (die löslichen Salze lösen sich im Wasser). Das Wasser filtrieren und eindampfen -- zurück bleiben die reinen Kristalle des Pflanzen-Sal. Diesen Auslaugungsprozess mehrfach wiederholen, bis die Salze reinweiß sind. " +
          "SCHRITT 5 -- Vereinigung und Kristallisation: " +
          "Die gereinigten Salze (Sal) im hochrektifizierten Alkohol (Mercurius + Sulphur) auflösen. Diese Lösung in ein verschlossenes Glasgefäß geben und bei sanfter Wärme (35-40 Grad, z.B. auf einer Heizmatte) langsam kristallisieren lassen. Dieser Prozess kann Wochen bis Monate dauern. " +
          "Der entstehende Kristall ist der Pflanzenstein.",
      },
      {
        titel: "Die innere Dimension",
        text:
          "Die Herstellung des Pflanzensteins ist nicht nur ein chemischer Prozess, sondern auch ein meditativer und spiritueller Weg. Die Alchemisten lehrten: 'Wie außen, so innen.' Während man die Pflanze in ihre Bestandteile zerlegt, reinigt und wieder vereint, durchläuft auch der Alchemist selbst einen Transformationsprozess. " +
          "Die Geduld, die das Werk erfordert (Monate bis Jahre), die Aufmerksamkeit für die Prozesse, die Verbindung zur Pflanze -- all das verändert den Menschen, der es tut. " +
          "Viele zeitgenössische Alchemisten berichten, dass der Pflanzenstein tatsächlich kristallisiert -- und dass die Erfahrung, ihn in Wasser aufzulösen und zu trinken, tiefgreifend ist. Ob die Wirkung physisch, psychisch oder spirituell ist, mag jeder für sich entscheiden.",
      },
    ],
    tags: [
      "#alchemie",
      "#pflanzenstein",
      "#lapis",
      "#opus_minor",
      "#kristallisation",
      "#hexenwissen",
    ],
  },
  {
    id: "alchemistische-destillation",
    name: "Alchemistische Destillation -- Die Kunst der Lauterung",
    kategorie: "Alchemie",
    beschreibung:
      "Destillation ist das Herzverfahren der Alchemie. Das Wort kommt vom lateinischen 'destillare' (herabtröpfeln). Es ist der Prozess der Reinigung durch Verdampfung und Kondensation -- im aeusseren wie im inneren Sinne. In der alchemischen Weltsicht ist Destillation ein Gleichnis für die Lauterung der Seele: Das Unreine wird zurückgelassen, das Reine steigt auf.",
    abschnitte: [
      {
        titel: "Die Geschichte der Destillation",
        text:
          "Die Destillation ist eine der ältesten chemischen Techniken der Menschheit: " +
          "Um 3000 v.Chr. destillierten die Mesopotamier bereits Parfüme. " +
          "Die griechische Alchemistin MARIA DIE JÜDIN (ca. 1. Jhd. n.Chr.) erfand das Wasserbad (Bain-Marie, noch heute so genannt!) und verbesserte die Destillierapparate erheblich. " +
          "Die arabischen Alchemisten, besonders JABIR IBN HAYYAN (8. Jhd.) und ABU BAKR AL-RAZI (9. Jhd.), perfektionierten die Destillation. Das Wort 'Alkohol' kommt vom arabischen 'al-kuhl' (das Feine, Subtile). Der 'Alembik' (Destillierhelm) kommt vom arabischen 'al-anbiq'. " +
          "Im mittelalterlichen Europa führten die Klöster die Destillation fort -- so entstanden Liköre, Branntweine und Heilgeister. Hildegard von Bingen beschrieb die Destillation von Kräuterwässern. " +
          "PARACELSUS machte die Destillation zum Kernstück seiner iatochemischen (heilchemischen) Medizin.",
      },
      {
        titel: "Die Ausrüstung -- Was braucht man?",
        text:
          "Für die einfache Heimdestillation: " +
          "1. DESTILLIERKOLBEN (Rundkolben aus Borosilikatglas, 500ml-2000ml). Alternativ ein Kupfer-Destillierapparat (traditioneller, aber teurer). " +
          "2. KÜHLER (Liebig-Kühler oder Schlangenkühler). In der einfachsten Form: Ein langes Kupfer- oder Glasrohr, das durch kaltes Wasser geführt wird. " +
          "3. WÄRMEQUELLE: Elektrische Heizplatte (regulierbar!) oder Wasserbad. KEINE offene Flamme bei der Destillation von Alkohol! " +
          "4. AUFFANGGEFÄSS: Glaskolben oder -flasche. " +
          "5. THERMOMETER: Um die Destillationstemperatur zu überwachen. " +
          "6. DICHTUNGEN: Korkstopfen oder Schliff-Verbindungen. " +
          "Fertige Heimdestillier-Sets gibt es im Fachhandel ab ca. 50-150 Euro. Für reine Hydrolate (Pflanzenwässer ohne Alkohol) ist die Destillation in Deutschland legal. Die Destillation von Alkohol unterliegt dem Branntweinmonopol -- hier die lokalen Gesetze beachten.",
      },
      {
        titel: "Die Praxis -- Hydrolate (Pflanzenwässer) destillieren",
        text:
          "Die einfachste und legalste Form der Destillation ist die Herstellung von Hydrolaten (Pflanzenwässern). Dabei wird Wasserdampf durch Pflanzenmaterial geleitet. Der Dampf nimmt die wasserlöslichen ätherischen Öle und Aromastoffe mit. Nach der Kondensation erhält man ein duftendes Pflanzenwasser mit sanfter Heilwirkung. " +
          "SCHRITT 1: Den Destillierkolben zu etwa 1/3 mit frischem Pflanzenmaterial füllen (z.B. Lavendelblüten, Rosenblüten, Pfefferminze, Fichtennadeln). " +
          "SCHRITT 2: Mit destilliertem Wasser auffüllen, bis das Pflanzenmaterial bedeckt ist. " +
          "SCHRITT 3: Den Destillierkolben mit dem Kühler verbinden. Kühlwasser anschließen. " +
          "SCHRITT 4: Langsam erwärmen. Das Wasser soll sanft sieden, nicht heftig kochen. " +
          "SCHRITT 5: Der Dampf steigt auf, kondensiert im Kühler und tropft als Hydrolat in das Auffanggefäß. Die Destillation dauert 1-3 Stunden je nach Pflanze und Menge. " +
          "SCHRITT 6: Das Hydrolat in dunkle Glasflaschen füllen und kühl lagern. " +
          "Haltbarkeit: 6-12 Monate im Kühlschrank. " +
          "Anwendung: Als Gesichtswasser (Rosenwasser!), zum Besprühen von Raeumen, als Zutat in Cremes und Salben, zum Kochen (Orangenblütenwasser), als sanftes Heilmittel für Kinder.",
      },
      {
        titel: "Die sieben Destillationen -- Der alchemische Weg",
        text:
          "In der alchemischen Tradition hat die Zahl Sieben eine besondere Bedeutung. Der 'Philosophische Merkur' -- der reine Pflanzenalkohol -- wird durch siebenfache Destillation (Rektifikation) gewonnen. " +
          "1. Destillation: Grobreinigung. Der Alkohol wird von Wasser und Feststoffen getrennt. " +
          "2. Destillation: Feinreinigung. Fuselöle und Nebenprodukte werden abgetrennt. " +
          "3. Destillation: Verfeinerung. Der Alkohol wird klarer und reiner. " +
          "4. Destillation: Lauterung. Nur noch das Feinste destilliert über. " +
          "5. Destillation: Subtilisierung. Der Alkohol nimmt eine ätherische Qualität an. " +
          "6. Destillation: Erhöhung. Die Alchemisten berichten von einem süßen, blumigen Duft. " +
          "7. Destillation: Vollendung. Der 'philosophische Merkur' ist geboren -- ein Alkohol von höchster Reinheit und spiritueller Qualität. " +
          "Dieser siebenfach destillierte Alkohol wird als Lösungsmittel für die höchsten spagyrischen Präparate verwendet. Die Alchemisten sagten, er sei 'lebendig' -- er könne die Essenzen der Pflanzen und Mineralien auf eine Weise aufnehmen, die gewöhnlicher Alkohol nicht vermag.",
      },
    ],
    tags: [
      "#alchemie",
      "#destillation",
      "#hydrolat",
      "#rektifikation",
      "#hexenwissen",
      "#historia",
    ],
  },
];

// =====================================================================
// HEXENWISSEN-ANLEITUNGEN -- Grundlagen & praktisches Wissen
// =====================================================================

export const HEXENWISSEN_ANLEITUNGEN = [
  {
    id: "kraeuter-trocknen",
    name: "Kräuter richtig trocknen & aufbewahren",
    kategorie: "Grundlagen",
    beschreibung:
      "Das Trocknen und Aufbewahren von Kräutern ist das Fundament der Kräuterkunst. Richtig getrocknete Kräuter bewahren ihre Wirkstoffe über Monate und Jahre. Falsch getrocknete Kräuter verlieren ihre Kraft, verschimmeln oder werden fade. Wer diese Grundlage beherrscht, hat das ganze Jahr über eine gut bestückte Hausapotheke.",
    abschnitte: [
      {
        titel: "Wann ernten? -- Der richtige Zeitpunkt",
        text:
          "Der Erntezeitpunkt entscheidet über die Qualität des getrockneten Krauts: " +
          "TAGESZEIT: Am besten morgens ernten, nachdem der Tau getrocknet ist, aber vor der Mittagshitze. Zu diesem Zeitpunkt ist der Gehalt an ätherischen Ölen am höchsten. " +
          "WETTER: An trockenen, sonnigen Tagen ernten. Feuchte Kräuter trocknen schlecht und neigen zum Schimmeln. Nicht nach Regen ernten. " +
          "PFLANZENTEILE nach Stadium: " +
          "- BLÄTTER: Vor der Blüte ernten -- dann ist die Wirkstoffkonzentration am höchsten. Die Pflanze steckt alle Kraft in die Blätter. " +
          "- BLÜTEN: Bei Vollblüte ernten, wenn die Blüte gerade ganz geöffnet ist. Nicht zu früh (Knospen) und nicht zu spät (verwelkt). " +
          "- WURZELN: Im Herbst (Oktober-November) oder im zeitigen Frühjahr (März-April) ernten. Im Herbst hat die Pflanze alle Kraft in die Wurzel zurückgezogen. Im Frühjahr ist die Kraft noch gespeichert, bevor sie ins Wachstum geht. " +
          "- RINDE: Im Frühling ernten, wenn die Säfte steigen. Die Rinde lässt sich dann leichter lösen und ist wirkstoffreich. " +
          "- SAMEN: Ernten, wenn sie fast reif sind und sich braun färben. Zu früh = unreif, zu spät = fallen ab.",
      },
      {
        titel: "Trocknungsmethoden",
        text:
          "METHODE 1 -- Bündel aufhängen (ideal für Kräuter mit Stielen): " +
          "Kleine Bündel (5-8 Stiele) mit Bindfaden zusammenbinden. Kopfüber an einem luftigen, trockenen, dunklen Ort aufhängen (Dachboden, überdachter Balkon, Abstellraum). KEIN direktes Sonnenlicht -- das zerstört ätherische Öle und Farbe. Trocknung dauert 1-2 Wochen. " +
          "METHODE 2 -- Dörrgitter/Gitterrahmen (ideal für Blüten und einzelne Blätter): " +
          "Die Pflanzenteile einzeln auf ein mit Stoff oder Papier belegtes Gitter legen. Die Luft muss von unten und oben zirkulieren können. An einem luftigen, trockenen, schattigen Ort aufstellen. Täglich wenden. Trocknung dauert 3-7 Tage. " +
          "METHODE 3 -- Backofen (Schnellmethode, Notlösung): " +
          "Backofen auf maximal 40 Grad vorheizen (bei vielen Öfen die niedrigste Stufe). Kräuter auf einem Backblech mit Backpapier verteilen. Ofentür einen Spalt offen lassen (Holzlöffel klemmen), damit die Feuchtigkeit entweichen kann. 2-4 Stunden trocknen. ACHTUNG: Bei über 40 Grad werden ätherische Öle zerstört! " +
          "METHODE 4 -- Dörrautomat: " +
          "Bei 35-40 Grad trocknen. Schnell, gleichmäßig und schonend. Die beste Methode für größere Mengen. " +
          "TROCKNUNGSTEST: Die Kräuter sind fertig, wenn sie bei Berührung rascheln und Stiele glatt durchbrechen (nicht biegen). Blätter zerbröseln leicht zwischen den Fingern.",
      },
      {
        titel: "Aufbewahrung -- So bleiben Kräuter wirksam",
        text:
          "1. GEFÄSSE: Dunkle Gläser (Braunglas oder Violettglas) sind ideal. Alternativ: helle Gläser an einem dunklen Ort lagern. KEIN Plastik (Weichmacher, elektrostatische Aufladung). Papiertüten nur für kurze Lagerung. " +
          "2. BESCHRIFTEN: Jedes Glas mit NAME, ERNTEDATUM und STANDORT beschriften. Das klingt pedantisch, aber nach einem Jahr weiß man nicht mehr, was in welchem Glas ist. " +
          "3. LAGERORT: Kühl, trocken und dunkel. Ideal: Vorratsschrank, Keller (wenn trocken), Speisekammer. NICHT in der Küche direkt neben dem Herd (Feuchtigkeit und Wärme!). " +
          "4. GANZE BLÄTTER LAGERN: Kräuter möglichst als ganze Blätter oder Blüten lagern und erst kurz vor der Verwendung zerkleinern oder mörsern. Ganze Pflanzenteile halten ihre Wirkstoffe besser als zerriebene. " +
          "5. HALTBARKEIT: " +
          "- Blätter und Blüten: 1 Jahr " +
          "- Wurzeln und Rinden: 2-3 Jahre " +
          "- Samen: 2-3 Jahre " +
          "Nach Ablauf dieser Zeiten sind die Kräuter nicht giftig, aber die Wirkstoffkonzentration nimmt ab. Test: Die Kräuter müssen noch deutlich riechen und schmecken. Geruchloses Kraut hat seine Kraft verloren.",
      },
      {
        titel: "Mondphasen beim Sammeln -- Das alte Wissen",
        text:
          "Unsere Ahnen sammelten Kräuter im Einklang mit den Mondphasen. Dieses Wissen wurde über Generationen weitergegeben: " +
          "ZUNEHMENDER MOND: Sammle oberirdische Pflanzenteile -- Blätter, Blüten, Stiele, Früchte. Die aufsteigenden Kräfte des zunehmenden Mondes treiben die Säfte und Wirkstoffe in die oberen Pflanzenteile. " +
          "VOLLMOND: Ernte für maximale Kraft. Die Wirkstoffe sind in der ganzen Pflanze auf ihrem Höhepunkt. Besonders kraftvoll: Johanniskraut, gesammelt am Vollmond nahe dem Johannistag. " +
          "ABNEHMENDER MOND: Sammle unterirdische Pflanzenteile -- Wurzeln und Knollen. Die absteigenden Kräfte ziehen die Säfte in die Erde zurück. " +
          "NEUMOND: Ruhezeit. Nicht sammeln. Die Pflanze regeneriert sich. " +
          "STERNZEICHEN: Manche Kräuterkundige beachten auch das Tierkreiszeichen, in dem der Mond steht: Feuerzeichen (Widder, Löwe, Schütze) für wärmende Kräuter. Wasserzeichen (Krebs, Skorpion, Fische) für kühle, beruhigende Kräuter. Erdzeichen (Stier, Jungfrau, Steinbock) für Wurzeln. Luftzeichen (Zwilling, Waage, Wassermann) für Blätter und Blüten. " +
          "Ob man daran glaubt oder nicht: Die Beachtung der Mondphasen bringt uns in einen bewussten Rhythmus mit der Natur. Und das allein hat schon einen Wert.",
      },
    ],
    tags: [
      "#trocknen",
      "#ernte",
      "#grundlagen",
      "#hexenwissen",
      "#mond",
      "#aufbewahrung",
    ],
  },
  {
    id: "oele-mazerate",
    name: "Ölauszüge & Mazerate herstellen -- Die Basis für Salben",
    kategorie: "Grundlagen",
    beschreibung:
      "Ölauszüge (Mazerate) sind die Grundlage vieler Salben, Balsame und Pflegeöle. Dabei werden die fettlöslichen Wirkstoffe einer Pflanze in ein Trägeröl extrahiert. Das Ergebnis ist ein Heilöl, das direkt auf die Haut aufgetragen oder als Basis für Salben verwendet werden kann.",
    abschnitte: [
      {
        titel: "Welches Trägeröl für welchen Zweck?",
        text:
          "OLIVENÖL (kaltgepresst): Der Klassiker. Reichhaltig, nährend, lange haltbar, leicht verfügbar. Für fast alle Mazerate geeignet. Dringt tief in die Haut ein. Nachteil: Starker Eigengeruch. " +
          "SONNENBLUMENÖL (kaltgepresst): Leichter als Olivenöl, neutralerer Geruch. Gut für Gesichtspflege und empfindliche Haut. " +
          "MANDELÖL: Sehr hautfreundlich, zieht gut ein, mild. Ideal für Babypflege und empfindliche Haut. Etwas teurer. " +
          "JOJOBAOEL: Technisch ein Flüssigwachs, kein Öl. Extrem lange haltbar (wird nicht ranzig). Ähnelt dem hauteigenen Sebum. Für Gesichtsöle und Anti-Aging-Pflege. " +
          "KOKOSÖL: Fest bei Raumtemperatur, schmilzt auf der Haut. Antibakteriell. Für tropische Anwendungen und Haarpflege. " +
          "SESAMÖL: In der ayurvedischen Medizin das wichtigste Trägeröl. Wärmend, nahrhaft. Für Massageöle und Körperöle. " +
          "LEINÖL: Sehr nahrhaft, trocknet schnell ein (trocknendes Öl). Nur für spezielle Anwendungen. Wird schnell ranzig -- immer frisch verwenden.",
      },
      {
        titel: "Methode 1 -- Kaltauszug (Mazerat im engeren Sinne)",
        text:
          "Der Kaltauszug ist die schonendste Methode und bewahrt empfindliche Wirkstoffe: " +
          "1. Ein sauberes, trockenes Schraubglas (Weckglas) bereitstellen. WICHTIG: Absolut trocken -- Wasser im Öl führt zu Schimmel! " +
          "2. Das Pflanzenmaterial (frisch: leicht anwelken lassen, damit Wasser verdunstet; getrocknet: direkt verwenden) ins Glas füllen. Frisch: Glas zu 2/3 füllen. Getrocknet: Glas zu 1/2 füllen. " +
          "3. Mit dem Trägeröl vollständig bedecken -- alle Pflanzenteile müssen unter der Öloberfläche sein! " +
          "4. Das Glas verschließen und an einen warmen Ort stellen (Fensterbank, beheizbarer Raum -- ca. 20-25 Grad). " +
          "5. 3-6 Wochen ziehen lassen. Täglich einmal umdrehen oder sanft schütteln. " +
          "6. Durch ein Mulltuch oder feines Sieb abseihen. Pflanzenreste gut ausdrücken. " +
          "7. In dunkle Flaschen füllen und beschriften.",
      },
      {
        titel: "Methode 2 -- Warmauszug (beschleunigte Methode)",
        text:
          "Wenn es schneller gehen soll: " +
          "1. Pflanzenmaterial und Öl in ein hitzebeständiges Gefäß geben. " +
          "2. Im Wasserbad bei maximal 60 Grad 2-4 Stunden sanft erwärmen. Regelmäßig umrühren. NIEMALS über 70 Grad -- dann werden Wirkstoffe zerstört! " +
          "3. Alternative: Im Backofen bei 50 Grad und leicht geöffneter Tür 4-6 Stunden. " +
          "4. Abseihen und abfüllen. " +
          "Vorteil: Fertig in einem Tag statt in Wochen. " +
          "Nachteil: Empfindliche Wirkstoffe können durch die Wärme leiden. Für Johanniskraut den Kaltauszug in der Sonne bevorzugen!",
      },
      {
        titel: "Methode 3 -- Digestion (die alchemistische Methode)",
        text:
          "Die Digestion verbindet Geduld mit sanfter Wärme: " +
          "1. Pflanzenmaterial und Öl wie beim Kaltauszug ansetzen. " +
          "2. Das verschlossene Glas an einen konstant warmen Ort stellen: Auf der Heizung (Winter), neben dem Ofen, auf einer Heizmatte (ca. 35-40 Grad). " +
          "3. 4-6 Wochen bei dieser sanften Wärme digerieren lassen. " +
          "4. Die alten Alchemisten stellten ihre Mazerate gerne in Pferdemist -- der erzeugte durch Gärung eine konstante, sanfte Wärme von ca. 35 Grad (Körpertemperatur). Heute nehmen wir eine Heizmatte oder die Heizung. " +
          "5. Abseihen und abfüllen. " +
          "Dieses Verfahren ergibt das wirkstoffreichste Mazerat.",
      },
      {
        titel: "Tipps & häufige Fehler",
        text:
          "FEHLER 1 -- Feuchtigkeit: Der häufigste Grund für verdorbene Mazerate ist Wasser im Öl. Frische Kräuter enthalten Wasser! Lösung: Frische Kräuter vor dem Ansetzen 1-2 Tage anwelken lassen. Oder getrocknete Kräuter verwenden. " +
          "FEHLER 2 -- Schimmel: Wenn Pflanzenteile aus dem Öl ragen, bildet sich Schimmel. Lösung: Immer alles mit Öl bedecken. Optional: Ein Stück Küchenkrepp auf die Oberfläche legen, das das Pflanzenmaterial unterdrückt. " +
          "FEHLER 3 -- Zu heiß: Bei über 70 Grad werden viele Wirkstoffe zerstört. Immer ein Thermometer verwenden. " +
          "TIPP: Für extra starke Mazerate den Vorgang wiederholen: Das fertige Öl erneut mit frischem Pflanzenmaterial ansetzen (Doppel-Mazerat). Besonders empfehlenswert bei Johanniskraut und Arnika.",
      },
    ],
    tags: [
      "#ölauszug",
      "#mazerat",
      "#grundlagen",
      "#hexenwissen",
      "#salbenherstellung",
    ],
  },
  {
    id: "raeuchern",
    name: "Räuchern mit Heilkräutern -- Reinigung, Schutz & Rituale",
    kategorie: "Grundlagen",
    beschreibung:
      "Das Räuchern mit Kräutern ist eine der ältesten Heilpraktiken der Menschheit. In jeder Kultur der Welt findet sich das rituelle Räuchern: Weihrauch in den Kirchen, Salbei bei den Ureinwohnern Nordamerikas, Sandelholz in Indien, Beifuß bei den Germanen. Räuchern reinigt Raeume, beruhigt den Geist, vertreibt Insekten und Keime, und schafft einen heiligen Raum.",
    abschnitte: [
      {
        titel: "Grundlagen des Räucherns",
        text:
          "Es gibt verschiedene Methoden des Räucherns: " +
          "METHODE 1 -- Räuchern auf Kohle: " +
          "Eine spezielle Räucherkohle (aus dem Esoterik- oder Kirchenbedarf-Laden) in eine feuerfeste Schale mit Sand geben. Anzünden (die Kohle funkt und glüht durch). 5-10 Minuten warten, bis die Kohle gleichmäßig glüht und sich grau verfärbt. Dann eine Prise getrocknete Kräuter oder Harz auf die Kohle legen. Der Rauch steigt sofort auf. " +
          "METHODE 2 -- Räucherbündel (Smudge Stick): " +
          "Frische Kräuterzweige (Salbei, Beifuß, Rosmarin, Lavendel) zu einem festen Bündel binden. Einige Wochen trocknen lassen. Zum Räuchern das eine Ende anzünden, kurz brennen lassen, dann ausblasen. Das Bündel glimmt und raucht. Mit dem glimmenden Bündel durch den Raum gehen. " +
          "METHODE 3 -- Stövchen-Räuchern: " +
          "Ein Teelicht-Stövchen mit einem Räuchersieb verwenden. Kräuter auf das Sieb legen. Das Teelicht erwärmt die Kräuter sanft -- es entsteht ein sanfterer, milderer Rauch als auf Kohle. Gut für empfindliche Nasen und kleinere Raeume.",
      },
      {
        titel: "Die wichtigsten Räucherkräuter und ihre Wirkung",
        text:
          "WEISSER SALBEI (Salvia apiana): Der Klassiker der Raumreinigung. Vertreibt negative Energien, reinigt und klärt. Intensiver, herber Rauch. In der Tradition der Ureinwohner Nordamerikas heilig. HINWEIS: Weißer Salbei ist gefährdet -- besser heimischen Gartensalbei verwenden oder nur aus nachhaltigem Anbau kaufen. " +
          "BEIFUSS (Artemisia vulgaris): DAS Räucherkraut der germanischen Tradition. Schützend, reinigend, öffnet die Wahrnehmung, fördert Traeume. Wurde zu den Raunächten (25. Dez. bis 6. Jan.) in jedem Bauernhaus geräuchert. " +
          "WACHOLDER (Juniperus): Stark reinigend, desinfizierend (antibakteriell!). Wurde in Krankenzimmern und bei Seuchen geräuchert. Schützt vor negativen Einflüssen. Riecht waldig-harzig. " +
          "WEIHRAUCH (Boswellia): Sakral, meditativ, erhöhend. Beruhigt den Geist, fördert Konzentration und Gebet. Entzündungshemmend (die Boswelliasäuren sind wissenschaftlich erforscht). " +
          "LAVENDEL: Beruhigend, entspannend, schlaffördernd. Vertreibt Mücken und Motten. Sehr angenehmer, sanfter Rauch. " +
          "ROSMARIN: Anregend, konzentrationsfördernd, schützend. Wurde in antiken griechischen Schulen verbrannt, um das Gedächtnis zu stärken. " +
          "THYMIAN: Reinigend, stärkend, mutstiftend. Im antiken Griechenland Rauchopfer vor dem Kampf. " +
          "FICHTENHARZ/KIEFERNHARZ: Waldenergie pur. Reinigend, stärkend, erdend. Wunderbarer Waldduft. " +
          "MYRRHE: Heilend, tröstend, bei Trauer und Verlust. Im alten Ägypten zum Einbalsamieren und in Tempeln verwendet. " +
          "DAMMAR: Hellt die Stimmung auf, bringt Licht und Klarheit. Mildes, süßes Harz.",
      },
      {
        titel: "Räucherrituale -- Praktische Anleitungen",
        text:
          "RAUMREINIGUNG (z.B. nach Streit, Krankheit, Umzug): " +
          "1. Fenster und Türen schließen. " +
          "2. Räucherkohle oder Räucherbündel entzünden. " +
          "3. Mit dem Rauch durch jeden Raum gehen. In den Ecken etwas länger verweilen -- dort sammelt sich 'stehende Energie'. " +
          "4. Im Uhrzeigersinn durch die Wohnung gehen (in der Tradition folgt man dem Sonnenlauf). " +
          "5. Dabei eine klare Absicht (Intention) formulieren: 'Alles, was nicht hierher gehört, darf jetzt gehen.' " +
          "6. Nach dem Räuchern alle Fenster weit öffnen und gut durchlüften. " +
          "7. Optional: Mit einem angenehmen Kraut (Lavendel, Rose) nachräuchern, um den Raum mit positiver Energie zu füllen. " +
          "ABEND-RÄUCHERUNG (zur Ruhe kommen): " +
          "Etwas Lavendel und Weihrauch auf ein Stövchen legen. 15-20 Minuten im Schlafzimmer sanft räuchern. Danach lüften und schlafen gehen. " +
          "RAUNÄCHTE (25. Dez. - 6. Jan.): " +
          "In den 12 Raunächten wird traditionell jede Nacht geräuchert. Jede Nacht steht für einen Monat des kommenden Jahres. Beifuß, Wacholder und Weihrauch sind die klassischen Raunächte-Kräuter.",
      },
      {
        titel: "Sicherheitshinweise",
        text:
          "1. Immer eine feuerfeste Unterlage verwenden (Sand, Keramik, Stein). " +
          "2. Nie unbeaufsichtigt räuchern lassen. " +
          "3. Rauchmelder während des Räucherns ggf. kurzzeitig abdecken (und danach wieder freisetzen!). " +
          "4. Bei Asthma, Atemwegserkrankungen und Schwangerschaft vorsichtig sein oder auf Stövchen-Räuchern umsteigen. " +
          "5. Gut lüften nach dem Räuchern. " +
          "6. Räucherbündel immer in Sand oder auf einer Schale vollständig auslöschen.",
      },
    ],
    tags: [
      "#räuchern",
      "#ritual",
      "#reinigung",
      "#hexenwissen",
      "#raunächte",
      "#salbei",
    ],
  },
  {
    id: "sammelkalender",
    name: "Saisonaler Sammelkalender -- Was wächst wann?",
    kategorie: "Grundlagen",
    beschreibung:
      "Dieser Sammelkalender zeigt Monat für Monat, welche Wildkräuter und Heilpflanzen geerntet werden können. Er bezieht sich auf Mitteleuropa (Deutschland, Österreich, Schweiz). Je nach Höhenlage und Wetter können die Zeiten um 2-4 Wochen abweichen. Sammle immer nur, was du sicher erkennst, und nur so viel, wie du brauchst -- lasse immer genug für die Pflanze und die Tiere stehen.",
    abschnitte: [
      {
        titel: "MÄRZ -- Das Erwachen",
        text:
          "Die ersten Kräutersammler-Freuden nach dem Winter: " +
          "- BÄRLAUCH (Blätter): Ab Ende März in feuchten Laubwäldern. VOR der Blüte sammeln! Verwechslungsgefahr mit Maiglöckchen beachten. " +
          "- BRENNNESSEL (junge Triebe): Die ersten 10-15cm sind die zartesten und wirkstoffreichsten. Handschuhe tragen! " +
          "- HUFLATTICH (Blüten): Eine der ersten Blüten des Jahres, noch vor den Blättern. Gut für Hustentee. " +
          "- GUNDERMANN: Kriechende Pflanze mit rundlichen Blättern und violetten Blütchen. Stoffwechselanregend. " +
          "- BIRKE (Saft): Im März steigt der Birkensaft. Man kann den Stamm vorsichtig anbohren und den Saft auffangen (max. 1 Liter pro Baum, Loch danach verschließen!). Frisch trinken -- entwässernd und blutreinigend.",
      },
      {
        titel: "APRIL -- Frühlingskraft",
        text:
          "- LÖWENZAHN (Blätter und Blüten): Jetzt auf jeder Wiese. Blätter für Salat und Tee, Blüten für Löwenzahnhonig. " +
          "- SCHLÜSSELBLUME (Blüten): In Wiesen und lichten Wäldern. Gut für Bronchialtee. Geschützte Pflanze -- nur in Gärten sammeln oder sehr sparsam! " +
          "- GIERSCH (Blätter): Das 'Unkraut' ist ein großartiges Wildgemüse. Entzündungshemmend bei Gicht und Rheuma. " +
          "- SPITZWEGERICH (junge Blätter): Ab April an Wegrändern. Hustenmittel und Insektenstich-Soforthilfe (Blatt zerreiben und auflegen). " +
          "- BIRKENBLÄTTER: Junge Blätter für Nierentee und Haarspülungen. " +
          "- SCHARBOCKSKRAUT (vor der Blüte!): Vitamin-C-Bombe. Nach der Blüte giftig!",
      },
      {
        titel: "MAI -- Die Fülle beginnt",
        text:
          "- HOLUNDER (Blüten): Die weißen Dolden ernten für Holunderblütentee, Sirup und Sekt. An einem sonnigen Tag pflücken. " +
          "- WALDMEISTER: Vor der Blüte ernten (danach wird der Cumaringehalt zu hoch). Für Maibowle, Tee und Räucherung. " +
          "- KNOBLAUCHSRAUKE (Blätter): Schmeckt nach Knoblauch, wächst im Halbschatten. " +
          "- FRAUENMANTEL (Blätter): Ab Mai das ganze Sommerhalbjahr. Frauenheilkraut. " +
          "- SCHAFGARBE (Blätter und später Blüten): An sonnigen Wegrändern. Verdauung, Frauenheilkunde. " +
          "- ROTKLEE (Blüten): Auf Wiesen. Phytooestrogene, gut in den Wechseljahren. " +
          "- TAUBNESSEL (Blüten): Weiße und rote Taubnessel. Gut für Frauenleiden und als Tee.",
      },
      {
        titel: "JUNI -- Sommersonnenwende",
        text:
          "Der wirkstoffreichste Monat! Um den Johannistag (24. Juni) sind viele Kräuter auf ihrem Höhepunkt: " +
          "- JOHANNISKRAUT (Blüten): DER Sammelmonat! Um den 24. Juni ernten für Rotöl und Tinktur. " +
          "- LINDE (Blüten): Für Schwitz- und Erkältungstee. Auch als Räucherung wunderschön. " +
          "- KAMILLE (Blüten): Auf Äckern und Brachflächen. Für Tee, Sitzbäder, Inhalation. " +
          "- THYMIAN: In voller Blüte. Trocknen für den Winter. " +
          "- SALBEI (Blätter): Vor der Blüte am wirkstoffreichsten. " +
          "- LAVENDEL (Blüten): Wenn die Blüten halb geöffnet sind. Für Räucherung, Kissen, Tee, Öl. " +
          "- ROSE (Blütenblätter): Für Rosenwasser, Rosenöl, Rosenzucker. " +
          "- KÖNIGSKERZE (Blüten): Die einzelnen gelben Blüten pflücken (nur die geöffneten). Hustentee.",
      },
      {
        titel: "JULI & AUGUST -- Hochsommer-Ernte",
        text:
          "- MÄDESÜSS (Blüten): An feuchten Stellen, Bachufern. Fieber- und Schmerzmittel. " +
          "- SCHACHTELHALM (Kraut): Im Sommer auf volle Länge gewachsen. Kieselsäurereich. " +
          "- RINGELBLUME (Blüten): Den ganzen Sommer über. Immer wieder nachernten -- sie blüht nach! " +
          "- OREGANO / DOST (Kraut): In voller Blüte auf trockenen Wiesen. " +
          "- BEIFUSS (Kraut): Vor der Blüte ernten für Räucherung und Tee. " +
          "- GOLDRUTE (Kraut mit Blüten): Ab Juli blüht die heimische Goldrute. Nierentee. " +
          "- BEINWELL (Blätter): Den ganzen Sommer. Für Salben und Wickel. " +
          "- BROMBEERE (Blätter): Für Haustee -- angenehm mild. " +
          "- HOLUNDER (Beeren): Ab Ende August. Für Saft, Sirup, Gelee (roh leicht giftig -- immer kochen!). " +
          "- BALDRIAN (Wurzel): Ab Ende August die Wurzeln graben. Trocknen für Schlaftee.",
      },
      {
        titel: "SEPTEMBER & OKTOBER -- Wurzel- und Früchtezeit",
        text:
          "Jetzt dreht sich alles um Wurzeln, Beeren und Früchte: " +
          "- HAGEBUTTEN: Ab September nach dem ersten Frost (oder vorher sammeln und kurz einfrieren). Vitamin-C-Bombe. Für Tee, Mus, Marmelade. " +
          "- SCHLEHEN: Nach dem ersten Frost -- dann werden sie süß. Für Schlehenlikör, Marmelade. " +
          "- LÖWENZAHNWURZEL: Im Herbst graben. Bitter, leberstärkend. " +
          "- BEINWELLWURZEL: Im Oktober/November graben. Für Salben. " +
          "- ECHINACEA-WURZEL: Im Herbst nach der Blüte. Für Tinkturen. " +
          "- MEERRETTICH: Im Herbst ernten. Frisch reiben für Erkältungskur. " +
          "- WALNÜSSE (grüne Schale): Für Walnusslikör und Tinktur. Stark jodhaltig, gut für die Schilddrüse. " +
          "- EICHELN & KASTANIEN: Für Waschpulver (Rosskastanie) und Mehl (Eicheln nach Entbitterung).",
      },
      {
        titel: "NOVEMBER bis FEBRUAR -- Die stille Zeit",
        text:
          "Die Natur ruht, aber es gibt dennoch einiges zu tun: " +
          "- WURZELN: Viele Wurzeln können auch im Spätwinter gegraben werden, solange der Boden nicht gefroren ist. " +
          "- BAUMRINDEN: Im Spätwinter, bevor der Saft steigt (Februar/März). Weiden- und Eichenrinde. " +
          "- FICHTENHARZ: Kann ganzjährig gesammelt werden, auch im Winter. " +
          "- BIRKENPILZ (Chaga): Wächst an Birken, kann im Winter geerntet werden, wenn man die Baeume ohne Laub gut sieht. " +
          "- MISTEL: Traditionell in der Winterzeit ernten (Dezember-Januar). Blutdruckregulierend. " +
          "- INDOOR-ARBEIT: Salben kochen, Tinkturen ansetzen, Vorräte sichten, Sammeltagebuch führen, Kräuterbücher lesen, Wissen vertiefen. " +
          "- RAUNÄCHTE (25.12. - 6.1.): Räuchern mit den getrockneten Kräutern des Sommers. Der Kreis schließt sich.",
      },
    ],
    tags: [
      "#sammelkalender",
      "#ernte",
      "#wildkräuter",
      "#hexenwissen",
      "#jahreskreis",
      "#saisonal",
    ],
  },
  {
    id: "fermentation-kraeuterwein",
    name: "Fermentation & Kräuterwein -- Lebendige Medizin",
    kategorie: "Grundlagen",
    beschreibung:
      "Fermentation ist eine der ältesten Methoden, Nahrung und Heilmittel haltbar zu machen und gleichzeitig zu veredeln. Durch die Gärung entstehen neue Wirkstoffe, Vitamine und lebendige Enzyme. Kräuterwein (Medizinalwein) war im Mittelalter eine der wichtigsten Darreichungsformen für Heilpflanzen -- Hildegard von Bingen verschrieb dutzende Kräuterweine.",
    abschnitte: [
      {
        titel: "Kräuterwein nach Hildegard von Bingen -- Das Grundrezept",
        text:
          "ZUTATEN: " +
          "- 1 Liter trockener Weißwein (Bio-Qualität) " +
          "- 50-80g frische oder 30-50g getrocknete Kräuter nach Wahl " +
          "- 2-4 Esslöffel Honig (roh) " +
          "ZUBEREITUNG: " +
          "1. Den Wein in einen Topf gießen und auf ca. 70 Grad erwärmen (nicht kochen! Der Alkohol soll erhalten bleiben). " +
          "2. Die Kräuter hinzugeben und 5-10 Minuten bei 70 Grad sanft ziehen lassen. " +
          "3. Vom Herd nehmen und den Honig einrühren, sobald die Temperatur auf unter 40 Grad gesunken ist (um die Enzyme im Honig zu erhalten). " +
          "4. Zugedeckt abkühlen lassen. " +
          "5. In eine saubere Flasche füllen -- mit Kräutern darin oder abgeseiht. " +
          "6. Im Kühlschrank lagern. " +
          "DOSIERUNG: 1-3 kleine Gläser (ca. 30-50ml) täglich, am besten vor oder zu den Mahlzeiten. " +
          "HALTBARKEIT: Im Kühlschrank 2-4 Wochen.",
      },
      {
        titel: "Bewährte Kräuterwein-Rezepte",
        text:
          "HERZWEIN (Petersilienwein nach Hildegard): " +
          "10-15 Stiele frische Petersilie, 1 Liter Weißwein, 2 EL Weinessig, 150g Honig. Petersilie und Wein mit Essig aufkochen, 10 Min. köcheln. Abkühlen lassen, Honig einrühren. Bei Herzbeschwerden täglich 1-2 kleine Gläser. " +
          "MAGENWEIN (Wermutwein): " +
          "20g getrocknetes Wermutkraut, 1 Liter trockener Weißwein, 3 EL Honig. Wermut im Wein 3 Wochen kalt mazerieren (nicht erwärmen!). Abseihen, Honig einrühren. Vor dem Essen ein Stamperl (30ml) gegen Völlegefühl und Appetitlosigkeit. ACHTUNG: Wermut nicht in der Schwangerschaft! " +
          "SCHLAFWEIN (Lavendelwein): " +
          "30g frische Lavendelblüten, 1 Liter milder Rotwein, 2 EL Honig. Lavendel im Wein 2 Wochen mazerieren, abseihen, Honig zugeben. Abends ein Gläschen für guten Schlaf. " +
          "IMMUN-WEIN (Holunder-Thymian): " +
          "30g Holunderblüten, 20g Thymian, 1 Liter Weißwein, 3 EL Honig, Saft einer halben Zitrone. Kräuter im warmen (nicht kochenden) Wein 10 Min. ziehen lassen. Abkühlen, Honig und Zitronensaft zugeben.",
      },
      {
        titel: "Kräuteressig -- Die saure Variante",
        text:
          "Für alle, die keinen Alkohol mögen oder vertragen, ist Kräuteressig eine großartige Alternative: " +
          "GRUNDREZEPT: " +
          "1. 50-100g frische Kräuter in ein Schraubglas füllen. " +
          "2. Mit 500ml gutem Apfelessig (naturtrüb, unpasteurisiert) übergießen. " +
          "3. 2-4 Wochen an einem dunklen Ort ziehen lassen. Täglich schütteln. " +
          "4. Abseihen und in Flaschen füllen. " +
          "ANWENDUNG: 1-2 Esslöffel in ein Glas Wasser, täglich trinken. Oder als Salatdressing, Würzmittel, aeusserlich als Haarspülung oder Wickel. " +
          "BEWÄHRTE KRÄUTER FÜR ESSIG: Rosmarin, Thymian, Salbei, Brennnessel, Knoblauch, Ingwer, Kurkuma. " +
          "Feuerapfelessig (Fire Cider) -- das Immunsystem-Kraftpaket: Meerrettich, Ingwer, Kurkuma, Knoblauch, Zwiebel, Chili, Zitrone in Apfelessig 4 Wochen mazerieren. Täglich 1 Esslöffel in der Erkältungssaison.",
      },
      {
        titel: "Krauter-Oxymel -- Essig-Honig-Kräuterauszug",
        text:
          "Oxymel (griechisch: oxos = sauer, meli = Honig) ist eine der ältesten Darreichungsformen -- schon Hippokrates verschrieb Oxymele. Es ist die perfekte Mischung: Der Essig löst Wirkstoffe, der Honig konserviert und heilt, die Kräuter liefern die Medizin. " +
          "GRUNDREZEPT: " +
          "1. 50g getrocknete oder 100g frische Kräuter in ein großes Schraubglas füllen. " +
          "2. 300ml rohen Apfelessig (naturtrüb) zugeben. " +
          "3. 200g rohen Honig (flüssig) zugeben. " +
          "4. Gut verrühren, bis der Honig sich auflöst. " +
          "5. Das Glas verschließen (bei Metalldeckel ein Stück Backpapier zwischen Deckel und Glas legen -- Essig korrodiert Metall!). " +
          "6. 3-4 Wochen an einem dunklen Ort ziehen lassen. Täglich schütteln. " +
          "7. Abseihen und in Flaschen füllen. " +
          "DOSIERUNG: 1-2 Esslöffel pur oder in Wasser/Tee, täglich. " +
          "HALTBARKEIT: Ungekühlt 6-12 Monate, im Kühlschrank noch länger. " +
          "Oxymel ist die ideale Darreichungsform für Kinder, Ältere und alle, die keinen Alkohol mögen. Es schmeckt süßsauer und überdeckt bittere Kräutergeschmäcker.",
      },
      {
        titel: "Fermentierte Kräuterpasten (Wilde Fermentation)",
        text:
          "Die wildeste und älteste Form der Kräuterkonservierung: " +
          "GRUNDREZEPT: " +
          "1. Frische Wildkräuter (Brennnessel, Löwenzahn, Giersch, Spitzwegerich etc.) fein hacken. " +
          "2. Mit 2% Salz (Meersalz oder Steinsalz, kein Jodsalz) vermengen und kräftig durchkneten, bis Saft austritt. " +
          "3. In ein Bügel- oder Schraubglas fest eindrücken. Die Flüssigkeit muss über dem Pflanzenmaterial stehen. " +
          "4. Mit einem Gewicht (kleines Glas mit Wasser) beschweren, damit alles unter der Lake bleibt. " +
          "5. Mit einem Tuch abdecken (nicht luftdicht -- die Gärung produziert CO2). " +
          "6. 5-10 Tage bei Zimmertemperatur fermentieren lassen. Es blubbert -- das ist gut! " +
          "7. Danach im Kühlschrank lagern. " +
          "Das Ergebnis ist eine lebendige, probiotische Kräuterpaste voller Enzyme, Vitamine und Milchsäurebakterien. " +
          "ANWENDUNG: Als Würzmittel, Brotbelag, in Suppen und Saucen. 1-2 Teelöffel täglich für die Darmgesundheit. " +
          "HALTBARKEIT: Im Kühlschrank mehrere Monate.",
      },
    ],
    tags: [
      "#fermentation",
      "#kräuterwein",
      "#oxymel",
      "#hexenwissen",
      "#hildegard",
    ],
  },
];
