// Trabajos ejecutados — fuente: docs/empresa.md §4.3–4.5 (brochure, láminas 8–16).
import { series, type Localized, type Photo } from './images';

export type Project = {
  id: string;
  service: string; // id en servicios.ts
  title: Localized;
  description: Localized;
  client?: string;
  photos: Photo[];
};

const range = (prefix: string, from: number, to: number, ext = 'jpg') =>
  Array.from({ length: to - from + 1 }, (_, i) => `${prefix}${String(from + i).padStart(2, '0')}.${ext}`);

export const PROJECTS: Project[] = [
  {
    id: 'compresor-el-palito',
    service: 'mantenimiento-mecanico',
    client: 'PDVSA · Refinería El Palito',
    title: {
      es: 'Reconstrucción de diafragmas de compresor de gas húmedo',
      en: 'Wet gas compressor diaphragm reconstruction',
    },
    description: {
      es: 'Reconstrucción de diafragmas de un compresor de gas húmedo en la Refinería El Palito, aplicando ingeniería inversa y cosido en frío (metal stitching).',
      en: 'Reconstruction of wet gas compressor diaphragms at the El Palito Refinery using reverse engineering and cold metal stitching.',
    },
    photos: series(range('compresor/compresor-', 1, 5), {
      es: 'Diafragma de compresor de gas húmedo en reconstrucción',
      en: 'Wet gas compressor diaphragm under reconstruction',
    }),
  },
  {
    id: 'tubos-caldera',
    service: 'mantenimiento-mecanico',
    title: {
      es: 'Medición de espesores y dureza de tubos de caldera',
      en: 'Boiler tube thickness and hardness measurement',
    },
    description: {
      es: 'Inspección de tubos de caldera mediante medición de espesores y de dureza para evaluar su condición e integridad.',
      en: 'Boiler tube inspection through thickness and hardness measurements to assess their condition and integrity.',
    },
    photos: series(range('caldera/caldera-', 1, 5), {
      es: 'Medición de espesores y dureza en tubos de caldera',
      en: 'Thickness and hardness measurement on boiler tubes',
    }),
  },
  {
    id: 'tuberia-proceso',
    service: 'proyectos-y-mantenimiento',
    title: {
      es: 'Fabricación y soldadura de tuberías de proceso',
      en: 'Process piping fabrication and welding',
    },
    description: {
      es: 'Corte, fabricación y soldadura para la instalación de tuberías de proceso.',
      en: 'Cutting, fabrication and welding for process piping installation.',
    },
    photos: series(range('tuberia-proceso/tuberia-', 1, 7), {
      es: 'Corte y soldadura de tubería de proceso',
      en: 'Process pipe cutting and welding',
    }),
  },
  {
    id: 'reparacion-fugas',
    service: 'proyectos-y-mantenimiento',
    title: {
      es: 'Reparación de fugas en tuberías',
      en: 'Pipeline leak repair',
    },
    description: {
      es: 'Corte, fabricación, soldadura e instalación de componentes para la reparación de fugas en tuberías.',
      en: 'Cutting, fabrication, welding and installation of components for pipeline leak repair.',
    },
    photos: series(range('fugas/fugas-', 1, 8), {
      es: 'Instalación de componentes de reparación de fugas en tubería',
      en: 'Installation of pipeline leak repair components',
    }),
  },
  {
    id: 'contenedor-concreto',
    service: 'mantenimiento-mecanico',
    title: {
      es: 'Reemplazo de láminas en contenedor de concreto',
      en: 'Plate replacement on a concrete storage container',
    },
    description: {
      es: 'Reemplazo de lámina metálica en un contenedor de almacenamiento de concreto.',
      en: 'Replacement of metal plate on a concrete storage container.',
    },
    photos: series(range('contenedor/contenedor-', 1, 6), {
      es: 'Reemplazo de lámina metálica en contenedor de concreto',
      en: 'Metal plate replacement on concrete container',
    }),
  },
  {
    id: 'bombas-sumergibles',
    service: 'mantenimiento-mecanico',
    title: {
      es: 'Reparación de motores y bombas sumergibles',
      en: 'Motor and submersible pump repair',
    },
    description: {
      es: 'Reparación de motores y bombas sumergibles en taller.',
      en: 'Workshop repair of motors and submersible pumps.',
    },
    photos: series(range('bombas/bombas-', 1, 5), {
      es: 'Reparación de motor y bomba sumergible',
      en: 'Motor and submersible pump repair',
    }),
  },
  {
    id: 'bomba-vertical',
    service: 'mantenimiento-mecanico',
    title: { es: 'Reparación de bomba vertical', en: 'Vertical pump repair' },
    description: {
      es: 'Reparación de bomba vertical y sus componentes: eje, impulsores y tazones.',
      en: 'Vertical pump repair and its components: shaft, impellers and bowls.',
    },
    photos: [
      ...series(['bombas/bombas-06.jpg'], { es: 'Eje de bomba vertical en taller', en: 'Vertical pump shaft in the workshop' }),
      ...series(['bombas/bombas-07-impulsores.jpg'], { es: 'Impulsores de bomba vertical', en: 'Vertical pump impellers' }),
      ...series(['bombas/bombas-08.jpg'], { es: 'Tazón de bomba vertical', en: 'Vertical pump bowl' }),
      ...series(['bombas/bombas-10.jpg'], { es: 'Columna de bomba vertical reparada', en: 'Repaired vertical pump column' }),
    ],
  },
  {
    id: 'bomba-horizontal',
    service: 'mantenimiento-mecanico',
    title: { es: 'Reparación de bomba horizontal', en: 'Horizontal pump repair' },
    description: {
      es: 'Reparación de bombas horizontales y sus componentes en taller.',
      en: 'Workshop repair of horizontal pumps and their components.',
    },
    photos: series(range('bombas/bombas-h', 1, 12), {
      es: 'Reparación de bomba horizontal',
      en: 'Horizontal pump repair',
    }),
  },
  {
    id: 'planta-combustible',
    service: 'mantenimiento-mecanico',
    client: 'PDVSA',
    title: {
      es: 'Mantenimiento en planta de suministro de combustible',
      en: 'Maintenance at a fuel supply plant',
    },
    description: {
      es: 'Mantenimiento de carcasas de filtros, equipos de bombeo y válvulas en las líneas de recepción y despacho de una planta de suministro de combustible de PDVSA.',
      en: 'Maintenance of filter housings, pumping equipment and valves on the receiving and dispatch lines of a PDVSA fuel supply plant.',
    },
    photos: series(range('combustible/combustible-', 1, 9), {
      es: 'Mantenimiento de filtros, bombas y válvulas en planta de combustible',
      en: 'Filter, pump and valve maintenance at a fuel plant',
    }),
  },
  {
    id: 'refractarios',
    service: 'refractarios-y-aislamiento',
    title: {
      es: 'Aplicación de refractarios y tratamientos térmicos',
      en: 'Refractory application and heat treatment',
    },
    description: {
      es: 'Aplicación de refractarios, precalentamiento, tratamiento térmico post-soldadura (PWHT) y secado de revestimientos con quemadores de alta velocidad.',
      en: 'Refractory application, preheating, post-weld heat treatment (PWHT) and lining dry-out with high-velocity burners.',
    },
    photos: series(range('refractarios/refractarios-', 1, 3), {
      es: 'Trabajos de refractario y tratamiento térmico',
      en: 'Refractory and heat treatment work',
    }),
  },
  {
    id: 'hidrocaribe',
    service: 'obras-civiles',
    client: 'HidroCaribe',
    title: {
      es: 'Rehabilitación de plantas potabilizadoras',
      en: 'Water treatment plant rehabilitation',
    },
    description: {
      es: 'Rehabilitación de infraestructura de plantas potabilizadoras de HidroCaribe: pintura de tanques y tuberías, rejillas y tapas metálicas, porcelanato y sanitarios, impermeabilización, reparación de pisos, techos y paredes, pintura y cercado perimetral.',
      en: 'Infrastructure rehabilitation at HidroCaribe water treatment plants: tank and pipe painting, metal grates and covers, porcelain tiles and bathroom fixtures, roof waterproofing, floor, ceiling and wall repair, painting and perimeter fencing.',
    },
    photos: [
      ...series(['civiles/civiles-a01.jpg', 'civiles/civiles-a02.jpg'], { es: 'Pintura de tanques y tuberías', en: 'Tank and pipe painting' }),
      ...series(['civiles/civiles-a03.jpg', 'civiles/civiles-a04.jpg', 'civiles/civiles-a05.jpg'], { es: 'Cajas, rejillas y tapas metálicas', en: 'Utility boxes, grates and metal covers' }),
      ...series(['civiles/civiles-a06.jpg', 'civiles/civiles-a07.jpg'], { es: 'Instalación de porcelanato y sanitarios', en: 'Porcelain tile and bathroom fixture installation' }),
      ...series(['civiles/civiles-b01.jpg'], { es: 'Impermeabilización de techo', en: 'Roof waterproofing' }),
      ...series(['civiles/civiles-b02.jpg', 'civiles/civiles-b03.jpg'], { es: 'Reparación de pisos, techos y paredes', en: 'Floor, ceiling and wall repair' }),
      ...series(['civiles/civiles-b04.jpg', 'civiles/civiles-b05.jpg'], { es: 'Pintura de edificaciones', en: 'Building painting' }),
      ...series(['civiles/civiles-b06.jpg'], { es: 'Instalación de cerca perimetral', en: 'Perimeter fence installation' }),
    ],
  },
];

export const projectsByService = (serviceId: string) => PROJECTS.filter((p) => p.service === serviceId);
