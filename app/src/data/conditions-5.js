export const CONDITIONS_5 = [

  // ============================================================
  // 1. Wunden / Verletzungen / Wundheilung
  // ============================================================
  {
    id: 'wunden',
    name: `Wunden / Verletzungen / Wundheilung`,
    tags: ['#wunden', '#verletzungen', '#wundheilung', '#schnitte', '#schürfwunden', '#narben', '#regeneration'],
    koerper: "Wundheilung ist ein komplexer Prozess in drei Phasen: Entzündung, Proliferation und Remodellierung. Der Körper verschließt zunächst die Wunde durch Blutgerinnung, dann wandern Immunzellen ein, um Keime abzuwehren. Anschließend bilden Fibroblasten neues Bindegewebe, während Kollagen die Wunde stabilisiert. Mangelernährung, Durchblutungsstörungen, Diabetes und Zinkmangel verzögern diesen Prozess erheblich.",
    psychosomatik: {
      zitat: "Welche Wunde in deinem Leben wartet noch darauf, sich zu schließen?",
      text: "Äußere Wunden spiegeln oft innere Verletzungen wider. Rüdiger Dahlke deutet häufige Verletzungen als unbewusste Selbstbestrafung oder als Versuch, inneren Schmerz nach außen sichtbar zu machen. Schlechte Wundheilung zeigt an, dass auch seelische Wunden nicht heilen -- weil der Betroffene sie immer wieder aufreißt. Louise Hay verbindet Wunden mit Schuld und dem Glauben, Strafe zu verdienen. Heilung geschieht, wenn alte Verletzungen endlich losgelassen werden."
    },
    traditionen: {
      volksmedizin: "Die Volksmedizin setzte auf Spitzwegerich als erstes Wundkraut -- zerriebene Blätter direkt auf die Wunde gelegt stoppen Blutungen und desinfizieren. Ringelblumensalbe (Calendula) war das universelle Wundheilmittel jedes Haushalts. Honig wurde seit Jahrhunderten auf offene Wunden aufgetragen, da er antibakteriell wirkt und feucht hält.",
      tcm: "In der TCM fällt die Wundheilung unter die Funktion des Blutes (Xue) und des Wei-Qi (Abwehr-Qi). Blutmangel oder Qi-Stagnation verzögern die Heilung. Dang Gui (Angelica sinensis) nährt das Blut, Tian Qi (Pseudoginseng) stoppt Blutungen und löst Stagnation. Yunnan-Baiyao ist das bekannteste chinesische Wundmittel.",
      ayurveda: "Im Ayurveda wird die Wundheilung durch Pitta reguliert -- das Feuer-Element steuert die Entzündungsphase. Kurkuma-Paste (Haldi) direkt auf Wunden aufgetragen ist ein klassisches Hausmittel. Neem reinigt, Ghee nährt das neue Gewebe, und Aloe Vera kühlt und beschleunigt die Regeneration.",
      germanisch: "In der Germanischen Heilkunde ist eine Wunde ein akutes Ereignis, kein biologischer Konflikt. Die Heilungsphase zeigt sich in Schwellung, Rötung und Wärme -- Zeichen, dass der Körper aktiv repariert. Komplikationen entstehen, wenn ein Selbstwertkonflikt die betroffene Körperstelle zusätzlich belastet.",
      alchemie: "Alchemistisch betrachtet ist Wundheilung ein Werk des Sal-Prinzips -- der Körper verdichtet und erneuert seine Struktur. Spagyrische Zubereitungen von Calendula und Arnika beschleunigen diesen Prozess. Das Zusammenspiel von Sulphur (Entzündung), Mercurius (Reinigung) und Sal (Neubildung) zeigt sich in jeder Wundheilungsphase."
    },
    kraeuter: [
      { name: 'Ringelblume (Calendula officinalis)', wirkung: `Fördert die Granulation und Epithelisierung. Äußerlich als Salbe, Tinktur oder Tee-Kompresse auf die Wunde. Innerlich als Tee zur Unterstützung der Heilung.` },
      { name: 'Spitzwegerich (Plantago lanceolata)', wirkung: `Antibakteriell, blutstillend und wundheilend. Frische Blätter zerreiben und direkt auflegen -- das klassische Erste-Hilfe-Kraut in der Natur.` },
      { name: 'Beinwell (Symphytum officinale)', wirkung: `Enthält Allantoin, das die Zellneubildung beschleunigt. Äußerlich als Salbe auf geschlossene Wunden und Prellungen -- nicht auf offene Wunden.` },
      { name: 'Johanniskraut (Hypericum perforatum)', wirkung: `Johanniskrautöl (Rotöl) ist ideal für Schürfwunden und leichte Verbrennungen. Wirkt entzündungshemmend, schmerzlindernd und fördert die Narbenbildung.` },
      { name: 'Schafgarbe (Achillea millefolium)', wirkung: `Blutstillend und entzündungshemmend. Als Tee-Kompresse oder Tinktur auf blutende Wunden. Ihr Name "Achillea" verweist auf den Krieger Achilles.` }
    ],
    stoffe: [
      { name: 'Zink', wirkung: `Essentiell für die Zellteilung und Kollagensynthese. 25-50mg täglich bei akuten Wunden, am besten als Zinkpicolinat. Ein Zinkmangel verzögert die Wundheilung dramatisch.` },
      { name: 'Vitamin C', wirkung: `Unverzichtbar für die Kollagenbildung. 1-3g täglich in geteilten Dosen bei Verletzungen. Ohne Vitamin C kann kein stabiles Narbengewebe entstehen.` },
      { name: 'Vitamin A', wirkung: `Steuert die Zelldifferenzierung und Immunfunktion in der Wunde. 10.000 IE täglich für 2-3 Wochen bei akuten Verletzungen.` },
      { name: 'Kollagen / Kieselsäure', wirkung: `Kollagenpeptide oder Kieselsäure (Silizium) liefern die Bausteine für neues Bindegewebe. 10g Kollagen oder Schachtelhalmtee täglich.` }
    ],
    ernaehrung: {
      empfehlung: "Bei Wunden braucht der Körper deutlich mehr Protein und Mikronährstoffe als gewöhnlich. Kollagenreiche Kost, Vitamin-C-reiche Lebensmittel und Zinkquellen beschleunigen die Heilung. Entzündungsfördernde Nahrungsmittel verlangsamen den Prozess.",
      staerkend: ["Knochenbrühe (Kollagen, Glycin, Prolin)", "Paprika und Sanddorn (Vitamin C)", "Kürbiskerne und Austern (Zink)", "Eier und Leber (Vitamin A, Protein)", "Beeren (Anthocyane fördern Durchblutung)", "Blattgemüse (Vitamin K für Blutgerinnung)"],
      meiden: ["Zucker (hemmt die Immunabwehr in der Wunde)", "Alkohol (verzögert die Wundheilung erheblich)", "Stark verarbeitete Lebensmittel", "Übermäßig viel Kaffee (entzieht Mineralien)"],
      rezepte: [
        { name: 'Wundheilungs-Brühe', zutaten: '1L Knochenbrühe, 1 rote Paprika, 2 Karotten, Petersilie, 1 TL Kurkuma, Meersalz', zubereitung: 'Knochenbrühe erwärmen, klein geschnittene Paprika und Karotten darin garen. Mit Kurkuma und reichlich frischer Petersilie servieren. Liefert Kollagen, Vitamin C und Vitamin A in einer Mahlzeit.' },
        { name: 'Zink-Power-Salat', zutaten: '100g Feldsalat, 50g Kürbiskerne, 1 Avocado, Sprossen, Zitronensaft, Hanföl, Meersalz', zubereitung: 'Feldsalat mit Avocadostücken und Sprossen anrichten. Kürbiskerne anrösten und darüber geben. Mit Hanföl und Zitronensaft anmachen. Reich an Zink, Vitamin E und essentiellen Fettsäuren.' }
      ]
    },
    fasten: {
      text: "Bei akuten Wunden ist Fasten nicht empfehlenswert -- der Körper braucht Baustoffe für die Reparatur. Kurzes Fasten kann jedoch die Immunfunktion schärfen und Entzündungsprozesse regulieren, wenn die Wunde bereits in der Heilungsphase ist.",
      formen: [
        "Sanftes 14:10 Intervallfasten -- erst nach Abschluss der akuten Heilphase",
        "Brühefasten (1 Tag) -- liefert Kollagen und Mineralien bei gleichzeitiger Entlastung",
        "Basenfasten über 5-7 Tage zur Entsäuerung und Narbenpflege bei chronischen Wunden"
      ],
      reinigung: [
        "Wundreinigung mit Salzwasser oder kolloidalem Silber",
        "Honigauflagen bei schlecht heilenden Wunden (Manuka-Honig)",
        "Trockenbürsten um die Wunde herum zur Förderung der Lymphdrainage",
        "Basenbäder zur Entsäuerung des Gewebes und besseren Nährstoffversorgung"
      ]
    },
    bewegung: {
      text: "Sanfte Bewegung fördert die Wundheilung durch verbesserte Durchblutung -- aber die verletzte Stelle braucht Ruhe. Bewegung der nicht betroffenen Körperteile hält den Kreislauf in Gang und unterstützt den Transport von Nährstoffen zur Wunde.",
      praktiken: [
        "Sanfte Spaziergänge -- fördern die Durchblutung ohne die Wunde zu belasten",
        "Atemübungen -- versorgen das Gewebe mit Sauerstoff, der für die Heilung essentiell ist",
        "Qi Gong -- lenkt gezielt Energie in die verletzte Region",
        "Leichtes Dehnen der umliegenden Muskulatur -- verhindert Verklebungen und Narbenverkürzung"
      ]
    },
    geist: {
      einheit: "Jede Wunde ist auch eine Einladung zur Verlangsamung. Der Körper zwingt dich zur Pause und damit zur Innenschau. Was zeigt dir die Verletzung? Wo bist du unachtsam mit dir umgegangen? In der bewussten Heilung einer äußeren Wunde können auch innere Wunden mitverheilen.",
      affirmationen: [
        "Mein Körper ist ein Meister der Heilung -- jede Zelle weiß, was zu tun ist.",
        "Ich heile schnell und vollständig auf allen Ebenen.",
        "Ich bin sanft und achtsam mit mir und meinem Körper.",
        "Alte Wunden schließen sich -- innen wie außen.",
        "Mein Gewebe erneuert sich kraftvoll und gesund."
      ],
      meditation: "Setze oder lege dich bequem hin und atme tief in den Bauch. Richte deine Aufmerksamkeit auf die Wunde und stelle dir vor, wie ein warmes, grünes Licht die Stelle umhüllt. Sieh, wie neue Zellen wachsen und das Gewebe sich schließt. Spüre Wärme und Kribbeln als Zeichen der Heilung. Halte diese Visualisierung 10-15 Minuten. Wiederhole täglich.",
      energie: "Das Sakralchakra (Svadhisthana) steuert die Regeneration und Erneuerung des Körpers. Arbeite mit orangefarbenem Licht und dem Klang VAM. Handauflegen direkt auf oder über der Wunde (ohne Berührung bei offenen Wunden) kanalisiert Heilenergie. Reiki auf der Verletzung beschleunigt den Heilprozess nachweislich."
    },
    produkte: [
      { name: 'Kolloidales Silber', desc: `Natürliches Antiseptikum zur äußerlichen Wundreinigung. Tötet Keime ab, ohne die Wundheilung zu behindern.`, tags: ['#silber', '#antiseptisch', '#wundreinigung'] },
      { name: 'Ringelblumensalbe (Calendula)', desc: `Klassische Wundheilsalbe -- fördert die Geweberegeneration und hält die Wunde geschmeidig.`, tags: ['#calendula', '#wundheilung', '#salbe'] },
      { name: 'CBD Öl', desc: `Entzündungshemmend und schmerzlindernd. Innerlich oder äußerlich bei Verletzungen und zur Narbenreduktion.`, tags: ['#cbd', '#entzündungshemmend', '#schmerz'] },
      { name: 'Manuka-Honig', desc: `Antibakterieller Wundhonig mit hoher MGO-Konzentration. Traditionell auf schlecht heilende Wunden aufgetragen.`, tags: ['#manuka', '#honig', '#antibakteriell'] }
    ]
  },

  // ============================================================
  // 2. Angina / Mandelentzündung / Halsschmerzen
  // ============================================================
  {
    id: 'angina',
    name: `Angina / Mandelentzündung / Halsschmerzen`,
    tags: ['#angina', '#mandelentzündung', '#halsschmerzen', '#tonsillitis', '#rachenentzündung', '#schluckbeschwerden'],
    koerper: "Die Mandeln (Tonsillen) sind Teil des lymphatischen Abwehrsystems und filtern Erreger, die über Mund und Nase eindringen. Bei einer Angina entzünden sie sich -- meist durch Streptokokken oder Viren -- und schwellen schmerzhaft an. Schluckbeschwerden, Fieber, geschwollene Lymphknoten und eitriger Belag sind typisch. Wiederkehrende Anginen deuten auf ein geschwächtes Immunsystem und eine überlastete Lymphe hin.",
    psychosomatik: {
      zitat: "Was kannst du nicht schlucken -- und was schluckst du herunter, obwohl es dir schadet?",
      text: "Halsschmerzen und Angina stehen für unterdrückten Ausdruck. Rüdiger Dahlke sieht in der Mandelentzündung den Kampf im Engpass -- der Hals als Nadelöhr zwischen Kopf und Körper. Was nicht gesagt wird, staut sich. Louise Hay verbindet Halsschmerzen mit der Unfähigkeit, für sich selbst zu sprechen. Thorwald Dethlefsen deutet Angina als verschluckte Wut, die im Hals stecken bleibt."
    },
    traditionen: {
      volksmedizin: "Salbeitee-Gurgeln war das wichtigste Hausmittel bei Halsschmerzen -- 'Warum stirbt ein Mensch, in dessen Garten Salbei wächst?' lautet ein altes Sprichwort. Warme Halswickel mit Quark oder Kartoffeln zogen die Entzündung heraus. Honig mit Zitrone und Ingwer war der Klassiker bei jedem Halsweh.",
      tcm: "In der TCM ist Angina eine Wind-Hitze-Invasion, die in den Lungen-Meridian eindringt. Die Behandlung vertreibt den Wind, kühlt die Hitze und befreit den Hals. Yin Qiao San ist die klassische Formel. Jin Yin Hua (Geißblatt) und Lian Qiao (Forsythie) klären Hitze-Toxine im Rachenraum.",
      ayurveda: "Im Ayurveda zeigt Angina ein überhitztes Pitta, das sich im Hals festsetzt. Gurgeln mit Kurkuma-Salzwasser ist das erste Mittel. Sitopaladi Churna (eine ayurvedische Gewürzmischung) wird mit Honig eingenommen. Kühle, weiche Nahrung beruhigt den entzündeten Rachen.",
      germanisch: "In der Germanischen Heilkunde steht die Mandelentzündung oft in Verbindung mit einem 'Brockenkonflikt' -- etwas, das man nicht schlucken oder loswerden kann. Die Mandeln schwellen in der Heilungsphase an, wenn der Konflikt gelöst ist.",
      alchemie: "Alchemistisch ist Angina ein Feuer-Überschuss (Sulphur) im Halszentrum, dem Sitz des Ausdrucks. Spagyrische Zubereitungen von Salbei und Echinacea kühlen und reinigen. Das Quecksilber-Prinzip (Mercurius) -- Kommunikation und Fluss -- ist blockiert und muss wieder in Bewegung gebracht werden."
    },
    kraeuter: [
      { name: 'Salbei (Salvia officinalis)', wirkung: `Stark antibakteriell und zusammenziehend. Als Gurgellösung (starker Tee) 5-6x täglich gurgeln. Reduziert Schwellung und tötet Keime im Rachenraum.` },
      { name: 'Echinacea (Sonnenhut)', wirkung: `Aktiviert die Immunabwehr und verkürzt die Krankheitsdauer. Als Tinktur stündlich 30 Tropfen bei den ersten Symptomen.` },
      { name: 'Thymian (Thymus vulgaris)', wirkung: `Stark antiseptisch durch Thymol. Als Tee oder Gurgellösung bei eitrigen Mandeln. Wirkt gleichzeitig schleimlösend.` },
      { name: 'Kamille (Matricaria chamomilla)', wirkung: `Entzündungshemmend und beruhigend. Als Gurgellösung oder Dampfinhalation bei geschwollenem Rachen.` },
      { name: 'Propolis', wirkung: `Natürliches Antibiotikum der Bienen. Als Tinktur direkt auf die Mandeln sprühen oder in Wasser verdünnt gurgeln. Wirkt gegen Bakterien und Viren.` }
    ],
    stoffe: [
      { name: 'Vitamin C', wirkung: `Hochdosiert bei akuter Angina: 1g stündlich bis zur Darmtoleranz. Verkürzt die Krankheitsdauer und stärkt die Abwehr.` },
      { name: 'Zink', wirkung: `Zink-Lutschtabletten (Zinkgluconat) alle 2 Stunden reduzieren die Dauer von Halsinfekten. 75mg täglich in der Akutphase.` },
      { name: 'Kolloidales Silber', wirkung: `Als Rachenspray oder Gurgellösung wirkt es antimikrobiell direkt am Entzündungsherd. 3-4x täglich anwenden.` }
    ],
    ernaehrung: {
      empfehlung: "Bei Angina ist warme, weiche Kost ideal -- alles, was leicht zu schlucken ist und den Rachen nicht reizt. Viel Flüssigkeit ist essentiell, um die Schleimhäute feucht zu halten und Toxine auszuschwemmen.",
      staerkend: ["Warme Brühen und Suppen", "Honig (antibakteriell, hüllt den Rachen ein)", "Ingwertee mit Zitrone und Honig", "Warmer Brei (Haferbrei, Hirsebrei)", "Gedünstetes weiches Gemüse", "Salbei- und Thymiantee"],
      meiden: ["Kalte Getränke und Eiscreme (trotz kurzfristiger Linderung)", "Scharfe und saure Speisen", "Trockene, kratzige Nahrung (Toast, Chips)", "Milchprodukte (fördern Schleimbildung)"],
      rezepte: [
        { name: 'Heilende Goldene Milch bei Halsweh', zutaten: '250ml Pflanzenmilch, 1 TL Kurkuma, 1/2 TL Zimt, Stück Ingwer, 1 EL Honig, Prise schwarzer Pfeffer', zubereitung: 'Pflanzenmilch mit Kurkuma, Zimt und geriebenem Ingwer erwärmen (nicht kochen). Durch ein Sieb gießen, etwas abkühlen lassen und Honig einrühren. Langsam und bewusst trinken -- die Wärme umhüllt den Rachen heilsam.' },
        { name: 'Salbei-Honig-Gurgellösung', zutaten: '3 EL frischer Salbei, 500ml Wasser, 1 EL Honig, 1 TL Meersalz', zubereitung: 'Salbei mit kochendem Wasser übergießen, 15 Minuten ziehen lassen, abseihen. Honig und Salz einrühren. Lauwarm 5-6x täglich gurgeln. Die Kombination wirkt antibakteriell, abschwellend und schmerzlindernd.' }
      ]
    },
    fasten: {
      text: "Bei akuter Angina hat der Körper oft ohnehin keinen Appetit -- das ist ein natürlicher Fastenimpuls. Dem Körper zu folgen und nur Flüssigkeit aufzunehmen, beschleunigt die Heilung, weil die Verdauungsenergie für die Immunabwehr genutzt wird.",
      formen: [
        "Natürliches Krankheitsfasten -- nur Brühe, Tee und Wasser für 1-2 Tage",
        "Saftfasten mit warmen Gemüsebrühen und verdünnten Säften",
        "Intermittierendes Fasten 16:8 in der Erholungsphase"
      ],
      reinigung: [
        "Gurgeln mit Salzwasser oder Salbeitee (alle 2 Stunden)",
        "Nasenspülung mit Salzlösung (Neti) -- reinigt die oberen Atemwege",
        "Dampfinhalation mit Kamille oder Thymian",
        "Warme Halswickel mit Quark oder Heilerde -- ziehen die Entzündung heraus"
      ]
    },
    bewegung: {
      text: "Bei akuter Angina ist Ruhe die wichtigste Medizin. Der Körper braucht seine gesamte Energie für die Abwehr. Erst nach dem Abklingen des Fiebers ist sanfte Bewegung wieder sinnvoll.",
      praktiken: [
        "Bettruhe bei Fieber -- absolut notwendig für die Heilung",
        "Sanfte Atemübungen im Sitzen -- versorgen den Körper mit Sauerstoff",
        "Leichtes Dehnen nach dem Fieber -- bringt den Kreislauf sanft in Gang",
        "Spaziergänge an frischer Luft in der Genesungsphase -- nicht zu früh beginnen"
      ]
    },
    geist: {
      einheit: "Halsschmerzen fragen: Was bleibt ungesagt? Der Hals ist die Brücke zwischen Denken und Fühlen. Wenn der Hals sich entzündet, ist diese Brücke blockiert. Die Heilung liegt im Ausdruck -- im Aussprechen dessen, was gesagt werden will.",
      affirmationen: [
        "Ich darf aussprechen, was in mir lebt.",
        "Mein Hals ist frei und offen für meine Wahrheit.",
        "Ich schlucke nicht mehr herunter, was mir schadet.",
        "Meine Stimme ist kraftvoll und klar.",
        "Ich kommuniziere liebevoll und ehrlich."
      ],
      meditation: "Setze dich aufrecht hin und lege eine Hand auf deinen Hals. Atme langsam durch die Nase ein und durch den leicht geöffneten Mund aus -- stelle dir vor, dass der Atem kühlend und heilend durch den Rachenraum strömt. Summe beim Ausatmen leise ein 'Hmmm' -- die Vibration massiert die Mandeln von innen. Visualisiere blaues, kühlendes Licht im Hals. 10 Minuten täglich.",
      energie: "Das Halschakra (Vishuddha) ist das Zentrum der Kommunikation und des Ausdrucks. Bei Angina ist es blockiert oder überlastet. Arbeite mit blauem Licht und dem Klang HAM. Trage einen blauen Schal oder blaue Steine (Lapislazuli, Aquamarin) am Hals. Singen und Tönen -- sobald es möglich ist -- öffnet dieses Chakra kraftvoll."
    },
    produkte: [
      { name: 'Propolis-Tinktur', desc: `Natürliches Breitband-Antiseptikum. Als Spray direkt in den Rachen oder verdünnt zum Gurgeln bei Angina.`, tags: ['#propolis', '#antiseptisch', '#bienenprodukt'] },
      { name: 'Kolloidales Silber', desc: `Antimikrobielles Spray für den Rachenraum. Wirkt gegen Bakterien und Viren ohne die Schleimhaut zu reizen.`, tags: ['#silber', '#spray', '#antimikrobiell'] },
      { name: 'CBD Öl', desc: `Entzündungshemmend und schmerzlindernd. Tropfen unter die Zunge bei starken Halsschmerzen.`, tags: ['#cbd', '#entzündungshemmend', '#schmerz'] }
    ]
  },

  // ============================================================
  // 3. Blasenentzündung / Harnwegsinfekt
  // ============================================================
  {
    id: 'blasenentzuendung',
    name: `Blasenentzündung / Harnwegsinfekt`,
    tags: ['#blasenentzündung', '#harnwegsinfekt', '#zystitis', '#blase', '#brennen', '#harndrang'],
    koerper: "Eine Blasenentzündung (Zystitis) entsteht meist durch aufsteigende Bakterien (v.a. E. coli) in der Harnröhre. Frauen sind wegen der kurzen Harnröhre deutlich häufiger betroffen. Brennen beim Wasserlassen, ständiger Harndrang und Unterleibsschmerzen sind typisch. Wiederkehrende Infekte deuten auf ein geschwächtes lokales Immunsystem, eine gestörte Vaginalflora oder eine zu geringe Trinkmenge hin.",
    psychosomatik: {
      zitat: "Wer oder was geht dir so an die Nieren, dass selbst das Loslassen brennt?",
      text: "Die Blase steht symbolisch für das Loslassen und die Abgrenzung. Rüdiger Dahlke deutet die Blasenentzündung als Unfähigkeit, Altes loszulassen -- der Urin als 'verarbeitete Emotion' brennt beim Ausscheiden. Louise Hay sieht darin Angst und das Festhalten an alten Ideen. Besonders bei Frauen steht die Blasenentzündung oft im Zusammenhang mit Beziehungskonflikten und der Schwierigkeit, klare Grenzen im Intimbereich zu setzen."
    },
    traditionen: {
      volksmedizin: "Bärentraubenblättertee war das wichtigste Volksheilmittel bei Blasenleiden -- er desinfiziert die Harnwege von innen. Preiselbeersaft verhindert das Anhaften von Bakterien an der Blasenwand. Sitzbäder mit Kamille und warme Umschläge auf den Unterbauch linderten die Beschwerden.",
      tcm: "In der TCM ist die Blasenentzündung feuchte Hitze (Shi-Re) im unteren Erwärmer, oft begleitet von Nieren-Yin-Mangel. Ba Zheng San ist die klassische Formel zur Klärung feuchter Hitze in der Blase. Qu Mai (Dianthus) und Bian Xu (Knöterich) sind Schlüsselkräuter.",
      ayurveda: "Im Ayurveda zeigt die Blasenentzündung erhöhtes Pitta im Mutravaha Srotas (Harntrakt). Kühlende Kräuter wie Gokshura (Tribulus), Chandraprabha Vati und Kokoswasser beruhigen die Entzündung. Pitta-besänftigende Ernährung und ausreichend Flüssigkeit stehen im Zentrum.",
      germanisch: "In der Germanischen Heilkunde steht die Blase in Verbindung mit einem Reviermarkierungskonflikt -- die Unfähigkeit, das eigene Territorium klar zu markieren. Die Entzündung zeigt die Heilungsphase nach Lösung dieses Konflikts an.",
      alchemie: "Alchemistisch ist die Blasenentzündung ein Feuer im Wasser-Element -- Sulphur stört das natürliche Fließen. Spagyrische Zubereitungen von Bärentraube und Goldrute reinigen und kühlen die Harnwege. Das Ziel ist die Wiederherstellung des Mercurius-Flusses im unteren Körper."
    },
    kraeuter: [
      { name: 'Bärentraube (Arctostaphylos uva-ursi)', wirkung: `Enthält Arbutin, das in den Harnwegen zu desinfizierendem Hydrochinon umgewandelt wird. Als Tee 3-4 Tassen täglich, maximal eine Woche am Stück.` },
      { name: 'Goldrute (Solidago virgaurea)', wirkung: `Durchspülungstherapie -- harntreibend, entzündungshemmend und krampflösend. Als Tee oder Extrakt zur Unterstützung der Harnwegsreinigung.` },
      { name: 'Cranberry (Vaccinium macrocarpon)', wirkung: `Proanthocyanidine verhindern das Anhaften von E.-coli-Bakterien an der Blasenwand. Als Saft (ungesüßt) oder Kapseln zur Vorbeugung und Akutbehandlung.` },
      { name: 'Kapuzinerkresse (Tropaeolum majus)', wirkung: `Natürliches Antibiotikum durch Senfölglykoside, die sich gezielt in Blase und Niere anreichern. Zusammen mit Meerrettich als Angocin.` },
      { name: 'Brennnessel (Urtica dioica)', wirkung: `Harntreibend und entzündungshemmend. Spült die Harnwege durch. Als Tee 4-5 Tassen täglich, unterstützt die Durchspülungstherapie.` }
    ],
    stoffe: [
      { name: 'D-Mannose', wirkung: `Einfachzucker, der sich an E.-coli-Bakterien bindet und sie mit dem Urin ausscheidet. 2g alle 2-3 Stunden in der Akutphase, dann 2g täglich zur Vorbeugung.` },
      { name: 'Vitamin C', wirkung: `Säuert den Urin an und hemmt Bakterienwachstum. 1-2g täglich bei akutem Infekt. Stärkt gleichzeitig die Immunabwehr.` },
      { name: 'Probiotika (Laktobazillen)', wirkung: `Lactobacillus rhamnosus und L. reuteri stärken die Vaginalflora und verhindern aufsteigende Infekte. Oral und vaginal anwendbar.` }
    ],
    ernaehrung: {
      empfehlung: "Viel trinken steht an erster Stelle -- mindestens 2-3 Liter täglich, um die Blase durchzuspülen. Basische, kühlende Kost beruhigt die Entzündung. Alles, was den Urin säuert oder die Blase reizt, muss gemieden werden.",
      staerkend: ["Stilles Wasser und Kräutertees in großen Mengen", "Cranberrysaft (ungesüßt)", "Wassermelone und Gurke (harntreibend)", "Petersilie und Sellerie (Nierenkräuter)", "Kürbiskerne (stärken Blase und Prostata)", "Fermentierte Lebensmittel (stärken die Flora)"],
      meiden: ["Kaffee und schwarzer Tee (reizen die Blase)", "Alkohol (dehydriert und schwächt die Abwehr)", "Zucker (füttert die Bakterien)", "Scharfe Gewürze in der Akutphase", "Kohlensäurehaltige Getränke"],
      rezepte: [
        { name: 'Blasen-Durchspültee', zutaten: '2 TL Bärentraubenblätter, 2 TL Goldrute, 1 TL Brennnessel, 1 TL Schachtelhalm, 500ml Wasser', zubereitung: 'Kräuter mit kochendem Wasser übergießen, 10 Minuten ziehen lassen, abseihen. Über den Tag verteilt trinken. Mindestens 3 Kannen täglich für eine effektive Durchspülung.' },
        { name: 'Cranberry-Ingwer-Wasser', zutaten: '200ml ungesüßter Cranberrysaft, 1L Wasser, Stück Ingwer, Zitronenscheiben', zubereitung: 'Cranberrysaft mit Wasser verdünnen, frischen Ingwer hineinreiben und Zitronenscheiben zugeben. Über den Tag verteilt trinken. Schmeckt erfrischend und wirkt antibakteriell.' }
      ]
    },
    fasten: {
      text: "Leichtes Fasten bei Blasenentzündung entlastet den Körper und ermöglicht ihm, alle Energie in die Abwehr zu stecken. Wichtig ist, dabei sehr viel zu trinken -- das Fasten darf die Flüssigkeitszufuhr nicht einschränken.",
      formen: [
        "Saft- und Teefasten (1-2 Tage) -- maximale Durchspülung bei minimaler Verdauungsbelastung",
        "Suppenfasten mit basischen Gemüsebrühen",
        "Intermittierendes Fasten 16:8 zur Vorbeugung wiederkehrender Infekte"
      ],
      reinigung: [
        "Trinkkur mit 3 Litern Kräutertee täglich über 10 Tage",
        "Sitzbäder mit Kamille (3x pro Woche)",
        "Basenbäder zur Entsäuerung -- saures Milieu begünstigt Bakterien",
        "Darmsanierung mit Probiotika zur Stärkung der Vaginalflora"
      ]
    },
    bewegung: {
      text: "Bei akuter Blasenentzündung steht Wärme und Ruhe im Vordergrund. Der Unterleib sollte warm gehalten werden. Sanfte Bewegung nach der Akutphase stärkt die Beckenbodenmuskulatur und die Durchblutung im Beckenbereich.",
      praktiken: [
        "Beckenbodentraining -- stärkt die Muskulatur und Durchblutung im Blasenbereich",
        "Sanftes Yoga mit Fokus auf Hüftöffner -- verbessert die Durchblutung im Becken",
        "Warme Sitzbäder -- entspannen die Muskulatur und lindern Schmerzen",
        "Spaziergänge in warmem Wetter -- Kälte meiden, besonders im Unterleib"
      ]
    },
    geist: {
      einheit: "Die Blase fragt: Was kannst du nicht loslassen? Wem oder was erlaubst du, dein innerstes Territorium zu betreten? Blasenentzündungen zeigen, dass die Grenzen des eigenen Raums nicht klar genug gezogen sind. Heilung beginnt mit dem Mut, Nein zu sagen und das eigene Revier zu markieren.",
      affirmationen: [
        "Ich lasse los, was nicht mehr zu mir gehört -- leicht und ohne Schmerz.",
        "Mein Körper ist mein Territorium, und ich setze klare Grenzen.",
        "Ich bin sicher in meinem Raum.",
        "Meine Blase ist gesund, stark und frei.",
        "Ich fließe mit dem Leben und halte nichts fest."
      ],
      meditation: "Setze dich warm und bequem hin, lege beide Hände auf den Unterbauch. Atme tief in den Beckenraum und stelle dir vor, wie warmes, orangefarbenes Licht den gesamten Blasenbereich durchströmt. Visualisiere, wie ein sanfter Wasserfall die Harnwege von innen reinigt und alle Bakterien ausspült. Fühle Wärme und Geborgenheit in deinem Becken. 10-15 Minuten täglich.",
      energie: "Das Sakralchakra (Svadhisthana) ist das Zentrum der Blase und des gesamten Urogenitaltrakts. Orange ist seine Farbe, VAM sein Klang. Ein geschwächtes Sakralchakra zeigt sich in wiederkehrenden Blaseninfekten. Stärke es durch Meditation, orangefarbene Kleidung und kreative Ausdrucksformen."
    },
    produkte: [
      { name: 'D-Mannose Pulver', desc: `Bindet E.-coli-Bakterien und spült sie mit dem Urin aus. Natürliche Alternative zu Antibiotika bei unkomplizierten Blaseninfekten.`, tags: ['#mannose', '#blase', '#antibakteriell'] },
      { name: 'Kolloidales Silber', desc: `Antimikrobielle Unterstützung bei akuten Harnwegsinfekten. Innerlich als Kur über die Akutphase.`, tags: ['#silber', '#antimikrobiell', '#blase'] },
      { name: 'CBD Öl', desc: `Entzündungshemmend und krampflösend bei schmerzhaften Blasenkrämpfen und Harndrang.`, tags: ['#cbd', '#entzündungshemmend', '#krampflösend'] }
    ]
  },

  // ============================================================
  // 4. Nagelpilz / Pilzerkrankungen der Haut
  // ============================================================
  {
    id: 'nagelpilz',
    name: `Nagelpilz / Pilzerkrankungen der Haut`,
    tags: ['#nagelpilz', '#pilz', '#mykose', '#hautpilz', '#fußpilz', '#candida', '#dermatophyten'],
    koerper: "Nagelpilz (Onychomykose) und Hautpilz werden durch Dermatophyten, Hefepilze oder Schimmelpilze verursacht, die Keratin abbauen. Der Nagel verfärbt sich gelblich, wird brüchig und verdickt sich. Hautpilz zeigt sich als rötliche, juckende, schuppende Stellen. Die wahre Ursache liegt im Immunsystem -- Pilze können nur dort wachsen, wo die Abwehr geschwächt ist. Übersäuerung, Diabetes, Durchblutungsstörungen und ein gestörtes Darmmilieu begünstigen Pilzinfektionen.",
    psychosomatik: {
      zitat: "Wo lässt du zu, dass etwas Fremdes sich in dir breitmacht?",
      text: "Pilzinfektionen stehen symbolisch für etwas, das sich parasitär ausbreitet -- ein Gedanke, eine Beziehung, eine Gewohnheit, die sich eingenistet hat und von der eigenen Lebenskraft zehrt. Rüdiger Dahlke sieht darin die Unfähigkeit, das Eigene vom Fremden zu trennen. Die Pilze nutzen die Schwäche der Abwehr -- genauso, wie im Leben fremde Ansprüche das eigene Terrain besetzen, wenn man sich nicht abgrenzt."
    },
    traditionen: {
      volksmedizin: "Essig-Fußbäder waren das Hausmittel Nummer eins gegen Fußpilz -- das saure Milieu tötet Pilze ab. Teebaumöl wurde in der australischen Volksmedizin direkt aufgetragen. Knoblauch galt als starkes Antimykotikum -- äußerlich aufgelegt und innerlich verzehrt.",
      tcm: "In der TCM zeigt Pilzbefall Feuchtigkeit und Hitze im Körper -- ein Milieu, in dem Pilze gedeihen. Die Milz ist geschwächt und kann die Feuchtigkeit nicht transformieren. Die Behandlung trocknet die Feuchtigkeit, stärkt die Milz und klärt die Hitze. Huang Bai (Korkbaumrinde) und Ku Shen (Sophora) sind bewährte Antipilz-Kräuter.",
      ayurveda: "Im Ayurveda zeigen Pilzinfektionen ein Kapha-Pitta-Ungleichgewicht mit Ansammlung von Ama im Gewebe. Neem ist das wichtigste Antimykotikum -- als Öl äußerlich und als Kapseln innerlich. Kurkuma-Paste und Teebaumöl werden lokal aufgetragen.",
      germanisch: "In der Germanischen Heilkunde hängen Hautpilze mit einem Trennungskonflikt zusammen -- der Kontaktverlust zu jemandem Nahestehenden. Die Pilze siedeln sich dort an, wo die Haut energetisch geschwächt ist.",
      alchemie: "Alchemistisch ist Pilzbefall ein Zeichen der Fäulnis -- das Sal-Prinzip (Körperstruktur) zersetzt sich. Das innere Feuer (Sulphur) reicht nicht aus, um die Zersetzung zu stoppen. Spagyrische Mittel mit Schwefel und ätherischen Ölen stellen das Gleichgewicht wieder her."
    },
    kraeuter: [
      { name: 'Teebaumöl (Melaleuca alternifolia)', wirkung: `Stark antimykotisch und antibakteriell. 2x täglich unverdünnt auf den befallenen Nagel auftragen. Bei Hautpilz mit Trägeröl verdünnen.` },
      { name: 'Oregano-Öl (Origanum vulgare)', wirkung: `Enthält Carvacrol und Thymol -- hochwirksam gegen Pilze. Äußerlich verdünnt (1:3 mit Olivenöl) auftragen, innerlich 2-3 Tropfen in Kapselform.` },
      { name: 'Knoblauch (Allium sativum)', wirkung: `Allicin ist ein starkes Antimykotikum. Frische Knoblauchscheiben auf den Pilz legen (20 Min) oder als Tinktur. Innerlich: 2-3 rohe Zehen täglich.` },
      { name: 'Schwarze Walnuss (Juglans nigra)', wirkung: `Juglon wirkt stark antifungal und antiparasitär. Als Tinktur äußerlich und innerlich. Klassisches Mittel bei hartnäckigen Pilzinfektionen.` }
    ],
    stoffe: [
      { name: 'Caprylsäure', wirkung: `Mittelkettige Fettsäure aus Kokosöl, die Pilzzellwände zerstört. 1-2g täglich bei systemischem Pilzbefall. Gut verträglich und effektiv.` },
      { name: 'Grapefruitkernextrakt', wirkung: `Breitband-Antimykotikum. Äußerlich verdünnt auf den Pilz auftragen, innerlich 15 Tropfen 3x täglich in Wasser.` },
      { name: 'Probiotika', wirkung: `Ein gesundes Darmmilieu hält Pilze in Schach. Saccharomyces boulardii und Lactobacillus rhamnosus hemmen Candida-Wachstum direkt.` }
    ],
    ernaehrung: {
      empfehlung: "Eine antipilzliche Ernährung entzieht Pilzen ihre Nahrungsgrundlage. Zucker und einfache Kohlenhydrate sind der Haupttreibstoff für Pilze. Die Ernährung sollte reich an antimykotischen Lebensmitteln sein und das Darmmilieu stärken.",
      staerkend: ["Kokosöl (enthält Caprylsäure, Laurinsäure)", "Knoblauch und Zwiebeln (Allicin)", "Fermentiertes Gemüse (stärkt die guten Darmbakterien)", "Ingwer und Kurkuma", "Apfelessig (1 EL in Wasser vor den Mahlzeiten)", "Oregano als Gewürz reichlich verwenden"],
      meiden: ["Zucker in jeder Form (füttert die Pilze direkt)", "Weißmehlprodukte und Hefe", "Alkohol (besonders Bier und Wein)", "Schimmelkäse und Erdnüsse", "Fruchtsäfte und Trockenfrüchte"],
      rezepte: [
        { name: 'Antipilz-Knoblauch-Suppe', zutaten: '1 ganze Knolle Knoblauch, 1 Zwiebel, 500ml Gemüsebrühe, Kokosöl, Thymian, Oregano, Meersalz', zubereitung: 'Knoblauchzehen und Zwiebel in Kokosöl anbraten, mit Brühe aufgießen, Kräuter zugeben und 20 Minuten köcheln. Pürieren und heiß genießen. Ein antimykotisches Kraftpaket.' },
        { name: 'Kokos-Kurkuma-Gemüse', zutaten: '200ml Kokosmilch, Brokkoli, Zucchini, Paprika, 2 TL Kurkuma, Ingwer, Knoblauch, Kokosöl', zubereitung: 'Gemüse in Kokosöl mit Knoblauch und Ingwer anbraten, Kokosmilch und Kurkuma zugeben, 10 Minuten köcheln. Die Kombination aus Kokos, Knoblauch und Kurkuma wirkt dreifach antimykotisch.' }
      ]
    },
    fasten: {
      text: "Fasten ist eine der wirksamsten Maßnahmen gegen Pilzbefall -- es entzieht den Pilzen den Zucker, den sie zum Wachsen brauchen, und aktiviert das Immunsystem. Die ersten Tage können durch das Absterben der Pilze Symptome verstärken (Herxheimer-Reaktion).",
      formen: [
        "Zuckerfreie Fastenzeit (mindestens 4 Wochen) -- strikte Antipilz-Diät ohne jede Süße",
        "Intermittierendes Fasten 16:8 -- senkt den Blutzucker und hemmt Pilzwachstum",
        "Heilfasten 5-7 Tage -- tiefe Reinigung und Pilzabtötung durch Ketonkörper"
      ],
      reinigung: [
        "Darmsanierung mit Probiotika und Präbiotika über 3 Monate",
        "Essig-Fußbäder (Apfelessig 1:1 mit Wasser) täglich 20 Minuten",
        "Zeolith-Kur zur Bindung von Pilztoxinen",
        "Basenbäder mit Natron -- Pilze meiden basisches Milieu auf der Haut"
      ]
    },
    bewegung: {
      text: "Gute Durchblutung ist entscheidend bei Pilzinfektionen -- das Immunsystem muss die befallenen Stellen erreichen können. Trockene Füße und atmungsaktive Kleidung sind genauso wichtig wie die Bewegung selbst.",
      praktiken: [
        "Barfußgehen auf natürlichem Boden -- fördert Durchblutung und Abhärtung",
        "Wechselduschen -- stärken die Durchblutung bis in die Zehenspitzen",
        "Regelmäßiges Ausdauertraining -- verbessert die Immunfunktion und Durchblutung",
        "Yoga -- bestimmte Umkehrhaltungen fördern den Blutfluss zu den Extremitäten"
      ]
    },
    geist: {
      einheit: "Pilze zeigen, dass etwas Fremdes sich eingenistet hat -- im Körper wie im Leben. Die Frage ist: Wo lässt du zu, dass andere von deiner Energie leben, ohne etwas zurückzugeben? Wo fehlt die Abgrenzung? Wenn du dein inneres Terrain klar besetzt, finden Pilze keinen Platz mehr.",
      affirmationen: [
        "Mein Körper gehört mir -- nichts Fremdes hat Platz in mir.",
        "Mein Immunsystem ist stark und wachsam.",
        "Ich grenze mich klar und liebevoll ab.",
        "Meine Haut und Nägel sind gesund, klar und stark.",
        "Ich reinige mich von allem, was mir nicht dient."
      ],
      meditation: "Stelle dir vor, wie ein reinigendes, weißes Feuer durch deinen gesamten Körper wandert und alles verbrennt, was nicht zu dir gehört. Sieh, wie Pilze und Parasiten in diesem Licht vergehen. Dann visualisiere, wie deine Haut und Nägel in frischem, rosigem Glanz erstrahlen. Fühle dich rein und geschützt. 10 Minuten täglich.",
      energie: "Das Wurzelchakra (Muladhara) ist bei Fuß- und Nagelpilz oft geschwächt -- es fehlt die Erdung und Verwurzelung. Arbeite mit rotem Licht und dem Klang LAM. Barfußgehen auf der Erde stärkt das Wurzelchakra. Bei Hautpilz an anderen Stellen ist das jeweils zuständige Chakra zu stärken."
    },
    produkte: [
      { name: 'Kolloidales Silber', desc: `Antimykotisch und antibakteriell. Äußerlich direkt auf den Pilz auftragen und trocknen lassen. Innerlich als Kur zur Unterstützung.`, tags: ['#silber', '#antimykotisch', '#äußerlich'] },
      { name: 'Zeolith / ZeoMont', desc: `Bindet Pilztoxine im Darm und unterstützt die Entgiftung während der Antipilz-Therapie.`, tags: ['#zeolith', '#entgiftung', '#pilztoxine'] },
      { name: 'CBD Öl', desc: `Stärkt das Immunsystem und wirkt entzündungshemmend. Unterstützt den Körper bei der Abwehr von Pilzinfektionen.`, tags: ['#cbd', '#immunsystem', '#entzündungshemmend'] },
      { name: 'Oregano-Öl', desc: `Eines der stärksten natürlichen Antimykotika. Innerlich in Kapselform oder äußerlich verdünnt auf betroffene Stellen.`, tags: ['#oregano', '#antimykotisch', '#ätherischesöl'] }
    ]
  },

  // ============================================================
  // 5. Herpes / Lippenherpes / Gürtelrose
  // ============================================================
  {
    id: 'herpes',
    name: `Herpes / Lippenherpes / Gürtelrose`,
    tags: ['#herpes', '#lippenherpes', '#gürtelrose', '#herpes-simplex', '#herpes-zoster', '#fieberblasen', '#bläschen'],
    koerper: "Herpes-Viren schlummern nach der Erstinfektion lebenslang in den Nervenganglien. Herpes simplex (Typ 1) verursacht Lippenherpes, Typ 2 Genitalherpes. Das Varizella-Zoster-Virus verursacht bei Reaktivierung die Gürtelrose. Stress, Immunschwäche, UV-Strahlung, hormonelle Schwankungen und Fieber reaktivieren die Viren. Sie wandern entlang der Nerven zur Haut und verursachen schmerzhafte Bläschen.",
    psychosomatik: {
      zitat: "Welches Thema schwelt unter der Oberfläche und bricht immer wieder auf?",
      text: "Herpes steht symbolisch für etwas, das unter der Oberfläche brodelt und bei Stress ausbricht. Rüdiger Dahlke deutet Lippenherpes als 'Kuss, der nicht gewollt ist' -- Konflikte in der Nähe-Distanz-Regulation. Gürtelrose zeigt tiefen, langanhaltenden Stress und die Angst, von etwas umzingelt zu werden. Louise Hay verbindet Herpes mit brennender Bitterkeit, die sich ihren Weg nach außen sucht."
    },
    traditionen: {
      volksmedizin: "Melissenblätter direkt auf die Bläschen gelegt waren das klassische Mittel gegen Lippenherpes -- Melisse hemmt nachweislich die Virusvermehrung. Schwarzer Tee als Kompresse trocknete die Bläschen aus. Propolis wurde als natürlicher Virenkiller aufgetragen.",
      tcm: "In der TCM zeigt Herpes unterdrückte feuchte Hitze, die bei Stress ausbricht. Das Leber-Qi ist gestaut, Hitze steigt auf. Ban Lan Gen (Isatiswurzel) klärt Hitze-Toxine, Long Dan Xie Gan Tang beruhigt das Leber-Feuer. Bei Gürtelrose wird zusätzlich Wind-Feuchtigkeit ausgeleitet.",
      ayurveda: "Im Ayurveda ist Herpes ein Pitta-Überschuss, der sich in der Haut manifestiert. Neem und Kurkuma innerlich und äußerlich sind Hauptmittel. Ghee kühlt und nährt die betroffene Haut. Aloe Vera beruhigt die Bläschen. Pitta-beruhigende Lebensweise verhindert Ausbrüche.",
      germanisch: "In der Germanischen Heilkunde steht Herpes im Zusammenhang mit einem Trennungskonflikt -- Lippenherpes betrifft die orale Kontaktzone. Der Ausbruch zeigt die Heilungsphase nach einer erlebten oder befürchteten Trennung. Gürtelrose folgt auf einen schweren 'Attacke-Konflikt'.",
      alchemie: "Alchemistisch ist Herpes ein Sulphur-Ausbruch -- das innere Feuer durchbricht die Oberfläche (Sal). Das Virus als Quecksilber-Prinzip (Mercurius) wandert zwischen den Welten -- latent und aktiv. Spagyrische Melissenpräparate und Schwefelpräparate bringen die drei Prinzipien ins Gleichgewicht."
    },
    kraeuter: [
      { name: 'Melisse (Melissa officinalis)', wirkung: `Hemmt nachweislich die Vermehrung von Herpes-simplex-Viren. Melissenextrakt-Creme bei den ersten Anzeichen auftragen. Innerlich als Tee beruhigend.` },
      { name: 'Süßholzwurzel (Glycyrrhiza glabra)', wirkung: `Glycyrrhizin hemmt Herpes-Viren und stärkt die Immunabwehr. Als Tee oder Extrakt, auch äußerlich als Paste auf Bläschen.` },
      { name: 'Echinacea (Sonnenhut)', wirkung: `Stärkt die zelluläre Immunabwehr gegen Viren. Als Tinktur vorbeugend in Stressphasen, 3x30 Tropfen täglich.` },
      { name: 'Johanniskraut (Hypericum)', wirkung: `Antiviral und nervenstärkend. Johanniskrautöl äußerlich auf Herpesbläschen. Innerlich bei der nervenschmerzhaften Gürtelrose besonders hilfreich.` },
      { name: 'Olivenblattextrakt', wirkung: `Oleuropein wirkt antiviral und stärkt das Immunsystem. 500mg Extrakt 2-3x täglich bei Herpesausbrüchen.` }
    ],
    stoffe: [
      { name: 'L-Lysin', wirkung: `Aminosäure, die die Vermehrung von Herpes-Viren hemmt, indem sie Arginin verdrängt. 1-3g täglich bei Ausbruch, 500mg zur Vorbeugung.` },
      { name: 'Zink', wirkung: `Stärkt die antivirale Immunabwehr. 25-50mg täglich bei Ausbruch. Äußerlich als Zinksalbe auf die Bläschen.` },
      { name: 'Vitamin C', wirkung: `Hochdosiert (2-4g täglich) hemmt die Virusreplikation und unterstützt das Immunsystem. Mit Bioflavonoiden kombinieren.` }
    ],
    ernaehrung: {
      empfehlung: "Das Verhältnis von Lysin zu Arginin in der Ernährung ist entscheidend. Lysinreiche Lebensmittel hemmen Herpes, argininreiche fördern Ausbrüche. Stressabbau und immunstärkende Kost verhindern Reaktivierungen.",
      staerkend: ["Fisch und Meeresfrüchte (lysinreich)", "Eier und Milchprodukte (viel Lysin)", "Kartoffeln (gutes Lysin-Arginin-Verhältnis)", "Rote Beete und Karotten", "Knoblauch und Ingwer (antiviral)", "Grünes Blattgemüse (Folsäure, Mineralien)"],
      meiden: ["Nüsse und Samen (argininreich, besonders Walnüsse, Mandeln)", "Schokolade (sehr viel Arginin)", "Gelatine (Arginin)", "Haferflocken in der Akutphase", "Zucker (schwächt die Immunabwehr)"],
      rezepte: [
        { name: 'Lysin-Power-Bowl', zutaten: '150g Fisch (Lachs oder Forelle), Kartoffeln, Brokkoli, rote Beete, Zitronensaft, Olivenöl', zubereitung: 'Kartoffeln und rote Beete weich garen, Fisch sanft braten, Brokkoli dünsten. Alles zusammen anrichten und mit Zitrone und Olivenöl beträufeln. Eine Mahlzeit mit optimalem Lysin-Arginin-Verhältnis.' },
        { name: 'Immunstärkender Ingwer-Kurkuma-Shot', zutaten: '50g frischer Ingwer, 30g Kurkuma, 2 Zitronen, 1 TL Honig, Prise Pfeffer', zubereitung: 'Ingwer und Kurkuma entsaften oder fein reiben und auspressen. Mit Zitronensaft und Honig mischen. Morgens ein Schnapsglas trinken -- stärkt die Abwehr und wirkt antiviral.' }
      ]
    },
    fasten: {
      text: "Fasten stärkt das Immunsystem und kann die Häufigkeit von Herpesausbrüchen reduzieren. In der Akutphase ist leichtes Fasten sinnvoll, da es die Immunantwort fokussiert. Langfristig hält intermittierendes Fasten die Viren in Schach.",
      formen: [
        "Intermittierendes Fasten 16:8 als Dauerpraktik -- hält das Immunsystem wachsam",
        "Kurzes Heilfasten (2-3 Tage) bei akutem Ausbruch",
        "Basenfasten über 7 Tage zur Entsäuerung und Immunstärkung"
      ],
      reinigung: [
        "Melissen-Dampfbäder bei Lippenherpes",
        "Zinksalbe oder Melissencreme auf die Bläschen",
        "Darmsanierung zur Stärkung der Immunabwehr (80% des Immunsystems sitzt im Darm)",
        "Stressreduktion als wichtigste 'Reinigung' -- Stress ist der Hauptauslöser"
      ]
    },
    bewegung: {
      text: "Regelmäßige, moderate Bewegung stärkt das Immunsystem und reduziert Stress -- beides entscheidend zur Vorbeugung von Herpesausbrüchen. Übertraining hingegen schwächt die Abwehr und kann Ausbrüche provozieren.",
      praktiken: [
        "Moderates Ausdauertraining (30 Minuten 4x pro Woche) -- stärkt die Immunabwehr nachhaltig",
        "Yoga und Tai Chi -- reduzieren Stress, den Hauptauslöser für Herpesausbrüche",
        "Waldbaden (Shinrin-Yoku) -- senkt Cortisol und stärkt natürliche Killerzellen",
        "Atemmeditation -- reguliert das Nervensystem und verhindert stressbedingte Ausbrüche"
      ]
    },
    geist: {
      einheit: "Herpes zeigt, dass etwas Altes unter der Oberfläche lebt, das bei Stress hervorbricht. Das Virus selbst ist nicht das Problem -- es ist der Spiegel deines inneren Zustands. Wenn du Frieden mit dem findest, was in dir schwelt, verlieren die Ausbrüche ihre Kraft.",
      affirmationen: [
        "Mein Immunsystem ist wachsam und stark -- Viren haben keine Macht über mich.",
        "Ich lebe in innerem Frieden, und mein Körper spiegelt diesen Frieden.",
        "Ich lasse alten Groll und alte Bitterkeit los.",
        "Meine Haut ist klar, gesund und geschützt.",
        "Stress hat keinen Zugriff auf meinen Körper."
      ],
      meditation: "Lege dich hin und entspanne den gesamten Körper. Stelle dir vor, wie dein Immunsystem aus Millionen leuchtender Wächterzellen besteht, die durch deinen Körper patrouillieren. Sieh, wie sie die Nervenganglien umhüllen und die schlafenden Viren in Schach halten. Sende Dankbarkeit an dein Immunsystem für seine unermüdliche Arbeit. 15 Minuten, besonders in Stressphasen.",
      energie: "Das Solarplexus-Chakra (Manipura) steuert die Willenskraft und Stressresistenz. Ein starkes Manipura hält das Immunsystem stabil. Arbeite mit gelbem Licht und dem Klang RAM. Bei Lippenherpes ist zusätzlich das Halschakra (Vishuddha) zu stärken, bei Gürtelrose der gesamte betroffene Bereich mit goldenem Licht zu umhüllen."
    },
    produkte: [
      { name: 'Kolloidales Silber', desc: `Antiviral bei äußerlicher Anwendung auf Herpesbläschen. Beschleunigt die Abheilung und verhindert bakterielle Superinfektion.`, tags: ['#silber', '#antiviral', '#äußerlich'] },
      { name: 'CBD Öl', desc: `Stressreduzierend und entzündungshemmend. Mindert die Häufigkeit von Ausbrüchen durch Stressreduktion.`, tags: ['#cbd', '#stress', '#immunsystem'] },
      { name: 'Propolis-Tinktur', desc: `Antiviral und wundheilend. Direkt auf Herpesbläschen auftragen -- bildet eine schützende Schicht und hemmt die Viren.`, tags: ['#propolis', '#antiviral', '#wundheilung'] }
    ]
  },

  // ============================================================
  // 6. Eisenmangel / Blutarmut / Anämie
  // ============================================================
  {
    id: 'eisenmangel',
    name: `Eisenmangel / Blutarmut / Anämie`,
    tags: ['#eisenmangel', '#anämie', '#blutarmut', '#ferritin', '#hämoglobin', '#müdigkeit', '#blässe'],
    koerper: "Eisen ist essentiell für den Sauerstofftransport im Blut (Hämoglobin) und die Energieproduktion in den Mitochondrien. Eisenmangel ist der häufigste Nährstoffmangel weltweit -- besonders Frauen im gebärfähigen Alter sind betroffen. Symptome sind Müdigkeit, Blässe, Haarausfall, brüchige Nägel, Konzentrationsschwäche und Kälteempfindlichkeit. Ein Ferritinwert unter 30 ng/ml zeigt bereits leere Speicher an, auch wenn das Blutbild noch normal erscheint.",
    psychosomatik: {
      zitat: "Fehlt dir die Lebenskraft, weil du dein Blut -- deine Essenz -- für andere vergießt?",
      text: "Blut steht symbolisch für Lebenskraft und Vitalität. Eisenmangel zeigt, dass die Lebensenergie nicht genährt oder zu viel davon abgegeben wird. Rüdiger Dahlke sieht in der Anämie den Mangel an Lebensfreude und Antrieb. Louise Hay verbindet Blutarmut mit 'Ja, aber'-Denken und fehlendem Vertrauen ins Leben. Besonders bei Frauen stellt sich die Frage: Wo gibst du mehr, als du bekommst?"
    },
    traditionen: {
      volksmedizin: "Brennnesseltee war das wichtigste Hausmittel bei Blutarmut -- eisenreich und blutbildend. Rote-Beete-Saft galt als natürlicher Blutaufbauer. Kräuterblutsäfte mit Brennnessel, Löwenzahn und Schafgarbe waren in jeder Hausapotheke. Kochen in Eisenpfannen lieferte zusätzliches Eisen.",
      tcm: "In der TCM ist Eisenmangel ein Blutmangel (Xue Xu), oft verbunden mit Milz-Qi-Mangel -- die Milz kann aus der Nahrung nicht genug Blut bilden. Si Wu Tang ist die klassische Blutaufbau-Formel mit Dang Gui (Angelica), Shu Di Huang (Rehmannia), Bai Shao (Pfingstrose) und Chuan Xiong (Ligusticum).",
      ayurveda: "Im Ayurveda zeigt Eisenmangel ein schwaches Agni (Verdauungsfeuer), das die Nährstoffe nicht aufschließen kann. Loha Bhasma (kalziniertes Eisen) ist ein klassisches ayurvedisches Präparat. Chyawanprash als tägliches Tonikum stärkt Blut und Ojas. Granatapfelsaft ist ein Hauptmittel.",
      germanisch: "In der Germanischen Heilkunde kann Anämie auf einen aktiven Selbstwerteinbruch hindeuten, bei dem der Körper weniger Blut produziert. Die Knochenmarkfunktion reagiert auf existentielle Konflikte. Die Lösung des Konflikts normalisiert die Blutbildung.",
      alchemie: "Alchemistisch ist Eisen dem Mars zugeordnet -- dem Planeten der Kraft und des Willens. Eisenmangel zeigt einen Mars-Mangel: fehlende Durchsetzungskraft, fehlender Antrieb. Spagyrisches Ferrum (Eisen) in potenzierter Form stärkt nicht nur den Körper, sondern auch den inneren Krieger."
    },
    kraeuter: [
      { name: 'Brennnessel (Urtica dioica)', wirkung: `Eisenreich und blutbildend. Als Tee (3-4 Tassen), Frischsaft oder in Smoothies. Fördert die Eisenaufnahme und liefert gleichzeitig Kieselsäure und Vitamin C.` },
      { name: 'Löwenzahn (Taraxacum officinale)', wirkung: `Bitterstoff-Pflanze, die Leber und Verdauung stärkt und so die Eisenaufnahme verbessert. Blätter im Salat, Wurzel als Tee oder Tinktur.` },
      { name: 'Dang Gui (Angelica sinensis)', wirkung: `Die wichtigste blutaufbauende Pflanze der TCM. Nährt und bewegt das Blut. Als Dekokt oder Granulat, besonders bei Frauen nach starker Menstruation.` },
      { name: 'Petersilie (Petroselinum crispum)', wirkung: `Überraschend eisenreich und Vitamin-C-haltig. Große Mengen frisch in Salaten und Smoothies verwenden. Als Tee 3x täglich.` },
      { name: 'Schafgarbe (Achillea millefolium)', wirkung: `Traditionelles Frauenkraut, das die Blutbildung fördert und übermäßige Blutungen reguliert. Als Tee oder Tinktur.` }
    ],
    stoffe: [
      { name: 'Eisen (Eisenbisglycinat)', wirkung: `Bestverträgliche Eisenform mit hoher Bioverfügbarkeit. 20-40mg täglich auf nüchternen Magen mit Vitamin C einnehmen. Kein Kaffee oder Milch 2 Stunden davor und danach.` },
      { name: 'Vitamin C', wirkung: `Verdreifacht die Eisenaufnahme aus der Nahrung. Zu jeder eisenhaltigen Mahlzeit 200-500mg Vitamin C einnehmen.` },
      { name: 'Vitamin B12 und Folsäure', wirkung: `Beide essentiell für die Blutbildung. Besonders bei veganer Ernährung supplementieren. Methylierte Formen bevorzugen.` },
      { name: 'Chlorophyll (flüssig)', wirkung: `Die Struktur von Chlorophyll ähnelt dem Hämoglobin. Flüssiges Chlorophyll unterstützt die Blutbildung. 1 EL in Wasser täglich.` }
    ],
    ernaehrung: {
      empfehlung: "Die Ernährung bei Eisenmangel muss eisenreiche Lebensmittel mit Vitamin-C-Quellen kombinieren und gleichzeitig Eisenräuber meiden. Häm-Eisen aus tierischen Quellen wird besser aufgenommen als pflanzliches Eisen, aber auch pflanzlich lässt sich der Bedarf decken.",
      staerkend: ["Rote Beete (roh oder als Saft)", "Brennnesselblätter und -tee", "Hirse (eisenreichstes Getreide)", "Kürbiskerne (8mg Eisen pro 100g)", "Linsen und Kichererbsen", "Dunkle Beeren (Holunder, Aronia, Johannisbeere)", "Petersilie in großen Mengen", "Leber (höchster Eisengehalt aller Lebensmittel)"],
      meiden: ["Kaffee und schwarzer Tee zu den Mahlzeiten (hemmen Eisenaufnahme um 60%)", "Milchprodukte zur eisenreichen Mahlzeit (Calcium hemmt Eisen)", "Phytinsäure (Weißmehl, unfermentiertes Getreide)", "Oxalsäure in Spinat (bindet Eisen -- Spinat trotz Eisengehalt kein guter Eisenlieferant)"],
      rezepte: [
        { name: 'Eisenreicher Rote-Beete-Smoothie', zutaten: '1 Rote Beete (roh), 1 Handvoll Petersilie, 1 Orange, 1 Karotte, Stück Ingwer, 200ml Wasser', zubereitung: 'Alles in den Mixer geben und fein pürieren. Die Orange liefert das Vitamin C zur optimalen Eisenaufnahme aus der roten Beete. Morgens auf nüchternen Magen trinken.' },
        { name: 'Hirse-Gemüse-Pfanne mit Kürbiskernen', zutaten: '150g Hirse, Brokkoli, Paprika, Petersilie, 3 EL Kürbiskerne, Zitronensaft, Olivenöl', zubereitung: 'Hirse kochen, Gemüse in Olivenöl anbraten. Hirse untermischen, mit reichlich Petersilie und Zitronensaft anrichten. Kürbiskerne darüber streuen. Doppelte Eisenquelle mit natürlichem Vitamin C.' }
      ]
    },
    fasten: {
      text: "Bei akutem Eisenmangel ist Fasten nicht empfehlenswert -- der Körper braucht Nährstoffe zum Blutaufbau. Sanftes Intervallfasten kann jedoch die Darmgesundheit verbessern und so die Eisenaufnahme langfristig steigern.",
      formen: [
        "Saftfasten mit eisenreichen Säften (Rote Beete, Aronia, Holunder) für 1-2 Tage",
        "Intermittierendes Fasten 14:10 -- nicht zu lang fasten bei Eisenmangel",
        "Basenfasten mit eisenreichem Gemüse (Hirse, Brennnessel, rote Beete)"
      ],
      reinigung: [
        "Darmsanierung zur Verbesserung der Eisenaufnahme",
        "Bitterstoff-Kur (Löwenzahn, Artischocke) zur Stärkung der Verdauung",
        "Leberreinigung -- die Leber speichert Eisen als Ferritin",
        "Entsäuerung mit Basenpulver -- saures Milieu hemmt die Eisenaufnahme"
      ]
    },
    bewegung: {
      text: "Bei Eisenmangel ist moderate Bewegung wichtig, aber Überanstrengung gefährlich. Der Körper hat weniger Sauerstoff zur Verfügung -- Herzklopfen und Schwindel bei Belastung sind Warnsignale. Sanft beginnen und langsam steigern.",
      praktiken: [
        "Leichte Spaziergänge an der frischen Luft -- versorgen das Blut mit Sauerstoff",
        "Sanftes Yoga -- verbessert die Durchblutung ohne zu überfordern",
        "Atemübungen (tiefe Bauchatmung) -- optimieren die Sauerstoffaufnahme",
        "Leichtes Krafttraining nach Besserung -- regt die Blutbildung im Knochenmark an"
      ]
    },
    geist: {
      einheit: "Eisen gibt dem Blut die Kraft, Sauerstoff zu tragen -- es ist das Mars-Metall, das Metall des Kriegers. Wenn Eisen fehlt, fehlt der innere Krieger: die Kraft, für sich einzustehen, sich durchzusetzen, das eigene Leben aktiv zu gestalten. Eisenmangel fragt: Wo gibst du deine Lebenskraft weg?",
      affirmationen: [
        "Mein Blut ist stark und reich an Lebenskraft.",
        "Ich nehme Nährstoffe und Lebensenergie vollständig auf.",
        "Ich stehe kraftvoll für mich ein -- mein innerer Krieger erwacht.",
        "Mein Körper bildet gesundes, starkes Blut.",
        "Ich nähre mich auf allen Ebenen -- körperlich, seelisch, geistig."
      ],
      meditation: "Setze dich aufrecht hin und lege die Hände auf den Bauch. Atme tief ein und stelle dir vor, wie mit jedem Atemzug leuchtend rote Energie in dein Blut strömt. Sieh, wie dein Knochenmark frische, kräftige rote Blutkörperchen produziert. Visualisiere, wie dein ganzer Körper in sattem Rot erstrahlt -- voller Kraft und Vitalität. 10-15 Minuten täglich.",
      energie: "Das Wurzelchakra (Muladhara) ist das Zentrum der Lebenskraft und des Überlebensinstinkts. Bei Eisenmangel ist es oft geschwächt. Arbeite mit rotem Licht, dem Klang LAM und dem Element Erde. Barfuß auf roter Erde gehen, rote Kleidung tragen und rote Lebensmittel essen stärken dieses Chakra."
    },
    produkte: [
      { name: 'Hanfsamen', desc: `Reich an Eisen (8mg pro 100g) und Protein. Tägliche Quelle für pflanzliches Eisen mit vollständigem Aminosäureprofil.`, tags: ['#hanfsamen', '#eisen', '#protein'] },
      { name: 'CBD Öl', desc: `Verbessert die Nährstoffaufnahme und reguliert Entzündungen, die die Eisenaufnahme hemmen können.`, tags: ['#cbd', '#nährstoffaufnahme', '#entzündungshemmend'] },
      { name: 'Chlorophyll (flüssig)', desc: `Strukturverwandt mit Hämoglobin. Unterstützt die Blutbildung und liefert bioverfügbare Mineralien.`, tags: ['#chlorophyll', '#blutbildung', '#mineralien'] }
    ]
  },

  // ============================================================
  // 7. PMS / Menstruationsbeschwerden
  // ============================================================
  {
    id: 'pms',
    name: `PMS / Menstruationsbeschwerden`,
    tags: ['#pms', '#menstruation', '#periode', '#regelschmerzen', '#dysmenorrhoe', '#frauenheilkunde', '#zyklus'],
    koerper: "Das Prämenstruelle Syndrom (PMS) umfasst körperliche und emotionale Beschwerden in der zweiten Zyklushälfte: Brustspannen, Blähungen, Wassereinlagerungen, Reizbarkeit, Stimmungsschwankungen und Unterleibsschmerzen. Die Ursache liegt in einem Ungleichgewicht von Östrogen und Progesteron, oft begleitet von Prostaglandin-Überschuss, Magnesiummangel und Serotoninmangel. Starke Regelschmerzen (Dysmenorrhoe) entstehen durch Verkrampfungen der Gebärmuttermuskulatur.",
    psychosomatik: {
      zitat: "Was in deinem Zyklus will gelebt werden -- und was wird jeden Monat unterdrückt?",
      text: "Der weibliche Zyklus ist ein Spiegel der inneren Rhythmen. PMS zeigt, dass die dunkle Phase des Zyklus -- die Zeit der Innenschau und des Loslassens -- nicht gelebt wird. Rüdiger Dahlke sieht in Menstruationsbeschwerden die Ablehnung des Weiblichen, den Kampf gegen den natürlichen Rhythmus. Louise Hay verbindet Regelschmerzen mit Schuld und dem Glauben, dass Frausein Strafe bedeutet. Heilung entsteht, wenn die Menstruation als heilige Reinigungszeit gewürdigt wird."
    },
    traditionen: {
      volksmedizin: "Frauenmantel (Alchemilla) war das wichtigste Frauenkraut der Volksmedizin -- 'Der Mantel der lieben Frau' reguliert den Zyklus und lindert Krämpfe. Schafgarbe stoppte zu starke Blutungen, Beifuß brachte die Regel in Gang. Warme Wickel auf dem Unterleib linderten Krämpfe.",
      tcm: "In der TCM sind Menstruationsbeschwerden meist eine Leber-Qi-Stagnation -- das freie Fließen der Energie ist blockiert. Xiao Yao San (Freies-Wandern-Pulver) ist die klassische Formel für PMS. Dang Gui nährt das Blut, Bai Shao entspannt die Muskulatur, Chai Hu bewegt das Leber-Qi.",
      ayurveda: "Im Ayurveda werden Menstruationsbeschwerden als Vata-Störung im Apana Vayu (abwärts fließende Energie) verstanden. Shatavari ist das Hauptkraut für Frauenleiden. Warmes Sesamöl auf den Unterbauch, regelmäßige Mahlzeiten und warme Kost beruhigen Vata. Ashoka-Rinde reguliert den Zyklus.",
      germanisch: "In der Germanischen Heilkunde stehen starke Menstruationsschmerzen im Zusammenhang mit einem sexuellen Konflikt oder Fortpflanzungskonflikt. Die Gebärmutter reagiert auf tiefgreifende weibliche Themen -- Mutterschaft, Sexualität, Weiblichkeit.",
      alchemie: "Alchemistisch ist der weibliche Zyklus ein Opus in sich selbst: Aufbau (Proliferation), Wandlung (Ovulation) und Auflösung (Menstruation). PMS entsteht, wenn die Phase der Auflösung blockiert ist -- das Sal-Prinzip hält fest, was losgelassen werden muss. Spagyrischer Frauenmantel und Silber (Luna) unterstützen den natürlichen Rhythmus."
    },
    kraeuter: [
      { name: 'Mönchspfeffer (Vitex agnus-castus)', wirkung: `Reguliert das Verhältnis von Östrogen zu Progesteron über die Hypophyse. 20mg Extrakt morgens über mindestens 3 Zyklen. Das wichtigste Kraut bei PMS.` },
      { name: 'Frauenmantel (Alchemilla vulgaris)', wirkung: `Progesteronähnliche Wirkung, krampflösend und zyklusregulierend. Als Tee ab Zyklusmitte (Eisprung) bis zur Menstruation, 3 Tassen täglich.` },
      { name: 'Schafgarbe (Achillea millefolium)', wirkung: `Krampflösend, entzündungshemmend und blutungsregulierend. Als Tee oder Tinktur bei zu starker und schmerzhafter Periode.` },
      { name: 'Traubensilberkerze (Cimicifuga racemosa)', wirkung: `Reguliert Östrogen und lindert Stimmungsschwankungen. 40mg Extrakt täglich, besonders bei emotionalem PMS wirksam.` },
      { name: 'Ingwer (Zingiber officinale)', wirkung: `Hemmt Prostaglandine und wirkt so stark wie Ibuprofen gegen Regelschmerzen. 1g Pulver 3x täglich ab Beginn der Beschwerden.` }
    ],
    stoffe: [
      { name: 'Magnesium', wirkung: `Entspannt die Gebärmuttermuskulatur und lindert Krämpfe. 400mg täglich als Magnesiumglycinat, besonders in der zweiten Zyklushälfte.` },
      { name: 'Vitamin B6', wirkung: `Essentiell für die Progesteronbildung und den Serotoninstoffwechsel. 50-100mg täglich ab Zyklusmitte reduziert PMS-Symptome signifikant.` },
      { name: 'Gamma-Linolensäure (GLA)', wirkung: `Aus Nachtkerzenöl oder Borretschöl. Reguliert Prostaglandine und lindert Brustspannen. 1-3g Nachtkerzenöl täglich.` },
      { name: 'Eisen', wirkung: `Bei starker Menstruation geht viel Eisen verloren. 20-40mg Eisenbisglycinat nach der Periode auffüllen, zusammen mit Vitamin C.` }
    ],
    ernaehrung: {
      empfehlung: "Die Ernährung sollte dem Zyklus angepasst sein. In der zweiten Zyklushälfte braucht der Körper mehr Magnesium, B-Vitamine und gesunde Fette. Blutzuckerschwankungen verschlimmern PMS massiv -- regelmäßige Mahlzeiten mit Protein und komplexen Kohlenhydraten stabilisieren.",
      staerkend: ["Dunkle Schokolade (ab 70%, liefert Magnesium)", "Bananen (Vitamin B6, Tryptophan)", "Lachs und fetter Fisch (Omega-3 gegen Krämpfe)", "Hülsenfrüchte (Eisen, B-Vitamine)", "Kürbiskerne (Magnesium, Zink)", "Leinsamen (Phytoöstrogene, Omega-3)", "Warme Suppen und Eintöpfe während der Menstruation"],
      meiden: ["Kaffee (verstärkt Brustspannen und Nervosität)", "Salz in der Woche vor der Periode (Wassereinlagerungen)", "Zucker (Blutzuckerachterbahn verschlimmert Stimmung)", "Alkohol (belastet die Leber, die Östrogen abbaut)", "Kalte Rohkost während der Menstruation (TCM: kühlt den Unterleib)"],
      rezepte: [
        { name: 'Zyklusharmonie-Smoothie', zutaten: '1 Banane, 1 EL Leinsamen, 1 EL Kakao, 1 TL Maca, 200ml Hafermilch, 1 Dattel', zubereitung: 'Alles cremig mixen. Liefert Magnesium, B6, Tryptophan und Phytoöstrogene. Ideal in der zweiten Zyklushälfte als Frühstück oder Snack.' },
        { name: 'Wärmender Ingwer-Linsen-Eintopf', zutaten: '200g rote Linsen, Ingwer, Kurkuma, Kokosmilch, Karotten, Spinat, Kreuzkümmel', zubereitung: 'Linsen mit Gewürzen und Kokosmilch weich kochen, Spinat unterheben. Wärmt den Unterleib, liefert Eisen und wirkt krampflösend durch Ingwer und Kurkuma.' }
      ]
    },
    fasten: {
      text: "Während der Menstruation sollte nicht gefastet werden -- der Körper braucht Nährstoffe und Wärme. In der ersten Zyklushälfte (Follikelphase) ist der Körper am besten für Fasten geeignet, da der Stoffwechsel aktiver ist.",
      formen: [
        "Intermittierendes Fasten 14:10 in der Follikelphase (1. Zyklushälfte) -- nicht in der Lutealphase",
        "Basenfasten in der Woche nach der Menstruation zur Entsäuerung",
        "Zyklisches Fasten -- dem natürlichen Rhythmus von Aufbau und Loslassen folgen"
      ],
      reinigung: [
        "Warme Bäder mit ätherischen Ölen (Lavendel, Muskatellersalbei) während der Periode",
        "Leberwickel mit Rizinusöl in der zweiten Zyklushälfte -- unterstützt den Östrogenabbau",
        "Darmsanierung -- überschüssiges Östrogen wird über den Darm ausgeschieden",
        "Yoni-Dampfbäder mit Kräutern (Frauenmantel, Beifuß) nach der Menstruation"
      ]
    },
    bewegung: {
      text: "Bewegung lindert PMS und Menstruationsbeschwerden nachweislich. In der ersten Zyklushälfte verträgt der Körper intensiveres Training, während der Menstruation sind sanfte Formen ideal. Den Zyklus als natürlichen Trainingsrhythmus nutzen.",
      praktiken: [
        "Yoga mit Fokus auf Hüftöffner und sanfte Drehungen -- löst Verkrampfungen im Becken",
        "Leichtes Joggen oder Tanzen -- setzt Endorphine frei und lindert Schmerzen",
        "Wärme und Ruhe bei starken Krämpfen -- Wärmflasche auf dem Unterleib",
        "Yin Yoga und Restorative Yoga während der Menstruation -- unterstützt das Loslassen"
      ]
    },
    geist: {
      einheit: "Der weibliche Zyklus ist ein Mikrokosmos der Schöpfung: Aufbau, Blüte, Reife und Loslassen. Wenn du lernst, jede Phase als Geschenk zu sehen, verwandeln sich Beschwerden in Hinweise. Die Menstruation ist die Zeit der Innenschau, der Intuition und der Reinigung -- eine heilige Zeit, keine Last.",
      affirmationen: [
        "Mein Zyklus ist ein natürlicher, heiliger Rhythmus.",
        "Ich ehre jede Phase meines Zyklus -- auch die dunkle.",
        "Mein Körper weiß, wie er sich reinigt und erneuert.",
        "Ich bin sanft mit mir während meiner Menstruation.",
        "Meine Weiblichkeit ist Kraft, nicht Schwäche."
      ],
      meditation: "Lege dich hin und platziere eine warme Wärmflasche auf dem Unterleib. Lege die Hände darauf und atme tief in den Beckenboden. Stelle dir vor, wie warmes, rosafarbenes Licht deinen gesamten Beckenraum erfüllt und alle Verkrampfungen löst. Verbinde dich mit der uralten Weisheit deines Körpers. Lass los, was gehen will. 15-20 Minuten.",
      energie: "Das Sakralchakra (Svadhisthana) ist das Zentrum der Weiblichkeit, Kreativität und des Zyklus. Seine Farbe ist Orange, sein Klang VAM, sein Element Wasser. Stärke es durch kreative Ausdrucksformen, Tanz, Wasser und die Verbindung zur Mondin. Der Mond und der weibliche Zyklus sind tief verbunden -- Vollmondmeditationen können den Zyklus harmonisieren."
    },
    produkte: [
      { name: 'CBD Öl', desc: `Krampflösend, schmerzlindernd und stimmungsstabilisierend. Ideal bei PMS-Beschwerden und starken Regelschmerzen.`, tags: ['#cbd', '#krampflösend', '#pms'] },
      { name: 'Magnesium-Öl', desc: `Transdermales Magnesium direkt auf den Unterleib einmassiert löst Krämpfe schneller als orale Einnahme.`, tags: ['#magnesium', '#transdermal', '#krämpfe'] },
      { name: 'Hanfsamen', desc: `Reich an Gamma-Linolensäure (GLA), die Prostaglandine reguliert und PMS-Symptome lindert.`, tags: ['#hanfsamen', '#gla', '#omega3'] },
      { name: 'Mönchspfeffer-Tinktur', desc: `Reguliert den Hormonhaushalt über die Hypophyse. Das wichtigste Naturmittel bei PMS und Zyklusunregelmäßigkeiten.`, tags: ['#mönchspfeffer', '#hormone', '#zyklus'] }
    ]
  },

  // ============================================================
  // 8. ADHS / Konzentrationsstörungen
  // ============================================================
  {
    id: 'adhs',
    name: `ADHS / Konzentrationsstörungen`,
    tags: ['#adhs', '#ads', '#konzentration', '#aufmerksamkeit', '#hyperaktivität', '#fokus', '#unruhe'],
    koerper: "ADHS (Aufmerksamkeitsdefizit-Hyperaktivitätsstörung) ist gekennzeichnet durch Unaufmerksamkeit, Impulsivität und bei der hyperaktiven Form motorische Unruhe. Neurobiologisch liegt ein Dopamin- und Noradrenalinmangel im präfrontalen Cortex vor -- der Bereich, der für Planung, Impulskontrolle und Fokus zuständig ist. Der Darm als 'zweites Gehirn' spielt eine zentrale Rolle, da 90% des Serotonins und 50% des Dopamins dort produziert werden. Nahrungsmittelunverträglichkeiten, Schwermetallbelastung und Omega-3-Mangel verschärfen die Symptome erheblich.",
    psychosomatik: {
      zitat: "Was, wenn ADHS kein Defizit ist, sondern ein Geist, der für diese Welt zu schnell denkt?",
      text: "ADHS kann als Ausdruck eines Geistes gesehen werden, der nicht in die engen Strukturen der modernen Welt passt. Rüdiger Dahlke deutet Hyperaktivität als unterdrückten Bewegungsdrang und fehlende Möglichkeit, die eigene Energie auszuleben. Das Kind (oder der Erwachsene) wird nicht gehört und reagiert, indem es sich nicht mehr anpasst. Thorwald Dethlefsen sieht darin die Weigerung, sich auf eine einzige Sache zu fokussieren, weil alles gleich interessant erscheint. Die Frage ist nicht, wie man ADHS behandelt, sondern wie man ein Umfeld schafft, das zu diesem Geist passt."
    },
    traditionen: {
      volksmedizin: "Die Volksmedizin kannte keine ADHS-Diagnose, wohl aber 'Zappelkinder'. Hafer (Avena sativa) als Nervenstärkungsmittel, Melissentee zum Beruhigen und Lavendelbäder am Abend waren bewährte Mittel. Bitterkräuter stärkten die Verdauung, die bei unruhigen Kindern oft gestört war.",
      tcm: "In der TCM zeigt ADHS eine Kombination aus Herz-Feuer und Nieren-Yin-Mangel -- der Geist (Shen) findet keinen Anker. Das Herz-Feuer lodert nach oben (Unruhe), während die Niere das Wasser nicht liefert, um es zu beruhigen. Tian Wang Bu Xin Dan nährt das Herz-Yin und beruhigt den Geist.",
      ayurveda: "Im Ayurveda ist ADHS ein Vata-Überschuss -- zu viel Luft und Äther, zu wenig Erdung. Brahmi (Bacopa monnieri) ist das wichtigste Kraut für den Geist, Ashwagandha erdet und beruhigt. Regelmäßiger Tagesablauf, warme Kost und Sesamöl-Massagen (Abhyanga) bringen Vata ins Gleichgewicht.",
      germanisch: "In der Germanischen Heilkunde gibt es keine klassische ADHS-Zuordnung, da es sich um einen Zustand und nicht um eine Erkrankung handelt. Motorische Unruhe kann mit einem aktiven Flucht-Reflex in Verbindung stehen -- das Nervensystem befindet sich in ständiger Alarmbereitschaft.",
      alchemie: "Alchemistisch zeigt ADHS einen Überschuss an Mercurius -- dem Prinzip der Beweglichkeit, des Fließens, der Veränderung. Es fehlt an Sal (Struktur, Erdung, Ruhe), um das Quecksilber zu fassen. Spagyrische Zubereitungen von Hafer, Melisse und Gold (Aurum) helfen, die drei Prinzipien in Balance zu bringen."
    },
    kraeuter: [
      { name: 'Brahmi (Bacopa monnieri)', wirkung: `Verbessert Gedächtnis, Konzentration und Lernfähigkeit. Klinisch bei ADHS erprobt. 300mg Extrakt täglich über mindestens 12 Wochen.` },
      { name: 'Gotu Kola (Centella asiatica)', wirkung: `Nährt die Nerven und fördert die mentale Klarheit ohne Stimulation. Beruhigt und fokussiert gleichzeitig. 500mg Extrakt 2x täglich.` },
      { name: 'Melisse (Melissa officinalis)', wirkung: `Beruhigt die Unruhe und verbessert die Konzentration. Studien zeigen verbesserte Aufmerksamkeit bei Kindern. Als Tee oder Tinktur, 3x täglich.` },
      { name: 'Hafer (Avena sativa)', wirkung: `Nervenstärkend und ausgleichend. Grüner Hafer als Frischpflanzentinktur nährt das erschöpfte Nervensystem. 3x30 Tropfen täglich.` },
      { name: 'Ginkgo biloba', wirkung: `Verbessert die Hirndurchblutung und die Dopaminaktivität im präfrontalen Cortex. 120-240mg Extrakt täglich.` }
    ],
    stoffe: [
      { name: 'Omega-3-Fettsäuren (EPA/DHA)', wirkung: `Essentiell für die Gehirnfunktion. Studien zeigen deutliche Verbesserung bei ADHS mit 1-2g EPA+DHA täglich. Aus Algenöl oder Fischöl.` },
      { name: 'Magnesium', wirkung: `Viele ADHS-Betroffene haben einen Magnesiummangel. 200-400mg als Magnesiumglycinat beruhigen das Nervensystem und verbessern den Schlaf.` },
      { name: 'Zink', wirkung: `Cofaktor für die Dopaminsynthese. 15-25mg Zink täglich verbessert Aufmerksamkeit und Impulskontrolle bei ADHS nachweislich.` },
      { name: 'Eisen', wirkung: `Niedrige Ferritinwerte korrelieren mit ADHS-Schwere. Eisenmangel stört die Dopaminproduktion. Ferritin messen und bei Mangel supplementieren.` }
    ],
    ernaehrung: {
      empfehlung: "Die Ernährung hat enormen Einfluss auf ADHS. Eine naturbelassene, nährstoffreiche Kost ohne Zusatzstoffe und Zucker kann die Symptome dramatisch verbessern. Regelmäßige Mahlzeiten mit Protein und guten Fetten stabilisieren den Blutzucker und damit die Aufmerksamkeit.",
      staerkend: ["Fetter Fisch oder Algenöl (Omega-3 für das Gehirn)", "Eier (Cholin für die Neurotransmitter)", "Beeren (Anthocyane verbessern die Hirnfunktion)", "Nüsse und Samen (Magnesium, Zink)", "Avocado (gesunde Fette für das Gehirn)", "Proteinreiches Frühstück (stabilisiert den Fokus)"],
      meiden: ["Künstliche Farbstoffe und Konservierungsmittel (nachgewiesen ADHS-verschlechternd)", "Zucker und Weißmehl (Blutzuckerachterbahn zerstört den Fokus)", "Fertiggerichte und Fast Food", "Glutamat (überstimuliert das Nervensystem)", "Eventuell Gluten und Kasein (Auslassdiät testen)"],
      rezepte: [
        { name: 'Gehirnpower-Frühstück', zutaten: '2 Eier, 1/2 Avocado, Handvoll Spinat, Kürbiskerne, Kokosöl, Kurkuma', zubereitung: 'Eier in Kokosöl mit Spinat und Kurkuma braten. Mit Avocado und Kürbiskernen servieren. Liefert Cholin, Omega-3, Magnesium und gesunde Fette -- der perfekte Start für einen fokussierten Tag.' },
        { name: 'Omega-3-Beeren-Bowl', zutaten: '150g gemischte Beeren, 1 EL Chiasamen, 1 EL Walnüsse, 1 EL Hanfsamen, 200ml Kokosmilch, 1 TL Brahmi-Pulver', zubereitung: 'Beeren mit Kokosmilch pürieren, in eine Schüssel geben, Chiasamen, Walnüsse, Hanfsamen und Brahmi darüber streuen. 10 Minuten quellen lassen. Ein Gehirn-Booster als Nachmittagssnack.' }
      ]
    },
    fasten: {
      text: "Intermittierendes Fasten kann bei Erwachsenen mit ADHS die mentale Klarheit verbessern, da Ketonkörper ein effizienter Gehirntreibstoff sind. Bei Kindern ist Fasten nicht angebracht -- hier liegt der Fokus auf der Ernährungsqualität.",
      formen: [
        "Intermittierendes Fasten 16:8 (nur Erwachsene) -- viele ADHS-Betroffene berichten über besseren Fokus",
        "Eliminationsdiät (30 Tage) -- Weglassen verdächtiger Lebensmittel, dann einzeln wieder einführen",
        "Zucker-Fasten -- vollständiger Verzicht auf Zucker und Weißmehl für 4 Wochen"
      ],
      reinigung: [
        "Schwermetall-Entgiftung mit Zeolith oder Chlorella (Quecksilber stört Dopamin)",
        "Darmsanierung mit Probiotika -- der Darm produziert Neurotransmitter",
        "Digitales Fasten -- Bildschirmzeit drastisch reduzieren, besonders abends",
        "Natur-Immersion -- regelmäßige Zeit in der Natur als 'Reizentgiftung'"
      ]
    },
    bewegung: {
      text: "Bewegung ist die natürlichste und wirksamste ADHS-Therapie -- sie erhöht Dopamin, Noradrenalin und Serotonin im Gehirn auf die gleiche Weise wie Medikamente, nur ohne Nebenwirkungen. Tägliche intensive Bewegung ist kein Luxus, sondern Notwendigkeit.",
      praktiken: [
        "Intensive Bewegung morgens vor der Schule/Arbeit -- 30 Minuten Joggen, Schwimmen oder Radfahren verbessern den Fokus für Stunden",
        "Kampfsport (Karate, Judo, Kung Fu) -- trainiert Impulskontrolle, Disziplin und Körperbewusstsein",
        "Klettern und Bouldern -- erfordert absolute Konzentration und gibt sofortiges Feedback",
        "Trampolin springen -- reguliert das Nervensystem und baut überschüssige Energie ab"
      ]
    },
    geist: {
      einheit: "ADHS ist kein Defizit -- es ist eine andere Art, die Welt wahrzunehmen. Der ADHS-Geist sieht Verbindungen, wo andere Chaos sehen. Er denkt in Netzen statt in Linien. Die Herausforderung ist nicht, diesen Geist zu zähmen, sondern ihm die Struktur zu geben, in der er aufblühen kann.",
      affirmationen: [
        "Mein Geist ist ein Geschenk -- ich lerne, ihn zu lenken.",
        "Ich bin fokussiert und klar, wenn es darauf ankommt.",
        "Meine Kreativität und Schnelligkeit sind Stärken.",
        "Ich erschaffe mir Strukturen, die mich tragen.",
        "Ich bin ruhig und geerdet in meiner Mitte."
      ],
      meditation: "Setze dich aufrecht hin und schließe die Augen. Lege beide Hände auf die Oberschenkel und spüre den Kontakt mit der Erde. Zähle langsam deine Atemzüge: Ein (1), Aus (2), Ein (3), Aus (4) -- bis 10, dann wieder von vorne. Wenn die Gedanken abschweifen, beginne einfach wieder bei 1. Schon 5 Minuten täglich verändern die Gehirnstruktur bei regelmäßiger Praxis.",
      energie: "Das Stirnchakra (Ajna) steuert Konzentration und Klarheit -- bei ADHS oft überaktiv und unfokussiert. Gleichzeitig ist das Wurzelchakra (Muladhara) schwach, es fehlt die Erdung. Die Kombination aus Erdungsarbeit (Barfußgehen, rote Nahrung, LAM) und Stirnchakra-Beruhigung (Indigo, OM, Meditation) bringt Balance."
    },
    produkte: [
      { name: 'CBD Öl', desc: `Beruhigt das Nervensystem ohne zu sedieren. Verbessert die Impulskontrolle und reduziert Unruhe bei ADHS.`, tags: ['#cbd', '#nervensystem', '#fokus'] },
      { name: 'Hericium (Löwenmähne)', desc: `Fördert das Nervenwachstum (NGF) und verbessert die kognitive Funktion. Besonders wertvoll für Konzentration und Gedächtnis.`, tags: ['#hericium', '#gehirn', '#konzentration'] },
      { name: 'Hanfsamen', desc: `Reich an Omega-3 und GLA -- essentielle Fettsäuren für die Gehirnfunktion. Täglich 2-3 EL über Mahlzeiten streuen.`, tags: ['#hanfsamen', '#omega3', '#gehirn'] }
    ]
  },

  // ============================================================
  // 9. Durchfall / Magen-Darm-Infekt
  // ============================================================
  {
    id: 'durchfall',
    name: `Durchfall / Magen-Darm-Infekt`,
    tags: ['#durchfall', '#diarrhoe', '#magen-darm', '#gastroenteritis', '#brechdurchfall', '#norovirus'],
    koerper: "Durchfall ist eine natürliche Reinigungsreaktion des Körpers, um Erreger, Toxine oder unverträgliche Substanzen schnell auszuscheiden. Akuter Durchfall wird meist durch Viren (Norovirus, Rotavirus), Bakterien (Salmonellen, E. coli) oder Lebensmittelvergiftungen ausgelöst. Der Darm produziert vermehrt Flüssigkeit und beschleunigt die Peristaltik. Chronischer Durchfall deutet auf Nahrungsmittelunverträglichkeiten, Reizdarm, Dysbiose oder chronisch-entzündliche Darmerkrankungen hin.",
    psychosomatik: {
      zitat: "Was kannst du nicht verdauen -- und was will so schnell wie möglich raus?",
      text: "Durchfall ist der Ausdruck von 'Ich kann das nicht verdauen' auf körperlicher Ebene. Rüdiger Dahlke sieht darin Angst und die Unfähigkeit, Erlebnisse zu verarbeiten -- alles geht durch, ohne aufgenommen zu werden. Louise Hay verbindet Durchfall mit Flucht und Ablehnung. Prüfungsangst und Lampenfieber zeigen diesen Zusammenhang deutlich: Der Darm reagiert unmittelbar auf emotionale Überforderung."
    },
    traditionen: {
      volksmedizin: "Getrocknete Heidelbeeren waren das Hausmittel Nummer eins gegen Durchfall -- die Gerbstoffe wirken stopfend und entzündungshemmend. Geriebener Apfel (braun oxidiert) liefert Pektin, das Toxine bindet. Karottensuppe nach Moro (lange gekocht) bildet Oligosaccharide, die Bakterien binden.",
      tcm: "In der TCM ist akuter Durchfall eine Invasion von Feuchtigkeit und Kälte (oder feuchter Hitze) in Milz und Magen. Die Milz kann die Feuchtigkeit nicht transformieren. Huo Xiang Zheng Qi San vertreibt Feuchtigkeit und stärkt die Mitte. Ingwer wärmt den Magen, getrockneter Ingwer stoppt Durchfall.",
      ayurveda: "Im Ayurveda ist akuter Durchfall eine Agni-Störung (Verdauungsfeuer erloschen) mit Vata-Überschuss. Die Behandlung stärkt Agni und beruhigt Vata. Ingwer, Muskatnuss und Granatapfelsaft sind Hauptmittel. Khichdi (Reis-Linsen-Brei) ist die klassische Schonkost.",
      germanisch: "In der Germanischen Heilkunde steht der Darm in Verbindung mit 'unverdaulichen Brocken' -- Situationen, die nicht verarbeitet werden können. Die Schleimhaut des Dickdarms reagiert auf 'hässliche Konflikte', die man nicht loswerden kann.",
      alchemie: "Alchemistisch zeigt Durchfall eine Störung des Sal-Prinzips -- der Körper kann die Nahrung nicht fixieren und verdichten. Das Wasser-Element dominiert, das Feuer-Element (Agni/Sulphur) ist erloschen. Spagyrische Zubereitungen von Eichenrinde und Blutwurz stärken das Sal-Prinzip."
    },
    kraeuter: [
      { name: 'Blutwurz (Potentilla erecta)', wirkung: `Reich an Gerbstoffen, die die Darmschleimhaut zusammenziehen und Durchfall stoppen. Als Tee oder Tinktur, 3x30 Tropfen.` },
      { name: 'Kamille (Matricaria chamomilla)', wirkung: `Entzündungshemmend, krampflösend und beruhigend für den gereizten Darm. Als Tee 4-5 Tassen täglich.` },
      { name: 'Ingwer (Zingiber officinale)', wirkung: `Wärmt den Magen, lindert Übelkeit und stärkt das Verdauungsfeuer. Frischer Ingwertee mit etwas Honig.` },
      { name: 'Heidelbeere (getrocknet)', wirkung: `Gerbstoffe wirken zusammenziehend und entzündungshemmend. Getrocknete Beeren kauen oder als Tee. Frische Heidelbeeren wirken hingegen abführend.` },
      { name: 'Uzara (Xysmalobium undulatum)', wirkung: `Hemmt die übermäßige Darmbewegung ohne sie komplett zu stoppen. Als Tinktur oder Tabletten bei akutem Durchfall.` }
    ],
    stoffe: [
      { name: 'Elektrolyte (Salz, Kalium, Natrium)', wirkung: `Bei Durchfall verliert der Körper massiv Flüssigkeit und Mineralien. Elektrolytlösung: 1L Wasser, 1/2 TL Salz, 6 TL Zucker, Saft einer Orange.` },
      { name: 'Aktivkohle / Zeolith', wirkung: `Binden Toxine und Bakterien im Darm. 1-2g Aktivkohle oder 3g Zeolith bei akutem Durchfall, 2 Stunden Abstand zu Medikamenten.` },
      { name: 'Saccharomyces boulardii', wirkung: `Probiotische Hefe, die bei akutem und chronischem Durchfall klinisch erprobt ist. 250mg 2x täglich. Kann auch vorbeugend bei Reisen eingenommen werden.` }
    ],
    ernaehrung: {
      empfehlung: "In der Akutphase steht der Flüssigkeitsersatz an erster Stelle. Dann langsam mit Schonkost beginnen -- kleine, leicht verdauliche Mahlzeiten. Der Darm braucht Zeit, sich zu erholen. Keine schwere Kost, keine Rohkost.",
      staerkend: ["Elektrolytlösung und Kräutertees (Kamille, Fenchel)", "Karottensuppe nach Moro (Karotten 1 Stunde kochen, pürieren)", "Geriebener Apfel (10 Min braun werden lassen -- Pektin)", "Weich gekochter Reis (Reisschleim)", "Banane (Kalium und Pektin)", "Zwieback und Knäckebrot als erste feste Nahrung"],
      meiden: ["Milchprodukte (Laktose wird bei gereiztem Darm schlecht vertragen)", "Fettiges und Gebratenes", "Rohes Obst und Gemüse in der Akutphase", "Kaffee und Alkohol", "Stark gewürzte Speisen", "Kohlensäurehaltige Getränke"],
      rezepte: [
        { name: 'Heilende Karottensuppe nach Moro', zutaten: '500g Karotten, 1L Wasser, 1 TL Salz', zubereitung: 'Karotten schälen und in 1L Wasser mindestens 60 Minuten lang kochen. Pürieren und mit Wasser wieder auf 1L auffüllen. Salz zugeben. Die lange Kochzeit erzeugt Oligosaccharide, die Bakterien binden und ausscheiden -- klinisch erprobt.' },
        { name: 'Reis-Bananen-Brei', zutaten: '100g Reis, 500ml Wasser, 1 reife Banane, Prise Salz, 1 TL Honig', zubereitung: 'Reis in viel Wasser weich kochen bis ein Brei entsteht. Banane mit einer Gabel zerdrücken und unterrühren. Mit Salz und Honig abschmecken. Stopfend, nährend und leicht verdaulich.' }
      ]
    },
    fasten: {
      text: "Bei akutem Durchfall ist natürliches Fasten sinnvoll -- der Körper signalisiert oft durch Appetitlosigkeit, dass er sich auf die Reinigung konzentrieren will. Nur Flüssigkeit zuführen, bis der Durchfall nachlässt, dann langsam mit Schonkost beginnen.",
      formen: [
        "Natürliches Krankheitsfasten (1-2 Tage) -- nur Tee, Brühe und Elektrolyte",
        "Teefasten mit Kamille, Fenchel und Ingwer",
        "Schonkost-Phase über 3-5 Tage nach der Akutphase als sanfter Wiederaufbau"
      ],
      reinigung: [
        "Zeolith oder Aktivkohle zur Bindung von Toxinen im Darm",
        "Darmsanierung nach dem Infekt mit Probiotika (S. boulardii, L. rhamnosus)",
        "Wärme auf dem Bauch -- Wärmflasche oder Kirschkernkissen",
        "Bauchmassage im Uhrzeigersinn -- beruhigt den Darm und löst Krämpfe"
      ]
    },
    bewegung: {
      text: "Bei akutem Durchfall braucht der Körper Ruhe und Wärme. Jede Anstrengung verschlechtert den Flüssigkeitsverlust. Erst nach vollständiger Erholung ist sanfte Bewegung wieder angebracht.",
      praktiken: [
        "Absolute Ruhe in der Akutphase -- der Körper braucht jede Energie für die Reinigung",
        "Sanfte Bauchmassage im Uhrzeigersinn -- beruhigt die Peristaltik",
        "Leichte Spaziergänge nach Abklingen der Symptome",
        "Sanftes Yoga mit Drehbewegungen in der Erholungsphase -- fördert die Darmfunktion"
      ]
    },
    geist: {
      einheit: "Durchfall zeigt, dass etwas durch dich hindurchgeht, ohne verdaut zu werden. Das kann ein Erlebnis sein, eine Information, eine Emotion. Dein Körper sagt: Das ist zu viel, das muss raus. Höre auf dieses Signal -- vielleicht musst du auch im Leben etwas loslassen, das du nicht verdauen kannst.",
      affirmationen: [
        "Mein Verdauungssystem ist stark und verarbeitet alles, was kommt.",
        "Ich verdaue das Leben in meinem eigenen Tempo.",
        "Ich nehme auf, was mich nährt, und lasse los, was mir schadet.",
        "Mein Darm heilt und beruhigt sich mit jedem Moment.",
        "Ich bin sicher und geschützt -- ich kann loslassen."
      ],
      meditation: "Lege dich hin und platziere beide Hände auf dem Bauch. Atme tief und langsam in die Hände hinein. Stelle dir vor, wie mit jeder Einatmung warmes, beruhigendes Licht deinen gesamten Verdauungstrakt erfüllt -- wie eine sanfte, heilende Salbe von innen. Spüre, wie die Krämpfe nachlassen und der Darm zur Ruhe kommt. 10-15 Minuten.",
      energie: "Das Solarplexus-Chakra (Manipura) ist das Zentrum der Verdauung -- sowohl physisch als auch emotional. Bei Durchfall ist es überaktiv oder aus der Balance. Arbeite mit beruhigendem, warmem gelbem Licht und dem Klang RAM. Wärmende Hände auf dem Solarplexus stabilisieren die Energie."
    },
    produkte: [
      { name: 'Zeolith / ZeoMont', desc: `Bindet Toxine und Erreger im Darm und beschleunigt die Genesung bei Magen-Darm-Infekten. Natürlicher Entgifter.`, tags: ['#zeolith', '#entgiftung', '#darm'] },
      { name: 'CBD Öl', desc: `Beruhigt den gereizten Darm, wirkt krampflösend und entzündungshemmend bei Magen-Darm-Beschwerden.`, tags: ['#cbd', '#darm', '#krampflösend'] },
      { name: 'Hanfsamen', desc: `Leicht verdauliches Protein und essentielle Fettsäuren für den Wiederaufbau nach Magen-Darm-Infekten.`, tags: ['#hanfsamen', '#protein', '#aufbau'] }
    ]
  },

  // ============================================================
  // 10. Verstopfung / Darmträgheit
  // ============================================================
  {
    id: 'verstopfung',
    name: `Verstopfung / Darmträgheit`,
    tags: ['#verstopfung', '#obstipation', '#darmträgheit', '#verdauung', '#ballaststoffe', '#stuhlgang'],
    koerper: "Verstopfung (Obstipation) liegt vor, wenn der Stuhlgang seltener als 3x pro Woche stattfindet, hart ist und das Entleeren Anstrengung erfordert. Die Ursachen sind vielfältig: Ballaststoffmangel, zu wenig Flüssigkeit, Bewegungsmangel, Stress, Schilddrüsenunterfunktion oder Medikamente (Eisenpräparate, Schmerzmittel). Chronische Verstopfung belastet den gesamten Körper, da Toxine rückresorbiert werden und die Darmflora leidet.",
    psychosomatik: {
      zitat: "Was hältst du fest, das losgelassen werden will?",
      text: "Verstopfung ist das körperliche Bild des Festhaltens. Rüdiger Dahlke sieht darin die Weigerung loszulassen -- ob Besitz, Kontrolle oder alte Muster. Der Geizige hält alles zurück, auch den Stuhl. Louise Hay verbindet Verstopfung mit dem Festklammern an der Vergangenheit und der Angst vor dem Neuen. Thorwald Dethlefsen deutet die Darmträgheit als Ausdruck dafür, dass der Betroffene das Leben nicht fließen lässt."
    },
    traditionen: {
      volksmedizin: "Leinsamen in Wasser eingeweicht waren das wichtigste Hausmittel gegen Verstopfung -- sie quellen auf und regen die Peristaltik an. Sauerkrautsaft morgens auf nüchternen Magen getrunken brachte den Darm in Schwung. Rizinusöl war das drastischere Mittel für hartnäckige Fälle.",
      tcm: "In der TCM ist Verstopfung häufig eine Qi-Stagnation oder Blut/Yin-Mangel -- der Darm hat nicht genug Feuchtigkeit oder Antrieb. Ma Zi Ren Wan ist die klassische Formel für trockene Verstopfung. Bei Qi-Stagnation bewegt Zhi Shi (Bitterorange) das Qi abwärts. Warmes Wasser morgens regt den Dickdarm-Meridian an.",
      ayurveda: "Im Ayurveda ist Verstopfung ein Vata-Grundthema -- Trockenheit und Kälte im Dickdarm. Triphala (drei Früchte) ist das wichtigste ayurvedische Darmregulans. Ghee nährt und schmiert den Darm von innen. Warmes Wasser mit Zitrone morgens und Sesamöl-Einläufe (Basti) lösen die Blockade.",
      germanisch: "In der Germanischen Heilkunde steht der Dickdarm für 'hässliche, unverdauliche Konflikte', die festgehalten werden. Chronische Verstopfung kann auf einen ungelösten Ärgerkonflikt hinweisen, der den Darm in der aktiven Phase verharren lässt.",
      alchemie: "Alchemistisch ist Verstopfung ein Übermaß an Sal -- das Prinzip der Verdichtung und Erstarrung dominiert. Es fehlt an Mercurius (Fluss, Bewegung). Spagyrische Zubereitungen von Aloe, Rhabarber und bitteren Kräutern lösen die Erstarrung und bringen den Fluss zurück."
    },
    kraeuter: [
      { name: 'Leinsamen (Linum usitatissimum)', wirkung: `Quellstoffe, die im Darm aufquellen und die Peristaltik sanft anregen. 2 EL geschroteter Leinsamen mit 250ml Wasser morgens und abends. Immer reichlich trinken.` },
      { name: 'Flohsamenschalen (Plantago ovata)', wirkung: `Binden das 50-fache ihres Gewichts an Wasser und bilden einen gleitfähigen Schleim. 1-2 TL in 300ml Wasser, sofort trinken, dann 2 Gläser Wasser nachtrinken.` },
      { name: 'Löwenzahn (Taraxacum officinale)', wirkung: `Bitterstoffe regen die Gallensekretion und Darmperistaltik an. Als Tee (Wurzel), frische Blätter im Salat oder als Tinktur vor den Mahlzeiten.` },
      { name: 'Aloe Vera', wirkung: `Das Gel wirkt mild abführend durch Anthrachinone. Als Saft 30-50ml morgens nüchtern. Nicht dauerhaft anwenden, da der Darm sich gewöhnt.` },
      { name: 'Faulbaumrinde (Frangula alnus)', wirkung: `Stärker abführend durch Anthrachinone. Als Tee oder Tinktur kurzfristig bei hartnäckiger Verstopfung. Maximal 1-2 Wochen, dann Ursache behandeln.` }
    ],
    stoffe: [
      { name: 'Magnesium (Magnesiumcitrat)', wirkung: `Zieht Wasser in den Darm und entspannt die Darmmuskulatur. 400-800mg abends als Magnesiumcitrat -- weicht den Stuhl auf natürliche Weise auf.` },
      { name: 'Probiotika', wirkung: `Eine gesunde Darmflora ist essentiell für die Darmbewegung. Bifidobacterium lactis und Lactobacillus rhamnosus verbessern die Stuhlfrequenz nachweislich.` },
      { name: 'Vitamin C (hochdosiert)', wirkung: `In hohen Dosen (3-5g) wirkt Vitamin C abführend (osmotische Wirkung). Die Darmtoleranz als Dosis-Indikator nutzen.` }
    ],
    ernaehrung: {
      empfehlung: "Ballaststoffe und Wasser sind die Grundlage jeder Verstopfungstherapie. Der Darm braucht mindestens 30g Ballaststoffe und 2 Liter Wasser täglich. Langsam steigern, sonst drohen Blähungen. Regelmäßige Mahlzeiten und feste Essenszeiten trainieren den Darmrhythmus.",
      staerkend: ["Leinsamen und Flohsamenschalen (quellfähige Ballaststoffe)", "Sauerkraut und fermentiertes Gemüse (Milchsäurebakterien)", "Pflaumen und Feigen (natürlich abführend)", "Vollkorngetreide und Hülsenfrüchte", "Warmes Wasser mit Zitrone morgens nüchtern", "Olivenöl (1 EL morgens nüchtern -- schmiert den Darm)"],
      meiden: ["Weißmehl und weißer Reis (ballaststoffarm und stopfend)", "Bananen (unreife wirken stopfend)", "Schokolade und Süßigkeiten", "Fertiggerichte (kaum Ballaststoffe)", "Zu viel Fleisch und Käse ohne Gemüse"],
      rezepte: [
        { name: 'Morgen-Ritual für den Darm', zutaten: '1 Glas warmes Wasser, 1/2 Zitrone, 1 EL Leinsamen (geschrotet), 2 eingeweichte Pflaumen', zubereitung: 'Direkt nach dem Aufstehen das warme Zitronenwasser trinken. 15 Minuten warten, dann Leinsamen und eingeweichte Pflaumen essen. Mit einem weiteren Glas Wasser nachspülen. Tägliches Ritual, das den Darm zuverlässig in Gang bringt.' },
        { name: 'Ballaststoff-Power-Müsli', zutaten: '3 EL Haferflocken, 1 EL Leinsamen, 1 EL Flohsamenschalen, 3 Pflaumen, Joghurt oder Pflanzenmilch, 1 TL Honig', zubereitung: 'Haferflocken, Leinsamen und Flohsamenschalen in Joghurt oder Pflanzenmilch einweichen (über Nacht ideal). Klein geschnittene Pflaumen untermischen, mit Honig süßen. Langsam essen und 2 Gläser Wasser dazu trinken.' }
      ]
    },
    fasten: {
      text: "Fasten kann bei chronischer Verstopfung zunächst kontraproduktiv wirken, da der Darm Volumen braucht. Saftfasten oder Basenfasten mit viel Gemüse und Flüssigkeit können jedoch die Darmflora regenerieren und den Darm neu schulen.",
      formen: [
        "Saftfasten mit Pflaumensaft und Sauerkrautsaft (3 Tage) -- spült den Darm durch",
        "Basenfasten mit viel Gemüse und Leinsamen (7 Tage)",
        "Intermittierendes Fasten 16:8 -- gibt dem Darm Zeit zur vollständigen Entleerung zwischen den Mahlzeiten"
      ],
      reinigung: [
        "Darmspülung (Einlauf) mit warmem Wasser und Kamillentee -- löst alte Ablagerungen",
        "Ölziehen morgens mit Sesamöl -- regt die Verdauung reflektorisch an",
        "Bauchmassage im Uhrzeigersinn mit warmem Rizinusöl -- stimuliert die Peristaltik",
        "Leberreinigung mit Bitterstoffen -- die Galle ist für die Darmbewegung essentiell"
      ]
    },
    bewegung: {
      text: "Bewegung ist einer der wichtigsten Schlüssel bei Verstopfung. Die Darmperistaltik wird direkt durch körperliche Aktivität angeregt. Schon ein täglicher Spaziergang nach dem Essen kann Wunder wirken.",
      praktiken: [
        "Spaziergang nach jeder Mahlzeit (15-20 Minuten) -- regt die gastrokolische Reflexe an",
        "Yoga mit Drehbewegungen und Vorwärtsbeugen -- massiert die inneren Organe",
        "Tiefe Bauchatmung -- massiert den Darm von innen durch die Zwerchfellbewegung",
        "Hocke (Squat-Position) -- die natürliche Haltung für den Stuhlgang, auch als Übung"
      ]
    },
    geist: {
      einheit: "Verstopfung ist das Bild des Festhaltens. Der Körper spiegelt, was im Leben geschieht: Kontrolle, Geiz, Angst vor Veränderung, das Festklammern an Altem. Die Heilung liegt im Loslassen -- nicht nur körperlich, sondern in allen Lebensbereichen. Was darfst du endlich gehen lassen?",
      affirmationen: [
        "Ich lasse los -- leicht, natürlich und regelmäßig.",
        "Mein Darm arbeitet rhythmisch und kraftvoll.",
        "Ich vertraue dem Fluss des Lebens.",
        "Altes darf gehen, damit Neues kommen kann.",
        "Mein Körper weiß, wann es Zeit ist loszulassen -- und ich folge ihm."
      ],
      meditation: "Setze dich morgens auf die Toilette (auch ohne Drang) und entspanne bewusst den Beckenboden. Atme tief in den Bauch und stelle dir vor, wie eine warme Welle langsam durch deinen gesamten Verdauungstrakt abwärts fließt -- vom Magen über den Dünndarm bis zum Dickdarm. Lass alles fließen. Kein Pressen, kein Drängen -- nur Loslassen. 5-10 Minuten täglich zur gleichen Uhrzeit trainiert den Darmrhythmus.",
      energie: "Das Wurzelchakra (Muladhara) und das Sakralchakra (Svadhisthana) steuern die Ausscheidung. Verstopfung zeigt eine Blockade im Wurzelchakra -- festhalten aus Angst, nicht genug zu haben. Arbeite mit rotem Licht (LAM) für das Wurzelchakra und orange (VAM) für das Sakralchakra. Erdungsübungen und Barfußgehen lösen die Blockade."
    },
    produkte: [
      { name: 'Zeolith / ZeoMont', desc: `Bindet Toxine im Darm und fördert durch Volumenzunahme die Darmbewegung. Immer mit viel Wasser einnehmen.`, tags: ['#zeolith', '#darm', '#entgiftung'] },
      { name: 'Hanfsamen', desc: `Reich an Ballaststoffen und gesunden Fetten, die den Stuhl weich und gleitfähig machen. 2-3 EL täglich.`, tags: ['#hanfsamen', '#ballaststoffe', '#verdauung'] },
      { name: 'CBD Öl', desc: `Reguliert die Darmmotilität über das Endocannabinoid-System und löst stressbedingte Verkrampfungen im Darm.`, tags: ['#cbd', '#darm', '#entspannung'] },
      { name: 'Magnesium-Öl', desc: `Transdermale Magnesiumaufnahme ergänzt die orale Einnahme. Auf den Bauch einmassiert entspannt es die Darmmuskulatur.`, tags: ['#magnesium', '#transdermal', '#darm'] }
    ]
  }

];
