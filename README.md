# CV online · Augusto Roubineau

Sitio con mi currículum: experiencia, formación, skills y proyectos, con una página por proyecto y el CV en PDF.
Tiene modo claro/oscuro. Publicado en https://augstr.github.io/.

## Cómo está hecho

- **[Astro 7](https://astro.build)** genera un HTML estático; se publica en GitHub Pages con el workflow
  `.github/workflows/deploy.yml` en cada push a `main`.
- **El contenido vive en archivos de datos** (`src/data/cv.ts` y `src/data/proyectos.ts`).
  Para actualizar el CV se editan esos archivos; el diseño no se toca.
- **Los proyectos son una Content Collection** validada con **Zod** (`src/content.config.ts`):
  un dato mal cargado (un link que no es URL, un tipo que no existe) frena el build en lugar de publicarse.
- **CV en PDF** (`/cv.pdf`): lo arma **PDFKit** en cada build con los mismos datos que la página.
- **View Transitions** (`<ClientRouter />`): la captura de cada tarjeta se transforma en la imagen de su página de caso.
- **Diseño propio** en CSS, sin frameworks de estilos, con estética de ficha técnica: reglas finas, columna de
  etiquetas, un diagrama SVG en el hero y un cuadro de datos al pie, como el rótulo de un plano.
- **Fuentes:** IBM Plex Sans y Plex Mono autoalojadas con `@fontsource` (sin Google Fonts). **Íconos:** SVG inline.
- **Datos estructurados** `schema.org/Person` con la credencial de Cisco.

| Archivo | Qué hace |
|---|---|
| `src/data/cv.ts` | Trabajos, estudios, skills, idiomas, intereses y el resumen del PDF |
| `src/data/proyectos.ts` | Los proyectos: tarjeta, tipo, caso completo y links |
| `src/content.config.ts` | El esquema Zod que valida los proyectos |
| `src/data/coleccion.ts` | `listarProyectos()` (ya validados y en orden) y `capturaDe(slug)` |
| `src/assets/proyectos/` | Captura de cada proyecto (`<slug>.jpg`), que Astro optimiza a AVIF y WebP |
| `src/assets/fuentes-pdf/` | IBM Plex completa (licencia OFL) para el PDF; las de `@fontsource` son subconjuntos que PDFKit no lee |
| `src/layouts/Base.astro` | Estructura común: `<head>`, menú y pie |
| `src/pages/index.astro` | La portada: arma cada sección a partir de los datos |
| `src/pages/proyectos/[slug].astro` | La página de caso de cada proyecto (`/proyectos/<slug>/`) |
| `src/pages/cv.pdf.ts` | Genera `/cv.pdf` |
| `src/styles/global.css` | Estilos, variables de color para los dos temas y diseño responsive |
| `src/scripts/main.ts` | Tema (se recuerda en `localStorage`), menú mobile, filtro de proyectos y link activo del menú |
| `public/img/` | Foto y logo |
| `public/` | `robots.txt`, `sitemap.xml` y `llms.txt` |

El tema se aplica con un script mínimo en el `<head>` para que la página no "parpadee" al cargar, y se vuelve a
aplicar después de cada navegación (`astro:after-swap`).

## Cómo actualizar

- **Un proyecto nuevo:** sumar un objeto a `PROYECTOS` en `src/data/proyectos.ts` y su captura en
  `src/assets/proyectos/<slug>.jpg` (ideal 1568 × 744 o 16:9). Su página de caso y su línea en el PDF se generan solas.
  Si es de tipo `infra`, el filtro "Infra y automatización" aparece solo.
- **Un trabajo o estudio nuevo:** sumarlo arriba de todo en `EXPERIENCIA` o `FORMACION`.
- Los textos con negrita se escriben con `<strong>` (en el PDF se quitan las etiquetas).

## Desarrollo

Requiere Node.js 22.23 o más nuevo.

```bash
npm install
npm run dev      # http://localhost:4321/
npm run build    # genera dist/ (incluye dist/cv.pdf)
```
