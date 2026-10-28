# web-curriculum — CV online de Augusto Roubineau

Sitio estático con el currículum, generado con Astro.

## Stack
- Astro 7 (HTML estático) + CSS propio en `src/styles/global.css` y JS en `src/scripts/main.ts`
- El contenido está en `src/data/cv.ts` y `src/data/proyectos.ts` (validados con Zod en `src/content.config.ts`); la página es `src/pages/index.astro`
- `/cv.pdf` se genera en el build con PDFKit (`src/pages/cv.pdf.ts`)
- Con View Transitions el JS corre una sola vez: todo lo que toca el DOM va dentro de `astro:page-load`
- Estética de ficha técnica: IBM Plex, reglas finas, radios de 3px, un solo acento azul. Evitar volver a los patrones genéricos (serif itálica dorada, punto que late, tarjetas que se elevan, barras de porcentaje)
- Se publica con el workflow `.github/workflows/deploy.yml` (Pages con Source: GitHub Actions)

## Ver en local
`npm install` y `npm run dev` (http://localhost:4321/)

## Tener en cuenta
- El contenido es mío (experiencia, estudios, certificaciones). No agregues ni cambies datos sin que te los dé.
