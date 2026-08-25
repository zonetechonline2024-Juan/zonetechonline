/**
 * ZoneTechOnline — Configuración centralizada del frontend
 * Un solo lugar para cambiar URLs, constantes y feature flags.
 */
'use strict';

var ZT_CONFIG = (function() {

  var SITE_URL  = 'https://www.zonetechonline.com';
  var API_BASE  = '/api';
  var GA_ID     = 'G-0FVJFMXJWB';

  // URLs de las APIs
  var API = {
    checkout:      API_BASE + '/checkout',
    emails:        API_BASE + '/emails',
    orders:        API_BASE + '/orders',
    review:        API_BASE + '/review',
    feed:          API_BASE + '/feed',
  };

  // Rutas de categorías
  var CATEGORY_ROUTES = {
    todos:          '/catalogo.html',
    relojes:        '/relojes',
    auriculares:    '/auriculares',
    altavoces:      '/altavoces',
    'teclados gaming': '/gaming',
    smartphones:    '/smartphones',
  };

  // Mapa de marca slug → nombre en PRODUCTS
  var BRAND_MAP = {
    garmin:       'Garmin',
    apple:        'Apple',
    samsung:      'Samsung',
    sony:         'Sony',
    jbl:          'JBL',
    jabra:        'Jabra',
    logitech:     'Logitech',
    xiaomi:       'Xiaomi',
    asus:         'ASUS',
    corsair:      'Corsair',
    sennheiser:   'Sennheiser',
    motorola:     'MOTOROLA',
    realme:       'Realme',
    urbanista:    'Urbanista',
    alienware:    'Alienware',
    cherry:       'Cherry',
    'energy-sistem': 'Energy Sistem',
    fonestar:     'Fonestar',
    forever:      'Forever',
    genesis:      'Genesis',
    hama:         'Hama',
    hammer:       'HAMMER',
    krom:         'Krom',
    leotec:       'Leotec',
    'mars-gaming': 'Mars Gaming',
    myphone:      'MyPhone',
    ngs:          'NGS',
    phoenix:      'Phoenix',
    qcharx:       'QCharx',
    spc:          'SPC',
    tcl:          'TCL',
  };

  // Mapa de caso de uso slug → config de filtrado
  var CASE_MAP = {
    'smartwatch-running': {
      title:       'Smartwatch para Running',
      description: 'Los mejores smartwatches con GPS integrado, monitorización de ritmo cardíaco y métricas de carrera profesionales.',
      h1:          'Smartwatches para Running y Atletismo',
      keywords:    ['gps', 'running', 'deportivo'],
      category:    'relojes',
      filter:      function(p) { return p.category === 'relojes' && (p.specs && (p.specs['GPS'] || p.description.toLowerCase().includes('gps'))); },
    },
    'auriculares-home-office': {
      title:       'Auriculares para Home Office',
      description: 'Auriculares con micrófono de alta calidad, cancelación de ruido y larga autonomía para videoconferencias y trabajo remoto.',
      h1:          'Auriculares para Trabajo en Casa y Oficina',
      keywords:    ['micro', 'micrófono', 'conferencia', 'home office'],
      category:    'auriculares',
      filter:      function(p) { return p.category === 'auriculares'; },
    },
    'auriculares-cancelacion-ruido': {
      title:       'Auriculares con Cancelación de Ruido ANC',
      description: 'Auriculares premium con cancelación activa de ruido (ANC) para concentrarte sin distracciones.',
      h1:          'Auriculares con Cancelación Activa de Ruido',
      keywords:    ['anc', 'cancelación de ruido', 'noise cancelling'],
      category:    'auriculares',
      filter:      function(p) { return p.category === 'auriculares' && p.description.toLowerCase().includes('anc'); },
    },
    'auriculares-deporte': {
      title:       'Auriculares para Deporte y Running',
      description: 'Auriculares resistentes al agua y al sudor, perfectos para entrenamiento y actividades al aire libre.',
      h1:          'Auriculares para Deporte',
      keywords:    ['deporte', 'ipx', 'resistente', 'sport'],
      category:    'auriculares',
      filter:      function(p) { return p.category === 'auriculares'; },
    },
    'altavoz-exterior': {
      title:       'Altavoz Portátil para Exterior',
      description: 'Altavoces Bluetooth resistentes al agua, con larga batería, perfectos para playa, montaña y actividades al aire libre.',
      h1:          'Altavoces Portátiles para Exterior',
      keywords:    ['portátil', 'waterproof', 'exterior', 'bluetooth'],
      category:    'altavoces',
      filter:      function(p) { return p.category === 'altavoces'; },
    },
    'teclado-gaming-mecanico': {
      title:       'Teclado Gaming Mecánico',
      description: 'Los mejores teclados mecánicos gaming con retroiluminación RGB, respuesta táctil y durabilidad profesional.',
      h1:          'Teclados Gaming Mecánicos',
      keywords:    ['mecánico', 'mechanical', 'switches', 'rgb'],
      category:    'teclados gaming',
      filter:      function(p) { return p.category === 'teclados gaming'; },
    },
    'smartphone-5g-barato': {
      title:       'Smartphones 5G Baratos y Económicos',
      description: 'Mejores smartphones con conectividad 5G a precio asequible. Gama media y entrada con todas las prestaciones.',
      h1:          'Smartphones 5G a Buen Precio',
      keywords:    ['5g', 'económico', 'gama media'],
      category:    'smartphones',
      filter:      function(p) { return p.category === 'smartphones' && p.specs && p.specs['Conectividad'] === '5G' && p.price < 350; },
    },
    'smartwatch-salud': {
      title:       'Smartwatch para Monitorización de Salud',
      description: 'Smartwatches con ECG, SpO₂, temperatura corporal y seguimiento avanzado de salud cardiovascular.',
      h1:          'Smartwatches para Salud y Bienestar',
      keywords:    ['ecg', 'spo2', 'salud', 'frecuencia cardíaca'],
      category:    'relojes',
      filter:      function(p) { return p.category === 'relojes' && (p.specs && (p.specs['ECG'] || p.specs['SpO₂'])); },
    },
    'smartwatch-mujer': {
      title:       'Smartwatch para Mujer',
      description: 'Relojes inteligentes elegantes con diseño fino, seguimiento de ciclo menstrual y funciones de salud completas.',
      h1:          'Smartwatches para Mujer',
      keywords:    ['mujer', 'elegante', 'fino', 'delgado'],
      category:    'relojes',
      filter:      function(p) { return p.category === 'relojes'; },
    },
    'regalo-tecnologico': {
      title:       'Ideas de Regalo Tecnológico',
      description: 'Los mejores regalos tecnológicos: smartwatches, auriculares, altavoces y gadgets premium para todas las ocasiones.',
      h1:          'Regalos Tecnológicos Premium',
      keywords:    ['regalo', 'navidad', 'cumpleaños', 'premium'],
      category:    null,
      filter:      function(p) { return p.badge === 'OFERTA' || p.badge === 'TOP'; },
    },
  };

  // Feature flags (para activar/desactivar funcionalidades sin redeploy)
  var FEATURES = {
    wishlist:        true,
    comparator:      true,
    aiAssistant:     true,
    brandPages:      true,
    casePages:       true,
    cookieConsent:   false, // Activar en Sprint 1
  };

  // Constantes de envío
  var SHIPPING = {
    freeThreshold:   0,        // Siempre gratuito
    estimatedDays:   '5-8',
    carrier:         'MRW/SEUR',
    countries:       ['ES', 'PT', 'FR', 'DE', 'IT', 'GB', 'NL', 'BE', 'AT', 'CH', 'IE', 'PL'],
  };

  return {
    SITE_URL:         SITE_URL,
    API:              API,
    GA_ID:            GA_ID,
    CATEGORY_ROUTES:  CATEGORY_ROUTES,
    BRAND_MAP:        BRAND_MAP,
    CASE_MAP:         CASE_MAP,
    FEATURES:         FEATURES,
    SHIPPING:         SHIPPING,
  };
})();
