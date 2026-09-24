# Plan – Einheit 6: Addieren und Subtrahieren (K7)

Sechste Einheit der Reihe. Plan zur Abnahme, danach wird gebaut (Stunde + Arbeitsblatt) wie bei
Einheit 1 bis 5. Grundlagen: [Roadmap.md](Roadmap.md),
[plan-vektorrechnung.md](plan-vektorrechnung.md), Vorgänger
[plan-modul-05-verbindungsvektor.md](plan-modul-05-verbindungsvektor.md).

## Lernziel (ein testbares „Ich kann …")

Ich kann zwei Vektoren addieren und subtrahieren – **koordinatenweise** (komponentenweise) und
**geometrisch** (Aneinanderhängen bzw. Parallelogramm für die Summe, Subtraktion als Addition des
Gegenvektors) – und beide Darstellungen ineinander übersetzen.

Kernidee: Zwei Verschiebungen nacheinander ergeben eine Gesamtverschiebung. Geometrisch hängt man
die Pfeile aneinander (Spitze an Fuß); rechnerisch addiert man die Komponenten einzeln. Beides ist
dasselbe. Die Subtraktion $\vec a - \vec b = \vec a + (-\vec b)$ ist bereits aus Einheit 5 bekannt:
$\vec{AB} = \vec b - \vec a$ war eine Subtraktion.

## Vorwissen (wird wiederholt, nicht neu)

- Aus Einheit 4: Vektor als Verschiebung, Komponenten (Spalte), Gegenvektor (alle Vorzeichen um).
- Aus Einheit 5: Verbindungsvektor $\vec{AB} = \vec b - \vec a$; einen Vektor an einen Punkt
  anhängen ($B = A + \vec{AB}$).
- Zahlen mit Vorzeichen addieren und subtrahieren (SI).

## Aufbau (sechs Schritte)

1. **Das brauchst du** – Wiederholung: Vektor als Verschiebung und Gegenvektor (Einheit 4); einen
   Vektor an einen Punkt anhängen (Einheit 5). Ein bis zwei Aufwärmfragen, kein neuer Stoff.
2. **Ein Beispiel** – Eine Drohne (oder ein Roboter) macht **zwei Verschiebungen nacheinander**,
   z. B. erst $\vec u = (3\mid1\mid0)$, dann $\vec w = (1\mid2\mid2)$. Frage: *Welche eine
   Verschiebung bringt sie genauso ans Ziel?* An der Tafel hängt man die beiden Pfeile aneinander
   (Spitze an Fuß) und liest die Gesamtverschiebung ab. Entdeckung: die Komponenten addieren sich
   einzeln. 3D-Ansicht (drehbar) **und** Schrägbild mit Umschalter, Regler für $\vec u$ und
   $\vec w$; die Summe wird live gezeichnet.
3. **Das Konzept** – Name, Schreibweise, Regel in zwei Merkkästen:
   - *Merkkasten Addition:* Koordinatenweise $\vec a + \vec b = (a_1{+}b_1 \mid a_2{+}b_2 \mid
     a_3{+}b_3)$. Geometrisch: **Aneinanderhängen** (Spitze an Fuß, Summe vom ersten Fuß zur
     letzten Spitze) oder **Parallelogramm** (beide vom selben Punkt, Summe ist die Diagonale).
   - *Merkkasten Subtraktion:* Koordinatenweise $\vec a - \vec b = (a_1{-}b_1 \mid \ldots)$.
     Geometrisch $\vec a - \vec b = \vec a + (-\vec b)$; das ist zugleich der Pfeil von der Spitze
     von $\vec b$ zur Spitze von $\vec a$ (beide vom selben Fuß) – genau der Verbindungsvektor aus
     Einheit 5.
   Interaktiv umschaltbar (Presets im Textbereich): **Aneinanderhängen**, **Parallelogramm**,
   **Subtraktion**. Regler für zwei Vektoren.
4. **Üben** – das Arbeitsblatt (siehe unten). Auf der Seite nur die direkten (a)-Aufgaben zum
   Aufdecken. Noch keine Argumentationsaufgabe (Stufe c erst ab Modul 10).
5. **Einordnung** – Vorher: der Verbindungsvektor (Einheit 5). Jetzt: mit Vektoren rechnen
   (Summe, Differenz). Danach: Vielfache (Einheit 7) und der Betrag (Länge). Ein Satz zum
   Reihenziel: Beim Figuren-Nachweis setzt man Seiten-Vektoren zu Ketten zusammen ($\vec{AB} +
   \vec{BC} = \vec{AC}$) – das ist genau diese Addition.
6. **Seid ihr fit?** – drei bis vier Fragen frontal: $\vec a + \vec b$ und $\vec a - \vec b$
   koordinatenweise; die Summe aus einem Bild ablesen (Aneinanderhängen); Fehlvorstellung:
   Beträge (Längen) addieren sich **nicht** – man addiert die Komponenten, nicht die Längen.

## Arbeitsblatt (Entwurf, NRW-Operatoren, Lösungen auf eigener letzter Seite)

1. **Koordinatenweise rechnen.** Gegeben mehrere Vektoren. *Berechne $\vec a + \vec b$ und
   $\vec a - \vec b$* (auch mit negativen Komponenten). Stufe (a).
2. **Aus dem Bild ablesen.** Schrägbild mit zwei aneinandergehängten Pfeilen (Hilfslinien,
   2-Kästchen-Konvention). a) *Gib die beiden Vektoren an.* b) *Bestimme ihre Summe und prüfe sie
   am Bild.* Stufe (b).
3. **Übersetzen.** a) Zu einer geometrischen Beschreibung (erst $\vec u$, dann $\vec w$) den
   Ergebnisvektor bestimmen. b) Zu $\vec a - \vec b$ erklären, wie man den Pfeil ins Bild
   einträgt. Stufe (b).
4. **Vektorkette.** Gegeben drei Punkte $A$, $B$, $C$. a) *Bestimme $\vec{AB}$ und $\vec{BC}$.*
   b) *Zeige durch Rechnung, dass $\vec{AB} + \vec{BC} = \vec{AC}$ gilt.* (Verbindet Einheit 5 und
   6; keine Argumentation im Sinne der Klassenarbeit, nur Rechnen.)
5. **Sachkontext – Drohne.** Eine Drohne startet in $S$ und macht nacheinander drei Verschiebungen.
   a) *Bestimme die Gesamtverschiebung.* b) *Bestimme die Zielposition.* (Modellieren, verlangt der
   Lehrplan; ohne die $t$-Formel aus Modul 9 – nur Summe von Vektoren plus Startpunkt.)
6. **Sprinter.** Gegeben sind $\vec a + \vec b$ und $\vec a - \vec b$. *Bestimme $\vec a$ und
   $\vec b$.* (Rückwärts denken: $\vec a$ ist die Hälfte der Summe der beiden gegebenen Vektoren,
   $\vec b$ die Hälfte ihrer Differenz.)

## Neue technische Bausteine

- Stunde: viel vorhanden aus Einheit 4/5 (`dot`, `pfeil`, `pfeil3d`, `vek`, `add3`, `neg3`, `sub3`,
  Umschalter, Presets). Neu vor allem die drei geometrischen Darstellungen im Konzept-Schritt:
  Aneinanderhängen (zweiter Pfeil an der Spitze des ersten, Summenpfeil), Parallelogramm (beide vom
  Ursprung, Diagonale plus die zwei parallelen Hilfskanten gestrichelt), Subtraktion (Gegenvektor
  anhängen). Pfeil-Reihenfolge wie festgelegt: `dot` unter, `pfeil` darüber (Spitze über dem Punkt),
  Beschriftung zuletzt. Startwerte so wählen, dass keine Spitze im Schrägbild auf eine Achse fällt
  (Lehre aus Einheit 5: $2b_3 \neq b_1$ usw.).
- Arbeitsblatt: vorhandene Makros `\bild`, `\achsen`, `\hilfslinien`, `\vpfeil`, `\spv`. Aufgabe 2
  bekommt zwei aneinandergehängte Pfeile mit Hilfslinien.

## Erledigte Vorentscheidungen (aus der Reihenplanung)

- Ein Lernziel: Addition und Subtraktion (Summe und Differenz). Vielfache sind Einheit 7,
  Vektorketten in Figuren (fehlender Eckpunkt, Mittelpunkt) sind Einheit 8.
- Sachkontext Drohne hier nur als Summe von Verschiebungen; die Geschwindigkeit/$t$-Formel (K21)
  bleibt Modul 9.
- Keine Argumentationsaufgabe (Stufe c) – erst ab Modul 10.
- Schreibweise Spaltenvektor; Schrägbild-Konvention 2 Kästchen (x₂, x₃) / ein schräges (x₁);
  3D immer umschaltbar.

## Offene Entscheidung (vor dem Bauen)

- Geometrie der Subtraktion: als Preset „Subtraktion" den Gegenvektor anhängen ($\vec a + (-\vec
  b)$) **oder** beide Vektoren vom selben Fuß zeigen und $\vec a - \vec b$ als Verbindungspfeil
  (Spitze $b$ → Spitze $a$) einzeichnen. Vorschlag: beides zeigen, Schwerpunkt auf dem
  Verbindungspfeil, weil das direkt an Einheit 5 anknüpft.
- Sprinter: „aus Summe und Differenz die beiden Vektoren" (Vorschlag oben) oder schlichter „finde
  $\vec x$ mit $\vec a + \vec x = \vec b$". Der erste ist der interessantere Dreh.
