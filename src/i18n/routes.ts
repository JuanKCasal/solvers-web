// Mapa de rutas ES/EN. Las URLs se definen SIN el base path; usar `href()` para enlazar.
export type Lang = 'es' | 'en';
export const LANGS: Lang[] = ['es', 'en'];
export const DEFAULT_LANG: Lang = 'es';

export const ROUTES = {
  home: { es: '/', en: '/en/' },
  about: { es: '/nosotros/', en: '/en/about/' },
  services: { es: '/servicios/', en: '/en/services/' },
  projects: { es: '/proyectos/', en: '/en/projects/' },
  equipment: { es: '/maquinaria-y-equipos/', en: '/en/equipment-rental/' },
  contact: { es: '/contacto/', en: '/en/contact/' },
} as const;

export type RouteKey = keyof typeof ROUTES;

/** Antepone el base path configurado (import.meta.env.BASE_URL) a una ruta interna. */
export function href(path: string): string {
  const base = import.meta.env.BASE_URL.replace(/\/$/, '');
  if (/^(https?:|mailto:|tel:|#)/.test(path)) return path;
  return `${base}${path.startsWith('/') ? path : `/${path}`}`;
}

export function route(key: RouteKey, lang: Lang): string {
  return href(ROUTES[key][lang]);
}

export function serviceUrl(slug: { es: string; en: string }, lang: Lang): string {
  return lang === 'es' ? `/servicios/${slug.es}/` : `/en/services/${slug.en}/`;
}

/** Alternativas por idioma para hreflang y el selector de idioma (rutas sin base). */
export type Alternates = Record<Lang, string>;
