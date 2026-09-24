# Plan – Einheit 7: Vielfache eines Vektors (K8)

Siebte Einheit der Reihe. Plan zur Abnahme, danach wird gebaut (Stunde + Arbeitsblatt) wie bei
Einheit 1 bis 6. Grundlagen: [Roadmap.md](Roadmap.md),
[plan-vektorrechnung.md](plan-vektorrechnung.md), Vorgänger
[plan-modul-06-addieren-subtrahieren.md](plan-modul-06-addieren-subtrahieren.md).

## Lernziel (ein testbares „Ich kann …")

Ich kann einen Vektor mit einer Zahl multiplizieren, $k \cdot \vec a$ koordinatenweise berechnen und
die Wirkung beschreiben: **strecken** ($\lvert k\rvert > 1$), **stauchen** ($\lvert k\rvert < 1$),
**Orientierung umkehren** ($k < 0$).

Kernidee: Dieselbe Verschiebung mehrmals hintereinander ist ein Vielfaches:
$\vec a + \vec a + \vec a = 3 \cdot \vec a$, jede Komponente wird mit 3 multipliziert. Das
funktioniert auch mit Brüchen (halb so weit) und negativen Zahlen (in die Gegenrichtung).
Ein Vielfaches ist immer **parallel** zum Ausgangsvektor. Das ist später das Werkzeug für
parallele Seiten (Parallelogramm, Trapez).

## Vorwissen (wird wiederholt, nicht neu)

- Aus Einheit 4: Vektor als Verschiebung, Spaltenschreibweise, Gegenvektor $-\vec a$.
- Aus Einheit 6: Vektoren addieren, koordinatenweise und durch Aneinanderhängen.
- Aus der SI: mit Brüchen und negativen Zahlen multiplizieren.

## Aufbau (sechs Schritte)

1. **Das brauchst du** – nur Wiederholung: Vektor als Verschiebung, Addition durch
   Aneinanderhängen, Gegenvektor. Aufwärmen: $\vec a + \vec a$ koordinatenweise ausrechnen
   (reine Addition aus Einheit 6, das Wort „Vielfaches" fällt noch nicht) und den Gegenvektor
   angeben. Bild umschaltbar 2D/3D.
2. **Ein Beispiel** – Eine Drohne fliegt **dieselbe Verschiebung $\vec v$ mehrmals hintereinander**.
   Regler für die Anzahl $n$ (1 bis 4) und für $\vec v$. Im Bild hängen $n$ gleiche Pfeile
   aneinander, dazu der Gesamtpfeil. Entdeckung: Die Gesamtverschiebung hat die $n$-fachen
   Komponenten und liegt auf derselben Linie wie $\vec v$. Hier nur ganze Anzahlen, also nur
   wiederholtes Addieren. 3D und Schrägbild umschaltbar.
3. **Das Konzept** – Name und Regel: das **Vielfache** $k \cdot \vec a$.
   - *Merkkasten Vielfaches:* $k \cdot \vec a$ als Spalte mit den Komponenten $k a_1$, $k a_2$,
     $k a_3$. $k \cdot \vec a$ ist parallel zu $\vec a$.
   - *Merkkasten Wirkung:* $\lvert k\rvert > 1$ streckt, $\lvert k\rvert < 1$ staucht, $k < 0$
     kehrt die Orientierung um. $(-1) \cdot \vec a = -\vec a$ ist der Gegenvektor aus Einheit 4.
   Regler für $k$ (von $-2$ bis $3$ in Halbschritten). Drei Voreinstellungen, jede mit eigenem
   Bild: **Strecken** ($k = 2$), **Stauchen** ($k = \tfrac12$), **Umkehren** ($k = -1{,}5$).
   Darstellung: $\vec a$ und $k \cdot \vec a$ an **zwei nebeneinanderliegenden Füßen** (nicht
   übereinander), damit Parallelität und Längenverhältnis sichtbar sind.
4. **Üben** – das Arbeitsblatt. Das Bild ist das von Aufgabe 3 (Faktor ablesen), umschaltbar, mit
   Aufdeck-Karten zu den (a)-Aufgaben. Keine Argumentationsaufgabe (Stufe c erst ab Modul 10).
5. **Einordnung** – Vorher: Addieren (Einheit 6). Jetzt: Vielfache. Danach: Vektorketten mit
   Mittelpunkt ($\tfrac12 \cdot \vec{AB}$, Einheit 8), Geschwindigkeit ($t \cdot \vec v$, Einheit 9),
   später Kollinearität. Satz zum Reihenziel: Zwei Seiten einer Figur sind genau dann parallel,
   wenn der eine Seitenvektor ein Vielfaches des anderen ist.
6. **Seid ihr fit?** – $3 \cdot \vec a$ berechnen; Wirkung von $k = -\tfrac12$ (umkehren und
   stauchen); Faktor $k$ aus $\vec a$ und $k\cdot\vec a$ bestimmen. Letzte Frage zur typischen
   Fehlvorstellung: „Ein negativer Faktor macht den Vektor kürzer." (Falsch, er kehrt die
   Orientierung um; $-2 \cdot \vec a$ ist doppelt so lang.)

## Arbeitsblatt (Entwurf, NRW-Operatoren, Lösungen auf einer eigenen letzten Seite)

1. **Vielfache berechnen.** Zu gegebenen Vektoren: *Berechne* $3\vec a$, $-2\vec b$,
   $\tfrac12 \vec c$, $-\vec a$. Stufe (a).
2. **Wirkung beschreiben.** Zu einem Vektor $\vec a$ und den Faktoren $2$, $\tfrac13$, $-1$,
   $-2{,}5$: *Beschreibe jeweils, wie sich $k\cdot\vec a$ von $\vec a$ unterscheidet* (Länge,
   Orientierung). Stufe (a).
3. **Faktor aus dem Bild.** Schrägbild mit $\vec a$ und einem zweiten, parallelen Pfeil an einem
   anderen Fuß, beide mit Hilfslinien. a) *Gib beide Vektoren als Spalten an.* b) *Bestimme den
   Faktor $k$.* Stufe (b).
4. **Faktor aus Koordinaten.** Zu Paaren $\vec a$, $\vec b$, bei denen $\vec b$ ein Vielfaches
   von $\vec a$ ist, auch mit negativem und gebrochenem $k$: *Bestimme $k$ mit
   $\vec b = k\cdot\vec a$.* Stufe (b). (Nur Fälle, in denen es ein $k$ gibt; das Widerlegen ist
   Modul 12.)
5. **Rechnen mit Summe und Vielfachen.** *Berechne* $2\vec a - 3\vec b$ und
   $\tfrac12(\vec a + \vec b)$. Verbindet Einheit 6 und 7. Stufe (b).
6. **Drohne.** Eine Drohne startet in $S$ und fliegt viermal hintereinander dieselbe Verschiebung
   $\vec v$. a) *Bestimme die Gesamtverschiebung.* b) *Bestimme die Zielposition.* Stufe (b).
7. **Sprinter.** Von einem Viereck $ABCD$ sind die Ecken gegeben. a) *Bestimme $k$ mit
   $\vec{DC} = k \cdot \vec{AB}$.* b) *Beschreibe, was das Ergebnis über die Seiten $AB$ und $DC$
   aussagt* (parallel, $k$-mal so lang, also ein Trapez). Vorgriff auf Modul 13, lösbar allein
   mit Einheit 5 und 7.

## Festgelegte Regeln, die hier gelten

- „Das brauchst du" nur Wiederholung; 3D überall umschaltbar, auch in „Das brauchst du" und
  „Üben"; Zeichenreihenfolge Punkt, dann Pfeil, dann Beschriftung.
- Vektoren mit Pfeil ($\vec a$, $k\cdot\vec a$), Punkte ohne; Vektoren als Spalte, nie in der
  Punkt-Schreibweise mit senkrechten Strichen.
- Beispiel auf dem Blatt und Startwerte in „Ein Beispiel" und „Das Konzept" nie mit den Zahlen
  einer Aufgabe. Nur „Üben" zeigt bewusst das Bild von Aufgabe 3.
- Blatt schwarz-weiß (Unterscheidung durch Beschriftung und Strichstärke), NRW-Operatoren, Lösungen
  auf einer Seite, kein Umbruch in Aufgaben, Hilfslinien bei Punkten zum Ablesen.
- Zahlen so wählen, dass im Schrägbild keine Pfeilspitze auf eine Achse fällt. Vor dem Bauen
  nachrechnen: Bildpunkt $(2x_2 - x_1 \mid 2x_3 - x_1)$ darf keine 0 enthalten.

## Neue technische Bausteine

- Stunde: vorhandene Helfer (`dot`, `pfeil`, `pfeil3d`, `vek`, `av`, `albl`, `statisch`, `rng`)
  genügen. Neu ist nur die Kette aus $n$ gleichen Pfeilen im Beispiel und der Regler für $k$ in
  Halbschritten (Anzeige als Bruch, zum Beispiel $\tfrac12$ statt 0,5).
- Blatt: vorhandene Makros `\bild`, `\achsen`, `\hilfslinien`, `\vpfeil`, `\spv`.

## Entscheidungen (23.09.2026)

1. **Nullvektor wird eingeführt**, mit eigenem Beispiel: eine vierte Voreinstellung
   **Nullvektor** ($k = 0$) im Konzept-Schritt und ein eigener kurzer Merkkasten
   ($0 \cdot \vec a = \vec o$, alle Komponenten $0$, keine Verschiebung). Auf dem Blatt taucht
   $0 \cdot \vec a$ in Aufgabe 1 auf.
2. **Sprinter ist der Trapez-Vorgriff** (Aufgabe 7 oben).
