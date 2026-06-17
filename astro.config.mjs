import { defineConfig } from 'astro/config';

// Deployed to GitHub Pages at https://waltermelcher.github.io/PospurtalGlowUp/
export default defineConfig({
  site: 'https://waltermelcher.github.io',
  base: '/PospurtalGlowUp/',
  compressHTML: true,
});
