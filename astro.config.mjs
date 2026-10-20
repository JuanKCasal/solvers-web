// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// SITE_URL y BASE_PATH permiten publicar temporalmente en
// https://juankcasal.github.io/solvers-web/ antes de que el DNS esté listo.
// En producción (dominio propio) no se define ninguna de las dos.
const site = process.env.SITE_URL || 'https://solversindustriales.com';
const base = process.env.BASE_PATH || '/';

export default defineConfig({
  site,
  base,
  trailingSlash: 'always',
  integrations: [
    sitemap({
      filter: (page) => !page.includes('/404'),
    }),
  ],
  build: {
    format: 'directory',
  },
});
