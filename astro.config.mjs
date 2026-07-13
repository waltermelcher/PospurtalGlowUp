import { defineConfig } from 'astro/config';

// Zwei Ziele, ein Codestand:
//   npm run build       -> GitHub-Pages-Vorschau (https://waltermelcher.github.io/pospurtal/)
//   npm run build:prod  -> Produktion bei Hostinger (https://www.pospurtal.de/)
// Unterschied ist nur site/base; alles andere ist identisch.
const isProd = process.env.DEPLOY_TARGET === 'hostinger';

export default defineConfig({
  site: isProd ? 'https://www.pospurtal.de' : 'https://waltermelcher.github.io',
  base: isProd ? '/' : '/pospurtal/',
  compressHTML: true,
});
