# HANDOFF — solvers-web

Estado vivo del proyecto. **Actualizar al final de cada sesión** (qué se hizo, qué sigue, qué falta saber).

## Estado actual — 19-oct-2026 (sesión 1)

**Fase:** 0 · Arranque (documentación y repo local). Aún no hay código del sitio.

### Hecho
- Extraída toda la información del brochure (`SOLVERS INDUSTRIALES COMPANY BROCHURE.ppt`, 19 láminas) → `docs/empresa.md`.
- Brochure convertido a PDF de referencia → `fuentes/brochure/brochure-solvers-2026.pdf`.
- 49 fotos extraídas sin recomprimir → `fuentes/brochure/fotos/` (índice en `INDEX.md`).
- Logo vectorial original (Illustrator → PDF) en `brand/LOGO_SOLVERS.pdf` y derivados SVG:
  color, blanco (para fondo azul) e isotipo.
- Paleta de marca identificada: naranja `#FE3600`, azul marino `#001B50`, negro.
- Decisiones de arquitectura registradas en `CLAUDE.md` (Astro, GitHub Pages + Actions, ES/EN, multipágina,
  WhatsApp + email + formulario externo).
- Repositorio git inicializado en `C:\dev\solvers-web` (rama `main`), primer commit local. **Sin remoto aún.**

## Próximos pasos

1. **Crear el repo en GitHub** `JuanKCasal/solvers-web` (vacío, sin README) y conectar el remoto:
   ```bash
   git remote add origin https://github.com/JuanKCasal/solvers-web.git
   git push -u origin main
   ```
   (Juan lo hace desde su equipo; requiere sus credenciales de GitHub.)
2. **Scaffold de Astro** en la raíz del repo: `astro.config.mjs` con `site`, i18n (es por defecto, en), `@astrojs/sitemap`;
   estructura `src/` según `CLAUDE.md`; `public/CNAME`; `public/robots.txt`; favicon desde el isotipo.
3. **Workflow** `.github/workflows/deploy.yml` (build con `withastro/action`, deploy con `actions/deploy-pages`).
4. **Sistema de diseño base:** tokens CSS, tipografía, header (logo blanco sobre azul), footer, botón flotante de WhatsApp.
5. **Contenido:** colecciones `servicios`, `proyectos`, `equipos` en ES/EN a partir de `docs/empresa.md`.
6. **Páginas:** Inicio → Servicios (+ detalle) → Proyectos → Maquinaria → Nosotros → Contacto → 404.
7. **Imágenes:** seleccionar, recortar los collages (s10, s11, s13-09, s14, s16) en fotos individuales, optimizar con `astro:assets`.
8. **Formulario:** crear cuenta en Formspree o Web3Forms con el correo destino y cablearlo.
9. **SEO/QA:** metadatos, hreflang, JSON-LD, Lighthouse, accesibilidad, prueba en móvil.
10. **DNS + dominio** (ver abajo) y verificación del dominio en GitHub.

## DNS — solversindustriales.com → GitHub Pages

Hacerlo **después** de que el primer despliegue funcione en `juankcasal.github.io/solvers-web`.

En el panel DNS del dominio (comprado vía Google Workspace; hoy esos dominios se administran normalmente
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
| TXT | `_github-pages-challenge-JuanKCasal` | (valor que da GitHub → Settings → Pages → Verified domains) |

- Eliminar cualquier A/CNAME previo del apex o `www` que apunte a otro lado (p. ej. parking).
- **No tocar** MX, SPF (`v=spf1 include:_spf.google.com ~all`), DKIM ni DMARC de Google Workspace.
- En GitHub → Settings → Pages: Source = GitHub Actions, Custom domain = `solversindustriales.com`, **Enforce HTTPS**.
- Verificar los valores contra la documentación vigente de GitHub Pages antes de aplicarlos.

## Preguntas abiertas (para Solvers / Juan)

**Contenido**
- [ ] **Misión** de la empresa (el brochure solo trae Visión).
- [ ] Año de fundación exacto (el brochure dice "+06 años"; ¿2020?).
- [ ] Dirección física / ciudad / estado y si se quiere mapa (Google Maps).
- [ ] Horario de atención.
- [ ] Redes sociales (Instagram, LinkedIn, Facebook…).
- [ ] Certificaciones, registros y afiliaciones (RNC, ISO, normas de soldadura, etc.).
- [ ] Autorización para mostrar **logos** de PDVSA, Pequiven, Hidroven, HidroCaribe, ENT (si no, solo nombres).
- [ ] ¿Hay más clientes, proyectos recientes o cifras (nº de proyectos, personal, equipos) que se puedan publicar?
- [ ] Compactador: ¿"Mobac" o **Bomag** BW211D-4?
- [ ] "Pickman": ¿qué es exactamente? (en fotos: camiones con grúa articulada).
- [ ] Fotos en **alta resolución** de proyectos y maquinaria (muchas del brochure rondan 300 px).
- [ ] ¿Foto/mensaje del presidente (Edgar J. Hernández R.) en "Nosotros"?

**Técnicas / operativas**
- [ ] Correo de destino del formulario y servicio a usar (Formspree vs Web3Forms).
- [ ] ¿Crear correo corporativo `@solversindustriales.com` en Workspace y publicarlo en lugar del Gmail?
- [ ] ¿Analítica? (ninguna / Plausible / GA4).
- [ ] Repo **público** (necesario para Pages gratis) — confirmar.
- [ ] ¿Dónde se administra el DNS exactamente y quién tiene acceso?

## Registro de sesiones

| Fecha | Sesión | Resumen |
|---|---|---|
| 2026-10-19 | 1 | Extracción del brochure, logo vectorial, CLAUDE.md, HANDOFF.md, primer commit local. |
