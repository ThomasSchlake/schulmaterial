# Plan – Einheit 8: Vektorketten in Figuren (K9)

Achte Einheit der Reihe. Plan zur Abnahme, danach wird gebaut (Stunde + Arbeitsblatt) wie bei
Einheit 1 bis 7. Grundlagen: [Roadmap.md](Roadmap.md),
[plan-vektorrechnung.md](plan-vektorrechnung.md), Vorgänger
[plan-modul-07-vielfache.md](plan-modul-07-vielfache.md).

## Lernziel (ein testbares „Ich kann …")

Ich kann einen gesuchten Punkt über eine **Vektorkette** aus bekannten Punkten erreichen und so
den **Mittelpunkt** einer Strecke, einen **Teilpunkt** (etwa nach einem Drittel) und die **fehlende
Ecke eines Parallelogramms** berechnen.

Kernidee: Einen unbekannten Punkt erreicht man vom Ursprung aus über bekannte Wege:
erst zu einem bekannten Punkt, dann mit bekannten Verschiebungen oder ihren Vielfachen weiter.
Zum Beispiel $\vec m = \vec a + \tfrac12 \cdot \vec{AB}$ für den Mittelpunkt, $\vec d = \vec a + \vec{BC}$
für die vierte Ecke eines Parallelogramms. Neu ist nicht die Rechnung (Summe und Vielfaches kennt
man), sondern die Idee, den Weg durch die Figur selbst zu wählen.

## Vorwissen (wird wiederholt, nicht neu)

- Aus Einheit 4: Ortsvektor eines Punktes, Repräsentant (derselbe Vektor an anderer Stelle).
- Aus Einheit 5 und 6: Verbindungsvektor $\vec{AB}$, Spitze minus Fuß; mit Ortsvektoren
  $\vec{AB} = \vec b - \vec a$; Punkt plus Vektor ergibt Punkt.
- Aus Einheit 6 und 7: Vektoren addieren, Vielfache bilden.

## Aufbau (sechs Schritte)

1. **Das brauchst du** – nur Wiederholung: Ortsvektor, Verbindungsvektor, Summe, Vielfaches.
   Aufwärmen: $\vec{AB}$ zu zwei Punkten bestimmen; $\tfrac12 \cdot \vec v$ für einen Vektor mit
   geraden Komponenten. Bild umschaltbar 2D/3D.
2. **Ein Beispiel** – Zwischen zwei Masten $A$ und $B$ ist ein Seil gespannt. Eine Lampe soll
   **genau in die Mitte**. Mit dem alten Wissen kennt man $A$, $B$ und $\vec{AB}$, aber nicht den
   Punkt in der Mitte. Entdeckung an der Tafel: Man geht zu $A$ und dann den **halben Weg** von
   $A$ nach $B$. Im Bild: Pfeil zum Punkt $A$, dann $\tfrac12 \cdot \vec{AB}$, ganzes $\vec{AB}$
   gestrichelt. Regler für $B$; die Koordinaten der Mitte werden live angezeigt. 3D und Schrägbild
   umschaltbar. Der Name „Vektorkette" fällt hier noch nicht.
3. **Das Konzept** – Name und Regel: **Vektorkette**. Drei Voreinstellungen, jede mit eigenem
   Bild und Merkkasten:
   - **Mittelpunkt:** $\vec m = \vec a + \tfrac12 \cdot \vec{AB}$. Koordinatenweise ist das der
     Mittelwert: $M\big(\tfrac{a_1+b_1}{2} \mid \tfrac{a_2+b_2}{2} \mid \tfrac{a_3+b_3}{2}\big)$.
   - **Teilpunkt:** $\vec t = \vec a + \tfrac13 \cdot \vec{AB}$ liegt nach einem Drittel des Weges
     (entsprechend $\tfrac14$, $\tfrac23$ …). Nur einfache Brüche, kein Begriff „Teilverhältnis".
   - **Parallelogramm-Ecke:** In $ABCD$ ist $\vec{AD} = \vec{BC}$, also $\vec d = \vec a + \vec{BC}$.
     Der Weg über eine bekannte Seite ersetzt die unbekannte.
   Merkkasten Vektorkette: Einen Punkt erreicht man über bekannte Punkte und Verschiebungen; welcher
   Weg, darf man selbst wählen, das Ergebnis ist immer dasselbe.
4. **Üben** – das Arbeitsblatt. Das Bild ist das von Aufgabe 3 (Kette im Quader), umschaltbar,
   mit Aufdeck-Karten zu den direkten Aufgaben.
5. **Einordnung** – Vorher: Summe und Vielfache (Einheit 6 und 7). Jetzt: Vektorketten in Figuren.
   Danach: die Position einer Drohne nach $t$ Sekunden, $\vec p = \vec p_0 + t \cdot \vec v$, ist
   ebenfalls eine Kette (Einheit 9). Satz zum Reihenziel: Beim Figuren-Nachweis rechnet man fehlende
   Ecken und Mittelpunkte genau so aus.
6. **Seid ihr fit?** – Mittelpunkt ausrechnen; vierte Ecke eines Parallelogramms; welcher Weg ist
   eine gültige Kette. Letzte Frage zur typischen Fehlvorstellung: „$M = \tfrac12 \cdot \vec{AB}$."
   (Falsch, das ist nur der halbe Weg ab $A$; es fehlt der Start $\vec a$.)

## Arbeitsblatt (Entwurf, NRW-Operatoren, Lösungen auf einer eigenen letzten Seite)

1. **Mittelpunkt.** Zu drei Punktpaaren: *Berechne den Mittelpunkt $M$ der Strecke $AB$.* Stufe (a).
2. **Vierte Ecke.** a) Von einem Parallelogramm $ABCD$ sind $A$, $B$, $C$ gegeben: *Bestimme $D$.*
   b) Diesmal sind $A$, $B$, $D$ gegeben: *Bestimme $C$.* Stufe (b).
3. **Ketten im Quader.** Schrägbild eines Quaders mit Ecken $A$ bis $H$ (Hilfslinien an zwei Ecken).
   a) *Gib $\vec{AG}$ als Kette aus drei Kantenvektoren an.* b) *Gib zwei verschiedene Ketten von
   $B$ nach $H$ an.* c) *Berechne den Mittelpunkt der Raumdiagonalen $AG$.* Stufe (b).
4. **Teilpunkte.** Zu $A$ und $B$: *Bestimme den Punkt nach einem Drittel und nach drei Vierteln
   des Weges von $A$ nach $B$.* Stufe (b).
5. **Umkehrung.** Der Mittelpunkt $M$ und der Endpunkt $A$ sind gegeben. *Bestimme den anderen
   Endpunkt $B$.* Stufe (b).
6. **Seil mit Lampe.** Sachkontext mit zwei Befestigungspunkten und zwei Lampen nach einem Drittel
   und nach zwei Dritteln. *Bestimme die Aufhängepunkte der Lampen.* Stufe (b).
7. **Sprinter.** Ein Parallelogramm $ABCD$ mit gegebenen Ecken, nicht achsenparallel.
   a) *Berechne die Mittelpunkte der beiden Diagonalen $AC$ und $BD$.* b) *Beschreibe, was dir
   auffällt, und begründe es mit einer Vektorkette.* (Die Diagonalen halbieren sich.)

## Festgelegte Regeln, die hier gelten

- „Das brauchst du" nur Wiederholung; kein Begriff vor seinem Beispiel („Vektorkette" erst im
  Konzept, im Beispiel nur „halber Weg").
- 3D überall umschaltbar, auch in „Das brauchst du" und „Üben"; Zeichenreihenfolge Punkt, Pfeil,
  Beschriftung; keine Bedien-Hinweise.
- Vektoren mit Pfeil, Punkte ohne; Vektoren als Spalte; in Beschriftungen Pfeil nur über dem Vektor
  ($\tfrac12 \cdot \vec{AB}$).
- Beispiel auf dem Blatt und Startwerte der Stunde nie mit den Zahlen einer Aufgabe; nur „Üben"
  zeigt bewusst das Bild von Aufgabe 3.
- Blatt schwarz-weiß, NRW-Operatoren, jede Teilaufgabe der Lösungen auf eigener Zeile, Lösungen auf
  einer Seite, kein Umbruch in Aufgaben, Hilfslinien bei Punkten zum Ablesen.
- Zahlen so wählen, dass Mittel- und Teilpunkte möglichst ganzzahlig sind und im Schrägbild kein
  Punkt auf eine Achse fällt (vor dem Bauen nachrechnen).

## Neue technische Bausteine

- Stunde: vorhandene Helfer (`statisch`, `vlbl`, `av`, `albl`, Presets). Neu ist ein gestrichelter
  Pfeil für den ganzen Weg $\vec{AB}$ hinter dem halben.
- Blatt: vorhandene Makros; `\quaderbild` aus Blatt 03 für Aufgabe 3 übernehmen.

## Entscheidungen (23.09.2026)

Alle drei Vorschläge angenommen: Mittelwert-Form in den Merkkasten, Teilpunkte mit einfachen
Brüchen ohne „Teilverhältnis", Sprinter mit den Diagonalen des Parallelogramms.

## Ursprünglich offene Entscheidungen

1. **Mittelwert-Form $M\big(\tfrac{a_1+b_1}{2} \mid \dots\big)$ in den Merkkasten?** Sie ist die
   schnellste Rechnung in der Klassenarbeit. Vorschlag: ja, als Folgerung aus der Kette, koordinaten-
   weise hergeleitet.
2. **Teilpunkte aufnehmen?** Sie stehen in K9. Vorschlag: ja, aber nur einfache Brüche und ohne den
   Begriff „Teilverhältnis".
3. **Sprinter:** Diagonalen im Parallelogramm halbieren sich (Vorschlag oben) oder die
   Raumdiagonalen eines Quaders schneiden sich im Mittelpunkt. Vorschlag: Parallelogramm, weil es
   aufs Reihenziel (Vierecke) zeigt; die Quader-Diagonale kommt schon in Aufgabe 3c vor.
