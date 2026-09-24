# Plan – Einheit 14: Rechter Winkel über Pythagoras (K14)

Vierzehnte Einheit der Reihe. Plan zur Abnahme, danach wird gebaut (Stunde + Arbeitsblatt) wie bei
Einheit 1 bis 13. Grundlagen: [Roadmap.md](Roadmap.md),
[plan-vektorrechnung.md](plan-vektorrechnung.md), Vorgänger
[plan-modul-13-parallelogramm-trapez.md](plan-modul-13-parallelogramm-trapez.md), inhaltlich vor allem
[plan-modul-10-betrag.md](plan-modul-10-betrag.md) und [plan-modul-11-laengen.md](plan-modul-11-laengen.md).

Erste Einheit im Block „Rechte Winkel", dem dritten Nachweis-Werkzeug. Noch ohne neues Werkzeug:
Der rechte Winkel wird mit der Umkehrung des Satzes des Pythagoras nachgewiesen, also nur mit
Längen. Das funktioniert, ist aber umständlich. Genau das motiviert Einheit 15 (Skalarprodukt).

## Lernziel (ein testbares „Ich kann …")

Ich kann mit der **Umkehrung des Satzes des Pythagoras** und den drei Seitenlängen nachweisen, ob
ein Dreieck im Raum **rechtwinklig** ist, und angeben, **an welcher Ecke** der rechte Winkel liegt.

Kernidee: **Die längste Seite ist die Kandidatin für die Hypotenuse.** Man berechnet die Quadrate
der drei Seitenlängen (keine Wurzel nötig, wie in Einheit 11). Ist das größte Quadrat die Summe der
beiden anderen, liegt der rechte Winkel an der Ecke gegenüber der längsten Seite. Sonst ist das
Dreieck nicht rechtwinklig.

## Vorwissen (wird wiederholt, nicht neu)

- Aus der Sekundarstufe I: Satz des Pythagoras und seine **Umkehrung** in der Ebene (Modul 0);
  Hypotenuse liegt dem rechten Winkel gegenüber.
- Aus Einheit 10 und 11: Betrag, Abstand, Längen exakt über die Quadrate vergleichen.
- Aus Einheit 13: Parallelogramm nachweisen ($\vec{AB} = \vec{DC}$).

## Aufbau (sechs Schritte)

1. **Das brauchst du** – nur Wiederholung: Pythagoras und Umkehrung in der Ebene (3, 4, 5 ist
   rechtwinklig; 4, 5, 6 nicht); $\lvert\vec{AB}\rvert^2$ ohne Wurzel berechnen. Bild umschaltbar.
2. **Ein Beispiel** – **Sind die Balken rechtwinklig verbunden?** Ein Zimmermann verbindet zwei
   Dachbalken im Punkt $A$. Einen Winkelmesser hat er nicht, nur ein Maßband (wie der Schreiner in
   Einheit 11). Er misst $AB$, $AC$ und die Strecke $BC$ zwischen den Balkenenden. Ein Regler neigt
   den zweiten Balken. Angezeigt werden die drei Quadrate und der Vergleich
   $\lvert\vec{AB}\rvert^2 + \lvert\vec{AC}\rvert^2$ mit $\lvert\vec{BC}\rvert^2$. Entdeckung: Gleichheit
   genau beim rechten Winkel (Winkelzeichen erscheint); ist der Winkel spitz, ist die Summe größer,
   ist er stumpf, kleiner. 3D und Schrägbild umschaltbar; im Schrägbild sieht der rechte Winkel
   nicht rechtwinklig aus.
3. **Das Konzept** – Vorgehen und vier Voreinstellungen, der Regler bewegt $C$:
   - **Rechtwinklig bei A:** $\lvert\vec{AB}\rvert^2 + \lvert\vec{AC}\rvert^2 = \lvert\vec{BC}\rvert^2$.
   - **Nicht rechtwinklig:** das größte Quadrat ist nicht die Summe der anderen.
   - **Wo liegt der Winkel?** rechtwinklig bei $C$; wer stur „bei $A$" prüft, findet keinen.
   - **Rechteck:** ein Parallelogramm $ABCD$ mit rechtem Winkel bei $A$ (Dreieck $ABD$).

   Merkkästen: *Umkehrung des Pythagoras im Raum*; *So gehst du vor* (drei Quadrate, das größte
   mit der Summe der anderen vergleichen, Ecke gegenüber angeben); *Rechteck* (Parallelogramm mit
   einem rechten Winkel, zweiter Weg neben den Diagonalen aus Einheit 11).
4. **Üben** – das Arbeitsblatt, Bild aus der Sonnensegel-Aufgabe zur Kontrolle, umschaltbar.
5. **Einordnung** – Vorher: Längen (Einheit 10, 11). Jetzt: rechter Winkel über Pythagoras. Danach:
   Einheit 15 findet eine Abkürzung. Zählbilanz am Beispiel: drei Verbindungsvektoren, neun Quadrate,
   drei Summen, ein Vergleich, nur um einen Winkel zu prüfen. Satz zum Reihenziel: Damit sind alle
   drei Werkzeuge vorhanden, das dritte wird in Einheit 15 bequem.
6. **Seid ihr fit?** – Quadrate 9, 16, 25: rechtwinklig, wo? Quadrate 10, 20, 26: nicht. Quadrate
   5, 20, 25 mit Zuordnung zu den Seiten: an welcher Ecke? Letzte Frage zur Fehlvorstellung: Jemand
   prüft nur $\lvert\vec{AB}\rvert^2 + \lvert\vec{BC}\rvert^2 = \lvert\vec{AC}\rvert^2$, findet keine
   Gleichheit und schreibt „nicht rechtwinklig". (Die längste Seite war nicht $AC$.)

## Arbeitsblatt (Entwurf, NRW-Operatoren, Lösungen auf einer eigenen letzten Seite)

1. **Rechtwinklig?** Drei Dreiecke: rechtwinklig bei $A$, rechtwinklig an einer anderen Ecke,
   nicht rechtwinklig. *Untersuche, ob das Dreieck $ABC$ rechtwinklig ist, und gib gegebenenfalls die
   Ecke mit dem rechten Winkel an.* Stufe (a)/(b).
2. **Gerundet gerechnet.** Tom rundet die Seitenlängen auf eine Nachkommastelle und findet
   $4{,}5^2 + 5{,}5^2 \approx 7{,}1^2$: „rechtwinklig". Exakt sind die Quadrate 20, 30 und 51.
   *Beurteile Toms Schluss.* Stufe (c).
3. **Rechteck nachweisen.** Vier Punkte. a) *Weise nach, dass $ABCD$ ein Parallelogramm ist.*
   b) *Weise mit dem Satz des Pythagoras nach, dass $ABCD$ ein Rechteck ist.* c) *Bestätige das
   Ergebnis mit den Diagonalen.* Stufe (b)/(c).
4. **Sonnensegel.** Ein dreieckiges Sonnensegel an zwei Haken der Hauswand und einem Mast.
   *Untersuche, ob das Segel einen rechten Winkel hat.* Mit Schrägbild. Stufe (b).
5. **Dreieck ergänzen.** $A$ und $B$ gegeben, $C$ auf einer Koordinatenachse. *Bestimme $C$ so, dass
   das Dreieck bei $A$ rechtwinklig ist.* Stufe (b).
6. **Sprinter: Die Quadrate verschwinden.** $A$, $B$ fest, $C(t \mid \dots \mid \dots)$. *Bestimme
   $t$ so, dass das Dreieck bei $A$ rechtwinklig ist. Beschreibe, was beim Umformen mit den
   Quadraten von $t$ passiert.* (Die $t^2$ heben sich weg, übrig bleibt eine lineare Gleichung:
   Vorschau auf Einheit 15, ohne das Skalarprodukt zu nennen.)

## Festgelegte Regeln, die hier gelten

- „Das brauchst du" nur Wiederholung; die Umkehrung ist aus der Sekundarstufe I bekannt, neu ist
  nur die Anwendung im Raum mit Koordinaten.
- 3D überall umschaltbar, auch in „Das brauchst du" und „Üben"; Zeichenreihenfolge Punkt, Pfeil,
  Beschriftung; keine Bedien-Hinweise.
- Vektoren mit Pfeil, Punkte ohne; Betrag als $\lvert\vec{AB}\rvert$ mit Pfeil nur über dem Vektor.
- Beispiel auf dem Blatt und Startwerte der Stunde nie mit den Zahlen einer Aufgabe.
- Blatt schwarz-weiß, NRW-Operatoren, jede Teilaufgabe der Lösungen auf eigener Zeile, Lösungen auf
  einer Seite, kein Umbruch in Aufgaben.
- Vor dem Bauen alle Bildpunkte und Richtungen nachrechnen (keine Achse, keine Richtung wie die
  $x_1$-Achse, keine Kante durch eine Skalenbeschriftung); Figuren ohne Koordinatenbezug ohne Achsen.
- Das Wort „Skalarprodukt" fällt noch nicht.

## Neue technische Bausteine

- Stunde: Winkelzeichen im Schrägbild (vorhandener Helfer `rechterWinkel` aus Einheit 10/11), nur
  wenn die Rechnung den rechten Winkel bestätigt; Anzeige „spitz / recht / stumpf" über den
  Vergleich der Quadrate.
- Balken im Beispiel als dicke Stäbe (Helfer `stab3d` aus Einheit 11).

## Entscheidungen (23.09.2026)

Alle vier Vorschläge angenommen: Zimmermann-Beispiel mit Balken-Regler, spitz / stumpf nur als
Anzeige, Rechteck über einen rechten Winkel, Sprinter mit den verschwindenden Quadraten.

## Ursprünglich offene Entscheidungen

1. **Beispiel „Sind die Balken rechtwinklig verbunden?"** (Zimmermann mit Maßband, Regler für die
   Neigung des zweiten Balkens) – Vorschlag: ja; knüpft an den Schreiner aus Einheit 11 an. Alternative:
   das Sonnensegel gleich als Beispiel (dann fehlt der Regler-Effekt spitz / recht / stumpf).
2. **Spitz und stumpf mit anzeigen** (Summe größer oder kleiner als das größte Quadrat) – Vorschlag:
   ja, nur als Anzeige im Beispiel, nicht als Lernziel.
3. **Rechteck über einen rechten Winkel** als zweiter Weg neben den Diagonalen – Vorschlag: ja.
4. **Sprinter mit den verschwindenden Quadraten** als Vorschau auf Einheit 15, ohne das Wort
   Skalarprodukt – Vorschlag: ja.
