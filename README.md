# Pospurtal — Website (Glow Up)

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
│  ├─ Hero.astro             # Vollbild-Hero
│  ├─ About.astro            # „Über uns" mit Statistiken
│  ├─ Konzerte.astro         # Konzerttermine (Datenliste oben im Frontmatter)
│  ├─ Projekt.astro          # Musiktheater-Sonderprojekt
│  ├─ Musiker.astro          # Vier Musikerprofile
│  ├─ Medien.astro           # Foto-Galerie mit Lightbox
│  ├─ Kontakt.astro          # Kontaktbereich
│  ├─ Footer.astro
│  └─ LegalShell.astro       # Layout für Rechtsseiten
├─ pages/
│  ├─ index.astro            # Startseite (eine Seite, Anker-Navigation)
│  ├─ impressum.astro
│  └─ datenschutz.astro
└─ styles/global.css         # Design-System (Farben, Typo, Buttons)
```

## Inhalte pflegen

- **Konzerttermine:** im Frontmatter von `src/components/Konzerte.astro`
  (Array `concerts`).
- **Musiker / Bios:** im Frontmatter von `src/components/Musiker.astro`.
- **Bilder:** liegen in `public/images/` und werden mit gleichem Namen ersetzt.
- **Farben & Typografie:** zentral in `src/styles/global.css` (`:root`).

## Deployment

Die Seite wird automatisch via **GitHub Actions** nach **GitHub Pages**
veröffentlicht (`.github/workflows/deploy.yml`). Jeder Push auf `main` baut und
deployt die Seite nach:

👉 https://waltermelcher.github.io/PospurtalGlowUp/

Der Pfad-Präfix (`base: '/PospurtalGlowUp/'`) ist in `astro.config.mjs` gesetzt.
Bei späterem Umzug auf eine eigene Domain (z. B. pospurtal.de) `base` auf `'/'`
setzen und eine `CNAME`-Datei in `public/` hinterlegen.

## Offene Punkte

- **Impressum & Datenschutz** enthalten Platzhaltertexte — bitte durch die
  rechtsverbindlichen Texte der bestehenden Seite ersetzen.
- **Social-Links** im Footer zeigen aktuell auf die Plattform-Startseiten —
  echte Profil-URLs eintragen.

Bilder wurden bereits nach WebP konvertiert und verkleinert (~11 MB → ~1 MB).
