import type { APIRoute } from 'astro';

/**
 * Produktion (pospurtal.de): Crawling erlaubt, Sitemap verlinkt.
 * Vorschau (GitHub Pages): komplett gesperrt – die Vorschau soll nicht in den
 * Suchindex. Das ergänzt das noindex-Meta im Layout.
 */
export const GET: APIRoute = ({ site }) => {
  const isProd = site?.hostname.endsWith('pospurtal.de') ?? false;
  const sitemap = new URL(`${import.meta.env.BASE_URL}sitemap.xml`, site).toString();

  const body = isProd
    ? `User-agent: *\nAllow: /\n\nSitemap: ${sitemap}\n`
    : `User-agent: *\nDisallow: /\n`;

  return new Response(body, { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
};
