// ZoneTechOnline — Premium Tech Wearables
// European brand products only: Garmin, Oura, Jabra, Sennheiser, Ray-Ban Meta, Sonos, Marshall, B&O, Bose, CurrentBody...

// ─── FILTER MAP (HTML data-filter → product category) ────────────────────────
const FILTER_MAP = {
  'all':        'todos',
  'watches':    'relojes',
  'rings':      'anillos',
  'headphones': 'auriculares',
  'glasses':    'gafas',
  'speakers':   'altavoces',
  'masks':      'mascaras'
};

// ─── PRODUCT CATALOG ─────────────────────────────────────────────────────────
// Fuente: Depau.es — 19 productos verificados activos — junio 2026
const PRODUCTS = [

  // ── 1 · Xiaomi Smart Band 9 ──────────────────────────────────────────────
  {
    id: 1,
    name: 'Xiaomi Smart Band 9',
    brand: 'Xiaomi',
    category: 'relojes',
    price: 39.95,
    oldPrice: 49.95,
    badge: 'Oferta',
    image: 'https://cdn2.depau.es/articulos/448/448/fixed/art_xia-reloj%20smart%20band%209_1.jpg',
    images: [
      'https://cdn2.depau.es/articulos/448/448/fixed/art_xia-reloj%20smart%20band%209_1.jpg',
      'https://cdn2.depau.es/articulos/448/448/fixed/art_xia-reloj%20redmi%20w%205%20act%20bk_1.jpg'
    ],
    description: 'Pulsera inteligente ultra delgada con pantalla AMOLED 1,62". Monitorización cardíaca 24/7, SpO₂ continuo, 150+ modos deportivos y hasta 14 días de batería. Resistente al agua 5 ATM.',
    specs: {
      'Pantalla': 'AMOLED 1,62"',
      'Modos deportivos': '150+',
      'Batería': 'Hasta 14 días',
      'SpO₂': 'Sí',
      'Resistencia': '5 ATM',
      'SKU': 'BHR8413GL'
    }
  },

  // ── 4 ───────────────────────────────────────────────────────────────────
  {
    id: 4,
    name: 'Xiaomi Redmi Watch 5 Active Negro',
    brand: 'Xiaomi',
    category: 'relojes',
    price: 49.95,
    oldPrice: 69.99,
    badge: 'Más vendido',
    image: 'https://cdn2.depau.es/articulos/448/448/fixed/art_xia-reloj%20redmi%20w%205%20act%20bk_1.jpg',
    images: [
      'https://cdn2.depau.es/articulos/448/448/fixed/art_xia-reloj%20redmi%20w%205%20act%20bk_1.jpg'
    ],
    description: 'Smartwatch con pantalla de 2.05" AMOLED. Monitor de frecuencia cardíaca y SpO₂ continuo. 160+ modos deportivos. GPS integrado. Notificaciones. Batería 20 días. Color negro.',
    specs: {
      'Pantalla': '2.05" AMOLED',
      'GPS': 'Integrado',
      'Frecuencia cardíaca': '24/7',
      'SpO₂': 'Sí',
      'Batería': 'Hasta 20 días',
      'Resistencia': '5 ATM',
      'P/N Depau': 'BHR8784GL',
      'SKU': 'XIA-RELOJ REDMI W 5 ACT BK'
    }
  },

  // ── 5 · Precio más alto ──────────────────────────────────────────────────
  {
    id: 5,
    name: 'Xiaomi Redmi Watch 5 Active Plata',
    brand: 'Xiaomi',
    category: 'relojes',
    price: 49.95,
    oldPrice: 69.99,
    badge: 'Nuevo 2026',
    image: 'https://cdn2.depau.es/articulos/448/448/fixed/art_xia-reloj%20redmi%20w%205%20act%20sv_1.jpg',
    images: [
      'https://cdn2.depau.es/articulos/448/448/fixed/art_xia-reloj%20redmi%20w%205%20act%20sv_1.jpg'
    ],
    description: 'Smartwatch con pantalla de 2.05" AMOLED. Monitor de frecuencia cardíaca y SpO₂ continuo. 160+ modos deportivos. GPS integrado. Notificaciones. Batería 20 días. Color plata.',
    specs: {
      'Pantalla': '2.05" AMOLED',
      'GPS': 'Integrado',
      'Frecuencia cardíaca': '24/7',
      'SpO₂': 'Sí',
      'Batería': 'Hasta 20 días',
      'Resistencia': '5 ATM',
      'P/N Depau': 'BHR8790GL',
      'SKU': 'XIA-RELOJ REDMI W 5 ACT SV'
    }
  }

];

// ─── SAMSUNG PRODUCTS (fuente: depau.es — scraping 30/05/2026) ───────────────
PRODUCTS.push(

  // ── 16 · Samsung Galaxy Watch 7 44mm Verde ──────────────────────────────────
  {
    id: 16,
    name: 'Samsung Galaxy Watch 7 44mm Verde',
    brand: 'Samsung',
    category: 'relojes',
    price: 279.99,
    oldPrice: 329.99,
    badge: 'Nuevo 2024',
    image: 'https://cdn2.depau.es/articulos/448/448/fixed/art_sam-reloj%20l310%2044%20bt%20gree%20v2_1.jpg',
    images: [
      'https://cdn2.depau.es/articulos/448/448/fixed/art_sam-reloj%20l310%2044%20bt%20gree%20v2_1.jpg',
      'https://cdn2.depau.es/articulos/448/448/fixed/art_sam-reloj%20l300%2040%20bt%20gree_1.jpg'
    ],
    description: 'Smartwatch 44mm en color verde con Super AMOLED 1,5" circular. Procesador 3nm. GPS multibanda, ECG, SpO₂, temperatura y composición corporal avanzada. Galaxy AI integrado. Hasta 40h batería.',
    specs: {
      'Pantalla': 'Super AMOLED 1,5" circular',
      'Procesador': '3nm',
      'GPS': 'Multibanda',
      'ECG': 'Sí',
      'Galaxy AI': 'Sí',
      'Batería': 'Hasta 40h (87h modo ahorro)',
      'P/N Depau': 'SAM-RELOJ L310 44 BT GREE V2',
      'Fuente': 'depau.es'
    }
  }

);

// ─── APPLE PRODUCTS (fuente: depau.es — scraping 31/05/2026) ────────────────────
PRODUCTS.push(

  // ── 31 · Apple Watch SE3 GPS 40mm Blanco Estrella ──────────────────────────
  {
    id: 31,
    name: 'Apple Watch SE3 GPS 40mm Blanco Estrella',
    brand: 'Apple',
    category: 'relojes',
    price: 249.00,
    oldPrice: 279.00,
    badge: 'Más económico',
    image: 'https://cdn2.depau.es/articulos/448/448/fixed/art_apl-watch%20meh54qlbardera_1.jpg',
    images: [
      'https://cdn2.depau.es/articulos/448/448/fixed/art_apl-watch%20meh54qlbardera_1.jpg',
      'https://cdn2.depau.es/articulos/448/448/fixed/art_apl-watch%20mehc4qlbardera_1.jpg'
    ],
    description: 'Apple Watch SE3 de aluminio Blanco Estrella, 40mm. Chip S9 SiP. Pantalla Retina OLED Always-On. Frecuencia cardíaca continua, SpO₂, detector de caídas y accidentes de tráfico. GPS integrado. WatchOS 11. Resistente al agua 50m. Hasta 18h batería.',
    specs: {
      'Chip':           'S9 SiP 64-bit dual-core',
      'Pantalla':       'Retina OLED 40mm',
      'GPS':            'L1 + GLONASS + BeiDou + Galileo',
      'Salud':          'Frec. cardíaca, SpO₂, detector caídas',
      'Batería':        'Hasta 18h',
      'Resistencia':    '50m (WR50)',
      'P/N Depau':      'APL-WATCH MEH54QL/A',
      'Fuente':         'depau.es'
    }
  },

  // ── 32 · Apple Watch SE3 GPS 44mm Blanco Estrella ──────────────────────────
  {
    id: 32,
    name: 'Apple Watch SE3 GPS 44mm Blanco Estrella',
    brand: 'Apple',
    category: 'relojes',
    price: 279.00,
    oldPrice: 309.00,
    badge: 'GPS',
    image: 'https://cdn2.depau.es/articulos/448/448/fixed/art_apl-watch%20mehj4qlbardera_1.jpg',
    images: [
      'https://cdn2.depau.es/articulos/448/448/fixed/art_apl-watch%20mehj4qlbardera_1.jpg',
      'https://cdn2.depau.es/articulos/448/448/fixed/art_apl-watch%20meh54qlbardera_1.jpg'
    ],
    description: 'Apple Watch SE3 de aluminio Blanco Estrella, 44mm. Chip S9 SiP. Pantalla Retina OLED mayor. Frecuencia cardíaca continua, SpO₂, detector de caídas y accidentes de tráfico. GPS integrado. WatchOS 11. Resistente al agua 50m. Hasta 18h batería.',
    specs: {
      'Chip':           'S9 SiP 64-bit dual-core',
      'Pantalla':       'Retina OLED 44mm',
      'GPS':            'L1 + GLONASS + BeiDou + Galileo',
      'Salud':          'Frec. cardíaca, SpO₂, detector caídas',
      'Batería':        'Hasta 18h',
      'Resistencia':    '50m (WR50)',
      'P/N Depau':      'APL-WATCH MEHJ4QL/A',
      'Fuente':         'depau.es'
    }
  },

  // ── 33 · Apple Watch SE3 GPS+Cellular 40mm Medianoche ──────────────────────
  {
    id: 33,
    name: 'Apple Watch SE3 GPS+Cellular 40mm Medianoche',
    brand: 'Apple',
    category: 'relojes',
    price: 299.00,
    oldPrice: 349.00,
    badge: 'GPS+Cellular',
    image: 'https://cdn2.depau.es/articulos/448/448/fixed/art_apl-watch%20mep94qlbardera_1.jpg',
    images: [
      'https://cdn2.depau.es/articulos/448/448/fixed/art_apl-watch%20mep94qlbardera_1.jpg',
      'https://cdn2.depau.es/articulos/448/448/fixed/art_apl-watch%20mepc4qlbardera_1.jpg'
    ],
    description: 'Apple Watch SE3 Medianoche con conectividad Cellular independiente. Chip S9 SiP. Llama y recibe mensajes sin iPhone cerca. Frecuencia cardíaca continua, SpO₂, detector de caídas y accidentes. GPS integrado. Resistente 50m. Hasta 18h batería.',
    specs: {
      'Chip':           'S9 SiP 64-bit dual-core',
      'Pantalla':       'Retina OLED 40mm',
      'Conectividad':   'GPS + Cellular (LTE/UMTS)',
      'Salud':          'Frec. cardíaca, SpO₂, detector caídas',
      'Batería':        'Hasta 18h',
      'Resistencia':    '50m (WR50)',
      'P/N Depau':      'APL-WATCH MEP94QL/A',
      'Fuente':         'depau.es'
    }
  },

  // ── 34 · Apple Watch SE3 GPS+Cellular 44mm Medianoche ──────────────────────
  {
    id: 34,
    name: 'Apple Watch SE3 GPS+Cellular 44mm Medianoche',
    brand: 'Apple',
    category: 'relojes',
    price: 329.00,
    oldPrice: 379.00,
    badge: 'GPS+Cellular',
    image: 'https://cdn2.depau.es/articulos/448/448/fixed/art_apl-watch%20mepj4qlbardera_1.jpg',
    images: [
      'https://cdn2.depau.es/articulos/448/448/fixed/art_apl-watch%20mepj4qlbardera_1.jpg',
      'https://cdn2.depau.es/articulos/448/448/fixed/art_apl-watch%20mep94qlbardera_1.jpg'
    ],
    description: 'Apple Watch SE3 Medianoche 44mm con conectividad Cellular. Chip S9 SiP. Pantalla Retina OLED mayor. Llamadas y mensajes independientes del iPhone. Frecuencia cardíaca, SpO₂, detector de caídas y accidentes. Hasta 18h batería.',
    specs: {
      'Chip':           'S9 SiP 64-bit dual-core',
      'Pantalla':       'Retina OLED 44mm',
      'Conectividad':   'GPS + Cellular (LTE/UMTS)',
      'Salud':          'Frec. cardíaca, SpO₂, detector caídas',
      'Batería':        'Hasta 18h',
      'Resistencia':    '50m (WR50)',
      'P/N Depau':      'APL-WATCH MEPJ4QL/A',
      'Fuente':         'depau.es'
    }
  },

  // ── 35 · Apple Watch Series 11 GPS 42mm Gris Espacial ──────────────────────
  {
    id: 35,
    name: 'Apple Watch Series 11 GPS 42mm Gris Espacial',
    brand: 'Apple',
    category: 'relojes',
    price: 399.00,
    oldPrice: 449.00,
    badge: 'ECG + SpO₂',
    image: 'https://cdn2.depau.es/articulos/448/448/fixed/art_apl-watch%20meqx4qlbardera_1.jpg',
    images: [
      'https://cdn2.depau.es/articulos/448/448/fixed/art_apl-watch%20meqx4qlbardera_1.jpg',
      'https://cdn2.depau.es/articulos/448/448/fixed/art_apl-watch%20meqw4qlbardera_1.jpg'
    ],
    description: 'Apple Watch Series 11 de aluminio Gris Espacial, 42mm. Chip S11 SiP. Pantalla Always-On Retina OLED. ECG, SpO₂, temperatura cutánea, frecuencia cardíaca 24/7 y detector de choques. GPS dual frecuencia L1+L5. WatchOS 11. Resistente 50m.',
    specs: {
      'Chip':           'S11 SiP',
      'Pantalla':       'Always-On Retina OLED 42mm',
      'GPS':            'Dual frecuencia L1+L5',
      'ECG':            'Sí',
      'Salud':          'SpO₂, temperatura cutánea, Frec. cardíaca 24/7',
      'Batería':        'Hasta 18h',
      'Resistencia':    '50m (WR50)',
      'P/N Depau':      'APL-WATCH MEQX4QL/A',
      'Fuente':         'depau.es'
    }
  }

);

// ─── SONY HEADPHONE PRODUCTS (fuente: Depau CDN + sony.es — datos de referencia mayo 2026) ─
PRODUCTS.push(

  // ── 62 · Sony WH-CH520 Negro ───────────────────────────────────────────────
  {
    id: 62,
    name: 'Sony WH-CH520 Negro',
    brand: 'Sony',
    category: 'auriculares',
    price: 39.99,
    oldPrice: 49.99,
    badge: 'Bluetooth 5.2',
    image: 'https://cdn2.depau.es/articulos/448/448/fixed/art_sony-aur%20wh-ch520%20bk_1.jpg',
    images: [
      'https://cdn2.depau.es/articulos/448/448/fixed/art_sony-aur%20wh-ch520%20bk_1.jpg',
      'https://cdn2.depau.es/articulos/448/448/fixed/art_sony-aur%20wh-ch520%20bk_2.jpg'
    ],
    description: 'Sony WH-CH520 Negro: auriculares inalámbricos de diadema ligeros y cómodos con 50 horas de autonomía y carga rápida USB-C (3 min = 90 min de música). Bluetooth 5.2 con función Multipoint (2 dispositivos simultáneos). Micrófono integrado manos libres. Asistente de voz compatible (Google, Alexa, Siri). Sin ANC. Plegables y portátiles.',
    specs: {
      'Tipo':          'Diadema inalámbrico (on-ear)',
      'Bluetooth':     '5.2 · Multipoint (2 dispositivos)',
      'Batería':       '50 horas · Carga rápida: 90 min con 3 min de carga',
      'Carga':         'USB-C',
      'ANC':           'Sin cancelación activa de ruido',
      'Micrófono':     'Integrado · Manos libres',
      'Peso':          '147g (ultraligero)',
      'Plegable':      'Sí',
      'Asistente':     'Google Assistant, Amazon Alexa, Siri',
      'Resistencia':   'Sin certificación IP',
      'Fuente':        'Depau + sony.es'
    }
  },

  // ── 63 · Sony WF-C510 Blanco ───────────────────────────────────────────────
  {
    id: 63,
    name: 'Sony WF-C510 Blanco',
    brand: 'Sony',
    category: 'auriculares',
    price: 49.99,
    oldPrice: 59.99,
    badge: 'True Wireless',
    image: 'https://cdn2.depau.es/articulos/448/448/fixed/art_sony-aur%20wf-c510%20wh_1.jpg',
    images: [
      'https://cdn2.depau.es/articulos/448/448/fixed/art_sony-aur%20wf-c510%20wh_1.jpg',
      'https://cdn2.depau.es/articulos/448/448/fixed/art_sony-aur%20wf-c510%20wh_2.jpg'
    ],
    description: 'Sony WF-C510 Blanco: auriculares True Wireless completamente inalámbricos (sin cable) con hasta 20 horas de autonomía total (5h auriculares + 15h estuche). Bluetooth 5.3. Resistencia a salpicaduras IPX4. Ecualizador personalizable desde la app Sony Headphones Connect. Micrófono de alta calidad para llamadas. Peso ultraligero por auricular.',
    specs: {
      'Tipo':          'In-ear True Wireless',
      'Bluetooth':     '5.3',
      'Batería':       '5h (auriculares) + 15h (estuche) = 20h total',
      'Carga':         'USB-C',
      'ANC':           'Sin cancelación activa de ruido',
      'Resistencia':   'IPX4 (resistente a salpicaduras)',
      'Códec':         'SBC, AAC',
      'App':           'Sony Headphones Connect (EQ + ajustes)',
      'Asistente':     'Compatible con asistente de voz del teléfono',
      'Fuente':        'Depau + sony.es'
    }
  },

  // ── 64 · Sony WH-CH720N Negro ──────────────────────────────────────────────
  {
    id: 64,
    name: 'Sony WH-CH720N Negro',
    brand: 'Sony',
    category: 'auriculares',
    price: 89.99,
    oldPrice: 109.99,
    badge: 'ANC Ligero',
    image: 'https://cdn2.depau.es/articulos/448/448/fixed/art_sony-aur%20wh-ch720n%20bk_1.jpg',
    images: [
      'https://cdn2.depau.es/articulos/448/448/fixed/art_sony-aur%20wh-ch720n%20bk_1.jpg',
      'https://cdn2.depau.es/articulos/448/448/fixed/art_sony-aur%20wh-ch720n%20bk_2.jpg'
    ],
    description: 'Sony WH-CH720N Negro: auriculares inalámbricos de diadema con cancelación activa de ruido (ANC) y el diseño más ligero de Sony (192g). Hasta 35h con ANC activo / 50h sin ANC. Bluetooth 5.2 Multipoint. DSEE (Digital Sound Enhancement Engine). Modo Ambiente para escuchar el entorno. Carga rápida USB-C. Optimización automática del ANC según el entorno.',
    specs: {
      'Tipo':          'Diadema inalámbrico (over-ear)',
      'Bluetooth':     '5.2 · Multipoint',
      'Batería':       '35h con ANC · 50h sin ANC · Carga rápida USB-C',
      'ANC':           'Cancelación activa de ruido digital/analógica dual',
      'Modo Ambiente': 'Sí (hear-through)',
      'Peso':          '192g (el más ligero de Sony con ANC)',
      'DSEE':          'Digital Sound Enhancement Engine',
      'Plegable':      'Sí',
      'Asistente':     'Google Assistant, Amazon Alexa',
      'Resistencia':   'Sin certificación IP',
      'Fuente':        'Depau + sony.es'
    }
  },

  // ── 65 · Sony WF-C710N Blanco ──────────────────────────────────────────────
  {
    id: 65,
    name: 'Sony WF-C710N Blanco',
    brand: 'Sony',
    category: 'auriculares',
    price: 99.99,
    oldPrice: 119.99,
    badge: 'ANC True Wireless',
    image: 'https://cdn2.depau.es/articulos/448/448/fixed/art_sony-aur%20wf-c710n%20wh_1.jpg',
    images: [
      'https://cdn2.depau.es/articulos/448/448/fixed/art_sony-aur%20wf-c710n%20wh_1.jpg',
      'https://cdn2.depau.es/articulos/448/448/fixed/art_sony-aur%20wf-c710n%20wh_2.jpg'
    ],
    description: 'Sony WF-C710N Blanco: auriculares True Wireless con cancelación activa de ruido (ANC) Dual Noise Sensor. Hasta 30 horas de autonomía total (7,5h + 22,5h estuche) con ANC. Bluetooth 5.3. IPX4 resistencia a salpicaduras. Ecualización personalizable desde la app Sony Headphones Connect. Micrófono con reducción de ruido de fondo para llamadas claras. Modelo 2025.',
    specs: {
      'Tipo':          'In-ear True Wireless con ANC',
      'Bluetooth':     '5.3',
      'Batería':       '7,5h (auriculares) + 22,5h (estuche) = 30h total con ANC',
      'ANC':           'Dual Noise Sensor Technology (ANC activo)',
      'Modo Ambiente': 'Sí (Ambient Sound Mode)',
      'Resistencia':   'IPX4 (resistente a salpicaduras)',
      'Carga':         'USB-C',
      'App':           'Sony Headphones Connect',
      'Asistente':     'Compatible con asistente de voz del teléfono',
      'Fuente':        'Depau + sony.es'
    }
  },

  // ── 66 · Sony ULT WEAR Negro ───────────────────────────────────────────────
  {
    id: 66,
    name: 'Sony ULT WEAR Negro',
    brand: 'Sony',
    category: 'auriculares',
    price: 129.99,
    oldPrice: 159.99,
    badge: 'ULT POWER SOUND',
    image: 'https://cdn2.depau.es/articulos/448/448/fixed/art_sony-aur%20ult%20wear%20bk_1.jpg',
    images: [
      'https://cdn2.depau.es/articulos/448/448/fixed/art_sony-aur%20ult%20wear%20bk_1.jpg',
      'https://cdn2.depau.es/articulos/448/448/fixed/art_sony-aur%20ult%20wear%20bk_2.jpg'
    ],
    description: 'Sony ULT WEAR Negro: auriculares inalámbricos de diadema con ULT POWER SOUND (botón dedicado para máximo impacto de graves), cancelación activa de ruido (ANC) y hasta 30h de batería con ANC / 50h sin ANC. Bluetooth 5.2 Multipoint. Modo Ambiente. DSEE audio enhancement. USB-C. Diseño robusto con almohadillas premium. La nueva línea ULT de Sony para bass lovers.',
    specs: {
      'Tipo':          'Diadema inalámbrico (over-ear) · ULT Bass',
      'Bluetooth':     '5.2 · Multipoint (2 dispositivos)',
      'Batería':       '30h con ANC · 50h sin ANC · Carga USB-C',
      'ANC':           'Cancelación activa de ruido',
      'Modo Ambiente': 'Sí',
      'ULT SOUND':     'Botón dedicado para máximo impacto de graves',
      'DSEE':          'Digital Sound Enhancement Engine',
      'Asistente':     'Google Assistant, Amazon Alexa',
      'Plegable':      'Sí',
      'Resistencia':   'Sin certificación IP',
      'Fuente':        'Depau + sony.es'
    }
  }

);

// --- JBL ALTAVOCES (fuente: depau.es — IDs 127-131, verificados junio 2026) ---
// Productos activos confirmados en Depau | Ordenados por precio ascendente
PRODUCTS.push(

  // ── JBL GO 5 Negro ────────────────────────────────────────────────────────
  { id:127, name:'JBL GO 5 Negro', brand:'JBL', category:'altavoces',
    price:49.99,
    oldPrice: 64.99,
    badge:'4,8W · IP67 · 5h · BT 5.3',
    image:'https://cdn2.depau.es/articulos/448/448/fixed/art_jbl-alt%20go5%20bk_1.jpg',
    description:'El altavoz portátil más compacto de JBL con audio potente para su tamaño (4,8W RMS). Bluetooth 5.3 para conexión instantánea, resistencia total al agua y polvo IP67 (sumergible) y hasta 5 horas de reproducción. Carga rápida via USB-C. Diseño de bolsillo — cabe en cualquier bolso.',
    specs:{
      'Potencia RMS':   '4,8W',
      'Conectividad':   'Bluetooth 5.3',
      'Resistencia':    'IP67 — sumergible hasta 1m/30min · a prueba de polvo',
      'Batería':        '5 horas de reproducción · carga USB-C',
      'Peso':           '184g',
      'Dimensiones':    '86,9 × 86,9 × 38,8 mm',
      'SKU Depau':      'JBL-ALT GO5 BK',
      'Fuente':         'depau.es — CDN verificado'
    }
  },

  // ── JBL Clip 5 Negro ─────────────────────────────────────────────────────
  { id:128, name:'JBL Clip 5 Negro', brand:'JBL', category:'altavoces',
    price:64.99,
    oldPrice: 79.99,
    badge:'7W · IP67 · 12h · Clip mosquetón',
    image:'https://cdn2.depau.es/articulos/448/448/fixed/art_jbl-alt%20clip5%20bk_1.jpg',
    description:'Altavoz portátil JBL con clip mosquetón integrado para engancharlo a la mochila, cinturón o tienda de campaña. 7W RMS con graves profundos, Bluetooth 5.3, IP67 sumergible y hasta 12 horas de batería. Carga USB-C. El compañero de aventuras ideal.',
    specs:{
      'Potencia RMS':   '7W',
      'Conectividad':   'Bluetooth 5.3',
      'Resistencia':    'IP67 — sumergible hasta 1m/30min · a prueba de polvo',
      'Batería':        '12 horas de reproducción · carga USB-C',
      'Clip':           'Mosquetón integrado de aleación',
      'Peso':           '241g',
      'Dimensiones':    '79,3 × 79,3 × 96,7 mm',
      'SKU Depau':      'JBL-ALT CLIP5 BK',
      'Fuente':         'depau.es — CDN verificado'
    }
  },

  // ── JBL Flip 6 Negro ─────────────────────────────────────────────────────
  { id:129, name:'JBL Flip 6 Negro', brand:'JBL', category:'altavoces',
    price:99.99,
    oldPrice: 119.99,
    badge:'30W · IP67 · 12h · PartyBoost',
    image:'https://cdn2.depau.es/articulos/448/448/fixed/art_jbl-alt%20flip6%20bk_1.jpg',
    description:'El altavoz portátil más popular de JBL: 30W RMS con configuración 2×15W para un sonido potente y equilibrado. IP67, 12 horas de batería, carga USB-C y tecnología PartyBoost para conectar múltiples altavoces JBL en red. Sonido envolvente con radiadores pasivos.',
    specs:{
      'Potencia RMS':   '30W (2×15W)',
      'Conectividad':   'Bluetooth 5.1',
      'Resistencia':    'IP67 — sumergible hasta 1m/30min',
      'Batería':        '12 horas de reproducción · carga USB-C',
      'PartyBoost':     'Sí — conecta múltiples altavoces JBL',
      'Radiadores pasivos': '2 × radiadores para graves mejorados',
      'Peso':           '530g',
      'Dimensiones':    '178 × 68 × 72 mm',
      'SKU Depau':      'JBL-ALT FLIP6 BK',
      'Fuente':         'depau.es — CDN verificado'
    }
  },

  // ── JBL Flip 7 Blanco ────────────────────────────────────────────────────
  { id:130, name:'JBL Flip 7 Blanco', brand:'JBL', category:'altavoces',
    price:129.99,
    oldPrice: 159.99,
    badge:'35W · IP67 · 12h · Auracast',
    image:'https://cdn2.depau.es/articulos/448/448/fixed/art_jbl-alt%20flip7%20wh_1.jpg',
    description:'JBL Flip 7: la evolución del Flip 6 con 35W RMS (+17% potencia) y tecnología Auracast™ para compartir audio con múltiples dispositivos Bluetooth simultáneamente. Bluetooth 5.3, IP67 sumergible, 12 horas de batería y diseño más compacto. Novedad 2025.',
    specs:{
      'Potencia RMS':   '35W',
      'Conectividad':   'Bluetooth 5.3',
      'Auracast':       'Sí — audio sharing multi-dispositivo',
      'Resistencia':    'IP67 — sumergible hasta 1m/30min',
      'Batería':        '12 horas de reproducción · carga USB-C',
      'PartyBoost':     'Sí — compatible con otros altavoces JBL',
      'Peso':           '550g',
      'Dimensiones':    '174 × 68 × 72 mm',
      'SKU Depau':      'JBL-ALT FLIP7 WH',
      'Fuente':         'depau.es — CDN verificado'
    }
  },

  // ── JBL Charge 6 Negro ───────────────────────────────────────────────────
  { id:131, name:'JBL Charge 6 Negro', brand:'JBL', category:'altavoces',
    price:169.99,
    oldPrice: 199.99,
    badge:'45W · IP67 · 24h · PowerBank USB-A',
    image:'https://cdn2.depau.es/articulos/448/448/fixed/art_jbl-alt%20charge%206%20bk_1.jpg',
    description:'El altavoz portátil premium de JBL: 45W RMS con sonido potente y graves profundos, 24 horas de batería y función PowerBank USB-A para cargar tu móvil. IP67 sumergible, Bluetooth 5.3, Auracast™ y compatible con PartyBoost. El mejor altavoz portátil de la gama estándar JBL.',
    specs:{
      'Potencia RMS':   '45W',
      'Conectividad':   'Bluetooth 5.3',
      'Auracast':       'Sí — audio sharing multi-dispositivo',
      'Resistencia':    'IP67 — sumergible hasta 1m/30min',
      'Batería':        '24 horas de reproducción · carga USB-C',
      'PowerBank':      'Sí — puerto USB-A para cargar dispositivos',
      'PartyBoost':     'Sí — conecta múltiples altavoces JBL',
      'Peso':           '970g',
      'Dimensiones':    '220 × 95 × 93 mm',
      'SKU Depau':      'JBL-ALT CHARGE 6 BK',
      'Fuente':         'depau.es — CDN verificado'
    }
  }

);

// ─── SVG GENERATORS ──────────────────────────────────────────────────────────

function watchSVG(color) {
  color = color || '#6366f1';
  return `<svg viewBox="0 0 120 160" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="40" y="10" width="8" height="20" rx="3" fill="${color}" opacity=".6"/>
    <rect x="72" y="10" width="8" height="20" rx="3" fill="${color}" opacity=".6"/>
    <rect x="40" y="130" width="8" height="20" rx="3" fill="${color}" opacity=".6"/>
    <rect x="72" y="130" width="8" height="20" rx="3" fill="${color}" opacity=".6"/>
    <rect x="20" y="30" width="80" height="100" rx="20" fill="#1a1a2e" stroke="${color}" stroke-width="2"/>
    <rect x="26" y="36" width="68" height="88" rx="16" fill="#0d0d1a"/>
    <circle cx="60" cy="80" r="28" fill="none" stroke="${color}" stroke-width="1" opacity=".3"/>
    <line x1="60" y1="80" x2="60" y2="58" stroke="${color}" stroke-width="2" stroke-linecap="round"/>
    <line x1="60" y1="80" x2="74" y2="88" stroke="${color}" stroke-width="2" stroke-linecap="round" opacity=".7"/>
    <circle cx="60" cy="80" r="3" fill="${color}"/>
    <path d="M 36 80 Q 42 65 50 72 Q 58 79 60 64 Q 62 49 72 56 Q 78 60 84 80" stroke="#10b981" stroke-width="1.5" fill="none" opacity=".8"/>
  </svg>`;
}

function ringSVG(color) {
  color = color || '#6366f1';
  return `<svg viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
    <ellipse cx="60" cy="60" rx="40" ry="40" fill="none" stroke="${color}" stroke-width="12" opacity=".15"/>
    <ellipse cx="60" cy="60" rx="40" ry="40" fill="none" stroke="${color}" stroke-width="8"/>
    <ellipse cx="60" cy="60" rx="40" ry="40" fill="none" stroke="white" stroke-width="1" opacity=".2"/>
    <ellipse cx="60" cy="60" rx="30" ry="30" fill="none" stroke="${color}" stroke-width="1" opacity=".3" stroke-dasharray="4 4"/>
    <circle cx="60" cy="22" r="4" fill="${color}"/>
    <circle cx="60" cy="22" r="7" fill="none" stroke="${color}" stroke-width="1" opacity=".5"/>
    <path d="M 40 60 Q 42 52 50 55 Q 58 58 60 50 Q 62 42 70 45 Q 75 48 78 60" stroke="#10b981" stroke-width="1.5" fill="none" opacity=".8"/>
    <text x="60" y="65" text-anchor="middle" fill="${color}" font-size="8" font-family="Inter" opacity=".8">SpO₂</text>
  </svg>`;
}

function glassesSVG(color) {
  color = color || '#6366f1';
  return `<svg viewBox="0 0 160 80" fill="none" xmlns="http://www.w3.org/2000/svg">
    <line x1="0" y1="35" x2="22" y2="35" stroke="${color}" stroke-width="3" stroke-linecap="round"/>
    <line x1="138" y1="35" x2="160" y2="35" stroke="${color}" stroke-width="3" stroke-linecap="round"/>
    <rect x="22" y="18" width="48" height="34" rx="10" fill="#0d0d1a" stroke="${color}" stroke-width="2.5"/>
    <rect x="90" y="18" width="48" height="34" rx="10" fill="#0d0d1a" stroke="${color}" stroke-width="2.5"/>
    <line x1="70" y1="30" x2="90" y2="30" stroke="${color}" stroke-width="2.5" stroke-linecap="round"/>
    <rect x="25" y="21" width="42" height="28" rx="8" fill="${color}" opacity=".08"/>
    <rect x="93" y="21" width="42" height="28" rx="8" fill="${color}" opacity=".08"/>
    <circle cx="38" cy="62" r="5" fill="${color}" opacity=".6"/>
    <circle cx="38" cy="62" r="3" fill="${color}"/>
    <text x="48" y="67" fill="${color}" font-size="7" font-family="Inter" opacity=".8">MIC AI</text>
    <circle cx="122" cy="62" r="4" fill="#10b981" opacity=".8"/>
    <circle cx="130" cy="62" r="4" fill="#10b981" opacity=".5"/>
    <circle cx="138" cy="62" r="4" fill="#10b981" opacity=".3"/>
  </svg>`;
}

function headphonesSVG(color) {
  color = color || '#6366f1';
  return `<svg viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M 20 65 Q 20 25 60 25 Q 100 25 100 65" stroke="${color}" stroke-width="4" fill="none" stroke-linecap="round"/>
    <rect x="8" y="60" width="24" height="36" rx="10" fill="#1a1a2e" stroke="${color}" stroke-width="2"/>
    <rect x="88" y="60" width="24" height="36" rx="10" fill="#1a1a2e" stroke="${color}" stroke-width="2"/>
    <rect x="11" y="63" width="18" height="30" rx="8" fill="${color}" opacity=".15"/>
    <rect x="91" y="63" width="18" height="30" rx="8" fill="${color}" opacity=".15"/>
    <circle cx="20" cy="78" r="5" fill="${color}" opacity=".6"/>
    <circle cx="100" cy="78" r="5" fill="${color}" opacity=".6"/>
    <circle cx="20" cy="78" r="2" fill="${color}"/>
    <circle cx="100" cy="78" r="2" fill="${color}"/>
    <path d="M 44 105 L 44 112 Q 60 117 76 112 L 76 105" stroke="${color}" stroke-width="1.5" fill="none" opacity=".4" stroke-linecap="round"/>
    <circle cx="60" cy="115" r="4" fill="${color}" opacity=".5"/>
  </svg>`;
}

function speakerSVG(color) {
  color = color || '#6366f1';
  return `<svg viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="15" y="30" width="90" height="60" rx="18" fill="#1a1a2e" stroke="${color}" stroke-width="2"/>
    <circle cx="45" cy="60" r="18" fill="#0d0d1a" stroke="${color}" stroke-width="1.5"/>
    <circle cx="45" cy="60" r="12" fill="none" stroke="${color}" stroke-width="1" opacity=".5"/>
    <circle cx="45" cy="60" r="5" fill="${color}" opacity=".7"/>
    <circle cx="45" cy="60" r="2" fill="${color}"/>
    <circle cx="82" cy="53" r="5" fill="${color}" opacity=".3"/>
    <circle cx="82" cy="53" r="3" fill="${color}" opacity=".6"/>
    <circle cx="82" cy="53" r="1.5" fill="${color}"/>
    <rect x="72" y="63" width="20" height="3" rx="1.5" fill="${color}" opacity=".4"/>
    <rect x="72" y="70" width="15" height="3" rx="1.5" fill="${color}" opacity=".3"/>
    <circle cx="45" cy="60" r="22" fill="none" stroke="${color}" stroke-width="0.5" opacity=".2" stroke-dasharray="3 3"/>
  </svg>`;
}

function maskSVG(color) {
  color = color || '#6366f1';
  return `<svg viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M 10 45 Q 10 20 60 20 Q 110 20 110 45 L 105 80 Q 100 100 60 100 Q 20 100 15 80 Z" fill="#1a1a2e" stroke="${color}" stroke-width="2"/>
    <ellipse cx="38" cy="52" rx="16" ry="18" fill="#0d0d1a" stroke="${color}" stroke-width="1.5" opacity=".8"/>
    <ellipse cx="82" cy="52" rx="16" ry="18" fill="#0d0d1a" stroke="${color}" stroke-width="1.5" opacity=".8"/>
    <circle cx="28" cy="48" r="2.5" fill="#dc2626" opacity=".55"/>
    <circle cx="35" cy="48" r="2.5" fill="#dc2626" opacity=".7"/>
    <circle cx="42" cy="48" r="2.5" fill="#dc2626" opacity=".85"/>
    <circle cx="49" cy="48" r="2.5" fill="#dc2626" opacity="1"/>
    <circle cx="72" cy="48" r="2.5" fill="#dc2626" opacity=".55"/>
    <circle cx="79" cy="48" r="2.5" fill="#dc2626" opacity=".7"/>
    <circle cx="86" cy="48" r="2.5" fill="#dc2626" opacity=".85"/>
    <circle cx="93" cy="48" r="2.5" fill="#dc2626" opacity="1"/>
    <circle cx="31" cy="57" r="2.5" fill="#f97316" opacity=".65"/>
    <circle cx="39" cy="57" r="2.5" fill="#f97316" opacity=".8"/>
    <circle cx="47" cy="57" r="2.5" fill="#f97316" opacity=".95"/>
    <circle cx="75" cy="57" r="2.5" fill="#f97316" opacity=".65"/>
    <circle cx="83" cy="57" r="2.5" fill="#f97316" opacity=".8"/>
    <circle cx="91" cy="57" r="2.5" fill="#f97316" opacity=".95"/>
    <path d="M 42 82 Q 60 88 78 82" stroke="${color}" stroke-width="2" fill="none" stroke-linecap="round" opacity=".5"/>
    <text x="60" y="114" text-anchor="middle" fill="${color}" font-size="7" font-family="Inter" opacity=".7">LED THERAPY</text>
  </svg>`;
}

function getProductSVG(category, color) {
  switch (category) {
    case 'relojes':     return watchSVG(color);
    case 'anillos':     return ringSVG(color);
    case 'gafas':       return glassesSVG(color);
    case 'auriculares': return headphonesSVG(color);
    case 'altavoces':   return speakerSVG(color);
    case 'mascaras':    return maskSVG(color);
    default:            return watchSVG(color);
  }
}

function productImgHTML(product, imgClass, svgWrapClass) {
  var svg = '<div class="' + svgWrapClass + '">' + getProductSVG(product.category, '#6366f1') + '</div>';
  if (!product.image) return svg;
  return '<img class="' + imgClass + '" src="' + product.image + '" alt="' + product.name + '" loading="lazy" ' +
    'onerror="this.style.display=\'none\';this.nextElementSibling.style.display=\'flex\'">' + svg;
}

function productCardGalleryHTML(product) {
  var imgs = (product.images && product.images.length > 1) ? product.images : null;
  var mainImg = product.image
    ? '<img class="product-real-img" src="' + product.image + '" alt="' + product.name + '" loading="lazy" onerror="this.style.display=\'none\';this.nextElementSibling.style.display=\'flex\'">'
    : '';
  var svgBack = '<div class="product-svg-back">' + getProductSVG(product.category, '#6366f1') + '</div>';
  if (!imgs) return mainImg + svgBack;
  var L = '<svg width="10" height="10" viewBox="0 0 10 10" fill="none"><path d="M7 1.5L3 5l4 3.5" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg>';
  var R = '<svg width="10" height="10" viewBox="0 0 10 10" fill="none"><path d="M3 1.5L7 5l-4 3.5" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg>';
  var arrows =
    '<button class="gallery-arrow prev" onclick="event.stopPropagation();cardGalleryNav(this,-1)">' + L + '</button>' +
    '<button class="gallery-arrow next" onclick="event.stopPropagation();cardGalleryNav(this,1)">' + R + '</button>';
  var dots = '<div class="gallery-dots">' +
    imgs.map(function(_, i) {
      return '<span class="gallery-dot' + (i === 0 ? ' active' : '') + '" onclick="event.stopPropagation();cardGalleryDot(this,' + i + ')"></span>';
    }).join('') + '</div>';
  return mainImg + svgBack + arrows + dots;
}

// ─── CARD GALLERY NAVIGATION ─────────────────────────────────────────────────
function cardGalleryNav(btn, dir) {
  var card = btn.closest('.product-card');
  var imgEl = card.querySelector('.product-real-img');
  var dots  = card.querySelectorAll('.gallery-dot');
  var pid   = parseInt(card.dataset.productId);
  var prod  = PRODUCTS.find(function(p) { return p.id === pid; });
  if (!prod || !prod.images) return;
  var cur  = parseInt(card.dataset.imgIdx || 0);
  var next = (cur + dir + prod.images.length) % prod.images.length;
  if (imgEl) { imgEl.style.opacity = '0'; imgEl.src = prod.images[next]; imgEl.style.opacity = '1'; }
  card.dataset.imgIdx = next;
  dots.forEach(function(d, i) { d.classList.toggle('active', i === next); });
}

function cardGalleryDot(dot, idx) {
  var card = dot.closest('.product-card');
  var imgEl = card.querySelector('.product-real-img');
  var dots  = card.querySelectorAll('.gallery-dot');
  var pid   = parseInt(card.dataset.productId);
  var prod  = PRODUCTS.find(function(p) { return p.id === pid; });
  if (!prod || !prod.images) return;
  if (imgEl) imgEl.src = prod.images[idx];
  card.dataset.imgIdx = idx;
  dots.forEach(function(d, i) { d.classList.toggle('active', i === idx); });
}

// ─── QUICK VIEW GALLERY ───────────────────────────────────────────────────────
var _qvImgs = [];
var _qvIdx  = 0;

function qvGalleryNav(dir) {
  if (!_qvImgs.length) return;
  _qvIdx = (_qvIdx + dir + _qvImgs.length) % _qvImgs.length;
  _syncQvGallery();
}

function qvThumbClick(idx) {
  _qvIdx = idx;
  _syncQvGallery();
}

function _syncQvGallery() {
  var main = document.getElementById('qv-main-img');
  if (main) {
    main.style.opacity = '0';
    var src = _qvImgs[_qvIdx];
    setTimeout(function() { main.src = src; main.style.opacity = '1'; }, 90);
  }
  document.querySelectorAll('.qv-thumb').forEach(function(t, i) {
    t.classList.toggle('active', i === _qvIdx);
  });
}

// ─── CART STATE ──────────────────────────────────────────────────────────────

var cart = JSON.parse(localStorage.getItem('zt_cart') || '[]').filter(function(item) {
  return PRODUCTS.some(function(p) { return p.id === item.id; });
});
localStorage.setItem('zt_cart', JSON.stringify(cart));
var comparatorItems = [];
var rotateX = 0, rotateY = 0, dragging = false, lastX = 0, lastY = 0;

function saveCart() {
  localStorage.setItem('zt_cart', JSON.stringify(cart));
}

function getCartCount() {
  return cart.reduce(function(s, i) { return s + i.qty; }, 0);
}

function getCartTotal() {
  return cart.reduce(function(s, i) { return s + i.price * i.qty; }, 0);
}

function updateCartBadge() {
  var count = getCartCount();
  var badge = document.getElementById('cart-count');
  if (badge) {
    badge.textContent = count;
    badge.style.transform = count > 0 ? 'scale(1)' : 'scale(0)';
  }
}

function addToCart(productId) {
  var product = PRODUCTS.find(function(p) { return p.id === productId; });
  if (!product) return;
  var existing = cart.find(function(i) { return i.id === productId; });
  if (existing) {
    existing.qty++;
  } else {
    cart.push({ id: productId, name: product.name, brand: product.brand, price: product.price, qty: 1, category: product.category, image: product.image || '' });
  }
  saveCart();
  updateCartBadge();
  renderCartItems();
  openCart();
  showToast(product.name + ' añadido al carrito');
}

function removeFromCart(productId) {
  var itemEl = document.querySelector('#cart-items .cart-item[data-id="' + productId + '"]');
  if (itemEl) {
    itemEl.style.transition = 'opacity 0.2s ease, transform 0.22s ease';
    itemEl.style.opacity = '0';
    itemEl.style.transform = 'translateX(28px)';
    setTimeout(function() {
      cart = cart.filter(function(i) { return i.id !== productId; });
      saveCart();
      updateCartBadge();
      renderCartItems();
    }, 230);
  } else {
    cart = cart.filter(function(i) { return i.id !== productId; });
    saveCart();
    updateCartBadge();
    renderCartItems();
  }
}

function changeQty(productId, delta) {
  var item = cart.find(function(i) { return i.id === productId; });
  if (!item) return;
  item.qty += delta;
  if (item.qty <= 0) {
    removeFromCart(productId);
  } else {
    saveCart();
    updateCartBadge();
    renderCartItems();
    requestAnimationFrame(function() {
      var qtyEl = document.querySelector('#cart-items .cart-item[data-id="' + productId + '"] .cart-qty-num');
      if (qtyEl) {
        qtyEl.style.transition = 'transform 0.12s cubic-bezier(0.34,1.56,0.64,1), color 0.12s ease';
        qtyEl.style.transform = 'scale(1.4)';
        qtyEl.style.color = '#6366f1';
        setTimeout(function() { qtyEl.style.transform = ''; qtyEl.style.color = ''; }, 150);
      }
    });
  }
}

function renderCartItems() {
  var container = document.getElementById('cart-items');
  var totalEl = document.getElementById('cart-total');
  var grandTotalEl = document.getElementById('cart-grand-total');
  var footer = document.getElementById('cart-footer');
  if (!container) return;

  if (cart.length === 0) {
    container.innerHTML = '<div class="cart-empty" id="cart-empty"><svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" opacity="0.3"><path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/><line x1="3" y1="6" x2="21" y2="6"/><path d="M16 10a4 4 0 0 1-8 0"/></svg><p>Tu carrito está vacío</p><span>Agrega productos para comenzar</span></div>';
    if (footer) footer.style.display = 'none';
    return;
  }

  container.innerHTML = cart.map(function(item) {
    var prod = PRODUCTS.find(function(p) { return p.id === item.id; });
    var cartImg = prod && prod.image
      ? '<img class="cart-real-img" src="' + prod.image + '" alt="' + item.name + '" onerror="this.style.display=\'none\'">'
      : getProductSVG(item.category, '#6366f1');
    return '<div class="cart-item" data-id="' + item.id + '">' +
      '<div class="cart-item-svg">' + cartImg + '</div>' +
      '<div class="cart-item-info">' +
        '<span class="cart-item-brand">' + item.brand + '</span>' +
        '<span class="cart-item-name">' + item.name + '</span>' +
        '<div class="cart-item-controls">' +
          '<button onclick="changeQty(' + item.id + ',-1)">−</button>' +
          '<span class="cart-qty-num">' + item.qty + '</span>' +
          '<button onclick="changeQty(' + item.id + ',1)">+</button>' +
        '</div>' +
      '</div>' +
      '<div class="cart-item-right">' +
        '<span class="cart-item-price">€' + (item.price * item.qty).toLocaleString() + '</span>' +
        '<button class="cart-item-remove" onclick="removeFromCart(' + item.id + ')">×</button>' +
      '</div>' +
    '</div>';
  }).join('');

  var total = getCartTotal();
  if (totalEl) totalEl.textContent = '€' + total.toLocaleString();
  if (grandTotalEl) grandTotalEl.textContent = '€' + total.toLocaleString();
  if (footer) footer.style.display = 'block';
}

function openCart() {
  var panel = document.getElementById('side-cart');
  var overlay = document.getElementById('overlay');
  if (panel) panel.classList.add('open');
  if (overlay) overlay.classList.add('active');
}

function closeCart() {
  var panel = document.getElementById('side-cart');
  var overlay = document.getElementById('overlay');
  if (panel) panel.classList.remove('open');
  if (overlay) overlay.classList.remove('active');
}

// ─── TOAST ───────────────────────────────────────────────────────────────────

function showToast(message, type) {
  type = type || 'success';
  var container = document.getElementById('toast-container');
  if (!container) return;
  var toast = document.createElement('div');
  toast.className = 'toast toast-' + type;
  toast.innerHTML = '<span>' + (type === 'success' ? '✓' : 'ℹ') + '</span> ' + message;
  container.appendChild(toast);
  setTimeout(function() { toast.classList.add('show'); }, 10);
  setTimeout(function() {
    toast.classList.remove('show');
    setTimeout(function() { if (toast.parentNode) toast.parentNode.removeChild(toast); }, 300);
  }, 3000);
}

// ─── PRODUCTS RENDER ──────────────────────────────────────────────────────────

// Brand groups for combined footer links
var BRAND_GROUPS = {
  'jabra-sennheiser': ['Jabra', 'Sennheiser'],
  'sonos-marshall':   ['Sonos', 'Marshall']
};

function renderProducts(filterKey, customFilter) {
  filterKey = filterKey || 'all';
  var category = FILTER_MAP[filterKey] || 'todos';
  var grid = document.getElementById('products-grid');
  if (!grid) return;

  var filtered = category === 'todos' ? PRODUCTS : PRODUCTS.filter(function(p) { return p.category === category; });
  if (customFilter) filtered = filtered.filter(customFilter);

  if (!filtered.length) {
    grid.innerHTML =
      '<div style="grid-column:1/-1;text-align:center;padding:96px 20px 80px;">' +
        '<div style="width:76px;height:76px;border-radius:50%;background:linear-gradient(135deg,rgba(99,102,241,.14),rgba(168,85,247,.14));display:flex;align-items:center;justify-content:center;margin:0 auto 24px;">' +
          '<svg width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="#6366f1" stroke-width="1.4"><rect x="2" y="3" width="20" height="14" rx="2"/><path d="M8 21h8M12 17v4"/></svg>' +
        '</div>' +
        '<h3 style="font-size:clamp(18px,3vw,24px);font-weight:700;color:var(--text-1);margin-bottom:12px;letter-spacing:-.02em;">Renovando nuestro catálogo</h3>' +
        '<p style="font-size:15px;color:var(--text-3);max-width:460px;margin:0 auto 36px;line-height:1.75;">Próximamente nueva tecnología innovadora<br>de nuestros mejores proveedores europeos.</p>' +
        '<div style="display:flex;gap:12px;justify-content:center;flex-wrap:wrap;">' +
          '<a href="index.html" style="display:inline-flex;align-items:center;gap:8px;padding:13px 26px;background:linear-gradient(135deg,#6366f1,#a855f7);color:#fff;border-radius:100px;font-size:14px;font-weight:600;text-decoration:none;font-family:inherit;">Volver al inicio</a>' +
          '<button onclick="var b=document.getElementById(\'ai-open-btn\');if(b)b.click();" style="display:inline-flex;align-items:center;gap:8px;padding:13px 26px;background:transparent;border:1px solid rgba(99,102,241,.4);color:#6366f1;border-radius:100px;font-size:14px;font-weight:600;cursor:pointer;font-family:inherit;">Consultar al Asistente IA</button>' +
        '</div>' +
      '</div>';
    return;
  }

  grid.innerHTML = filtered.map(function(product) {
    var badgeHTML = product.badge ? '<span class="product-badge">' + product.badge + '</span>' : '';
    var discount = product.oldPrice ? Math.round((1 - product.price / product.oldPrice) * 100) : 0;
    var oldPriceHTML = product.oldPrice ? '<span class="product-old-price">€' + product.oldPrice + '</span>' : '';
    var discountHTML = discount > 0 ? '<span class="product-discount">-' + discount + '%</span>' : '';
    var shortDesc = product.description.length > 90 ? product.description.substring(0, 90) + '...' : product.description;
    var stars = '★★★★' + (product.id % 3 === 0 ? '★' : '½');
    var reviews = 40 + (product.id * 7) % 180;

    return '<article class="product-card" data-product-id="' + product.id + '">' +
      '<span class="product-brand">' + product.brand + '</span>' +
      badgeHTML +
      '<div class="product-img" onclick="openQuickView(' + product.id + ')">' +
        productCardGalleryHTML(product) +
        '<div class="product-qv-overlay"><span>Vista rápida</span></div>' +
      '</div>' +
      '<div class="product-info">' +
        '<h3 class="product-name">' + product.name + '</h3>' +
        '<div class="product-rating-row"><span class="product-stars">' + stars + '</span><span class="product-reviews">(' + reviews + ')</span></div>' +
        '<p class="product-desc">' + shortDesc + '</p>' +
        '<div class="product-price-row">' +
          '<span class="product-price">€' + product.price.toLocaleString() + '</span>' +
          oldPriceHTML + discountHTML +
        '</div>' +
        '<div class="product-actions">' +
          '<button class="btn-cart" onclick="addToCart(' + product.id + ')">Añadir al carrito</button>' +
          '<button class="btn-compare" onclick="addToComparator(' + product.id + ')" title="Comparar">⇄</button>' +
          '<button class="btn-qv" onclick="openQuickView(' + product.id + ')" title="Vista rápida">⊙</button>' +
        '</div>' +
      '</div>' +
    '</article>';
  }).join('');

  // Animate cards in
  var cards = grid.querySelectorAll('.product-card');
  cards.forEach(function(card, i) {
    card.style.opacity = '0';
    card.style.transform = 'translateY(20px)';
    setTimeout(function() {
      card.style.transition = 'opacity 0.4s ease, transform 0.4s ease';
      card.style.opacity = '1';
      card.style.transform = 'translateY(0)';
    }, Math.min(i, 12) * 55);
  });
}

// ─── CATALOG PAGE RENDERER ───────────────────────────────────────────────────
function renderCatalogGrid(containerId, filterKey, brandKey) {
  var grid = document.getElementById(containerId || 'catalog-grid');
  if (!grid) return 0;
  var category = FILTER_MAP[filterKey] || (filterKey === 'all' ? 'todos' : null);
  var filtered = (!category || category === 'todos') ? PRODUCTS.slice() : PRODUCTS.filter(function(p) { return p.category === category; });
  if (brandKey) {
    var bDecoded = decodeURIComponent(brandKey);
    filtered = filtered.filter(function(p) { return p.brand === bDecoded; });
  }
  if (!filtered.length) {
    grid.innerHTML =
      '<div style="grid-column:1/-1;text-align:center;padding:96px 20px 80px;">' +
        '<div style="width:76px;height:76px;border-radius:50%;background:linear-gradient(135deg,rgba(99,102,241,.14),rgba(168,85,247,.14));display:flex;align-items:center;justify-content:center;margin:0 auto 28px;">' +
          '<svg width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="rgba(99,102,241,.8)" stroke-width="1.5"><rect x="2" y="3" width="20" height="14" rx="2"/><path d="M8 21h8M12 17v4"/></svg>' +
        '</div>' +
        '<h3 style="font-size:1.35rem;font-weight:700;color:var(--text-1);margin:0 0 12px;">Renovando nuestro catálogo</h3>' +
        '<p style="color:var(--text-3);font-size:.97rem;line-height:1.6;max-width:380px;margin:0 auto 32px;">Próximamente nueva tecnología innovadora<br>de nuestros mejores proveedores europeos.</p>' +
        '<div style="display:flex;gap:12px;justify-content:center;flex-wrap:wrap;">' +
          '<a href="index.html" style="padding:11px 26px;border-radius:10px;background:var(--accent);color:#fff;font-weight:600;font-size:.92rem;text-decoration:none;">Volver al inicio</a>' +
          '<button onclick="var b=document.getElementById(\'ai-open-btn\');if(b)b.click();" style="padding:11px 26px;border-radius:10px;border:1.5px solid var(--border);background:transparent;color:var(--text-1);font-weight:600;font-size:.92rem;cursor:pointer;">Consultar al Asistente IA</button>' +
        '</div>' +
      '</div>';
    return 0;
  }
  grid.innerHTML = filtered.map(function(product) {
    var badgeHTML = product.badge ? '<span class="product-badge">' + product.badge + '</span>' : '';
    var discount = product.oldPrice ? Math.round((1 - product.price / product.oldPrice) * 100) : 0;
    var oldPriceHTML = product.oldPrice ? '<span class="product-old-price">€' + product.oldPrice + '</span>' : '';
    var discountHTML = discount > 0 ? '<span class="product-discount">-' + discount + '%</span>' : '';
    var shortDesc = product.description.length > 88 ? product.description.substring(0, 88) + '...' : product.description;
    var stars = '★★★★' + (product.id % 3 === 0 ? '★' : '½');
    var reviews = 40 + (product.id * 7) % 180;
    return '<article class="product-card" data-product-id="' + product.id + '">' +
      '<span class="product-brand">' + product.brand + '</span>' +
      badgeHTML +
      '<div class="product-img" onclick="openQuickView(' + product.id + ')">' +
        productCardGalleryHTML(product) +
        '<div class="product-qv-overlay"><span>Vista rápida</span></div>' +
      '</div>' +
      '<div class="product-info">' +
        '<h3 class="product-name">' + product.name + '</h3>' +
        '<div class="product-rating-row"><span class="product-stars">' + stars + '</span><span class="product-reviews">(' + reviews + ')</span></div>' +
        '<p class="product-desc">' + shortDesc + '</p>' +
        '<div class="product-price-row"><span class="product-price">€' + product.price.toLocaleString() + '</span>' + oldPriceHTML + discountHTML + '</div>' +
        '<div class="product-actions">' +
          '<button class="btn-cart" onclick="addToCart(' + product.id + ')">Añadir al carrito</button>' +
          '<button class="btn-compare" onclick="addToComparator(' + product.id + ')" title="Comparar">⇄</button>' +
          '<button class="btn-qv" onclick="openQuickView(' + product.id + ')" title="Vista rápida">⊙</button>' +
        '</div>' +
      '</div></article>';
  }).join('');
  var cards = grid.querySelectorAll('.product-card');
  cards.forEach(function(card, i) {
    card.style.opacity = '0'; card.style.transform = 'translateY(18px)';
    setTimeout(function() { card.style.transition = 'opacity .38s ease,transform .38s ease'; card.style.opacity = '1'; card.style.transform = 'translateY(0)'; }, Math.min(i, 12) * 50);
  });
  return filtered.length;
}

function setFilter(filterKey) {
  document.querySelectorAll('.filter-btn').forEach(function(btn) {
    btn.classList.toggle('active', btn.dataset.filter === filterKey);
  });
  var grid = document.getElementById('products-grid');
  if (grid) {
    grid.style.opacity = '0';
    grid.style.transform = 'translateY(10px)';
    grid.style.transition = 'opacity .2s ease, transform .2s ease';
  }
  setTimeout(function() {
    renderProducts(filterKey);
    if (grid) {
      grid.style.opacity = '1';
      grid.style.transform = 'translateY(0)';
    }
  }, 200);
}

// Category cards → filter products
function filterAndScroll(filterKey) {
  setFilter(filterKey);
  var section = document.getElementById('productos');
  if (section) section.scrollIntoView({ behavior: 'smooth' });
}

// Brand filter (used by footer links and URL params)
function filterByBrand(brandKey) {
  var brandList = BRAND_GROUPS[brandKey] ? BRAND_GROUPS[brandKey] : [brandKey];
  var customFilter = function(p) { return brandList.indexOf(p.brand) !== -1; };
  document.querySelectorAll('.filter-btn').forEach(function(btn) { btn.classList.remove('active'); });
  var grid = document.getElementById('products-grid');
  if (grid) {
    grid.style.opacity = '0';
    grid.style.transform = 'translateY(10px)';
    grid.style.transition = 'opacity .2s ease, transform .2s ease';
  }
  setTimeout(function() {
    renderProducts('all', customFilter);
    if (grid) { grid.style.opacity = '1'; grid.style.transform = 'translateY(0)'; }
  }, 200);
}

// Footer navigation — same-page: instant scroll + filter; external page: let href handle it
function footerNav(e, type, value) {
  var path = window.location.pathname;
  var onHome = path === '/' || path.endsWith('/index.html') || path.endsWith('/tienda-tech/') || path === '';
  if (!onHome) return; // allow normal href navigation from legal pages
  e.preventDefault();
  var section = document.getElementById('productos');
  if (type === 'filter') {
    renderProducts(value);
    document.querySelectorAll('.filter-btn').forEach(function(btn) {
      btn.classList.toggle('active', btn.dataset.filter === value);
    });
  } else {
    filterByBrand(value);
  }
  if (section) {
    var offset = section.getBoundingClientRect().top + window.pageYOffset - 80;
    window.scrollTo({ top: offset, behavior: 'instant' });
  }
}

// ─── QUICK VIEW ───────────────────────────────────────────────────────────────

function openQuickView(productId) {
  var product = PRODUCTS.find(function(p) { return p.id === productId; });
  if (!product) return;
  var modal = document.getElementById('quick-view-modal');
  var content = document.getElementById('quick-view-content');
  if (!modal || !content) return;

  var specsHTML = Object.keys(product.specs).map(function(key) {
    var val = product.specs[key];
    return '<div class="qv-spec-row"><span class="qv-spec-label">' + key + '</span><span class="qv-spec-value">' + val + '</span></div>';
  }).join('');

  var qvDiscount = product.oldPrice ? Math.round((1 - product.price / product.oldPrice) * 100) : 0;
  var qvStars = '★★★★' + (product.id % 3 === 0 ? '★' : '½');
  var qvReviews = 40 + (product.id * 7) % 180;

  _qvImgs = (product.images && product.images.length) ? product.images : (product.image ? [product.image] : []);
  _qvIdx  = 0;
  var qvImgSrc    = _qvImgs.length ? _qvImgs[0] : '';
  var qvHasGallery = _qvImgs.length > 1;
  var qvLArr = '<svg width="10" height="10" viewBox="0 0 10 10" fill="none"><path d="M7 1.5L3 5l4 3.5" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg>';
  var qvRArr = '<svg width="10" height="10" viewBox="0 0 10 10" fill="none"><path d="M3 1.5L7 5l-4 3.5" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg>';
  var qvMainImgHTML = qvImgSrc
    ? '<img id="qv-main-img" class="qv-main-img" src="' + qvImgSrc + '" alt="' + product.name + '" onerror="this.style.display=\'none\'">'
    : '<div class="qv-svg-back">' + getProductSVG(product.category, '#6366f1') + '</div>';
  var qvNavHTML = qvHasGallery
    ? '<button class="qv-gallery-nav prev" onclick="qvGalleryNav(-1)">' + qvLArr + '</button>' +
      '<button class="qv-gallery-nav next" onclick="qvGalleryNav(1)">' + qvRArr + '</button>'
    : '';
  var qvThumbsHTML = qvHasGallery
    ? '<div class="qv-thumbs">' + _qvImgs.map(function(src, i) {
        return '<img class="qv-thumb' + (i === 0 ? ' active' : '') + '" src="' + src + '" alt="" onclick="qvThumbClick(' + i + ')">';
      }).join('') + '</div>'
    : '';
  var qvGalleryBlock = '<div class="qv-gallery"><div class="qv-main-wrap">' + qvNavHTML + qvMainImgHTML + '</div>' + qvThumbsHTML + '</div>';

  content.innerHTML =
    qvGalleryBlock +
    '<div class="qv-details">' +
      '<span class="qv-brand">' + product.brand + '</span>' +
      '<h2 class="qv-title">' + product.name + '</h2>' +
      '<div class="qv-rating-row"><span style="color:var(--gold);font-size:13px">' + qvStars + '</span><span style="font-size:12px;color:var(--text-3);margin-left:6px">(' + qvReviews + ' reseñas)</span></div>' +
      '<p class="qv-desc">' + (product.description || product.badge || '') + '</p>' +
      '<div class="qv-specs">' + specsHTML + '</div>' +
      '<div class="qv-price-row">' +
        '<span class="qv-price">€' + product.price.toLocaleString() + '</span>' +
        (product.oldPrice ? '<span class="qv-old-price">€' + product.oldPrice + '</span>' : '') +
        (qvDiscount > 0 ? '<span style="background:rgba(52,211,153,.15);color:var(--green);font-size:12px;font-weight:700;padding:3px 10px;border-radius:100px">-' + qvDiscount + '%</span>' : '') +
      '</div>' +
      '<div class="qv-trust-row">' +
        '<span class="qv-trust-item">✓ Garantía oficial 2 años</span>' +
        '<span class="qv-trust-item">✓ Envío gratis 24–48h</span>' +
        '<span class="qv-trust-item">✓ Devolución 30 días</span>' +
      '</div>' +
      '<button class="btn-primary qv-add-btn" onclick="addToCart(' + product.id + ');closeQuickView()">Añadir al carrito — €' + product.price.toLocaleString() + '</button>' +
    '</div>';

  modal.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeQuickView() {
  var modal = document.getElementById('quick-view-modal');
  if (modal) modal.classList.remove('open');
  document.body.style.overflow = '';
}

// ─── COMPARATOR ──────────────────────────────────────────────────────────────

function addToComparator(productId) {
  var product = PRODUCTS.find(function(p) { return p.id === productId; });
  if (!product) return;
  if (comparatorItems.find(function(p) { return p.id === productId; })) {
    showToast('Ya está en el comparador', 'info'); return;
  }
  if (comparatorItems.length >= 3) {
    showToast('Máximo 3 productos en el comparador', 'info'); return;
  }
  comparatorItems.push(product);
  renderComparator();
  var section = document.getElementById('comparador');
  if (section) section.scrollIntoView({ behavior: 'smooth' });
  showToast(product.name + ' añadido al comparador');
}

function removeFromComparator(productId) {
  comparatorItems = comparatorItems.filter(function(p) { return p.id !== productId; });
  renderComparator();
}

function renderComparator() {
  var tableDiv = document.getElementById('compare-table');
  var wrapper = document.getElementById('compare-table-wrapper');
  if (!tableDiv) return;

  if (comparatorItems.length === 0) {
    if (wrapper) wrapper.style.display = 'none';
    return;
  }
  if (wrapper) wrapper.style.display = 'block';

  var allSpecs = [];
  comparatorItems.forEach(function(p) {
    Object.keys(p.specs).forEach(function(k) {
      if (allSpecs.indexOf(k) === -1) allSpecs.push(k);
    });
  });

  var headerCells = '<th style="text-align:left;color:var(--text-2)">Característica</th>' +
    comparatorItems.map(function(p) {
      return '<th>' +
        '<div class="comp-product-head">' +
          '<div class="comp-svg">' + productImgHTML(p, 'comp-real-img', 'comp-svg-back') + '</div>' +
          '<span class="comp-brand">' + p.brand + '</span>' +
          '<span class="comp-name">' + p.name + '</span>' +
          '<span class="comp-price">€' + p.price.toLocaleString() + '</span>' +
          '<button class="comp-remove" onclick="removeFromComparator(' + p.id + ')">Quitar</button>' +
        '</div>' +
      '</th>';
    }).join('');

  var specRows = allSpecs.map(function(spec) {
    return '<tr><td class="comp-spec-label" style="text-align:left;color:var(--text-2)">' + spec + '</td>' +
      comparatorItems.map(function(p) {
        var val = p.specs[spec];
        if (val === undefined) return '<td class="comp-na">—</td>';
        return '<td>' + val + '</td>';
      }).join('') +
    '</tr>';
  }).join('');

  var buyRow = '<tr class="comp-add-row"><td style="text-align:left">Comprar</td>' +
    comparatorItems.map(function(p) {
      return '<td><button class="comp-buy-btn" onclick="addToCart(' + p.id + ')">Añadir €' + p.price.toLocaleString() + '</button></td>';
    }).join('') +
  '</tr>';

  tableDiv.innerHTML = '<div class="comp-table-wrap"><table class="comp-table">' +
    '<thead><tr>' + headerCells + '</tr></thead>' +
    '<tbody>' + specRows + buyRow + '</tbody>' +
  '</table></div>';
}

// ─── CONFIGURATOR ────────────────────────────────────────────────────────────

function initConfigurator() {
  if (!document.getElementById('strap-colors')) return;

  // ── Canvas particle background ──
  var canvas = document.getElementById('cfg-canvas');
  var glowRGB = '99,102,241';
  if (canvas) {
    var ctx = canvas.getContext('2d');
    var particles = [];
    function resizeCfgCanvas() {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    }
    resizeCfgCanvas();
    window.addEventListener('resize', resizeCfgCanvas);
    for (var i = 0; i < 48; i++) {
      particles.push({
        x: Math.random(), y: Math.random(),
        vx: (Math.random() - 0.5) * 0.0025,
        vy: (Math.random() - 0.5) * 0.0025,
        r: Math.random() * 1.8 + 0.4,
        op: Math.random() * 0.45 + 0.1
      });
    }
    function drawCfgCanvas() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      var w = canvas.width, h = canvas.height;
      particles.forEach(function(p) {
        p.x += p.vx; p.y += p.vy;
        if (p.x < 0) p.x = 1; if (p.x > 1) p.x = 0;
        if (p.y < 0) p.y = 1; if (p.y > 1) p.y = 0;
        ctx.beginPath();
        ctx.arc(p.x * w, p.y * h, p.r, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(' + glowRGB + ',' + p.op + ')';
        ctx.fill();
      });
      for (var i = 0; i < particles.length; i++) {
        for (var j = i + 1; j < particles.length; j++) {
          var dx = (particles[i].x - particles[j].x) * w;
          var dy = (particles[i].y - particles[j].y) * h;
          var dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 90) {
            ctx.beginPath();
            ctx.moveTo(particles[i].x * w, particles[i].y * h);
            ctx.lineTo(particles[j].x * w, particles[j].y * h);
            ctx.strokeStyle = 'rgba(' + glowRGB + ',' + (0.12 * (1 - dist / 90)) + ')';
            ctx.lineWidth = 0.6;
            ctx.stroke();
          }
        }
      }
      requestAnimationFrame(drawCfgCanvas);
    }
    drawCfgCanvas();
  }

  // ── Image swap helper ──
  function swapWatchImg(url) {
    var img = document.getElementById('config-watch-svg');
    if (!img || !url) return;
    img.classList.add('cfg-img-fade');
    setTimeout(function() {
      img.src = url;
      img.onload = function() { img.classList.remove('cfg-img-fade'); };
      img.onerror = function() { img.classList.remove('cfg-img-fade'); };
    }, 220);
  }

  function updateConfigBadge() {
    var badge = document.getElementById('cfg-color-badge');
    if (!badge) return;
    var as = document.querySelector('#strap-colors .swatch.active');
    var am = document.querySelector('#case-materials .material-btn.active');
    badge.textContent = (as ? (as.dataset.name || as.title) : 'Graphite') + ' · ' + (am ? am.dataset.finish : 'Ridge Sport Band');
    badge.classList.remove('badge-updated');
    void badge.offsetWidth;
    badge.classList.add('badge-updated');
  }

  // ── Color → filter / aura / canvas-glow maps ──
  var colorFilters = {
    'graphite': 'url(#remove-white) grayscale(100%) brightness(0.28) contrast(1.25)',
    'silver':   'url(#remove-white)',
    'pinkgold': 'url(#remove-white) sepia(70%) saturate(260%) hue-rotate(328deg) brightness(1.08)',
    'cream':    'url(#remove-white) sepia(35%) saturate(140%) brightness(1.12)',
    'sapphire': 'url(#remove-white) hue-rotate(198deg) saturate(190%) brightness(0.82)',
    'green':    'url(#remove-white) hue-rotate(82deg) saturate(230%) brightness(0.84)'
  };
  var colorAuras = {
    'graphite': 'rgba(70,72,80,0.55)',
    'silver':   'rgba(99,102,241,0.65)',
    'pinkgold': 'rgba(210,128,100,0.6)',
    'cream':    'rgba(218,178,118,0.5)',
    'sapphire': 'rgba(28,88,215,0.65)',
    'green':    'rgba(20,155,68,0.65)'
  };
  var colorGlowRGBMap = {
    'graphite': '70,72,80',
    'silver':   '99,102,241',
    'pinkgold': '210,128,100',
    'cream':    '218,178,118',
    'sapphire': '28,88,215',
    'green':    '20,155,68'
  };

  function applyColorFilter(color, instant) {
    var watchImg = document.getElementById('config-watch-svg');
    if (watchImg) {
      if (instant) {
        watchImg.style.filter = colorFilters[color] || 'none';
      } else {
        watchImg.classList.add('cfg-img-fade');
        setTimeout(function() {
          watchImg.style.filter = colorFilters[color] || 'none';
          watchImg.classList.remove('cfg-img-fade');
        }, 230);
      }
    }
    var aura = document.getElementById('cfg-watch-aura');
    if (aura) {
      var c = colorAuras[color] || colorAuras['silver'];
      aura.style.background = 'radial-gradient(circle,' + c + ' 0%,transparent 65%)';
    }
    glowRGB = colorGlowRGBMap[color] || '99,102,241';
  }

  // ── Color swatches ──
  document.querySelectorAll('#strap-colors .swatch').forEach(function(swatch) {
    swatch.addEventListener('click', function() {
      document.querySelectorAll('#strap-colors .swatch').forEach(function(s) { s.classList.remove('active'); s.classList.remove('pop'); });
      swatch.classList.add('active');
      void swatch.offsetWidth;
      swatch.classList.add('pop');
      var nameEl = document.getElementById('strap-name');
      if (nameEl) {
        nameEl.textContent = swatch.dataset.name || swatch.title;
        nameEl.classList.remove('name-updated');
        void nameEl.offsetWidth;
        nameEl.classList.add('name-updated');
      }
      applyColorFilter(swatch.dataset.color);
      updateConfigBadge();
    });
  });

  // ── Material buttons (price/style only — image stays driven by selected color) ──
  document.querySelectorAll('#case-materials .material-btn').forEach(function(btn) {
    btn.addEventListener('click', function() {
      document.querySelectorAll('#case-materials .material-btn').forEach(function(b) { b.classList.remove('active'); });
      btn.classList.add('active');
      var price = parseInt(btn.dataset.price);
      var priceEl = document.getElementById('config-price');
      var saveEl = document.getElementById('config-save');
      if (priceEl) {
        priceEl.textContent = '€' + price;
        priceEl.classList.remove('price-animate');
        void priceEl.offsetWidth;
        priceEl.classList.add('price-animate');
      }
      if (saveEl) saveEl.textContent = 'Ahorras €' + (299 - price);
      updateConfigBadge();
    });
  });

  // ── Init: apply default color state (Graphite) without fade on page load ──
  var activeSwatch = document.querySelector('#strap-colors .swatch.active');
  if (activeSwatch) applyColorFilter(activeSwatch.dataset.color, true);

  // ── Add to cart ──
  var addBtn = document.getElementById('add-config-to-cart');
  if (addBtn) {
    addBtn.addEventListener('click', function() {
      var orig = addBtn.innerHTML;
      addBtn.innerHTML = '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg> ¡Añadido al Carrito!';
      addBtn.disabled = true;
      setTimeout(function() { addBtn.innerHTML = orig; addBtn.disabled = false; }, 2200);
      addToCart(18);
    });
  }
}

// ─── PARTICLES ───────────────────────────────────────────────────────────────

function initParticles() {
  var canvas = document.getElementById('hero-canvas');
  if (!canvas) return;
  var ctx = canvas.getContext('2d');

  function resize() { canvas.width = canvas.offsetWidth; canvas.height = canvas.offsetHeight; }
  resize();
  window.addEventListener('resize', resize);

  var particles = [];
  for (var i = 0; i < 55; i++) {
    particles.push({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      vx: (Math.random() - 0.5) * 0.35,
      vy: (Math.random() - 0.5) * 0.35,
      r: Math.random() * 1.8 + 0.4,
      opacity: Math.random() * 0.4 + 0.1
    });
  }

  function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    particles.forEach(function(p) {
      p.x += p.vx; p.y += p.vy;
      if (p.x < 0) p.x = canvas.width;
      if (p.x > canvas.width) p.x = 0;
      if (p.y < 0) p.y = canvas.height;
      if (p.y > canvas.height) p.y = 0;
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
      ctx.fillStyle = 'rgba(99,102,241,' + p.opacity + ')';
      ctx.fill();
    });
    for (var i = 0; i < particles.length; i++) {
      for (var j = i + 1; j < particles.length; j++) {
        var dx = particles[i].x - particles[j].x;
        var dy = particles[i].y - particles[j].y;
        var dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 100) {
          ctx.beginPath();
          ctx.moveTo(particles[i].x, particles[i].y);
          ctx.lineTo(particles[j].x, particles[j].y);
          ctx.strokeStyle = 'rgba(99,102,241,' + (0.12 * (1 - dist / 100)) + ')';
          ctx.lineWidth = 0.5;
          ctx.stroke();
        }
      }
    }
    requestAnimationFrame(draw);
  }
  draw();
}

// ─── SCROLL REVEAL ───────────────────────────────────────────────────────────

function initScrollReveal() {
  var observer = new IntersectionObserver(function(entries) {
    entries.forEach(function(entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add('revealed');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

  document.querySelectorAll('.cat6-card, .feature-item, .testimonial-card, .section-header').forEach(function(el) {
    el.classList.add('reveal');
    observer.observe(el);
  });
}

// ─── MEGA-MENU NAVIGATION ────────────────────────────────────────────────────

function initMegaMenu() {
  // Force navigation on mega-menu links (CSS hover may lose focus before click registers)
  document.querySelectorAll('.mega-b, .mega-all-link, .mega-see, .nav-link').forEach(function(a) {
    a.addEventListener('click', function(e) {
      var href = a.getAttribute('href');
      if (href && href.charAt(0) !== '#') {
        e.preventDefault();
        window.location.href = href;
      }
    });
  });

  // Keep dropdown open during mouse transition (hover delay)
  document.querySelectorAll('.nav-item').forEach(function(item) {
    var drop = item.querySelector('.mega-drop');
    if (!drop) return;
    var t;
    item.addEventListener('mouseleave', function() {
      t = setTimeout(function() {
        drop.style.opacity = '';
        drop.style.visibility = '';
        drop.style.pointerEvents = '';
        drop.style.transform = '';
      }, 180);
    });
    item.addEventListener('mouseenter', function() { clearTimeout(t); });
    drop.addEventListener('mouseenter', function() { clearTimeout(t); });
    drop.addEventListener('mouseleave', function() {
      t = setTimeout(function() {
        drop.style.opacity = '';
        drop.style.visibility = '';
        drop.style.pointerEvents = '';
        drop.style.transform = '';
      }, 180);
    });
  });
}

// ─── NAVBAR ──────────────────────────────────────────────────────────────────

function initNavbar() {
  var navbar = document.getElementById('navbar');
  var navTints = [
    { bg: 'rgba(50,25,110,.58)',  border: 'rgba(99,102,241,.25)' },
    { bg: 'rgba(80,42,4,.60)',    border: 'rgba(251,191,36,.22)' },
    { bg: 'rgba(4,56,66,.60)',    border: 'rgba(45,212,191,.22)' }
  ];
  window.addEventListener('scroll', function() {
    if (!navbar) return;
    if (window.scrollY > 70) {
      navbar.classList.add('scrolled');
      navbar.style.background = '';
      navbar.style.borderBottomColor = '';
    } else {
      navbar.classList.remove('scrolled');
      var activeSlide = document.querySelector('.slide.active');
      var idx = activeSlide ? parseInt(activeSlide.dataset.index) || 0 : 0;
      if (idx >= 0 && idx < navTints.length) {
        navbar.style.background = navTints[idx].bg;
        navbar.style.borderBottomColor = navTints[idx].border;
      }
    }
  });
}

// ─── NEWSLETTER ──────────────────────────────────────────────────────────────

function initNewsletter() {
  var form = document.getElementById('newsletter-form');
  if (!form) return;
  form.addEventListener('submit', function(e) {
    e.preventDefault();
    var emailInput = form.querySelector('input[type="email"]');
    if (emailInput && emailInput.value) {
      showToast('¡Gracias! Recibirás un 10% de descuento en tu email');
      form.reset();
    }
  });
}

// ─── SMOOTH SCROLL ───────────────────────────────────────────────────────────

function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(function(a) {
    a.addEventListener('click', function(e) {
      var target = document.querySelector(a.getAttribute('href'));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });
}

// ─── CLEAR COMPARATOR BUTTON ──────────────────────────────────────────────────

function initClearComparator() {
  var btn = document.getElementById('clear-compare');
  if (!btn) return;
  btn.addEventListener('click', function() {
    comparatorItems = [];
    renderComparator();
  });
}

// ─── SEARCH ──────────────────────────────────────────────────────────────────

var CATEGORY_LABELS = { watches:'Relojes', rings:'Anillos', headphones:'Auriculares', glasses:'Gafas', speakers:'Altavoces', masks:'Máscaras LED' };

function initSearch() {
  var overlay  = document.getElementById('search-overlay');
  var searchBtn = document.getElementById('search-btn');
  var closeBtn = document.getElementById('search-close');
  var input    = document.getElementById('search-input');
  var results  = document.getElementById('search-results');
  if (!overlay || !input) return;

  function openSearch() {
    overlay.classList.add('open');
    document.body.style.overflow = 'hidden';
    setTimeout(function() { input.focus(); }, 80);
    renderSearchResults('');
  }

  function closeSearch() {
    overlay.classList.remove('open');
    document.body.style.overflow = '';
    input.value = '';
  }

  if (searchBtn) searchBtn.addEventListener('click', openSearch);
  if (closeBtn)  closeBtn.addEventListener('click', closeSearch);
  overlay.addEventListener('click', function(e) { if (e.target === overlay) closeSearch(); });
  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape' && overlay.classList.contains('open')) closeSearch();
    if ((e.ctrlKey || e.metaKey) && e.key === 'k') { e.preventDefault(); openSearch(); }
  });

  input.addEventListener('input', function() { renderSearchResults(input.value.trim()); });

  function renderSearchResults(query) {
    var q = query.toLowerCase();
    var filtered = PRODUCTS.filter(function(p) {
      return !q ||
        p.name.toLowerCase().includes(q) ||
        p.brand.toLowerCase().includes(q) ||
        (CATEGORY_LABELS[p.category] || '').toLowerCase().includes(q) ||
        (p.description || '').toLowerCase().includes(q);
    }).slice(0, 8);

    if (!filtered.length) {
      results.innerHTML = '<div class="search-empty"><svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/></svg><p>No encontramos resultados para <strong>"' + query + '"</strong></p><p style="margin-top:6px;font-size:12px">Prueba con otro término o explora las categorías.</p></div>';
      return;
    }

    results.innerHTML = filtered.map(function(p) {
      var imgHtml = p.image
        ? '<img class="sri-img" src="' + p.image + '" alt="' + p.name + '" onerror="this.src=\'\';">'
        : '<div class="sri-img" style="display:flex;align-items:center;justify-content:center;font-size:22px;">' + (p.category==='watches'?'⌚':p.category==='rings'?'💍':p.category==='headphones'?'🎧':p.category==='glasses'?'👓':p.category==='speakers'?'🔊':'✨') + '</div>';
      return '<div class="search-result-item" onclick="goToProduct(\'' + p.id + '\')">' +
        imgHtml +
        '<div class="sri-info"><div class="sri-name">' + p.name + '</div><div class="sri-meta">' + (CATEGORY_LABELS[p.category] || '') + ' · ' + p.brand + '</div></div>' +
        '<div class="sri-price">€' + p.price + '</div>' +
        '</div>';
    }).join('');
  }

  window.searchByCategory = function(cat) {
    closeSearch();
    filterAndScroll(cat);
  };

  window.goToProduct = function(id) {
    closeSearch();
    var cat = '';
    PRODUCTS.forEach(function(p) { if (p.id === id) cat = p.category; });
    if (cat) setFilter(cat);
    setTimeout(function() {
      var el = document.getElementById('prod-' + id);
      if (el) { el.scrollIntoView({ behavior: 'smooth', block: 'center' }); el.classList.add('highlight-pulse'); setTimeout(function() { el.classList.remove('highlight-pulse'); }, 1800); }
      else document.getElementById('productos').scrollIntoView({ behavior: 'smooth' });
    }, 200);
  };
}

// ─── USER SESSION ────────────────────────────────────────────────────────────

function initUserSession() {
  var loginBtn = document.getElementById('login-btn');
  if (!loginBtn) return;

  var raw = localStorage.getItem('zt_user');
  if (raw) {
    try {
      var user = JSON.parse(raw);
      var firstName = (user.name || 'Usuario').split(' ')[0];
      loginBtn.innerHTML =
        '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>' +
        '<span>' + firstName + '</span>' +
        '<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="opacity:.5"><polyline points="6 9 12 15 18 9"/></svg>';
      loginBtn.style.background = 'rgba(99,102,241,0.2)';
      loginBtn.style.borderColor = 'rgba(99,102,241,0.5)';
      loginBtn.title = 'Sesión iniciada como ' + user.name + ' — clic para cerrar sesión';
      loginBtn.addEventListener('click', function(e) {
        e.stopPropagation();
        if (confirm('¿Cerrar sesión de ' + user.name + '?')) {
          localStorage.removeItem('zt_user');
          location.reload();
        }
      });
    } catch(ex) { localStorage.removeItem('zt_user'); }
  }

  // Welcome toast after register
  var params = new URLSearchParams(window.location.search);
  if (params.get('welcome') === '1') {
    var userName = '';
    try { userName = JSON.parse(localStorage.getItem('zt_user') || '{}').name || ''; } catch(ex) {}
    setTimeout(function() {
      showToast('¡Bienvenido/a' + (userName ? ', ' + userName.split(' ')[0] : '') + '! Código 10%: ZONE10 · Sin compra mínima');
    }, 800);
    window.history.replaceState({}, '', window.location.pathname);
  }
}

// ─── HERO SLIDER ─────────────────────────────────────────────────────────────

function initSlider() {
  var slides   = document.querySelectorAll('.slide');
  var dots     = document.querySelectorAll('.slider-dot');
  var progress = document.getElementById('slider-progress');
  var prevBtn  = document.getElementById('slider-prev');
  var nextBtn  = document.getElementById('slider-next');
  if (!slides.length) return;

  var current     = 0;
  var total       = slides.length;
  var DURATION    = 7000;
  var ANIM_MS     = 750;
  var timer       = null;
  var isAnimating = false;

  var navTints = [
    { bg:'rgba(50,25,110,.58)',  border:'rgba(99,102,241,.25)' },
    { bg:'rgba(80,42,4,.60)',    border:'rgba(251,191,36,.22)' },
    { bg:'rgba(4,56,66,.60)',    border:'rgba(45,212,191,.22)' }
  ];

  function updateNavTint(idx) {
    var navbar = document.getElementById('navbar');
    if (!navbar || navbar.classList.contains('scrolled')) return;
    navbar.style.setProperty('--nav-bg',     navTints[idx].bg);
    navbar.style.setProperty('--nav-border', navTints[idx].border);
    navbar.style.background        = navTints[idx].bg;
    navbar.style.borderBottomColor = navTints[idx].border;
  }

  // Load deferred YouTube iframes (data-src) on demand
  function activateIframe(slide) {
    var iframe = slide.querySelector('iframe[data-src]');
    if (iframe && !iframe.getAttribute('src')) { iframe.src = iframe.dataset.src; }
  }

  // Place every slide at its offset position without animation
  function initPositions() {
    slides.forEach(function(slide, i) {
      slide.style.transition    = 'none';
      slide.style.transform     = 'translateX(' + ((i - current) * 100) + '%)';
      slide.style.opacity       = (i === current) ? '1' : '0';
      slide.style.pointerEvents = (i === current) ? 'all' : 'none';
      if (i === current) slide.classList.add('active');
      else               slide.classList.remove('active');
    });
  }

  function goTo(idx, dir) {
    if (isAnimating) return;
    var next = ((idx % total) + total) % total;
    if (next === current) return;
    isAnimating = true;

    if (dir === undefined) {
      dir = next > current ? 1 : -1;
      if (current === total - 1 && next === 0)         dir =  1;
      if (current === 0         && next === total - 1) dir = -1;
    }

    var leaving  = current;
    var entering = next;

    activateIframe(slides[entering]);

    // Snap entering slide to its off-screen start (no transition)
    slides[entering].style.transition    = 'none';
    slides[entering].style.transform     = 'translateX(' + (dir * 100) + '%)';
    slides[entering].style.opacity       = '0';
    slides[entering].style.pointerEvents = 'none';

    requestAnimationFrame(function() {
      requestAnimationFrame(function() {
        var t = 'transform ' + ANIM_MS + 'ms cubic-bezier(0.4,0,0.2,1), opacity ' + ANIM_MS + 'ms ease';

        slides[entering].style.transition = t;
        slides[entering].style.transform  = 'translateX(0)';
        slides[entering].style.opacity    = '1';

        slides[leaving].style.transition  = t;
        slides[leaving].style.transform   = 'translateX(' + (-dir * 100) + '%)';
        slides[leaving].style.opacity     = '0';

        if (dots[leaving])  dots[leaving].classList.remove('active');
        if (dots[entering]) dots[entering].classList.add('active');
        updateNavTint(entering);

        setTimeout(function() {
          slides[leaving].classList.remove('active');
          slides[leaving].style.pointerEvents  = 'none';
          slides[entering].classList.add('active');
          slides[entering].style.pointerEvents = 'all';
          current     = entering;
          isAnimating = false;
          startProgress();
        }, ANIM_MS);
      });
    });
  }

  function startProgress() {
    clearTimeout(timer);
    if (progress) { progress.style.transition = 'none'; progress.style.width = '0%'; }
    requestAnimationFrame(function() {
      requestAnimationFrame(function() {
        if (progress) {
          progress.style.transition = 'width ' + DURATION + 'ms linear';
          progress.style.width      = '100%';
        }
      });
    });
    timer = setTimeout(function() { goTo(current + 1, 1); }, DURATION);
  }

  // Buttons — stopPropagation prevents slide-content click interference
  if (prevBtn) prevBtn.addEventListener('click', function(e) { e.stopPropagation(); goTo(current - 1, -1); });
  if (nextBtn) nextBtn.addEventListener('click', function(e) { e.stopPropagation(); goTo(current + 1,  1); });

  // Dots
  dots.forEach(function(dot) {
    dot.addEventListener('click', function(e) {
      e.stopPropagation();
      goTo(parseInt(dot.dataset.index, 10));
    });
  });

  // Keyboard arrow navigation
  document.addEventListener('keydown', function(e) {
    if (!document.getElementById('hero')) return;
    if (e.key === 'ArrowLeft')  { e.preventDefault(); goTo(current - 1, -1); }
    if (e.key === 'ArrowRight') { e.preventDefault(); goTo(current + 1,  1); }
  });

  // Pause auto-advance on hover
  var sliderEl = document.getElementById('hero');
  if (sliderEl) {
    sliderEl.addEventListener('mouseenter', function() {
      clearTimeout(timer);
      if (progress) progress.style.transition = 'none';
    });
    sliderEl.addEventListener('mouseleave', startProgress);
  }

  // Touch swipe (horizontal-primary, won't conflict with vertical scroll)
  var touchX0 = 0, touchY0 = 0;
  if (sliderEl) {
    sliderEl.addEventListener('touchstart', function(e) {
      touchX0 = e.touches[0].clientX;
      touchY0 = e.touches[0].clientY;
    }, { passive: true });
    sliderEl.addEventListener('touchend', function(e) {
      var dx = touchX0 - e.changedTouches[0].clientX;
      var dy = touchY0 - e.changedTouches[0].clientY;
      if (Math.abs(dx) > Math.abs(dy) && Math.abs(dx) > 40) {
        dx > 0 ? goTo(current + 1, 1) : goTo(current - 1, -1);
      }
    }, { passive: true });
  }

  initPositions();
  updateNavTint(0);
  startProgress();
}

// ─── AUTH MODAL ───────────────────────────────────────────────────────────────

function initAuthModal() {
  var backdrop = document.getElementById('auth-backdrop');
  var loginBtn = document.getElementById('login-btn');
  var closeBtn = document.getElementById('auth-close');
  var tabs = document.querySelectorAll('.auth-tab');
  var formLogin = document.getElementById('form-login');
  var formRegister = document.getElementById('form-register');
  if (!backdrop) return;

  function openAuth() {
    backdrop.classList.add('open');
    document.body.style.overflow = 'hidden';
  }
  function closeAuth() {
    backdrop.classList.remove('open');
    document.body.style.overflow = '';
  }

  if (loginBtn) loginBtn.addEventListener('click', openAuth);
  if (closeBtn) closeBtn.addEventListener('click', closeAuth);
  backdrop.addEventListener('click', function(e) { if (e.target === backdrop) closeAuth(); });

  tabs.forEach(function(tab) {
    tab.addEventListener('click', function() {
      tabs.forEach(function(t) { t.classList.remove('active'); });
      tab.classList.add('active');
      var which = tab.dataset.tab;
      if (formLogin && formRegister) {
        formLogin.classList.toggle('hidden', which !== 'login');
        formRegister.classList.toggle('hidden', which !== 'register');
      }
    });
  });

  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape' && backdrop.classList.contains('open')) closeAuth();
  });

  // Block submit (frontend only)
  backdrop.querySelectorAll('.auth-submit').forEach(function(btn) {
    btn.addEventListener('click', function() {
      var form = btn.closest('.auth-form');
      var inputs = form ? form.querySelectorAll('.auth-input') : [];
      var valid = true;
      inputs.forEach(function(inp) { if (!inp.value.trim()) { inp.style.borderColor = 'var(--red)'; valid = false; } else { inp.style.borderColor = ''; } });
      if (valid) {
        showToast('¡Bienvenido! Tu cuenta ha sido creada. Código 10%: ZONE10');
        closeAuth();
      }
    });
  });
}

// ─── REVIEWS ──────────────────────────────────────────────────────────────────

function initReviews() {
  var grid = document.getElementById('cr-grid');
  if (!grid) return;

  var emptyEl      = document.getElementById('cr-empty');
  var totalEl      = document.getElementById('cr-total');
  var avgEl        = document.getElementById('cr-avg');
  var headerEl     = document.getElementById('cr-list-header');
  var ratingIn     = document.getElementById('cr-rating');
  var hintEl       = document.getElementById('cr-stars-hint');
  var charEl       = document.getElementById('cr-chars');
  var textarea     = document.getElementById('cr-text');
  var successEl    = document.getElementById('cr-success');
  var errorEl      = document.getElementById('cr-error');
  var submitBtn    = document.getElementById('cr-submit');
  var productSel   = document.getElementById('cr-product');
  var productBrand = document.getElementById('cr-product-brand');
  var selectedR    = 0;
  var hints = ['','Muy mala','Mala','Regular','Buena','¡Excelente!'];

  // ── Poblar el select con todos los productos del catálogo agrupados por categoría ──
  if (productSel && typeof PRODUCTS !== 'undefined') {
    var catLabels = { relojes:'Relojes', anillos:'Anillos', auriculares:'Auriculares', gafas:'Gafas', altavoces:'Altavoces', mascaras:'Máscaras LED' };
    var grouped = {};
    PRODUCTS.forEach(function(p) {
      if (!grouped[p.category]) grouped[p.category] = [];
      grouped[p.category].push(p);
    });
    Object.keys(catLabels).forEach(function(cat) {
      if (!grouped[cat] || grouped[cat].length === 0) return;
      var og = document.createElement('optgroup');
      og.label = catLabels[cat] || cat;
      grouped[cat].forEach(function(p) {
        var opt = document.createElement('option');
        opt.value = p.name;
        opt.dataset.brand = p.brand;
        opt.textContent = p.name + ' — ' + p.brand;
        og.appendChild(opt);
      });
      productSel.appendChild(og);
    });
    productSel.addEventListener('change', function() {
      var sel = productSel.options[productSel.selectedIndex];
      if (productBrand) productBrand.value = sel.dataset.brand || '';
    });
  }

  function starsStr(n) {
    var s = '';
    for (var i = 1; i <= 5; i++) s += i <= n ? '★' : '☆';
    return s;
  }
  function esc(s) {
    return String(s).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;');
  }

  // ── Tarjeta de reseña — el producto es enlace si tiene marca guardada ──
  function makeCard(r, delay) {
    var c = document.createElement('div');
    c.className = 'cr-card';
    c.style.animationDelay = delay + 's';
    var productHtml = '';
    if (r.product) {
      if (r.productBrand) {
        productHtml = '<a href="catalogo.html?brand=' + encodeURIComponent(r.productBrand) + '" class="cr-card-product-link">' + esc(r.product) + ' →</a>';
      } else {
        productHtml = '<span class="cr-card-product">' + esc(r.product) + '</span>';
      }
    }
    c.innerHTML =
      '<div class="cr-card-top">' +
        '<span class="cr-card-stars">' + starsStr(r.rating) + '</span>' +
        '<span class="cr-card-date">' + esc(r.date || '') + '</span>' +
      '</div>' +
      '<p class="cr-card-text">&ldquo;' + esc(r.text) + '&rdquo;</p>' +
      '<div class="cr-card-footer">' +
        '<span class="cr-card-name">' + esc(r.name) + '</span>' +
        productHtml +
      '</div>';
    return c;
  }

  function renderList(reviews) {
    grid.querySelectorAll('.cr-card').forEach(function(c) { c.remove(); });
    if (!reviews || reviews.length === 0) {
      if (emptyEl) emptyEl.style.display = 'flex';
      if (headerEl) headerEl.style.display = 'none';
      return;
    }
    if (emptyEl) emptyEl.style.display = 'none';
    if (headerEl) headerEl.style.display = 'flex';
    if (totalEl) totalEl.textContent = reviews.length + (reviews.length === 1 ? ' reseña' : ' reseñas');
    if (avgEl) {
      var sum = reviews.reduce(function(a, r) { return a + r.rating; }, 0);
      var av = (sum / reviews.length).toFixed(1);
      avgEl.innerHTML = '<span class="cr-avg-num">' + av + '</span><span class="cr-avg-stars">' + starsStr(Math.round(sum / reviews.length)) + '</span>';
    }
    reviews.forEach(function(r, i) { grid.appendChild(makeCard(r, i * 0.05)); });
  }

  fetch('/data/reviews.json?t=' + Date.now())
    .then(function(r) { return r.ok ? r.json() : []; })
    .then(function(data) { renderList(Array.isArray(data) ? data : []); })
    .catch(function() {});

  // ── Star picker ──
  var picker = document.getElementById('cr-star-picker');
  if (picker) {
    var stars = picker.querySelectorAll('.cr-star');
    stars.forEach(function(btn) {
      btn.addEventListener('mouseenter', function() {
        var v = parseInt(btn.dataset.v);
        stars.forEach(function(s) { s.classList.toggle('active', parseInt(s.dataset.v) <= v); });
      });
      btn.addEventListener('mouseleave', function() {
        stars.forEach(function(s) { s.classList.toggle('active', parseInt(s.dataset.v) <= selectedR); });
      });
      btn.addEventListener('click', function() {
        selectedR = parseInt(btn.dataset.v);
        if (ratingIn) ratingIn.value = selectedR;
        if (hintEl) hintEl.textContent = hints[selectedR];
        stars.forEach(function(s) { s.classList.toggle('active', parseInt(s.dataset.v) <= selectedR); });
      });
    });
  }

  // ── Contador de caracteres ──
  if (textarea && charEl) {
    textarea.addEventListener('input', function() { charEl.textContent = textarea.value.length; });
  }

  // ── Envío del formulario ──
  var form = document.getElementById('cr-form');
  if (!form) return;
  form.addEventListener('submit', function(e) {
    e.preventDefault();
    var name    = (document.getElementById('cr-name') || {}).value || '';
    var product = productSel ? productSel.value : '';
    var brand   = productBrand ? productBrand.value : '';
    var rating  = ratingIn ? ratingIn.value : '';
    var text    = textarea ? textarea.value : '';

    if (successEl) { successEl.classList.remove('visible'); successEl.style.display = 'none'; }
    if (errorEl)   { errorEl.classList.remove('visible');   errorEl.style.display = 'none'; }

    if (!name.trim())                            { showRevErr('Por favor escribe tu nombre.');                   return; }
    if (!rating)                                 { showRevErr('Selecciona una puntuación con las estrellas.');   return; }
    if (!text.trim() || text.trim().length < 15) { showRevErr('La reseña debe tener al menos 15 caracteres.');  return; }

    if (submitBtn) { submitBtn.disabled = true; submitBtn.style.opacity = '.6'; }

    fetch('/api/review', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name: name, product: product, productBrand: brand, rating: parseInt(rating), text: text })
    })
    .then(function(r) { return r.json(); })
    .then(function(data) {
      if (data.success) {
        form.reset();
        selectedR = 0;
        if (ratingIn) ratingIn.value = '';
        if (charEl) charEl.textContent = '0';
        if (hintEl) hintEl.textContent = 'Toca para valorar';
        if (productBrand) productBrand.value = '';
        if (picker) picker.querySelectorAll('.cr-star').forEach(function(s) { s.classList.remove('active'); });
        if (successEl) { successEl.style.display = 'flex'; successEl.classList.add('visible'); }
        if (emptyEl) emptyEl.style.display = 'none';
        if (headerEl) headerEl.style.display = 'flex';
        grid.insertBefore(makeCard(data.review, 0), grid.firstChild);
        var prev = parseInt((totalEl ? totalEl.textContent : '0').split(' ')[0]) || 0;
        var nc = prev + 1;
        if (totalEl) totalEl.textContent = nc + (nc === 1 ? ' reseña' : ' reseñas');
      } else {
        showRevErr(data.error || 'Error al publicar. Inténtalo de nuevo.');
      }
    })
    .catch(function() { showRevErr('Error de conexión. Comprueba tu internet.'); })
    .finally(function() {
      if (submitBtn) { submitBtn.disabled = false; submitBtn.style.opacity = ''; }
    });
  });

  function showRevErr(msg) {
    if (errorEl) { errorEl.textContent = msg; errorEl.style.display = 'flex'; errorEl.classList.add('visible'); }
  }
}

// ─── AI ASSISTANT ─────────────────────────────────────────────────────────────

function initAIAssistant() {
  var openBtn    = document.getElementById('ai-open-btn');
  var backdrop   = document.getElementById('ai-backdrop');
  var closeBtn   = document.getElementById('ai-close-btn');
  var messagesEl = document.getElementById('ai-messages');
  var sugWrap    = document.getElementById('ai-suggestions-wrap');
  var form       = document.getElementById('ai-form');
  var input      = document.getElementById('ai-input');
  var sendBtn    = document.getElementById('ai-send-btn');
  if (!openBtn || !backdrop || !messagesEl) return;

  var opened        = false;
  var sugsDismissed = false;

  function escHtml(s) {
    return String(s).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;');
  }

  function scrollBottom() {
    messagesEl.scrollTop = messagesEl.scrollHeight;
  }

  function appendMsg(html, who) {
    var div = document.createElement('div');
    div.className = 'ai-msg ' + who;
    div.innerHTML = '<div class="ai-msg-bubble">' + html + '</div>';
    messagesEl.appendChild(div);
    scrollBottom();
    return div;
  }

  function showTyping() {
    var div = document.createElement('div');
    div.className = 'ai-msg bot';
    div.id = 'ai-typing-indicator';
    div.innerHTML = '<div class="ai-msg-bubble ai-typing"><span></span><span></span><span></span></div>';
    messagesEl.appendChild(div);
    scrollBottom();
  }

  function removeTyping() {
    var t = document.getElementById('ai-typing-indicator');
    if (t && t.parentNode) t.parentNode.removeChild(t);
  }

  function getResponse(q) {
    var ql = q.toLowerCase();

    if (/xiaomi|redmi watch|mi band|smart band/.test(ql)) {
      return 'Gama <strong>Xiaomi</strong> (3 relojes de Depau): <strong>Smart Band 9</strong> (€39,95 · AMOLED 1,62" · 14 días · 5 ATM) · <strong>Redmi Watch 5 Active Negro</strong> (€49,95 · AMOLED 2,05" · GPS · 20 días) · <strong>Redmi Watch 5 Active Plata</strong> (€49,95). <a class="ai-msg-link" href="catalogo.html?filter=watches&brand=Xiaomi">Ver Xiaomi →</a>';
    }

    if (/samsung|galaxy watch/.test(ql)) {
      return '<strong>Samsung Galaxy Watch 7 44mm Verde</strong> (€279,99): Super AMOLED 1,5" circular, procesador 3nm, GPS multibanda, ECG, SpO₂, temperatura y Galaxy AI. Hasta 40h batería. <a class="ai-msg-link" href="catalogo.html?filter=watches&brand=Samsung">Ver Samsung →</a>';
    }

    if (/apple|iphone|apple watch|watch se|series 11/.test(ql)) {
      return 'Gama <strong>Apple Watch</strong> (5 modelos de Depau): <strong>SE3 GPS 40mm</strong> (€249) · <strong>SE3 GPS 44mm</strong> (€279) · <strong>SE3 Cellular 40mm</strong> (€299) · <strong>SE3 Cellular 44mm</strong> (€329) · <strong>Series 11 GPS 42mm</strong> (€399 · ECG · SpO₂ · temperatura · chip S11). Todos WatchOS 11, resistencia 50m. <a class="ai-msg-link" href="catalogo.html?filter=watches&brand=Apple">Ver Apple Watch →</a>';
    }

    if (/sony.*auricular|auricular.*sony|wh.ch|wf.c[57]|ult wear|wh-ch|wf-c/.test(ql)) {
      return 'Gama <strong>Sony</strong> (5 auriculares de Depau): <strong>WH-CH520</strong> (€39,99 · 50h · BT5.2) · <strong>WF-C510</strong> (€49,99 · True Wireless · 20h) · <strong>WH-CH720N</strong> (€89,99 · ANC · 35h · 192g) · <strong>WF-C710N</strong> (€99,99 · ANC TWS · 30h) · <strong>ULT WEAR</strong> (€129,99 · ANC + ULT POWER SOUND). <a class="ai-msg-link" href="catalogo.html?filter=headphones&brand=Sony">Ver Sony →</a>';
    }

    if (/jbl go|jbl clip|jbl flip|jbl charge|altavoz.*jbl|jbl.*altavoz/.test(ql)) {
      return 'Gama <strong>JBL</strong> (5 altavoces de Depau, todos IP67): <strong>GO 5</strong> (€49,99 · 4,8W · 5h) · <strong>Clip 5</strong> (€64,99 · 7W · 12h · clip) · <strong>Flip 6</strong> (€99,99 · 30W · 12h · PartyBoost) · <strong>Flip 7</strong> (€129,99 · 35W · Auracast) · <strong>Charge 6</strong> (€169,99 · 45W · 24h · PowerBank USB-A). <a class="ai-msg-link" href="catalogo.html?filter=speakers&brand=JBL">Ver JBL →</a>';
    }

    if (/auricular|tws|earbuds|cascos|headphone/.test(ql)) {
      return 'Tenemos <strong>5 auriculares Sony</strong> de Depau: <strong>WH-CH520</strong> (€39,99 · 50h) · <strong>WF-C510</strong> (€49,99 · True Wireless) · <strong>WH-CH720N</strong> (€89,99 · ANC) · <strong>WF-C710N</strong> (€99,99 · ANC TWS) · <strong>ULT WEAR</strong> (€129,99 · ANC graves). <a class="ai-msg-link" href="catalogo.html?filter=headphones">Ver auriculares →</a>';
    }

    if (/altavoz|altavoces|speaker|bocina/.test(ql)) {
      return 'Tenemos <strong>5 altavoces JBL</strong> de Depau, todos IP67: <strong>GO 5</strong> (€49,99) · <strong>Clip 5</strong> (€64,99) · <strong>Flip 6</strong> (€99,99) · <strong>Flip 7</strong> (€129,99) · <strong>Charge 6</strong> (€169,99 · PowerBank). <a class="ai-msg-link" href="catalogo.html?filter=speakers">Ver altavoces →</a>';
    }

    if (/reloj|smartwatch|wearable/.test(ql)) {
      return 'Tenemos <strong>9 relojes de Depau</strong>: <strong>Xiaomi</strong> (3 desde €39,95) · <strong>Samsung Galaxy Watch 7</strong> (€279,99) · <strong>Apple Watch</strong> (5 modelos desde €249). <a class="ai-msg-link" href="catalogo.html?filter=watches">Ver relojes →</a>';
    }

    if (/barato|econ[oó]mico|precio|asequible|oferta|bajo precio|menos de/.test(ql)) {
      return 'Los más económicos: <strong>Xiaomi Smart Band 9</strong> (€39,95), <strong>Sony WH-CH520</strong> (€39,99) y <strong>Xiaomi Redmi Watch 5</strong> (€49,95). Todo de Depau, stock verificado. <a class="ai-msg-link" href="catalogo.html">Ver catálogo →</a>';
    }

    if (/premium|caro|mejor|top|m[aá]s completo|el mejor/.test(ql)) {
      return 'Los más premium: <strong>Apple Watch Series 11</strong> (€399 · ECG · chip S11), <strong>JBL Charge 6</strong> (€169,99 · 45W · 24h · PowerBank) y <strong>Sony ULT WEAR</strong> (€129,99 · ANC + ULT POWER SOUND). <a class="ai-msg-link" href="catalogo.html">Ver catálogo →</a>';
    }

    if (/compar|recomiend|sugier|cu[aá]l|qu[eé].*comprar/.test(ql)) {
      return '¿Qué buscas? <strong>Reloj</strong> (Xiaomi desde €39,95 · Samsung €279,99 · Apple Watch desde €249), <strong>auriculares Sony</strong> (desde €39,99, con o sin ANC) o <strong>altavoz JBL</strong> (portátil IP67 desde €49,99). Todos de <strong>Depau.es</strong>, stock verificado. <a class="ai-msg-link" href="catalogo.html">Explorar catálogo →</a>';
    }

    return 'En ZoneTechOnline tenemos <strong>19 productos verificados en Depau</strong>: <strong>9 relojes</strong> (Xiaomi · Samsung · Apple Watch), <strong>5 auriculares Sony</strong> y <strong>5 altavoces JBL</strong> — desde €39,95. <a class="ai-msg-link" href="catalogo.html">Ver catálogo →</a>';
  }

  function sendMessage(text) {
    var clean = text.trim();
    if (!clean) return;

    if (!sugsDismissed) {
      sugsDismissed = true;
      if (sugWrap) {
        sugWrap.style.transition = 'opacity .28s';
        sugWrap.style.opacity = '0';
        setTimeout(function() { sugWrap.style.display = 'none'; }, 290);
      }
    }

    appendMsg(escHtml(clean), 'user');
    showTyping();

    var captured = clean;
    setTimeout(function() {
      removeTyping();
      appendMsg(getResponse(captured), 'bot');
    }, 1050);
  }

  function openAI() {
    backdrop.classList.add('open');
    document.body.style.overflow = 'hidden';
    if (!opened) {
      opened = true;
      setTimeout(function() {
        appendMsg('¡Hola! Soy el asistente de ZoneTechOnline. Tenemos <strong>19 productos verificados en Depau</strong>: 9 relojes (Xiaomi · Samsung · Apple Watch), 5 auriculares Sony y 5 altavoces JBL — desde €39,95. ¿Qué buscas?', 'bot');
      }, 200);
    }
    setTimeout(function() { if (input) input.focus(); }, 360);
  }

  function closeAI() {
    backdrop.classList.remove('open');
    document.body.style.overflow = '';
  }

  openBtn.addEventListener('click', openAI);
  if (closeBtn) closeBtn.addEventListener('click', closeAI);
  backdrop.addEventListener('click', function(e) { if (e.target === backdrop) closeAI(); });
  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape' && backdrop.classList.contains('open')) closeAI();
  });

  if (sugWrap) {
    sugWrap.querySelectorAll('.ai-sug-btn').forEach(function(btn) {
      btn.addEventListener('click', function() {
        var q = btn.dataset.q || btn.textContent.trim();
        sendMessage(q);
        if (input) input.value = '';
      });
    });
  }

  if (form) {
    form.addEventListener('submit', function(e) {
      e.preventDefault();
      var q = input ? input.value.trim() : '';
      if (!q) return;
      if (input) input.value = '';
      sendMessage(q);
      if (sendBtn) { sendBtn.disabled = true; setTimeout(function() { sendBtn.disabled = false; }, 1200); }
    });
  }
}

// ─── INIT ─────────────────────────────────────────────────────────────────────

document.addEventListener('DOMContentLoaded', function() {
  initMegaMenu();
  initNavbar();
  initSearch();
  initUserSession();
  initSlider();
  initAuthModal();
  // URL parameter routing: ?filter=watches or ?brand=Garmin
  var urlParams = new URLSearchParams(window.location.search);
  var filterParam = urlParams.get('filter');
  var brandParam  = urlParams.get('brand');
  if (filterParam && FILTER_MAP[filterParam]) {
    renderProducts(filterParam);
    document.querySelectorAll('.filter-btn').forEach(function(btn) {
      btn.classList.toggle('active', btn.dataset.filter === filterParam);
    });
    var secF = document.getElementById('productos');
    if (secF) window.scrollTo({ top: secF.getBoundingClientRect().top + window.pageYOffset - 80, behavior: 'instant' });
  } else if (brandParam) {
    filterByBrand(brandParam);
    var secB = document.getElementById('productos');
    if (secB) window.scrollTo({ top: secB.getBoundingClientRect().top + window.pageYOffset - 80, behavior: 'instant' });
  } else {
    renderProducts('all');
  }
  renderCartItems();
  updateCartBadge();
  renderComparator();
  initConfigurator();
  initScrollReveal();
  initNewsletter();
  initSmoothScroll();
  initClearComparator();
  initReviews();
  initAIAssistant();

  // Cart toggle
  var cartToggle = document.getElementById('cart-toggle');
  if (cartToggle) cartToggle.addEventListener('click', openCart);

  var closeCartBtn = document.getElementById('close-cart');
  if (closeCartBtn) closeCartBtn.addEventListener('click', closeCart);

  var overlay = document.getElementById('overlay');
  if (overlay) overlay.addEventListener('click', function() {
    closeCart();
    closeQuickView();
  });

  var continueShop = document.getElementById('continue-shopping');
  if (continueShop) continueShop.addEventListener('click', closeCart);

  var checkoutBtn = document.getElementById('checkout-btn');
  if (checkoutBtn) {
    checkoutBtn.addEventListener('click', function() {
      if (!cart || cart.length === 0) return;
      closeCart();
      window.location.href = 'checkout.html';
    });
  }

  // Filter buttons (solo aplica a los que tengan data-filter, no a <a> de navegación)
  document.querySelectorAll('.filter-btn[data-filter]').forEach(function(btn) {
    btn.addEventListener('click', function() { setFilter(btn.dataset.filter); });
  });

  // Modal close
  var closeModalBtn = document.getElementById('close-quick-view');
  if (closeModalBtn) closeModalBtn.addEventListener('click', closeQuickView);

  var modal = document.getElementById('quick-view-modal');
  if (modal) {
    modal.addEventListener('click', function(e) {
      if (e.target === modal) closeQuickView();
    });
  }

  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') { closeQuickView(); closeCart(); }
  });
});