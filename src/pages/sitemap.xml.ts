import type { APIRoute } from 'astro';

const seiten = ['', 'impressum', 'datenschutz'];

export const GET: APIRoute = ({ site }) => {
  const base = import.meta.env.BASE_URL;
  const urls = seiten
    .map((p) => `  <url><loc>${new URL(base + p, site).toString()}</loc></url>`)
    .join('\n');

  const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>
`;

  return new Response(body, { headers: { 'Content-Type': 'application/xml; charset=utf-8' } });
};
