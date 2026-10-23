// Líneas de servicio — fuente: docs/empresa.md §4 (brochure, láminas 5–19).
import type { Localized } from './images';

export type Service = {
  id: string;
  slug: Localized;
  icon: 'gear' | 'wrench' | 'flame' | 'building' | 'box' | 'truck';
  title: Localized;
  summary: Localized;
  intro: Localized;
  items: Localized[];
  cover: string; // ruta relativa a src/assets/fotos
  coverAlt: Localized;
  /** Si existe, el servicio enlaza a otra página en lugar de tener detalle propio. */
  link?: 'equipment';
};

const L = (es: string, en: string): Localized => ({ es, en });

export const SERVICES: Service[] = [
  {
    id: 'proyectos-y-mantenimiento',
    slug: L('proyectos-y-mantenimiento', 'projects-and-maintenance'),
    icon: 'gear',
    title: L('Ejecución de proyectos y mantenimiento', 'Project execution and maintenance'),
    summary: L(
      'Proyectos de ingeniería mecánica, eléctrica y civil, soldadura de tuberías, metalmecánica y mantenimiento industrial.',
      'Mechanical, electrical and civil engineering projects, pipeline welding, metalworking and industrial maintenance.',
    ),
    intro: L(
      'Ejecutamos proyectos de ingeniería mecánica, eléctrica y civil y prestamos servicios de mantenimiento industrial con personal especializado, desde la soldadura de tuberías hasta la fabricación de piezas metalmecánicas y las auditorías técnicas.',
      'We execute mechanical, electrical and civil engineering projects and provide industrial maintenance services with specialized personnel, from pipeline welding to metal part fabrication and technical audits.',
    ),
    items: [
      L('Ejecución de proyectos de ingeniería mecánica, eléctrica y civil', 'Mechanical, electrical and civil engineering project execution'),
      L('Soldadura de tuberías', 'Pipeline welding'),
      L('Mantenimiento y reparación de equipos de bombeo', 'Pumping equipment maintenance and repair'),
      L('Mantenimiento y reparación de motores eléctricos y de combustión interna', 'Electric and internal combustion engine maintenance and repair'),
      L('Mantenimiento de tanques', 'Tank maintenance'),
      L('Aplicación y reparación de refractarios y aislamiento térmico', 'Refractory and thermal insulation application and repair'),
      L('Limpieza química y mecánica de calderas y hornos industriales', 'Chemical and mechanical cleaning of industrial boilers and furnaces'),
      L('Fabricación de piezas metalmecánicas', 'Metal-mechanical part fabrication'),
      L('Mantenimiento de estructuras metálicas', 'Metal structure maintenance'),
      L('Sandblasting (limpieza con chorro abrasivo)', 'Sandblasting'),
      L('Tensionado y alineación de juntas bridadas', 'Flanged joint tensioning and alignment'),
      L('Auditorías técnicas y operacionales', 'Technical and operational audits'),
      L('Alquiler de maquinaria pesada', 'Heavy equipment rental'),
    ],
    cover: 'tuberia-proceso/tuberia-05.jpg',
    coverAlt: L('Soldador cortando tubería de proceso', 'Welder cutting process pipe'),
  },
  {
    id: 'mantenimiento-mecanico',
    slug: L('mantenimiento-mecanico', 'mechanical-maintenance'),
    icon: 'wrench',
    title: L('Mantenimiento mecánico', 'Mechanical maintenance'),
    summary: L(
      'Reconstrucción de componentes, reparación de bombas y motores, inspección de tubos de caldera y mantenimiento en plantas.',
      'Component reconstruction, pump and motor repair, boiler tube inspection and in-plant maintenance.',
    ),
    intro: L(
      'Resolvemos problemas mecánicos complejos en equipos críticos: desde la reconstrucción de diafragmas de compresores por ingeniería inversa y cosido en frío hasta la reparación de bombas sumergibles, verticales y horizontales.',
      'We solve complex mechanical problems on critical equipment: from compressor diaphragm reconstruction through reverse engineering and cold stitching to submersible, vertical and horizontal pump repair.',
    ),
    items: [
      L('Reconstrucción de componentes por ingeniería inversa y cosido en frío', 'Component reconstruction through reverse engineering and cold stitching'),
      L('Medición de espesores y dureza de tubos de caldera', 'Boiler tube thickness and hardness measurement'),
      L('Reemplazo de láminas metálicas en contenedores y estructuras', 'Metal plate replacement on containers and structures'),
      L('Reparación de motores y bombas sumergibles', 'Motor and submersible pump repair'),
      L('Reparación de bombas verticales y horizontales', 'Vertical and horizontal pump repair'),
      L('Mantenimiento de filtros, equipos de bombeo y válvulas en plantas de combustible', 'Filter, pumping equipment and valve maintenance at fuel plants'),
    ],
    cover: 'compresor/compresor-02.jpg',
    coverAlt: L('Diafragma de compresor reconstruido', 'Reconstructed compressor diaphragm'),
  },
  {
    id: 'refractarios-y-aislamiento',
    slug: L('refractarios-y-aislamiento-termico', 'refractories-and-thermal-insulation'),
    icon: 'flame',
    title: L('Refractarios y aislamiento térmico', 'Refractories and thermal insulation'),
    summary: L(
      'Aplicación de refractarios y tratamientos térmicos: precalentamiento, PWHT, vulcanización y secado de revestimientos.',
      'Refractory application and heat treatment: preheating, PWHT, vulcanization and lining dry-out.',
    ),
    intro: L(
      'Nuestro equipo especializado ejecuta una amplia gama de procesos de aplicación de refractarios y tratamientos térmicos, incluido el secado de revestimientos y materiales refractarios con quemadores de alta velocidad a fuel-oil y gas.',
      'Our specialized team carries out a wide range of refractory application and heat treatment processes, including dry-out of linings and refractory materials using high-velocity fuel-oil and gas burners.',
    ),
    items: [
      L('Aplicación y reparación de refractarios', 'Refractory application and repair'),
      L('Aislamiento térmico', 'Thermal insulation'),
      L('Precalentamiento', 'Preheating'),
      L('Tratamiento térmico post-soldadura (PWHT)', 'Post-weld heat treatment (PWHT)'),
      L('Vulcanización', 'Vulcanization'),
      L('Secado de revestimientos y refractarios con quemadores de alta velocidad (fuel-oil y gas)', 'Lining and refractory dry-out with high-velocity burners (fuel oil and gas)'),
      L('Limpieza química y mecánica de calderas y hornos industriales', 'Chemical and mechanical cleaning of industrial boilers and furnaces'),
    ],
    cover: 'refractarios/refractarios-02.jpg',
    coverAlt: L('Técnicos instalando equipo de tratamiento térmico', 'Technicians setting up heat treatment equipment'),
  },
  {
    id: 'obras-civiles',
    slug: L('obras-civiles', 'civil-works'),
    icon: 'building',
    title: L('Obras civiles', 'Civil works'),
    summary: L(
      'Rehabilitación de infraestructura, pintura industrial, impermeabilización, herrería y cercado perimetral.',
      'Infrastructure rehabilitation, industrial painting, waterproofing, metalwork and perimeter fencing.',
    ),
    intro: L(
      'Rehabilitamos y mantenemos infraestructura industrial y de servicios, como las plantas potabilizadoras de HidroCaribe, con trabajos de obra civil, pintura y herrería.',
      'We rehabilitate and maintain industrial and utility infrastructure, such as HidroCaribe water treatment plants, with civil, painting and metalwork jobs.',
    ),
    items: [
      L('Rehabilitación de infraestructura de plantas potabilizadoras', 'Water treatment plant infrastructure rehabilitation'),
      L('Pintura de tanques y tuberías', 'Tank and pipeline painting'),
      L('Fabricación de cajas de servicio, rejillas y tapas metálicas', 'Utility boxes, grates and metal cover fabrication'),
      L('Instalación de porcelanato y piezas sanitarias', 'Porcelain tile and bathroom fixture installation'),
      L('Impermeabilización de techos', 'Roof waterproofing'),
      L('Reparación de pisos, techos y paredes', 'Floor, ceiling and wall repair'),
      L('Pintura', 'Painting'),
      L('Instalación de cercas perimetrales', 'Perimeter fence installation'),
    ],
    cover: 'civiles/civiles-b05.jpg',
    coverAlt: L('Planta potabilizadora rehabilitada', 'Rehabilitated water treatment plant'),
  },
  {
    id: 'procura',
    slug: L('procura', 'procurement'),
    icon: 'box',
    title: L('Procura nacional', 'National procurement'),
    summary: L(
      'Suministro de equipos de bombeo, rodamientos, sellos mecánicos, fundiciones, tornillería, pinturas y herramientas.',
      'Supply of pumping equipment, bearings, mechanical seals, castings, fasteners, paints and tools.',
    ),
    intro: L(
      'Gestionamos la procura nacional de equipos, repuestos y materiales para la operación y el mantenimiento industrial.',
      'We handle national procurement of equipment, spare parts and materials for industrial operations and maintenance.',
    ),
    items: [
      L('Equipos de bombeo', 'Pumping equipment'),
      L('Rodamientos industriales', 'Industrial bearings'),
      L('Sellos mecánicos', 'Mechanical seals'),
      L('Piezas fundidas en bronce, aluminio y estaño', 'Bronze, aluminum and tin castings'),
      L('Tornillería', 'Fasteners'),
      L('Pinturas industriales', 'Industrial paints'),
      L('Accesorios y equipos de protección eléctrica', 'Electrical protection accessories and equipment'),
      L('Herramientas', 'Tools'),
    ],
    cover: 'bombas/bombas-02.jpg',
    coverAlt: L('Carcasa de bomba recién pintada', 'Freshly painted pump casing'),
  },
  {
    id: 'maquinaria',
    slug: L('alquiler-de-maquinaria', 'equipment-rental'),
    icon: 'truck',
    title: L('Alquiler de maquinaria y equipos', 'Machinery and equipment rental'),
    summary: L(
      'Maquinaria pesada, camión Pickman y equipos de soldadura, sandblasting y pintura.',
      'Heavy equipment, Pickman truck, and welding, sandblasting and painting equipment.',
    ),
    intro: L('', ''),
    items: [],
    cover: 'maquinaria/cargador-l190e-02.jpg',
    coverAlt: L('Cargador frontal Volvo L190E', 'Volvo L190E wheel loader'),
    link: 'equipment',
  },
];

/** Servicios con página de detalle propia. */
export const DETAIL_SERVICES = SERVICES.filter((s) => !s.link);
