// Colecciones de contenido. Los proyectos se siguen escribiendo en src/data/proyectos.ts;
// acá se validan con Zod en cada build, así un dato mal cargado frena la publicación.
import { defineCollection } from 'astro:content';
import { z } from 'astro/zod';
import { PROYECTOS } from './data/proyectos';

const proyectos = defineCollection({
  loader: async () => PROYECTOS.map((p, orden) => ({ id: p.slug, orden, ...p })),
  schema: z.object({
    orden: z.number(),
    slug: z.string().regex(/^[a-z0-9-]+$/, 'el slug va en minúsculas, números y guiones'),
    etiqueta: z.string(),
    titulo: z.string(),
    tipo: z.enum(['web', 'app', 'infra']),
    descripcion: z.string().max(320, 'el resumen de la tarjeta es demasiado largo'),
    tags: z.array(z.string()).min(1),
    equipo: z.string().optional(),
    destacado: z.string().optional(),
    caso: z.object({
      contexto: z.string(),
      incluye: z.array(z.string()).min(1),
      tecnica: z.array(z.string()).min(1),
      stack: z.array(z.string()).min(1),
    }),
    links: z.object({
      demo: z.url().optional(),
      codigo: z.url().optional(),
      textoDemo: z.string().optional(),
    }),
    sinCaptura: z.array(z.string()).optional(),
  }),
});

export const collections = { proyectos };
