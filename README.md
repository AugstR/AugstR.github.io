# CV online · Augusto Roubineau

Sitio de una sola página con mi currículum: experiencia, formación, skills y proyectos. Tiene modo claro/oscuro.
Publicado en https://augstr.github.io/.

## Cómo está hecho

- **[Astro 7](https://astro.build)** genera un HTML estático; se publica en GitHub Pages con el workflow
  `.github/workflows/deploy.yml` en cada push a `main`.
- **El contenido vive en un archivo de datos** (`src/data/cv.ts`): experiencia, formación, skills, idiomas y proyectos.
  Para actualizar el CV se edita ese archivo; el diseño no se toca.
- **Diseño propio** en CSS (sin frameworks de estilos) y **JavaScript puro** para el tema y el menú.
- **Fuentes:** Fraunces, Inter y JetBrains Mono desde Google Fonts. **Íconos:** SVG inline.
- **Datos estructurados** `schema.org/Person` con la credencial de Cisco.

| Archivo | Qué hace |
|---|---|
| `src/data/cv.ts` | Todo el contenido que cambia: trabajos, estudios, skills, idiomas y proyectos |
| `src/pages/index.astro` | La página: arma cada sección a partir de los datos |
| `public/estilos/styles.css` | Estilos, variables de color para los dos temas y diseño responsive |
| `public/js/main.js` | Cambio de tema (se recuerda en `localStorage`), menú mobile, animaciones de aparición con `IntersectionObserver` y link activo del menú |
| `public/img/` | Foto y logo |
| `public/` | `robots.txt`, `sitemap.xml` y `llms.txt` |

El tema se aplica con un script mínimo en el `<head>` para que la página no "parpadee" al cargar.

## Cómo actualizar

- **Un proyecto nuevo:** sumar un objeto a `PROYECTOS` en `src/data/cv.ts` (etiqueta, título, descripción, tags y link).
- **Un trabajo o estudio nuevo:** sumarlo arriba de todo en `EXPERIENCIA` o `FORMACION`.
- Los textos con negrita se escriben con `<strong>`.

## Desarrollo

Requiere Node.js 22.23 o más nuevo.

```bash
npm install
npm run dev      # http://localhost:4321/
npm run build    # genera dist/
```

## Mejoras posibles

- **Versión imprimible / PDF:** una hoja de estilos `@media print` para descargar el CV en una página.
