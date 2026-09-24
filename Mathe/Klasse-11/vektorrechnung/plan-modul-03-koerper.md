# Plan – Einheit 3: Würfel und Quader im Koordinatensystem (K3)

Dritte Einheit der Reihe. Plan zur Abnahme, danach wird gebaut (Stunde + Arbeitsblatt) wie bei
Einheit 1 und 2. Grundlagen: [Roadmap.md](Roadmap.md),
[plan-vektorrechnung.md](plan-vektorrechnung.md), [plan-modul-02-flaechen.md](plan-modul-02-flaechen.md).

## Lernziel (ein testbares „Ich kann …")

Ich kann einen Würfel oder Quader günstig ins Koordinatensystem legen (eine Ecke in den Ursprung,
die Kanten auf die Achsen), alle acht Ecken angeben und fehlende Ecken ergänzen.

Kernidee (baut direkt auf Einheit 2 auf): Ein günstig gelegter Quader ist ein Rechteck am Boden
(Grundfläche) plus dasselbe Rechteck um die Höhe $c$ nach oben (Deckfläche). Die acht Ecken sind
die vier Bodenecken (mit $x_3 = 0$) und dieselben vier mit $x_3 = c$.

## Vorwissen (wird wiederholt, nicht neu)

- Aus Einheit 2: Rechteck am Boden, alle vier Ecken, fehlende Ecke aus den bekannten ergänzen.
- Aus Einheit 1: Punkte eintragen und ablesen, Schrägbild-Konvention, Koordinatenebenen.
- Aus der Sekundarstufe I: Quader hat 8 Ecken und 12 Kanten, gegenüberliegende Kanten sind
  parallel und gleich lang; Würfel = alle Kanten gleich lang.

## Aufbau (sechs Schritte)

1. **Das brauchst du** – Wiederholung: ein Rechteck am Boden und seine vier Ecken (Einheit 2);
   ein Quader hat 8 Ecken und 12 Kanten, Gegenkanten parallel und gleich lang. Ein bis zwei
   Aufwärmfragen.
2. **Ein Beispiel** – Ein Umzugskarton soll ins Koordinatensystem. Wir legen ihn *günstig*: eine
   Ecke in den Ursprung, drei Kanten auf die Achsen. Die Grundfläche ist das bekannte Rechteck am
   Boden; die Deckfläche liegt um die Höhe $c$ höher. 3D-Ansicht (drehbar) und Schrägbild mit
   Umschalter; Regler für Länge, Breite und Höhe ($a$, $b$, $c$). Entdeckung: Die vier oberen
   Ecken sind die unteren mit $x_3 = c$.
3. **Das Konzept** – zwei Merkkästen:
   - *Quader günstig legen:* Grundfläche $A(0\!\mid\!0\!\mid\!0)$, $B(a\!\mid\!0\!\mid\!0)$,
     $C(a\!\mid\!b\!\mid\!0)$, $D(0\!\mid\!b\!\mid\!0)$; Deckfläche $E,F,G,H$ dieselben Ecken mit
     $x_3 = c$. Ein Würfel ist der Sonderfall $a = b = c$.
   - *Fehlende Ecken ergänzen:* Gegenkanten sind parallel und gleich lang. Eine obere Ecke ist die
     zugehörige untere Ecke mit $x_3 = c$; eine fehlende Bodenecke wie in Einheit 2.
   Interaktiv umschaltbar Quader / Würfel (Voreinstellungen im Textbereich); Ecken mit Koordinaten
   beschriftet.
4. **Üben** – das Arbeitsblatt (siehe unten). Auf der Seite nur die Ablese-Aufgaben zum Aufdecken.
5. **Einordnung** – Von der Fläche (Einheit 2) zum Körper: eine Dimension mehr, dieselbe Idee.
   **Brücke zum Vektor:** Die vier senkrechten Kanten sind dieselbe Verschiebung „$c$ nach oben"
   an vier verschiedenen Orten. Das ist schon der Gedanke des Repräsentanten – das Wort und der
   Begriff kommen in Einheit 4 (Der Vektor als Verschiebung). Danach: Vektor als Verschiebung.
6. **Seid ihr fit?** – drei bis vier Fragen frontal: fehlende obere Ecke bestimmen; Würfel von
   Quader unterscheiden; Anzahl der Ecken/Kanten; Fehlvorstellung (die obere Ecke ändert nur
   $x_3$, nicht $x_1$ oder $x_2$).

## Arbeitsblatt (Entwurf, NRW-Operatoren, Lösungen auf letzter Seite)

1. **Ablesen.** Schrägbild eines günstig gelegten Quaders, einige Ecken beschriftet. *Gib die
   Koordinaten aller acht Ecken an.*
2. **Fehlende Ecken.** Von einem Quader sind fünf Ecken durch Koordinaten gegeben (kein Bild).
   *Bestimme die fehlenden drei Ecken.*
3. **Würfel.** Ein Würfel mit Kantenlänge $4$ liegt günstig (Ecke im Ursprung). *Gib die
   Koordinaten aller acht Ecken an. Begründe, woran man im Koordinatensystem erkennt, dass es ein
   Würfel und kein Quader ist.*
4. **Deckfläche.** Grundfläche (vier Ecken) und Höhe gegeben. *Bestimme die vier Ecken der
   Deckfläche.*
5. **Klassenraum.** Ein quaderförmiger Gegenstand (Schrank oder Karton) im Raum. *Lege ein
   Koordinatensystem günstig fest und gib die Koordinaten der Ecken an. Beschreibe, warum die Wahl
   das Ablesen leicht macht.*
6. **Sprinter.** Ein Quader, der **nicht** im Ursprung liegt (verschoben, aber achsenparallel).
   a) *Bestimme die fehlenden Ecken.* b) *Berechne das Volumen.* c) *Untersuche, ob es ein Würfel
   ist* (alle drei Kantenlängen als Koordinatendifferenz vergleichen).

## Neue technische Bausteine

- Vieles ist vorhanden: `quaderDraw` (Schrägbild) und `quader3d` (three.js) aus Einheit 1,
  `beschrifteEcke` und der Umschalter aus Einheit 2. Neu vor allem: Eck-Beschriftung der acht
  Quader-Ecken mit Namen und Koordinaten, sauber platziert (obere und untere Ecken auseinander).
- Arbeitsblatt: TikZ-Quader (achsenparallel, günstige Lage) mit gestrichelten verdeckten Kanten
  und beschrifteten Ecken.

## Erledigte Vorentscheidungen (aus der Reihenplanung)

- Aufteilung: Einheit 3 = Würfel/Quader (Pyramide nur als Sprinter, hier zunächst gar nicht).
- Volumen: nur in der Sprinter-Aufgabe.
- Sachkontext: Klassenraum bzw. quaderförmiger Gegenstand im Raum.

## Offene Entscheidung (vor dem Bauen)

- Sprinter: verschobener Quader mit Volumen und Würfel-Prüfung (Vorschlag oben) – oder lieber ein
  konzeptioneller Dreh wie bei Einheit 2 (dort das Trapez). Für Körper wäre ein echter Dreh nur
  mit Vektoren sauber prüfbar; deshalb Vorschlag: der mehrschrittige verschobene Quader.
