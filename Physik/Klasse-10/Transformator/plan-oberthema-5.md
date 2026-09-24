# Detailplan Oberthema 5 – Transformator: Spannung hoch- und heruntersetzen

Feinplanung der Stunden (zur Abnahme), analog zu OT2–OT4. Baut direkt auf Oberthema 3 (Induktion)
und Oberthema 4 (Wechselspannung) auf und schließt die erste Hälfte der Energiekette
(Kraftwerk → verlustarme Übertragung). Jede Stunde: ein testbares Lernziel, „Das brauchst du" =
nur Wiederholung, feste Abschnittsfolge (Das brauchst du → Konzept → Vertiefung → Mehr Beispiele →
Einordnung → Quiz).

## Reihenbezug (übergeordnet)

Der Generator (OT4) liefert Wechselspannung. Der Transformator macht daraus die passende Spannung:
hoch für die verlustarme Übertragung über weite Strecken, herunter für den Haushalt. Er ist die
letzte Grundmaschine der Reihe und beruht wie Motor und Generator auf demselben Prinzip
(Strom ↔ Magnetfeld, Änderung erzeugt Spannung). Danach folgt die Einordnung in die
Energieversorgung (OT6).

## Umfang: 3 Stunden (kein Split nötig)

Anders als bei OT3/OT4 trägt jede der drei Stunden bereits genau ein Lernziel:
Aufbau/Wirkung (inkl. „warum nur Wechselspannung"), das Rechnen mit dem Windungsverhältnis, und die
Anwendung Hochspannungsübertragung. Aufbau und „nur Wechselspannung" gehören zusammen (das eine
erklärt das andere), daher eine Stunde. Damit bleibt es bei den drei Stunden aus der
Übersichtstabelle.

## Festgelegte Konventionen (durchgängig zu OT 1–4)

- **Eine echte Rechnung:** das Übersetzungsverhältnis **U₁ : U₂ = n₁ : n₂** (Dreisatz), sonst
  qualitativ. Gerechnet wird nur am **idealen** (verlustfreien) Transformator.
- **Wechselspannung** wie in OT4 (Zeiger/Kurve); die Kopplung der Spulen läuft über das **sich
  ändernde** Magnetfeld im Eisenkern (Induktion, OT3).
- **Verluste** in 5.3 rein qualitativ: „mehr Stromstärke → viel mehr Wärme in der Leitung" (ohne
  I²R-Formel), passend zur Wärmewirkung des Stroms aus Klasse 9.

## Abgrenzung des Oberthemas

Hier: **Aufbau und Wirkung** des Transformators, das **Windungsverhältnis** und die **verlustarme
Hochspannungsübertragung**. **Nicht** hier: die vollständige **Energiebilanz Kraftwerk → Haushalt
mit Wirkungsgrad** und Energieentwertung (OT6); **Trafo-Eigenverluste** (nur idealer Trafo);
**Effektivwerte** und Leistungsrechnungen mit Zahlen (der Zusammenhang P = U·I wird in 5.3 nur
qualitativ genutzt).

---

## Stunde 5.1 – Aufbau und Wirkung

**Lernziel:** Ich kann erklären, wie zwei Spulen um einen gemeinsamen Eisenkern über ein sich
änderndes Magnetfeld gekoppelt sind, und warum ein Transformator nur **Wechsel**spannung überträgt.

**Reihenbezug:** Die dritte Grundmaschine nach Motor und Generator – wieder das Zusammenspiel von
Strom, Magnetfeld und Induktion.

**Abgrenzung:** Noch **keine** Rechnung mit dem Windungsverhältnis (5.2), **keine** Übertragung
über Leitungen (5.3). Hier nur: Wie überträgt sich die Spannung, und warum nur bei Wechselspannung.

**Didaktische Abschnitte:**
1. **Das brauchst du** (nur Wiederholung): Eine stromdurchflossene Spule erzeugt ein Magnetfeld,
   der Eisenkern führt/verstärkt es (1.2); eine **Änderung** des Feldes induziert in einer Spule
   Spannung (3.1); Wechselspannung ändert sich ständig (OT4).
2. **Der Aufbau** (`transformerLab`): zwei Spulen (Primär links, Sekundär rechts) auf einem
   gemeinsamen **Eisenkern** (geschlossener Ring). Wechselspannung an der Primärspule → sich
   änderndes Feld im Kern → in der Sekundärspule wird Spannung induziert; ein Lämpchen/Messgerät an
   der Sekundärseite reagiert. Das Feld im Kern wird animiert.
3. **Warum nur Wechselspannung** (`acRequiredLab`): Umschalter Wechsel-/Gleichspannung an der
   Primärseite. Wechselspannung → dauerndes Ändern → Sekundärseite arbeitet. Gleichspannung → nach
   dem Einschalten konstantes Feld → **keine** Induktion (nur ein kurzer Ausschlag beim Ein-/
   Ausschalten). Direkter Vergleich.
4. **Mehr Beispiele** (reveal-cards): Steckernetzteil/Ladegerät; Klingeltrafo (230 V → 8 V); warum
   ein Trafo „brummt"; Batterie (Gleichspannung) am Trafo – warum nichts herüberkommt.
5. **Einordnung:** Brücke – „Die Spannung überträgt sich. Aber wie groß wird sie auf der anderen
   Seite? Das entscheidet die Windungszahl." → 5.2.
6. **Quiz.**

---

## Stunde 5.2 – Das Übersetzungsverhältnis

**Lernziel:** Ich kann mit dem Windungsverhältnis bestimmen, ob hoch- oder heruntertransformiert
wird (U₁ : U₂ = n₁ : n₂), und einfache Aufgaben rechnen.

**Reihenbezug:** Macht den Transformator berechenbar und steuerbar – Grundlage für die gezielte
Hochspannungsübertragung (5.3).

**Abgrenzung:** Nur **Spannung und Windungszahl** am **idealen** Trafo. **Keine** Stromstärke-/
Leistungsrechnung (P = U·I kommt qualitativ erst in 5.3), keine Verluste.

**Didaktische Abschnitte:**
1. **Das brauchst du** (nur Wiederholung): Der Trafo koppelt zwei Spulen über den Eisenkern (5.1);
   mehr Windungen bedeuten mehr Induktionsspannung (3.2); Verhältnis/Dreisatz (Mathe).
2. **Windungen bestimmen die Spannung** (`ratioLab`): Regler für n₁ (Primär) und n₂ (Sekundär),
   Primärspannung U₁ fest (z. B. 230 V). Live-Anzeige von U₂ = U₁ · n₂/n₁ und der gezeichneten
   Windungszahlen; Hinweis „hochtransformiert / heruntertransformiert".
3. **Hoch oder runter** (`presetLab`): zwei typische Fälle per Knopf – **Hochspannungs-Trafo**
   (n₂ ≫ n₁, U₂ groß) und **Netzteil** (n₂ ≪ n₁, U₂ klein). Regel klar herausstellen:
   n₂ > n₁ → hoch, n₂ < n₁ → runter.
4. **Mehr Beispiele** (reveal-cards): U₁:U₂ = n₁:n₂ Aufgaben (z. B. 230 V, 1000:50 Windungen →
   U₂ = ?; Ladegerät 230 V → 5 V, welches Verhältnis?); Verhältnis umkehren; warum die Windungszahl
   und nicht die Drahtlänge zählt.
5. **Einordnung:** Brücke – „Wozu überhaupt hochtransformieren? Für die Übertragung über weite
   Strecken." → 5.3.
6. **Quiz.**

---

## Stunde 5.3 – Warum Hochspannungsleitungen?

**Lernziel:** Ich kann erklären, warum Energie über weite Strecken mit hoher Spannung (und kleiner
Stromstärke) übertragen wird – weil so weniger Wärme in den Leitungen verloren geht.

**Reihenbezug:** Schließt die erste Hälfte der Energiekette (Kraftwerk → Übertragung → Haushalt) und
leitet zur Energieversorgung (OT6) über.

**Abgrenzung:** Rein **qualitativ** (mehr Strom → viel mehr Wärme). **Keine** I²R-Formel, **keine**
Wirkungsgrad-Bilanz (OT6).

**Didaktische Abschnitte:**
1. **Das brauchst du** (nur Wiederholung): Der Trafo setzt Spannung hoch und herunter (5.2); Strom
   **erwärmt** einen Leiter, jede Leitung hat einen **Widerstand** (Kl 9, Wärmewirkung des Stroms).
2. **Verlust in der Leitung** (`lossLab`): dieselbe Leistung einmal mit **niedriger Spannung/hoher
   Stromstärke** und einmal mit **hoher Spannung/niedriger Stromstärke** übertragen. Bei hoher
   Stromstärke glüht der Leitungsdraht (großer Verlust), bei kleiner bleibt er kühl. Umschalter +
   Verlust-Anzeige.
3. **Die Lösung: hoch – übertragen – herunter** (`gridLab`): die Kette Kraftwerk → Trafo **hoch** →
   Hochspannungsleitung (kleiner Strom, wenig Verlust) → Trafo **herunter** → Haushalt, als
   Diagramm.
4. **Mehr Beispiele** (reveal-cards): warum auf Überlandmasten Hochspannung liegt; warum man nicht
   gleich mit Haushaltsspannung über Land geht; warum am Ende wieder heruntertransformiert wird;
   wozu man dafür überhaupt Wechselspannung braucht (Trafo!).
5. **Einordnung:** Brücke – „Damit ist die Kette Kraftwerk → Steckdose komplett. Wie viel Energie
   geht insgesamt verloren, und wie bewertet man Kraftwerke? Das ist die **Energieversorgung**
   (Oberthema 6)."
6. **Quiz.**

---

## Umsetzung (nach Abnahme)

- Neuer Engine-Bereich `Klasse-10/Transformator` mit eigenem `_common.js` (Eisenkern mit zwei
  Spulen, animiertes Kernfeld, Zeiger-Messgerät/Lämpchen, Leitung mit Wärme-Anzeige) und
  `topics/01-…` bis `03-…` (aufbau, uebersetzung, uebertragung).
- In `build-lessons.mjs` (AREAS) und `smoke.mjs` eintragen; `site.config.mjs` Klasse-10 um eine
  Gruppe „Transformator" (`fromTopics: 'Transformator'`) erweitern; Menü neu erzeugen.
- Verifikation wie gehabt: `node --check`, Build, Smoke (0 Fehler), Browser-Stichprobe
  (Sekundärseite reagiert nur bei Wechselspannung; U₂ folgt dem Windungsverhältnis;
  Leitung glüht bei hoher Stromstärke).
- `plan-klasse-10.md`: OT5-Tabelle ggf. an die Stundentitel angleichen (Umfang bleibt bei 3).
