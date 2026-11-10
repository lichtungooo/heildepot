# Heilwissen des Heildepots

Dieses Verzeichnis entsteht aus den Daten unter `app/src/data` mit `node app/scripts/wissen.mjs`. Bitte nicht von Hand ändern: Die Prüfung `node app/scripts/wissen.mjs --pruefen` meldet jede Abweichung.

Es dient als Quelle `heildepot` im Wissensindex des Real Life Network (Forge, DEFINITION Teil 119). Je Kraut, Beschwerde, Rezept und Thema ein Dokument, mit Kopfzeile, Abschnitten und Verweisen.

- Kräuter: 456
- Beschwerden: 758
- Rezepte: 127
- Themen (Fasten, Ernährung, Hexenwissen, Sucht, Produkte, Wissen): 132

Jedes Dokument trägt in der Kopfzeile die Kategorie der Heildepot-Seite (`kategorie`, `kategorie_bild`), wo bekannt eine Gruppe (`gruppe`), ein Kraut dazu `wirkung` und sein erstes Foto (`bild`, `bild_nachweis`). Die Fotos stammen von Wikimedia Commons, jedes mit Autor, Lizenz und Quelle im Abschnitt „Fotos“.

Die Texte gehören René und dem Heildepot. Eine Lizenz zum Weitergeben wählt René; bis dahin bleiben alle Rechte beim Heildepot.

Das ersetzt keinen Rat von Ärztin, Arzt oder Heilpraktiker.
