# Plan – Einheit 15: Skalarprodukt (K15, K16)

Fünfzehnte Einheit der Reihe. Plan zur Abnahme, danach wird gebaut (Stunde + Arbeitsblatt) wie bei
Einheit 1 bis 14. Grundlagen: [Roadmap.md](Roadmap.md),
[plan-vektorrechnung.md](plan-vektorrechnung.md), Vorgänger
[plan-modul-14-pythagoras-winkel.md](plan-modul-14-pythagoras-winkel.md).

Zweite Einheit im Block „Rechte Winkel". Einheit 14 hat den rechten Winkel mit Pythagoras
nachgewiesen und im Sprinter gezeigt, dass sich beim Umformen die Quadrate wegheben. Hier wird
daraus die Abkürzung: Übrig bleibt die Summe der Produkte $a_1 b_1 + a_2 b_2 + a_3 b_3$. Sie
bekommt den Namen Skalarprodukt.

## Lernziel (ein testbares „Ich kann …")

Ich kann das **Skalarprodukt** $\vec a \cdot \vec b = a_1 b_1 + a_2 b_2 + a_3 b_3$ berechnen (das
Ergebnis ist eine **Zahl**), damit prüfen, ob zwei Vektoren **orthogonal** sind
($\vec a \cdot \vec b = 0$), und begründen, warum das aus dem Satz des Pythagoras folgt.

Kernidee: **Pythagoras ausmultipliziert.** Mit $\vec a = \vec{AB}$, $\vec b = \vec{AC}$ ist
$\vec{BC} = \vec b - \vec a$. In $\lvert\vec b - \vec a\rvert^2$ steht je Komponente
$(b_i - a_i)^2 = a_i^2 + b_i^2 - 2 a_i b_i$. Also gilt
$\lvert\vec a\rvert^2 + \lvert\vec b\rvert^2 = \lvert\vec b - \vec a\rvert^2$ genau dann, wenn
$a_1 b_1 + a_2 b_2 + a_3 b_3 = 0$ ist. Statt neun Quadraten reichen drei Produkte.

## Vorwissen (wird wiederholt, nicht neu)

- Aus Einheit 14: rechter Winkel über Pythagoras mit $\lvert\vec{AB}\rvert^2 + \lvert\vec{AC}\rvert^2 =
  \lvert\vec{BC}\rvert^2$; im Sprinter hoben sich die Quadrate weg.
- Aus Einheit 6: $\vec{BC} = \vec{AC} - \vec{AB}$ (Differenz als Verbindungsvektor).
- Aus der Sekundarstufe I: binomische Formel $(b - a)^2 = a^2 - 2ab + b^2$.

## Aufbau (sechs Schritte)

1. **Das brauchst du** – nur Wiederholung: Umkehrung des Pythagoras (Einheit 14),
   $\vec{BC} = \vec{AC} - \vec{AB}$, zweite binomische Formel. Bild umschaltbar.
2. **Ein Beispiel** – **Steht die Stütze senkrecht auf dem Brett?** Eine Rampe (schräges Brett
   $\vec a$ ab $A$) und eine Stütze $\vec b$ ab demselben Punkt; ein Regler kippt die Stütze. Neben
   dem Bild eine Tabelle je Komponente: $a_i^2$, $b_i^2$, $(b_i - a_i)^2$ und der Rest $-2 a_i b_i$.
   Entdeckung: $\lvert\vec a\rvert^2 + \lvert\vec b\rvert^2$ und $\lvert\vec b - \vec a\rvert^2$
   unterscheiden sich genau um $2(a_1 b_1 + a_2 b_2 + a_3 b_3)$. Der rechte Winkel (Winkelzeichen)
   erscheint genau dann, wenn diese Summe null ist. Das Wort „Skalarprodukt" fällt noch nicht.
   3D und Schrägbild umschaltbar.
3. **Das Konzept** – Name, Rechenregel, Deutung; vier Voreinstellungen, der Regler bewegt $\vec b$:
   - **Orthogonal:** $\vec a \cdot \vec b = 0$.
   - **Nicht orthogonal:** $\vec a \cdot \vec b \neq 0$, mit Anzeige „spitz" ($> 0$) oder „stumpf"
     ($< 0$), wie im Beispiel von Einheit 14.
   - **Dreieck: welche Ecke?** Drei Skalarprodukte, jeweils mit den Vektoren an derselben Ecke
     ($\vec{AB} \cdot \vec{AC}$ für $A$, $\vec{BA} \cdot \vec{BC}$ für $B$ …).
   - **Rechteck:** Parallelogramm ($\vec{AB} = \vec{DC}$) und $\vec{AB} \cdot \vec{AD} = 0$.

   Merkkästen: *Skalarprodukt* (Definition, Ergebnis eine Zahl, kein Vektor); *Orthogonal*
   ($\vec a \cdot \vec b = 0 \Leftrightarrow \vec a \perp \vec b$ für Vektoren ungleich dem
   Nullvektor); *Warum das stimmt* (Herleitung aus Pythagoras zum Aufdecken); *Im Dreieck* (beide
   Vektoren an der Ecke ansetzen, deren Winkel man prüft).
4. **Üben** – das Arbeitsblatt, Bild aus der Quader-Aufgabe zur Kontrolle, umschaltbar.
5. **Einordnung** – Vorher: Pythagoras (Einheit 14), aufwendig. Jetzt: drei Produkte statt neun
   Quadrate. Danach: TI-Nspire (Einheit 16, `dotP`), Nachweise aufschreiben (Einheit 17), Dreiecke,
   Vierecke, Körper nachweisen (Einheit 18 bis 20). Satz zum Reihenziel: Alle drei Werkzeuge sind
   jetzt handlich, Länge, Parallelität, rechter Winkel.
6. **Seid ihr fit?** – $(2; -1; 3) \cdot (1; 4; 2)$ berechnen; orthogonal oder nicht; an welcher
   Ecke eines Dreiecks liegt der rechte Winkel. Letzte Frage zur Fehlvorstellung:
   „$(1; 2; 0) \cdot (2; -1; 5) = (2; -2; 0)$." (Das Ergebnis ist eine Zahl, hier 0, also orthogonal.)

## Arbeitsblatt (Entwurf, NRW-Operatoren, Lösungen auf einer eigenen letzten Seite)

1. **Berechnen.** Vier Paare, auch mit negativen Komponenten und Nullen. *Berechne das
   Skalarprodukt.* Stufe (a).
2. **Orthogonal?** Vier Paare. *Untersuche, ob die Vektoren orthogonal sind.* Stufe (a).
3. **Rechter Winkel im Dreieck, noch einmal.** Ein Dreieck aus Einheit 14 (Aufgabe 1b) erneut mit
   dem Skalarprodukt. a) *Bestimme die Ecke mit dem rechten Winkel.* b) *Vergleiche den Aufwand mit
   dem Weg über Pythagoras.* Stufe (b).
4. **Fehlende Komponente.** *Bestimme $t$ so, dass $(2; t; -1)$ und $(3; 4; 2)$ orthogonal sind.*
   Stufe (b).
5. **Quader-Ecke.** Ein schräg im Raum liegender Quader (keine Kante parallel zu einer Achse, wie in
   Einheit 5), Ecke $A$ mit drei Nachbarecken. *Weise nach, dass die drei Kanten an $A$ paarweise
   orthogonal sind.* Mit Schrägbild. Stufe (b)/(c).
6. **Fehler finden.** Jemand rechnet $\vec a \cdot \vec b$ als Vektor der Produkte und schließt aus
   „nicht der Nullvektor" auf „nicht orthogonal". *Beurteile die Lösung.* Stufe (c).
7. **Herleitung.** Mit Gerüst: *Zeige, dass aus
   $\lvert\vec a\rvert^2 + \lvert\vec b\rvert^2 = \lvert\vec b - \vec a\rvert^2$ folgt
   $a_1 b_1 + a_2 b_2 + a_3 b_3 = 0$.* Stufe (c), zu K16.
8. **Sprinter: senkrecht zu zwei Vektoren.** *Bestimme einen Vektor $\vec n = (1; y; z)$, der zu
   $\vec a$ und $\vec b$ orthogonal ist.* (Zwei Gleichungen mit zwei Unbekannten.)

## Festgelegte Regeln, die hier gelten

- „Das brauchst du" nur Wiederholung; „Skalarprodukt" und „orthogonal" erst im Konzept.
- 3D überall umschaltbar, auch in „Das brauchst du" und „Üben"; Zeichenreihenfolge Punkt, Pfeil,
  Beschriftung; keine Bedien-Hinweise.
- Vektoren mit Pfeil, Punkte ohne; Skalarprodukt mit Malpunkt $\vec a \cdot \vec b$, Pfeil nur über
  den Vektoren (Helfer `vlbl` / `av`).
- Beispiel auf dem Blatt und Startwerte der Stunde nie mit den Zahlen einer Aufgabe (Ausnahme mit
  Absicht: Aufgabe 3 greift eine Aufgabe aus Einheit 14 auf).
- Blatt schwarz-weiß, NRW-Operatoren, jede Teilaufgabe der Lösungen auf eigener Zeile, Lösungen auf
  einer Seite, kein Umbruch in Aufgaben.
- Vor dem Bauen alle Bildpunkte und Richtungen nachrechnen; Namen nicht auf Achsenbeschriftungen;
  Figuren ohne Koordinatenbezug ohne Achsen.

## Neue technische Bausteine

- Stunde: Komponenten-Tabelle im Beispiel ($a_i^2$, $b_i^2$, $(b_i - a_i)^2$, Rest $-2a_ib_i$), live
  aktualisiert; Winkelzeichen nur bei Skalarprodukt 0.
- Helfer `skalar(a, b)` für die Stunde, auch später für Einheit 17 bis 20 nutzbar.

## Entscheidungen (24.09.2026)

Alle fünf Vorschläge angenommen: Stützen-Beispiel mit Komponenten-Tabelle, „orthogonal (senkrecht)",
Vorzeichen nur als Anzeige ohne Winkelformel, Herleitung zum Aufdecken und als Blatt-Aufgabe,
Sprinter „senkrecht zu zwei Vektoren".

## Ursprünglich offene Entscheidungen

1. **Beispiel „Steht die Stütze senkrecht auf dem Brett?"** mit Komponenten-Tabelle, in der der Rest
   $-2 a_i b_i$ sichtbar wird – Vorschlag: ja; die Abkürzung wird aus Pythagoras entdeckt, nicht
   vorgegeben. Alternative: nur die Rechnung aus dem Sprinter von Einheit 14 allgemein wiederholen
   (ohne Bild).
2. **Wort „orthogonal"** neben „senkrecht" (wie im Lambacher Schweizer) – Vorschlag: ja, beide,
   „orthogonal (senkrecht)".
3. **Vorzeichen des Skalarprodukts** (spitz / stumpf) nur als Anzeige, **keine Winkelformel**
   mit $\cos\varphi$ – Vorschlag: ja; die Winkelberechnung ist kein Ziel dieser Reihe.
4. **Herleitung aus Pythagoras** im Konzept zum Aufdecken und als Blatt-Aufgabe mit Gerüst
   (Kompetenz K16) – Vorschlag: ja.
5. **Sprinter „senkrecht zu zwei Vektoren"** (Vorgriff auf den Normalenvektor der Q1) – Vorschlag:
   ja, als freiwillige Knobelaufgabe mit dem Ansatz $(1; y; z)$.
