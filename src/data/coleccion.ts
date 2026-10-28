// Acceso a los proyectos ya validados (ver src/content.config.ts) y a sus capturas.
import { getCollection } from 'astro:content';

export async function listarProyectos() {
  const entradas = await getCollection('proyectos');
  return entradas.sort((a, b) => a.data.orden - b.data.orden).map((e) => e.data);
}

export type ProyectoValidado = Awaited<ReturnType<typeof listarProyectos>>[number];

// Capturas: src/assets/proyectos/<slug>.jpg
const capturas = import.meta.glob<{ default: ImageMetadata }>('../assets/proyectos/*.jpg', { eager: true });
export const capturaDe = (slug: string) => capturas[`../assets/proyectos/${slug}.jpg`]?.default;
