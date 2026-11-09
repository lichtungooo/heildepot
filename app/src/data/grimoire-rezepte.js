// =============================================================================
// GRIMOIRE-REZEPTE — Historische Rezepturen aus Grimoiren, Hexenprozessakten,
// mittelalterlichen Handschriften und der europäischen Volksmagie
// =============================================================================
// WICHTIGER HINWEIS: Viele dieser Rezepte enthalten TÖDLICH GIFTIGE Substanzen.
// Sie dienen AUSSCHLIESSLICH der historischen Dokumentation und Bildung.
// NIEMALS nachahmen! Bei Vergiftungsverdacht: Giftnotruf 112 / Giftinformationszentrale.
// =============================================================================

export const GRIMOIRE_REZEPTE = [

  // =========================================================================
  //  HISTORISCHE FLUGSALBEN
  // =========================================================================

  {
    id: "flugsalbe-hartlieb",
    name: "Flugsalbe nach Johannes Hartlieb (1456)",
    kategorie: "Flugsalbe",
    schwierigkeit: "Meister",
    beschreibung:
      "Die erste ausführlich dokumentierte Flugsalbe der europäischen Geschichte" +
      "aufgezeichnet vom Leibarzt des bayerischen Herzogs Albrecht III. Hartlieb " +
      "dokumentierte das 'unguentum pharelis' nicht als Anleitung, sondern als " +
      "WARNUNG. Er ließ die siebte, entscheidende Zutat bewusst weg, 'damit " +
      "niemand davon verdorben werde'. Dieses Rezept ist ein Schlüsseldokument " +
      "für das Verständnis der Hexenverfolgung, es zeigt, dass gelehrte " +
      "Männer die pharmakologische Realität hinter dem 'Hexenflug' kannten.",
    zutaten: [
      {
        name: "Solsequium (Sonnenwende/Ringelblume)",
        menge: "Gepflückt am Sonntag (Sonnentag)",
        wirkung: "Calendula, entzündungshemmend, wundheilend. Magisch der Sonne zugeordnet."
      },
      {
        name: "Lunaria (Mondraute)",
        menge: "Gepflückt am Montag (Mondtag)",
        wirkung: "Botrychium lunaria, seltener Farn, in der Alchemie dem Mond und dem Silber zugeordnet."
      },
      {
        name: "Verbena (Eisenkraut)",
        menge: "Gepflückt am Dienstag (Marstag)",
        wirkung: "Verbena officinalis, 'Herba sacra' der Druiden, leicht beruhigend, dem Mars zugeordnet."
      },
      {
        name: "Mercurialis (Bingelkraut)",
        menge: "Gepflückt am Mittwoch (Merkurtag)",
        wirkung: "Mercurialis annua, leicht giftig, dem Merkur zugeordnet. Historisch als Abführmittel."
      },
      {
        name: "Barba Jovis (Jupiterbart/Hauswurz)",
        menge: "Gepflückt am Donnerstag (Jupitertag)",
        wirkung: "Sempervivum tectorum, kühlendes Hausmittel, dem Jupiter zugeordnet."
      },
      {
        name: "Capillus Veneris (Frauenhaarfarn)",
        menge: "Gepflückt am Freitag (Venustag)",
        wirkung: "Adiantum capillus-veneris, zarter Farn, der Venus und der Weiblichkeit zugeordnet."
      },
      {
        name: "[SIEBTES KRAUT: VON HARTLIEB BEWUSST WEGGELASSEN]",
        menge: "Gepflückt am Samstag (Saturntag)",
        wirkung:
          "Hartlieb schwieg über die Saturnpflanze. Forscher (u.a. Will-Erich Peuckert, " +
          "1960) vermuten Mandragora (Alraune) oder Hyoscyamus (Bilsenkraut), beides " +
          "Saturn-Pflanzen mit starken Tropan-Alkaloiden, die die eigentliche psychoaktive " +
          "Wirkung erzeugt hätten."
      },
      {
        name: "Tierschmalz (Schweineschmalz oder Gänseschmalz)",
        menge: "Als Basis, Menge nicht spezifiziert",
        wirkung: "Fettbasis für transdermale Aufnahme der Wirkstoffe durch die Haut."
      },
      {
        name: "Vogelblut",
        menge: "Beigemischt, Art und Menge unklar",
        wirkung: "Ritueller Bestandteil, möglicherweise auch als Emulgator gedacht."
      }
    ],
    zubereitung:
      "REIN HISTORISCH: NICHT NACHMACHEN!\n\n" +
      "Laut Hartliebs Beschreibung: Jedes der sieben Kräuter wird an seinem " +
      "zugehörigen Planetentag gepflückt. Die Kräuter werden zerrieben und in " +
      "erwarmtes Tierschmalz eingerührt. Vogelblut wird beigemischt. Die Salbe " +
      "wird mehrere Tage 'gereift'. Hartlieb gibt bewusst keine genauen Mengen " +
      "an, sein Zweck war Dokumentation, nicht Anleitung.",
    anwendung:
      "REIN HISTORISCH: NICHT NACHMACHEN!\n\n" +
      "Laut Prozessakten: Die Salbe wurde auf den gesamten Körper aufgetragen, " +
      "besonders auf Schlafen, Handgelenke, Achseln und Genitalbereich (Bereiche " +
      "mit dünner Haut und guter Durchblutung für transdermale Aufnahme). Der " +
      "berühmte 'Hexenbesen' diente möglicherweise als Applikator.",
    hintergrund:
      "Johannes Hartlieb (ca. 1400-1468) war ein hochgebildeter Arzt, Astrologe " +
      "und Übersetzer am Hof des bayerischen Herzogs Albrecht III. Sein 'Buch " +
      "aller verbotenen Künste' (1456) ist eines der wichtigsten Dokumente zur " +
      "Geschichte der Magie im deutschsprachigen Raum. Hartlieb beschreibt darin " +
      "systematisch sieben 'verbotene Künste', von Nekromantie bis Handlesen " +
      "immer mit dem erklärten Ziel, diese zu BEKÄMPFEN. Doch seine " +
      "detaillierten Beschreibungen verraten eine intime Kenntnis der Materie. " +
      "Als Leibarzt hatte er Zugang zu Hexenprozess-Akten und konfiszierten " +
      "Rezepturen. Die sieben-Planeten-Struktur des Flugsalben-Rezepts zeigt " +
      "die tiefe Verschränkung von Astrologie, Botanik und Magie im " +
      "spätmittelalterlichen Denken.",
    wissenschaft:
      "Die sechs bekannten Zutaten sind pharmakologisch relativ harmlos" +
      "Ringelblume, Eisenkraut und Hauswurz sind sanfte Heilpflanzen, die Farne " +
      "enthalten keine signifikanten Psychoaktiva. Das zeigt: Der Schlüssel lag " +
      "im weggelassenen siebten Kraut. Falls es sich um Alraune (Mandragora) " +
      "oder Bilsenkraut (Hyoscyamus) handelte, würde das die psychoaktive " +
      "Wirkung erklären: Beide enthalten Scopolamin, Atropin und Hyoscyamin" +
      "Tropan-Alkaloide, die transdermal aufgenommen werden und lebhafte " +
      "Halluzinationen des Fliegens erzeugen können. Der Pharmakologe " +
      "Will-Erich Peuckert unternahm 1960 einen (hoechst riskanten) Selbstversuch " +
      "mit einer rekonstruierten Flugsalbe und berichtete von intensiven " +
      "Flugerlebnissen.",
    geheimtipp:
      "Hartlieb war nicht nur Arzt, er war auch Übersetzer von Liebesromanen " +
      "und kannte sich bestens in der höfischen Kultur aus. Sein Verhältnis " +
      "zur Magie war zutiefst ambivalent: Er verurteilte sie offiziell, " +
      "dokumentierte sie aber so genau, dass sein Buch ironischerweise zum " +
      "HANDBUCH für genau die Praktiken wurde, die er bekämpfen wollte. " +
      "Herzog Albrecht selbst soll großes Interesse an Astrologie und Magie " +
      "gehabt haben: Hartliebs 'Warnung' war möglicherweise auch eine " +
      "diskrete Anleitung für seinen Herrn.",
    vorsicht:
      "REIN HISTORISCH: NICHT NACHMACHEN!\n" +
      "Obwohl die bekannten sechs Zutaten relativ harmlos sind, wäre das " +
      "fehlende siebte Kraut (vermutlich ein Nachtschattengewächs) HOCHGIFTIG " +
      "gewesen. Tropan-Alkaloide haben eine extrem enge therapeutische Breite: " +
      "Die Dosis zwischen 'Halluzination' und 'Tod durch Atemstillstand' ist " +
      "minimal. Es gibt KEINE sichere Dosierung für Laien. Hinzu kommt: " +
      "Transdermale Aufnahme ist unkontrollierbar: Hautzustand, Temperatur " +
      "und individuelle Empfindlichkeit machen jede Anwendung zum Russischen " +
      "Roulette.",
    quelle: "Johannes Hartlieb, 'Das Buch aller verbotenen Künste', 1456; " +
      "Analyse bei Frank Fürbeth, 'Johannes Hartlieb: Untersuchungen zu " +
      "Leben und Werk', 1992",
    tags: [
      "#Flugsalbe", "#Hexenflug", "#Hartlieb", "#Planetenmagie",
      "#Nachtschatten", "#15Jahrhundert", "#Bayern", "#Grimoire",
      "#TransdermaleAlkaloide", "#Hexenverfolgung"
    ],
    besonders_bei: [
      "Flugsalbe", "Hexenflug", "Hexensalbe", "Planetenkräuter",
      "Mittelalter", "Hexenverfolgung"
    ]
  },

  {
    id: "flugsalbe-della-porta",
    name: "Flugsalbe nach Giambattista della Porta (1558)",
    kategorie: "Flugsalbe",
    schwierigkeit: "Meister",
    beschreibung:
      "Der italienische Universalgelehrte Giambattista della Porta dokumentierte " +
      "in seiner 'Magia Naturalis' zwei Flugsalben-Rezepte, und war damit " +
      "einer der Ersten, die eine RATIONALE Erklärung für den 'Hexenflug' " +
      "lieferten. Della Porta war kein Hexer, sondern ein frühneuzeitlicher " +
      "Wissenschaftler, der die Grenze zwischen Magie und Naturwissenschaft " +
      "auslotete. Seine Rezepte enthalten die gefährlichsten Giftpflanzen " +
      "Europas: Eisenhut und Tollkirsche. ABSOLUT TÖDLICH.",
    zutaten: [
      {
        name: "REZEPT 1: Selleriesaft (Apium graveolens)",
        menge: "Nicht genau spezifiziert",
        wirkung: "Apiol, leicht psychoaktiv in hohen Dosen, historisch als Emmenagogum."
      },
      {
        name: "REZEPT 1: Eisenhut (Aconitum napellus)",
        menge: "Nicht genau spezifiziert",
        wirkung:
          "TÖDLICH GIFTIG! Aconitin, eines der stärksten Pflanzengifte überhaupt. " +
          "Bereits 2-5mg Aconitin können tödlich sein. Erzeugt Taubheit, Kribbeln, " +
          "dann Herzrhythmusstörungen und Atemstillstand."
      },
      {
        name: "REZEPT 1: Pappelblätter (Populus)",
        menge: "Nicht genau spezifiziert",
        wirkung: "Salicin, entzündungshemmend. In Flugsalben möglicherweise als Träger."
      },
      {
        name: "REZEPT 1: Ruß",
        menge: "Nicht genau spezifiziert",
        wirkung: "Verdickungs- und Färbemittel. Möglicherweise auch rituelle Bedeutung (Schwarz)."
      },
      {
        name: "REZEPT 1: Fettbasis (Schmalz)",
        menge: "Als Grundlage",
        wirkung: "Transdermaler Träger für die Wirkstoffe."
      },
      {
        name: "REZEPT 2: Sium (Wasserpastinake, Sium latifolium)",
        menge: "Nicht genau spezifiziert",
        wirkung: "Leicht giftig, kann mit dem tödlichen Wasserschierling verwechselt werden."
      },
      {
        name: "REZEPT 2: Kalmus (Acorus calamus)",
        menge: "Nicht genau spezifiziert",
        wirkung: "Asaron, in hohen Dosen leicht psychoaktiv, MAO-hemmend."
      },
      {
        name: "REZEPT 2: Fünffingerraut (Potentilla reptans)",
        menge: "Nicht genau spezifiziert",
        wirkung: "Gerbstoffe, adstringierend. Magisch als Schutzkraut und in Hexenrezepten."
      },
      {
        name: "REZEPT 2: Fledermausblut",
        menge: "Beigemischt",
        wirkung: "Ritueller Bestandteil: Fledermaeuse galten als Nachtgeschöpfe der Hexen."
      },
      {
        name: "REZEPT 2: Tollkirsche (Atropa belladonna)",
        menge: "Nicht genau spezifiziert",
        wirkung:
          "TÖDLICH GIFTIG! Atropin, Scopolamin, Hyoscyamin: Tropan-Alkaloide. " +
          "Erzeugen Halluzinationen, Verwirrtheit, erweiterte Pupillen, Herzrasen. " +
          "Bereits 10-20 Beeren können bei Erwachsenen tödlich sein."
      },
      {
        name: "REZEPT 2: Ölbasis (Olivenöl oder Leinöl)",
        menge: "Als Grundlage",
        wirkung: "Transdermaler Träger, alternative Basis zum Schmalz."
      }
    ],
    zubereitung:
      "REIN HISTORISCH: NICHT NACHMACHEN! TÖDLICHE GIFTE!\n\n" +
      "Della Porta beschreibt: Die pflanzlichen Bestandteile werden zerkleinert " +
      "und ausgekocht, der Sud wird mit der Fettbasis verrührt bis eine " +
      "salbenartige Konsistenz entsteht. Das Blut wird zuletzt eingerührt. " +
      "Die Salbe wird 'gereift', vermutlich mehrere Tage. Della Porta gibt " +
      "keine präzisen Mengenangaben, da auch er das Rezept als wissenschaftliche " +
      "Dokumentation verstand, nicht als Gebrauchsanweisung.",
    anwendung:
      "REIN HISTORISCH: NICHT NACHMACHEN! TÖDLICHE GIFTE!\n\n" +
      "Della Porta berichtet: Die Salbe wurde großflächig auf den Körper " +
      "aufgetragen. Er beschreibt, wie eine 'alte Frau' sich entkleidete, die " +
      "Salbe auftrug, in einen tiefen Schlaf fiel und nach dem Erwachen " +
      "beharrlich behauptete, sie sei 'über Meere und Berge geflogen'. Della " +
      "Porta nutzte diese Beobachtung als Beweis, dass der Hexenflug eine " +
      "HALLUZINATION war, keine Realität.",
    hintergrund:
      "Giambattista della Porta (1535-1615) war einer der faszinierendsten " +
      "Köpfe der Renaissance: Naturphilosoph, Dramatiker, Kryptograph und " +
      "Gründer einer der ersten wissenschaftlichen Akademien (Academia " +
      "Secretorum Naturae). Seine 'Magia Naturalis' (1558, erweitert 1589) " +
      "war ein Versuch, 'natürliche Magie' von 'dämonischer Magie' zu " +
      "trennen, also Naturphänomene rational zu erklären, die als " +
      "übernatürlich galten. Die Flugsalben-Passage ist dabei sein " +
      "Paradebeispiel: Was die Inquisition für Teufelswerk hielt, war " +
      "in Wahrheit Pharmakologie. Della Porta geriet trotzdem in Konflikt " +
      "mit der Inquisition und musste seine Akademie schließen.",
    wissenschaft:
      "Della Portas Rezepte enthalten die Schlüsselpflanzen für eine " +
      "pharmakologisch wirksame Flugsalbe:\n\n" +
      "• TROPAN-ALKALOIDE (Tollkirsche): Scopolamin, Atropin, Hyoscyamin" +
      "anticholinerge Substanzen die Halluzinationen erzeugen, besonders " +
      "Fluggefühle und Formwandlung.\n\n" +
      "• ACONITIN (Eisenhut): Erzeugt intensives Kribbeln und Taubheit der " +
      "Haut, was das Gefühl der 'Körperlosigkeit' verstärkt hätte.\n\n" +
      "• TRANSDERMALE AUFNAHME: Die Fettbasis ermöglicht die Aufnahme durch " +
      "die Haut. Besonders über Schleimhäute ist die Bioverfügbarkeit hoch.\n\n" +
      "• DER BESEN-ZUSAMMENHANG: Historiker wie Michael Harner (1973) und " +
      "Pharmacologen vermuten, dass die Salbe auf einen Stab oder Besenstiel " +
      "aufgetragen und 'geritten' wurde, für die Applikation auf vaginale " +
      "oder rektale Schleimhäute, wo die Aufnahme schneller und intensiver " +
      "ist. Dies könnte der wahre Ursprung des Bildes der 'Hexe auf dem " +
      "Besen' sein.",
    geheimtipp:
      "Della Porta war auch ein fruher Kryptograph, er erfand " +
      "Verschlüsselungsmethoden und war fasziniert von geheimem Wissen. " +
      "Es ist gut möglich, dass er seine Flugsalben-Rezepte absichtlich " +
      "unpräzise hielt, genug für den Beweis seiner These, aber nicht " +
      "genug für eine tatsächliche Herstellung. Ein Wissenschaftler, der " +
      "die Grenze zur Gefahr genau kannte.",
    vorsicht:
      "REIN HISTORISCH: NICHT NACHMACHEN! ABSOLUT LEBENSGEFÄHRLICH!\n\n" +
      "EISENHUT (Aconitum napellus): Eine der giftigsten Pflanzen Europas! " +
      "Bereits der Hautkontakt mit frischen Pflanzenteilen kann zu " +
      "Vergiftungserscheinungen führen. 2-5mg Aconitin sind TÖDLICH. " +
      "Es gibt KEIN Gegengift. Tod durch Herzversagen oder Atemstillstand.\n\n" +
      "TOLLKIRSCHE (Atropa belladonna): Tropan-Alkaloide in unkontrollierter " +
      "Dosierung sind TÖDLICH. Symptome: Pupillenerweiterung, Herzrasen, " +
      "Halluzinationen, Krämpfe, Koma, Tod.\n\n" +
      "Die Kombination beider Gifte ist BESONDERS tödlich, da sie " +
      "unterschiedliche toxische Mechanismen aktivieren.",
    quelle:
      "Giambattista della Porta, 'Magia Naturalis sive de Miraculis Rerum " +
      "Naturalium', 1558 (erweitert 1589); Michael J. Harner, 'The Role " +
      "of Hallucinogenic Plants in European Witchcraft', in 'Hallucinogens " +
      "and Shamanism', 1973",
    tags: [
      "#Flugsalbe", "#DellaPora", "#Tollkirsche", "#Eisenhut",
      "#Renaissance", "#MagiaNaturalis", "#Hexenflug", "#Tropanalkaloide",
      "#Aconitum", "#Belladonna", "#16Jahrhundert"
    ],
    besonders_bei: [
      "Flugsalbe", "Hexenflug", "Tollkirsche", "Eisenhut",
      "Renaissance", "Hexensalbe", "della Porta"
    ]
  },

  {
    id: "flugsalbe-wissenschaft",
    name: "Die Pharmakologie der Flugsalben: Warum Hexen 'flogen'",
    kategorie: "Flugsalbe",
    schwierigkeit: "Fortgeschritten",
    beschreibung:
      "Ein reiner Wissenseintrag, der die moderne pharmakologische Erklärung " +
      "für den 'Hexenflug' zusammenfasst. Die Tropan-Alkaloide der " +
      "Nachtschattengewächse: Scopolamin, Atropin, Hyoscyamin, sind der " +
      "Schlüssel zum Verständnis einer der größten Rätsel der " +
      "europäischen Kulturgeschichte. Was die Inquisition als Beweis für " +
      "Teufelsbündnisse wertete, war in Wahrheit eine pharmakologische " +
      "Reaktion auf potente Pflanzengifte.",
    zutaten: [
      {
        name: "Tollkirsche (Atropa belladonna)",
        menge: "Historisch in Flugsalben verwendet",
        wirkung:
          "Atropin, Scopolamin, Hyoscyamin. Anticholinerg. TÖDLICH GIFTIG. " +
          "Erweitert Pupillen, erzeugt Halluzinationen, beschleunigt Herzschlag."
      },
      {
        name: "Bilsenkraut (Hyoscyamus niger)",
        menge: "Historisch in Flugsalben verwendet",
        wirkung:
          "Hyoscyamin, Scopolamin. Starkere sedierende Komponente als Tollkirsche. " +
          "Erzeugt besonders lebhafte Traeume und Visionen. TÖDLICH GIFTIG."
      },
      {
        name: "Alraune (Mandragora officinarum)",
        menge: "Historisch in Flugsalben verwendet",
        wirkung:
          "Hyoscyamin, Scopolamin, Mandragorin. Die 'Königspflanze' der " +
          "Flugsalben. Menschenähnliche Wurzelform gab ihr besonderen " +
          "magischen Status. TÖDLICH GIFTIG."
      },
      {
        name: "Stechapfel (Datura stramonium)",
        menge: "Historisch in Flugsalben verwendet",
        wirkung:
          "Scopolamin, Atropin, Hyoscyamin. Besonders hoher Scopolamin-Gehalt. " +
          "Erzeugt intensive Halluzinationen mit Realitätsverlust. TÖDLICH GIFTIG."
      },
      {
        name: "Fettbasis (Schweineschmalz, Gänseschmalz, Öl)",
        menge: "Grundlage aller Flugsalben",
        wirkung:
          "ENTSCHEIDEND: Ohne die Fettbasis keine transdermale Aufnahme! Das " +
          "Fett löst die lipophilen Alkaloide und ermöglicht den Transport " +
          "durch die Hautbarriere. Dasselbe Prinzip wie bei modernen " +
          "transdermalen Pflastern."
      }
    ],
    zubereitung:
      "REIN HISTORISCH: NICHT NACHMACHEN! TÖDLICHE GIFTE!\n\n" +
      "Dies ist ein Wissenseintrag, keine Anleitung. Die historischen " +
      "Zubereitungsschritte waren: Pflanzenteile zerkleinern, in Fett " +
      "auskochen oder mazerieren, abseihen, abkühlen lassen. Die " +
      "resultierende Salbe enthielt die fettlöslichen Alkaloide in einer " +
      "transdermalen Trägerbasis.",
    anwendung:
      "REIN HISTORISCH: NICHT NACHMACHEN!\n\n" +
      "Historisch dokumentiert: Großflächiges Einreiben des Körpers, " +
      "besonders an Stellen mit dünner Haut (Schlafen, Achseln, " +
      "Handgelenke, Genitalbereich). Die Aufnahme über Schleimhäute " +
      "war besonders effektiv. Nach 30-60 Minuten setzten die Wirkungen " +
      "ein: tiefe Trance, Halluzinationen, Fluggefühle.",
    hintergrund:
      "Der Zusammenhang zwischen Hexensalben und Nachtschattengewächsen " +
      "ist seit der Renaissance dokumentiert: Andres de Laguna, Leibarzt " +
      "Kaiser Karls V., führte 1555 einen der ersten 'klinischen Tests' " +
      "durch: Er testete eine konfiszierte Hexensalbe an der Frau eines " +
      "Henkers. Die Frau schlief 36 Stunden und berichtete nach dem " +
      "Erwachen voller Entrüstung, man habe sie 'von ihrem Liebhaber " +
      "weggerissen' und von 'Vergnügungen und Flügen', sie hatte die " +
      "Halluzination als vollkommen real erlebt.\n\n" +
      "Michael J. Harner stellte 1973 in seinem Aufsatz 'The Role of " +
      "Hallucinogenic Plants in European Witchcraft' erstmals systematisch " +
      "die Verbindung zwischen Ethnobotanik und Hexenforschung her. " +
      "Seine These: Der europäische Hexenkult hatte eine reale " +
      "pharmakologische Basis, vergleichbar mit schamanischen Praktiken " +
      "in Süd- und Mittelamerika.",
    wissenschaft:
      "DIE TROPAN-ALKALOIDE: Wirkungsmechanismus:\n\n" +
      "Scopolamin, Atropin und Hyoscyamin sind ANTICHOLINERGIKA, sie " +
      "blockieren die Acetylcholin-Rezeptoren (muskarinische Rezeptoren) " +
      "im zentralen und peripheren Nervensystem.\n\n" +
      "PERIPHERE WIRKUNGEN:\n" +
      "• Pupillenerweiterung (Mydriasis)\n" +
      "• Mundtrockenheit\n" +
      "• Beschleunigter Herzschlag (Tachykardie)\n" +
      "• Hemmung der Schweißproduktion\n" +
      "• Harnverhalt\n\n" +
      "ZENTRALE WIRKUNGEN (das 'Fliegen'):\n" +
      "• Lebhafte visuelle und taktile Halluzinationen\n" +
      "• Besonders: Gefühl des FLIEGENS und der FORMWANDLUNG\n" +
      "• Gefühl der Körperlosigkeit\n" +
      "• Intensive, realitätsnahe Traumzustände\n" +
      "• Amnesie für Teile des Erlebten\n" +
      "• Die Halluzinationen werden als REAL erlebt, anders als bei " +
      "klassischen Psychedelika ist der Betroffene überzeugt, " +
      "tatsächlich geflogen zu sein\n\n" +
      "DIE THERAPEUTISCHE BREITE IST EXTREM ENG:\n" +
      "Zwischen 'Halluzination' und 'Tod durch Atemstillstand oder " +
      "Herzversagen' liegen manchmal nur Milligramm. Es gibt KEINE " +
      "sichere Dosierung für Laien.\n\n" +
      "MODERNE PARALLELE:\n" +
      "Scopolamin wird heute als transdermales Pflaster gegen Reisekrankheit " +
      "verwendet (Scopoderm TTS), dasselbe Prinzip wie bei den Flugsalben, " +
      "aber in EXAKT kontrollierter Mikrodosierung (1mg über 72 Stunden). " +
      "Eine Flugsalbe hätte ein Vielfaches dieser Dosis unkontrolliert " +
      "freigesetzt.",
    geheimtipp:
      "Warum gerade FLIEGEN? Die Anthropologin Eva Poecs bemerkt: In fast " +
      "allen Kulturen, die anticholinerge Pflanzen nutzen, berichten die " +
      "Anwender von Flügerlebnissen. Es scheint ein spezifischer " +
      "neurochemischer Effekt zu sein, die Blockade der " +
      "Acetylcholin-Rezeptoren erzeugt offenbar ein universelles Gefühl " +
      "des Schwebens und Fliegens. Das ist bemerkenswert: Verschiedene " +
      "Kulturen, verschiedene Kontinente, verschiedene Pflanzen, aber " +
      "dieselbe Erfahrung. Die Hexen 'flogen' nicht wegen kultureller " +
      "Erwartung, sondern wegen Neurochemie.",
    vorsicht:
      "REIN HISTORISCH: NICHT NACHMACHEN! ABSOLUT LEBENSGEFÄHRLICH!\n\n" +
      "Alle genannten Pflanzen sind TÖDLICH GIFTIG:\n\n" +
      "• Tollkirsche: 10-20 Beeren tödlich für Erwachsene, 3-4 für Kinder\n" +
      "• Bilsenkraut: Alle Pflanzenteile giftig, besonders Samen und Wurzel\n" +
      "• Alraune: Wurzel und Früchte hochgiftig\n" +
      "• Stechapfel: Alle Pflanzenteile giftig, besonders Samen (20-30 Samen " +
      "können tödlich sein)\n" +
      "• Eisenhut: Eine der giftigsten Pflanzen Europas, bereits Hautkontakt " +
      "kann vergiften, KEIN Gegengift\n\n" +
      "Bei Vergiftungsverdacht: SOFORT Notarzt (112) und " +
      "Giftinformationszentrale anrufen!",
    quelle:
      "Andres de Laguna, Kommentar zu Dioskurides, 1555; Michael J. Harner, " +
      "'The Role of Hallucinogenic Plants in European Witchcraft', 1973; " +
      "Will-Erich Peuckert, 'Gabalia: Ein Versuch zur Geschichte der Magia " +
      "naturalis im 16. bis 18. Jahrhundert', 1967; Karl Kiesewetter, " +
      "'Die Geheimwissenschaften', 1895; Eva Poecs, 'Between the Living " +
      "and the Dead', 1999",
    tags: [
      "#Flugsalbe", "#Tropanalkaloide", "#Scopolamin", "#Atropin",
      "#Nachtschatten", "#Pharmakologie", "#Hexenflug", "#Anticholinerg",
      "#Ethnobotanik", "#TransdermaleAufnahme"
    ],
    besonders_bei: [
      "Flugsalbe", "Hexenflug", "Tropanalkaloide", "Scopolamin",
      "Nachtschatten", "Pharmakologie", "warum Hexen flogen"
    ]
  },

  // =========================================================================
  //  LIEBESMAGIE AUS ALTEN HANDSCHRIFTEN
  // =========================================================================

  {
    id: "liebesapfel",
    name: "Liebesäpfel: Der klassische Liebeszauber",
    kategorie: "Liebesmagie",
    schwierigkeit: "Einfach",
    beschreibung:
      "Der Liebesapfel ist einer der ältesten und weitverbreitetsten " +
      "Liebeszauber der europäischen Tradition. Vom Urteil des Paris über " +
      "den Garten Eden bis zur mittelalterlichen Minnekultur, der Apfel war " +
      "seit jeher die Frucht der Liebe, der Venus, der Versüchung. Dieser " +
      "Zauber ist völlig ungefährlich, wunderschön und kann tatsächlich " +
      "praktiziert werden, als charmantes Ritual der Zuneigung.",
    zutaten: [
      {
        name: "Ein schöner Apfel",
        menge: "1 Stück, möglichst rot und makellos",
        wirkung:
          "Symbol der Venus/Aphrodite. Schneidet man einen Apfel quer durch, " +
          "zeigt sich im Kerngehaeuse ein fünfzackiger Stern, das Pentagramm " +
          "der Venus."
      },
      {
        name: "Rosenblütenblätter",
        menge: "Eine Handvoll, frisch oder getrocknet",
        wirkung: "Rose = Venus = Liebe. Ätherische Öle wirken stimmungsaufhellend und sinnlich."
      },
      {
        name: "Zimt (Cinnamomum verum)",
        menge: "1 Teelöffel, gemahlen",
        wirkung: "Wärmend, durchblutungsfördernd. In der Magie: Leidenschaft, Anziehung."
      },
      {
        name: "Nelken (Syzygium aromaticum)",
        menge: "3-5 Stück, ganz oder gemahlen",
        wirkung: "Eugenol, antiseptisch, wärmend. Magisch: Treue und Bindung."
      },
      {
        name: "Muskatnuss (Myristica fragrans)",
        menge: "Eine Prise, frisch gerieben",
        wirkung: "Myristicin, in großen Mengen halluzinogen, hier nur aromatisch. Magisch: Glück."
      },
      {
        name: "Honig",
        menge: "1-2 Esslöffel",
        wirkung: "Das Urbild der Süße. 'Honigsüße Worte': Honig verbindet die Zutaten und symbolisiert die Süße der Liebe."
      }
    ],
    zubereitung:
      "Den Apfel sorgfältig aushohlen (Deckel oben abschneiden und aufheben). " +
      "Die Rosenblütenblätter mit Zimt, Nelken und Muskatnuss vermischen. " +
      "Die Mischung in den ausgehöhlten Apfel füllen. Mit Honig beträufeln. " +
      "Den Deckel wieder aufsetzen. Den Apfel über Nacht auf dem Nachttisch " +
      "oder unter dem Kopfkissen aufbewahren, er soll die Traeume des " +
      "Schlafenden aufnehmen. Am nächsten Tag der geliebten Person schenken " +
      "und gemeinsam essen.",
    anwendung:
      "Am besten an einem Freitag (Venus-Tag) zubereiten. Den Apfel mit der " +
      "rechten Hand überreichen, die rechte Seite galt als die Herzseite " +
      "(das Herz schlägt links, aber es GIBT nach rechts). Dabei der " +
      "geliebten Person in die Augen schauen und die Intention im Herzen halten.",
    hintergrund:
      "Der Apfel als Liebesfrucht reicht zurück bis in die Antike: Aphrodite " +
      "erhält den goldenen Apfel im Urteil des Paris, Atalante wird mit " +
      "goldenen Äpfeln bezwungen, im Hohelied Salomos heißt es 'stärket " +
      "mich mit Äpfeln, denn ich bin krank vor Liebe'. Im nordischen Mythos " +
      "hütet Idun die Äpfel der ewigen Jugend. Der Apfel vereint das " +
      "Weibliche (runde Form, Fruchtbarkeit) mit dem Geheimnis (das verborgene " +
      "Pentagramm im Kerngehaeuse). In der mittelalterlichen Volksmagie " +
      "Mitteleuropas waren Liebesäpfel weit verbreitet, sie werden in " +
      "zahllosen Rezeptsammlungen und Prozessakten erwähnt, meist als " +
      "harmloser Liebeszauber.",
    wissenschaft:
      "Die Gewürzmischung ist pharmakologisch mild, aber nicht wirkungslos: " +
      "Zimtaldehyd (Zimt) ist leicht durchblutungsfördernd und wärmend, " +
      "Eugenol (Nelken) wirkt mild analgetisch und stimmungshebend, die " +
      "ätherischen Öle der Rose (Geraniol, Citronellol) haben " +
      "nachgewiesene anxiolytische und stimmungsaufhellende Effekte. " +
      "Der Honig liefert Tryptophan, eine Serotonin-Vorstufe. Die " +
      "Kombination ist ein mildes, angenehmes Aromatherapeutikum. Und " +
      "natürlich: Das RITUAL selbst, die Aufmerksamkeit, die Intention, " +
      "das gemeinsame Essen, ist die eigentliche 'Magie'.",
    geheimtipp:
      "Den Apfel mit der rechten Hand überreichen, dabei in die Augen " +
      "schauen. In der Volksmagie heißt es: Wenn die beschenkte Person " +
      "den Apfel annimmt und hineinbeißt, ist das ein 'Ja'. Noch " +
      "schöner: Den Apfel ZUSAMMEN zubereiten, dann ist der Zauber " +
      "kein Manipulation, sondern ein gemeinsames Ritual der Verbindung.",
    vorsicht:
      "Völlig ungefährlich. Alle Zutaten sind Lebensmittel. " +
      "Einzige Vorsicht: Bei Zimtallergie auf Zimt verzichten, und Muskatnuss " +
      "nur in kleiner Menge verwenden (in Gramm-Mengen wäre Muskatnuss " +
      "halluzinogen und giftig, aber eine Prise ist völlig harmlos).",
    quelle:
      "Europäische Volksmagie, zahlreiche Quellen; vgl. Hanns Bäuchtold-Stäubli, " +
      "'Handwörterbuch des deutschen Aberglaubens', 1927-1942, Stichwort 'Apfel'",
    tags: [
      "#Liebesmagie", "#Liebesapfel", "#Venus", "#Volksmagie",
      "#Aphrodite", "#Ritual", "#Ungefährlich", "#Liebeszauber"
    ],
    besonders_bei: [
      "Liebesmagie", "Liebeszauber", "Venus", "Apfel",
      "Ritual", "Volksmagie"
    ]
  },

  {
    id: "liebestrank-picatrix",
    name: "Liebestrank aus dem Picatrix: Planetare Liebesmagie",
    kategorie: "Liebesmagie",
    schwierigkeit: "Fortgeschritten",
    beschreibung:
      "Der Picatrix (arabisch 'Ghayat al-Hakim', 'Das Ziel des Weisen') ist " +
      "das einflussreichste Grimoire der westlichen Magie. Im 11. Jahrhundert " +
      "auf Arabisch verfasst, im 13. Jahrhundert ins Lateinische übersetzt, " +
      "wurde es zur Urquelle für alle späteren europäischen Zauberbücher. " +
      "Dieses Venus-Liebesritual aus dem Picatrix verbindet Planetenmagie mit " +
      "Räucherkunst und Trankbereitung, und alle Zutaten sind harmlos.",
    zutaten: [
      {
        name: "Rosenwasser",
        menge: "250ml, möglichst aus Damaszener-Rosen",
        wirkung: "Basis des Tranks. Rose = Venus = Liebe. Beruhigend, stimmungsaufhellend."
      },
      {
        name: "Safran (Crocus sativus)",
        menge: "Eine Messerspitze (einige Fäden)",
        wirkung:
          "Das 'Gold der Gewürze'. Crocin wirkt antidepressiv (klinisch belegt!). " +
          "In der Magie: Sonne und Venus, Freude, Kostbarkeit."
      },
      {
        name: "Kardamom (Elettaria cardamomum)",
        menge: "3 Kapseln, leicht angedrückt",
        wirkung: "Wärmend, verdauungsfördernd. Magisch: Liebe und Lust. Im Orient klassisches Aphrodisiakum."
      },
      {
        name: "Zucker oder Honig",
        menge: "Nach Geschmack",
        wirkung: "Süße als Symbol und Geschmacksträger."
      },
      {
        name: "Rosenöl (einige Tropfen)",
        menge: "2-3 Tropfen, ätherisches Öl oder Rosenabsolue",
        wirkung: "Konzentrierte Essenz der Rose. Eines der teuersten ätherischen Öle, 'flüssiges Gold'."
      },
      {
        name: "Für die Räucherung: Moschus (pflanzlicher Ersatz)",
        menge: "Eine Messerspitze",
        wirkung: "Historisch tierischer Moschus, heute pflanzliche Alternativen. Erdend, sinnlich."
      },
      {
        name: "Für die Räucherung: Ambra (pflanzlicher Ersatz)",
        menge: "Eine Messerspitze",
        wirkung: "Historisch Walrat (Ambra), heute Labdanum als Ersatz. Warm, süß, anziehend."
      },
      {
        name: "Für die Räucherung: Aloeholz (Aquilaria)",
        menge: "Ein kleines Stück",
        wirkung: "Oud, einer der kostbarsten Räucherstoffe der Welt. Tief, meditativ, öffnend."
      },
      {
        name: "Für die Räucherung: Rote Rosen (getrocknet)",
        menge: "Eine Handvoll",
        wirkung: "Venus-Pflanze. Duftend und symbolisch."
      },
      {
        name: "Für die Räucherung: Rote Koralle (gepulvert)",
        menge: "Eine Messerspitze",
        wirkung: "Venus zugeordnet. Historisch teuer und selten. Optional, heute aus Naturschutzgründen weglassen."
      }
    ],
    zubereitung:
      "Am Freitag (Venus-Tag), idealerweise zur 'Stunde der Venus' (astrologisch " +
      "berechnet, vereinfacht: die erste Stunde nach Sonnenaufgang am Freitag).\n\n" +
      "1. Das Venus-Siegel auf ein Stück grünes Papier zeichnen (das Heptagramm " +
      "der Venus oder das klassische Venus-Symbol).\n\n" +
      "2. Die Räuchermischung auf eine glühende Räucherkohle geben. Den aufsteigenden " +
      "Rauch als Verbindung zur Venus-Kraft verstehen.\n\n" +
      "3. Während die Räucherung brennt, das Rosenwasser sanft erwärmen (nicht kochen!). " +
      "Safran, Kardamom und Zucker/Honig einrühren. Vom Herd nehmen, Rosenöl einrühren.\n\n" +
      "4. Die Intention klar und liebevoll aussprechen, der Picatrix betont: Die " +
      "Intention muss REIN sein. Liebesmagie für Manipulation funktioniert nicht " +
      "(oder schlägt zurück).\n\n" +
      "5. Den Trank in zwei Schalen gießen und gemeinsam trinken.",
    anwendung:
      "Gemeinsam mit der geliebten Person trinken, am besten bei Kerzenlicht. " +
      "Der Picatrix betont die Wichtigkeit der ATMOSPHÄRE, die Räucherung, " +
      "die Intention, die Verbindung zwischen den Menschen. Der Trank selbst " +
      "ist ein Vehikel für die Intention, nicht ein 'Zaubermittel'.",
    hintergrund:
      "Der Picatrix entstand vermutlich im 10./11. Jahrhundert im arabischen " +
      "Raum, möglicherweise in Al-Andalus (maurisches Spanien). Er " +
      "synthetisiert griechische (hermetische), persische, indische und " +
      "arabische magische Traditionen zu einem umfassenden System der " +
      "Astral-Magie. Im 13. Jahrhundert wurde er im Auftrag von König " +
      "Alfons X. von Kastilien ins Lateinische übersetzt und verbreitete " +
      "sich rasant in Europa. Fast jedes spätere Grimoire, von Agrippa von " +
      "Nettesheims 'De Occulta Philosophia' bis zum 'Schlüssel Salomos'" +
      "schlüpft aus dem Picatrix. Seine Liebes-Rituale sind erstaunlich " +
      "differenziert: Er unterscheidet zwischen Anziehung, Vertiefung " +
      "bestehender Liebe, und Wiedervereinigung, jeweils mit anderen " +
      "Planeten-Zuordnungen.",
    wissenschaft:
      "Alle Zutaten des Tranks sind harmlos und z.T. wissenschaftlich " +
      "interessant: Safran (Crocus sativus) hat in klinischen Studien " +
      "antidepressive Wirkung gezeigt, vergleichbar mit niedrig dosiertem " +
      "Fluoxetin. Rosenwasser und Rosenöl enthalten Geraniol und " +
      "Citronellol, die anxiolytisch (angstlösend) wirken. Kardamom " +
      "ist verdauungsfördernd und erwärmend. Die Räucherung mit " +
      "Aloeholz/Oud setzt terpene Verbindungen frei, die nachweislich " +
      "beruhigend wirken. Zusammen ergibt das ein mildes, " +
      "stimmungsaufhellendes Erlebnis, der perfekte Rahmen für " +
      "Verbindung und Nähe.",
    geheimtipp:
      "Der Picatrix ist auch deswegen so faszinierend, weil er die " +
      "ETHIK der Liebesmagie diskutiert. Er warnt ausdrücklich vor " +
      "Manipulation und betont, dass wahre Liebesmagie nur funktioniert, " +
      "wenn sie im Einklang mit dem Willen beider Beteiligten steht. " +
      "Der weise Magier 'erschafft' keine Liebe, er 'öffnet den Raum', " +
      "damit vorhandene Anziehung sich entfalten kann. Eine erstaunlich " +
      "reife Haltung für ein Buch aus dem 11. Jahrhundert.",
    vorsicht:
      "Alle Zutaten sind Lebensmittel und völlig ungefährlich. " +
      "Der 'Zauber' liegt in der Intention und im Ritual, nicht in " +
      "den Substanzen. Einzige Vorsicht: Aloeholz-Rauch in gut " +
      "belüfteten Raeumen verwenden. Rote Koralle aus Naturschutzgründen " +
      "besser weglassen, der Picatrix würde das verstehen.",
    quelle:
      "Picatrix (Ghayat al-Hakim), 10./11. Jahrhundert; lateinische " +
      "Übersetzung 13. Jh.; kritische Edition: David Pingree (Warburg " +
      "Institute), 1986; deutsche Teilübersetzung: Hellmut Ritter und " +
      "Martin Plessner, 1962",
    tags: [
      "#Liebesmagie", "#Picatrix", "#Venus", "#Planetenmagie",
      "#Grimoire", "#Räucherung", "#Rosenwasser", "#Safran",
      "#ArabischeMagie", "#Ungefährlich"
    ],
    besonders_bei: [
      "Liebesmagie", "Picatrix", "Venus", "Planetenmagie",
      "Liebestrank", "Grimoire", "Räucherung"
    ]
  },

  {
    id: "alraune-liebesmagie",
    name: "Alraunenwurzel: Die mächtigste Liebespflanze des Mittelalters",
    kategorie: "Liebesmagie",
    schwierigkeit: "Meister",
    beschreibung:
      "Keine Pflanze war im mittelalterlichen Europa so geheimnisvoll, so " +
      "begehrt und so gefürchtet wie die Alraune (Mandragora officinarum). " +
      "Ihre menschenähnliche Wurzelform, ihre betäubende Wirkung und die " +
      "zahlreichen Legenden um sie machten sie zur teuersten und mächtigsten " +
      "Zutat der Liebesmagie. Eine echte Alraunenwurzel kostete so viel wie " +
      "ein Pferd. ABER: Mandragora ist ein Nachtschattengewächs mit " +
      "tödlichen Tropan-Alkaloiden. REIN HISTORISCH!",
    zutaten: [
      {
        name: "Alraunenwurzel (Mandragora officinarum)",
        menge: "Historisch: Eine ganze Wurzel",
        wirkung:
          "TÖDLICH GIFTIG! Enthält Hyoscyamin, Scopolamin, Atropin, Mandragorin. " +
          "Die Wurzel hat oft eine menschenähnliche, gegabelte Form, das " +
          "machte sie zum mächtigsten 'Sympathie-Zauber' (ähnliche Form = " +
          "ähnliche Wirkung, nach dem Signaturenprinzip)."
      },
      {
        name: "Seide (zum Einwickeln)",
        menge: "Ein Stück rote oder weiße Seide",
        wirkung: "Rituelle Verpackung. Seide galt als 'rein' und schützend."
      },
      {
        name: "Wein (zum Baden der Wurzel)",
        menge: "Genug zum Eintauchen der Wurzel",
        wirkung: "Die Wurzel wurde regelmäßig in Wein 'gebadet' und 'gefüttert'."
      }
    ],
    zubereitung:
      "REIN HISTORISCH: NICHT NACHMACHEN! GIFTIGE PFLANZE!\n\n" +
      "DIE LEGENDE DES AUSGRABENS (aus zahlreichen mittelalterlichen Quellen):\n\n" +
      "1. Die Alraune wächst (angeblich) unter Galgen aus dem Samen oder dem " +
      "Urin Gehängter.\n\n" +
      "2. Man nähert sich der Pflanze bei Vollmond. Man verstopft sich die " +
      "Ohren mit Wachs, denn: Wer den Schrei der Alraune beim Ausgraben hört, " +
      "stirbt (oder wird wahnsinnig).\n\n" +
      "3. Man gräubt die Erde vorsichtig rund um die Wurzel frei, ohne sie " +
      "zu berühren.\n\n" +
      "4. Man bindet einen schwarzen Hund mit einem Strick an die Wurzel und " +
      "lockt den Hund mit Futter. Der Hund zieht die Wurzel heraus, und stirbt " +
      "am Schrei.\n\n" +
      "5. Die Wurzel wird gewaschen, in rote Seide gewickelt und wie ein " +
      "lebendiges Wesen behandelt.\n\n" +
      "DIE REALITÄT: Mandragora officinarum ist eine mediterrane Pflanze, " +
      "die in Südeuropa wild wächst. Die gegabelte Wurzel kann tatsächlich " +
      "menschenähnlich aussehen. Der 'Schrei' ist Legende, möglicherweise " +
      "abgeleitet von dem quietschenden Geraeusch, das beim Herausziehen einer " +
      "langen Rübenwurzel entstehen kann.",
    anwendung:
      "REIN HISTORISCH: NICHT NACHMACHEN! GIFTIGE PFLANZE!\n\n" +
      "HISTORISCHE VERWENDUNG IN DER LIEBESMAGIE:\n\n" +
      "• Als Amulett: Die gewaschene Wurzel in Seide gewickelt bei sich tragen" +
      "galt als stärkstes Liebesmittel überhaupt.\n\n" +
      "• Als Aphrodisiakum: WINZIGE Mengen Wurzelpulver in Wein: EXTREM " +
      "GEFÄHRLICH da die Tropan-Alkaloide bereits in kleinen Dosen zu " +
      "Halluzinationen, Herzrhythmusstörungen und Tod führen können.\n\n" +
      "• Als 'Alraunenmännchen' (Geldmännchen): Die Wurzel in ein kleines " +
      "Kostüm kleiden, ihr einen Namen geben, sie regelmäßig in Wein " +
      "'baden' und bei sich im Haus aufbewahren, sie sollte Reichtum, " +
      "Glück und Liebe ins Haus bringen.\n\n" +
      "• Im Schlafzimmer: Unter das Bett legen für Fruchtbarkeit und Lust.",
    hintergrund:
      "Die Alraune hat eine Kulturgeschichte, die über 3000 Jahre zurückreicht. " +
      "Bereits in der Bibel erscheint sie (Genesis 30:14-16): Rahel tauscht " +
      "eine Nacht mit Jakob gegen Alraunen (hebr. 'dudaim') von Lea. " +
      "Dioskurides (1. Jh.) beschreibt sie als Betäubungsmittel für " +
      "Operationen. Im arabischen Raum heißt sie 'yabruh' und galt als " +
      "mächtigstes Liebesmittel.\n\n" +
      "Im mittelalterlichen Europa erreichte der Alraunen-Kult seinen " +
      "Höhepunkt: Die Wurzeln wurden für astronomische Summen gehandelt" +
      "eine schöne, menschenähnliche Wurzel kostete so viel wie ein gutes " +
      "Pferd. Der Markt war entsprechend voller Fälschungen: Bryonia-Wurzeln " +
      "(Zaunrübe) wurden in Menschenform geschnitzt und als 'echte Alraunen' " +
      "verkauft.\n\n" +
      "Der 'Macer Floridus' (11. Jh.), eines der wichtigsten mittelalterlichen " +
      "Kräuterbücher, beschreibt die Alraune ausführlich. Hildegard von " +
      "Bingen warnte vor ihrem Missbrauch für Liebeszauber.",
    wissenschaft:
      "Mandragora officinarum enthält dieselben Tropan-Alkaloide wie " +
      "Tollkirsche und Bilsenkraut: Hyoscyamin (Hauptalkaloid), Scopolamin, " +
      "Atropin, und zusätzlich Mandragorin (ein eigenes Alkaloid). Die " +
      "Wurzel enthält die höchste Konzentration.\n\n" +
      "WARUM ES ALS LIEBESMITTEL 'FUNKTIONIERTE':\n" +
      "• In sehr niedrigen Dosen wirkt Scopolamin leicht enthemmend und " +
      "euphorisierend, möglicherweise die Basis der aphrodisierenden Wirkung\n" +
      "• Die Kombination mit Wein (Ethanol) verstärkt die Wirkung und senkt " +
      "die Hemmschwelle zusätzlich\n" +
      "• Aber: Die Dosis zwischen 'leicht euphorisch' und 'Halluzination/Koma/" +
      "Tod' ist MINIMAL\n\n" +
      "MODERNE MEDIZIN: Scopolamin wird heute als Pflaster gegen Reisekrankheit " +
      "und als Prämedikation vor Narkosen eingesetzt, die 'magische' Wirkung " +
      "ist gut verstanden.",
    geheimtipp:
      "Die berühmteste Alraune der Literaturgeschichte ist die von " +
      "Niccolo Machiavelli: Seine Komödie 'La Mandragola' (1518) dreht " +
      "sich um einen Betrug mit einer angeblichen Alraunenwurzel. " +
      "Und in der deutschen Romantik lebte der Mythos wieder auf" +
      "Achim von Arnim schrieb 'Isabella von Ägypten' (1812) über eine " +
      "Alraune, die zum Leben erwacht. Die Alraune ist die Pflanze, die " +
      "am meisten Geschichten hervorgebracht hat, mehr als jede andere " +
      "in der europäischen Kulturgeschichte.",
    vorsicht:
      "REIN HISTORISCH: NICHT NACHMACHEN! ABSOLUT LEBENSGEFÄHRLICH!\n\n" +
      "Mandragora officinarum enthält TÖDLICHE Tropan-Alkaloide:\n" +
      "• Hyoscyamin, Scopolamin, Atropin, Mandragorin\n" +
      "• ALLE Pflanzenteile sind giftig, besonders die Wurzel und die Früchte\n" +
      "• Es gibt KEINE sichere Dosierung für Laien\n" +
      "• Symptome der Vergiftung: Pupillenerweiterung, Mundtrockenheit, " +
      "Herzrasen, Halluzinationen, Krämpfe, Koma, Tod durch Atemstillstand\n" +
      "• Die Kombination mit Alkohol (wie im historischen 'Liebestrank') " +
      "VERSTÄRKT die Giftigkeit massiv\n\n" +
      "NIEMALS Pflanzen der Nachtschattenfamilie sammeln, zubereiten oder " +
      "einnehmen! Bei Vergiftungsverdacht: SOFORT Notarzt (112)!",
    quelle:
      "Dioskurides, 'De Materia Medica', 1. Jh.; 'Macer Floridus', 11. Jh.; " +
      "Hildegard von Bingen, 'Physica', 12. Jh.; Hanns Bäuchtold-Stäubli, " +
      "'Handwörterbuch des deutschen Aberglaubens', Stichwort 'Alraune'",
    tags: [
      "#Alraune", "#Mandragora", "#Liebesmagie", "#Nachtschatten",
      "#Tropanalkaloide", "#Mittelalter", "#Volksglaube", "#Giftig",
      "#Aphrodisiakum", "#Galgenmännchen"
    ],
    besonders_bei: [
      "Alraune", "Mandragora", "Liebesmagie", "Nachtschatten",
      "Hexenpflanze", "Aphrodisiakum"
    ]
  },

  {
    id: "eisenkraut-liebesmagie",
    name: "Eisenkraut (Verbena): Das heilige Liebeskraut der Druiden",
    kategorie: "Liebesmagie",
    schwierigkeit: "Einfach",
    beschreibung:
      "Eisenkraut (Verbena officinalis) ist eines der wenigen 'magischen' " +
      "Kräuter, die man bedenkenlos verwenden kann, und eines der " +
      "heiligsten Kräuter der europäischen Tradition. Bei den Kelten war " +
      "es 'Herba sacra', bei den Römern trugen Friedensboten Eisenkraut " +
      "als Zeichen des guten Willens, und im Mittelalter galt es als " +
      "das vielseitigste Liebeskraut überhaupt. Ungefährlich, " +
      "wissenschaftlich interessant, und voller Geschichte.",
    zutaten: [
      {
        name: "Eisenkraut (Verbena officinalis)",
        menge: "3g getrocknetes Kraut auf 250ml Wasser (als Tee)",
        wirkung:
          "Verbenalin, Hastatoside, tatsächlich leicht beruhigend, " +
          "stimmungsaufhellend, leicht adaptogen. Iridoidglykoside mit " +
          "entzündungshemmender Wirkung."
      },
      {
        name: "Honig (zum Süßen)",
        menge: "Nach Geschmack",
        wirkung: "Süße, Bindung, traditioneller Zusatz."
      }
    ],
    zubereitung:
      "ALS LIEBESTRANK (Tee):\n" +
      "3g getrocknetes Eisenkraut mit 250ml heißem (nicht kochendem) Wasser " +
      "übergießen. 7-10 Minuten ziehen lassen. Abseihen und mit Honig süßen. " +
      "Idealerweise am Freitag (Venus-Tag) zubereiten.\n\n" +
      "ALS AMULETT:\n" +
      "Getrocknetes Eisenkraut in ein kleines Stoffbeutelchen füllen " +
      "(idealerweise grüner oder roter Stoff). Bei sich tragen, unter " +
      "das Kopfkissen legen, oder im Schlafzimmer aufhängen.\n\n" +
      "HISTORISCHES PFLÜCKRITUAL:\n" +
      "Im Mittelalter wurde beim Pflücken ein Gebet gesprochen und der Erde " +
      "eine Opfergabe hinterlassen: Honig oder Wein, als Dank. Die Pflanze " +
      "sollte mit der linken Hand gepflückt werden (Mondseite, Intuition).",
    anwendung:
      "Der Eisenkraut-Tee kann täglich getrunken werden, er ist ein mildes, " +
      "angenehmes Kräut mit leicht beruhigender und stimmungsaufhellender " +
      "Wirkung. Als Liebestrank: Gemeinsam mit der geliebten Person trinken. " +
      "Als Amulett: Bei sich tragen oder unter das Kopfkissen legen. " +
      "Als Räucherung: Getrocknetes Eisenkraut auf Räucherkohle, reinigend " +
      "und öffnend.",
    hintergrund:
      "BEI DEN KELTEN/DRUIDEN:\n" +
      "Eisenkraut war 'Herba sacra', das heilige Kraut schlechthin. Es wurde " +
      "für Altarreinigung verwendet, für Orakel, für Liebeszauber und " +
      "für Schutz. Plinius der Ältere berichtet, dass die gallischen Druiden " +
      "Eisenkraut ebenso hoch schätzten wie Mistel.\n\n" +
      "BEI DEN RÖMERN:\n" +
      "Verbenae (Eisenkraut-Zweige) wurden von den 'Verbenarii' getragen" +
      "Friedensboten und Herolden, die unter dem Schutz der Götter standen. " +
      "Das Wort 'Verbena' selbst bedeutet möglicherweise 'heiliger Zweig'.\n\n" +
      "IM MITTELALTER:\n" +
      "Das Eisenkraut erscheint in fast jedem mittelalterlichen Kräuterbuch " +
      "als Liebesmittel, Schutzkraut und Heilpflanze. Es galt als Allheilmittel" +
      "'Wundkraut', 'Stahlkraut', 'Sagenkraut'. Im Volksmund hieß es, " +
      "wer Eisenkraut bei sich trägt, dem kann kein Hund etwas antun " +
      "(daher auch 'Hundskraut').\n\n" +
      "IN DER GERMANISCHEN TRADITION:\n" +
      "Im 'Neunkräutersegen' (angelsächsisch, 10. Jh.) ist das Eisenkraut " +
      "eines der neun heiligen Kräuter gegen Gift und Krankheit.",
    wissenschaft:
      "Verbena officinalis enthält:\n" +
      "• Verbenalin und Hastatoside (Iridoidglykoside), leicht beruhigend, " +
      "entzündungshemmend, leicht analgetisch\n" +
      "• Verbascoside (Phenylpropanoid), antioxidativ, neuroprotektiv\n" +
      "• Ätherisches Öl mit Citral, stimmungsaufhellend\n\n" +
      "Klinische Studien zeigen moderate anxiolytische (angstlösende) und " +
      "leicht schlaffördernde Wirkung. In der Phytotherapie wird Eisenkraut " +
      "heute bei nervöser Erschöpfung, leichten Angstzuständen und " +
      "Verdauungsbeschwerden eingesetzt. Es ist Bestandteil des bekannten " +
      "Präparats Sinupret (bei Sinusitis).\n\n" +
      "Die 'magische' Liebewirkung hat also eine biochemische Basis: " +
      "Eisenkraut beruhigt leicht, hellt die Stimmung auf und löst " +
      "Anspannung, genau das, was man für Nähe und Verbindung braucht.",
    geheimtipp:
      "Im Mittelalter wurde beim Pflücken von Eisenkraut ein Gebet " +
      "gesprochen und der Erde eine Opfergabe hinterlassen: Honig oder " +
      "Wein, als Dank an die Erde. Diese Haltung der DANKBARKEIT gegenüber " +
      "der Pflanzenwelt ist vielleicht die eigentliche 'Magie' des " +
      "Eisenkrauts: Es erinnert daran, dass Heilpflanzen Geschenke sind, " +
      "keine Ressourcen. Wer mit Achtung und Dankbarkeit an eine Pflanze " +
      "herantritt, verändert seine eigene innere Haltung, und DAS ist " +
      "der wahre Liebeszauber.",
    vorsicht:
      "UNGEFÄHRLICH, eines der sichersten 'magischen' Kräuter überhaupt. " +
      "Kann als Tee täglich getrunken werden. Einzige Einschränkung: " +
      "Nicht in der Schwangerschaft verwenden (traditionell als " +
      "Emmenagogum/Wehenmittel genutzt, uterustonisierend). " +
      "Bei blutzuckersenkenden Medikamenten Vorsicht (kann Wirkung verstärken).",
    quelle:
      "Plinius der Ältere, 'Naturalis Historia', 1. Jh.; Angelsächsischer " +
      "'Neunkräutersegen', 10. Jh.; Diverse mittelalterliche Kräuterbücher; " +
      "Moderne Phytotherapie: Kommission E Monographie 'Verbenae herba'",
    tags: [
      "#Eisenkraut", "#Verbena", "#Liebesmagie", "#Druiden",
      "#Kelten", "#HerbaSacra", "#Ungefährlich", "#Phytotherapie",
      "#Volksmagie", "#Liebeskraut"
    ],
    besonders_bei: [
      "Eisenkraut", "Verbena", "Liebesmagie", "Druiden",
      "Kelten", "Liebeskraut", "Ungefährlich"
    ]
  },

  // =========================================================================
  //  SCHUTZMAGIE
  // =========================================================================

  {
    id: "vierrauber-essig-grimoire",
    name: "Vierräube-Essig: Das Pestrezept der Grabdiebe",
    kategorie: "Schutzmagie",
    schwierigkeit: "Mittel",
    beschreibung:
      "Eine der beruhmtesten Legenden der europäischen Volksmedizin: " +
      "Während einer verheerenden Pestepidemie wurden vier Diebe gefasst, " +
      "die Pestleichen ausraubten, ohne sich selbst anzustecken. Ihr " +
      "Geheimnis: Ein Kräuteressig, mit dem sie sich einrieben. Die " +
      "Legende existiert in dutzenden Versionen (Marseille 1720, Toulouse " +
      "1628-1631, London 1665), und das Faszinierende ist: Die Zutaten " +
      "sind TATSÄCHLICH alle antibakteriell und antiviral wirksam. " +
      "Dies ist ein Rezept das man TATSÄCHLICH herstellen und verwenden kann!",
    zutaten: [
      {
        name: "Apfelessig (naturbelassen, mit Essigmutter)",
        menge: "2 Liter",
        wirkung:
          "Essigsäure (5-6%), antibakteriell, antiviral, antifungal. " +
          "Senkt den pH-Wert und tötet viele Krankheitserreger ab."
      },
      {
        name: "Salbei (Salvia officinalis)",
        menge: "40g getrocknetes Kraut",
        wirkung:
          "Thujon, Campher, Cineol, stark antibakteriell, antiviral, " +
          "adstringierend. Der Name sagt es: 'Salvia' von 'salvare' = retten."
      },
      {
        name: "Rosmarin (Rosmarinus officinalis)",
        menge: "40g getrocknetes Kraut",
        wirkung:
          "Rosmarinsäure, Carnosol, antioxidativ, antibakteriell, " +
          "durchblutungsfördernd. Historisch DAS Kraut gegen Seuchen."
      },
      {
        name: "Thymian (Thymus vulgaris)",
        menge: "40g getrocknetes Kraut",
        wirkung:
          "Thymol, eines der stärksten natürlichen Antiseptika. " +
          "Tatsächlich in der Medizin als Desinfektionsmittel verwendet " +
          "(Listerine enthält Thymol!)."
      },
      {
        name: "Lavendel (Lavandula angustifolia)",
        menge: "40g getrocknete Blüten",
        wirkung:
          "Linalool, Linalylacetat, antibakteriell, beruhigend, " +
          "insektenabwehrend. Lavendel wurde in Pestzeiten in Raeume " +
          "gestreut."
      },
      {
        name: "Knoblauch (Allium sativum)",
        menge: "40g, zerquetscht (ca. 2 Knollen)",
        wirkung:
          "Allicin, stark antibakteriell, antiviral, antifungal, " +
          "immunstimulierend. Einer der am besten erforschten natürlichen " +
          "Keimtöter."
      },
      {
        name: "Pfefferkörner (Piper nigrum)",
        menge: "20g, grob zerbröselt",
        wirkung: "Piperin, entzündungshemmend, verdauungsfördernd, verstärkt die Bioverfügbarkeit anderer Wirkstoffe."
      },
      {
        name: "Kampfer (Cinnamomum camphora)",
        menge: "10g (natürlicher Kampfer)",
        wirkung:
          "Stark antibakteriell, durchblutungsfördernd, insektenabwehrend. " +
          "Wurde in Pestzeiten in 'Pestdoktor-Masken' getragen."
      },
      {
        name: "Gewürznelken (Syzygium aromaticum)",
        menge: "10g, ganz",
        wirkung:
          "Eugenol, stark antibakteriell und antiviral. In der Zahnmedizin " +
          "bis heute als Antiseptikum verwendet."
      }
    ],
    zubereitung:
      "1. Alle Kräuter und Gewürze grob zerkleinern.\n\n" +
      "2. In ein großes Glasgefäß geben (mind. 3 Liter Fassungsvermögen).\n\n" +
      "3. Mit dem Apfelessig übergießen. Alle Zutaten müssen bedeckt sein.\n\n" +
      "4. Gefäß fest verschließen.\n\n" +
      "5. An einem warmen Ort 14 Tage mazerieren (ziehen lassen).\n\n" +
      "6. TÄGLICH kräftig schütteln.\n\n" +
      "7. Nach 14 Tagen durch ein feines Tuch oder einen Kaffeefilter abseihen.\n\n" +
      "8. In dunkle Flaschen füllen, beschriften und kühl lagern.\n\n" +
      "9. Hält sich mindestens 1 Jahr, oft länger.",
    anwendung:
      "• Hände und Gesicht einreiben (verdünnt oder pur), historische " +
      "Hauptanwendung der Grabdiebe\n" +
      "• Raeume aussprühen (1:1 mit Wasser verdünnt in Sprühflasche)" +
      "als natürliches Raumdesinfektionsmittel\n" +
      "• Zum Gurgeln bei Halsschmerzen (1 EL auf ein Glas Wasser)\n" +
      "• Als Waschung/Körperspülung\n" +
      "• Einen Schuss ins Putzwasser für natürliche Desinfektion\n" +
      "• AUF HOLZSCHNITTEN: Verdünnt als Umschlag bei Insektenstichen",
    hintergrund:
      "Die Legende existiert in vielen Versionen:\n\n" +
      "MARSEILLE-VERSION (1720): Während der letzten großen Pestepidemie " +
      "in Westeuropa (ca. 100.000 Tote) wurden vier Diebe gefasst, die " +
      "Pestleichen und Pesthaeuser ausraubten. Vor Gericht gestanden sie " +
      "ihr Geheimnis: einen Kräuteressig, mit dem sie sich Gesicht, " +
      "Hände und Körper einrieben. Sie wurden BEGNADIGT, unter der " +
      "Bedingung, dass sie das Rezept öffentlich machten. Es wurde an " +
      "die Türen der Stadt genagelt.\n\n" +
      "TOULOUSE-VERSION (1628-1631): Ähnliche Geschichte, vier Räuber, " +
      "die Pesttote beraubten.\n\n" +
      "Das Rezept erscheint auch im Pharmacopoeia (Arzneibuch) verschiedener " +
      "europäischer Städte als offizielles Heilmittel. In Frankreich war " +
      "'Vinaigre des quatre voleurs' bis ins 20. Jahrhundert als " +
      "Arzneimittel registriert!",
    wissenschaft:
      "JEDE EINZELNE ZUTAT ist wissenschaftlich belegt antibakteriell:\n\n" +
      "• Essigsäure: Effektiv gegen E. coli, Salmonella, Staphylokokken " +
      "(pH-Absenkung unter 4,5 tötet viele Keime)\n" +
      "• Thymol (Thymian): In Studien wirksam gegen MRSA und andere " +
      "resistente Keime: Listerine-Mundwasser enthält Thymol!\n" +
      "• Allicin (Knoblauch): Breitband-antibakteriell, antiviral, antifungal" +
      "einer der am besten erforschten pflanzlichen Keimtöter\n" +
      "• Rosmarinsäure (Rosmarin): Antioxidativ, antibakteriell, " +
      "entzündungshemmend\n" +
      "• Eugenol (Nelken): In der Zahnmedizin als Antiseptikum eingesetzt\n" +
      "• Kampfer: Stark antiseptisch, insektenabwehrend\n" +
      "• Linalool (Lavendel): Antibakteriell, zusätzlich insektenabwehrend\n\n" +
      "GEGEN PEST WIRKSAM? Die Pest wird durch Yersinia pestis übertragen, " +
      "hauptsächlich durch Flöhe. Der Essig konnte: (a) Flöhe abwehren " +
      "(Kampfer, Lavendel sind insektenabwehrend), (b) Bakterien auf der " +
      "Haut reduzieren, (c) einen schützenden Film auf der Haut bilden. " +
      "Ob er tatsächlich vor der Pest schützte, ist fraglich, aber die " +
      "antimikrobielle Wirkung der Kombination ist REAL.",
    geheimtipp:
      "Die Diebe wurden begnadigt, unter der Bedingung, dass sie ihr " +
      "Rezept veröffentlichten. Es wurde an die Türen der Stadt genagelt. " +
      "Das ist vielleicht die schönste Wendung der Geschichte: Aus Diebstahl " +
      "und Tod entstand ein Heilmittel für alle. In der Aromatherapie ist " +
      "'Vinaigre des quatre voleurs' heute wieder populär, und es gibt " +
      "Fertigprodukte, aber der selbstgemachte Essig ist kraftvoller und " +
      "macht die Geschichte lebendig.",
    vorsicht:
      "Grundsätzlich UNGEFÄHRLICH, alle Zutaten sind Lebensmittel. " +
      "Vorsicht: Essig kann Haut reizen (bei empfindlicher Haut verdünnen). " +
      "Nicht in die Augen bringen. Kampfer in der angegebenen Menge ist " +
      "unbedenklich; größere Mengen reinen Kampfers können toxisch sein " +
      "(nicht mehr als angegeben verwenden). Nicht als Ersatz für " +
      "medizinische Behandlung bei ernsten Infektionen verwenden!",
    quelle:
      "Diverse historische Quellen; Pharmacopee de Paris; Legende aus " +
      "Marseille (1720) und Toulouse (1628-1631); Jean Valnet, " +
      "'Aromatherapie', 1964",
    tags: [
      "#VierräuberEssig", "#Pestrezept", "#Schutzmagie", "#Desinfektion",
      "#Kräuteressig", "#Marseille", "#Pest", "#Antibakteriell",
      "#Volksmedizin", "#TatsächlichMachbar"
    ],
    besonders_bei: [
      "Vierräuber-Essig", "Pest", "Desinfektion", "Schutzmagie",
      "Kräuteressig", "Antibakteriell", "Volksmedizin"
    ]
  },

  {
    id: "hexenbanner-flaeschchen",
    name: "Das Hexenbanner-Fläschchen: Witch Bottle",
    kategorie: "Schutzmagie",
    schwierigkeit: "Mittel",
    beschreibung:
      "Die 'Witch Bottle' (Hexenbanner-Fläschchen) ist eine der am besten " +
      "archäologisch dokumentierten magischen Praktiken Europas. Hunderte " +
      "versiegelte Gefäße aus dem 16. bis 18. Jahrhundert wurden bei " +
      "Ausgrabungen unter Türschwellen, in Kaminen und in Mauern gefunden" +
      "in England, Deutschland, den Niederlanden und Skandinavien. Sie dienten " +
      "dem Schutz des Hauses und seiner Bewohner gegen 'bösen Zauber'. " +
      "Eine faszinierende Verschmelzung von Volksglauben und praktischem " +
      "Schutzdenken.",
    zutaten: [
      {
        name: "Bartmann-Krug oder Einmachglas",
        menge: "1 Stück, verschließbar",
        wirkung:
          "Historisch: Steinzeug-Krüge mit Bartgesicht ('Bartmann' oder " +
          "'Bellarmine'), importiert aus dem Rheinland nach England. " +
          "Das Gesicht sollte den Fluch 'abschrecken'. Modern: Ein " +
          "Einmachglas tut denselben Dienst."
      },
      {
        name: "Eisennägel (rostig)",
        menge: "7-9 Stück",
        wirkung:
          "Eisen = Schutz in fast ALLEN europäischen Traditionen. " +
          "Eisennägel 'nageln' den Fluch fest und machen ihn unschädlich. " +
          "Rost verstärkt die Schutzkraft (Blutfarbe, Transformation)."
      },
      {
        name: "Stecknadeln oder Nähnadeln",
        menge: "Eine Handvoll",
        wirkung:
          "Die Nadeln 'stechen' den Fluch zurück zum Absender" +
          "Spiegelmagie/Umkehrzauber."
      },
      {
        name: "Roter Faden oder rotes Band",
        menge: "Ca. 30cm, in Stücke gerissen (nicht geschnitten!)",
        wirkung:
          "Rot = Blut = Lebenskraft = Schutz. Reißen (nicht schneiden) " +
          "ist wichtig: Die zerrissenen Enden 'fangen' negative Energie " +
          "ein wie ein Netz."
      },
      {
        name: "Rosmarin (getrocknet)",
        menge: "Eine Handvoll",
        wirkung: "Reinigung, Schutz, Erinnerung. Eines der ältesten Schutzräucherkräuter."
      },
      {
        name: "Salz (grob, unraffiniert)",
        menge: "2-3 Esslöffel",
        wirkung:
          "Universelles Schutzmittel in praktisch JEDER Kultur der Welt. " +
          "Antibakteriell, konservierend, 'unverwüstlich'."
      },
      {
        name: "Urin des zu Schützenden (historisch)",
        menge: "Historisch: Genügend um die anderen Zutaten zu bedecken",
        wirkung:
          "HISTORISCH: Persönliche Körperflüssigkeit als magische Verbindung " +
          "zum Schutzsubjekt. Der Fluch 'findet' den Urin statt der Person. " +
          "Manche archäologischen Funde enthielten tatsächlich Urin " +
          "(chemisch nachgewiesen!)."
      },
      {
        name: "Haarlokken oder Fingernägel (historisch)",
        menge: "Kleine Menge",
        wirkung: "Persönliche Materie, verstärkt die magische Verbindung."
      }
    ],
    zubereitung:
      "HISTORISCHE VERSION:\n" +
      "1. Einen Bartmann-Krug oder ein Steingefäß wählen.\n" +
      "2. Eisennägel, Stecknadeln und rote Fäden hineinlegen.\n" +
      "3. Rosmarin und Salz hinzufügen.\n" +
      "4. Urin des Hausbewohners hineingießen.\n" +
      "5. Haare oder Nagelschnipsel hinzufügen.\n" +
      "6. Das Gefäß fest versiegeln (mit Wachs oder Kork).\n" +
      "7. Unter der Türschwelle, im Kamin oder in der Hausmauer vergraben.\n\n" +
      "MODERNE ADAPTION (ohne Urin):\n" +
      "1. Ein Einmachglas wählen.\n" +
      "2. Eisennägel, Stecknadeln und rote Fäden hineinlegen.\n" +
      "3. Rosmarin, Salbei, Salz und schwarzen Pfeffer hinzufügen.\n" +
      "4. Einen persönlichen Gegenstand hinzufügen (kleines Schmuckstück, " +
      "ein beschriebenes Papier mit dem eigenen Namen).\n" +
      "5. Das Glas fest verschließen.\n" +
      "6. Mit klarer Schutz-Intention aufladen (ruhig halten, sich vorstellen " +
      "wie ein Schutzschild das Haus umgibt).\n" +
      "7. Im Garten vergraben, unter der Türschwelle verstecken, oder an " +
      "einem verborgenen Ort im Haus aufbewahren.",
    anwendung:
      "Das Fläschchen wird einmal hergestellt und dann VERGESSEN, es " +
      "arbeitet im Verborgenen. In der Tradition soll man nicht mehr daran " +
      "denken, nachdem es platziert wurde. Es 'fängt' negative Energien " +
      "ein und schützt das Haus und seine Bewohner. Manche Traditionen " +
      "empfehlen, das Fläschchen jährlich zu erneuern (z.B. in den " +
      "Rauhnächten).",
    hintergrund:
      "ARCHÄOLOGISCHE FUNDE:\n" +
      "Die ältesten archäologisch datierten Witch Bottles stammen aus dem " +
      "16. Jahrhundert. Besonders zahlreich sind Funde in England (über 200 " +
      "dokumentiert), aber auch in Deutschland, den Niederlanden und " +
      "Skandinavien. Die Krüge sind oft vom Typ 'Bartmann' (auch 'Bellarmine' " +
      "genannt): Steinzeug-Krüge mit einem bärtigen Gesicht, hergestellt " +
      "im Rheinland (Köln, Frechen, Siegburg) und massenhaft nach England " +
      "exportiert.\n\n" +
      "2004 wurde in Greenwich (London) eine vollständig erhaltene Witch " +
      "Bottle aus dem 17. Jahrhundert gefunden und wissenschaftlich untersucht. " +
      "Sie enthielt: Eisennägel, Stecknadeln, menschlichen Urin (chemisch " +
      "nachgewiesen), Schwefel, Haare, und eine herzförmige Stoffpuppe " +
      "voller Nadeln.\n\n" +
      "SYMBOLIK:\n" +
      "Die Witch Bottle funktioniert nach dem Prinzip der 'Umkehrmagie': " +
      "Der Fluch wird von der Person (Urin/Haare als Lockmittel) in die " +
      "Flasche gelenkt, dort von den Nadeln und Nägeln 'festgenagelt' und " +
      "neutralisiert. Rosmarin reinigt, Salz schützt, der rote Faden bindet.",
    wissenschaft:
      "Aus moderner Sicht ist die Witch Bottle ein faszinierendes Beispiel " +
      "für RITUELLE PSYCHOLOGIE: Das Herstellen und Vergraben des " +
      "Fläschchens gibt dem Menschen ein Gefühl der Kontrolle und des " +
      "Schutzes in einer Zeit, in der man sich Hexerei und böser Magie " +
      "hilflos ausgeliefert fühlte. Dieser psychologische Effekt ist REAL: " +
      "Rituale reduzieren nachweislich Angst und erhöhen das " +
      "Kontrollgefühl (Studien von Brooks et al., 2016). Das ist keine " +
      "'Einbildung', es ist eine wirksame Technik der " +
      "Angstreduktion, die heute in der Verhaltenstherapie als " +
      "'symbolische Handlung' anerkannt ist.",
    geheimtipp:
      "Wenn du bei Renovierungsarbeiten in einem alten Haus (vor 1800) " +
      "ein versiegeltes Gefäß unter der Schwelle oder im Kamin findest" +
      "du hast möglicherweise eine echte Witch Bottle entdeckt! " +
      "In dem Fall: Nicht öffnen, sondern ein lokales Museum oder eine " +
      "archäologische Stelle kontaktieren. Diese Funde sind historisch " +
      "wertvoll und selten gut erhalten.",
    vorsicht:
      "Völlig ungefährlich. Die einzige 'Gefahr' sind Stecknadeln und " +
      "Nägel (Vorsicht beim Einfüllen, nicht in Kindenähe aufbewahren). " +
      "Falls du die moderne Version ohne Urin machst, ist es ein schönes, " +
      "meditatives Schutzritual.",
    quelle:
      "Brian Hoggard, 'Magical House Protection: The Archaeology of " +
      "Counter-Witchcraft', 2019; Ralph Merrifield, 'The Archaeology of " +
      "Ritual and Magic', 1987; Greenwich Witch Bottle Fund, 2004",
    tags: [
      "#WitchBottle", "#Hexenbanner", "#Schutzmagie", "#Archäologie",
      "#BartmannKrug", "#Volksmagie", "#Eisennägel", "#Schutzzauber",
      "#England", "#Deutschland"
    ],
    besonders_bei: [
      "Witch Bottle", "Hexenbanner", "Schutzmagie", "Hausschutz",
      "Volksmagie", "Archäologie"
    ]
  },

  {
    id: "druiden-schutzkreis",
    name: "Druiden-Schutzkreis: Die neun heiligen Hölzer",
    kategorie: "Schutzmagie",
    schwierigkeit: "Mittel",
    beschreibung:
      "In der keltischen Tradition waren Baeume das Alphabet der Seele. " +
      "Die Ogham-Schrift ordnet jedem Buchstaben einen Baum zu, und neun " +
      "von ihnen galten als besonders heilig. Diese neun Hölzer bilden " +
      "zusammen den stärksten Schutzkreis der druidischen Tradition" +
      "als Räucherung oder als physischer Kreis aus Zweigen. Jeder Baum " +
      "bringt seine eigene Kraft ein, zusammen bilden sie ein " +
      "unüberwindliches Schutzschild.",
    zutaten: [
      {
        name: "Birke (Betula pendula)",
        menge: "Ein kleines Stück Holz oder Rinde",
        wirkung:
          "REINIGUNG und NEUANFANG. Der erste Baum im Ogham-Alphabet " +
          "(Beth). Birke ist der Pionier, sie besiedelt als erste kahle " +
          "Flächen. Steht für das Wegfegen des Alten und den " +
          "frischen Start."
      },
      {
        name: "Eiche (Quercus robur)",
        menge: "Ein kleines Stück Holz",
        wirkung:
          "STÄRKE und BESTÄNDIGKEIT. Der heiligste Baum der Kelten" +
          "das Wort 'Druide' kommt möglicherweise von 'dru-wid' = " +
          "'der die Eiche kennt'. Donars/Thors Baum. Unerschütterliche " +
          "Standhaftigkeit."
      },
      {
        name: "Eberesche/Vogelbeere (Sorbus aucuparia)",
        menge: "Ein kleines Stück Holz oder getrocknete Beeren",
        wirkung:
          "SCHUTZ GEGEN VERZAUBERUNG. In Schottland und Irland der " +
          "wichtigste Schutzbaum überhaupt. Ebereschenkreuze wurden " +
          "über Türrahmen genagelt, Ebereschenzweige an Viehälle " +
          "gebunden. Gilt als unüberwindbar für negative Magie."
      },
      {
        name: "Weide (Salix alba)",
        menge: "Ein kleines Stück Holz oder Rinde",
        wirkung:
          "INTUITION und MONDKRAFT. Der Baum der Göttin, des Wassers " +
          "und der Nacht. Steht für die weibliche, empfangende Seite " +
          "des Schutzes, das SPÜREN von Gefahr."
      },
      {
        name: "Weißdorn (Crataegus monogyna)",
        menge: "Ein kleines Stück Holz (Vorsicht: Dornen!)",
        wirkung:
          "FEENWELT und GRENZE. Der Weißdorn markiert die Schwelle " +
          "zwischen unserer Welt und der Anderswelt. Einzeln stehende " +
          "Weissdornbaeume galten als Feentore und durften NIEMALS " +
          "gefällt werden (in Irland bis heute!)."
      },
      {
        name: "Haselnuss (Corylus avellana)",
        menge: "Ein kleines Stück Holz oder Haselnüsse",
        wirkung:
          "WEISHEIT und ORAKEL. Der Baum der Dichtung und der Seher. " +
          "Haselnusszweige als Wünschelruten. In der irischen Sage: " +
          "Die Haselnüsse der Weisheit fallen in den Brunnen der " +
          "Erkenntnis und werden vom Lachs des Wissens gefressen."
      },
      {
        name: "Apfelbaum (Malus domestica)",
        menge: "Ein kleines Stück Holz",
        wirkung:
          "LIEBE und HEILUNG. Avalon = 'Apfelinsel', das keltische " +
          "Paradies. Der Apfelbaum steht für Heilung, Liebe und " +
          "Unsterblichkeit. Schneidet man einen Apfel quer, zeigt " +
          "sich das Pentagramm."
      },
      {
        name: "Weinrebe oder Efeu (Hedera helix)",
        menge: "Ein kleines Stück Ranke",
        wirkung:
          "FREUDE und TRANSFORMATION. Die Spiralpflanze, steht für " +
          "den Kreislauf des Lebens, für Ekstase und Wandlung. Dem " +
          "Gott Dionysos/Bacchus heilig."
      },
      {
        name: "Holunder (Sambucus nigra)",
        menge: "Ein kleines Stück Holz (NIEMALS Holunder verbrennen ohne die 'Erlaubnis' des Baumes zu erbitten!)",
        wirkung:
          "DIE GROSSE MUTTER und TOR ZUM JENSEITS. Der Holunder ist der " +
          "Baum der Göttin Holle/Holda/Frau Perchta. Er steht an der " +
          "Grenze zwischen Leben und Tod. Holunderholz im Haus schützt" +
          "aber man muss den Baum mit Respekt behandeln."
      }
    ],
    zubereitung:
      "ALS RÄUCHERUNG (Schutzräucherung):\n" +
      "Von jedem der neun Baeume ein kleines Stück Holz, Rinde oder " +
      "getrocknetes Blatt sammeln. Die Stücke klein schneiden. Auf " +
      "eine glühende Räucherkohle legen, am besten alle neun zusammen " +
      "oder nacheinander, jeweils mit der Nennung des Baumes und seiner " +
      "Kraft.\n\n" +
      "ALS SCHUTZKREIS (für Ritualarbeit):\n" +
      "Neun Zweige der verschiedenen Baeume im Kreis auslegen, einen für " +
      "jede Himmelsrichtung plus die Mitte. Den Kreis im Uhrzeigersinn " +
      "(Sonnenlauf) legen. Vor dem Betreten des Kreises eine Intention " +
      "sprechen.\n\n" +
      "ALS SCHUTZBEUTEL:\n" +
      "Kleine Stücke aller neun Hölzer in einen Beutel aus natürlichem " +
      "Stoff füllen. Als Amulett bei sich tragen oder im Haus aufhängen.\n\n" +
      "WICHTIG: Beim Sammeln der Zweige traditionell die Erlaubnis des Baumes " +
      "erbitten und eine kleine Gabe hinterlassen (Wasser, Honig, Haar). " +
      "Nie mehr nehmen als nötig.",
    anwendung:
      "Die Schutzräucherung eignet sich besonders für:\n" +
      "• Den Einzug in ein neues Haus/eine neue Wohnung\n" +
      "• Nach Konflikten oder belastenden Ereignissen\n" +
      "• In den Rauhnächten (25. Dez. - 6. Jan.)\n" +
      "• Bei Vollmond oder Jahreskreisfesten\n" +
      "• Immer wenn das Gefühl besteht, dass 'die Energie' in einem " +
      "Raum 'schwer' geworden ist\n\n" +
      "Der Schutzkreis ist für meditative oder rituelle Arbeit gedacht" +
      "ein sicherer Raum, in dem man sich öffnen kann.",
    hintergrund:
      "DIE OGHAM-SCHRIFT:\n" +
      "Die Kelten entwickelten ein einzigartiges Schriftsystem, in dem " +
      "jeder Buchstabe einem Baum zugeordnet ist, das Ogham (gesprochen " +
      "'Oh-am'). Es ist auf Steinmonumenten in Irland und Wales erhalten. " +
      "Die Baeume waren mehr als ein Alphabet: Sie waren ein SYSTEM DES " +
      "WISSENS, eine Weltsicht, in der jeder Baum eine kosmische Kraft " +
      "repräsentiert.\n\n" +
      "DIE NEUN HÖLZER:\n" +
      "Die Tradition der 'neun heiligen Hölzer' ist in verschiedenen " +
      "Formen überliefert, am bekanntesten durch die schottisch-" +
      "gälische 'Carmina Gadelica' (Alexander Carmichael, 1900), eine " +
      "Sammlung keltischer Gebete, Segenssprüche und Rituale aus den " +
      "schottischen Highlands und Inseln. Die genaue Zusammensetzung " +
      "variiert regional, aber die hier genannten neun Baeume bilden " +
      "den Kern der meisten Überlieferungen.\n\n" +
      "DIE KELTISCHE WELTSICHT:\n" +
      "Für die Kelten waren Baeume LEBENDE WESEN mit eigener Kraft, " +
      "eigenem Charakter und eigener Weisheit. Heilige Haine waren ihre " +
      "Tempel, und das Fällen eines heiligen Baumes galt als schwerste " +
      "Sünde. Diese tiefe Verbindung zur Natur ist einer der Gründe, " +
      "warum die keltische Tradition heute so viele Menschen anspricht.",
    wissenschaft:
      "Das Räuchern von Hölzern setzt terpene Verbindungen frei, die " +
      "nachweislich psychoaktive Wirkungen haben:\n\n" +
      "• Alpha-Pinen (in Birke, Eiche): Angstlösend, konzentrationsfördernd\n" +
      "• Linalool (in verschiedenen Hölzern): Beruhigend, anxiolytisch\n" +
      "• Cineol (in Eukalyptus-verwandten): Atemwegsbefreiend, erfrischend\n\n" +
      "Zusätzlich: Der Rauch von Harzen und Hölzern erzeugt negative " +
      "Ionen, die die Luftqualität verbessern und die Stimmung heben " +
      "(Perez et al., 2013). Und natürlich: Das Ritual selbst, das " +
      "bewusste Sammeln, Benennen und Räuchern, ist eine Form der " +
      "Achtsamkeitspraxis, die messbar Stress reduziert.",
    geheimtipp:
      "In Irland werden bis heute einzeln stehende Weissdornbaeume " +
      "respektiert und nicht gefällt, selbst wenn sie mitten auf einer " +
      "Baustelle stehen. Der Motorway M3 bei Tara wurde 2007 wegen eines " +
      "Weißdorns an einem archäologisch bedeutsamen Ort heftig debattiert. " +
      "Die 'Fairy Trees' (Feenbaeume) sind in der irischen Kultur so tief " +
      "verankert, dass selbst moderne Bauunternehmer sie nicht antasten" +
      "aus Angst vor dem 'Feenpech'. Das ist keine bloße Folklore: " +
      "Es zeigt, wie tief die keltische Baumverehrung in der Seele Europas " +
      "verwurzelt ist.",
    vorsicht:
      "Völlig ungefährlich. Alle genannten Hölzer können bedenkenlos " +
      "geräuchtert werden. Beim Räuchern: Auf gute Belüftung achten " +
      "(Fenster kippen), Räucherkohle auf feuerfester Unterlage verwenden, " +
      "nie unbeaufsichtigt lassen. Vorsicht bei Weißdorn (Dornen!) und " +
      "Efeu (Blätter sind bei Verschlucken leicht giftig, hier wird " +
      "aber nur die Ranke als Holz verwendet).",
    quelle:
      "Alexander Carmichael, 'Carmina Gadelica', 1900; Robert Graves, " +
      "'The White Goddess', 1948 (umstritten, aber einflussreich); " +
      "Peter Berresford Ellis, 'The Druids', 1994; Liz und Colin Murray, " +
      "'The Celtic Tree Oracle', 1988",
    tags: [
      "#Druiden", "#Kelten", "#NeunHölzer", "#Ogham", "#Schutzkreis",
      "#Räucherung", "#Baeume", "#Schutzmagie", "#Volksmagie",
      "#Ungefährlich"
    ],
    besonders_bei: [
      "Druiden", "Kelten", "Schutzkreis", "Räucherung",
      "Baeume", "Ogham", "neun Hölzer"
    ]
  },

  // =========================================================================
  //  GIFTKUNST — HISTORISCHES WISSEN
  // =========================================================================

  {
    id: "aqua-tofana",
    name: "Aqua Tofana: Das berühmteste Gift der Geschichte",
    kategorie: "Giftkunst",
    schwierigkeit: "Meister",
    beschreibung:
      "Aqua Tofana war das tödlichste und berühmteste Gift des 17. " +
      "Jahrhunderts, ein farb-, geruch- und geschmackloses Gift, das in " +
      "4-5 kleinen Dosen über Wochen verabreicht einen langsamen, scheinbar " +
      "natürlichen Tod verursachte. Erfunden von Giulia Tofana in " +
      "Rom/Neapel, verkauft als 'Manna di San Nicola' (heiliges Wasser), " +
      "soll es angeblich über 600 Ehemänner getötet haben. Hinter der " +
      "Geschichte steckt ein erschütterndes Kapitel der Frauengeschichte: " +
      "In einer Welt ohne Scheidungsrecht war Gift manchmal der einzige " +
      "Ausweg aus einer gewalttätigen Ehe. REIN HISTORISCHE DOKUMENTATION.",
    zutaten: [
      {
        name: "Arsentrioxid (Arsenicum album): MUTMASSLICH",
        menge: "Historisch: Genaue Dosierung war das Geheimnis Tofanas",
        wirkung:
          "TÖDLICH! Arsen in kleinen Dosen imitiert eine langsame Krankheit: " +
          "Magenbeschwerden, Schwäche, Haarausfall, blasse Haut. Der Tod " +
          "tritt nach Wochen durch Organversagen ein. Im 17. Jh. war " +
          "Arsenvergiftung schwer von natürlicher Krankheit zu unterscheiden."
      },
      {
        name: "Bleiextrakt (Bleizucker/Bleiacetat): MUTMASSLICH",
        menge: "Historisch: Beigemischt",
        wirkung:
          "TÖDLICH! Chronische Bleivergiftung verursacht: Bauchkrämpfe, " +
          "Anamie, Nierenschaden, Hirnschäden. Bleiacetat schmeckt süßlich" +
          "im Mittelalter wurde es tatsächlich als Süßstoff verwendet!"
      },
      {
        name: "Belladonna-Extrakt (Atropa belladonna): MUTMASSLICH",
        menge: "Historisch: In kleiner Menge beigemischt",
        wirkung:
          "TÖDLICH GIFTIG! Tropan-Alkaloide. Möglicherweise beigemischt " +
          "um die Symptome des Sterbenden zu verschleiern oder um " +
          "Herzrhythmusstörungen zu verstärken."
      }
    ],
    zubereitung:
      "REIN HISTORISCH: NICHT NACHMACHEN! TÖDLICHE GIFTE!\n\n" +
      "Die genaue Zusammensetzung ist NICHT gesichert: Giulia Tofana " +
      "nahm das Rezept mit ins Grab. Die historischen Quellen sind sich " +
      "uneins. Die obige Zusammensetzung ist die am häufigsten zitierte " +
      "Rekonstruktion. Das Entscheidende war die DOSIERUNG: Tofana wusste " +
      "genau, wieviel man über welchen Zeitraum geben musste, damit der " +
      "Tod nach 4-5 Gaben langsam und 'natürlich' eintrat.\n\n" +
      "Das Gift wurde in kleinen Fläschchen verkauft, die als 'Manna di " +
      "San Nicola' (heiliges Öl vom Grab des Heiligen Nikolaus in Bari) " +
      "getarnt waren. Eine genialer Deckmantel: Jede Frau konnte " +
      "religiöses Devotionalienwasser besitzen, ohne Verdacht zu erregen.",
    anwendung:
      "REIN HISTORISCH: NICHT NACHMACHEN!\n\n" +
      "Die Kundinnen, fast ausschließlich Ehefrauen, mischten das " +
      "Gift in kleinen Dosen in die Mahlzeiten oder den Wein ihrer " +
      "Ehemänner. 4-5 Gaben über mehrere Wochen verteilt. Der Mann " +
      "wurde langsam schwächer, litt unter Magenbeschwerden, verlor " +
      "an Gewicht und starb schließlich an scheinbarem Organversagen. " +
      "Da Arsenvergiftung die Symptome vieler natürlicher Krankheiten " +
      "imitiert, wurde selten Verdacht geschöpft.",
    hintergrund:
      "Giulia Tofana (manchmal Tofania d'Adamo) lebte im 17. Jahrhundert " +
      "in Rom und Neapel. Über ihr frühes Leben ist wenig bekannt. " +
      "Sie baute ein regelrechtes NETZWERK auf: Sie verkaufte das Gift an " +
      "Frauen, die aus ungewollten oder gewalttätigen Ehen fliehen wollten. " +
      "In einer Zeit, in der Scheidung UNMÖGLICH war, Frauen keinerlei " +
      "Rechte hatten und Männer ihre Frauen legal misshandeln konnten, " +
      "war Gift manchmal der einzige Ausweg.\n\n" +
      "UMFANG: Verschiedene Quellen sprechen von 600+ Opfern, diese Zahl " +
      "ist möglicherweise übertrieben (Geständnisse unter Folter " +
      "sind unzuverlässig), aber selbst eine Fraktion davon macht Aqua " +
      "Tofana zum größten Serienmord der Geschichte.\n\n" +
      "DAS ENDE: 1659 wurde Tofana verrän, eine ihrer Kundinnen " +
      "gestand unter Druck. Tofana floh in ein Kloster (Kirchenasyl), " +
      "wurde aber ausgeliefert. Nach Folter und Geständnis wurde sie " +
      "mit mehreren Mitarbeiterinnen hingerichtet.\n\n" +
      "KULTURELLE FOLGEN: Aqua Tofana löste eine Welle der Paranoia " +
      "unter männlichen Aristokraten aus. 'Vorkoster' wurden zum Standard " +
      "an Adelshofen. In Frankreich folgte der 'Affaire des Poisons' " +
      "(1677-1682) am Hof Ludwigs XIV. ein ähnlicher Giftskandal mit " +
      "Verbindungen zu Liebesmagie und Mord.",
    wissenschaft:
      "ARSENVERGIFTUNG: Warum sie so lange unerkannt blieb:\n\n" +
      "Arsenicum album (Arsentrioxid, As2O3) ist geruch- und geschmacklos. " +
      "Chronische Arsenvergiftung erzeugt Symptome, die zahlreiche " +
      "natürliche Krankheiten imitieren:\n" +
      "• Magen-Darm-Beschwerden (wie Gastritis)\n" +
      "• Schwäche und Müdigkeit (wie Anamie)\n" +
      "• Haarausfall (wie Stress oder Alter)\n" +
      "• Blasse, wachsige Haut (wie Herzkrankheit)\n" +
      "• Periphere Neuropathie (wie Diabetes)\n\n" +
      "Erst 1836 entwickelte James Marsh den 'Marsh-Test', den ersten " +
      "zuverlässigen Nachweis für Arsenvergiftung. Vorher war Arsen " +
      "das PERFEKTE Gift: unsichtbar, geschmacklos, nicht nachweisbar.\n\n" +
      "HEUTE: Arsen ist mit modernster Forensik (Massenspektrometrie, " +
      "Haaranalyse) LEICHT nachweisbar, selbst Jahrhunderte nach dem Tod. " +
      "Napoleon Bonapartes Haarproben zeigten erhöhte Arsenwerte " +
      "(ob durch Vergiftung oder arsenhaltige Tapeten ist umstritten).",
    geheimtipp:
      "Das tragischste Detail: Viele von Tofanas Kundinnen waren keine " +
      "Mörderinnen aus Habgier, sondern verzweifelte Frauen in " +
      "gewalttätigen Ehen. Im 17. Jahrhundert konnte ein Ehemann seine " +
      "Frau legal schlagen, vergewaltigen und einsperren, und die Frau " +
      "hatte KEIN Recht auf Scheidung. Die Kirche lehrte Unterwerfung. " +
      "Aqua Tofana war, in den Worten der Historikerin Tracy Borman, " +
      "'das Scheidungsmittel der Verzweifelten'. Das entschuldigt keinen " +
      "Mord, aber es erklärt den historischen Kontext.",
    vorsicht:
      "REIN HISTORISCH: NICHT NACHMACHEN!\n\n" +
      "ARSEN (Arsentrioxid): TÖDLICH! Bereits 60-120mg können einen " +
      "Erwachsenen töten. Chronische Exposition in kleinen Dosen " +
      "führt zu Krebs, Organversagen und Tod.\n\n" +
      "BLEI (Bleiacetat): TÖDLICH! Chronische Bleivergiftung " +
      "verursacht irreversible Hirn- und Nierenschäden.\n\n" +
      "BELLADONNA: TÖDLICH! Tropan-Alkaloide (siehe Flugsalben-Einträge).\n\n" +
      "Alle diese Substanzen sind LEICHT NACHWEISBAR mit moderner Forensik. " +
      "Vergiftung ist MORD und wird entsprechend bestraft.",
    quelle:
      "Mike Dash, 'The Acid Bath Murderer and Other True Stories', diverse; " +
      "Tracy Borman, 'Witches: James I and the English Witch Hunts', 2013; " +
      "Historische Quellen aus den Prozessakten, Rom 1659",
    tags: [
      "#AquaTofana", "#Giftkunst", "#Arsen", "#GiuliaTofana",
      "#17Jahrhundert", "#Rom", "#Neapel", "#Frauengeschichte",
      "#Gift", "#MannadiSanNicola"
    ],
    besonders_bei: [
      "Aqua Tofana", "Gift", "Arsen", "Giulia Tofana",
      "Giftkunst", "Frauengeschichte"
    ]
  },

  {
    id: "belladonna-geschichte",
    name: "Belladonna: Die schöne Tödliche",
    kategorie: "Giftkunst",
    schwierigkeit: "Fortgeschritten",
    beschreibung:
      "Keine Pflanze verköpert die Doppelnatur von Gift und Medizin so " +
      "perfekt wie die Tollkirsche: Atropa belladonna. Ihr Name vereint " +
      "den Tod (Atropos, die griechische Schicksalsgöttin, die den " +
      "Lebensfaden durchschneidet) mit der Schönheit (bella donna = " +
      "'schöne Frau', weil Renaissance-Frauen sich den Saft in die " +
      "Augen träufrelten, um die Pupillen zu weiten). Paracelsus' " +
      "berühmter Satz wird durch Belladonna perfekt illustriert: " +
      "'Alle Dinge sind Gift, und nichts ist ohne Gift. Allein die Dosis " +
      "macht, dass ein Ding kein Gift ist.'",
    zutaten: [
      {
        name: "Tollkirsche (Atropa belladonna): GESAMTE PFLANZE",
        menge: "REIN HISTORISCH, keinerlei Mengenangabe, da TÖDLICH",
        wirkung:
          "Hauptalkaloide: Atropin, Scopolamin, Hyoscyamin (Tropan-Alkaloide). " +
          "Anticholinerg, blockiert Acetylcholin-Rezeptoren. Wirkungen: " +
          "Pupillenerweiterung (Mydriasis), Mundtrockenheit, Herzrasen, " +
          "Halluzinationen, Verwirrtheit, Krämpfe. TÖDLICH bei Überdosis."
      }
    ],
    zubereitung:
      "REIN HISTORISCH: NICHT NACHMACHEN! TÖDLICH GIFTIG!\n\n" +
      "Dieser Eintrag dokumentiert die GESCHICHTE der Tollkirsche, " +
      "nicht ihre Verwendung. Jede Verwendung außerhalb kontrollierter " +
      "medizinischer/pharmazeutischer Umgebungen ist LEBENSGEFÄHRLICH.",
    anwendung:
      "REIN HISTORISCH: NICHT NACHMACHEN! TÖDLICH GIFTIG!\n\n" +
      "HISTORISCHE VERWENDUNGEN:\n\n" +
      "1. KOSMETIK (Renaissance): Frauen träufrelten verdüunnten " +
      "Tollkirschensaft in die Augen, die Pupillen weiteten sich " +
      "(Mydriasis), was den Augen einen 'leuchtenden, verführerischen' " +
      "Blick gab. Daher der Name 'Bella Donna'. Die Folge bei " +
      "Dauergebrauch: Sehschäden bis zur Erblindung.\n\n" +
      "2. FLUGSALBEN: Zentraler Bestandteil der meisten dokumentierten " +
      "Hexensalben (siehe Flugsalben-Einträge).\n\n" +
      "3. GIFT: In der Renaissance ein gängiges Mordgift, geschmacklos " +
      "in Wein aufgelöst.\n\n" +
      "4. MEDIZIN: Als Betäubungsmittel bei Operationen (gefährlich!), " +
      "als Spasmolytikum (krampflösend), als Pupillenerweiterer.\n\n" +
      "5. KRIEGSFÜHRUNG: Die Schotten sollen einmal einen Vorrat an " +
      "Tollkirschen-Wein zurückgelassen haben, den dänische Eindringlinge " +
      "tranken, die Vergifteten wurden im Schlaf überwaltigt.",
    hintergrund:
      "DIE GÖTTIN DES TODES:\n" +
      "Der Gattungsname 'Atropa' stammt von Atropos, der dritten der drei " +
      "griechischen Moiren (Schicksalsgöttinnen). Klotho spinnt den " +
      "Lebensfaden, Lachesis misst ihn ab, und Atropos, die " +
      "'Unabwendbare', schneidet ihn durch. Ein passenderer Name für " +
      "eine tödliche Pflanze ist kaum denkbar.\n\n" +
      "DIE SCHÖNE FRAU:\n" +
      "Der Artname 'belladonna' entstand in der Renaissance. " +
      "Venezianische Frauen verwendeten Tollkirschenextrakt als " +
      "Augentropfen. Große Pupillen galten als Zeichen von Erregung " +
      "und Schönheit, die 'Puppenaugen'. Dass dieser Schönheitstrick " +
      "langfristig zur Erblindung führen konnte, nahmen sie in Kauf.\n\n" +
      "DIE VENEFICAE:\n" +
      "Im antiken Rom gab es die 'Veneficae': Frauen, die sowohl " +
      "Giftmischerinnen als auch Heilerinnen waren. Die Grenze zwischen " +
      "Gift und Heilmittel war fließend. Das Wort 'Veneficium' bedeutet " +
      "sowohl 'Giftmischerei' als auch 'Zauberei', und genau diese " +
      "Verschmelzung führte später zur Hexenverfolgung: Kräuterkundige " +
      "Frauen wurden automatisch der Hexerei verdächtigt.\n\n" +
      "PARACELSUS (1493-1541):\n" +
      "'Alle Dinge sind Gift, und nichts ist ohne Gift. Allein die Dosis " +
      "macht, dass ein Ding kein Gift ist.' Dieser Satz, der " +
      "Grundstein der Toxikologie, wird durch Belladonna perfekt " +
      "illustriert: In der richtigen Dosis ist Atropin ein " +
      "LEBENSRETTENDES Medikament, in der falschen ein tödliches Gift.",
    wissenschaft:
      "ATROPIN IN DER MODERNEN MEDIZIN:\n\n" +
      "Das Alkaloid Atropin aus der Tollkirsche ist HEUTE ein " +
      "unverzichtbares Medikament:\n\n" +
      "• AUGENHEILKUNDE: Atropin-Augentropfen werden zur Pupillenerweiterung " +
      "bei Augenuntersuchungen verwendet, dasselbe Prinzip wie bei den " +
      "Renaissance-Frauen, aber in kontrollierter Dosis.\n\n" +
      "• NOTFALLMEDIZIN: Atropin ist das Gegenmittel bei Vergiftungen mit " +
      "Organophosphaten (Nervengase wie Sarin, bestimmte Insektizide). " +
      "Es rettet LEBEN.\n\n" +
      "• HERZMEDIZIN: Bei zu langsamem Herzschlag (Bradykardie) wird " +
      "Atropin intravenös gegeben.\n\n" +
      "• NARKOSE: Als Prämedikation, um Speichelfluss zu reduzieren.\n\n" +
      "• REISEKRANKHEIT: Scopolamin (ebenfalls aus Belladonna) als " +
      "transdermales Pflaster.\n\n" +
      "DIE GIFTIGE SEITE:\n" +
      "Die letale Dosis von Atropin liegt bei ca. 10mg für einen " +
      "Erwachsenen (oral). Bei Kindern kann sie DEUTLICH niedriger sein. " +
      "Vergiftungssymptome (mnemonisch: 'heiß wie ein Hase, blind wie " +
      "eine Fledermaus, trocken wie ein Knochen, rot wie eine Rübe, " +
      "verrückt wie ein Hutmacher'): Fieber, Mydriasis, Mundtrockenheit, " +
      "Hautroutung, Halluzinationen, Verwirrtheit, Krämpfe, Koma.\n\n" +
      "BELLADONNA IN DEUTSCHLAND:\n" +
      "Atropa belladonna wächst WILD in deutschen Wäldern und Gebirgen! " +
      "Die schwarzen, kirschengroßen, süßlich schmeckenden Beeren " +
      "sind besonders für KINDER gefährlich: 3-4 Beeren können ein " +
      "Kind töten. Die glockenförmigen, braun-violetten Blüten und " +
      "die glänzend schwarzen Beeren machen die Pflanze erkennbar.",
    geheimtipp:
      "Die tiefste Ironie der Tollkirsche: Dasselbe Atropin, das als " +
      "Gift tödlich wirkt, rettet als Medikament täglich Leben. Bei " +
      "einem Nervengasangriff (wie dem Sarin-Anschlag in der Tokioter " +
      "U-Bahn 1995) ist Atropin das Gegenmittel, es blockiert die " +
      "Überstimulation der Acetylcholin-Rezeptoren, die der Nervenkampfstoff " +
      "verursacht. Soldaten tragen Atropin-Autoinjektoren bei sich. " +
      "Die 'schöne Tödliche' ist gleichzeitig eine der wichtigsten " +
      "Rettungssubstanzen der Notfallmedizin. Paracelsus hatte Recht: " +
      "Es liegt an der Dosis.",
    vorsicht:
      "REIN HISTORISCH: NICHT NACHMACHEN! TÖDLICH GIFTIG!\n\n" +
      "Atropa belladonna wächst WILD in Deutschland, Österreich und der " +
      "Schweiz (Waldränder, Lichtungen, Gebirge bis 1700m). " +
      "ERKENNUNGSMERKMALE:\n" +
      "• Strauch, 50-150cm hoch\n" +
      "• Glockenförmige, braun-violette Blüten\n" +
      "• Glänzend schwarze, kirschengroße Beeren (reif ab August)\n" +
      "• Beeren schmecken süßlich: DESHALB für Kinder so gefährlich!\n\n" +
      "LETALE DOSIS:\n" +
      "• Erwachsene: 10-20 Beeren\n" +
      "• Kinder: 3-4 Beeren können TÖDLICH sein!\n\n" +
      "NIEMALS sammeln, zubereiten oder einnehmen!\n" +
      "Bei Verdacht auf Tollkirschen-Verzehr: SOFORT Notarzt (112) und " +
      "Giftinformationszentrale!\n\n" +
      "Fotografieren und stehen lassen, die Pflanze hat ihren Platz im " +
      "Ökosystem.",
    quelle:
      "Dioskurides, 'De Materia Medica', 1. Jh.; Pietro Andrea Matthioli, " +
      "'Commentarii in libros sex Pedacii Dioscoridis', 1554; Paracelsus, " +
      "'Septem Defensiones', 1538; Diverse Renaissance-Quellen",
    tags: [
      "#Belladonna", "#Tollkirsche", "#Atropin", "#Giftkunst",
      "#Nachtschatten", "#Paracelsus", "#Renaissance", "#Medizingeschichte",
      "#Veneficae", "#Doppelnatur"
    ],
    besonders_bei: [
      "Belladonna", "Tollkirsche", "Atropin", "Gift",
      "Nachtschatten", "Paracelsus", "Veneficae"
    ]
  },

  // =========================================================================
  //  VOLKSMAGIE
  // =========================================================================

  {
    id: "johanniskraut-orakel",
    name: "Johanniskraut-Orakel: Sommersonnenwende-Ritual",
    kategorie: "Volksmagie",
    schwierigkeit: "Einfach",
    beschreibung:
      "Der Johannistag (24. Juni) liegt nahe der Sommersonnenwende und ist " +
      "seit vorchristlicher Zeit einer der mächtigsten Tage im europäischen " +
      "Jahreskreis. Das Johanniskraut (Hypericum perforatum), 'die Sonne " +
      "unter den Pflanzen', steht an diesem Tag in voller Blüte. Die " +
      "Volksmagie rund um Johanniskraut und Sonnenwende ist uralt und " +
      "wunderschön, und die moderne Wissenschaft gibt ihr Recht: " +
      "Hypericin, der rote Pflanzensaft, ist ein potentes Antidepressivum.",
    zutaten: [
      {
        name: "Johanniskraut (Hypericum perforatum)",
        menge: "Frische Blüten und Kraut, idealerweise am Johannistag gepflückt",
        wirkung:
          "Hypericin, Hyperforin, Flavonoide, klinisch belegt antidepressiv, " +
          "stimmungsaufhellend, entzündungshemmend, wundheilend. Der rote Saft " +
          "(Hypericin) färbt die Finger, das 'Blut des Johannes'."
      }
    ],
    zubereitung:
      "JOHANNISTAG-ORAKEL (24. Juni):\n\n" +
      "1. Am Johannistag (24. Juni) Johanniskraut pflücken, am besten " +
      "um die Mittagszeit, wenn die Sonne am höchsten steht.\n\n" +
      "2. Die Stiele der Blüten zwischen den Fingern zerreiben. " +
      "Wenn sie sich ROT färben (vom Hypericin-Saft), bringt das " +
      "Glück für das kommende Halbjahr. Je intensiver die Färbung, " +
      "desto größer das Glück.\n\n" +
      "PROPHETISCHE TRAEUME:\n" +
      "3. Frisches Johanniskraut unter das Kopfkissen legen. Die Traeume " +
      "in der Johannisnacht (23./24. Juni) gelten als prophetisch" +
      "sie zeigen die Zukunft des kommenden Halbjahres.\n\n" +
      "SCHUTZ:\n" +
      "4. Johanniskrautkränze winden und an die Haustür oder über " +
      "Fenster hängen: Schutz gegen bösen Zauber und Blitzschlag " +
      "(Johanniskraut heißt im Volksmund auch 'Donnerkraut').\n\n" +
      "SONNWENDFEUER:\n" +
      "5. Getrocknete Johanniskrautbüschel symbolisch ins Sonnwendfeuer " +
      "werfen (oder in ein Lagerfeuer). Das Loslassen des Krauts " +
      "symbolisiert das Loslassen dessen, was nicht mehr dient.\n\n" +
      "JOHANNISKRAUT-ROTÖL:\n" +
      "6. Frische Johanniskrautblüten in ein Glas füllen, mit " +
      "hochwertigem Olivenöl übergießen. 6 Wochen in der Sonne " +
      "stehen lassen. Das Öl färbt sich tiefrot (Hypericin!). " +
      "Abseihen, fertig ist das 'Rotöl', eines der " +
      "kräftigsten Heilöle der Volksmedizin.",
    anwendung:
      "DAS ORAKEL: Am Johannistag (24. Juni) Blüten zerreiben und die " +
      "Färbung lesen.\n\n" +
      "PROPHETISCHE TRAEUME: Johanniskraut unter dem Kopfkissen in der " +
      "Johannisnacht.\n\n" +
      "SCHUTZ: Kränze an die Tür, Büschel im Haus aufhängen.\n\n" +
      "ROTÖL: Äußerlich bei Verbrennungen, Nervenschmerzen, " +
      "Muskelschmerzen, Wunden. Das Rotöl ist tatsächlich hochwirksam!\n\n" +
      "ALS TEE: 2-3g getrocknetes Kraut auf 250ml Wasser, 10 Min ziehen " +
      "lassen. Täglich 2-3 Tassen bei leichten Depressionen und " +
      "nervöser Unruhe.",
    hintergrund:
      "DER JOHANNISTAG:\n" +
      "Der 24. Juni (Geburt Johannes des Täufers) wurde von der Kirche " +
      "bewusst nahe der Sommersonnenwende platziert, um heidnische " +
      "Sonnenwendefeiern zu christianisieren. Die Brauche sind aber " +
      "ÄLTER als das Christentum: Das Sonnwendfeuer, das Kräutersammeln, " +
      "die prophetischen Traeume, all das geht auf vorchristliche, " +
      "vermutlich keltisch-germanische Traditionen zurück.\n\n" +
      "JOHANNISKRAUT IN DER VOLKSMEDIZIN:\n" +
      "In der Volksmedizin galt Johanniskraut als 'Fuga daemonum'" +
      "'Teufelsflucht'. Es vertrieb böse Geister, schützte vor Blitz " +
      "(als 'Donnerkraut') und heilte Wunden ('Wundkraut'). Die " +
      "durchscheinenden Punkte auf den Blättern (Öldrüsen, sichtbar " +
      "wenn man das Blatt gegen das Licht hält) galten als Zeichen: " +
      "Der Teufel hatte versucht, die Pflanze zu zerstören, indem er " +
      "Löcher hineinschoss, aber die Pflanze überlebte. Daher der " +
      "botanische Name 'perforatum' (durchlöchert).\n\n" +
      "Hildegard von Bingen, Paracelsus und praktisch jeder " +
      "mittelalterliche Kräuterkundige empfahl Johanniskraut.",
    wissenschaft:
      "JOHANNISKRAUT IST EINES DER BEST ERFORSCHTEN PFLANZLICHEN " +
      "ANTIDEPRESSIVA:\n\n" +
      "• Hypericin und Hyperforin sind die Hauptwirkstoffe\n" +
      "• Wirkungsmechanismus: Hemmung der Wiederaufnahme von Serotonin, " +
      "Noradrenalin und Dopamin, ähnlich wie synthetische " +
      "Antidepressiva (SSRI/SNRI)\n" +
      "• Klinische Studien (Cochrane Review, 2008): Bei leichten bis " +
      "mittelschweren Depressionen EBENSO WIRKSAM wie synthetische " +
      "Antidepressiva, bei WENIGER Nebenwirkungen\n" +
      "• WICHTIGE Wechselwirkungen: Johanniskraut beschleunigt den Abbau " +
      "vieler Medikamente (CYP3A4-Induktion): Pille, Bluverdünner, " +
      "Immunsuppressiva, HIV-Medikamente u.v.m.\n\n" +
      "DAS ROTÖL:\n" +
      "• Hypericin im Öl ist entzündungshemmend und wundheilend\n" +
      "• Nachgewiesene Wirkung bei leichten Verbrennungen und " +
      "Nervenschmerzen (Neuralgie)\n" +
      "• Der Hypericin-Gehalt ist tatsächlich am HÖCHSTEN wenn die " +
      "Pflanze um die Sommersonnenwende herum bluhet, die Volksmagie " +
      "hatte pharmakologisch Recht!\n\n" +
      "DAS ROTE ORAKEL:\n" +
      "Der rote Saft ist Hypericin, ein Naphthodianthron. Dass es " +
      "'Glück bringt' wenn die Finger sich rot färben, hat einen " +
      "realen Hintergrund: Starke Rotfärbung = hoher Hypericin-Gehalt " +
      "= besonders wirksame Pflanze für die Medizin.",
    geheimtipp:
      "Johanniskraut-Rotöl ist TATSÄCHLICH am kraftvollsten, wenn es " +
      "um die Sommersonnenwende herum angesetzt wird, dann ist der " +
      "Hypericin-Gehalt am höchsten. Die Volksmagie wusste das " +
      "seit Jahrhunderten, die Wissenschaft hat es bestätigt. " +
      "Wer im Juni Johanniskrautblüten sammelt, in Olivenöl einlegt " +
      "und 6 Wochen in die Sonne stellt, erhält ein tiefrötes, " +
      "hochwirksames Heilöl, eines der besten Hausmittel, die es gibt. " +
      "Für Verbrennungen, Nervenschmerzen, Muskelverspannungen und " +
      "Narbenpflege.",
    vorsicht:
      "Johanniskraut als Tee oder Kraut: Grundsätzlich sicher, ABER:\n\n" +
      "• PHOTOSENSIBILISIERUNG: Johanniskraut macht die Haut empfindlicher " +
      "für UV-Licht! Bei innerlicher Einnahme: Keine langen Sonnenbader, " +
      "Sonnenschutz verwenden.\n\n" +
      "• WECHSELWIRKUNGEN: Johanniskraut beschleunigt den Abbau vieler " +
      "Medikamente durch CYP3A4-Induktion. NICHT kombinieren mit:\n" +
      "  - Antibabypille (Wirkungsverlust!)\n" +
      "  - Blutverdünnern (Warfarin)\n" +
      "  - Immunsuppressiva (Cyclosporin)\n" +
      "  - HIV-Medikamenten\n" +
      "  - Anderen Antidepressiva (Serotonin-Syndrom!)\n\n" +
      "• Bei SCHWEREN Depressionen: Johanniskraut ersetzt KEINE " +
      "ärztliche Behandlung!\n\n" +
      "Das Rotöl (aeusserlich): Unbedenklich. Nach dem Auftragen " +
      "direkte Sonne meiden (Photosensibilisierung).",
    quelle:
      "Deutsche Volkstradition, Johannistag (24. Juni); Hildegard von Bingen, " +
      "'Physica'; Cochrane Review 'St John's Wort for Major Depression', " +
      "2008; Kommission E Monographie 'Hyperici herba'",
    tags: [
      "#Johanniskraut", "#Sonnenwende", "#Johannistag", "#Volksmagie",
      "#Rotöl", "#Hypericin", "#Antidepressivum", "#Orakel",
      "#Sommersonnenwende", "#TatsächlichMachbar"
    ],
    besonders_bei: [
      "Johanniskraut", "Sonnenwende", "Johannistag",
      "Rotöl", "Orakel", "Antidepressivum"
    ]
  },

  {
    id: "rauhnacht-kalender",
    name: "Rauhnacht-Räucherkalender: Die 12 heiligen Nächte",
    kategorie: "Volksmagie",
    schwierigkeit: "Mittel",
    beschreibung:
      "Die Rauhnächte, die zwölf Nächte zwischen Weihnachten (25. Dez.) " +
      "und Dreikönig/Epiphanie (6. Jan.), sind die älteste und tiefste " +
      "magische Tradition des deutschsprachigen Raums. Vorchristlich, " +
      "germanisch-alpenländisch, verwurzelt in einer Zeit, in der die " +
      "Dunkelheit am längsten war und die Grenze zwischen den Welten als " +
      "besonders dünn galt. Jede Nacht steht für einen Monat des " +
      "kommenden Jahres, und jede Nacht hat ihre eigene Räucherung, " +
      "ihre eigene Kraft, ihre eigene Botschaft.",
    zutaten: [
      {
        name: "Nacht 1 (25./26. Dez.) = Januar: Weihrauch (Olibanum)",
        menge: "1-2 Stücke Weihrauchharz auf Kohle",
        wirkung:
          "NEUANFANG. Boswelliasäure, entzündungshemmend, stimmungshebend. " +
          "Der Klassiker der sakralen Räucherung. Reinigt den Raum und " +
          "öffnet für das Neue."
      },
      {
        name: "Nacht 2 (26./27. Dez.) = Februar: Myrrhe (Commiphora myrrha)",
        menge: "1-2 Stücke Myrrheharz auf Kohle",
        wirkung:
          "REINIGUNG. Sesquiterpene, antiseptisch, beruhigend, erdend. " +
          "Myrrhe reinigt das Alte und bereitet den Boden für Verwandlung."
      },
      {
        name: "Nacht 3 (27./28. Dez.) = März: Salbei (Salvia officinalis)",
        menge: "Eine Handvoll getrockneter Salbei",
        wirkung:
          "SCHUTZ. Thujon, Campher, stark reinigend, klärend, schützend. " +
          "'Salvia' = retten. Vertreibt negative Energie."
      },
      {
        name: "Nacht 4 (28./29. Dez.) = April: Beifuß (Artemisia vulgaris)",
        menge: "Eine Handvoll getrockneter Beifuß",
        wirkung:
          "FRUCHTBARKEIT und VISION. Thujon, Cineol, leicht psychoaktiv, " +
          "traumverstärkend. Das Kraut der Artemis/Diana. Für Traeume " +
          "und fruchtbare Pläne."
      },
      {
        name: "Nacht 5 (29./30. Dez.) = Mai: Rosenblüten (Rosa damascena)",
        menge: "Eine Handvoll getrocknete Rosenblätter",
        wirkung:
          "LIEBE. Geraniol, Citronellol, anxiolytisch, herzoffnend, " +
          "stimmungsaufhellend. Der Duft der Rose öffnet das Herz."
      },
      {
        name: "Nacht 6 (30./31. Dez.) = Juni: Johanniskraut (Hypericum perforatum)",
        menge: "Eine Handvoll getrocknetes Kraut",
        wirkung:
          "SONNENKRAFT. Hypericin, antidepressiv, lichtbringend. " +
          "Bringt die Kraft der Sommersonne in die dunkelste Zeit."
      },
      {
        name: "Nacht 7 (31. Dez./1. Jan.) = Juli: Lavendel (Lavandula angustifolia)",
        menge: "Eine Handvoll getrocknete Lavendelblüten",
        wirkung:
          "HARMONIE. Linalool, Linalylacetat, stark beruhigend, " +
          "angstlösend, harmonisierend. Die Silvesternacht: Ruhe " +
          "und Klarheit inmitten des Larms."
      },
      {
        name: "Nacht 8 (1./2. Jan.) = August: Kamille (Matricaria chamomilla)",
        menge: "Eine Handvoll getrocknete Kamillenblüten",
        wirkung:
          "ERNTE und FÜLLE. Bisabolol, Chamazulen, beruhigend, " +
          "entzündungshemmend, nährend. Dankbarkeit für das, " +
          "was reifen wird."
      },
      {
        name: "Nacht 9 (2./3. Jan.) = September: Wacholder (Juniperus communis)",
        menge: "Einige Wacholderbeeren und Zweigspitzen",
        wirkung:
          "WANDLUNG. Alpha-Pinen, Sabinen, stark reinigend, klärend. " +
          "Die stärkste Schutzräucherung der alpenländischen Tradition. " +
          "Wacholder vertreibt ALLES Negative."
      },
      {
        name: "Nacht 10 (3./4. Jan.) = Oktober: Holunder (Sambucus nigra)",
        menge: "Getrocknete Holunderblüten oder Rinde",
        wirkung:
          "AHNEN. Der Baum der Göttin Holle/Holda. Die Nacht der Ahnen" +
          "sich mit den Vorfahren verbinden, um ihren Segen bitten."
      },
      {
        name: "Nacht 11 (4./5. Jan.) = November: Engelwurz (Angelica archangelica)",
        menge: "Getrocknete Wurzel, klein geschnitten",
        wirkung:
          "LICHT IN DER DUNKELHEIT. Angelicin, Imperatorin, wärmend, " +
          "stärkend, ermutigend. Der 'Engel unter den Pflanzen', bringt " +
          "Licht und Stärke in die dunkelsten Zeiten."
      },
      {
        name: "Nacht 12 (5./6. Jan.) = Dezember: ALLE ZUSAMMEN",
        menge: "Eine Mischung aus allen 11 vorangegangenen Räucherstoffen",
        wirkung:
          "VOLLENDUNG. Die Perchta-Nacht / Epiphanie / Dreikönig. " +
          "Alle Kräfte vereinen sich. Der Kreis schließt sich. " +
          "Die Wilde Jagd kommt zur Ruhe."
      }
    ],
    zubereitung:
      "JEDEN ABEND DER 12 RAUHNÄCHTE:\n\n" +
      "1. Nach Einbruch der Dunkelheit: Räucherkohle auf einem feuerfesten " +
      "Gefäß (Räucherschale, Pfanne mit Sand) entzünden.\n\n" +
      "2. Das Räucherwerk der jeweiligen Nacht auf die glühende Kohle legen.\n\n" +
      "3. Mit der rauchenden Schale durch ALLE Raeume des Hauses gehen" +
      "auch Keller, Dachboden, Ecken und Schränke. Fenster dabei einen " +
      "Spalt öffnen, damit das 'Alte' hinaus kann.\n\n" +
      "4. In jedem Raum die Intention für den entsprechenden Monat " +
      "aussprechen oder still halten.\n\n" +
      "5. Danach: Fenster schließen. Sich hinsetzen. Den Rauch beobachten.\n\n" +
      "6. Die TRAEUME der Nacht aufschreiben, sie gelten als prophetisch " +
      "für den entsprechenden Monat.\n\n" +
      "7. Am nächsten Morgen das Traumbuch lesen und reflektieren.",
    anwendung:
      "Jeden Abend zwischen dem 25. Dezember und dem 6. Januar räuchern. " +
      "Die Traeume jeder Nacht aufschreiben. Am Ende der zwölf Nächte " +
      "hat man ein 'Traum-Orakel' für das gesamte kommende Jahr.\n\n" +
      "ZUSÄTZLICHE RAUHNÄCHTE-REGELN (alpenländische Tradition):\n" +
      "• Keine Wäsche waschen (die Wilde Jagd verfängt sich in der " +
      "aufgehängten Wäsche!)\n" +
      "• Keine großen Entscheidungen treffen, es ist die Zeit der " +
      "STILLE und EINKEHR\n" +
      "• Keine Räder drehen (Spinnräder, Mühlen, die Schicksals" +
      "göttinnen spinnen in diesen Nächten)\n" +
      "• Haus und Hof ordnen, aufräuemen\n" +
      "• Schulden begleichen\n" +
      "• Streit beilegen\n" +
      "• Tiere besonders gut behandeln (sie können in der Heiligen Nacht " +
      "sprechen!)",
    hintergrund:
      "DIE RAUHNÄCHTE: HERKUNFT:\n\n" +
      "Das Wort 'Rauhnächte' hat mehrere mögliche Etymologien:\n" +
      "• 'Rauh' = rauh/wild (die Wilde Jagd tobt durch die Lüfte)\n" +
      "• 'Rauch' = Räucherung (die Nächte des Räucherns)\n" +
      "• 'Ruch' = behaart/pelzig (Perchta/Frau Holle erscheint in " +
      "Fellkleidung)\n\n" +
      "Der Ursprung ist vorchristlich und vermutlich germanisch-keltisch. " +
      "Die zwölf Nächte ergeben sich aus der Differenz zwischen " +
      "Mond- und Sonnenjahr: Das Mondjahr hat 354 Tage, das Sonnenjahr " +
      "365, die 11 (bzw. 12 mit Silvester) fehlenden Tage sind die " +
      "Rauhnächte, eine 'Zeit außerhalb der Zeit'.\n\n" +
      "DIE WILDE JAGD:\n" +
      "In den Rauhnächten zieht die 'Wilde Jagd' durch die Lüfte" +
      "ein Heer aus Toten, Geistern und wilden Jägern, angeführt von " +
      "Wotan/Odin oder Frau Perchta/Holle. Wer draußen ist, kann von " +
      "der Wilden Jagd mitgerissen werden. Deshalb: Drinnen bleiben, " +
      "räuchern, stille Einkehr halten.\n\n" +
      "PERCHTA/FRAU HOLLE:\n" +
      "Die 12. Rauhnacht (5./6. Januar, Perchta-Nacht/Epiphanie) ist " +
      "Frau Perchtas Nacht. Perchta ('die Glänzende') ist die " +
      "vorchristliche Wintergöttin des Alpenraums. Sie prüft, ob " +
      "die Haeuser ordentlich und die Rauhnächte-Regeln eingehalten " +
      "wurden. Gute Hausfrauen belohnt sie, nachlassige bestraft sie. " +
      "Im Märchen wurde sie zu 'Frau Holle'.",
    wissenschaft:
      "AROMATHERAPIE UND NEUROCHEMIE:\n\n" +
      "Jede der zwölf Räucherungen hat eine nachweisbare " +
      "pharmakologische Wirkung:\n\n" +
      "• Weihrauch: Incensol-Acetat aktiviert TRPV3-Rezeptoren" +
      "angstlösend und antidepressiv (Moussaieff et al., 2008)\n" +
      "• Myrrhe: Sesquiterpene wirken auf Opioid-Rezeptoren" +
      "leicht schmerzlindernd und beruhigend\n" +
      "• Salbei: Thujon in geringer Dosis (Räucherung), klärend, " +
      "konzentrationsfördernd\n" +
      "• Beifuß: Leicht psychoaktiv, fördert luzide Traeume " +
      "(traditionelle Verwendung als 'Traumpflanze')\n" +
      "• Rose: Geraniol, anxiolytisch, herzfrequenzsenkend\n" +
      "• Johanniskraut: Hypericin, stimmungsaufhellend\n" +
      "• Lavendel: Linalool, eines der am besten erforschten " +
      "natürlichen Anxiolytika\n" +
      "• Kamille: Bisabolol, beruhigend, Schlaf fördernd\n" +
      "• Wacholder: Alpha-Pinen, erfrischend, reinigend\n" +
      "• Holunder: Triterpene, immunstimulierend\n" +
      "• Engelwurz: Angelicin, wärmend, stärkend, " +
      "verdauungsfördernd\n\n" +
      "DIE PROPHETISCHEN TRAEUME:\n" +
      "Mehrere der Räucherstoffe (besonders Beifuß, Salbei, Lavendel) " +
      "sind dafür bekannt, die Traumintensität und -erinnerung zu " +
      "fördern. Die Tradition der prophetischen Rauhnächte-Traeume " +
      "hat also eine biochemische Basis: Die Räucherungen VOR dem " +
      "Schlafengehen erzeugen genau die neurochemische Umgebung, " +
      "die zu intensiven, erinnerbaren Traeumen führt.",
    geheimtipp:
      "Zwischen den Jahren soll keine Wäsche gewaschen werden, die " +
      "Wilde Jagd verfängt sich darin! Diese Regel klingt wie " +
      "Aberglaube, aber sie hat eine tiefe Weisheit: Die Rauhnächte " +
      "sind eine Einladung zur STILLE und EINKEHR. In einer Welt, die " +
      "niemals anhalt, sind die zwölf heiligen Nächte eine Erlaubnis, " +
      "NICHTS zu tun. Keine Arbeit, keine Entscheidungen, kein Antrieb" +
      "nur räuchern, traeumen, zuhören. Wer sich das erlaubt, beginnt " +
      "das neue Jahr nicht erschöpft vom Feiern, sondern gennährt " +
      "von der Stille. DAS ist die eigentliche Magie der Rauhnächte.",
    vorsicht:
      "Alle Räucherstoffe sind pflanzlich und ungefährlich. " +
      "Beim Räuchern: Gute Belüftung (Fenster kippen), Räucherkohle " +
      "nur auf feuerfester Unterlage verwenden, nie unbeaufsichtigt " +
      "lassen. Nicht in Raeumen mit Säuglingen oder Kleinkindern " +
      "räuchern (empfindliche Atemwege). Asthmatiker sollten " +
      "vorsichtig sein oder auf öl-basierte Raumbeduftung ausweichen.",
    quelle:
      "Alpenländische und germanische Tradition, vorchristlich; Karl " +
      "Meuli, 'Bettelumzüge im Totenkultus, Opferritual und Volksbrauch', " +
      "1928; Erika Brunner-Traut, diverse; Alexander Carmichael, 'Carmina " +
      "Gadelica' (schottische Parallelen); Moussaieff et al., " +
      "'Incensole Acetate: An Incense Component', FASEB Journal, 2008",
    tags: [
      "#Rauhnächte", "#Räucherung", "#WildeJagd", "#Perchta",
      "#FrauHolle", "#Jahreskreis", "#Winterbrauch", "#Volksmagie",
      "#Traeume", "#TatsächlichMachbar", "#ZwölfNächte"
    ],
    besonders_bei: [
      "Rauhnächte", "Rauhnacht", "Räucherung", "Wilde Jagd",
      "Perchta", "Frau Holle", "Winterbrauch", "Jahreskreis"
    ]
  }

];
