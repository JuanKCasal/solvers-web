# HANDOFF — solvers-web

Estado vivo del proyecto. **Actualizar al final de cada sesión** (qué se hizo, qué sigue, qué falta saber).

## Estado actual — 22-oct-2026 (fin de sesión 5)

**Fase:** 1 · Sitio v1 publicado en **https://solversindustriales.com** con HTTPS, DMARC en monitoreo y Search Console verificado. Pendiente: formulario y contenido.

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
- Verificado: build limpio, 0 enlaces rotos, axe-core WCAG A/AA sin violaciones, sin scroll horizontal en 390 px.

**Sesión 3–4:** Pages activado, DNS en Squarespace → GitHub Pages, dominio propio verificado con HTTPS forzado (detalle abajo).

**Sesión 5 (22-oct-2026)**
- **DMARC** creado en Squarespace: `TXT _dmarc  v=DMARC1; p=none; rua=mailto:presidencia@solversindustriales.com; fo=1` (resuelve en DNS público).
- **Search Console:** propiedad de **dominio** `solversindustriales.com` (cuenta presidencia@) verificada con
  `TXT @ google-site-verification=wDSJwH2Jgpw2zadYA_qeeAa_neq3Y82oZFum8r2WxrI` (**no borrarlo**: Google revalida). Sitemap
  `https://solversindustriales.com/sitemap-index.xml` enviado (estado *Success*). Indexación solicitada para `/` y `/en/`.
  - Ojo: `/` figuraba "Indexada, aunque bloqueada por robots.txt" por un rastreo del **12-oct-2026** (página de aparcamiento previa al sitio).
    El robots.txt actual permite todo; se pidió reindexar. Revisar en unos días en Search Console → Inspección de URL.
- **Maquinaria y equipos (comentarios de Solvers):** la página ahora tiene 3 secciones:
  1. *Alquiler de maquinaria* (5 equipos Volvo/compactador + **Camión Pickman**, con las fotos del camión con grúa articulada).
  2. *Alquiler de equipos y herramientas*: Soldadura de electrodos revestidos (ícono, sin foto), Moto soldadoras (foto Lincoln a motor),
     Sandblasting (foto del compresor CP), Pintura (ícono nuevo `paint`, sin foto).
  3. *Equipos de apoyo*: compresor portátil y torre de iluminación.
  Servicio `maquinaria` renombrado a "Alquiler de maquinaria y equipos" / "Machinery and equipment rental"; meta descriptions ES/EN y `docs/empresa.md` §4.6–4.8 actualizados.
  Verificado: build limpio, 0 enlaces rotos, axe sin violaciones nuevas, sin scroll horizontal en 390 px.

## Próxima sesión (6) — sugerencias

### Navegadores Chrome (Claude in Chrome)
Hay **dos Chrome** con la extensión de Claude conectados. Usar `list_connected_browsers` y `select_browser` para cambiar entre ellos:

| Navegador | Perfil / cuenta | Para qué | deviceId (sesión 5, puede cambiar) |
|---|---|---|---|
| **Browser 1** | casaljuanc@gmail.com — sesión de **GitHub** (@JuanKCasal) | Repo, Pages, Actions | `ea888579-1cea-4116-9328-3bde543a082d` |
| **Browser 2** | **presidencia@solversindustriales.com** — Google Workspace Admin + **Squarespace Domains** (DNS) + Search Console | DNS, DMARC, Search Console | `2f0a376d-4f46-4ba7-8852-d04648c96711` |

- Squarespace pide **código de verificación de 6 dígitos** (app de autenticación) antes de cambiar DNS: pedírselo a Juan; Claude no lo ingresa.
  Conviene preparar todos los registros antes de pedir el código (se crean varios en la misma pasada).
- GitHub puede pedir "Confirm access" (GitHub Mobile) para acciones sensibles: lo aprueba Juan.
- DNS: https://account.squarespace.com/domains/managed/solversindustriales.com/dns/dns-settings → "Registros personalizados" → "Agregar registro".
  El combobox "Tipo" es personalizado: abrir y hacer clic en la opción (la lista puede abrirse hacia arriba).
- Build desde Claude: la carpeta no tiene `node_modules` (y no conviene instalar binarios de Linux en ella). Copiar el repo a `$HOME/sw`
  en la VM (`tar --exclude=.git --exclude=fuentes`), `npm ci` y `npm run build` ahí.

### Tareas
1. **Search Console:** confirmar que `/` y `/en/` aparecen indexadas sin el aviso de robots.txt y que el sitemap descubre las 22 URL; revisar "Páginas".
2. **DMARC:** revisar reportes en presidencia@ durante 2–4 semanas; si SPF/DKIM pasan, subir a `p=quarantine` (y luego `p=reject`).
   Opcional: en Workspace Admin → Apps → Gmail → Autenticar correo, confirmar que DKIM está "Autenticando".
3. **Fotos de alquiler:** pedir a Solvers fotos propias de equipos de soldadura por electrodo revestido, sandblasting (equipo de chorro) y pintura;
   hoy dos tarjetas usan ícono y Sandblasting reutiliza la foto del compresor (que también aparece en "Equipos de apoyo").
4. Accesibilidad menor (preexistente): el enlace de idioma del header en EN tiene `aria-label="View this page in Spanish"` y texto visible distinto
   → axe `label-content-name-mismatch` (WCAG 2.5.3). Incluir el texto visible en el `aria-label`.

### Pendientes generales
1. **Formulario:** crear cuenta en Web3Forms o Formspree y poner `endpoint`/`accessKey` en `src/config/site.ts` → `CONTACT_FORM`.
2. Revisión de textos con Solvers (versión en inglés, títulos de proyectos).
3. Completar contenido pendiente (ver preguntas abiertas) y reemplazar fotos por originales en alta.
4. Lighthouse sobre el sitio publicado.
5. Aviso de GitHub: `ubuntu-latest` migra a Ubuntu 26 desde el 19-oct-2026; si el build fallara por eso, fijar `runs-on: ubuntu-24.04`.

### Hecho en la sesión 4 (22-oct-2026)
- Squarespace DNS: eliminado el bloque "Opciones predeterminadas de Squarespace"; 4 A + 4 AAAA (@), CNAME `www → juankcasal.github.io`,
  TXT `_github-pages-challenge-JuanKCasal` (dominio verificado en GitHub). Correo intacto (MX `smtp.google.com`, SPF, DKIM). Sin DMARC aún.
- GitHub: dominio `solversindustriales.com` en Pages, **Enforce HTTPS** activo, variables `SITE_URL`/`BASE_PATH` borradas.
- Sitio en producción: **https://solversindustriales.com** (todo pusheado a `origin/main`).
- Caché: Pages sirve con `max-age=600`; si una página queda pegada en una versión vieja, volver a ejecutar el workflow y recargar con Ctrl+Shift+R.

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
| TXT | `_dmarc` | `v=DMARC1; p=none; rua=mailto:presidencia@solversindustriales.com; fo=1` (sesión 5) |
| TXT | @ | `google-site-verification=wDSJwH2Jgpw2zadYA_qeeAa_neq3Y82oZFum8r2WxrI` (Search Console, sesión 5; convive con el SPF) |

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
- [x] "Pickman": Solvers lo llama **Camión Pickman** y lo ofrece en alquiler (22-oct-2026). Aplicado en la sesión 5.
- [ ] Confirmar que "Soldadura de electrodos revestidos" = alquiler de equipos SMAW y que "Pintura" = equipos de aplicación (así se describe hoy en el sitio).
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
- [x] DNS en Squarespace Domains (cuenta presidencia@solversindustriales.com, con 2FA).

## Registro de sesiones

| Fecha | Sesión | Resumen |
|---|---|---|
| 2026-10-19 | 1 | Extracción del brochure, logo vectorial, CLAUDE.md, HANDOFF.md, primer commit; push a GitHub. |
| 2026-10-19 | 2 | Sitio v1 en Astro 7 (ES/EN, 22 páginas), workflow de Pages, SEO, accesibilidad verificada. |
| 2026-10-19 | 3 | GitHub Pages activado (Actions) y sitio publicado en juankcasal.github.io/solvers-web. |
| 2026-10-22 | 4 | DNS en Squarespace → GitHub Pages; dominio propio con HTTPS forzado; dominio verificado; variables de vista previa eliminadas. |
| 2026-10-22 | — | Comentarios de Solvers recibidos (alquiler de equipos/herramientas y Camión Pickman). Próxima sesión: DMARC, Search Console y esos cambios. |
| 2026-10-22 | 5 | DMARC (p=none), Search Console verificado + sitemap + indexación de / y /en/; alquiler de equipos/herramientas y Camión Pickman en Maquinaria. |
