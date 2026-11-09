// =============================================================================
// knowledge.js -- Detailliertes Wissen für die Heildepot-App
// Expandable/Accordion-Inhalte für Kräuter, Stoffe, Ernährung, Fasten,
// Bewegung, Geist und Traditionen
// =============================================================================

// ---------------------------------------------------------------------------
// KRÄUTER & HEILPFLANZEN
// ---------------------------------------------------------------------------
export const HERB_DETAILS = {
  'Kamille': {
    kurz: 'Entzündungshemmend, krampflösend, beruhigend.',
    detail: `Die Kamille ist eine der ältesten und vielseitigsten Heilpflanzen Europas. Ihre Blüten enthalten ätherische Öle (vor allem Bisabolol und Chamazulen), Flavonoide und Schleimstoffe, die gemeinsam entzündungshemmend, krampflösend und wundheilend wirken. Sie beruhigt den gesamten Verdauungstrakt, lindert Magenkrämpfe und Blähungen und ist ein sanftes Nervenmittel bei innerer Unruhe und Einschlafproblemen. Äußerlich fördert sie die Wundheilung, beruhigt gereizte Haut und hilft bei Augen- und Schleimhautentzündungen. Die Kamille ist so mild, dass sie schon für Säuglige geeignet ist, eine echte Allrounderin der Naturheilkunde.`,
    anwendung: `Als Tee: 2 TL getrocknete Blüten mit 250ml heißem Wasser überbrühen, 10 Minuten zugedeckt ziehen lassen. 3x täglich bei Magenbeschwerden. Äußerlich: Als Sitzbad, Umschlag oder Dampfbad (Inhalation bei Erkältung). Kamillentinktur für unterwegs. Als Öl für Bauchmassagen bei Säuglingen.`,
    sammelzeit: 'Mai bis August, die Blüten bei Vollblüte ernten, wenn die weißen Blätter leicht nach unten zeigen.',
    url: 'https://heilkräuter.de/lexikon/kamille.htm'
  },

  'Brennnessel': {
    kurz: 'Blutreinigend, eisenreich, Nieren stärkend, die Königin der Wildkräuter.',
    detail: `Die Brennnessel ist eine der nährstoffreichsten Pflanzen überhaupt. Sie enthält mehr Eisen als Spinat, reichlich Vitamin C (das die Eisenaufnahme fördert), Kieselsäure für Haut, Haare und Nägel sowie wertvolles Chlorophyll. Als Blutreinigungsmittel regt sie die Nierentätigkeit an und hilft dem Körper, Schlacken und Harnsäure auszuscheiden. Sie wirkt bei Arthritis, Gicht, Hautproblemen und Müdigkeit. Die Samen der Brennnessel gelten als natürliches Tonikum, sie stärken die Nebennieren und steigern die Vitalität.`,
    anwendung: `Als Tee: 2-3 TL frische oder getrocknete Blätter mit 250ml heißem Wasser, 8 Minuten ziehen lassen. Für eine Kur 4-6 Wochen lang 3 Tassen täglich trinken. Die jungen Blätter (Frühjahr) als Spinatersatz kochen oder in Smoothies geben. Brennnesselsamen als Tonikum: 1 EL täglich über das Essen streuen.`,
    sammelzeit: 'Blätter: März bis Juni (junge Triebe). Samen: August bis Oktober.',
    url: 'https://heilkräuter.de/lexikon/brennessel.htm'
  },

  'Johanniskraut': {
    kurz: 'Das Licht-Kraut, natürliches Antidepressivum und Nervenmittel.',
    detail: `Johanniskraut (Hypericum perforatum) ist das wichtigste pflanzliche Mittel bei leichten bis mittelschweren Depressionen. Der Wirkstoff Hypericin hemmt die Wiederaufnahme von Serotonin, Noradrenalin und Dopamin, ähnlich wie synthetische Antidepressiva, aber sanfter. Die Pflanze hat eine besondere Beziehung zum Licht: Sie blüht zur Sommersonnenwende und speichert quasi das Sonnenlicht. Johanniskrautöl (Rotöl) ist ein hervorragendes Wundheilmittel für Verbrennungen, Nervenschmerzen und Muskelverspannungen. Wichtig: Johanniskraut erhöt die Lichtempfindlichkeit der Haut und kann Wechselwirkungen mit Medikamenten haben (Pille, Bluverdünner, andere Antidepressiva).`,
    anwendung: `Als Tee: 2 TL Kraut mit 250ml heißem Wasser, 10 Minuten ziehen. 2-3 Tassen täglich über mindestens 4-6 Wochen, die Wirkung baut sich langsam auf. Als Rotöl (aeusserlich): Frische Blüten in Olivenöl 6 Wochen in der Sonne ziehen lassen. Das leuchtend rote Öl auf Wunden, Narben oder schmerzende Stellen auftragen. Als Fertigpräparat: 300-900mg Extrakt täglich (standardisiert auf Hypericin).`,
    sammelzeit: 'Juni bis August, idealerweise um die Sommersonnenwende (21. Juni).',
    url: 'https://heilkräuter.de/lexikon/johanniskraut.htm'
  },

  'Baldrian': {
    kurz: 'Das stärkste pflanzliche Beruhigungsmittel: Schlaf und tiefe Entspannung.',
    detail: `Baldrian (Valeriana officinalis) ist seit der Antike als Beruhigungs- und Schlafmittel bekannt. Die Wurzel enthält Valerensäure, die an GABA-Rezeptoren im Gehirn andockt, dem gleichen System, an dem auch Benzodiazepine wirken, nur viel sanfter und ohne Suchtpotenzial. Baldrian verkürzt die Einschlafzeit, verbessert die Schlafqualität und löst nervös bedingte Verkrampfungen. Er wirkt auch bei Prüfungsangst, nervöser Unruhe und stressbedingten Magenbeschwerden. Die volle Wirkung entfaltet sich nach 2-4 Wochen regelmäßiger Einnahme.`,
    anwendung: `Als Tee: 1 TL zerkleinerte Wurzel kalt ansetzen (12 Stunden), dann leicht erwärmen und abseihen, so bleiben die ätherischen Öle erhalten. Als Tinktur: 30-50 Tropfen abends. Als Badezusatz: 100g Wurzel auf ein Vollbad, herrlich entspannend. Fertigpräparate: 300-600mg Extrakt, 30-60 Minuten vor dem Schlafengehen.`,
    sammelzeit: 'September bis Oktober (Wurzeln im Herbst graben, wenn die oberirdischen Teile absterben).',
    url: 'https://heilkräuter.de/lexikon/baldrian.htm'
  },

  'Salbei': {
    kurz: 'Keimtötend, schweißhemmend, hormonstabilisierend.',
    detail: `Der Name Salbei kommt von "salvare", heilen. Diese Pflanze war im Mittelalter so geschätzt, dass man sagte: "Warum soll ein Mensch sterben, in dessen Garten Salbei wächst?" Salbei enthält Thujon, Campher und Rosmarinsäure, die stark antibakteriell und antiviral wirken. Er ist das beste pflanzliche Mittel gegen übermassiges Schwitzen (auch Nachtschweiß in den Wechseljahren), lindert Halsentzündungen und reguliert weibliche Hormone. Salbeitee hilft beim Abstillen, weil er die Milchproduktion hemmt. In der TCM gilt Salbei als Qi-Tonikum.`,
    anwendung: `Zum Gurgeln bei Halsschmerzen: Starken Tee aufbrühen (3 TL auf 250ml), 15 Minuten ziehen, lauwarm gurgeln. Gegen Schwitzen: 2 Tassen kalten Salbeitee über den Tag verteilt trinken. Als Küchen-Heilmittel: Frische Blätter in Butter braten (köstlich und heilsam). Nicht in der Schwangerschaft und Stillzeit (außer zum Abstillen).`,
    sammelzeit: 'Mai bis September, vor der Blüte ernten für höchsten Wirkstoffgehalt.',
    url: 'https://heilkräuter.de/lexikon/salbei.htm'
  },

  'Thymian': {
    kurz: 'Der stärkste pflanzliche Antibiotikum-Ersatz: Atemwege und Immunsystem.',
    detail: `Thymian ist ein kraftvolles Heilkraut mit starker antibakterieller, antiviraler und schleilösender Wirkung. Sein ätherisches Öl (Thymol) ist in Laborversuchen wirksamer gegen bestimmte Bakterien als manche Antibiotika. Er ist das Mittel der Wahl bei Husten, Bronchitis, Keuchhusten und allen Atemwegsinfekten. Thymian löst festsitzenden Schleim, desinfiziert die Atemwege und stärkt gleichzeitig das Immunsystem. Auch bei Magen-Darm-Infekten, Blasenetzündungen und Pilzinfektionen zeigt er Wirkung.`,
    anwendung: `Als Tee bei Husten: 2 TL frisches oder 1 TL getrocknetes Kraut mit 250ml heißem Wasser, 10 Minuten zugedeckt ziehen lassen. Mit Honig süsssen. 3-5 Tassen täglich bei akutem Infekt. Als Dampfbad: Handvoll Thymian in heißem Wasser, Kopf mit Handtuch bedecken, 10 Minuten inhalieren. Als Brustwickel: Starken Thymiantee auf Tuch, warm auf die Brust legen.`,
    sammelzeit: 'Juni bis August, kurz vor oder während der Blüte.',
    url: 'https://heilkräuter.de/lexikon/thymian.htm'
  },

  'Pfefferminze': {
    kurz: 'Erfrischend, krampflösend, schmerzlindernd: Kopf und Bauch.',
    detail: `Die Pfefferminze vereint kühlende und krampflösende Eigenschaften auf einzigartige Weise. Ihr Hauptwirkstoff Menthol aktiviert Kälterezeptoren in der Haut und Schleimhaut, was schmerzlindernd wirkt. Bei Kopfschmerzen ist Pfefferminzöl (auf die Schlefen aufgetragen) ähnlich wirksam wie Paracetamol, das zeigen klinische Studien. Im Magen-Darm-Trakt entspannt sie die glatte Muskulatur und hilft bei Blähungen, Völlegefühl und Reizdarmsyndrom. Als Tee erfrischt sie den Geist und fördert die Konzentration.`,
    anwendung: `Als Tee: 1-2 TL frische oder getrocknete Blätter, 8 Minuten ziehen lassen. Nicht länger, sonst wird er bitter. Bei Kopfschmerzen: Reines ätherisches Pfefferminzöl auf Schlefen und Nacken auftragen (nicht in die Augen!). Bei Blähungen: Pfefferminzölkapseln (magensaftresistent) nach dem Essen. Bei Übelkeit: An frischer Minze riechen oder Tee in kleinen Schlucken trinken.`,
    sammelzeit: 'Juni bis September, vor der Blüte für den höchsten Mentholgehalt.',
    url: 'https://heilkräuter.de/lexikon/pfefferminze.htm'
  },

  'Ingwer': {
    kurz: 'Wärmend, entzündungshemmend, verdauungsfördernd, die Universalwurzel.',
    detail: `Ingwer (Zingiber officinale) ist eine der am besten erforschten Heilpflanzen weltweit. Seine Scharfstoffe: Gingerole und Shogaole, wirken stark entzündungshemmend (vergleichbar mit Ibuprofen), schmerzlindernd und wärmend. Ingwer regt die Verdauung an, hilft gegen Übelkeit (auch Reisekrankheit und Schwangerschaftsübelkeit), senkt Cholesterin und Blutzucker und stärkt das Immunsystem. In der Ayurvedischen Medizin gilt Ingwer als "universelle Medizin", er entfacht das Verdauungsfeuer (Agni) und löst Ama (Schlacken).`,
    anwendung: `Frisch als Tee: Daumengrösses Stück Ingwer in Scheiben schneiden, mit 500ml Wasser 15 Minuten köcheln lassen. Mit Zitrone und Honig servieren. Bei Übelkeit: Frischen Ingwer kauen oder kandiert lutschen. Als Wärmemittel: Ingwertee mit einer Prise Cayennepfeffer bei Kälte und beginnender Erkältung. Tagesdosis: 2-4g frischer Ingwer oder 500-1000mg als Pulver/Kapsel.`,
    sammelzeit: 'Ganzjährig im Handel. Eigener Anbau: Im Frühling Knolle in Topf pflanzen, im Herbst ernten.',
    url: 'https://heilkräuter.de/lexikon/ingwer.htm'
  },

  'Kurkuma': {
    kurz: 'Der goldene Heiler, stärkstes natürliches Entzündungsmittel.',
    detail: `Kurkuma (Curcuma longa) enthält den Wirkstoff Curcumin, der in über 10.000 wissenschaftlichen Studien untersucht wurde. Curcumin hemmt NF-kappaB, einen zentralen Entzündungsschalter in unseren Zellen, und wirkt damit bei nahezu allen entzündlichen Erkrankungen: Arthritis, Darmerkrankungen, Herz-Kreislauf-Erkrankungen und sogar Krebs (als Begleittherapie). Es schützt die Leber, fördert die Gallensekretion und ist neuroprotektiv. Das große Problem: Curcumin wird schlecht aufgenommen. Die Lösung: Immer mit schwarzem Pfeffer (Piperin erhöht die Aufnahme um 2000%) und Fett kombinieren.`,
    anwendung: `Goldene Milch: 1 TL Kurkuma, 1/2 TL Zimt, Prise schwarzer Pfeffer, 1 TL Kokosöl in warmer Pflanzenmilch verrühren. Täglich abends trinken. Als Supplement: 500-1000mg Curcumin-Extrakt mit Piperin, 2-3x täglich zu den Mahlzeiten. In der Küche: Großzügig in Currys, Suppen und Smoothies verwenden. Bei akuten Entzündungen höhere Dosen (bis 8g Curcumin täglich unter therapeutischer Begleitung).`,
    sammelzeit: 'Ganzjährig als Pulver oder frische Wurzel. Frische Kurkumawurzel ist noch wirksamer als Pulver.',
    url: 'https://heilkräuter.de/lexikon/kurkuma.htm'
  },

  'Löweenzahn': {
    kurz: 'Leber- und Nierentonikum, Bitterstoff-Kraftwerk, Frühjahrskur-Pflanze.',
    detail: `Der Löwenzahn ist weit mehr als "Unkraut", er ist eine der wertvollsten heimischen Heilpflanzen. Seine Bitterstoffe (Taraxacin) regen die Leber- und Gallentätigkeit kräftig an und fördern die Entgiftung. Die Blätter wirken harntreibend (daher der Volksname "Bettseicher"), ohne dabei Kalium auszuschwemmen, im Gegensatz zu synthetischen Diuretika. Die Wurzel enthält Inulin, einen präbiotischen Ballaststoff, der die gesunde Darmflora nährt. Als Frühjahrskur reinigt Löwenzahn das Blut, unterstützt die Leber nach dem Winter und bringt den Stoffwechsel in Schwung.`,
    anwendung: `Als Frühjahrskur: 4-6 Wochen lang täglich frische junge Blätter im Salat essen oder als Presssaft (2 EL täglich). Wurzeltee: 1-2 TL getrocknete Wurzel mit 250ml kaltem Wasser ansetzen, aufkochen, 10 Minuten ziehen lassen. 2-3 Tassen täglich vor den Mahlzeiten. Löwenzahnwurzeln geröstet sind ein köffeinfreier Kaffeeersatz mit Leberwirkung.`,
    sammelzeit: 'Blätter: März bis Mai (vor der Blüte am zartesten). Wurzeln: Oktober bis November oder März.',
    url: 'https://heilkräuter.de/lexikon/löwenzahn.htm'
  },

  'Schafgarbe': {
    kurz: 'Die "Bauchwehpflanze", heilend für Frauen, Verdauung und Wunden.',
    detail: `Die Schafgarbe (Achillea millefolium) trägt den Namen des griechischen Helden Achilles, der sie zur Wundheilung einsetzte. Sie enthält Azulen (wie die Kamille), Bitterstoffe und Gerbstoffe. Ihr Haupteinsatzgebiet ist die Frauenheilkunde: Sie reguliert die Menstruation, lindert Krämpfe und hilft bei zu starker oder zu schwacher Blutung. Im Verdauungstrakt regt sie die Gallensekretion an und hilft bei Appetitlosigkeit, Völlegefühl und Magenkrämpfen. Äußerlich fördert sie die Wundheilung und stillt Blutungen.`,
    anwendung: `Als Frauentee: 2 TL Kraut mit 250ml heißem Wasser, 10 Minuten zugedeckt ziehen lassen. Ab der zweiten Zyklushälfte 2-3 Tassen täglich. Für die Verdauung: Als Bittermittel 30 Minuten vor dem Essen trinken. Äußerlich: Frische Blätter zerreiben und auf kleine Wunden oder Insektenstiche legen. Als Sitzbad bei Unterleibsbeschwerden.`,
    sammelzeit: 'Juni bis September, das blühende Kraut ernten.',
    url: 'https://heilkräuter.de/lexikon/schafgarbe.htm'
  },

  'Spitzwegerich': {
    kurz: 'Natürliches Antibiotikum und Hustenmittel, wächst an jedem Wegrand.',
    detail: `Der Spitzwegerich ist die wichtigste heimische Hustenpflanze. Seine Schleimstoffe legen sich wie ein schützender Film über gereizte Schleimhäute, während das Glykosid Aucubin antibakteriell und entzündungshemmend wirkt. Er hilft bei allen Formen von Husten, trockenem Reizhusten ebenso wie produktivem Husten. Die frischen Blätter sind ein geniales Erste-Hilfe-Mittel in der Natur: Zerrieben und auf Insektenstiche oder kleine Wunden gelegt, lindern sie sofort Schwellung und Schmerz. Der Spitzwegerich wurde 2014 zur Arzneipflanze des Jahres gewählt.`,
    anwendung: `Als Hustensirup: Frische Blätter schichtweise mit Honig in ein Glas schichten, 2-3 Monate ziehen lassen. Bei Husten: 3x täglich 1 TL. Als Tee: 2 TL getrocknetes Kraut, 10 Minuten ziehen lassen, mit Honig. Als Erste-Hilfe-Pflanze: Frisches Blatt zwischen den Fingern zerreiben, auf Insektenstich oder Brennnesselquaddel drücken, wirkt sofort!`,
    sammelzeit: 'April bis September. Die Blätter vor der Blüte sind am wirkstoffreichsten.',
    url: 'https://heilkräuter.de/lexikon/spitzwegerich.htm'
  },

  'Holunder': {
    kurz: 'Der Schutzbaum: Immunbooster bei Erkältung und Grippe.',
    detail: `Der Schwarze Holunder (Sambucus nigra) war in der germanischen Tradition ein heiliger Baum, man stellte Hausaltäre unter ihn und bat die "Frau Holle" um Schutz. Medizinisch sind sowohl die Blüten als auch die Beeren hochpotent. Die Blüten wirken schweißtreibend und fiebersenkend, ideal bei beginnender Erkältung. Die Beeren enthalten extrem viel Vitamin C und Anthocyane (starke Antioxidantien). Holunderbeerextrakt verkürzt laut Studien die Dauer von Grippe um durchschnittlich 4 Tage und reduziert die Schwere der Symptome deutlich.`,
    anwendung: `Holunderblüentee bei Erkältung: 2 TL Blüten mit 250ml heißem Wasser, 10 Minuten ziehen lassen, heiß trinken und ins Bett legen (schweißtreiben). Holunderbeersirup: Beeren mit wenig Wasser aufkochen, durch ein Tuch pressen, mit Honig einkochen. Bei Grippe: 4x täglich 1 EL. Wichtig: Rohe Beeren niemals essen, sie enthalten Sambunigrin (leicht giftig). Immer erhitzen!`,
    sammelzeit: 'Blüten: Juni bis Juli. Beeren: September bis Oktober (wenn sie tiefschwarz und weich sind).',
    url: 'https://heilkräuter.de/lexikon/holunder.htm'
  },

  'Ringelblume': {
    kurz: 'Die goldene Wundheilerin: Haut, Narben, Entzündungen.',
    detail: `Die Ringelblume (Calendula officinalis) ist die wichtigste Wundheilpflanze der europäischen Naturheilkunde. Ihre Triterpensaponine, Flavonoide und Carotinoide fördern die Zellneubildung, hemmen Entzündungen und wirken antimikrobiell. Sie ist das Mittel der Wahl bei schlecht heilenden Wunden, Verbrennungen, Sonnenbrand, Ekzemen, Akne und Narben. Innerlich als Tee unterstützt sie die Leber, stärkt die Lymphe und reguliert den weiblichen Zyklus. Ringelblumensalbe gehört in jede Hausapotheke.`,
    anwendung: `Ringelblumensalbe (selbst gemacht): Blüten in Olivenöl 3 Wochen ziehen lassen, abseihen, mit Bienenwachs andicken. Auf Wunden, Hautreizungen, rissige Haut auftragen. Als Tee: 1-2 TL Blüten mit heißem Wasser, 10 Minuten ziehen. Bei Leberbeschwerden oder Zyklusunregelmäßigkeiten. Als Mundspülung bei Zahnfleischentzündung.`,
    sammelzeit: 'Juni bis Oktober, die voll geöffneten Blütenköpfe pflucken.',
    url: 'https://heilkräuter.de/lexikon/ringelblume.htm'
  },

  'Lavendel': {
    kurz: 'Beruhigend, angstlösend, hautpflegend, der Duft der inneren Ruhe.',
    detail: `Lavendel (Lavandula angustifolia) ist eines der vielseitigsten und am besten erforschten ätherischen Öle. Sein Hauptwirkstoff Linalool wirkt direkt auf das limbische System im Gehirn und reduziert Angst, innere Unruhe und Schlaflosigkeit. Klinische Studien zeigen, dass Lavendelöl-Kapseln (Silexan/Lasea) bei Angststörungen ähnlich wirksam sind wie niedrig dosierte Benzodiazepine, ohne Nebenwirkungen und Suchtpotenzial. Äußerlich heilt Lavendelöl Verbrennungen, Insektenstiche und Hautreizungen. Es ist eines der wenigen ätherischen Öle, die pur auf die Haut aufgetragen werden können.`,
    anwendung: `Als Schlafhilfe: 2-3 Tropfen ätherisches Öl auf das Kopfkissen oder in einen Diffuser. Als Tee: 1-2 TL Blütem, 5-8 Minuten ziehen lassen (nicht länger, sonst bitter). Bei Angstzuständen: Fertigpräparat Lasea (80mg Lavendelöl täglich). Bei Verbrennungen/Insektenstichen: 1-2 Tropfen reines ätherisches Öl direkt auftragen. Als Bad: Handvoll Blüten in ein Stoffsäckchen, ins Badewasser hängen.`,
    sammelzeit: 'Juli bis August, die Blütenstiele kurz vor dem vollen Aufblühen schneiden.',
    url: 'https://heilkräuter.de/lexikon/lavendel.htm'
  },

  'Echinacea': {
    kurz: 'Der Immunstimulator, bei Erkältung und zur Abwehrstärkung.',
    detail: `Echinacea (Sonnenhut) war eine der wichtigsten Heilpflanzen der nordamerikanischen Ureinwohner. Sie aktiviert das Immunsystem auf mehreren Ebenen: Sie erhöt die Anzahl weißer Blutkörperchen, steigert die Phagozytose (das "Auffressen" von Erregern) und stimuliert die Interferon-Produktion. Studien zeigen, dass Echinacea die Erkältungsdauer um 1-4 Tage verkürzen kann, besonders wenn sie bei den allerersten Symptomen eingenommen wird. Es gibt drei Arten: E. purpurea (am besten erforscht), E. angustifolia und E. pallida. Wichtig: Echinacea nicht dauerhaft nehmen, sondern stoßweise bei Bedarf.`,
    anwendung: `Bei beginnender Erkältung: Sofort Echinacea-Tinktur einnehmen, erste Stunde alle 30 Minuten 20-30 Tropfen, dann 3x täglich für 7-10 Tage. Als Tee: 1 TL Wurzel oder Kraut, 10 Minuten ziehen lassen. Vorbeugend: 2-3 Wochen einnehmen, dann 1 Woche Pause. Nicht länger als 8 Wochen am Stück. Nicht bei Autoimmunerkrankungen oder Immunsuppression.`,
    sammelzeit: 'Kraut: Juli bis September. Wurzel: Herbst des 3.-4. Lebensjahres.',
    url: 'https://heilkräuter.de/lexikon/echinacea.htm'
  },

  'Melisse': {
    kurz: 'Beruhigend, antiviral, stimmungsaufhellend, die sanfte Nervenpflanze.',
    detail: `Die Zitronenmelisse (Melissa officinalis) ist ein sanftes, aber effektives Nervenmittel. Ihre Rosmarinsäure und ätherischen Öle beruhigen das vegetative Nervensystem, senken die Herzfrequenz bei nervöser Tachykardie und helfen bei stressbedingten Magen-Darm-Beschwerden. Besonders wertvoll: Melisse wirkt antiviral gegen Herpes-Simplex-Viren. Melissenextrakt (aeusserlich angewendet) verkürzt Herpesbläschen deutlich und verhindert Ausbrüche. Die Pflanze riecht herrlich zitronig und hebt die Stimmung, ein echtes Gute-Laune-Kraut.`,
    anwendung: `Als Beruhigungstee: 2-3 TL frische (oder 1-2 TL getrocknete) Blätter mit 250ml heißem Wasser, 10 Minuten zugedeckt ziehen lassen. Abends bei Einschlafproblemen. Bei Herpes: Melissenextrakt-Creme (z.B. Lomaherpan) mehrmals täglich auf die betroffene Stelle. Kombination mit Baldrian verstärkt die schlaffaordernde Wirkung. Bei nervöser Unruhe: Tinktur, 3x täglich 30-40 Tropfen.`,
    sammelzeit: 'Mai bis September, die Blätter vor der Blüte ernten (höchster Gehalt an ätherischem Öl).',
    url: 'https://heilkräuter.de/lexikon/melisse.htm'
  },

  'Arnika': {
    kurz: 'Das Erste-Hilfe-Mittel bei Verletzungen, Prellungen und Schwellungen.',
    detail: `Arnika (Arnica montana) ist das wichtigste Mittel bei stumpfen Verletzungen. Ihre Sesquiterpenlactone (Helenalin) wirken stark entzündungshemmend und schmerzlindernd. Sie hilft bei Prellungen, Verstauchungen, Blutergüssen, Muskelkater und Schwellungen. Arnika wird fast ausschließlich aeusserlich angewendet, innerlich ist sie in höherer Dosierung giftig. In der Homöopathie ist Arnica C30 eines der am häufigsten verwendeten Mittel: vor und nach Operationen, bei Schock, Verletzungen jeder Art und Überanstrengung. Die Pflanze steht unter Naturschutz und darf nicht wild gepflückt werden.`,
    anwendung: `Äußerlich als Salbe oder Gel: Bei Prellungen, Verstauchungen und Muskelkater mehrmals täglich auftragen (nicht auf offene Wunden!). Als Umschlag: 1 EL Arnikatinktur auf 250ml Wasser, Tuch tränken und auflegen. Homöopathisch: Arnica C30-3 Globuli nach Verletzungen, vor/nach Operationen. Als Mundspülung bei Zahnfleischentzündung (verdünnte Tinktur).`,
    sammelzeit: 'Juni bis August (geschützte Pflanze, nur aus Anbau oder als Fertigpräparat verwenden).',
    url: 'https://heilkräuter.de/lexikon/arnika.htm'
  },

  'Weißdorn': {
    kurz: 'Das Herzmittel der Natur, stärkt und schützt das Herz.',
    detail: `Weißdorn (Crataegus) ist die wichtigste Herzpflanze der westlichen Pflanzenheilkunde. Seine Procyanidine und Flavonoide stärken den Herzmuskel, verbessern die Durchblutung der Herzkranzgefäße und regulieren den Herzrhythmus. Er wirkt sowohl bei zu niedrigem als auch bei zu hohem Blutdruck normalisierend. Weißdorn ist eines der wenigen pflanzlichen Mittel, das auch von der Schulmedizin anerkannt wird, bei leichter Herzinsuffizienz (NYHA I-II). Die Wirkung setzt langsam ein und baut sich über Wochen auf. Weißdorn hat praktisch keine Nebenwirkungen und ist auch in Kombination mit Herzmedikamenten sicher.`,
    anwendung: `Als Tee: 1-2 TL Blüten und Blätter (oder zerkleinerte Früchte) mit 250ml heißem Wasser, 15-20 Minuten ziehen lassen. 2-3 Tassen täglich über mindestens 6-8 Wochen. Als Tinktur: 3x täglich 20-40 Tropfen. Als Fertigpräparat: 300-900mg Extrakt täglich (standardisiert auf Procyanidine). Vorbeugend ab dem 50. Lebensjahr empfehlenswert.`,
    sammelzeit: 'Blüten und Blätter: Mai bis Juni. Früchte: September bis Oktober (leuchtend rot).',
    url: 'https://heilkräuter.de/lexikon/weißdorn.htm'
  },

  'Mariendistel': {
    kurz: 'Die Leberschutzpflanze Nr. 1, regeneriert und entgiftet die Leber.',
    detail: `Die Mariendistel (Silybum marianum) enthält den Wirkstoffkomplex Silymarin, der die Leber auf einzigartige Weise schützt und regeneriert. Silymarin stabilisiert die Leberzellmembranen, sodass Gifte nicht in die Zellen eindringen können. Gleichzeitig regt es die Neubildung von Leberzellen an, die Leber ist das einzige Organ, das sich vollständig regenerieren kann, und Silymarin beschleunigt diesen Prozess. Klinisch eingesetzt bei Leberzirrhose, Fettleber, Hepatitis, Alkoholschaden und als Begleittherapie bei Chemotherapie. Auch vorbeugend bei Medikamenteneinnahme und Alkoholkonsum hoechst sinnvoll.`,
    anwendung: `Als Fertigpräparat: 200-400mg Silymarin-Extrakt (standardisiert auf 70-80% Silymarin), 2-3x täglich zu den Mahlzeiten. Als Leberkur: 6-8 Wochen Einnahme, idealerweise im Frühling. Die Samen können auch im Mörser zerstoßen und über das Essen gestreut werden (1-2 TL täglich). Als Tee ist die Wirkung geringer, da Silymarin nicht gut wasserlöslich ist.`,
    sammelzeit: 'August bis September (die reifen Samen ernten, wenn die Blütenköpfe trocken werden).',
    url: 'https://heilkräuter.de/lexikon/mariendistel.htm'
  },

  'Beifuß': {
    kurz: 'Verdauungsfeuer, Frauenheilkunde, schamanische Räucherpflanze.',
    detail: `Der Beifuß (Artemisia vulgaris) ist eine uralte Heilpflanze, die schon von Hippokrates beschrieben wurde. Seine Bitterstoffe regen die Verdauung kräftig an, fördern den Gallenfluss und helfen bei Appetitlosigkeit und Völlegefühl. In der Frauenheilkunde reguliert er den Zyklus und lindert Menstruationsbeschwerden. In der TCM wird Beifuß als Moxakraut verwendet, zu kleinen Kegeln geformt und auf Akupunkturpunkten abgebrannt, um wärmende Energie zuzuführen. Schamanische Traditionen weltweit nutzen Beifuß zum Räuchern für Reinigung und Traumarbeit.`,
    anwendung: `Als Verdauungstee: 1 TL Kraut mit 250ml heißem Wasser, 5-8 Minuten ziehen lassen (bei längerem Ziehen wird er sehr bitter). Vor den Mahlzeiten trinken. Zum Räuchern: Getrockneten Beifuß in einer feuerfesten Schale anzünden, den Rauch durch Raeume ziehen lassen (energetische Reinigung). Nicht in der Schwangerschaft anwenden (wehenfördernd)!`,
    sammelzeit: 'Juli bis September, das blühende Kraut ernten.',
    url: 'https://heilkräuter.de/lexikon/beifuß.htm'
  },

  'Wermut': {
    kurz: 'Der starkste Bitterstoff: Parasitenkur, Verdauung, Malaria.',
    detail: `Wermut (Artemisia absinthium) ist das bitterste heimische Kraut und eines der mächtigsten Verdauungsmittel. Sein Bitterwert liegt bei 10.000-25.000 (zum Vergleich: Enzian hat 10.000). Wermut regt die gesamte Verdauung an: Speichelfluss, Magensaftsekretion, Gallenproduktion und Darmmotilität. Sein Inhaltsstoff Artemisinin (besonders in der verwandten Art Artemisia annua) ist das wirksamste Malariamittel der Welt, ein Nobelpreis wurde dafür verliehen. Wermut ist auch ein traditionelles Antiparasitikum und wird in Parasitenkuren eingesetzt.`,
    anwendung: `Als Tee: Nur 1/2 TL Kraut mit 250ml heißem Wasser, 5 Minuten ziehen, er ist extrem bitter. Bei Verdauungsschwäche 30 Minuten vor dem Essen eine kleine Tasse trinken. Parasitenkur: Wermut-Tinktur in Kombination mit Nelken und Schwarzwalnuss (nach Dr. Hulda Clark). Maximal 2-3 Wochen am Stück anwenden. Nicht in der Schwangerschaft, bei Magengeschwüren oder Epilepsie.`,
    sammelzeit: 'Juli bis August, das obere blühende Kraut ernten.',
    url: 'https://heilkräuter.de/lexikon/wermut.htm'
  },

  'Beinwell': {
    kurz: 'Der Knochenheiler: Brüche, Zerrungen, Gelenkbeschwerden.',
    detail: `Beinwell (Symphytum officinale) trägt seinen Namen zu Recht: "Bein" stand im Altdeutschen für Knochen, "well" für zusammenwachsen. Der Hauptwirkstoff Allantoin beschleunigt die Zellteilung und damit die Wundheilung und Knochenregeneration enorm. Beinwell fördert die Kallusbildung bei Knochenbrüchen und wird bei Prellungen, Zerrungen, Verstauchungen, Sehnenentzündungen und Gelenkarthrose eingesetzt. Klinische Studien zeigen, dass Beinwellsalbe bei Kniearthrose ähnlich wirksam ist wie Diclofenac-Gel. Nur aeusserlich anwenden, die enthaltenen Pyrrolizidinalkaloide können bei innerlicher Einnahme die Leber schädigen.`,
    anwendung: `Äußerlich als Salbe/Gel: 3-4x täglich auf die betroffene Stelle auftragen. Bei Knochenbrüchen: Beinwellumschlag: Wurzelbrei auf ein Tuch streichen, um die Bruchstelle wickeln (über dem Gips bzw. nach Gipsabnahme). Als Wurzelumschlag bei Arthrose: Frische Wurzel reiben, mit etwas warmem Wasser zu Brei verarbeiten, dick auftragen, mit Tuch umwickeln, über Nacht wirken lassen. Nicht auf offene Wunden auftragen.`,
    sammelzeit: 'Wurzeln: Oktober bis März (im Herbst oder zeitigem Frühjahr). Blätter: Mai bis Juli.',
    url: 'https://heilkräuter.de/lexikon/beinwell.htm'
  },

  'Schafsgarbe': {
    kurz: 'Blutstillend, krampflösend, leberschützend, die Alleskönnerin.',
    detail: `Siehe Schafgarbe, diese Pflanze wird unter "Schafgarbe" geführt.`,
    anwendung: `Siehe Schafgarbe.`,
    sammelzeit: 'Siehe Schafgarbe.',
    url: 'https://heilkräuter.de/lexikon/schafgarbe.htm'
  },

  'Ginkgo': {
    kurz: 'Gehirn-Durchblutung, Gedächtnis, Zellschutz, der älteste Baum der Welt.',
    detail: `Der Ginkgo-Baum ist ein lebendes Fossil, er existiert seit über 250 Millionen Jahren und hat die Dinosaurier überlebt. Seine Blätter enthalten Flavonglykoside und Terpenlactone (Ginkgolide), die die Mikrozirkulation im Gehirn verbessern, das Blut flüssiger machen und als starke Antioxidantien wirken. Ginkgo ist das am besten erforschte pflanzliche Mittel bei altersbedingtem geistigem Abbau, Gedächtnisstörungen, Tinnitus und Schwindel. Die Wirkung setzt langsam ein, man braucht 6-12 Wochen regelmäßige Einnahme für spürbare Effekte.`,
    anwendung: `Als Fertigpräparat: 120-240mg standardisierter Ginkgo-Extrakt (EGb 761) täglich, aufgeteilt in 2-3 Dosen. Mindestens 8-12 Wochen einnehmen. Als Tee ist die Wirkung zu gering, daher ist ein Extrakt empfehlenswert. Nicht zusammen mit Blutverdünnern nehmen (verstärkt die Wirkung). Vorbeugend ab dem 50. Lebensjahr für geistige Fitness sinnvoll.`,
    sammelzeit: 'September bis Oktober (gelbe Herbstblätter, nur aus Anbau).',
    url: 'https://heilkräuter.de/lexikon/ginkgo.htm'
  },

  'Ashwagandha': {
    kurz: 'Indischer Ginseng: Adaptogen gegen Stress, für Kraft und Gelassenheit.',
    detail: `Ashwagandha (Withania somnifera) ist eines der wichtigsten Adaptogene der Ayurvedischen Medizin. Es hilft dem Körper, sich an Stress anzupassen, senkt den Cortisolspiegel und beruhigt das überreizte Nervensystem. Gleichzeitig steigert es Energie und Ausdauer, eine seltene Kombination. Studien zeigen signifikante Verbesserungen bei Angst, Schlaf, Schilddrüsenfunktion (erhöht T3 und T4 bei Unterfunktion), Muskelkraft und männlicher Fertilität (erhöht Testosteron und Spermienqualität). Der Name bedeutet "Geruch des Pferdes", es soll die Stärke und Vitalität eines Pferdes verleihen.`,
    anwendung: `Als Pulver: 3-6g täglich in warmer Milch (traditionell mit Ghee und Honig, "Ashwagandha-Milch"). Als Extrakt (KSM-66 oder Sensoril): 300-600mg täglich, morgens für Energie oder abends für besseren Schlaf. Mindestens 4-8 Wochen einnehmen für volle Wirkung. Nicht bei Schilddrüsenüberfunktion oder in der Schwangerschaft.`,
    sammelzeit: 'In Mitteleuropa nicht heimisch. Als Nahrungsergänzung ganzjährig verfügbar.',
    url: ''
  },

  'Rhodiola Rosea': {
    kurz: 'Rosenwurz, das Adaptogen gegen Erschöpfung und mentale Müdigkeit.',
    detail: `Rhodiola Rosea (Rosenwurz) wächst in den arktischen Regionen Europas und Asiens und hilft dem Körper, extreme Bedingungen zu überstehen. Als Adaptogen steigert es die körperliche und geistige Leistungsfähigkeit, ohne aufzuputschen. Rhodiola erhöht Serotonin und Dopamin im Gehirn, senkt Cortisol und unterstützt die mitochondriale Energieproduktion. Es ist besonders wirksam bei Burnout, chronischer Müdigkeit, Konzentrationsstörungen und depressiver Verstimmung. Russische Kosmonauten und Olympia-Athleten nutzen es seit Jahrzehnten.`,
    anwendung: `Als Extrakt: 200-400mg täglich (standardisiert auf 3% Rosavine und 1% Salidroside). Morgens oder vormittags einnehmen, nicht abends, da es wach machen kann. Bei akutem Stress oder Prüfungsphase: Dosis auf 400-600mg erhöhen. Effekt setzt nach 1-2 Wochen ein. Zyklen: 6-12 Wochen Einnahme, 2-4 Wochen Pause.`,
    sammelzeit: 'Wurzel wird im Herbst nach 5-6 Wachstumsjahren geerntet. Als Supplement ganzjährig.',
    url: ''
  },

  'Mistel': {
    kurz: 'Die geheimnisvolle Halbschmarotzerpflanze: Immunregulation und Krebsbegleitung.',
    detail: `Die Mistel (Viscum album) hat in der europäischen Heilkunde eine besondere Stellung. Rudolf Steiner führte sie in die anthroposophische Medizin als Krebsmittel ein. Mistelpräparate (Iscador, Helixor, abnobaVISCUM) werden in der integrativen Krebstherapie eingesetzt: Sie modulieren das Immunsystem, verbessern die Lebensqualität und reduzieren Nebenwirkungen der Chemotherapie. Mistellektine stimulieren die natürlichen Killerzellen und regen die körpereigene Tumorabwehr an. Außerhalb der Krebstherapie senkt Misteltee leicht den Blutdruck.`,
    anwendung: `Krebsbegleitend: Subkutane Injektionen mit Mistelpräparaten unter ärztlicher Aufsicht (anthroposophische Ärzte). Als Tee bei leichtem Bluthochdruck: 1 TL Mistelkraut kalt ansetzen (12 Stunden in kaltem Wasser), abseihen, leicht erwärmen, 2 Tassen täglich. Wichtig: Mistel nur kalt ansetzen, beim Erhitzen werden Giftstoffe gelöst. In der Schwangerschaft meiden.`,
    sammelzeit: 'Dezember bis Februar (traditionell in der Rauhnachtszeit geerntet).',
    url: 'https://heilkräuter.de/lexikon/mistel.htm'
  },

  'Frauenmantel': {
    kurz: 'Die wichtigste Frauenpflanze Europas: Zyklus, Gebärmutter, Wechseljahre.',
    detail: `Der Frauenmantel (Alchemilla vulgaris) ist die zentrale Pflanze der europäischen Frauenheilkunde. Sein Name in der Alchemie verweist auf die Zauberkraft der Pflanze, die Alchemisten sammelten den Morgentau aus den Blättern für ihre Experimente. Frauenmantel reguliert den gesamten weiblichen Zyklus, stärkt die Gebärmuttermuskulatur, hilft bei PMS, zu starker Regelblutung und Wechseljahrsbeschwerden. Er wirkt zusammenziehend (adstringierend), entzündungshemmend und progesteronähnlich. In der Schwangerschaft ab dem 4. Monat kann er den Geburtskanal vorbereiten.`,
    anwendung: `Als Tee: 2 TL Kraut mit 250ml heißem Wasser, 10-15 Minuten zugedeckt ziehen lassen. 2-3 Tassen täglich. Bei Zyklusbeschwerden: Ab dem Eisprung bis zur Menstruation täglich trinken. Geburtsvorbereitung: Ab der 34. Schwangerschaftswoche täglich 1-2 Tassen (in Kombination mit Himbeerblatter-Tee). Bei Wechseljahrsbeschwerden: Als Langzeit-Tee über mehrere Monate.`,
    sammelzeit: 'Mai bis September, das Kraut während der Blüte sammeln.',
    url: 'https://heilkräuter.de/lexikon/frauenmantel.htm'
  },

  'Himbeerblatter': {
    kurz: 'Gebärmuttertonikum, Geburtsvorbereitung, Mineralienbombe.',
    detail: `Himbeerblätter (Rubus idaeus) sind ein klassisches Uterustonikum, sie stärken und tonisieren die Gebärmuttermuskulatur. In der Geburtsvorbereitung gehören sie zu den meistverwendeten Kräutern weltweit. Sie enthalten reichlich Eisen, Kalzium, Mangan und B-Vitamine. Himbeerblättertee lockert die Beckenmuskulatur, kann Wehen effektiver machen und verkürzt laut Studien die zweite Geburtsphase (Austreibungsphase). Außerhalb der Schwangerschaft helfen sie bei schmerzhafter Menstruation und stärken das weibliche Fortpflanzungssystem allgemein.`,
    anwendung: `Geburtsvorbereitung: Ab der 34. Schwangerschaftswoche beginnen, erst 1 Tasse täglich, ab der 37. Woche 2-3 Tassen. 2 TL Blätter auf 250ml heißes Wasser, 10 Minuten ziehen lassen. Bei Menstruationsbeschwerden: In der zweiten Zyklushälfte 2-3 Tassen täglich. Nicht im ersten Schwangerschaftsdrittel trinken (wehenfördernd)!`,
    sammelzeit: 'Mai bis August, junge Blätter vor der Fruchtreife ernten.',
    url: 'https://heilkräuter.de/lexikon/himbeerblatter.htm'
  },

  'Rosemarin': {
    kurz: 'Durchblutungsfördernd, konzentrationsstärkend, wärmend.',
    detail: `Rosmarin (Rosmarinus officinalis) ist weit mehr als ein Küchenkraut. Sein ätherisches Öl (Cineol, Campher, Borneol) fördert die Durchblutung, steigert den Blutdruck bei Hypotonie und regt das Gehirn an. Schon der Duft von Rosmarin verbessert Gedächtnis und Konzentration: Studien zeigen eine 15-20% bessere Erinnerungsleistung. Rosmarin regt die Gallensekretion an, schützt die Leber und wirkt antioxidativ. Auffällig: Die Bewohner des südfranzosischen Dörfchens Acciaroli (mit überdurchschnittlich vielen Hundertjährigen) verwenden traditionell sehr viel Rosmarin in ihrer Küche.`,
    anwendung: `Zur Kreislaufanregung am Morgen: Rosmarintee (1 TL Blätter, 10 Minuten ziehen) statt Kaffee. Rosmarinbad: 50g Blätter in 1l Wasser aufkochen, abseihen, dem Badewasser zusetzen, macht wach und fördert die Durchblutung. Ätherisches Öl: Auf Schlafen und Handgelenke für Konzentration. Nicht abends verwenden (macht wach). Bei niedrigem Blutdruck als Tee hervorragend.`,
    sammelzeit: 'Ganzjährig (immergrün), am wirkstoffreichsten vor der Blüte im Frühling.',
    url: 'https://heilkräuter.de/lexikon/rosmarin.htm'
  },

  'Süßholz': {
    kurz: 'Die natürliche Cortisol-Pflanze: Nebennieren, Magen, Atemwege.',
    detail: `Süßholzwurzel (Glycyrrhiza glabra) ist die Grundlage von Lakritze und eine der am häufigsten verwendeten Heilpflanzen der TCM und Ayurveda. Glycyrrhizin, ihr Hauptwirkstoff, verlangsamt den Abbau von körpereigenem Cortisol, das macht Süßholz wertvoll bei Nebennierenschwäche und chronischer Erschöpfung. Es schützt die Magenschleimhaut (wirksam bei Gastritis und Magengeschwüren), löst Schleim in den Atemwegen und moduliert das Immunsystem. In der TCM ist Süßholz der "große Harmonisierer", es wird fast jeder Kräutermischung zugesetzt, um die anderen Kräuter in Einklang zu bringen.`,
    anwendung: `Als Tee: 1 TL zerkleinerte Wurzel mit 250ml Wasser aufkochen, 15 Minuten köcheln, abseihen. 1-2 Tassen täglich (süßlich-aromatisch, angenehm). Als DGL-Tabletten (deglycyrrhiziniertes Lakritze): Bei Magengeschwüren ohne die blutdrucksteigernde Wirkung. Maximal 6 Wochen am Stück einnehmen. Nicht bei Bluthochdruck, Kaliummangel oder in der Schwangerschaft.`,
    sammelzeit: 'Wurzeln 3-4 Jahre alter Pflanzen im Herbst graben. In Mitteleuropa aus dem Handel beziehen.',
    url: 'https://heilkräuter.de/lexikon/süßholz.htm'
  },

  'Schwarzkümmel': {
    kurz: '"Heilt alles außer dem Tod", das universelle Heilmittel aus dem Orient.',
    detail: `Schwarzkümmel (Nigella sativa) wird im Islam als Heilpflanze höchster Ordnung verehrt. Modern zeigt die Forschung, warum: Sein Wirkstoff Thymoquinon ist entzündungshemmend, antioxidativ, antiallergsich, blutzuckerregulierend und immunmodulierend. Schwarzkümmelöl hilft bei Allergien (senkt IgE-Antikörper), Asthma, Hauterkrankungen (Neurodermitis, Psoriasis), Verdauungsbeschwerden und als Begleittherapie bei Diabetes. Es stärkt das Immunsystem, ohne Autoimmunreaktionen zu verschlechtern, es moduliert, statt nur zu stimulieren.`,
    anwendung: `Schwarzkümmelöl: 1-2 TL täglich pur einnehmen (am besten morgens nüchtern) oder über Salate geben. Der Geschmack ist gewöhnungsbedürftig, scharf-würzig. In Kapseln: 500-1000mg 2-3x täglich. Bei Allergien: 4-8 Wochen vor der Heuschnupfensaison beginnen. Äußerlich: Bei Hauterkrankungen das Öl direkt auftragen. Für Kinder: Mit Honig mischen (mildert den Geschmack).`,
    sammelzeit: 'In Mitteleuropa nicht heimisch. Als Samen oder Öl ganzjährig im Handel.',
    url: ''
  },

  'Linde': {
    kurz: 'Schweißtreibend, beruhigend, schleimlösend, der Erkältungsklassiker.',
    detail: `Die Linde (Tilia cordata/platyphyllos) ist in der europäischen Volksmedizin fest verankert. Unter Lindenbaeumen wurde Recht gesprochen und geheilt, kein Baum steht so sehr für Milde und Heilung. Lindenblütentee ist das Standardmittel bei fieberhaften Erkältungen: Er wirkt schweißtreibend, fiebersenkend und beruhigend. Die Schleimstoffe der Blüten lindern Hustenreiz, die Flavonoide hemmen Entzündungen. Lindenblütentee ist so mild, dass er auch für Kinder und ältere Menschen bestens geeignet ist. Er beruhigt zusätzlich das Nervensystem und fördert den Schlaf.`,
    anwendung: `Bei Erkältung: 2 TL Lindenblüten mit 250ml heißem Wasser, 10 Minuten zugedeckt ziehen lassen. So heiß wie möglich trinken, warm einpacken und schwitzen lassen. 3-5 Tassen täglich. Als Beruhigungstee: 1-2 TL Blüten, abends getrunken. Für Kinder bei Fieber: Mit Honig süsssen und in kleinen Schlucken trinken lassen.`,
    sammelzeit: 'Juni bis Juli, die frisch geöffneten Blüten mit den Hochblättern ernten.',
    url: 'https://heilkräuter.de/lexikon/linde.htm'
  },

  'Enzian': {
    kurz: 'Der Bitterstoff-König, stärkstes heimisches Verdauungsmittel.',
    detail: `Die Enzianwurzel (Gentiana lutea) enthält die höchste Bitterstoffkonzentration aller europäischen Heilpflanzen. Schon in einer Verdünnung von 1:20.000 schmeckt man die Bitterkeit, das ist der sogenannte Bitterwert. Diese intensiven Bitterstoffe regen reflexartig die gesamte Verdauung an: Speichelfluss, Magensaftsekretion, Gallensekretion und Bauchspeicheldrüsensekretion. Enzian hilft bei Appetitlosigkeit, Völlegefühl, Magenschwäche und träger Verdauung. Der "Schwedenbitter" nach Maria Treben enthält Enzian als Hauptkomponente.`,
    anwendung: `Als Tee: 1/2 TL zerkleinerte Wurzel kalt ansetzen (8-12 Stunden) oder kurz aufkochen, abseihen. 30 Minuten vor dem Essen eine kleine Tasse trinken, ja, er ist extrem bitter, aber genau das ist die Medizin. Als Tinktur: 10-20 Tropfen vor den Mahlzeiten. Nicht bei Magengeschwüren oder in der Schwangerschaft. Schwedenbitter: 1 EL vor jeder Mahlzeit.`,
    sammelzeit: 'Wurzeln mindestens 5 Jahre alter Pflanzen im Herbst graben (geschützte Pflanze, nur aus Anbau!).',
    url: 'https://heilkräuter.de/lexikon/enzian.htm'
  },

  'Moringa': {
    kurz: 'Der Wunderbaum: Protein, Vitamine, Mineralien in einem Blatt.',
    detail: `Moringa oleifera wird in Asien und Afrika als "Baum des Lebens" verehrt. Die Blätter enthalten alle essentiellen Aminosäuren (selten für eine Pflanze), 7x mehr Vitamin C als Orangen, 4x mehr Kalzium als Milch, 4x mehr Vitamin A als Karotten und 3x mehr Kalium als Bananen. Moringa wirkt entzündungshemmend, blutzuckerregulierend, cholesterinsenkend und antioxidativ. In Ländern mit Mangelernährung wird Moringa erfolgreich gegen Unterernährung eingesetzt. Für uns ist es ein hervorragendes Superfood zur Nahrungsergänzung.`,
    anwendung: `Als Pulver: 1-2 TL täglich in Smoothies, Safte oder über das Essen streuen. Langsam beginnen (kann anfangs den Stuhlgang anregen). Als Kapseln: 500-1000mg, 2x täglich. Als Tee: 1 TL Blätter mit heißem Wasser übergießen, 5 Minuten ziehen. Moringaoel ist hervorragend für die Hautpflege. In der Schwangerschaft nur das Blattpulver, nicht die Wurzel verwenden.`,
    sammelzeit: 'In Mitteleuropa als Topfpflanze möglich. Als Pulver oder Kapseln ganzjährig im Handel.',
    url: ''
  },
};

// ---------------------------------------------------------------------------
// STOFFE & NÄHRSTOFFE
// ---------------------------------------------------------------------------
export const STOFF_DETAILS = {
  'Magnesium': {
    kurz: 'Essentiell für Muskeln, Nerven und über 300 Enzymreaktionen.',
    detail: `Magnesium ist der vierthäufigste Mineralstoff im Körper und an über 300 enzymatischen Reaktionen beteiligt. Es entspannt die Muskulatur, beruhigt das Nervensystem, reguliert den Herzrhythmus und ist essentiell für die Energieproduktion in den Mitochondrien. Ein Mangel zeigt sich durch Muskelkrämpfe, innere Unruhe, Schlafstörungen und Kopfschmerzen. Die meisten Menschen sind unterversorgt, weil moderne Böden verarmt sind. Magnesium ist auch der natürliche Gegenspieler von Calcium, ohne genügend Magnesium lagert sich Calcium an den falschen Stellen ab (Arterien, Gelenke statt Knochen).`,
    dosierung: '300-600mg täglich, aufgeteilt auf 2-3 Einnahmen. Magnesiumcitrat hat die beste Bioverfügbarkeit. Glycinat abends für den Schlaf. Transdermal als Magnesiumöl direkt über die Haut, umgeht den Verdauungstrakt vollständig.',
    formen: 'Citrat (Darm, allgemein), Glycinat (Nerven, Schlaf), Malat (Energie, Fibromyalgie), Orotat (Herz), Threonate (Gehirn), Öl transdermal (Ganzköperper), Epsomit-Bad (Entspannung).',
  },

  'Vitamin C': {
    kurz: 'Der Immunklassiker: Antioxidans, Kollagenbildung, Eisenaufnahme.',
    detail: `Vitamin C (Ascorbinsäure) ist das bekannteste Vitamin und eines der stärksten wasserlöslichen Antioxidantien. Es schützt Zellen vor oxidativem Stress, ist unverzichtbar für die Kollagensynthese (Haut, Bindegewebe, Gefäße, Knochen), verstärkt die Eisenaufnahme und regeneriert verbrauchtes Vitamin E. Im Immunsystem unterstützt es die Funktion von Neutrophilen, Lymphozyten und Phagozyten. Linus Pauling propagierte hohe Dosen bei Erkältung und Krebs, die Forschung bestätigt zumindest eine moderate Verkürzung von Erkältungen bei regelmäßiger Einnahme. Bei akuten Infektionen steigt der Verbrauch dramatisch an.`,
    dosierung: '500-2000mg täglich, aufgeteilt auf mehrere Dosen (Vitamin C wird nur in kleinen Mengen aufgenommen). Bei akutem Infekt: Alle 1-2 Stunden 500-1000mg bis zur Darmtoleranzgrenze. Hochdosis-Infusionen (7,5-15g) bei schweren Infektionen unter ärztlicher Aufsicht.',
    formen: 'Ascorbinsäure (Standard, aber sauer), Calciumascorbat/Natriumascorbat (magenschonend), Liposomales Vitamin C (beste Bioverfügbarkeit), Acerola/Camu-Camu (natürliche Quellen mit Co-Faktoren).',
  },

  'Vitamin D3': {
    kurz: 'Das Sonnenhormon: Immunsystem, Knochen, Stimmung, Krebsschutz.',
    detail: `Vitamin D3 (Cholecalciferol) ist streng genommen kein Vitamin, sondern ein Prohormon, das der Körper in der Haut unter UVB-Strahlung selbst bildet. Es reguliert über 2000 Gene und beeinflusst nahezu jedes Organsystem. Ein Mangel (unter 30 ng/ml Blutserum, optimal sind 40-60 ng/ml) ist in Mitteleuropa epidemisch, im Winter kann die Haut kein Vitamin D bilden. Die Folgen: erhöhte Infektanfälligkeit, Knochenschwäche, depressive Verstimmung, Autoimmunerkrankungen und erhöhtes Krebsrisiko. Studien zeigen, dass ein optimaler Vitamin-D-Spiegel das Risiko für Atemwegsinfekte um 42% senkt.`,
    dosierung: '1000-5000 IE täglich als Erhaltungsdosis (je nach Ausgangswert und Körpergewicht). Zum Auffüllen bei Mangel: 10.000 IE täglich für 4-8 Wochen, dann Erhaltung. IMMER mit Vitamin K2 (MK-7) kombinieren, da D3 die Calciumaufnahme erhöht und K2 dafür sorgt, dass Calcium in die Knochen und nicht in die Arterien eingelagert wird. Auch Magnesium ist Co-Faktor.',
    formen: 'Tropfen in Öl (beste Aufnahme, da fettlöslich), Kapseln, Sprays. D3 aus Lanolin (tierisch) oder Flechten (vegan). Immer als D3/K2-Kombi bevorzugen.',
  },

  'Zink': {
    kurz: 'Immunsystem, Haut, Hormone, Wundheilung, das unterschätzte Spurenelement.',
    detail: `Zink ist an über 300 Enzymreaktionen beteiligt und für das Immunsystem von zentraler Bedeutung. Es wird für die Reifung und Aktivierung von T-Zellen, natürlichen Killerzellen und Makrophagen benötigt. Zinkmangel ist weltweit einer der häufigsten Nährstoffmängel und zeigt sich durch erhöhte Infektanfälligkeit, schlechte Wundheilung, Haarausfall, Akne, Geschmacksverlust und bei Männern durch niedrigen Testosteronspiegel. Zink ist auch essentiell für die Schilddrüsenfunktion und den Säure-Basen-Haushalt. Bei beginnender Erkältung kann sofortiges Lutschen von Zink-Pastillen die Dauer und Schwere deutlich reduzieren.`,
    dosierung: '15-30mg täglich (elementares Zink). Bei akutem Infekt: Bis 50mg täglich für max. 2 Wochen. Am besten abends vor dem Schlafengehen oder zwischen den Mahlzeiten (Phytinsäure aus Getreide hemmt die Aufnahme). Bei Langzeiteinnahme immer Kupfer ergänzen (2mg Kupfer pro 30mg Zink), da Zink Kupfer verdrängt.',
    formen: 'Zinkpicolinat (beste Bioverfügbarkeit), Zinkbisglycinat (magenschonend), Zinkcitrat (gut), Zinkkhistidin (gut für Immunsystem). Zinkoxid meiden (schlechte Aufnahme).',
  },

  'Selen': {
    kurz: 'Schilddrüse, Entgiftung, Krebsschutz: Europas Mangelspurenelement.',
    detail: `Selen ist ein essentielles Spurenelement, das in europäischen Böden besonders knapp ist. Es ist Bestandteil von 25 Selenoproteinen, darunter die Glutathionperoxidase (das wichtigste Entgiftungsenzym der Leber) und die Deiodasen (Enzyme, die das Schilddrüsenhormon T4 in das aktive T3 umwandeln). Ohne Selen funktioniert die Schilddrüse nicht richtig: Hashimoto-Thyreoiditis bessert sich in Studien signifikant unter Selengabe. Selen schützt vor oxidativem Stress, unterstützt das Immunsystem und wirkt krebspräventiv (besonders bei Prostata-, Lungen- und Darmkrebs).`,
    dosierung: '100-200 Mikrogramm täglich. Bei Hashimoto: 200mcg täglich (Studien zeigen Senkung der TPO-Antikörper um bis zu 40%). Nicht über 400mcg täglich: Selen hat eine enge therapeutische Breite. Am besten als Natriumselenit (anorganisch, nicht speicherbar, gut steuerbar) oder Selenomethionin (organisch, wird im Körper gespeichert).',
    formen: 'Natriumselenit (anorganisch, gut dosierbar), Selenomethionin (organisch, wird eingebaut), Selenhefen (natürlich, aber unterschiedliche Zusammensetzung). 2-3 Paranüsse täglich decken den Bedarf auf natürliche Weise.',
  },

  'Omega-3-Fettsäuren': {
    kurz: 'Entzündungshemmend, gehirnschützend, herzstärkend, essentiell und mangelhaft.',
    detail: `Omega-3-Fettsäuren (EPA und DHA) sind essentielle Fettsäuren, die der Körper nicht selbst herstellen kann. Sie sind Hauptbestandteil der Zellmembranen im Gehirn (60% des Gehirn-Trockengewichts ist Fett!), regulieren Entzündungsprozesse herunter und schützen Herz und Gefäße. Das Verhältnis von Omega-6 zu Omega-3 sollte idealerweise 2:1 bis 4:1 betragen, bei der modernen Ernährung liegt es oft bei 15:1 bis 20:1. Dieses Ungleichgewicht fördert chronische Entzündungen, die Grundlage fast aller Zivilisationskrankheiten. EPA wirkt stark entzündungshemmend, DHA ist essentiell für Gehirn, Augen und Nervensystem.`,
    dosierung: '2-4g kombiniertes EPA/DHA täglich. Bei Entzündungen und Depression: Höherer EPA-Anteil (mind. 1g EPA täglich). Für das Gehirn und in der Schwangerschaft: DHA betonen. Immer zu fettreichen Mahlzeiten einnehmen für beste Aufnahme. Omega-3-Index im Blut messen lassen (optimal: 8-11%).',
    formen: 'Fischöl (Triglyceridform, naturbelassen), Krillöl (enthalt Astaxanthin, Phospholipidform), Algenöl (vegan, DHA-betont), Lebertran (mit Vitamin A und D). Auf Reinheit und Schadstofffreiheit achten (IFOS-Zertifikat).',
  },

  'Coenzym Q10': {
    kurz: 'Der Zündkerzen-Nährstoff: Energieproduktion, Herz, Anti-Aging.',
    detail: `Coenzym Q10 (Ubichinon/Ubichinol) ist essentiell für die Energieproduktion in den Mitochondrien. Ohne Q10 kann kein ATP (die Energiewährung der Zelle) hergestellt werden. Das Herz, als ständig arbeitender Muskel, hat den höchsten Q10-Bedarf. Ab dem 30. Lebensjahr nimmt die körpereigene Q10-Produktion ab. Statine (Cholesterinsenker) blockieren die Q10-Synthese, wer Statine nimmt, sollte Q10 zwingend ergänzen. Q10 ist auch ein starkes Antioxidans, schützt LDL-Cholesterin vor Oxidation und zeigt in Studien positive Effekte bei Herzinsuffizienz, Migraine, Parkinson und Unfruchtbarkeit.`,
    dosierung: '100-300mg täglich. Bei Herzinsuffizienz: 300mg (die Q-SYMBIO-Studie zeigte 43% weniger kardiovaskuläre Ereignisse). Bei Statin-Einnahme: Mindestens 100mg täglich. Bei Migraine: 300-400mg. Immer zu fettreichen Mahlzeiten einnehmen (fettlöslich).',
    formen: 'Ubichinol (die aktive, reduzierte Form, besser bioverfügbar, besonders ab 40+). Ubichinon (die oxidierte Form, günstiger, muss im Körper erst umgewandelt werden). Bioverfügbarkeit sehr unterschiedlich, auf gute Präparate achten.',
  },

  'MSM': {
    kurz: 'Organischer Schwefel: Gelenke, Haut, Entgiftung, Allergien.',
    detail: `MSM (Methylsulfonylmethan) liefert organisch gebundenen Schwefel, den dritthäufigstem Mineralstoff im menschlichen Körper. Schwefel ist Bestandteil von Aminosäuren (Methionin, Cystein), Glutathion (dem Meister-Antioxidans), Kollagen, Keratin und vielen Enzymen. MSM wirkt entzündungshemmend, schmerzlindernd (besonders bei Gelenkschmerzen und Arthrose), unterstützt die Entgiftung und verbessert Haut, Haare und Nägel. In Studien reduzierte MSM Arthroseschmerzen signifikant und verbesserte die Gelenkfunktion. Es hilft auch bei Allergien, indem es die Histaminfreisetzung hemmt.`,
    dosierung: '2-6g täglich, aufgeteilt auf 2-3 Dosen. Langsam einschleichen (mit 500mg beginnen, täglich steigern), da MSM Entgiftungsreaktionen auslösen kann (Kopfschmerzen, Müdigkeit anfangs). Bei Arthrose: 3-6g täglich. Kombination mit Vitamin C verbessert die Wirkung. Kann auch aeusserlich als Creme bei Hautproblemen verwendet werden.',
    formen: 'Pulver (am günstigsten, gut dosierbar, leicht bitter), Kapseln (bequemer), Kristalle (Reinform). Auf OptiMSM-Qualität achten (reinster Standard, destilliert).',
  },

  'Bor': {
    kurz: 'Knochen, Hormone, Gehirn, das vergessene Spurenelement.',
    detail: `Bor ist ein Spurenelement, das in der Nährstoffmedizin völlig unterschätzt wird. Es spielt eine zentrale Rolle im Calcium-, Magnesium- und Phosphorstoffwechsel und ist damit essentiell für gesunde Knochen. Bor erhöht den freien Testosteronspiegel (besonders bei Männern über 40), reduziert SHBG und Östrogen und verbessert die kognitive Leistung. In Regionen mit hohem Borgehalt im Trinkwasser ist die Arthrose-Rate signifikant niedriger. Bor hilft dem Körper auch, Vitamin D besser zu verwerten und unterstützt die Entgiftung von Fluorid.`,
    dosierung: '3-10mg täglich. Für Knochen und Gelenke: 6-9mg. Für Hormone: 6-10mg. In Lebensmitteln: Avocados, Nüsse, Trockenfrichte, Rosinen und Pflaumen sind borreich. Bor ist extrem sicher, toxische Dosen liegen weit über dem therapeutischen Bereich.',
    formen: 'Borax (Natriumtetraborat, traditionell, aber in der EU als Supplement nicht zugelassen), Borsäure-Kapseln, Borgycinat, Borcitrat. Calcium-Fructoborat (besonders bioverfügbar).',
  },

  'Kalium': {
    kurz: 'Blutdruckregulation, Herzrhythmus, Muskelkontraktion, Entsäuerung.',
    detail: `Kalium ist der wichtigste intrazelluläre Mineralstoff und der natürliche Gegenspieler von Natrium. Es reguliert den Blutdruck, den Herzrhythmus, die Muskelkontraktion und den Wasserhaushalt. Die meisten Menschen nehmen zu viel Natrium (Salz) und zu wenig Kalium auf, das ideale Verhältnis wäre 1:2 bis 1:5 (Natrium:Kalium). Ein Kaliummangel zeigt sich durch Müdigkeit, Muskelschwäche, Herzrhythmusströrungen und Verstopfung. Kaliumreiche Ernährung senkt den Blutdruck nachweislich und reduziert das Schlaganfallrisiko um 24%.`,
    dosierung: '2000-4700mg täglich über die Ernährung (die meisten Menschen erreichen nur 2000-2500mg). Supplementierung nur bei nachgewiesenem Mangel und unter ärztlicher Kontrolle, zu viel Kalium kann gefährliche Herzrhythmusströrungen verursachen. Besser: Kaliumreiche Lebensmittel essen.',
    formen: 'Am besten über Lebensmittel: Avocado (975mg/Stück), Banane (400mg), Kartoffeln (900mg/große Kartoffel), Spinat, Süßekartoffeln, Lachs, weiße Bohnen. Als Supplement: Kaliumcitrat (basisch, magenschonend).',
  },

  'Eisen': {
    kurz: 'Sauerstofftransport, Energie, Gehirnfunktion, häufigster Mangel weltweit.',
    detail: `Eisen ist essentiell für den Sauerstofftransport im Blut (als Bestandteil von Hämoglobin) und die Energieproduktion in den Mitochondrien. Eisenmangel ist der weltweit häufigste Nährstoffmangel, besonders Frauen im gebärfähigen Alter, Schwangere, Kinder und Vegetarier/Veganer sind betroffen. Symptome: Chronische Müdigkeit, Blässe, Konzentrationsstörungen, Haarausfall, brüchige Nägel, Infektanfälligkeit, Restless-Legs-Syndrom. Wichtig: Eisen nur bei nachgewiesenem Mangel supplementieren, ein Zuviel fördert oxidativen Stress und kann schädlich sein. Ferritin (Speichereisen) messen lassen, optimal sind 50-100 ng/ml.`,
    dosierung: 'Nur bei nachgewiesenem Mangel: 14-100mg täglich (je nach Schwere). Am besten nüchtern mit Vitamin C einnehmen (verdoppelt die Aufnahme). Nicht zusammen mit Kaffee, Tee, Milchprodukten oder Calcium (hemmen die Aufnahme). Jeden zweiten Tag einnehmen ist effektiver als täglich (neue Studien zeigen bessere Aufnahme).',
    formen: 'Eisenbisglycinat (am besten verträglich, keine Magen-Darm-Probleme), Eisen(II)-gluconat (gut), Eisen(II)-sulfat (Standard, aber oft Magenprobleme). Lactoferrin (fördert natürliche Eisenaufnahme). Pflanzlich: Curryblattextrakt, Floradix.',
  },

  'Jod': {
    kurz: 'Schilddrüse, Stoffwechsel, Hirnentwicklung: Deutschlands Mangelgebiet.',
    detail: `Jod ist essentiell für die Bildung der Schilddrüsenhormone T3 und T4, die den gesamten Stoffwechsel steuern. Deutschland, Österreich und die Schweiz sind Jodmangelgebiete, die Böden enthalten zu wenig Jod. Ein Mangel führt zu Schilddrüsenunterfunktion, Müdigkeit, Gewichtszunahme, Kälteempfindlichkeit und bei Schwangeren zu schweren Entwicklungsstörungen des Kindes. Jod ist aber auch wichtig für Brustgewebe, Eierstöcke, Prostata und das Immunsystem. Die japanische Bevölkerung nimmt durch Seetang 10-100x mehr Jod auf als Europäer, und hat deutlich weniger Schilddrüsenerkrankungen und Brustkrebs.`,
    dosierung: 'RDA: 150-200mcg (viel zu niedrig nach Meinung vieler Experten). Japanische Aufnahme: 1-13mg täglich. Therapeutisch (nach Brownstein): Langsam steigern von 200mcg auf 12,5-50mg täglich (nur unter ärztlicher Kontrolle und mit Begleitnährstoffen!). Bei Hashimoto: Kontrovers, manche Patienten profitieren, andere reagieren empfindlich. Immer Selen (200mcg) und Vitamin C dazu nehmen.',
    formen: 'Kaliumjodid (Tabletten), Lugolsche Lösung (Jod + Kaliumjodid), Kelp/Seetang (natürlich, aber schwankender Gehalt), Jod-Tropfen. Bei Hashimoto besonders vorsichtig dosieren.',
  },

  'B-Vitamine': {
    kurz: 'Der Nerven- und Energiekomplex, 8 Vitamine, die zusammenarbeiten.',
    detail: `Die B-Vitamine sind eine Gruppe von 8 wassserlöslichen Vitaminen, die im Energiestoffwechsel, Nervensystem und der Blutbildung zusammenwirken. B1 (Thiamin) für Energie und Nerven, B2 (Riboflavin) für Energiestoffwechsel und Haut, B3 (Niacin) für Zellernergie und Entgiftung, B5 (Pantothensäure) für Nebennieren und Stressresistenz, B6 (Pyridoxin) für Neurotransmitter und Hormonstoffwechsel, B7 (Biotin) für Haut/Haare/Nägel, B9 (Folsäure) für Zellteilung und Schwangerschaft, B12 (Cobalamin) für Nerven und Blutbildung. Ein Mangel an einem einzelnen B-Vitamin betrifft meist den ganzen Komplex.`,
    dosierung: 'Am besten als B-Komplex mit allen 8 B-Vitaminen. Gute Präparate enthalten die aktiven Formen: Methylfolat statt Folsäure, Methylcobalamin statt Cyanocobalamin, P5P statt Pyridoxin-HCl. B12 bei Veganern: 500-1000mcg Methylcobalamin täglich. B-Komplex morgens einnehmen (kann wach machen). Urin wird gelb, das ist normales überschüssiges Riboflavin, harmlos.',
    formen: 'Aktive Formen bevorzugen: Methylcobalamin (B12), Methylfolat / 5-MTHF (B9), Pyridoxal-5-Phosphat / P5P (B6), Benfotiamin (fettlösliches B1). B-Komplex-Kapseln oder Sublingual-Tabletten (für B12 besonders gut).',
  },

  'Quercetin': {
    kurz: 'Natürliches Antihistaminikum, antiviral, entzündungshemmend.',
    detail: `Quercetin ist ein Flavonoid, das in Zwiebeln, Äpfeln, Brokkoli, Beeren und Kapern vorkommt. Es stabilisiert Mastzellen und verhindert so die Freisetzung von Histamin, das macht es zum stärksten natürlichen Antihistaminikum bei Allergien. Quercetin ist zudem ein potenter Zink-Ionophor: Es schleust Zink in die Zellen, wo es die virale Replikation hemmt. Daher wurde es während der Covid-Pandemie als Teil des Zelenko-Protokolls bekannt. Quercetin hemmt außerdem NF-kappaB (Entzündungsschalter), schützt die Blutgefäße und zeigt in Laborversuchen antikarzinogene Wirkung.`,
    dosierung: '500-1000mg täglich. Bei Allergien: 4-6 Wochen vor der Saison beginnen, 500mg 2-3x täglich. Als Zink-Ionophor: 500mg zusammen mit 30mg Zink. Am besten mit Vitamin C kombinieren (stabilisiert Quercetin). Auf nüchternen Magen oder zwischen den Mahlzeiten einnehmen.',
    formen: 'Quercetin-Dihydrat (Standard), Quercetin-Phytosom (an Lecithin gebunden, 20x bessere Aufnahme), EMIQ (enzymatisch modifiziertes Isoquercitrin, beste Bioverfügbarkeit). Natürliche Quellen: rote Zwiebeln, Kapern, Äpfel mit Schale.',
  },

  'OPC': {
    kurz: 'Traubenkernextrakt, das stärkste pflanzliche Antioxidans.',
    detail: `OPC (Oligomere Proanthocyanidine) aus Traubenkernextrakt ist eines der potentesten natürlichen Antioxidantien, 20x stärker als Vitamin C und 50x stärker als Vitamin E. OPC schützt und stärkt die Blutgefäße, verbessert die Mikrozirkulation, schützt Kollagen und Elastin vor Abbau und wirkt stark entzündungshemmend. Es überwindet die Blut-Hirn-Schranke und schützt damit auch das Gehirn vor oxidativem Stress. Äußerlich sichtbare Effekte: bessere Haut, weniger Falten, stärkere Haare, weniger Besenreiser, schnellere Wundheilung.`,
    dosierung: '100-300mg täglich (berechnet als reines OPC, nicht Traubenkernextrakt-Gesamtgewicht). Am besten morgens nüchtern mit Vitamin C einnehmen (Vitamin C und OPC potenzieren sich gegenseitig). Anfangs können Entgiftungskopfschmerzen auftreten, langsam einschleichen.',
    formen: 'Traubenkernextrakt (standardisiert auf mindestens 95% OPC), Pinienrindenextrakt (Pycnogenol, ähnlich, aber teurer), Kombipräparate mit Vitamin C. Auf den OPC-Gehalt achten, nicht nur den Extrakt-Gehalt.',
  },

  'Kollagen': {
    kurz: 'Das Gerüst des Körpers: Haut, Gelenke, Knochen, Darm.',
    detail: `Kollagen ist das häufigste Protein im menschlichen Körper (30% des gesamten Eiweißes). Es bildet das Gerüst für Haut, Knochen, Sehnen, Bänder, Knorpel und Darmschleimhaut. Ab dem 25. Lebensjahr nimmt die körpereigene Kollagenproduktion um ca. 1-1,5% pro Jahr ab, sichtbar als Falten, spürbar als Gelenkbeschwerden. Kollagenpeptide (hydrolysiert) werden im Darm gut aufgenommen und stimulieren die körpereigene Kollagenproduktion. Studien zeigen signifikante Verbesserungen bei Hautfeuchtigkeit, Falten, Gelenkschmerzen und Knochendichte nach 8-12 Wochen Einnahme.`,
    dosierung: '10-15g Kollagenpeptide täglich. Für die Haut: Typ I und III. Für Gelenke: Typ II. In warmem Wasser, Kaffee oder Smoothie auflösen (geschmacksneutral). Kombination mit Vitamin C essentiell (Vitamin C ist Co-Faktor der Kollagenbildung). Auch Knochenbrühe ist eine hervorragende natürliche Kollagenquelle.',
    formen: 'Hydrolysierte Kollagenpeptide (am besten aufgenommen), Gelatine (teilhydrolysiert, gut für Darm), Knochenbrühe (natürlich, mit Mineralien), UC-II (undenaturiertes Typ-II-Kollagen für Gelenke, wirkt schon ab 40mg täglich). Rind, Fisch (Marine Collagen) oder Hühnchen als Quelle.',
  },

  'Lithium': {
    kurz: 'Mikrodosiert: Stimmungsstabilisator, Neuroprotektivum, Anti-Aging.',
    detail: `Lithium in Mikrodosen (nicht die hohen psychiatrischen Dosen!) ist ein faszinierender Nährstoff. In Regionen mit höherem Lithiumgehalt im Trinkwasser sind Suizidraten, Demenzhäufigkeit und Kriminalität signifikant niedriger, das zeigen mehrere epidemiologische Studien. Mikrodosiertes Lithium (5-20mg als Lithiumorotat) schützt Nervenzellen, fördert die Neurogenese (Neubildung von Hirnzellen), stabilisiert die Stimmung und hemmt den Abbau von Tau-Protein (Alzheimer-Risikofaktor). Es verlängert Telomere und hat damit Anti-Aging-Potenzial. Die therapeutische Breite ist bei niedrigen Dosen groß, keinerlei Nebenwirkungen bei 5-20mg täglich.`,
    dosierung: '5-20mg Lithiumorotat täglich (das sind keine pharmazeutischen Dosen von 300-1200mg Lithiumcarbonat!). Für allgemeines Wohlbefinden und Neuroprotection: 5mg täglich. Bei Stimmungsschwankungen: 10-20mg täglich. Keine Blutspiegelkontrolle nötig bei diesen niedrigen Dosen.',
    formen: 'Lithiumorotat (bioverfügbar, niedrig dosiert, das Mittel der Wahl für Mikrodosierung), Lithiumcarbonat (nur verschreibungspflichtig bei bipolarer Störung, hohe Dosen). Im Trinkwasser natürlich enthalten (regional unterschiedlich).',
  },

  'Silizium': {
    kurz: 'Kieselsäure: Haut, Haare, Knochen, Bindegewebe.',
    detail: `Silizium (als Kieselsäure) ist ein essentielles Spurenelement für Bindegewebe, Haut, Haare, Nägel und Knochen. Es ist ein Schlüssel-Baustein für Kollagen und Elastin und damit für die Festigkeit und Elastizität aller Bindegewebsstrukturen. Mit dem Alter nimmt der Siliziumgehalt im Körper deutlich ab, das zeigt sich an dünner werdender Haut, schlaffen Gefäßen und brüchihen Knochen. Silizium fördert die Einlagerung von Calcium in die Knochen und kann so Osteoporose entgegenwirken. Es bindet auch Aluminium und hilft dem Körper, dieses Nervengift auszuscheiden.`,
    dosierung: '10-30mg bioverfügbares Silizium täglich. Als Kieselgur/Kieselerde: 3-6g täglich (Bioverfügbarkeit gering). Besser: Organisches Silizium oder kolloidale Kieselsäure. Natürlich: Schachtelhalm-Tee (reichste heimische Siliziumquelle), Hirse, Hafer, Brennnessel.',
    formen: 'Organisches Silizium (Monomethylsilanetriol, beste Bioverfügbarkeit), Kolloidale Kieselsäure (Silicea), Kieselerde (günstig, aber schlechte Aufnahme), Bambus-Extrakt (natürlich, hoher Gehalt), Schachtelhalm-Extrakt.',
  },

  'Vitamin K2': {
    kurz: 'Der Calcium-Dirigent, leitet Calcium in die Knochen, nicht in die Arterien.',
    detail: `Vitamin K2 (Menachinon) ist ein häufig übersehenes, aber essentielles Vitamin. Während K1 (aus grünem Blattgemüse) für die Blutgerinnung zuständig ist, aktiviert K2 die Proteine Osteocalcin (baut Calcium in Knochen ein) und Matrix-GLA-Protein (hält Calcium aus den Arterien fern). Ohne K2 lagert sich Calcium an den falschen Stellen ab: Arterienverkalkung und Nierensteine nehmen zu, während die Knochen poröes werden. K2 ist das fehlende Glied, warum manche Menschen trotz Calcium-Supplementierung Osteoporose entwickeln und gleichzeitig verkalken.`,
    dosierung: '100-200mcg MK-7 täglich. Bei hoher Vitamin-D3-Einnahme: Proportional erhöhen (ca. 100mcg K2 pro 5000 IE D3). Fettlöslich, zu einer Mahlzeit mit Fett einnehmen. Die Rotterdam-Studie zeigte: Die höchste K2-Aufnahme reduzierte die Herzsterblichkeit um 57% und die allgemeine Sterblichkeit um 26%.',
    formen: 'MK-7 (längste Halbwertszeit, beste Datenlage, aus Natto gewonnen), MK-4 (kurzlebiger, braucht höhere Dosen), K2 aus Natto (fermentierte Sojabohnen, reichhaltigste natürliche Quelle). Gouda und Brie enthalten auch nennenswerte Mengen.',
  },

  'NAC': {
    kurz: 'N-Acetyl-Cystein: Glutathion-Booster, Lungenreiniger, Entgifter.',
    detail: `NAC (N-Acetyl-Cystein) ist die Vorstufe von Glutathion, dem wichtigsten Antioxidans und Entgiftungsmolekül des Körpers. Glutathion wird in jeder Zelle benötigt, kann aber schlecht direkt supplementiert werden (wird im Magen abgebaut). NAC liefert den limitierenden Baustein Cystein und ermöglicht so die körpereigene Glutathionproduktion. In der Notfallmedizin ist NAC das Standardmittel bei Paracetamol-Vergiftung (schützt die Leber). Es löst zähen Schleim in den Atemwegen (Mukolytikum), schützt die Leber vor Toxinen, unterstützt die Schwermetallentgiftung und zeigt vielversprechende Wirkung bei psychiatrischen Erkrankungen (Zwangsstöringen, Trichotillomanie, Sucht).`,
    dosierung: '600-1800mg täglich, aufgeteilt auf 2-3 Dosen. Bei Atemwegserkrankungen: 600mg 2-3x täglich. Zur Entgiftung: 1200-1800mg. Zur Glutathion-Erhöhung: Mit Vitamin C, Selen und B-Vitaminen kombinieren. Auf nüchternen Magen oder zwischen den Mahlzeiten einnehmen.',
    formen: 'NAC-Kapseln oder -Pulver (schwefliger Geschmack). Liposomales Glutathion als Alternative (direkte Supplementierung, teurer). S-Acetyl-Glutathion (stabile, oral verfügbare Glutathionform).',
  },

  'Vitamin A': {
    kurz: 'Augen, Immunsystem, Haut, Schleimhäute, das Schutzschild-Vitamin.',
    detail: `Vitamin A (Retinol) ist essentiell für die Integrität aller Schleimhäute, die erste Verteidigungslinie des Immunsystems. Es schützt Augen (Nachtblindheit bei Mangel), Haut, Atemwege, Darm und Harnwege. In Entwicklungsländern ist Vitamin-A-Mangel eine der Hauptursachen für Kindersterblichkeit und Erblindung. Auch in Industrieländern kommt leichter Mangel vor, besonders bei Menschen, die wenig tierische Produkte essen. Beta-Carotin aus Pflanzen wird nur ineffizient in Retinol umgewandelt (besonders bei Genmutationen im BCMO1-Gen, die 40-50% der Bevölkerung betreffen).`,
    dosierung: '3000-10.000 IE täglich (als vorgeformtes Retinol aus tierischen Quellen). In der Schwangerschaft: Nicht über 10.000 IE täglich (teratogen in hohen Dosen). Natürliche Quellen: Leber (reichhaltigste Quelle), Eigelb, Butter, Lebertran. Beta-Carotin aus Karotten, Süßekartoffeln, Grünkohl als Ergänzung, aber kein vollständiger Ersatz.',
    formen: 'Retinylpalmitat (Supplement-Standard), Retinol (in tierischen Lebensmitteln), Beta-Carotin (pflanzliche Vorstufe, sichere hohe Dosen, aber variable Umwandlung). Lebertran liefert natürliches Vitamin A zusammen mit D3.',
  },

  'Vitamin E': {
    kurz: 'Zellschutz-Vitamin: Antioxidans für Membranen, Herz und Fruchtbarkeit.',
    detail: `Vitamin E ist das wichtigste fettlösliche Antioxidans und schützt die Zellmembranen vor Lipidperoxidation. Es existiert als Familie von 8 verwandten Molekülen: 4 Tocopherole und 4 Tocotrienole. Die meisten Supplemente enthalten nur Alpha-Tocopherol, das ist ein Problem, weil isoliertes Alpha-Tocopherol die Aufnahme der anderen Formen hemmt. Gamma-Tocopherol und Tocotrienole haben eigene wichtige Funktionen (Entzündungshemmung, Krebsschutz). Vitamin E schützt LDL-Cholesterin vor Oxidation, unterstützt die Fruchtbarkeit (der Name "Tocopherol" kommt vom griechischen "tokos" = Geburt) und hält die Haut geschmeidig.`,
    dosierung: '200-400 IE täglich als Mischtocopherol/Mischtocotrienol-Komplex. Nicht isoliertes Alpha-Tocopherol in hohen Dosen nehmen (Studien zeigten negative Effekte). Zu einer fettreichen Mahlzeit einnehmen. Natürliche Quellen: Weizenkeimöl, Sonnenblumenkerne, Mandeln, Haselnüsse, Avocado.',
    formen: 'Natürliches Vitamin E (d-alpha-Tocopherol, das "d" zeigt die natürliche Form an) vs. synthetisches (dl-alpha-Tocopherol, weniger wirksam). Am besten: Vollspektrum-Vitamin-E mit allen 8 Formen (4 Tocopherole + 4 Tocotrienole). Palmöl-Tocotrienole als spezielles Supplement.',
  },
};

// ---------------------------------------------------------------------------
// ERNÄHRUNGSFORMEN
// ---------------------------------------------------------------------------
export const ERNAEHRUNG_DETAILS = {
  'Ketogene Ernährung': {
    kurz: 'Fett als Hauptbrennstoff, minimale Kohlenhydrate, maximale mentale Klarheit.',
    detail: `Die ketogene Ernährung ist eine Revolution in der Stoffwechselmedizin. Das Prinzip: Der Körper wird von der Glukoseverbrennung auf die Fettverbrennung umgestellt. Bei weniger als 20-50g Kohlenhydraten pro Tag beginnt die Leber, Fettsäuren in Ketonkörper umzuwandeln, vor allem Beta-Hydroxybutyrat (BHB). Diese Ketonkörper sind ein überlegener Brennstoff für das Gehirn: effizienter als Glukose, entzündungshemmend und neuroprotektiv.

Was im Körper passiert: Die Insulinspiegel sinken dauerhaft, die Insulinsensitivität verbessert sich. Chronische Entzündungen gehen zurück, weil der entzündungsfördernde Zucker-Insulin-Kreislauf unterbrochen wird. Die Mitochondrien, die Kraftwerke der Zellen, arbeiten effizienter mit Ketonkörpern. Autophagie (zelluläre Selbstreinigung) wird aktiviert. Das Gehirn bekommt eine konstante, schwankungsfreie Energieversorgung, keine Nachmittagstiefs, keine Heißhungerattacken, klares Denken.

Die Wissenschaft dahinter ist beeindruckend: Ursprünglich wurde Keto in den 1920ern zur Behandlung von Epilepsie entwickelt. Heute zeigt die Forschung Wirksamkeit bei Typ-2-Diabetes (Remission in bis zu 60% der Fälle), Alzheimer (Ketonkörper als alternativer Hirnbrennstoff bei gesteorter Glukoseverwertung), Parkinson, Krebs (Warburg-Effekt: Krebszellen können Ketone nicht effizient verwerten und werden "ausgehungert"), chronischen Entzündungen, Autoimmunerkrankungen, PCOS und Übergewicht.

Die Keto-Grippe in der Umstellungsphase (erste 3-7 Tage) ist normal: Kopfschmerzen, Müdigkeit, Reizbarkeit. Der Körper braucht Zeit, die Enzyme für die Fettverbrennung hochzufahren. Viel Wasser, Elektrolyte (Natrium, Kalium, Magnesium) und Geduld helfen. Nach der Umstellung berichten die meisten von einer Klarheit und Energie, die sie vorher nicht kannten.

Verbreitete Missverständnisse: Keto ist nicht "nur Fleisch und Butter". Eine gut formulierte ketogene Ernährung enthält reichlich Gemüse (grün, faserreich, überirdisch wachsend), gesunde Fette aus verschiedenen Quellen und moderate Mengen hochwertiges Protein. Es ist auch kein Hochprotein-Ansatz, zu viel Protein wird über Glukoneogenese in Zucker umgewandelt.

Die langfristigen Vorteile können lebensverändernd sein: stabiler Blutzucker, keine Heißhungerattacken, nachhaltiger Gewichtsverlust (besonders Bauchfett), verbesserte Blutfettwerte (HDL steigt, Triglyceride sinken), niedrigerer Blutdruck, weniger Entzündungsmarker, klareres Denken, stabilere Stimmung und tieferer Schlaf.`,
    lebensmittel: 'Avocados, Olivenöl (nativ extra), Kokosöl, Butter/Ghee von Weidetieren, fetter Fisch (Lachs, Sardinen, Makrele), Eier (am besten von freilaufenden Hühnern), Nüsse (Macadamia, Walnüsse, Pecannüsse), grünes Gemüse (Brokkoli, Spinat, Grünkohl, Mangold, Zucchini), Pilze, Oliven, Kokosmilch, Kakaobutter, MCT-Öl, fermentierte Lebensmittel (Sauerkraut, Kimchi), Beeren in Massen (Himbeeren, Blaubeeren).',
    meiden: 'Zucker (in jeder Form), Getreide (Weizen, Roggen, Hafer, Reis), Kartoffeln, Nudeln, Brot, die meisten Früchte (besonders Bananen, Trauben, Mangos), Hülsenfrüchte, Softdrinks, Fruchtsäfte, Honig in großen Mengen, Agavendicksaft, alle verarbeiteten Lebensmittel mit verstecktem Zucker, Samenöle (Sonnenblumenöl, Rapsöl, Sojaöl).',
    besonders_bei: ['Chronische Entzündungen', 'Arthrose', 'Typ-2-Diabetes', 'Insulinresistenz', 'Übergewicht (besonders Bauchfett)', 'Demenz / Alzheimer', 'Epilepsie', 'Krebs (begleitend)', 'Autoimmunerkrankungen', 'Depression', 'PCOS', 'Metabolisches Syndrom', 'Migraine', 'Fettleber'],
  },

  'Vegane Ernährung': {
    kurz: 'Pflanzlich, ethisch motiviert, mit echten Herausforderungen bei der Nährstoffversorgung.',
    detail: `Vegane Ernährung verzichtet vollständig auf tierische Produkte. Die Hauptmotivation ist meist ethisch: Tierwohl und Umwelt. Als Gesundheitsstrategie ist sie differenziert zu betrachten.

Stärken: Hoher Gemüse- und Ballaststoffanteil, reich an Antioxidantien und sekundären Pflanzenstoffen, basisch wirkend, cholesterinfrei. Eine gut geplante vegane Ernährung kann das Risiko für Herz-Kreislauf-Erkrankungen senken und den Blutdruck verbessern.

Echte Herausforderungen: Vitamin B12 muss supplementiert werden, es kommt in pflanzlicher Nahrung nicht in verwertbarer Form vor, und ein Mangel führt zu irreversiblen Nervenschäden. Eisen aus Pflanzen (Nicht-Häm-Eisen) wird deutlich schlechter aufgenommen als aus tierischen Quellen. Omega-3-Fettsäuren (EPA/DHA) fehlen in der rein pflanzlichen Ernährung fast vollständig: ALA aus Leinsamen wird nur zu 5-10% umgewandelt. Zink, Jod, Vitamin D und hochwertiges Protein mit allen essentiellen Aminosäuren sind häufig mangelhaft.

Ein oft übersehenes Problem: Hülsenfrüchte, Getreide und Samen enthalten Antinährstoffe wie Phytinsäure (bindet Mineralien und macht sie unverfügbar), Lektine (reizen die Darmschleimhaut und können "Leaky Gut" fördern) und Trypsin-Inhibitoren (stören die Proteinverdauung). Wer vegan lebt und hauptsächlich Sojaprodukte, Seitan und verarbeitete Ersatzprodukte isst, tut sich keinen gesundheitlichen Gefallen.

Wann vegan gut funktioniert: Als gemüsereiche, vollwertige Ernährung mit viel frischem Blattgrün, Sprossen, gekeimten Saaten, Nüssen und bewusster Supplementierung (B12, Omega-3, Vitamin D, Jod, Zink). Als zeitlich begrenzte Reinigungs- oder Entlastungskur kann sie sehr heilsam wirken. Langfristig erfordert sie viel Wissen und sorgfältige Planung.`,
    lebensmittel: 'Grünes Blattgemüse, Hülsenfrüchte (eingeweicht/gekeimt), Nüsse, Samen, Avocado, Beeren, Algen, Tempeh, Sprossen, Süßekartoffeln, Quinoa, Amaranth, Buchweizen.',
    meiden: 'Alle tierischen Produkte. Zusätzlich empfohlen zu meiden: Hochverarbeitete Ersatzprodukte, Samenöle, Zucker, Weissmehl.',
    besonders_bei: ['Detox-Kuren', 'Herz-Kreislauf-Prävention', 'Übergewicht (kurzfristig)', 'Ethische/ökologische Motivation'],
  },

  'Rohkost': {
    kurz: 'Lebendige, unerhitzte Nahrung, voller Enzyme und Lichtkraft.',
    detail: `Rohkost bedeutet: Lebensmittel werden nicht über 42 Grad Celsius erhitzt. Dadurch bleiben alle Enzyme, hitzeempfindliche Vitamine (besonders C und B-Vitamine) und die feinstoffliche "Lebenskraft" der Nahrung erhalten. Die Idee dahinter: Jede lebendige Nahrung trägt ein eigenes Energiefeld, das beim Erhitzen zerstört wird. Biophotonen-Forschung (Fritz-Albert Popp) zeigt, dass frische, rohe Lebensmittel mehr Lichtspeicherkapazität haben als gekochte.

Praktisch beinhaltet Rohkost: Frisches Obst und Gemüse, Salate, Sprossen und Keimlinge, Nüsse und Samen (eingeweicht), kaltgepresste Öle, fermentierte Lebensmittel, Dörrobst und -gemüse (unter 42 Grad gedörrt), Smoothies und frische Säfte, rohe Schokolade (Kakao).

Die Herausforderung: Nicht alle Nährstoffe sind roh besser verfügbar. Lycopin aus Tomaten und Beta-Carotin aus Karotten werden durch Erhitzen besser aufgeschlossen. Manche Menschen vertragen große Mengen Rohkost schlecht, besonders bei schwacher Verdauung (in der TCM: "schwaches Milz-Qi"). Im Winter kann reine Rohkost den Körper zu stark kühlen. Die Lösung: Rohkost als Grundlage, ergänzt durch leicht gedämpftes Gemüse und wärmende Gewürze.`,
    lebensmittel: 'Frisches Obst und Gemüse, Wildkräuter, Sprossen, Keimlinge, eingeweichte Nüsse, Samen, kaltgepresste Öle, Algen, roher Kakao, Superfoods (Acai, Goji, Maca).',
    meiden: 'Alles über 42 Grad Celsius Erhitzte. Konservierte Lebensmittel, pasteurisierte Produkte.',
    besonders_bei: ['Entgiftung', 'Hautprobleme', 'Energiemangel', 'Spirituelle Praxis', 'Sommermonate'],
  },

  'Basische Ernährung': {
    kurz: 'Entsäuerung des Körpers, zurück ins Gleichgewicht.',
    detail: `Die basische Ernährung beruht auf der Erkenntnis, dass die moderne Ernährung den Körper chronisch übersäuert. Fleisch, Milchprodukte, Getreide, Zucker, Kaffee und Alkohol hinterlassen saure Stoffwechselrückstände, während Gemüse, Obst, Kräuter und Sprossen basisch verstoffwechselt werden. Chronische Übersäuerung zeigt sich durch Müdigkeit, Gelenkschmerzen, Hautprobleme, Sodbrennen und Infektanfälligkeit. Der Körper muss säure-puffernde Mineralien (Calcium, Magnesium) aus den Knochen und Zähnen mobilisieren, um den Blut-pH stabil zu halten.

Eine basische Ernährung besteht idealerweise zu 70-80% aus basischen Lebensmitteln und zu 20-30% aus säurebildenden. Dabei muss man zwischen "guten Säurebildnern" (Nüsse, Hülsenfrüchte, hochwertiges Getreide) und "schlechten" (Zucker, Weissmehl, Fastfood) unterscheiden. Basenbader, Basenpulver und basische Mineralstoffmischungen unterstützen die Entsäuerung zusätzlich.`,
    lebensmittel: 'Gemüse (besonders Blattsalate, Gurken, Sellerie), reifes Obst, Kartoffeln, Sprossen, Mandeln, Trockenfeigen, Rosinen, frische Kräuter, Wildkräuter.',
    meiden: 'Zucker, Weissmehl, Fleisch (reduzieren), Milchprodukte (reduzieren), Kaffee, Alkohol, Softdrinks, Fertigprodukte.',
    besonders_bei: ['Übersäuerung', 'Rheuma', 'Gicht', 'Sodbrennen', 'Hautprobleme', 'Chronische Müdigkeit', 'Gelenkschmerzen'],
  },

  'Ayurvedische Ernährung': {
    kurz: 'Essen nach dem eigenen Konstitutionstyp, 5000 Jahre indische Weisheit.',
    detail: `Die Ayurvedische Ernährung basiert auf dem Prinzip der drei Doshas: Vata (Luft/Äther, beweglich, leicht, kalt), Pitta (Feuer/Wasser, heiß, scharf, intensiv) und Kapha (Erde/Wasser, schwer, stabil, feucht). Jeder Mensch hat eine individuelle Dosha-Konstitution, und die ideale Ernährung gleicht Ungleichgewichte aus. Ein Vata-Typ braucht warme, nährende, ölige Speisen. Ein Pitta-Typ profitiert von kühlenden, süßen, bitteren Lebensmitteln. Ein Kapha-Typ braucht leichte, scharfe, trockene Nahrung.

Zentrale Prinzipien: Das Verdauungsfeuer (Agni) ist der Schlüssel zur Gesundheit, nur was verdaut wird, nährt auch. Warme Speisen und Getränke erhalten Agni, kalte und rohe Nahrung kann es schwächen. Sechs Geschmacksrichtungen (süß, sauer, salzig, scharf, bitter, zusammenziehend) sollten in jeder Mahlzeit vorkommen. Gewürze wie Kurkuma, Ingwer, Kreuzkümmel und Koriander sind Medizin.`,
    lebensmittel: 'Individuell nach Dosha-Typ. Generell: Frisch gekochte Mahlzeiten, Ghee, Reis (Basmati), Mungbohnen, saisonales Gemüse, Gewürze (Kurkuma, Ingwer, Kreuzkümmel, Koriander, Fenchel), warmes Wasser.',
    meiden: 'Reste vom Vortag, Mikrowelle, eiskalte Getränke, Essen im Stehen/Gehen, hastige Mahlzeiten, unverträgliche Kombinationen (z.B. Milch mit Früchten oder Fisch).',
    besonders_bei: ['Verdauungsprobleme', 'Konstitutionelle Beschwerden', 'Prävention', 'Ganzheitliche Lebensgestaltung', 'Individuelle Ernährungsberatung'],
  },

  'TCM-Ernährung': {
    kurz: 'Nahrung als Medizin, thermisch, energetisch, individuell.',
    detail: `Die Ernährung nach Traditioneller Chinesischer Medizin (TCM) betrachtet Lebensmittel nicht nur nach Kalorien und Nährstoffen, sondern nach ihrer thermischen Wirkung (heiß, warm, neutral, kühl, kalt), ihrem Geschmack (süß, scharf, salzig, sauer, bitter) und ihrer Wirkrichtung (aufsteigend, absenkend, nach außen, nach innen). Jedes Lebensmittel beeinflusst den Qi-Fluss und die Balance von Yin und Yang im Körper.

Ein zentrales Konzept: Die "Mitte stärken". Der Magen und die Milz (das Verdauungssystem) sind das Zentrum der Gesundheit. Alles, was die Mitte schwächt, kalte, rohe Nahrung, Überessen, unregelmäßige Mahlzeiten, zu viel Grübeln, kann zu Energiemangel und Krankheit führen. Daher empfiehlt die TCM grundsätzlich warme, gekochte Mahlzeiten und warme Getränke, besonders morgens. Das berümte Congee (Reisbrei) ist das ultimative Mitte-stärkende Frühstück.`,
    lebensmittel: 'Gekochtes Getreide (Reis, Hirse), Gemüsesuppen, gedämpftes Gemüse, Huhn und Rind (in Massen), Ingwer, Datteln, Goji-Beeren, Walnüsse, Sesam, Congee, warme Getränke.',
    meiden: 'Kalte Rohkost in großen Mengen, eiskalte Getränke, Milchprodukte (verschleimen nach TCM), zu viel Süßes (schwächt die Milz), Fertigprodukte, Mikrowelle.',
    besonders_bei: ['Verdauungsschwäche', 'Kälteempfindlichkeit', 'Müdigkeit', 'Immunschwäche', 'Chronische Erkrankungen', 'Ernährung im Winter'],
  },

  'Paleo / Steinzeit': {
    kurz: 'Essen wie unsere Vorfahren, natürlich, unverarbeitet, nährstoffdicht.',
    detail: `Die Paleo-Ernährung orientiert sich an dem, was Menschen vor der Agrarrevolution (vor ca. 10.000 Jahren) gegessen haben: Fleisch, Fisch, Gemüse, Obst, Nüsse, Samen und Wurzeln. Getreide, Hülsenfrüchte, Milchprodukte, Zucker und alle verarbeiteten Lebensmittel werden gemieden. Die Idee: Unser Genom ist zu 99,9% identisch mit dem unserer steinzeitlichen Vorfahren, aber unsere Ernährung hat sich radikal verändert. Diese Diskrepanz (Evolutionary Mismatch) erklärt viele Zivilisationskrankheiten.

Paleo ist nicht einfach "viel Fleisch essen". Es geht um die Qualität: Weidefleisch statt Massentierhaltung, Wildmfang statt Zuchtfisch, biologisches Gemüse statt Pestizid-belastetes. Es geht um Nährstoffdichte: Innereien, Knochenbrühe, fermentiertes Gemüse, bunte Vielfalt an Gemüse und Beeren. Studien zeigen Verbesserungen bei Übergewicht, Diabetes, Autoimmunerkrankungen und Entzündungsmarkern.`,
    lebensmittel: 'Weidefleisch, Wildfisch, Eier, Gemüse (alle Sorten), Obst (maßvoll), Nüsse, Samen, Knollen (Süßekartoffeln, Maniok), Avocado, Olivenöl, Kokosöl, Knochenbrühe, Innereien, fermentiertes Gemüse.',
    meiden: 'Getreide (inkl. Vollkorn), Hülsenfrüchte, Milchprodukte, Zucker, Samenöle (Sonnenblumen-, Raps-, Sojaöl), alle verarbeiteten Lebensmittel, künstliche Zusatzstoffe.',
    besonders_bei: ['Autoimmunerkrankungen', 'Nahrungsmittelunverträglichkeiten', 'Übergewicht', 'Entzündungen', 'Insulinresistenz', 'Verdauungsprobleme'],
  },

  'Carnivore': {
    kurz: 'Rein tierische Ernährung, radikal, aber für manche heilsam.',
    detail: `Die Carnivore-Ernährung ist die radikalste Eliminationsdiät: Nur tierische Lebensmittel, keinerlei Pflanzliches. Das klingt extrem, und das ist es auch, aber für Menschen mit schweren Autoimmunerkrankungen, Nahrungsmittelunverträglichkeiten und therapieresistenten Darmproblemen kann es ein Neuanfang sein. Alle pflanzlichen Reizstoffe (Oxalate, Lektine, Phytinsäure, Saponine, Salicylate) werden komplett eliminiert.

Berichte von Carnivore-Anhängern zeigen dramatische Verbesserungen bei Rheumatoider Arthritis, Morbus Crohn, Colitis Ulcerosa, Psoriasis, Depression und chronischer Müdigkeit. Wissenschaftlich ist Carnivore noch wenig erforscht, aber die Erfahrungsberichte sind bemerkenswert. Langzeitauswirkungen sind unklar. Als therapeutische Intervention (3-6 Monate) zur Beruhigung des Immunsystems kann Carnivore sinnvoll sein, als Dauerernährung ist es kontrovers.`,
    lebensmittel: 'Rindfleisch (vor allem), Lamm, Fisch, Eier, Innereien (Leber, Herz, Niere), Knochenbrühe, Butter, tierische Fette (Talg, Schmalz). Manche Carnivores essen auch Milchprodukte.',
    meiden: 'Alles Pflanzliche: Gemüse, Obst, Getreide, Nüsse, Samen, Öle, Gewürze (in der strengsten Form).',
    besonders_bei: ['Schwere Autoimmunerkrankungen', 'Therapieresistente Darmerkrankungen', 'Multiple Nahrungsmittelunverträglichkeiten', 'Eliminationsdiät als Reset'],
  },

  'Mediterrane Ernährung': {
    kurz: 'Die wissenschaftlich bestuntersuchte Ernährungsform: Herz, Langlebigkeit, Genuss.',
    detail: `Die Mediterrane Ernährung orientiert sich an der traditionellen Küche der Mittelmeerländer (Griechenland, Süditalien, Spanien) und ist die wissenschaftlich am besten untersuchte Ernährungsform überhaupt. Die PREDIMED-Studie zeigte eine 30% Reduktion kardiovaskulärer Ereignisse. Sie wird mit Langlebigkeit, niedrigen Krebs- und Herzerkrankungsraten und besserer kognitiver Funktion im Alter assoziiert.

Das Geheimnis: Viel Olivenöl (nativ extra, reich an Polyphenolen), reichlich Gemüse, Hülsenfrüchte, Nüsse, Fisch, maßvoll Wein (Rotwein mit seinen Polyphenolen) und wenig rotes Fleisch. Es ist keine Diät im herkömmlichen Sinne, sondern ein Lebensstil: Gemeinsam kochen, in Ruhe essen, frische und saisonale Zutaten verwenden, Bewegung im Alltag. Die Kombination von gesunden Fetten, Antioxidantien, Ballaststoffen und Anti-Stress-Faktor macht diese Ernährung so wirksam.`,
    lebensmittel: 'Olivenöl (nativ extra, großzügig), Gemüse, Hülsenfrüchte, Nüsse (Walnüsse, Mandeln), Fisch und Meeresfrüchte, Vollkorngetreide, Obst, Kräuter (Oregano, Basilikum, Rosmarin, Thymian), maßvoll Käse und Joghurt, Rotwein in Massen.',
    meiden: 'Verarbeitete Lebensmittel, Zucker, Weissmehl, Samenöle, Fastfood, Softdrinks.',
    besonders_bei: ['Herz-Kreislauf-Prävention', 'Langlebigkeit', 'Kognitive Gesundheit', 'Diabetes-Prävention', 'Allgemeine Gesundheitsvorsorge'],
  },

  'Intervallfasten-Ernährung': {
    kurz: 'Zeitbeschränktes Essen, der Rhythmus entscheidet über die Gesundheit.',
    detail: `Intervallfasten (Intermittent Fasting) ist streng genommen keine Ernährungsform, sondern ein Essrhythmus, es geht darum, WANN man isst, nicht WAS. Das Prinzip: Dem Körper regelmäßige Fastenperioden geben, in denen Reparatur- und Reinigungsprozesse (Autophagie) ablaufen können. Die bekannteste Form ist 16:8 (16 Stunden fasten, 8 Stunden Essensfenster), aber es gibt auch 18:6, 20:4 (Warrior Diet), OMAD (One Meal A Day) und 5:2 (5 Tage normal, 2 Tage kalorienreduziert).

Der Mechanismus: Wenn wir ständig essen (der moderne Standard: Frühstück, Snack, Mittagessen, Snack, Abendessen, Snack), ist der Insulinspiegel dauerhaft erhöht und Fettverbrennung unmöglich. Schon 12-16 Stunden Nahrungskarenz senken Insulin, aktivieren die Fettverbrennung und starten die zelluläre Müllabfuhr (Autophagie). Intervallfasten lässt sich mit jeder Ernährungsform kombinieren und ist für die meisten Menschen gut durchführbar.`,
    lebensmittel: 'Während des Essensfensters: Nährstoffdichte, vollwertige Lebensmittel. Im Fastenfenster: Wasser, ungesüsster Tee, schwarzer Kaffee (ohne Milch oder Zucker).',
    meiden: 'Kalorienhaltige Getränke im Fastenfenster, Snacking, Essen aus Langeweile.',
    besonders_bei: ['Übergewicht', 'Insulinresistenz', 'Entzündungen', 'Anti-Aging', 'Mentale Klarheit', 'Verdauungsprobleme'],
  },
};

// ---------------------------------------------------------------------------
// FASTEN-METHODEN
// ---------------------------------------------------------------------------
export const FASTEN_DETAILS = {
  'Intervallfasten 16:8': {
    kurz: '16 Stunden fasten, 8 Stunden Essensfenster, der sanfte Einstieg.',
    detail: `Das 16:8-Intervallfasten ist die beliebteste und alltagstauglichste Fastenform. Man fastet 16 Stunden (inklusive Schlaf) und isst innerhalb eines 8-Stunden-Fensters. Typisch: Letztes Essen um 20 Uhr, erstes Essen am nächsten Tag um 12 Uhr, man lässt also einfach das Frühstück weg. Während der Fastenzeit sind Wasser, ungesüsster Tee und schwarzer Kaffee erlaubt.

Der Körper braucht etwa 12 Stunden nach der letzten Mahlzeit, um die Glykogenspeicher abzubauen und auf Fettverbrennung umzuschalten. Ab Stunde 14-16 beginnt die Autophagie, der zelluläre Selbstreinigungsprozess, für den der japanische Forscher Yoshinori Ohsumi 2016 den Nobelpreis erhielt. Beschädigte Zellbestandteile werden abgebaut und recycelt.`,
    anleitung: 'Woche 1: Mit 12:12 beginnen (12h fasten, 12h essen). Woche 2: Auf 14:10 erhöhen. Woche 3: Auf 16:8 steigern. Das Essensfenster flexibel wählen, 12-20 Uhr oder 10-18 Uhr, je nach Tagesrhythmus. Schwarzen Kaffee oder grünen Tee morgens trinken, um den Hunger zu überbrücken. Genug Wasser trinken. Die erste Mahlzeit bewusst nährstoffreich gestalten.',
    wirkung: 'Fettverbrennung und Gewichtsverlust, Insulinsensitivität verbessert sich, Entzündungsmarker sinken, Autophagie wird aktiviert, Wachstumshormon steigt (nachts um bis zu 2000%), mentale Klarheit, verbesserte Darmgesundheit (der Darm bekommt Ruhe), stabilere Stimmung.',
  },

  'Intervallfasten 18:6': {
    kurz: '18 Stunden fasten, 6 Stunden essen, die intensive Variante.',
    detail: `Das 18:6-Protokoll verlängert die Fastenphase auf 18 Stunden und verkürzt das Essensfenster auf 6 Stunden. Typisch: Essen zwischen 12 und 18 Uhr oder 13 und 19 Uhr. Diese Form verstärkt alle Effekte des 16:8, mehr Zeit in der Autophagie, tiefere Ketose, stärkere Fettverbrennung. Die meisten Menschen kommen mit 2 größeren Mahlzeiten im 6-Stunden-Fenster gut aus. Wichtig ist, in dieser Zeit genügend Nährstoffe und Kalorien aufzunehmen: Unteressen ist ein häufiger Fehler.`,
    anleitung: 'Erst 2-4 Wochen 16:8 praktizieren, bevor auf 18:6 gesteigert wird. Die Mahlzeiten im Fenster nährstoffdicht planen. Genug Salz und Mineralien zuführen. Bei Schwindel, extremem Hunger oder Konzentrationsproblemen zurück auf 16:8 gehen.',
    wirkung: 'Alle Vorteile von 16:8, verstärkt. Tiefere Ketose, stärkere Autophagie, oft bessere Gewichtsresultate. Ideal für Menschen, die mit 16:8 gute Erfahrungen gemacht haben und vertiefen möchten.',
  },

  'OMAD': {
    kurz: 'One Meal A Day, eine Mahlzeit pro Tag, maximale Autophagie.',
    detail: `OMAD (One Meal A Day) ist die intensivste alltagstaugliche Form des Intervallfastens: 23 Stunden fasten, eine große Mahlzeit pro Tag. Klingt extrem, ist aber für adaptierte Stoffwechsel überraschend einfach. Der Körper hat fast den gesamten Tag für Reparaturprozesse, Autophagie und Fettverbrennung. Viele OMAD-Praktizierende berichten von außergewöhnlicher mentaler Klarheit, gesteigerter Produktivität und einem Gefühl von Freiheit (keine Essensplanung für 3 Mahlzeiten).

Die Herausforderung: Die eine Mahlzeit muss extrem nährstoffdicht sein, genügend Protein, gesunde Fette, Gemüse, Mineralien. Kaloriendefizit vermeiden (mindestens 1500-2000 kcal in einer Mahlzeit). OMAD eignet sich nicht für jeden und sollte nicht täglich über sehr lange Zeitraeume praktiziert werden. 3-5 Tage pro Woche OMAD, restliche Tage 16:8 oder 18:6 ist ein guter Rhythmus.`,
    anleitung: 'Voraussetzung: Mindestens 4-6 Wochen Erfahrung mit 16:8 oder 18:6. Die eine Mahlzeit am Nachmittag oder frühen Abend platzieren. Langsam essen, gut kauen. Große Portion mit Protein, Fett und Gemüse. Während des Fastens: Wasser, Tee, Kaffee, Elektrolyte.',
    wirkung: 'Maximale Autophagie, starke Fettverbrennung, erhöhtes Wachstumshormon, tiefe mentale Klarheit, vereinfachter Tagesablauf. Kann die Insulinsensitivität dramatisch verbessern.',
  },

  'Wasserfasten': {
    kurz: 'Nur Wasser, die reinste und intensivste Fastenform.',
    detail: `Beim Wasserfasten wird ausschließlich Wasser getrunken, keine Nahrung, kein Tee, kein Kaffee, nichts. Dies ist die älteste und reinste Fastenform der Menschheit, praktiziert in allen großen spirituellen Traditionen. Wasserfasten aktiviert die stärksten Heilungsmechanismen des Körpers: Ab 24-48 Stunden beginnt intensive Autophagie. Ab 48-72 Stunden steigt das Wachstumshormon massiv an. Ab 72 Stunden erneuert sich das Immunsystem grundlegend (Stammzellregeneration, wie Valter Longo zeigte).

Längere Wasserfasten (3-21 Tage) sollten nur unter fachkundiger Begleitung durchgeführt werden. Die Gefahr: Elektrolytverschiebungen, Kreislaufprobleme, Refeeding-Syndrom (gefährliche Komplikation beim Fastenbrechen). Das Fastenbrechen ist mindestens so wichtig wie das Fasten selbst, langsam mit Brühe, dann leichten Suppen, dann gedämpftem Gemüse zurück zur normalen Ernährung.`,
    anleitung: '1-3 Tage: Allein machbar für gesunde Erwachsene. Vor dem Fasten 2-3 Tage Entlastungstage (leichte Kost, viel Gemüse). Während des Fastens: 2-3 Liter stilles Wasser täglich, ruhen, leichte Bewegung, kein Sport. Fastenbrechen: Am ersten Tag nur verdeuennte Gemüsebrühe, am zweiten Tag leichte Suppe, am dritten Tag gedünstetes Gemüse. Pro Fastentag mindestens einen halben Aufbautag einplanen.',
    wirkung: 'Tiefgreifende Autophagie, Immunregeneration, Stammzellerneuerung, spirituelle Vertiefung, Reset des Geschmackssinns, Auflösung chronischer Entzündungen, Gewichtsverlust (vor allem Körperfett). Kann bei Autoimmunerkrankungen, Allergien und chronischen Entzündungen bahnbrechend wirken.',
  },

  'Heilfasten nach Buchinger': {
    kurz: 'Die bekannteste europäische Fastenmethode: Säfte, Brühe und Stille.',
    detail: `Dr. Otto Buchinger (1878-1966) entwickelte die heute verbreitetste europäische Fastenmethode. Anders als reines Wasserfasten erlaubt Buchinger-Fasten kleine Mengen Kalorien: 250-500ml frisch gepresste Obstsäfte und Gemüsebrühe pro Tag (ca. 200-500 kcal). Dies macht das Fasten für die meisten Menschen besser verträglich und ermöglicht längere Fastendauern (7-21 Tage).

Das Buchinger-Fasten folgt einem festen Protokoll: 1-2 Entlastungstage, dann die eigentliche Fastenzeit mit morgendlichem Tee mit Honig, mittags Gemüsesaft oder Obstsaft, abends klare Gemüsebrühe. Wichtig sind tägliche Leberwickel (feuchtes Tuch auf die Leber, Wärmflasche darüber, 30 Minuten ruhen), mäßige Bewegung, Einläufe zur Darmentleerung und seelische Ruhe. Buchinger sprach von einer "Diät der Seele": Fasten ist auch eine innere Reise.`,
    anleitung: '2 Entlastungstage: Leichte pflanzliche Kost, viel Gemüse, wenig Fett. Dann 5-10 Tage Fasten: Morgens Kräutertee mit 1 TL Honig, mittags 250ml frischer Gemüsesaft, abends 250ml klare Gemüsebrühe. 2-3l Wasser/Tee täglich. Täglicher Leberwickel nach dem Mittagssaft. Leichte Bewegung (Spaziergang). Am Ende: 2-3 Aufbautage mit langsamer Steigerung.',
    wirkung: 'Entgiftung, Entsäuerung, Gewichtsverlust, Entzündungsrückgang, Blutdrucksenkung, Verbesserung von Stoffwechselwerten, seelische Reinigung, Neubeginn im Essverhalten. Buchinger-Kliniken berichten über beeindruckende Erfolge bei Rheuma, Diabetes, Hypertonie und chronischen Schmerzen.',
  },

  'Trockenfasten': {
    kurz: 'Kein Essen, kein Wasser, die intensivste Heilreaktion.',
    detail: `Beim Trockenfasten wird auf jegliche Nahrung UND Flüssigkeit verzichtet. Das klingt gefährlich, und es erfordert tatsächlich Vorsicht und Erfahrung, aber die Heilwirkung ist die intensivste aller Fastenformen. Der Körper wird gezwungen, sein eigenes "metabolisches Wasser" aus der Fettverbrennung herzustellen (bei der Verbrennung von 100g Fett entstehen ca. 110ml Wasser). Dieser Prozess aktiviert die Autophagie um ein Vielfaches stärker als Wasserfasten.

In der russischen Fastenmedizin (besonders durch Sergei Filonov dokumentiert) werden Trockenfasten von 1-11 Tagen bei schweren Erkrankungen eingesetzt. Für Anfänger sind 12-24 Stunden Trockenfasten sicher und schon wirksam. Längere Trockenfasten nur unter erfahrener Anleitung und nicht bei Nierenproblemen oder in heißem Klima. Im Ramadan praktizieren Millionen Muslime täglich 12-16 Stunden Trockenfasten: Studien zeigen positive Gesundheitseffekte.`,
    anleitung: 'Für Einsteiger: 12-16 Stunden Trockenfasten (z.B. von 20 Uhr abends bis 12 Uhr mittags). Vor dem Trockenfasten gut hydrieren. Währenddessen: Kein Wasser, kein Essen, kein Zähneputzen mit Wasser (einige Praktizierende sind hier streng). Nicht duschen oder baden (weiches Trockenfasten) oder doch (hartes Trockenfasten). Brechen mit kleinen Schlucken warmem Wasser. Danach leicht essen.',
    wirkung: 'Stärkste Autophagie aller Fastenformen, intensivste Entzündungshemmung, Stammzellregeneration, Parasiten und pathogene Mikroorganismen können ohne Wasser nicht überleben. Viele Praktizierende berichten von tiefen spirituellen Erfahrungen und einem Gefühl der Reinheit.',
  },

  'Saftfasten': {
    kurz: 'Frische Säfte als Reinigungskur, sanft, nährstoffreich, entgiftend.',
    detail: `Beim Saftfasten werden ausschließlich frisch gepresste Obst- und Gemüsesäfte getrunken. Diese liefern eine Fülle an Vitaminen, Mineralien, Enzymen und sekundären Pflanzenstoffen, während das Verdauungssystem von der Arbeit des Feststoff-Verdauens entlastet wird. Saftfasten ist die sanfteste Fastenform und eignet sich hervorragend als Einstieg für Fasten-Neulinge.

Wichtig: Gemüsesäfte bevorzugen (Sellerie, Gurke, Grünkohl, Spinat, Ingwer, Zitrone), Obstsäfte nur maßvoll (Fruchtzucker!). Idealerweise kaltgepresste Säfte verwenden (Slow-Juicer), da Zentrifugen-Entsafter durch Hitzeentwicklung Enzyme zerstören. 4-6 Säfte pro Tag, dazwischen reichlich Wasser und Kräutertee.`,
    anleitung: '1 Entlastungstag mit leichter Pflanzenkost. Dann 3-7 Tage Saftfasten: Alle 2-3 Stunden einen frischen Saft (400-500ml). Morgens: Zitronenwasser. Vormittags: Grüner Saft (Sellerie, Gurke, Spinat, Apfel, Ingwer). Mittags: Karottensaft mit Kurkuma. Nachmittags: Rote-Beete-Saft. Abends: Leichter Gemüsesaft. Insgesamt 2-3l Flüssigkeit täglich. Leberwickel und leichte Bewegung unterstützen die Entgiftung.',
    wirkung: 'Sanfte Entgiftung, Mineralienzufuhr, Basenbildung, Gewichtsverlust, klarere Haut, mehr Energie nach der Anfangsphase, verbesserter Geschmackssinn, Darmentlastung.',
  },

  'Basenfasten': {
    kurz: 'Nur basische Lebensmittel: Entsäuerung ohne Hungern.',
    detail: `Basenfasten ist streng genommen kein echtes Fasten, sondern eine Reinigungsdiät: 7-14 Tage lang werden ausschließlich basische Lebensmittel gegessen, also Gemüse, Obst, Kartoffeln, Sprossen, Keimerl, Krauter und Mandeln. Särebildner wie Fleisch, Milchprodukte, Getreide, Zucker, Kaffee und Alkohol werden weggelassen. Der Körper kann sich entsäuern, ohne zu hungern.

Basenfasten ist ideal für Menschen, die sich nicht an reines Fasten herantrauen oder denen Fasten aus gesundheitlichen Gründen nicht möglich ist. Es ist eine wunderbare Frühjahrskur und lässt sich gut in den Alltag integrieren. Die Mahlzeiten sind leicht, basisch und werden frisch zubereitet. Viele Menschen berichten schon nach wenigen Tagen von einem Gefühl der Leichtigkeit, besserem Schlaf und klarerer Haut.`,
    anleitung: '7-14 Tage: Drei Mahlzeiten täglich, ausschließlich aus basischen Lebensmitteln. Morgens: Obstsalat mit Leinsamen. Mittags: Große Gemüsepfanne oder Salat mit Kartoffeln. Abends: Gemüsesuppe. Dazwischen: Kräutertees, stilles Wasser. Viel kauen, langsam essen, spätestens 18 Uhr die letzte Mahlzeit. Basenbad 2-3x pro Woche (Basensalz im Badewasser).',
    wirkung: 'Entsäuerung, Entlastung der Leber und Nieren, Gewichtsverlust, klarere Haut, besserer Schlaf, Gelenkentlastung bei Rheuma und Gicht, Reset der Essgewohnheiten.',
  },

  'Ölziehen': {
    kurz: 'Ayurvedische Mundentgiftung, morgens Öl im Mund, Giftstoffe herausziehen.',
    detail: `Ölziehen (Oil Pulling) ist eine 3000 Jahre alte ayurvedische Praxis. Morgens nüchtern wird ein Esslöffel hochwertiges Öl (traditionell Sesamöl, heute oft Kokosöl) 15-20 Minuten im Mund hin- und herbewogen, durch die Zähne gezogen und dann ausgespuckt. Die Mundschleimhaut ist extrem durchlässig, das Öl bindet Toxine, Bakterien und Stoffwechselschlacken, die über Nacht aus dem Gewebe in den Mundraum gelangt sind.

Studien bestätigen: Ölziehen reduziert die Bakterienlast im Mund signifikant, vermindert Plaque und Zahnfleischentzündung (Gingivitis) und kann Mundgeruch beseitigen. Ayurvedische Ärzte berichten von Fernwirkungen: Verbesserung von Kopfschmerzen, Hautproblemen, Allergien und Gelenkschmerzen. Das Öl darf auf keinen Fall geschluckt werden, es ist voller Toxine nach dem Ziehen.`,
    anleitung: 'Direkt nach dem Aufwachen (vor dem Zähneputzen, Trinken oder Essen): 1 EL Kokosöl oder Sesamöl in den Mund nehmen. 15-20 Minuten langsam durch die Zähne ziehen und im Mund bewegen (nicht gurgeln!). Das Öl wird dünnflüssig und weißlich. In ein Tuch spucken (nicht ins Waschbecken, verstopft Rohre). Mund mit warmem Wasser ausspülen. Zähne putzen. Täglich wiederholen für mindestens 4 Wochen.',
    wirkung: 'Mundgesundheit: Weniger Plaque, gesundes Zahnfleisch, weniger Mundgeruch, weissere Zähne. Systemisch: Entgiftung, bessere Haut, weniger Kopfschmerzen, Stärkung des Immunsystems (viele Infektionen beginnen im Mund).',
  },

  'Darmreinigung': {
    kurz: 'Den Darm grundreinigen: Basis für Gesundheit und Immunsystem.',
    detail: `Der Darm ist die Zentrale der Gesundheit: 80% des Immunsystems sitzen im Darm, hier werden Nährstoffe aufgenommen, Hormone produziert (95% des Serotonins!) und Giftstoffe ausgeschieden. Über Jahre sammeln sich Ablagerungen, Schlacken und ein ungesundes Mikrobiom an, besonders durch Antibiotika, Zucker, Weissmehl und Stress. Eine Darmreinigung schafft die Grundlage für neue Gesundheit.

Die drei Säulen einer guten Darmreinigung: 1. Reinigung (Flohsamenschalen, Bentonit/Zeolith binden Toxine und alten Stuhl), 2. Darmsanierung (Probiotika ansiedeln, präbiotische Nahrung für die guten Bakterien), 3. Schleimhautaufbau (L-Glutamin, Zink, Kollagen für die Darmwand). Eine gründliche Darmreinigung dauert 4-12 Wochen und kann die Gesundheit grundlegend verändern.`,
    anleitung: 'Phase 1 (Woche 1-4): Reinigung. Morgens nüchtern: 1 TL Flohsamenschalen + 1 TL Bentonit/Zeolith in 300ml Wasser, sofort trinken und mit 300ml Wasser nachspülen. 30 Minuten vor dem Frühstück. Phase 2 (Woche 2-8): Probiotika. Hochdosiert (mind. 10 Mrd. KBE) mit verschiedenen Stämmen, morgens nüchtern. Phase 3 (Woche 4-12): Aufbau. L-Glutamin (5g morgens), Knochenbrühe, Zink (15mg). Während der gesamten Kur: Viel Wasser trinken, Zucker und Weissmehl meiden.',
    wirkung: 'Verbesserte Verdauung, gestärktes Immunsystem, klarere Haut, mehr Energie, bessere Stimmung, weniger Allergien und Unverträglichkeiten, Gewichtsverlust, weniger Blähungen und Völlegefühl.',
  },

  'Leberreinigung': {
    kurz: 'Die Leber entlasten und regenerieren, das zentrale Entgiftungsorgan stützen.',
    detail: `Die Leber ist das größte innere Organ und das zentrale Entgiftungs- und Stoffwechselorgan. Sie filtert das gesamte Blut, baut Giftstoffe ab, produziert Galle, speichert Vitamine und reguliert den Stoffwechsel. In unserer toxinbelasteten Welt (Pestizide, Medikamente, Alkohol, Zusatzstoffe, Umweltgifte) ist die Leber chronisch überlastet. Eine Leberreinigung kann auf verschiedene Weisen erfolgen: als sanfte Kräuterkur (Mariendistel, Artischocke, Löwenzahn), als Leberwickel-Kur oder als intensive Leber-Gallen-Reinigung nach Andreas Moritz.

Die Leber-Gallen-Reinigung nach Moritz ist eine beliebte, aber auch kontroverse Methode: Nach einer Vorbereitungsphase (6 Tage Apfelsaft trinken, um Gallensteine weich zu machen) folgen Bittersalz und eine Mischung aus Olivenöl und Grapefruitsaft. Die grünen "Steine", die ausgeschieden werden, sind nach Meinung von Kritikern verseifte Ölklumpen, nach Überzeugung von Anwendern aber tatsächliche Gallensteine. Unabhängig davon berichten viele Menschen von deutlicher Besserung ihrer Beschwerden.`,
    anleitung: 'Sanfte Leberkur (4-6 Wochen): Mariendistelextrakt 400mg, 3x täglich. Täglich Leberwickel (feuchtes warmes Tuch + Wärmflasche auf den rechten Oberbauch, 30 Minuten ruhen). Morgens Zitronenwasser. Kurkuma und bittere Kräuter (Löwenzahn, Artischocke) in die Ernährung einbauen. Alkohol, Zucker, Weissmehl und frittierte Speisen meiden.',
    wirkung: 'Bessere Verdauung (mehr Gallenfluss), klarere Haut, weniger Kopfschmerzen, mehr Energie, bessere Fettverdauung, ausgeglichenere Stimmung, weniger PMS-Symptome (die Leber baut überschüssiges Östrogen ab).',
  },

  'Parasitenkur': {
    kurz: 'Parasiten vertreiben, ein unterschätztes Gesundheitsthema.',
    detail: `Parasiten sind in der westlichen Medizin ein Tabuthema, obwohl Schätzungen zufolge über 50% der Weltbevölkerung mit irgendeiner Form von Parasiten infiziert sind. Würmer, Einzeller und andere Parasiten können eine Vielzahl von Symptomen verursachen: Müdigkeit, Verdauungsprobleme, Allergien, Hautprobleme, Gelenkschmerzen, Zäheknirschen im Schlaf, Analbeschwerden, übermäßiger Hunger und psychische Symptome.

Die bekannteste natürliche Parasitenkur geht auf Dr. Hulda Clark zurück: Eine Kombination aus Schwarzwalnusstinktur (grüne Schalen), Wermut (Artemisia absinthium) und Gewürznelken. Schwarzwalnuss und Wermut töten adulte Parasiten, Nelken töten die Eier. Alle drei Mittel müssen gleichzeitig genommen werden, sonst ist die Kur unvollständig.`,
    anleitung: 'Parasitenkur nach Clark (18 Tage): Schwarzwalnusstinktur, von 1 Tropfen auf 2 TL steigern. Wermutkapseln, von 1 auf 7 Kapseln steigern. Gewürznelkenkapseln, von 1 auf 3 Kapseln 3x täglich steigern. Alle drei Mittel gleichzeitig einnehmen. Danach Erhaltungsdosis 1x wöchentlich. Am besten bei Vollmond beginnen (Parasiten sind dann aktiver). Während der Kur: Viel Wasser trinken, Zucker meiden (füttert Parasiten).',
    wirkung: 'Bessere Verdauung, mehr Energie, klarere Haut, weniger Allergien, besserer Schlaf, emotionale Entlastung. Manche Menschen berichten von sichtbaren Parasiten im Stuhl, ein deutliches Zeichen, dass die Kur wirkt.',
  },

  'Fasten nach Mayr': {
    kurz: 'Die Milch-Semmel-Kur: Darmsanierung und Esskultur nach Dr. F.X. Mayr.',
    detail: `Dr. Franz Xaver Mayr (1875-1965) entwickelte eine Fastenmethode, die den Darm in den Mittelpunkt stellt. Seine Kernthese: "Der Darm ist die Wurzel der Pflanze Mensch." Die Mayr-Kur reinigt den Darm und schult gleichzeitig das Essverhalten. Das Kauen steht im Zentrum, jeder Bissen wird 40-60x gekaut, bis er flüssig ist. Die klassische Form ist die "Milch-Semmel-Diät": Altbackene Brötchen werden in Kuhmilch getunkt und extrem langsam und gründlich gekaut.

Moderne Mayr-Ärzte haben die Kur weiterentwickelt: Statt Milch und Semmel gibt es basische Kost, Gemüsesuppen und leicht verdauliche Mahlzeiten. Das Prinzip bleibt: Schonung des Darms, gründliches Kauen, frühes Abendessen (vor 17 Uhr), Bauchmassage und Bittersalz-Einnahme (morgens nüchtern 1 TL Bittersalz in warmem Wasser zur Darmreinigung).`,
    anleitung: 'Unter ärztlicher Begleitung (Mayr-Arzt): 2-4 Wochen Kur. Morgens: Bittersalz in warmem Wasser (Darmreinigung). Frühstück und Mittagessen: Kleine Portionen, extrem langsam kauen (40-60x pro Bissen). Abends: Nur Tee oder leichte Suppe, vor 17 Uhr. Tägliche Bauchmassage durch den Mayr-Arzt. Viel Wasser und Kräutertee trinken.',
    wirkung: 'Gründliche Darmsanierung, Bauchumfang nimmt ab, Verdauung verbessert sich langfristig, neues Essverhalten wird eingeübt (langsames Kauen), Entgiftung, Gewichtsverlust, flacher Bauch.',
  },

  'Fastenwandern': {
    kurz: 'Fasten und Wandern, die Kombination, die Körper und Seele reinigt.',
    detail: `Fastenwandern verbindet das Heilfasten (meist nach Buchinger) mit täglichen Wanderungen in der Natur. Was zunächst widerspruchlich klingt, wandern ohne zu essen, funktioniert überraschend gut: In der Ketose (ab Tag 2-3) hat der Körper Zugang zu seinen Fettreserven und die Energie fließt gleichmäßig. Viele Fastenwanderer berichten von einem euphorischen Gefühl ab dem dritten Tag, einer Mischung aus Fasteneuphorie und Natur-High.

Die Bewegung an der frischen Luft unterstützt die Entgiftung über die Haut und die Lunge, regt den Lymphfluss an, hält den Kreislauf stabil und verhindert den Muskelabbau, der beim reinen Fasten ohne Bewegung auftreten kann. Die Natur wirkt zusätzlich heilend auf die Psyche. Fastenwandern wird in Gruppen angeboten und hat eine starke soziale Komponente, gemeinsames Fasten motiviert und trägt.`,
    anleitung: 'Typisches Programm: 7 Tage, davon 5 Fastentage nach Buchinger. Tägliche Wanderungen von 10-20 km (langsames Tempo). Morgens: Tee mit Honig. Mittags: Gemüsesaft oder Obstsaft. Nachmittags: Wanderung. Abends: Klare Gemüsebrühe. Leberwickel. Austausch in der Gruppe. Aufbautage zum Schluss.',
    wirkung: 'Alle Fasten-Effekte plus: Frische Luft, Naturerleben, Gemeinschaft, Bewegung hält den Kreislauf stabil, Muskeln bleiben erhalten, Lymphfluss wird angeregt, seelische Reinigung durch Natur und Stille.',
  },

  'Scheinfasten': {
    kurz: 'Fasting Mimicking Diet, die Vorteile des Fastens mit minimalem Essen.',
    detail: `Das Scheinfasten (Fasting Mimicking Diet, FMD) wurde von Professor Valter Longo an der University of Southern California entwickelt. Das Konzept: 5 Tage lang wird eine spezielle, stark kalorienreduzierte, pflanzliche Diät gegessen (ca. 800-1100 kcal am Tag 1, 500-800 kcal an den Tagen 2-5). Die Zusammensetzung ist so gewählt, dass der Körper in den Fastenmodus umschaltet, obwohl kleine Mengen Nahrung aufgenommen werden.

Longos Forschung zeigt beeindruckende Ergebnisse: Das Immunsystem regeneriert sich (Stammzell-basierte Erneuerung), Entzündungsmarker sinken, viszerales Fett wird abgebaut, IGF-1 sinkt (assoziiert mit geringerem Krebsrisiko) und die Insulinsensitivität verbessert sich. Der große Vorteil: Es ist leichter durchzuhalten als reines Fasten und bringt ähnliche Ergebnisse. Empfohlen wird 1 Zyklus pro Monat für 3-6 Monate.`,
    anleitung: 'Tag 1: Ca. 1100 kcal (34% Kohlenhydrate, 56% Fett, 10% Protein). Tage 2-5: Ca. 750 kcal (47% KH, 44% Fett, 9% Protein). Pflanzlich, mit Nüssen, Oliven, Gemüsesuppen, Crackern, Tee. Kommerzielle Kits (ProLon) sind verfügbar, oder man stellt sich den Plan selbst zusammen. Danach langsamer Aufbau über 1-2 Tage.',
    wirkung: 'Autophagie, Stammzellregeneration, Reduktion von viszeralem Fett, Senkung von IGF-1 und Entzündungsmarkern, Verbesserung der Blutwerte (Cholesterin, Triglyceride, Blutzucker). Besonders geeignet für Menschen, die reines Fasten nicht durchhalten.',
  },

  'Digitales Fasten': {
    kurz: 'Bildschirm-Detox, das Nervensystem entlasten.',
    detail: `Digitales Fasten bedeutet, bewusst für einen definierten Zeitraum auf digitale Geräte zu verzichten: Smartphone, Computer, Tablet, TV, Social Media. In einer Welt der permanenten Reizüberflutung ist dies eine der wirksamsten Maßnahmen für die psychische Gesundheit. Das Gehirn wird mit jedem Scroll, jeder Benachrichtigung und jedem Push-Nachricht in einen Zustand der Daueralarmbereitschaft versetzt: Dopamin wird in kleinen Dosen ausgeschüttet, das Stresshormon Cortisol bleibt erhöht.

Die Effekte eines digitalen Fastens sind oft verblüffend: Tieferer Schlaf (kein Blaulicht vor dem Schlafengehen), längere Aufmerksamkeitsspanne, mehr Präsenz im Moment, kreativere Gedanken, echte Langeweile (die Quelle von Kreativität), tiefere Gespräche mit Menschen. Schon ein Tag pro Woche ohne Smartphone kann das Wohlbefinden messbar steigern.`,
    anleitung: 'Einsteiger: 1 Tag pro Woche komplett offline (z.B. Sonntag). Fortgeschritten: 3-7 Tage Digital-Detox-Retreat. Minimal: Jeden Abend ab 20 Uhr alle Bildschirme ausschalten. Smartphone aus dem Schlafzimmer verbannen. Push-Benachrichtigungen dauerhaft deaktivieren. Social-Media-Apps vom Handy löschen (nur am Computer nutzen).',
    wirkung: 'Besserer Schlaf, mehr Kreativität, längere Aufmerksamkeitsspanne, weniger Angst und Vergleichsdruck, tiefere Beziehungen, mehr Präsenz, Nervensystem-Beruhigung, oft: Erkenntnis über das Ausmaß der eigenen Abhängigkeit.',
  },

  'Heilerde-Kur': {
    kurz: 'Mineralische Reinigung von innen: Heilerde, Bentonit, Zeolith.',
    detail: `Heilerde, Bentonit und Zeolith sind mineralische Erden mit einer enormen Oberfläche und starker Bindungskapazität für Toxine, Schwermetalle, Bakterientoxine und überschüssige Magensaeure. Bentonit (ein quellfaehiges Tonmineral) kann das 7-10-fache seines Eigengewichts an Toxinen binden. Zeolith (vulkanisches Gestein) hat eine käfigförmige Kristallstruktur, die Schwermetalle selektiv einfängt.

Diese Erden binden Gifte im Verdauungstrakt und transportieren sie über den Stuhl hinaus, ohne selbst ins Blut überzugehen. Wichtig: Immer 1-2 Stunden Abstand zu Medikamenten und Nahrungsergänzungsmitteln halten, da die Erde sonst auch diese bindet. Genug Wasser trinken, um Verstopfung zu vermeiden.`,
    anleitung: 'Morgens nüchtern: 1 TL Bentonit oder Zeolith in 300ml Wasser verrühren, sofort trinken, mit 300ml klarem Wasser nachspülen. 30-60 Minuten vor dem Essen. Heilerde kann auch in Kapselform genommen werden. Kur: 4-8 Wochen. Bei empfindlichem Darm mit 1/2 TL beginnen und langsam steigern. Abends optional eine zweite Dosis.',
    wirkung: 'Toxinbindung im Darm, Schwermetallentlastung, weniger Blähungen, ruhigerer Magen (bei Sodbrennen), klarere Haut, Unterstützung bei Histaminintoleranz (Bentonit bindet Histamin), allgemeine Entgiftung.',
  },

  'Atemfasten': {
    kurz: 'Bewusstes Atmen als Reinigung, die einfachste Entgiftungsform.',
    detail: `Atemfasten ist keine traditionelle Kategorie, aber ein wichtiger Aspekt: 70% der körperlichen Entgiftung geschieht über die Lunge (CO2-Ausatmung). Tiefes, bewusstes Atmen ist also eine der einfachsten und effektivsten Entgiftungsformen. Die meisten Menschen atmen flach und unvollständig, nur in den oberen Brustbereich. Dadurch bleibt verbrauchte Luft in den unteren Lungenabschnitten stehen und die Sauerstoffversorgung der Zellen ist suboptimal.

Bewusste Atemübungen aktivieren das parasympathische Nervensystem (Entspannung), senken Cortisol und Blutdruck, verbessern die Sauerstoffversorgung und den Lymphfluss und können tiefe emotionale Löseprozesse auslösen. Techniken wie Holotropes Atmen oder Rebirthing nutzen intensives Atmen, um tief gespeicherte Spannungen und Traumata freizusetzen.`,
    anleitung: 'Einfache Tagsübung: 4-7-8-Atmung (Dr. Andrew Weil). 4 Sekunden einatmen, 7 Sekunden Luft anhalten, 8 Sekunden langsam ausatmen. 4 Zyklen, 2x täglich. Box Breathing: 4 Sekunden ein, 4 halten, 4 aus, 4 halten. 10 Minuten täglich. Wim-Hof-Methode: 30 tiefe Atemzüge, dann Luft anhalten, siehe Bewegungs-Details.',
    wirkung: 'Beruhigung des Nervensystems, bessere Sauerstoffversorgung, Entgiftung über die Lunge, Blutdrucksenkung, weniger Angst, tieferer Schlaf, emotionale Lösung, stärkeres Immunsystem.',
  },

  'Zuckerfasten': {
    kurz: '30 Tage ohne Zucker, die wirkungsvollste Einzelmaßnahme.',
    detail: `Zuckerfasten, der komplette Verzicht auf zugesetzten Zucker für mindestens 30 Tage, ist möglicherweise die wirkungsvollste einzelne Ernährungsmaßnahme überhaupt. Zucker ist in der modernen Ernährung allgegenwärtig (durchschnittlicher Konsum: 80-100g pro Tag, die WHO empfiehlt maximal 25g) und treibt Entzündungen, Insulinresistenz, Übergewicht, Karies, Candida-Wachstum und Stimmungsschwankungen an.

Die ersten 3-7 Tage können brutal sein: Kopfschmerzen, Reizbarkeit, Müdigkeit, starkes Verlangen. Das sind Entzugssymptome: Zucker aktiviert die gleichen Belohnungszentren im Gehirn wie Kokain. Nach etwa einer Woche normalisiert sich das. Ab Woche 2-3 verändert sich der Geschmackssinn grundlegend: Gemüse schmeckt süß, obst wird zu einem Geschmackserlebnis, und der frühere Lieblingsschokoriegel schmeckt plötzlich ekelhaft süß.`,
    anleitung: '30 Tage: Keinen zugesetzten Zucker in jeder Form (Haushaltszucker, Honig, Ahornsirup, Agave, Kokosblütenzucker). Auch versteckten Zucker meiden (Saucen, Brot, Fertigprodukte: Zutatenlisten lesen!). Obst in Massen ist erlaubt (ganze Früchte, kein Saft). Wenn der Heißhunger kommt: Fett essen (Nüsse, Avocado, Kokosöl). Ab Tag 7-10 wird es deutlich leichter.',
    wirkung: 'Gewichtsverlust (besonders Bauchfett), stabilere Energie und Stimmung, klarere Haut, besserer Schlaf, weniger Gelenkschmerzen, Neueinstellung des Geschmackssinns, Durchbrechen der Zuckersucht, verbesserte Blutwerte (Triglyceride sinken, HDL steigt).',
  },
};

// ---------------------------------------------------------------------------
// BEWEGUNG & KÖRPERPRAKTIKEN
// ---------------------------------------------------------------------------
export const BEWEGUNG_DETAILS = {
  'Yoga': {
    kurz: 'Jahrtausendealte Körper-Geist-Praxis aus Indien.',
    detail: `Yoga verbindet Körperhaltungen (Asanas), Atemübungen (Pranayama) und Meditation zu einer ganzheitlichen Praxis, die Körper, Geist und Seele in Einklang bringt. Die Wurzeln liegen in den Veden (über 5000 Jahre alt), aber die heute bekannten Asanas wurden größtenteils im 19./20. Jahrhundert systematisiert. Es gibt viele Stile: Hatha (klassisch, langsam), Vinyasa (fließend), Ashtanga (kraftvoll, festgelegte Sequenz), Yin (passiv, lange Dehnungen für Faszien), Kundalini (energetisch, mit Mantras und Atemübungen) und viele mehr.

Die gesundheitlichen Effekte von Yoga sind wissenschaftlich gut belegt: Stressreduktion, Blutdrucksenkung, Verbesserung bei Rückenschmerzen, bessere Flexibilität und Balance, Linderung von Angst und Depression, Stärkung des Immunsystems. Yoga wirkt über das parasympathische Nervensystem, es aktiviert den Vagusnerv und bringt den Körper aus dem Kampf-oder-Flucht-Modus in die Regeneration.`,
    einstieg: 'Beginne mit 15-20 Minuten täglich. Ein guter Lehrer ist Gold wert, besonders am Anfang, um Fehlhaltungen zu vermeiden. Hatha oder Yin Yoga sind sanfte Einstiege. Keine Vorkenntnisse nötig, Yoga ist für jeden Körper geeignet. Online-Kurse (z.B. Yoga with Adriene) sind ein guter Anfang für zu Hause.',
  },

  'Qi Gong': {
    kurz: 'Chinesische Energiearbeit in Bewegung, sanft, heilend, meditativ.',
    detail: `Qi Gong (wörtlich: "Arbeit mit der Lebensenergie") ist eine jahrtausendealte chinesische Praxis, die langsame, fließende Bewegungen mit bewusstem Atem und meditativer Konzentration verbindet. Die Bewegungen sind einfacher als Yoga-Asanas und für jeden machbar, auch für alte und kranke Menschen. Qi Gong reguliert den Fluss des Qi (Lebensenergie) durch die Meridiane und löst Blockaden.

In chinesischen Krankenhaeusern wird Qi Gong als Therapie eingesetzt, bei Krebs, chronischen Schmerzen, Bluthochdruck und psychischen Erkrankungen. Studien zeigen: Qi Gong senkt den Blutdruck, stärkt das Immunsystem, verbessert die Balance (wichtig für Sturzprävention im Alter), lindert chronische Schmerzen und fördert die Knochengesundheit. Besonders die Form "Baduanjin" (Acht Brokaturebungen) ist weit verbreitet und einfach zu lernen.`,
    einstieg: 'Die "Acht Brokaturebungen" (Baduanjin) sind der perfekte Einstieg, 8 einfache Übungen, die in 15-20 Minuten durchgeführt werden. Morgens am besten im Freien üeben. Langsam bewegen, tief atmen, entspannt bleiben. Videos auf YouTube für den Anfang, dann ein Lehrer für die Verfeinerung. Täglich üeben bringt die besten Ergebnisse.',
  },

  'Waldbaden': {
    kurz: 'Shinrin-Yoku, die heilende Kraft des Waldes wissenschaftlich belegt.',
    detail: `Waldbaden (japanisch: Shinrin-Yoku) wurde in den 1980ern in Japan als Gesundheitsfördermaßnahme eingeführt und ist seitdem intensiv erforscht. Das Prinzip ist einfach: Sich bewusst und achtsam im Wald aufhalten, nicht wandern oder Sport treiben, sondern mit allen Sinnen in die Waldatmosphäre eintauchen. Die Luft im Wald enthält Terpene (Phytoncide): Botenstoffe der Baeume, die unser Immunsystem messbar stärken.

Die Forschung zeigt beeindruckende Effekte: Schon 2 Stunden Waldbaden erhöhen die Anzahl natürlicher Killerzellen um 50% (der Effekt hält bis zu 7 Tage an). Cortisol sinkt signifikant, der Blutdruck normalisiert sich, die Herzfrequenzvariabilität verbessert sich (ein Maß für Stressresilienz). In Japan verschreiben Ärzte "Waldrezepte", bestimmte Waldgebiete sind als therapeutische Wälder zertifiziert.`,
    einstieg: 'Einmal pro Woche mindestens 2 Stunden im Wald verbringen. Langsam gehen oder auf einem Baumstamm sitzen. Handy ausschalten. Mit allen Sinnen wahrnehmen: die Gerüche, Geraeusche, das Licht, die Farben, die Luft auf der Haut. Einen Baum berühren. Barfuß auf Waldboden gehen. Tief atmen. Es geht nicht um Leistung, sondern um Präsenz.',
  },

  'Barfußlaufen / Earthing': {
    kurz: 'Kontakt mit der Erde, elektrische Aufladung und natürliche Erdung.',
    detail: `Earthing (Erdung) basiert auf einer einfachen Erkenntnis: Der menschliche Körper ist ein elektrisches System, und der Kontakt mit der Erdoberfläche versorgt uns mit freien Elektronen, die als natürliche Antioxidantien wirken. Moderne Menschen sind durch Gummisohlen, isolierte Böden und Hochhaeuser von der Erde elektrisch abgeschnitten, ein evolutionäres Novum.

Studien von Clinton Ober und dem Earthing-Forschungsteam zeigen: Erdung reduziert Entzündungsmarker, verdünnt das Blut (ähnlich wie Aspirin, durch Verbesserung des Zeta-Potentials der roten Blutkörperchen), verbessert den Schlaf, senkt Cortisol und lindert Schmerzen. Barfußlaufen auf Gras, Sand, Erde oder Stein erdeet den Körper. Auf Asphalt, Holz oder Plastik funktioniert es nicht. Mindestens 30 Minuten täglich barfuß auf natürlichem Untergrund ist das Ziel.`,
    einstieg: 'Täglich 20-30 Minuten barfuß auf Gras, Erde, Sand oder am Strand gehen. Morgens Tau-Treten (nach Kneipp) auf der Wiese. Im Garten barfuß arbeiten. Im Sommer so oft wie möglich barfuß in der Natur. Im Winter: Earthing-Matte für den Schlafplatz oder Schreibtisch (leitet die Erdung über die Steckdosenerdung).',
  },

  'Wim Hof Methode': {
    kurz: 'Atemtechnik + Kälteexposition, das Immunsystem bewusst steuern.',
    detail: `Wim Hof, der "Iceman" aus den Niederlanden, hat bewiesen, was die Wissenschaft für unmöglich hielt: Die bewusste Steuerung des autonomen Nervensystems und des Immunsystems. Seine Methode kombiniert drei Säulen: Eine spezielle Atemtechnik (kontrollierte Hyperventilation), Kälteexposition (kalte Duschen, Eisbaden) und Meditation/Commitment.

Die Atemtechnik: 30 tiefe Atemzüge (tief ein, locker aus), dann nach dem letzten Ausatmen die Luft anhalten so lange wie möglich (oft 1-3 Minuten). Dann tief einatmen, 15 Sekunden halten. 3-4 Runden. Was passiert: Der CO2-Spiegel sinkt, der pH-Wert des Blutes steigt (alkalisch), Adrenalin und Noradrenalin werden ausgeschüttet. Eine berühmte Studie an der Radboud-Universität zeigte: Wim-Hof-Praktizierende konnten nach Injektion von E.-coli-Bakterientoxin ihre Immunantwort bewusst steuern, weniger Entzündung, weniger Symptome als die Kontrollgruppe.`,
    einstieg: 'Woche 1: Nur Atemübung (3 Runden morgens auf nüchternen Magen, im Liegen oder Sitzen, nie im Wasser oder beim Fahren!). Woche 2: Atemübung + 30 Sekunden kalt duschen am Ende der normalen Dusche. Wöchentlich 10-15 Sekunden länger kalt. Ziel: 2-3 Minuten kalte Dusche. Täglich üben. Die Kälte wird mit der Zeit überraschend angenehm.',
  },

  'Tai Chi': {
    kurz: 'Bewegte Meditation, langsam, fließend, gleichgewichtsfördernd.',
    detail: `Tai Chi (Taijiquan) ist eine alte chinesische Kampfkunst, die heute vor allem als meditative Bewegungsform praktiziert wird. Die langsamen, fließenden Bewegungen sehen aus wie ein Tanz in Zeitlupe und verbinden Körper, Atem und Geist. Jede Bewegung folgt den Prinzipien von Yin und Yang: Anspannung und Entspannung, Vor und Zurück, Auf und Ab.

Die Gesundheitsvorteile sind umfangreich erforscht: Tai Chi verbessert die Balance und reduziert das Sturzrisiko bei älteren Menschen um 40-50% (eine der wirksamsten Maßnahmen überhaupt). Es senkt den Blutdruck, lindert chronische Schmerzen (besonders Arthrose und Rückenschmerzen), verbessert die Herzgesundheit und stärkt das Immunsystem. Die Harvard Medical School nennt Tai Chi "Meditation in Bewegung" und empfiehlt es als eines der besten Gesundheitsprogramme.`,
    einstieg: 'Einen guten Lehrer finden: Tai Chi aus Büchern oder Videos zu lernen ist schwierig. Die Kurzform mit 24 Bildern (Yang-Stil) ist der häufigste Einstieg. 2-3x pro Woche üeben, idealerweise morgens im Freien. Geduld mitbringen: Tai Chi entfaltet seine Tiefe über Jahre. Bequeme Kleidung und flache Schuhe genügen.',
  },

  'Pranayama': {
    kurz: 'Yogische Atemübungen, den Lebensatem bewusst lenken.',
    detail: `Pranayama (Sanskrit: Prana = Lebensenergie, Ayama = Ausdehnung) ist die Kunst der bewussten Atemsteuerung im Yoga. Der Atem ist die Brücke zwischen Körper und Geist, zwischen bewusstem und unbewusstem Nervensystem. Durch die bewusste Veränderung des Atemrhythmus können wir direkt auf das vegetative Nervensystem einwirken, etwas, das die westliche Medizin lange für unmöglich hielt.

Wichtige Pranayama-Techniken: Nadi Shodhana (Wechselatmung, beruhigend, ausgleichend), Kapalabhati (Feueratmung, energetisierend, reinigend), Bhastrika (Blasebalgatmung, stark energetisierend), Ujjayi (Meeresrauschen-Atem, wärmend, beruhigend), Shitali (Kühlatmung, kühlend bei Hitze), Brahmari (Bienenatmung, tiefenberuhigend). Jede Technik hat spezifische Wirkungen auf Körper, Geist und Energiesystem.`,
    einstieg: 'Beginne mit Nadi Shodhana (Wechselatmung): Rechtes Nasenloch mit dem Daumen schließen, links einatmen (4 Sekunden). Beide Nasenlöcher schließen, halten (4 Sekunden). Links schließen, rechts ausatmen (4 Sekunden). Rechts einatmen, halten, links ausatmen. Das ist ein Zyklus. 5-10 Zyklen täglich. Wirkt sofort beruhigend und ausgleichend.',
  },

  'Kneipp-Anwendungen': {
    kurz: 'Wasser als Medizin: Pfarrer Kneipps zeitloses Gesundheitssystem.',
    detail: `Sebastian Kneipp (1821-1897) heilte sich selbst von Tuberkulose durch Bader in der eiskalten Donau und entwickelte daraus ein umfassendes Gesundheitssystem auf fünf Säulen: Wasser, Ernährung, Bewegung, Heilpflanzen und Lebensordnung (inneres Gleichgewicht). Die Wasseranwendungen sind am bekanntesten: Wechselduschen, Güsse, Wickel, Bäder und Wassertreten.

Das Prinzip: Kurze Kaltreize regen die Durchblutung an, stärken das Immunsystem und trainieren die Gefäße. Warme Anwendungen entspannen und lösen Verkrampfungen. Der Wechsel zwischen warm und kalt ist besonders wirksam. Kneipp-Anwendungen sind in ihrer Wirksamkeit wissenschaftlich belegt: Sie stärken die Abwehrkräfte, verbessern die Durchblutung, regulieren den Blutdruck und fördern den Schlaf.`,
    einstieg: 'Beginne mit dem Wassertreten: Badewanne knietief mit kaltem Wasser füllen, im Storchengang durchschreiten (bei jedem Schritt den Fuß komplett aus dem Wasser heben), 1-3 Minuten. Danach nicht abtrocknen, Socken anziehen und bewegen. Oder: Wechseldusche, nach der warmen Dusche 30 Sekunden kalt, dann warm, dann kalt enden. Tau-Treten morgens auf der nassen Wiese.',
  },

  'Faszienarbeit': {
    kurz: 'Das Bindegewebe lösen: Beweglichkeit, Schmerzfreiheit, Geschmeidigkeit.',
    detail: `Faszien sind das bindegewebige Netzwerk, das jeden Muskel, jedes Organ und jeden Knochen umhüllt und miteinander verbindet. Lange von der Medizin ignoriert, weiß man heute: Faszien enthalten mehr Schmerzrezeptoren als Muskeln, sie kommunizieren über das gesamte Körpernetzwerk und sie können verkleben, verhärten und verkürzen, besonders durch Bewegungsmangel, Stress und Verletzungen. Verklebte Faszien sind eine häufige Ursache für chronische Schmerzen, eingeschränkte Beweglichkeit und das Gefühl von Steifheit.

Faszienarbeit umfasst verschiedene Ansätze: Faszienrollen (Self-Myofascial Release mit Schaumstoffrollen oder Bällen), Rolfing/Strukturelle Integration (tiefe manuelle Körperarbeit), Yin Yoga (lange gehaltene Dehnungen), federnde Bewegungen (Faszien lieben elastische, schwingende Bewegungen) und Hydration (Faszien bestehen zu 70% aus Wasser).`,
    einstieg: 'Täglich 10-15 Minuten Faszienrollen: Langsam über schmerzhafte Punkte rollen, dort 30-60 Sekunden verweilen und atmen. Besonders Rücken (mit dem Faszienball), Oberschenkel-Außenseite (IT-Band), Fußsohlen (mit einem Tennisball) und Wade bearbeiten. Nicht über Gelenke oder Knochen rollen. Genug Wasser trinken: Faszien brauchen Hydration.',
  },

  'Trampolinspringen': {
    kurz: 'Schwingung für jede Zelle: Lymphfluss, Knochen, Freude.',
    detail: `Rebounding (Trampolinspringen auf einem kleinen Minitrampolin) ist eine der effizientesten Bewegungsformen überhaupt. Die NASA stellte fest, dass Rebounding 68% effektiver ist als Joggen bei weniger Belastung für die Gelenke. Das Besondere: Bei jedem Sprung erfährt jede einzelne Zelle des Körpers eine kurze Phase der Schwerelosigkeit, gefolgt von erhöhter Schwerkraft beim Aufkommen. Dieser Wechsel pumpt die Lymphflüssigkeit (das Abwassersystem des Körpers) effektiver als jede andere Bewegungsform.

Das Lymphsystem hat keine eigene Pumpe (anders als das Blutsystem mit dem Herzen) und ist auf Muskelbewegung und Schwerkraftwechsel angewiesen. Rebounding ist daher die ideale Lymphdrainage. Gleichzeitig stärkt es die Knochen (Druck-Reiz fördert Knochenaufbau), verbessert Balance und Koordination und, nicht zu unterschätzen, es macht einfach Freude. Die Bewegung setzt Endorphine frei und hebt die Stimmung.`,
    einstieg: 'Ein qualitativ gutes Minitrampolin (Bellicon oder ähnlich) mit Bungee-Seilen statt Stahlfedern ist die beste Investition. Täglich 10-15 Minuten sanft schwingen (die Füße müssen den Kontakt zum Tuch nicht verlieren). Bei Beckenbodenschwäche: Erst den Beckenboden stärken. Morgens vor dem Frühstück für Lymphdrainage und Energie.',
  },

  'Krafttraining': {
    kurz: 'Muskeln als Gesundheitsorgan, die unterschätzteste Medizin.',
    detail: `Krafttraining ist die möglicherweise unterschätzteste Gesundheitsmaßnahme. Muskeln sind nicht nur für Bewegung da, sie sind ein endokrines Organ, das bei Kontraktion hunderte von Myokinen (muskelspezifische Botenstoffe) ausschüttet. Diese Myokine hemmen Entzündungen, verbessern die Insulinsensitivität, stärken das Immunsystem, schützen das Gehirn und hemmen sogar Tumorwachstum.

Ab dem 30. Lebensjahr verliert der Mensch ohne Gegensteuerung ca. 3-5% Muskelmasse pro Jahrzehnt (Sarkopenie). Dieser Muskelverlust ist ein Haupttreiber des Alterungsprozesses: Schwäche, Sturzgefahr, Insulinresistenz, Osteoporose, kognitivem Abbau. Krafttraining kehrt diesen Prozess um, auch im hohen Alter. Studien zeigen, dass selbst 90-Jährige signifikant Muskelmasse und -kraft aufbauen können. 2-3x pro Woche 30-45 Minuten Krafttraining genügen für dramatische Gesundheitsverbesserungen.`,
    einstieg: 'Grundübungen reichen: Kniebeugen (Squat), Kreuzheben (Deadlift), Bankdrücken (Bench Press), Rudern (Row), Überkopfdrücken (Overhead Press). 2-3x pro Woche, 3 Sätze pro Übung. Anfänger: Körpergewichtsübungen (Liegestütze, Kniebeugen, Ausfallschritte, Planks). Ein guter Trainer für die ersten Wochen lohnt sich, um die Technik zu lernen.',
  },
};

// ---------------------------------------------------------------------------
// GEIST & ENERGIEPRAKTIKEN
// ---------------------------------------------------------------------------
export const GEIST_DETAILS = {
  'Meditation': {
    kurz: 'Stille als Heilraum, der direkteste Weg nach innen.',
    detail: `Meditation ist die Praxis, Aufmerksamkeit und Bewusstsein zu schulen, und vielleicht die machtigste Gesundheitsintervention, die wir kennen. Tausende von Studien belegen: Regelmäßige Meditation verändert das Gehirn physisch (Neuroplastizität), reduziert chronischen Stress, senkt Blutdruck und Entzündungsmarker, stärkt das Immunsystem, verlängert Telomere (Anti-Aging) und verbessert Schlaf, Konzentration und emotionale Regulation. Die Amygdala (Angstzentrum) schrumpft, der präfrontale Kortex (Entscheidungsfindung, Mitgefühl) wächst.

Meditation ist kein "an nichts denken", das ist ein weit verbreitetes Missverständnis. Es geht darum, Gedanken zu beobachten, ohne sich in ihnen zu verlieren. Wie Wolken am Himmel ziehen sie vorbei, und du bist der Himmel. Mit der Zeit entsteht ein Raum zwischen Reiz und Reaktion, und in diesem Raum liegt Freiheit. Die tiefsten Meditationserfahrungen führen zu einem Zustand jenseits des Denkens, den die Traditionen als Samadhi, Satori oder Einssein beschreiben.`,
    arten: ['Achtsamkeitsmeditation (Vipassana): Beobachten, was ist', 'Metta-Meditation (Liebende-Güte): Mitgefühl kultivieren', 'Transzendentale Meditation (TM): Mantra-basiert, tiefe Ruhe', 'Gehmeditation: Achtsamkeit in der Bewegung', 'Mantra-Meditation: Wiederholung heiliger Silben (Om, So Ham)', 'Atemmeditation (Anapanasati): Atem als Anker', 'Zen-Meditation (Zazen): Sitzen in Stille', 'Chakra-Meditation: Energiezentren aktivieren'],
    einstieg: 'Beginne mit 5 Minuten täglich, jeden Tag. Setze dich bequem hin (Stuhl oder Kissen), schließe die Augen, beobachte deinen Atem. Wenn Gedanken kommen: Bemerken, loslassen, zurück zum Atem. Nicht bewerten. Steigere wöchentlich um 2-3 Minuten. Geführte Meditationen (Apps wie Insight Timer, Calm, oder YouTube) helfen am Anfang. Die beste Meditationszeit ist morgens direkt nach dem Aufwachen.',
  },

  'Energiearbeit': {
    kurz: 'Arbeit mit den feinstofflichen Energiefeldern des Körpers.',
    detail: `Energiearbeit umfasst verschiedene Praktiken, die mit der Lebensenergie (Chi/Qi, Prana, Orgon, Ki, Mana, verschiedene Kulturen, gleiche Kraft) arbeiten. Die Grundannahme: Der Körper ist nicht nur ein biochemisches, sondern auch ein energetisches System. Krankheit entsteht, wenn der Energiefluss blockiert oder gestört ist. Energiearbeit löst diese Blockaden und bringt den natürlichen Fluss wieder in Gang.

Skeptiker halten Energiearbeit für Placebo, aber selbst wenn dem so wäre: Der Placeboeffekt ist eine der mächtigsten Heilkräfte, die wir kennen. Und es gibt durchaus Studien, die Effekte über Placebo hinaus zeigen, besonders bei Reiki, Therapeutic Touch und Akupunktur (die im Kern auch Energiearbeit ist). Die Erfahrung von Wärme, Kribbeln, Fließen oder emotionaler Lösung während einer Energiebehandlung ist für die meisten Menschen unmittelbar spürbar und real.`,
    arten: ['Reiki: Universelle Lebensenergie durch Handauflegen übertragen', 'Chakrenarbeit: Die 7 Hauptenergiezentren reinigen und harmonisieren', 'Meridianarbeit: Energiebahnen (aus der TCM) stimulieren und lösen', 'Orgonenergie (Wilhelm Reich): Körperliche und emotionale Panzerung lösen', 'Quantenheilung (Matrix Energetics, 2-Punkt-Methode): Bewusstseinsbasierte Heilung', 'Handauflegen: Die älteste Form der Energieübertragung', 'Prana-Heilung (Choa Kok Sui): Systematische Arbeit mit der Aura', 'EFT / Tapping: Klopfakupressur zur emotionalen Befreiung'],
  },

  'Affirmationen': {
    kurz: 'Die Kraft der Worte: Gedanken erschaffen Realität.',
    detail: `Affirmationen sind bewusst gewählte, positive Sätze, die regelmäßig wiederholt werden, um unterbewusste Glaubensmuster zu verändern. Das Prinzip basiert auf Neuroplastizität: Jeder Gedanke stärkt die dazugehörige neuronale Verbindung. Negative Gedankenschleifen ("Ich bin nicht gut genug", "Das schaffe ich nie") haben tiefe neuronale Autobahnen gebildet. Affirmationen legen bewusst neue Wege an.

Wichtig: Affirmationen funktionieren nicht als leere Worte. Wenn man sagt "Ich bin reich", während jede Faser des Körpers schreit "Stimmt doch gar nicht!", entsteht innerer Widerstand. Besser sind Prozess-Affirmationen ("Ich öffne mich für Fülle", "Tag für Tag wird es besser") oder Afformationen (Fragen statt Behauptungen: "Warum bin ich so gesund?", das Unterbewusstsein sucht automatisch nach Antworten). Die wirksamsten Affirmationen werden gefühlt, nicht nur gesagt, das Gefühl ist der Schlussel.`,
    anleitung: 'Morgens und abends je 5 Minuten: 3-5 Affirmationen laut aussprechen, dabei Gefühle mitempfinden. Vor dem Spiegel verstärkt die Wirkung. Aufschreiben (jeden Morgen per Hand) verankert tiefer. Beispiele: "Ich vertraue meinem Körper und seiner Heilkraft." "Mein Leben wird jeden Tag reicher an Gesundheit und Freude." "Ich bin genug, genau so wie ich bin."',
  },

  'Visualisierung': {
    kurz: 'Die innere Vorstellungskraft als Schöpferwerkzeug nutzen.',
    detail: `Visualisierung ist die bewusste Nutzung der Vorstellungskraft, um gewünschte Zustände zu erschaffen. Sportler nutzen sie seit Jahrzehnten: Die mentale Vorstellung einer Bewegung aktiviert die gleichen Gehirnareale wie die tatsächliche Ausführung (motorisches Priming). Krebspatienten der Simonton-Methode visualisieren, wie ihr Immunsystem die Krebszellen angreift und besiegt, und zeigen bessere Heilungsraten.

Quantenphysikalisch betrachtet: Bewusstsein beeinflusst Materie (Doppelspaltexperiment). Was wir konsistent und mit Gefühl visualisieren, tendiert dazu, sich zu manifestieren. Die Technik: Tägliche 10-15-minütige Visualisierung des gewünschten Zustands, mit möglichst vielen Sinnen (sehen, hören, fühlen, riechen, schmecken). Je realer die innere Erfahrung, desto stärker die Wirkung. Morgens nach dem Aufwachen und abends vor dem Einschlafen ist der Verstand am empfänglichsten (Alpha-Theta-Gehirnwellen).`,
    anleitung: 'Setze oder lege dich bequem hin, schließe die Augen. Atme 10x tief ein und aus. Dann stelle dir deinen gewünschten Zustand so lebendig wie möglich vor: Wie sieht dein Körper in vollständiger Gesundheit aus? Wie fühlt er sich an? Was tust du? Wer ist bei dir? Bleibe 5-15 Minuten in diesem inneren Bild. Fühle die Dankbarkeit, als wäre es bereits Realität. Täglich wiederholen.',
  },

  'Ho\'oponopono': {
    kurz: 'Hawaiianische Vergebungspraxis, vier Sätze, die alles verändern können.',
    detail: `Ho'oponopono ist eine alte hawaiianische Praxis der Versöhnung und Vergebung, die durch Dr. Ihaleakala Hew Len weltweit bekannt wurde. Die Grundidee: Alles, was in unserer Erfahrung auftaucht, auch die Probleme anderer Menschen, ist eine Widerspiegelung unserer eigenen inneren Programme (Erinnerungen, Überzeugungen, karmische Muster). Indem wir die Verantwortung übernehmen und diese Programme reinigen, verändern sich die aeusseren Umstände.

Die Praxis ist von bestechender Einfachheit: Vier Sätze, innerlich oder laut wiederholt, gerichtet an das Göttliche/die Quelle/das Höchste Selbst: "Es tut mir leid. Bitte vergib mir. Ich liebe dich. Danke." Diese vier Sätze reinigen die Erinnerungen und Programme, die das Problem erzeugen. Dr. Hew Len soll mit dieser Praxis eine gesamte Abteilung für geisteskranke Straftäter geheilt haben, ohne die Patienten je gesehen zu haben, nur indem er an sich selbst arbeitete.`,
    anleitung: 'Wenn ein Problem, ein Schmerz, ein Konflikt oder ein negatives Gefühl auftaucht: Innerlich oder laut die vier Sätze wiederholen: "Es tut mir leid. Bitte vergib mir. Ich liebe dich. Danke." Kein Analysieren, kein Verstehen-Wollen, einfach reinigen. So oft wie nötig wiederholen. Man kann die Sätze auch präventiv den ganzen Tag innerlich wiederholen, wie ein reinigendes Mantra.',
  },

  'Herzkohärenz': {
    kurz: 'Das Herz in Harmonie bringen: Gesundheit, Intuition, Verbundenheit.',
    detail: `Herzkohärenz (Heart Coherence) ist ein Zustand, in dem Herz, Gehirn und vegetatives Nervensystem synchron arbeiten. Das HeartMath Institute (seit 1991) hat erforscht: Das Herz hat ein eigenes "Gehirn", ein Netzwerk aus 40.000 Neuronen, das unabhängig vom Kopfgehirn Informationen verarbeitet. Das Herz sendet mehr Signale ans Gehirn als umgekehrt. Im Zustand der Herzkohärenz, einer speziellen harmonischen Rhythmik der Herzratenvariabilität, verbessern sich Immunfunktion, kognitive Leistung, emotionale Stabilität und Intuition messbar.

Die Technik ist einfach und sofort wirksam: Aufmerksamkeit auf den Herzbereich richten, langsam und tief in das Herz hineinatmen, und ein Gefühl der Wertschätzung, Dankbarkeit oder Liebe im Herzen aktivieren. Innerhalb von 2-3 Minuten stellt sich der kohärente Zustand ein. Regelmäßige Praxis (5 Minuten 3x täglich) verändert die Grundlinie: Man verbringt immer mehr Zeit im kohärenten Zustand, auch ohne bewusste Übung.`,
    anleitung: 'Quick Coherence Technik (HeartMath): 1. Lege eine Hand aufs Herz. 2. Atme langsam und tief, stelle dir vor, du atmest direkt durch dein Herz ein und aus (5 Sekunden ein, 5 Sekunden aus). 3. Aktiviere ein Gefühl der Dankbarkeit, Liebe oder Wertschätzung, erinnere dich an einen Menschen, ein Tier, einen Ort, den du liebst. 4. Halte dieses Gefühl für 3-5 Minuten. Wiederhole 3x täglich.',
  },

  'Journaling': {
    kurz: 'Schreiben als Heilung: Gedanken ordnen, Emotionen verarbeiten, klarwerden.',
    detail: `Journaling (Tagebuchschreiben) ist eine der einfachsten und wirksamsten Praktiken für psychische Gesundheit. James Pennebaker (University of Texas) bewies in zahlreichen Studien: Expressives Schreiben über belastende Erfahrungen (20 Minuten an 4 aufeinanderfolgenden Tagen) verbessert die Immunfunktion, senkt Arztbesuche, lindert chronische Schmerzen und reduziert depressive Symptome. Der Mechanismus: Unausgesprochene Erfahrungen belasten das Nervensystem. Beim Schreiben werden sie in Sprache übersetzt und damit vom limbischen System (Emotion) in den präfrontalen Kortex (Verarbeitung) gebracht.

Es gibt verschiedene Formen: Expressives Schreiben (Gefühle rauslassen), Dankbarkeitstagebuch (3 Dinge, für die man dankbar ist), Morning Pages (3 Seiten Bewusstseinsstrom morgens nach dem Aufwachen), Manifestations-Journal (gewünschte Zukunft beschreiben als wäre sie bereits real), Reflexions-Journal (Lernerfahrungen aus dem Tag).`,
    anleitung: 'Morgens: 10-15 Minuten Morning Pages, einfach schreiben, was kommt, ohne Zensur, ohne Bewertung. Mit der Hand schreiben (nicht tippen, die Handmotorik aktiviert andere Gehirnareale). Abends: 3 Dinge aufschreiben, für die du heute dankbar bist. Kein Druck, schöne Sätze zu bilden. Niemand liest es. Es geht um den Prozess, nicht das Ergebnis.',
  },

  'Dankbarkeit': {
    kurz: 'Die einfachste Transformationspraxis: Dankbarkeit verändert die Gehirnchemie.',
    detail: `Dankbarkeit ist nicht nur ein nettes Gefühl, sie ist eine der am besten erforschten positiv-psychologischen Interventionen. Robert Emmons (UC Davis) zeigt in seiner Forschung: Menschen, die regelmäßig Dankbarkeit praktizieren, schlafen besser, haben ein stärkeres Immunsystem, weniger Schmerzen, mehr positive Emotionen, mehr Vitalität, mehr Mitgefühl und bessere Beziehungen.

Neurobiologisch passiert Folgendes: Dankbarkeit aktiviert das Belohnungszentrum (Nucleus accumbens) und setzt Dopamin und Serotonin frei, die gleichen Neurotransmitter, die Antidepressiva erhöhen. Gleichzeitig senkt Dankbarkeit Cortisol um 23%. Und das Erstaunliche: Das Gehirn kann nicht gleichzeitig dankbar und ängstlich/wütend sein: Dankbarkeit ist ein "neuronaler Schalter", der von der Angst-Schleife in die Ruhe-Schleife umschaltet. Je öfter man ihn betätigt, desto leichter fällt es: Neuroplastizität in Aktion.`,
    anleitung: 'Das 5-Minuten-Dankbarkeitsritual: Jeden Morgen (oder Abend) 3 Dinge aufschreiben oder innerlich benennen, für die du dankbar bist. Wichtig: Jedes Mal andere Dinge. Und nicht nur benennen, sondern wirklich FÜHLEN, 30 Sekunden das Gefühl der Dankbarkeit im Körper spüren. Fortgeschritten: Auch für schwierige Situationen Dankbarkeit finden ("Was kann ich daraus lernen?"). In akuten Stressmomenten: 3 Atemzüge, dann innerlich fragen "Wofür bin ich gerade dankbar?"',
  },
};

// ---------------------------------------------------------------------------
// TRADITIONEN & MEDIZINSYSTEME
// ---------------------------------------------------------------------------
export const TRADITION_DETAILS = {
  'TCM': {
    kurz: 'Traditionelle Chinesische Medizin, 3000 Jahre Erfahrung.',
    detail: `Die TCM betrachtet den Menschen als Einheit von Körper, Geist und Seele, eingebettet in die Natur und ihre Zyklen. Zentrale Konzepte sind Qi (Lebensenergie, die durch Meridiane fließt), Yin und Yang (die beiden komplementären Polaritäten alles Lebendigen), die Fünf Wandlungsphasen (Holz, Feuer, Erde, Metall, Wasser, jede entspricht bestimmten Organen, Emotionen, Jahreszeiten und Qualitäten) und das Meridiansystem (12 Hauptmeridiane plus 8 außerordentliche Gefäße).

Krankheit entsteht in der TCM durch Qi-Stagnation, Qi-Mangel, Eindringen aeusserer pathogener Faktoren (Wind, Kälte, Hitze, Feuchtigkeit, Trockenheit) oder emotionale Ungleichgewichte (jede Emotion ist einem Organ zugeordnet: Wut der Leber, Freude dem Herzen, Grüeln der Milz, Trauer der Lunge, Angst den Nieren). Die Diagnose erfolgt über Pulsdiagnose (28 verschiedene Pulsqualitäten!), Zungendiagnose, Befragung und Beobachtung.

Die Therapiemethoden der TCM: Akupunktur (Nadeln in spezifische Punkte auf den Meridianen), Kräutertherapie (komplexe, individuell zusammengestellte Kräutermischungen), Ernährungstherapie (Nahrung als Medizin), Tuina-Massage (manuelle Meridianarbeit), Qi Gong (Energieübungen) und Moxibustion (Erwärmung von Akupunkturpunkten mit Beifußkraut).`,
    konzepte: ['Qi: Lebensenergie, die alles durchdringt und bewegt', 'Yin und Yang: Die polaren Grundkräfte (kühl/warm, passiv/aktiv, innen/außen)', 'Fünf Wandlungsphasen: Holz, Feuer, Erde, Metall, Wasser', 'Meridiane, 12 Hauptenergieleitbahnen durch den Körper', 'Akupunktur: Nadeln an 361 klassischen Punkten auf den Meridianen', 'Akupressur: Fingerdruck statt Nadeln auf die gleichen Punkte', 'Moxibustion: Wärmetherapie mit Beifußkraut', 'Kräutertherapie: Individuell zusammengestellte Rezepturen'],
  },

  'Ayurveda': {
    kurz: 'Das älteste Medizinsystem der Welt, 5000 Jahre indische Heilkunst.',
    detail: `Ayurveda (Sanskrit: "Wissen vom Leben") ist das älteste dokumentierte Medizinsystem und stammt aus den Veden, den heiligen Schriften Indiens. Es betrachtet den Menschen als Mikrokosmos im Makrokosmos, alles, was im Universum existiert, existiert auch im Menschen. Die drei Doshas (Vata, Pitta, Kapha) bestimmen die individuelle Konstitution und damit die ideale Ernährung, Lebensweise und Therapie.

Vata (Luft + Äther): Kreativ, beweglich, ängstlich, kalthändig, schlank, unregelmäßige Verdauung. Pitta (Feuer + Wasser): Intelligent, ehrgeizig, hitzig, gute Verdauung, mittlerer Körerbau. Kapha (Erde + Wasser): Ruhig, stabil, träge, langsame Verdauung, kräftiger Körperbau. Jeder Mensch hat eine einzigartige Mischung der drei Doshas (Prakriti), und Krankheit entsteht, wenn diese natürliche Balance gestört wird (Vikriti).

Die therapeutischen Säulen: Ernährung (individuell nach Dosha), Phytotherapie (Ashwagandha, Brahmi, Triphala, Shatavari u.v.m.), Panchakarma (die berümte fünffache Reinigungskur: Erbrechen, Abführen, Einläufe, Nasenbehandlung, Blutreinigung), Ölmassage (Abhyanga), Yoga und Pranayama, Meditation und eine bewusste Tages- und Nachtrhythmik (Dinacharya).`,
    konzepte: ['Drei Doshas: Vata (Luft), Pitta (Feuer), Kapha (Erde)', 'Agni: Das Verdauungsfeuer als Zentrum der Gesundheit', 'Ama: Unverdaute Rückstände/Schlacken als Krankheitsursache', 'Panchakarma: Fünffache Reinigungskur', 'Prakriti: Angeborene Grundkonstitution', 'Rasayana: Verjüngungstherapie', 'Dinacharya: Tagesrhythmik für Gesundheit', 'Marma-Punkte, 107 Vitalpunkte (vergleichbar mit Akupunkturpunkten)'],
  },

  'Volksmedizin': {
    kurz: 'Das Heilwissen der Großmütter, einfach, erprobt, nah an der Natur.',
    detail: `Die europäische Volksmedizin ist ein Schatz an praktischem Heilwissen, der über Jahrhunderte mündlich von Generation zu Generation weitergegeben wurde, meist von den Frauen der Familie, den "Kräuterweibern" und "weisen Frauen". Dieses Wissen ist erstaunlich präsize und wird heute von der Phytotherapie-Forschung oft bestätigt.

Zentrale Elemente der Volksmedizin: Hausmittel (Wickel, Umschläge, Bäder, Einreibungen), Kräuterkunde (Tees, Tinkturen, Salben), Ernährungsweisheiten ("Iss, was in deiner Umgebung wächst", "Gegen jede Krankheit ist ein Kraut gewachsen"), Mondphasen-Medizin (Sammeln, Säen und Behandeln nach dem Mondkalender), Rauchern und Räuchern (energetische Reinigung mit Krautern), Bauen und Waschen nach Rhythmen. Maria Treben, die große österreichische Kräuterfachfrau, hat mit ihrem Buch "Gesundheit aus der Apotheke Gottes" dieses Wissen für Millionen Menschen zugänglich gemacht. Pfarrer Künzle, Sebastian Kneipp und Hildegard von Bingen sind weitere große Namenstrager.`,
    konzepte: ['Signarenlehre: Die Pflanze zeigt durch ihre Form, wofür sie heilt', 'Mondphasen-Medizin: Sammeln und Behandeln nach dem Mond', 'Schwedenbitter: Maria Trebens universelles Heilmittel', 'Wickel und Umschläge: Wärmende und kühlende Anwendungen', 'Räuchern: Energetische Reinigung mit Kraueterbundeln', 'Hausmittel: Zwiebelsaft bei Husten, Wadenwickel bei Fieber, Kartoffelumschlag bei Gelenken'],
  },

  'Germanische Heilkunde': {
    kurz: 'Krankheit als sinnvolles biologisches Programm: Dr. Hamers Entdeckungen.',
    detail: `Die Germanische Heilkunde (früher "Neue Medizin") wurde von Dr. Ryke Geerd Hamer in den 1980ern begründet. Nach der Ermordung seines Sohnes Dirk entwickelte Hamer Hodenkrebs und stellte die Frage: Kann dieser Krebs mit dem Schockerlebnis zusammenhängen? Seine Forschung an tausenden Patienten führte zu den "5 Biologischen Naturgesetzen":

1. Jede Erkrankung beginnt mit einem biologischen Konflikterlebnis (DHS: Dirk-Hamer-Syndrom): Ein unerwarteter, hoch dramatischer, isolativ erlebter Schock. 2. Jede Erkrankung hat zwei Phasen: Eine aktive Konfliktphase (Sympathikotonie) und eine Heilungsphase (Vagotonie), die erst nach Lösung des Konflikts beginnt. 3. Das biologische System von Keimblättern (Entoderm, Mesoderm, Ektoderm) bestimmt, wo und wie sich der Konflikt im Körper manifestiert. 4. Mikroben sind nicht Verursacher von Krankheit, sondern Helfer in der Heilungsphase. 5. Jedes Sonderprogramm (Krankheit) hat einen biologischen Sinn.

Diese Sichtweise ist hoechst kontrovers und wird von der Schulmedizin abgelehnt. Unabhängig davon, wie man zu den Details steht, ist die Erkenntnis des Zusammenhangs zwischen psychischem Konflikt und körperlicher Erkrankung wertvoll und wird durch die Psychoneuroimmunologie zunehmend bestätigt.`,
    konzepte: ['DHS: Biologischer Schockerlebnis als Auslöser', 'Zweiphasigkeit: Aktive Phase und Heilungsphase', 'Drei Keimblätter: Organentwicklung und Konfliktzuordnung', 'Hamersche Herde: Sichtbare Veränderungen im Gehirn-CT', 'Biologischer Sinn: Jedes Programm hat eine evolutionäre Logik'],
  },

  'Alchemie': {
    kurz: 'Die Kunst der Wandlung: Materie, Geist und Seele transformieren.',
    detail: `Die Alchemie ist weit mehr als der Versuch, Blei in Gold zu verwandeln, das war immer eine Metapher für die innere Wandlung: Das "Blei" der ungereinigten Persönlichkeit in das "Gold" des erwachten Bewusstseins zu transformieren. Alchemie ist die Urwissenschaft, aus der Chemie, Pharmazie, Psychologie (Jung!) und Spiritualität hervorgegangen sind.

Die drei Prinzipien der Alchemie: Sal (Körper, Materie, Erde), Sulphur (Seele, Energie, Feuer) und Merkur (Geist, Information, Luft). In der Spagyrik (der medizinischen Alchemie nach Paracelsus) werden Heilpflanzen nach diesen drei Prinzipien aufbereitet: Die Pflanze wird getrennt (Separatio), gereinigt (Purificatio) und wieder zusammengefügt (Conjunctio). Das Ergebnis sind hochwirksame Heillmittel, die auf körperlicher, seelischer und geistiger Ebene gleichzeitig wirken.

Paracelsus (1493-1541), der größte Arzt-Alchemist, prägte den Satz: "Die Dosis macht das Gift" und revolutionierte die Medizin durch den Einsatz alchemistisch hergestellter Arzneien. Seine Spagyrische Medizin wird bis heute praktiziert (Solunate, Phylak, JSO-Komplex).`,
    konzepte: ['Solve et Coagula: Löse und Binde (das Grundprinzip der Wandlung)', 'Sal, Sulphur, Merkur: Körper, Seele, Geist', 'Spagyrik: Medizinische Alchemie nach Paracelsus', 'Nigredo, Albedo, Rubedo: Die drei Wandlungsphasen (Schwärze, Weiße, Röte)', 'Stein der Weisen: Symbol für vollständige innere Wandlung', 'Hermetische Prinzipien, "Wie oben, so unten; wie innen, so außen"'],
  },
};
