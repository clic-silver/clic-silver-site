// Astro en sortie statique (DEC-VITRINE-009), publié sur GitHub Pages au domaine clic-silver.com (DEC-VITRINE-027). Feuilles de style jamais en ligne : la CSP de nginx n'autorise que 'self'.
import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://clic-silver.com',
  output: 'static',
  trailingSlash: 'ignore',
  build: { format: 'directory', inlineStylesheets: 'never' },
  devToolbar: { enabled: false },
});
