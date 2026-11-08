# Site Clic Silver : construit par Astro, servi par nginx (build multi-étapes, DEC-VITRINE-010). Images épinglées par empreinte.
# Étape 1 : construction (Node 22.23.4, minimum exigé par Astro 7.4.2).
FROM node:22.23.4-alpine@sha256:0e1754758c2df4cfa3e68d59e2e1b7374bb7fd9ea6328eaaacf15cc934af8202 AS construction
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm ci --omit=dev --ignore-scripts --no-audit --no-fund
COPY astro.config.mjs ./
COPY public ./public
COPY src ./src
ENV ASTRO_TELEMETRY_DISABLED=1
RUN npx astro build

# Étape 2 : service (nginx 1.30.6), fichiers statiques seulement.
FROM nginx:1.30.6-alpine@sha256:583b7f2fce1cdb8da5ad5c39ebd3c33b98b87d493190e548bdee1fa8c619c311
COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=construction /app/dist/ /usr/share/nginx/html/
EXPOSE 80
HEALTHCHECK --interval=30s --timeout=3s CMD wget -q -O /dev/null http://127.0.0.1/ || exit 1
