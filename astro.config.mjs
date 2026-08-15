// @ts-check
import { defineConfig } from 'astro/config';

// ⚠️ Quand vous aurez votre adresse définitive (ex. https://lechantier.pages.dev
// ou https://lechantier.fr), remplacez la ligne « site » ci-dessous.
export default defineConfig({
  site: 'https://le-chantier.pages.dev',
  markdown: {
    // Jolies apostrophes et guillemets français automatiques
    smartypants: true,
  },
});
