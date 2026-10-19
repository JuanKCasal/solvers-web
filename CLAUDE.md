# CLAUDE.md — solvers-web

Guía de trabajo para Claude (y cualquier colaborador) en este repositorio.
**Leer también `HANDOFF.md` al iniciar cada sesión y actualizarlo al terminar.**

## Proyecto

Sitio web corporativo estático de **Solvers Industriales, C.A.** (RIF J-500294450), empresa venezolana de
servicios de ingeniería mecánica, metalmecánica, eléctrica y civil para los sectores petrolero, petroquímico
e hidrológico (clientes: PDVSA, Pequiven, Hidroven, HidroCaribe, Empresa Nacional de Transporte).

- Responsable técnico: Juan Casal (GitHub **@JuanKCasal**, casaljuanc@gmail.com).
- Dominio: **solversindustriales.com** (administrado desde Google Workspace).
- Repositorio: `github.com/JuanKCasal/solvers-web` (por crear). Copia local: `C:\dev\solvers-web` (Windows).
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
| Stack | **Astro** (versión estable actual al hacer el scaffold) + CSS propio con variables; sin frameworks de UI salvo necesidad clara |
| Hosting | **GitHub Pages**, despliegue con **GitHub Actions** (`withastro/action` + `actions/deploy-pages`) en cada push a `main` |
| Dominio | `solversindustriales.com` (apex) + `www` → redirige al apex; HTTPS forzado |
| Idiomas | **Bilingüe**: español principal en `/`, inglés en `/en/` (i18n nativo de Astro, `prefixDefaultLocale: false`) |
| Estructura | **Multipágina** (ver mapa abajo) |
| Contacto | Botón de **WhatsApp** (+58 412-411 4055), **email** y **formulario** vía servicio externo (Formspree o Web3Forms, por definir) |

## Mapa del sitio (propuesto)

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
├── docs/                 # Documentación del proyecto (empresa.md = contenido)
├── brand/                # Logo vectorial original (PDF) y SVG derivados — fuente, no se publica directo
├── fuentes/brochure/     # Brochure en PDF y fotos extraídas (material crudo, sin optimizar)
├── public/               # (Astro) CNAME, favicon, robots.txt — se copia tal cual
├── src/                  # (Astro, por crear)
│   ├── assets/           #   imágenes optimizadas por Astro (<Image />)
│   ├── components/
│   ├── layouts/
│   ├── i18n/             #   diccionarios es.json / en.json y helpers de rutas
│   ├── content/          #   colecciones: servicios, proyectos, equipos (MD/JSON, ES+EN)
│   └── pages/            #   rutas ES en raíz, EN bajo /en/
└── .github/workflows/deploy.yml
```

Las imágenes que se usen en el sitio se copian de `fuentes/` a `src/assets/` (nunca se enlaza `fuentes/` desde el sitio).

## Identidad visual

- Logos: `brand/logo-solvers.svg` (fondo claro), `brand/logo-solvers-blanco.svg` (fondo oscuro), `brand/isotipo-solvers.svg` (favicon).
- No redibujar, deformar ni recolorear el logo fuera de estas variantes.
- Tokens de color:
  - `--color-naranja: #FE3600` (marca; contraste 3.7:1 sobre blanco → solo texto grande/íconos/botones)
  - `--color-naranja-texto: #C42A00` (variante para enlaces/texto pequeño sobre blanco, 5.7:1)
  - `--color-azul: #001B50` (fondos, header/footer; 16.5:1 con blanco)
  - `--color-negro: #000`, `--color-blanco: #fff`, grises neutros a definir.
- Tipografía: por definir (sans-serif industrial y legible, autoalojada; evitar dependencias de CDN de fuentes si no es necesario).
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

## Comandos (una vez creado el proyecto Astro)

```bash
npm install
npm run dev       # http://localhost:4321
npm run build     # genera dist/
npm run preview
```

## Despliegue y DNS (resumen; detalle en HANDOFF.md)

- GitHub Pages con origen "GitHub Actions"; `public/CNAME` = `solversindustriales.com`; `site: 'https://solversindustriales.com'` en `astro.config`.
- DNS del apex: registros A/AAAA de GitHub Pages; `www` CNAME → `juankcasal.github.io`.
- **No tocar** los registros MX/SPF/DKIM/DMARC de Google Workspace.
- GitHub Pages en cuentas personales gratuitas exige **repositorio público** (privado requiere GitHub Pro).

## Notas del entorno

- Las sesiones con Claude trabajan sobre `C:\dev\solvers-web` a través del puente de escritorio (shell Linux con la carpeta montada);
  git se ejecuta desde ahí con identidad local `Juan Casal <casaljuanc@gmail.com>`.
- Si Git para Windows reclama "dubious ownership": `git config --global --add safe.directory C:/dev/solvers-web`.
