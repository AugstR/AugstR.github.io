// Contenido del CV. Para actualizarlo se edita este archivo: la página (src/pages/index.astro) no cambia.
// Los textos con <strong> o <em> se escriben como HTML.

export const LINKEDIN = 'https://www.linkedin.com/in/augusto-roubineau-8aa39b226';
export const GITHUB = 'https://github.com/AugstR';
export const EMAIL = 'augustoroubineau@gmail.com';
export const CREDLY_CCNA = 'https://www.credly.com/badges/c0ada273-9094-40ec-8549-789f08a2c60e/public_url';

export interface Trabajo {
  fecha: string;
  actual?: boolean;
  puesto: string;
  empresa: string;
  lugar: string;
  resumen?: string;
  logros?: string[]; // HTML
  tags?: string[];
}

export const EXPERIENCIA: Trabajo[] = [
  {
    fecha: '2026 — Actualidad',
    actual: true,
    puesto: 'Pasante de Ingeniería',
    empresa: 'OneCloud',
    lugar: 'Powercloud · Buenos Aires',
    resumen: 'Implementación de soluciones de backup, virtualización e infraestructura cloud para clientes corporativos.',
    logros: [
      'Implementación on-site de infraestructura de backup con <strong>Veeam</strong>: repositorios en servidores Ubuntu, <strong>Veeam Hardened Repository</strong> con almacenamiento inmutable contra ransomware, configuración de RAID y diagnóstico de discos.',
      'Aprovisionamiento de máquinas virtuales en Virtual Data Centers sobre <strong>VMware Cloud Director</strong>.',
      'Pruebas y validación de configuraciones en un laboratorio <strong>Nutanix</strong> (infraestructura hiperconvergente).',
      'Armado de entornos de demostración para preventa.',
    ],
    tags: ['Veeam', 'VMware Cloud Director', 'Nutanix', 'Ubuntu', 'RAID'],
  },
  {
    fecha: '2024 — 2026',
    puesto: 'Pasante IT',
    empresa: 'Amcor',
    lugar: 'Multinacional de packaging · Buenos Aires',
    logros: [
      'Soporte a usuarios y onboarding de nuevos ingresos, con tickets en <strong>ServiceNow</strong>.',
      'Gestión de accesos con <strong>Active Directory</strong> y MFA, y administración de dispositivos con <strong>Intune</strong> y <strong>SCCM</strong>.',
      'Participación en la migración de Windows 10 a Windows 11 y en la renovación de las salas de videoconferencia.',
      'Soporte en el centro de cómputos.',
    ],
    tags: ['ServiceNow', 'Active Directory', 'Intune', 'SCCM', 'Windows 11'],
  },
  {
    fecha: 'Jul — Nov 2016',
    puesto: 'Pasante',
    empresa: 'UNNE',
    lugar: 'Universidad Nacional del Nordeste · Corrientes',
    resumen: 'Mi primer contacto con un entorno de trabajo real, todavía en el secundario.',
  },
];

export interface Estudio {
  fecha: string;
  titulo: string;
  institucion: string;
  detalle?: string;
  principal?: boolean;
  credencial?: { texto: string; url: string };
}

export const FORMACION: Estudio[] = [
  {
    fecha: '2023 — Actualidad',
    titulo: 'Lic. en Gestión de Tecnologías de la Información',
    institucion: 'UADE · Universidad Argentina de la Empresa',
    detalle: 'Estudiante avanzado. Materias recientes: Plataformas y Negocios Web, Derecho Informático.',
    principal: true,
  },
  {
    fecha: 'Jul 2026 · Certificado',
    titulo: 'CCNA: Introduction to Networks',
    institucion: 'Cisco Networking Academy',
    detalle: 'Direccionamiento IP, Ethernet, configuración de switches y routers con Cisco IOS. Más de 50 labs en Packet Tracer. Sigo con los próximos módulos del CCNA.',
    credencial: { texto: 'Ver credencial en Credly ↗', url: CREDLY_CCNA },
  },
  {
    fecha: '2017 — 2018',
    titulo: 'Ingeniería en Sistemas de Información',
    institucion: 'UTN · Facultad Regional Resistencia',
    detalle: 'Primer año de la carrera.',
  },
  {
    fecha: '2016',
    titulo: 'Bachiller en Economía y Gestión de las Organizaciones',
    institucion: 'Instituto Pío XI · Corrientes',
  },
];

// icono: contenido del <svg viewBox="0 0 24 24">
export const SKILLS = [
  {
    titulo: 'Backup & Virtualización',
    icono: '<ellipse cx="12" cy="5" rx="8" ry="3"/><path d="M4 5v6c0 1.66 3.58 3 8 3s8-1.34 8-3V5M4 11v6c0 1.66 3.58 3 8 3s8-1.34 8-3v-6"/>',
    tags: ['Veeam', 'Hardened Repository', 'VMware Cloud Director', 'Nutanix', 'RAID'],
  },
  {
    titulo: 'Redes',
    icono: '<rect x="9" y="2" width="6" height="6" rx="1"/><rect x="2" y="16" width="6" height="6" rx="1"/><rect x="16" y="16" width="6" height="6" rx="1"/><path d="M12 8v4M5 16v-2h14v2"/>',
    tags: ['TCP/IP', 'Modelo OSI', 'Cisco IOS', 'Switching', 'Cableado'],
  },
  {
    titulo: 'Sistemas & Endpoints',
    icono: '<rect x="2" y="3" width="20" height="14" rx="2"/><path d="M8 21h8M12 17v4"/>',
    tags: ['Linux (Ubuntu)', 'SSH', 'Active Directory', 'Intune', 'SCCM', 'ServiceNow'],
  },
  {
    titulo: 'Desarrollo & DevOps',
    icono: '<path d="m8 6-6 6 6 6M16 6l6 6-6 6"/>',
    tags: ['Python', 'SQL', 'Docker', 'Git', 'Java', 'HTML / CSS / JS'],
  },
];

export const IDIOMAS = [
  { idioma: 'Español', nivel: 'Nativo', porcentaje: 100 },
  { idioma: 'Inglés', nivel: 'Intermedio-avanzado', porcentaje: 72 },
  { idioma: 'Portugués', nivel: 'Básico', porcentaje: 30 },
];

export interface Proyecto {
  etiqueta: string; // año y tipo, por ejemplo "2026 · TP UADE"
  titulo: string;
  descripcion: string;
  tags: string[];
  url?: string;
  textoLink?: string;
}

export const PROYECTOS: Proyecto[] = [
  {
    etiqueta: '2026 · TP UADE',
    titulo: 'GrimWolf Gym',
    descripcion: 'Sitio web para un gimnasio, con auditoría UX/UI, SEO, buyer persona, funnel de conversión y plan de Google Ads. TP grupal de la materia Plataformas y Negocios Web.',
    tags: ['JavaScript', 'SEO', 'UX'],
    url: 'https://www.grimwolf.com.ar/',
    textoLink: 'grimwolf.com.ar',
  },
  {
    etiqueta: '2026 · TP UADE',
    titulo: 'UniFlow · Buscador de carreras',
    descripcion: 'TP grupal de Seminario de Integración Profesional: plataforma para buscar, comparar y reseñar carreras de Argentina, con test vocacional, exportación a PDF y un servidor MCP para consultar los datos desde asistentes de IA.',
    tags: ['Next.js', 'TypeScript', 'Prisma', 'MCP'],
    url: 'https://uniflow2.vercel.app/',
    textoLink: 'Ver sitio',
  },
  {
    etiqueta: '2025 · TP UADE',
    titulo: 'Store TPO · e-commerce',
    descripcion: 'TP grupal: tienda online con frontend en React + TypeScript y API REST en Spring Boot, autenticación con JWT, base MySQL y todo el entorno levantado con Docker Compose.',
    tags: ['Java', 'Spring Boot', 'React', 'Docker'],
    url: 'https://augstr.github.io/API-Clases/',
    textoLink: 'Ver demo',
  },
  {
    etiqueta: '2026 · Proyecto propio',
    titulo: 'App de inventario para un taller',
    descripcion: 'App web instalable (PWA) para un taller de restauración de muebles: fotos de antes y después, fechas de entrega con avisos en el celular y copia de seguridad. Funciona sin internet, con acceso por PIN y los datos guardados solo en el dispositivo.',
    tags: ['PWA', 'HTML / CSS / JS', 'IndexedDB'],
    url: 'https://github.com/AugstR/TacuarArte-Inventario',
    textoLink: 'Ver código',
  },
  {
    etiqueta: '2026 · Propuesta',
    titulo: 'Molino Ñangapirí',
    descripcion: 'Propuesta de sitio nuevo para un molino arrocero de Goya, Corrientes: catálogo con filtros, armado de pedidos que se envían por WhatsApp, sección mayoristas y SEO con datos estructurados.',
    tags: ['Astro', 'GSAP', 'SEO', 'UX'],
    url: 'https://augstr.github.io/Molino-Nangapiri/',
    textoLink: 'Ver demo',
  },
  {
    etiqueta: '2026 · Proyecto propio',
    titulo: 'TacuarArte',
    descripcion: 'Sitio para un taller artesanal de restauración de muebles y cestería en Corrientes: servicios, antes y después, catálogo de canastas y consultas por WhatsApp, con SEO local y datos estructurados.',
    tags: ['Astro', 'SEO'],
    url: 'https://augstr.github.io/Tacuararte/',
    textoLink: 'Ver sitio',
  },
  {
    etiqueta: '2023 → 2026 · TP UADE',
    titulo: 'Este sitio',
    descripcion: 'Nació como TP de la materia Desarrollo Web en 2023 y lo rediseñé en 2026 con Astro: el contenido sale de un archivo de datos, con diseño propio y modo claro/oscuro.',
    tags: ['Astro', 'HTML / CSS / JS'],
    url: 'https://github.com/AugstR/AugstR.github.io',
    textoLink: 'Ver repo',
  },
];
