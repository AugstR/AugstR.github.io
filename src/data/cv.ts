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

// Solo las más relevantes: infraestructura primero, después desarrollo.
export const SKILLS = [
  'Veeam', 'VMware Cloud Director', 'Nutanix', 'Linux (Ubuntu)', 'Redes TCP/IP', 'Active Directory', 'Intune',
  'Docker', 'Git', 'GitHub Actions', 'Python', 'SQL', 'Java', 'JavaScript', 'TypeScript', 'React', 'Astro',
];

export const IDIOMAS = [
  { idioma: 'Español', nivel: 'Nativo' },
  { idioma: 'Inglés', nivel: 'Intermedio-avanzado' },
  { idioma: 'Portugués', nivel: 'Básico' },
];

export const INTERESES = ['Infraestructura', 'Backup & DR', 'Cloud', 'Virtualización', 'Automatización', 'DevOps', 'Redes'];


