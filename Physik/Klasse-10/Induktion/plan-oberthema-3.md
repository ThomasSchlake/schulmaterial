# Detailplan Oberthema 3 – Induktion: Bewegung erzeugt Spannung

Feinplanung der Stunden (zur Abnahme), analog zum Detailplan Oberthema 2. Baut direkt auf
Oberthema 1 (Spule/Magnetfeld) und Oberthema 2 (Motorprinzip) auf und bereitet Generator (OT4)
und Transformator (OT5) vor. Jede Stunde: ein testbares Lernziel, „Das brauchst du" = nur
Wiederholung, feste Abschnittsfolge (Das brauchst du → Konzept → Vertiefung → Mehr Beispiele →
Einordnung → Quiz).

## Reihenbezug (übergeordnet)

Der Motor macht aus Strom eine Drehung. Die Induktion ist die **Umkehrung**: Eine Änderung des
Magnetfelds erzeugt eine Spannung. Das ist die Kernidee der ganzen Energieerzeugung – ohne sie
kein Generator (OT4) und kein Transformator (OT5). In der Klasse-10-Roadmap ist `induktion` der
Knoten nach `elektromagnet`, mit „Bewegung im Magnetfeld erzeugt Spannung / Induktionsgesetz
qualitativ / Umkehrung des Motors".

## Umfang: 4 Stunden statt 3 (begründete Abweichung)

Die Übersichtstabelle in `plan-klasse-10.md` nennt für OT3 drei Stunden, legt aber **Größe** der
Induktionsspannung und **Richtung** (Lenzsche Regel) in eine Stunde. Das sind zwei getrennte,
je eigenständig prüfbare Lernziele. Nach der Anti-Disaster-Regel „ein Lernziel pro Stunde"
(Regel 1) und „Stundenzahl nach Bedarf" (Regel 5) wird das getrennt:

- 3.1 Induktion entdecken (Änderung → Spannung, ja/nein)
- 3.2 Wovon hängt die **Größe** ab? (schneller, stärker, mehr Windungen)
- 3.3 In welche **Richtung**? – Lenzsche Regel
- 3.4 Motor = Generator umgekehrt

## Festgelegte Konventionen (durchgängig zu OT 1/2)

- **Qualitativ.** Kein Induktionsgesetz als Formel, keine Fläche/Flussdichte, keine Zahlenrechnung.
  Gemessen wird mit einem **Zeiger-Messgerät** (Spannung/Ausschlag), nicht mit Werten.
- **Elektronenfluss** (Minus → Plus) wie in der Schaltungs-Wiederholung; für den **Spulenpol**
  (welche Seite N/S wird) die **rechte-Faust-Regel mit technischer Stromrichtung** (+ → −),
  konsistent zu 1.2.
- **Lenz** wird als Merksatz geführt: „Der Induktionsstrom wirkt seiner Ursache **entgegen**."
  Begründung über Energieerhaltung (man muss Arbeit hineinstecken), nicht über Vorzeichen.

## Abgrenzung des Oberthemas

Hier wird geklärt **wann, wie stark und in welche Richtung** eine Spannung induziert wird und
dass der Generator der umgekehrte Motor ist. **Nicht** hier: die technische **Wechselspannungs-
Kurve** (Sinus, Periode, 50 Hz) und der Kraftwerksgenerator – das ist OT4. **Nicht** hier:
Hoch-/Heruntertransformieren – das ist OT5.

---

## Stunde 3.1 – Induktion entdecken

**Lernziel:** Ich kann beschreiben, dass die Bewegung eines Magneten in eine Spule (oder aus ihr
heraus) eine Spannung erzeugt – und dass ohne Änderung keine Spannung entsteht.

**Reihenbezug:** Die Umkehrung des Motors und der Einstieg in die Stromerzeugung.

**Abgrenzung:** Noch **keine** Abhängigkeiten der Größe (3.2) und **keine** Richtungsregel (3.3).
Nur die Grundbeobachtung: Änderung ja/nein → Spannung ja/nein.

**Didaktische Abschnitte:**
1. **Das brauchst du** (nur Wiederholung): Eine Spule wird von einem Magnetfeld durchsetzt; ein
   Magnet hat Feldlinien (Kl 6); Spannung ist der „Antrieb" für Strom, ein Voltmeter zeigt sie
   an (Kl 9). Recap-Grafik: Spule, Magnet daneben in Ruhe, Messgerät auf null.
2. **Der Versuch** (`induceLab`): Magnet in die Spule hinein und wieder heraus bewegen –
   der Zeiger des Messgeräts schlägt aus, und zwar bei „hinein" und „heraus" in **entgegengesetzte**
   Richtungen. Hält man den Magneten still, steht der Zeiger auf null. Play-/Zieh-Bedienung; der
   Zeigerausschlag folgt der Bewegung.
3. **Die Änderung zählt** (`changeLab`): Sichtbar machen, dass nicht das Feld selbst, sondern
   seine **Änderung** die Spannung erzeugt. Magnet ruht mitten in der Spule → viele Feldlinien,
   aber konstant → kein Ausschlag. Erst Bewegung ändert die Zahl der Feldlinien durch die Spule.
   Merksatz.
4. **Mehr Beispiele** (reveal-cards): Magnet still in der Spule (kein Ausschlag); Spule statt
   Magnet bewegen (geht auch – es zählt die relative Bewegung); Magnet schneller/langsamer;
   Magnet nur davor wackeln lassen.
5. **Einordnung:** Brücke – „Eine Änderung erzeugt Spannung. Aber **wie stark**? Das klärt die
   nächste Stunde."
6. **Quiz.**

---

## Stunde 3.2 – Wovon hängt die Größe ab?

**Lernziel:** Ich kann qualitativ angeben, dass eine **schnellere** Feldänderung, ein **stärkeres**
Feld und **mehr Windungen** die Induktionsspannung vergrößern.

**Reihenbezug:** Macht die Induktion steuerbar – die Grundlage dafür, dass ein Generator nutzbare
Spannung liefert.

**Abgrenzung:** Nur die **Größe**, nicht die **Richtung** (3.3). Rein qualitativ, keine Formel,
keine Zahlenwerte.

**Didaktische Abschnitte:**
1. **Das brauchst du** (nur Wiederholung): Induktion = eine **Änderung** erzeugt Spannung (3.1);
   eine Spule hat **Windungen**, mehr Windungen = stärkere Wirkung (1.2).
2. **Schneller ändern** (`speedLab`): denselben Magneten langsam und schnell durch die Spule
   bewegen; Geschwindigkeits-Regler → der Zeigerausschlag wächst mit dem Tempo.
3. **Stärker und mehr Windungen** (`factorsLab`): zwei Regler – Feldstärke (stärkerer Magnet) und
   Windungszahl – beide vergrößern den Ausschlag. Direkt vergleichbar nebeneinander.
4. **Mehr Beispiele** (reveal-cards): Fahrraddynamo – schneller treten = hellere Lampe; warum
   Messspulen viele Windungen haben; ruckartiges vs. langsames Einführen; doppelt so schnell ≈
   doppelter Ausschlag.
5. **Einordnung:** Brücke – „Die Größe ist geklärt. Aber in **welche Richtung** fließt der
   induzierte Strom? Das beantwortet die Lenzsche Regel."
6. **Quiz.**

---

## Stunde 3.3 – In welche Richtung? Die Lenzsche Regel

**Lernziel:** Ich kann mit der Lenzschen Regel die Richtung des Induktionsstroms bestimmen: Er ist
so gerichtet, dass er seiner **Ursache entgegenwirkt**.

**Reihenbezug:** Erklärt, warum Induktion immer „bremst" – die physikalische Grundlage der
Energieerhaltung bei Generator und Wirbelstrombremse.

**Abgrenzung:** Qualitativ über die Pol-Regel (rechte Faust) und Energie; **keine** Vorzeichen-
Rechnung, **keine** Kurve.

**Didaktische Abschnitte:**
1. **Das brauchst du** (nur Wiederholung): Fließt Strom durch eine Spule, wird sie zum
   Elektromagneten mit N- und S-Pol; die Seite bestimmt man mit der rechten Faust (technische
   Stromrichtung) (1.2). Induktion durch Änderung (3.1).
2. **Die Spule wehrt sich** (`lenzApproachLab`): Nähert man den Nordpol, wird die zugewandte
   Spulenseite selbst zum **Nordpol** und **stößt ab** (bremst die Annäherung). Zieht man den
   Magneten weg, wird sie zum **Südpol** und **zieht an** (bremst das Wegziehen). Kraftpfeil zeigt
   stets **gegen** die Bewegung.
3. **Die Regel** (`lenzRuleLab`): Umschalter Annähern/Wegziehen und Magnetpol; angezeigt werden
   Induktionsstromrichtung in der Spule und der entstehende Spulenpol. Merksatz: „Der
   Induktionsstrom wirkt seiner Ursache entgegen."
4. **Mehr Beispiele** (reveal-cards): Magnet fällt langsam durch ein Kupferrohr (Wirbelströme);
   Wirbelstrombremse an Bahn/Achterbahn; warum man **Arbeit** hineinstecken muss (sonst
   Perpetuum mobile); was passiert, wenn die Bewegung stoppt.
5. **Einordnung:** Brücke – „Größe und Richtung sind geklärt. Wenn man die Bewegung nun
   **fortlaufend** macht (drehen), erhält man einen Generator – den umgekehrten Motor."
6. **Quiz.**

---

## Stunde 3.4 – Motor = Generator umgekehrt

**Lernziel:** Ich kann erklären, dass derselbe Aufbau als Motor (Strom → Drehung) und als
Generator (Drehung → Spannung) arbeitet.

**Reihenbezug:** Schließt OT3 und ist die direkte Brücke zum Generator (OT4): der gedrehte Motor
liefert Spannung.

**Abgrenzung:** Noch **keine** Wechselspannungs-Kurve, keine Frequenz/50 Hz (OT4, 4.2). Nur die
Umkehr-Idee und dass beim Drehen überhaupt Spannung entsteht.

**Didaktische Abschnitte:**
1. **Das brauchst du** (nur Wiederholung): Motor – Strom erzeugt Drehung (2.3); Induktion – eine
   Änderung erzeugt Spannung (3.1); Lenz – die Induktion wirkt entgegen (3.3).
2. **Andersherum gedacht** (`reverseLab`): derselbe Aufbau (Spule im Feld) in zwei Modi.
   **Motor:** Strom anlegen → dreht sich. **Generator:** von Hand kurbeln → das Messgerät schlägt
   aus. Umschalter Motor/Generator.
3. **Warum beim Drehen Spannung entsteht** (`whyLab`): Beim Drehen ändert sich die Zahl der
   Feldlinien durch die Spule ständig – genau die **Änderung** aus 3.1. Grafik: Spulenfläche
   kippt im Feld, der „Durchsatz" wächst und schrumpft, der Zeiger folgt.
4. **Mehr Beispiele** (reveal-cards): Fahrraddynamo (drehen → Licht); Kurbeltaschenlampe;
   Rekuperation im E-Auto (Motor bremst als Generator und lädt den Akku); Windrad/Wasserrad.
5. **Einordnung:** Brücke – „Beim gleichmäßigen Drehen wechselt die Spannung ständig die
   Richtung. Diese **Wechselspannung** und der Kraftwerksgenerator sind Oberthema 4."
6. **Quiz.**

---

## Umsetzung (nach Abnahme)

- Neuer Engine-Bereich `Klasse-10/Induktion` mit eigenem `_common.js` (Zeiger-Messgerät
  `meter(ctx,…)`, Spule mit Feldliniendurchsatz, wandernder Magnet) und `topics/01-…` bis
  `04-…` (entdecken, groesse, lenz, motor-generator).
- In `build-lessons.mjs` (AREAS) und `smoke.mjs` eintragen; `site.config.mjs` Klasse-10 um eine
  Gruppe „Induktion" (`fromTopics: 'Induktion'`) erweitern; Menü neu erzeugen.
- Verifikation wie gehabt: `node --check`, Build, Smoke (0 Fehler), Browser-Stichprobe der
  Canvas-Labs (Zeigerausschlag folgt der Bewegung, null bei Ruhe; Lenz-Kraft immer gegen die
  Bewegung).
- `plan-klasse-10.md`: OT3-Tabelle auf die vier Stunden nachziehen (Hinweis auf die Aufteilung
  Größe/Richtung).
