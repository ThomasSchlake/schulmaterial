# Plan – Einheit 5: Verbindungsvektor („Spitze minus Fuß") (K5)

Fünfte Einheit der Reihe. Plan zur Abnahme, danach wird gebaut (Stunde + Arbeitsblatt) wie bei
Einheit 1 bis 4. Grundlagen: [Roadmap.md](Roadmap.md),
[plan-vektorrechnung.md](plan-vektorrechnung.md), Vorgänger [topics/04-vektor.js](topics/04-vektor.js).

## Lernziel (ein testbares „Ich kann …")

Ich kann den Verbindungsvektor zweier Punkte berechnen: $\vec{AB} = \vec{b} - \vec{a}$
(„Spitze minus Fuß"), und aus einem Punkt und einem Vektor den Zielpunkt bestimmen
($B = A + \vec{AB}$).

Kernidee (baut direkt auf Einheit 4 auf): In Einheit 4 war die Verschiebung gegeben und man
suchte den Zielpunkt ($P' = P + \vec{v}$). Jetzt sind **beide Punkte gegeben** und man sucht die
Verschiebung. Sie ist komponentenweise **Spitze minus Fuß**: von jeder Koordinate des Zielpunkts
die des Startpunkts abziehen. Beide Wege sind Umkehrungen voneinander.

## Vorwissen (wird wiederholt, nicht neu)

- Aus Einheit 4: Vektor als Verschiebung mit drei Komponenten (Spalte); Ortsvektor eines Punktes
  (Komponenten = Koordinaten); von Punkt und Vektor zum Zielpunkt $P' = P + \vec{v}$.
- Aus Einheit 4: derselbe Vektor kann an vielen Orten liegen (Repräsentant), Vektoren sind gleich,
  wenn ihre Komponenten übereinstimmen.
- Eine Verschiebung aus einem Bild ablesen: „wie weit in $x_1$-, $x_2$-, $x_3$-Richtung".

## Aufbau (sechs Schritte)

1. **Das brauchst du** – Wiederholung: Vektor als Verschiebung (drei Komponenten, Spalte);
   von Punkt und Vektor zum Zielpunkt ($P' = P + \vec{v}$); eine Verschiebung aus dem Bild ablesen.
   Ein bis zwei Aufwärmfragen (kein neuer Stoff, kein Merksatz).
2. **Ein Beispiel** – Zwei Punkte A und B sind gegeben (z. B. A(1 | 1 | 0), B(4 | 3 | 2)).
   Frage: *Welche Verschiebung bringt A auf B?* Mit dem alten Wissen ($P' = P + \vec v$) kommt man
   nicht direkt weiter, weil hier $\vec v$ **gesucht** ist. An der Tafel liest die Klasse pro Achse
   ab, wie weit es geht (x₂: von 1 auf 3, also +2 …) und entdeckt: das ist genau Zielkoordinate
   minus Startkoordinate. 3D-Ansicht (drehbar) **und** Schrägbild mit Umschalter, Regler für die
   Koordinaten von A und B; der Verbindungspfeil A→B wird live gezeichnet.
3. **Das Konzept** – Name, Schreibweise, Regel:
   - *Merkkasten Verbindungsvektor:* Der Vektor von A nach B heißt $\vec{AB}$. Man berechnet ihn
     komponentenweise als **Spitze minus Fuß**: $\vec{AB} = \vec{b} - \vec{a}$. (Kurz begründet über
     die Ortsvektoren: von A zurück zum Ursprung ($-\vec a$), dann zu B ($+\vec b$).)
   - *Merkkasten Umkehrung:* Sind A und $\vec{AB}$ bekannt, ist $B = A + \vec{AB}$. Und $\vec{BA}$
     ist der Gegenvektor zu $\vec{AB}$ (Fuß und Spitze vertauscht).
   Interaktiv umschaltbar (Voreinstellungen im Textbereich): **Verbindungsvektor** (Pfeil A→B) und
   **über Ortsvektoren** (zusätzlich $\vec a$ und $\vec b$ vom Ursprung eingeblendet, damit
   $\vec b - \vec a$ sichtbar wird). Regler für A und B.
4. **Üben** – das Arbeitsblatt (siehe unten). Auf der Seite nur die direkten (a)-Aufgaben zum
   Aufdecken. Noch keine Argumentationsaufgabe (Stufe c erst ab Modul 10).
5. **Einordnung** – Vorher: der Vektor als Verschiebung (Einheit 4). Jetzt: der Verbindungsvektor
   zweier Punkte als „Spitze minus Fuß". Danach: mit Vektoren rechnen (addieren, Vielfache) und
   vor allem der **Betrag** – die Länge von $\vec{AB}$ ist der Abstand von A und B. Ein Satz zum
   Reihenziel: Beim Figuren-Nachweis sind die Seiten immer solche Verbindungsvektoren.
6. **Seid ihr fit?** – drei bis vier Fragen frontal: $\vec{AB}$ aus zwei Punkten; B aus A und
   $\vec{AB}$; $\vec{AB}$ gegen $\vec{BA}$. Letzte Frage auf die typische Fehlvorstellung:
   Reihenfolge „Fuß minus Spitze" liefert den Gegenvektor (Vorzeichen kippen).

## Arbeitsblatt (Entwurf, NRW-Operatoren, Lösungen auf eigener letzter Seite)

1. **Verbindungsvektor.** Mehrere Punktpaare (ohne Bild). *Bestimme jeweils den Verbindungsvektor
   $\vec{AB}$.* Stufe (a), reines Anwenden von „Spitze minus Fuß".
2. **Zielpunkt.** Gegeben ein Punkt A und ein Vektor $\vec{AB}$. *Bestimme den Punkt B.*
   Umkehrrichtung ($B = A + \vec{AB}$), teils mit negativen Komponenten. Stufe (b).
3. **Hin und zurück.** Zu einem Punktpaar. a) *Bestimme $\vec{AB}$ und $\vec{BA}$.*
   b) *Beschreibe, wie die beiden Vektoren zusammenhängen.* (Gegenvektor, Vorzeichen umgekehrt.)
4. **Ablesen aus dem Schrägbild.** Zwei beschriftete Punkte A und B mit Hilfslinien (2-Kästchen-
   Konvention sichtbar). *Lies A und B ab und bestimme $\vec{AB}$.* Stufe (b).
5. **Quader – ja oder nein? (Begründung ohne Länge).** Ein Körper hat einen rechteckigen Boden
   $A, B, C, D$ und einen Deckel $E, F, G, H$; er *könnte* ein Quader sein. Bei einem Quader sind
   die vier senkrechten Kanten dieselbe Verschiebung (Einheit 3), also gleiche Verbindungsvektoren.
   a) *Bestimme $\vec{AE}$ und $\vec{CG}$.* b) *Begründe, ob der Körper ein Quader sein kann.*
   Erwartung: $\vec{AE} = (0\!\mid\!0\!\mid\!3)$, $\vec{CG} = (0\!\mid\!0\!\mid\!4)$ – verschieden,
   also **kein Quader**, weil zwei senkrechte Kanten unterschiedlich verschieben. Reine
   Vektorgleichheit, **keine Länge und kein Skalarprodukt** nötig. (Frühform des Figuren-Nachweises;
   zulässige Ausnahme zur Regel „Stufe c ab Modul 10", weil nur Einheit-4-Mittel gebraucht werden.)
6. **Sprinter.** Drei Punkte A, B, C sind gegeben. Damit ABCD ein Parallelogramm wird, muss die
   Verschiebung von A nach B dieselbe sein wie von D nach C. a) *Bestimme den fehlenden Punkt D.*
   b) *Weise durch Rechnung nach, dass $\vec{AB} = \vec{DC}$ gilt.* (Nutzt nur „gleiche Verschiebung"
   aus Einheit 4 und „Spitze minus Fuß" – der saubere Parallelogramm-Nachweis kommt später in
   Modul 8/13.)

## Neue technische Bausteine

- Stunde: viel vorhanden aus Einheit 4 (`dot`, `pfeil`, `pfeil3d`, `vek`, Umschalter `viewToggle`,
  Presets). Neu vor allem der **Ortsvektor-Modus** in Schritt 3: zusätzlich zu A→B die beiden
  Pfeile Ursprung→A und Ursprung→B einblenden und $\vec b - \vec a$ zeigen. Regler für zwei Punkte
  (sechs Werte) statt für einen Vektor. Pfeil-Reihenfolge wie festgelegt: erst `dot` (unter),
  dann `pfeil` (Spitze über dem Punkt), dann Beschriftung (Buchstabe über der Spitze).
- Arbeitsblatt: vorhandene Makros `\bild`, `\achsen`, `\hilfslinien`, `\vpfeil`, `\spv`. Aufgabe 4
  bekommt Hilfslinien an A und B (Regel: bei ablesbaren Punkten immer Hilfslinien).

## Erledigte Vorentscheidungen (aus der Reihenplanung)

- Ein Lernziel: der Verbindungsvektor „Spitze minus Fuß" und seine Umkehrung. Addition/Subtraktion
  allgemein und Vielfache sind eigene Einheiten (Modul 6, 7).
- Keine Argumentationsaufgabe (Stufe c) – erst ab Modul 10.
- Schreibweise $\vec{AB}$, Spaltenvektor; Schrägbild-Konvention 2 Kästchen (x₂, x₃) / ein schräges
  Kästchen (x₁); 3D immer umschaltbar.

## Offene Entscheidung (vor dem Bauen)

- Sprinter: Parallelogramm-4. Punkt über „gleiche Verschiebung" (Vorschlag oben) – oder schlichter
  ein zweistufiger Weg (A→B ablesen, denselben Vektor bei C ansetzen, Zielpunkt bestimmen). Der
  Parallelogramm-Dreh ist der interessantere und bleibt mit Einheit-4-Mitteln lösbar.
