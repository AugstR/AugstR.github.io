# web-curriculum — CV online de Augusto Roubineau

Sitio estático con el currículum, generado con Astro.

## Stack
- Astro 7 (HTML estático) + CSS y JS propios en `public/`
- El contenido está en `src/data/cv.ts`; la página es `src/pages/index.astro`
- Se publica con el workflow `.github/workflows/deploy.yml` (Pages con Source: GitHub Actions)

## Ver en local
`npm install` y `npm run dev` (http://localhost:4321/)

## Tener en cuenta
- El contenido es mío (experiencia, estudios, certificaciones). No agregues ni cambies datos sin que te los dé.
