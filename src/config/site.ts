// Datos de contacto y configuración global.
// Fuente: docs/empresa.md — no agregar datos que no estén confirmados allí.

export const SITE = {
  name: 'Solvers Industriales',
  legalName: 'Solvers Industriales, C.A.',
  rif: 'J-500294450',
  domain: 'solversindustriales.com',
  email: 'solversindustriales@gmail.com',
  phones: [
    { display: '+58 412-411 4055', tel: '+584124114055', whatsapp: true },
    { display: '+58 424-402 3223', tel: '+584244023223', whatsapp: false },
  ],
  whatsapp: '584124114055',
  president: 'Edgar J. Hernández R.',
  clients: [
    'PDVSA Petróleos, S.A.',
    'Pequiven',
    'Hidroven',
    'HidroCaribe',
    'Empresa Nacional de Transporte, S.A.',
  ],
} as const;

/**
 * Formulario de contacto.
 * GitHub Pages no procesa formularios: se usa un servicio externo.
 * - Web3Forms: endpoint 'https://api.web3forms.com/submit' + accessKey.
 * - Formspree: endpoint 'https://formspree.io/f/XXXXXXX' (accessKey vacío).
 * Mientras endpoint esté vacío, el formulario abre el cliente de correo (mailto) con el mensaje armado.
 */
export const CONTACT_FORM = {
  endpoint: '',
  accessKey: '',
};

export const whatsappUrl = (text?: string) =>
  `https://wa.me/${SITE.whatsapp}${text ? `?text=${encodeURIComponent(text)}` : ''}`;
