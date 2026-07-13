# Pospurtal — Website

Neuauflage der Website von [www.pospurtal.de](https://www.pospurtal.de) mit
[Astro](https://astro.build). Inhalte, Bilder und Struktur wurden von der
bestehenden Webflow-Seite übernommen und in ein neues, elegantes Design
(„Dark & Brass") überführt.

## Befehle

```bash
npm install      # Abhängigkeiten installieren
npm run dev      # Entwicklungsserver auf http://localhost:4321
npm run build    # Statische Seite nach ./dist bauen
npm run preview  # Produktions-Build lokal ansehen
```

## Struktur

```
src/
├─ layouts/Base.astro        # HTML-Grundgerüst, Fonts, SEO-Meta, Scroll-Reveal
├─ components/
│  ├─ Nav.astro              # Sticky-Navigation + Mobile-Menü
│  ├─ Hero.astro             # Vollbild-Hero (auf Mobile gestapelt)
│  ├─ About.astro            # „Über uns"
│  ├─ Konzerte.astro         # Konzerttermine (Datenliste im Frontmatter)
│  ├─ ProgrammSection.astro  # Programm-Sektion (Bild oder Video), alterniert
│  ├─ Projekt.astro          # Musiktheater-Sonderprojekt (Poster-Stil)
│  ├─ Musiker.astro          # Vier Musikerprofile
│  ├─ Medien.astro           # Galerie mit Fotos & YouTube-Videos (Lightbox)
│  ├─ Kontakt.astro          # Kontaktbereich
│  ├─ Footer.astro
│  └─ LegalShell.astro       # Layout für Rechtsseiten
├─ data/programme.ts         # Inhalte der Programm-Sektionen
├─ pages/
│  ├─ index.astro            # Startseite (eine Seite, Anker-Navigation)
│  ├─ impressum.astro
│  └─ datenschutz.astro
└─ styles/global.css         # Design-System (Farben, Typo, Buttons)
```

## Inhalte pflegen

- **Konzerttermine:** im Frontmatter von `src/components/Konzerte.astro`
  (Array `concerts`).
- **Programme:** in `src/data/programme.ts`. Ein neuer Eintrag erzeugt
  automatisch eine weitere Sektion; Layout und Hintergrund alternieren von
  selbst. Mit `video: '<YouTube-ID>'` erscheint statt des Bildes ein Video.
- **Musiker / Bios:** im Frontmatter von `src/components/Musiker.astro`.
- **Bilder:** liegen in `public/images/` und werden mit gleichem Namen ersetzt.
- **Farben & Typografie:** zentral in `src/styles/global.css` (`:root`).

## Deployment

Die Seite wird automatisch via **GitHub Actions** nach **GitHub Pages**
veröffentlicht (`.github/workflows/deploy.yml`). Jeder Push auf `main` baut und
deployt die Seite nach:

👉 https://waltermelcher.github.io/pospurtal/

Der Pfad-Präfix (`base: '/pospurtal/'`) ist in `astro.config.mjs` gesetzt.
Bei späterem Umzug auf eine eigene Domain (z. B. pospurtal.de) `base` auf `'/'`
setzen und eine `CNAME`-Datei in `public/` hinterlegen.

## Offene Punkte

- **Impressum & Datenschutz** enthalten Platzhaltertexte — bitte durch die
  rechtsverbindlichen Texte der bestehenden Seite ersetzen.
- **Social-Links** im Footer zeigen aktuell auf die Plattform-Startseiten —
  echte Profil-URLs eintragen.

Bilder wurden bereits nach WebP konvertiert und verkleinert (~11 MB → ~1 MB).
