# HANDOFF — solvers-web

Estado vivo del proyecto. **Actualizar al final de cada sesión** (qué se hizo, qué sigue, qué falta saber).

## Estado actual — 19-oct-2026 (sesión 2)

**Fase:** 1 · Sitio v1 publicado en **https://solversindustriales.com** (22-oct-2026) con HTTPS forzado y dominio verificado en GitHub. Pendiente: formulario y contenido.

### Hecho
**Sesión 1**
- Información del brochure → `docs/empresa.md`; brochure en PDF y 49 fotos → `fuentes/brochure/`.
- Logo vectorial (`brand/`) y paleta de marca. Repo inicializado y subido a `github.com/JuanKCasal/solvers-web`.

**Sesión 2**
- Proyecto **Astro 7.4** con `@astrojs/sitemap`, Barlow/Barlow Condensed autoalojadas, CSS propio.
- 22 páginas + 404: Inicio, Nosotros, Servicios (índice + 5 detalles), Proyectos (11 trabajos con galería), Maquinaria y equipos, Contacto — en español e inglés.
- Collages del brochure recortados en fotos individuales → `src/assets/fotos/` (95 fotos; Astro genera WebP).
- SEO: title/description por página, canonical, hreflang es/en/x-default, Open Graph (`public/og-image.jpg`), JSON-LD `Organization`, sitemap, robots.txt.
- Botón flotante de WhatsApp, galería con visor accesible, menú móvil, formulario de contacto (modo mailto hasta configurar servicio).
- Workflow `.github/workflows/deploy.yml` (checkout@v7, withastro/action@v6 con Node 24, deploy-pages@v5).
- Base path configurable por variables (`SITE_URL`, `BASE_PATH`) para publicar en github.io antes del DNS.
- Verificado: build limpio, 0 enlaces rotos, axe-core WCAG A/AA sin violaciones, sin scroll horizontal en 390 px.

## Próximos pasos

Hecho el 22-oct-2026:
- Squarespace DNS: eliminado el bloque "Opciones predeterminadas de Squarespace"; creados 4 A + 4 AAAA (@) y CNAME `www → juankcasal.github.io`.
  Correo intacto (MX `smtp.google.com`, SPF, DKIM). Nota: no hay registro DMARC (recomendable agregarlo).
- GitHub: dominio `solversindustriales.com` guardado en Pages; variables `SITE_URL`/`BASE_PATH` borradas; workflow #3 OK.

- HTTPS: certificado emitido y **Enforce HTTPS** activado.
- Dominio verificado en GitHub (TXT `_github-pages-challenge-JuanKCasal` en Squarespace).
- Ojo con la caché: GitHub Pages sirve con `max-age=600`; tras un cambio grande, recargar con Ctrl+Shift+R. Si la portada queda pegada en una versión vieja, volver a ejecutar el workflow.

1. **Formulario:** crear cuenta en Web3Forms o Formspree y poner `endpoint`/`accessKey` en `src/config/site.ts` → `CONTACT_FORM`.
2. Revisión de textos con Solvers (versión en inglés, títulos de proyectos).
3. Completar contenido pendiente (ver preguntas abiertas) y reemplazar fotos por originales en alta.
4. Google Search Console (verificar dominio por DNS TXT, enviar `sitemap-index.xml`) y Lighthouse.
5. Aviso de GitHub: `ubuntu-latest` migra a Ubuntu 26 desde el 19-oct-2026; si el build fallara por eso, fijar `runs-on: ubuntu-24.04`.

## Cómo trabajar en local (Windows)

```powershell
cd C:\dev\solvers-web
node -v          # requiere >= 22.22 (recomendado 24 LTS)
npm install
npm run dev      # http://localhost:4321
```
`node_modules/` y `dist/` están en `.gitignore`.

## DNS — solversindustriales.com → GitHub Pages

En el panel DNS del dominio (comprado vía Google Workspace; hoy esos dominios suelen administrarse
desde Squarespace Domains — confirmar dónde está):

| Tipo | Host | Valor |
|---|---|---|
| A | @ | 185.199.108.153 |
| A | @ | 185.199.109.153 |
| A | @ | 185.199.110.153 |
| A | @ | 185.199.111.153 |
| AAAA | @ | 2606:50c0:8000::153 |
| AAAA | @ | 2606:50c0:8001::153 |
| AAAA | @ | 2606:50c0:8002::153 |
| AAAA | @ | 2606:50c0:8003::153 |
| CNAME | www | juankcasal.github.io |
| TXT | `_github-pages-challenge-JuanKCasal` | (valor que da GitHub → Settings (perfil) → Pages → Verified domains) |

- Eliminar cualquier A/CNAME previo del apex o `www` que apunte a otro lado (p. ej. parking).
- **No tocar** MX, SPF, DKIM ni DMARC de Google Workspace.
- En el repo → Settings → Pages: Custom domain = `solversindustriales.com` y **Enforce HTTPS** (cuando GitHub emita el certificado).
- Verificar los valores contra la documentación vigente de GitHub Pages antes de aplicarlos.

## Preguntas abiertas (para Solvers / Juan)

**Contenido**
- [ ] **Misión** de la empresa (el brochure solo trae Visión; la página Nosotros no muestra misión).
- [ ] Año de fundación exacto (el sitio dice "+6 años", según el brochure).
- [ ] Dirección física / ciudad / estado y si se quiere mapa (Google Maps). Hoy el sitio solo dice "cobertura nacional".
- [ ] Horario de atención.
- [ ] Redes sociales (Instagram, LinkedIn, Facebook…).
- [ ] Certificaciones, registros y afiliaciones (RNC, ISO, normas de soldadura, etc.).
- [ ] Autorización para mostrar **logos** de PDVSA, Pequiven, Hidroven, HidroCaribe, ENT (hoy solo nombres en texto).
- [ ] Más clientes, proyectos recientes o cifras publicables.
- [ ] Compactador: la placa dice **BW 211 D-40** (modelo típico de Bomag); el brochure dice "Mobac". Confirmar marca. Hoy se muestra solo el modelo.
- [ ] "Pickman": en las fotos son camiones con grúa articulada (¿"Pitman"?). Hoy se muestra como "Camión con grúa articulada".
- [ ] En las fotos de maquinaria aparecen equipos que no están en la lista del brochure (motoniveladora sobre lowboy, camión plataforma,
      mezcladora, compactadores manuales). ¿Se ofrecen en alquiler? Hoy no se muestran.
- [ ] Fotos en **alta resolución** de proyectos y maquinaria (muchas del brochure rondan 300 px).
- [ ] ¿Foto del presidente (Edgar J. Hernández R.) para "Nosotros"? Hoy hay un mensaje suyo basado en la carta del brochure.
- [ ] Revisar textos derivados: títulos y descripciones cortas de proyectos, "sectores que atendemos", lema del hero.

**Técnicas / operativas**
- [ ] Servicio y correo de destino del formulario (Web3Forms vs Formspree).
- [ ] ¿Correo corporativo `@solversindustriales.com` en Workspace para publicarlo en lugar del Gmail?
- [ ] ¿Analítica? (ninguna / Plausible / GA4). Hoy no hay ninguna.
- [ ] Confirmar que el repo es público.
- [ ] ¿Dónde se administra el DNS exactamente y quién tiene acceso?

## Registro de sesiones

| Fecha | Sesión | Resumen |
|---|---|---|
| 2026-10-19 | 1 | Extracción del brochure, logo vectorial, CLAUDE.md, HANDOFF.md, primer commit; push a GitHub. |
| 2026-10-19 | 2 | Sitio v1 en Astro 7 (ES/EN, 22 páginas), workflow de Pages, SEO, accesibilidad verificada. |
| 2026-10-19 | 3 | GitHub Pages activado (Actions) y sitio publicado en juankcasal.github.io/solvers-web. |
| 2026-10-22 | 4 | DNS en Squarespace → GitHub Pages; dominio propio con HTTPS forzado; dominio verificado; variables de vista previa eliminadas. |
| — | — | Recomendado: agregar registro DMARC (TXT `_dmarc`) para el correo de Workspace. |
