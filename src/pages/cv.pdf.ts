// CV en PDF (/cv.pdf): una página, generada en cada build. El contenido está en src/data/cv-pdf.ts
// y los datos de contacto y formación salen de src/data/cv.ts, los mismos que usa la página.
import type { APIRoute } from 'astro';
import PDFDocument from 'pdfkit';
import { CREDLY_CCNA, EMAIL, GITHUB, LINKEDIN } from '../data/cv';
import { EXPERIENCIA_PDF, IDIOMAS_PDF, PERFIL, PROYECTOS_PDF, SKILLS_PDF, TITULO, UBICACION } from '../data/cv-pdf';

const SITIO = 'https://augstr.github.io';
// Fuentes completas de IBM Plex (OFL). Las de @fontsource son subconjuntos que PDFKit no puede leer.
const fuente = (archivo: string) => `${process.cwd()}/src/assets/fuentes-pdf/${archivo}`;

const TINTA = '#17191c';
const GRIS = '#565b62';
const ACENTO = '#1f47c4';
const LINEA = '#c9c5b8';

export const GET: APIRoute = async () => {
  const doc = new PDFDocument({
    size: 'A4',
    margins: { top: 40, bottom: 36, left: 50, right: 50 },
    info: { Title: 'CV · Augusto Roubineau', Author: 'Augusto Roubineau', Subject: TITULO },
  });
  doc.registerFont('sans', fuente('IBMPlexSans-Regular.woff'));
  doc.registerFont('sans-negrita', fuente('IBMPlexSans-SemiBold.woff'));
  doc.registerFont('mono', fuente('IBMPlexMono-Regular.woff'));

  // Sin ligaduras: con "fi" ligado, los lectores de CV (ATS) extraen "confguración".
  // PDFKit no tiene una opción global, así que se agrega a las opciones de cada texto.
  const opcionesTexto = (doc as any)._initOptions.bind(doc);
  (doc as any)._initOptions = (...args: unknown[]) => ({ features: { liga: false }, ...opcionesTexto(...args) });

  const partes: Buffer[] = [];
  doc.on('data', (c: Buffer) => partes.push(c));
  const listo = new Promise<Buffer>((ok) => doc.on('end', () => ok(Buffer.concat(partes))));

  const izq = doc.page.margins.left;
  const ancho = doc.page.width - izq - doc.page.margins.right;
  const sangria = 11; // texto de las viñetas

  const seccion = (titulo: string) => {
    doc.moveDown(.9);
    doc.font('mono').fontSize(7.5).fillColor(ACENTO).text(titulo.toUpperCase(), izq, doc.y, { characterSpacing: .8 });
    doc.moveTo(izq, doc.y + 1.5).lineTo(izq + ancho, doc.y + 1.5).lineWidth(.6).strokeColor(TINTA).stroke();
    doc.y += 6;
  };
  // Título a la izquierda y fecha alineada a la derecha, en la misma línea
  const encabezado = (titulo: string, detalle: string, fecha: string) => {
    const y = doc.y;
    doc.font('mono').fontSize(7.5).fillColor(GRIS).text(fecha, izq, y + 2, { width: ancho, align: 'right' });
    doc.font('sans-negrita').fontSize(10.5).fillColor(TINTA).text(titulo, izq, y, { continued: true })
      .font('sans').fillColor(GRIS).text(`  ·  ${detalle}`);
    doc.y += 1.5;
  };
  const vineta = (texto: string) => {
    const y = doc.y;
    doc.font('sans').fontSize(9.3).fillColor(GRIS).text('–', izq + 1, y);
    doc.fillColor(TINTA).text(texto, izq + sangria, y, { width: ancho - sangria, lineGap: .6 });
    doc.y += 1;
  };

  // Encabezado
  doc.font('sans-negrita').fontSize(21).fillColor(TINTA).text('Augusto Roubineau', izq, doc.y);
  doc.font('mono').fontSize(8).fillColor(ACENTO).text(TITULO.toUpperCase(), { characterSpacing: .6 });
  doc.moveDown(.35);
  const contactos: [string, string | null][] = [
    [EMAIL, `mailto:${EMAIL}`],
    ['LinkedIn', LINKEDIN],
    ['augstr.github.io', `${SITIO}/`],
    ['GitHub', GITHUB],
    [UBICACION, null],
  ];
  doc.font('sans').fontSize(8.5);
  contactos.forEach(([texto, url], i) => {
    const ultimo = i === contactos.length - 1;
    doc.fillColor(url ? ACENTO : GRIS).text(texto, { link: url, continued: !ultimo });
    if (!ultimo) doc.fillColor(LINEA).text('  |  ', { link: null, continued: true });
  });

  seccion('Perfil');
  doc.font('sans').fontSize(9.6).fillColor(TINTA).text(PERFIL, izq, doc.y, { width: ancho, lineGap: 1 });

  seccion('Experiencia');
  EXPERIENCIA_PDF.forEach((t, i) => {
    if (i > 0) doc.moveDown(.45);
    encabezado(t.puesto, t.empresa, t.fecha);
    t.tareas.forEach(vineta);
    if (t.logros) {
      doc.moveDown(.2);
      doc.font('sans-negrita').fontSize(9.3).fillColor(TINTA).text('Logros', izq, doc.y);
      doc.y += 1;
      t.logros.forEach(vineta);
    }
  });

  seccion('Skills técnicas');
  for (const [area, items] of SKILLS_PDF) {
    doc.font('sans-negrita').fontSize(9.3).fillColor(TINTA).text(`${area}: `, izq, doc.y, { width: ancho, continued: true })
      .font('sans').text(items, { lineGap: .6 });
    doc.y += 1;
  }

  seccion('Proyectos');
  doc.font('sans').fontSize(9.3).fillColor(TINTA).text(PROYECTOS_PDF, izq, doc.y, { width: ancho, lineGap: .6, continued: true })
    .fillColor(ACENTO).text('  Ver proyectos ↗', { link: `${SITIO}/#proyectos` });

  seccion('Formación, certificaciones e idiomas');
  encabezado('Lic. en Gestión de Tecnologías de la Información', 'UADE', '2023 – Actualidad');
  doc.moveDown(.25);
  encabezado('CCNA: Introduction to Networks', 'Cisco Networking Academy', 'Jul 2026');
  doc.font('sans').fontSize(9.3).fillColor(TINTA).text('Certificado; sigo con los próximos módulos del CCNA.  ', izq, doc.y, { continued: true })
    .fillColor(ACENTO).text('Credencial en Credly ↗', { link: CREDLY_CCNA });
  doc.moveDown(.45);
  doc.font('sans-negrita').fontSize(9.3).fillColor(TINTA).text('Idiomas: ', izq, doc.y, { continued: true })
    .font('sans').text(IDIOMAS_PDF, { link: null });

  doc.end();
  return new Response(await listo, { headers: { 'Content-Type': 'application/pdf' } });
};
