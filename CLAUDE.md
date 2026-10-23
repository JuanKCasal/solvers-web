# CLAUDE.md — solvers-web

Guía de trabajo para Claude (y cualquier colaborador) en este repositorio.
**Leer también `HANDOFF.md` al iniciar cada sesión y actualizarlo al terminar.**

## Proyecto

Sitio web corporativo estático de **Solvers Industriales, C.A.** (RIF J-500294450), empresa venezolana de
servicios de ingeniería mecánica, metalmecánica, eléctrica y civil para los sectores petrolero, petroquímico
e hidrológico (clientes: PDVSA, Pequiven, Hidroven, HidroCaribe, Empresa Nacional de Transporte).

- Responsable técnico: Juan Casal (GitHub **@JuanKCasal**, casaljuanc@gmail.com).
- Dominio: **solversindustriales.com** (comprado vía Google Workspace; DNS en **Squarespace Domains**). Sitio en producción con HTTPS.
- Repositorio: `github.com/JuanKCasal/solvers-web` (público). Copia local: `C:\dev\solvers-web` (Windows).
- Objetivo: presencia profesional y captación de contactos B2B (contratistas, gerentes de mantenimiento,
  procura de empresas del sector energético).

## Fuente de verdad del contenido

- `docs/empresa.md` → todos los datos de la empresa (servicios, clientes, contacto, visión, flota, marca).
- **No inventar** cifras, certificaciones, clientes, años, direcciones, testimonios ni proyectos. Si falta un dato,
  dejar un marcador visible solo en desarrollo (`TODO(contenido): …`) y anotarlo en `HANDOFF.md`.
- Las erratas del brochure (inglés) se corrigen en la web; ver `docs/empresa.md` §6.

## Decisiones tomadas (19-oct-2026)

| Tema | Decisión |
|---|---|
| Tipo de sitio | Estático, sin backend |
| Stack | **Astro 7** + CSS propio con variables (sin frameworks de UI) + `@astrojs/sitemap`; tipografías Barlow / Barlow Condensed autoalojadas (`@fontsource`) |
| Hosting | **GitHub Pages**, despliegue con **GitHub Actions** (`withastro/action` + `actions/deploy-pages`) en cada push a `main` |
| Dominio | `solversindustriales.com` (apex) + `www` → redirige al apex; HTTPS forzado |
| Idiomas | **Bilingüe**: español principal en `/`, inglés en `/en/` con slugs traducidos. Rutas manuales en `src/i18n/routes.ts` (no se usa el i18n nativo de Astro porque los slugs difieren por idioma) |
| Estructura | **Multipágina** (ver mapa abajo) |
| Contacto | Botón flotante de **WhatsApp** (+58 412-411 4055), **email** y **formulario**: servicio externo configurable en `src/config/site.ts` (`CONTACT_FORM`); sin configurar, el formulario abre el correo (mailto) |
| Dirección visual | **Industrial sobrio**: fondos claros, header/footer azul marino, acentos naranja, fotos protagonistas |

## Mapa del sitio

| ES | EN | Contenido |
|---|---|---|
| `/` | `/en/` | Hero, propuesta de valor, líneas de servicio, clientes, trabajos destacados, CTA |
| `/nosotros/` | `/en/about/` | Quiénes somos, visión (misión pendiente), experiencia del equipo |
| `/servicios/` | `/en/services/` | Índice de líneas de servicio |
| `/servicios/proyectos-y-mantenimiento/` | `/en/services/projects-and-maintenance/` | §4.1 |
| `/servicios/mantenimiento-mecanico/` | `/en/services/mechanical-maintenance/` | §4.3 |
| `/servicios/refractarios-y-aislamiento-termico/` | `/en/services/refractories-and-thermal-insulation/` | §4.4 |
| `/servicios/obras-civiles/` | `/en/services/civil-works/` | §4.5 |
| `/servicios/procura/` | `/en/services/procurement/` | §4.2 |
| `/maquinaria-y-equipos/` | `/en/equipment-rental/` | §4.6 y §4.7 |
| `/proyectos/` | `/en/projects/` | Galería de trabajos ejecutados (casos 1–9 + civiles) |
| `/contacto/` | `/en/contact/` | Formulario, WhatsApp, teléfonos, email |
| `/404` | — | Página de error bilingüe |

## Estructura de carpetas

```
solvers-web/
├── CLAUDE.md, HANDOFF.md, README.md
├── astro.config.mjs        # site/base (SITE_URL, BASE_PATH por variable de entorno), sitemap
├── docs/empresa.md         # contenido de la empresa (fuente de verdad)
├── brand/                  # logo vectorial original (PDF) y SVG derivados
├── fuentes/brochure/       # brochure PDF y fotos extraídas (material crudo; no se publica)
├── public/                 # CNAME, robots.txt, favicon(s), og-image.jpg, logo-solvers.png
├── src/
│   ├── assets/brand/       #   logos usados por el sitio
│   ├── assets/fotos/<cat>/ #   fotos optimizadas por Astro (los collages del brochure ya están recortados)
│   ├── config/site.ts      #   datos de contacto, clientes, WhatsApp, CONTACT_FORM
│   ├── data/               #   servicios.ts, proyectos.ts, equipos.ts, images.ts (contenido ES/EN)
│   ├── i18n/               #   routes.ts (mapa de rutas ES/EN, href() con base) y ui.ts (textos de interfaz)
│   ├── components/         #   Header, Footer, PageHero, ServiceCard, Gallery (lightbox), ContactForm, CtaBand, Icon, WhatsAppFloat
│   ├── layouts/BaseLayout  #   <head> SEO (canonical, hreflang, OG, JSON-LD Organization)
│   ├── views/              #   una vista por página, recibe `lang`
│   └── pages/              #   rutas ES en raíz, EN bajo /en/ (archivos finos que llaman a views/)
└── .github/workflows/deploy.yml
```

Reglas:
- **Todo enlace interno** se construye con `href()` / `route()` de `src/i18n/routes.ts` (respetan el base path).
- Agregar una página = crear la vista en `src/views/`, las dos rutas en `src/pages/` y la clave en `ROUTES`.
- Agregar fotos = copiarlas a `src/assets/fotos/<categoria>/` y referenciarlas en `src/data/` (ruta relativa a `fotos/`).
- `fuentes/` nunca se enlaza desde el sitio.

## Identidad visual

- Logos: `brand/logo-solvers.svg` (fondo claro), `brand/logo-solvers-blanco.svg` (fondo oscuro), `brand/isotipo-solvers.svg` (favicon).
- No redibujar, deformar ni recolorear el logo fuera de estas variantes.
- Tokens de color:
  - `--color-naranja: #FE3600` (marca; contraste 3.7:1 sobre blanco → solo texto grande/íconos/botones)
  - `--color-naranja-texto: #C42A00` (variante para enlaces/texto pequeño sobre blanco, 5.7:1)
  - `--color-azul: #001B50` (fondos, header/footer; 16.5:1 con blanco)
  - `--color-naranja-boton: #D42E00` (fondo de botones con texto blanco, 5.0:1)
  - `--color-negro: #000`, `--color-blanco: #fff`; neutros en `src/styles/global.css`. WhatsApp: `#0E7A40`.
- Tipografía: **Barlow** (texto) y **Barlow Condensed** (títulos, botones, etiquetas en mayúsculas), autoalojadas.
- Estilo: industrial, sobrio, fotográfico; transmitir seguridad y capacidad técnica.

## Convenciones

- **Idioma de trabajo:** español (documentación, comentarios y mensajes de commit).
- **Commits:** Conventional Commits en español (`feat:`, `fix:`, `docs:`, `chore:`, `style:`, `refactor:`, `content:`).
- **Rama principal:** `main` (despliega a producción). Trabajo grande en ramas `feat/...` y PR.
- **Finales de línea:** LF (forzado por `.gitattributes`); el repo se edita desde Windows.
- **Nombres de archivo:** minúsculas, kebab-case, sin acentos ni espacios.
- **Textos:** cada texto visible existe en ES y EN; nada de cadenas duras en componentes (usar `src/i18n/`).
- **Imágenes:** siempre vía `astro:assets` (WebP/AVIF, `width`/`height`, `alt` descriptivo en ambos idiomas, `loading="lazy"` salvo el hero).
- **Accesibilidad:** WCAG 2.1 AA (contraste, foco visible, navegación por teclado, `lang` correcto, landmarks).
- **SEO:** `<title>` y meta description por página e idioma, `hreflang` es/en/x-default, canonical, sitemap (`@astrojs/sitemap`),
  Open Graph, JSON-LD `Organization`/`LocalBusiness` con datos de `docs/empresa.md`.
- **Rendimiento:** objetivo Lighthouse ≥ 95 en las 4 categorías; JS mínimo (islas solo donde haga falta).
- **Logos de clientes:** no publicarlos sin autorización escrita; mientras tanto, solo nombres en texto.
- **Privacidad:** sin trackers por defecto; si se añade analítica, preferir una sin cookies.

## Comandos (Node ≥ 22.22; recomendado Node 24 LTS)

```bash
npm install
npm run dev       # http://localhost:4321
npm run build     # genera dist/
npm run preview
```

## Despliegue y DNS (resumen; detalle en HANDOFF.md)

- GitHub Pages con origen "GitHub Actions" (`.github/workflows/deploy.yml`: checkout@v7, withastro/action@v6, deploy-pages@v5). `public/CNAME` = `solversindustriales.com`.
- `astro.config.mjs` usa por defecto `site = https://solversindustriales.com` y `base = /`. Para publicar en `juankcasal.github.io/solvers-web/` antes del DNS, definir las variables de repositorio `SITE_URL=https://juankcasal.github.io` y `BASE_PATH=/solvers-web` (y borrarlas al activar el dominio).
- DNS del apex: registros A/AAAA de GitHub Pages; `www` CNAME → `juankcasal.github.io`.
- **No tocar** los registros MX/SPF/DKIM/DMARC de Google Workspace.
- GitHub Pages en cuentas personales gratuitas exige **repositorio público** (privado requiere GitHub Pro).

## Calidad (verificado en cada entrega)

- `npm run build` sin errores ni advertencias; enlaces internos y `srcset` sin rotos.
- axe-core (WCAG 2 A/AA) sin violaciones en las páginas principales; sin scroll horizontal a 390 px.

## Notas del entorno

- Las sesiones con Claude trabajan sobre `C:\dev\solvers-web` a través del puente de escritorio (shell Linux con la carpeta montada);
  git se ejecuta desde ahí con identidad local `Juan Casal <casaljuanc@gmail.com>`.
- Si Git para Windows reclama "dubious ownership": `git config --global --add safe.directory C:/dev/solvers-web`.
- Claude no puede hacer `git push` (no tiene credenciales): hace commit local y Juan ejecuta `git push` en PowerShell.
- Si un commit hecho por Claude deja archivos `.lock` en `.git`, pedir permiso de borrado de la carpeta y limpiarlos.
- **Navegadores:** hay dos Chrome con Claude in Chrome — Browser 1 = GitHub (casaljuanc@gmail.com) y Browser 2 =
  presidencia@solversindustriales.com (Workspace, Squarespace DNS, Search Console). Ver tabla en `HANDOFF.md`.
- Producción: **https://solversindustriales.com** (HTTPS forzado; DNS en Squarespace Domains).
