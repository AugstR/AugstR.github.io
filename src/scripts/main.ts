// Comportamiento de la página. Con <ClientRouter /> este script corre una sola vez:
// lo que depende del DOM se vuelve a armar en cada 'astro:page-load' (que también salta en la primera carga).

const root = document.documentElement;

const temaGuardado = () => {
  try { return localStorage.getItem('theme'); } catch (e) { return null; }
};

// Al navegar, Astro reemplaza los atributos de <html>: hay que volver a poner el tema elegido
document.addEventListener('astro:after-swap', () => {
  const t = temaGuardado();
  if (t) root.dataset.theme = t;
});

let seccionObserver: IntersectionObserver | undefined;

document.addEventListener('astro:page-load', () => {
  // Tema claro / oscuro
  document.getElementById('themeToggle')?.addEventListener('click', () => {
    const actual = root.dataset.theme
      || (matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
    const siguiente = actual === 'light' ? 'dark' : 'light';
    root.dataset.theme = siguiente;
    try { localStorage.setItem('theme', siguiente); } catch (e) {}
  });

  // Menú mobile
  const burger = document.getElementById('burger');
  const menu = document.getElementById('menu');
  if (burger && menu) {
    const cerrar = () => {
      menu.classList.remove('is-open');
      burger.setAttribute('aria-expanded', 'false');
    };
    burger.addEventListener('click', () => {
      const abierto = menu.classList.toggle('is-open');
      burger.setAttribute('aria-expanded', String(abierto));
    });
    menu.querySelectorAll('a').forEach((a) => a.addEventListener('click', cerrar));
  }

  // Filtro de proyectos por tipo. Sin JS los botones quedan ocultos y se ven todos los proyectos.
  const filtros = document.querySelector<HTMLElement>('.filters');
  if (filtros) {
    const botones = [...filtros.querySelectorAll<HTMLButtonElement>('button')];
    const proyectos = [...document.querySelectorAll<HTMLElement>('.project[data-tipo]')];
    const conteo = document.getElementById('filtroConteo');
    filtros.hidden = false;
    botones.forEach((b) => b.addEventListener('click', () => {
      const tipo = b.dataset.tipo;
      botones.forEach((o) => o.setAttribute('aria-pressed', String(o === b)));
      let visibles = 0;
      proyectos.forEach((p) => {
        p.hidden = tipo !== 'todos' && p.dataset.tipo !== tipo;
        if (!p.hidden) visibles++;
      });
      if (conteo) conteo.textContent = `${visibles} de ${proyectos.length} proyectos`;
    }));
  }

  // Link activo en el nav según la sección visible (solo en la portada, donde los links son anclas)
  seccionObserver?.disconnect();
  const links = [...document.querySelectorAll<HTMLAnchorElement>('#menu a[href^="#"]')];
  if (links.length) {
    seccionObserver = new IntersectionObserver((entradas) => {
      entradas.forEach((e) => {
        if (!e.isIntersecting) return;
        links.forEach((a) => a.classList.toggle('is-active', a.getAttribute('href') === `#${e.target.id}`));
      });
    }, { rootMargin: '-45% 0px -50% 0px' });
    document.querySelectorAll('main section[id]').forEach((s) => seccionObserver!.observe(s));
  }
});
