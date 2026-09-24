# Plan – Einheit 10: Betrag und Abstand (K10)

Zehnte Einheit der Reihe. Plan zur Abnahme, danach wird gebaut (Stunde + Arbeitsblatt) wie bei
Einheit 1 bis 9. Grundlagen: [Roadmap.md](Roadmap.md),
[plan-vektorrechnung.md](plan-vektorrechnung.md), Vorgänger
[plan-modul-09-geschwindigkeit.md](plan-modul-09-geschwindigkeit.md).

Mit dieser Einheit beginnt der Block „Längen", das erste der drei Werkzeuge für den
Figuren-Nachweis (Länge, Parallelität, rechter Winkel).

## Lernziel (ein testbares „Ich kann …")

Ich kann die **Länge (den Betrag)** eines Vektors mit dem Satz des Pythagoras im Raum berechnen,
$\lvert\vec v\rvert = \sqrt{v_1^2 + v_2^2 + v_3^2}$, damit den **Abstand zweier Punkte**
bestimmen ($\lvert\vec{AB}\rvert$) und das Ergebnis exakt (Wurzel) oder gerundet angeben.

Kernidee: **Pythagoras zweimal.** Erst in der Bodenebene: Die Diagonale unter dem Pfeil hat die
Länge $\sqrt{v_1^2 + v_2^2}$. Sie steht senkrecht auf der Höhe $v_3$, also noch einmal Pythagoras:
$\lvert\vec v\rvert^2 = (v_1^2 + v_2^2) + v_3^2$. Negative Komponenten stören nicht, weil sie
quadriert werden.

## Vorwissen (wird wiederholt, nicht neu)

- Aus der Sekundarstufe I: Satz des Pythagoras, $c^2 = a^2 + b^2$; Wurzeln exakt stehen lassen
  oder runden.
- Aus Einheit 5: Verbindungsvektor $\vec{AB}$ (Spitze minus Fuß).
- Aus Einheit 3: Quader mit Länge, Breite, Höhe.

## Aufbau (sechs Schritte)

1. **Das brauchst du** – nur Wiederholung: Pythagoras im rechtwinkligen Dreieck (3, 4, 5); die
   Diagonale eines Rechtecks exakt als Wurzel ($\sqrt{13}$); Verbindungsvektor. Bild umschaltbar.
2. **Ein Beispiel** – **Passt der Stab in den Karton?** Ein Karton (Quader) mit Länge, Breite,
   Höhe per Regler, dazu ein Stab fester Länge. Die längste Strecke im Karton ist die
   Raumdiagonale. Mit dem alten Wissen kennt man Pythagoras nur in der Ebene. Entdeckung:
   erst die Bodendiagonale (rechtwinkliges Dreieck am Boden), dann mit der Höhe ein zweites
   rechtwinkliges Dreieck, das senkrecht steht. Beide Dreiecke werden im Bild hervorgehoben.
   3D und Schrägbild umschaltbar. Der Begriff „Betrag" fällt noch nicht.
3. **Das Konzept** – Name, Schreibweise, Formel, drei Voreinstellungen mit je eigenem Bild:
   - **Betrag eines Vektors:** $\lvert\vec v\rvert = \sqrt{v_1^2 + v_2^2 + v_3^2}$, der Pfeil
     mit seinen beiden rechtwinkligen Dreiecken.
   - **Abstand zweier Punkte:** $d(A, B) = \lvert\vec{AB}\rvert$, erst Spitze minus Fuß, dann Betrag.
   - **Negative Komponenten:** zum Beispiel $\lvert(−2; 3; −6)\rvert = 7$; beim Quadrieren fällt
     das Vorzeichen weg, Länge ist nie negativ.
   Merkkästen: *Betrag*; *Abstand*; *exakt oder gerundet* ($\sqrt{29}$ stehen lassen oder
   $\approx 5{,}39$ angeben).
4. **Üben** – das Arbeitsblatt, Bild aus Aufgabe 3 (Klassenraum) zur Kontrolle, umschaltbar.
5. **Einordnung** – Vorher: Verbindungsvektor und Pythagoras. Jetzt: Länge und Abstand. Danach:
   Einheit 11 argumentiert mit Längen (gleichschenklig, Raute, Quadrat oder nur Rechteck). Rückblick
   auf Einheit 9: Das Tempo der Drohne ist $\lvert\vec v\rvert$. Satz zum Reihenziel: Die Länge ist
   das erste der drei Nachweis-Werkzeuge.
6. **Seid ihr fit?** – Betrag von $(2; 3; 6)$; Abstand zweier Punkte; exakte Angabe. Letzte Frage
   zur typischen Fehlvorstellung: „$\lvert\vec v\rvert = v_1 + v_2 + v_3$." (Falsch, man quadriert,
   addiert und zieht die Wurzel.)

## Arbeitsblatt (Entwurf, NRW-Operatoren, Lösungen auf einer eigenen letzten Seite)

1. **Betrag.** Mehrere Vektoren, auch mit negativen Komponenten; die meisten mit glatter Wurzel
   (etwa $(2; 3; 6) \to 7$), einer mit krummer (Wurzel stehen lassen und runden).
   *Berechne den Betrag.* Stufe (a).
2. **Abstand.** Drei Punktpaare. *Berechne den Abstand.* Stufe (a).
3. **Klassenraum.** Der Klassenraum aus Einheit 1 ($8 \times 6 \times 3$ m), Schrägbild mit
   Raumdiagonale. a) *Berechne die Länge der Bodendiagonalen.* b) *Berechne die längste gerade
   Strecke im Raum.* Stufe (b).
4. **Tempo der Drohne.** $\vec v$ in m/s aus Einheit 9 (neu gewählt). a) *Berechne, wie schnell die
   Drohne insgesamt fliegt.* b) *Bestimme, wie weit sie in 10 s kommt.* Stufe (b).
5. **Dreieck.** Drei Punkte. a) *Berechne die drei Seitenlängen.* b) *Gib die längste Seite an und
   berechne den Umfang.* Stufe (b); bereitet Einheit 11 vor, noch ohne Begründung.
6. **Fehlende Komponente.** *Bestimme $t$ so, dass $\vec v = (2; t; 6)$ den Betrag 7 hat.*
   (Zwei Lösungen, $t = \pm 3$.) Stufe (b).
7. **Sprinter.** Zwei Punkte $A$ und $B$. *Bestimme den Punkt auf der $x_2$-Achse, der von $A$ und
   $B$ gleich weit entfernt ist.* (Ansatz $P(0 \mid p \mid 0)$, Gleichung aufstellen, die Quadrate
   heben sich weg.)

## Festgelegte Regeln, die hier gelten

- „Das brauchst du" nur Wiederholung; kein Begriff vor seinem Beispiel („Betrag" erst im Konzept).
- 3D überall umschaltbar, auch in „Das brauchst du" und „Üben"; Zeichenreihenfolge Punkt, Pfeil,
  Beschriftung; keine Bedien-Hinweise.
- Vektoren mit Pfeil, Punkte ohne; Betrag als $\lvert\vec v\rvert$ mit Pfeil nur über dem Vektor.
- Beispiel auf dem Blatt und Startwerte der Stunde nie mit den Zahlen einer Aufgabe.
- Blatt schwarz-weiß, NRW-Operatoren, jede Teilaufgabe der Lösungen auf eigener Zeile, Lösungen auf
  einer Seite, kein Umbruch in Aufgaben.
- Vor dem Bauen alle Bildpunkte und Vektorrichtungen nachrechnen (keine Achse, keine
  Richtung wie die $x_1$-Achse).

## Neue technische Bausteine

- Stunde: die zwei rechtwinkligen Dreiecke als halbtransparente Flächen (Boden-Dreieck und
  senkrechtes Dreieck) mit Winkelzeichen; der vorhandene Helfer `flaeche` im Schrägbild und
  `rechteck3d`-ähnliche Dreiecke in 3D. Betrag in HTML als |${av}| mit senkrechten Strichen.
- Blatt: vorhandene Makros; Raumdiagonale und Bodendiagonale gestrichelt.

## Entscheidungen (23.09.2026)

Alle vier Vorschläge angenommen: Stab im Karton als Beispiel, Wurzeln nur stehen lassen oder runden,
keine Argumentationsaufgabe (Einheit 11), Sprinter mit dem gleich weit entfernten Punkt.

## Ursprünglich offene Entscheidungen

1. **Beispiel „Passt der Stab in den Karton?"** – Vorschlag: ja, weil die Frage ohne neue Formel
   nicht zu beantworten ist und die zwei Dreiecke im Karton gut sichtbar sind.
2. **Wurzeln nicht teilweise ziehen** ($\sqrt{12}$ bleibt $\sqrt{12}$, nicht $2\sqrt3$). Vorschlag:
   ja, nur stehen lassen oder runden; das teilweise Wurzelziehen ist kein Ziel der Reihe.
3. **Noch keine Argumentationsaufgabe.** Ab Modul 10 wären Stufe-c-Aufgaben erlaubt, aber
   Einheit 11 ist genau dafür da. Vorschlag: hier nur rechnen, Aufgabe 5 bereitet vor.
4. **Sprinter:** Punkt auf der $x_2$-Achse mit gleichem Abstand zu $A$ und $B$ (Vorschlag) oder
   ein Punkt mit vorgegebenem Abstand zu $A$.
