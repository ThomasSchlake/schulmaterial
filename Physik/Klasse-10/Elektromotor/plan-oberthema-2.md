# Detailplan Oberthema 2 – Elektromotor: aus Kraft wird Drehung

Feinplanung der nächsten Stunden (zur Abnahme). Baut direkt auf Oberthema 1 auf
(Oersted, Spule, Kraft auf den Leiter – bereits gebaut) und schließt die Motor-Kette ab.
Jede Stunde: ein testbares Lernziel, „Das brauchst du" = nur Wiederholung, feste
Abschnittsfolge wie in Klasse 8/9 (Das brauchst du → Konzept → Vertiefung → Mehr Beispiele
→ Einordnung → Quiz).

## Verhältnis zur bestehenden Elektromotor-Roadmap

Die Roadmap `elektromotor-roadmap.config.js` bleibt als **Übersichtsgrafik** der ganzen Kette
bestehen (Strom · Magnetismus · Vektor → Oersted → Elektromagnet → Kraft auf Leiter →
Leiterschleife → Polwender → Motor). Ihre ersten Bausteine sind bereits als Stunden gebaut:

| Roadmap-Modul | gebaute Stunde |
|---|---|
| Oersted (Strom erzeugt Feld) | Oberthema 1.1 (`Elektromagnetismus/01-oersted`) |
| Elektromagnet / Spule | Oberthema 1.2 (`Elektromagnetismus/02-spule`) |
| Kraft auf Leiter (Lorentz) | Oberthema 1.3 (`Elektromagnetismus/03-leiterkraft`) |

Oberthema 2 baut die **restlichen drei** Module (Leiterschleife → Polwender → Motor) als Stunden.

**Konvention – Korrektur gegenüber der alten `Roadmap.md`:** Die alte Roadmap-Notiz sagte
„Vektorrechnung nicht voraussetzen" und nutzte die **linke** Hand mit Elektronenfluss. Das ist
überholt. Verbindlich (wie in Oberthema 1 gebaut und in `plan-klasse-10.md` festgelegt):

- Vektorrechnung **darf** vorausgesetzt werden (Klasse-9-Baustein).
- Richtungsregeln über die **technische Stromrichtung (+ → −)** und die **rechte Hand**
  (rechte Faust fürs Spulen-/Leiterfeld, Drei-Finger-Regel der rechten Hand für die Kraft),
  durchgängig zu Oberthema 1.3. Der Elektronenfluss (− → +) wird als „das Gegenteil" nur
  erwähnt, um an die Schaltungs-Wiederholung anzuknüpfen.

Vor dem Bau von 2.1 wird die Roadmap-`Roadmap.md` auf diese Konvention nachgezogen (eigener
kleiner Schritt), damit kein Widerspruch stehen bleibt.

---

## Stunde 2.1 – Kraft auf die Leiterschleife (Drehmoment)

**Lernziel:** Ich kann erklären, warum sich eine stromdurchflossene Leiterschleife im Magnetfeld
dreht: Auf ihre beiden Seiten wirken entgegengesetzte Kräfte, die zusammen ein Drehmoment bilden.

**Reihenbezug:** Erste Anwendung der Leiterkraft (1.3) – aus der geraden-Leiter-Kraft wird eine
Drehung. Fundament für den ganzen Motor.

**Abgrenzung:** Noch **kein** Polwender (2.2) – die Schleife bleibt am toten Punkt stehen, und
genau dieses Problem wird hier bewusst sichtbar gemacht, nicht gelöst. Kein Motoraufbau (2.3).

**Didaktische Abschnitte:**
1. **Das brauchst du** (nur Wiederholung): Kraft auf den geraden Leiter und Drei-Finger-Regel
   (1.3), Magnetfeld zwischen zwei Polen (1.2). Kleine Recap-Grafik: gerader Leiter ⊙/⊗ im
   Feld → Kraft nach oben/unten. Kein neuer Merksatz.
2. **Zwei Seiten, zwei Kräfte** (`loopForceLab`): rechteckige Schleife im Feld N→S, Strom fließt
   auf der linken Seite hin, auf der rechten zurück → die zwei Kräfte zeigen in **entgegengesetzte**
   Richtungen. Toggle Stromrichtung (Kräfte kippen mit), Feld ein/aus.
3. **Daraus wird Drehung** (`torqueLab`): dieselbe Schleife, jetzt drehbar gelagert; die beiden
   Kräfte erzeugen ein Drehmoment. Winkel-Slider `#sl-phi`: die Schleife von waagerecht bis
   senkrecht drehen und zusehen, wie das Drehmoment abnimmt.
4. **Der tote Punkt** (`deadpointLab`): in der senkrechten Lage zeigen beide Kräfte nur noch
   „nach außen/innen" – kein Drehmoment mehr. Merksatz: ohne Trick bleibt sie hier stehen (bzw.
   pendelt zurück). Das ist die Frage, die 2.2 beantwortet.
5. **Mehr Beispiele** (reveal-cards): Drehspulmesswerk (Zeiger dreht mit dem Strom),
   Schleife mit mehr Windungen = mehr Drehmoment, warum eine schräge Schleife weiterdreht.
6. **Einordnung:** Brücke – „Wir haben eine Drehung, aber sie stoppt. Nächste Stunde: der
   Polwender hält sie in Gang."
7. **Quiz.**

---

## Stunde 2.2 – Polwender (Kommutator)

**Lernziel:** Ich kann erklären, warum die Leiterschleife ohne Hilfe am toten Punkt stehen bliebe
und wie der Polwender die Stromrichtung jede halbe Umdrehung umkehrt, sodass die Drehung
weiterläuft.

**Reihenbezug:** Der entscheidende Trick, der aus dem „Zappeln" der Schleife (2.1) eine
Dauerdrehung macht – ohne ihn kein Motor.

**Abgrenzung:** Nur der Polwender als Mechanismus. Der **komplette** Motor mit benannten
Bauteilen und Anwendungen kommt in 2.3. Kein Wechselstrom/Generator.

**Didaktische Abschnitte:**
1. **Das brauchst du** (nur Wiederholung): Drehmoment auf die Schleife und der tote Punkt (2.1);
   Stromrichtung bestimmt Kraftrichtung (1.3).
2. **Das Problem** (`stuckLab`): Schleife dreht bis zum toten Punkt und pendelt zurück – ohne
   Umschalten keine volle Drehung. Play-Button zeigt das Hin-und-Her.
3. **Die Idee: Strom umdrehen** (`switchLab`): genau im toten Punkt die Stromrichtung umkehren →
   die Kraft dreht sich mit, die Schleife läuft weiter. Schritt-Button: halbe Drehung, umschalten,
   halbe Drehung.
4. **Der Kommutator** (`commutatorLab`): geteilter Schleifring + Bürsten, der das Umschalten
   **automatisch** jede halbe Umdrehung macht. Animation mit Kontakten, die den Spalt passieren.
   Toggle „mit / ohne Polwender" → direkter Vergleich Dauerdrehung vs. Stehenbleiben.
5. **Mehr Beispiele** (reveal-cards): warum genau am toten Punkt umgeschaltet wird, was bei
   falschem Timing passiert, Bürstenfeuer/Verschleiß als reale Folge.
6. **Einordnung:** Brücke – „Schleife + Feld + Polwender = ein Motor. Nächste Stunde: die
   Bauteile zusammensetzen und benennen."
7. **Quiz.**

---

## Stunde 2.3 – Gleichstrommotor: Aufbau & Anwendung

**Lernziel:** Ich kann die Bauteile eines Gleichstrommotors (Feldmagnet/Stator, Anker/Rotor,
Kommutator, Bürsten) benennen, ihr Zusammenspiel erklären und Alltagsanwendungen begründen.

**Reihenbezug:** Zusammenführung der ganzen Kette – die erste vollständige Energiewandlung der
Reihe: elektrische Energie → Bewegungsenergie. Direkter Gegenpol zum Generator (Oberthema 3/4).

**Abgrenzung:** **Keine** Spannungserzeugung durch Drehung (Induktion/Generator, Oberthema 3–4).
Hier ausschließlich Aufbau, Zusammenspiel und Anwendung des Motors.

**Didaktische Abschnitte:**
1. **Das brauchst du** (nur Wiederholung): Drehmoment auf die Schleife (2.1), Polwender (2.2),
   Elektromagnet als steuerbares Feld (1.2).
2. **Die Bauteile** (`motorPartsLab`): beschriftetes Schnittbild – Stator (Feldmagnet), Rotor
   (Ankerspule), Kommutator, Bürsten. Klick/Tap auf ein Bauteil hebt es hervor und zeigt seine
   Aufgabe.
3. **So arbeitet er** (`motorRunLab`): der laufende Motor als Ganzes; Slider Stromstärke →
   Drehzahl, Toggle Stromrichtung → Drehrichtung kehrt um, Feld ein/aus. Zeigt, dass alles aus
   1.1–2.2 zusammenwirkt.
4. **Anker mit vielen Spulen** (`multiCoilLab`): warum echte Motoren mehrere versetzte Spulen
   haben – gleichmäßigere Drehung, kein Ruckeln, immer Drehmoment (nie ganz am toten Punkt).
5. **Mehr Beispiele** (reveal-cards): Anwendungen (Ventilator, E-Auto, Akkuschrauber, Modellbahn);
   Drehrichtung umkehren durch Umpolen; warum ein Elektromagnet als Feld statt Dauermagnet.
6. **Einordnung:** Reihenbezug – „Motor: Strom → Drehung. Umgekehrt (Drehung → Strom) führt in
   Oberthema 3: Induktion."
7. **Quiz.**

---

## Umsetzung (nach Abnahme)

- Eigener Engine-Bereich `Klasse-10/Elektromotor` mit `_common.js` (erbt `compass`/`wireCross`
  aus Elektromagnetismus, ergänzt Schleifen-/Kommutator-Helfer) und `topics/01-leiterschleife.js`,
  `02-polwender.js`, `03-motor.js`.
- In `build-lessons.mjs` (AREAS) und `smoke.mjs` eintragen, `site.config.mjs` Klasse-10-Menü um
  `fromTopics:'Elektromotor'` erweitern, Menü neu erzeugen.
- Alte `Elektromotor/Roadmap.md` auf die verbindliche Konvention (rechte Hand, technische
  Stromrichtung, Vektoren erlaubt) nachziehen, damit sie nicht der gebauten Reihe widerspricht.
- Verifikation wie gehabt: `node --check`, Build, Smoke (0 Fehler), Browser-Stichprobe der
  Canvas-Labs.
