import { defineConfig } from 'astro/config';

// Der Standard ist die Produktion. Damit liefert jeder Host, der einfach
// "astro build" bzw. "npm run build" ausfuehrt (Cloudflare, Hostinger-CI,
// lokal), automatisch die richtige Fassung: Domain www.pospurtal.de, Pfade ab /.
//
// Nur die GitHub-Pages-Vorschau ist der Sonderfall. Sie laeuft unter
// waltermelcher.github.io/pospurtal/ und darf nicht indexiert werden; ihr
// Workflow setzt dafuer DEPLOY_TARGET=github.
const isPreview = process.env.DEPLOY_TARGET === 'github';

export default defineConfig({
  site: isPreview ? 'https://waltermelcher.github.io' : 'https://www.pospurtal.de',
  base: isPreview ? '/pospurtal/' : '/',
  compressHTML: true,
});
