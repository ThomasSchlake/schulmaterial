# Detailplan Oberthema 4 – Generator: Induktion erzeugt Wechselspannung

Feinplanung der Stunden (zur Abnahme), analog zu OT2/OT3. Baut direkt auf Oberthema 3
(Induktion, Motor = Generator umgekehrt) auf und bereitet den Transformator (OT5) und die
Energieversorgung (OT6) vor. Jede Stunde: ein testbares Lernziel, „Das brauchst du" = nur
Wiederholung, feste Abschnittsfolge (Das brauchst du → Konzept → Vertiefung → Mehr Beispiele →
Einordnung → Quiz).

## Reihenbezug (übergeordnet)

Die Induktion (OT3) hat gezeigt: Dreht man eine Spule im Feld, entsteht eine Spannung. Der
Generator macht daraus technisch nutzbaren Strom. Beim gleichmäßigen Drehen wechselt die Spannung
fortlaufend die Richtung – das ist die **Wechselspannung**, die aus jeder Steckdose kommt. Der
Generator ist der Anfang der Energiekette im Kraftwerk und die Voraussetzung für den Transformator
(der nur Wechselspannung überträgt).

## Umfang: 4 Stunden statt 3 (begründete Abweichung)

Die Übersichtstabelle in `plan-klasse-10.md` nennt drei Stunden, legt aber Sinus-Form,
Gleich-/Wechsel-Unterscheidung und die neuen Größen Periode/Frequenz/50 Hz in eine Stunde
(„Wechselstrom lesen"). Das neue Vokabular (T, f, Hz, f = 1/T) ist ein eigenes prüfbares Lernziel.
Nach Regel 1 („ein Lernziel pro Stunde") und Regel 5 („Stundenzahl nach Bedarf"):

- 4.1 Vom Generator zur Wechselspannung (warum die Spannung kippt)
- 4.2 Wechselspannung als Kurve (Sinus-Verlauf; Gleich- vs. Wechselspannung)
- 4.3 Periode und Frequenz (T, f, 50 Hz)
- 4.4 Generatoren im Kraftwerk

## Festgelegte Konventionen (durchgängig zu OT 1–3)

- **Qualitativ.** Keine Effektivwert-Rechnung, keine Formel für die Induktionsspannung. Die einzige
  Rechnung ist der einfache Zusammenhang **f = 1/T** in 4.3.
- **Zeiger-Messgerät** und die **U-t-Kurve** als Darstellungen; Anschluss an das Kurvenlesen aus
  Klasse 9 (t-Achse, Ablesen von Werten).
- **Elektronenfluss** (Minus → Plus) bzw. **technische Stromrichtung** für Regeln wie bisher; hier
  aber überwiegend die Spannung als Ganzes (Vorzeichen = Richtung), nicht einzelne Handregeln.

## Abgrenzung des Oberthemas

Hier: **Erzeugung** der Wechselspannung, ihre **Kurvenform**, **Periode/Frequenz** und die
Einordnung, dass alle Kraftwerke denselben Generator antreiben. **Nicht** hier: das
**Hoch-/Heruntertransformieren** und die verlustarme Übertragung (OT5); die vollständige
**Kraftwerk-→-Haushalt-Bilanz mit Wirkungsgrad** (OT6); **Effektivwerte** und Leistungsrechnung.

---

## Stunde 4.1 – Vom Generator zur Wechselspannung

**Lernziel:** Ich kann erklären, warum die sich drehende Spule eine Spannung liefert, die bei jeder
halben Drehung die Richtung wechselt.

**Reihenbezug:** Macht aus der Induktion (OT3) fortlaufend nutzbare Spannung – der erste Schritt zur
technischen Stromerzeugung.

**Abgrenzung:** Noch **keine** Kurvendarstellung (4.2) und **keine** Periode/Frequenz (4.3). Hier
nur: Warum entsteht beim Drehen eine Spannung, die ständig **die Richtung wechselt**, und wann ist
sie groß bzw. null.

**Didaktische Abschnitte:**
1. **Das brauchst du** (nur Wiederholung): Drehung erzeugt Spannung, weil sich der Feldlinien-
   Durchsatz ändert (3.4); die Größe hängt vom Tempo ab (3.2). Recap-Grafik: drehende Spule +
   Zeiger.
2. **Die Spannung kippt** (`genFlipLab`): drehende Spule mit Messgerät; der Zeiger schlägt nach
   rechts, geht durch null, schlägt nach links – jede **halbe Umdrehung** kehrt sich die Polung um.
   Anzeige der + / − Anschlüsse, die tauschen.
3. **Wann groß, wann null** (`genPhaseLab`): Verknüpfung mit dem Durchsatz aus 3.4. Steht die Spule
   **breit** im Feld (Durchsatz maximal), ändert er sich gerade nicht → Spannung **null**; steht
   sie **hochkant** (Durchsatz ändert sich am schnellsten) → Spannung **maximal**. Winkel-Anzeige
   und Zeiger zusammen.
4. **Mehr Beispiele** (reveal-cards): schneller drehen (größerer Ausschlag, öfter Wechsel); Drehung
   umkehren (Polung startet andersherum); genau eine halbe Drehung (ein Vorzeichenwechsel).
5. **Einordnung:** Brücke – „Dieses ständige Hin und Her zeichnet man als **Kurve**. Wie sieht sie
   aus?" → 4.2.
6. **Quiz.**

---

## Stunde 4.2 – Wechselspannung als Kurve

**Lernziel:** Ich kann den Sinus-Verlauf einer Wechselspannung beschreiben und Gleichspannung von
Wechselspannung unterscheiden.

**Reihenbezug:** Die Darstellung, mit der man Wechselspannung überhaupt liest – Grundlage für
Periode/Frequenz (4.3) und für das Verständnis, was am Trafo (OT5) übertragen wird.

**Abgrenzung:** Nur **Kurvenform** und **Gleich/Wechsel**. **Keine** Periode/Frequenz-Größen (4.3),
keine Effektivwerte.

**Didaktische Abschnitte:**
1. **Das brauchst du** (nur Wiederholung): Die Spannung wechselt jede halbe Drehung die Richtung
   (4.1); einen Graphen mit t-Achse lesen und Werte ablesen (Kl 9).
2. **Die Spannung als Kurve** (`curveLab`): die drehende Spule „schreibt" ihren Zeigerwert über der
   Zeit mit – es entsteht eine **Sinuskurve**. Nulldurchgänge (Spule breit) und Maxima (Spule
   hochkant) benennen; Kurve und Drehung laufen synchron.
3. **Gleich oder Wechsel** (`dcacLab`): Vergleich – **Gleichspannung** (Batterie) ist eine
   waagerechte Linie, immer dieselbe Richtung; **Wechselspannung** (Generator/Steckdose) ist die
   Sinuskurve, die ständig das Vorzeichen wechselt. Umschalter Batterie/Generator.
4. **Mehr Beispiele** (reveal-cards): Batterie vs. Steckdose; warum eine LED an Wechselspannung nur
   in einer Hälfte leuchtet; warum eine Glühlampe trotz Wechsel nicht flackert; woran man im
   Diagramm Gleich/Wechsel erkennt.
5. **Einordnung:** Brücke – „Eine Kurve, die sich wiederholt. Wie **oft** pro Sekunde? Das führt zu
   Periode und Frequenz." → 4.3.
6. **Quiz.**

---

## Stunde 4.3 – Periode und Frequenz

**Lernziel:** Ich kann Periodendauer und Frequenz einer Wechselspannung bestimmen (f = 1/T) und die
Netzfrequenz 50 Hz einordnen.

**Reihenbezug:** Macht die Wechselspannung messbar/vergleichbar; 50 Hz ist die Kenngröße des
Stromnetzes, das OT5/OT6 versorgen.

**Abgrenzung:** Nur **T, f und 50 Hz** mit dem Zusammenhang f = 1/T. **Keine** Effektivwerte, keine
Kreisfrequenz, keine Phasenrechnung.

**Didaktische Abschnitte:**
1. **Das brauchst du** (nur Wiederholung): Wechselspannung als sich wiederholende **Sinuskurve**
   (4.2); Zeit auf der t-Achse ablesen (Kl 9).
2. **Eine volle Schwingung** (`periodLab`): eine **Periode** T = die Zeit für **eine volle
   Umdrehung** (eine komplette Auf-und-Ab-Wechsel-Kurve). T auf der Kurve markieren; Drehzahl-Regler
   macht T kürzer oder länger.
3. **Frequenz und 50 Hz** (`freqLab`): **Frequenz** f = Anzahl der Perioden pro Sekunde,
   **f = 1/T**, Einheit **Hertz (Hz)**. Das Netz hat **50 Hz** – 50 volle Schwingungen je Sekunde.
   Regler zeigt, wie mehr Drehungen/Sekunde die Frequenz erhöhen.
4. **Mehr Beispiele** (reveal-cards): T = 0,02 s → f = 50 Hz; schnellerer Generator = höhere
   Frequenz; warum das Netz eine feste Frequenz braucht; T und f sind Kehrwerte.
5. **Einordnung:** Brücke – „Diese Wechselspannung erzeugt im Kraftwerk ein großer Generator. Was
   treibt ihn an?" → 4.4.
6. **Quiz.**

---

## Stunde 4.4 – Generatoren im Kraftwerk

**Lernziel:** Ich kann erklären, dass Kraftwerke im Kern denselben Generator antreiben und sich nur
in der Antriebsenergie (Wasser, Dampf, Wind) unterscheiden.

**Reihenbezug:** Ordnet den Generator in die reale Energieerzeugung ein und schließt OT4; die
erzeugte Wechselspannung wird in OT5 (Transformator) übertragbar gemacht.

**Abgrenzung:** Nur der **gemeinsame Kern** (Turbine → Generator → Wechselspannung) und die
verschiedenen Antriebe. **Keine** Wirkungsgrad-/Energiebilanz (OT6), **keine** Übertragung/
Transformation (OT5).

**Didaktische Abschnitte:**
1. **Das brauchst du** (nur Wiederholung): Der Generator erzeugt beim Drehen Wechselspannung
   (4.1–4.3); er muss **angetrieben** werden, sonst bremst ihn die Induktion (Lenz, 3.3/3.4).
2. **Immer derselbe Generator** (`plantLab`): Umschalter für den Antrieb – **Wasser** (Turbine im
   Fluss/Stausee), **Dampf** (Kohle/Gas/Kernkraft erhitzen Wasser), **Wind** (Rotor). In allen
   Fällen treibt die Turbine **denselben** Generator, hinten kommt Wechselspannung heraus.
3. **Nur der Antrieb ist anders** (`chainLab`): Energiekette als Diagramm –
   Antriebsenergie → Turbine → Generator → elektrische (Wechsel-)Energie. Nur der erste Pfeil
   unterscheidet die Kraftwerkstypen.
4. **Mehr Beispiele** (reveal-cards): Wasserkraft, Kohle/Gas und Kernkraft (alle über **Dampf**),
   Windkraft; was allen gemeinsam ist; die **Ausnahme Solarzelle** (Photovoltaik erzeugt Strom
   **ohne** Generator und ohne Induktion – direkt aus Licht).
5. **Einordnung:** Brücke – „Der Generator liefert die Spannung. Damit sie verlustarm über weite
   Strecken zum Haushalt kommt, muss sie **hoch- und heruntergesetzt** werden – der
   **Transformator** (Oberthema 5)."
6. **Quiz.**

---

## Umsetzung (nach Abnahme)

- Neuer Engine-Bereich `Klasse-10/Generator` mit eigenem `_common.js` (drehende Spule im Feld,
  U-t-Kurven-Plotter, Kraftwerks-/Antriebs-Symbole) und `topics/01-…` bis `04-…`
  (wechselspannung, kurve, frequenz, kraftwerk).
- In `build-lessons.mjs` (AREAS) und `smoke.mjs` eintragen; `site.config.mjs` Klasse-10 um eine
  Gruppe „Generator" (`fromTopics: 'Generator'`) erweitern; Menü neu erzeugen.
- Verifikation wie gehabt: `node --check`, Build, Smoke (0 Fehler), Browser-Stichprobe (Zeiger
  wechselt das Vorzeichen; Kurve synchron zur Drehung; T/f-Regler konsistent; Antrieb-Umschalter
  ändert nur den Antrieb, nicht den Generator).
- `plan-klasse-10.md`: OT4-Tabelle auf die vier Stunden nachziehen (Hinweis auf die Aufteilung
  Kurve/Frequenz).
