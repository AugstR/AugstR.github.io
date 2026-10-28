// Proyectos del CV. Cada uno tiene su tarjeta en la portada y su página de caso en /proyectos/<slug>/.
// La captura es src/assets/proyectos/<slug>.jpg; si no hay, la tarjeta muestra las líneas de `sinCaptura`.
// Los textos de `incluye` y `tecnica` admiten HTML (<strong>, <code>).
// Se validan con Zod al compilar (src/content.config.ts) y las páginas los leen con listarProyectos() de ./coleccion.

export type TipoProyecto = 'web' | 'app' | 'infra';

export const TIPOS: Record<TipoProyecto, string> = {
  web: 'Sitios web',
  app: 'Aplicaciones',
  infra: 'Infra y automatización',
};


export interface Proyecto {
  slug: string;
  etiqueta: string; // año y tipo, por ejemplo "2026 · TP UADE"
  titulo: string;
  tipo: TipoProyecto;
  descripcion: string; // resumen de la tarjeta
  tags: string[];
  equipo?: string; // en los TP grupales
  destacado?: string; // insignia opcional en la tarjeta
  caso: {
    contexto: string; // de qué se trata y para quién
    incluye: string[]; // qué tiene
    tecnica: string[]; // cómo está hecho
    stack: string[];
  };
  links: { demo?: string; codigo?: string; textoDemo?: string };
  sinCaptura?: string[];
}

export const PROYECTOS: Proyecto[] = [
  {
    slug: 'grimwolf',
    etiqueta: '2026 · TP UADE',
    titulo: 'GrimWolf Gym',
    tipo: 'web',
    descripcion: 'Sitio web con tienda online para un gimnasio de Lago Puelo, Chubut, hoy publicado en grimwolf.com.ar. Incluyó auditoría UX/UI, SEO, buyer persona, funnel de conversión y plan de Google Ads.',
    tags: ['JavaScript', 'SEO', 'UX'],
    equipo: 'TP grupal · Plataformas y Negocios Web',
    destacado: 'En producción',
    caso: {
      contexto: 'Sitio para un gimnasio de musculación con venta de suplementos, pensado para atraer socios de Lago Puelo y localidades cercanas. Se trabajó como un proyecto de negocio completo: de la investigación del cliente al plan de pauta.',
      incluye: [
        'Páginas de inicio, nosotros, planes y <strong>tienda con carrito</strong>: variantes de producto, código de descuento y checkout.',
        '<strong>Auditoría UX/UI</strong> y <strong>SEO</strong> del sitio.',
        '<strong>Buyer persona</strong>, <strong>funnel de conversión</strong> y <strong>plan de Google Ads</strong>.',
        'Botón de WhatsApp y horarios visibles desde la portada.',
      ],
      tecnica: [
        'Frontend en JavaScript con Vite.',
        'Publicado con dominio propio: grimwolf.com.ar.',
      ],
      stack: ['JavaScript', 'Vite', 'SEO', 'Google Ads'],
    },
    links: { demo: 'https://www.grimwolf.com.ar/', textoDemo: 'grimwolf.com.ar' },
  },
  {
    slug: 'uniflow',
    etiqueta: '2026 · TP UADE',
    titulo: 'UniFlow · Buscador de carreras',
    tipo: 'app',
    descripcion: 'Plataforma para buscar, comparar y reseñar carreras universitarias de Argentina, con test vocacional, exportación a PDF y un servidor MCP para consultar los datos desde asistentes de IA.',
    tags: ['Next.js', 'TypeScript', 'Prisma', 'MCP'],
    equipo: 'TP grupal · Seminario de Integración Profesional',
    caso: {
      contexto: 'Elegir carrera en Argentina implica comparar cientos de opciones repartidas entre universidades públicas y privadas. UniFlow reúne los datos oficiales del SIU en un solo lugar y los cruza con un test vocacional.',
      incluye: [
        'Buscador de unas <strong>7.200 carreras</strong> de 130 universidades, con filtros por área, modalidad y universidad.',
        '<strong>Comparador</strong> de carreras lado a lado y fichas de universidades.',
        '<strong>Test vocacional</strong> de 40 preguntas con perfil por áreas y exportación a PDF.',
        'Chips "Prestigiosa" y "Recomendada" a partir de los rankings QS.',
        '<strong>Servidor MCP</strong> (por stdio o HTTP) para que asistentes como Claude consulten la base.',
      ],
      tecnica: [
        'Datos scrapeados y transformados desde el SIU con scripts propios.',
        'Prisma 7 con SQLite en local y Turso en producción.',
        'En mi fork: validación con Zod de los endpoints públicos, resultados vocacionales sin datos personales y <strong>paginación en la base</strong> en lugar de en memoria.',
      ],
      stack: ['Next.js 16', 'TypeScript', 'Tailwind', 'shadcn/ui', 'Prisma', 'Turso', 'Zod', 'MCP'],
    },
    links: { demo: 'https://uniflow2.vercel.app/', codigo: 'https://github.com/AugstR/TP-seminario', textoDemo: 'Ver sitio' },
  },
  {
    slug: 'store-tpo',
    etiqueta: '2025 · TP UADE',
    titulo: 'Store TPO · e-commerce',
    tipo: 'app',
    descripcion: 'Tienda online con frontend en React + TypeScript y API REST en Spring Boot, autenticación con JWT, base MySQL y todo el entorno levantado con Docker Compose.',
    tags: ['Java', 'Spring Boot', 'React', 'Docker'],
    equipo: 'TP grupal · 8 integrantes',
    caso: {
      contexto: 'E-commerce completo de punta a punta: catálogo, carrito, checkout, gestión de productos por vendedor y pedidos, con frontend y backend separados.',
      incluye: [
        'Catálogo con categorías, búsqueda y ofertas; carrito y checkout.',
        'Registro e inicio de sesión con <strong>JWT</strong>; cada usuario gestiona sus productos y ve sus pedidos.',
        'Subida de imágenes de producto.',
        '<strong>Demo pública</strong> del frontend en GitHub Pages con 50 productos de ejemplo.',
      ],
      tecnica: [
        'Backend en capas (controller → service → repository) con DTOs y mappers.',
        'Frontend con TanStack Router y Query, formularios con React Hook Form + Zod.',
        'Todo el entorno (MySQL, API y nginx) se levanta con <strong>Docker Compose</strong>.',
        'La demo usa un modo sin backend y se publica sola con <strong>GitHub Actions</strong>, que también corre el chequeo de tipos.',
      ],
      stack: ['Java 17', 'Spring Boot', 'Spring Security', 'MySQL', 'React', 'TypeScript', 'Tailwind', 'Docker'],
    },
    links: { demo: 'https://augstr.github.io/API-Clases/', codigo: 'https://github.com/AugstR/API-Clases', textoDemo: 'Ver demo' },
  },
  {
    slug: 'inventario',
    etiqueta: '2026 · Proyecto propio',
    titulo: 'App de inventario para un taller',
    tipo: 'app',
    descripcion: 'App web instalable (PWA) para un taller de restauración de muebles: fotos de antes y después, fechas de entrega con avisos en el celular y copia de seguridad. Funciona sin internet, con acceso por PIN.',
    tags: ['PWA', 'JavaScript', 'IndexedDB'],
    destacado: 'En uso',
    caso: {
      contexto: 'El taller necesitaba llevar el control de los muebles que tiene en trabajo desde el celular, sin cuentas ni servidores, y con algo simple de usar para alguien no técnico.',
      incluye: [
        'Alta de trabajos con <strong>foto del antes</strong> desde la cámara, cliente, fecha de entrega, precio y seña.',
        'Lista ordenada por entrega con alertas de <strong>vencidos y próximos</strong>; avisos en el celular y agenda en el calendario.',
        'Al terminar, <strong>foto del después</strong> y una imagen antes/después lista para compartir.',
        '<strong>Copia de seguridad</strong> en un archivo para mandar por WhatsApp o guardar en Drive.',
      ],
      tecnica: [
        'PWA sin dependencias: service worker para uso offline y actualización automática.',
        'Datos y fotos en IndexedDB, solo en el dispositivo.',
        'Seguridad: PIN con hash SHA-256 y freno de intentos, <strong>Content-Security-Policy</strong> y validación de las copias al restaurarlas.',
      ],
      stack: ['JavaScript', 'PWA', 'Service Worker', 'IndexedDB', 'Web Crypto', 'Canvas'],
    },
    links: { codigo: 'https://github.com/AugstR/TacuarArte-Inventario' },
  },
  {
    slug: 'molino',
    etiqueta: '2026 · Propuesta',
    titulo: 'Molino Ñangapirí',
    tipo: 'web',
    descripcion: 'Propuesta de sitio nuevo para un molino arrocero de Goya, Corrientes: catálogo con filtros, armado de pedidos que se envían por WhatsApp, sección mayoristas y SEO con datos estructurados.',
    tags: ['Astro', 'GSAP', 'SEO', 'UX'],
    caso: {
      contexto: 'Propuesta para renovar el sitio de un molino que vende por mayor a distribuidores y comercios de todo el país. El objetivo: que un comprador arme su pedido sin registrarse.',
      incluye: [
        '<strong>Góndola</strong> con los 8 productos y fichas de detalle.',
        '<strong>Planilla de pedido</strong> por fardos o pallets que arma el mensaje de WhatsApp sola.',
        'Guía para entender las calidades del arroz, historia del molino y formulario mayorista.',
        'SEO con datos estructurados (Organization y FAQPage) y <code>llms.txt</code>.',
      ],
      tecnica: [
        'Generado con <strong>Astro</strong>: el catálogo vive en un solo archivo y de ahí salen la góndola, la planilla y las fichas.',
        'Animaciones con <strong>GSAP</strong> (ScrollTrigger y SplitText) cargadas con integridad verificada (SRI), respetando "reducir movimiento".',
      ],
      stack: ['Astro', 'JavaScript', 'GSAP', 'Schema.org'],
    },
    links: { demo: 'https://augstr.github.io/Molino-Nangapiri/', textoDemo: 'Ver demo' },
  },
  {
    slug: 'tacuararte',
    etiqueta: '2026 · Proyecto propio',
    titulo: 'TacuarArte',
    tipo: 'web',
    descripcion: 'Sitio para un taller artesanal de restauración de muebles y cestería en Corrientes: servicios, antes y después, catálogo de canastas y consultas por WhatsApp, con SEO local y datos estructurados.',
    tags: ['Astro', 'SEO'],
    destacado: 'Dominio propio',
    caso: {
      contexto: 'El taller trabajaba solo por Instagram y boca a boca. El sitio muestra los oficios, los trabajos terminados y el catálogo de canastas, y lleva cada consulta a WhatsApp con el mensaje armado.',
      incluye: [
        'Servicios del taller, <strong>antes y después</strong> de restauraciones y galería con lightbox.',
        '<strong>Catálogo de canastas</strong> con botón de consulta por modelo.',
        'SEO local con datos estructurados <code>LocalBusiness</code>.',
      ],
      tecnica: [
        'Generado con <strong>Astro</strong>: el número de WhatsApp y el catálogo están en un solo archivo de datos.',
        'Fotos optimizadas a <strong>AVIF y WebP</strong> en varios tamaños (por ejemplo, el logo pasa de 71 KB a 28 KB).',
        'Content-Security-Policy y publicación automática con GitHub Actions en <strong>tacuararte.com.ar</strong>.',
      ],
      stack: ['Astro', 'HTML / CSS / JS', 'Schema.org', 'GitHub Actions'],
    },
    links: { demo: 'https://tacuararte.com.ar/', textoDemo: 'tacuararte.com.ar' },
  },
  {
    slug: 'este-sitio',
    etiqueta: '2023 → 2026 · TP UADE',
    titulo: 'Este sitio',
    tipo: 'web',
    descripcion: 'Nació como TP de la materia Desarrollo Web en 2023 y lo rediseñé en 2026 con Astro y una estética de ficha técnica: contenido validado con Zod, transiciones entre páginas y el CV en PDF generado desde los mismos datos.',
    tags: ['Astro', 'TypeScript', 'CSS'],
    caso: {
      contexto: 'Mi CV online. Empezó como trabajo práctico y hoy es el lugar donde reúno experiencia, formación y proyectos.',
      incluye: [
        'Experiencia, formación, skills, idiomas y una página por proyecto.',
        'Filtro de proyectos por tipo y modo claro/oscuro que recuerda la preferencia.',
        '<strong>CV en PDF</strong> (<code>/cv.pdf</code>) generado en cada build con los mismos datos que la página.',
        'Datos estructurados <code>schema.org/Person</code> con la credencial de Cisco.',
      ],
      tecnica: [
        'Generado con <strong>Astro</strong>: los proyectos son una <strong>Content Collection</strong> validada con <strong>Zod</strong>, así un dato mal cargado frena el build.',
        '<strong>View Transitions</strong>: la captura de cada tarjeta se transforma en la imagen de su página de caso.',
        'Diseño propio en CSS, sin frameworks de estilos, con IBM Plex autoalojada; capturas optimizadas a AVIF y WebP.',
        'El PDF se arma con <strong>PDFKit</strong> durante el build y todo se publica con <strong>GitHub Actions</strong> en cada push.',
      ],
      stack: ['Astro', 'TypeScript', 'Zod', 'PDFKit', 'CSS', 'GitHub Actions'],
    },
    links: { codigo: 'https://github.com/AugstR/AugstR.github.io' },
  },
];
