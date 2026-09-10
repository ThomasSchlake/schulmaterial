# Unterrichtsplan Physik – Klasse 8 (Optik & Astronomie)

Arbeits- und Bau-Spezifikation. Jeder Roadmap-Knoten wird in **mehrere Stunden**
aufgeteilt. Zu jedem Knoten mit Konstruktions- oder Rechenanteil gehören
**Arbeitsblätter** im Stil der Mathe-EF-Blätter (`arbeitsblatt.sty`).

Grundprinzip (vom Nutzer vorgegeben): **Die Präsentation zeigt „Wie mache ich das?"
(z. B. Bildkonstruktion an der Linse), auf dem Arbeitsblatt üben die SuS genau das** –
und zwar in **allen Fällen** (im Brennpunkt, vor/nach dem Brennpunkt, reelles/virtuelles
Bild usw.).

Bezug: Roadmap Klasse 8 (`Roadmap-Klasse-8/roadmap-klasse-8.html`).
Inhaltsfelder: **IF 5 Optik**, **IF 6 Astronomie** (Kernlehrplan NRW G9).

---

## 1. Technische Umsetzung

**Präsentationen** = interaktive Stunden mit derselben Lesson-Engine wie Klasse 6
(`Physik/_lesson-engine.html` + `build-lessons.mjs`). Neue Bereiche:

```
Physik/Klasse-8/Optik/        _common.js + topics/*.js  → <slug>.html
Physik/Klasse-8/Astronomie/   _common.js + topics/*.js  → <slug>.html
```

`build-lessons.mjs` bekommt die neuen AREAS. Schritt-basierter Aufbau eignet sich
perfekt für **schrittweise Konstruktion** (erst Parallelstrahl, dann Brennpunktstrahl,
dann Mittelpunktstrahl, dann Bild) – jeweils ein Engine-Schritt.

**Arbeitsblätter** = LaTeX mit `arbeitsblatt.sty`, pro Blatt ein eigener Ordner wie in
Mathe:

```
Physik/Klasse-8/Optik/blaetter/<name>/<name>.tex  (+ .pdf, + arbeitsblatt.sty)
```

**S/W-Konvention für Strahlengänge** (keine Farbe zur Information – Memory
[arbeitsblaetter.md]):

| Element | Darstellung |
|---|---|
| Optische Achse | dünne durchgezogene Linie |
| Linse (Sammel-) | senkrechte Linie, Pfeilspitzen an beiden Enden nach außen |
| Linse (Zerstreuungs-) | senkrechte Linie, Pfeilspitzen nach innen |
| Ebener Spiegel | Linie mit Schraffur auf der Rückseite |
| Brennpunkte F, F′ | kleine Kreuze/Marken auf der Achse, beschriftet |
| Gegenstand | dicker durchgezogener Pfeil (aufrecht) |
| **Parallelstrahl** | durchgezogen |
| **Brennpunktstrahl** | gestrichelt (dashed) |
| **Mittelpunktstrahl** | strichpunktiert (dash-dot) |
| Verlängerung / virtuelle Strahlen | gepunktet (dotted) |
| Bild (reell) | durchgezogener Pfeil |
| Bild (virtuell) | grau/gestrichelter Pfeil |

Strahlarten sind also am **Linienstil** erkennbar, nicht an der Farbe – druckt auf
S/W sauber. Für die Übungsblätter: **helles Kästchenraster (grau)** im Hintergrund,
damit die SuS mit dem Lineal sauber konstruieren und messen können. Diese Helfer
kommen in eine kleine Erweiterung `optik.sty` (bzw. Ergänzung in `arbeitsblatt.sty`):
`\optikachse`, `\sammellinse`, `\zerstreuungslinse`, `\spiegel`, `\gegenstand`,
Strahl-Stile (`parallel`, `brenn`, `mitte`, `virtuell`).

---

## 2. Fokus: Bildkonstruktion – die vollständige Fallliste

Das ist der Kern von Klasse 8 und der Grund für die Doppelstruktur. Alle Fälle
müssen als eigene Aufgaben vorkommen.

### 2a. Ebener Spiegel
- Bild: **virtuell, aufrecht, gleich groß, seitenverkehrt**, Bildweite = Gegenstandsweite.
- Fälle zum Üben: Gegenstand nah / fern; Punkt vs. ausgedehnter Pfeil; Sichtbarkeitsbereich
  (welcher Teil ist von einem Auge aus zu sehen); Winkelspiegel (mehrere Bilder,
  Anzahl n = 360°/α − 1).

### 2b. Sammellinse (Brennweite f, Gegenstandsweite g)

| Fall | Lage des Gegenstands | Bild | Größe | Lage | Anwendung |
|---|---|---|---|---|---|
| 1 | g > 2f (weit weg) | reell, umgekehrt | verkleinert | b zwischen f und 2f | Kamera, Auge |
| 2 | g = 2f | reell, umgekehrt | gleich groß | b = 2f | 1:1-Abbildung |
| 3 | f < g < 2f | reell, umgekehrt | vergrößert | b > 2f | Beamer, Projektor |
| 4 | g = f (im Brennpunkt) | **kein Bild** | – | Strahlen parallel → „Bild im Unendlichen" | Scheinwerfer |
| 5 | g < f (innerhalb f) | **virtuell, aufrecht** | vergrößert | gleiche Seite wie Gegenstand | **Lupe** |

Konstruktion immer mit den **drei Hauptstrahlen**:
1. **Parallelstrahl** → wird zum Brennpunktstrahl (durch F′).
2. **Brennpunktstrahl** (durch F) → wird zum Parallelstrahl.
3. **Mittelpunktstrahl** (durch Linsenmitte) → ungebrochen.

### 2c. Zerstreuungslinse
- Bild **immer virtuell, aufrecht, verkleinert** (auf Gegenstandsseite). Nur ein Fall –
  eigene kurze Stunde im Linsenblock (L5), wird bei der Brillenkorrektur (Kurzsichtigkeit)
  am Auge wieder aufgegriffen.

---

## 3. Stundenplan pro Roadmap-Knoten

Reihenfolge folgt den Abhängigkeiten der Roadmap (`needs`).
Schätzung gesamt: **~34 Stunden + Referatsreihe** (ein Schuljahr IF 5 + IF 6). „P:" = was die
Präsentation zeigt, „AB:" = Arbeitsblatt.

### Vorbausteine (Wiederholung / Mathe-Werkzeug)

**V1 – Lichtstrahlmodell (Wiederholung Klasse 6)** · 1 Std
- P: geradlinige Ausbreitung, Lichtstrahl als Modell, Lichtquelle/Sehen, Schatten kurz.
- Anknüpfung, kein neues AB (Diagnose-Quiz in der Präsentation).

**V2 – Winkel messen & Strahlengänge zeichnen (Mathe-Werkzeug)** · 1–2 Std
- P: Winkel mit Geodreieck messen/zeichnen, Lot, Einfalls-/Ausfallswinkel definieren.
- AB **„Winkel & Lot"**: Winkel messen, Lot einzeichnen, Winkel an Geraden – reine
  Handwerksübung, damit die Konstruktion später sitzt.

### IF 5 – Optik

**R · Reflexion & Spiegel** (needs: licht, winkel) · 4 Std
- R1 Reflexionsgesetz · P: Einfalls- = Ausfallswinkel, Streuung vs. gerichtete Reflexion.
- R2 Bild am ebenen Spiegel · P: **Bildkonstruktion Spiegelbild** Schritt für Schritt,
  Bildeigenschaften (virtuell, gleich groß, seitenverkehrt).
- R3 Konstruktion üben & Sichtbarkeit · P: verschiedene Gegenstandslagen, Sehstrahlen,
  Winkelspiegel.
- R4 Anwendungen · P: Verkehrsspiegel, Periskop; Ausblick Hohl-/Wölbspiegel.
- AB **„Reflexionsgesetz"** (Winkel messen/zeichnen, alle Einfallswinkel).
- AB **„Spiegelbild konstruieren"** (Punkt, Pfeil, mehrere Lagen, Sichtbarkeitsbereich,
  Winkelspiegel) – mit Lösungsseite.

**B · Brechung** (needs: licht, winkel) · 3 Std
- B1 Brechung an Grenzflächen · P: Luft↔Glas/Wasser, **zum Lot hin / vom Lot weg**,
  Brechung qualitativ.
- B2 Totalreflexion · P: Grenzwinkel, wann Totalreflexion auftritt.
- B3 Anwendungen & Konstruktion · P: scheinbare Tiefe, Strohhalm-Knick, Übergang zur Linse.
- AB **„Brechung zeichnen"** (Strahl zum/vom Lot bei versch. Einfallswinkeln;
  Fallunterscheidung dünn↔dicht).
- AB **„Totalreflexion"** (Grenzwinkel, Strahl im/aus dem Medium).

**L · Sammellinse** (needs: brechung) · 6 Std — **Kernblock**, Fokus zeichnerisch
- L1 Sammellinse & Brennpunkt · P: Bündelung paralleler Strahlen, Brennpunkt/Brennweite.
- L2 Die drei Konstruktionsstrahlen · P: Parallel-, Brennpunkt-, Mittelpunktstrahl –
  „Wie konstruiere ich ein Bild?".
- L3 Reelle Bilder · P: Fälle 1–3 (g>2f, g=2f, f<g<2f) schrittweise konstruiert,
  Bildeigenschaften ablesen.
- L4 Grenzfall & virtuelles Bild · P: g=f (parallele Strahlen), g<f (Lupe, virtuelles Bild).
- L5 **Zerstreuungslinse** · P: eigener kurzer Konstruktionsfall (immer virtuell, aufrecht,
  verkleinert). Wird später bei der Brille angewendet.
- L6 **Formeln & Mathematik (die eine Rechenstunde)** · P: Abbildungsmaßstab und
  Abbildungsgleichung 1/f = 1/g + 1/b. Bewusst **nur diese eine Stunde** rechnerisch –
  alles andere bleibt zeichnerisch.
- AB **„Konstruktionsstrahlen – Grundübung"** (nur die drei Strahlen sauber ziehen).
- AB **„Reelle Bilder"** (Fälle 1–3, je 2–3 Aufgaben mit vorgegebenem f und g auf Raster).
- AB **„Grenzfall & Lupe"** (g=f und g<f, virtuelles Bild; dazu ein Zerstreuungslinsen-Fall).
- AB **„Rechnen mit der Linse"** (Abbildungsgleichung & Abbildungsmaßstab) – nur zur L6.

**F · Farben & Spektrum** (needs: brechung) · 3 Std
- F1 Spektralzerlegung · P: Prisma, Regenbogen, weißes Licht = alle Farben.
- F2 Körperfarben & Absorption · P: warum ein Blatt grün ist (Absorption/Reflexion).
- F3 Additive Farbmischung · P: RGB, Bildschirm; Ausblick subtraktiv.
- AB **„Farben"** (Zuordnung Absorption↔Körperfarbe, additive Mischung – zeichnerisch/logisch,
  wenig Konstruktion).

**LL · Lichtleiter** (needs: brechung) · 2 Std
- LL1 Totalreflexion im Leiter · P: Licht bleibt durch Totalreflexion im Kern.
- LL2 Anwendungen · P: Glasfaser, Endoskop, Datenübertragung.
- AB **„Strahlengang im Lichtleiter"** (Totalreflexion mehrfach einzeichnen) – optional.

**G · Optische Geräte** (needs: linse, reflexion) · 3 Std
- G1 Lupe · P: Linse innerhalb der Brennweite (Anknüpfung L4), Vergrößerung.
- G2 Mikroskop · P: zwei Sammellinsen (Objektiv + Okular), zweistufige Abbildung.
- G3 Fernrohr & Spiegelteleskop · P: Linsen/Spiegel kombinieren.
- AB **„Strahlengang Lupe & Mikroskop"** (mehrstufige Konstruktion).

**A · Das Auge** (needs: linse) · 3 Std
- A1 Auge als Sammellinse · P: Bild auf der Netzhaut (Fall 1 der Linse), Akkommodation,
  Nah-/Fernpunkt.
- A2 Sehfehler · P: Kurzsichtigkeit / Weitsichtigkeit – wo entsteht das Bild?
- A3 Korrektur mit Brille · P: **Konstruktion** mit Zerstreuungs- (kurzsichtig) bzw.
  Sammellinse (weitsichtig).
- AB **„Auge & Brille"** (Zuordnung Fehler↔Linse, Korrektur-Strahlengang konstruieren).

### IF 6 – Astronomie (ausführlich – Grundlagen, dann Referatsreihe)

Astronomie wird ausführlich als **gemeinsame Grundlage** unterrichtet. Nicht jedes
Thema bekommt ein Arbeitsblatt – nur wo es zum Konstruktionsfokus passt (Mondphasen/
Finsternisse). Danach übernehmen die SuS in einer **Referatsreihe** eigene Themen.

**S · Sonnensystem** (needs: licht) · 3 Std
- S1 Mondphasen · P: Sonne–Erde–Mond-Stellung, Phasen als Beleuchtungsgeometrie.
- S2 Finsternisse · P: Sonnen-/Mondfinsternis, Kern-/Halbschatten (Anknüpfung Schatten).
- S3 Jahreszeiten · P: Erdachsenneigung, Einstrahlwinkel.
- AB **„Mondphasen & Finsternisse"** (Konstellation und Schatten geometrisch einzeichnen –
  echte Lichtgeometrie, passt zum Konstruktionsfokus).

**SP · Spektroskopie** (needs: farben) · 2 Std
- SP1 Sternenlicht zerlegen · P: Spektrum eines Sterns, Fraunhofer-Linien.
- SP2 Woraus bestehen Sterne · P: dunkle Linien = Fingerabdruck der Elemente.

**W · Sterne & Weltall** (needs: instrumente, auge, spektro, sonnensystem) · 3 Std
- W1 Sonnensystem & Größenordnungen · P: Maßstäbe, Entfernungen, Aufbau.
- W2 Sterne & ihre Entwicklung · P: Lebenslauf eines Sterns, Zustandsgrößen.
- W3 Woher wir das wissen · P: Zusammenführung – Teleskop (Optik) + Spektroskop
  (Farben) machen Astronomie möglich.

**REF · Referatsreihe (Schülervorträge)** · mehrere Std (je nach Kursgröße)
- Nachdem die Grundlagen stehen, wählen die SuS eigene Vertiefungsthemen und halten
  Kurzreferate. Themenpool z. B.: **Was ist ein Schwarzes Loch?**, Supernova, Neutronensterne,
  Exoplaneten, Urknall, Galaxien, Raumsonden/Voyager, Leben im All.
- Physik-Präsentation liefert nur den **Rahmen** (Themenliste, kurze Anforderungen an ein
  gutes Referat, Bewertungsraster) – kein eigenes Arbeitsblatt.

---

## 4. Arbeitsblätter – Übersicht (Reihenfolge = Bauliste)

Konstruktionslastige Blätter mit vollständiger Fallabdeckung, jeweils mit Lösungsseite:

1. `winkel-und-lot` (V2)
2. `reflexionsgesetz` (R)
3. `spiegelbild-konstruieren` (R) – alle Lagen + Winkelspiegel
4. `brechung-zeichnen` (B)
5. `totalreflexion` (B)
6. `linse-konstruktionsstrahlen` (L2) – Grundübung
7. `linse-reelle-bilder` (L3) – Fälle 1–3
8. `linse-grenzfall-und-lupe` (L4) – g=f, g<f (virtuell) + Zerstreuungslinsen-Fall (L5)
9. `linse-rechnen` (L6) – Abbildungsgleichung & Abbildungsmaßstab (die eine Rechenstunde)
10. `auge-und-brille` (A3)
11. `mondphasen-finsternisse` (S) – Lichtgeometrie
12. optional: `farben`, `lichtleiter-strahlengang`, `strahlengang-lupe-mikroskop`,
    `spektrallinien-zuordnen`

Jedes Konstruktionsblatt nach dem EF-Muster: kurzer `merke`-Kasten (die Regel),
ein `beispiel` (eine vollständige Musterkonstruktion Schritt für Schritt), dann
`aufgaben` mit leeren Rastern/Vorgaben (f, g, Gegenstandshöhe), Lösungen am Ende als
fertige Konstruktion.

---

## 5. Vorgeschlagene Bau-Reihenfolge

1. **Infrastruktur:** `optik.sty`-Helfer (Linse/Spiegel/Strahl-Stile, Kästchenraster,
   S/W) + `build-lessons.mjs` um Klasse-8-Bereiche erweitern.
2. **Pilot Sammellinse:** Präsentation L2 (drei Strahlen) **und** AB
   `linse-konstruktionsstrahlen` als Paar bauen → an dir gegentesten (deckt Engine +
   Blatt-Optik-Toolkit auf einmal ab).
3. Nach deinem OK: restliche Linsen-Stunden + Blätter (Kernblock), dann Reflexion,
   Brechung, danach die übrigen Optik-Knoten, zuletzt Astronomie.

---

## Entscheidungen (festgelegt)

- **Astronomie:** ausführlich als gemeinsame Grundlage, danach **Referatsreihe** der SuS
  (Schwarzes Loch usw.). Nicht jedes Thema bekommt ein Arbeitsblatt.
- **Zerstreuungslinse:** **beides** – eigene kurze Stunde im Linsenblock (L5) und Anwendung
  bei der Brille (A3).
- **Rechnung:** Fokus zeichnerisch; **eine** eigene Rechenstunde (L6) zu Abbildungsgleichung
  und Abbildungsmaßstab, sonst rein konstruktiv.
- **Reihenfolge:** erst komplette Optik (IF 5), dann Astronomie (IF 6).
