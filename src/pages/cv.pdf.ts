// CV en PDF (/cv.pdf). Se genera en cada build con los mismos datos que la página,
// así nunca queda desactualizado respecto del sitio.
import type { APIRoute } from 'astro';
import PDFDocument from 'pdfkit';
import { EMAIL, EXPERIENCIA, FORMACION, GITHUB, IDIOMAS, LINKEDIN, RESUMEN, SKILLS } from '../data/cv';
import { listarProyectos } from '../data/coleccion';

const SITIO = 'https://augstr.github.io';
// Fuentes completas de IBM Plex (OFL). Las de @fontsource son subconjuntos que PDFKit no puede leer.
const fuente = (archivo: string) => `${process.cwd()}/src/assets/fuentes-pdf/${archivo}`;
const sinHtml = (s: string) => s.replace(/<[^>]+>/g, '');

const TINTA = '#17191c';
const GRIS = '#565b62';
const ACENTO = '#1f47c4';
const LINEA = '#d6d2c6';

export const GET: APIRoute = async () => {
  const proyectos = await listarProyectos();

  const doc = new PDFDocument({
    size: 'A4',
    margins: { top: 46, bottom: 46, left: 52, right: 52 },
    info: { Title: 'CV · Augusto Roubineau', Author: 'Augusto Roubineau', Subject: 'Infraestructura, backup y cloud' },
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
  const colFecha = 92; // columna de fechas
  const xCuerpo = izq + colFecha + 12;
  const anchoCuerpo = ancho - colFecha - 12;

  const espacio = (alto: number) => {
    if (doc.y + alto > doc.page.height - doc.page.margins.bottom) doc.addPage();
  };
  const regla = (color: string, grosor: number) => {
    doc.moveTo(izq, doc.y).lineTo(izq + ancho, doc.y).lineWidth(grosor).strokeColor(color).stroke();
  };
  const seccion = (titulo: string) => {
    espacio(140); // que el título no quede solo al pie de la página
    doc.moveDown(1);
    regla(TINTA, .8);
    doc.moveDown(.45);
    doc.font('mono').fontSize(7.5).fillColor(ACENTO).text(titulo.toUpperCase(), izq, doc.y, { characterSpacing: .8 });
    doc.moveDown(.5);
  };
  // Fila con la fecha a la izquierda y el contenido a la derecha
  const fila = (fecha: string, cuerpo: () => void) => {
    espacio(60);
    const y = doc.y;
    doc.font('mono').fontSize(7.5).fillColor(GRIS).text(fecha, izq, y + 1.5, { width: colFecha });
    doc.y = y;
    cuerpo();
    doc.x = izq;
    doc.moveDown(.55);
  };

  // Encabezado
  doc.font('sans-negrita').fontSize(22).fillColor(TINTA).text('Augusto Roubineau', izq, doc.y);
  doc.font('sans').fontSize(10.5).fillColor(GRIS).text('Pasante de Ingeniería en OneCloud · Infraestructura, backup y cloud · Buenos Aires');
  doc.moveDown(.35);
  doc.font('mono').fontSize(8).fillColor(ACENTO);
  const contactos: [string, string][] = [
    [EMAIL, `mailto:${EMAIL}`],
    ['augstr.github.io', `${SITIO}/`],
    ['linkedin', LINKEDIN],
    ['github.com/AugstR', GITHUB],
  ];
  contactos.forEach(([texto, url], i) => {
    const ultimo = i === contactos.length - 1;
    doc.fillColor(ACENTO).text(texto, { link: url, continued: !ultimo, underline: false });
    if (!ultimo) doc.fillColor(LINEA).text('   ·   ', { link: null, continued: true });
  });
  doc.moveDown(.8);
  doc.font('sans').fontSize(9.5).fillColor(TINTA).text(RESUMEN, { width: ancho, lineGap: 1.5 });

  // Experiencia
  seccion('Experiencia');
  for (const t of EXPERIENCIA) {
    fila(t.fecha, () => {
      doc.font('sans-negrita').fontSize(10.5).fillColor(TINTA).text(t.puesto, xCuerpo, doc.y, { width: anchoCuerpo, continued: true })
        .font('sans').fillColor(GRIS).text(`  ·  ${t.empresa}, ${t.lugar}`);
      if (t.resumen) doc.font('sans').fontSize(9).fillColor(GRIS).text(t.resumen, xCuerpo, doc.y + 2, { width: anchoCuerpo });
      for (const l of t.logros ?? []) {
        doc.font('sans').fontSize(9).fillColor(TINTA).text(`–  ${sinHtml(l)}`, xCuerpo, doc.y + 2, { width: anchoCuerpo, indent: 0, lineGap: 1 });
      }
    });
  }

  // Formación
  seccion('Formación');
  for (const e of FORMACION) {
    fila(e.fecha, () => {
      doc.font('sans-negrita').fontSize(10).fillColor(TINTA).text(e.titulo, xCuerpo, doc.y, { width: anchoCuerpo });
      doc.font('sans').fontSize(9).fillColor(GRIS).text(e.institucion, { width: anchoCuerpo });
      if (e.detalle) doc.text(e.detalle, { width: anchoCuerpo });
      if (e.credencial) doc.font('mono').fontSize(8).fillColor(ACENTO).text('Credencial en Credly', { link: e.credencial.url, width: anchoCuerpo });
    });
  }

  // Proyectos
  seccion('Proyectos');
  for (const p of proyectos) {
    fila(p.etiqueta, () => {
      doc.font('sans-negrita').fontSize(10).fillColor(TINTA).text(p.titulo, xCuerpo, doc.y, { width: anchoCuerpo, continued: true })
        .font('mono').fontSize(7.5).fillColor(ACENTO).text(`   ${SITIO.replace('https://', '')}/proyectos/${p.slug}/`, { link: `${SITIO}/proyectos/${p.slug}/` });
      doc.font('sans').fontSize(9).fillColor(GRIS).text(p.descripcion, xCuerpo, doc.y + 1, { width: anchoCuerpo, link: null });
    });
  }

  // Skills e idiomas
  seccion('Skills');
  doc.font('sans').fontSize(9.5).fillColor(TINTA).text(SKILLS.join('  ·  '), izq, doc.y, { width: ancho, lineGap: 2 });
  seccion('Idiomas');
  doc.font('sans').fontSize(9.5).fillColor(TINTA)
    .text(IDIOMAS.map((i) => `${i.idioma} (${i.nivel.toLowerCase()})`).join('  ·  '), izq, doc.y, { width: ancho });

  doc.end();
  return new Response(await listo, { headers: { 'Content-Type': 'application/pdf' } });
};
