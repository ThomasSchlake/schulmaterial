# Unterrichtsplan Mathe EF – Vektorrechnung (bis Skalarprodukt)

Plan zur **Abnahme**, Schritt 1: die Kompetenzen. Danach folgt die Roadmap (Modulfolge,
Aufbau wie bei den Physik-Reihen) und erst dann die einzelnen Einheiten.

Grundlage: Kernlehrplan NRW Mathematik GOSt, Inhaltsfeld *Analytische Geometrie und
Lineare Algebra*, EF-Schwerpunkte „Koordinatisierungen des Raumes" und „Vektoren und
Vektoroperationen", ergänzt um das Skalarprodukt als Abschluss der Reihe.

## Reihenziel (übergeordnet)

Die SuS können **begründet entscheiden, ob eine Figur im räumlichen Koordinatensystem ein
Trapez, Parallelogramm, Rechteck, Raute, Quadrat, ein rechtwinkliges, gleichschenkliges
oder gleichseitiges Dreieck oder ein Körper wie Quader, Würfel, Pyramide ist**, und diese
Entscheidung als vollständige, nachvollziehbare Argumentation aufschreiben.

Alles in der Reihe dient diesem Ziel: Punkte im Raum darstellen, Vektoren als Verbindung von
Punkten verstehen, mit Vektoren rechnen, Längen bestimmen, Parallelität erkennen und mit dem
Skalarprodukt rechte Winkel nachweisen. Die Klassenarbeit prüft genau diese Argumentationen.

## Festgelegte Entscheidungen (14.09.2026)

- **Format:** beides. Jede Einheit bekommt eine interaktive Stunde (Lesson-Engine wie in Physik,
  Schrägbild und Vektoren interaktiv an der Tafel) und ein LaTeX-Arbeitsblatt zum Üben.
- **Skalarprodukt nur für Orthogonalität.** Keine Winkelberechnung mit der cos-Formel.
- **Figuren:** Dreiecke (rechtwinklig, gleichschenklig, gleichseitig), Vierecke (Trapez,
  Parallelogramm, Rechteck, Raute, Quadrat), Körper (Quader, Würfel, Pyramide).
- **Vorwissen:** Vektoren sind neu. Der Vektorbegriff wird von Grund auf eingeführt; bekannt
  sind nur Koordinatensystem in der Ebene, Pythagoras und die Eigenschaften der Vierecke.

## Vorwissen (wird wiederholt, nicht neu eingeführt)

- Kartesisches Koordinatensystem in der Ebene, Punkte ablesen und eintragen.
- Satz des Pythagoras und seine Umkehrung.
- Wurzeln (auch als exakte Werte wie $\sqrt{14}$ stehen lassen).
- Eigenschaften der besonderen Vierecke (Haus der Vierecke) und Dreiecke.

## Kompetenzen (inhaltsbezogen), Reihenfolge = Aufbau der Reihe

Jede Kompetenz ist ein testbares „Ich kann …". Sie sind so geschnitten, dass jede später genau
eine Einheit tragen kann (Regel aus der Physik: ein Lernziel pro Stunde).

### A – Der Raum bekommt Koordinaten

| Nr. | Ich kann … |
|---|---|
| K1 | … Punkte mit drei Koordinaten $P(x_1 \mid x_2 \mid x_3)$ in ein Schrägbild eintragen und aus einem Schrägbild ablesen (Achsenrichtungen, verkürzte $x_1$-Achse, Hilfslinien). |
| K2 | … besondere Lagen von Punkten erkennen und beschreiben: auf einer Achse, in einer Koordinatenebene ($x_1x_2$-, $x_1x_3$-, $x_2x_3$-Ebene), und Koordinaten von Punkten mit vorgegebener Lage angeben. |
| K3 | … einfache Körper (Quader, Würfel, Pyramide) in ein Koordinatensystem legen und dabei das Koordinatensystem günstig wählen (Ursprung in eine Ecke, Kanten auf die Achsen), die Koordinaten aller Ecken angeben und fehlende Ecken aus den bekannten ergänzen. |

### B – Vektoren als Verschiebungen

| Nr. | Ich kann … |
|---|---|
| K4 | … einen Vektor als Verschiebung deuten (Koordinaten = „wie weit in $x_1$-, $x_2$-, $x_3$-Richtung") und erklären, warum derselbe Vektor an vielen Stellen im Raum liegen kann (Pfeilklasse). |
| K5 | … den Verbindungsvektor zweier Punkte berechnen: $\vec{AB} = \vec{b} - \vec{a}$ („Spitze minus Fuß"), und aus Punkt und Vektor den Zielpunkt bestimmen. |
| K6 | … Ortsvektor und Punkt unterscheiden und ineinander übersetzen, Gegenvektor bilden, Gleichheit von Vektoren an den Koordinaten erkennen. |

### C – Rechnen mit Vektoren

| Nr. | Ich kann … |
|---|---|
| K7 | … Vektoren addieren und subtrahieren, koordinatenweise und geometrisch (aneinanderhängen, Parallelogramm), und beides ineinander übersetzen. |
| K8 | … einen Vektor mit einer Zahl multiplizieren und die Wirkung beschreiben (Strecken, Stauchen, Umkehren). |
| K9 | … Vektorketten in Figuren aufstellen und nutzen: fehlenden Eckpunkt eines Parallelogramms berechnen ($\vec{d} = \vec{a} + \vec{BC}$), Mittelpunkt einer Strecke, Punkte auf einer Strecke teilen. |
| K21 | … einen Vektor in einem Sachkontext als Geschwindigkeit deuten (Koordinaten = Weg pro Sekunde in $x_1$-, $x_2$-, $x_3$-Richtung) und daraus die Position nach einer Zeit $t$ berechnen: $\vec{p}(t) = \vec{p}_0 + t\cdot\vec{v}$, zum Beispiel Drohne oder Flugzeug. *(Nachtrag aus dem schulinternen Lehrplan, Erwartung (3).)* |

### D – Längen und Abstände

| Nr. | Ich kann … |
|---|---|
| K10 | … den Betrag eines Vektors mit dem Satz des Pythagoras im Raum berechnen: $\lvert\vec{v}\rvert = \sqrt{v_1^2 + v_2^2 + v_3^2}$, und damit den Abstand zweier Punkte bestimmen. |
| K11 | … mit Längen argumentieren: Seitenlängen einer Figur vergleichen (gleichschenklig, gleichseitig, Raute, Quadrat gegen Rechteck) und Ergebnisse exakt (Wurzel) oder gerundet angeben. |

### E – Parallel oder nicht

| Nr. | Ich kann … |
|---|---|
| K12 | … prüfen, ob zwei Vektoren kollinear (parallel) sind, indem ich einen als Vielfaches des anderen schreibe, und das Ergebnis geometrisch deuten (parallele Seiten, Punkte auf einer Geraden). |
| K13 | … mit Kollinearität und Vektorgleichheit argumentieren: Parallelogramm ($\vec{AB} = \vec{DC}$), Trapez (mindestens ein Paar paralleler Seiten wie im Haus der Vierecke; „Trapez, aber kein Parallelogramm", wenn genau ein Paar gemeint ist). |

### F – Rechte Winkel: das Skalarprodukt

| Nr. | Ich kann … |
|---|---|
| K14 | … rechte Winkel zunächst ohne neues Werkzeug nachweisen: Umkehrung des Satzes des Pythagoras mit den drei Seitenlängen eines Dreiecks. (Motivation: das ist umständlich, es geht kürzer.) |
| K15 | … das Skalarprodukt zweier Vektoren berechnen ($\vec{a}\cdot\vec{b} = a_1 b_1 + a_2 b_2 + a_3 b_3$) und weiß, dass das Ergebnis eine Zahl ist, kein Vektor. |
| K16 | … die Orthogonalität zweier Vektoren mit dem Skalarprodukt prüfen ($\vec{a}\cdot\vec{b} = 0 \Leftrightarrow \vec{a}\perp\vec{b}$) und begründen, warum das aus dem Satz des Pythagoras folgt. |

### G – Figuren nachweisen (Ziel der Reihe)

| Nr. | Ich kann … |
|---|---|
| K17 | … für ein Dreieck aus drei Punkten begründet entscheiden, ob es rechtwinklig, gleichschenklig oder gleichseitig ist, und angeben, an welcher Ecke der rechte Winkel liegt. |
| K18 | … für ein Viereck aus vier Punkten begründet entscheiden, ob es Trapez, Parallelogramm, Rechteck, Raute oder Quadrat ist, in der richtigen Reihenfolge der Kriterien (erst parallele Seiten, dann Winkel oder Längen). |
| K19 | … für einen Körper aus seinen Ecken begründet entscheiden, ob er ein Quader, ein Würfel oder eine Pyramide mit besonderer Grundfläche ist (Kanten paarweise parallel, gleich lang, senkrecht). |
| K20 | … eine solche Argumentation vollständig aufschreiben: Behauptung, benötigte Vektoren, Rechnung, Schluss mit Begründung. Auch das Gegenteil sauber begründen („kein Rechteck, weil …"). |
| K22 | … Vektoren im TI-Nspire CX II-T CAS eingeben und damit Betrag, Summe, Vielfache und Skalarprodukt berechnen, um die eigene Rechnung zu kontrollieren. *(Nachtrag aus dem schulinternen Lehrplan, Erwartung (10). Läuft als Werkzeug durch mehrere Einheiten, keine eigene Stunde.)* |

## Aufbau jeder Einheit (Entwurf, Stand 15.09.2026)

Jede Einheit besteht aus einer interaktiven Stunde (Lesson-Engine, sechs Schritte) und einem
Arbeitsblatt (LaTeX/PDF), das in Schritt 4 eingesetzt wird. Die sechs Schritte sind fest und
heißen in jeder Einheit gleich, damit die SuS den Rhythmus kennen.

| Schritt | Name in der Stunde | Inhalt | Form |
|---|---|---|---|
| 1 | Das brauchst du | Nur Wiederholung: die zwei bis drei Dinge aus früheren Einheiten oder der SI, die gleich gebraucht werden. Kein neuer Stoff, keine neuen Merksätze. | Kurze Liste plus eine Visualisierung; ein oder zwei Aufwärmfragen zum Aufdecken. |
| 2 | Ein Beispiel | Ein konkretes Problem mit Zahlen, das mit dem alten Wissen nicht (oder nur umständlich) lösbar ist. Die Klasse arbeitet es gemeinsam an der Tafel durch; das neue Konzept wird am Beispiel entdeckt, noch nicht benannt. | Interaktives Schrägbild oder Rechnung, Schritt für Schritt aufdeckbar. |
| 3 | Das Konzept | Jetzt der Name, die Schreibweise und die Regel, herausgelöst aus dem Beispiel. Ein Merkkasten, der wörtlich so ins Heft geht. Falls die Einheit zwei Darstellungen hat (geometrisch und rechnerisch), beide nebeneinander. | Merkkasten plus interaktive Darstellung mit Reglern zum Ausprobieren. |
| 4 | Üben | Das Arbeitsblatt. Aufgaben in drei Stufen: (a) direkt anwenden, (b) mit einer Hürde (negative Koordinaten, Wurzel bleibt stehen, fehlender Punkt), (c) eine kleine Argumentation im Stil der Klassenarbeit. Auf der Seite selbst nur die Lösungen der (a)-Aufgaben zum Aufdecken, damit Selbstkontrolle möglich ist. | Arbeitsblatt (PDF) plus Aufdeck-Karten mit Lösungen. |
| 5 | Einordnung | Wo steht das Neue in der Reihe: was war vorher (die Voraussetzung), was kommt danach (wofür wir es brauchen), und wo es im Nachweis am Ende auftaucht. Ein Satz zum Reihenziel. | Kurzer Text plus Ausschnitt der Roadmap (vorher, jetzt, nachher). |
| 6 | Seid ihr fit? | Drei bis vier Fragen frontal für alle, gemischt aus Verständnis (Multiple Choice) und einer Rechnung mit Auflösung. Die letzte Frage greift die typische Fehlvorstellung der Einheit auf. | Quiz mit Auflösung, wie in den Physik-Stunden. |

Regeln für alle Einheiten:

- Ein Lernziel pro Einheit. Sobald ein Konzept, eine Darstellung und eine Rechnung gleichzeitig
  neu sind, werden das eigene Einheiten (Regel aus der Physik-Planung).
- Schritt 2 vor Schritt 3: erst das Beispiel, dann die Regel. Nie umgekehrt.
- Der Merkkasten in Schritt 3 ist der einzige Text, der wörtlich ins Heft geht. Alles andere
  ist Gespräch an der Tafel.
- Schrägbild und Vektoren sind an der Tafel immer interaktiv (Punkte ziehen, Regler), damit die
  Klasse Vermutungen sofort prüfen kann.
- Das Arbeitsblatt ist ohne die Stunde lösbar: Es hat oben einen kurzen Merkkasten (identisch
  mit Schritt 3), dann die Aufgaben. So funktioniert es auch als Hausaufgabe oder zum Nachholen.
- Argumentationsaufgaben (Stufe c) nur, wo es sich anbietet, frühestens ab Modul 10. Davor
  haben die Blätter nur die Stufen (a) und (b).
- Jedes Blatt hat die Lösungen auf einer eigenen letzten Seite (`\clearpage`, `\loesungstitel`),
  wie die Analysis-Blätter. Alle Regeln der anderen Mathe-Blätter gelten: schwarz-weiß, keine
  Seitenumbrüche in Aufgaben oder Kästen, luftiger Abstand, gemeinsame `arbeitsblatt.sty`.
- Schritt 2 (Beispiel) und Schritt 3 (Konzept) gibt es in jeder Einheit, notfalls kurz.
- TI-Nspire: Ab Modul 15 enthält jedes Blatt eine Aufgabe „Kontrolliere mit dem Rechner".
- 3D-Ansicht: Wo es um räumliche Vorstellung geht (Schrägbild, Körper, Vektoren im Raum), zeigt die
  Stunde eine drehbare 3D-Ansicht (three.js r128, vom CDN nachgeladen) direkt über dem Schrägbild
  derselben Situation. So wird die Übersetzung zwischen Raum und Papier trainiert. Ohne Internet
  bleibt die 3D-Fläche leer, das Schrägbild funktioniert weiter.

Ablage: `vektorrechnung/topics/NN-slug.js` für die Stunden (Lesson-Engine, gebaut über
`build-lessons.mjs`), `vektorrechnung/blaetter/NN-slug.tex` für die Arbeitsblätter mit
gemeinsamer `arbeitsblatt.sty`. Der Klasse-11-Index liest die Stunden automatisch aus `topics/`.

## Prozessbezogene Kompetenzen, die die Reihe gezielt trainiert

- **Argumentieren**: Vom Rechenergebnis zur Aussage über die Figur, mit Begründung, welches
  Kriterium erfüllt oder verletzt ist. Das ist der Kern der Klassenarbeit.
- **Problemlösen**: Selbst entscheiden, welche Vektoren gebraucht werden und welches Kriterium
  am schnellsten zum Ziel führt.
- **Kommunizieren**: Schreibweisen sauber trennen (Punkt, Ortsvektor, Verbindungsvektor,
  Betrag, Skalarprodukt).
- **Werkzeuge**: TI-Nspire CX II-T CAS für Wurzeln, Vektorrechnung und Kontrolle (K22).

## Was die Reihe nicht behandelt (Abgrenzung)

- Keine Geraden- oder Ebenengleichungen (Parameterform), keine Lagebeziehungen.
- Kein Vektorprodukt, keine Normalenvektoren, keine Abstände Punkt–Gerade.
- Kein Flächeninhalt über Vektoren (nur, falls die Figur als Rechteck erkannt ist, dann
  Länge mal Breite).
- Keine Winkelberechnung mit der cos-Formel. Das Skalarprodukt wird nur für rechte Winkel genutzt.

## Prüfungsfähigkeit (worauf die Klassenarbeit hinausläuft)

Ein typischer Aufgabenkern: Vier Punkte im Raum sind gegeben. Zeige, dass sie ein Rechteck,
aber kein Quadrat bilden. Berechne den fehlenden Punkt, sodass ein Parallelogramm entsteht.
Weise nach, dass das Dreieck $ABC$ bei $B$ rechtwinklig ist. Ergänze die Ecken des Quaders
und zeige, dass er kein Würfel ist. Alles mit vollständiger Begründung.

## Abgleich mit dem schulinternen Lehrplan (Luisenschule, Kapitel I Vektoren)

Der schulinterne Lehrplan sieht für Kapitel I **6 UE à 68 Minuten** vor, gegliedert in
Erkundungen, 1 Punkte und Figuren im Raum, 2 Vektoren, 3 Rechnen mit Vektoren, dann
Wiederholen – Vertiefen – Vernetzen, Rückblick, Test. Das Skalarprodukt steht **nicht** in
diesem Kapitel; es gehört im Lehrplan zu einem späteren Kapitel.

| Erwartung im Lehrplan | abgedeckt durch |
|---|---|
| (1) geeignete kartesische Koordinatisierungen wählen (Ebene und Raum) | K1, K3 (Koordinatensystem günstig legen) |
| (2) geometrische Objekte im räumlichen Koordinatensystem darstellen | K1, K2, K3 |
| (3) Vektoren als Verschiebungen und in Sachkontexten als Geschwindigkeit deuten | K4, K5, **K21 (neu)** |
| (4) Längen von Vektoren und Abstände zwischen Punkten mit Pythagoras berechnen | K10, K11 |
| (5) Vektoren addieren, mit Skalar multiplizieren, auf Kollinearität untersuchen | K7, K8, K9, K12, K13 |
| (6) Eigenschaften geometrischer Figuren mit Vektoren nachweisen | K17, K18, K19, K20 (Skalarprodukt K14–K16 als Ergänzung über den Lehrplan hinaus) |
| (10) geometrische Situationen im Raum mit digitalen Mathematikwerkzeugen untersuchen | **K22 (neu)**, läuft durch mehrere Einheiten |

Prozessbezogen verlangt der Lehrplan neben Argumentieren (Arg-1, 4, 5, 6, 7, 12) und
Operieren auch **Modellieren** (Mod-1, 2, 3, 5, 6: reale Situationen erfassen, Annahmen
treffen, Lösungen auf die Situation beziehen). Mindestens eine Einheit braucht deshalb einen
echten Sachkontext (K21, Geschwindigkeit) und eine Aufgabe, in der die SuS selbst ein
Koordinatensystem in eine reale Situation legen (K3, zum Beispiel Klassenraum oder Kran).

## Weitere Entscheidungen (15.09.2026, nach dem Lehrplan-Abgleich)

- **Einheiten bleiben thematisch getrennt.** Jede Einheit trägt ein Lernziel; eine
  68-Minuten-Stunde kann mehrere Einheiten enthalten. Die Roadmap ordnet also Einheiten, nicht
  Schulstunden. Die Gesamtzahl der UE ist knapp, deshalb keine Füll- oder Doppelinhalte.
- **Skalarprodukt bleibt drin** und wird aus dem späteren Lehrplan-Kapitel vorgezogen
  (K14 bis K16 als eigener Block vor dem Figuren-Nachweis).
- **Schreibweise wie im Buch (Lambacher Schweizer):** Koordinaten $x_1, x_2, x_3$. Blattkopf „Mathe EF".
- **Werkzeug: TI-Nspire CX II-T CAS.** Vektoren im Rechner eingeben, Betrag, Rechnen und
  Skalarprodukt zur Kontrolle. Kein 3D-Bild im Rechner; die räumliche Anschauung liefern die
  interaktiven Stunden.
