# Plan – Einheit 9: Geschwindigkeit als Vektor (K21)

Neunte Einheit der Reihe. Plan zur Abnahme, danach wird gebaut (Stunde + Arbeitsblatt) wie bei
Einheit 1 bis 8. Grundlagen: [Roadmap.md](Roadmap.md),
[plan-vektorrechnung.md](plan-vektorrechnung.md), Vorgänger
[plan-modul-08-vektorketten.md](plan-modul-08-vektorketten.md).

Diese Einheit trägt den Sachkontext der Reihe. Der schulinterne Lehrplan verlangt, Vektoren in
Sachkontexten als Geschwindigkeit zu deuten (Erwartung 3), und prozessbezogen **Modellieren**:
eine reale Situation erfassen, Annahmen treffen, das Ergebnis auf die Situation zurückbeziehen.

## Lernziel (ein testbares „Ich kann …")

Ich kann einen Vektor als **Geschwindigkeit** deuten (Komponenten = Meter pro Sekunde in
$x_1$-, $x_2$- und $x_3$-Richtung), die **Position nach $t$ Sekunden** mit
$\vec p(t) = \vec p_0 + t \cdot \vec v$ berechnen und umgekehrt den **Zeitpunkt** bestimmen, zu dem
eine Koordinate einen bestimmten Wert erreicht (etwa eine Höhe).

Kernidee: In Einheit 7 flog die Drohne dieselbe Verschiebung mehrmals hintereinander. Ist $\vec v$
die Verschiebung **pro Sekunde**, dann ist sie nach $t$ Sekunden $t$-mal so weit gekommen, auch für
halbe Sekunden. Die Position ist eine Vektorkette aus Einheit 8: Start plus $t \cdot \vec v$.

## Vorwissen (wird wiederholt, nicht neu)

- Aus der Physik der Sekundarstufe I: Weg = Geschwindigkeit · Zeit, Einheit m/s.
- Aus Einheit 7: Vielfaches $k \cdot \vec v$.
- Aus Einheit 8: Vektorkette, Punkt = bekannter Punkt + Verschiebung.

## Aufbau (sechs Schritte)

1. **Das brauchst du** – nur Wiederholung: Weg = Geschwindigkeit · Zeit (ein Auto mit 20 m/s ist
   nach 3 s 60 m weit); Vielfaches $3 \cdot \vec v$; Punkt plus Vektor. Bild umschaltbar.
2. **Ein Beispiel** – Eine Drohne startet in $S$ und legt **jede Sekunde dieselbe Verschiebung**
   $\vec v$ zurück. Regler für die Zeit $t$ (in halben Sekunden) und für $\vec v$. Im Bild: die
   Flugbahn als Spur mit einem Punkt für jede volle Sekunde, die aktuelle Position, dazu der Pfeil
   $t \cdot \vec v$ ab $S$. Entdeckung: Die Positionen nach 1, 2, 3 s liegen gleichmäßig auf einer
   Linie, und nach $t$ Sekunden ist man bei „Start plus $t$-mal $\vec v$". Auch nach 2,5 s. Die
   Begriffe „Geschwindigkeitsvektor" und $\vec p(t)$ fallen hier noch nicht.
3. **Das Konzept** – Name und Formel, drei Voreinstellungen mit je eigenem Bild:
   - **Position zu einer Zeit:** $\vec p(t) = \vec p_0 + t \cdot \vec v$, Zeit per Regler.
   - **Zeitpunkt zu einer Höhe:** Wann ist die Drohne 12 m hoch? Nur die $x_3$-Komponente
     betrachten: $p_{0,3} + t \cdot v_3 = 12$, nach $t$ auflösen.
   - **Sinkflug und Landung:** negative $x_3$-Komponente, die Drohne sinkt; Landung bei $x_3 = 0$.
   Merkkästen: *Geschwindigkeitsvektor* (Komponenten in m/s, jede Richtung einzeln);
   *Position nach $t$ Sekunden*; *Zeitpunkt aus einer Koordinate*.
4. **Üben** – das Arbeitsblatt, Bild aus Aufgabe 1 zur Kontrolle, umschaltbar.
5. **Einordnung** – Vorher: Vielfache und Vektorketten (Einheit 7 und 8). Jetzt: Bewegung mit
   konstanter Geschwindigkeit. Danach: Wie schnell die Drohne **insgesamt** ist, also die Länge
   von $\vec v$, kommt in Einheit 10 (Betrag). Modell-Hinweis: Das Modell nimmt an, dass die
   Geschwindigkeit konstant und die Bahn gerade ist.
6. **Seid ihr fit?** – Position nach 4 s; welche Komponente sagt, ob die Drohne steigt oder sinkt;
   Zeitpunkt für eine Höhe. Letzte Frage zur typischen Fehlvorstellung: „Nach $t$ Sekunden ist die
   Drohne bei $t \cdot \vec v$." (Falsch, der Start $\vec p_0$ fehlt – wie beim Mittelpunkt in
   Einheit 8.)

## Arbeitsblatt (Entwurf, NRW-Operatoren, Lösungen auf einer eigenen letzten Seite)

Einheiten überall: Koordinaten in Metern, Zeit in Sekunden, Geschwindigkeit in m/s.

1. **Position berechnen.** Drohne mit Start $S$ und $\vec v$, dazu ein Schrägbild der Bahn.
   *Bestimme die Position nach 2 s, nach 5 s und nach 0,5 s.* Stufe (a).
2. **Geschwindigkeit deuten.** $\vec v$ mit gemischten Vorzeichen und einer Kommazahl.
   *Beschreibe die Bewegung in Worten* (nach vorn/hinten, rechts/links, steigt/sinkt, jeweils wie
   viel pro Sekunde). Stufe (a).
3. **Zeitpunkt bestimmen.** *Bestimme, wann die Drohne 30 m hoch ist*, und *gib ihre Position zu
   diesem Zeitpunkt an.* Stufe (b).
4. **Geschwindigkeit aus zwei Positionen.** Position beim Start und nach 4 s gegeben, konstante
   Geschwindigkeit. *Bestimme $\vec v$.* (Verbindungsvektor geteilt durch die Zeit.) Stufe (b).
5. **Landung.** Eine Drohne sinkt ($v_3 < 0$). a) *Bestimme den Zeitpunkt der Landung.*
   b) *Bestimme den Landepunkt.* Stufe (b).
6. **Flugzeug – Modell prüfen.** Ein Flugzeug steigt nach dem Start mit konstantem $\vec v$.
   a) *Bestimme die Höhe nach einer Minute.* b) *Beurteile, ob das Modell auch für die nächste
   Stunde taugt.* (Annahmen: gerade Bahn, konstante Geschwindigkeit; ein Flugzeug steigt nicht
   unbegrenzt.) Modellieren, Stufe (b).
7. **Sprinter.** Zwei Drohnen mit eigenem Start und eigener Geschwindigkeit. *Untersuche, ob sie
   zusammenstoßen.* (Zu welcher Zeit wäre eine Koordinate gleich, und passen die anderen dazu?)

## Festgelegte Regeln, die hier gelten

- „Das brauchst du" nur Wiederholung; kein Begriff vor seinem Beispiel.
- 3D überall umschaltbar, auch in „Das brauchst du" und „Üben"; Zeichenreihenfolge Punkt, Pfeil,
  Beschriftung; keine Bedien-Hinweise.
- Vektoren mit Pfeil, Punkte ohne, Vektoren als Spalte; Pfeil in Beschriftungen nur über dem
  Vektor ($t \cdot \vec v$).
- Beispiel auf dem Blatt und Startwerte der Stunde nie mit den Zahlen einer Aufgabe; nur „Üben"
  zeigt bewusst das Bild von Aufgabe 1.
- Blatt schwarz-weiß, NRW-Operatoren, jede Teilaufgabe der Lösungen auf eigener Zeile, Lösungen auf
  einer Seite, kein Umbruch in Aufgaben, Hilfslinien bei Punkten zum Ablesen.
- Vor dem Bauen alle Bildpunkte (auch Spurpunkte) nachrechnen: keiner auf einer Achse, keine
  Richtung, die wie die Verlängerung der $x_1$-Achse aussieht.

## Neue technische Bausteine

- Stunde: Spur der Flugbahn (Punkte zu vollen Sekunden, dünne Linie), Zeitregler in halben Sekunden
  mit Anzeige „t = 2,5 s". Sonst vorhandene Helfer (`statisch`, `vlbl`, `av`, Presets).
- Blatt: vorhandene Makros; Spurpunkte mit kleinen Marken.

## Entscheidungen (23.09.2026)

Alle drei Vorschläge angenommen: Zusammenstoß nur als Sprinter (ohne Geraden-Begriff), Tempo
(Betrag) nur als Ausblick, Drohne im Beispiel und Flugzeug auf dem Blatt.

## Ursprünglich offene Entscheidungen

1. **Zusammenstoß nur als Sprinter?** Die Frage „Wann sind zwei Drohnen am selben Ort?" ist
   Modellieren pur, grenzt aber an Geraden und Punktprobe, die die Reihe ausdrücklich ausschließt.
   Vorschlag: nur als Sprinter, ohne Geraden-Begriff, rein über „gleiche Zeit, gleiche Koordinaten".
2. **Tempo (Betrag) weglassen?** „Wie schnell ist die Drohne insgesamt?" braucht die Länge von
   $\vec v$ (Einheit 10). Vorschlag: weglassen und in der Einordnung als Ausblick nennen.
3. **Kontexte:** Drohne im Beispiel (setzt die Drohne aus Einheit 6 bis 8 fort), Flugzeug auf dem
   Blatt für die Modellkritik. Vorschlag: so.
