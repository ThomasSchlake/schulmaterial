# Plan – Einheit 12: Kollinear oder nicht (K12)

Zwölfte Einheit der Reihe. Plan zur Abnahme, danach wird gebaut (Stunde + Arbeitsblatt) wie bei
Einheit 1 bis 11. Grundlagen: [Roadmap.md](Roadmap.md),
[plan-vektorrechnung.md](plan-vektorrechnung.md), Vorgänger
[plan-modul-11-laengen.md](plan-modul-11-laengen.md), inhaltlich vor allem
[plan-modul-07-vielfache.md](plan-modul-07-vielfache.md).

Erste Einheit im Block „Parallelität", dem zweiten der drei Nachweis-Werkzeuge. Einheit 7 hat
gezeigt: $k \cdot \vec a$ ist parallel zu $\vec a$. Jetzt kommt die Umkehrung als Prüfverfahren:
Sind zwei gegebene Vektoren parallel? Dann muss sich ein Faktor $k$ finden lassen, und zwar derselbe
in allen drei Komponenten.

## Lernziel (ein testbares „Ich kann …")

Ich kann prüfen, ob zwei Vektoren **kollinear** sind, indem ich einen als Vielfaches des anderen
schreibe (Faktor $k$ finden oder widerlegen), und das Ergebnis geometrisch deuten: **parallele
Strecken** und **drei Punkte auf einer Geraden**.

Kernidee: **Ein Faktor für alle drei Komponenten.** Aus einer Komponente folgt $k$, die beiden
anderen sind die Probe. Passt $k$ überall, sind die Vektoren kollinear; weicht eine Komponente ab,
nicht. Das Vorzeichen von $k$ sagt, ob die Pfeile gleich oder entgegengesetzt orientiert sind.

## Vorwissen (wird wiederholt, nicht neu)

- Aus Einheit 7: Vielfaches $k \cdot \vec a$ komponentenweise, strecken, stauchen, Orientierung
  umkehren; $k \cdot \vec a$ ist parallel zu $\vec a$.
- Aus Einheit 5: Verbindungsvektor $\vec{AB}$ (Spitze minus Fuß).
- Aus der Sekundarstufe I: einfache Gleichungen wie $-6 = k \cdot 4$ lösen, auch mit Brüchen.

## Aufbau (sechs Schritte)

1. **Das brauchst du** – nur Wiederholung: ein Vielfaches berechnen ($-1{,}5 \cdot \vec a$), die
   Gleichung $k \cdot 4 = -6$ lösen, Verbindungsvektor. Bild umschaltbar ($\vec a$ und ein Vielfaches).
2. **Ein Beispiel** – **Trifft der Laser?** Ein Laser in $A$ zielt durch ein kleines Loch $B$ in
   einer Wand. Der Sensor $C$ lässt sich per Regler verschieben. Der Strahl ist die Gerade durch $A$
   und $B$. Angezeigt werden $\vec{AB}$ und $\vec{AC}$ mit den drei Quotienten
   $c_i : b_i$. Entdeckung: Der Sensor wird genau dann getroffen, wenn in allen drei Komponenten
   derselbe Faktor steht. Der Begriff „kollinear" fällt noch nicht. 3D und Schrägbild umschaltbar;
   im Schrägbild kann ein Punkt auf dem Strahl zu liegen scheinen, obwohl er es nicht tut (die
   Rechnung entscheidet).
3. **Das Konzept** – Name, Prüfverfahren und Deutung, vier Voreinstellungen mit eigenem Bild:
   - **Kollinear:** $\vec b = k \cdot \vec a$ mit einem $k$ in allen Komponenten, auch negativ.
   - **Nicht kollinear:** zwei Komponenten liefern dasselbe $k$, die dritte nicht.
   - **Null in einer Komponente:** $0 = k \cdot 0$ ist immer erfüllt, $k$ kommt aus den anderen;
     die Falle $0 = k \cdot 3$ erzwingt $k = 0$ und widerlegt.
   - **Drei Punkte auf einer Geraden:** $\vec{AC} = k \cdot \vec{AB}$.

   Merkkästen: *Kollinear* (Definition, gleichbedeutend mit parallel); *So prüfst du* (Gleichung
   $\vec b = k \cdot \vec a$ komponentenweise, $k$ aus einer Zeile, Probe in den anderen);
   *Deutung* (Strecken $AB$ und $CD$ parallel, wenn $\vec{AB}$ und $\vec{CD}$ kollinear sind; $A$,
   $B$, $C$ auf einer Geraden, wenn $\vec{AB}$ und $\vec{AC}$ kollinear sind).
4. **Üben** – das Arbeitsblatt, Bild aus der Drohnen-Aufgabe zur Kontrolle, umschaltbar.
5. **Einordnung** – Vorher: Vielfache (Einheit 7). Jetzt: Parallelität prüfen. Danach:
   Parallelogramm und Trapez nachweisen (Einheit 13), wo das Parallelogramm nicht mehr vorgegeben
   wird wie in Einheit 11. Satz zum Reihenziel: Parallelität ist das zweite Nachweis-Werkzeug.
6. **Seid ihr fit?** – ein kollineares Paar mit $k = -2$; ein Paar, das an der dritten Komponente
   scheitert; ein Paar mit Null-Komponenten. Letzte Frage zur Fehlvorstellung: „Aus der ersten
   Komponente folgt $k = 2$, also sind die Vektoren kollinear." (Die Probe fehlt.)

## Arbeitsblatt (Entwurf, NRW-Operatoren, Lösungen auf einer eigenen letzten Seite)

1. **Kollinear?** Vier Vektorpaare, darunter Faktoren wie $-1{,}5$ und $\tfrac13$, eins nicht
   kollinear. *Untersuche, ob die Vektoren kollinear sind. Gib gegebenenfalls den Faktor an.*
   Stufe (a).
2. **Null-Komponenten.** Drei Paare mit Nullen, eins davon mit der Falle $0 = k \cdot 3$.
   *Untersuche …* Stufe (b).
3. **Drei Punkte.** Zwei Punkt-Tripel. *Untersuche, ob die Punkte auf einer Geraden liegen.*
   Stufe (b).
4. **Parallele Strecken.** Zwei Streckenpaare. *Untersuche, ob die Strecken $AB$ und $CD$ parallel
   sind.* Stufe (b).
5. **Fehlende Komponenten.** *Bestimme $a$ und $b$ so, dass $\vec u = (2; a; -3)$ und
   $\vec v = (-4; 6; b)$ kollinear sind.* Stufe (b).
6. **Fliegt die Drohne durch den Ring?** Drohne startet in $S$ mit Geschwindigkeit $\vec v$
   (Rückgriff auf Einheit 9), ein Ring hängt im Punkt $R$. *Untersuche, ob die Drohne durch den Ring
   fliegt, und gib gegebenenfalls den Zeitpunkt an.* Zweiter Ring, der nur im Schrägbild auf der Bahn
   zu liegen scheint. Stufe (c).
7. **Sprinter: parallel oder auf einer Geraden?** Tim: „$\vec{AB}$ und $\vec{CD}$ sind kollinear,
   also liegen $A$, $B$, $C$ und $D$ auf einer Geraden." *Beurteile Tims Aussage* an einem Beispiel,
   in dem die Strecken parallel sind, aber nebeneinander liegen. Stufe (c).

## Festgelegte Regeln, die hier gelten

- „Das brauchst du" nur Wiederholung; „kollinear" erst im Konzept.
- 3D überall umschaltbar, auch in „Das brauchst du" und „Üben"; Zeichenreihenfolge Punkt, Pfeil,
  Beschriftung; keine Bedien-Hinweise.
- Vektoren mit Pfeil, Punkte ohne; Beschriftungen wie $k \cdot \vec a$ mit Pfeil nur über dem Vektor.
- Beispiel auf dem Blatt und Startwerte der Stunde nie mit den Zahlen einer Aufgabe.
- Blatt schwarz-weiß, NRW-Operatoren, jede Teilaufgabe der Lösungen auf eigener Zeile, Lösungen auf
  einer Seite, kein Umbruch in Aufgaben.
- Vor dem Bauen alle Bildpunkte und Richtungen nachrechnen (keine Achse, keine Richtung wie die
  $x_1$-Achse, keine Kante durch eine Skalenbeschriftung). Ausnahme mit Absicht: der „Scheintreffer"
  in Aufgabe 6 und im Beispiel, bei dem ein Punkt im Schrägbild auf der Geraden liegt, im Raum aber
  nicht.

## Neue technische Bausteine

- Stunde: Laserstrahl als Gerade über den Bildrand hinaus (Strahl ab $A$), Loch in einer
  halbtransparenten Wand, Sensor als Punkt; Quotienten-Anzeige mit Häkchen je Komponente.
- Helfer, der zu $\vec a$ und $\vec b$ das $k$ je Komponente bestimmt (Null-Fälle eingeschlossen) und
  „kollinear mit $k = …$" oder „nicht kollinear, weil …" liefert. Wird in Einheit 13 wieder gebraucht.

## Entscheidungen (23.09.2026)

Alle vier Vorschläge angenommen: Laser-Beispiel, Prüfverfahren über die Gleichung, Nullvektor
ausgeklammert, Sprinter „parallel oder auf einer Geraden".

## Ursprünglich offene Entscheidungen

1. **Beispiel „Trifft der Laser?"** – Vorschlag: ja. Ein Laserstrahl ist wirklich gerade, und die
   Frage „liegt $C$ auf der Linie?" ist ohne Rechnung im Schrägbild nicht sicher zu beantworten.
   Alternative: Bäume oder Masten in einer Reihe (flacher, weniger 3D).
2. **Prüfverfahren über die Gleichung** $\vec b = k \cdot \vec a$ (k aus einer Zeile, Probe in den
   anderen) statt „Quotienten vergleichen". Vorschlag: Gleichung, weil Quotienten bei
   Null-Komponenten versagen; die Quotienten erscheinen nur im Beispiel als Entdeckungshilfe.
3. **Nullvektor ausklammern.** Er ist formal zu jedem Vektor kollinear, kommt in Figuren aber nicht
   vor. Vorschlag: nicht thematisieren.
4. **Parallel oder auf einer Geraden** (Sprinter) – Vorschlag: ja; es bereitet vor, dass im Trapez
   und Parallelogramm (Einheit 13) die Seiten parallel, aber nicht auf einer Geraden liegen müssen.
