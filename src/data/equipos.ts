// Maquinaria y equipos — fuente: docs/empresa.md §4.6–4.7 (brochure, láminas 17–19).
// Pendiente confirmar: marca del compactador ("Mobac" en el brochure; la placa dice BW 211 D-40)
// y el término "Pickman" (en las fotos: camiones con grúa articulada, posiblemente "Pitman").
import type { Localized } from './images';

export type Equipment = {
  id: string;
  group: 'heavy' | 'support';
  name: Localized;
  model?: string;
  photos: string[];
};

const L = (es: string, en: string): Localized => ({ es, en });

export const EQUIPMENT: Equipment[] = [
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
    id: 'compresor',
    group: 'support',
    name: L('Compresor portátil', 'Portable compressor'),
    photos: ['equipos/compresor-portatil.jpg'],
  },
  {
    id: 'soldadoras',
    group: 'support',
    name: L('Máquinas de soldar', 'Welding machines'),
    model: 'Lincoln Electric',
    photos: ['equipos/soldadora-lincoln.jpg'],
  },
  {
    id: 'camion-grua',
    group: 'support',
    name: L('Camión con grúa articulada', 'Truck with knuckle-boom crane'),
    photos: ['equipos/camion-grua-01.jpg', 'equipos/camion-grua-02.jpg'],
  },
  {
    id: 'torre-iluminacion',
    group: 'support',
    name: L('Torre de iluminación portátil', 'Portable light tower'),
    photos: ['equipos/torre-iluminacion.jpg'],
  },
];
