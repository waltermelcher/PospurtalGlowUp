import { defineConfig } from 'astro/config';

// Deployed to GitHub Pages at https://waltermelcher.github.io/pospurtal/
export default defineConfig({
  site: 'https://waltermelcher.github.io',
  base: '/pospurtal/',
  compressHTML: true,
});
