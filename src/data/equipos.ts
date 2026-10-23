// Maquinaria y equipos — fuente: docs/empresa.md §4.6–4.8 (brochure, láminas 17–19, y comentarios de Solvers del 22-oct-2026).
// Pendiente confirmar: marca del compactador ("Mobac" en el brochure; la placa dice BW 211 D-40).
// Sin fotos propias (se muestra un ícono): soldadura de electrodos revestidos y pintura. Pedir fotos a Solvers.
import type { Localized } from './images';

export type Equipment = {
  id: string;
  /** heavy = alquiler de maquinaria · tools = alquiler de equipos/herramientas · support = equipos de apoyo propios */
  group: 'heavy' | 'tools' | 'support';
  name: Localized;
  model?: string;
  /** Línea descriptiva corta bajo el nombre. */
  detail?: Localized;
  /** Rutas relativas a src/assets/fotos; vacío = tarjeta con ícono. */
  photos: string[];
  /** Texto alternativo de las fotos si difiere del nombre. */
  alt?: Localized;
  icon?: 'flame' | 'paint' | 'wrench' | 'gear';
};

const L = (es: string, en: string): Localized => ({ es, en });

export const EQUIPMENT: Equipment[] = [
  // — Alquiler de maquinaria —
  {
    id: 'cargador',
    group: 'heavy',
    name: L('Cargador frontal', 'Wheel loader'),
    model: 'Volvo L190E',
    photos: ['maquinaria/cargador-l190e-02.jpg', 'maquinaria/cargador-l190e-01.jpg'],
  },
  {
    id: 'excavadora',
    group: 'heavy',
    name: L('Excavadora (Jumbo)', 'Excavator (Jumbo)'),
    model: 'Volvo EC210BLC',
    photos: ['maquinaria/excavadora-ec210-01.jpg', 'maquinaria/excavadora-ec210-02.jpg'],
  },
  {
    id: 'retro-bl60b',
    group: 'heavy',
    name: L('Retroexcavadora 4×4', 'Backhoe loader 4×4'),
    model: 'Volvo BL60B',
    photos: ['maquinaria/retro-bl60b-01.jpg', 'maquinaria/retro-bl60b-02.jpg'],
  },
  {
    id: 'retro-bl60',
    group: 'heavy',
    name: L('Retroexcavadora 4×4', 'Backhoe loader 4×4'),
    model: 'Volvo BL60',
    photos: ['maquinaria/retro-bl60-01.jpg', 'maquinaria/retro-bl60-02.jpg'],
  },
  {
    id: 'compactador',
    group: 'heavy',
    name: L('Compactador vibratorio', 'Vibratory compactor'),
    model: 'BW 211 D-40',
    photos: ['maquinaria/compactador-01.jpg', 'maquinaria/compactador-02.jpg'],
  },
  {
    id: 'camion-pickman',
    group: 'heavy',
    name: L('Camión Pickman', 'Pickman truck'),
    detail: L('Camión con grúa articulada', 'Truck with knuckle-boom crane'),
    photos: ['equipos/camion-grua-01.jpg', 'equipos/camion-grua-02.jpg'],
  },

  // — Alquiler de equipos y herramientas —
  {
    id: 'soldadura-electrodo-revestido',
    group: 'tools',
    name: L('Soldadura de electrodos revestidos', 'Shielded metal arc welding'),
    detail: L('Equipos para soldadura SMAW', 'SMAW (stick) welding equipment'),
    photos: [],
    icon: 'flame',
  },
  {
    id: 'moto-soldadoras',
    group: 'tools',
    name: L('Moto soldadoras', 'Engine-driven welders'),
    model: 'Lincoln Electric',
    photos: ['equipos/soldadora-lincoln.jpg'],
    alt: L('Moto soldadora Lincoln Electric', 'Lincoln Electric engine-driven welder'),
  },
  {
    id: 'sandblasting',
    group: 'tools',
    name: L('Sandblasting', 'Sandblasting'),
    detail: L('Limpieza con chorro abrasivo', 'Abrasive blast cleaning'),
    photos: ['equipos/compresor-portatil.jpg'],
    alt: L('Compresor portátil para sandblasting', 'Portable compressor for sandblasting'),
  },
  {
    id: 'pintura',
    group: 'tools',
    name: L('Pintura', 'Painting'),
    detail: L('Equipos para aplicación de pintura', 'Paint application equipment'),
    photos: [],
    icon: 'paint',
  },

  // — Equipos de apoyo —
  {
    id: 'compresor',
    group: 'support',
    name: L('Compresor portátil', 'Portable compressor'),
    photos: ['equipos/compresor-portatil.jpg'],
  },
  {
    id: 'torre-iluminacion',
    group: 'support',
    name: L('Torre de iluminación portátil', 'Portable light tower'),
    photos: ['equipos/torre-iluminacion.jpg'],
  },
];
