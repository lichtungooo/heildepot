export const CONDITIONS_2 = [

  // ============================================================
  // 11. Allergie / Heuschnupfen
  // ============================================================
  {
    id: 'allergie',
    name: 'Allergie / Heuschnupfen',
    tags: ['#allergie', '#heuschnupfen', '#immunsystem', '#histamin', '#pollenallergie', '#nahrungsmittelallergie'],
    koerper: "Bei einer Allergie reagiert das Immunsystem überschiesend auf Stoffe, die eigentlich harmlos sind -- Pollen, Tierhaare, Nahrungsmittel. Mastzellen schütten vermehrt Histamin aus, was Schwellungen, Juckreiz, Tränenfluss und Niesreiz auslöst. Die Schleimhäute entzünden sich, die Atemwege verengen sich, der Körper befindet sich in einem Dauerzustand der Abwehr. Das Immunsystem hat verlernt, zwischen Freund und Feind zu unterscheiden.",
    psychosomatik: {
      zitat: "Wogegen wehrst du dich wirklich?",
      text: "Die Allergie zeigt eine tiefe innere Abwehrhaltung -- etwas im Leben wird als bedrohlich empfunden, obwohl es das gar nicht ist. Häufig steckt eine verdrängte Aggression dahinter, ein stilles 'Das will ich hier nicht'. Bei Heuschnupfen ist es oft die Lebendigkeit selbst, die Fruchtbarkeit und Sinnlichkeit des Frühlings, die unbewusst abgewehrt wird. Wer die Allergie versteht, darf sich fragen: Wo sage ich 'Nein' zum Leben, wo darf ich mich öffnen und annehmen? In der Bejahung dessen, was ist, entspannt sich das Immunsystem.",
    },
    traditionen: {
      volksmedizin: "Die Volksmedizin setzte auf Brennnessel als natürliches Antihistaminikum und auf Honig aus der Region, um den Körper sanft an Pollen zu gewöhnen. Schwarzkümmelsamen galten als Allheilmittel für überschiesende Immunantworten.",
      tcm: "In der TCM gehört die Allergie zum Funktionskreis Lunge und Wei-Qi (Abwehr-Qi). Ein schwaches Lungen-Qi lässt Wind und pathogene Faktoren eindringen. Die Behandlung stärkt das Lungen-Qi und harmonisiert die Milz, die als Wurzel des Wei-Qi gilt.",
      ayurveda: "Im Ayurveda zeigt sich Allergie als Kapha-Pitta-Störung mit überschüssigem Ama (Schlacken) im Gewebe. Reinigung durch Panchakarma und Stärkung von Agni (Verdauungsfeuer) stehen im Zentrum. Kurkuma und Tulsi sind klassische Heilpflanzen.",
      germanisch: "In der germanischen Medizin nach Hamer zeigt sich Allergie als hängende Heilungsphase -- ein Trennungskonflikt, der immer wieder getriggert wird. Die Schleimhaute erinnern sich an den ursprünglichen Schock und reagieren bei jeder ähnlichen Situation.",
      alchemie: "Alchemistisch betrachtet ist Allergie ein Zeichen, dass Sulphur (Seelenkraft) und Sal (Körper) in Disharmonie sind. Der Körper wehrt ab, was die Seele einladen möchte. Die Lösung liegt in der Vereinigung der Gegensetze -- dem Annehmen.",
    },
    kraeuter: [
      { name: 'Brennnessel', wirkung: `Natürliches Antihistaminikum. Reguliert die Histaminausschüttung und stärkt das Immunsystem. Als Tee (3 Tassen täglich) oder als Frischpflanzenpresssaft.` },
      { name: `Schwarzkümmel (Nigella sativa)`, wirkung: `Moduliert die Immunantwort und wirkt stark entzündungshemmend. Das Öl täglich einen Telöffel einnehmen -- idealerweise Wochen vor der Pollensaison beginnen.` },
      { name: 'Augentrost (Euphrasia)', wirkung: `Lindert tränende, juckende Augen und beruhigt entzündete Schleimhäute. Als Augentropfen oder Tee-Kompresse.` },
      { name: 'Spitzwegerich', wirkung: `Beruhigt gereizte Atemwege und Schleimhäute. Wirkt abschwellend und schützt die Bronchien. Als Sirup oder Tee.` },
      { name: 'Kurkuma', wirkung: `Stark entzündungshemmend durch Curcumin. Reguliert die Immunantwort und reduziert Histaminfreisetzung. Mit schwarzem Pfeffer und Fett einnehmen für bessere Aufnahme.` },
      { name: 'Reishi-Pilz', wirkung: `Adaptogen, das das Immunsystem intelligent reguliert -- beruhigt Überreaktionen und stärkt die Grundabwehr. Als Extrakt oder Pulver über längere Zeit einnehmen.` },
    ],
    stoffe: [
      { name: 'Vitamin C', wirkung: `Natürlicher Histaminsenker. Hohe Dosen (1-3g täglich) senken den Histaminspiegel und stärken die Schleimhäute.` },
      { name: 'Quercetin', wirkung: `Bioflavonoid, das Mastzellen stabilisiert und die Histaminfreisetzung reduziert. In Kombination mit Vitamin C besonders wirksam.` },
      { name: 'Zink', wirkung: `Essenziell für ein ausgeglichenes Immunsystem. Reguliert die T-Zell-Funktion und reduziert entzündliche Überreaktionen.` },
      { name: 'MSM (Methylsulfonylmethan)', wirkung: `Organischer Schwefel mit starker antiallergischer Wirkung. Reduziert Schwellungen der Schleimhäute und erleichtert die Atmung.` },
    ],
    ernaehrung: {
      empfehlung: "Eine entzündungsarme, histaminarme Ernährung entlastet das Immunsystem. Frische, naturbelassene Lebensmittel bilden die Basis. Fermentiertes und lang gelagertes erhöhen den Histaminspiegel -- frisch zubereitete Mahlzeiten sind ideal.",
      staerkend: ["Frisches Obst (Äpfel, Beeren, Birnen)", 'Grünes Blattgemüse', 'Frischer Ingwer', 'Kurkuma', 'Leinsamen und Hanfsamen', "Lokaler Honig (desensibilisierend)", 'Brokkoli und Blumenkohl', "Frischer Fisch (direkt zubereitet)"],
      meiden: ["Histaminreiche Lebensmittel (gereifter Käse, Salami, Rotwein)", 'Zitrusfrüchte während akuter Schübe', 'Industriezucker', 'Kuhmilchprodukte', 'Weizen und Gluten', 'Alkohol', "Fertiggerichte und Zusatzstoffe"],
      rezepte: [
        { name: 'Anti-Allergie-Goldene-Milch', zutaten: '300ml Hafermilch, 1 TL Kurkuma, 1/2 TL Ingwer frisch gerieben, Prise schwarzer Pfeffer, 1 TL Kokosöl, 1 TL Honig', zubereitung: 'Hafermilch erwärmen, Kurkuma und Ingwer einrühren, Pfeffer und Kokosöl zugeben, mit Honig süßen. Täglich trinken -- besonders in der Allergiesaison.' },
        { name: 'Brennnessel-Smoothie', zutaten: 'Handvoll frische Brennnesselblätter (mit Handschuhen ernten), 1 Banane, 1 Handvoll Heidelbeeren, 200ml Wasser, 1 EL Hanfsamen', zubereitung: 'Alles im Mixer pürieren. Der Smoothie versorgt mit natürlichem Antihistamin, Vitamin C und Omega-3-Fettsäuren.' },
      ]
    },
    fasten: {
      text: "Fasten gibt dem Immunsystem die Möglichkeit, sich zu regenerieren und Fehlprogrammierungen zu korrigieren. Schon kurze Fastenphasen senken den Histaminspiegel deutlich und beruhigen überaktive Mastzellen.",
      formen: ["Intermittierendes Fasten 16:8 während der Allergiesaison", "3-5 Tage Saftfasten mit Selleriesaft und Gurkensaft", "Basenfasten über 7-14 Tage zur Grundreinigung"],
      reinigung: ["Nasenspülung mit Salzwasser (Jala Neti) -- täglich morgens", 'Dampfinhalation mit Kamille und Thymian', "Darmreinigung mit Zeolith und Flohsamenschalen"]
    },
    bewegung: {
      text: "Sanfte Bewegung an der frischen Luft stärkt das Immunsystem und trainiert die Schleimhäute. An pollenstarken Tagen ist Bewegung in Innenraeumen oder nach Regen ideal.",
      praktiken: ["Pranayama (Wechselatmung) -- beruhigt das Immunsystem und stärkt die Lungenkapazität, 10 Minuten täglich", 'Qi Gong für die Lunge -- sanfte Armbewegungen mit tiefer Atmung öffnen den Brustraum', 'Schwimmen -- befeuchtet die Atemwege und stärkt die Ausdauer', "Waldspaziergänge nach dem Regen -- die sauberste Luft und Phytonzide der Baeume beruhigen das Immunsystem"]
    },
    geist: {
      einheit: "Die Allergie lädt ein, das Leben in seiner ganzen Fülle willkommen zu heißen. Was du abwehrst, darf ankommen. In der Annahme liegt Heilung -- der Körper darf sich entspannen, wenn die Seele Ja sagt.",
      affirmationen: ["Ich bin sicher in dieser Welt. Das Leben meint es gut mit mir.", "Ich öffne mich für alles, was mich umgibt -- ich bin eins mit der Natur.", "Mein Körper weiß, was zu mir gehört und was vorübergeht. Ich vertraue ihm.", "Ich atme frei und tief. Die Welt ist mein Zuhause."],
      meditation: "Setze dich in die Natur oder ans offene Fenster. Atme bewusst die Luft ein -- mit allem, was sie trägt. Stell dir vor, wie jeder Atemzug dich nährt und stärkt. Sprich innerlich: 'Ich nehme an. Ich bin Teil dieser Welt.' Spüre, wie dein Körper sich entspannt und die Abwehr weicht.",
      energie: "Das Herzchakra (Anahata) ist hier zentral -- Allergie zeigt sich, wenn die Liebesfähigkeit sich verschließt. Öffne das Herzchakra durch sanftes Summen, Hande aufs Herz legen und bewusstes Fühlen von Dankbarkeit. Auch das Halschakra profitiert von blauem Licht und Töneübungen.",
    },
    produkte: [
      { name: 'Artemisia Annua', desc: `Einjähriger Beifuß mit starker immunmodulierender Wirkung. Unterstützt den Körper dabei, überschiesende Immunantworten zu regulieren.`, tags: ['#immunsystem', '#entzündungshemmend', '#artemisinin'] },
      { name: 'Zeolith/ZeoMont', desc: `Bindet Histamin und Schadstoffe im Darm, entlastet das Immunsystem und stärkt die Darmbarriere -- dort, wo Allergie oft ihren Ursprung hat.`, tags: ['#entgiftung', '#darmgesundheit', '#histamin'] },
      { name: 'Anorganischer Schwefel', desc: `MSM-Quelle, die die Schleimhäute stärkt und die Histaminreaktion dämpft. Unterstützt die Entgiftung über die Leber.`, tags: ['#schwefel', '#schleimhäute', '#entgiftung'] },
      { name: 'Hanfsamen', desc: `Reich an Omega-3-Fettsäuren und Gamma-Linolensäure -- beides reguliert Entzündungsprozesse und stärkt die Hautbarriere.`, tags: ['#omega3', '#entzündungshemmend', '#ernährung'] },
    ]
  },

  // ============================================================
  // 12. Bluthochdruck / Herz-Kreislauf
  // ============================================================
  {
    id: 'bluthochdruck',
    name: 'Bluthochdruck / Herz-Kreislauf',
    tags: ['#bluthochdruck', '#hypertonie', '#herzkreislauf', '#herz', '#gefäße', '#blutdruck'],
    koerper: "Bei Bluthochdruck arbeitet das Herz ständig gegen erhöhten Widerstand in den Gefäßen. Die Arterienwande verdicken sich, verlieren ihre Elastizität und der Druck steigt dauerhaft über 140/90 mmHg. Das Herz muss mehr leisten, die Gefäße verengen sich -- ein Kreislauf entsteht, der Herz, Nieren und Gehirn belastet. Oft zeigt sich über Jahre kein Symptom, während der Körper still leidet.",
    psychosomatik: {
      zitat: "Welchen Druck machst du dir selbst?",
      text: "Der Blutdruck ist der Spiegel des inneren Drucks. Wer sich ständig unter Druck setzt, Leistung erbringen will, alles kontrollieren möchte, dessen Blut drückt entsprechend gegen die Wände. Es ist verdrängte Emotion, die sich körperlich ausdrückt -- gehaltener Zorn, ungesagte Worte, das Gefühl, ständig funktionieren zu müssen. In der Entspannung, im Loslassen, im ehrlichen Ausdruck der Gefühle findet der Druck sein natürliches Maß.",
    },
    traditionen: {
      volksmedizin: "Weißdorn galt seit Jahrhunderten als das Herzkraut schlechthin -- stärkend, regulierend, schützend. Knoblauch wurde täglich gegessen, um das Blut fliessfähig zu halten. Mistel als Tee senkte sanft den Druck.",
      tcm: "In der TCM entsteht Bluthochdruck durch aufsteigendes Leber-Yang -- oft durch Leber-Qi-Stagnation (Stress, unterdrückter Zorn) oder Yin-Mangel. Die Behandlung beruhigt das Leber-Yang, nährt das Yin und bewegt stagniertes Qi. Chrysanthementee und Sellerie sind klassische Mittel.",
      ayurveda: "Bluthochdruck zeigt im Ayurveda ein erhöhtes Pitta und Vata. Das Blut ist zu heiß und unruhig. Kühlende Nahrung, meditative Praxis und Pitta-ausgleichende Kräuter wie Brahmi und Arjuna (Terminalia arjuna) bringen Gleichgewicht.",
      germanisch: "In der germanischen Medizin zeigt Bluthochdruck einen Revierkonflikt -- das Gefühl, das eigene Territorium verteidigen zu müssen, ständig wachsam zu sein. Die Entspannung kommt, wenn das Revier als sicher empfunden wird.",
      alchemie: "Alchemistisch ist das Herz der Sitz der Sonne im Menschen. Bluthochdruck zeigt ein Übermäss an Sulphur -- zu viel Feuer, zu viel Antrieb. Die Lösunge liegt in der Verbindung mit Mercurius -- dem Fluss, dem Loslassen, dem Vertrauen in den natürlichen Rhythmus.",
    },
    kraeuter: [
      { name: 'Weißdorn (Crataegus)', wirkung: `Das Herzkraut schlechthin. Stärkt den Herzmuskel, erweitert die Herzkranzgefäße, reguliert den Blutdruck in beide Richtungen. Als Tee, Tinktur oder Extrakt über Monate einnehmen.` },
      { name: 'Mistel (Viscum album)', wirkung: `Senkt sanft den Blutdruck und beruhigt das vegetative Nervensystem. Als Kaltauszug über Nacht -- morgens trinken.` },
      { name: `Olive (Olea europaea) -- Blätter`, wirkung: `Olivenblätterextrakt senkt den Blutdruck vergleichbar mit Medikamenten. Erweitert die Gefäße und schützt die Arterienwand.` },
      { name: 'Hibiskus', wirkung: `Klinisch erforscht: 3 Tassen Hibiskustee täglich senken den systolischen Blutdruck messbar. Zudem reich an Anthocyanen, die die Gefäße schützen.` },
      { name: 'Baldrian', wirkung: `Beruhigt das Nervensystem und löst innere Anspannung -- eine häufige Ursache für Bluthochdruck. Als Tee am Abend.` },
      { name: 'Knoblauch (Allium sativum)', wirkung: `Erweitert die Blutgefäße, senkt den Blutdruck, hält das Blut fliessfähig und schützt die Gefäßwand. Täglich frisch oder als Tinktur.` },
    ],
    stoffe: [
      { name: 'Magnesium', wirkung: `Der wichtigste Mineralstoff für entspannte Gefäße. Magnesium weitet die Blutgefäße und senkt den Blutdruck. 400-600mg täglich, am besten als Magnesiumcitrat oder transdermal als Magnesiumöl.` },
      { name: 'Kalium', wirkung: `Reguliert den Natriumhaushalt und senkt den Blutdruck. Reich enthalten in Bananen, Kartoffeln und grünem Blattgemüse.` },
      { name: 'Omega-3-Fettsäuren', wirkung: `Machen die Gefässwande elastisch und reduzieren Entzündungen im Herz-Kreislauf-System. Aus Leinöl, Hanfsamen oder Algenöl.` },
      { name: 'Coenzym Q10', wirkung: `Versorgt den Herzmuskel mit Energie und senkt nachweislich den Blutdruck. Besonders wichtig bei gleichzeitiger Statin-Einnahme.` },
    ],
    ernaehrung: {
      empfehlung: "Eine pflanzenreiche, kaliumreiche und natriumarme Ernährung ist das Fundament. Frisches Gemüse, Beeren, Nüsse und gute Öle nähren Herz und Gefäße. Jede Mahlzeit darf bunt und lebendig sein.",
      staerkend: ["Rote Bete (natürliches Nitrat weitet Gefäße)", "Sellerie (täglich 4 Stangen senken den Blutdruck)", "Dunkle Beeren (Blaubeeren, Aronia)", "Grünes Blattgemüse (Spinat, Mangold)", 'Walnüsse', 'Leinsamen und Hanfsamen', 'Knoblauch und Zwiebeln', "Granatapfel"],
      meiden: ["Überschüssiges Salz und salzreiche Fertigprodukte", 'Industriezucker', 'Alkohol in größeren Mengen', 'Koffein in Übermässen', 'Transfette und frittierte Lebensmittel', "Schweres rotes Fleisch"],
      rezepte: [
        { name: 'Herz-Kreislauf-Saft', zutaten: '2 Rote Bete, 4 Stangen Sellerie, 1 Apfel, Stück Ingwer, Saft einer halben Zitrone', zubereitung: 'Alles durch den Entsafter geben. Morgens auf nüchternen Magen trinken. Die Rote Bete liefert natürliches Nitrat, das die Gefäße weitet, der Sellerie reguliert den Blutdruck.' },
        { name: 'Weißdorn-Herz-Tee', zutaten: '2 TL Weissdornblüten und -blätter, 1 TL Hibiskusblüten, 1 TL Melisse', zubereitung: 'Mit 250ml heißem Wasser übergießen, 10 Minuten ziehen lassen. 3 Tassen täglich über Monate trinken. Dieser Tee nährt und stärkt das Herz sanft und stetig.' },
      ]
    },
    fasten: {
      text: "Fasten senkt den Blutdruck oft innerhalb weniger Tage spürbar. Der Körper kommt zur Ruhe, die Gefäße entspannen sich, überschüssiges Natrium und Wasser werden ausgeschwemmt. Regelmassiges Fasten ist eine der wirksamsten natürlichen Maßnahmen für ein gesundes Herz.",
      formen: ["Intermittierendes Fasten 16:8 als dauerhafte Lebensweise", "Buchinger-Heilfasten 7-10 Tage unter Begleitung", "Basenfasten 14 Tage -- besonders Herz-Kreislauf-fördernd"],
      reinigung: ["Aderlass nach Hildegard von Bingen -- traditionell reinigend für das Blut", 'Trockenbürsten am Morgen -- fördert die Durchblutung', "Wechselduschen nach Kneipp -- trainieren die Gefäßelastizität"]
    },
    bewegung: {
      text: "Regelmäßige, moderate Ausdauerbewegung ist für Herz und Gefäße essenziell. Schon 30 Minuten tägliches Gehen senken den Blutdruck messbar. Wichtig ist Freude an der Bewegung -- alles darf leicht sein.",
      praktiken: ["Zügiges Spazierengehen -- 30-45 Minuten täglich in der Natur, senkt den Druck zuverlässig", "Tai Chi -- verbindet sanfte Bewegung mit Meditation, klinisch erforscht bei Bluthochdruck", 'Schwimmen -- entlastet die Gelenke und trainiert das Herz gleichmäßig', "Yoga (sanft) -- besonders Vorwärtsbeugen und Shavasana senken den Blutdruck sofort"]
    },
    geist: {
      einheit: "Das Herz ist das Zentrum deines Seins. Bluthochdruck zeigt, dass das Herz unter Druck steht -- innerem Druck. In dem Moment, wo du aufhörst, dir Druck zu machen, darf auch dein Blut wieder frei fließen. Dein Herz möchte lieben, fühlen und lebendig sein.",
      affirmationen: ["Ich lasse los. Ich vertraue dem Fluss des Lebens.", "Mein Herz schlägt ruhig und kraftvoll. Ich bin getragen.", "Ich darf entspannen. Alles hat seine Zeit.", "Ich öffne mein Herz und lasse Liebe fließen -- in mich hinein und aus mir heraus."],
      meditation: "Lege beide Hände auf dein Herz. Spüre den Herzschlag. Atme langsam ein und zähle bis 4, halte den Atem für 4 Zähler, atme aus für 8 Zähler. Wiederhole dies 10 Mal. Diese Übung aktiviert den Parasympathikus und senkt den Blutdruck sofort. Spüre dabei Dankbarkeit für dein Herz, das seit deinem ersten Lebenstag für dich schlägt.",
      energie: "Das Herzchakra (Anahata) und das Solarplexus-Chakra (Manipura) sind hier angesprochen. Grünes Licht nährt das Herz, Loslassen von Kontrolle befreit den Solarplexus. Rosenquarz auf dem Herzen unterstützt die Öffnung.",
    },
    produkte: [
      { name: 'Magnesium-Öl', desc: `Transdermales Magnesium wird direkt über die Haut aufgenommen -- entspannt die Gefäße und senkt den Blutdruck. Täglich auf Arme und Beine sprühen.`, tags: ['#magnesium', '#gefäße', '#entspannung'] },
      { name: 'Knoblauch-Tinktur', desc: `Traditionelles Herz-Kreislauf-Mittel. Hält das Blut fliesssfähig, senkt den Blutdruck und schützt die Gefäße von innen.`, tags: ['#herz', '#gefäße', '#blutdruck'] },
      { name: 'CBD-Öl', desc: `Wirkt über das Endocannabinoid-System entspannend auf Gefäße und Nervensystem. Senkt Stress-bedingten Bluthochdruck.`, tags: ['#entspannung', '#stress', '#blutdruck'] },
      { name: 'Hanfsamen', desc: `Perfektes Verhältnis von Omega-3 zu Omega-6. Schützen die Gefässwande und regulieren Entzündungsprozesse im Herz-Kreislauf-System.`, tags: ['#omega3', '#herzgesundheit', '#ernährung'] },
    ]
  },

  // ============================================================
  // 13. Diabetes
  // ============================================================
  {
    id: 'diabetes',
    name: 'Diabetes',
    tags: ['#diabetes', '#blutzucker', '#insulinresistenz', '#bauchspeicheldrüse', '#stoffwechsel'],
    koerper: "Bei Diabetes ist der Zuckerstoffwechsel aus dem Gleichgewicht. Bei Typ 2 reagieren die Zellen zunehmend taub auf Insulin -- sie öffnen ihre Türen für Zucker immer weniger. Die Bauchspeicheldrüse produziert immer mehr Insulin, bis sie erschöpft. Der Zucker staut sich im Blut und schädigt über die Jahre Gefäße, Nerven, Augen und Nieren. Es ist ein stiller Prozess, der früher beginnt, als die meisten ahnen.",
    psychosomatik: {
      zitat: "Wo fehlt die Süße in deinem Leben?",
      text: "Diabetes zeigt eine tiefe Sehnsucht nach Süße, Liebe und Geborgenheit, die im außen gesucht wird. Der Körper kann die Süße (Zucker) buchstäblich aufnehmen -- und doch kommt sie in den Zellen an. Es ist das Thema des Empfangens: Wer sich Liebe und Nähe wünscht, sie gleichzeitig abwehrt, dessen Zellen verschließen sich. Im Annehmen von Liebe, in der Selbstfürsorge und im Erlauben von Genuss liegt ein Schlüssel zur Heilung.",
    },
    traditionen: {
      volksmedizin: "Bittermelone, Zimt und Bockshornklee galten traditionell als blutzuckersenkend. Heidelbeerblättertee war das 'pflanzliche Insulin' der Volksmedizin. Löwenzahnwurzel stärkte die Bauchspeicheldrüse.",
      tcm: "In der TCM ist Diabetes (Xiao Ke -- 'Verzehr und Durst') eine Yin-Mangel-Erkrankung mit Hitze. Das Yin von Lunge, Magen und Niere ist erschöpft. Die Behandlung nährt das Yin, kühlt die Hitze und stärkt die Niere als Wurzel des Lebens.",
      ayurveda: "Im Ayurveda heißt Diabetes 'Madhumeha' (Honigurin) und zeigt ein gestörtes Kapha mit vermindertem Agni. Bitterstoffe, Kurkuma, Bockshornklee und eine Kapha-reduzierende Ernährung bilden die Therapie. Shilajit gilt als besonders wertvoll.",
      germanisch: "In der germanischen Medizin zeigt Diabetes einen Sträuben-Konflikt -- der Widerstand gegen etwas Ekliges, Unzumutbares. Die Bauchspeicheldrüse reagiert auf das, was als unverdaulich empfunden wird.",
      alchemie: "Alchemistisch ist Zucker das Prinzip der Süße -- Venus. Diabetes zeigt eine Störung im Venus-Prinzip: Die Fähigkeit, das Süße des Lebens aufzunehmen und zu verwandeln, ist blockiert. Die Transformation geschieht durch wahre innere Süße.",
    },
    kraeuter: [
      { name: 'Zimt (Ceylon)', wirkung: `Verbessert die Insulinsensitivität der Zellen und senkt den Nüchternblutzucker. 1-2g Ceylon-Zimt täglich zum Essen oder als Tee.` },
      { name: 'Bockshornklee', wirkung: `Die Samen enthalten Galactomannan, das die Zuckeraufnahme verlangsamt, und 4-Hydroxyisoleucin, das die Insulinausschüttung unterstützt. Samen über Nacht einweichen, morgens kauen.` },
      { name: `Bittermelone (Momordica charantia)`, wirkung: `Wirkt wie pflanzliches Insulin -- senkt den Blutzucker durch mehrere Mechanismen. Als Saft, Tee oder Kapseln.` },
      { name: 'Löwenzahnwurzel', wirkung: `Stärkt die Bauchspeicheldrüse und die Leber, verbessert den gesamten Stoffwechsel. Als Wurzel-Tee oder geröstet als Kaffee-Ersatz.` },
      { name: 'Heidelbeerblätter', wirkung: `Enthalten Myrtillin, das blutzuckersenkend wirkt. Als Tee (2-3 Tassen täglich) über längere Zeit.` },
      { name: 'Kurkuma', wirkung: `Verbessert die Insulinsensitivität und schützt die Betazellen der Bauchspeicheldrüse. Täglich mit schwarzem Pfeffer und Fett einnehmen.` },
    ],
    stoffe: [
      { name: 'Chrom', wirkung: `Essenziell für die Insulinwirkung. Chrom verstärkt das Insulinsignal an der Zelle und verbessert die Glukoseaufnahme. 200-400 mcg täglich.` },
      { name: 'Alpha-Liponsäure', wirkung: `Verbessert die Insulinsensitivität und schützt die Nerven -- besonders wichtig bei diabetischer Neuropathie.` },
      { name: 'Magnesium', wirkung: `Magnesiummangel ist bei Diabetikern extrem häufig und verschlechtert die Insulinresistenz. 400mg täglich gleichen den Mangel aus und verbessern den Zuckerstoffwechsel.` },
      { name: 'Vitamin D', wirkung: `Reguliert die Insulinausschüttung und schützt die Betazellen. Die meisten Diabetiker haben einen massiven Vitamin-D-Mangel.` },
    ],
    ernaehrung: {
      empfehlung: "Die Ernährung ist bei Diabetes der mächtigste Hebel. Komplexe Kohlenhydrate, viel Gemüse, gute Fette und Eiweiße halten den Blutzucker stabil. Jede Mahlzeit beginnt idealerweise mit Gemüse oder Salat -- das verlangsamt den Zuckeranstieg.",
      staerkend: ["Grünes Gemüse (Brokkoli, Spinat, Grünkohl)", "Hülsenfrüchte (Linsen, Kichererbsen)", "Nüsse und Samen (Walnüsse, Hanfsamen, Leinsamen)", "Bittere Salate (Chicorée, Radicchio, Löwenzahn)", "Zimt, Kurkuma, Bockshornklee", 'Avocado', 'Fermentiertes Gemüse', "Kokosöl und Olivenöl"],
      meiden: ["Weissmehl und Zucker", 'Süße Getränke und Säfte', 'Weißer Reis und Kartoffelbrei', 'Süßigkeiten und Backwaren', 'Fruchtjoghurt und gesüßte Cerealien', 'Alkohol', "Stark verarbeitete Lebensmittel"],
      rezepte: [
        { name: 'Blutzucker-Balance-Gemüse', zutaten: '200g Brokkoli, 100g Kichererbsen (gekocht), 1 Avocado, 2 EL Olivenöl, 1 TL Kurkuma, 1/2 TL Zimt, Zitronensaft, Hanfsamen', zubereitung: 'Brokkoli dämpfen, mit Kichererbsen, Avocado-Stücken, Olivenöl und Gewürzen vermengen. Mit Hanfsamen bestreuen. Diese Mahlzeit hält den Blutzucker für Stunden stabil.' },
        { name: 'Zimt-Bockshornklee-Tee', zutaten: '1 TL Bockshornkleesamen, 1 Zimtstange, 1 Scheibe Ingwer, 300ml Wasser', zubereitung: 'Bockshornkleesamen über Nacht in Wasser einweichen. Morgens aufkochen mit Zimtstange und Ingwer, 10 Minuten köcheln. Abseihen und warm trinken -- vor dem Frühstück.' },
      ]
    },
    fasten: {
      text: "Fasten ist bei Typ-2-Diabetes eine der kraftvollsten Maßnahmen. Es senkt den Insulinspiegel, verbessert die Insulinsensitivität und kann die Erkrankung in frühen Stadien rückgängig machen. Immer in Absprache mit dem behandelnden Arzt, besonders bei Insulintherapie.",
      formen: ["Intermittierendes Fasten 16:8 -- täglich, als neue Lebensweise", "2-Tage-Fasten pro Woche (5:2-Methode)", "Längeres Wasserfasten (3-7 Tage) unter ärztlicher Begleitung"],
      reinigung: ["Leberreinigung -- die Leber ist zentral für den Zuckerstoffwechsel", "Bitterstoffreiche Kuren mit Löwenzahn, Artischocke und Mariendistel", "Darmreinigung mit Zeolith und Flohsamenschalen"]
    },
    bewegung: {
      text: "Bewegung wirkt wie Insulin -- sie öffnet die Zelltüren für Zucker, ganz natürlich. Jeder Spaziergang nach dem Essen senkt den Blutzucker. Muskeln sind das größte Insulin-Organ des Körpers.",
      praktiken: ["Spaziergang nach jeder Mahlzeit -- 15-20 Minuten genügen, um den Blutzuckeranstieg zu halbieren", "Krafttraining -- Muskelaufbau verbessert die Insulinsensitivität langfristig, 2-3 Mal pro Woche", 'Yoga -- besonders Drehungen massieren die Bauchspeicheldrüse und fördern ihre Funktion', "Tanzen -- Freude und Bewegung vereint, beides heilt den Zuckerstoffwechsel"]
    },
    geist: {
      einheit: "Diabetes lädt ein, die Süße im eigenen Inneren zu finden. Liebe, Geborgenheit und Genuss dürfen empfangen werden -- direkt, ohne Umweg über Essen. Wer beginnt, sich selbst zu nähren, dessen Zellen öffnen sich wieder.",
      affirmationen: ["Ich empfange die Süße des Lebens in jeder Zelle.", "Mein Körper weiß, wie er Nahrung verwandelt. Ich vertraue ihm.", "Ich bin genug. Ich brauche keinen aeusseren Zucker, um mich ganz zu fühlen.", "Jede meiner Zellen öffnet sich für Liebe und Nährung."],
      meditation: "Lege deine Hände auf den Oberbauch, dort wo die Bauchspeicheldrüse liegt. Atme warmherzige, goldene Energie in diesen Bereich. Stell dir vor, wie jede Zelle deines Körpers ihre Türen öffnet -- bereit zu empfangen. Sprich innerlich: 'Ich öffne mich. Ich empfange.' Spüre die Süße dieses Moments.",
      energie: "Das Solarplexus-Chakra (Manipura) ist hier zentral -- es regiert Bauchspeicheldrüse, Stoffwechsel und Selbstwert. Gelbes Licht, Sonnenenergie und das Element Feuer nähren dieses Zentrum. Auch das Sakralchakra darf gestärkt werden für mehr Lebensfreude und Genuss.",
    },
    produkte: [
      { name: 'Zeolith/ZeoMont', desc: `Bindet Giftstoffe im Darm, die die Insulinresistenz verstärken. Entlastet die Leber und verbessert den gesamten Stoffwechsel.`, tags: ['#entgiftung', '#stoffwechsel', '#darm'] },
      { name: 'CBD-Öl', desc: `Reguliert den Blutzucker über das Endocannabinoid-System und schützt die Betazellen der Bauchspeicheldrüse.`, tags: ['#blutzucker', '#entzündungshemmend', '#bauchspeicheldrüse'] },
      { name: 'Anorganischer Schwefel', desc: `Unterstützt die Entgiftung über die Leber -- eine gesunde Leber ist essenziell für einen stabilen Blutzucker.`, tags: ['#leber', '#entgiftung', '#stoffwechsel'] },
      { name: 'Hanfsamen', desc: `Ihre Kombination aus Eiweiß, Omega-3 und Ballaststoffen stabilisiert den Blutzucker und nährt den gesamten Körper.`, tags: ['#blutzucker', '#ernährung', '#omega3'] },
    ]
  },

  // ============================================================
  // 14. Schilddrüsenthemen
  // ============================================================
  {
    id: 'schilddruese',
    name: 'Schilddrüsenthemen',
    tags: ['#schilddrüse', '#hashimoto', '#unterfunktion', '#überfunktion', '#thyreoidea', '#hormone'],
    koerper: "Die Schilddrüse ist die Dirigentin des Stoffwechsels -- sie bestimmt das Tempo des gesamten Körpers. Bei Unterfunktion (Hypothyreose) läuft alles langsamer: Müdigkeit, Gewichtszunahme, Kältempfindlichkeit, Antriebslosigkeit. Bei Überfunktion (Hyperthyreose) rast alles: Herzrasen, Gewichtsverlust, Nervosität, Schlaflosigkeit. Bei Hashimoto greift das Immunsystem die eigene Schilddrüse an -- ein Autoimmunprozess.",
    psychosomatik: {
      zitat: "Was bleibt dir im Halse stecken?",
      text: "Die Schilddrüse sitzt am Hals -- dem Ort der Kommunikation, des Ausdrucks, der Stimme. Schilddrüsenthemen zeigen sich, wenn eigene Bedürfnisse und Worte unterdrückt werden. Unterfunktion spiegelt den Rückzug: 'Ich halte mich zurück, ich traue mich nicht.' Überfunktion zeigt Überkompensation: 'Ich muss alles schnell erledigen, ich darf keine Zeit verlieren.' Hashimoto trägt den Autoimmun-Aspekt -- der Angriff auf sich selbst. In der freien, liebevollen Selbstexpression liegt Heilung.",
    },
    traditionen: {
      volksmedizin: "Wolfstrapp beruhigte die überaktive Schilddrüse, während Braunalgen (Kelp) durch ihren Jodgehalt die Unterfunktion stützten. Zitronenmelisse galt als sanftes Schilddrüsenmittel.",
      tcm: "In der TCM gehört die Schilddrüse zum Funktionskreis Leber und Niere. Unterfunktion zeigt Nieren-Yang-Mangel und Milz-Qi-Schwäche. Überfunktion zeigt Leber-Feuer und Yin-Mangel. Die Behandlung harmonisiert entsprechend und beruhigt den Geist (Shen).",
      ayurveda: "Im Ayurveda spiegelt die Schilddrüse das Vishuddha-Chakra (Halschakra). Unterfunktion zeigt Kapha-Überschuss, Überfunktion Vata-Pitta-Störung. Ashwagandha ist das klassische Rasayana (Verjüngungsmittel) für die Schilddrüse.",
      germanisch: "In der germanischen Medizin zeigt sich die Schilddrüse bei einem Frontalangst-Konflikt -- 'Etwas kommt auf mich zu und ich bin hilflos.' Bei Hashimoto ist der Konflikt in hängender Heilung, immer wieder getriggert.",
      alchemie: "Alchemistisch ist der Hals der Ort von Mercurius -- dem Prinzip der Vermittlung zwischen Kopf (Geist) und Rumpf (Körper). Schilddrüsenthemen zeigen eine Störung dieser Vermittlung. Die Heilung liegt im freien Fluss zwischen Denken und Fühlen.",
    },
    kraeuter: [
      { name: `Ashwagandha (Withania somnifera)`, wirkung: `Adaptogen, das die Schilddrüse in beide Richtungen reguliert. Erhoht T3 und T4 bei Unterfunktion und beruhigt bei Überfunktion. Als Pulver oder Extrakt, abends einnehmen.` },
      { name: 'Wolfstrapp (Lycopus)', wirkung: `Klassisches Mittel bei Schilddrüsen-Überfunktion. Hemmt die TSH-Wirkung und beruhigt Herzrasen. Als Tinktur unter fachkundiger Begleitung.` },
      { name: 'Zitronenmelisse', wirkung: `Beruhigt eine überaktive Schilddrüse sanft und löst die damit verbundene Nervosität. Als Tee, reichlich und regelmäßig trinken.` },
      { name: 'Schwarzkümmelöl', wirkung: `Reguliert das Immunsystem und wirkt entzündungshemmend -- besonders wertvoll bei Hashimoto. Täglich 1 TL einnehmen.` },
      { name: 'Guggul (Commiphora mukul)', wirkung: `Ayurvedisches Harz, das die Umwandlung von T4 zu aktivem T3 fördert und den Stoffwechsel anregt. Bei Unterfunktion hilfreich.` },
    ],
    stoffe: [
      { name: 'Selen', wirkung: `Essenziell für die Schilddrüse -- wird für die Umwandlung von T4 zu T3 benötigt. Senkt bei Hashimoto die TPO-Antikörper nachweislich. 200 mcg täglich (z.B. 2 Paranüsse).` },
      { name: 'Jod', wirkung: `Baustein der Schilddrüsenhormone. Bei Jodmangel-bedingter Unterfunktion essenziell. Vorsicht bei Hashimoto -- hier ist die individuelle Dosierung wichtig. Natürliche Quellen: Algen, Seefisch.` },
      { name: 'Zink', wirkung: `Wird für die TSH-Produktion und die T3-Bildung benötigt. Zinkmangel verstärkt Schilddrüsenprobleme. 15-30mg täglich.` },
      { name: 'Vitamin D', wirkung: `Vitamin-D-Mangel ist bei fast allen Schilddrüsen-Patienten vorhanden und verschlechtert Autoimmunprozesse. Spiegel auf 60-80 ng/ml bringen.` },
    ],
    ernaehrung: {
      empfehlung: "Die Schilddrüse braucht gezielte Nährstoffe: Selen, Jod, Zink, Eisen. Eine nährstoffdichte, entzündungsarme Ernährung ist das Fundament. Bei Hashimoto hilft oft der Verzicht auf Gluten und Milch, da diese Entzündungen fördern können.",
      staerkend: ["Paranüsse (Selen-Quelle)", "Meeresfisch und Algen (bei Jodmangel)", "Kokosöl (stärkt den Stoffwechsel)", 'Beeren und farbenfrohes Gemüse', "Knochenbrühe (Kollagen und Mineralien)", 'Ingwer und Kurkuma', "Fermentiertes Gemüse (Sauerkraut, Kimchi)", "Avocado und Olivenöl"],
      meiden: ["Gluten (besonders bei Hashimoto)", 'Kuhmilchprodukte', "Sojaprodukte (hemmen die Jodaufnahme)", "Rohes Kreuzblütler-Gemüse in großen Mengen (Kohl, Brokkoli -- gedämpft ist fein)", 'Industriezucker', "Stark verarbeitete Lebensmittel"],
      rezepte: [
        { name: 'Schilddrüsen-Power-Bowl', zutaten: '100g Quinoa, 1 Avocado, Handvoll Spinat, 2 Paranüsse, 1 EL Kokosöl, Kurkuma, Spritzer Zitrone, Algen-Flocken', zubereitung: 'Quinoa kochen, mit Kokosöl und Kurkuma vermengen. Spinat, Avocado und zerbröselte Paranüsse darauf anrichten. Mit Algen-Flocken und Zitrone verfeinern.' },
        { name: 'Ashwagandha-Mond-Milch', zutaten: '250ml Mandelmilch, 1 TL Ashwagandha-Pulver, 1/2 TL Zimt, Prise Muskatnuss, 1 TL Honig', zubereitung: 'Mandelmilch erwärmen, Ashwagandha und Gewürze einrühren, mit Honig süßen. Abends trinken -- nährt die Schilddrüse und fördert erholsamen Schlaf.' },
      ]
    },
    fasten: {
      text: "Bei Schilddrüsenthemen ist achtsames Fasten ratsam. Zu langes oder strenges Fasten kann bei Unterfunktion den Stoffwechsel weiter drosseln. Sanftes, zeitbegrenztes Fasten mit nährstoffreicher Kost in den Essensphasen ist ideal.",
      formen: ["Intermittierendes Fasten 14:10 (sanfter als 16:8, besonders bei Unterfunktion)", "Basenfasten 7 Tage -- reinigt und belastet die Schilddrüse dabei kaum", "Saftfasten 3 Tage mit grünen Säften und Selleriesaft"],
      reinigung: ["Schwermetallausleitung mit Zeolith und Chlorella -- Quecksilber und andere Metalle belasten die Schilddrüse massiv", "Leberreinigung -- die Leber wandelt T4 in aktives T3 um", "Salzwasserspülung des Halses und Ölziehen am Morgen"]
    },
    bewegung: {
      text: "Bei Unterfunktion hilft aufbauende, wärmende Bewegung -- sie regt den Stoffwechsel an. Bei Überfunktion ist beruhigende, erdende Bewegung heilsam. In jedem Fall: sanft beginnen und mit Freude bewegen.",
      praktiken: ["Schulterstand (Sarvangasana) -- die klassische Yoga-Übung für die Schilddrüse, fördert die Durchblutung der Halsgegend", 'Singen und Tönen -- vibrierende Klänge im Halsbereich stimulieren die Schilddrüse direkt', "Zügiges Gehen -- regt den Stoffwechsel an bei Unterfunktion, täglich 30 Minuten", "Yin Yoga -- beruhigend bei Überfunktion, besonders Haltungen die den Hals öffnen"]
    },
    geist: {
      einheit: "Die Schilddrüse lädt ein, die eigene Stimme zu finden und zu leben. Was will gesagt werden? Was darf endlich ausdrückt werden? In dem Moment, wo du dich frei aeusserst und dein Tempo findest, findet auch die Schilddrüse ihr Gleichgewicht.",
      affirmationen: ["Ich spreche meine Wahrheit -- liebevoll und klar.", "Mein Körper findet sein perfektes Tempo. Ich vertraue meinem Rhythmus.", "Ich bin sicher genug, um mich auszudrücken. Meine Stimme zählt.", "Ich bin in Frieden mit mir selbst. Mein Immunsystem schützt mich liebevoll."],
      meditation: "Richte deine Aufmerksamkeit auf deinen Hals. Spüre den Raum dort -- weit und offen. Beginne, leise zu summen -- spüre die Vibration in der Schilddrüse. Stell dir ein strahlendes, türkises Licht an deinem Hals vor, das wärmt und heilt. Sage innerlich: 'Ich darf sein, wer ich bin. Ich darf sagen, was ich fühle.'",
      energie: "Das Halschakra (Vishuddha) ist hier das zentrale Energiezentrum. Türkises Licht, Singen, Mantren (besonders 'HAM') und das Tragen von türkisfarbenen Steinen (Türkis, Aquamarin) nähren dieses Chakra. Auch das Stirnchakra darf einbezogen werden für die hormonelle Steuerung über die Hypophyse.",
    },
    produkte: [
      { name: 'Borax-Tinktur', desc: `Bor unterstützt die Hormonbalance und die Aufnahme von Vitamin D -- beides essenziell für die Schilddrüse. Reguliert zudem Autoimmunprozesse.`, tags: ['#hormone', '#vitaminD', '#autoimmun'] },
      { name: 'Zeolith/ZeoMont', desc: `Bindet Schwermetalle, die die Schilddrüse belasten (besonders Quecksilber). Reinigt den Körper auf zellulärer Ebene.`, tags: ['#entgiftung', '#schwermetalle', '#schilddrüse'] },
      { name: 'CBD-Öl', desc: `Reguliert das Immunsystem und kann Autoimmunprozesse (Hashimoto) beruhigen. Zusätzlich fördert es erholsamen Schlaf.`, tags: ['#autoimmun', '#immunsystem', '#schlaf'] },
      { name: 'Artemisia Annua', desc: `Unterstützt das Immunsystem bei Autoimmunprozessen und wirkt entzündungshemmend auf das Schilddrüsengewebe.`, tags: ['#immunsystem', '#entzündungshemmend', '#hashimoto'] },
    ]
  },

  // ============================================================
  // 15. Autoimmunthemen
  // ============================================================
  {
    id: 'autoimmun',
    name: 'Autoimmunthemen',
    tags: ['#autoimmun', '#immunsystem', '#entzündung', '#hashimoto', '#lupus', '#multiplesklerose', '#colitis'],
    koerper: "Bei Autoimmunerkrankungen verwechselt das Immunsystem körpereigene Zellen mit Feinden und greift sie an. Bei Hashimoto ist es die Schilddrüse, bei Multipler Sklerose die Nervenhüllen, bei Lupus verschiedene Organe, bei Colitis die Darmschleimhaut. Chronische Entzündungen breiten sich aus und zerstören langsam gesundes Gewebe. Der Körper kämpft gegen sich selbst -- ein zutiefst erschöpfender Zustand.",
    psychosomatik: {
      zitat: "Wo kämpfst du gegen dich selbst?",
      text: "Autoimmunität ist der körperliche Ausdruck eines inneren Krieges. Der Körper tut, was die Seele vorlebt: sich selbst angreifen, sich selbst verurteilen, sich selbst ablehnen. Häufig steckt eine tiefe Selbstkritik dahinter, das Gefühl, grundsätzlich falsch zu sein. Auch verdrängte Wut, die sich nach innen richtet, zeigt sich so. Die Heilung beginnt mit Selbstannahme -- mit dem tiefen, bedingungslosen 'Ja' zu sich selbst. In dem Moment, wo innerer Friede einzieht, darf auch das Immunsystem Frieden schließen.",
    },
    traditionen: {
      volksmedizin: "Die Volksmedizin kannte Autoimmunität als Konzept kaum, behandelte die Symptome mit entzündungshemmenden Kräutern wie Weidenrinde, Kamille und Ringelblume. Blutreinigungskuren im Frühling galten als vorbeugend.",
      tcm: "In der TCM zeigt sich Autoimmunität als tiefe Disharmonie zwischen Wei-Qi (Abwehr) und Zheng-Qi (aufrechtes Qi). Oft liegt eine Milz-Qi-Schwäche mit Feuchtigkeit und Hitze vor. Die Behandlung stärkt das Zheng-Qi und löst die pathogenen Faktoren.",
      ayurveda: "Im Ayurveda spiegelt Autoimmunität ein gestörtes Ojas (Vitalkraft) und massives Ama (Toxine) im Gewebe. Panchakarma-Reinigungskuren, Rasayana-Therapie und eine streng sattvische Ernährung bilden den Heilungsweg.",
      germanisch: "In der germanischen Medizin zeigen Autoimmunerkrankungen einen aktiven Konflikt in hängender Heilung -- das Immunsystem wird ständig getriggert und kommt nie zur Ruhe. Die Lösung des zugrunde liegenden biologischen Konflikts ist essenziell.",
      alchemie: "Alchemistisch ist Autoimmunität das Solve ohne Coagula -- Auflösung ohne Neuformung. Der Körper löst sich selbst auf, findet keinen neuen Zusammenhalt. Das Opus liegt in der Coniunctio -- der Vereinigung der inneren Gegensetze, dem Frieden zwischen den Teilen des Selbst.",
    },
    kraeuter: [
      { name: 'Kurkuma (Curcuma longa)', wirkung: `Eines der stärksten natürlichen Entzündungshemmer. Moduliert das Immunsystem, schützt Gewebe und reduziert Autoimmun-Antikörper. Täglich 2-4g mit Pfeffer und Fett.` },
      { name: 'Weihrauch (Boswellia serrata)', wirkung: `Boswelliasäuren hemmen Entzündungswege, die bei Autoimmunerkrankungen überaktiv sind. Besonders wirksam bei Darmentzündungen und Gelenkbeteiligung.` },
      { name: 'Reishi (Ganoderma lucidum)', wirkung: `Intelligenter Immunmodulator -- beruhigt Überreaktionen und stärkt die gesunde Abwehr gleichzeitig. Über Monate als Extrakt einnehmen.` },
      { name: 'Ashwagandha', wirkung: `Adaptogen, das die Stressachse reguliert -- chronischer Stress ist ein Haupttreiber von Autoimmunität. Stärkt zugleich die Regeneration und den Schlaf.` },
      { name: `Katzenkralle (Uncaria tomentosa)`, wirkung: `Moduliert die Immunantwort und wirkt entzündungshemmend. Traditionelles Regenwaldmittel für das Immunsystem.` },
      { name: 'Aloe Vera', wirkung: `Beruhigt entzündete Schleimhäute (besonders im Darm), moduliert die Immunantwort und fördert die Geweberegeneration. Frisches Gel oder reiner Saft.` },
    ],
    stoffe: [
      { name: 'Vitamin D', wirkung: `Zentraler Immunregulator. Fast alle Autoimmun-Patienten haben massive Mängel. Hohe Dosen (nach Spiegelbestimmung, oft 5000-10000 IE täglich) können Autoimmunschübe reduzieren.` },
      { name: 'Omega-3-Fettsäuren', wirkung: `EPA und DHA wirken stark entzündungshemmend und regulieren die T-Zell-Funktion. 2-4g täglich aus Algenöl oder Leinöl.` },
      { name: 'Glutathion', wirkung: `Das körpereigene Meister-Antioxidans. Schützt Zellen vor oxidativem Stress und unterstützt die Entgiftung. Als liposomales Glutathion oder über Vorstufen (NAC, Selen).` },
      { name: 'Selen', wirkung: `Essenziell für die Immunregulation und die Glutathion-Produktion. 200 mcg täglich senken Autoimmun-Antikörper nachweislich.` },
    ],
    ernaehrung: {
      empfehlung: "Eine entzündungshemmende, nährstoffdichte Ernährung ist das Fundament. Das Autoimmun-Protokoll (AIP) hat vielen Menschen geholfen: Es entfernt entzündungsfördernde Lebensmittel und nährt den Körper mit heilender Kost. Die Darmgesundheit steht im Zentrum -- denn dort sitzt 80% des Immunsystems.",
      staerkend: ["Knochenbrühe (heilt den Darm)", 'Grünes Blattgemüse', 'Wilde Beeren und Granatapfel', 'Kurkuma und Ingwer täglich', "Fermentiertes Gemüse (in kleinen Mengen)", 'Kokosöl und Olivenöl', "Organ-Fleisch (Leber) für Nährstoffdichte", "Süskartoffeln und Wurzelgemüse"],
      meiden: ["Gluten (oberste Priorität)", 'Kuhmilchprodukte', 'Industriezucker', "Nachtschattengewächse (bei Schubneigung: Tomaten, Paprika, Kartoffeln, Auberginen)", "Hülsenfrüchte (in der strengen Phase)", 'Alkohol', "Verarbeitete Lebensmittel und Zusatzstoffe"],
      rezepte: [
        { name: 'Heilende Knochenbrühe', zutaten: '1kg Rinder- oder Hühnerknochen, 2 EL Apfelessig, 2L Wasser, Kurkuma, Ingwer, Meersalz', zubereitung: 'Knochen mit kaltem Wasser und Apfelessig ansetzen, 30 Minuten warten. Dann zum Kochen bringen, Schaum abschöpfen, auf kleinste Flamme reduzieren. 12-24 Stunden köcheln lassen. Abseihen, mit Kurkuma und Ingwer verfeinern. Täglich 1-2 Tassen trinken -- heilt die Darmschleimhaut.' },
        { name: 'Autoimmun-Grüner-Smoothie', zutaten: '1 Handvoll Spinat, 1/2 Avocado, 1 Stück Ingwer, 1/2 Gurke, 200ml Kokoswasser, 1 TL Kurkuma, 1 EL Kokosöl', zubereitung: 'Alles im Mixer pürieren. Nährt und beruhigt das Immunsystem. Täglich morgens trinken.' },
      ]
    },
    fasten: {
      text: "Fasten gibt dem Immunsystem die Chance, sich zu 'resetten'. Die Autophagie (Zellreinigung) während des Fastens raeumt fehlprogrammierte Immunzellen auf. Studien zeigen, dass längeres Fasten Autoimmunschübe reduzieren kann.",
      formen: ["Intermittierendes Fasten 16:8 als tägliche Praxis", "5-Tage-Fastenimitierende-Diät (FMD nach Valter Longo) -- klinisch erforscht bei Autoimmunität", "Saftfasten 3-5 Tage mit grünen Säften"],
      reinigung: ["Darmreinigung und -aufbau -- das Immunsystem sitzt im Darm", 'Schwermetallausleitung mit Zeolith und Chlorella', "Leberreinigung mit Mariendistel und Löwenzahn"]
    },
    bewegung: {
      text: "Bei Autoimmunthemen ist die Balance zwischen Aktivität und Ruhe entscheidend. Zu viel Anstrengung kann Schübe fördern, zu wenig schwächt den Körper. Sanfte, freudvolle Bewegung nährt den Körper, ohne ihn zu erschöpfen.",
      praktiken: ["Sanftes Yoga -- besonders restaurative Haltungen, die den Parasympathikus aktivieren", "Qi Gong -- bewegt die Lebensenergie und harmonisiert das Immunsystem, 20 Minuten täglich", "Spaziergänge in der Natur -- Waldluft (Phytonzide) reguliert nachweislich das Immunsystem", "Schwimmen in warmem Wasser -- entlastet die Gelenke und beruhigt das Nervensystem"]
    },
    geist: {
      einheit: "Autoimmunität ist die Einladung, Frieden mit dir selbst zu schließen. Der Körper zeigt, was innen geschieht -- den Kampf gegen das eigene Sein. In dem Moment, wo du dich ganz annimmst -- mit allen vermeintlichen Fehlern, mit deiner ganzen Geschichte -- darf dein Immunsystem aufhören zu kämpfen.",
      affirmationen: ["Ich bin in Frieden mit mir selbst. Jede Zelle meines Körpers ist willkommen.", "Mein Immunsystem erkennt mich als Freund. Ich bin sicher in meinem Körper.", "Ich lasse den inneren Kampf los. Ich wähle Sanftheit und Annahme.", "Ich bin ganz und heil, genau so wie ich bin."],
      meditation: "Lege dich bequem hin. Atme tief. Stell dir vor, wie ein warmes, goldenes Licht deinen gesamten Körper durchflutet. Überall wo es hinfließt, legen die Immunzellen ihre Waffen nieder. Sie erkennen: 'Das hier ist Heimat. Das hier gehört zu mir.' Spüre, wie Friede in jede Zelle einzieht. Sage innerlich: 'Ich bin eins mit mir. Alles an mir ist richtig.'",
      energie: "Alle Chakren dürfen hier in Balance gebracht werden -- besonders das Herzchakra (Selbstliebe), das Solarplexus-Chakra (Selbstwert) und das Wurzelchakra (Sicherheit im eigenen Körper). Räuchern mit Salbei reinigt das Energiefeld. Rosenquarz am Herzen unterstützt die Selbstannahme.",
    },
    produkte: [
      { name: 'Artemisia Annua', desc: `Moduliert das Immunsystem intelligent -- beruhigt überaktive Immunantworten und stärkt die gesunde Abwehr. Traditionell bei Entzündungsprozessen eingesetzt.`, tags: ['#immunmodulation', '#entzündungshemmend', '#artemisinin'] },
      { name: 'CBD-Öl', desc: `Wirkt über das Endocannabinoid-System regulierend auf das Immunsystem. Reduziert Entzündungen und fördert die innere Ruhe, die bei Autoimmunthemen so essenziell ist.`, tags: ['#immunsystem', '#entzündung', '#entspannung'] },
      { name: 'Zeolith/ZeoMont', desc: `Entgiftet den Darm und stärkt die Darmbarriere -- die erste Verteidigungslinie des Immunsystems. Bindet Toxine, die Autoimmunschübe triggern können.`, tags: ['#darmgesundheit', '#entgiftung', '#immunsystem'] },
      { name: 'Borax-Tinktur', desc: `Bor reguliert Immunprozesse und fördert die Aufnahme von Vitamin D. Unterstützt bei Autoimmunerkrankungen die Rebalancierung des Immunsystems.`, tags: ['#immunregulation', '#bor', '#vitaminD'] },
      { name: 'Anorganischer Schwefel', desc: `Schwefel ist Baustein von Glutathion -- dem Meister-Antioxidans, das bei Autoimmunität essenziell ist. Unterstützt die Leber bei der Entgiftung.`, tags: ['#glutathion', '#entgiftung', '#schwefel'] },
    ]
  },

  // ============================================================
  // 16. Krebs (begleitende Unterstützung)
  // ============================================================
  {
    id: 'krebs',
    name: `Krebs (begleitende Unterstützung)`,
    tags: ['#krebs', '#tumor', '#onkologie', '#begleittherapie', '#heilkraft', '#immunsystem'],
    koerper: "Krebs entsteht, wenn Zellen beginnen, sich unkontrolliert zu teilen. Die natürlichen Kontrollmechanismen (Tumorsuppressorgene, Apoptose, Immunüberwachung) sind übergangen. Ein Tumor wächst, der Körper erkennt diese Zellen nur eingeschränkt als fehlerhaft. Gleichzeitig hat der Körper eine unglaubliche Heilkraft -- täglich erkennt und beseitigt das Immunsystem tausende entartete Zellen. Diese Kraft darf unterstützt und gestärkt werden.",
    psychosomatik: {
      zitat: "Welcher Konflikt sucht sich seinen Ausdruck?",
      text: "In der psychosomatischen Sicht nach Hamer, Dahlke und Dethlefsen steht hinter jeder Krebserkrankung ein schwerer biologischer Konfliktschock -- ein Ereignis, das als existenzbedrohend empfunden wurde. Je nach Organlokalisation zeigt sich der spezifische Konflikt: Brustkrebs oft ein Sorge-Konflikt (Nest), Lungenkrebs ein Todesangst-Konflikt, Darmkrebs ein 'unverdaulicher Ärger'. Das Wissen um den Konflikt gibt Kraft und Orientierung. In der Lösung des Konflikts, in der Rückkehr zu innerem Frieden und Lebensbejahung liegt eine mächtige Heilkraft, die jede Therapie unterstützt.",
    },
    traditionen: {
      volksmedizin: "Die Volksmedizin kannte Misteltherapie (Viscum album), die heute in der anthroposophischen Medizin wissenschaftlich erforscht wird. Beifuß (Artemisia), Schöllkraut und Blutwurz galten als Tumorpflanzen. Bittere Krauter und Reinigungskuren waren Grundpfeiler.",
      tcm: "In der TCM entsteht Krebs durch Qi-Stagnation, Blutstase und Ansammlung von Schleim und Toxinen. Die Behandlung löst Stagnation, bewegt das Blut, stärkt das Zheng-Qi (aufrechtes Qi) und das Wei-Qi (Abwehr). Heilpilze wie Reishi, Maitake und Coriolus sind zentrale Mittel.",
      ayurveda: "Im Ayurveda zeigt Krebs eine schwere Tridosha-Störung mit massiver Ama-Ansammlung (Toxine). Tiefe Reinigung (Panchakarma), Rasayana-Therapie (Verjüngung) und meditative Praxis bilden den Heilungsweg. Kurkuma und Tulsi sind hoch geschätzte Begleiter.",
      germanisch: "In der germanischen Medizin nach Hamer ist jede Krebsart die Antwort auf einen spezifischen biologischen Konflikt -- einen DHS (Dirk-Hamer-Syndrom). Der Tumor ist biologisch sinnvoll und dient der Konfliktbewältigung. Die Lösung des Konflikts leitet die Heilungsphase ein.",
      alchemie: "Alchemistisch ist Krebs eine Nigredo -- die schwärzeste Phase der Transformation. Und in genau dieser Dunkelheit liegt der Keim der Erneuerung. Wie der Phoenix aus der Asche steigt, so kann aus der Krise eine tiefe Verwandlung entstehen. Krebs fordert den ganzen Menschen -- und genau darin liegt sein Geschenk.",
    },
    kraeuter: [
      { name: 'Mistel (Viscum album)', wirkung: `Wissenschaftlich erforscht in der begleitenden Krebstherapie. Stärkt das Immunsystem, verbessert die Lebensqualität und kann Nebenwirkungen von Chemo und Bestrahlung reduzieren. Als Injektion unter anthroposophischer Begleitung.` },
      { name: `Artemisia Annua (Einjähriger Beifuß)`, wirkung: `Artemisinin zeigt in Studien selektive Wirkung auf Krebszellen, die vermehrt Eisen speichern. Stärkt das Immunsystem und unterstützt den Körper ganzheitlich.` },
      { name: 'Reishi (Ganoderma lucidum)', wirkung: `Der Pilz der Unsterblichkeit. Stärkt die natürlichen Killerzellen, moduliert das Immunsystem und unterstützt den Körper während konventioneller Therapien. Triterpene und Beta-Glucane sind die Wirkstoffe.` },
      { name: 'Kurkuma (Curcuma longa)', wirkung: `Curcumin hemmt Entzündungswege (NF-kB), fördert die Apoptose von Krebszellen und schützt gesundes Gewebe. In hoher Dosierung mit Pfeffer und Fett.` },
      { name: 'Wermut und Schafgarbe', wirkung: `Bitterstoffe stärken Leber und Verdauung -- essenziell für die Entgiftung während der Therapie. Als Tee-Mischung täglich.` },
      { name: `Mariendistel (Silybum marianum)`, wirkung: `Schützt die Leber -- besonders wichtig während Chemotherapie. Silymarin regeneriert Leberzellen und stärkt die Entgiftungskapazität.` },
    ],
    stoffe: [
      { name: 'Vitamin C (hochdosiert)', wirkung: `Hochdosiertes Vitamin C (intravenös) kann Krebszellen selektiv schädigen und gleichzeitig gesunde Zellen stärken. Oral 3-5g täglich unterstützt das Immunsystem.` },
      { name: 'Vitamin D', wirkung: `Hohe Vitamin-D-Spiegel sind mit besserem Therapieverlauf assoziiert. Reguliert Zellwachstum, fördert Apoptose und stärkt das Immunsystem. Spiegel auf 80-100 ng/ml bringen.` },
      { name: 'Selen', wirkung: `Schützt gesunde Zellen vor oxidativem Stress während der Therapie und stärkt die Immunabwehr. 200-300 mcg täglich.` },
      { name: 'Zink', wirkung: `Essenziell für die Funktion der natürlichen Killerzellen und die Zellreparatur. 30mg täglich.` },
    ],
    ernaehrung: {
      empfehlung: "Die Ernährung bei Krebs darf den Körper maximal nähren und stärken. Zucker ernährt Krebszellen bevorzugt (Warburg-Effekt) -- eine zuckerarme, nährstoffdichte Ernährung ist kraftvoll. Antioxidantienreiche, bunte Lebensmittel schützen die gesunden Zellen. Jede Mahlzeit ist ein Akt der Selbstfürsorge.",
      staerkend: ["Kurkuma mit schwarzem Pfeffer (täglich)", "Brokkoli-Sprossen (Sulforaphan -- einer der stärksten natürlichen Krebshemmer)", "Beeren (Blaubeeren, Himbeeren, Brombeeren)", "Grüner Tee (EGCG)", "Pilze (Shiitake, Maitake, Reishi)", 'Knoblauch und Zwiebeln', 'Grünes Blattgemüse', 'Fermentiertes Gemüse', 'Ingwer', "Leinsamen (Lignane)"],
      meiden: ["Zucker und Süßigkeiten", 'Weissmehlprodukte', "Verarbeitetes Fleisch (Wurst, Schinken)", 'Alkohol', 'Transfette und frittierte Lebensmittel', "Künstliche Zusatzstoffe"],
      rezepte: [
        { name: 'Heilkraft-Brühe', zutaten: '2L Wasser, 3 Shiitake-Pilze, Stück Kurkumawurzel, Stück Ingwer, 3 Knoblauchzehen, 1 Zwiebel, Handvoll Brokkoli, Meersalz, schwarzer Pfeffer', zubereitung: 'Alles langsam 30 Minuten köcheln lassen. Abseihen oder als Suppe essen. Diese Brühe vereint die stärksten natürlichen Schutzstoffe in einer Mahlzeit. Täglich eine Schale -- warmherzig und nährend.' },
        { name: 'Antioxidantien-Smoothie', zutaten: '1 Tasse Blaubeeren, 1 TL Kurkuma, Stück Ingwer, 1 Handvoll Spinat, 200ml Grüntee (abgekühlt), 1 EL Leinsamen, 1 EL Hanfsamen', zubereitung: 'Alles mixen. Dieser Smoothie ist ein Kraftpaket an zellschützenden Stoffen. Morgens trinken -- ein liebevoller Start in den Tag.' },
      ]
    },
    fasten: {
      text: "Kurzzeitfasten vor und während Chemotherapie zeigt in Studien vielversprechende Ergebnisse: Gesunde Zellen gehen in einen Schutzmodus, während Krebszellen verwundbarer werden. Dies kann Nebenwirkungen reduzieren und die Wirksamkeit erhöhen. Immer in Absprache mit dem behandelnden Arzt.",
      formen: ["Kurzzeitfasten 24-72 Stunden vor und nach Chemotherapie (nach Valter Longo)", "Fastenimitierende Diät (FMD) in Therapiepausen", "Intermittierendes Fasten 16:8 als unterstützende Lebensweise"],
      reinigung: ["Sanfte Leberreinigung mit Mariendistel und Artischocke -- die Leber trägt die Hauptlast der Entgiftung", 'Basische Bäder mit Natron und Epsomit -- unterstützen die Ausleitung über die Haut', "Lymphdrainage und Trockenbürsten -- fördern den Abtransport von Stoffwechselabfällen"]
    },
    bewegung: {
      text: "Bewegung während einer Krebstherapie stärkt den Körper, hebt die Stimmung und verbessert nachweislich den Therapieverlauf. Sanft und liebevoll -- jede Bewegung, die Freude macht, ist heilsam. Der Körper darf sich als lebendig und kraftvoll erleben.",
      praktiken: ["Spaziergänge im Wald -- Phytonzide der Baeume aktivieren die natürlichen Killerzellen, 30 Minuten täglich", "Sanftes Yoga -- Atemübungen und sanfte Haltungen stärken Körper und Geist, fördern die Regeneration", "Qi Gong -- bewegt die Lebensenergie und löst Stagnation, besonders heilsam bei Krebs", "Tanzen zur Lieblingsmusik -- Freude ist Medizin für jede Zelle"]
    },
    geist: {
      einheit: "Krebs ist eine Einladung zur tiefsten Transformation. Der Körper hat unglaubliche Heilkraft -- sie wird gestärkt durch Lebensbejahung, Vertrauen und Sinn. Jeder Mensch, der mit Krebs lebt, darf wissen: Du bist mehr als diese Diagnose. Dein Körper kämpft für dich, dein Geist kann ihm dabei helfen. In der Lösung des inneren Konflikts, in der Rückkehr zu Freude und Liebe liegt eine Kraft, die jede Therapie unterstützt.",
      affirmationen: ["Mein Körper hat unglaubliche Heilkraft. Ich vertraue ihm.", "Jede gesunde Zelle in mir ist stark und lebendig.", "Ich wähle das Leben. Ich wähle die Freude. Ich wähle die Liebe.", "Tag für Tag wird mein Körper stärker. Ich bin auf dem Weg der Heilung.", "Ich bin mehr als diese Diagnose. Ich bin Lebenskraft."],
      meditation: "Lege dich hin und schließe die Augen. Atme tief und ruhig. Stell dir vor, wie strahlendes, goldenes Licht durch deinen Körper fließt -- wie eine innere Sonne. Überall wo es hinkommt, stärkt es die gesunden Zellen und lädt sie mit Lebenskraft auf. Stell dir vor, wie dein Immunsystem -- starke, liebevolle Wächter -- jede Zelle überprüfen und alles, was nicht gehört, sanft auflösen. Spüre die Kraft deines Körpers. Sage: 'Ich bin Heilung. Ich bin Lebenskraft.'",
      energie: "Alle Energiezentren dürfen hier aktiviert und harmonisiert werden. Besonders das Herzchakra (Lebensbejahung, Liebe), das Wurzelchakra (Überlebenswille) und das Kronenchakra (Verbindung mit dem Größeren). Energiearbeit, Reiki, Handauflegen -- alles was den Energiefluss fördert, unterstützt die Heilung.",
    },
    produkte: [
      { name: 'Artemisia Annua', desc: `Artemisinin zeigt in Studien selektive Wirksamkeit gegen Krebszellen. Stärkt das Immunsystem und wird traditionell als kraftvolle Heilpflanze geschätzt.`, tags: ['#artemisinin', '#immunsystem', '#zellschutz'] },
      { name: 'CBD-Öl', desc: `Unterstützt bei Schmerzen, Übelkeit und Appetitlosigkeit während der Therapie. Fördert Schlaf und innere Ruhe -- beides essenziell für die Heilung.`, tags: ['#schmerz', '#übelkeit', '#schlaf', '#lebensqualität'] },
      { name: 'Zeolith/ZeoMont', desc: `Bindet Toxine und Schwermetalle, entlastet die Leber während der Therapie und stärkt die körpereigene Entgiftung.`, tags: ['#entgiftung', '#leber', '#therapiebegleitung'] },
      { name: 'Natron', desc: `Unterstützt ein basisches Milieu im Körper. Krebszellen gedeihen in saurem Milieu -- Basenbäder und innerliche Anwendung (nach Anleitung) schaffen ein ungünstiges Umfeld für Tumorzellen.`, tags: ['#basisch', '#milieu', '#entgiftung'] },
      { name: 'Epsomit', desc: `Magnesiumsulfat-Bäder entspannen, entgiften und führen Magnesium zu. Wohltuend während der Therapie und fördert die Regeneration.`, tags: ['#magnesium', '#entspannung', '#entgiftung'] },
    ]
  },

  // ============================================================
  // 17. Depression / Schwermut
  // ============================================================
  {
    id: 'depression',
    name: 'Depression / Schwermut',
    tags: ['#depression', '#schwermut', '#antriebslosigkeit', '#traurigkeit', '#serotonin', '#seele'],
    koerper: "Bei Depression verändert sich die Biochemie des Gehirns -- Serotonin, Dopamin und Noradrenalin geraten aus dem Gleichgewicht. Die Nervenzellen kommunizieren langsamer, das Belohnungssystem wird taub. Gleichzeitig steigen Entzündungsmarker im Körper, die Darm-Hirn-Achse ist oft gestört, die Nebennieren erschöpft. Der ganze Körper ist betroffen -- Depression ist eine systemische Erkrankung, die Körper, Geist und Seele umfasst.",
    psychosomatik: {
      zitat: "Was drückt dich so tief nach unten -- und was möchte wieder aufsteigen?",
      text: "Depression ist der Ruf der Seele nach Tiefe. Etwas Wesentliches wurde verdrängt -- ein Schmerz, eine Trauer, ein ungelebtes Leben. Dahlke sieht in der Depression die 'Einladung zur Unterweltreise': Der Abstieg in die eigene Dunkelheit, um dort den verlorenen Schatz zu finden. Louise Hay beschreibt es als verdrängte Wut, die sich nach innen richtet. In der Depression liegt ein enormes Potenzial -- wer aus der Tiefe zurückkehrt, trägt Weisheit und Mitgefühl in sich, die vorher unerreichbar waren.",
    },
    traditionen: {
      volksmedizin: "Johanniskraut war und ist das Sonnenkraut -- es bringt Licht in die Seele. Auch Rosmarinbäder zur Belebung, Lavendelkissen für den Schlaf und Melissentee zur Beruhigung gehörten zum Repertoire der Volksheiler.",
      tcm: "In der TCM ist Depression häufig eine Leber-Qi-Stagnation -- die Lebensenergie fließt nicht mehr frei. Auch Herz-Blut-Mangel und Milz-Qi-Schwäche können zugrunde liegen. Die Behandlung bewegt das Qi, nährt das Blut und stärkt den Geist (Shen).",
      ayurveda: "Im Ayurveda zeigt Depression ein erhöhtes Tamas (Trägheit) und gestörtes Vata. Sattvische Ernährung, Sonnenlicht, Abhyanga (Ölmassage) und aufbauende Kräter wie Brahmi und Ashwagandha heben die Schwere. Prana (Lebensatem) muss wieder fließen.",
      germanisch: "In der germanischen Medizin zeigt Depression einen nicht gelösten Verlust-Konflikt -- der Verlust eines geliebten Menschen, einer Zugehörigkeit, eines Lebenssinns. Die biologische Reaktion ist der Rückzug, das Sparen von Energie.",
      alchemie: "Alchemistisch ist Depression die Nigredo -- die Schwärzung, der notwendige Abstieg ins Dunkel. Es ist die schmerzhafteste, gleichzeitig transformativste Phase des Opus Magnum. Aus der Asche der Nigredo steigt das Gold auf. Depression ist der Anfang der Verwandlung.",
    },
    kraeuter: [
      { name: `Johanniskraut (Hypericum perforatum)`, wirkung: `Das Sonnenkraut. Klinisch erwiesen wirksam bei leichter bis mittlerer Depression -- vergleichbar mit synthetischen Antidepressiva. Erhoht Serotonin, Dopamin und Noradrenalin. 300mg Extrakt, 3x täglich. Achtung: Wechselwirkungen mit Medikamenten möglich.` },
      { name: 'Safran (Crocus sativus)', wirkung: `Klinisch erforscht als Stimmungsaufheller. Wirkt auf die Serotonin-Wiederaufnahme ähnlich wie SSRIs. 30mg Safran-Extrakt täglich -- teuer, doch kraftvoll.` },
      { name: 'Rosenwurz (Rhodiola rosea)', wirkung: `Adaptogen, das die Stressresistenz erhoht und die mentale Energie steigert. Hilft besonders bei Erschöpfungsdepression und Antriebslosigkeit.` },
      { name: 'Ashwagandha', wirkung: `Reguliert die Stressachse (HPA-Achse), senkt Cortisol und fördert erholsamen Schlaf. Gibt dem Körper Kraft, aus der Erschöpfung aufzutauchen.` },
      { name: 'Lavendel', wirkung: `Beruhigt das Nervensystem, lindert Angst und fördert den Schlaf. Als Tee, ätherisches Öl oder Badezusatz -- die Seele atmet auf.` },
      { name: 'Damiana (Turnera diffusa)', wirkung: `Traditionelles Mittel gegen Schwermut und Erschöpfung. Hebt die Stimmung sanft und stärkt die Lebenskraft. Als Tee oder Tinktur.` },
    ],
    stoffe: [
      { name: 'Vitamin D', wirkung: `Der "Sonnenschein-Vitamin". Massive Mangel sind bei Depression die Regel. Vitamin D wird im Gehirn für die Serotoninsynthese gebraucht. Spiegel auf 60-80 ng/ml bringen.` },
      { name: 'Omega-3-Fettsäuren (EPA)', wirkung: `EPA wirkt entzündungshemmend im Gehirn und verbessert die Neurotransmitterbalance. 2-3g EPA-reiches Fischöl oder Algenöl täglich.` },
      { name: 'Magnesium', wirkung: `Magnesiummangel verstärkt Depression und Ängste. Magnesium beruhigt das Nervensystem und unterstützt die Serotoninsynthese. 400-600mg täglich.` },
      { name: `B-Vitamine (besonders B6, B9, B12)`, wirkung: `Essenziell für die Neurotransmitterbildung. Mangel führt direkt zu depressiven Symptomen. Als Komplex in methylierter Form einnehmen.` },
    ],
    ernaehrung: {
      empfehlung: "Die Darm-Hirn-Achse ist bei Depression zentral -- 90% des Serotonins werden im Darm gebildet. Eine darmgesunde, entzündungsarme Ernährung hebt die Stimmung biochemisch. Jede Mahlzeit, die den Körper nährt, ist ein Akt der Selbstliebe.",
      staerkend: ["Fetter Fisch oder Algenöl (Omega-3)", "Dunkle Schokolade (ab 85%)", 'Walnüsse und Hanfsamen', "Fermentiertes Gemüse (Sauerkraut, Kimchi)", 'Kurkuma und Safran', "Bananen und Datteln (Tryptophan)", 'Haferflocken', "Grünes Blattgemüse (Folsäure)"],
      meiden: ["Industriezucker (erzeugt Stimmungsschwankungen)", "Alkohol (ist ein Depressivum)", 'Weissmehlprodukte', 'Stark verarbeitete Lebensmittel', "Koffein in Übermengen (erschöpft die Nebennieren)", "Künstliche Süssungsmittel"],
      rezepte: [
        { name: 'Glücklichmacher-Bowl', zutaten: '50g Haferflocken, 1 Banane, 2 EL Walnüsse, 1 EL Hanfsamen, 1 EL Kakaonibs, Prise Safran, 200ml Hafermilch', zubereitung: 'Haferflocken in warmer Hafermilch quellen lassen, Safran einrühren. Mit Bananenscheiben, Walnüssen, Hanfsamen und Kakaonibs toppen. Ein Frühstück, das Tryptophan, Omega-3 und Magnesium liefert -- Bausteine für Serotonin.' },
        { name: 'Seelen-Tee', zutaten: '1 TL Johanniskraut, 1 TL Zitronenmelisse, 1/2 TL Lavendel, 1/2 TL Rosenblüten', zubereitung: 'Mit 250ml heißem Wasser übergießen, 10 Minuten ziehen lassen. Langsam und bewusst trinken -- ein Ritual der Selbstfürsorge. 2-3 Tassen täglich.' },
      ]
    },
    fasten: {
      text: "Kurzes Fasten kann die Stimmung heben -- der Körper schüttet während des Fastens BDNF (Brain-Derived Neurotrophic Factor) aus, der das Gehirn regeneriert. Bei schwerer Depression ist langes Fasten allerdings mit Vorsicht zu genießen -- sanfte Formen sind hier ratsam.",
      formen: ["Intermittierendes Fasten 16:8 -- die BDNF-Erhöhung hebt die Stimmung", "Basenfasten 7 Tage -- reinigt und nährt gleichzeitig", "Digitales Fasten -- Medienkonsum reduzieren kann die Stimmung erheblich verbessern"],
      reinigung: ["Darmreinigung mit Flohsamenschalen und Zeolith -- ein gesunder Darm produziert Serotonin", 'Kaltwasseranwendungen nach Kneipp -- der Kaltreiz aktiviert Noradrenalin und hebt die Stimmung sofort', "Schwitzhütte oder Sauna -- Wärme und Schwitzen lösen emotionale Blockaden"]
    },
    bewegung: {
      text: "Bewegung ist eines der wirksamsten Mittel bei Depression -- klinisch erwiesen, vergleichbar mit Medikamenten. Jeder einzelne Schritt zählt. Der Körper schüttet Endorphine, Serotonin und BDNF aus. Die Herausforderung ist, den ersten Schritt zu tun -- und genau dieser eine Schritt reicht.",
      praktiken: ["Täglich 30 Minuten Gehen -- idealerweise in der Natur und bei Tageslicht (reguliert den Serotonin-Melatonin-Haushalt)", "Laufen oder Radfahren -- Ausdauerbewegung setzt Endorphine frei ('Runner's High')", "Yoga -- besonders Herzöffner und Rückbeugen heben die Stimmung, Atemübungen aktivieren", "Tanzen -- die Kombination aus Musik, Bewegung und Ausdruck ist zutiefst heilsam"]
    },
    geist: {
      einheit: "Depression zeigt, dass die Seele nach etwas Wesentlichem ruft. In der Tiefe liegt ein Schatz verborgen -- eine ungelebte Sehnsucht, ein verborgener Schmerz, der gesehen werden will. Der Weg durch die Depression führt zu einem tieferen, wahrhaftigeren Leben. Du bist auf dem Weg -- auch wenn es sich gerade schwer anfühlt.",
      affirmationen: ["Auch diese Dunkelheit trägt Licht in sich. Ich bin auf dem Weg.", "Ich erlaube mir zu fühlen. Jedes Gefühl ist willkommen und darf fließen.", "Tag für Tag kehrt mehr Licht in mein Leben zurück.", "Ich bin wertvoll und geliebt -- genau so, wie ich bin.", "Das Leben trägt mich, auch wenn ich es gerade schwer spüre."],
      meditation: "Setze dich hin oder lege dich bequem hin. Lege eine Hand auf dein Herz. Atme langsam und tief. Erlaube dir, genau so zu sein, wie du gerade bist -- mit allem, was du fühlst. Stell dir vor, wie ein warmes, goldenes Licht in dein Herz fließt -- wie Sonnenlicht, das langsam den Nebel durchdringt. Es muss nichts geschehen. Du darfst einfach sein. Atme und fühle: 'Ich bin da. Und das ist genug.'",
      energie: "Das Herzchakra (Anahata) und das Solarplexus-Chakra (Manipura) sind bei Depression oft geschwächt. Warme Farben (Gold, Orange, Gelb), Sonnenlicht auf der Haut, das Tragen von Citrin oder Sonnenstein und wohlriechende Räucherungen (Weihrauch, Rosmarin) heben die Energie. Auch Klangschalen auf dem Herzbereich können tief berühren.",
    },
    produkte: [
      { name: 'CBD-Öl', desc: `Wirkt angstlösend und stimmungsaufhellend über das Endocannabinoid-System. Fördert erholsamen Schlaf und innere Ruhe -- die Basis für Erholung.`, tags: ['#stimmung', '#schlaf', '#angst', '#nervensystem'] },
      { name: 'Kratom', desc: `In niedrigen Dosen stimmungshebend und energetisierend. Kann bei schwerer Antriebslosigkeit einen Impuls geben. Bewusst und respektvoll anwenden.`, tags: ['#stimmung', '#energie', '#antrieb'] },
      { name: 'Magnesium-Öl', desc: `Transdermales Magnesium beruhigt das Nervensystem und fördert die Serotoninsynthese. Abends auf die Fußsohlen sprühen.`, tags: ['#magnesium', '#nervensystem', '#schlaf'] },
      { name: 'Heiltee', desc: `Kräutertee-Mischung, die die Seele wärmt und den Körper nährt. Das Ritual des Tee-Trinkens selbst ist bereits heilsam.`, tags: ['#ritual', '#wärme', '#seele'] },
    ]
  },

  // ============================================================
  // 18. Angst / Panikattacken
  // ============================================================
  {
    id: 'angst',
    name: 'Angst / Panikattacken',
    tags: ['#angst', '#panik', '#panikattacke', '#nervensystem', '#sympathikus', '#phobien'],
    koerper: "Bei Angst und Panik übernimmt der Sympathikus die Kontrolle -- das Nervensystem schaltet auf Kampf-oder-Flucht. Adrenalin und Cortisol fluten den Körper, das Herz rast, die Atmung wird flach, die Muskeln spannen sich an, der Magen zieht sich zusammen. Bei Panikattacken geschieht dies scheinbar grundlos -- der Körper reagiert auf eine Bedrohung, die der Verstand oft gar nicht erkennt. Die Amygdala (Mandelkern im Gehirn) ist überaktiviert.",
    psychosomatik: {
      zitat: "Welcher Teil von dir will beschützt werden?",
      text: "Angst zeigt, dass ein Teil in uns Schutz braucht -- ein verletztes inneres Kind, eine verdrängte Erinnerung, ein Gefühl der Hilflosigkeit. Dethlefsen sieht in der Angst die Begegnung mit dem, was wir aus unserem Bewusstsein verdrängt haben -- es kehrt als Angst zurück. Dahlke beschreibt Panik als 'Pan' -- den griechischen Naturgott, der uns an die eigene Wildheit und Lebendigkeit erinnert. In der bewussten Begegnung mit der Angst liegt Befreiung: Was wir anschauen, verliert seine Macht.",
    },
    traditionen: {
      volksmedizin: "Baldrian, Hopfen und Passionsblume waren die klassischen Nervenkräuter der Volksmedizin. Auch das Tragen von Lavendelsäckchen, warme Fußbäder und das Einhüllen in Decken bei Angstattacken gehörten zum Heilwissen der Großmütter.",
      tcm: "In der TCM gehört Angst zum Funktionskreis Niere -- die Niere speichert das Jing und den Lebenswillen. Angst erschöpft die Niere. Auch Herz-Blut-Mangel (der Geist Shen findet keinen Halt) und Leber-Qi-Stagnation spielen eine Rolle. Die Behandlung stärkt die Niere, nährt das Herz-Blut und beruhigt den Shen.",
      ayurveda: "Im Ayurveda ist Angst ein klassisches Vata-Thema -- zu viel Luft und Raum, zu wenig Erdung. Warme, nährende Nahrung, Ölmassagen (Abhyanga), Routine und erdende Kräuter wie Ashwagandha und Brahmi bringen das Vata zurück ins Gleichgewicht.",
      germanisch: "In der germanischen Medizin ist Angst verbunden mit einem Motor-Konflikt (Flucht-Gefahr) oder einem Existenz-Konflikt. Der Körper aktiviert uralte Überlebensprogramme. Die Lösung liegt in der Erkenntnis, dass die aktuelle Situation sicher ist.",
      alchemie: "Alchemistisch ist Angst der Drache, der den Schatz bewacht. Wer ihm begegnet und standhält, findet dahinter das Gold -- die eigene Kraft, den eigenen Mut. Die Angst zu durchschreiten ist ein alchemistischer Initiationsweg.",
    },
    kraeuter: [
      { name: `Passionsblume (Passiflora incarnata)`, wirkung: `Beruhigt das überreizte Nervensystem und wirkt angstlösend -- vergleichbar mit Benzodiazepinen, dabei sanft und pflanzlich. Als Tee, Tinktur oder Extrakt.` },
      { name: `Baldrian (Valeriana officinalis)`, wirkung: `Beruhigt die Nerven und fördert den Schlaf. Wirkt über den GABA-Rezeptor im Gehirn -- denselben Weg, den auch pharmazeutische Beruhigungsmittel nutzen. Als Tinktur oder Kapseln.` },
      { name: 'Ashwagandha', wirkung: `Senkt Cortisol nachweislich und stärkt die Stressresistenz. Gibt dem Nervensystem die Basis, auf der Ruhe möglich wird. Abends einnehmen.` },
      { name: 'Lavendel', wirkung: `Silexan (Lavendelöl-Extrakt) ist klinisch erwiesen angstlösend. Schon der Duft aktiviert beruhigende Gehirnareale. Als Kapsel, Tee oder ätherisches Öl.` },
      { name: 'Melisse (Melissa officinalis)', wirkung: `Beruhigt Herzklopfen und nervöse Unruhe, die mit Angst einhergehen. Wirkt mild und doch spürbar. Als Tee, reichlich und warm.` },
      { name: 'Hopfen (Humulus lupulus)', wirkung: `Stark beruhigend, besonders in Kombination mit Baldrian. Wirkt auf das GABA-System und fördert tiefen, erholsamen Schlaf.` },
    ],
    stoffe: [
      { name: 'Magnesium', wirkung: `Das Mineral der Entspannung. Magnesiummangel verstärkt Angst massiv. 400-600mg täglich, als Magnesiumglycinat besonders gut verträglich und beruhigend.` },
      { name: 'GABA', wirkung: `Der wichtigste hemmende Neurotransmitter im Gehirn. Als Supplement kann GABA die überaktive Amygdala beruhigen. 500-750mg bei akuter Unruhe.` },
      { name: 'L-Theanin', wirkung: `Aus grünem Tee -- fördert Alpha-Wellen im Gehirn (entspannte Wachheit) und erhoht GABA. 200mg wirken beruhigend, dabei wach und klar.` },
      { name: 'B-Vitamine', wirkung: `Das Nervensystem braucht B-Vitamine für jede einzelne Signalweiterleitung. Mangel verstärkt Angst und Nervosität. Als hochdosierter B-Komplex.` },
    ],
    ernaehrung: {
      empfehlung: "Bei Angst braucht der Körper erdende, nährende Kost. Warme Mahlzeiten, regelmäßige Essenszeiten und Nahrungsmittel, die den Blutzucker stabil halten, geben dem Nervensystem Sicherheit. Jede warme Mahlzeit ist wie eine Umarmung von innen.",
      staerkend: ["Haferflocken (beruhigend für die Nerven)", 'Warme Suppen und Eintöpfe', "Nüsse (besonders Cashews -- reich an Tryptophan)", 'Bananen und Datteln', 'Kamillentee und Melissentee', "Dunkle Schokolade (in Massen)", 'Avocado', "Warme Gewürze (Zimt, Kardamom, Vanille)"],
      meiden: ["Koffein (verstärkt Angst direkt)", "Alkohol (beruhigt kurzfristig, verstärkt Angst langfristig)", "Zucker (Blutzuckerschwankungen triggern Ängste)", 'Energydrinks', "Stark gewürzte, scharfe Speisen", "Kalte Rohkost in großen Mengen (bei Vata-Konstitution)"],
      rezepte: [
        { name: 'Nervenruhe-Milch', zutaten: '250ml warme Mandelmilch, 1 TL Ashwagandha-Pulver, 1/4 TL Muskatnuss, 1/4 TL Kardamom, 1 TL Honig', zubereitung: 'Mandelmilch erwärmen, Gewürze einrühren, mit Honig süßen. Abends trinken -- diese Mischung beruhigt das Vata und fördert tiefen Schlaf.' },
        { name: 'Beruhigungs-Tee', zutaten: '1 TL Passionsblume, 1 TL Melisse, 1/2 TL Lavendel, 1/2 TL Baldrian', zubereitung: 'Mit heißem Wasser übergießen, 10 Minuten ziehen lassen, langsam trinken. Bei akuter Angst eine Tasse, zur Vorbeugung 2-3 Tassen täglich.' },
      ]
    },
    fasten: {
      text: "Bei Angst ist Fasten mit Achtsamkeit anzuwenden. Hunger kann Ängste verstärken -- das Nervensystem braucht Sicherheit. Sanftes Intervallfasten kann helfen, längeres Fasten ist nur ratsam, wenn die Grundangst bereits gemildert ist.",
      formen: ["Sanftes Intervallfasten 14:10 -- genügend Nahrung in den Essensphasen", 'Digitales Fasten -- Nachrichtenkonsum und Social Media reduzieren senkt die Angstlast enorm', "Stille-Fasten -- Zeiten der Stille und des Alleinseins als Praxis, um die innere Stimme zu hören"],
      reinigung: ["Warme Fußbäder mit Lavendel -- erden und beruhigen sofort", 'Basisches Vollbad mit Natron und Epsomit -- löst Anspannung auf körperlicher Ebene', "Atemreinigung (Pranayama) -- besonders die verlängerte Ausatmung aktiviert den Parasympathikus"]
    },
    bewegung: {
      text: "Bewegung verbraucht die Stresshormone, die bei Angst ausgeschüttet werden -- sie gibt dem Körper das, was er eigentlich will: Handlung. Gleichzeitig fördert Bewegung GABA und Endorphine. Erdende, rhythmische Bewegungsformen sind besonders heilsam.",
      praktiken: ["Erdungsgang -- barfuß auf der Erde gehen, den Boden unter den Füßen spüren, 10-20 Minuten", "Yoga Nidra -- 'yogischer Schlaf', tiefste Entspannung bei vollem Bewusstsein, löst Angstmuster auf zellulärer Ebene", 'Rhythmisches Gehen oder Laufen -- der gleichmäßige Rhythmus beruhigt das Nervensystem', "Schütteln und Zittern (TRE) -- kontrolliertes Zittern löst gespeicherte Angst aus dem Körper"]
    },
    geist: {
      einheit: "Angst zeigt, dass ein Teil von dir nach Sicherheit und Geborgenheit ruft. Dieser Teil verdient Zuwendung, Mitgefühl und Schutz. In dem Moment, wo du dich der Angst zuwendest -- liebevoll und mutig -- beginnt sie, sich aufzulösen. Du bist größer als deine Angst. Du warst es immer.",
      affirmationen: ["Ich bin sicher. In diesem Moment ist alles gut.", "Ich atme ein -- Ruhe. Ich atme aus -- Vertrauen.", "Mein Körper beschützt mich. Ich darf mich entspannen.", "Ich begegne meiner Angst mit Mitgefühl. Sie darf da sein und darf auch wieder gehen.", "Ich bin geerdet, gehalten und getragen."],
      meditation: "Wenn Angst aufsteigt: Setze dich hin, spüre deine Füße auf dem Boden. Atme ein für 4 Zähler, halte für 4, atme aus für 8 Zähler. Diese verlängerte Ausatmung aktiviert sofort den Parasympathikus. Lege eine Hand auf den Bauch, eine auf das Herz. Spüre den Kontakt deiner Hände. Sage innerlich: 'Ich bin hier. Ich bin sicher. Alles ist gut.' Wiederhole, bis die Welle abebbt.",
      energie: "Das Wurzelchakra (Muladhara) braucht bei Angst besondere Aufmerksamkeit -- Erdung, Sicherheit, Verwurzelung. Rotes Licht, der Kontakt mit der Erde, Baeume umarmen, schwere Decken und Trommelklänge stärken das Wurzelchakra. Auch das Nabelchakra (Hara) darf gestärkt werden -- es ist das Zentrum der inneren Kraft.",
    },
    produkte: [
      { name: 'CBD-Öl', desc: `Klinisch erforscht bei Angststörungen. Wirkt über CB1-Rezeptoren im Gehirn angstlösend und beruhigend -- dabei wach und klar. Ideal als tägliche Unterstützung.`, tags: ['#angst', '#beruhigend', '#nervensystem'] },
      { name: 'Kratom', desc: `In niedriger Dosierung beruhigend und angstlösend. Kann bei akuten Angstphasen Erleichterung bringen. Bewusst und mit Respekt anwenden.`, tags: ['#angst', '#beruhigend', '#akuthilfe'] },
      { name: 'Magnesium-Öl', desc: `Sofort wirksam über die Haut. Entspannt Muskeln und Nervensystem. Bei akuter Panik auf den Nacken und die Fußsohlen sprühen.`, tags: ['#magnesium', '#entspannung', '#akuthilfe'] },
      { name: 'Epsomit', desc: `Magnesiumsulfat-Bad -- wirkt zutiefst entspannend auf Körper und Nervensystem. Abendliches Bad als Ritual gegen Angst.`, tags: ['#magnesium', '#bad', '#entspannung'] },
      { name: 'Heiltee', desc: `Warmer Kräutertee als Ritual -- das Halten der warmen Tasse, der Duft, das langsame Trinken beruhigen das Nervensystem auf allen Ebenen.`, tags: ['#ritual', '#wärme', '#beruhigend'] },
    ]
  },

  // ============================================================
  // 19. Rheuma / Gicht
  // ============================================================
  {
    id: 'rheuma',
    name: 'Rheuma / Gicht',
    tags: ['#rheuma', '#gicht', '#gelenke', '#entzündung', '#arthritis', '#harnsäure'],
    koerper: "Rheuma umfasst über 100 Erkrankungen des Bewegungsapparates -- am bekanntesten ist die rheumatoide Arthritis, bei der das Immunsystem die Gelenke angreift. Gicht entsteht durch erhöhte Harnsäurespiegel, die als Kristalle in den Gelenken auskristallisieren und heftige Entzündungen verursachen. Beide führen zu Schmerzen, Schwellungen, Steifheit und langfristig zu Gelenkschäden. Der Körper ist im Zustand chronischer Entzündung.",
    psychosomatik: {
      zitat: "Wo bist du steif und unbeweglich geworden -- im Denken, im Fühlen, im Leben?",
      text: "Die Gelenke stehen für Beweglichkeit und Flexibilität -- körperlich wie seelisch. Rheuma zeigt innere Erstarrung: festgehaltene Überzeugungen, verdrängter Groll, die Unfähigkeit, loszulassen. Gicht galt historisch als 'Krankheit der Könige' -- sie spiegelt Überfluss und den Wunsch nach Kontrolle. Dethlefsen sieht in der Gelenksteife die verdrängte Aggression, die sich gegen den eigenen Körper richtet. In der inneren Beweglichkeit, im Loslassen alter Urteile und im freien Fluss der Gefühle liegt die Medizin.",
    },
    traditionen: {
      volksmedizin: "Brennnessel (als Tee und aeusserlich als 'Nesselschlag'), Teufelskralle und Weidenrinde waren die großen Rheumamittel der Volksmedizin. Auch Heilerdewickel, Bienengifttherapie und Moorbäder gehörten zum Repertoire.",
      tcm: "In der TCM ist Rheuma ein 'Bi-Syndrom' -- Wind, Kälte und Feuchtigkeit dringen in die Meridiane ein und blockieren den Qi- und Blutfluss. Die Behandlung vertreibt die pathogenen Faktoren, bewegt Qi und Blut und stärkt das Wei-Qi (Abwehr).",
      ayurveda: "Im Ayurveda ist Rheuma (Amavata) die Verbindung von Ama (Toxine) und Vata (Bewegungsprinzip). Ama lagert sich in den Gelenken ab und blockiert Vata. Die Therapie beginnt mit Ama-Ausleitung (Panchakarma), gefolgt von Vata-ausgleichenden Maßnahmen und warmem Öl.",
      germanisch: "In der germanischen Medizin zeigt Rheuma einen Selbstwert-Konflikt in Bezug auf Geschicklichkeit und Bewegung. Die Hände (Fingergelenke) sprechen von Feinmotorik und Kontrolle, die Knie von Demut und Flexibilität.",
      alchemie: "Alchemistisch ist Rheuma eine Sal-Erkrankung -- zu viel Festigkeit, zu viel Kristallisation. Das Sal (Körper-Prinzip) hat die Oberhand über Mercurius (Fluss) und Sulphur (Seele). Die Lösung liegt im 'Solve' -- dem Auflösen des Erstarrten, dem Zurückfinden zum Fluss.",
    },
    kraeuter: [
      { name: 'Teufelskralle (Harpagophytum)', wirkung: `Klinisch erforschtes Antirheumatikum aus Afrika. Die Wurzel wirkt stark entzündungshemmend und schmerzlindernd. 2-4g Trockenextrakt täglich über Wochen einnehmen.` },
      { name: 'Weidenrinde (Salix alba)', wirkung: `Natürliches Aspirin -- enthält Salicin, das entzündungshemmend und schmerzlindernd wirkt. Magenfreundlicher als synthetisches Aspirin. Als Tee oder Extrakt.` },
      { name: 'Brennnessel', wirkung: `Wirkt entzündungshemmend und fördert die Harnsäureausscheidung (bei Gicht essenziell). Als Tee (3-4 Tassen täglich) oder als Frischpflanzenpresssaft.` },
      { name: 'Kurkuma', wirkung: `Curcumin ist ein kraftvoller Entzündungshemmer, der bei Rheuma vergleichbar mit Medikamenten wirkt. 2-4g täglich mit Pfeffer und Fett.` },
      { name: 'Weihrauch (Boswellia)', wirkung: `Boswelliasäuren hemmen die 5-Lipoxygenase -- einen Entzündungsweg, der bei Rheuma besonders aktiv ist. 1200mg Extrakt täglich.` },
      { name: 'Ingwer', wirkung: `Wirkt entzündungshemmend und schmerzlindernd auf die Gelenke. Frisch gerieben in Tee oder als warme Ingwerkompresse auf betroffene Gelenke.` },
    ],
    stoffe: [
      { name: 'MSM (Methylsulfonylmethan)', wirkung: `Organischer Schwefel, essenziell für Knorpel, Bindegewebe und die Entgiftung. Wirkt entzündungshemmend und schmerzlindernd bei Gelenkproblemen. 3-6g täglich.` },
      { name: 'Omega-3-Fettsäuren', wirkung: `EPA und DHA reduzieren Entzündungsmarker (CRP, IL-6) und verbessern die Gelenkbeweglichkeit. 3-4g täglich -- die Dosis macht den Unterschied.` },
      { name: 'Vitamin D', wirkung: `Reguliert das Immunsystem und reduziert Autoimmun-Entzündungen. Fast alle Rheuma-Patienten haben einen Mangel. Hohe Spiegel anstreben.` },
      { name: 'Kollagen (Typ II)', wirkung: `Baustein des Gelenkknorpels. Oral eingenommen kann es den Knorpelabbau verlangsamen und das Immunsystem tolerant gegenüber eigenem Knorpel machen.` },
    ],
    ernaehrung: {
      empfehlung: "Eine entzündungshemmende, basische Ernährung ist bei Rheuma und Gicht das Fundament. Arachidonsäure (in tierischen Produkten) fördert Entzündungen direkt -- pflanzenbetonte Kost reduziert sie. Bei Gicht ist die Reduktion von Purinen zentral.",
      staerkend: ["Grünes Blattgemüse", "Kirschen und Beerenobst (senken Harnsäure)", "Ananas (Bromelain wirkt entzündungshemmend)", "Kurkuma, Ingwer, Knoblauch", "Leinöl und Hanfsamen (Omega-3)", "Sellerie (fördert Harnsäureausscheidung)", 'Basisches Wasser', "Hirse und Quinoa"],
      meiden: ["Schweinefleisch (höchster Arachidonsauregehalt)", "Innereien und Wurst (purinreich)", "Alkohol, besonders Bier (erhoht Harnsäure)", 'Zucker und Weissmehl', 'Kuhmilchprodukte', "Tomaten und Paprika (bei Empfindlichkeit)", "Kaffee in Übermaß"],
      rezepte: [
        { name: 'Goldene Kurkuma-Paste', zutaten: '50g Kurkumapulver, 250ml Wasser, 1 TL schwarzer Pfeffer, 2 EL Kokosöl', zubereitung: 'Kurkuma und Wasser in einem Topf verrühren, auf kleiner Flamme 10 Minuten rühren bis eine Paste entsteht. Pfeffer und Kokosöl einrühren. Im Kühlschrank aufbewahren. 1 TL täglich in warme Milch, Suppe oder Smoothie geben.' },
        { name: 'Anti-Entzündungs-Saft', zutaten: 'Handvoll Kirschen, 4 Stangen Sellerie, 1 Stück Ingwer, 1 Apfel, 1/2 Ananas', zubereitung: 'Alles entsaften. Dieser Saft vereint die stärksten natürlichen Entzündungshemmer und Harnsäuresenker in einem Glas. Morgens auf nüchternen Magen.' },
      ]
    },
    fasten: {
      text: "Fasten hat bei Rheuma spektakuläre Wirkung -- oft verschwinden die Schmerzen nach wenigen Tagen vollständig. Der Körper stoppt die Entzündungsprozesse, der Harnsäurespiegel sinkt. Die Herausforderung liegt im Beibehalten der Ergebnisse danach -- mit entzündungsarmer Ernährung.",
      formen: ["Buchinger-Heilfasten 7-14 Tage -- klinisch erforscht bei Rheuma mit hervorragenden Ergebnissen", 'Basenfasten als Einstieg oder Übergangsphase', "Intervallfasten 16:8 als langfristige Strategie"],
      reinigung: ["Basenbader mit Natron und Epsomit -- schwemmen Säuren aus den Geweben", 'Leberreinigung -- die Leber baut Harnsäure ab', "Schröpfen auf betroffenen Gelenken -- traditionelle Methode zur Schmerzlinderung"]
    },
    bewegung: {
      text: "Bewegung ist bei Rheuma essenziell -- Gelenke brauchen Bewegung, um ernährt zu werden. Der Gelenkknorpel hat keine eigene Blutversorgung und wird nur durch Bewegung mit Nährstoffen versorgt. Sanfte, regelmäßige Bewegung hält die Gelenke geschmeidig und reduziert Schmerzen.",
      praktiken: ["Schwimmen in warmem Wasser -- die sanfteste Art, alle Gelenke zu bewegen, Auftrieb entlastet", "Qi Gong -- fließende, weiche Bewegungen fördern den Qi-Fluss durch die Gelenke", 'Sanftes Yoga -- besonders Handgelenk- und Fingerübungen bei Fingerarthritis', "Täglich 5 Minuten jedes Gelenk sanft kreisen -- morgens, um die Morgensteifigkeit zu lösen"]
    },
    geist: {
      einheit: "Rheuma und Gicht laden ein, innerlich beweglich zu werden. Alte Urteile, Groll und Verbitterung kristallisieren sich im Körper -- genau wie Harnsäurekristalle in den Gelenken. Vergebung -- sich selbst und anderen -- ist die kraftvollste Medizin. In der Beweglichkeit des Herzens werden auch die Gelenke wieder frei.",
      affirmationen: ["Ich lasse los, was mich steif und starr macht. Ich fließe mit dem Leben.", "Meine Gelenke sind geschmeidig und frei. Bewegung ist Freude.", "Ich vergebe -- mir und anderen. Ich befreie mich von altem Groll.", "Mein Körper erneuert sich. Jeder Tag bringt mehr Beweglichkeit."],
      meditation: "Schließe die Augen und bringe deine Aufmerksamkeit zu einem Gelenk, das dich gerade am meisten beschäftigt. Atme warmes, goldenes Licht in dieses Gelenk. Stell dir vor, wie das Licht die Kristalle und Entzündungen auflöst -- sanft, wie warmes Wasser Eis schmilzt. Sprich zum Gelenk: 'Ich danke dir. Ich lasse los, was dich belastet. Du darfst dich frei bewegen.' Spüre, wie Wärme und Leichtigkeit einziehen.",
      energie: "Das Sakralchakra (Svadhisthana) -- Sitz der Beweglichkeit und des Fliessens -- und das Solarplexus-Chakra (Manipura) -- Sitz der Willenskraft -- sind hier zentral. Warme, orangefarbene Energie unterstützt das Sakralchakra. Bienenwachs-Wickel auf den Gelenken übertragen wohltuende Wärme.",
    },
    produkte: [
      { name: 'Anorganischer Schwefel', desc: `MSM-Quelle für Gelenke und Bindegewebe. Schwefel ist Baustein von Knorpel und wirkt stark entzündungshemmend. Das wichtigste Supplement bei Gelenkproblemen.`, tags: ['#schwefel', '#gelenke', '#entzündungshemmend'] },
      { name: 'Epsomit', desc: `Magnesiumsulfat-Bäder entspannen die Muskulatur um die Gelenke, liefern Magnesium und Schwefel transdermal und lösen Säuren aus dem Gewebe.`, tags: ['#magnesium', '#schwefel', '#bad', '#gelenke'] },
      { name: 'Zeolith/ZeoMont', desc: `Bindet Säuren und Giftstoffe im Darm und entlastet den Körper. Unterstützt die Entsäuerung, die bei Rheuma und Gicht essenziell ist.`, tags: ['#entsäuerung', '#entgiftung', '#säuren'] },
      { name: 'Natron', desc: `Basisches Natriumhydrogencarbonat -- aeusserlich als Basenbad und innerlich zur Entsäuerung (nach Anleitung). Löst Säurekristalle im Gewebe.`, tags: ['#basisch', '#entsäuerung', '#gelenke'] },
      { name: 'Borax-Tinktur', desc: `Bor ist essenziell für den Knochenund Gelenkstoffwechsel. Studien zeigen, dass Bormangelregionen deutlich höhere Arthritisraten haben. Reguliert den Calciumhaushalt.`, tags: ['#bor', '#gelenke', '#knochen'] },
      { name: 'CBD-Öl', desc: `Wirkt entzündungshemmend und schmerzlindernd bei Gelenkschmerzen. Kann aeusserlich auf betroffene Gelenke aufgetragen und innerlich eingenommen werden.`, tags: ['#schmerz', '#entzündung', '#gelenke'] },
    ]
  },

  // ============================================================
  // 20. Sodbrennen / Reflux
  // ============================================================
  {
    id: 'sodbrennen',
    name: 'Sodbrennen / Reflux',
    tags: ['#sodbrennen', '#reflux', '#magen', '#magensaeure', '#speiseröhre', '#verdauung'],
    koerper: "Bei Sodbrennen fließt Magensaeure in die Speiseröhre zurück -- der untere Ösophagussphinkter (Schließmuskel) schließt zu schwach. Die empfindliche Schleimhaut der Speiseröhre wird gereizt und entzündet sich. Häufig liegt paradoxerweise zu wenig Magensaeure vor -- der Magen produziert zu wenig, die Verdauung stockt, Gärungsgase drücken den Mageninhalt nach oben. Chronischer Reflux kann die Speiseröhre dauerhaft verändern.",
    psychosomatik: {
      zitat: "Was liegt dir sauer auf? Was kannst du gerade schwer verdauen?",
      text: "Der Magen ist das Organ des Annehmens und Verdauens -- von Nahrung und von Lebenserfahrungen. Sodbrennen zeigt, dass etwas aufstoßt -- ein Ärger, eine Situation, ein Gefühl, das verdrängt wurde und zurück an die Oberfläche drängt. Der Magen sagt: 'Das ist mir zu viel, das kommt mir hoch.' Die Säure, die brennt, ist oft verdrängte Wut, die sich körperlich ausdrückt. In der ehrlichen Verarbeitung und im Ausdrücken der Gefühle beruhigt sich der Magen.",
    },
    traditionen: {
      volksmedizin: "Kamillentee war das Hausmittel bei Magenbeschwerden, ebenso Fencheltee und Anis. Kartoffelsaft galt als sofort wirksam bei Sodbrennen. Heilerde (eingerührt in Wasser) band überschüssige Säure.",
      tcm: "In der TCM ist Sodbrennen oft 'rebellierendes Magen-Qi' -- das Qi fließt nach oben statt nach unten. Ursachen sind Magen-Hitze (zu viel scharfes Essen, Stress) oder Leber-Qi, das den Magen angreift (Stress, Wut). Die Behandlung senkt das Magen-Qi und harmonisiert die Leber.",
      ayurveda: "Im Ayurveda zeigt Sodbrennen erhöhtes Pitta im Magen -- zu viel Feuer. Kühlende Nahrungsmittel, Aloe-Vera-Saft, Shatavari und der Verzicht auf scharfe, saure und fermentierte Speisen bringen das Pitta zurück ins Gleichgewicht.",
      germanisch: "In der germanischen Medizin ist der Magen mit einem Revier-Ärger-Konflikt verbunden -- etwas wurde 'geschluckt', das unverdaulich ist. Die kleine Kurvatur des Magens reagiert auf ärgerliche Situationen im nahen Umfeld.",
      alchemie: "Alchemistisch ist die Magensaeure das innere Feuer -- das Aqua Regia, das Königswasser, das alles auflöst und verwandelt. Sodbrennen zeigt, dass dieses Feuer fehlgeleitet ist -- es brennt am falschen Ort. Die Heilung liegt in der richtigen Lenkung des inneren Feuers.",
    },
    kraeuter: [
      { name: `Kamille (Matricaria chamomilla)`, wirkung: `Das Magenkraut schlechthin. Beruhigt die Schleimhaut, hemmt Entzündungen und löst Krämpfe. Als Rollkur: starken Kamillentee trinken und sich nacheinander auf alle vier Seiten legen, je 5 Minuten.` },
      { name: `Süßholzwurzel (Glycyrrhiza glabra)`, wirkung: `Schützt die Magenschleimhaut durch Bildung einer Schutzschicht. DGL-Form (deglycyrrhiziniert) ist bei längerer Anwendung vorzuziehen. Kautabletten vor dem Essen.` },
      { name: 'Eibisch (Althaea officinalis)', wirkung: `Die Schleimstoffe legen sich wie ein Balsam über die gereizte Schleimhaut und schützen sie. Als Kaltauszug über Nacht -- morgens trinken.` },
      { name: 'Fenchel-Anis-Kümmel', wirkung: `Die klassische Dreier-Kombination gegen Völlegefühl, Blähungen und aufstoßende Gärungsgase. Als Tee nach dem Essen.` },
      { name: 'Ingwer', wirkung: `Fördert die Magenentleerung (prokinetisch) und verhindert so den Rückfluss. Ein Stück frischer Ingwer vor dem Essen kauen oder als Tee.` },
      { name: 'Kalmuswurzel (Acorus calamus)', wirkung: `Traditionelles Magenmittel, das die Verdauungskraft stärkt und den Magen beruhigt. Ein kleines Stück Wurzel vor dem Essen kauen.` },
    ],
    stoffe: [
      { name: 'Betain-HCl', wirkung: `Bei zu wenig Magensaeure (die häufigste, oft verkannte Ursache von Reflux) ergänzt Betain-HCl die fehlende Säure. Zu den Mahlzeiten einnehmen -- stärkt die gesamte Verdauung.` },
      { name: 'Zink-Carnosin', wirkung: `Schützt und regeneriert die Magenschleimhaut. Klinisch erforscht bei Gastritis und Reflux. 75mg zweimal täglich.` },
      { name: 'Verdauungsenzyme', wirkung: `Unterstützen die Verdauung und verhindern Gärung im Magen. Besonders bei schwerer Kost hilfreich. Zu den Mahlzeiten einnehmen.` },
      { name: 'Probiotika', wirkung: `Eine gesunde Darmflora unterstützt die gesamte Verdauung. Lactobacillus und Bifidobacterium Stämme auf nüchternen Magen einnehmen.` },
    ],
    ernaehrung: {
      empfehlung: "Langsam essen, gut kauen und in Ruhe genießen -- das allein löst viele Magenprobleme. Kleinere Mahlzeiten entlasten den Magen. Die letzte Mahlzeit darf 3 Stunden vor dem Schlafengehen liegen. Jede Mahlzeit bewusst und dankbar zu sich nehmen ist bereits Medizin.",
      staerkend: ["Kartoffeln und Kartoffelsaft (basisch, schützt die Schleimhaut)", "Haferflocken (Schleimstoffe beruhigen den Magen)", "Bananen (natürliches Antazidum)", 'Fenchel und Sellerie', "Mandeln (basisch, gut kauen)", 'Ingwer und Kurkuma', 'Gedünstetes Gemüse', "Naturbelassener Honig (schleimhautschützend)"],
      meiden: ["Kaffee auf nüchternen Magen", 'Alkohol', "Scharfe Gewürze (Chili, scharfer Pfeffer)", 'Zitrusfrüchte bei akutem Sodbrennen', "Schokolade (entspannt den Schließmuskel)", "Minze (entspannt den Schließmuskel)", 'Kohlensäurehaltige Getränke', "Fettreiche Speisen spät abends"],
      rezepte: [
        { name: 'Kartoffelsaft-Kur', zutaten: '2-3 rohe, bio Kartoffeln', zubereitung: 'Kartoffeln waschen, roh entsaften. 100ml Kartoffelsaft morgens auf nüchternen Magen trinken. Der basische Saft neutralisiert überschüssige Säure und legt sich schützend auf die Schleimhaut. 2-3 Wochen durchführen.' },
        { name: 'Magenberuhigungs-Tee', zutaten: '1 TL Kamillenblüten, 1 TL Fenchelsamen, 1/2 TL Anis, 1/2 TL Kümmel, 1 Stück Süßholzwurzel', zubereitung: 'Mit 300ml heißem Wasser übergießen, 10 Minuten ziehen lassen. In kleinen Schlucken nach dem Essen trinken. Dieser Tee vereint die sanftesten Magenheilkräuter.' },
      ]
    },
    fasten: {
      text: "Fasten gibt dem Magen die wertvollste Medizin: Ruhe. Wenn der Magen leer ist, kann die Schleimhaut sich regenerieren, der Schließmuskel sich erholen. Schon ein Fasttag pro Woche kann chronisches Sodbrennen deutlich verbessern.",
      formen: ["Intermittierendes Fasten 16:8 -- die nächte Fastenpause lässt den Magen heilen", 'Ein Fasttag pro Woche mit warmem Kräutertee und Wasser', "Basenfasten 7 Tage als Regenerationskur für den gesamten Magen-Darm-Trakt"],
      reinigung: ["Heilerde (Montmorillonit) in Wasser eingerührt -- bindet überschüssige Säure und Giftstoffe im Magen", 'Ölziehen am Morgen -- reinigt den Mundraum und regt die Verdauung reflektorisch an', "Abdominal-Massage im Uhrzeigersinn -- fördert die Magenentleerung und löst Spannungen"]
    },
    bewegung: {
      text: "Ein kurzer Spaziergang nach dem Essen fördert die Magenentleerung und verhindert Reflux. Flaches Liegen nach dem Essen ist ungünstig -- der Oberkörper darf erhöht bleiben. Sanfte Bauchübungen stärken den Schließmuskel langfristig.",
      praktiken: ["Verdauungsspaziergang -- 15 Minuten nach jeder Hauptmahlzeit genügen", "Bauchatmung -- tiefes Zwerchfellatmen stärkt den unteren Ösophagussphinkter direkt, 10 Minuten täglich", "Yoga -- besonders der Diamantsitz (Vajrasana) nach dem Essen fördert die Verdauung", "Sanfte Bauchmuskelübungen -- ein starker Rumpf stützt den Schließmuskel"]
    },
    geist: {
      einheit: "Sodbrennen zeigt, dass etwas im Leben aufstößt -- ein unverdauter Ärger, eine Situation, die sauer macht. Der Magen bittet darum, die Dinge zu verarbeiten -- emotional wie körperlich. In dem Moment, wo die Gefühle ehrlich ausdrückt werden, beruhigt sich auch der Magen.",
      affirmationen: ["Ich verdaue das Leben mit Leichtigkeit. Alles, was kommt, kann ich annehmen und verwandeln.", "Mein Magen ist ruhig und stark. Ich vertraue meiner Verdauungskraft.", "Ich spreche aus, was mich bewegt. Meine Gefühle fließen frei.", "Ich nehme mir Zeit -- für mein Essen und für mein Leben."],
      meditation: "Lege beide Hände auf deinen Bauch. Atme tief in den Bauch hinein und spüre, wie er sich hebt und senkt. Stell dir vor, wie ein kühles, beruhigendes, blaues Licht deinen Magen erfüllt -- es löscht das überschüssige Feuer und bringt Frieden. Sage innerlich: 'Ich bin in Frieden mit dem, was ist. Ich verdaue mit Leichtigkeit.' Spüre die Ruhe, die sich im Bauch ausbreitet.",
      energie: "Das Solarplexus-Chakra (Manipura) und das Sakralchakra (Svadhisthana) sind hier beteiligt. Gelbes Licht stärkt das Manipura und die Verdauungskraft. Kühlende Steine (Mondstein, Aquamarin) auf dem Solarplexus beruhigen überschüssige Hitze. Klangschalen auf dem Bauch harmonisieren die Verdauungsenergie.",
    },
    produkte: [
      { name: 'Natron', desc: `Natürliches Antazidum -- ein halber Telöffel in Wasser aufgelöst neutralisiert Magensaeure sofort. Als Soforthilfe bei akutem Sodbrennen. Regelmäßige Anwendung nach Anleitung.`, tags: ['#basisch', '#soforthilfe', '#magen'] },
      { name: 'Montmorillonit', desc: `Heilerde, die überschüssige Säure bindet, die Magenschleimhaut schützt und Giftstoffe adsorbiert. In Wasser eingerührt vor dem Essen oder bei Bedarf.`, tags: ['#heilerde', '#magen', '#säurebindend'] },
      { name: 'Zeolith/ZeoMont', desc: `Vulkanmineral mit enormer Bindungsfähigkeit für Säuren und Toxine. Entlastet den gesamten Verdauungstrakt und fördert die Schleimhautregeneration.`, tags: ['#entgiftung', '#magen', '#schleimhaut'] },
      { name: 'Heiltee', desc: `Kräutertee-Mischung für den Magen -- wärmt, beruhigt und unterstützt die Verdauung. Das tägliche Ritual des Tee-Trinkens ist bereits heilsam.`, tags: ['#magen', '#verdauung', '#ritual'] },
      { name: 'CBD-Öl', desc: `Reguliert die Magensaureproduktion und wirkt entzündungshemmend auf die Schleimhaut. Beruhigt das stressbedingte Sodbrennen über das Nervensystem.`, tags: ['#magen', '#entzündungshemmend', '#stress'] },
    ]
  },

];
