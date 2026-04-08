export const CONDITIONS_4 = [

  // ============================================================
  // 1. Chronische Müdigkeit / CFS / Energiemangel
  // ============================================================
  {
    id: 'erschoepfung',
    name: `Chronische Müdigkeit / CFS / Energiemangel`,
    tags: ['#erschöpfung', '#müdigkeit', '#cfs', '#energiemangel', '#burnout', '#nebennieren'],
    koerper: "Chronische Erschöpfung (CFS/ME) ist weit mehr als einfache Müdigkeit -- der gesamte Energiestoffwechsel ist gestört. Die Mitochondrien, die Kraftwerke der Zellen, produzieren nicht genug ATP. Die Nebennieren sind erschöpft und liefern zu wenig Cortisol und DHEA. Oft liegt eine stille Entzündung im Körper vor, begleitet von Darmproblemen, Nährstoffmängeln und einer gestörten Entgiftung. Der Körper befindet sich in einem Dauerzustand der Energieschuld -- jede Aktivität kostet mehr, als sie sollte, und die Erholung reicht nie aus.",
    psychosomatik: {
      zitat: "Wofür brennst du nicht mehr -- und was hat dich ausgebrannt?",
      text: "Chronische Erschöpfung ist die Sprache des Körpers, wenn die Seele seit Langem überfordert ist. Rüdiger Dahlke beschreibt CFS als den Streik des Körpers gegen ein Leben, das nicht mehr das eigene ist. Louise Hay sieht darin Widerstand gegen das, was ist, eine tiefe innere Erschöpfung durch ständiges Funktionieren. Thorwald Dethlefsen deutet die fehlende Energie als Zeichen, dass die Lebenskraft in Bereiche fließt, die nicht mehr genährt werden wollen. Die Frage ist nicht, wie man mehr Energie bekommt -- sondern wohin die Energie fließt, die da ist. Oft steckt dahinter ein Leben nach fremden Maßstäben, Pflichterfüllung ohne Freude, Geben ohne Empfangen."
    },
    traditionen: {
      volksmedizin: "Die europäische Volksmedizin kannte Erschöpfungszustände als 'Auszehrung'. Hafer galt als das wichtigste Stärkungsmittel -- als Haferbrei, Hafertinktur (Avena sativa) und Haferstrohbad. Rosmarinwein nach Hildegard von Bingen belebte den Kreislauf und die Lebenskraft. Brennnesseltee wurde als Eisenlieferant und Bluttonikum getrunken.",
      tcm: "In der TCM ist chronische Erschöpfung ein Mangel an Qi und Yang -- häufig im Funktionskreis Niere und Milz. Die Niere als Wurzel der Lebensenergie (Jing) ist erschöpft, die Milz kann aus der Nahrung kein Qi mehr gewinnen. Die Behandlung stärkt Nieren-Yang, nährt das Blut und hebt das Milz-Qi. Ginseng, Astragalus und Rehmannia sind Schlüsselkräuter.",
      ayurveda: "Im Ayurveda zeigt CFS ein tiefes Vata-Ungleichgewicht mit erschöpftem Ojas -- der feinsten Essenz der Lebenskraft. Das Agni (Verdauungsfeuer) ist schwach, sodass Ama (Schlacken) den Körper belasten. Rasayanas (Verjüngungsmittel) wie Ashwagandha und Shatavari stehen im Zentrum der Behandlung, zusammen mit nährender, warmer Kost und regelmäßigem Tagesrhythmus.",
      germanisch: "In der Germanischen Heilkunde nach Hamer steht chronische Erschöpfung oft im Zusammenhang mit einem aktiven Existenzkonflikt oder Selbstwerteinbruch -- der Organismus fährt in den Energiesparmodus, weil auf tiefer Ebene das Überleben als bedroht empfunden wird. Die Lösung des Konflikts bringt die Energie zurück.",
      alchemie: "Alchemistisch betrachtet fehlt es an Sulphur -- dem inneren Feuer, der Seelenkraft. Die Lebensessenz (Quinta Essentia) ist verbraucht. Spagyrische Aufbereitungen von Rosmarin, Hafer und Gold (Aurum) können das innere Feuer neu entfachen. Es geht darum, die Verbindung zwischen Geist und Materie wiederherzustellen."
    },
    kraeuter: [
      { name: `Ashwagandha (Withania somnifera)`, wirkung: `Adaptogen, das die Nebennieren regeneriert, Cortisol reguliert und tiefe Erschöpfung aufbaut. 300-600mg Extrakt täglich über Monate.` },
      { name: 'Astragalus (Huang Qi)', wirkung: `Stärkt das Qi und die Immunfunktion auf tiefer Ebene. Als Dekokt oder Extrakt, besonders in Kombination mit Ginseng.` },
      { name: 'Rosenwurz (Rhodiola rosea)', wirkung: `Erhöht die zelluläre Energieproduktion und verbessert die Stressresistenz. 200-400mg Extrakt morgens.` },
      { name: 'Süßholzwurzel (Glycyrrhiza)', wirkung: `Stützt die Nebennieren und erhöht den Cortisolspiegel auf natürliche Weise. Als Tee oder Tinktur, max. 6 Wochen am Stück.` },
      { name: 'Hafer (Avena sativa)', wirkung: `Nervenstärkendes Tonikum, nährt das erschöpfte Nervensystem. Als Frischpflanzentinktur (grüner Hafer) 3x täglich 30 Tropfen.` },
      { name: 'Rosmarin', wirkung: `Belebt den Kreislauf, fördert die Durchblutung des Gehirns, hebt die Stimmung. Als Tee, Tinktur oder aromatisches Bad.` }
    ],
    stoffe: [
      { name: 'Coenzym Q10 (Ubiquinol)', wirkung: `Schlüsselsubstanz für die mitochondriale Energieproduktion. 200-400mg Ubiquinol täglich, da CFS-Patienten oft stark verminderte Q10-Spiegel haben.` },
      { name: 'Magnesium', wirkung: `An über 300 Enzymreaktionen beteiligt, essentiell für die Energieproduktion. 400-600mg täglich als Magnesiumglycinat oder transdermal als Magnesiumöl.` },
      { name: 'Vitamin B-Komplex', wirkung: `Die B-Vitamine sind die Zündkerzen des Energiestoffwechsels. Hochdosiert als aktivierter B-Komplex (mit Methylfolat und Methylcobalamin).` },
      { name: 'D-Ribose', wirkung: `Zucker, der direkt in die ATP-Produktion einfließt. 5g 3x täglich, klinisch bei CFS erprobt mit deutlicher Besserung.` },
      { name: 'Vitamin D3', wirkung: `Fast alle CFS-Betroffenen haben einen Mangel. 5.000-10.000 IE täglich zusammen mit K2 und Fett einnehmen.` }
    ],
    ernaehrung: {
      empfehlung: "Die Ernährung bei chronischer Erschöpfung muss das Verdauungsfeuer stärken und die Mitochondrien nähren. Warme, nährstoffdichte Mahlzeiten zu regelmäßigen Zeiten bilden das Fundament. Blutzuckerschwankungen vermeiden -- sie rauben dem Körper die letzte Energie. Gute Fette, hochwertiges Protein und buntes Gemüse sind die Basis.",
      staerkend: ["Knochenbrühe (Aminosäuren, Mineralien)", 'Eier aus Freilandhaltung', "Süßkartoffeln (stabiler Blutzucker)", 'Avocado', 'Hanfsamen und Leinsamen', 'Dunkles Blattgemüse', "Leber (Vitamin B12, Eisen, CoQ10)", "Kokosfett (MCT für schnelle Energie)"],
      meiden: ["Zucker und Weißmehl (Blutzuckerachterbahn)", "Koffein in großen Mengen (erschöpft die Nebennieren weiter)", 'Alkohol', 'Verarbeitete Lebensmittel', "Gluten (bei vielen CFS-Betroffenen entzündungsfördernd)", "Große, schwere Mahlzeiten"],
      rezepte: [
        { name: 'Energiebrei am Morgen', zutaten: '50g Haferflocken, 1 EL Hanfsamen, 1 EL Kokosmus, 1 Banane, 1 TL Ashwagandha-Pulver, Zimt, Prise Salz', zubereitung: 'Haferflocken in Wasser oder Pflanzenmilch warm köcheln, Kokosmus einrühren, mit Banane, Hanfsamen und Ashwagandha toppen. Zimt und Salz zugeben. Nährt tief und stabilisiert den Blutzucker über Stunden.' },
        { name: `Kraftbrühe mit Ingwer und Kurkuma`, zutaten: '1L Knochenbrühe, Daumen Ingwer, 1 TL Kurkuma, 2 Knoblauchzehen, Sellerie, Petersilie, Meersalz', zubereitung: 'Knochenbrühe erwärmen, Ingwer und Knoblauch frisch hineinreiben, Kurkuma und Sellerie zugeben, 15 Minuten ziehen lassen. Mit frischer Petersilie und Salz servieren. Täglich eine Tasse als Energiequelle.' },
        { name: 'Grüner Power-Smoothie', zutaten: '1 Handvoll Spinat, 1/2 Avocado, 1 Banane, 1 EL Spirulina, 1 EL Kokosöl, 200ml Kokoswasser', zubereitung: 'Alles mixen und langsam trinken. Liefert Chlorophyll, gesunde Fette und Elektrolyte -- ideal als zweites Frühstück.' }
      ]
    },
    fasten: {
      text: "Bei chronischer Erschöpfung ist Vorsicht beim Fasten geboten -- ein geschwächter Körper braucht Nährstoffe. Sanfte Fastenformen, die den Körper entlasten ohne ihn auszuhungern, sind ideal. Intermittierendes Fasten kann die Mitochondrienfunktion verbessern, wenn der Körper stabil genug ist.",
      formen: [
        "Sanftes Intermittierendes Fasten 14:10 -- langsam herantasten, nicht erzwingen",
        "Brühefasten (1-2 Tage) -- nährt und entlastet gleichzeitig",
        "Basenfasten über 7 Tage -- entschlackt, ohne zu schwächen"
      ],
      reinigung: [
        "Ölziehen morgens mit Sesamöl -- bindet Toxine, ohne zu belasten",
        'Trockenbürsten -- regt Lymphfluss und Kreislauf sanft an',
        "Zeolith/Bentonit zur Darmentgiftung -- bindet Schwermetalle und Toxine",
        "Basenbäder mit Natron und Epsomit -- entziehen Säuren über die Haut und fördern die Magnesiumaufnahme"
      ]
    },
    bewegung: {
      text: "Bei CFS ist das richtige Maß entscheidend -- zu viel verschlimmert, zu wenig lässt den Körper weiter abbauen. Sanfte, rhythmische Bewegung ohne Erschöpfung ist der Schlüssel. Die Devise lautet: Bewegen, aber nie über die eigene Grenze hinaus. Langsam steigern und auf den Körper hören.",
      praktiken: [
        "Sanftes Qi Gong -- bewegt die Energie ohne den Körper zu erschöpfen, 15-20 Minuten täglich",
        "Spaziergang in der Natur -- frische Luft und Erdung, Dauer nach Befinden (10-30 Min)",
        "Restorative Yoga -- unterstützte Haltungen, die den Körper regenerieren statt fordern",
        "Atemübungen (Pranayama) -- Wechselatmung (Nadi Shodhana) belebt ohne Kraftaufwand",
        "Erdung (Barfuß auf der Erde) -- reduziert Entzündungen und lädt den Körper energetisch auf"
      ]
    },
    geist: {
      einheit: "Erschöpfung ist ein Ruf der Seele nach Wahrhaftigkeit. Sie fragt: Lebst du dein Leben -- oder das Leben eines anderen? Wenn die Energie fehlt, fehlt oft die Verbindung zum eigenen Feuer, zur eigenen Leidenschaft. In dem Moment, wo du anfängst, das zu tun, was wirklich deins ist, kehrt die Kraft von selbst zurück.",
      affirmationen: [
        "Meine Lebenskraft erneuert sich in jedem Moment.",
        "Ich darf empfangen. Ich darf ruhen. Ich darf aufladen.",
        "Ich lasse los, was mich auslaugt, und wende mich dem zu, was mich nährt.",
        "Mein Körper ist weise -- ich höre auf seine Signale.",
        "Mit jedem Tag kehrt mehr Kraft und Lebensfreude in mich zurück."
      ],
      meditation: "Lege dich bequem hin und lege beide Hände auf den Solarplexus (Magenbereich). Atme langsam und tief. Visualisiere mit jeder Einatmung eine warme, goldene Energie, die von der Erde durch deinen Körper aufsteigt und jede Zelle auflädt. Spüre, wie deine innere Batterie sich langsam füllt. Bleibe 15-20 Minuten so liegen. Diese Übung täglich praktiziert verändert das Energieniveau auf tiefer Ebene.",
      energie: "Das Solarplexus-Chakra (Manipura) ist das Zentrum der Lebenskraft und Willensenergie -- bei CFS oft massiv geschwächt. Arbeite mit gelbem Licht, Sonnenbaden und dem Klang RAM. Auch das Wurzelchakra (Muladhara) braucht Stärkung: Erdungsübungen, rote Nahrungsmittel und Kontakt mit der Erde. Reiki-Behandlungen auf diese beiden Chakren sind besonders hilfreich."
    },
    produkte: [
      { name: 'CBD Öl', desc: `Reguliert das Nervensystem, verbessert den Schlaf und reduziert die stille Entzündung, die CFS oft zugrunde liegt.`, tags: ['#cbd', '#nervensystem', '#schlaf'] },
      { name: 'Zeolith / ZeoMont', desc: `Bindet Schwermetalle und Toxine im Darm -- Entgiftung ist ein Schlüssel bei chronischer Erschöpfung.`, tags: ['#zeolith', '#entgiftung'] },
      { name: 'Magnesium-Öl', desc: `Transdermale Magnesiumzufuhr für optimale Aufnahme. Essentiell für die mitochondriale Energieproduktion.`, tags: ['#magnesium', '#energie', '#transdermal'] },
      { name: 'Hericium (Löwenmähne)', desc: `Regeneriert Nervenzellen und verbessert die kognitive Funktion -- besonders wertvoll beim Brain Fog, der CFS oft begleitet.`, tags: ['#hericium', '#nervensystem', '#brainfog'] },
      { name: 'Hanfsamen', desc: `Hochwertiges Protein, Omega-3 und Gamma-Linolensäure -- nähren den erschöpften Körper umfassend.`, tags: ['#hanfsamen', '#omega3', '#protein'] }
    ]
  },

  // ============================================================
  // 2. Chronische Entzündungen (allgemein)
  // ============================================================
  {
    id: 'entzuendung',
    name: `Chronische Entzündungen (allgemein)`,
    tags: ['#entzündung', '#inflammation', '#autoimmun', '#silent inflammation', '#schmerz'],
    koerper: "Chronische Entzündung ist eine stille Dauerbrandstiftung im Körper. Anders als die akute Entzündung, die heilt und wieder abklingt, schwelt die chronische Form im Verborgenen -- in den Gefäßen, im Darm, in den Gelenken, im Fettgewebe. Entzündungsmarker wie CRP, TNF-alpha und Interleukine bleiben dauerhaft erhöht. Der Körper befindet sich in ständiger Alarmbereitschaft, was Gewebe schädigt, die Zellalterung beschleunigt und den Boden für fast alle Zivilisationskrankheiten bereitet -- von Diabetes über Herzinfarkt bis Krebs.",
    psychosomatik: {
      zitat: "Was in dir brennt und keinen Ausdruck findet, verbrennt dich von innen.",
      text: "Chronische Entzündung spiegelt einen inneren Konflikt wider, der nie gelöst wurde -- etwas, das brennt und brodelt, ohne sich entladen zu können. Rüdiger Dahlke beschreibt Entzündung als unterdrückte Wut, als Kampf, der nach innen gerichtet wird statt nach außen. Das Feuer, das nicht gelebt wird -- die Leidenschaft, der gerechte Zorn, die Grenzverteidigung --, wendet sich gegen den eigenen Körper. Louise Hay verbindet Entzündung mit Angst, Wut und entzündetem Denken. Die Heilung beginnt, wenn das innere Feuer seinen rechten Platz findet: als Leidenschaft, als Schöpferkraft, als lebendiger Ausdruck."
    },
    traditionen: {
      volksmedizin: "Die Volksmedizin kannte zahlreiche entzündungshemmende Pflanzen: Weidenrinde als Vorläufer von Aspirin, Kamille als universelles Entzündungsmittel, Arnika äußerlich bei Schwellungen. Quarkwickel zogen die Hitze aus entzündetem Gewebe. Schwefelquellen wurden seit der Antike bei chronisch-entzündlichen Leiden aufgesucht.",
      tcm: "In der TCM entsteht chronische Entzündung durch Hitze und feuchte Hitze (Shi-Re), die sich im Körper festsetzt. Oft liegt eine Stagnation des Leber-Qi zugrunde, die sich in Hitze umwandelt. Die Behandlung kühlt die Hitze, löst die Stagnation und stärkt das Yin. Huang Qin (Baikal-Helmkraut), Huang Lian (Goldfaden) und grüner Tee sind klassische kühlende Kräuter.",
      ayurveda: "Im Ayurveda ist chronische Entzündung ein Pitta-Überschuss -- das Feuer-Element ist aus der Balance. Ama (Schlacken) im Gewebe nährt die Entzündung zusätzlich. Kühlende Nahrung und Kräuter wie Kurkuma, Neem und Guduchi (Tinospora) bringen Pitta zurück ins Gleichgewicht. Panchakarma-Kuren reinigen das Gewebe von Ama.",
      germanisch: "In der Germanischen Heilkunde zeigt Entzündung immer eine Heilungsphase an -- der Körper repariert Gewebe, das während einer Konfliktphase verändert wurde. Chronische Entzündung deutet auf einen wiederkehrenden Konflikt hin, der immer wieder getriggert wird und nie zur Ruhe kommt.",
      alchemie: "Alchemistisch ist Entzündung ein Überschuss an Sulphur -- das Feuer-Prinzip dominiert und verzehrt den Körper. Die Lösung liegt im Sal-Prinzip (Körper, Erde) und in Mercurius (Fluss, Ausgleich). Spagyrische Zubereitungen von kühlenden Pflanzen und die Einbeziehung des Wasserelements bringen das innere Feuer in Balance."
    },
    kraeuter: [
      { name: 'Kurkuma (Curcuma longa)', wirkung: `Einer der stärksten natürlichen Entzündungshemmer. Curcumin blockiert NF-kB und reduziert TNF-alpha. Mit schwarzem Pfeffer und Fett einnehmen. 1-2g Curcumin-Extrakt täglich.` },
      { name: 'Weihrauch (Boswellia serrata)', wirkung: `Hemmt die 5-Lipoxygenase und damit die Leukotrien-Produktion. Besonders wirksam bei Gelenk- und Darmentzündungen. 1200mg Extrakt täglich.` },
      { name: 'Ingwer (Zingiber officinale)', wirkung: `Hemmt COX-2 und Prostaglandine auf natürliche Weise. Frisch gerieben in Speisen oder als Tee, 3-5g täglich.` },
      { name: 'Brennnessel', wirkung: `Hemmt TNF-alpha und reguliert die Immunantwort. Reich an Mineralien und Kieselsäure. Als Tee (3 Tassen) oder Frischpresssaft.` },
      { name: 'Weidenrinde (Salix alba)', wirkung: `Das natürliche Aspirin -- enthält Salicin, das schmerzlindernd und entzündungshemmend wirkt. Als Tee oder Tinktur.` },
      { name: `Katzenkralle (Uncaria tomentosa)`, wirkung: `Immunmodulierend und stark entzündungshemmend. Hemmt NF-kB. Als Tee oder Kapseln, 350mg Extrakt 3x täglich.` }
    ],
    stoffe: [
      { name: 'Omega-3-Fettsäuren (EPA/DHA)', wirkung: `Bilden entzündungsauflösende Resolvine und Protektine. Aus Leinöl, Hanföl oder Algenöl. 2-4g täglich.` },
      { name: 'MSM (Methylsulfonylmethan)', wirkung: `Organischer Schwefel -- hemmt Entzündungskaskaden und unterstützt die Glutathion-Produktion. 2-4g täglich.` },
      { name: 'Vitamin D3', wirkung: `Reguliert über 200 Gene im Immunsystem, darunter viele entzündungshemmende. 5.000-10.000 IE täglich mit K2.` },
      { name: 'Glutathion / NAC', wirkung: `Das wichtigste körpereigene Antioxidans. N-Acetylcystein (NAC) als Vorstufe, 600-1200mg täglich, schützt vor oxidativem Stress und Entzündung.` }
    ],
    ernaehrung: {
      empfehlung: "Eine anti-entzündliche Ernährung ist die mächtigste Medizin bei chronischer Entzündung. Das Prinzip ist einfach: alles, was die Natur liefert, nährt -- alles, was die Industrie verarbeitet, entzündet. Bunte Pflanzenkost, gute Fette, Gewürze und fermentierte Lebensmittel bilden das Fundament.",
      staerkend: ["Fetter Fisch (Lachs, Makrele, Sardine) oder Algenöl", 'Kurkuma und Ingwer täglich', "Beeren (Blaubeeren, Himbeeren, Aronia)", 'Grünes Blattgemüse', 'Olivenöl extra vergine', 'Walnüsse und Hanfsamen', "Fermentiertes (Sauerkraut, Kimchi, Kefir)"],
      meiden: ["Zucker und Weißmehl (stärkste Entzündungstreiber)", "Transfette und Pflanzenöle (Sonnenblumen-, Sojaöl)", "Verarbeitetes Fleisch (Wurst, Aufschnitt)", 'Alkohol', "Milchprodukte (bei Unverträglichkeit)", "Fertiggerichte und Fast Food"],
      rezepte: [
        { name: `Anti-Entzündungs-Paste (Golden Paste)`, zutaten: '60g Kurkuma-Pulver, 250ml Wasser, 1 TL schwarzer Pfeffer, 70ml Kokosöl', zubereitung: 'Kurkuma mit Wasser bei niedriger Hitze zu einer Paste kochen (ca. 7-10 Min rühren). Pfeffer und Kokosöl einrühren, in ein Glas füllen. Im Kühlschrank aufbewahren. 1 TL 2-3x täglich -- in Milch, Smoothie oder pur.' },
        { name: `Entzündungshemmender Beerensmoothie`, zutaten: '150g gemischte Beeren, 1 TL Kurkuma, Stück Ingwer, 1 EL Leinöl, 1 Handvoll Spinat, 200ml Kokoswasser', zubereitung: 'Alles mixen und morgens trinken. Liefert Anthocyane, Curcumin, Omega-3 und Chlorophyll -- ein Kraftpaket gegen Entzündung.' },
        { name: `Warmer Linseneintopf mit Kurkuma`, zutaten: '200g rote Linsen, 1 Dose Kokosmilch, 2 TL Kurkuma, 1 TL Kreuzkümmel, Ingwer, Knoblauch, Spinat, Zitrone', zubereitung: 'Linsen mit Gewürzen und Kokosmilch weich kochen, Spinat unterheben, mit Zitronensaft abschmecken. Nährt tief und wirkt stark entzündungshemmend.' }
      ]
    },
    fasten: {
      text: "Fasten ist eine der wirksamsten Maßnahmen gegen chronische Entzündung. Schon 24 Stunden Nahrungsverzicht senkt die Entzündungsmarker messbar. Längere Fastenperioden aktivieren die Autophagie -- den zellulären Recyclingprozess, der beschädigtes Gewebe abbaut und erneuert.",
      formen: [
        "Intermittierendes Fasten 16:8 als dauerhafte Praxis -- hält Entzündungsmarker niedrig",
        "Prolongiertes Fasten 3-5 Tage -- tiefe Autophagie und Immunsystem-Reset",
        "FMD (Fasten-imitierende Diät nach Valter Longo) -- 5 Tage kalorienreduziert für Regeneration"
      ],
      reinigung: [
        "Zeolith-Kur (28 Tage) -- bindet Toxine, die Entzündung unterhalten",
        'Leberreinigung mit Bitterstoffen und Artischockenextrakt',
        'Darmreinigung mit Flohsamenschalen und Bentonit',
        "Basenbäder 2-3x pro Woche -- entsäuern und entspannen"
      ]
    },
    bewegung: {
      text: "Regelmäßige, moderate Bewegung ist stark entzündungshemmend -- sie senkt CRP und IL-6, während Muskeln entzündungsauflösende Myokine freisetzen. Übertraining hingegen fördert Entzündung. Der Schlüssel liegt in der Regelmäßigkeit und dem richtigen Maß.",
      praktiken: [
        "Tägliches zügiges Gehen (30-45 Min) -- die einfachste und effektivste anti-entzündliche Bewegung",
        "Yoga -- senkt CRP und Cortisol nachweislich, besonders Yin Yoga und Hatha Yoga",
        'Schwimmen -- gelenkschonend und ganzkörperlich entzündungshemmend',
        'Krafttraining moderat -- Muskeln produzieren entzündungshemmende Myokine',
        "Waldbaden (Shinrin-yoku) -- Phytonzide der Bäume senken Entzündungsmarker messbar"
      ]
    },
    geist: {
      einheit: "Chronische Entzündung ist ein Feuer, das keinen Ausdruck findet. Es ist die Leidenschaft, die nicht gelebt wird, die Wut, die nicht gesprochen wird, der Kampf, der nach innen geht statt nach außen. Wenn du dem Feuer in dir einen gesunden Ausdruck gibst -- durch Kreativität, durch ehrliche Worte, durch gelebte Leidenschaft --, braucht der Körper nicht mehr zu brennen.",
      affirmationen: [
        "Ich lasse das Feuer in mir auf gesunde Weise leben.",
        "Mein Körper findet Frieden und Ruhe.",
        "Ich drücke aus, was in mir brennt -- ehrlich und lebendig.",
        "Heilung geschieht in mir, jetzt, in diesem Moment."
      ],
      meditation: "Setze dich ruhig hin und visualisiere die Stellen in deinem Körper, die entzündet sind -- als rote, heiße Punkte. Atme kühles, blaues Licht ein und lenke es zu diesen Stellen. Sieh, wie das blaue Licht die Hitze sanft kühlt und auflöst. Mit jeder Ausatmung verlässt überschüssige Hitze deinen Körper. 15 Minuten täglich.",
      energie: "Arbeite mit dem Wasserelement -- kühlendes Blau und Silber. Das Sakralchakra (Svadhisthana) braucht Aufmerksamkeit, da hier die Emotionen fließen und Stagnation zu Entzündung führt. Klangheilung mit Klangschalen auf dem Körper kann tiefe Entzündungsprozesse beruhigen. Auch Reiki mit der Absicht der Kühlung und Beruhigung wirkt."
    },
    produkte: [
      { name: 'CBD Öl', desc: `Starker natürlicher Entzündungshemmer über das Endocannabinoid-System. Reguliert die Immunantwort und reduziert Schmerzen.`, tags: ['#cbd', '#entzündungshemmend', '#immunsystem'] },
      { name: 'Schwefel (anorganisch)', desc: `MSM-Quelle, die Entzündungskaskaden hemmt und die Glutathion-Produktion unterstützt.`, tags: ['#schwefel', '#msm', '#entgiftung'] },
      { name: 'Zeolith / ZeoMont', desc: `Bindet Toxine im Darm, die chronische Entzündung unterhalten. Stärkt die Darmbarriere.`, tags: ['#zeolith', '#entgiftung', '#darm'] },
      { name: 'Artemisia Annua', desc: `Artemisinin wirkt stark entzündungshemmend und antimikrobiell -- beseitigt Entzündungstrigger.`, tags: ['#artemisia', '#entzündungshemmend'] },
      { name: 'Hanfsamen', desc: `Ideales Omega-6 zu Omega-3-Verhältnis (3:1) -- reguliert Entzündungsprozesse auf Ernährungsebene.`, tags: ['#hanfsamen', '#omega3', '#ernährung'] }
    ]
  },

  // ============================================================
  // 3. Parasiten / Würmer / Darmparasiten
  // ============================================================
  {
    id: 'parasiten',
    name: `Parasiten / Würmer / Darmparasiten`,
    tags: ['#parasiten', '#würmer', '#darm', '#antiparasitär', '#entgiftung', '#reinigung'],
    koerper: "Darmparasiten sind häufiger als gedacht -- Schätzungen zufolge tragen über 50% der Menschen Parasiten, ohne es zu wissen. Würmer (Spulwürmer, Madenwürmer, Bandwürmer), Einzeller (Giardia, Blastocystis) und andere Parasiten nisten sich im Darm ein, ernähren sich von der Nahrung des Wirts und scheiden Toxine aus. Symptome sind vielfältig: Blähungen, Durchfall, Verstopfung, Gewichtsschwankungen, nächtliches Zähneknirschen, Juckreiz am After, Hautprobleme, Müdigkeit und Heißhunger auf Süßes. Die Parasiten schwächen das Immunsystem und können Nährstoffmängel verursachen.",
    psychosomatik: {
      zitat: "Wer lebt auf deine Kosten -- und warum lässt du es zu?",
      text: "Parasiten auf der körperlichen Ebene spiegeln oft parasitäre Muster im Seelischen wider. Rüdiger Dahlke beschreibt den Parasitenbefall als Zeichen mangelnder Abgrenzung -- die Unfähigkeit, Nein zu sagen, sich ausnutzen zu lassen, anderen mehr zu geben als sich selbst. Thorwald Dethlefsen sieht darin den Schatten des Wirtseins: Wer sich nicht wehrt, wird bewohnt. Die Frage lautet: Wer oder was lebt auf meine Kosten? Welche Beziehungen, Gewohnheiten oder Glaubensmuster zehren an meiner Lebenskraft? In der Reinigung des Körpers von Parasiten liegt auch die Einladung zur seelischen Reinigung -- Grenzen setzen, das Eigene schützen."
    },
    traditionen: {
      volksmedizin: "Die Volksmedizin hatte ein reiches Arsenal an Wurmmitteln: Kürbiskerne (besonders gegen Bandwürmer), Knoblauch (in Milch gekocht als Klistier), Rainfarn und Wermut als Tee. Karottensaft wurde Kindern gegeben, Papayakerne galten als universelles Entwurmungsmittel. Regelmäßige Wurmkuren waren fester Bestandteil der ländlichen Gesundheitspflege.",
      tcm: "In der TCM fallen Parasiten unter die Kategorie 'Gu-Syndrome' -- dunkle Yin-Pathogene, die sich in einem geschwächten Milieu festsetzen. Die Behandlung stärkt die Milz (als Quelle des Verdauungsfeuers) und setzt bittere, antiparasitäre Kräuter ein. Huang Lian (Goldfaden), Ku Shen (Sophora) und Shi Jun Zi (Rangunschlinger) sind klassische Wurmmittel.",
      ayurveda: "Im Ayurveda sind Parasiten (Krimi) ein Zeichen von schwachem Agni und übermäßigem Ama im Darm. Die Behandlung beginnt mit der Stärkung des Verdauungsfeuers durch scharfe, bittere Kräuter. Vidanga (Embelia ribes) ist das klassische Wurmmittel, zusammen mit Neem, Kurkuma und einer reinigenden Virechana-Kur.",
      germanisch: "In der Germanischen Heilkunde zeigt Parasitenbefall einen Brockenkonflikt im Zusammenhang mit dem Darm an -- etwas kann nicht verdaut, nicht angenommen werden. Die Parasiten helfen aus biologischer Sicht beim Abbau und der Verarbeitung dieses 'unverdaulichen Brockens'.",
      alchemie: "Alchemistisch sind Parasiten ein Zeichen, dass das innere Milieu aus dem Gleichgewicht geraten ist -- das Terrain bestimmt den Erreger, nicht umgekehrt. Wie Paracelsus lehrte: In einem reinen, vitalen Organismus können sich Parasiten nicht halten. Die Reinigung des Terrains durch Bittermittel, Schwefel und Feuer-Essenzen steht im Zentrum."
    },
    kraeuter: [
      { name: 'Wermut (Artemisia absinthium)', wirkung: `Das stärkste einheimische Antiparasitikum. Bitterstoff Absinthin lähmt und tötet Würmer. Als Tee (1 TL, 10 Min ziehen) oder Tinktur, 2-3 Wochen Kur.` },
      { name: `Schwarze Walnuss (Juglans nigra)`, wirkung: `Die grüne Schale enthält Juglon -- stark antiparasitär gegen Würmer und Einzeller. Als Tinktur der grünen Schalen, 15-30 Tropfen 3x täglich.` },
      { name: `Gewürznelke (Syzygium aromaticum)`, wirkung: `Zerstört die Eier der Parasiten -- essentiell als Ergänzung zu Wermut und Walnuss. Als Pulver in Kapseln, 500mg 3x täglich.` },
      { name: 'Knoblauch (Allium sativum)', wirkung: `Allicin wirkt gegen ein breites Spektrum von Parasiten, Pilzen und Bakterien. 2-3 rohe Zehen täglich auf nüchternen Magen.` },
      { name: 'Papayakerne', wirkung: `Enthalten das Enzym Papain, das Parasiten verdaut. Kerne trocknen, mahlen, 1 EL täglich auf nüchternen Magen mit Honig.` },
      { name: 'Olivenblatt-Extrakt', wirkung: `Oleuropein wirkt breit antiparasitär, antiviral und antimykotisch. Als Extrakt 500mg 2x täglich.` }
    ],
    stoffe: [
      { name: 'Diatomeen-Erde (Kieselgur)', wirkung: `Fossile Kieselalgen, die Parasiten im Darm mechanisch schädigen. 1 TL in Wasser morgens auf nüchternen Magen, 30 Tage.` },
      { name: 'Grapefruitkernextrakt', wirkung: `Breitband-Antimikrobikum gegen Parasiten, Pilze und Bakterien. 10-15 Tropfen in Wasser, 3x täglich.` },
      { name: 'Borax (Natriumborat)', wirkung: `Traditionell gegen Parasiten und Pilze eingesetzt. Unterstützt die Entgiftung und schafft ein parasitenfeindliches Milieu.` },
      { name: 'Zeolith', wirkung: `Bindet die Toxine, die beim Absterben der Parasiten freigesetzt werden (Herxheimer-Reaktion). 3g täglich während der Kur.` }
    ],
    ernaehrung: {
      empfehlung: "Eine antiparasitäre Ernährung entzieht den Parasiten ihre Nahrungsgrundlage (Zucker!) und stärkt das Verdauungsfeuer. Scharfe Gewürze, bittere Kräuter, roher Knoblauch und fermentierte Lebensmittel schaffen ein Milieu, in dem Parasiten nicht gedeihen können.",
      staerkend: ["Roher Knoblauch (2-3 Zehen täglich)", "Kürbiskerne (eine Handvoll täglich, roh)", 'Papayakerne', "Kokosfett und Kokosmus (Laurinsäure ist antiparasitär)", 'Sauerkraut und Fermentiertes', "Ananas (Bromelain verdaut Parasiten)", "Scharfe Gewürze (Cayenne, Ingwer)", "Bittere Salate (Rucola, Chicorée, Löwenzahn)"],
      meiden: ["Zucker in jeder Form (Hauptnahrung der Parasiten)", 'Weißmehl und Stärke', 'Alkohol', "Schweinefleisch (häufige Parasitenquelle)", "Rohes/halbgares Fleisch und Fisch (Ansteckungsrisiko)", "Milchprodukte während der Kur"],
      rezepte: [
        { name: 'Antiparasitärer Morgentrank', zutaten: '2 Knoblauchzehen, 1 EL Papayakerne (gemahlen), 1 EL Kokosöl, Saft einer halben Zitrone, 200ml warmes Wasser', zubereitung: 'Knoblauch fein pressen, mit allen Zutaten in warmem Wasser verrühren. Morgens auf nüchternen Magen trinken. 4 Wochen lang täglich.' },
        { name: `Kürbiskern-Kur gegen Bandwürmer`, zutaten: '300g rohe, geschälte Kürbiskerne, 1 EL Honig, 50ml warmes Wasser', zubereitung: 'Kürbiskerne im Mörser fein zerkleinern, mit Honig und Wasser zu einem Brei verrühren. Morgens nüchtern die gesamte Menge innerhalb einer Stunde essen. 2 Stunden später 1 EL Rizinusöl einnehmen.' }
      ]
    },
    fasten: {
      text: "Fasten entzieht Parasiten ihre Nahrungsgrundlage und stärkt gleichzeitig das Immunsystem. Eine Parasitenkur in Kombination mit Fasten ist besonders wirkungsvoll. Wichtig: Während des Fastens genug Bindmittel (Zeolith, Kohle) nehmen, um die Toxine der absterbenden Parasiten zu binden.",
      formen: [
        "3-Tage-Saftfasten mit antiparasitären Säften (Knoblauch, Karotte, Ananas)",
        "Intermittierendes Fasten 18:6 während der Parasitenkur -- lässt den Darm länger ruhen",
        "Kokosfett-Fasten (3 Tage nur Kokosöl und Wasser) -- Laurinsäure ist stark antiparasitär"
      ],
      reinigung: [
        'Einläufe mit Knoblauch-Wasser -- traditionelles Mittel gegen Darmparasiten',
        'Zeolith-Kur begleitend zur Parasitenkur -- bindet freigesetzte Toxine',
        "Darmspülung (Colon-Hydrotherapie) -- spült Parasiten und Eier aus dem Darm",
        "Leberreinigung nach der Parasitenkur -- Parasiten belasten die Leber stark"
      ]
    },
    bewegung: {
      text: "Bewegung unterstützt die Darmperistaltik und damit die Ausscheidung von Parasiten. Besonders Übungen, die den Bauchraum massieren und die Verdauung anregen, sind hilfreich. Auch Schwitzen durch Bewegung unterstützt die Entgiftung.",
      praktiken: [
        "Yoga-Drehungen (Ardha Matsyendrasana) -- massieren die inneren Organe und fördern die Ausscheidung",
        "Nauli Kriya -- die yogische Bauchmassage, die den Darm reinigt und das Verdauungsfeuer stärkt",
        "Trampolinspringen (Rebounding) -- regt den Lymphfluss an und unterstützt die Entgiftung",
        "Bauchatmung (Kapalabhati) -- Feueratmung reinigt den Bauchraum energetisch und physisch",
        "Zügiges Gehen nach dem Essen -- fördert die Darmperistaltik"
      ]
    },
    geist: {
      einheit: "Parasiten im Körper laden dich ein, parasitäre Strukturen in deinem Leben zu erkennen und aufzulösen. Wo lässt du zu, dass andere auf deine Kosten leben? Wo gibst du deine Kraft weg? Die körperliche Reinigung ist auch eine seelische Reinigung -- du darfst dein Territorium zurückerobern.",
      affirmationen: [
        "Mein Körper gehört mir. Ich bestimme, was in mir lebt.",
        "Ich setze klare Grenzen -- in meinem Körper und in meinem Leben.",
        "Ich reinige mich von allem, was mir nicht dient.",
        "Mein inneres Milieu ist stark und rein -- Parasiten finden hier keinen Halt."
      ],
      meditation: "Visualisiere ein starkes, goldenes Feuer in deinem Bauchraum -- dein inneres Verdauungsfeuer. Sieh, wie es stärker wird, wie es alles verbrennt, was nicht zu dir gehört. Spüre die Kraft und Wärme in deiner Mitte. Sage innerlich: 'Mein Körper ist mein heiliger Raum. Alles, was nicht hierher gehört, darf jetzt gehen.' Atme das Alte aus und lade mit jedem Atemzug frische Lebenskraft ein.",
      energie: "Das Solarplexus-Chakra (Manipura) ist das Zentrum der persönlichen Macht und des Willens -- genau der Ort, wo Parasiten sitzen. Stärke dieses Chakra durch Feuer-Meditationen, gelbes Licht und den Klang RAM. Auch energetische Reinigungstechniken wie Räuchern mit Salbei oder Palo Santo und Aurareinigung unterstützen den Prozess."
    },
    produkte: [
      { name: 'Artemisia Annua', desc: `Einjähriger Beifuß -- eines der stärksten antiparasitären Kräuter der Welt. Artemisinin wirkt gegen ein breites Spektrum von Parasiten.`, tags: ['#artemisia', '#antiparasitär', '#reinigung'] },
      { name: 'Knoblauch-Tinktur', desc: `Konzentriertes Allicin -- natürliches Breitband-Antiparasitikum. Einfacher einzunehmen als roher Knoblauch.`, tags: ['#knoblauch', '#antiparasitär'] },
      { name: 'Zeolith / ZeoMont', desc: `Unverzichtbar während der Parasitenkur -- bindet die Toxine der absterbenden Parasiten und verhindert die Herxheimer-Reaktion.`, tags: ['#zeolith', '#entgiftung', '#bindmittel'] },
      { name: 'Borax', desc: `Traditionell gegen Parasiten und Pilze eingesetzt. Unterstützt die Reinigung des inneren Milieus.`, tags: ['#borax', '#antiparasitär', '#reinigung'] },
      { name: 'Natron', desc: `Alkalisiert den Darm und schafft ein Milieu, in dem Parasiten nicht gedeihen. Unterstützt die Entsäuerung.`, tags: ['#natron', '#basisch', '#milieu'] }
    ]
  },

  // ============================================================
  // 4. Schwindel / Gleichgewichtsstörungen
  // ============================================================
  {
    id: 'schwindel',
    name: `Schwindel / Gleichgewichtsstörungen`,
    tags: ['#schwindel', '#gleichgewicht', '#vertigo', '#benommenheit', '#kreislauf'],
    koerper: "Schwindel entsteht, wenn das Gleichgewichtssystem -- eine komplexe Zusammenarbeit von Innenohr, Augen, Tiefensensibilität und Gehirn -- gestört ist. Beim Lagerungsschwindel lösen sich Kristalle im Innenohr und reizen die Sinneszellen. Beim Drehschwindel sendet das Vestibularorgan falsche Signale. Kreislaufbedingter Schwindel entsteht durch niedrigen Blutdruck oder Durchblutungsstörungen im Gehirn. Auch die Halswirbelsäule, Verspannungen im Nackenbereich, Medikamente, Stress und Nährstoffmängel (besonders Eisen, B12, Magnesium) können Schwindel auslösen.",
    psychosomatik: {
      zitat: "Wer den Boden unter den Füßen verliert, hat ihn innen schon länger verloren.",
      text: "Schwindel zeigt einen Verlust der inneren Orientierung an. Rüdiger Dahlke deutet ihn als Ausdruck einer Lebensphase, in der alles ins Schwanken geraten ist -- Werte, Beziehungen, die eigene Identität. Louise Hay verbindet Schwindel mit zerstreutem, flüchtigem Denken und der Weigerung, hinzuschauen. Thorwald Dethlefsen sieht darin die Angst vor dem Fall, vor dem Kontrollverlust. Der Schwindel fragt: Wo stehst du wirklich? Was gibt dir Halt? Die Heilung liegt im Finden des eigenen Standpunkts -- im buchstäblichen und übertragenen Sinne."
    },
    traditionen: {
      volksmedizin: "In der Volksmedizin wurden Melisse und Baldrian bei Schwindel eingesetzt, ebenso Rosmarintee zur Kreislaufbelebung. Kalte Güsse nach Kneipp an den Unterschenkeln stabilisierten den Kreislauf. Mistel-Kaltauszug regulierte den Blutdruck. Bei HWS-bedingtem Schwindel halfen warme Umschläge mit Heublumen.",
      tcm: "In der TCM entsteht Schwindel durch aufsteigendes Leber-Yang (bei Stress), durch Blut- und Qi-Mangel (Anämie, Erschöpfung) oder durch Schleim, der die klaren Öffnungen blockiert. Die Behandlung richtet sich nach der Ursache: das Yang beruhigen, das Blut nähren oder den Schleim transformieren. Gou Teng (Uncaria) und Tian Ma (Gastrodia) sind klassische Anti-Schwindel-Kräuter.",
      ayurveda: "Im Ayurveda ist Schwindel (Bhrama) meist ein Vata-Symptom -- zu viel Bewegung und Leichtigkeit, zu wenig Erdung. Auch ein Pitta-Überschuss in den feinen Kanälen des Kopfes kann Schwindel verursachen. Erdende Nahrung, Sesamöl-Massage (Abhyanga) und meditative Praxis bringen Stabilität zurück. Brahmi und Shankhapushpi nähren das Nervensystem.",
      germanisch: "In der Germanischen Heilkunde zeigt Schwindel einen Gleichgewichtskonflikt oder Sturzangst-Konflikt an. Das Gleichgewichtsorgan reagiert auf eine Situation, in der man buchstäblich oder metaphorisch den Boden unter den Füßen verliert. Die Lösung des Konflikts beendet den Schwindel.",
      alchemie: "Alchemistisch zeigt Schwindel ein Übermaß an Mercurius -- dem Prinzip der Bewegung und Flüchtigkeit. Es fehlt an Sal -- Erde, Festigkeit, Verankerung. Spagyrische Zubereitungen von erdenden Pflanzen (Baldrian, Eiche) und Mineralien bringen die Schwere und Stabilität zurück, die der Organismus braucht."
    },
    kraeuter: [
      { name: 'Ginkgo biloba', wirkung: `Verbessert die Durchblutung des Gehirns und des Innenohrs. 240mg standardisierter Extrakt täglich über mindestens 8 Wochen.` },
      { name: 'Ingwer', wirkung: `Wirkt gegen Übelkeit und Schwindel, fördert die Durchblutung. Als Tee oder Kapseln, besonders bei Reiseschwindel bewährt.` },
      { name: 'Melisse (Melissa officinalis)', wirkung: `Beruhigt das Nervensystem und löst Verkrampfungen, die Schwindel fördern. Als Tee oder Tinktur, 3x täglich.` },
      { name: 'Rosmarin', wirkung: `Kreislaufbelebend, durchblutungsfördernd. Als Tee (morgens), Tinktur oder als ätherisches Öl zum Einreiben an den Schläfen.` },
      { name: 'Weißdorn', wirkung: `Stabilisiert den Kreislauf und verbessert die Herzleistung -- wichtig bei kreislaufbedingtem Schwindel. Als Tee oder Extrakt.` }
    ],
    stoffe: [
      { name: 'Magnesium', wirkung: `Entspannt die Nackenmuskulatur und verbessert die Nervenleitung im Gleichgewichtssystem. 400mg täglich als Glycinat.` },
      { name: 'Eisen', wirkung: `Eisenmangel ist eine häufige Schwindelursache. Blutwerte prüfen, bei Mangel 20-40mg elementares Eisen mit Vitamin C einnehmen.` },
      { name: 'Vitamin B12', wirkung: `Essentiell für das Nervensystem und die Myelinscheiden. B12-Mangel kann Schwindel verursachen. 1000µg Methylcobalamin täglich.` },
      { name: 'Vitamin D3', wirkung: `Niedrige Vitamin-D-Spiegel sind mit Lagerungsschwindel (BPLS) assoziiert. 5.000 IE täglich mit K2.` }
    ],
    ernaehrung: {
      empfehlung: "Die Ernährung bei Schwindel soll den Kreislauf stabilisieren, das Nervensystem nähren und Blutzuckerschwankungen vermeiden. Regelmäßige, kleine Mahlzeiten mit ausreichend Salz und Flüssigkeit sind die Basis. Eisenreiche Kost und B-Vitamine stärken das Gleichgewichtssystem.",
      staerkend: ["Rote Bete (Eisen und Durchblutungsförderung)", "Dunkelgrünes Blattgemüse (Eisen, Magnesium)", "Nüsse und Samen (Magnesium, B-Vitamine)", 'Ingwer frisch', "Hirse (Silizium für das Nervensystem)", "Hafer (Nervennahrung)", "Eier (B12, Cholin)"],
      meiden: ["Koffein in großen Mengen (kann Schwindel verschlimmern)", "Alkohol (direkt ototoxisch)", "Zucker (Blutzuckerschwankungen)", 'Sehr salzarme Kost bei niedrigem Blutdruck', "Glutamat (Nervengift, kann Schwindel auslösen)"],
      rezepte: [
        { name: 'Rosmarin-Kreislauf-Tee', zutaten: '1 TL Rosmarin, 1 TL Melisse, 1/2 TL Ingwer gerieben, Honig', zubereitung: 'Kräuter mit 250ml kochendem Wasser überbrühen, 8 Minuten ziehen lassen. Mit Honig süßen. Morgens eine Tasse trinken -- belebt den Kreislauf sanft und zuverlässig.' },
        { name: 'Eisenreicher grüner Smoothie', zutaten: '2 Handvoll Spinat, 1 Rote Bete (klein), 1 Apfel, Saft einer halben Zitrone (Vitamin C für Eisenaufnahme), 200ml Wasser', zubereitung: 'Alles mixen und morgens trinken. Die Kombination aus pflanzlichem Eisen und Vitamin C optimiert die Eisenaufnahme.' }
      ]
    },
    fasten: {
      text: "Bei Schwindel ist Vorsicht beim Fasten geboten -- ein instabiler Kreislauf kann sich durch Nahrungsentzug verschlimmern. Sanfte Formen mit ausreichend Flüssigkeit und Mineralstoffen sind zu bevorzugen. Zuerst die Ursache klären, dann das Fasten individuell anpassen.",
      formen: [
        "Sanftes Intermittierendes Fasten 14:10 mit ausreichend Salz und Wasser",
        "Basenfasten (7 Tage) -- entlastet ohne den Kreislauf zu schwächen",
        "Suppenfasten -- warme Brühen stabilisieren den Kreislauf und liefern Mineralien"
      ],
      reinigung: [
        'HWS-Lockerung und Nackenentspannung -- viele Schwindelfälle kommen von der Halswirbelsäule',
        'Ölziehen morgens -- entlastet das Lymphsystem im Kopfbereich',
        "Basenbäder mit Epsomit (Bittersalz) -- Magnesium wird über die Haut aufgenommen"
      ]
    },
    bewegung: {
      text: "Gezielte Gleichgewichtsübungen trainieren das vestibuläre System und reduzieren Schwindel langfristig. Der Körper lernt, sich neu zu kalibrieren. Sanfte Bewegung mit Fokus auf Balance und Erdung ist der Schlüssel.",
      praktiken: [
        "Einbeinstand üben -- 30 Sekunden pro Bein, mit offenen, dann geschlossenen Augen",
        'Tai Chi -- die beste Bewegungsform für Gleichgewicht und Erdung',
        "Epley-Manöver -- spezifische Übung bei Lagerungsschwindel (BPLS), oft sofort wirksam",
        "Yoga: Baum-Haltung (Vrksasana) und Krieger III -- trainieren Balance und Konzentration",
        "Barfuß gehen auf unebenem Boden -- aktiviert die Propriozeptoren der Füße"
      ]
    },
    geist: {
      einheit: "Schwindel zeigt dir, dass du deinen Standpunkt finden darfst. Er fragt: Wo stehst du -- in dir, in deinem Leben? Was gibt dir Halt, wenn alles schwankt? Wahre Stabilität kommt nicht von außen, sie wächst aus deiner Verbindung mit dir selbst und mit der Erde unter deinen Füßen.",
      affirmationen: [
        "Ich stehe fest auf dem Boden meines Lebens.",
        "Ich finde mein Gleichgewicht -- innen und außen.",
        "Die Erde trägt mich. Ich bin sicher und gehalten.",
        "Ich kenne meinen Standpunkt und stehe dazu."
      ],
      meditation: "Setze dich auf die Erde oder stelle dich barfuß auf den Boden. Spüre den Kontakt -- Fuß für Fuß, Zehe für Zehe. Atme tief und langsam. Visualisiere Wurzeln, die aus deinen Fußsohlen in die Erde wachsen -- tief hinab, fest verankert. Mit jeder Einatmung ziehst du die Stabilität der Erde in dich hinauf. Sage innerlich: 'Ich bin geerdet. Ich bin stabil. Ich stehe.' 10-15 Minuten täglich.",
      energie: "Das Wurzelchakra (Muladhara) ist das Zentrum der Erdung und Stabilität -- bei Schwindel fast immer geschwächt. Arbeite mit der Farbe Rot, dem Klang LAM und der Verbindung zur Erde. Fußmassagen, Barfußgehen und das Tragen von Hämatit oder rotem Jaspis unterstützen die Erdung. Auch Reiki auf die Fußsohlen und das Steißbein erdet tief."
    },
    produkte: [
      { name: 'Magnesium-Öl', desc: `Transdermales Magnesium -- entspannt den Nacken, stärkt das Nervensystem und verbessert das Gleichgewicht.`, tags: ['#magnesium', '#transdermal', '#nervensystem'] },
      { name: 'CBD Öl', desc: `Beruhigt das überaktive Nervensystem und kann Schwindel durch Stressabbau lindern.`, tags: ['#cbd', '#nervensystem', '#entspannung'] },
      { name: 'Hericium (Löwenmähne)', desc: `Regeneriert Nervenzellen und unterstützt das Nervensystem -- kann bei neurologisch bedingtem Schwindel helfen.`, tags: ['#hericium', '#nervensystem', '#regeneration'] },
      { name: 'Epsomit (Bittersalz)', desc: `Als Badezusatz liefert es Magnesium über die Haut und entspannt die Muskulatur -- besonders die verspannte Nackenmuskulatur.`, tags: ['#epsomit', '#magnesium', '#entspannung'] }
    ]
  },

  // ============================================================
  // 5. Herzschwäche / Herzrhythmusstörungen
  // ============================================================
  {
    id: 'herz',
    name: `Herzschwäche / Herzrhythmusstörungen`,
    tags: ['#herz', '#herzinsuffizienz', '#arrhythmie', '#herzstolpern', '#palpitationen', '#herzkreislauf'],
    koerper: "Bei Herzschwäche (Herzinsuffizienz) pumpt das Herz nicht mehr ausreichend Blut durch den Körper -- Müdigkeit, Kurzatmigkeit und Wassereinlagerungen sind die Folge. Herzrhythmusstörungen zeigen sich als Herzstolpern, Herzrasen (Tachykardie) oder zu langsamer Puls (Bradykardie). Die Ursachen sind vielfältig: Nährstoffmängel (besonders Magnesium, Kalium, CoQ10), Schilddrüsenstörungen, Stress, Toxinbelastung und chronische Entzündung. Das Herz schlägt etwa 100.000 Mal am Tag -- es braucht konstante Versorgung mit Nährstoffen und Energie.",
    psychosomatik: {
      zitat: "Das Herz stolpert, wenn die Seele aus dem Takt geraten ist.",
      text: "Das Herz ist das emotionale Zentrum des Menschen. Herzrhythmusstörungen zeigen, dass der eigene Lebensrhythmus gestört ist -- zu viel Hetze, zu wenig Freude, zu wenig Liebe. Louise Hay sieht Herzprobleme als Zeichen lang bestehender emotionaler Probleme, der Verhärtung des Herzens, des Mangels an Freude. Rüdiger Dahlke beschreibt Herzinsuffizienz als den Verlust der Herzkraft -- die Unfähigkeit, das Leben mit Begeisterung zu pumpen. Herzstolpern tritt auf, wenn einen etwas 'aus dem Takt bringt', wenn der Rhythmus des Lebens nicht mehr stimmt. Die Heilung liegt im Wiederfinden der Herzensfreude, im Mut, dem eigenen Rhythmus zu folgen."
    },
    traditionen: {
      volksmedizin: "Weißdorn (Crataegus) ist seit Jahrhunderten das Herzkraut der europäischen Volksmedizin -- es stärkt den Herzmuskel, reguliert den Rhythmus und erweitert die Herzkranzgefäße. Herzgespannkraut (Leonurus cardiaca), dessen lateinischer Name bereits auf das Herz verweist, beruhigt Herzrasen und nervöses Herz. Maiglöckchen (Convallaria) war ein traditionelles Herzmittel bei Schwäche.",
      tcm: "In der TCM regiert das Herz (Xin) als 'Kaiser der Organe' Blut und Geist (Shen). Herzschwäche zeigt einen Qi- und Yang-Mangel des Herzens, Rhythmusstörungen oft einen Yin-Mangel oder Blut-Stagnation. Dang Gui (Angelica sinensis) nährt das Herzblut, Dan Shen (Salvia miltiorrhiza) bewegt das Blut und öffnet die Herzgefäße.",
      ayurveda: "Im Ayurveda ist das Herz der Sitz von Ojas -- der feinsten Essenz der Lebenskraft. Herzschwäche zeigt erschöpftes Ojas. Arjuna (Terminalia arjuna) ist das wichtigste ayurvedische Herzmittel -- es stärkt den Herzmuskel und reguliert den Rhythmus. Ashwagandha und Brahmi unterstützen als Rasayanas die Herzgesundheit.",
      germanisch: "In der Germanischen Heilkunde zeigen Herzrhythmusstörungen oft einen Revierkonflikt oder Revierärger an -- das Herz reagiert auf Bedrohung des eigenen Lebensraums. Die rechte Herzhälfte (Vorhofflimmern) steht für weibliche Revierbeziehungen, die linke für männliche.",
      alchemie: "Alchemistisch ist das Herz dem Gold (Aurum) und der Sonne zugeordnet -- das edelste Organ des Menschen. Herzkrankheit zeigt eine Verdunkelung des inneren Goldes. Spagyrische Gold-Zubereitungen (Aurum potabile) und Rosenwasser als Herztonikum stellen die Verbindung zur inneren Sonne wieder her."
    },
    kraeuter: [
      { name: 'Weißdorn (Crataegus)', wirkung: `Das wichtigste Herzkraut -- stärkt die Kontraktionskraft des Herzens, verbessert die Durchblutung der Herzkranzgefäße, reguliert den Rhythmus. 900mg Extrakt täglich, Langzeiteinnahme über Monate.` },
      { name: `Herzgespannkraut (Leonurus cardiaca)`, wirkung: `Beruhigt nervöses Herzrasen und Herzstolpern. Wirkt beruhigend auf das vegetative Nervensystem. Als Tee oder Tinktur.` },
      { name: 'Rosmarin', wirkung: `Stärkt den Kreislauf und belebt ein schwaches Herz. Als Tee, Tinktur oder Rosmarinwein nach Hildegard von Bingen.` },
      { name: 'Melisse', wirkung: `Beruhigt Herzklopfen und Herzrasen, besonders wenn stressbedingt. Als Tee oder Frischpflanzentinktur.` },
      { name: 'Mistel', wirkung: `Reguliert Herz-Kreislauf-Funktionen, senkt den Blutdruck und beruhigt das Herz. Als Kaltauszug über Nacht.` }
    ],
    stoffe: [
      { name: 'Coenzym Q10 (Ubiquinol)', wirkung: `Der Herzmuskel hat den höchsten Q10-Bedarf aller Organe. Bei Herzinsuffizienz immer supplementieren. 200-400mg Ubiquinol täglich.` },
      { name: 'Magnesium', wirkung: `Das Anti-Arrhythmikum der Natur -- stabilisiert den Herzrhythmus und entspannt den Herzmuskel. 400-600mg täglich als Magnesiumtaurat oder -glycinat.` },
      { name: 'Kalium', wirkung: `Essentiell für die elektrische Erregungsleitung am Herzen. Mangel führt direkt zu Rhythmusstörungen. Über Ernährung oder bei Bedarf als Supplement.` },
      { name: 'Taurin', wirkung: `Aminosäure, die den Herzmuskel stärkt und den Rhythmus stabilisiert. 2-3g täglich, klinisch erprobt bei Herzinsuffizienz.` },
      { name: 'D-Ribose', wirkung: `Versorgt den Herzmuskel direkt mit Energie für die ATP-Produktion. 5g 3x täglich.` }
    ],
    ernaehrung: {
      empfehlung: "Die Herzernährung setzt auf gute Fette, kaliumreiche Kost und entzündungshemmende Lebensmittel. Das Herz braucht Omega-3, Magnesium und Antioxidantien. Leichte, bunte Mahlzeiten entlasten und nähren gleichzeitig.",
      staerkend: ["Fetter Fisch oder Algenöl (Omega-3)", "Walnüsse (herzgesunde Fette)", "Dunkle Beeren (Antioxidantien)", "Rote Bete (Nitrat für Durchblutung)", "Bananen und Kartoffeln (Kalium)", 'Olivenöl extra vergine', "Granatapfel (schützt die Gefäße)", "Hafer (senkt Cholesterin)"],
      meiden: ["Übermäßiges Salz (bei Herzinsuffizienz Flüssigkeitsretention)", 'Transfette', 'Zucker und Weißmehl', "Alkohol (direkt kardiotoxisch)", "Koffein in großen Mengen (bei Arrhythmien)", "Verarbeitetes Fleisch"],
      rezepte: [
        { name: 'Weißdorn-Herztee', zutaten: '2 TL Weißdornblüten und -blätter, 1 TL Herzgespannkraut, 1 TL Melisse, 250ml Wasser', zubereitung: 'Kräuter mit heißem Wasser überbrühen, 10 Minuten ziehen lassen. 3 Tassen täglich über Monate trinken. Dieser Tee nährt das Herz stetig und sanft.' },
        { name: 'Herzstärkender Beeren-Bowl', zutaten: '150g Blaubeeren, 100g Himbeeren, 1 Banane, 2 EL Walnüsse, 1 EL Hanfsamen, 1 EL Kokosjoghurt', zubereitung: 'Beeren und Banane pürieren, in eine Schale geben, mit Walnüssen, Hanfsamen und Kokosjoghurt toppen. Liefert Antioxidantien, Omega-3 und Kalium.' }
      ]
    },
    fasten: {
      text: "Bei Herzschwäche ist strenges Fasten nur unter ärztlicher Begleitung ratsam. Sanfte Formen, die das Herz nicht zusätzlich belasten, sind ideal. Intermittierendes Fasten kann das Herz-Kreislauf-System langfristig stärken -- die Studienlage ist vielversprechend.",
      formen: [
        "Intermittierendes Fasten 16:8 -- schützt das Herz nachweislich und senkt Entzündungsmarker",
        "Sanftes Basenfasten über 7-10 Tage -- entlastet das Herz-Kreislauf-System",
        "Brühefasten (1-2 Tage) -- liefert Mineralien, ohne das Herz zu belasten"
      ],
      reinigung: [
        'Trockenbürsten -- fördert den venösen Rückfluss zum Herzen',
        'Wechselduschen nach Kneipp -- trainieren Herz und Gefäße',
        'Entsäuerung mit Basenbädern -- entlastet das Herz-Kreislauf-System',
        "Leberentgiftung -- eine belastete Leber bürdet dem Herzen Mehrarbeit auf"
      ]
    },
    bewegung: {
      text: "Regelmäßige, sanfte Ausdauerbewegung stärkt den Herzmuskel und verbessert die Herzleistung -- auch bei bestehender Herzinsuffizienz. Die Dosis macht den Unterschied: moderat und regelmäßig, nicht intensiv und sporadisch. Freude an der Bewegung ist für das Herz genauso wichtig wie die Bewegung selbst.",
      praktiken: [
        "Spazierengehen (30 Min täglich) -- die sanfteste und effektivste Herzmedizin",
        'Moderate Radfahren -- gelenkschonend und herzstärkend',
        "Herzkohärenz-Training -- rhythmisches Atmen (5 Sek ein, 5 Sek aus) bringt das Herz in Kohärenz",
        "Sanftes Yoga mit Fokus auf Herzöffnung -- Fisch, Kamel, sanfte Rückbeugen",
        "Tai Chi -- verbindet Herz, Atem und Bewegung harmonisch"
      ]
    },
    geist: {
      einheit: "Dein Herz ist mehr als eine Pumpe -- es ist das Organ der Liebe, der Freude, der Verbindung. Wenn das Herz schwach wird oder aus dem Takt gerät, fragt es: Wo ist die Freude geblieben? Wo ist die Liebe? Ein Herz, das liebt und geliebt wird, das Freude kennt und Freude gibt, findet seinen Rhythmus.",
      affirmationen: [
        "Mein Herz schlägt im Rhythmus der Liebe.",
        "Ich öffne mein Herz für Freude und Lebendigkeit.",
        "Mein Herz ist stark und gesund -- es trägt mich durchs Leben.",
        "Ich folge meinem Herzschlag -- er kennt den Weg."
      ],
      meditation: "Lege beide Hände auf dein Herz und spüre den Herzschlag. Atme langsam und gleichmäßig -- 5 Sekunden einatmen, 5 Sekunden ausatmen. Lenke mit jedem Atemzug liebevolle Aufmerksamkeit in dein Herz. Erinnere dich an einen Moment tiefer Dankbarkeit oder Liebe und lass dieses Gefühl dein Herz durchströmen. Diese Herzmeditation nach dem HeartMath-Institut bringt das Herz in Kohärenz -- einen Zustand optimaler Funktion und Heilung. 10-20 Minuten täglich.",
      energie: "Das Herzchakra (Anahata) ist das Zentrum von Liebe und Mitgefühl. Bei Herzproblemen ist es oft verschlossen oder blockiert. Öffne es durch grünes Licht, den Klang YAM und bewusstes Fühlen von Dankbarkeit und Liebe. Rosenquarz auf dem Herzen, Rosen-Ätherisches Öl und das Singen von Herzliedern stärken dieses Chakra."
    },
    produkte: [
      { name: 'CBD Öl', desc: `Senkt Blutdruck, reduziert Stress und Entzündung -- drei Schlüsselfaktoren für Herzgesundheit.`, tags: ['#cbd', '#herz', '#entspannung'] },
      { name: 'Magnesium-Öl', desc: `Transdermales Magnesium -- das wichtigste Mineral für den Herzrhythmus und die Herzmuskelentspannung.`, tags: ['#magnesium', '#herz', '#rhythmus'] },
      { name: 'Knoblauch-Tinktur', desc: `Allicin schützt die Gefäße, senkt Cholesterin und hält das Blut fließfähig -- bewährt seit Jahrtausenden.`, tags: ['#knoblauch', '#herz', '#gefäße'] },
      { name: 'Hanfsamen', desc: `Perfektes Omega-3 zu Omega-6-Verhältnis, reich an Arginin -- die Aminosäure, die die Gefäße weitet.`, tags: ['#hanfsamen', '#omega3', '#herz'] }
    ]
  },

  // ============================================================
  // 6. Krampfadern / Venenschwäche / Durchblutung
  // ============================================================
  {
    id: 'krampfadern',
    name: `Krampfadern / Venenschwäche / Durchblutung`,
    tags: ['#krampfadern', '#venen', '#durchblutung', '#varizen', '#besenreiser', '#beine'],
    koerper: "Krampfadern (Varizen) entstehen, wenn die Venenklappen nicht mehr richtig schließen und das Blut in den Beinen versackt. Die Venenwände weiten sich, werden schlaff und treten sichtbar hervor. Schwere Beine, Schwellungen, Juckreiz und nächtliche Wadenkrämpfe sind typische Begleiter. Langfristig drohen Hautveränderungen, Ekzeme und im schlimmsten Fall offene Beine (Ulcus cruris). Die Ursachen sind vielfältig: genetische Bindegewebsschwäche, langes Stehen oder Sitzen, Bewegungsmangel, Übergewicht und hormonelle Veränderungen.",
    psychosomatik: {
      zitat: "Stau im Fluss des Lebens -- was darf nicht weiterfließen?",
      text: "Krampfadern zeigen einen Stau im Lebensfluss -- etwas wird festgehalten, das losgelassen werden will. Rüdiger Dahlke beschreibt Venenleiden als Ausdruck einer Situation, in der man in etwas feststeckt, das nicht nährt: ein Job, eine Beziehung, eine Lebenssituation. Das Blut fließt nicht zurück zum Herzen -- sprich: die Liebe, die Freude, die Erfüllung finden ihren Weg nicht zurück. Louise Hay sieht darin das Stehen in einer gehassten Situation. Die Einladung: Wohin fließt dein Leben? Was hält dich fest? Was darf weitergehen?"
    },
    traditionen: {
      volksmedizin: "Die Volksmedizin setzte auf Rosskastanie als Venentonikum erster Wahl -- als Tinktur innerlich und als Salbe äußerlich. Hamamelis (Zaubernuss) wurde als adstringierendes Venenmittel angewandt. Steinklee-Tee förderte den Lymphabfluss. Kalte Güsse nach Kneipp an den Beinen stärkten die Venenwände.",
      tcm: "In der TCM gehören Krampfadern zur Blut-Stagnation (Xue Yu) und Milz-Qi-Schwäche. Die Milz hält das Blut in den Gefäßen und hebt das Qi nach oben -- ist sie schwach, sinkt alles ab. Die Behandlung bewegt das Blut, stärkt die Milz und löst Feuchtigkeit. Dan Shen und Huang Qi sind zentrale Kräuter.",
      ayurveda: "Im Ayurveda zeigen Krampfadern ein Vata-Ungleichgewicht im Rasa und Rakta Dhatu (Plasma und Blutgewebe). Die Gefäße verlieren ihre Elastizität (Vata). Guggulu-Präparate stärken das Bindegewebe, Sariva (Hemidesmus) reinigt das Blut. Beinmassage mit warmem Sesamöl in Aufwärtsrichtung unterstützt den venösen Rückfluss.",
      germanisch: "In der Germanischen Heilkunde zeigen Krampfadern einen Beinkonflikt -- das Gefühl, irgendwo festzuhängen, wegrennen zu wollen, aber nicht zu können. Die Beine tragen die Last des Festhaltens. Die Lösung des Konflikts entlastet die Venen.",
      alchemie: "Alchemistisch zeigen Krampfadern eine Schwäche des Mercurius-Prinzips -- der Fluss stockt, das Quecksilbrige erstarrt. Die Rückkehr zum Herzen (Gold/Sonne) ist blockiert. Spagyrische Zubereitungen von Rosskastanie und Hamamelis stellen den Fluss wieder her."
    },
    kraeuter: [
      { name: `Rosskastanie (Aesculus hippocastanum)`, wirkung: `Das wichtigste Venenmittel -- Aescin dichtet die Venenwände ab, reduziert Schwellungen und stärkt das Bindegewebe. 300mg Extrakt 2x täglich.` },
      { name: `Steinklee (Melilotus officinalis)`, wirkung: `Fördert den Lymphabfluss, schützt die Venenwände und wirkt entzündungshemmend. Als Tee oder Extrakt.` },
      { name: 'Mäusedorn (Ruscus aculeatus)', wirkung: `Verengt erweiterte Venen und stärkt die Venenwände. Klinisch erprobt. 150mg Extrakt 2x täglich.` },
      { name: 'Hamamelis (Zaubernuss)', wirkung: `Adstringierend und gefäßstärkend. Äußerlich als Umschlag oder Salbe auf die Krampfadern.` },
      { name: 'Rotes Weinlaub', wirkung: `Enthält Flavonoide, die die Venenwände stärken und Ödeme reduzieren. Als Extrakt 360-720mg täglich.` },
      { name: 'Schafgarbe', wirkung: `Fördert die Durchblutung und stärkt die Gefäße. Als Tee, Sitzbad oder Tinktur.` }
    ],
    stoffe: [
      { name: 'OPC (Traubenkernextrakt)', wirkung: `Stärkstes pflanzliches Antioxidans für die Gefäße -- dichtet die Kapillarwände ab und stärkt Kollagen. 200-400mg täglich.` },
      { name: 'Vitamin C', wirkung: `Essentiell für die Kollagensynthese und damit für starke Venenwände. 1-2g täglich.` },
      { name: 'Rutin', wirkung: `Bioflavonoid, das die Kapillarpermeabilität senkt und Venenwände stärkt. 500mg 2x täglich.` },
      { name: 'Silizium (Kieselsäure)', wirkung: `Stärkt das Bindegewebe und damit die Venenwände. Aus Brennnessel, Schachtelhalm oder als kolloidales Silizium.` }
    ],
    ernaehrung: {
      empfehlung: "Bindegewebsstärkende, entzündungshemmende Ernährung mit viel Vitamin C, Bioflavonoiden und Silizium. Ballaststoffreiche Kost verhindert Verstopfung (Pressen belastet die Venen). Ausreichend Wasser trinken hält das Blut fließfähig.",
      staerkend: ["Dunkle Beeren (Blaubeeren, Schwarze Johannisbeeren -- Bioflavonoide)", "Zitrusfrüchte (Vitamin C, Rutin)", "Buchweizen (reichste Rutinquelle)", "Hirse (Silizium)", "Knoblauch und Zwiebeln (Durchblutung)", "Ananas (Bromelain entzündungshemmend)", "Avocado (Vitamin E für Gefäße)"],
      meiden: ["Salz in Übermaß (fördert Wassereinlagerungen)", "Zucker und Weißmehl (schwächen das Bindegewebe)", "Alkohol (erweitert die Venen)", 'Verarbeitete Lebensmittel', "Zu wenig Ballaststoffe (Verstopfung belastet Venen)"],
      rezepte: [
        { name: 'Buchweizen-Beerenbowl', zutaten: '100g gekochter Buchweizen, 100g Blaubeeren, 50g Schwarze Johannisbeeren, 1 EL Hanfsamen, 1 TL Honig', zubereitung: 'Buchweizen warm oder kalt in eine Schale geben, Beeren und Hanfsamen darüber, mit Honig süßen. Buchweizen liefert Rutin, die Beeren OPC -- perfekte Venennahrung.' },
        { name: 'Rosskastanien-Venen-Tee', zutaten: '1 TL Rosskastanienrinde, 1 TL Steinklee, 1 TL Schafgarbe', zubereitung: 'Kräuter mit 250ml kochendem Wasser überbrühen, 10 Min ziehen lassen. 2-3 Tassen täglich über Wochen trinken.' }
      ]
    },
    fasten: {
      text: "Fasten kann bei Venenleiden helfen, indem es Entzündungen reduziert und Übergewicht abbaut -- beides entlastet die Venen. Ballaststoffreiche Fastenvarianten sind ideal, da sie die Darmtätigkeit regulieren.",
      formen: [
        "Intermittierendes Fasten 16:8 -- reduziert Entzündung und unterstützt Gewichtsregulation",
        "Basenfasten 7-14 Tage -- entschlackt das Bindegewebe und entsäuert",
        "Buchinger-Heilfasten mit Bewegung -- Kombination aus Entlastung und Venenpumpe"
      ],
      reinigung: [
        'Kalte Beingüsse nach Kneipp -- täglich morgens von der Ferse aufwärts',
        "Trockenbürsten der Beine (immer herzwärts) -- aktiviert den venösen Rückfluss",
        'Basenbäder mit Natron -- entsäuern das Gewebe und entlasten die Venen',
        "Hochlagern der Beine abends -- 15-20 Min, unterstützt den Rückfluss"
      ]
    },
    bewegung: {
      text: "Bewegung ist die wichtigste Therapie bei Venenleiden -- die Wadenmuskelpumpe presst das Blut herzwärts. Jede Form der Beinbewegung hilft. Das Motto der Phlebologie lautet: 'Liegen und Laufen ist besser als Sitzen und Stehen.'",
      praktiken: [
        "Zügiges Gehen (30-45 Min täglich) -- die Wadenmuskelpumpe ist die beste Venenpumpe",
        "Radfahren -- ideal, da die Beine ständig in Bewegung sind ohne Stauchung",
        'Schwimmen -- der Wasserdruck wirkt wie ein natürlicher Kompressionsstrumpf',
        "Venengymnastik: Fußwippen, Zehenstand, Radfahren in der Luft -- mehrmals täglich",
        "Yoga: Beine-an-die-Wand (Viparita Karani) -- Umkehrhaltung entlastet die Venen sofort"
      ]
    },
    geist: {
      einheit: "Krampfadern zeigen dir, wo der Fluss deines Lebens stockt. Wo stehst du fest? Was hält dich an einem Ort, der nicht mehr nährt? Wenn du erlaubst, dass dein Leben wieder fließt -- dass Liebe und Freude zum Herzen zurückkehren --, finden auch deine Venen ihren Weg.",
      affirmationen: [
        "Mein Leben fließt frei und leicht.",
        "Ich gehe meinen Weg -- Schritt für Schritt, mit Leichtigkeit.",
        "Mein Blut fließt kraftvoll zurück zu meinem Herzen.",
        "Ich lasse los, was mich festhält, und bewege mich vorwärts."
      ],
      meditation: "Lege dich hin und lagere die Beine hoch (an die Wand oder auf Kissen). Spüre, wie die Schwere aus den Beinen weicht. Visualisiere dein Blut als leuchtend roten Strom, der kraftvoll aus den Beinen zurück zum Herzen fließt -- leicht, frei, ohne Hindernis. Atme dabei tief und sage innerlich: 'Alles in mir fließt. Alles kehrt zum Herzen zurück.' 15 Minuten abends.",
      energie: "Die Beine gehören energetisch zum Wurzelchakra und zum Erdelement -- sie tragen dich durchs Leben. Blockierte Energie in den Beinen zeigt Angst vor dem Vorwärtsgehen. Arbeite mit Fußchakra-Massagen, erdenden Übungen und der Farbe Rot. Auch energetische Streichungen von den Füßen aufwärts zum Herzen lösen Stagnation."
    },
    produkte: [
      { name: 'Magnesium-Öl', desc: `Auf die Beine aufgetragen löst es Wadenkrämpfe und fördert die Durchblutung.`, tags: ['#magnesium', '#beine', '#krämpfe'] },
      { name: 'Schwefel (anorganisch)', desc: `MSM stärkt das Bindegewebe, die Grundlage gesunder Venen. Unterstützt die Kollagenbildung.`, tags: ['#schwefel', '#bindegewebe', '#venen'] },
      { name: 'Knoblauch-Tinktur', desc: `Hält das Blut fließfähig und verbessert die Durchblutung -- natürlicher Gefäßschutz.`, tags: ['#knoblauch', '#durchblutung', '#gefäße'] },
      { name: 'Epsomit (Bittersalz)', desc: `Als Fußbad oder Vollbad liefert es Magnesium und fördert die Abschwellung der Beine.`, tags: ['#epsomit', '#magnesium', '#abschwellend'] }
    ]
  },

  // ============================================================
  // 7. Neurodermitis / Ekzem
  // ============================================================
  {
    id: 'neurodermitis',
    name: 'Neurodermitis / Ekzem',
    tags: ['#neurodermitis', '#ekzem', '#haut', '#atopisch', '#juckreiz', '#dermatitis'],
    koerper: "Neurodermitis (atopisches Ekzem) ist eine chronisch-entzündliche Hauterkrankung mit quälendem Juckreiz, Rötung, Schuppung und nässenden Stellen. Die Hautbarriere ist genetisch geschwächt -- es fehlt an Filaggrin, einem Protein, das die Haut abdichtet. Dadurch dringen Allergene und Keime leichter ein, das Immunsystem überreagiert mit Entzündung. Die Erkrankung verläuft in Schüben, ausgelöst durch Stress, Allergene, Klimawechsel, Nahrungsmittel oder Textilien. Der Darm spielt eine zentrale Rolle -- bei über 80% der Betroffenen liegt eine Darmstörung vor.",
    psychosomatik: {
      zitat: "Die Haut weint die Tränen, die die Augen nicht weinen dürfen.",
      text: "Die Haut ist die Grenze zwischen Ich und Welt -- Neurodermitis zeigt einen tiefen Konflikt an dieser Grenze. Rüdiger Dahlke beschreibt die Erkrankung als Ausdruck unterdrückter Aggression, die sich nach innen richtet und die eigene Grenze angreift. Louise Hay sieht darin mentale Reizung, Ungeduld und Unzufriedenheit. Neurodermitis tritt häufig bei Menschen auf, die sich nach Nähe sehnen, aber gleichzeitig Berührung fürchten -- der Juckreiz ist ein Schrei nach Kontakt und zugleich dessen Abwehr. Die Haut-Seele-Verbindung ist bei keiner anderen Erkrankung so deutlich: Was nicht ausgesprochen und ausgefühlt wird, wird ausgeschieden."
    },
    traditionen: {
      volksmedizin: "Die Volksmedizin setzte bei Ekzemen auf Stiefmütterchen-Tee (Viola tricolor) als Hautreinigungsmittel. Ringelblume und Kamille wurden äußerlich angewandt. Schwefelquellen und Solebäder galten als heilsam. Haferstrohbäder beruhigten den Juckreiz, Leinsamenumschläge linderten entzündete Stellen.",
      tcm: "In der TCM zeigt Neurodermitis Wind-Hitze oder feuchte Hitze in der Blutschicht, oft kombiniert mit Blutmangel (trockene Form) oder Milz-Schwäche (nässende Form). Die Behandlung kühlt das Blut, eliminiert Wind und nährt das Yin. Rehmannia, Dang Gui und Bai Shao bilden die Basis. Akupunktur an LI-11 (Quchi) und Sp-10 (Xuehai) kühlt das Blut.",
      ayurveda: "Im Ayurveda ist Neurodermitis (Vicharchika) eine Kombination aus Pitta und Kapha im Blut und in der Haut. Die Behandlung reinigt das Blut (Raktashodhana) mit bitteren Kräutern wie Neem, Manjistha und Kutki. Panchakarma mit Virechana (therapeutisches Abführen) reinigt Pitta tiefgreifend. Ghee innerlich und Kokosnussöl äußerlich nähren die Haut.",
      germanisch: "In der Germanischen Heilkunde zeigt Neurodermitis einen Trennungskonflikt -- die Haut erinnert sich an den Verlust eines nahen Kontakts. In der aktiven Phase wird die Haut dünner und empfindlicher, in der Heilungsphase entzündet sie sich. Die Lokalisation zeigt, welcher Kontakt fehlt.",
      alchemie: "Alchemistisch zeigt Neurodermitis eine Störung im Sal-Prinzip -- die körperliche Hülle ist durchlässig und gereizt. Das Feuer (Sulphur) bricht durch die Grenze nach außen. Schwefelhaltige spagyrische Zubereitungen und die Stärkung des Sal-Prinzips durch erdende Maßnahmen stellen die Integrität der Grenze wieder her."
    },
    kraeuter: [
      { name: `Stiefmütterchen (Viola tricolor)`, wirkung: `Das klassische Hautkraut der Volksmedizin. Reinigt die Haut von innen und hemmt Entzündungen. Als Tee 3 Tassen täglich über Wochen.` },
      { name: 'Nachtkerze (Oenothera biennis)', wirkung: `Nachtkerzenöl enthält Gamma-Linolensäure, die bei Neurodermitis oft fehlt. 2-4g Öl täglich innerlich, zusätzlich äußerlich auf die Haut.` },
      { name: 'Kamille', wirkung: `Entzündungshemmend, juckreizlindernd, wundheilend. Als Umschlag, Badezusatz oder in Salbenform auf betroffene Stellen.` },
      { name: 'Ringelblume (Calendula)', wirkung: `Fördert die Hauterneuerung und beruhigt entzündete Haut. Als Salbe oder Ölmazerat äußerlich.` },
      { name: 'Ballonrebe (Cardiospermum)', wirkung: `Pflanzliche Kortisonalternative -- hemmt Entzündungen und Juckreiz ohne Nebenwirkungen. Als Salbe.` },
      { name: 'Süßholzwurzel', wirkung: `Glycyrrhizin wirkt kortisonähnlich entzündungshemmend. Innerlich als Tee, äußerlich als Extrakt in Cremes.` }
    ],
    stoffe: [
      { name: 'Gamma-Linolensäure (GLA)', wirkung: `Aus Nachtkerzenöl, Borretschöl oder Hanföl. Essentielle Fettsäure, die bei Neurodermitis-Patienten oft defizitär ist. 2-4g täglich.` },
      { name: 'Zink', wirkung: `Essentiell für Hauterneuerung und Immunregulation. 25-50mg täglich, äußerlich als Zinkcreme auf nässende Stellen.` },
      { name: 'Vitamin D3', wirkung: `Reguliert die Immunantwort in der Haut und stärkt die Hautbarriere. 5.000-10.000 IE täglich.` },
      { name: 'Probiotika', wirkung: `Die Darm-Haut-Achse ist zentral bei Neurodermitis. Lactobacillus rhamnosus GG ist klinisch am besten erforscht. Hochdosiert über Monate.` }
    ],
    ernaehrung: {
      empfehlung: "Die Ernährung bei Neurodermitis muss den Darm heilen, Entzündung senken und die Haut von innen nähren. Eliminationsdiäten können Trigger identifizieren. Gute Fette (Omega-3, GLA) sind essentiell für die Hautbarriere. Zucker und Kuhmilch sind die häufigsten Auslöser.",
      staerkend: ["Hanföl und Leinöl (Omega-3, GLA)", "Avocado (Hautfett)", "Fermentiertes (Sauerkraut, Kimchi -- Probiotika für den Darm)", "Haferflocken (hautberuhigend)", "Karotten und Süßkartoffeln (Beta-Carotin)", "Knochenbrühe (Kollagen, Glutamin)", "Gurke und Zucchini (kühlend)"],
      meiden: ["Kuhmilchprodukte (häufigster Trigger)", 'Zucker und Weißmehl', 'Histaminreiche Lebensmittel bei Histaminunverträglichkeit', "Eier (bei nachgewiesener Allergie)", "Soja (häufiges Allergen)", 'Alkohol und Kaffee', "Scharfe Gewürze während akuter Schübe"],
      rezepte: [
        { name: 'Haut-Heilungs-Smoothie', zutaten: '1 Handvoll Gurke, 1/2 Avocado, 1 EL Hanföl, 1 TL Kurkuma, 200ml Hafermilch, 1 kleine Banane', zubereitung: 'Alles mixen und morgens trinken. Liefert GLA, gesunde Fette, entzündungshemmendes Curcumin und hautberuhigende Nährstoffe.' },
        { name: 'Stiefmütterchen-Hautkur-Tee', zutaten: '2 TL Stiefmütterchenkraut, 1 TL Brennnessel, 1 TL Klettenwurzel', zubereitung: 'Mit 250ml heißem Wasser überbrühen, 10 Min ziehen lassen. 3 Tassen täglich über 6-8 Wochen -- reinigt die Haut von innen.' }
      ]
    },
    fasten: {
      text: "Fasten kann bei Neurodermitis wahre Wunder wirken -- die Entzündung geht zurück, der Darm regeneriert sich und das Immunsystem findet sein Gleichgewicht. Viele Betroffene erleben beim Fasten erstmals beschwerdefreie Haut. Die anschließende Aufbauphase mit Eliminationsdiät hilft, Trigger zu identifizieren.",
      formen: [
        "Buchinger-Heilfasten 7-10 Tage -- oft dramatische Besserung der Haut",
        "Basenfasten 14 Tage -- entlastet das Immunsystem und entsäuert das Gewebe",
        "Eliminationsdiät nach dem Fasten -- einzelne Lebensmittel zurückführen und Reaktion beobachten"
      ],
      reinigung: [
        'Darmreinigung mit Flohsamenschalen und Zeolith -- der Darm ist der Schlüssel zur Haut',
        'Leberreinigung -- die Leber ist das zweite Entgiftungsorgan nach dem Darm',
        "Basenbäder mit Natron (3 EL auf Vollbad) -- entsäuern die Haut und beruhigen den Juckreiz",
        "Ölziehen morgens -- reduziert die Toxinlast"
      ]
    },
    bewegung: {
      text: "Bewegung bei Neurodermitis muss mit Bedacht gewählt werden -- starkes Schwitzen kann die Haut reizen. Schwimmen in Chlorwasser ist oft problematisch. Sanfte, schweißarme Bewegung und vor allem Stressreduktion durch Bewegung stehen im Vordergrund.",
      praktiken: [
        "Yoga -- reduziert Stress (den stärksten Schub-Trigger) und stärkt das Nervensystem",
        "Qi Gong -- sanfte Bewegung ohne Schwitzen, beruhigt das überaktive Immunsystem",
        "Spaziergänge in der Natur -- frische Luft und Erdung, ohne die Haut zu reizen",
        'Schwimmen im Meer oder Solebad -- Salzwasser ist heilsam für die Haut',
        "Atemübungen zur Stressreduktion -- 4-7-8 Atmung bei Juckreizattacken"
      ]
    },
    geist: {
      einheit: "Deine Haut ist deine Grenze zur Welt -- und Neurodermitis zeigt, dass diese Grenze leidet. Vielleicht bist du zu durchlässig, nimmst zu viel auf. Oder du sehnst dich nach Berührung und wehrst sie gleichzeitig ab. Deine Haut darf heilen, wenn du lernst, liebevoll mit deinen Grenzen umzugehen -- sie weder zu hart noch zu weich zu machen.",
      affirmationen: [
        "Meine Haut ist heil und ganz. Sie schützt mich und lässt Liebe durch.",
        "Ich nehme mich an, genau wie ich bin -- mit jeder Stelle meines Körpers.",
        "Ich drücke meine Gefühle aus, bevor sie sich über die Haut zeigen.",
        "Frieden fließt durch mich -- meine Haut darf zur Ruhe kommen."
      ],
      meditation: "Lege die Hände auf eine betroffene Hautstelle (oder stelle sie dir vor). Atme ruhig und sende Liebe und Annahme an diese Stelle. Sage innerlich: 'Ich sehe dich. Ich nehme dich an. Du darfst heilen.' Visualisiere kühles, silbernes Licht, das die Entzündung beruhigt und die Haut mit einer sanften Schutzschicht überzieht. 10-15 Minuten täglich, besonders bei Schüben.",
      energie: "Die Haut gehört zum Lungenmeridian und zum Metallelement -- Abgrenzung und Loslassen sind die Themen. Das Herz-Chakra (Annahme) und das Solar-Plexus-Chakra (persönliche Grenzen) brauchen Aufmerksamkeit. Heilende Berührung (Reiki, Therapeutic Touch) ist besonders wertvoll -- sie gibt dem Körper die liebevolle Berührung, die er braucht."
    },
    produkte: [
      { name: 'CBD Öl', desc: `Reguliert das Immunsystem, hemmt Entzündungen und lindert Juckreiz -- innerlich und äußerlich anwendbar.`, tags: ['#cbd', '#haut', '#entzündungshemmend'] },
      { name: 'Hanfsamen', desc: `Reich an GLA und Omega-3 -- genau die Fettsäuren, die bei Neurodermitis fehlen. Täglich 2-3 EL.`, tags: ['#hanfsamen', '#gla', '#omega3'] },
      { name: 'Zeolith / ZeoMont', desc: `Bindet Toxine im Darm und stärkt die Darmbarriere -- die Darm-Haut-Achse ist der Schlüssel zur Heilung.`, tags: ['#zeolith', '#darm', '#entgiftung'] },
      { name: 'Schwefel (anorganisch)', desc: `Traditionelles Hautmittel -- Schwefel unterstützt die Entgiftung und kann äußerlich in Salben angewandt werden.`, tags: ['#schwefel', '#haut', '#entgiftung'] },
      { name: 'Natron', desc: `Als Badezusatz entsäuert Natron die Haut und beruhigt Juckreiz und Entzündung sofort.`, tags: ['#natron', '#basisch', '#haut'] }
    ]
  },

  // ============================================================
  // 8. Reizdarm / IBS
  // ============================================================
  {
    id: 'reizdarm',
    name: 'Reizdarm / IBS',
    tags: ['#reizdarm', '#ibs', '#darm', '#bauchschmerzen', '#blähungen', '#verdauung'],
    koerper: "Das Reizdarmsyndrom (IBS) betrifft etwa 15% der Bevölkerung und zeigt sich durch chronische Bauchschmerzen, Blähungen, Durchfall und/oder Verstopfung -- ohne dass organische Ursachen gefunden werden. Das enterische Nervensystem ('Bauchhirn') ist überempfindlich, die Darm-Hirn-Achse gestört, die Darmflora oft im Ungleichgewicht. Die Darmbarriere kann durchlässig sein (Leaky Gut), Nahrungsmittelunverträglichkeiten verschlimmern die Symptome. Stress aktiviert direkt das Bauchhirn und kann Schübe auslösen -- Darm und Psyche sind untrennbar verbunden.",
    psychosomatik: {
      zitat: "Der Darm verdaut das Leben -- was kannst du nicht verdauen?",
      text: "Der Reizdarm ist die Sprache des Bauches, wenn die Seele nicht gehört wird. Rüdiger Dahlke beschreibt ihn als Unfähigkeit, Erlebtes zu verdauen -- Eindrücke, Konflikte, Emotionen gären im Bauch statt verarbeitet zu werden. Louise Hay sieht Darmprobleme als Angst, Altes loszulassen (Verstopfung) oder als Flucht und Ablehnung (Durchfall). Thorwald Dethlefsen deutet den gereizten Darm als unterdrückte Wut, die im Bauch rumort. Der Reizdarm fragt: Was liegt dir auf dem Magen? Was schluckst du herunter, obwohl es dir nicht bekommt? Was kannst du nicht verdauen?"
    },
    traditionen: {
      volksmedizin: "Die Volksmedizin kannte eine Fülle von Darmmitteln: Kümmel, Fenchel und Anis als Drei-Winde-Tee gegen Blähungen, Kamille bei Krämpfen, Heidelbeeren (getrocknet) bei Durchfall, Leinsamen bei Verstopfung. Warme Bauchwickel mit Heublumen oder Schafgarbe beruhigten den gereizten Darm.",
      tcm: "In der TCM ist der Reizdarm eine Leber-Qi-Stagnation, die die Milz überangreift (Leber greift Milz an). Stress staut das Leber-Qi, das dann den Verdauungstrakt stört. Die Behandlung harmonisiert Leber und Milz, bewegt das Qi und löst die Stagnation. Die klassische Formel Xiao Yao San (Freier Wanderer) ist das Hauptmittel.",
      ayurveda: "Im Ayurveda zeigt Reizdarm ein gestörtes Samana Vayu -- der Aspekt von Vata, der die Verdauung regiert. Agni (Verdauungsfeuer) ist unregelmäßig. Die Behandlung reguliert Vata durch warme, regelmäßige Mahlzeiten, Verdauungsgewürze (Ingwer, Kreuzkümmel, Koriander) und beruhigende Routinen. Triphala als Darmtonikum harmonisiert die Verdauung.",
      germanisch: "In der Germanischen Heilkunde zeigt der Reizdarm einen unverdaulichen Ärger-Konflikt oder Revierärger. Der Darm reagiert auf einen Brocken, der nicht angenommen oder nicht losgelassen werden kann. Die Lösung des Konflikts beruhigt den Darm.",
      alchemie: "Alchemistisch ist der Darm der Ort der Putrefactio -- der Fäulnis und Umwandlung. Beim Reizdarm ist dieser Prozess gestört: die Transformation von roh zu verfeinert gelingt nicht. Bittermittel und Verdauungselixiere nach Paracelsus regen das innere Feuer an und vollenden den alchemistischen Verdauungsprozess."
    },
    kraeuter: [
      { name: 'Pfefferminze (Mentha piperita)', wirkung: `Klinisch am besten erforscht bei IBS -- magensaftresistente Kapseln mit Pfefferminzöl lösen Darmkrämpfe. 200mg 3x täglich vor dem Essen.` },
      { name: 'Kamille', wirkung: `Entzündungshemmend, krampflösend, beruhigend für die Darmschleimhaut. Als Tee (3-4 Tassen täglich) oder Bauchwickel.` },
      { name: 'Kümmel-Fenchel-Anis', wirkung: `Die klassische Dreierkombi gegen Blähungen und Krämpfe. Als Tee nach dem Essen, die Samen leicht andrücken.` },
      { name: 'Flohsamenschalen (Psyllium)', wirkung: `Regulieren die Stuhlkonsistenz -- helfen bei Durchfall UND Verstopfung. 5-10g täglich mit viel Wasser.` },
      { name: 'Melisse', wirkung: `Beruhigt den Magen-Darm-Trakt und das Nervensystem gleichzeitig. Als Tee, besonders bei stressbedingtem Reizdarm.` },
      { name: 'Süßholzwurzel', wirkung: `Schützt und regeneriert die Darmschleimhaut. Als DGL (deglycyrrhiziniert), 380mg vor den Mahlzeiten.` }
    ],
    stoffe: [
      { name: 'Probiotika', wirkung: `Spezifische Stämme wie Bifidobacterium infantis 35624 und Lactobacillus plantarum 299v sind bei IBS klinisch erprobt. Hochdosiert über Monate.` },
      { name: 'L-Glutamin', wirkung: `Aminosäure, die die Darmschleimhaut regeneriert und den Leaky Gut heilt. 5-10g täglich auf nüchternen Magen.` },
      { name: 'Butyrat', wirkung: `Kurzkettige Fettsäure -- Hauptnahrung der Darmzellen. Heilt die Darmbarriere und reduziert Entzündung. 300-600mg täglich.` },
      { name: 'Verdauungsenzyme', wirkung: `Unterstützen die Aufspaltung der Nahrung und reduzieren Blähungen und Unverträglichkeitsreaktionen. Zu den Mahlzeiten.` }
    ],
    ernaehrung: {
      empfehlung: "Die Ernährung ist der Dreh- und Angelpunkt beim Reizdarm. Regelmäßige, warme, gut gekaute Mahlzeiten in Ruhe sind die Basis. Die Low-FODMAP-Diät ist klinisch am besten erforscht -- sie reduziert fermentierbare Kohlenhydrate, die Blähungen verursachen. Individuell Trigger identifizieren und meiden.",
      staerkend: ["Reis (gut verträglich, beruhigend)", "Karotten (gekocht, schonend)", "Haferbrei (warm, schleimbildend)", "Fenchel (gekocht oder als Tee)", "Banane (reif, leicht verdaulich)", "Knochenbrühe (Glutamin, Kollagen)", "Ingwer frisch (in kleinen Mengen)", "Zucchini und Kürbis (leicht verdaulich)"],
      meiden: ["FODMAP-reiche Lebensmittel (Zwiebeln, Knoblauch, Hülsenfrüchte, Äpfel)", "Kaffee (reizt den Darm direkt)", 'Alkohol', "Rohkost in großen Mengen (bei empfindlichem Darm)", "Zucker und Süßstoffe (besonders Sorbit, Xylit)", "Glutenhaltige Getreide (bei Empfindlichkeit)"],
      rezepte: [
        { name: 'Beruhigender Reis-Congee', zutaten: '100g Reis, 1L Wasser, Stück Ingwer, 1 Karotte, Prise Salz, frische Kräuter', zubereitung: 'Reis mit viel Wasser und Ingwer sehr langsam kochen (45-60 Min), bis ein cremiger Brei entsteht. Karotte mitgaren, mit Salz und Kräutern abschmecken. Das sanfteste Essen für einen gereizten Darm.' },
        { name: 'Drei-Winde-Tee nach dem Essen', zutaten: '1 TL Kümmel, 1 TL Fenchel, 1 TL Anis -- Samen leicht andrücken', zubereitung: 'Samen mit 250ml kochendem Wasser überbrühen, 10 Min zugedeckt ziehen lassen. Nach jeder Mahlzeit eine Tasse trinken. Löst Blähungen und beruhigt den Darm.' }
      ]
    },
    fasten: {
      text: "Fasten gibt dem Reizdarm die dringend nötige Pause. Wenn der Darm nicht verdauen muss, kann er sich regenerieren. Schon ein Fastentag pro Woche kann die Symptome deutlich lindern. Beim Fastenbrechen besonders schonend vorgehen.",
      formen: [
        "Intermittierendes Fasten 16:8 -- gibt dem Darm täglich 16 Stunden Ruhe",
        "Reisfasten (3 Tage nur Reis, Congee und Kräutertee) -- die schonendste Entlastung",
        "Brühefasten (1-3 Tage) -- nährt die Darmschleimhaut mit Glutamin und beruhigt"
      ],
      reinigung: [
        'Flohsamenschalen-Kur -- reinigt den Darm sanft und reguliert die Peristaltik',
        'Zeolith morgens auf nüchternen Magen -- bindet Toxine und Gärgase',
        'Warme Bauchwickel mit Kamille oder Schafgarbe -- beruhigen den gereizten Darm',
        "Ölziehen morgens -- reduziert die Gesamttoxinlast"
      ]
    },
    bewegung: {
      text: "Bewegung reguliert die Darmtätigkeit, reduziert Stress und balanciert das Nervensystem -- alles Schlüsselfaktoren beim Reizdarm. Sanfte, rhythmische Bewegung ist intensivem Training vorzuziehen, da Hochleistungssport den Darm reizen kann.",
      praktiken: [
        "Yoga -- die einzige Bewegungsform mit klinischem Nachweis bei IBS, besonders Drehungen und Vorwärtsbeugen",
        "Spaziergang nach dem Essen (15-20 Min) -- fördert die Verdauung sanft",
        'Bauchmassage im Uhrzeigersinn -- folgt dem Darmverlauf und löst Blockaden',
        'Tiefe Bauchatmung -- aktiviert den Vagusnerv und beruhigt den Darm direkt',
        "Qi Gong für die Mitte -- stärkt das Verdauungsfeuer und harmonisiert den Darm"
      ]
    },
    geist: {
      einheit: "Dein Darm ist dein zweites Gehirn -- er fühlt, was du nicht denkst. Wenn der Darm rebelliert, rebelliert ein Teil deiner Seele gegen etwas, das nicht stimmt. Vielleicht schluckst du zu viel herunter. Vielleicht verdaust du Erlebnisse nicht, die dich belasten. Höre auf deinen Bauch -- er weiß mehr, als du denkst.",
      affirmationen: [
        "Ich verdaue das Leben mit Leichtigkeit.",
        "Mein Bauch ist ruhig, warm und entspannt.",
        "Ich nehme an, was mich nährt -- und lasse los, was mir nicht dient.",
        "Ich vertraue meinem Bauchgefühl.",
        "Alles, was ich zu mir nehme, wird zu Kraft und Gesundheit."
      ],
      meditation: "Lege beide Hände auf deinen Bauch und atme tief in den Bauchraum. Spüre die Wärme deiner Hände. Stelle dir vor, wie ein warmes, goldenes Licht deinen Darm von innen durchströmt -- beruhigend, heilend, ordnend. Mit jeder Einatmung mehr Wärme und Ruhe, mit jeder Ausatmung löst sich Anspannung. Sage innerlich: 'Mein Bauch darf ruhig sein. Alles ist verdaut. Alles ist gut.' 10-15 Minuten vor dem Schlafengehen.",
      energie: "Das Solarplexus-Chakra (Manipura) und das Sakralchakra (Svadhisthana) sind beim Reizdarm aus der Balance. Die Vagusnerv-Aktivierung ist der Schlüssel: Summen, Singen, kaltes Wasser im Gesicht, Bauchatmung -- alles, was den Vagus stimuliert, beruhigt den Darm direkt. Auch Reiki auf den Bauchraum und Klangschalenmassage auf dem Bauch wirken tief."
    },
    produkte: [
      { name: 'CBD Öl', desc: `Beruhigt das enterische Nervensystem, löst Darmkrämpfe und reduziert die viszerale Überempfindlichkeit.`, tags: ['#cbd', '#darm', '#krampflösend'] },
      { name: 'Zeolith / ZeoMont', desc: `Bindet Gärgase, Toxine und Histamin im Darm. Stärkt die Darmbarriere.`, tags: ['#zeolith', '#darm', '#entgiftung'] },
      { name: 'Heiltee', desc: `Kräuterteemischung mit verdauungsfördernden und beruhigenden Kräutern für den gereizten Darm.`, tags: ['#heiltee', '#verdauung', '#beruhigend'] },
      { name: 'Natron', desc: `Neutralisiert überschüssige Magensäure und Gärgase. 1/2 TL in Wasser bei akuten Beschwerden.`, tags: ['#natron', '#basisch', '#verdauung'] }
    ]
  },

  // ============================================================
  // 9. Gicht / Harnsäure
  // ============================================================
  {
    id: 'gicht',
    name: 'Gicht / Harnsäure',
    tags: ['#gicht', '#harnsäure', '#gelenke', '#purine', '#entzündung', '#stoffwechsel'],
    koerper: "Gicht ist eine Stoffwechselerkrankung, bei der sich Harnsäurekristalle in den Gelenken ablagern und heftige Entzündungen auslösen. Die Harnsäure entsteht beim Abbau von Purinen aus der Nahrung und dem Zellstoffwechsel. Wenn die Nieren die Harnsäure nicht ausreichend ausscheiden oder zu viel anfällt, steigt der Spiegel im Blut (Hyperurikämie) und Kristalle bilden sich -- bevorzugt im Großzehengrundgelenk, aber auch in Knie, Sprunggelenk und Handgelenken. Der akute Gichtanfall ist eine der schmerzhaftesten Erfahrungen überhaupt: das Gelenk wird rot, heiß, geschwollen und extrem berührungsempfindlich.",
    psychosomatik: {
      zitat: "Wer Säure anstaut, hat saure Themen, die nicht verarbeitet sind.",
      text: "Gicht galt historisch als 'Krankheit der Könige' -- ein Übermaß an Genuss und Völlerei. Psychosomatisch zeigt Gicht eine Rigidität im Denken und Fühlen. Rüdiger Dahlke verbindet sie mit festgefahrenen Strukturen, mit dem Festhalten an Macht und Kontrolle. Die Kristalle in den Gelenken sind gewordene Starrheit -- Unbeweglichkeit, die sich materialisiert hat. Louise Hay sieht darin Ungeduld, Wut und ein Bedürfnis nach Dominanz. Die Einladung der Gicht: Wo bist du starr? Wo hältst du fest? Was darf sich auflösen und fließen?"
    },
    traditionen: {
      volksmedizin: "Die Volksmedizin setzte auf Brennnessel als harntreibendes und harnsäuresenkendes Kraut, Birkenblätter zur Durchspülung und Wacholderbeeren zur Nierenreinigung. Quarkwickel auf das entzündete Gelenk zogen die Hitze heraus. Apfelessig und Zitronenwasser alkalisierten den Körper.",
      tcm: "In der TCM gehört Gicht zu Wind-Feuchtigkeit-Hitze (Bi-Syndrom), die in den Gelenken blockiert. Oft liegt eine Milz-Schwäche mit Feuchtigkeit-Ansammlung zugrunde, die sich in Hitze umwandelt. Die Behandlung klärt Hitze, löst Feuchtigkeit und bewegt das Blut. Yi Yi Ren (Hiobsträne) und Tu Fu Ling (Smilax) senken die Harnsäure.",
      ayurveda: "Im Ayurveda ist Gicht (Vatarakta) eine Pitta-Vata-Störung -- heißes, scharfes Blut (Pitta) wird vom Wind (Vata) in die Gelenke getragen. Die Behandlung kühlt das Blut, stärkt die Nieren und reguliert den Stoffwechsel. Guduchi, Guggulu und bittere Kräuter bilden die Basis. Virechana (therapeutisches Abführen) reinigt Pitta.",
      germanisch: "In der Germanischen Heilkunde zeigt Gicht im Großzehengrundgelenk einen Selbstwertkonflikt bezogen auf das Gehen, die Richtung -- oft ein Konflikt, 'den richtigen Weg' nicht gefunden zu haben.",
      alchemie: "Alchemistisch ist Gicht eine Versalzung -- das Sal-Prinzip dominiert und kristallisiert aus. Die Lösung liegt in der Zuführung von Mercurius -- Fluss und Auflösung. Spagyrische Zubereitungen von Birke, Brennnessel und alkalischen Mineralien lösen die Kristallisation auf und bringen die Säfte wieder in Fluss."
    },
    kraeuter: [
      { name: 'Brennnessel', wirkung: `Harntreibend, harnsäuresenkend, basisch. Als Tee (4-6 Tassen täglich) oder Frischpresssaft über Wochen.` },
      { name: 'Birkenblätter', wirkung: `Durchspülungstherapie -- fördert die Harnsäureausscheidung über die Nieren. Als Tee, 3-4 Tassen täglich.` },
      { name: 'Teufelskralle (Harpagophytum)', wirkung: `Entzündungshemmend und schmerzlindernd. 960mg Extrakt täglich, besonders bei akuten Schüben.` },
      { name: 'Selleriesamen', wirkung: `Senken die Harnsäure und wirken harntreibend. Als Tee (1 TL Samen pro Tasse) oder Extrakt.` },
      { name: 'Kirschstielchen', wirkung: `Traditionelles Gichtmittel -- harntreibend und harnsäuresenkend. Als Tee, 3 Tassen täglich.` }
    ],
    stoffe: [
      { name: 'Vitamin C', wirkung: `Senkt den Harnsäurespiegel messbar. 500-1000mg täglich reduziert das Gichtrisiko signifikant.` },
      { name: 'Kirschen / Kirschextrakt', wirkung: `Klinisch erprobt -- 10-12 Kirschen täglich oder Kirschextrakt senken Harnsäure und reduzieren Gichtanfälle um 35%.` },
      { name: 'Natron (Natriumbikarbonat)', wirkung: `Alkalisiert den Urin und fördert die Harnsäureausscheidung. 1/2 TL in Wasser, 2x täglich zwischen den Mahlzeiten.` },
      { name: 'Omega-3-Fettsäuren', wirkung: `Reduzieren die Entzündungsreaktion bei akuter Gicht. 2-4g täglich.` }
    ],
    ernaehrung: {
      empfehlung: "Die Ernährung ist bei Gicht entscheidend -- purinarme, basische Kost senkt die Harnsäure und verhindert Anfälle. Viel trinken (2-3L Wasser täglich) ist essentiell, damit die Nieren die Harnsäure ausscheiden können. Kirschen und Beeren sind die besten Freunde des Gichtpatienten.",
      staerkend: ["Sauerkirschen (Montmorency -- harnsäuresenkend)", "Sellerie (frisch oder als Saft)", 'Brennnesseltee', "Zitronenwasser (basisch trotz saurem Geschmack)", "Kartoffeln (purinarm und basisch)", "Gurke (basisch, harntreibend)", "Brokkoli und Blumenkohl (purinarm)", "Walnüsse"],
      meiden: ["Innereien (Leber, Niere -- extrem purinreich)", "Alkohol (besonders Bier -- enthält selbst Purine und hemmt die Harnsäureausscheidung)", "Meeresfrüchte und bestimmte Fische (Sardine, Hering, Makrele)", 'Fleisch in großen Mengen', "Fructose (Softdrinks, Fruchtsäfte -- erhöht Harnsäure)", "Hefe und Hefeextrakte"],
      rezepte: [
        { name: 'Anti-Gicht-Kirsch-Smoothie', zutaten: '200g Sauerkirschen (frisch oder TK), 1 Selleriestange, Saft einer Zitrone, 1 cm Ingwer, 200ml Wasser', zubereitung: 'Alles mixen und morgens trinken. Kirschen und Sellerie senken die Harnsäure, Ingwer hemmt die Entzündung.' },
        { name: `Basische Brennnessel-Kartoffelsuppe`, zutaten: '300g Kartoffeln, 2 Handvoll Brennnesseln (Handschuhe!), 1 Zwiebel, 500ml Gemüsebrühe, Muskat, Salz', zubereitung: 'Kartoffeln und Zwiebel in Gemüsebrühe weich kochen, Brennnesseln zufügen, pürieren. Mit Muskat und Salz abschmecken. Stark basisch und purinarm.' }
      ]
    },
    fasten: {
      text: "Fasten bei Gicht erfordert Vorsicht -- in den ersten Fastentagen steigt die Harnsäure zunächst an, weil der Zellabbau Purine freisetzt. Langsames, begleitetes Fasten mit viel Flüssigkeit und alkalischen Getränken kann langfristig die Harnsäure senken.",
      formen: [
        "Basenfasten 7-14 Tage -- senkt die Harnsäure nachhaltig und entsäuert tief",
        "Sanftes Intermittierendes Fasten 14:10 mit viel Wasser und basischen Tees",
        "Kirsch-Safttag (1x pro Woche) -- Kirschen und basische Säfte als Entlastung"
      ],
      reinigung: [
        "Basenbäder mit Natron (3 EL auf Vollbad) -- entsäuern über die Haut",
        "Durchspülungstherapie mit 3L Wasser + Brennnessel-/Birkenblättertee täglich",
        'Leberwickel mit Schafgarbe -- unterstützt den Harnsäurestoffwechsel',
        "Quarkwickel auf entzündetes Gelenk beim akuten Anfall -- zieht Hitze und Entzündung"
      ]
    },
    bewegung: {
      text: "Im akuten Gichtanfall ist Ruhe und Schonung angesagt. Im Intervall ist regelmäßige, moderate Bewegung wichtig -- sie fördert den Stoffwechsel und die Harnsäureausscheidung. Gelenkschonende Bewegung steht im Vordergrund.",
      praktiken: [
        "Schwimmen -- gelenkschonend und stoffwechselfördernd, ideal bei Gicht",
        'Radfahren -- bewegt die Gelenke ohne Stoßbelastung',
        "Yoga (sanft) -- verbessert die Gelenkbeweglichkeit und fördert die Durchblutung",
        "Spazierengehen -- moderate Bewegung, die den Purinstoffwechsel anregt",
        "Zehengymnastik -- erhält die Beweglichkeit des oft betroffenen Großzehengelenks"
      ]
    },
    geist: {
      einheit: "Gicht zeigt dir die Stellen, an denen du starr geworden bist -- im Körper und im Denken. Die Kristalle sind materialisierte Starrheit. Wo bist du unbeweglich? Wo hältst du fest an alten Mustern, altem Ärger, alten Überzeugungen? In der Auflösung der inneren Starrheit lösen sich auch die Kristalle.",
      affirmationen: [
        "Ich löse mich aus starren Mustern und bewege mich frei.",
        "Mein Körper fließt -- alles Kristalline löst sich auf.",
        "Ich lasse los: alten Groll, alte Härte, alte Kontrolle.",
        "Leichtigkeit und Freude durchströmen meine Gelenke."
      ],
      meditation: "Richte deine Aufmerksamkeit auf das betroffene Gelenk. Visualisiere die Harnsäurekristalle als kleine Eissplitter. Nun stelle dir vor, wie warmes, goldenes Wasser durch das Gelenk fließt -- langsam, stetig -- und die Kristalle sanft auflöst und fortträgt. Mit jeder Ausatmung werden sie kleiner. Sage innerlich: 'Ich löse mich. Ich fließe. Alles Starre darf gehen.' 10 Minuten täglich.",
      energie: "Die Gelenke gehören energetisch zum Holz-Element (TCM) und zum Thema Flexibilität. Ein starres Holz bricht -- ein weiches biegt sich. Arbeite mit dem Sakralchakra (Svadhisthana) für Fluss und Beweglichkeit. Wasserelement-Meditationen, Schwimmen und die Farbe Orange unterstützen die Auflösung der Starrheit."
    },
    produkte: [
      { name: 'Natron', desc: `Alkalisiert den Körper und fördert die Harnsäureausscheidung über die Nieren.`, tags: ['#natron', '#basisch', '#harnsäure'] },
      { name: 'Schwefel (anorganisch)', desc: `MSM wirkt entzündungshemmend und unterstützt die Entgiftung -- entlastet die Gelenke.`, tags: ['#schwefel', '#entzündungshemmend', '#gelenke'] },
      { name: 'Epsomit (Bittersalz)', desc: `Magnesiumsulfat als Badezusatz -- entsäuert über die Haut und entspannt schmerzende Gelenke.`, tags: ['#epsomit', '#entsäuerung', '#gelenke'] },
      { name: 'Knoblauch-Tinktur', desc: `Fördert die Durchblutung und wirkt entzündungshemmend -- unterstützt den Harnsäurestoffwechsel.`, tags: ['#knoblauch', '#durchblutung', '#entzündungshemmend'] }
    ]
  },

  // ============================================================
  // 10. Erektionsstörungen / Libido / Potenz
  // ============================================================
  {
    id: 'erektionsstoerung',
    name: `Erektionsstörungen / Libido / Potenz`,
    tags: ['#erektion', '#potenz', '#libido', '#sexualität', '#durchblutung', '#testosteron'],
    koerper: "Erektionsstörungen betreffen bis zu 50% der Männer über 40 und sind häufig ein Frühwarnsignal für Herz-Kreislauf-Erkrankungen -- die Penisarterien sind kleiner als die Herzkranzgefäße und verstopfen zuerst. Die Ursachen sind vielfältig: Durchblutungsstörungen, Testosteronmangel, Nervenschäden (Diabetes), Medikamente (Blutdrucksenker, Antidepressiva), Übergewicht, Rauchen, Alkohol und vor allem Stress und psychische Faktoren. Auch bei Frauen kann die Libido durch Hormonstörungen, Stress, Medikamente und Beziehungsprobleme leiden. Ein gesunder Testosteron- und Östrogenspiegel, gute Durchblutung und ein freies Nervensystem sind die Basis.",
    psychosomatik: {
      zitat: "Wer nicht aufstehen kann, hat vielleicht aufgegeben.",
      text: "Erektionsstörungen berühren den Kern der männlichen Identität und sind psychosomatisch immer auch Ausdruck der seelischen Verfassung. Rüdiger Dahlke beschreibt Impotenz als den Verlust der schöpferischen Kraft -- die Unfähigkeit, sich aufzurichten, sich zu behaupten, etwas Neues in die Welt zu bringen. Es geht um Macht und Ohnmacht, um Selbstwert und Versagensangst. Louise Hay sieht darin sexuelle Schuld, Druck und Groll gegen einen früheren Partner. Thorwald Dethlefsen deutet die erschlaffte Potenz als Ausdruck einer erloschenen Leidenschaft -- nicht nur sexuell, sondern für das Leben insgesamt. Die Frage lautet: Wofür brennst du? Was richtet dich auf?"
    },
    traditionen: {
      volksmedizin: "Die Volksmedizin kannte zahlreiche Aphrodisiaka: Brennnesselsamen als Potenz-Tonikum (1 EL täglich in Honig), Bockshornklee, Sellerie und Petersilie als stimulierende Gewürze. Meerrettich und Kresse galten als durchblutungsfördernd. Damiana-Tee (Turnera diffusa) war ein beliebtes Potenzmittel in der Kräutermedizin.",
      tcm: "In der TCM sind Erektionsstörungen ein Nieren-Yang-Mangel -- die Lebensfeuer-Kraft (Ming Men Huo) ist erschöpft. Auch Leber-Qi-Stagnation durch Stress und Frust blockiert den freien Energiefluss zum Unterleib. Die Behandlung stärkt das Nieren-Yang mit Kräutern wie Yin Yang Huo (Epimedium/Horny Goat Weed), Rou Gui (Zimt) und Du Zhong (Eucommia). Akupunktur an Ren-4 (Guanyuan) und Ni-3 (Taixi) stärkt die Nierenkraft.",
      ayurveda: "Im Ayurveda sind Erektionsstörungen ein Zeichen von erschöpftem Shukra Dhatu -- dem Reproduktionsgewebe, der feinsten aller Gewebeebenen. Vajikarana (Aphrodisiakum-Therapie) ist ein eigener Zweig des Ayurveda. Ashwagandha, Shatavari, Safran und Muskatnuss sind klassische Potenzmittel. Ghee und Milch als Träger bringen die Kräuter tief ins Gewebe.",
      germanisch: "In der Germanischen Heilkunde zeigen Erektionsstörungen einen sexuellen Konflikt -- oft einen Verlust- oder Demütigungskonflikt im sexuellen Bereich. Die glatten Muskeln der Schwellkörper reagieren auf den biologischen Konflikt.",
      alchemie: "Alchemistisch ist die sexuelle Kraft die Urfeuer-Kraft des Sulphur -- das schöpferische Feuer im Menschen. Erlischt dieses Feuer, fehlt es an Seelenkraft und Lebendigkeit. Spagyrische Mars-Zubereitungen (Eisen, Brennnessel, Ingwer) und Venus-Essenzen (Rose, Damiana) entzünden das Feuer neu."
    },
    kraeuter: [
      { name: `Ashwagandha (Withania somnifera)`, wirkung: `Erhöht Testosteron, verbessert die Spermienqualität und reduziert Stresshormone. 600mg KSM-66-Extrakt täglich -- klinisch nachgewiesen.` },
      { name: 'Maca (Lepidium meyenii)', wirkung: `Steigert Libido und sexuelle Leistungsfähigkeit, unabhängig vom Testosteronspiegel. 2-3g Pulver täglich über Wochen.` },
      { name: 'Damiana (Turnera diffusa)', wirkung: `Traditionelles Aphrodisiakum -- durchblutungsfördernd im Beckenbereich, stimmungsaufhellend. Als Tee oder Tinktur.` },
      { name: 'Epimedium (Horny Goat Weed)', wirkung: `Enthält Icariin, das die PDE5 hemmt (ähnlicher Mechanismus wie Viagra). 500-1000mg Extrakt täglich.` },
      { name: 'Brennnesselsamen', wirkung: `Traditionelles Potenztonikum -- erhöht freies Testosteron. 1 EL der Samen täglich in Honig oder auf Brot.` },
      { name: 'Tribulus terrestris', wirkung: `Erhöht das luteinisierende Hormon und damit die Testosteronproduktion. 750-1500mg Extrakt täglich.` }
    ],
    stoffe: [
      { name: 'L-Arginin', wirkung: `Aminosäure, Vorstufe von Stickstoffmonoxid (NO) -- weitet die Blutgefäße auch im Schwellkörper. 3-5g täglich.` },
      { name: 'Zink', wirkung: `Essentiell für die Testosteronproduktion. Zinkmangel senkt Testosteron direkt. 25-50mg täglich.` },
      { name: 'Vitamin D3', wirkung: `Testosteron korreliert stark mit Vitamin-D-Spiegel. 5.000-10.000 IE täglich bei nachgewiesenem Mangel.` },
      { name: 'Bor', wirkung: `Erhöht freies Testosteron und senkt SHBG. 6-10mg täglich.` }
    ],
    ernaehrung: {
      empfehlung: "Die Ernährung für sexuelle Gesundheit fördert die Durchblutung, unterstützt die Hormonproduktion und liefert die Bausteine für Testosteron. Gute Fette (Cholesterin ist die Vorstufe aller Sexualhormone!), Zink, Arginin und antioxidantienreiche Kost bilden das Fundament.",
      staerkend: ["Granatapfel (natürlicher PDE5-Hemmer)", "Wassermelone (L-Citrullin wird zu Arginin)", "Austern und Kürbiskerne (Zink)", "Eier (Cholesterin als Hormon-Vorstufe)", "Rote Bete (Nitrat für Durchblutung)", "Dunkle Schokolade (Flavanole)", "Sellerie (Androstenon)", "Avocado und Olivenöl"],
      meiden: ["Soja in großen Mengen (Phytoöstrogene)", "Alkohol (senkt Testosteron, schädigt Leber)", "Zucker (senkt Testosteron akut)", 'Transfette und Frittiertes', "Plastik-verpackte Lebensmittel (Weichmacher sind Östrogen-Imitatoren)", "Lakritz (senkt Testosteron)"],
      rezepte: [
        { name: 'Potenz-Smoothie', zutaten: '200g Wassermelone, 1/2 Granatapfel (Kerne), 1 EL Maca-Pulver, 1 EL Kürbiskerne, 100ml Rote-Bete-Saft', zubereitung: 'Alles mixen und morgens trinken. Liefert L-Citrullin, Nitrat, Zink und adaptogene Kräuter -- ein Cocktail für die Durchblutung.' },
        { name: 'Brennnesselsamen-Honig', zutaten: '100g Brennnesselsamen (getrocknet), 200g roher Honig, Prise Zimt', zubereitung: 'Samen mit Honig und Zimt vermischen, im Glas aufbewahren. Morgens 1 EL auf nüchternen Magen. Traditionelles Potenzmittel.' }
      ]
    },
    fasten: {
      text: "Intermittierendes Fasten steigert den Testosteronspiegel nachweislich -- Wachstumshormon und Testosteron werden während des Fastens vermehrt ausgeschüttet. Übergewicht ist einer der stärksten Potenzkiller -- jedes verlorene Kilo verbessert die Situation.",
      formen: [
        "Intermittierendes Fasten 16:8 -- erhöht Testosteron und Wachstumshormon",
        "Prolongiertes Fasten 2-3 Tage (vierteljährlich) -- tiefe hormonelle Regeneration",
        "Basenfasten mit Kraft-Kost -- entschlackt und nährt gleichzeitig"
      ],
      reinigung: [
        "Leberkur -- die Leber baut Östrogen ab, eine belastete Leber führt zu Östrogendominanz",
        'Sauna und Schwitzen -- fördert die Durchblutung und entgiftet über die Haut',
        "Kalte Duschen -- steigern Testosteron, fördern Durchblutung und Willenskraft",
        "Umweltgifte reduzieren -- Plastik vermeiden, Xenoöstrogene meiden"
      ]
    },
    bewegung: {
      text: "Krafttraining ist die wirksamste natürliche Methode zur Testosteronsteigerung. Bewegung verbessert die Durchblutung, baut Übergewicht ab und hebt das Selbstwertgefühl -- alles Schlüsselfaktoren für sexuelle Gesundheit.",
      praktiken: [
        "Krafttraining mit schweren Grundübungen (Kniebeugen, Kreuzheben) -- steigert Testosteron maximal",
        "HIIT (High Intensity Interval Training) -- kurz und intensiv steigert Wachstumshormon und Testosteron",
        "Beckenbodentraining (Kegel-Übungen) -- stärkt die Muskeln, die die Erektion halten",
        "Yoga (Hüftöffner, Umkehrhaltungen) -- fördert die Durchblutung im Becken",
        "Kalte Duschen (besonders im Genitalbereich) -- trainieren die Gefäße und steigern Testosteron"
      ]
    },
    geist: {
      einheit: "Sexuelle Kraft ist Lebenskraft. Wenn die Potenz nachlässt, fragt das Leben: Wofür stehst du auf? Was entzündet dein Feuer? Die Erektion ist nicht nur ein körperlicher Vorgang -- sie ist Ausdruck von Leidenschaft, Selbstvertrauen und Lebendigkeit. Wenn du dein inneres Feuer nährst, nährst du auch deine sexuelle Kraft.",
      affirmationen: [
        "Meine Lebenskraft fließt frei und kraftvoll.",
        "Ich bin lebendig, leidenschaftlich und voller Schöpferkraft.",
        "Mein Körper ist ein Ausdruck meiner Vitalität.",
        "Ich erlaube mir Lust, Freude und Hingabe."
      ],
      meditation: "Setze dich aufrecht hin und lenke deine Aufmerksamkeit auf den Bereich deines Beckenbodens und Unterbauchs. Atme tief in diesen Bereich und visualisiere dort ein warmes, rotes Feuer -- dein Urfeuer, deine Lebenskraft. Mit jeder Einatmung wird es stärker und wärmer. Spüre die Kraft, die dort wohnt. Sage innerlich: 'Mein Feuer brennt. Meine Kraft ist da. Ich bin lebendig.' 10-15 Minuten täglich.",
      energie: "Das Sakralchakra (Svadhisthana) ist das Zentrum der sexuellen und schöpferischen Energie. Bei Potenzproblemen ist es oft blockiert. Arbeite mit der Farbe Orange, dem Klang VAM und dem Wasserelement. Tantrische Atemübungen (Mula Bandha mit Atem) heben die Energie und stärken die sexuelle Kraft. Auch das Wurzelchakra (Erdung, Sicherheit) muss gestärkt sein."
    },
    produkte: [
      { name: 'CBD Öl', desc: `Reduziert Leistungsangst, senkt Stress und verbessert die Durchblutung -- drei Hauptfaktoren bei Erektionsstörungen.`, tags: ['#cbd', '#stress', '#durchblutung'] },
      { name: 'Borax', desc: `Natürliche Borquelle -- Bor erhöht freies Testosteron und senkt SHBG. Unterstützt die Hormonbalance.`, tags: ['#borax', '#testosteron', '#hormone'] },
      { name: 'Kratom', desc: `Kann in niedrigen Dosen stimmungsaufhellend und energetisierend wirken -- unterstützt Motivation und Lebenskraft.`, tags: ['#kratom', '#energie', '#stimmung'] },
      { name: 'Knoblauch-Tinktur', desc: `Allicin verbessert die Durchblutung und erhöht die NO-Produktion -- essentiell für die Erektionsfähigkeit.`, tags: ['#knoblauch', '#durchblutung', '#no'] },
      { name: 'Magnesium-Öl', desc: `Magnesium unterstützt die Testosteronproduktion und entspannt die glatte Muskulatur.`, tags: ['#magnesium', '#testosteron', '#entspannung'] }
    ]
  },

  // ============================================================
  // 11. Immunschwäche / Häufige Infekte
  // ============================================================
  {
    id: 'immunschwaeche',
    name: `Immunschwäche / Häufige Infekte`,
    tags: ['#immunschwäche', '#immunsystem', '#infektanfälligkeit', '#abwehr', '#erkältung'],
    koerper: "Ein geschwächtes Immunsystem zeigt sich durch häufige Infekte (mehr als 3-4 Erkältungen pro Jahr), langsame Wundheilung, chronische Müdigkeit und erhöhte Infektanfälligkeit. Die Ursachen sind vielfältig: Nährstoffmängel (Vitamin D, Zink, Selen, Vitamin C), chronischer Stress, Schlafmangel, Darmstörungen (70-80% des Immunsystems sitzt im Darm), Medikamente (Antibiotika, Kortison), Umweltgifte und eine unausgewogene Ernährung. Das Immunsystem ist ein hochkomplexes Netzwerk aus Organen, Zellen und Botenstoffen -- es braucht optimale Bedingungen, um seine Arbeit zu leisten.",
    psychosomatik: {
      zitat: "Wer sich nicht wehrt, wird krank. Wer sich zu sehr wehrt, auch.",
      text: "Ein schwaches Immunsystem spiegelt oft eine schwache innere Abgrenzung wider. Rüdiger Dahlke beschreibt Immunschwäche als Ausdruck der Unfähigkeit, sich zu wehren -- gegen Übergriffe, gegen Anforderungen, gegen das, was einem nicht guttut. Louise Hay verbindet häufige Infekte mit dem Gefühl, nicht genug zu sein, nicht stark genug, nicht wertvoll genug. Thorwald Dethlefsen sieht im Immunsystem den Ausdruck des Ich -- wer kein klares Ich hat, keine klaren Grenzen, dessen Abwehr ist schwach. Die Stärkung des Immunsystems beginnt mit der Stärkung des Selbst: klare Grenzen, klares Nein, klares Ja."
    },
    traditionen: {
      volksmedizin: "Die Volksmedizin stärkte die Abwehr mit Kneippschen Anwendungen (Wechselduschen, Güsse), Abhärtung durch frische Luft und Holundersaft als Immuntonikum. Propolis (Bienenkittharz) galt als natürliches Antibiotikum. Knoblauch wurde täglich gegessen, Hagebutten als Vitamin-C-Bombe getrunken.",
      tcm: "In der TCM ist Immunschwäche ein Mangel an Wei-Qi (Abwehr-Qi), das von Lunge und Milz gebildet wird. Die Behandlung stärkt die Milz (die Quelle des Qi aus der Nahrung) und die Lunge (die das Wei-Qi an der Oberfläche verteilt). Astragalus (Huang Qi) ist das Hauptkraut -- ein klassisches Qi-Tonikum, das die Abwehr stärkt ohne Pathogene einzuschließen.",
      ayurveda: "Im Ayurveda ist Immunität (Vyadhikshamatva) eng mit Ojas verbunden -- der feinsten Essenz aller Gewebe. Ojas wird durch gute Ernährung, Schlaf, Meditation und Rasayana-Kräuter aufgebaut. Chyawanprash (Amla-Mus) ist das klassische Immun-Rasayana, zusammen mit Ashwagandha und Guduchi (Tinospora cordifolia) -- dem 'Amrit' (Unsterblichkeitsnektar) des Ayurveda.",
      germanisch: "In der Germanischen Heilkunde zeigt chronische Infektanfälligkeit wiederkehrende, nicht gelöste Konflikte an -- der Organismus kommt immer wieder in die Heilungsphase (Entzündung), weil der Konflikt rezidiviert. Die dauerhafte Lösung des Grundkonflikts stabilisiert das System.",
      alchemie: "Alchemistisch ist Immunität die Integrität des inneren Goldes -- des unverletzlichen Kerns. Wenn das Gold getrübt ist, dringen äußere Einflüsse ein. Spagyrische Goldpräparate (Aurum) und Sonnen-Essenzen stärken die innere Unantastbarkeit. Das Immunsystem ist der alchemistische Wächter der Grenze zwischen Selbst und Nicht-Selbst."
    },
    kraeuter: [
      { name: 'Astragalus (Huang Qi)', wirkung: `Der König der Immuntonika -- stärkt das Wei-Qi langfristig, erhöht die Zahl der weißen Blutkörperchen. Als Dekokt (10-15g Wurzel täglich kochen) oder Extrakt über Monate.` },
      { name: 'Echinacea (Sonnenhut)', wirkung: `Stimuliert die Fresszellen des Immunsystems. Als Tinktur bei ersten Anzeichen eines Infekts, nicht dauerhaft (max. 8 Wochen).` },
      { name: 'Holunder (Sambucus nigra)', wirkung: `Beeren und Blüten stärken die Abwehr und verkürzen Infekte. Als Saft, Sirup oder Tee während der Herbst- und Wintermonate.` },
      { name: 'Cistus (Zistrose)', wirkung: `Enthält Polyphenole, die Viren daran hindern, in Zellen einzudringen. Als Tee, 3 Tassen täglich in der Infektsaison.` },
      { name: 'Reishi (Ganoderma lucidum)', wirkung: `Adaptogener Heilpilz -- moduliert das Immunsystem intelligent, stärkt, wo es schwach ist. 1-3g Extrakt täglich über Monate.` }
    ],
    stoffe: [
      { name: 'Vitamin D3', wirkung: `Der wichtigste Immunregulator -- aktiviert die T-Killerzellen und stärkt die Schleimhautabwehr. 5.000-10.000 IE täglich mit K2.` },
      { name: 'Zink', wirkung: `Essentiell für jede Immunzelle. Zinkmangel schwächt die Abwehr massiv. 25-50mg täglich.` },
      { name: 'Vitamin C', wirkung: `Treibstoff der Immunzellen -- Leukozyten brauchen 50-fach höhere Vitamin-C-Konzentrationen als das Blut. 1-3g täglich.` },
      { name: 'Selen', wirkung: `Essentiell für die Funktion der T-Zellen und natürlichen Killerzellen. 200µg täglich.` },
      { name: 'Beta-Glucane', wirkung: `Aus Pilzen oder Hefe -- trainieren das angeborene Immunsystem. Wie ein Bootcamp für Fresszellen.` }
    ],
    ernaehrung: {
      empfehlung: "Eine bunte, nährstoffdichte Ernährung ist die Basis eines starken Immunsystems. Der Darm als größtes Immunorgan braucht Ballaststoffe, Fermentiertes und eine vielfältige Pflanzenkost. Zucker ist der größte Immunkiller -- 6 Stunden nach Zuckerkonsum ist die Immunfunktion um bis zu 40% reduziert.",
      staerkend: ["Knoblauch (täglich roh -- natürliches Antibiotikum)", "Ingwer (frisch, wärmend, antimikrobiell)", "Fermentiertes (Sauerkraut, Kimchi, Kefir)", "Pilze (Shiitake, Maitake -- Beta-Glucane)", "Beeren (Vitamin C, Antioxidantien)", "Knochenbrühe (Glutamin für den Darm)", "Kurkuma (immunmodulierend)", "Hagebutten (Vitamin-C-Bombe)"],
      meiden: ["Zucker (stärkster Immunkiller)", "Alkohol (schwächt das Immunsystem für Tage)", 'Verarbeitete Lebensmittel', "Zu viel Weizen/Gluten (bei Darmempfindlichkeit)", "Milchprodukte in Übermaß (schleimbildend)", "Fast Food und Frittiertes"],
      rezepte: [
        { name: 'Immun-Feuer-Trunk (Fire Cider)', zutaten: 'Knoblauch, Ingwer, Meerrettich, Zwiebel, Chili -- alles klein geschnitten in Bio-Apfelessig, 4 Wochen ziehen lassen', zubereitung: 'Alle Zutaten in ein Glas schichten, mit Apfelessig bedecken, 4 Wochen dunkel ziehen lassen, abseihen, mit Honig süßen. 1-2 EL täglich -- die mächtigste Immunmedizin der Volksheilkunde.' },
        { name: 'Hagebutten-Ingwer-Immuntee', zutaten: '2 EL getrocknete Hagebutten (zerkleinert), 1 cm Ingwer frisch, 1 TL Holunderblüten, 500ml Wasser', zubereitung: 'Hagebutten 15 Min köcheln, Ingwer und Holunderblüten zugeben, 10 Min ziehen lassen. Mit Honig süßen. 2-3 Tassen täglich in der Erkältungszeit.' }
      ]
    },
    fasten: {
      text: "Fasten ist ein kraftvolles Immuntraining -- 72 Stunden Fasten regeneriert das Immunsystem nachweislich von Grund auf. Stammzellen werden aktiviert, alte Immunzellen abgebaut und durch neue ersetzt. Regelmäßiges Intervallfasten hält das Immunsystem dauerhaft in Form.",
      formen: [
        "Intermittierendes Fasten 16:8 als Dauerpraxis -- hält das Immunsystem wachsam",
        "72-Stunden-Fasten (2-4x jährlich) -- kompletter Immunsystem-Reset",
        "Buchinger-Heilfasten 7 Tage -- tiefe Regeneration aller Abwehrfunktionen"
      ],
      reinigung: [
        "Wechselduschen nach Kneipp (warm-kalt) -- trainieren das Immunsystem wie ein Muskel",
        'Darmreinigung mit Zeolith und Flohsamenschalen -- ein gesunder Darm ist die Basis der Immunität',
        "Sauna/Dampfbad -- simuliert Fieber und trainiert die Immunantwort",
        "Ölziehen morgens -- reduziert die Keimlast im Mundraum"
      ]
    },
    bewegung: {
      text: "Moderate, regelmäßige Bewegung ist einer der stärksten Immunbooster -- sie erhöht die Zahl zirkulierender Immunzellen, verbessert die Lymphdrainage und reduziert chronische Entzündung. Übertraining hingegen schwächt das Immunsystem vorübergehend (Open-Window-Effekt).",
      praktiken: [
        "Tägliches zügiges Gehen (30-45 Min) -- die einfachste Immunmedizin",
        "Waldbaden (Shinrin-yoku) -- Phytonzide der Bäume erhöhen natürliche Killerzellen für bis zu 30 Tage",
        "Kalte Duschen/Eisbaden (nach Wim-Hof-Methode) -- trainiert das Immunsystem durch Kältereiz",
        "Trampolinspringen (Rebounding) -- aktiviert den Lymphfluss, das Transportsystem des Immunsystems",
        "Yoga mit tiefer Atmung -- Pranayama stärkt die Lungenabwehr"
      ]
    },
    geist: {
      einheit: "Dein Immunsystem ist der Ausdruck deiner inneren Stärke -- deiner Fähigkeit, dich zu behaupten, dich abzugrenzen, dich zu schützen. Wenn du weißt, wer du bist und was zu dir gehört, weiß es auch dein Immunsystem. Stärke dein Ich, stärke deine Grenzen -- und dein Immunsystem folgt.",
      affirmationen: [
        "Mein Immunsystem ist stark, intelligent und wachsam.",
        "Mein Körper erkennt, was zu mir gehört und was nicht.",
        "Ich bin geschützt und getragen -- in jedem Moment.",
        "Mit jedem Tag wird meine Abwehrkraft stärker."
      ],
      meditation: "Schließe die Augen und visualisiere dein Immunsystem als eine Armee aus Lichtwesen, die deinen Körper beschützen. Sieh sie an deiner Haut, in deinem Darm, in deinem Blut -- wachsam, liebevoll und unüberwindlich. Mit jeder Einatmung werden sie stärker und zahlreicher. Sage innerlich: 'Ich bin geschützt. Mein Körper weiß, wie er sich heilt und verteidigt.' 10 Minuten täglich, besonders in der Erkältungszeit.",
      energie: "Das Thymus-Chakra (zwischen Herz- und Halschakra) ist das energetische Zentrum der Immunität. Klopfe morgens 20 Sekunden sanft auf das Brustbein (Thymus-Klopfen) -- das aktiviert den Thymus und stimuliert die Immunzellen. Auch das Wurzelchakra (Überlebenssicherheit) und das Solarplexus-Chakra (persönliche Kraft) müssen stark sein."
    },
    produkte: [
      { name: 'Artemisia Annua', desc: `Stärkt das Immunsystem und wirkt antimikrobiell -- ein universelles Abwehrmittel aus der Natur.`, tags: ['#artemisia', '#immunsystem', '#antimikrobiell'] },
      { name: 'Zeolith / ZeoMont', desc: `Entgiftet den Darm und stärkt die Darmbarriere -- die Grundlage eines starken Immunsystems.`, tags: ['#zeolith', '#darm', '#immunsystem'] },
      { name: 'Heiltee', desc: `Immunstärkende Kräuterteemischung mit Holunder, Thymian und weiteren Heilkräutern.`, tags: ['#heiltee', '#immunsystem', '#kräuter'] },
      { name: 'Amanita', desc: `Fliegenpilz-Mikrodosierung -- traditionell zur Immunstärkung und als Adaptogen eingesetzt.`, tags: ['#amanita', '#adaptogen', '#immunsystem'] },
      { name: 'Knoblauch-Tinktur', desc: `Allicin wirkt breitbandig antiviral, antibakteriell und antimykotisch -- natürliches Abwehr-Elixier.`, tags: ['#knoblauch', '#antiviral', '#immunsystem'] }
    ]
  },

  // ============================================================
  // 12. Chronische Schmerzen (allgemein)
  // ============================================================
  {
    id: 'schmerzen',
    name: `Chronische Schmerzen (allgemein)`,
    tags: ['#schmerzen', '#chronisch', '#schmerztherapie', '#nervensystem', '#entzündung'],
    koerper: "Chronische Schmerzen bestehen länger als 3 Monate und haben sich von der ursprünglichen Ursache gelöst -- das Nervensystem hat ein 'Schmerzgedächtnis' entwickelt. Die Schmerzweiterleitung ist sensibilisiert, die Schmerzschwelle gesenkt, sodass selbst normale Reize als schmerzhaft empfunden werden (zentrale Sensibilisierung). Entzündungsbotenstoffe, Stress, Schlafmangel und psychische Belastung verstärken die Schmerzen. Ein Teufelskreis aus Schmerz, Anspannung, Bewegungsvermeidung und Angst hält den Zustand aufrecht. Die Behandlung muss ganzheitlich ansetzen -- an Körper, Geist und Nervensystem gleichzeitig.",
    psychosomatik: {
      zitat: "Schmerz ist der Schrei des Gewebes nach fließender Energie.",
      text: "Chronische Schmerzen tragen fast immer eine seelische Botschaft. Rüdiger Dahlke beschreibt Schmerz als blockierte Energie -- dort, wo die Lebenskraft nicht fließen kann, entsteht Schmerz. Louise Hay sieht in chronischem Schmerz lang anhaltende Schuld und das Bedürfnis nach Bestrafung. Thorwald Dethlefsen deutet Schmerz als Hinweis auf einen Bereich, den wir nicht anschauen wollen -- der Schmerz zwingt unsere Aufmerksamkeit dorthin. Jeder Schmerz hat eine Lokalisation und damit eine Symbolik: Rückenschmerzen zeigen fehlende Unterstützung, Schulterschmerzen zeigen Last, Kopfschmerzen zeigen Denkblockaden. Die Heilung beginnt mit der Frage: Was will dieser Schmerz mir sagen?"
    },
    traditionen: {
      volksmedizin: "Die Volksmedizin kannte zahlreiche Schmerzmittel: Weidenrinde (der Vorläufer von Aspirin), Teufelskralle bei Gelenkschmerzen, Johanniskrautöl bei Nervenschmerzen, Arnika bei Prellungen und Entzündungen. Warme Umschläge mit Heublumen, Bienenwachswickel und Schröpfen gehörten zum Standardrepertoire.",
      tcm: "In der TCM gilt: 'Wo Schmerz ist, ist keine Durchgängigkeit -- wo Durchgängigkeit ist, ist kein Schmerz' (Tong Ze Bu Tong, Bu Tong Ze Tong). Schmerz entsteht durch Stagnation von Qi und Blut. Die Behandlung bewegt Qi und Blut, löst Stagnation und stärkt die durchlässigen Bereiche. Akupunktur ist bei chronischen Schmerzen eine der am besten erforschten Methoden.",
      ayurveda: "Im Ayurveda ist chronischer Schmerz ein Vata-Symptom -- Vata ist trocken, kalt und verengt die Kanäle. Die Behandlung beruhigt Vata durch Wärme, Öl und Regelmäßigkeit. Abhyanga (Ganzkörper-Ölmassage) mit warmem Sesamöl ist die Basistherapie. Guggulu und Ashwagandha lindern Schmerzen und nähren das Nervensystem.",
      germanisch: "In der Germanischen Heilkunde zeigt Schmerz immer eine Heilungsphase an -- der Körper repariert Gewebe und der Reparaturprozess ist empfindlich. Chronischer Schmerz deutet auf einen hängenden Heilungsprozess hin, der nicht abschließen kann, weil der zugrunde liegende Konflikt rezidiviert.",
      alchemie: "Alchemistisch ist Schmerz ein Zeichen blockierter Transformation -- ein Prozess, der nicht vollendet werden kann. Das Feuer (Sulphur) kann nicht fließen und staut sich. Die Lösung liegt in der Befreiung des Flusses durch Mercurius und in der Annahme des Transformationsprozesses, der im Schmerz verborgen liegt."
    },
    kraeuter: [
      { name: 'Weidenrinde (Salix alba)', wirkung: `Enthält Salicin -- natürliches Aspirin ohne die Magenprobleme. Bei chronischen Schmerzen 240mg Salicin pro Tag (ca. 1200mg Extrakt).` },
      { name: 'Teufelskralle (Harpagophytum)', wirkung: `Entzündungshemmend und schmerzlindernd, besonders bei Gelenk- und Rückenschmerzen. 960mg Extrakt täglich.` },
      { name: 'Kurkuma', wirkung: `Curcumin hemmt NF-kB und COX-2. Bei chronischen Schmerzen mit Pfeffer und Fett kombiniert, 1-2g Curcumin-Extrakt täglich.` },
      { name: 'Weihrauch (Boswellia)', wirkung: `Hemmt die Leukotrien-Synthese. Besonders wirksam bei Gelenk-, Darm- und Nervenschmerzen. 1200mg Extrakt täglich.` },
      { name: 'Johanniskraut', wirkung: `Äußerlich als Rotöl bei Nervenschmerzen (Ischias, Gürtelrose). Innerlich stimmungsaufhellend -- hebt die Schmerzschwelle.` },
      { name: 'Cannabis/CBD', wirkung: `Wirkt über das Endocannabinoid-System analgetisch, entzündungshemmend und muskelentspannend. CBD-Öl legal und nebenwirkungsarm.` }
    ],
    stoffe: [
      { name: 'Magnesium', wirkung: `Entspannt die Muskulatur, beruhigt das Nervensystem und senkt die Schmerzempfindlichkeit. 400-800mg täglich als Glycinat oder Taurat.` },
      { name: 'Vitamin D3', wirkung: `Chronische Schmerzpatienten haben fast immer niedrige D3-Spiegel. Die Auffüllung reduziert Schmerzen oft deutlich. 5.000-10.000 IE täglich.` },
      { name: 'Omega-3-Fettsäuren', wirkung: `Reduzieren die Prostaglandin-vermittelte Entzündung und damit den Schmerz. 3-4g EPA/DHA täglich.` },
      { name: 'PEA (Palmitoylethanolamid)', wirkung: `Körpereigenes Endocannabinoid mit starker schmerzlindernder Wirkung ohne Nebenwirkungen. 600-1200mg täglich.` }
    ],
    ernaehrung: {
      empfehlung: "Eine anti-entzündliche Ernährung senkt die Schmerzintensität messbar. Omega-3-Fettsäuren, Antioxidantien und Gewürze wie Kurkuma und Ingwer sind die Schmerzmedizin der Küche. Zucker und verarbeitete Lebensmittel fördern Entzündung und damit Schmerzen.",
      staerkend: ["Fetter Fisch oder Leinöl (Omega-3)", "Kurkuma und Ingwer (täglich)", "Dunkle Kirschen (natürliche COX-2-Hemmer)", "Grünes Blattgemüse (Magnesium)", 'Walnüsse', 'Olivenöl extra vergine', "Ananas (Bromelain)", "Beeren (Anthocyane)"],
      meiden: ["Zucker und Weißmehl (entzündungsfördernd)", "Nachtschattengewächse bei Gelenkschmerzen (Tomaten, Paprika, Kartoffeln, Aubergine)", "Omega-6-reiche Öle (Sonnenblumen-, Sojaöl)", 'Alkohol', 'Verarbeitetes Fleisch', "Glutamat (verstärkt Schmerzempfindung)"],
      rezepte: [
        { name: 'Schmerz-Linderungs-Tee', zutaten: '1 TL Weidenrinde, 1 TL Kurkuma, 1/2 TL Ingwer frisch, Honig, 300ml Wasser', zubereitung: 'Weidenrinde 10 Min köcheln, Kurkuma und Ingwer zugeben, 5 Min ziehen lassen. Mit Honig süßen. 2-3 Tassen täglich als natürliches Schmerzmittel.' },
        { name: 'Goldener Schmerz-Smoothie', zutaten: '200g Sauerkirschen, 1 TL Kurkuma, Stück Ingwer, 1 EL Leinöl, 1 Prise schwarzer Pfeffer, 200ml Kokosmilch', zubereitung: 'Alles mixen. Die Kirschen hemmen COX-2, Kurkuma hemmt NF-kB, Leinöl liefert Omega-3 -- natürliche Schmerztherapie zum Trinken.' }
      ]
    },
    fasten: {
      text: "Fasten reduziert Schmerzen auf mehreren Ebenen: Es senkt Entzündungsmarker, aktiviert die Autophagie und verändert die Schmerzwahrnehmung. Viele Schmerzpatienten berichten während des Fastens von einer deutlichen Schmerzreduktion -- manchmal sogar Schmerzfreiheit.",
      formen: [
        "Buchinger-Heilfasten 7-14 Tage -- tiefe Schmerzreduktion durch Entzündungshemmung",
        "Intermittierendes Fasten 16:8 als Dauerpraxis -- hält Entzündungsmarker niedrig",
        "Daniel-Fasten (21 Tage pflanzlich/vegan) -- reduziert Entzündung und Schmerzen"
      ],
      reinigung: [
        'Basenbäder mit Natron und Epsomit -- entsäuern das Gewebe und entspannen die Muskulatur',
        'Schröpfen -- löst Verklebungen im Fasziengewebe und verbessert die Durchblutung',
        'Infrarotsauna -- Tiefenwärme reduziert Schmerzen und fördert die Entgiftung',
        "Leberwickel -- die Leber entgiftet Schmerzsubstanzen"
      ]
    },
    bewegung: {
      text: "Bewegung ist die beste Schmerzmedizin -- aber der Einstieg erfordert Mut, weil der Schmerz zunächst zur Schonung drängt. Sanfte, regelmäßige Bewegung durchbricht den Teufelskreis aus Schmerz und Vermeidung. Der Körper braucht Bewegung, um Schmerzbotenstoffe abzubauen und Endorphine freizusetzen.",
      praktiken: [
        "Tägliches Gehen (mindestens 20 Min) -- Grundlage jeder Schmerztherapie",
        "Yoga (therapeutisch) -- verbessert Flexibilität, Kraft und Schmerzwahrnehmung gleichzeitig",
        "Schwimmen in warmem Wasser -- entlastet, bewegt und wärmt gleichzeitig",
        "Faszientraining mit Rolle -- löst Verklebungen, die Schmerzen verursachen",
        'Progressive Muskelentspannung nach Jacobson -- löst die Schmerz-Verspannungs-Spirale',
        "Qi Gong -- bewegt die Energie und löst Stagnation, die Schmerz verursacht"
      ]
    },
    geist: {
      einheit: "Chronischer Schmerz ist ein Lehrer, auch wenn er ein strenger ist. Er zwingt dich, hinzuschauen, innezuhalten, dich mit dir selbst auseinanderzusetzen. Er fragt: Was blockierst du? Was hältst du fest? Was darf nicht fließen? In der Hingabe an das, was ist, liegt oft mehr Schmerzlinderung als in jedem Medikament.",
      affirmationen: [
        "Ich sende Liebe und Heilung an die Stelle, die schmerzt.",
        "Mein Körper ist in der Lage, sich zu heilen -- ich vertraue ihm.",
        "Ich lasse den Schmerz durch mich hindurchfließen -- er geht vorbei.",
        "Mit jedem Atemzug löse ich ein Stück Anspannung auf.",
        "Ich bin mehr als mein Schmerz."
      ],
      meditation: "Setze dich bequem hin und lenke deine Aufmerksamkeit sanft zum Schmerzort. Statt dagegen zu kämpfen, atme in den Schmerz hinein -- öffne dich für ihn. Beobachte, wie er sich verändert, wenn du ihm Aufmerksamkeit schenkst, statt ihn zu bekämpfen. Visualisiere heilendes Licht, das den Bereich durchströmt und die Blockade auflöst. Diese achtsame Schmerz-Meditation nach Jon Kabat-Zinn ist klinisch erprobt und reduziert die Schmerzintensität nachweislich.",
      energie: "Schmerz zeigt blockierte Energie. Die entsprechende Chakra-Arbeit richtet sich nach der Lokalisation: Kopfschmerzen (Stirnchakra), Nackenschmerzen (Halschakra), Rückenschmerzen (Solarplexus/Sakral), Knieschmerzen (Wurzelchakra). Reiki-Behandlungen auf den Schmerzort sind tief wirksam. Auch Klangschalentherapie kann chronische Schmerzen durch Vibration lösen."
    },
    produkte: [
      { name: 'CBD Öl', desc: `Wirkt schmerzlindernd, entzündungshemmend und muskelentspannend über das Endocannabinoid-System -- ohne Suchtpotential.`, tags: ['#cbd', '#schmerz', '#entzündungshemmend'] },
      { name: 'Kratom', desc: `Pflanzliches Analgetikum -- wirkt über Opioidrezeptoren schmerzlindernd. Bei chronischen Schmerzen in verantwortungsvoller Dosierung.`, tags: ['#kratom', '#schmerz', '#analgetikum'] },
      { name: 'Magnesium-Öl', desc: `Transdermales Magnesium direkt auf den Schmerzort aufgetragen -- entspannt die Muskulatur und lindert Schmerzen lokal.`, tags: ['#magnesium', '#transdermal', '#muskelentspannung'] },
      { name: 'Schwefel (anorganisch)', desc: `MSM ist klinisch bei Schmerzen erprobt -- hemmt Entzündungen und unterstützt die Geweberegeneration.`, tags: ['#schwefel', '#msm', '#entzündungshemmend'] },
      { name: 'Epsomit (Bittersalz)', desc: `Magnesiumsulfat als Badezusatz -- wärmt, entspannt und lindert Schmerzen durch transdermales Magnesium.`, tags: ['#epsomit', '#magnesium', '#entspannung'] }
    ]
  },

  // ============================================================
  // 13. Sucht / Abhängigkeit / Entzug
  // ============================================================
  {
    id: 'sucht',
    name: 'Sucht / Abhängigkeit / Entzug',
    tags: ['#sucht', '#abhängigkeit', '#entzug', '#alkohol', '#drogen', '#nikotinsucht', '#zucker'],
    koerper: "Sucht verändert das Gehirn auf tiefgreifende Weise -- das Belohnungssystem (Dopamin-System) wird gekapert, die Rezeptoren regulieren herunter, und immer größere Mengen der Substanz werden gebraucht, um denselben Effekt zu erzielen (Toleranz). Beim Entzug rebelliert das Nervensystem mit Unruhe, Zittern, Schwitzen, Angst, Schlaflosigkeit und intensivem Verlangen (Craving). Der präfrontale Cortex (Impulskontrolle) wird geschwächt, während die Amygdala (Angst, Stress) überaktiv wird. Nährstoffmängel sind bei Suchterkrankungen die Regel: Magnesium, B-Vitamine, Zink, Vitamin C und Aminosäuren sind oft stark defizitär.",
    psychosomatik: {
      zitat: "Sucht ist der Versuch, eine Leere zu füllen, die nicht materiell ist.",
      text: "Sucht ist im tiefsten Sinne eine spirituelle Erkrankung -- ein Hunger der Seele, der mit materiellen Mitteln gestillt werden soll. Rüdiger Dahlke beschreibt Sucht als die Suche nach dem verlorenen Paradies, nach Ganzheit, nach Ekstase -- alles Qualitäten, die der Mensch in sich selbst finden könnte. Die Substanz ist nur der Stellvertreter für das, was wirklich fehlt: Verbindung, Liebe, Sinn, Lebendigkeit. Thorwald Dethlefsen sieht in der Sucht den Schatten der Sehnsucht -- die Sehnsucht nach Gott, nach dem Ganzen. Gabor Maté, der führende Suchtexperte, bringt es auf den Punkt: 'Die Frage ist nicht, warum die Sucht -- sondern warum der Schmerz?' Sucht ist immer eine Antwort auf einen unerträglichen Schmerz."
    },
    traditionen: {
      volksmedizin: "Die Volksmedizin nutzte Hafer (Avena sativa) als Nervenstärkungsmittel beim Entzug, Baldrian und Passionsblume zur Beruhigung, Mariendistel zum Schutz der Leber. Bitterstoffe (Wermut, Enzian) regulierten das Verlangen. Auch Schwitzkuren in der Sauna und Fasten gehörten zu den Reinigungspraktiken.",
      tcm: "In der TCM erschöpft Sucht das Yin und das Jing (Lebensessenz) der Niere. Alkohol erzeugt feuchte Hitze, Stimulanzien verbrennen das Yin. Die Behandlung nährt das Yin, kühlt die Hitze und beruhigt den Shen (Geist). Ohrakupunktur nach dem NADA-Protokoll (5 Punkte im Ohr) ist international als Entzugsunterstützung anerkannt.",
      ayurveda: "Im Ayurveda stört Sucht alle drei Doshas und zerstört Ojas -- die feinste Essenz der Lebenskraft. Die Behandlung beginnt mit Panchakarma-Reinigung und baut dann mit Rasayanas (Ashwagandha, Brahmi, Shankhapushpi) das erschöpfte Nervensystem wieder auf. Meditation und Yoga sind zentrale Pfeiler.",
      germanisch: "In der Germanischen Heilkunde steht Sucht in Verbindung mit tiefen biologischen Konflikten -- oft Existenzängste, Verlust oder Isolation. Die Substanz hilft, den unerträglichen Konflikt zu ertragen. Die Lösung des Grundkonflikts macht die Substanz überflüssig.",
      alchemie: "Alchemistisch ist Sucht die Verwechslung von Materie und Geist -- die Suche nach der Quinta Essentia in der Flasche statt im eigenen Inneren. Der Stein der Weisen, die innere Transformation, kann nicht von außen zugeführt werden. Die wahre Alchemie geschieht im Menschen selbst."
    },
    kraeuter: [
      { name: 'Kudzu (Pueraria lobata)', wirkung: `Reduziert das Verlangen nach Alkohol nachweislich. Isoflavone (Daidzein, Puerarin) regulieren das Dopaminsystem. 1-2g Extrakt täglich.` },
      { name: 'Passionsblume (Passiflora)', wirkung: `Beruhigt Angst und Unruhe beim Entzug, fördert den Schlaf ohne Abhängigkeit. Als Tee oder Tinktur, besonders abends.` },
      { name: 'Hafer (Avena sativa)', wirkung: `Nährt und stärkt das erschöpfte Nervensystem. Traditionell beim Opiat- und Nikotinentzug eingesetzt. Als Frischpflanzentinktur.` },
      { name: `Mariendistel (Silybum marianum)`, wirkung: `Schützt und regeneriert die Leber -- bei Alkoholsucht unverzichtbar. 400mg Silymarin-Extrakt 3x täglich.` },
      { name: 'Ashwagandha', wirkung: `Adaptogen, das Cortisol senkt und GABA-Rezeptoren moduliert. Reduziert Angst und Unruhe beim Entzug. 300-600mg Extrakt täglich.` },
      { name: 'Johanniskraut', wirkung: `Natürliches Antidepressivum, das die Stimmung hebt und das Verlangen reduziert. 900mg Extrakt täglich (Vorsicht bei gleichzeitiger Medikation!).` }
    ],
    stoffe: [
      { name: 'NAC (N-Acetylcystein)', wirkung: `Reguliert den Glutamat-Spiegel im Gehirn und reduziert das Suchtgedächtnis. Klinisch erprobt bei Kokain-, Nikotin- und Spielsucht. 1200-2400mg täglich.` },
      { name: 'Magnesium', wirkung: `Beruhigt das überreizte Nervensystem, reduziert Krämpfe und Angst beim Entzug. 400-600mg täglich als Glycinat.` },
      { name: 'Vitamin B-Komplex', wirkung: `Suchterkrankungen führen zu massiven B-Vitamin-Mängeln. Hochdosierter B-Komplex unterstützt das Nervensystem und den Energiestoffwechsel.` },
      { name: 'L-Glutamin', wirkung: `Reduziert das Verlangen nach Zucker und Alkohol, stabilisiert den Blutzucker. 3-5g bei Craving-Attacken unter die Zunge.` },
      { name: 'Vitamin C', wirkung: `Hochdosiert (5-10g täglich) unterstützt Vitamin C den Entzug und die Entgiftung. Wurde bei Opiatentzug erfolgreich eingesetzt.` }
    ],
    ernaehrung: {
      empfehlung: "Die Ernährung bei Suchterkrankungen muss das ausgehungerte Nervensystem wieder aufbauen. Stabile Blutzuckerspiegel sind entscheidend -- Heißhunger und Blutzuckertiefs triggern Rückfälle. Hochwertige Proteine (Aminosäuren für Neurotransmitter), gute Fette (Gehirnnahrung) und reichlich Nährstoffe sind die Basis.",
      staerkend: ["Eier und hochwertiges Protein (Aminosäuren für Dopamin, Serotonin)", "Knochenbrühe (Glycin beruhigt, Glutamin heilt den Darm)", "Avocado und Kokosfett (Gehirnnahrung)", "Dunkelgrünes Blattgemüse (Folat, Magnesium)", "Haferflocken (nervenstärkend)", "Nüsse und Samen (Magnesium, Zink, B-Vitamine)", "Bananen (Tryptophan für Serotonin)", "Fermentiertes (Darmflora aufbauen)"],
      meiden: ["Zucker (triggert das Suchtgedächtnis direkt)", "Koffein in Übermaß (verstärkt Angst und Unruhe)", "Verarbeitete Lebensmittel (leere Kalorien ohne Nährstoffe)", "Alkohol (auch bei nicht-alkoholischer Sucht -- triggert das Belohnungssystem)", "Künstliche Süßstoffe (halten das Verlangen nach Süßem aufrecht)"],
      rezepte: [
        { name: 'Nervenstärkender Haferporridge', zutaten: '60g Haferflocken, 1 Banane, 2 EL Walnüsse, 1 EL Leinsamen, 1 TL Zimt, 1 TL Ashwagandha-Pulver, Pflanzenmilch', zubereitung: 'Hafer in Milch warm kochen, mit Banane, Nüssen, Leinsamen und Ashwagandha toppen. Zimt zugibt. Nährt das Nervensystem und hält den Blutzucker stabil.' },
        { name: 'Anti-Craving-Trunk', zutaten: '3g L-Glutamin, Saft einer Zitrone, 1 TL Honig, 300ml warmes Wasser', zubereitung: 'L-Glutamin in warmem Wasser mit Zitronensaft und Honig auflösen. Bei Suchtdruck langsam trinken. L-Glutamin reduziert das Verlangen nach Zucker und Alkohol.' }
      ]
    },
    fasten: {
      text: "Fasten kann ein machtvolles Werkzeug in der Suchtheilung sein -- es unterbricht eingefahrene Muster, entgiftet den Körper und öffnet einen Raum für spirituelle Erfahrung. Allerdings muss der Entzug von harten Substanzen ärztlich begleitet werden. Fasten ist eher in der Phase der Stabilisierung und Regeneration angezeigt.",
      formen: [
        "Zuckerfasten (30 Tage ohne Zucker) -- durchbricht die häufigste aller Süchte",
        "Intermittierendes Fasten 16:8 -- strukturiert den Tag und stabilisiert den Blutzucker",
        "Spirituelles Fasten mit Meditation -- öffnet den Raum für die Erfahrung, die die Sucht ersetzen kann"
      ],
      reinigung: [
        "Sauna/Schwitzen -- beschleunigt die Ausscheidung von Toxinen über die Haut",
        'Darmreinigung -- Suchtsubstanzen belasten die Darmflora massiv',
        'Leberreinigung mit Mariendistel -- die Leber ist das Hauptentgiftungsorgan',
        'Basenbäder -- entsäuern den durch Suchtmittel übersäuerten Körper',
        "Zeolith-Kur -- bindet Schadstoffe und Metaboliten"
      ]
    },
    bewegung: {
      text: "Bewegung ist eine der wirksamsten Maßnahmen gegen Sucht -- sie aktiviert das Belohnungssystem auf natürliche Weise und produziert körpereigene Endorphine und Endocannabinoide. Regelmäßiger Sport reduziert Rückfälle, verbessert die Stimmung und gibt dem Leben Struktur.",
      praktiken: [
        "Laufen/Joggen -- erzeugt den 'Runner's High' durch Endorphine und Endocannabinoide",
        "Krafttraining -- steigert Selbstwert, Disziplin und Testosteron",
        "Yoga -- verbindet Körper und Geist, reguliert das Nervensystem, klinisch bei Sucht erprobt",
        'Kampfsport -- kanalisiert Aggression und stärkt die innere Kraft',
        "Tanzen -- Ausdruck, Freude, Gemeinschaft -- alles, was Sucht ersetzen kann"
      ]
    },
    geist: {
      einheit: "Sucht ist die Suche nach etwas, das nur in dir selbst gefunden werden kann. Die Substanz verspricht, was deine Seele sich wünscht: Verbindung, Frieden, Ekstase, Lebendigkeit. All das ist in dir -- ohne Substanz, ohne Preis, ohne Kater. Der Weg aus der Sucht führt nach innen, nicht nach außen.",
      affirmationen: [
        "Ich bin frei. Ich wähle das Leben.",
        "Was ich suche, finde ich in mir selbst.",
        "Ich bin stärker als jedes Verlangen.",
        "Mit jedem Tag wird mein wahres Selbst klarer und kräftiger.",
        "Ich verdiene ein Leben in Freiheit und Fülle."
      ],
      meditation: "Wenn das Verlangen kommt, halte inne und atme. Beobachte das Craving wie eine Welle -- es steigt an, erreicht einen Höhepunkt und geht wieder zurück. Du musst nicht auf die Welle steigen. Atme hindurch. 'Urge Surfing' nennt sich diese Technik: 4 Minuten bewusstes Atmen, während du das Verlangen beobachtest, ohne ihm zu folgen. Nach 10-15 Minuten geht jedes Craving vorbei.",
      energie: "Das Sakralchakra (Svadhisthana) ist das Zentrum von Lust, Sucht und Schöpferkraft -- wenn es blockiert ist, sucht die Energie einen falschen Ausweg. Die Heilung liegt in der Transformation der Suchtenergie in Schöpferkraft. Auch das Kronenchakra (Sahasrara) ist relevant -- Sucht ist oft die verzerrte Suche nach spiritueller Erfahrung. Meditation, Gebet und Naturerfahrung öffnen den Kanal zu dem, was die Sucht eigentlich sucht."
    },
    produkte: [
      { name: 'CBD Öl', desc: `Reduziert Angst und Unruhe beim Entzug, moduliert das Suchtgedächtnis und hilft bei Schlafstörungen. Klinisch erforscht bei Opioid- und Nikotinentzug.`, tags: ['#cbd', '#entzug', '#angst'] },
      { name: 'Kratom', desc: `Kann den Opiatentzug erleichtern, da es an Opioidrezeptoren bindet. In niedriger Dosis stimmungsaufhellend und energetisierend. Verantwortungsvoller Umgang essentiell.`, tags: ['#kratom', '#entzug', '#opioide'] },
      { name: 'Zeolith / ZeoMont', desc: `Bindet Toxine und Metaboliten der Suchtsubstanzen im Darm. Unterstützt die körperliche Entgiftung.`, tags: ['#zeolith', '#entgiftung', '#reinigung'] },
      { name: 'Hericium (Löwenmähne)', desc: `Regeneriert Nervenzellen und unterstützt die Neuroplastizität -- das Gehirn braucht Hilfe, sich nach der Sucht neu zu verdrahten.`, tags: ['#hericium', '#nervensystem', '#regeneration'] }
    ]
  },

  // ============================================================
  // 14. Trauma / PTBS / Seelische Verletzung
  // ============================================================
  {
    id: 'trauma',
    name: `Trauma / PTBS / Seelische Verletzung`,
    tags: ['#trauma', '#ptbs', '#ptsd', '#seele', '#nervensystem', '#angst', '#heilung'],
    koerper: "Trauma hinterlässt tiefe Spuren im Nervensystem -- der Körper bleibt in einem Zustand der Überlebensreaktion (Fight-Flight-Freeze) stecken, auch wenn die Gefahr längst vorbei ist. Das autonome Nervensystem ist dysreguliert: der Sympathikus (Kampf/Flucht) ist chronisch überaktiv oder der dorsale Vagus (Erstarrung/Dissoziation) dominiert. Die HPA-Achse (Stressachse) produziert zu viel Cortisol und Adrenalin. Die Folgen sind weitreichend: Schlafstörungen, Flashbacks, Panikattacken, chronische Schmerzen, Verdauungsprobleme, Autoimmunerkrankungen und eine tiefe Erschöpfung. Trauma sitzt nicht nur im Kopf -- es sitzt im Körper.",
    psychosomatik: {
      zitat: "Das Trauma ist nicht das, was dir passiert ist -- es ist das, was in dir passiert ist.",
      text: "Trauma ist die tiefste aller seelischen Verletzungen -- ein Erlebnis, das die Verarbeitungskapazität der Psyche übersteigt und als unintegriertes Fragment im System stecken bleibt. Peter Levine (Somatic Experiencing) beschreibt Trauma als im Körper gefangene Überlebensenergie, die nicht zu Ende gebracht wurde. Bessel van der Kolk ('The Body Keeps the Score') zeigt, dass der Körper die Erinnerung speichert, auch wenn der Geist vergisst. Thorwald Dethlefsen deutet Trauma als eine Erfahrung, die integriert werden will -- nicht vergessen, sondern durchlebt und verwandelt. Die Heilung von Trauma geschieht nicht durch Analyse allein, sondern durch die sichere, körperliche Erfahrung von Gegenwärtigkeit."
    },
    traditionen: {
      volksmedizin: "Die Volksmedizin kannte Trauma als 'Schrecken, der in den Knochen sitzt'. Herzstärkende Kräuter wie Herzgespannkraut und Melisse wurden verabreicht, Baldrian und Johanniskraut beruhigten die aufgewühlten Nerven. Auch Räucherungen mit Salbei und Beifuß dienten der seelischen Reinigung nach erschütternden Erlebnissen.",
      tcm: "In der TCM verstreut Trauma das Shen (Geist/Seele), das im Herzen wohnt. Der Schock verletzt das Herz-Qi und die Niere (Angst). Das Hun (Wanderseele der Leber) wird heimatlos -- Albträume, Flashbacks und Dissoziation sind die Folge. Die Behandlung verankert das Shen, nährt das Herz-Blut und beruhigt die Leber. Akupunktur am Punkt He-7 (Shenmen -- Tor des Geistes) ist zentral.",
      ayurveda: "Im Ayurveda stört Trauma massiv Vata -- das Nervensystem wird hypermobil, instabil und fragmentiert. Ojas (Lebensessenz) wird erschöpft. Die Behandlung beruhigt Vata durch Regelmäßigkeit, Wärme, Ölmassage (Abhyanga) und erdende Kräuter. Ashwagandha, Brahmi und Jatamansi (Narde) stabilisieren das traumatisierte Nervensystem.",
      germanisch: "In der Germanischen Heilkunde ist Trauma der Konfliktschock (DHS -- Dirk Hamer Syndrom) selbst -- ein hochakutes, isolatives Schockerlebnis, das den Organismus auf allen Ebenen trifft. Jedes biologische Programm beginnt mit einem solchen Schock. Die Lösung des Konflikts leitet die Heilungsphase ein.",
      alchemie: "Alchemistisch ist Trauma die Nigredo -- die schwärzeste Phase des opus magnum, der Zerfall, die Dunkelheit. Doch die Nigredo ist nicht das Ende -- sie ist der Anfang der Transformation. Aus der Asche steigt der Phönix. Die Integration des Traumas ist die große alchemistische Arbeit: aus Blei wird Gold, aus Wunde wird Weisheit."
    },
    kraeuter: [
      { name: 'Ashwagandha', wirkung: `Adaptogen, das die HPA-Achse reguliert, Cortisol senkt und das Nervensystem stabilisiert. Klinisch bei PTBS erprobt. 300-600mg KSM-66 täglich.` },
      { name: 'Johanniskraut', wirkung: `Natürliches Antidepressivum, das Serotonin, Dopamin und Noradrenalin reguliert. Hebt die Stimmung und reduziert Angst. 900mg Extrakt täglich.` },
      { name: 'Passionsblume', wirkung: `Beruhigt das überreizte Nervensystem, fördert den Schlaf, reduziert Angst -- ohne Abhängigkeit. Als Tee oder Tinktur.` },
      { name: 'Baldrian', wirkung: `Beruhigt das Nervensystem und verbessert den Schlaf -- Schlafstörungen sind eines der Hauptsymptome von PTBS.` },
      { name: 'Melisse', wirkung: `Beruhigt Herzklopfen und Nervosität, fördert einen friedlichen Schlaf. Als Tee, besonders abends.` },
      { name: 'Lavendel', wirkung: `Anxiolytisch -- Silexan (Lavendelöl-Kapseln) ist bei Angststörungen so wirksam wie Benzodiazepine, ohne Suchtpotential. 80mg Silexan täglich.` }
    ],
    stoffe: [
      { name: 'Magnesium', wirkung: `Das Anti-Stress-Mineral -- beruhigt das überreizte Nervensystem, verbessert den Schlaf, löst Muskelspannung. 400-600mg täglich als Glycinat.` },
      { name: 'Omega-3-Fettsäuren', wirkung: `Nähren das Gehirn und reduzieren die Neuro-Inflammation, die bei PTBS erhöht ist. 2-4g EPA/DHA täglich.` },
      { name: 'GABA/L-Theanin', wirkung: `L-Theanin (200mg) fördert Alpha-Wellen und Entspannung, GABA beruhigt das erregte Nervensystem direkt. Besonders bei Übererregung und Panik.` },
      { name: 'Vitamin D3', wirkung: `Niedrige Spiegel korrelieren mit Depression und PTBS-Schwere. 5.000-10.000 IE täglich mit K2.` }
    ],
    ernaehrung: {
      empfehlung: "Das traumatisierte Nervensystem braucht Sicherheit -- auch durch die Ernährung. Regelmäßige, warme, nährende Mahlzeiten zu festen Zeiten geben dem Körper das Signal: Du bist sicher, es ist genug da. Tryptophan-reiche Nahrung (Serotonin-Vorstufe) und gute Fette (Gehirnnahrung) sind besonders wichtig.",
      staerkend: ["Warme Suppen und Eintöpfe (nährend, erdend)", "Haferflocken (nervenstärkend)", "Bananen und Datteln (Tryptophan)", "Avocado und Kokosöl (Gehirnfette)", "Knochenbrühe (Glycin beruhigt das Nervensystem)", "Nüsse und Samen (Magnesium, Zink)", "Goldene Milch (Kurkuma, Zimt, Wärme)"],
      meiden: ["Koffein (verstärkt Übererregung und Panik)", "Zucker (Blutzuckerachterbahn verstärkt emotionale Instabilität)", "Alkohol (scheint kurzfristig zu helfen, verschlimmert langfristig)", 'Verarbeitete Lebensmittel', "Unregelmäßiges Essen (verstärkt die Unsicherheit des Nervensystems)"],
      rezepte: [
        { name: 'Nervenstärkende Goldene Milch', zutaten: '250ml Hafer- oder Mandelmilch, 1 TL Kurkuma, 1/2 TL Zimt, 1/4 TL Muskatnuss, 1 TL Kokosöl, 1 TL Honig', zubereitung: 'Milch erwärmen, Gewürze und Öl einrühren, mit Honig süßen. Abends trinken -- die Wärme und das Ritual beruhigen das Nervensystem. Muskatnuss fördert den Schlaf.' },
        { name: 'Beruhigende Kräuterbrühe', zutaten: '1L Knochenbrühe, Stück Ingwer, 1 TL Ashwagandha-Pulver, Prise Muskatnuss, frische Petersilie, Meersalz', zubereitung: 'Brühe erwärmen, Ingwer und Ashwagandha einrühren, mit Salz und Petersilie abschmecken. Täglich eine Tasse -- nährt Nerven und Seele.' }
      ]
    },
    fasten: {
      text: "Bei akutem Trauma und PTBS ist strenges Fasten meist nicht angezeigt -- ein traumatisiertes Nervensystem braucht Sicherheit und Nährung, nicht Verzicht. Sanfte Formen des Fastens können jedoch in einer stabilen Phase die Entgiftung unterstützen und meditative Zustände vertiefen.",
      formen: [
        "Sanftes Intermittierendes Fasten 14:10 -- nur wenn der Körper stabil genug ist",
        "Digital-Fasten (Bildschirmfrei) -- reduziert Trigger und gibt dem Nervensystem Ruhe",
        "Nachrichten-Fasten -- beschützt das traumatisierte Nervensystem vor Retraumatisierung"
      ],
      reinigung: [
        'Warme Basenbäder mit Lavendel -- beruhigen das Nervensystem und entsäuern den Körper',
        "Sanfte Ölmassage (Abhyanga) mit warmem Sesamöl -- erdend und beruhigend für das Nervensystem",
        'Räuchern mit weißem Salbei oder Palo Santo -- traditionelle Reinigung nach erschütternden Erlebnissen',
        "Erdung (Barfuß auf der Erde) -- bringt das dissoziierte Nervensystem zurück in den Körper"
      ]
    },
    bewegung: {
      text: "Trauma-sensitive Bewegung ist ein Schlüssel zur Heilung -- der Körper muss die gefangene Überlebensenergie abschließen können. Nicht jede Bewegungsform ist geeignet: das Nervensystem braucht sanfte, selbstbestimmte Praxis, die Sicherheit und Kontrolle vermittelt.",
      praktiken: [
        "Trauma-sensitives Yoga -- selbstbestimmte Praxis, kein Anfassen durch Lehrer, Betonung von Erdung und Sicherheit",
        'Somatic Experiencing-Übungen -- sanftes Nachspüren und Entladen der im Körper gespeicherten Traumaenergie',
        "Schütteln und Zittern (TRE -- Trauma Release Exercises) -- der Körper entlädt natürlich, wie Tiere nach Stress",
        'Spaziergänge in der Natur -- die sicherste und heilsamste Umgebung für ein traumatisiertes Nervensystem',
        "Schwimmen -- das Wasser hält und trägt, was das Nervensystem beruhigt"
      ]
    },
    geist: {
      einheit: "Trauma ist eine Wunde, die heilen will. Du bist nicht gebrochen -- du trägst eine Erfahrung, die zu groß war, um sie allein zu verarbeiten. Die Heilung geschieht nicht, indem du vergisst, sondern indem du das Erlebte integrierst -- Stück für Stück, in deinem Tempo, in Sicherheit. Aus jeder Wunde kann eine Quelle der Weisheit und des Mitgefühls werden.",
      affirmationen: [
        "Ich bin sicher. Jetzt, in diesem Moment, bin ich sicher.",
        "Was mir geschehen ist, definiert mich nicht.",
        "Mein Körper darf heilen. Meine Seele darf heilen.",
        "Ich bin stärker, als ich glaube -- ich habe überlebt.",
        "Mit jedem Atemzug komme ich mehr im Jetzt an."
      ],
      meditation: "Spüre deine Füße auf dem Boden. Spüre deinen Rücken an der Lehne. Spüre deine Hände auf deinen Oberschenkeln. Du bist hier. Du bist jetzt. Atme langsam -- 4 Sekunden ein, 6 Sekunden aus. Benenne innerlich 5 Dinge, die du siehst, 4 Dinge, die du hörst, 3 Dinge, die du fühlst. Diese Erdungsübung (5-4-3-2-1) holt dich aus Flashbacks zurück ins Hier und Jetzt. Übe sie täglich, damit sie im Notfall abrufbar ist.",
      energie: "Bei Trauma sind oft alle Chakren betroffen -- besonders das Wurzelchakra (Sicherheit), das Sakralchakra (Emotionen) und das Herzchakra (Liebe, Verbindung). Die Arbeit beginnt immer unten -- erst Erdung und Sicherheit (Wurzelchakra), dann emotionale Verarbeitung (Sakral), dann Öffnung des Herzens. Reiki, Craniosacrale Therapie und Polarity-Therapie können Trauma auf energetischer Ebene sanft lösen, ohne retraumatisierend zu wirken."
    },
    produkte: [
      { name: 'CBD Öl', desc: `Reguliert das Endocannabinoid-System, das bei PTBS gestört ist. Reduziert Angst, verbessert den Schlaf und kann Flashbacks mindern.`, tags: ['#cbd', '#trauma', '#angst', '#schlaf'] },
      { name: 'Amanita', desc: `Fliegenpilz-Mikrodosierung -- traditionell in schamanischen Heiltraditionen bei seelischen Verletzungen eingesetzt. Kann die Integration traumatischer Erfahrungen unterstützen.`, tags: ['#amanita', '#seelisch', '#integration'] },
      { name: 'Hericium (Löwenmähne)', desc: `Fördert die Neuroplastizität und Nervenzellregeneration -- das Gehirn braucht nach Trauma Unterstützung bei der Neuvernetzung.`, tags: ['#hericium', '#neuroplastizität', '#regeneration'] },
      { name: 'Magnesium-Öl', desc: `Transdermales Magnesium beruhigt das Nervensystem und löst die körperliche Anspannung, die Trauma begleitet.`, tags: ['#magnesium', '#nervensystem', '#entspannung'] }
    ]
  },

  // ============================================================
  // 15. Haarausfall / Haargesundheit
  // ============================================================
  {
    id: 'haarverlust',
    name: 'Haarausfall / Haargesundheit',
    tags: ['#haare', '#haarausfall', '#alopezie', '#haarwachstum', '#kopfhaut', '#nährstoffmangel'],
    koerper: "Haarausfall kann viele Ursachen haben: hormonell bedingt (androgenetische Alopezie -- DHT schädigt die Follikel), diffuser Haarausfall durch Nährstoffmangel (Eisen, Zink, Biotin, Vitamin D, Protein), Schilddrüsenstörungen, Stress (Telogen Effluvium), Autoimmun (Alopecia areata) oder durch Medikamente und Toxine. Haare sind ein Spiegel der inneren Gesundheit -- sie wachsen langsam und reagieren auf Mangelzustände, die 2-3 Monate zurückliegen. Pro Tag fallen normalerweise 50-100 Haare aus, darüber hinaus spricht man von pathologischem Haarausfall. Die Haarfollikel sind auf eine konstante Versorgung mit Nährstoffen, Sauerstoff und Hormonen angewiesen.",
    psychosomatik: {
      zitat: "Wem die Haare ausgehen, dem geht die Kraft aus -- oder er rauft sich die Haare.",
      text: "Haare symbolisieren Kraft, Vitalität und Freiheit -- Samson verlor mit seinen Haaren seine Stärke. Rüdiger Dahlke sieht Haarausfall als Zeichen, dass die Lebenskraft nachlässt, dass man 'die Haare lässt' für etwas, das einem nicht entspricht. Louise Hay verbindet Haarausfall mit Anspannung, Angst, Versuch, alles zu kontrollieren, und dem Gefühl, nicht geschützt zu sein. Thorwald Dethlefsen deutet den Verlust der Haare als Verlust der Antennen zur geistigen Welt -- Haare als energetische Rezeptoren. Bei stressbedingtem Haarausfall ist die Botschaft klar: Der Druck ist zu hoch, die Kraft reicht nicht mehr. Die Frage lautet: Was raubt dir die Kraft? Was lässt dich wortwörtlich 'die Haare verlieren'?"
    },
    traditionen: {
      volksmedizin: "Die Volksmedizin nutzte Brennnessel als Haartonikum erster Wahl -- als Tee innerlich und als Haarspülung äußerlich. Klettenwurzelöl wurde in die Kopfhaut massiert, um die Follikel zu stärken. Birkenblätterwasser galt als Haarwuchsmittel. Huflattich und Schachtelhalm (Silizium) wurden für kräftiges Haar getrunken.",
      tcm: "In der TCM ist Haarpracht ein Ausdruck des Nieren-Jing (Lebensessenz) und des Leber-Blutes. 'Das Haar ist der Überfluss des Blutes' heißt es -- wenn das Blut genährt ist, glänzen die Haare. Haarausfall zeigt Blut- und Jing-Mangel an. He Shou Wu (Polygonum multiflorum) ist das berühmteste Haarmittel der TCM -- sein Name bedeutet 'Herr He mit schwarzem Haar'.",
      ayurveda: "Im Ayurveda gehören Haare zum Asthi Dhatu (Knochengewebe) -- Haarausfall zeigt eine Störung auf dieser tiefen Gewebeebene an. Bhringraj (Eclipta alba) ist der 'König der Haarkräuter' -- als Öl auf die Kopfhaut und innerlich. Amla (indische Stachelbeere) nährt das Haar von innen. Warme Kopfhautmassage mit Sesamöl oder Kokosöl (Shiro Abhyanga) ist die Basistherapie.",
      germanisch: "In der Germanischen Heilkunde zeigt Haarausfall einen Trennungskonflikt an der Kopfhaut -- das Gefühl, über den Kopf gestrichen oder vom Kopf getrennt zu werden. In der aktiven Phase dünnt das Haar aus, in der Heilungsphase wächst es nach.",
      alchemie: "Alchemistisch sind Haare die Ausstrahlung des inneren Goldes -- die feinstoffliche Emanation der Lebenskraft. Wenn das innere Gold schwindet, verliert auch die äußere Ausstrahlung ihre Kraft. Spagyrische Aufbereitungen von Silizium, Eisen und Schwefel -- den Mineralien des Haares -- stärken die Substanz von innen."
    },
    kraeuter: [
      { name: 'Brennnessel', wirkung: `Das universelle Haartonikum -- nährt mit Eisen, Silizium und Mineralien. Als Tee (3 Tassen täglich) und als Haarspülung äußerlich.` },
      { name: 'Schachtelhalm (Equisetum)', wirkung: `Reichste pflanzliche Siliziumquelle -- Silizium stärkt Haare, Nägel und Bindegewebe. Als Tee oder Extrakt über Monate.` },
      { name: 'Sägepalme (Serenoa repens)', wirkung: `Hemmt die 5-Alpha-Reduktase und damit DHT -- die Hauptursache des erblichen Haarausfalls. 320mg Extrakt täglich.` },
      { name: 'Rosmarin', wirkung: `Rosmarinöl auf der Kopfhaut ist so wirksam wie Minoxidil (2%). 3-5 Tropfen ätherisches Rosmarinöl in Trägeröl, täglich einmassieren.` },
      { name: 'Klettenwurzel (Arctium lappa)', wirkung: `Stärkt die Haarfollikel und fördert die Durchblutung der Kopfhaut. Als Klettenwurzelöl zur Kopfhautmassage.` },
      { name: 'Amla (Emblica officinalis)', wirkung: `Reichste natürliche Vitamin-C-Quelle, stärkt das Haar von innen. Als Pulver in Kapseln oder im Öl äußerlich.` }
    ],
    stoffe: [
      { name: 'Eisen', wirkung: `Häufigste Mangelursache bei diffusem Haarausfall, besonders bei Frauen. Ferritin-Wert messen -- für Haarwachstum sollte er über 70 µg/L liegen.` },
      { name: 'Zink', wirkung: `Essentiell für die Zellteilung im Haarfollikel. Zinkmangel verursacht direkt Haarausfall. 25-50mg täglich, nicht dauerhaft hochdosiert.` },
      { name: 'Biotin (Vitamin B7)', wirkung: `Baustein für Keratin -- das Protein, aus dem Haare bestehen. 5.000-10.000µg täglich, Ergebnisse nach 3-6 Monaten.` },
      { name: 'Silizium', wirkung: `Stärkt die Haarstruktur und gibt Elastizität. Aus Schachtelhalm, Brennnessel oder als kolloidales Silizium. Langfristig einnehmen.` },
      { name: 'Vitamin D3', wirkung: `Reguliert den Haarzyklus und stimuliert die Haarfollikel. Mangel ist häufig mit Haarausfall assoziiert. 5.000-10.000 IE täglich.` }
    ],
    ernaehrung: {
      empfehlung: "Haare brauchen eine konstante Versorgung mit Protein (Keratin-Baustein), Eisen, Zink, Biotin, Silizium und gesunden Fetten. Die Ernährung bei Haarausfall muss nährstoffdicht sein -- Crash-Diäten sind einer der häufigsten Haarausfall-Trigger. Ausreichend Protein ist besonders wichtig: mindestens 1g pro kg Körpergewicht.",
      staerkend: ["Eier (Biotin, Protein, Zink)", "Brennnesseltee (Eisen, Silizium)", "Hirse (Silizium -- das Schönheitsgetreide)", "Kürbiskerne (Zink, Eisen)", "Lachs oder Hanföl (Omega-3)", "Linsen und Bohnen (Eisen, Protein, Biotin)", "Spinat und Grünkohl (Eisen, Folat)", "Süßkartoffeln (Beta-Carotin)"],
      meiden: ["Crash-Diäten und starke Kalorienrestriktion", "Zucker in großen Mengen (stört den Hormonhaushalt)", "Alkohol (hemmt Nährstoffaufnahme)", "Zu viel Vitamin A (über 10.000 IE -- kann Haarausfall fördern)", "Unbehandeltes Leitungswasser (Chlor schädigt die Haarstruktur)"],
      rezepte: [
        { name: 'Haar-Vital-Smoothie', zutaten: '1 Handvoll Spinat, 1 Banane, 2 EL Hanfsamen, 1 EL Hirse-Flocken, 1 EL Schwarze Melasse (Eisen!), 200ml Hafermilch', zubereitung: 'Alles mixen und morgens trinken. Liefert Eisen, Silizium, Zink, Biotin und Protein -- alles, was das Haar braucht.' },
        { name: `Brennnessel-Haar-Kur (äußerlich)`, zutaten: '4 EL getrocknete Brennnesselblätter, 500ml Apfelessig', zubereitung: 'Brennnesseln in Apfelessig 2 Wochen ziehen lassen, abseihen. Nach der Haarwäsche als Spülung verwenden (2 EL auf 1L Wasser). Stärkt die Kopfhaut und verleiht Glanz.' },
        { name: 'Hirse-Hafer-Brei für die Haare', zutaten: '40g Hirseflocken, 20g Haferflocken, 200ml Pflanzenmilch, 1 EL Kürbiskerne, 1 TL Honig, Zimt', zubereitung: 'Flocken in Milch warm kochen, mit Kürbiskernen, Honig und Zimt toppen. Hirse liefert Silizium, Hafer nährt die Nerven, Kürbiskerne liefern Zink.' }
      ]
    },
    fasten: {
      text: "Bei Haarausfall ist strenges Fasten kontraindiziert -- es kann den Haarausfall sogar verschlimmern, da dem Körper Nährstoffe fehlen und er die Haare als 'nicht lebensnotwendig' einstuft. Sanfte Reinigungsformen, die die Nährstoffversorgung nicht gefährden, sind zu bevorzugen.",
      formen: [
        "Intermittierendes Fasten 14:10 (maximal) -- nicht zu lang, um Nährstoffmangel zu vermeiden",
        'Basenfasten mit nährstoffdichter Kost -- reinigt ohne auszuhungern',
        "Zucker-Fasten -- reduziert die hormonelle Dysbalance, die Haarausfall fördert"
      ],
      reinigung: [
        'Kopfhautmassage mit Rosmarinöl -- fördert die Durchblutung der Follikel täglich',
        'Kopfhaut-Peeling mit feinem Meersalz -- entfernt Ablagerungen und regt die Durchblutung an',
        "Darmreinigung -- die Nährstoffaufnahme beginnt im Darm, eine gestörte Darmflora verhindert die Absorption",
        "Leberreinigung -- die Leber reguliert Hormone und Entgiftung, beides beeinflusst das Haarwachstum"
      ]
    },
    bewegung: {
      text: "Bewegung fördert die Durchblutung -- auch der Kopfhaut -- und reguliert den Hormonhaushalt. Stressreduzierende Bewegung ist besonders wertvoll, da Stress einer der häufigsten Haarausfall-Trigger ist. Übermäßiges, erschöpfendes Training kann Haarausfall allerdings verschlimmern.",
      praktiken: [
        "Yoga-Umkehrhaltungen (Kopfstand, Schulterstand, Hund) -- fördern die Durchblutung der Kopfhaut",
        "Tägliche Kopfhautmassage (5 Min) -- die einfachste und wirksamste Maßnahme für die Follikeldurchblutung",
        'Qi Gong -- stressreduzierend und durchblutungsfördernd',
        'Moderater Ausdauersport -- reguliert Hormone und Stresslevel',
        "Atemübungen -- reduzieren Cortisol, das Haarausfall fördert"
      ]
    },
    geist: {
      einheit: "Deine Haare sind ein Spiegel deiner Lebenskraft und deiner Verbindung zur geistigen Welt. Wenn sie fallen, fragt das Leben: Was raubt dir die Kraft? Was stresst dich über deine Grenzen? Haare wachsen in ihrem eigenen Rhythmus -- sie lehren dich Geduld, Vertrauen und die Gewissheit, dass Wachstum Zeit braucht.",
      affirmationen: [
        "Mein Haar wächst stark und gesund -- genährt von innen.",
        "Meine Lebenskraft strömt bis in jede Haarspitze.",
        "Ich lasse den Stress los, der meine Haare kostet.",
        "Mein Körper hat alles, was er braucht, um kräftiges Haar zu bilden."
      ],
      meditation: "Setze dich ruhig hin und lege beide Hände auf deine Kopfhaut. Spüre die Wärme deiner Hände. Visualisiere, wie warmes, goldenes Licht aus deinen Handflächen in deine Kopfhaut fließt -- jeden Haarfollikel nährt und stärkt. Sieh in deiner Vorstellung, wie neue Haare sprießen, kräftig und glänzend. Sage innerlich: 'Meine Haare sind genährt. Sie wachsen in Fülle.' 5-10 Minuten täglich, am besten in Kombination mit Kopfhautmassage.",
      energie: "Das Kronenchakra (Sahasrara) am Scheitel ist die energetische Verbindung zur Kopfhaut. Haarausfall kann zeigen, dass diese Verbindung gestört ist -- zu viel Denken, zu wenig Fühlen, zu wenig Verbindung nach oben. Violettes Licht auf dem Scheitel, das Mantra OM und Meditation stärken das Kronenchakra. Auch das Stirnchakra (Ajna) beeinflusst den Hormonhaushalt und damit das Haarwachstum."
    },
    produkte: [
      { name: 'Hanfsamen', desc: `Liefern hochwertiges Protein, Omega-3 und Gamma-Linolensäure -- alles Bausteine, die das Haar dringend braucht.`, tags: ['#hanfsamen', '#protein', '#omega3'] },
      { name: 'Schwefel (anorganisch)', desc: `MSM liefert Schwefel für Keratin -- das Hauptprotein der Haare. Stärkt die Haarstruktur von innen.`, tags: ['#schwefel', '#keratin', '#haare'] },
      { name: 'Zeolith / ZeoMont', desc: `Entgiftet und liefert Silizium -- das Mineral, das Haare, Haut und Nägel stärkt.`, tags: ['#zeolith', '#silizium', '#entgiftung'] },
      { name: 'Borax', desc: `Borquelle -- Bor reguliert den Hormonhaushalt und unterstützt die Kalzium- und Magnesium-Verwertung.`, tags: ['#borax', '#hormone', '#mineralien'] },
      { name: 'Baryt', desc: `Bariumsulfat als Spurenelement -- in der Naturheilkunde zur Stärkung der Haargesundheit und des Bindegewebes eingesetzt.`, tags: ['#baryt', '#spurenelement', '#haare'] }
    ]
  },

];
