// Contenido del CV en PDF (/cv.pdf): una sola página, en el formato del CV en inglés (CV_Augusto_Roubineau_EN.pdf).
// Es más detallado que la página en experiencia y skills, y más corto en proyectos.
// El teléfono no va porque el PDF es público.

export const TITULO = 'Pasante de Infraestructura e Ingeniería IT';
export const UBICACION = 'Buenos Aires, Argentina';

export const PERFIL =
  'Pasante de infraestructura e ingeniería IT con experiencia práctica en soporte a usuarios, administración de sistemas ' +
  'y entornos de cloud y virtualización. En OneCloud implemento backup con Veeam sobre repositorios Linux endurecidos, ' +
  'aprovisiono máquinas virtuales en VMware Cloud Director y pruebo plataformas Nutanix. Antes, en Amcor, di soporte a ' +
  'toda la operación de IT, con la migración de Windows 10 a 11 y la renovación de las salas de reuniones. Estudio Gestión ' +
  'de Tecnologías de la Información en UADE, con foco en DevOps, automatización e infraestructura cloud.';

export interface TrabajoPdf {
  puesto: string;
  empresa: string;
  fecha: string;
  tareas: string[];
  logros?: string[];
}

export const EXPERIENCIA_PDF: TrabajoPdf[] = [
  {
    puesto: 'Pasante de Ingeniería',
    empresa: 'OneCloud',
    fecha: 'Ago 2026 – Actualidad',
    tareas: [
      'Implementación de backup con Veeam sobre repositorios endurecidos en Ubuntu vía SSH: almacenamiento inmutable, RAID y diagnóstico de discos SAS/SCSI con SMART.',
      'Aprovisionamiento y administración de VMs en VMware Cloud Director (vDC) para entornos cloud de clientes.',
      'Pruebas y validación en un laboratorio Nutanix; entornos de demo para preventa.',
      'Implementaciones on-site de Veeam en las instalaciones de clientes, junto a ingenieros senior.',
    ],
  },
  {
    puesto: 'Pasante de Soporte IT',
    empresa: 'Amcor',
    fecha: 'Dic 2024 – Jun 2026',
    tareas: [
      'Soporte a usuarios y resolución de incidentes en ServiceNow, dentro de los SLA de la organización.',
      'Ciclo de vida de usuarios en Active Directory: altas, bajas, reseteo de contraseñas y grupos de seguridad.',
      'Gestión de dispositivos y software con Intune y SCCM; MFA en Microsoft 365, Salesforce y SAP Concur.',
      'Onboarding completo de nuevos ingresos: selección y configuración de equipos y charla de seguridad.',
      'Inventario de hardware, proveedores, soporte remoto (Beyond) y VPN (Ivanti y Netskope).',
    ],
    logros: [
      'Participé en la migración de Windows 10 a 11 en el 100% de los puestos de la empresa.',
      'Modernicé todas las salas de reuniones con videoconferencia integrada a Teams y paneles de reserva.',
      'Implementé el sistema embebido de impresoras Ricoh: tóner automático y reportes por usuario y sede.',
      'Coordiné el cierre de una oficina: integración con otra unidad de negocio, traslado de equipos y baja de servicios sin pérdida de datos.',
    ],
  },
];

export const SKILLS_PDF: [string, string][] = [
  ['Cloud y virtualización', 'VMware Cloud Director, Nutanix, Veeam Backup & Replication'],
  ['Sistemas', 'Active Directory, SCCM, Intune, Microsoft 365, Windows 11, Linux (Ubuntu), SSH'],
  ['Redes y seguridad', 'TCP/IP, Cisco IOS, VPN (Ivanti, Netskope), MFA, Rapid7'],
  ['Almacenamiento', 'RAID, SAS/SCSI, diagnóstico SMART, inventario de hardware'],
  ['Plataformas', 'ServiceNow, ITIL, SAP (MM y Concur), Salesforce'],
  ['Desarrollo', 'Python, SQL, Java, TypeScript, React, Astro, Docker, Git, GitHub Actions'],
];

export const PROYECTOS_PDF =
  'Proyectos web y apps con su caso completo en augstr.github.io: e-commerce con Java, Spring Boot y React ' +
  '(Store TPO), buscador de carreras con Next.js y Prisma (UniFlow), una PWA de inventario y sitios en Astro.';

export const IDIOMAS_PDF = 'Español (nativo) · Inglés B2, intermedio-avanzado · Portugués (básico)';
