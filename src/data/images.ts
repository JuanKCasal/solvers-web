import type { ImageMetadata } from 'astro';

// Todas las fotos del sitio viven en src/assets/fotos/<categoria>/ y Astro las optimiza en el build.
const files = import.meta.glob<{ default: ImageMetadata }>(
  '/src/assets/fotos/**/*.{jpg,jpeg,png,webp}',
  { eager: true },
);

/** Devuelve la imagen a partir de su ruta relativa a src/assets/fotos (p. ej. 'compresor/compresor-01.jpg'). */
export function img(path: string): ImageMetadata {
  const key = `/src/assets/fotos/${path}`;
  const mod = files[key];
  if (!mod) throw new Error(`Imagen no encontrada: ${key}`);
  return mod.default;
}

export type Localized = { es: string; en: string };
export type Photo = { src: string; alt: Localized };

/** Atajo para crear una serie de fotos con el mismo texto alternativo base. */
export function series(paths: string[], alt: Localized): Photo[] {
  return paths.map((src, i) => ({
    src,
    alt: { es: `${alt.es} (${i + 1})`, en: `${alt.en} (${i + 1})` },
  }));
}
