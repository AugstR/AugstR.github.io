# CV online · Augusto Roubineau

Sitio de una sola página con mi currículum: experiencia, formación, skills y proyectos. Tiene modo claro/oscuro.

## Cómo está hecho

- **HTML, CSS y JavaScript puro**, sin frameworks ni build. Se publica como sitio estático (GitHub Pages).
- **Fuentes:** Fraunces, Inter y JetBrains Mono desde Google Fonts.
- **Íconos:** SVG inline, sin librerías.

| Archivo | Qué hace |
|---|---|
| `index.html` | Todo el contenido, dividido en secciones (`#sobre-mi`, `#experiencia`, `#formacion`, `#skills`, `#proyectos`, `#contacto`) |
| `estilos/styles.css` | Estilos, variables de color para los dos temas y diseño responsive |
| `js/main.js` | Cambio de tema (se recuerda en `localStorage`), menú mobile, animaciones de aparición con `IntersectionObserver` y link activo del menú |
| `img/` | Foto y logo |

El tema se aplica con un script mínimo en el `<head>` para que la página no "parpadee" al cargar.

## Ver en local

Abrir `index.html` en el navegador, o servir la carpeta:

```bash
npx serve .
```

## Mejoras posibles

- **[Astro](https://astro.build):** separar cada sección en componentes y cargar experiencia y proyectos desde
  archivos de datos (JSON o Markdown), sin cambiar el resultado: sigue generando HTML estático.
- **Versión imprimible / PDF:** una hoja de estilos `@media print` para descargar el CV en una página.
- **Datos estructurados** (`schema.org/Person`) para que buscadores y asistentes de IA lean mejor el perfil.
