# Plan – Einheit 13: Parallelogramm und Trapez nachweisen (K13)

Dreizehnte Einheit der Reihe. Plan zur Abnahme, danach wird gebaut (Stunde + Arbeitsblatt) wie bei
Einheit 1 bis 12. Grundlagen: [Roadmap.md](Roadmap.md),
[plan-vektorrechnung.md](plan-vektorrechnung.md), Vorgänger
[plan-modul-12-kollinear.md](plan-modul-12-kollinear.md), außerdem
[plan-modul-08-vektorketten.md](plan-modul-08-vektorketten.md) (Parallelogramm-Ecke) und
[plan-modul-11-laengen.md](plan-modul-11-laengen.md) (dort war das Parallelogramm noch vorgegeben).

Zweite Einheit im Block „Parallelität". Einheit 12 hat das Werkzeug geliefert (kollinear oder
nicht). Jetzt wird es auf Vierecke angewendet: Aus vier Punkten wird begründet, ob ein
Parallelogramm, ein Trapez oder keins von beiden vorliegt.

## Lernziel (ein testbares „Ich kann …")

Ich kann für ein Viereck $ABCD$ mit Vektoren **nachweisen**, dass es ein **Parallelogramm**
($\vec{AB} = \vec{DC}$) oder ein **Trapez** ($\vec{AB} = k \cdot \vec{DC}$) ist, und begründen, wenn es
keins von beiden ist.

Kernidee: **Gegenüberliegende Seiten vergleichen, in derselben Umlaufrichtung.** Man vergleicht
$\vec{AB}$ mit $\vec{DC}$ (beide Pfeile zeigen „von links nach rechts"), nicht mit $\vec{CD}$.
Gleiche Vektoren: Parallelogramm, das zweite Seitenpaar muss man dann nicht mehr prüfen. Kollinear
mit $k \neq 1$: Trapez. Kein Seitenpaar kollinear: weder noch.

## Vorwissen (wird wiederholt, nicht neu)

- Aus Einheit 12: kollinear prüfen über $\vec b = k \cdot \vec a$ je Zeile.
- Aus Einheit 4 und 5: gleiche Vektoren, Gegenvektor, Verbindungsvektor.
- Aus Einheit 8: Im Parallelogramm $ABCD$ gilt $\vec{AB} = \vec{DC}$ (dort zum Berechnen der Ecke).
- Aus der Sekundarstufe I: Trapez (ein Paar paralleler Seiten), Parallelogramm (zwei Paare),
  Haus der Vierecke.

## Aufbau (sechs Schritte)

1. **Das brauchst du** – nur Wiederholung: kollinear prüfen an einem Paar; Gegenvektor
   ($\vec{CD} = -\vec{DC}$); die Definitionen von Trapez und Parallelogramm aus dem Haus der Vierecke.
   Bild umschaltbar.
2. **Ein Beispiel** – **Welche Form haben die Dachflächen?** Ein Walmdach: rechteckiger Grundriss
   (Traufe), darüber der First, kürzer als die Traufe. Ein Regler ändert die Firstlänge. Angezeigt
   werden für die lange Dachfläche $\vec{AB}$ (Traufe) und $\vec{EF}$ (First) mit dem Faktor $k$ sowie
   die schrägen Kanten $\vec{AE}$ und $\vec{BF}$. Entdeckung: Traufe und First sind immer kollinear
   (Trapez); ist der First so lang wie die Traufe, sind die Vektoren gleich, und die Dachfläche wird
   zum Parallelogramm (Satteldach). 3D und Schrägbild umschaltbar.
3. **Das Konzept** – vier Voreinstellungen, der Regler bewegt $D$:
   - **Parallelogramm:** $\vec{AB} = \vec{DC}$; zur Kontrolle ist dann auch $\vec{AD} = \vec{BC}$.
   - **Trapez:** $\vec{AB} = 2 \cdot \vec{DC}$, das andere Seitenpaar nicht kollinear.
   - **Weder noch:** kein Seitenpaar kollinear.
   - **Falle Reihenfolge:** Wer $\vec{AB}$ mit $\vec{CD}$ vergleicht, findet $k = -1$ und hält ein
     Parallelogramm fälschlich für „kein Parallelogramm".

   Merkkästen: *Parallelogramm nachweisen* ($\vec{AB} = \vec{DC}$ genügt, mit kurzer Begründung über
   die Kette $\vec{AD} = \vec{AB} + \vec{BC} + \vec{CD}$ zum Aufdecken); *Trapez nachweisen*
   ($\vec{AB} = k \cdot \vec{DC}$; $k = 1$ ist der Sonderfall Parallelogramm); *Reihenfolge beachten*
   ($\vec{AB}$ mit $\vec{DC}$, $\vec{AD}$ mit $\vec{BC}$ vergleichen); *Gegenteil begründen* („kein
   Parallelogramm, weil $\vec{AB} \neq \vec{DC}$").
4. **Üben** – das Arbeitsblatt, Bild aus der Walmdach- oder einer Viereck-Aufgabe zur Kontrolle,
   umschaltbar.
5. **Einordnung** – Vorher: kollinear (Einheit 12), Längen bei vorgegebenem Parallelogramm (Einheit
   11). Jetzt: Parallelogramm und Trapez selbst nachweisen. Danach: der rechte Winkel (Einheit 14 und
   15), das vollständige Aufschreiben (Einheit 17) und die ganze Kriterienkette für Vierecke
   (Einheit 19). Satz zum Reihenziel: Zwei der drei Werkzeuge sind jetzt da.
6. **Seid ihr fit?** – $\vec{AB} = \vec{DC}$ gegeben: was folgt? $\vec{AB} = 2 \cdot \vec{DC}$: was
   folgt? $\vec{AB}$ und $\vec{CD}$ sind Gegenvektoren: was folgt? Letzte Frage zur Fehlvorstellung:
   „$\lvert\vec{AB}\rvert = \lvert\vec{DC}\rvert$, also ist $ABCD$ ein Parallelogramm." (Gleich lang
   reicht nicht, die Richtung muss auch stimmen.)

## Arbeitsblatt (Entwurf, NRW-Operatoren, Lösungen auf einer eigenen letzten Seite)

1. **Parallelogramm?** Drei Vierecke. *Untersuche, ob $ABCD$ ein Parallelogramm ist.* Stufe (a).
2. **Parallelogramm, Trapez oder keins?** Drei Vierecke. *Untersuche, ob $ABCD$ ein Parallelogramm,
   ein Trapez oder keins von beiden ist. Gib gegebenenfalls die parallelen Seiten an.* Stufe (b).
3. **Trapez konstruieren.** $A$, $B$, $C$ gegeben. *Bestimme $D$ so, dass $ABCD$ ein Trapez mit
   $AB \parallel DC$ ist und $DC$ halb so lang ist wie $AB$.* Stufe (b).
4. **Walmdach.** Koordinaten eines Walmdachs (andere Maße als in der Stunde). a) *Weise nach, dass
   die langen Dachflächen Trapeze sind.* b) *Gib an, wie viel Mal so lang die Traufe ist wie der
   First.* c) *Untersuche, ob die kurzen Dachflächen gleichschenklige Dreiecke sind* (Längen aus
   Einheit 11). Stufe (b)/(c).
5. **Raute nachweisen.** Vier Punkte, nichts vorgegeben. *Weise nach, dass $ABCD$ eine Raute ist.*
   Erst Parallelogramm mit Vektoren, dann benachbarte Seiten mit Längen (Einheit 11). Stufe (c).
6. **Fehler finden.** Lisa berechnet $\vec{AB}$ und $\vec{CD}$, findet $\vec{AB} = -\vec{CD}$ und
   schreibt: „Kein Parallelogramm, weil die Vektoren verschieden sind." *Beurteile Lisas Lösung.*
   Stufe (c).
7. **Sprinter: drei Möglichkeiten.** Drei Punkte $A$, $B$, $C$. *Bestimme alle Punkte $D$, sodass
   die vier Punkte in einer passenden Reihenfolge ein Parallelogramm bilden.* (Drei Lösungen, je nach
   Diagonale.)

## Festgelegte Regeln, die hier gelten

- „Das brauchst du" nur Wiederholung; das Nachweis-Kriterium kommt erst im Beispiel und Konzept.
- 3D überall umschaltbar, auch in „Das brauchst du" und „Üben"; Zeichenreihenfolge Punkt, Pfeil,
  Beschriftung; keine Bedien-Hinweise.
- Vektoren mit Pfeil, Punkte ohne.
- Beispiel auf dem Blatt und Startwerte der Stunde nie mit den Zahlen einer Aufgabe.
- Blatt schwarz-weiß, NRW-Operatoren, jede Teilaufgabe der Lösungen auf eigener Zeile, Lösungen auf
  einer Seite, kein Umbruch in Aufgaben.
- Vor dem Bauen alle Bildpunkte und Richtungen nachrechnen (keine Achse, keine Richtung wie die
  $x_1$-Achse, keine Kante durch eine Skalenbeschriftung); Namen nicht auf Achsenbeschriftungen.

## Neue technische Bausteine

- Stunde: Walmdach als Drahtmodell mit getönten Dachflächen (Trapeze und Dreiecke), Regler für die
  Firstlänge; Seitenpaare farbig mit Parallel-Pfeilchen (Kennzeichnung wie im Geometrieheft).
- Der Helfer `faktor` aus Einheit 12 wird übernommen und für beide Seitenpaare aufgerufen.

## Entscheidungen (23.09.2026)

Alle fünf Vorschläge angenommen: Walmdach als Beispiel, Trapez wie im Haus der Vierecke (mindestens
ein Paar paralleler Seiten, K13 entsprechend angepasst), ein Vektorpaar genügt als
Parallelogramm-Nachweis, Raute-Aufgabe als Vorgriff, Sprinter mit drei möglichen Ecken.

## Ursprünglich offene Entscheidungen

1. **Beispiel Walmdach** (Firstlänge per Regler, bei voller Länge wird es ein Satteldach) –
   Vorschlag: ja. Echte 3D-Figur mit Trapezen, die man vom Hausbau kennt. Alternative: ein
   schräg eingebautes Dachfenster als Parallelogramm (weniger Entdeckung).
2. **Trapez-Begriff.** Im Haus der Vierecke (Sekundarstufe I) hat ein Trapez *mindestens* ein Paar
   paralleler Seiten, das Parallelogramm ist also ein besonderes Trapez; K13 im Kompetenzplan sagt
   „genau ein Paar". Vorschlag: wie in der Sekundarstufe I (mindestens) und in Aufgaben ausdrücklich
   „Trapez, aber kein Parallelogramm" fragen, wenn das gemeint ist. Die Formulierung in K13 würde ich
   entsprechend anpassen.
3. **Ein Vektorpaar genügt** ($\vec{AB} = \vec{DC}$) als Parallelogramm-Nachweis, mit der Begründung
   über die Vektorkette zum Aufdecken. Vorschlag: ja; das zweite Paar nur zur Kontrolle.
4. **Raute-Aufgabe** (Parallelogramm mit Vektoren, dann Längen) als Vorgriff auf Einheit 19 –
   Vorschlag: ja, eine Aufgabe; sie schließt die Lücke aus Einheit 11, wo das Parallelogramm noch
   vorgegeben war.
5. **Sprinter mit drei möglichen Ecken** – Vorschlag: ja; setzt Einheit 8 fort und zeigt, dass die
   Reihenfolge der Ecken zählt.
