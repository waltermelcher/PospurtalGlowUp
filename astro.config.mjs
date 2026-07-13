import { defineConfig } from 'astro/config';

import cloudflare from '@astrojs/cloudflare';

// Ein Codestand, zwei Ausgaben – Unterschied ist nur site/base:
//
//   Produktion (www.pospurtal.de, Pfade ab /)
//     npm run build:prod            -> setzt DEPLOY_TARGET=production
//     Cloudflare Pages              -> wird an CF_PAGES automatisch erkannt
//
//   GitHub-Pages-Vorschau (waltermelcher.github.io/pospurtal/)
//     npm run build                 -> Standard, nicht indexierbar
//
// Wichtig: Wird die Produktionsfassung mit dem falschen Ziel gebaut, zeigen
// alle Asset-Pfade auf /pospurtal/ und die Seite laedt ohne Design.
const isProd =
  process.env.DEPLOY_TARGET === 'production' || process.env.CF_PAGES === '1';

export default defineConfig({
  site: isProd ? 'https://www.pospurtal.de' : 'https://waltermelcher.github.io',
  base: isProd ? '/' : '/pospurtal/',
  compressHTML: true,
  adapter: cloudflare(),
});