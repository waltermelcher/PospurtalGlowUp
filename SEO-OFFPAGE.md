# SEO — Off-Page-Aufgaben (mit deinen Konten)

Diese Schritte kann nur du ausführen, weil sie deine Google-/Cloudflare-Konten
brauchen. Reihenfolge = Priorität. Die On-Page-Technik (Title, H1, JSON-LD,
Sitemap) ist bereits umgesetzt und live.

---

## B1 — Alte Domain umleiten (WICHTIGSTER PUNKT, zuerst)

`pospurtal-rhp.de` ist noch online und in Google indexiert. Sie zeigt veraltete
Infos (frühere Besetzung) und splittet die Sichtbarkeit von zwei Domains auf.
Sie liegt in deinem Cloudflare-Account.

**Weiterleitung einrichten (alles → neue Startseite, 301):**

1. Cloudflare-Dashboard → Domain **pospurtal-rhp.de** wählen.
2. Links im Menü: **Rules → Redirect Rules → Create rule**.
3. Name: z. B. „Umleitung auf pospurtal.de".
4. **When incoming requests match:** „All incoming requests".
5. **Then / URL Redirect:**
   - Type: **Dynamic**
   - Expression: `concat("https://www.pospurtal.de/")`
   - Status code: **301** (permanent)
   - Haken bei „Preserve query string" ist egal, kann aus bleiben.
6. **Deploy**.

Warum auf die Startseite und nicht 1:1: Die alten Pfade (z. B.
`/musiker/marius-schäfer`) gibt es auf der neuen Seite nicht — eine pauschale
Weiterleitung auf die Startseite ist hier korrekt und vermeidet 404-Ketten.

**Danach testen:** `https://pospurtal-rhp.de/musiker` im Browser → muss auf
`https://www.pospurtal.de/` springen.

**Wichtig:** Die Domain weiter verlängern, nicht auslaufen lassen — sonst geht
die Weiterleitung (und damit die aufgebaute Linkkraft) verloren.

---

## B2 — Google Search Console

1. https://search.google.com/search-console → **Property hinzufügen**.
2. Typ **Domain** wählen, `pospurtal.de` eingeben.
3. Google zeigt einen **TXT-Eintrag** zur Verifizierung. Diesen bei Cloudflare
   unter **pospurtal.de → DNS → Records → Add record** anlegen (Typ TXT, Name
   `@`, Inhalt = der von Google genannte Wert, „DNS only").
4. In der Search Console auf **Verify** klicken.
5. Danach links **Sitemaps** → `sitemap.xml` eintragen und absenden.
6. Unter **URLs prüfen** die Startseite testen → „Indexierung beantragen".

**Alte Domain mit aufnehmen:** Dieselbe Prozedur für `pospurtal-rhp.de`, um zu
sehen, wie sie langsam aus dem Index verschwindet. Über **Entfernen** kannst du
das Ausblenden beschleunigen.

**Bing nicht vergessen:** https://www.bing.com/webmasters — dort lässt sich die
Property direkt aus der Search Console importieren.

---

## B3 — Google Unternehmensprofil

Für lokale Suchen („Posaunenquartett Mainz") und die Info-Box rechts in Google.

1. https://business.google.com → Profil erstellen.
2. Name: **Pospurtal – Das Rheinhessische Posaunenquartett**.
3. Kategorie: **Musikensemble** bzw. „Performing Arts Group".
4. Adresse: aus dem Impressum (Mainz). Falls du keine öffentliche Adresse
   zeigen willst, als **Einzugsgebiet** „Mainz / Rheinhessen / Rhein-Main"
   angeben statt einer Straße.
5. Website: `https://www.pospurtal.de`, E-Mail/Telefon ergänzen.
6. Fotos hochladen (das Quartett-Foto), erste Termine eintragen.
7. Verifizierung abwarten (Postkarte oder Video).

---

## B4 — Backlinks (regionale Links aufbauen)

Ziel: 10–15 saubere Links von regionalen, thematisch passenden Seiten. Jeder
Link von einer Veranstalter- oder Presseseite zählt.

**Konkret ansprechen — bitte um einen klickbaren Link auf `www.pospurtal.de`:**
- Kirchengemeinden vergangener/kommender Konzerte
- Büchnerbühne (Rosenprojekt)
- Johannes Gutenberg-Universität Mainz
- Kreistag Groß-Gerau
- Presse: SZ/BZ, blick-aktuell.de, szbz.de — bei Online-Artikeln nachfragen,
  ob der Name als Link gesetzt werden kann

**Kulturkalender eintragen (Link + Sichtbarkeit):**
- Veranstaltungskalender der Stadt Mainz
- regionale Kultur-/Eventportale Rheinhessen

**Altlasten prüfen:** Wo verweisen bestehende Artikel noch auf
`pospurtal-rhp.de`? Dort um Korrektur auf `pospurtal.de` bitten. Dank B1
funktionieren die alten Links zwar weiter (Weiterleitung), ein direkter Link
ist aber stärker.

---

## B5 — Laufend

- **Nach jedem neuen/geänderten Termin:** Daten in `src/content/…` bzw.
  `src/data/konzerte.ts` pflegen (der Termin landet automatisch im JSON-LD und
  damit in Googles Event-Anzeige).
- **Quartalsweise Search Console prüfen:** Für welche Begriffe erscheint die
  Seite? Crawling-Fehler? Ist `pospurtal-rhp.de` aus dem Index verschwunden?
- **Einmal** https://pagespeed.web.dev für `www.pospurtal.de` laufen lassen —
  bei Astro/Cloudflare sollte alles grün sein.

---

## Bereits erledigt (zur Info)

- Titel & Beschreibung der Startseite mit Region und Anlass
- H1 enthält den vollständigen Namen
- Strukturierte Daten (MusicGroup + Konzerte als MusicEvent) — live
- sitemap.xml, robots.txt, Canonical, saubere URLs mit Trailing Slash
- Bilder als WebP, mobil optimiert, schnelle Auslieferung über Cloudflare
