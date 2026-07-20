// ZoneTechOnline — Premium Tech Wearables
// European brand products only: Garmin, Oura, Jabra, Sennheiser, Ray-Ban Meta, Sonos, Marshall, B&O, Bose, CurrentBody...

// ─── FILTER MAP (HTML data-filter → product category) ────────────────────────
const FILTER_MAP = {
  'all':         'todos',
  'watches':     'relojes',
  'headphones':  'auriculares',
  'speakers':    'altavoces',
  'peripherals': 'teclados gaming',
  'smartphones': 'smartphones'
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
    badge: 'OFERTA',
    image: 'img/productos/1648-xiaomi-smart-band-9-amoled-pulsera-de-actividad-negra.jpg',
    images: [
      'img/productos/1648-xiaomi-smart-band-9-amoled-pulsera-de-actividad-negra.jpg',
      'img/productos/2438-xiaomi-smart-band-9-amoled-pulsera-de-actividad-negra-comprar.jpg',
      'img/productos/345-xiaomi-smart-band-9-amoled-pulsera-de-actividad-negra-mejor-precio.jpg',
      'img/productos/4779-xiaomi-smart-band-9-amoled-pulsera-de-actividad-negra-especificaciones.jpg'
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
    badge: 'OFERTA',
    image: 'img/productos/art_xia-reloj_redmi_w_5_act_bk_1.jpg',
    images: [
      'img/productos/art_xia-reloj_redmi_w_5_act_bk_1.jpg',
      'img/productos/art_xia-reloj_redmi_w_5_act_bk_2.jpg',
      'img/productos/art_xia-reloj_redmi_w_5_act_bk_3.jpg'
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
    badge: 'OFERTA',
    image: 'img/productos/art_xia-reloj_redmi_w_5_act_sv_1.jpg',
    images: [
      'img/productos/art_xia-reloj_redmi_w_5_act_sv_1.jpg',
      'img/productos/art_xia-reloj_redmi_w_5_act_sv_2.jpg',
      'img/productos/art_xia-reloj_redmi_w_5_act_sv_3.jpg',
      'img/productos/art_xia-reloj_redmi_w_5_act_sv_4.jpg',
      'img/productos/art_xia-reloj_redmi_w_5_act_sv_5.jpg'
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
    badge: 'OFERTA',
    image: 'img/productos/art_sam-reloj_l310_44_bt_gree_v2_1.jpg',
    images: [
      'img/productos/art_sam-reloj_l310_44_bt_gree_v2_1.jpg',
      'img/productos/art_sam-reloj_l310_44_bt_gree_v2_2.jpg',
      'img/productos/art_sam-reloj_l310_44_bt_gree_v2_3.jpg',
      'img/productos/art_sam-reloj_l310_44_bt_gree_v2_4.jpg',
      'img/productos/art_sam-reloj_l310_44_bt_gree_v2_5.jpg'
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
    badge: 'OFERTA',
    image: 'img/productos/1108-apple-watch-se-3-gps-40mm-caja-de-aluminio-blanco-estrella-con-correa-deportiva-blanco-estrella-m-l-f5cd37f4-3157-43fd-8e1e-70024c314a33.jpg',
    images: [
      'img/productos/1108-apple-watch-se-3-gps-40mm-caja-de-aluminio-blanco-estrella-con-correa-deportiva-blanco-estrella-m-l-f5cd37f4-3157-43fd-8e1e-70024c314a33.jpg',
      'img/productos/2997-apple-watch-se-3-gps-40mm-caja-de-aluminio-blanco-estrella-con-correa-deportiva-blanco-estrella-m-l-f11f1ec4-254d-46bd-a7d4-44c06ac8afec.jpg'
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
    badge: 'OFERTA',
    image: 'img/productos/183-apple-watch-se-3-gps-44mm-caja-de-aluminio-blanco-estrella-con-correa-deportiva-blanco-estrella-m-l-6a76ad09-9ed3-4f05-b81e-c8051193e595.jpg',
    images: [
      'img/productos/183-apple-watch-se-3-gps-44mm-caja-de-aluminio-blanco-estrella-con-correa-deportiva-blanco-estrella-m-l-6a76ad09-9ed3-4f05-b81e-c8051193e595.jpg',
      'img/productos/2521-apple-watch-se-3-gps-44mm-caja-de-aluminio-blanco-estrella-con-correa-deportiva-blanco-estrella-m-l-bcf9aa62-3061-45cf-a23f-4c6ea5b0925d.jpg'
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
    badge: 'OFERTA',
    image: 'img/productos/1777-apple-watch-se-3-gps-cellular-40mm-aluminio-medianoche-con-correa-deportiva-medianoche-s-m-fcb78ea0-aac6-4a68-baae-89d47a46dd12.jpg',
    images: [
      'img/productos/1777-apple-watch-se-3-gps-cellular-40mm-aluminio-medianoche-con-correa-deportiva-medianoche-s-m-fcb78ea0-aac6-4a68-baae-89d47a46dd12.jpg',
      'img/productos/2900-apple-watch-se-3-gps-cellular-40mm-aluminio-medianoche-con-correa-deportiva-medianoche-s-m-86dda146-55fe-4620-80a7-0ffbbf0389dd.jpg'
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
    badge: 'OFERTA',
    image: 'img/productos/1472-apple-watch-se-3-gps-cellular-44mm-aluminio-medianoche-con-correa-deportiva-medianoche-s-m-bcea6e32-fdd3-41ac-a126-1691e2b54484.jpg',
    images: [
      'img/productos/1472-apple-watch-se-3-gps-cellular-44mm-aluminio-medianoche-con-correa-deportiva-medianoche-s-m-bcea6e32-fdd3-41ac-a126-1691e2b54484.jpg',
      'img/productos/299-apple-watch-se-3-gps-cellular-44mm-aluminio-medianoche-con-correa-deportiva-medianoche-s-m-a2013e9a-6b02-4570-a3f1-f479a5f16c12.jpg'
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
    badge: 'OFERTA',
    image: 'img/productos/Apple-Watch-Series-10-aluminum-jet-black-240909_inline.jpg.large.jpg',
    images: [
      'img/productos/Apple-Watch-Series-10-aluminum-jet-black-240909_inline.jpg.large.jpg',
      'img/productos/Apple-Watch-Series-10-aluminum-silver-240909_inline.jpg.large.jpg',
      'img/productos/9886-apple-watch-se-3-gps-44mm-caja-de-aluminio-blanco-estrella-con-correa-deportiva-blanco-estrella-m-l.jpg'
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
    badge: 'OFERTA',
    image: 'img/productos/art_sony-aur_wh-ch520_bk_1.jpg',
    images: [
      'img/productos/art_sony-aur_wh-ch520_bk_1.jpg',
      'img/productos/art_sony-aur_wh-ch520_bk_2.jpg',
      'img/productos/art_sony-aur_wh-ch520_bk_3.jpg',
      'img/productos/art_sony-aur_wh-ch520_bk_4.jpg'
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
    badge: 'OFERTA',
    image: 'img/productos/art_sony-aur_wf-c510_wh_1.jpg',
    images: [
      'img/productos/art_sony-aur_wf-c510_wh_1.jpg',
      'img/productos/art_sony-aur_wf-c510_wh_2.jpg',
      'img/productos/art_sony-aur_wf-c510_wh_3.jpg',
      'img/productos/art_sony-aur_wf-c510_wh_4.jpg',
      'img/productos/art_sony-aur_wf-c510_wh_5.jpg'
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
    badge: 'OFERTA',
    image: 'img/productos/art_sony-aur_wh-ch720n_bk_1.jpg',
    images: [
      'img/productos/art_sony-aur_wh-ch720n_bk_1.jpg',
      'img/productos/art_sony-aur_wh-ch720n_bk_2.jpg',
      'img/productos/art_sony-aur_wh-ch720n_bk_3.jpg',
      'img/productos/art_sony-aur_wh-ch720n_bk_4.jpg',
      'img/productos/art_sony-aur_wh-ch720n_bk_5.jpg'
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
    badge: 'OFERTA',
    image: 'img/productos/art_sony-aur_wf-c710n_wh_1.jpg',
    images: [
      'img/productos/art_sony-aur_wf-c710n_wh_1.jpg',
      'img/productos/art_sony-aur_wf-c710n_wh_2.jpg',
      'img/productos/art_sony-aur_wf-c710n_wh_3.jpg'
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
    badge: 'OFERTA',
    image: 'img/productos/art_sony-aur_ult_wear_bk_1.jpg',
    images: [
      'img/productos/art_sony-aur_ult_wear_bk_1.jpg',
      'img/productos/art_sony-aur_ult_wear_bk_2.jpg',
      'img/productos/art_sony-aur_ult_wear_bk_3.jpg',
      'img/productos/art_sony-aur_ult_wear_bk_4.jpg',
      'img/productos/art_sony-aur_ult_wear_bk_5.jpg'
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
    price:49.85,
    oldPrice: 58.8,
    badge: 'OFERTA',
    image:'img/productos/art_jbl-alt_go5_bk_1.jpg',
    images: [
      'img/productos/art_jbl-alt_go5_bk_1.jpg',
      'img/productos/art_jbl-alt_go5_bk_2.jpg',
      'img/productos/art_jbl-alt_go5_bk_3.jpg',
      'img/productos/art_jbl-alt_go5_bk_4.jpg',
      'img/productos/art_jbl-alt_go5_bk_5.jpg'
    ],
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
    price:64.35,
    oldPrice: 75.95,
    badge: 'OFERTA',
    image:'img/productos/art_jbl-alt_clip5_bk_1.jpg',
    images: [
      'img/productos/art_jbl-alt_clip5_bk_1.jpg',
      'img/productos/art_jbl-alt_clip5_bk_2.jpg',
      'img/productos/art_jbl-alt_clip5_bk_3.jpg',
      'img/productos/art_jbl-alt_clip5_bk_4.jpg',
      'img/productos/art_jbl-alt_clip5_bk_5.jpg'
    ],
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
    price:99.85,
    oldPrice: 117.8,
    badge: 'OFERTA',
    image:'img/productos/art_jbl-alt_flip6_bk_1.jpg',
    images: [
      'img/productos/art_jbl-alt_flip6_bk_1.jpg',
      'img/productos/art_jbl-alt_flip6_bk_2.jpg',
      'img/productos/art_jbl-alt_flip6_bk_3.jpg',
      'img/productos/art_jbl-alt_flip6_bk_4.jpg',
      'img/productos/art_jbl-alt_flip6_bk_5.jpg'
    ],
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
    price:130.5,
    oldPrice: 154,
    badge: 'OFERTA',
    image:'img/productos/art_jbl-alt_flip7_wh_1.jpg',
    images: [
      'img/productos/art_jbl-alt_flip7_wh_1.jpg',
      'img/productos/art_jbl-alt_flip7_wh_2.jpg',
      'img/productos/art_jbl-alt_flip7_wh_3.jpg',
      'img/productos/art_jbl-alt_flip7_wh_4.jpg',
      'img/productos/art_jbl-alt_flip7_wh_5.jpg'
    ],
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
    price:170.6,
    oldPrice: 201.3,
    badge: 'OFERTA',
    image:'img/productos/art_jbl-alt_charge_6_bk_1.jpg',
    images: [
      'img/productos/art_jbl-alt_charge_6_bk_1.jpg',
      'img/productos/art_jbl-alt_charge_6_bk_2.jpg',
      'img/productos/art_jbl-alt_charge_6_bk_3.jpg',
      'img/productos/art_jbl-alt_charge_6_bk_4.jpg',
      'img/productos/art_jbl-alt_charge_6_bk_5.jpg'
    ],
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

// ─── AURICULARES INTELIGENTES (fuente: Megasur.es — junio 2026) ──────────────
// 25 productos · 5 marcas × 5 modelos · ordenados por precio ascendente
PRODUCTS.push(

  // ── Apple ────────────────────────────────────────────────────────────────

  { id:200, name:'Apple Beats Flex Bluetooth Negro', brand:'Apple', category:'auriculares',
    price:93.4, oldPrice:110.2, badge: 'OFERTA',
    image:'img/productos/DSP0000016997-0.jpg',
    images: [
      'img/productos/DSP0000016997-0.jpg',
      'img/productos/DSP0000016997-1.jpg',
      'img/productos/DSP0000016997-2.jpg',
      'img/productos/DSP0000016997-3.jpg',
      'img/productos/DSP0000016997-4.jpg'
    ],
    description:'Auriculares in-ear con cable de cuello de Apple, equipados con chip W1 para conectividad instantánea y cambio automático entre dispositivos Apple. Bluetooth 5.0 con hasta 12 horas de batería. Imanes flexibles, micrófono integrado y compatible con iOS y Android.',
    specs:{
      'Chip':'Apple W1',
      'Batería':'Hasta 12 horas de reproducción',
      'Conectividad':'Bluetooth 5.0',
      'Micrófono':'Integrado · manos libres',
      'Compatibilidad':'iOS y Android (modo universal)',
      'Peso':'16.4g ultraligero',
      'SKU Megasur':'DSP0000016997'
    }
  },

  { id:201, name:'Apple AirPods 4 Inalámbrico Blanco', brand:'Apple', category:'auriculares',
    price:209.1, oldPrice:246.75, badge: 'OFERTA',
    image:'img/productos/DSP0000028093-0.jpg',
    images: [
      'img/productos/DSP0000028093-0.jpg',
      'img/productos/DSP0000028093-1.jpg',
      'img/productos/DSP0000028093-2.jpg'
    ],
    description:'AirPods de 4ª generación con chip H2 y cancelación de ruido. Modo Transparencia adaptativa, audio espacial personalizado con seguimiento de cabeza y resistencia al sudor IP54. Estuche con USB-C: hasta 5h propios y 30h adicionales. Siri siempre disponible.',
    specs:{
      'Chip':'Apple H2',
      'ANC':'Cancelación de ruido + Transparencia adaptativa',
      'Batería':'5h (auriculares) + 30h (estuche)',
      'Conectividad':'Bluetooth 5.3 · USB-C',
      'Resistencia':'IP54 (sudor y salpicaduras)',
      'Asistentes':'Siri',
      'SKU Megasur':'DSP0000028093'
    }
  },

  { id:202, name:'Apple AirPods Max 2nd Gen Azul', brand:'Apple', category:'auriculares',
    price:717.5, oldPrice:846.65, badge: 'OFERTA',
    image:'img/productos/DSP0000027018-0.jpg',
    images: [
      'img/productos/DSP0000027018-0.jpg',
      'img/productos/DSP0000027018-1.jpg',
      'img/productos/DSP0000027018-2.jpg',
      'img/productos/DSP0000027018-3.jpg'
    ],
    description:'Auriculares over-ear premium de Apple con chip H2. Cancelación activa de ruido (ANC) adaptativa, Transparencia adaptativa y audio espacial personalizado con seguimiento dinámico de cabeza. Hasta 20 horas con ANC, USB-C y Bluetooth 5.3. Color Azul.',
    specs:{
      'ANC':'Cancelación activa adaptativa (chip H2)',
      'Audio':'Audio espacial + seguimiento dinámico de cabeza',
      'Transparencia':'Modo Transparencia adaptativa',
      'Batería':'Hasta 20h con ANC activado',
      'Conectividad':'Bluetooth 5.3 · USB-C',
      'Peso':'385g',
      'SKU Megasur':'DSP0000027018'
    }
  },

  { id:203, name:'Apple AirPods Max 2nd Gen Starlight', brand:'Apple', category:'auriculares',
    price:717.5, oldPrice:846.65, badge: 'OFERTA',
    image:'img/productos/DSP0000027101-0.jpg',
    images: [
      'img/productos/DSP0000027101-0.jpg',
      'img/productos/DSP0000027101-1.jpg',
      'img/productos/DSP0000027101-2.jpg',
      'img/productos/DSP0000027101-3.jpg'
    ],
    description:'Auriculares over-ear premium de Apple con chip H2. Cancelación activa de ruido (ANC) adaptativa, Transparencia adaptativa y audio espacial personalizado con seguimiento dinámico de cabeza. Hasta 20 horas con ANC, USB-C y Bluetooth 5.3. Color Starlight.',
    specs:{
      'ANC':'Cancelación activa adaptativa (chip H2)',
      'Audio':'Audio espacial + seguimiento dinámico de cabeza',
      'Transparencia':'Modo Transparencia adaptativa',
      'Batería':'Hasta 20h con ANC activado',
      'Conectividad':'Bluetooth 5.3 · USB-C',
      'Peso':'385g',
      'SKU Megasur':'DSP0000027101'
    }
  },

  { id:204, name:'Apple AirPods Max 2nd Gen Orange', brand:'Apple', category:'auriculares',
    price:717.5, oldPrice:846.65, badge: 'OFERTA',
    image:'img/productos/DSP0000027423-0.jpg',
    images: [
      'img/productos/DSP0000027423-0.jpg',
      'img/productos/DSP0000027423-1.jpg',
      'img/productos/DSP0000027423-2.jpg',
      'img/productos/DSP0000027423-3.jpg'
    ],
    description:'Auriculares over-ear premium de Apple con chip H2. Cancelación activa de ruido (ANC) adaptativa, Transparencia adaptativa y audio espacial personalizado con seguimiento dinámico de cabeza. Hasta 20 horas con ANC, USB-C y Bluetooth 5.3. Color Orange.',
    specs:{
      'ANC':'Cancelación activa adaptativa (chip H2)',
      'Audio':'Audio espacial + seguimiento dinámico de cabeza',
      'Transparencia':'Modo Transparencia adaptativa',
      'Batería':'Hasta 20h con ANC activado',
      'Conectividad':'Bluetooth 5.3 · USB-C',
      'Peso':'385g',
      'SKU Megasur':'DSP0000027423'
    }
  },

  // ── Sony ─────────────────────────────────────────────────────────────────

  { id:205, name:'Sony WF-C510 True Wireless Azul', brand:'Sony', category:'auriculares',
    price:62.75, oldPrice:74.05, badge: 'OFERTA',
    image:'img/productos/DSP0000037829-0.jpg',
    images: [
      'img/productos/DSP0000037829-0.jpg',
      'img/productos/DSP0000037829-1.jpg',
      'img/productos/DSP0000037829-2.jpg',
      'img/productos/DSP0000037829-3.jpg'
    ],
    description:'Auriculares True Wireless de Sony con Bluetooth 5.3 y resistencia al agua IPX4. Drivers de 5.8mm con sonido equilibrado y 35 horas de autonomía total (10h propios + 25h estuche). Compatible con Google Assistant y Alexa. Estuche de carga compacto.',
    specs:{
      'Tipo':'True Wireless in-ear',
      'Batería':'10h (auriculares) + 25h (estuche) = 35h total',
      'Conectividad':'Bluetooth 5.3',
      'Resistencia':'IPX4 (agua y sudor)',
      'Driver':'5.8mm',
      'Asistentes':'Google Assistant · Amazon Alexa',
      'SKU Megasur':'DSP0000037829'
    }
  },

  { id:206, name:'Sony WH-CH520 Bluetooth Blanco', brand:'Sony', category:'auriculares',
    price:70.8, oldPrice:83.55, badge: 'OFERTA',
    image:'img/productos/MGS0000020797-0.jpg',
    images: [
      'img/productos/MGS0000020797-0.jpg',
      'img/productos/MGS0000020797-1.jpg',
      'img/productos/MGS0000020797-2.jpg',
      'img/productos/MGS0000020797-3.jpg',
      'img/productos/MGS0000020797-4.jpg'
    ],
    description:'Auriculares over-ear inalámbricos de Sony con la mayor autonomía de su gama: hasta 50 horas de batería. Bluetooth 5.2 con Multipoint para conectar 2 dispositivos a la vez, carga rápida (10 min = 90 min de uso), drivers de 30mm y control de voz con Google Assistant y Alexa.',
    specs:{
      'Tipo':'Over-Ear inalámbrico plegable',
      'Batería':'Hasta 50h · Carga rápida 10 min = 90 min',
      'Conectividad':'Bluetooth 5.2 · Multipoint (2 dispositivos)',
      'Driver':'30mm',
      'Asistentes':'Google Assistant · Amazon Alexa',
      'Peso':'147g ultraligero',
      'SKU Megasur':'MGS0000020797'
    }
  },

  { id:207, name:'Sony WI-C100 Inalámbrico Negro', brand:'Sony', category:'auriculares',
    price:46.5, oldPrice:54.85, badge: 'OFERTA',
    image:'img/productos/DSP0000037821-0.jpg',
    images: [
      'img/productos/DSP0000037821-0.jpg',
      'img/productos/DSP0000037821-1.jpg',
      'img/productos/DSP0000037821-2.jpg',
      'img/productos/DSP0000037821-3.jpg'
    ],
    description:'Auriculares in-ear con cable de cuello (neckband) de Sony. Bluetooth 5.0 con hasta 25 horas de autonomía, resistencia al agua y sudor IPX4, y solo 12.5g de peso. Diseñados para el deporte y uso activo con micrófono integrado. Compatibles con Google Assistant y Alexa.',
    specs:{
      'Tipo':'In-ear neckband',
      'Batería':'Hasta 25h de reproducción',
      'Conectividad':'Bluetooth 5.0',
      'Resistencia':'IPX4 (agua y sudor)',
      'Asistentes':'Google Assistant · Amazon Alexa',
      'Peso':'12.5g ultraligero',
      'SKU Megasur':'DSP0000037821'
    }
  },

  { id:208, name:'Sony WH-CH720N ANC Inalámbrico Negro', brand:'Sony', category:'auriculares',
    price:109.5, oldPrice:129.2, badge: 'OFERTA',
    image:'img/productos/DSP0000037822-0.jpg',
    images: [
      'img/productos/DSP0000037822-0.jpg',
      'img/productos/DSP0000037822-1.jpg',
      'img/productos/DSP0000037822-2.jpg',
      'img/productos/DSP0000037822-3.jpg',
      'img/productos/DSP0000037822-4.jpg'
    ],
    description:'Auriculares over-ear con cancelación activa de ruido (ANC) de Sony. Bluetooth 5.2 con Multipoint, hasta 35h con ANC (50h sin ANC), carga rápida USB-C y diseño plegable ultraligero de 192g. Micrófono beamforming para llamadas nítidas. Compatible con Google Assistant y Alexa.',
    specs:{
      'ANC':'Cancelación activa de ruido ajustable',
      'Batería':'35h con ANC / 50h sin ANC · USB-C',
      'Conectividad':'Bluetooth 5.2 · Multipoint',
      'Micrófono':'Beamforming para llamadas',
      'Asistentes':'Google Assistant · Amazon Alexa',
      'Peso':'192g plegable',
      'SKU Megasur':'DSP0000037822'
    }
  },

  { id:209, name:'Sony WF-C710N TWS ANC Negro', brand:'Sony', category:'auriculares',
    price:132.1, oldPrice:155.9, badge: 'OFERTA',
    image:'img/productos/DSP0000037823-0.jpg',
    images: [
      'img/productos/DSP0000037823-0.jpg',
      'img/productos/DSP0000037823-1.jpg',
      'img/productos/DSP0000037823-2.jpg',
      'img/productos/DSP0000037823-3.jpg',
      'img/productos/DSP0000037823-4.jpg'
    ],
    description:'Auriculares True Wireless de Sony con cancelación activa de ruido (ANC) y audio de alta resolución LDAC. Bluetooth 5.3, control táctil, resistencia IPX4 y hasta 22.5h totales (7.5h + 15h estuche). Modo Speak-to-Chat: pausa automática al hablar. Compatible con Google Assistant.',
    specs:{
      'ANC':'Cancelación activa de ruido TWS',
      'Audio':'LDAC alta resolución',
      'Batería':'7.5h (auriculares) + 15h (estuche) = 22.5h',
      'Conectividad':'Bluetooth 5.3',
      'Resistencia':'IPX4 · Control táctil',
      'Asistentes':'Google Assistant · Amazon Alexa',
      'SKU Megasur':'DSP0000037823'
    }
  },

  // ── JBL ──────────────────────────────────────────────────────────────────

  { id:210, name:'JBL T160 Intrauditivo Cable Azul', brand:'JBL', category:'auriculares',
    price:26.5, badge: 'OFERTA',
    image:'img/productos/MGS0000021837-0.jpg',
    images: [
      'img/productos/MGS0000021837-0.jpg',
      'img/productos/MGS0000021837-1.jpg',
      'img/productos/MGS0000021837-2.jpg',
      'img/productos/MGS0000021837-3.jpg',
      'img/productos/MGS0000021837-4.jpg'
    ],
    description:'Auriculares intrauditivos con cable de JBL. Drivers JBL Pure Bass de 8.7mm para graves profundos y nítidos. Cable plano anti-enredos, micrófono integrado con botón multifunción universal y 3 tallas de almohadillas incluidas. Compatible con iOS y Android.',
    specs:{
      'Tipo':'Intrauditivo con cable · Jack 3.5mm',
      'Driver':'JBL Pure Bass 8.7mm',
      'Micrófono':'Integrado · botón multifunción',
      'Cable':'Plano anti-enredos',
      'Almohadillas':'3 tallas incluidas (S/M/L)',
      'Peso':'13.5g',
      'SKU Megasur':'MGS0000021837'
    }
  },

  { id:211, name:'JBL Tune 500 On-Ear Cable Blanco', brand:'JBL', category:'auriculares',
    price:46.5, oldPrice:54.85, badge: 'OFERTA',
    image:'img/productos/MGS0000016567-0.jpg',
    images: [
      'img/productos/MGS0000016567-0.jpg',
      'img/productos/MGS0000016567-1.jpg',
      'img/productos/MGS0000016567-2.jpg',
      'img/productos/MGS0000016567-3.jpg',
      'img/productos/MGS0000016567-4.jpg'
    ],
    description:'Auriculares on-ear con cable de JBL y drivers Pure Bass de 32mm para un sonido potente y envolvente. Diseño plegable ultraligero de 145g con diadema ajustable y almohadillas acolchadas. Micrófono integrado con control de 1 botón compatible con iOS y Android.',
    specs:{
      'Tipo':'On-Ear con cable · Jack 3.5mm',
      'Driver':'JBL Pure Bass 32mm',
      'Micrófono':'Integrado · 1 botón universal',
      'Diseño':'Plegable',
      'Peso':'145g ultraligero',
      'Compatibilidad':'iOS y Android',
      'SKU Megasur':'MGS0000016567'
    }
  },

  { id:212, name:'JBL Tune 510BT Inalámbrico Bluetooth Blanco', brand:'JBL', category:'auriculares',
    price:65.95, oldPrice:77.8, badge: 'OFERTA',
    image:'img/productos/MGS0000006825-0.jpg',
    images: [
      'img/productos/MGS0000006825-0.jpg',
      'img/productos/MGS0000006825-1.jpg',
      'img/productos/MGS0000006825-2.jpg',
      'img/productos/MGS0000006825-3.jpg',
      'img/productos/MGS0000006825-4.jpg'
    ],
    description:'Auriculares on-ear inalámbricos de JBL con 40 horas de batería y carga rápida (5 minutos = 2 horas de uso). Bluetooth 5.0 con Multipoint para conectar 2 dispositivos simultáneamente, drivers Pure Bass de 40mm y app JBL Headphones para personalizar el sonido.',
    specs:{
      'Tipo':'On-Ear inalámbrico plegable',
      'Batería':'40h · Carga rápida 5 min = 2h',
      'Conectividad':'Bluetooth 5.0 · Multipoint',
      'Driver':'JBL Pure Bass 40mm',
      'App':'JBL Headphones (personalización EQ)',
      'Peso':'160g',
      'SKU Megasur':'MGS0000006825'
    }
  },

  { id:213, name:'JBL Wave 200 TWS Negro', brand:'JBL', category:'auriculares',
    price:62.75, oldPrice:74.05, badge: 'OFERTA',
    image:'img/productos/MGS0000021078-0.jpg',
    images: [
      'img/productos/MGS0000021078-0.jpg',
      'img/productos/MGS0000021078-1.jpg',
      'img/productos/MGS0000021078-2.jpg',
      'img/productos/MGS0000021078-3.jpg',
      'img/productos/MGS0000021078-4.jpg'
    ],
    description:'Auriculares True Wireless de JBL con JBL Deep Bass Sound y drivers de 8mm. Bluetooth 5.2 con hasta 25 horas de autonomía total (5h propios + 20h estuche), resistencia IPX2 y controles táctiles. Estuche de carga compacto y llamadas manos libres.',
    specs:{
      'Tipo':'True Wireless in-ear',
      'Batería':'5h (auriculares) + 20h (estuche) = 25h',
      'Conectividad':'Bluetooth 5.2',
      'Driver':'JBL Deep Bass 8mm',
      'Resistencia':'IPX2 · Controles táctiles',
      'Peso auricular':'5g',
      'SKU Megasur':'MGS0000021078'
    }
  },

  { id:214, name:'JBL Wave 300 TWS Negro', brand:'JBL', category:'auriculares',
    price:75.65, oldPrice:89.25, badge: 'OFERTA',
    image:'img/productos/MGS0000021836-0.jpg',
    images: [
      'img/productos/MGS0000021836-0.jpg',
      'img/productos/MGS0000021836-1.jpg',
      'img/productos/MGS0000021836-2.jpg',
      'img/productos/MGS0000021836-3.jpg',
      'img/productos/MGS0000021836-4.jpg'
    ],
    description:'Auriculares True Wireless de JBL con JBL Deep Bass Sound y 32 horas de autonomía total (6h propios + 26h estuche). Bluetooth 5.2, 3 micrófonos para llamadas de alta calidad, resistencia IPX2, controles táctiles y carga USB-C. Compatible con Google Assistant y Alexa.',
    specs:{
      'Tipo':'True Wireless in-ear',
      'Batería':'6h (auriculares) + 26h (estuche) = 32h',
      'Conectividad':'Bluetooth 5.2 · USB-C',
      'Micrófonos':'3 micrófonos para llamadas HD',
      'Driver':'JBL Deep Bass 8mm mejorado',
      'Resistencia':'IPX2',
      'SKU Megasur':'MGS0000021836'
    }
  },

  // ── ASUS ─────────────────────────────────────────────────────────────────

  { id:215, name:'ASUS TUF Gaming H1 Gen II Negro', brand:'ASUS', category:'auriculares',
    price:85.3, oldPrice:100.65, badge: 'OFERTA',
    image:'img/productos/MGS0000033609-0.jpg',
    images: [
      'img/productos/MGS0000033609-0.jpg',
      'img/productos/MGS0000033609-1.jpg',
      'img/productos/MGS0000033609-2.jpg',
      'img/productos/MGS0000033609-3.jpg',
      'img/productos/MGS0000033609-4.jpg'
    ],
    description:'Auriculares gaming con cable de ASUS TUF, compatibles con Jack 3.5mm y USB-C. Drivers de 40mm ASUS-Tuned para audio gaming preciso, micrófono boom de 6mm con cancelación de ruido y sonido envolvente virtual 7.1 con ASUS Sonic Studio. Diseño plegable de 285g.',
    specs:{
      'Tipo':'Gaming cable · Jack 3.5mm + USB-C',
      'Driver':'40mm ASUS-Tuned',
      'Sonido envolvente':'Virtual 7.1 (ASUS Sonic Studio)',
      'Micrófono':'Boom 6mm · cancelación de ruido',
      'Plataformas':'PC · PS4/PS5 · Xbox · Switch',
      'Peso':'285g plegable',
      'SKU Megasur':'MGS0000033609'
    }
  },

  { id:216, name:'ASUS TUF Gaming H3 Gun Metal', brand:'ASUS', category:'auriculares',
    price:86.95, oldPrice:102.6, badge: 'OFERTA',
    image:'img/productos/MGS0000033529-0.jpg',
    images: [
      'img/productos/MGS0000033529-0.jpg',
      'img/productos/MGS0000033529-2.jpg',
      'img/productos/MGS0000033529-3.jpg',
      'img/productos/MGS0000033529-4.jpg'
    ],
    description:'Auriculares gaming USB de ASUS TUF con drivers de 50mm para graves profundos y explosivos. Micrófono bidireccional desmontable con cancelación de ruido, sonido envolvente virtual 7.1 y almohadillas de espuma de memoria para sesiones largas. Compatible con todas las plataformas.',
    specs:{
      'Tipo':'Gaming USB',
      'Driver':'50mm · graves profundos',
      'Sonido envolvente':'Virtual 7.1 (ASUS Sonic Studio III)',
      'Micrófono':'Bidireccional desmontable con ENC',
      'Almohadillas':'Espuma de memoria',
      'Plataformas':'PC · PS4/PS5 · Xbox · Switch',
      'SKU Megasur':'MGS0000033529'
    }
  },

  { id:217, name:'ASUS TUF Gaming H1 Wireless Negro', brand:'ASUS', category:'auriculares',
    price:103.05, oldPrice:121.6, badge: 'OFERTA',
    image:'img/productos/MGS0000033605-0.jpg',
    images: [
      'img/productos/MGS0000033605-0.jpg',
      'img/productos/MGS0000033605-2.jpg',
      'img/productos/MGS0000033605-3.jpg',
      'img/productos/MGS0000033605-4.jpg'
    ],
    description:'Auriculares gaming inalámbricos de ASUS TUF con conexión dual: 2.4GHz sin latencia y cable 3.5mm para consolas. Drivers de 40mm ASUS-Tuned, hasta 15h de batería, micrófono boom desmontable y almohadillas de espuma de memoria para máximo confort.',
    specs:{
      'Tipo':'Gaming inalámbrico 2.4GHz + cable 3.5mm',
      'Driver':'40mm ASUS-Tuned',
      'Batería':'Hasta 15h',
      'Latencia':'Baja latencia 2.4GHz',
      'Micrófono':'Boom desmontable con ENC',
      'Peso':'299g',
      'SKU Megasur':'MGS0000033605'
    }
  },

  { id:218, name:'ASUS ROG Delta S Gaming Negro', brand:'ASUS', category:'auriculares',
    price:273.7, oldPrice:322.95, badge: 'OFERTA',
    image:'img/productos/MGS0000033604-0.jpg',
    images: [
      'img/productos/MGS0000033604-0.jpg',
      'img/productos/MGS0000033604-1.jpg',
      'img/productos/MGS0000033604-2.jpg',
      'img/productos/MGS0000033604-3.jpg',
      'img/productos/MGS0000033604-4.jpg'
    ],
    description:'Auriculares gaming USB-C premium de ASUS ROG con DAC ESS 9281 Quad-Core de 32 bits para audio Hi-Res certificado. Drivers MagX de 50mm con imán de neodimio, sonido envolvente virtual 7.1 y micrófono cardioide con ENC. Compatible con PC, PS5, Switch, iOS y Android.',
    specs:{
      'DAC':'ESS 9281 Quad-Core 32-bit Hi-Res',
      'Driver':'MagX 50mm (imán neodimio)',
      'Sonido envolvente':'Virtual 7.1 · ROG Armoury Crate',
      'Micrófono':'Cardioide alta sensibilidad + ENC',
      'Conexión':'USB-C',
      'Plataformas':'PC · PS5 · Switch · iOS · Android',
      'SKU Megasur':'MGS0000033604'
    }
  },

  { id:219, name:'ASUS ROG Cetra TWS SpeedNova Negro', brand:'ASUS', category:'auriculares',
    price:262.9, oldPrice:310.2, badge: 'OFERTA',
    image:'img/productos/MGS0000033611-0.jpg',
    images: [
      'img/productos/MGS0000033611-0.jpg',
      'img/productos/MGS0000033611-1.jpg',
      'img/productos/1484-asus-rog-cetra-true-wireless-speednova-anc-auriculares-gaming-inalambricos-negros.jpg',
      'img/productos/2792-asus-rog-cetra-true-wireless-speednova-anc-auriculares-gaming-inalambricos-negros-comprar.jpg'
    ],
    description:'Auriculares True Wireless gaming de ASUS ROG con ANC híbrida y modo gaming de baja latencia. Bluetooth 5.3 con drivers ROG Triforce de 10mm, modo Transparencia, resistencia IPX4 y hasta 27h de autonomía (6h + 21h estuche). Control táctil y botón físico.',
    specs:{
      'Tipo':'True Wireless gaming · ANC híbrida',
      'Driver':'ROG Triforce 10mm',
      'Batería':'6h (auriculares) + 21h (estuche) = 27h',
      'Conectividad':'Bluetooth 5.3 · baja latencia gaming',
      'Resistencia':'IPX4 · control táctil + botón físico',
      'Transparencia':'Modo Transparencia integrado',
      'SKU Megasur':'MGS0000033611'
    }
  },

  // ── Logitech ─────────────────────────────────────────────────────────────

  { id:220, name:'Logitech Headset H110 Estéreo', brand:'Logitech', category:'auriculares',
    price:24.85, badge: 'OFERTA',
    image:'img/productos/981-000271-0.jpg',
    images: [
      'img/productos/981-000271-0.jpg',
      'img/productos/981-000271-1.jpg',
      'img/productos/981-000271-2.jpg',
      'img/productos/981-000271-3.jpg'
    ],
    description:'Auriculares con micrófono de Logitech con doble Jack 3.5mm (puerto PC gaming). Drivers de 20mm estéreo, micrófono boom flexible con cancelación de ruido, diseño plegable de 73g y control de volumen en cable. Sin driver necesario: plug & play en PC y portátiles.',
    specs:{
      'Tipo':'Cable doble Jack 3.5mm',
      'Driver':'20mm estéreo',
      'Micrófono':'Boom flexible con cancelación de ruido',
      'Control':'Volumen en cable',
      'Peso':'73g ultraligero plegable',
      'Plug & Play':'Sí (sin driver)',
      'SKU Megasur':'981-000271'
    }
  },

  { id:221, name:'Logitech Headset H340 USB', brand:'Logitech', category:'auriculares',
    price:57.9, oldPrice:68.3, badge: 'OFERTA',
    image:'img/productos/MGS0000033721-0.jpg',
    images: [
      'img/productos/MGS0000033721-0.jpg',
      'img/productos/MGS0000033721-1.jpg',
      'img/productos/MGS0000033721-2.jpg',
      'img/productos/MGS0000033721-3.jpg',
      'img/productos/MGS0000033721-4.jpg'
    ],
    description:'Auriculares USB de Logitech certificados para Microsoft Teams, Zoom y Google Meet. Procesamiento de audio digital sin driver, micrófono con cancelación de ruido y brazo ajustable, control de volumen y silencio en cable y almohadillas acolchadas suaves. Plug & play universal.',
    specs:{
      'Tipo':'Cable USB-A · Plug & Play',
      'Certificación':'Microsoft Teams · Zoom · Google Meet',
      'Micrófono':'Cancelación de ruido · brazo ajustable',
      'Control':'Volumen y silencio en cable',
      'SO':'Windows · macOS · ChromeOS',
      'Almohadillas':'Suaves acolchadas',
      'SKU Megasur':'MGS0000033721'
    }
  },

  { id:222, name:'Logitech Zone Wired USB', brand:'Logitech', category:'auriculares',
    price:175.25, oldPrice:206.8, badge: 'OFERTA',
    image:'img/productos/MGS0000025967-0.jpg',
    images: [
      'img/productos/MGS0000025967-0.jpg',
      'img/productos/MGS0000025967-1.jpg',
      'img/productos/MGS0000025967-2.jpg',
      'img/productos/MGS0000025967-3.jpg',
      'img/productos/MGS0000025967-4.jpg'
    ],
    description:'Auriculares profesionales de Logitech con micrófono de cancelación activa de ruido (ANC) para voz nítida en reuniones. Incluye 3 conexiones: USB-A, USB-C y Jack 3.5mm. Certificado para Microsoft Teams, Zoom, Google Meet y Cisco. Drivers de 40mm ajustados para voz.',
    specs:{
      'Tipo':'Cable 3-en-1 · USB-A / USB-C / Jack 3.5mm',
      'Micrófono':'ANC activa para reuniones',
      'Certificación':'Teams · Zoom · Google Meet · Cisco',
      'Driver':'40mm ajustados para claridad de voz',
      'Control':'Volumen y silencio on-ear',
      'SO':'Windows · macOS · Linux · ChromeOS',
      'SKU Megasur':'MGS0000025967'
    }
  },

  { id:223, name:'Logitech G733 Gaming Wireless Negro', brand:'Logitech', category:'auriculares',
    price:161.4, oldPrice:190.45, badge: 'OFERTA',
    image:'img/productos/MGS0000015732-0.jpg',
    images: [
      'img/productos/MGS0000015732-0.jpg',
      'img/productos/MGS0000015732-1.jpg',
      'img/productos/MGS0000015732-2.jpg',
      'img/productos/MGS0000015732-3.jpg'
    ],
    description:'Auriculares gaming inalámbricos de Logitech con tecnología LIGHTSPEED 2.4GHz y hasta 29 horas de batería. Micrófono boom giratorio con tecnología Blue VO!CE, RGB LIGHTSYNC personalizable, sonido DTS Headphone:X 2.0 de 7.1 canales y almohadillas de tela transpirable.',
    specs:{
      'Tipo':'Gaming inalámbrico LIGHTSPEED 2.4GHz',
      'Batería':'Hasta 29h de reproducción',
      'Micrófono':'Boom giratorio Blue VO!CE',
      'RGB':'LIGHTSYNC personalizable (G HUB)',
      'Sonido':'DTS Headphone:X 2.0 · 7.1 canales',
      'Almohadillas':'Tela transpirable reversible',
      'SKU Megasur':'MGS0000015732'
    }
  },

  { id:224, name:'Logitech PRO Gaming X Headset', brand:'Logitech', category:'auriculares',
    price:133.7, oldPrice:157.75, badge: 'OFERTA',
    image:'img/productos/MGS0000025666-0.jpg',
    images: [
      'img/productos/MGS0000025666-0.jpg'
    ],
    description:'Auriculares gaming USB de Logitech con drivers Pro-G de 50mm y membrana de fibra híbrida para un sonido preciso y potente. Micrófono Pro-G Supercardioid desprendible con tecnología Blue VO!CE, sonido envolvente DTS 7.1, almohadillas de espuma de memoria y construcción de acero inoxidable.',
    specs:{
      'Driver':'Pro-G 50mm · membrana fibra híbrida',
      'Micrófono':'Pro-G Supercardioid desprendible Blue VO!CE',
      'Sonido envolvente':'DTS Headphone:X 2.0 · 7.1 canales',
      'Almohadillas':'Espuma de memoria intercambiables',
      'Construcción':'Acero inoxidable',
      'Peso':'259g',
      'SKU Megasur':'MGS0000025666'
    }
  }

);






// ─── RELOJES INTELIGENTES (fuente: Megasur.es — junio 2026) ─────────────────
// 15 smartwatches verificados: Garmin (5) · MyPhone+Hammer (5) · Familia (5)
// Todos con SKU real de Megasur · Precio PVP de referencia de PCComponentes
PRODUCTS.push(

  // ── Garmin — GPS premium ──────────────────────────────────────────────────

  { id:26, name:'RELOJ SMARTWATCH GARMIN APPROACH, Reloj para Golf, Campos mundiales preinstalados, Bluetooth y Resistente al Agua, Blanco', brand:'Garmin', category:'relojes',
    price:262.6, oldPrice:309.85, badge: 'OFERTA',
    image:'img/productos/DSP0000005628-0.jpg',
    images: [
      'img/productos/DSP0000005628-0.jpg',
      'img/productos/DSP0000005628-1.jpg',
      'img/productos/DSP0000005628-2.jpg',
      'img/productos/DSP0000005628-3.jpg',
      'img/productos/DSP0000005628-4.jpg'
    ],
    description:'GPS especializado para golf · +41.000 campos mundiales',
    specs:{'Info':'GPS especializado para golf · +41.000 campos mundiales', 'Info':'Pantalla MIP 1.1" · Bluetooth · resistente al agua', 'Info':'Distancias precisas al verde · obstáculos · rango de llegada', 'Info':'Batería hasta 9h GPS · 12h modo reloj', 'Info':'Estadísticas hoyo a hoyo · puntuación digital', 'Info':'Compatible iOS y Android','SKU Megasur':'DSP0000005628'}
  },
  { id:27, name:'SMARTWATCH GARMIN FORERUNNER 165 43MM NEGRO GPS', brand:'Garmin', category:'relojes',
    price:310.15, oldPrice:366, badge: 'OFERTA',
    image:'img/productos/DSP0000029844-0.jpg',
    images: [
      'img/productos/DSP0000029844-0.jpg',
      'img/productos/DSP0000029844-1.jpg',
      'img/productos/DSP0000029844-2.jpg',
      'img/productos/DSP0000029844-3.jpg',
      'img/productos/DSP0000029844-4.jpg'
    ],
    description:'Pantalla AMOLED 1.2" táctil 390×390 · GPS multi-satélite',
    specs:{'Info':'Pantalla AMOLED 1.2" táctil 390×390 · GPS multi-satélite', 'Info':'FC óptico + SpO2 + estrés · hasta 11 días smartwatch', 'Info':'Hasta 19h GPS continuo · BT + WiFi', 'Métricas carrera avanzadas':'VO2max · cadencia', 'Info':'Planes de entrenamiento Garmin Coach · Garmin Pay NFC', 'Info':'Compatible iOS y Android','SKU Megasur':'DSP0000029844'}
  },
  { id:28, name:'SMARTWATCH GARMIN Forerunner 55 BT GPS 42mm MIP BLANCO Resistencia Agua 5ATM Pulsómetro Sueño', brand:'Garmin', category:'relojes',
    price:289.1, oldPrice:341.15, badge: 'OFERTA',
    image:'img/productos/MGS0000032958-0.jpg',
    images: [
      'img/productos/MGS0000032958-0.jpg',
      'img/productos/1281-garmin-forerunner-55-smartwatch-blanco-opiniones.jpg',
      'img/productos/2316-garmin-forerunner-55-smartwatch-blanco-review.jpg',
      'img/productos/3675-garmin-forerunner-55-smartwatch-blanco-foto.jpg'
    ],
    description:'Pantalla MIP 1.04" 208×208 · GPS integrado + GLONASS · 42mm',
    specs:{'Info':'Pantalla MIP 1.04" 208×208 · GPS integrado + GLONASS · 42mm', 'Info':'BT + WiFi · resistencia al agua 5ATM', 'Info':'FC óptico + SpO2 · seguimiento de sueño avanzado', 'Info':'Hasta 20h GPS activo · 2 semanas modo smartwatch', 'Info':'Planes de entrenamiento Garmin Coach para corredores', 'Info':'Compatible Garmin Pay · peso 49.7g','SKU Megasur':'MGS0000032958'}
  },
  { id:29, name:'SMARTWATCH GARMIN Forerunner 55 BT GPS 42mm MIP Negro Resistencia Agua 5ATM Pulsómetro Sueño', brand:'Garmin', category:'relojes',
    price:289.1, oldPrice:341.15, badge: 'OFERTA',
    image:'img/productos/MGS0000032959-0.jpg',
    images: [
      'img/productos/MGS0000032959-0.jpg',
      'img/productos/1109-garmin-forerunner-55-smartwatch-negro.jpg',
      'img/productos/2403-garmin-forerunner-55-smartwatch-negro-comprar.jpg',
      'img/productos/3343-garmin-forerunner-55-smartwatch-negro-mejor-precio.jpg'
    ],
    description:'Pantalla MIP 1.04" 208×208 · GPS integrado + GLONASS · 42mm',
    specs:{'Info':'Pantalla MIP 1.04" 208×208 · GPS integrado + GLONASS · 42mm', 'Info':'BT + WiFi · resistencia al agua 5ATM', 'Info':'FC óptico + SpO2 · seguimiento de sueño avanzado', 'Info':'Hasta 20h GPS activo · 2 semanas modo smartwatch', 'Info':'Planes de entrenamiento Garmin Coach para corredores', 'Info':'Compatible Garmin Pay · peso 49.7g','SKU Megasur':'MGS0000032959'}
  },
  { id:30, name:'Garmin Vívoactive 5, Smartwatch con GPS, Pantalla AMOLED, hasta 11 dias de autonomia', brand:'Garmin', category:'relojes',
    price:330.75, oldPrice:390.3, badge: 'OFERTA',
    image:'img/productos/DSP0000028241-0.jpg',
    images: [
      'img/productos/DSP0000028241-0.jpg',
      'img/productos/DSP0000028241-1.jpg',
      'img/productos/DSP0000028241-2.jpg',
      'img/productos/DSP0000028241-3.jpg',
      'img/productos/DSP0000028241-4.jpg'
    ],
    description:'Pantalla AMOLED 1.2" táctil · GPS + GLONASS + Galileo',
    specs:{'Info':'Pantalla AMOLED 1.2" táctil · GPS + GLONASS + Galileo', 'Info':'BT + WiFi + NFC Garmin Pay · hasta 11 días smartwatch', 'Info':'FC óptico 24h + SpO2 + variabilidad FC + estrés', 'Info':'Seguimiento de sueño avanzado · +25 deportes', 'Info':'Hasta 18h GPS continuo · altímetro barométrico', 'Info':'Diseño ultraligero · compatible Garmin Coach','SKU Megasur':'DSP0000028241'}
  },
  { id:231, name:'SMARTWATCH HAMMER WATCH 2 LITE BLACK', brand:'Hammer', category:'relojes',
    price:120.8, oldPrice:142.55, badge: 'OFERTA',
    image:'img/productos/DSP0000027299-0.jpg',
    description:'Pantalla IPS 1.6" · resistencia militar IP68',
    specs:{'Info':'Pantalla IPS 1.6" · resistencia militar IP68', 'Info':'Bluetooth 5.0 · FC óptico + SpO2 · podómetro', 'Info':'Monitorización de sueño · detección de actividad 24h', 'Info':'Batería hasta 5 días · recarga magnética', 'Info':'Alertas SOS · notificaciones de smartphone', 'Info':'Resistente a golpes y agua · diseño rugged outdoor','SKU Megasur':'DSP0000027299'}
  },
  // ── MyPhone + Hammer — Lifestyle y rugged ──────────────────────────────────

  { id:232, name:'RELOJ SMARTWATCH MYPHONE CAREWATCH 4G LTE NEGRO', brand:'MyPhone', category:'relojes',
    price:117.6, oldPrice:138.75, badge: 'OFERTA',
    image:'img/productos/DSP0000024070-0.jpg',
    description:'Smartwatch para mayores con 4G LTE y GPS integrado',
    specs:{'Info':'Smartwatch para mayores con 4G LTE y GPS integrado', 'Info':'Llamadas bidireccionales · botón SOS de emergencia', 'Info':'Detector de caídas automático · alertas de salud', 'Info':'FC óptico · podómetro · pantalla táctil grande', 'Info':'Diseño sencillo pensado para personas mayores', 'Info':'Compatible iOS y Android','SKU Megasur':'DSP0000024070'}
  },
  { id:233, name:'RELOJ SMARTWATCH MYPHONE WATCH ADVENTURE BLACK', brand:'MyPhone', category:'relojes',
    price:108.05, oldPrice:127.5, badge: 'OFERTA',
    image:'img/productos/DSP0000025695-0.jpg',
    description:'Smartwatch outdoor con GPS integrado · IP68',
    specs:{'Info':'Smartwatch outdoor con GPS integrado · IP68', 'Info':'Bluetooth 5.0 · FC óptico + SpO2 · podómetro', 'Info':'Pantalla 1.4" IPS color · múltiples modos deporte', 'Info':'Batería hasta 7 días en uso normal', 'Info':'Notificaciones de smartphone · diseño robusto', 'Info':'Compatible iOS y Android','SKU Megasur':'DSP0000025695'}
  },
  { id:234, name:'RELOJ SMARTWATCH MYPHONE PASTEL SILVER GREEN', brand:'MyPhone', category:'relojes',
    price:68, oldPrice:80.25, badge: 'OFERTA',
    image:'img/productos/DSP0000026342-0.jpg',
    description:'Pantalla 1.7" TFT color · Bluetooth 5.0',
    specs:{'Info':'Pantalla 1.7" TFT color · Bluetooth 5.0', 'Info':'FC óptico + SpO2 + podómetro · +100 modos deporte', 'Info':'Monitorización de sueño y estrés 24h', 'Info':'Batería hasta 5 días · recarga magnética', 'Info':'Diseño lifestyle moderno · modos multideporte', 'Info':'Compatible iOS y Android','SKU Megasur':'DSP0000026342'}
  },
  { id:235, name:'RELOJ SMARTWATCH MYPHONE TOOL BLACK GREEN', brand:'MyPhone', category:'relojes',
    price:58, oldPrice:68.45, badge: 'OFERTA',
    image:'img/productos/DSP0000026343-0.jpg',
    description:'Smartwatch robusto para trabajo y exteriores · IP68',
    specs:{'Info':'Smartwatch robusto para trabajo y exteriores · IP68', 'Info':'Bluetooth 5.0 · FC óptico + SpO2 + podómetro', 'Info':'Pantalla resistente 1.4" · alertas y notificaciones', 'Info':'Batería hasta 7 días en uso normal', 'Info':'Diseño tool resistente · color Negro/Verde', 'Info':'Compatible iOS y Android','SKU Megasur':'DSP0000026343'}
  },
  // ── Familia e infantil ──────────────────────────────────────────────────────

  { id:36, name:'SMARTWATCH SPC SMARTEE 4G KIDZ TURQUESA', brand:'SPC', category:'relojes',
    price:130.6, oldPrice:154.1, badge: 'OFERTA',
    image:'img/productos/DSP0000023066-0.jpg',
    images: [
      'img/productos/DSP0000023066-0.jpg',
      'img/productos/DSP0000023066-1.jpg',
      'img/productos/DSP0000023066-2.jpg'
    ],
    description:'Smartwatch infantil 4G con GPS antipérdida · nanoSIM',
    specs:{'Info':'Smartwatch infantil 4G con GPS antipérdida · nanoSIM', 'Info':'Llamadas bidireccionales · mensajes de voz y texto', 'Info':'Botón SOS con ubicación GPS en tiempo real', 'Info':'Control parental desde app SPC SMARTEE', 'Info':'Pantalla táctil · resistente al agua · cámara integrada', 'Info':'Para niños de 3 a 12 años · color Turquesa','SKU Megasur':'DSP0000023066'}
  },
  { id:37, name:'SMARTWATCH INFANTIL TCL MOVETIME MT48 GRIS', brand:'TCL', category:'relojes',
    price:230.6, oldPrice:272.1, badge: 'OFERTA',
    image:'img/productos/MGS0000033444-0.jpg',
    images: [
      'img/productos/MGS0000033444-0.jpg',
      'img/productos/MGS0000033444-1.jpg'
    ],
    description:'Smartwatch infantil 4G con GPS antipérdida · nanoSIM',
    specs:{'Info':'Smartwatch infantil 4G con GPS antipérdida · nanoSIM', 'Info':'Llamadas bidireccionales · cámara integrada', 'Info':'Botón SOS con ubicación GPS en tiempo real', 'Info':'Control parental desde app TCL MOVETIME', 'Info':'Pantalla táctil · resistente al agua', 'Info':'Para niños de 4 a 12 años · geovalla configurable','SKU Megasur':'MGS0000033444'}
  },
  { id:38, name:'SMARTWATCH LEOTEC LESWKIDS06K KIDS ALLO PLUS NEGRO', brand:'Leotec', category:'relojes',
    price:99.85, oldPrice:117.8, badge: 'OFERTA',
    image:'img/productos/DSP0000020100-0.jpg',
    images: [
      'img/productos/DSP0000020100-0.jpg',
      'img/productos/DSP0000020100-1.jpg',
      'img/productos/DSP0000020100-2.jpg',
      'img/productos/DSP0000020100-3.jpg',
      'img/productos/DSP0000020100-4.jpg'
    ],
    description:'GPS + LBS antipérdida · 4G LTE con ranura nanoSIM',
    specs:{'Info':'GPS + LBS antipérdida · 4G LTE con ranura nanoSIM', 'Info':'Llamadas bidireccionales · mensajes de voz', 'Info':'Cámara integrada · mensajes SOS con geolocalización', 'Info':'Resistencia IP67 · control parental app', 'Info':'Para niños de 4 a 12 años · pantalla táctil', 'Info':'Compatible iOS y Android','SKU Megasur':'DSP0000020100'}
  },
  { id:39, name:'RELOJ SMARTWATCH FOREVER IGO WATCH 3 JW-500 NEGRO', brand:'Forever', category:'relojes',
    price:56.45, oldPrice:66.6, badge: 'OFERTA',
    image:'img/productos/DSP0000026333-0.jpg',
    images: [
      'img/productos/DSP0000026333-0.jpg',
      'img/productos/DSP0000026333-1.jpg',
      'img/productos/DSP0000026333-2.jpg',
      'img/productos/DSP0000026333-3.jpg',
      'img/productos/DSP0000026333-4.jpg'
    ],
    description:'Pantalla AMOLED · Bluetooth 5.0 · diseño slim',
    specs:{'Info':'Pantalla AMOLED · Bluetooth 5.0 · diseño slim', 'Info':'FC óptico 24h + SpO2 + estrés · monitorización de sueño', 'Info':'Más de 20 modos de deporte · podómetro + calorías', 'Info':'Batería hasta 5-7 días · recarga magnética', 'Info':'Notificaciones de smartphone', 'Info':'Compatible iOS y Android','SKU Megasur':'DSP0000026333'}
  },
  { id:40, name:'RELOJ SMARTWATCH FOREVER IGO WATCH 3 JW-500 ROJO', brand:'Forever', category:'relojes',
    price:56.45, oldPrice:66.6, badge: 'OFERTA',
    image:'img/productos/DSP0000026334-0.jpg',
    images: [
      'img/productos/DSP0000026334-0.jpg',
      'img/productos/DSP0000026334-1.jpg',
      'img/productos/DSP0000026334-2.jpg',
      'img/productos/DSP0000026334-3.jpg',
      'img/productos/DSP0000026334-4.jpg'
    ],
    description:'Pantalla AMOLED · Bluetooth 5.0 · diseño slim',
    specs:{'Info':'Pantalla AMOLED · Bluetooth 5.0 · diseño slim', 'Info':'FC óptico 24h + SpO2 + estrés · monitorización de sueño', 'Info':'Más de 20 modos de deporte · podómetro + calorías', 'Info':'Batería hasta 5-7 días · recarga magnética', 'Info':'Notificaciones de smartphone', 'Info':'Compatible iOS y Android','SKU Megasur':'DSP0000026334'}
  }
);



// ─── SAMSUNG & XIAOMI (fuente: Infortisa — junio 2026) ───────────────────────
PRODUCTS.push(

  { id:41, name:'Samsung Galaxy Fit3 1.6" 40mm BT Gray', brand:'Samsung', category:'relojes',
    price:64.35, oldPrice:75.95, badge: 'OFERTA',
    image:'/images/products/infortisa-41.webp',
    images: [
      '/images/products/infortisa-41.webp'
    ],
    description:'Samsung Galaxy Fit3 1,6” AMOLED · BT 5.3 · hasta 13 días · 5 ATM · monitor cardíaco 24/7',
    specs:{'Info':'Samsung Galaxy Fit3 1,6” AMOLED · BT 5.3 · hasta 13 días · 5 ATM · monitor cardíaco 24/7','SKU Infortisa':'samsung-galaxy-fit3-1-6-40mm-bt-gray010626115503'}
  },
  { id:42, name:'Samsung Galaxy Fit3 1.6" 40mm BT Pink', brand:'Samsung', category:'relojes',
    price:64.35, oldPrice:75.95, badge: 'OFERTA',
    image:'/images/products/infortisa-42.webp',
    images: [
      '/images/products/infortisa-42.webp'
    ],
    description:'Samsung Galaxy Fit3 1,6” AMOLED · BT 5.3 · hasta 13 días · 5 ATM · color Pink',
    specs:{'Info':'Samsung Galaxy Fit3 1,6” AMOLED · BT 5.3 · hasta 13 días · 5 ATM · color Pink','SKU Infortisa':'samsung-galaxy-fit3-1-6-40mm-bt-pink010626115503'}
  },
  { id:43, name:'Samsung Galaxy Watch7 40mm Wi-Fi BT NFC Green', brand:'Samsung', category:'relojes',
    price:272.15, oldPrice:321.15, badge: 'OFERTA',
    image:'/images/products/infortisa-43.webp',
    images: [
      '/images/products/infortisa-43.webp'
    ],
    description:'Samsung Galaxy Watch7 40mm · Super AMOLED · Wi-Fi + BT + NFC + GPS · Galaxy AI · 5 ATM',
    specs:{'Info':'Samsung Galaxy Watch7 40mm · Super AMOLED · Wi-Fi + BT + NFC + GPS · Galaxy AI · 5 ATM','SKU Infortisa':'samsung-galaxy-watch7-40mm-wi-fi-bt-nfc-green010626115502'}
  },
  { id:44, name:'Samsung Galaxy Watch7 44mm Wi-Fi BT NFC Green', brand:'Samsung', category:'relojes',
    price:426.3, oldPrice:503.05, badge: 'OFERTA',
    image:'/images/products/infortisa-44.webp',
    images: [
      '/images/products/infortisa-44.webp'
    ],
    description:'Samsung Galaxy Watch7 44mm · Super AMOLED · Wi-Fi + BT + NFC + GPS · Galaxy AI · 5 ATM',
    specs:{'Info':'Samsung Galaxy Watch7 44mm · Super AMOLED · Wi-Fi + BT + NFC + GPS · Galaxy AI · 5 ATM','SKU Infortisa':'samsung-galaxy-watch7-44mm-wi-fi-bt-nfc-green010626115502'}
  },
  { id:45, name:'Xiaomi Redmi Watch 5 Active Plata Mate', brand:'Xiaomi', category:'relojes',
    price:51.5, oldPrice:60.75, badge: 'OFERTA',
    image:'/images/products/infortisa-45.webp',
    images: [
      '/images/products/infortisa-45.webp'
    ],
    description:'Xiaomi Redmi Watch 5 Active 2” LCD · GPS integrado · BT 5.3 · hasta 20 días · 5 ATM',
    specs:{'Info':'Xiaomi Redmi Watch 5 Active 2” LCD · GPS integrado · BT 5.3 · hasta 20 días · 5 ATM','SKU Infortisa':'xiaomi-redmi-watch-5-active-plata-mate181024095502'}
  },
  { id:46, name:'XIAOMI Pulsera MI Smart Band 10 Glacier Silver', brand:'Xiaomi', category:'relojes',
    price:64.35, oldPrice:75.95, badge: 'OFERTA',
    image:'/images/products/infortisa-46.webp',
    images: [
      '/images/products/infortisa-46.webp'
    ],
    description:'Xiaomi MI Smart Band 10 AMOLED 1,47” · BT 5.4 · hasta 8 días · iOS 14+ / Android 8+',
    specs:{'Info':'Xiaomi MI Smart Band 10 AMOLED 1,47” · BT 5.4 · hasta 8 días · iOS 14+ / Android 8+','SKU Infortisa':'xiaomi-pulsera-mi-smart-band-10-glacier-silver020725095503'}
  },
  { id:47, name:'XIAOMI Pulsera MI Smart Band 10 Midnight Black', brand:'Xiaomi', category:'relojes',
    price:64.35, oldPrice:75.95, badge: 'OFERTA',
    image:'/images/products/infortisa-47.webp',
    images: [
      '/images/products/infortisa-47.webp'
    ],
    description:'Xiaomi MI Smart Band 10 AMOLED 1,47” · BT 5.4 · hasta 8 días · color Midnight Black',
    specs:{'Info':'Xiaomi MI Smart Band 10 AMOLED 1,47” · BT 5.4 · hasta 8 días · color Midnight Black','SKU Infortisa':'xiaomi-pulsera-mi-smart-band-10-midnight-black020725095502'}
  },
  { id:48, name:'XIAOMI Pulsera MI Smart Band 10 Mystic Rose', brand:'Xiaomi', category:'relojes',
    price:64.35, oldPrice:75.95, badge: 'OFERTA',
    image:'/images/products/infortisa-48.webp',
    images: [
      '/images/products/infortisa-48.webp'
    ],
    description:'Xiaomi MI Smart Band 10 AMOLED 1,47” · BT 5.4 · hasta 8 días · color Mystic Rose',
    specs:{'Info':'Xiaomi MI Smart Band 10 AMOLED 1,47” · BT 5.4 · hasta 8 días · color Mystic Rose','SKU Infortisa':'xiaomi-pulsera-mi-smart-band-10-mystic-rose020725095502'}
  }
);


// ─── PERIFÉRICOS GAMING (fuente: Megasur.es — junio 2026) ──────────────────
// 29 teclados gaming verificados: 7 marcas × 5 productos
PRODUCTS.push(

  // ── ASUS ─────────────────────────────────────────────────────

  { id:59, name:'TECLADO ASUS TUF GAMING K1 RGB NEGRO', brand:'ASUS', category:'teclados gaming',
    price:127.1, oldPrice:150, badge: 'OFERTA',
    image:'img/productos/MGS0000033622-0.jpg',
    images: [
      'img/productos/MGS0000033622-0.jpg',
      'img/productos/MGS0000033622-1.jpg',
      'img/productos/MGS0000033622-2.jpg',
      'img/productos/MGS0000033622-3.jpg',
      'img/productos/MGS0000033622-4.jpg'
    ],
    description:'Switch: Consultar ficha',
    specs:{'Switch':'Consultar ficha', 'Iluminación':'RGB por tecla', 'Conexión':'USB-A cableado', 'Layout':'QWERTY (ver descripción)', 'Anti-ghosting':'Sí (gaming)','SKU Megasur':'MGS0000033622'}
  },
  { id:60, name:'TECLADO ASUS TUF GAMING K3 GEN II RGB NEGRO', brand:'ASUS', category:'teclados gaming',
    price:178.3, oldPrice:210.4, badge: 'OFERTA',
    image:'img/productos/MGS0000033630-0.jpg',
    images: [
      'img/productos/MGS0000033630-0.jpg',
      'img/productos/MGS0000033630-2.jpg',
      'img/productos/MGS0000033630-3.jpg',
      'img/productos/MGS0000033630-4.jpg'
    ],
    description:'Switch: Consultar ficha',
    specs:{'Switch':'Consultar ficha', 'Iluminación':'RGB por tecla', 'Conexión':'USB-A cableado', 'Layout':'QWERTY (ver descripción)', 'Anti-ghosting':'Sí (gaming)','SKU Megasur':'MGS0000033630'}
  },
  { id:61, name:'TECLADO ASUS TUF GAMING K3 GEN II HATSUNE MIKU EDITION RGB', brand:'ASUS', category:'teclados gaming',
    price:109.99, oldPrice:129.79, badge: 'OFERTA',
    image:'img/productos/MGS0000033632-0.jpg',
    images: [
      'img/productos/MGS0000033632-0.jpg',
      'img/productos/MGS0000033632-2.jpg',
      'img/productos/MGS0000033632-3.jpg',
      'img/productos/MGS0000033632-4.jpg'
    ],
    description:'Switch: Consultar ficha',
    specs:{'Switch':'Consultar ficha', 'Iluminación':'RGB por tecla', 'Conexión':'USB-A cableado', 'Layout':'QWERTY (ver descripción)', 'Anti-ghosting':'Sí (gaming)','SKU Megasur':'MGS0000033632'}
  },
  { id:49, name:'TECLADO GAMING ASUS ROG STRIX SCOPE II X RGB NEGRO', brand:'ASUS', category:'teclados gaming',
    price:292.15, oldPrice:344.75, badge: 'OFERTA',
    image:'img/productos/MGS0000033634-0.jpg',
    images: [
      'img/productos/MGS0000033634-0.jpg',
      'img/productos/MGS0000033634-2.jpg',
      'img/productos/MGS0000033634-3.jpg',
      'img/productos/MGS0000033634-4.jpg'
    ],
    description:'Switch: Consultar ficha',
    specs:{'Switch':'Consultar ficha', 'Iluminación':'RGB por tecla', 'Conexión':'USB-A cableado', 'Layout':'QWERTY (ver descripción)', 'Anti-ghosting':'Sí (gaming)','SKU Megasur':'MGS0000033634'}
  },
  { id:50, name:'TECLADO GAMING ASUS ROG FALCHION ACE HFX ZywOo EDITION RGB INGLES', brand:'ASUS', category:'teclados gaming',
    price:406.25, oldPrice:479.4, badge: 'OFERTA',
    image:'img/productos/MGS0000033636-0.jpg',
    images: [
      'img/productos/MGS0000033636-0.jpg',
      'img/productos/MGS0000033636-2.jpg',
      'img/productos/MGS0000033636-3.jpg',
      'img/productos/MGS0000033636-4.jpg'
    ],
    description:'Switch: Consultar ficha',
    specs:{'Switch':'Consultar ficha', 'Iluminación':'RGB por tecla', 'Conexión':'USB-A cableado', 'Layout':'QWERTY (ver descripción)', 'Anti-ghosting':'Sí (gaming)','SKU Megasur':'MGS0000033636'}
  },
  { id:51, name:'TECLADO GAMING ASUS ROG FALCHION ACE 75 HE RGB NEGRO', brand:'ASUS', category:'teclados gaming',
    price:424.4, oldPrice:500.8, badge: 'OFERTA',
    image:'img/productos/MGS0000033638-0.jpg',
    images: [
      'img/productos/MGS0000033638-0.jpg',
      'img/productos/MGS0000033638-2.jpg',
      'img/productos/MGS0000033638-3.jpg',
      'img/productos/MGS0000033638-4.jpg'
    ],
    description:'Switch: Consultar ficha',
    specs:{'Switch':'Consultar ficha', 'Iluminación':'RGB por tecla', 'Conexión':'USB-A cableado', 'Layout':'QWERTY (ver descripción)', 'Anti-ghosting':'Sí (gaming)','SKU Megasur':'MGS0000033638'}
  },
  { id:52, name:'TECLADO ASUS ROG STRIX SCOPE II 96 RX INHALLAMBRICO', brand:'ASUS', category:'teclados gaming',
    price:219.99, oldPrice:259.59, badge: 'OFERTA',
    image:'img/productos/MGS0000033860-0.jpg',
    images: [
      'img/productos/MGS0000033860-0.jpg',
      'img/productos/1411-asus-rog-strix-scope-ii-96-rx-teclado-mecanico-gaming-inalambrico-switch-rog-rx-red-optical-negro.jpg',
      'img/productos/2732-asus-rog-strix-scope-ii-96-rx-teclado-mecanico-gaming-inalambrico-switch-rog-rx-red-optical-negro-comprar.jpg',
      'img/productos/3255-asus-rog-strix-scope-ii-96-rx-teclado-mecanico-gaming-inalambrico-switch-rog-rx-red-optical-negro-mejor-precio.jpg'
    ],
    description:'Switch: Consultar ficha',
    specs:{'Switch':'Consultar ficha', 'Conexión':'USB-A cableado', 'Layout':'QWERTY (ver descripción)', 'Anti-ghosting':'Sí (gaming)','SKU Megasur':'MGS0000033860'}
  },
  { id:53, name:'TECLADO GAMING ASUS ROG STRIX SCOPE II 96 INALAMBRICO RGB NEGRO', brand:'ASUS', category:'teclados gaming',
    price:351.85, oldPrice:415.2, badge: 'OFERTA',
    image:'img/productos/MGS0000033626-0.jpg',
    images: [
      'img/productos/MGS0000033626-0.jpg',
      'img/productos/MGS0000033626-1.jpg',
      'img/productos/MGS0000033626-2.jpg',
      'img/productos/MGS0000033626-3.jpg',
      'img/productos/MGS0000033626-4.jpg'
    ],
    description:'Switch: Consultar ficha',
    specs:{'Switch':'Consultar ficha', 'Iluminación':'RGB por tecla', 'Conexión':'USB-A cableado', 'Layout':'QWERTY (ver descripción)', 'Anti-ghosting':'Sí (gaming)','SKU Megasur':'MGS0000033626'}
  },
  // ── LOGITECH ─────────────────────────────────────────────────────

  { id:54, name:'TECLADO LOGITECH G213 GAMING CON ILUMINACION', brand:'LOGITECH', category:'teclados gaming',
    price:115.65, oldPrice:136.45, badge: 'OFERTA',
    image:'img/productos/920-008086-0.jpg',
    images: [
      'img/productos/920-008086-0.jpg',
      'img/productos/920-008086-1.jpg',
      'img/productos/920-008086-2.jpg',
      'img/productos/920-008086-3.jpg',
      'img/productos/920-008086-4.jpg'
    ],
    description:'Switch: Consultar ficha',
    specs:{'Switch':'Consultar ficha', 'Conexión':'USB-A cableado', 'Layout':'QWERTY (ver descripción)', 'Anti-ghosting':'Sí (gaming)','SKU Megasur':'920-008086'}
  },
  { id:55, name:'TECLADO GAMING LOGITECH G413 SE MECANICO USB NEGRO', brand:'LOGITECH', category:'teclados gaming',
    price:171.7, oldPrice:202.6, badge: 'OFERTA',
    image:'img/productos/MGS0000019748-0.jpg',
    images: [
      'img/productos/MGS0000019748-0.jpg',
      'img/productos/MGS0000019748-1.jpg',
      'img/productos/MGS0000019748-2.jpg'
    ],
    description:'Switch: Mecánico',
    specs:{'Switch':'Mecánico', 'Conexión':'USB-A cableado', 'Layout':'QWERTY (ver descripción)', 'Anti-ghosting':'Sí (gaming)','SKU Megasur':'MGS0000019748'}
  },
  { id:56, name:'TECLADO LOGITECH GAMING G512 USB', brand:'LOGITECH', category:'teclados gaming',
    price:139.52, oldPrice:164.63, badge: 'OFERTA',
    image:'img/productos/MGS0000020626-0.jpg',
    images: [
      'img/productos/MGS0000020626-0.jpg',
      'img/productos/MGS0000020626-1.jpg',
      'img/productos/MGS0000020626-2.jpg',
      'img/productos/MGS0000020626-3.jpg'
    ],
    description:'Switch: Consultar ficha',
    specs:{'Switch':'Consultar ficha', 'Conexión':'USB-A cableado', 'Layout':'QWERTY (ver descripción)', 'Anti-ghosting':'Sí (gaming)','SKU Megasur':'MGS0000020626'}
  },
  { id:57, name:'TECLADO LOGITECH G513 GAMING USB NEGRO CARBON', brand:'LOGITECH', category:'teclados gaming',
    price:133.25, oldPrice:157.25, badge: 'OFERTA',
    image:'img/productos/MGS0000032591-0.jpg',
    images: [
      'img/productos/MGS0000032591-0.jpg',
      'img/productos/MGS0000032591-1.jpg'
    ],
    description:'Switch: Consultar ficha',
    specs:{'Switch':'Consultar ficha', 'Conexión':'USB-A cableado', 'Layout':'QWERTY (ver descripción)', 'Anti-ghosting':'Sí (gaming)','SKU Megasur':'MGS0000032591'}
  },
  { id:78, name:'TECLADO LOGITECH G G915 X LIGHTSPEED INALAMBRICO', brand:'LOGITECH', category:'teclados gaming',
    price:159.99, oldPrice:188.79, badge: 'OFERTA',
    image:'img/productos/MGS0000032592-0.jpg',
    images: [
      'img/productos/MGS0000032592-0.jpg',
      'img/productos/1627-logitech-g915-x-lightspeed-teclado-mecanico-gaming-inalambrico-gl-tactile-pbt-negro.jpg',
      'img/productos/2425-logitech-g915-x-lightspeed-teclado-mecanico-gaming-inalambrico-gl-tactile-pbt-negro-comprar.jpg',
      'img/productos/3435-logitech-g915-x-lightspeed-teclado-mecanico-gaming-inalambrico-gl-tactile-pbt-negro-mejor-precio.jpg'
    ],
    description:'Switch: GL Táctil (low-profile)',
    specs:{'Switch':'GL Táctil (low-profile)', 'Iluminación':'RGB LIGHTSYNC per-key', 'Conexión':'Inalámbrica LIGHTSPEED 1ms + Bluetooth', 'Formato':'Full-Size', 'Layout':'QWERTY', 'Anti-ghosting':'Sí (gaming)','SKU Megasur':'MGS0000032592'}
  },
  // ── MARS GAMING ─────────────────────────────────────────────────────

  { id:262, name:'TECLADO MARS GAMING MK320ES USB RGB MECANICO', brand:'MARS GAMING', category:'teclados gaming',
    price:28, oldPrice:33.05, badge: 'OFERTA',
    image:'img/productos/DSP0000009116-0.jpg',
    description:'Switch: Mecánico',
    specs:{'Switch':'Mecánico', 'Iluminación':'RGB por tecla', 'Conexión':'USB-A cableado', 'Layout':'QWERTY (ver descripción)', 'Anti-ghosting':'Sí (gaming)','SKU Megasur':'DSP0000009116'}
  },
  { id:263, name:'TECLADO MARS GAMING MK124', brand:'MARS GAMING', category:'teclados gaming',
    price:31.35, oldPrice:37, badge: 'OFERTA',
    image:'img/productos/DSP0000031004-0.jpg',
    description:'Switch: Consultar ficha',
    specs:{'Switch':'Consultar ficha', 'Conexión':'USB-A cableado', 'Layout':'QWERTY (ver descripción)', 'Anti-ghosting':'Sí (gaming)','SKU Megasur':'DSP0000031004'}
  },
  { id:264, name:'TECLADO MARS GAMING MK124 BLANCO', brand:'MARS GAMING', category:'teclados gaming',
    price:33.35, oldPrice:39.35, badge: 'OFERTA',
    image:'img/productos/DSP0000031005-0.jpg',
    description:'Switch: Consultar ficha',
    specs:{'Switch':'Consultar ficha', 'Conexión':'USB-A cableado', 'Layout':'QWERTY (ver descripción)', 'Anti-ghosting':'Sí (gaming)','SKU Megasur':'DSP0000031005'}
  },
  { id:265, name:'KIT TECLADO + RATON MARS GAMING MCPTKLES RGB', brand:'MARS GAMING', category:'teclados gaming',
    price:42.15, oldPrice:49.75, badge: 'OFERTA',
    image:'img/productos/DSP0000008843-0.jpg',
    description:'Switch: Consultar ficha',
    specs:{'Switch':'Consultar ficha', 'Iluminación':'RGB por tecla', 'Conexión':'USB-A cableado', 'Layout':'QWERTY (ver descripción)', 'Anti-ghosting':'Sí (gaming)','SKU Megasur':'DSP0000008843'}
  },
  { id:266, name:'TECLADO MARS GAMING MK-SILENKEYSES', brand:'MARS GAMING', category:'teclados gaming',
    price:19.9, oldPrice:23.48, badge: 'OFERTA',
    image:'img/productos/DSP0000038078-0.jpg',
    description:'Switch: Consultar ficha',
    specs:{'Switch':'Consultar ficha', 'Conexión':'USB-A cableado', 'Layout':'QWERTY (ver descripción)', 'Anti-ghosting':'Sí (gaming)','SKU Megasur':'DSP0000038078'}
  },
  // ── PHOENIX TECHNOLOGIES ─────────────────────────────────────────────────────

  { id:67, name:'Teclado Gaming Royal PBT Mecanico Negro', brand:'PHOENIX TECHNOLOGIES', category:'teclados gaming',
    price:102.75, oldPrice:121.25, badge: 'OFERTA',
    image:'img/productos/DSP0000017092-0.jpg',
    images: [
      'img/productos/DSP0000017092-0.jpg',
      'img/productos/DSP0000017092-1.jpg',
      'img/productos/DSP0000017092-2.jpg',
      'img/productos/DSP0000017092-3.jpg',
      'img/productos/DSP0000017092-4.jpg'
    ],
    description:'Switch: Mecánico',
    specs:{'Switch':'Mecánico', 'Conexión':'USB-A cableado', 'Layout':'QWERTY (ver descripción)', 'Anti-ghosting':'Sí (gaming)','SKU Megasur':'DSP0000017092'}
  },
  { id:68, name:'Teclado Gaming Royal PBT Mecanico Blanco', brand:'PHOENIX TECHNOLOGIES', category:'teclados gaming',
    price:102.75, oldPrice:121.25, badge: 'OFERTA',
    image:'img/productos/DSP0000017093-0.jpg',
    images: [
      'img/productos/DSP0000017093-0.jpg',
      'img/productos/DSP0000017093-1.jpg',
      'img/productos/DSP0000017093-2.jpg',
      'img/productos/DSP0000017093-3.jpg',
      'img/productos/DSP0000017093-4.jpg'
    ],
    description:'Switch: Mecánico',
    specs:{'Switch':'Mecánico', 'Conexión':'USB-A cableado', 'Layout':'QWERTY (ver descripción)', 'Anti-ghosting':'Sí (gaming)','SKU Megasur':'DSP0000017093'}
  },
  // ── GENESIS ─────────────────────────────────────────────────────

  { id:69, name:'TECLADO GAMING GENESIS RHOD 350 RGB USB', brand:'GENESIS', category:'teclados gaming',
    price:11.99, oldPrice:14.15, badge: 'OFERTA',
    image:'img/productos/DSP0000003250-0.jpg',
    images: [
      'img/productos/DSP0000003250-0.jpg',
      'img/productos/DSP0000003250-1.jpg',
      'img/productos/DSP0000003250-2.jpg',
      'img/productos/DSP0000003250-3.jpg'
    ],
    description:'Switch: Consultar ficha',
    specs:{'Switch':'Consultar ficha', 'Iluminación':'RGB por tecla', 'Conexión':'USB-A cableado', 'Layout':'QWERTY (ver descripción)', 'Anti-ghosting':'Sí (gaming)','SKU Megasur':'DSP0000003250'}
  },
  { id:70, name:'TECLADO GAMING GENESIS RHOD 500 RGB ESPAÑOL USB', brand:'GENESIS', category:'teclados gaming',
    price:16.14, oldPrice:19.05, badge: 'OFERTA',
    image:'img/productos/DSP0000000581-0.jpg',
    images: [
      'img/productos/DSP0000000581-0.jpg',
      'img/productos/DSP0000000581-2.jpg',
      'img/productos/DSP0000000581-3.jpg'
    ],
    description:'Switch: Consultar ficha',
    specs:{'Switch':'Consultar ficha', 'Iluminación':'RGB por tecla', 'Conexión':'USB-A cableado', 'Layout':'Español QWERTY', 'Anti-ghosting':'Sí (gaming)','SKU Megasur':'DSP0000000581'}
  },
  { id:71, name:'TECLADO GAMING GENESIS RHOD 500 RGB PORTUGUES USB', brand:'GENESIS', category:'teclados gaming',
    price:22.99, oldPrice:27.13, badge: 'OFERTA',
    image:'img/productos/DSP0000003246-0.jpg',
    images: [
      'img/productos/DSP0000003246-0.jpg',
      'img/productos/DSP0000003246-1.jpg',
      'img/productos/DSP0000003246-2.jpg'
    ],
    description:'Switch: Consultar ficha',
    specs:{'Switch':'Consultar ficha', 'Iluminación':'RGB por tecla', 'Conexión':'USB-A cableado', 'Layout':'QWERTY (ver descripción)', 'Anti-ghosting':'Sí (gaming)','SKU Megasur':'DSP0000003246'}
  },
  { id:72, name:'TECLADO GAMING GENESIS THOR230 TKL RGB USB', brand:'GENESIS', category:'teclados gaming',
    price:59.99, oldPrice:70.79, badge: 'OFERTA',
    image:'img/productos/DSP0000029539-0.jpg',
    images: [
      'img/productos/DSP0000029539-0.jpg',
      'img/productos/DSP0000029539-1.jpg',
      'img/productos/DSP0000029539-2.jpg',
      'img/productos/DSP0000029539-3.jpg',
      'img/productos/DSP0000029539-4.jpg'
    ],
    description:'Switch: Consultar ficha',
    specs:{'Switch':'Consultar ficha', 'Iluminación':'RGB por tecla', 'Conexión':'USB-A cableado', 'Formato':'TKL Sin numpad', 'Layout':'QWERTY (ver descripción)', 'Anti-ghosting':'Sí (gaming)','SKU Megasur':'DSP0000029539'}
  },
  // ── CORSAIR ─────────────────────────────────────────────────────

  { id:77, name:'TECLADO GAMING CORSAIR USB K55 CORE RGB', brand:'CORSAIR', category:'teclados gaming',
    price:110.95, oldPrice:130.9, badge: 'OFERTA',
    image:'img/productos/DSP0000038844-0.jpg',
    images: [
      'img/productos/DSP0000038844-0.jpg',
      'img/productos/DSP0000038844-1.jpg'
    ],
    description:'Switch: Gaming',
    specs:{'Switch':'Gaming', 'Iluminación':'RGB por tecla', 'Conexión':'USB-A cableado', 'Layout':'QWERTY', 'Anti-ghosting':'Sí (gaming)','SKU Megasur':'DSP0000038844'}
  },
  { id:74, name:'TECLADO GAMING CORSAIR K55 CORE TKL RGB NEGRO', brand:'CORSAIR', category:'teclados gaming',
    price:49.99, oldPrice:58.99, badge: 'OFERTA',
    image:'img/productos/DSP0000035833-0.jpg',
    images: [
      'img/productos/DSP0000035833-0.jpg',
      'img/productos/1646-teclado-de-membrana-corsair-k55-core-tkl-layout-es-rgb-resistente-a-derrames.jpg'
    ],
    description:'Switch: Gaming',
    specs:{'Switch':'Gaming', 'Iluminación':'RGB por tecla', 'Conexión':'USB-A cableado', 'Formato':'TKL Sin numpad', 'Layout':'QWERTY', 'Anti-ghosting':'Sí (gaming)','SKU Megasur':'DSP0000035833'}
  },
  { id:73, name:'TECLADO GAMING CORSAIR K55 RGB PRO', brand:'CORSAIR', category:'teclados gaming',
    price:64.98, oldPrice:76.68, badge: 'OFERTA',
    image:'img/productos/DSP0000032320-0.jpg',
    images: [
      'img/productos/DSP0000032320-0.jpg',
      'img/productos/1375-corsair-k55-rgb-pro-teclado-gaming-retroiluminado-negro-cb8de173-d174-4b9e-8579-f8e4dc64510d.jpg',
      'img/productos/2989-corsair-k55-rgb-pro-teclado-gaming-retroiluminado-negro-727bbe4a-a089-43f2-9f63-700634110ac9.jpg',
      'img/productos/3535-corsair-k55-rgb-pro-teclado-gaming-retroiluminado-negro-0ba78428-5323-43c2-ac6d-b66e691e7d78.jpg'
    ],
    description:'Switch: Gaming',
    specs:{'Switch':'Gaming', 'Iluminación':'RGB por tecla', 'Conexión':'USB-A cableado', 'Layout':'QWERTY', 'Anti-ghosting':'Sí (gaming)','SKU Megasur':'DSP0000032320'}
  },
  { id:76, name:'TECLADO GAMING CORSAIR USB K70 CORE NEGRO', brand:'CORSAIR', category:'teclados gaming',
    price:159.55, oldPrice:188.25, badge: 'OFERTA',
    image:'img/productos/DSP0000038461-0.jpg',
    images: [
      'img/productos/DSP0000038461-0.jpg',
      'img/productos/1312-corsair-k70-core-teclado-mecanico-gaming-rgb-switch-mlx-red-negro.jpg',
      'img/productos/267-corsair-k70-core-teclado-mecanico-gaming-rgb-switch-mlx-red-negro-comprar.jpg',
      'img/productos/3781-corsair-k70-core-teclado-mecanico-gaming-rgb-switch-mlx-red-negro-mejor-precio.jpg'
    ],
    description:'Switch: Gaming',
    specs:{'Switch':'Gaming', 'Conexión':'USB-A cableado', 'Layout':'QWERTY', 'Anti-ghosting':'Sí (gaming)','SKU Megasur':'DSP0000038461'}
  },
  { id:75, name:'TECLADO GAMING CORSAIR K70 CORE TKL INALAMBRICO', brand:'CORSAIR', category:'teclados gaming',
    price:293.25, oldPrice:346.05, badge: 'OFERTA',
    image:'img/productos/DSP0000038098-0.jpg',
    images: [
      'img/productos/DSP0000038098-0.jpg',
      'img/productos/1703-corsair-k70-core-tkl-teclado-mecanico-gaming-inalambrico-rgb-switch-mlx-red-v2-negro.jpg',
      'img/productos/2573-corsair-k70-core-tkl-teclado-mecanico-gaming-inalambrico-rgb-switch-mlx-red-v2-negro-comprar.jpg',
      'img/productos/3601-corsair-k70-core-tkl-teclado-mecanico-gaming-inalambrico-rgb-switch-mlx-red-v2-negro-mejor-precio.jpg'
    ],
    description:'Switch: Gaming',
    specs:{'Switch':'Gaming', 'Conexión':'USB-A cableado', 'Formato':'TKL Sin numpad', 'Layout':'QWERTY', 'Anti-ghosting':'Sí (gaming)','SKU Megasur':'DSP0000038098'}
  },

  // ── 5 TECLADOS NUEVOS (añadidos 2026-07-18) ─────────────────────────────

  { id:267, name:'TECLADO GAMING ASUS ROG STRIX SCOPE II RGB NEGRO', brand:'ASUS', category:'teclados gaming',
    price:311.15, oldPrice:367.15, badge: 'OFERTA',
    image:'img/productos/MGS0000033628-0.jpg',
    images: [
      'img/productos/MGS0000033628-0.jpg',
      'img/productos/MGS0000033628-2.jpg',
      'img/productos/MGS0000033628-3.jpg'
    ],
    description:'Switch: Consultar ficha',
    specs:{'Switch':'Consultar ficha', 'Iluminación':'RGB por tecla', 'Conexión':'USB-A cableado', 'Formato':'Full-Size', 'Layout':'QWERTY (ver descripción)', 'Anti-ghosting':'Sí (gaming)', 'SKU Megasur':'MGS0000033628'}
  },

  { id:268, name:'TECLADO GAMING CHERRY MX 6.0 MK6601 RGB NEGRO', brand:'CHERRY', category:'teclados gaming',
    price:185.70, oldPrice:219.15, badge: 'OFERTA',
    image:'img/productos/cherry-mx60-gaming-negro-0.jpg',
    images: [
      'img/productos/cherry-mx60-gaming-negro-0.jpg',
      'img/productos/cherry-mx60-gaming-negro-1.jpg',
      'img/productos/cherry-mx60-gaming-negro-2.jpg',
      'img/productos/cherry-mx60-gaming-negro-3.jpg'
    ],
    description:'Switch: Cherry MX Red (lineal)',
    specs:{'Switch':'Cherry MX Red', 'Iluminación':'RGB por tecla', 'Conexión':'USB-A cableado', 'Formato':'Full-Size', 'Layout':'QWERTY (ver descripción)', 'Anti-ghosting':'Full N-Key Rollover', 'SKU Megasur':'Consultar ficha'}
  },

  { id:269, name:'TECLADO GAMING DELL ALIENWARE AW410K RGB NEGRO', brand:'ALIENWARE', category:'teclados gaming',
    price:235.85, oldPrice:278.30, badge: 'OFERTA',
    image:'img/productos/1434-dell-alienware-aw410k-teclado-mecanico-gaming-rgb-qzerty-cherry-mx-layout-usa.jpg',
    images: [
      'img/productos/1434-dell-alienware-aw410k-teclado-mecanico-gaming-rgb-qzerty-cherry-mx-layout-usa.jpg',
      'img/productos/2312-dell-alienware-aw410k-teclado-mecanico-gaming-rgb-qzerty-cherry-mx-layout-usa-comprar.jpg',
      'img/productos/3791-dell-alienware-aw410k-teclado-mecanico-gaming-rgb-qzerty-cherry-mx-layout-usa-mejor-precio.jpg',
      'img/productos/4777-dell-alienware-aw410k-teclado-mecanico-gaming-rgb-qzerty-cherry-mx-layout-usa-especificaciones.jpg'
    ],
    description:'Switch: Cherry MX Red (lineal)',
    specs:{'Switch':'Cherry MX Red', 'Iluminación':'RGB AlienFX por tecla', 'Conexión':'USB-A cableado', 'Formato':'Full-Size', 'Layout':'QWERTY (ver descripción)', 'Anti-ghosting':'Sí (gaming)', 'SKU Megasur':'Consultar ficha'}
  },

  { id:270, name:'TECLADO GAMING KROM KERID USB MECANICO RETROILUMINADO NEGRO', brand:'KROM', category:'teclados gaming',
    price:89.70, oldPrice:105.85, badge: 'OFERTA',
    image:'img/productos/krom-kerid-usb-mecanico-negro-0.jpg',
    images: [
      'img/productos/krom-kerid-usb-mecanico-negro-0.jpg',
      'img/productos/krom-kerid-usb-mecanico-negro-1.jpg',
      'img/productos/krom-kerid-usb-mecanico-negro-2.jpg',
      'img/productos/krom-kerid-usb-mecanico-negro-3.jpg'
    ],
    description:'Switch: Mecánico (Brown táctil)',
    specs:{'Switch':'Mecánico Brown táctil', 'Iluminación':'RGB retroiluminado', 'Conexión':'USB-A cableado', 'Formato':'Full-Size', 'Layout':'QWERTY (ver descripción)', 'Anti-ghosting':'Sí (gaming)', 'SKU Megasur':'Consultar ficha'}
  }
);



// ─── ALTAVOCES INTELIGENTES (fuente: Megasur.es — junio 2026)
// 28 altavoces verificados: 7 marcas × 5 productos
PRODUCTS.push(

  // ── FONESTAR ───────────────────────────────────────────────

  { id:82, name:'ALTAVOZ PORTATIL FONESTAR BOX-35LED BLUETOOTH/ KARAOKE/ USB/ SD/ MICROFONO INALAMBRICO/ 35W RMS', brand:'FONESTAR', category:'altavoces',
    price:59.99, oldPrice:70.79, badge: 'OFERTA',
    image:'img/productos/BOX-35LED-0.jpg',
    images: [
      'img/productos/BOX-35LED-0.jpg',
      'img/productos/BOX-35LED-1.jpg',
      'img/productos/BOX-35LED-2.jpg'
    ],
    description:'Tipo: Altavoz portátil',
    specs:{'Tipo':'Altavoz portátil', 'Potencia':'35W RMS RMS', 'Conectividad':'Bluetooth', 'Entrada':'USB', 'Micrófono':'Integrado (manos libres)','SKU Megasur':'BOX-35LED'}
  },
  { id:79, name:'ALTAVOZ PORTATIL CON MICROFONO FONESTAR MALIBU-315 / 50W RMS', brand:'FONESTAR', category:'altavoces',
    price:149.99, oldPrice:176.99, badge: 'OFERTA',
    image:'img/productos/MGS0000030725-0.jpg',
    images: [
      'img/productos/MGS0000030725-0.jpg',
      'img/productos/MGS0000030725-1.jpg',
      'img/productos/MGS0000030725-2.jpg',
      'img/productos/MGS0000030725-3.jpg',
      'img/productos/MGS0000030725-4.jpg'
    ],
    description:'Tipo: Altavoz portátil',
    specs:{'Tipo':'Altavoz portátil', 'Potencia':'50W RMS RMS', 'Micrófono':'Integrado (manos libres)','SKU Megasur':'MGS0000030725'}
  },
  { id:81, name:'ALTAVOZ PORTATIL FONESTAR CALIFORNIA 200W / JACK / AUXILIAR / FUNCION KARAOKE / BLUETOOTH / USB / MP3 / RADIO FM / MICROFONO', brand:'FONESTAR', category:'altavoces',
    price:199.99, oldPrice:235.99, badge: 'OFERTA',
    image:'img/productos/MGS0000031143-0.jpg',
    images: [
      'img/productos/MGS0000031143-0.jpg',
      'img/productos/MGS0000031143-1.jpg',
      'img/productos/MGS0000031143-2.jpg'
    ],
    description:'Tipo: Altavoz portátil',
    specs:{'Tipo':'Altavoz portátil', 'Potencia':'200W RMS', 'Conectividad':'Bluetooth', 'Entrada':'USB', 'Entrada':'Jack 3.5mm AUX', 'Micrófono':'Integrado (manos libres)','SKU Megasur':'MGS0000031143'}
  },
  // ── PHOENIX TECHNOLOGIES ───────────────────────────────────

  { id:88, name:'Altavoces PrivateSound Jack y USB', brand:'PHOENIX TECHNOLOGIES', category:'altavoces',
    price:19.99, oldPrice:23.59, badge: 'OFERTA',
    image:'img/productos/MGS0000004797-0.jpg',
    images: [
      'img/productos/MGS0000004797-0.jpg',
      'img/productos/MGS0000004797-1.jpg',
      'img/productos/MGS0000004797-2.jpg',
      'img/productos/MGS0000004797-3.jpg',
      'img/productos/MGS0000004797-4.jpg'
    ],
    description:'Entrada: USB',
    specs:{'Entrada':'USB', 'Entrada':'Jack 3.5mm AUX','SKU Megasur':'MGS0000004797'}
  },
  { id:87, name:'Altavoces Phoenix para Ordenador Portables 2.0 USB negros', brand:'PHOENIX TECHNOLOGIES', category:'altavoces',
    price:29.99, oldPrice:35.39, badge: 'OFERTA',
    image:'img/productos/PHAPORTABLE2.0-0.jpg',
    images: [
      'img/productos/PHAPORTABLE2.0-0.jpg',
      'img/productos/PHAPORTABLE2.0-1.jpg',
      'img/productos/PHAPORTABLE2.0-2.jpg',
      'img/productos/PHAPORTABLE2.0-3.jpg',
      'img/productos/PHAPORTABLE2.0-4.jpg'
    ],
    description:'Sistema: 2.0 estéreo',
    specs:{'Sistema':'2.0 estéreo', 'Entrada':'USB','SKU Megasur':'PHAPORTABLE2.0'}
  },
  { id:84, name:'Altavoces PC Ordenador de Estudio Phoenix Serenade 60W RMS USB Bluetooth Optico Jack RCA', brand:'PHOENIX TECHNOLOGIES', category:'altavoces',
    price:79.99, oldPrice:94.39, badge: 'OFERTA',
    image:'img/productos/DSP0000019433-0.jpg',
    images: [
      'img/productos/DSP0000019433-0.jpg',
      'img/productos/DSP0000019433-1.jpg',
      'img/productos/DSP0000019433-2.jpg',
      'img/productos/DSP0000019433-3.jpg',
      'img/productos/DSP0000019433-4.jpg'
    ],
    description:'Potencia: 60W RMS RMS',
    specs:{'Potencia':'60W RMS RMS', 'Conectividad':'Bluetooth', 'Entrada':'USB', 'Entrada':'Jack 3.5mm AUX','SKU Megasur':'DSP0000019433'}
  },
  { id:85, name:'Altavoces de Estudio Phoenix Sonika 50W con Bluetooth Jack USB para Ordenador', brand:'PHOENIX TECHNOLOGIES', category:'altavoces',
    price:89.99, oldPrice:106.19, badge: 'OFERTA',
    image:'img/productos/DSP0000019639-0.jpg',
    images: [
      'img/productos/DSP0000019639-0.jpg',
      'img/productos/DSP0000019639-1.jpg',
      'img/productos/DSP0000019639-2.jpg',
      'img/productos/DSP0000019639-3.jpg',
      'img/productos/DSP0000019639-4.jpg'
    ],
    description:'Potencia: 50W RMS',
    specs:{'Potencia':'50W RMS', 'Conectividad':'Bluetooth', 'Entrada':'USB', 'Entrada':'Jack 3.5mm AUX','SKU Megasur':'DSP0000019639'}
  },
  { id:86, name:'Altavoz RumbleBoss Phoenix 80W RMS Bateria 4000 mah Funcion Karaoke 2 Microfonos Inalambricos Incluidos', brand:'PHOENIX TECHNOLOGIES', category:'altavoces',
    price:109.99, oldPrice:129.79, badge: 'OFERTA',
    image:'img/productos/DSP0000026295-0.jpg',
    images: [
      'img/productos/DSP0000026295-0.jpg',
      'img/productos/DSP0000026295-1.jpg',
      'img/productos/DSP0000026295-2.jpg',
      'img/productos/DSP0000026295-3.jpg',
      'img/productos/DSP0000026295-4.jpg'
    ],
    description:'Potencia: 80W RMS RMS',
    specs:{'Potencia':'80W RMS RMS', 'Batería':'Recargable integrada', 'Micrófono':'Integrado (manos libres)','SKU Megasur':'DSP0000026295'}
  },
  // ── LOGITECH ───────────────────────────────────────────────

  { id:93, name:'ALTAVOCES LOGITECH Z150 2.0/ BLANCOS/ 6W', brand:'LOGITECH', category:'altavoces',
    price:14.99, oldPrice:17.69, badge: 'OFERTA',
    image:'img/productos/980-000815-0.jpg',
    images: [
      'img/productos/980-000815-0.jpg',
      'img/productos/logitech-z150-multimedia-speakers-blancos.jpg',
      'img/productos/z150-white-tob-775626-high.jpg',
      'img/productos/z150-white-side-903736-high.jpg'
    ],
    description:'Sistema: 2.0 estéreo',
    specs:{'Sistema':'2.0 estéreo', 'Potencia':'6W RMS','SKU Megasur':'980-000815'}
  },
  { id:89, name:'ALTAVOCES LOGITECH Z207 BLUETOOTH BLANCO', brand:'LOGITECH', category:'altavoces',
    price:34.99, oldPrice:41.29, badge: 'OFERTA',
    image:'img/productos/980-001292-0.jpg',
    images: [
      'img/productos/980-001292-0.jpg',
      'img/productos/980-001292-1.jpg',
      'img/productos/980-001292-2.jpg'
    ],
    description:'Conectividad: Bluetooth',
    specs:{'Conectividad':'Bluetooth','SKU Megasur':'980-001292'}
  },
  { id:91, name:'ALTAVOCES LOGITECH Z623 2.1 200 RMS /THX', brand:'LOGITECH', category:'altavoces',
    price:94.99, oldPrice:112.09, badge: 'OFERTA',
    image:'img/productos/980-000403-0.jpg',
    images: [
      'img/productos/980-000403-0.jpg',
      'img/productos/980-000403-1.jpg',
      'img/productos/980-000403-2.jpg',
      'img/productos/980-000403-3.jpg'
    ],
    description:'Sistema: 2.1 (satélites + subwoofer)',
    specs:{'Sistema':'2.1 (satélites + subwoofer)','SKU Megasur':'980-000403'}
  },
  { id:90, name:'ALTAVOCES LOGITECH Z906 5.1 THX / 500 W RMS SONIDO ENVOLVENTE', brand:'LOGITECH', category:'altavoces',
    price:259.99, oldPrice:306.79, badge: 'OFERTA',
    image:'img/productos/MGS0000031037-0.jpg',
    images: [
      'img/productos/MGS0000031037-0.jpg',
      'img/productos/MGS0000031037-1.jpg',
      'img/productos/MGS0000031037-2.jpg',
      'img/productos/MGS0000031037-3.jpg',
      'img/productos/MGS0000031037-4.jpg'
    ],
    description:'Potencia: 500 W RMS RMS',
    specs:{'Potencia':'500 W RMS RMS','SKU Megasur':'MGS0000031037'}
  },
  // ── MARS GAMING ────────────────────────────────────────────

  { id:94, name:'ALTAVOCES MARS GAMING MS1 2.0 NEGRO/ROJO', brand:'MARS GAMING', category:'altavoces',
    price:15.99, oldPrice:18.87, badge: 'OFERTA',
    image:'img/productos/DSP0000008707-0.jpg',
    images: [
      'img/productos/DSP0000008707-0.jpg',
      'img/productos/DSP0000008707-1.jpg',
      'img/productos/DSP0000008707-2.jpg'
    ],
    description:'Sistema: 2.0 estéreo',
    specs:{'Sistema':'2.0 estéreo','SKU Megasur':'DSP0000008707'}
  },
  { id:95, name:'ALTAVOCES MARS GAMING MSCUBE PREMIUM 8W BLACK', brand:'MARS GAMING', category:'altavoces',
    price:19.99, oldPrice:23.59, badge: 'OFERTA',
    image:'img/productos/DSP0000008709-0.jpg',
    images: [
      'img/productos/DSP0000008709-0.jpg',
      'img/productos/DSP0000008709-1.jpg',
      'img/productos/DSP0000008709-2.jpg'
    ],
    description:'Potencia: 8W RMS',
    specs:{'Potencia':'8W RMS','SKU Megasur':'DSP0000008709'}
  },
  { id:96, name:'ALTAVOCES MARS GAMING MSCUBEW 8W BLANCO', brand:'MARS GAMING', category:'altavoces',
    price:19.99, oldPrice:23.59, badge: 'OFERTA',
    image:'img/productos/DSP0000008846-0.jpg',
    images: [
      'img/productos/DSP0000008846-0.jpg',
      'img/productos/DSP0000008846-1.jpg',
      'img/productos/DSP0000008846-2.jpg'
    ],
    description:'Potencia: 8W RMS',
    specs:{'Potencia':'8W RMS','SKU Megasur':'DSP0000008846'}
  },
  { id:98, name:'ALTAVOCES MARS GAMING MSCUBEP PREMIUM 8W ROSA', brand:'MARS GAMING', category:'altavoces',
    price:19.99, oldPrice:23.59, badge: 'OFERTA',
    image:'img/productos/DSP0000008873-0.jpg',
    images: [
      'img/productos/DSP0000008873-0.jpg',
      'img/productos/DSP0000008873-1.jpg',
      'img/productos/DSP0000008873-2.jpg'
    ],
    description:'Potencia: 8W RMS',
    specs:{'Potencia':'8W RMS','SKU Megasur':'DSP0000008873'}
  },
  { id:97, name:'ALTAVOCES MARS GAMING MS22W 2.2 35W USB + JACK 3.5MM BLANCO', brand:'MARS GAMING', category:'altavoces',
    price:39.99, oldPrice:47.19, badge: 'OFERTA',
    image:'img/productos/DSP0000008862-0.jpg',
    images: [
      'img/productos/DSP0000008862-0.jpg',
      'img/productos/DSP0000008862-1.jpg'
    ],
    description:'Potencia: 22W RMS',
    specs:{'Potencia':'22W RMS', 'Entrada':'USB', 'Entrada':'Jack 3.5mm AUX','SKU Megasur':'DSP0000008862'}
  },
  // ── NGS ────────────────────────────────────────────────────

  { id:102, name:'ALTAVOZ PARA PC NGS SB 350/ 12W/ USB/ JACK 3.5MM', brand:'NGS', category:'altavoces',
    price:19.99, oldPrice:23.59, badge: 'OFERTA',
    image:'img/productos/DSP0000009027-0.jpg',
    images: [
      'img/productos/DSP0000009027-0.jpg',
      'img/productos/DSP0000009027-1.jpg',
      'img/productos/DSP0000009027-2.jpg',
      'img/productos/DSP0000009027-3.jpg',
      'img/productos/DSP0000009027-4.jpg'
    ],
    description:'Potencia: 12W RMS',
    specs:{'Potencia':'12W RMS', 'Entrada':'USB', 'Entrada':'Jack 3.5mm AUX','SKU Megasur':'DSP0000009027'}
  },
  { id:99, name:'ALTAVOZ BLUETOOTH NGS ROLLER FURIA 1 NEGRO', brand:'NGS', category:'altavoces',
    price:24.99, oldPrice:29.49, badge: 'OFERTA',
    image:'img/productos/DSP0000023318-0.jpg',
    images: [
      'img/productos/DSP0000023318-0.jpg',
      'img/productos/DSP0000023318-1.jpg',
      'img/productos/DSP0000023318-2.jpg',
      'img/productos/DSP0000023318-3.jpg'
    ],
    description:'Conectividad: Bluetooth',
    specs:{'Conectividad':'Bluetooth','SKU Megasur':'DSP0000023318'}
  },
  { id:100, name:'ALTAVOCES NGS COMET 2.1 USB 20W RMS', brand:'NGS', category:'altavoces',
    price:29.99, oldPrice:35.39, badge: 'OFERTA',
    image:'img/productos/DSP0000013251-0.jpg',
    images: [
      'img/productos/DSP0000013251-0.jpg',
      'img/productos/DSP0000013251-1.jpg'
    ],
    description:'Sistema: 2.1 (satélites + subwoofer)',
    specs:{'Sistema':'2.1 (satélites + subwoofer)', 'Potencia':'20W RMS RMS', 'Entrada':'USB','SKU Megasur':'DSP0000013251'}
  },
  { id:101, name:'ALTAVOZ PORTATIL BLUETOOTH NGS WILD TEMPER 200W', brand:'NGS', category:'altavoces',
    price:74.99, oldPrice:88.49, badge: 'OFERTA',
    image:'img/productos/DSP0000028000-0.jpg',
    images: [
      'img/productos/DSP0000028000-0.jpg',
      'img/productos/DSP0000028000-1.jpg',
      'img/productos/DSP0000028000-2.jpg',
      'img/productos/DSP0000028000-3.jpg',
      'img/productos/DSP0000028000-4.jpg'
    ],
    description:'Tipo: Altavoz portátil',
    specs:{'Tipo':'Altavoz portátil', 'Potencia':'200W RMS', 'Conectividad':'Bluetooth','SKU Megasur':'DSP0000028000'}
  },
  // ── HAMA ───────────────────────────────────────────────────

  { id:106, name:'ALTAVOZ HAMA BALL SHAPE MONO ROSA', brand:'HAMA', category:'altavoces',
    price:19.99, oldPrice:23.59, badge: 'OFERTA',
    image:'img/productos/MGS0000024055-0.jpg',
    images: [
      'img/productos/MGS0000024055-0.jpg',
      'img/productos/MGS0000024055-1.jpg',
      'img/productos/MGS0000024055-2.jpg'
    ],
    description:'Altavoz Bluetooth compacto con diseño esférico · conexión inalámbrica · color Rosa',
    specs:{'Diseño':'Ball Shape Mono', 'Conectividad':'Bluetooth', 'Color':'Rosa', 'SKU Megasur':'MGS0000024055'}
  },
  { id:103, name:'ALTAVOZ HAMA SHINE 2.0 BLANCO', brand:'HAMA', category:'altavoces',
    price:24.99, oldPrice:29.49, badge: 'OFERTA',
    image:'img/productos/DSP0000024269-0.jpg',
    images: [
      'img/productos/DSP0000024269-0.jpg',
      'img/productos/DSP0000024269-1.jpg',
      'img/productos/DSP0000024269-2.jpg'
    ],
    description:'Sistema: 2.0 estéreo',
    specs:{'Sistema':'2.0 estéreo','SKU Megasur':'DSP0000024269'}
  },
  { id:105, name:'ALTAVOZ HAMA SHINE 2.0 NEGRO', brand:'HAMA', category:'altavoces',
    price:24.99, oldPrice:29.49, badge: 'OFERTA',
    image:'img/productos/DSP0000024270-0.jpg',
    images: [
      'img/productos/DSP0000024270-0.jpg',
      'img/productos/DSP0000024270-1.jpg',
      'img/productos/DSP0000024270-2.jpg'
    ],
    description:'Sistema: 2.0 estéreo',
    specs:{'Sistema':'2.0 estéreo','SKU Megasur':'DSP0000024270'}
  },
  { id:104, name:'ALTAVOZ HAMA TWIN 3.0 BLANCO', brand:'HAMA', category:'altavoces',
    price:34.99, oldPrice:41.29, badge: 'OFERTA',
    image:'img/productos/DSP0000024274-0.jpg',
    images: [
      'img/productos/DSP0000024274-0.jpg',
      'img/productos/DSP0000024274-1.jpg',
      'img/productos/DSP0000024274-2.jpg',
      'img/productos/DSP0000024274-3.jpg',
      'img/productos/DSP0000024274-4.jpg'
    ],
    description:'Sistema de altavoces 3.0 estéreo con subwoofer · 3 canales de audio · color Blanco',
    specs:{'Sistema':'3.0 con subwoofer', 'Canales':'3', 'Color':'Blanco', 'SKU Megasur':'DSP0000024274'}
  },
  // ── QCHARX ─────────────────────────────────────────────────

  { id:109, name:'ALTAVOZ QCHARX FLOW MINI NEGRO 10W', brand:'QCHARX', category:'altavoces',
    price:19.99, oldPrice:23.59, badge: 'OFERTA',
    image:'img/productos/MGS0000024590-0.jpg',
    images: [
      'img/productos/MGS0000024590-0.jpg'
    ],
    description:'Potencia: 10W RMS',
    specs:{'Potencia':'10W RMS','SKU Megasur':'MGS0000024590'}
  },
  { id:108, name:'ALTAVOZ QCHARX FLOW NEGRO', brand:'QCHARX', category:'altavoces',
    price:29.99, oldPrice:35.39, badge: 'OFERTA',
    image:'img/productos/MGS0000023191-0.jpg',
    images: [
      'img/productos/MGS0000023191-0.jpg',
      'img/productos/MGS0000023191-1.jpg'
    ],
    description:'Altavoz portátil Bluetooth con sonido 360° · resistente y compacto · color Negro',
    specs:{'Conectividad':'Bluetooth', 'Sonido':'360°', 'Color':'Negro', 'SKU Megasur':'MGS0000023191'}
  },
  { id:107, name:'ALTAVOZ QCHARX FLOWMAX NEGRO', brand:'QCHARX', category:'altavoces',
    price:39.99, oldPrice:47.19, badge: 'OFERTA',
    image:'img/productos/MGS0000023189-0.jpg',
    images: [
      'img/productos/MGS0000023189-0.jpg',
      'img/productos/MGS0000023189-1.jpg'
    ],
    description:'Altavoz portátil Bluetooth premium con mayor potencia · sonido potente y envolvente · color Negro',
    specs:{'Conectividad':'Bluetooth', 'Modelo':'FlowMax', 'Color':'Negro', 'SKU Megasur':'MGS0000023189'}
  }
);


// ─── AURICULARES INTELIGENTES MEGASUR (junio 2026)
// 25 auriculares verificados: 5 marcas × 5 productos
PRODUCTS.push(

  // ── SONY ───────────────────────────────────────────────────

  { id:111, name:'AURICULARES SONY WI-C100 INALAMBRICO NEGRO', brand:'SONY', category:'auriculares',
    price:46.5, oldPrice:54.85, badge: 'OFERTA',
    image:'img/productos/DSP0000037821-0.jpg',
    description:'Auriculares in-ear inalámbricos Bluetooth · hasta 25h de batería · con micrófono integrado',
    specs:{'Tipo':'In-ear inalámbrico', 'Batería':'Hasta 25h', 'Micrófono':'Integrado', 'SKU Megasur':'DSP0000037821'}
  },
  { id:110, name:'AURICULARES SONY WH-CH520 BLUETOOH BLANCO', brand:'SONY', category:'auriculares',
    price:70.8, oldPrice:83.55, badge: 'OFERTA',
    image:'img/productos/MGS0000020797-0.jpg',
    description:'ANC: Cancelación activa de ruido',
    specs:{'ANC':'Cancelación activa de ruido','SKU Megasur':'MGS0000020797'}
  },
  { id:114, name:'AURICULARES SONY WF-C510 INALAMBRICO AZUL', brand:'SONY', category:'auriculares',
    price:62.75, oldPrice:74.05, badge: 'OFERTA',
    image:'img/productos/DSP0000037829-0.jpg',
    description:'True wireless in-ear Bluetooth 5.3 · hasta 22h con estuche · color Azul',
    specs:{'Tipo':'True Wireless', 'Bluetooth':'5.3', 'Batería':'Hasta 22h', 'SKU Megasur':'DSP0000037829'}
  },
  { id:113, name:'AURICULARES SONY WF-C710N INALAMBRICO NEGRO', brand:'SONY', category:'auriculares',
    price:132.1, oldPrice:155.9, badge: 'OFERTA',
    image:'img/productos/DSP0000037823-0.jpg',
    description:'True wireless con cancelación activa de ruido (ANC) · sonido Sony 360° · hasta 15h + estuche',
    specs:{'ANC':'Cancelación activa de ruido', 'Tipo':'True Wireless', 'Batería':'Hasta 15h + estuche', 'SKU Megasur':'DSP0000037823'}
  },
  { id:112, name:'AURICULARES SONY WH-CH720N INALAMBRICO NEGRO', brand:'SONY', category:'auriculares',
    price:109.5, oldPrice:129.2, badge: 'OFERTA',
    image:'img/productos/DSP0000037822-0.jpg',
    description:'Over-ear inalámbrico con cancelación activa de ruido (ANC) · Bluetooth 5.2 · hasta 35h de batería',
    specs:{'ANC':'Cancelación activa de ruido', 'Tipo':'Over-ear', 'Batería':'Hasta 35h', 'Bluetooth':'5.2', 'SKU Megasur':'DSP0000037822'}
  },
  // ── EPOS SENNHEISER ────────────────────────────────────────

  { id:118, name:'AURICULARES EPOS SENNHEISER PC 5 CHAT JACK 3.5MM MICROFONO NEGRO', brand:'EPOS SENNHEISER', category:'auriculares',
    price:31.5, oldPrice:37.15, badge: 'OFERTA',
    image:'img/productos/DSP0000012549-0.jpg',
    images: [
      'img/productos/DSP0000012549-0.jpg',
      'img/productos/DSP0000012549-1.jpg',
      'img/productos/DSP0000012549-2.jpg',
      'img/productos/DSP0000012549-3.jpg',
      'img/productos/DSP0000012549-4.jpg'
    ],
    description:'Conexión: Jack 3.5mm',
    specs:{'Conexión':'Jack 3.5mm', 'Micrófono':'Integrado','SKU Megasur':'DSP0000012549'}
  },
  { id:115, name:'AURICULARES EPOS SENNHEISER PC 8 USB MICROFONO NEGRO', brand:'EPOS SENNHEISER', category:'auriculares',
    price:44.85, oldPrice:52.9, badge: 'OFERTA',
    image:'img/productos/DSP0000012535-0.jpg',
    images: [
      'img/productos/DSP0000012535-0.jpg',
      'img/productos/DSP0000012535-1.jpg',
      'img/productos/DSP0000012535-2.jpg',
      'img/productos/DSP0000012535-3.jpg'
    ],
    description:'Micrófono: Integrado',
    specs:{'Micrófono':'Integrado','SKU Megasur':'DSP0000012535'}
  },
  { id:116, name:'AURICULARES EPOS SENNHEISER RS 120-W TV NEGRO', brand:'EPOS SENNHEISER', category:'auriculares',
    price:109.5, oldPrice:129.2, badge: 'OFERTA',
    image:'img/productos/DSP0000012542-0.jpg',
    images: [
      'img/productos/DSP0000012542-0.jpg',
      'img/productos/DSP0000012542-1.jpg',
      'img/productos/DSP0000012542-2.jpg'
    ],
    description:'Auriculares inalámbricos para TV por radiofrecuencia (RF) · sonido estéreo · conexión a TV sin Bluetooth',
    specs:{'Tipo':'Over-ear inalámbrico RF', 'Uso':'Televisión', 'Sonido':'Estéreo', 'SKU Megasur':'DSP0000012542'}
  },
  { id:117, name:'AURICULARES EPOS SENNHEISER RS 5200 RF', brand:'EPOS SENNHEISER', category:'auriculares',
    price:142.9, oldPrice:168.6, badge: 'OFERTA',
    image:'img/productos/DSP0000012543-0.jpg',
    images: [
      'img/productos/DSP0000012543-0.jpg',
      'img/productos/DSP0000012543-1.jpg',
      'img/productos/DSP0000012543-2.jpg',
      'img/productos/DSP0000012543-3.jpg',
      'img/productos/DSP0000012543-4.jpg'
    ],
    description:'Auriculares inalámbricos RF premium para TV · calidad de sonido Sennheiser · diseño cerrado',
    specs:{'Tipo':'Over-ear inalámbrico RF', 'Uso':'Televisión', 'Marca calidad':'Sennheiser', 'SKU Megasur':'DSP0000012543'}
  },
  { id:119, name:'AURICULARES EPOS SENNHEISER RS 2000 TV INALAMBRICO NEGRO', brand:'EPOS SENNHEISER', category:'auriculares',
    price:250.6, oldPrice:295.7, badge: 'OFERTA',
    image:'img/productos/DSP0000028398-0.jpg',
    images: [
      'img/productos/DSP0000028398-0.jpg',
      'img/productos/DSP0000028398-1.jpg',
      'img/productos/DSP0000028398-2.jpg',
      'img/productos/DSP0000028398-3.jpg',
      'img/productos/DSP0000028398-4.jpg'
    ],
    description:'Auriculares inalámbricos para TV con sonido Sennheiser de alta fidelidad · RF 900 MHz · hasta 20h batería',
    specs:{'Tipo':'Over-ear inalámbrico RF', 'Frecuencia':'900 MHz', 'Batería':'Hasta 20h', 'SKU Megasur':'DSP0000028398'}
  },
  // ── JABRA ──────────────────────────────────────────────────

  { id:123, name:'AURICULAR JABRA EVOLVE 30 II HS NEGRO', brand:'JABRA', category:'auriculares',
    price:93.4, oldPrice:110.2, badge: 'OFERTA',
    image:'img/productos/DSP0000030414-0.jpg',
    images: [
      'img/productos/DSP0000030414-0.jpg',
      'img/productos/DSP0000030414-1.jpg',
      'img/productos/DSP0000030414-2.jpg'
    ],
    description:'Auricular profesional con cable para oficina · micrófono con cancelación de ruido · certificado UC',
    specs:{'Tipo':'Monoaural con cable', 'Micrófono':'Cancelación de ruido', 'Certificación':'UC', 'SKU Megasur':'DSP0000030414'}
  },
  { id:124, name:'AURICULARES JABRA BIZ 2300 QD DUO', brand:'JABRA', category:'auriculares',
    price:135.25, oldPrice:159.6, badge: 'OFERTA',
    image:'img/productos/DSP0000030416-0.jpg',
    images: [
      'img/productos/DSP0000030416-0.jpg',
      'img/productos/DSP0000030416-1.jpg',
      'img/productos/DSP0000030416-2.jpg',
      'img/productos/DSP0000030416-3.jpg',
      'img/productos/DSP0000030416-4.jpg'
    ],
    description:'Auricular binaural profesional para centro de llamadas · micrófono de alta calidad · conector QD',
    specs:{'Tipo':'Binaural (DUO)', 'Conector':'Quick Disconnect (QD)', 'Uso':'Call center', 'SKU Megasur':'DSP0000030416'}
  },
  { id:121, name:'AURICULARES JABRA ENGAGE 45 SE INALAMBRICO NEGRO', brand:'JABRA', category:'auriculares',
    price:253.7, oldPrice:299.35, badge: 'OFERTA',
    image:'img/productos/DSP0000030409-0.jpg',
    images: [
      'img/productos/DSP0000030409-0.jpg',
      'img/productos/jabra-engage-45se-1.png',
      'img/productos/jabra-engage-45se-2.png'
    ],
    description:'Auricular inalámbrico DECT profesional para empresa · hasta 13h de batería · micrófono con cancelación de ruido',
    specs:{'Tipo':'Inalámbrico DECT', 'Batería':'Hasta 13h', 'Micrófono':'Cancelación de ruido', 'SKU Megasur':'DSP0000030409'}
  },
  { id:120, name:'AURICULARES JABRA EVOLVE2 65 MS', brand:'JABRA', category:'auriculares',
    price:330.75, oldPrice:390.3, badge: 'OFERTA',
    image:'img/productos/MGS0000025960-0.jpg',
    images: [
      'img/productos/MGS0000025960-0.jpg',
      'img/productos/MGS0000025960-1.jpg',
      'img/productos/MGS0000025960-2.jpg'
    ],
    description:'Auricular inalámbrico premium certificado Microsoft Teams · ANC avanzado · hasta 37h de batería',
    specs:{'Certificación':'Microsoft Teams', 'ANC':'Cancelación activa de ruido', 'Batería':'Hasta 37h', 'SKU Megasur':'MGS0000025960'}
  },
  { id:122, name:'AURICULARES JABRA ENGAGE 65 SE INALAMBRICO NEGRO', brand:'JABRA', category:'auriculares',
    price:401.3, oldPrice:473.55, badge: 'OFERTA',
    image:'img/productos/DSP0000030410-0.jpg',
    images: [
      'img/productos/DSP0000030410-0.jpg',
      'img/productos/DSP0000030410-1.jpg',
      'img/productos/DSP0000030410-2.jpg'
    ],
    description:'Auricular DECT inalámbrico profesional avanzado · rango hasta 150m · micrófono con cancelación de ruido',
    specs:{'Tipo':'Inalámbrico DECT', 'Rango':'Hasta 150m', 'Micrófono':'Cancelación de ruido', 'SKU Megasur':'DSP0000030410'}
  },
  // ── ENERGY SISTEM ──────────────────────────────────────────

  { id:126, name:'AURICULARES MICRO ENERGY SISTEM OFFICE 2 ANTHRACITE SUPRAURAL/ 30MM/ CABLE 150CM/ JACK 3.5MM/ ANTIPOP/ 20HZ', brand:'ENERGY SISTEM', category:'auriculares',
    price:29.85, oldPrice:35.2, badge: 'OFERTA',
    image:'img/productos/DSP0000007049-0.jpg',
    images: [
      'img/productos/DSP0000007049-0.jpg',
      'img/productos/DSP0000007049-1.jpg',
      'img/productos/DSP0000007049-2.jpg'
    ],
    description:'Conexión: Jack 3.5mm',
    specs:{'Conexión':'Jack 3.5mm','SKU Megasur':'DSP0000007049'}
  },
  { id:329, name:'AURICULARES MICRO ENERGY SISTEM OFFICE 3 BLANCO SUPRAURAL/ 40MM/ JACK 3.5MM/ ANTIPOP/ 20HZ/ 32Ohms', brand:'ENERGY SISTEM', category:'auriculares',
    price:38.15, oldPrice:45, badge: 'OFERTA',
    image:'img/productos/DSP0000007066-0.jpg',
    description:'Conexión: Jack 3.5mm',
    specs:{'Conexión':'Jack 3.5mm', 'ANC':'Cancelación activa de ruido','SKU Megasur':'DSP0000007066'}
  },
  { id:327, name:'AURICULARES MICRO ENERGY SISTEM WIRELESS S2 COCO BLUETOOTH 5.0/ HASTA 20H/ MIC. INTEGRADO/ USB TIPO C', brand:'ENERGY SISTEM', category:'auriculares',
    price:48.15, oldPrice:56.8, badge: 'OFERTA',
    image:'img/productos/DSP0000007055-0.jpg',
    description:'Conectividad: Bluetooth 5.0',
    specs:{'Conectividad':'Bluetooth 5.0', 'Batería':'20h de autonomía', 'Micrófono':'Integrado','SKU Megasur':'DSP0000007055'}
  },
  { id:328, name:'AURICULARES MICRO ENERGY SISTEM WIRELESS S2 GRAFITO BLUETOOTH 5.0/ HASTA 20H/ MIC. INTEGRADO/ USB TIPO C', brand:'ENERGY SISTEM', category:'auriculares',
    price:48.15, oldPrice:56.8, badge: 'OFERTA',
    image:'img/productos/DSP0000007060-0.jpg',
    description:'Conectividad: Bluetooth 5.0',
    specs:{'Conectividad':'Bluetooth 5.0', 'Batería':'20h de autonomía', 'Micrófono':'Integrado','SKU Megasur':'DSP0000007060'}
  },
  { id:125, name:'AURICULARES MICRO GAMING ENERGY SISTEM ESG4 7.1 RED SUPRAURAL/ 50MM/ USB/ MULTIPLATAFORMA', brand:'ENERGY SISTEM', category:'auriculares',
    price:53.15, oldPrice:62.7, badge: 'OFERTA',
    image:'img/productos/DSP0000007037-0.jpg',
    images: [
      'img/productos/DSP0000007037-0.jpg',
      'img/productos/DSP0000007037-1.jpg',
      'img/productos/DSP0000007037-2.jpg'
    ],
    description:'Auriculares gaming supraaurales con sonido 7.1 virtual · drivers 50mm · conexión USB · multiplataforma',
    specs:{'Sonido':'7.1 virtual', 'Driver':'50mm', 'Conexión':'USB', 'Plataformas':'PC/PS/Xbox/Switch', 'SKU Megasur':'DSP0000007037'}
  },
  // ── URBANISTA ──────────────────────────────────────────────

  { id:330, name:'AURICULARES URBANISTA TRUE WIRELESS INALAMBRICOS ATLANTA MULTIPUNTO PURE WHITE', brand:'URBANISTA', category:'auriculares',
    price:64.35, oldPrice:75.95, badge: 'OFERTA',
    image:'img/productos/DSP0000014716-0.jpg',
    description:'Tipo: True Wireless (TWS)',
    specs:{'Tipo':'True Wireless (TWS)','SKU Megasur':'DSP0000014716'}
  },
  { id:132, name:'AURICULARES URBANISTA TRUE WIRELESS INALAMBRICOS LISBON VANILLA CREAM / AMARILLO VAINILLA', brand:'URBANISTA', category:'auriculares',
    price:77.25, oldPrice:91.15, badge: 'OFERTA',
    image:'img/productos/DSP0000013389-0.jpg',
    images: [
      'img/productos/DSP0000013389-0.jpg',
      'img/productos/DSP0000013389-1.jpg',
      'img/productos/DSP0000013389-2.jpg',
      'img/productos/DSP0000013389-3.jpg',
      'img/productos/DSP0000013389-4.jpg'
    ],
    description:'Tipo: True Wireless (TWS)',
    specs:{'Tipo':'True Wireless (TWS)','SKU Megasur':'DSP0000013389'}
  },
  { id:134, name:'AURICULARES URBANISTA TRUE WIRELESS INALAMBRICOS LISBON MIDNIGHT BLACK', brand:'URBANISTA', category:'auriculares',
    price:77.25, oldPrice:91.15, badge: 'OFERTA',
    image:'img/productos/DSP0000014713-0.jpg',
    images: [
      'img/productos/DSP0000014713-0.jpg',
      'img/productos/DSP0000014713-1.jpg',
      'img/productos/DSP0000014713-2.jpg',
      'img/productos/DSP0000014713-3.jpg',
      'img/productos/DSP0000014713-4.jpg'
    ],
    description:'Tipo: True Wireless (TWS)',
    specs:{'Tipo':'True Wireless (TWS)','SKU Megasur':'DSP0000014713'}
  },
  { id:331, name:'AURICULARES URBANISTA TRUE WIRELESS INALAMBRICOS COPENHAGEN SAGE GREEN / VERDE', brand:'URBANISTA', category:'auriculares',
    price:96.6, oldPrice:114, badge: 'OFERTA',
    image:'img/productos/DSP0000013382-0.jpg',
    description:'Tipo: True Wireless (TWS)',
    specs:{'Tipo':'True Wireless (TWS)','SKU Megasur':'DSP0000013382'}
  },
  { id:133, name:'AURICULARES URBANISTA TRUE WIRELESS INALAMBRICOS PHOENIX DESERT ROSE CARGA SOLAR', brand:'URBANISTA', category:'auriculares',
    price:142.9, oldPrice:168.6, badge: 'OFERTA',
    image:'img/productos/DSP0000014707-0.jpg',
    images: [
      'img/productos/DSP0000014707-0.jpg',
      'img/productos/DSP0000014707-1.jpg',
      'img/productos/DSP0000014707-2.jpg',
      'img/productos/DSP0000014707-3.jpg',
      'img/productos/DSP0000014707-4.jpg'
    ],
    description:'Tipo: True Wireless (TWS)',
    specs:{'Tipo':'True Wireless (TWS)','SKU Megasur':'DSP0000014707'}
  }
);


// ─── SMARTPHONES MEGASUR (junio 2026)
// 35 smartphones verificados: 7 marcas
PRODUCTS.push(

  // ── SAMSUNG ────────────────────────────────────────────────

  { id:135, name:'SAMSUNG GALAXY A37 5G 8/256GB VERDE', brand:'SAMSUNG', category:'smartphones',
    price:773.4, oldPrice:912.6, badge: 'OFERTA',
    image:'img/productos/MGS0000033302-0.jpg',
    images: [
      'img/productos/MGS0000033302-0.jpg',
      'img/productos/MGS0000033302-1.jpg',
      'img/productos/MGS0000033302-2.jpg',
      'img/productos/MGS0000033302-3.jpg'
    ],
    description:'Conectividad: 5G',
    specs:{'Conectividad':'5G', 'Almacenamiento':'256GB', 'SO':'Android', 'SIM':'Dual SIM','SKU Megasur':'MGS0000033302'}
  },
  { id:136, name:'SAMSUNG GALAXY A37 5G 8/256GB GRIS', brand:'SAMSUNG', category:'smartphones',
    price:766.3, oldPrice:904.25, badge: 'OFERTA',
    image:'img/productos/MGS0000033303-0.jpg',
    images: [
      'img/productos/MGS0000033303-0.jpg',
      'img/productos/MGS0000033303-1.jpg',
      'img/productos/MGS0000033303-2.jpg',
      'img/productos/MGS0000033303-3.jpg',
      'img/productos/MGS0000033303-4.jpg'
    ],
    description:'Conectividad: 5G',
    specs:{'Conectividad':'5G', 'Almacenamiento':'256GB', 'SO':'Android', 'SIM':'Dual SIM','SKU Megasur':'MGS0000033303'}
  },
  { id:137, name:'SAMSUNG GALAXY A37 5G 8/256GB BLANCO', brand:'SAMSUNG', category:'smartphones',
    price:773.4, oldPrice:912.6, badge: 'OFERTA',
    image:'img/productos/MGS0000033305-0.jpg',
    images: [
      'img/productos/MGS0000033305-0.jpg',
      'img/productos/MGS0000033305-1.jpg',
      'img/productos/MGS0000033305-2.jpg',
      'img/productos/MGS0000033305-3.jpg',
      'img/productos/MGS0000033305-4.jpg'
    ],
    description:'Conectividad: 5G',
    specs:{'Conectividad':'5G', 'Almacenamiento':'256GB', 'SO':'Android', 'SIM':'Dual SIM','SKU Megasur':'MGS0000033305'}
  },
  { id:138, name:'SAMSUNG GALAXY A37 5G 8/256GB VIOLETA', brand:'SAMSUNG', category:'smartphones',
    price:766.3, oldPrice:904.25, badge: 'OFERTA',
    image:'img/productos/MGS0000033304-0.jpg',
    images: [
      'img/productos/MGS0000033304-0.jpg',
      'img/productos/MGS0000033304-1.jpg',
      'img/productos/MGS0000033304-2.jpg',
      'img/productos/MGS0000033304-3.jpg',
      'img/productos/MGS0000033304-4.jpg'
    ],
    description:'Conectividad: 5G',
    specs:{'Conectividad':'5G', 'Almacenamiento':'256GB', 'SO':'Android', 'SIM':'Dual SIM','SKU Megasur':'MGS0000033304'}
  },
  { id:139, name:'SAMSUNG GALAXY A57 5G 8/256GB AZUL', brand:'SAMSUNG', category:'smartphones',
    price:953.75, oldPrice:1125.4, badge: 'OFERTA',
    image:'img/productos/MGS0000033306-0.jpg',
    images: [
      'img/productos/MGS0000033306-0.jpg',
      'img/productos/MGS0000033306-1.jpg',
      'img/productos/MGS0000033306-2.jpg',
      'img/productos/MGS0000033306-3.jpg',
      'img/productos/MGS0000033306-4.jpg'
    ],
    description:'Conectividad: 5G',
    specs:{'Conectividad':'5G', 'Almacenamiento':'256GB', 'SO':'Android', 'SIM':'Dual SIM','SKU Megasur':'MGS0000033306'}
  },
  
  // ── SAMSUNG NUEVOS (Megasur 2026-07) ───────────────────────

  { id:400, name:'SAMSUNG GALAXY A16 4/128GB NEGRO', brand:'SAMSUNG', category:'smartphones',
    price:282.10, oldPrice:332.90, badge:'OFERTA',
    image:'img/productos/DSP0000000232-0.jpg',
    images:['img/productos/DSP0000000232-0.jpg'],
    description:'Conectividad: 4G LTE',
    specs:{'Conectividad':'4G LTE','Almacenamiento':'128GB','SO':'Android','SIM':'Dual SIM','SKU Megasur':'DSP0000000232'}
  },
  { id:401, name:'SAMSUNG GALAXY A26 5G 6/128GB NEGRO', brand:'SAMSUNG', category:'smartphones',
    price:417.40, oldPrice:492.55, badge:'OFERTA',
    image:'img/productos/MGS0000000332-0.jpg',
    images:['img/productos/MGS0000000332-0.jpg'],
    description:'Conectividad: 5G',
    specs:{'Conectividad':'5G','Almacenamiento':'128GB','SO':'Android','SIM':'Dual SIM','SKU Megasur':'MGS0000000332'}
  },
  { id:402, name:'SAMSUNG GALAXY S25 12/256GB AZUL', brand:'SAMSUNG', category:'smartphones',
    price:1324.10, oldPrice:1562.45, badge:'NUEVO',
    image:'img/productos/MGS0000000709-0.jpg',
    images:['img/productos/MGS0000000709-0.jpg'],
    description:'Conectividad: 5G',
    specs:{'Conectividad':'5G','Almacenamiento':'256GB','SO':'Android','SIM':'Dual SIM','Gama':'Serie S premium','SKU Megasur':'MGS0000000709'}
  },
  // ── APPLE ──────────────────────────────────────────────────

  { id:141, name:'APPLE IPHONE 14 5G 128GB AZUL ACONDICIONADO', brand:'APPLE', category:'smartphones',
    price:299, oldPrice:352.82, badge: 'OFERTA',
    image:'img/productos/MGS0000033831-0.jpg',
    images: [
      'img/productos/MGS0000033831-0.jpg',
      'img/productos/MGS0000033831-1.jpg',
      'img/productos/MGS0000033831-2.jpg'
    ],
    description:'Conectividad: 5G',
    specs:{'Conectividad':'5G', 'Almacenamiento':'128GB', 'SO':'iOS 18', 'SIM':'Nano SIM + eSIM','SKU Megasur':'MGS0000033831'}
  },
  { id:142, name:'APPLE IPHONE 14 5G 128GB PURPURA ACONDICIONADO', brand:'APPLE', category:'smartphones',
    price:299, oldPrice:352.82, badge: 'OFERTA',
    image:'img/productos/MGS0000033834-0.jpg',
    images: [
      'img/productos/MGS0000033834-0.jpg',
      'img/productos/MGS0000033834-1.jpg',
      'img/productos/MGS0000033834-2.jpg'
    ],
    description:'Conectividad: 5G',
    specs:{'Conectividad':'5G', 'Almacenamiento':'128GB', 'SO':'iOS 18', 'SIM':'Nano SIM + eSIM','SKU Megasur':'MGS0000033834'}
  },
  { id:143, name:'APPLE IPHONE 14 5G 128GB AMARILLO ACONDICIONADO', brand:'APPLE', category:'smartphones',
    price:299, oldPrice:352.82, badge: 'OFERTA',
    image:'img/productos/MGS0000033838-0.jpg',
    images: [
      'img/productos/MGS0000033838-0.jpg',
      'img/productos/MGS0000033838-1.jpg',
      'img/productos/MGS0000033838-2.jpg',
      'img/productos/MGS0000033838-3.jpg'
    ],
    description:'Conectividad: 5G',
    specs:{'Conectividad':'5G', 'Almacenamiento':'128GB', 'SO':'iOS 18', 'SIM':'Nano SIM + eSIM','SKU Megasur':'MGS0000033838'}
  },
  { id:144, name:'APPLE IPHONE 14 PRO 5G 256GB NEGRO ACONDICIONADO', brand:'APPLE', category:'smartphones',
    price:499, oldPrice:588.82, badge: 'OFERTA',
    image:'img/productos/MGS0000033840-0.jpg',
    images: [
      'img/productos/MGS0000033840-0.jpg',
      'img/productos/MGS0000033840-1.jpg',
      'img/productos/MGS0000033840-2.jpg',
      'img/productos/MGS0000033840-3.jpg',
      'img/productos/MGS0000033840-4.jpg'
    ],
    description:'Conectividad: 5G',
    specs:{'Conectividad':'5G', 'Almacenamiento':'256GB', 'SO':'iOS 18', 'SIM':'Nano SIM + eSIM', 'Gama':'Pro / Plus','SKU Megasur':'MGS0000033840'}
  },
  { id:140, name:'APPLE IPHONE 16E 128GB NEGRO', brand:'APPLE', category:'smartphones',
    price:1149.15, oldPrice:1356, badge: 'OFERTA',
    image:'img/productos/DSP0000029938-0.jpg',
    images: [
      'img/productos/DSP0000029938-0.jpg',
      'img/productos/DSP0000029938-1.jpg',
      'img/productos/DSP0000029938-2.jpg',
      'img/productos/DSP0000029938-3.jpg'
    ],
    description:'Conectividad: 4G LTE',
    specs:{'Conectividad':'4G LTE', 'Almacenamiento':'128GB', 'SO':'iOS 18', 'SIM':'Nano SIM + eSIM','SKU Megasur':'DSP0000029938'}
  },
  
  // ── APPLE NUEVOS (Megasur 2026-07) ─────────────────────────

  { id:403, name:'APPLE IPHONE 16E 128GB BLANCO', brand:'APPLE', category:'smartphones',
    price:1149.15, oldPrice:1356.00, badge:'NUEVO',
    image:'img/productos/DSP0000029638-0.jpg',
    images:['img/productos/DSP0000029638-0.jpg'],
    description:'Conectividad: 5G',
    specs:{'Conectividad':'5G','Almacenamiento':'128GB','SO':'iOS','SIM':'Nano SIM + eSIM','SKU Megasur':'DSP0000029638'}
  },
  { id:404, name:'APPLE IPHONE 15 128GB NEGRO', brand:'APPLE', category:'smartphones',
    price:1358.90, oldPrice:1603.50, badge:'OFERTA',
    image:'img/productos/DSP0000018612-0.jpg',
    images:['img/productos/DSP0000018612-0.jpg'],
    description:'Conectividad: 5G',
    specs:{'Conectividad':'5G','Almacenamiento':'128GB','SO':'iOS','SIM':'Nano SIM + eSIM','SKU Megasur':'DSP0000018612'}
  },
  { id:405, name:'APPLE IPHONE 16 128GB NEGRO', brand:'APPLE', category:'smartphones',
    price:1653.10, oldPrice:1950.65, badge:'NUEVO',
    image:'img/productos/DSP0000027150-0.jpg',
    images:['img/productos/DSP0000027150-0.jpg'],
    description:'Conectividad: 5G',
    specs:{'Conectividad':'5G','Almacenamiento':'128GB','SO':'iOS','SIM':'Nano SIM + eSIM','SKU Megasur':'DSP0000027150'}
  },
  { id:406, name:'APPLE IPHONE 17 256GB NEGRO', brand:'APPLE', category:'smartphones',
    price:1844.70, oldPrice:2176.75, badge:'NUEVO',
    image:'img/productos/DSP0000025870-0.jpg',
    images:['img/productos/DSP0000025870-0.jpg'],
    description:'Conectividad: 5G',
    specs:{'Conectividad':'5G','Almacenamiento':'256GB','SO':'iOS','SIM':'Nano SIM + eSIM','Gama':'iPhone 17','SKU Megasur':'DSP0000025870'}
  },
  // ── XIAOMI ─────────────────────────────────────────────────

  { id:145, name:'XIAOMI REDMI A7 PRO 4/128GB AZUL', brand:'XIAOMI', category:'smartphones',
    price:229.05, oldPrice:270.3, badge: 'OFERTA',
    image:'img/productos/MGS0000033059-0.jpg',
    images: [
      'img/productos/MGS0000033059-0.jpg'
    ],
    description:'Conectividad: 4G LTE',
    specs:{'Conectividad':'4G LTE', 'Almacenamiento':'128GB', 'SO':'Android', 'SIM':'Dual SIM', 'Gama':'Pro / Plus','SKU Megasur':'MGS0000033059'}
  },
  { id:146, name:'XIAOMI REDMI A7 PRO 4/128GB VERDE', brand:'XIAOMI', category:'smartphones',
    price:229.05, oldPrice:270.3, badge: 'OFERTA',
    image:'img/productos/MGS0000033060-0.jpg',
    images: [
      'img/productos/MGS0000033060-0.jpg'
    ],
    description:'Conectividad: 4G LTE',
    specs:{'Conectividad':'4G LTE', 'Almacenamiento':'128GB', 'SO':'Android', 'SIM':'Dual SIM', 'Gama':'Pro / Plus','SKU Megasur':'MGS0000033060'}
  },
  { id:148, name:'XIAOMI REDMI NOTE 15 8GB 256GB 6.77" NEGRO', brand:'XIAOMI', category:'smartphones',
    price:392.15, oldPrice:462.75, badge: 'OFERTA',
    image:'img/productos/MGS0000031676-0.jpg',
    images: [
      'img/productos/MGS0000031676-0.jpg',
      'img/productos/MGS0000031676-1.jpg',
      'img/productos/MGS0000031676-2.jpg',
      'img/productos/MGS0000031676-3.jpg',
      'img/productos/MGS0000031676-4.jpg'
    ],
    description:'Conectividad: 4G LTE',
    specs:{'Conectividad':'4G LTE', 'Almacenamiento':'8GB', 'SO':'Android', 'SIM':'Dual SIM', 'Gama':'Serie premium','SKU Megasur':'MGS0000031676'}
  },
  { id:149, name:'XIAOMI REDMI NOTE 15 8GB 256GB 6.77" AZUL', brand:'XIAOMI', category:'smartphones',
    price:410.45, oldPrice:484.35, badge: 'OFERTA',
    image:'img/productos/MGS0000031681-0.jpg',
    images: [
      'img/productos/MGS0000031681-0.jpg',
      'img/productos/MGS0000031681-1.jpg',
      'img/productos/MGS0000031681-2.jpg',
      'img/productos/MGS0000031681-3.jpg',
      'img/productos/MGS0000031681-4.jpg'
    ],
    description:'Conectividad: 4G LTE',
    specs:{'Conectividad':'4G LTE', 'Almacenamiento':'8GB', 'SO':'Android', 'SIM':'Dual SIM', 'Gama':'Serie premium','SKU Megasur':'MGS0000031681'}
  },
  { id:147, name:'XIAOMI REDMI NOTE 14 5G 8/256GB LILA', brand:'XIAOMI', category:'smartphones',
    price:219, oldPrice:258.42, badge: 'OFERTA',
    image:'img/productos/MGS0000025157-0.jpg',
    images: [
      'img/productos/MGS0000025157-0.jpg',
      'img/productos/MGS0000025157-1.jpg',
      'img/productos/MGS0000025157-2.jpg',
      'img/productos/MGS0000025157-3.jpg',
      'img/productos/MGS0000025157-4.jpg'
    ],
    description:'Conectividad: 5G',
    specs:{'Conectividad':'5G', 'Almacenamiento':'256GB', 'SO':'Android', 'SIM':'Dual SIM', 'Gama':'Serie premium','SKU Megasur':'MGS0000025157'}
  },
  
  // ── XIAOMI NUEVOS (Megasur 2026-07) ────────────────────────

  { id:407, name:'XIAOMI REDMI A7 PRO 4/128GB NEGRO', brand:'XIAOMI', category:'smartphones',
    price:229.05, oldPrice:270.30, badge:'OFERTA',
    image:'img/productos/MGS0000000306-0.jpg',
    images:['img/productos/MGS0000000306-0.jpg'],
    description:'Conectividad: 4G LTE',
    specs:{'Conectividad':'4G LTE','Almacenamiento':'128GB','SO':'Android','SIM':'Dual SIM','Gama':'Pro / Plus','SKU Megasur':'MGS0000000306'}
  },
  { id:408, name:'XIAOMI REDMI 15C 4/256GB AZUL', brand:'XIAOMI', category:'smartphones',
    price:269.95, oldPrice:318.55, badge:'OFERTA',
    image:'img/productos/MGS0000000242-0.jpg',
    images:['img/productos/MGS0000000242-0.jpg'],
    description:'Conectividad: 4G LTE',
    specs:{'Conectividad':'4G LTE','Almacenamiento':'256GB','SO':'Android','SIM':'Dual SIM','SKU Megasur':'MGS0000000242'}
  },
  { id:409, name:'XIAOMI REDMI NOTE 15 PRO 8/256GB NEGRO', brand:'XIAOMI', category:'smartphones',
    price:480.65, oldPrice:567.15, badge:'OFERTA',
    image:'img/productos/MGS0000000186-0.jpg',
    images:['img/productos/MGS0000000186-0.jpg'],
    description:'Conectividad: 4G LTE',
    specs:{'Conectividad':'4G LTE','Almacenamiento':'256GB','SO':'Android','SIM':'Dual SIM','Gama':'Pro / Plus','SKU Megasur':'MGS0000000186'}
  },
  { id:410, name:'XIAOMI REDMI NOTE 15 PRO+ 5G 8/256GB NEGRO', brand:'XIAOMI', category:'smartphones',
    price:689.75, oldPrice:813.90, badge:'NUEVO',
    image:'img/productos/MGS0000000135-0.jpg',
    images:['img/productos/MGS0000000135-0.jpg'],
    description:'Conectividad: 5G',
    specs:{'Conectividad':'5G','Almacenamiento':'256GB','SO':'Android','SIM':'Dual SIM','Gama':'Pro / Plus','SKU Megasur':'MGS0000000135'}
  },
  // ── REALME ─────────────────────────────────────────────────

  { id:154, name:'REALME C100 5G 4/256GB VERDE', brand:'REALME', category:'smartphones',
    price:421, oldPrice:496.8, badge: 'OFERTA',
    image:'img/productos/MGS0000034179-0.jpg',
    images: [
      'img/productos/MGS0000034179-0.jpg',
      'img/productos/MGS0000034179-1.jpg',
      'img/productos/MGS0000034179-2.jpg',
      'img/productos/MGS0000034179-3.jpg',
      'img/productos/MGS0000034179-4.jpg'
    ],
    description:'Conectividad: 5G',
    specs:{'Conectividad':'5G', 'Almacenamiento':'256GB', 'SO':'Android', 'SIM':'Dual SIM','SKU Megasur':'MGS0000034179'}
  },
  { id:150, name:'REALME 14T 5G 8/256GB NEGRO', brand:'REALME', category:'smartphones',
    price:435.5, oldPrice:513.9, badge: 'OFERTA',
    image:'img/productos/DSP0000038803-0.jpg',
    images: [
      'img/productos/DSP0000038803-0.jpg',
      'img/productos/DSP0000038803-1.jpg',
      'img/productos/DSP0000038803-2.jpg',
      'img/productos/DSP0000038803-3.jpg'
    ],
    description:'Conectividad: 5G',
    specs:{'Conectividad':'5G', 'Almacenamiento':'256GB', 'SO':'Android', 'SIM':'Dual SIM','SKU Megasur':'DSP0000038803'}
  },
  { id:151, name:'REALME 14T 5G 8/256GB PURPURA', brand:'REALME', category:'smartphones',
    price:435.5, oldPrice:513.9, badge: 'OFERTA',
    image:'img/productos/DSP0000038804-0.jpg',
    images: [
      'img/productos/DSP0000038804-0.jpg',
      'img/productos/DSP0000038804-1.jpg',
      'img/productos/DSP0000038804-2.jpg'
    ],
    description:'Conectividad: 5G',
    specs:{'Conectividad':'5G', 'Almacenamiento':'256GB', 'SO':'Android', 'SIM':'Dual SIM','SKU Megasur':'DSP0000038804'}
  },
  { id:152, name:'REALME 16 5G 8/256GB BLANCO', brand:'REALME', category:'smartphones',
    price:615.3, oldPrice:726.05, badge: 'OFERTA',
    image:'img/productos/MGS0000034177-0.jpg',
    images: [
      'img/productos/MGS0000034177-0.jpg',
      'img/productos/MGS0000034177-1.jpg',
      'img/productos/MGS0000034177-2.jpg',
      'img/productos/MGS0000034177-3.jpg',
      'img/productos/MGS0000034177-4.jpg'
    ],
    description:'Conectividad: 5G',
    specs:{'Conectividad':'5G', 'Almacenamiento':'256GB', 'SO':'Android', 'SIM':'Dual SIM','SKU Megasur':'MGS0000034177'}
  },
  { id:153, name:'REALME 16 5G 8/256GB NEGRO', brand:'REALME', category:'smartphones',
    price:615.3, oldPrice:726.05, badge: 'OFERTA',
    image:'img/productos/MGS0000034178-0.jpg',
    images: [
      'img/productos/MGS0000034178-0.jpg',
      'img/productos/MGS0000034178-1.jpg',
      'img/productos/MGS0000034178-2.jpg',
      'img/productos/MGS0000034178-3.jpg',
      'img/productos/MGS0000034178-4.jpg'
    ],
    description:'Conectividad: 5G',
    specs:{'Conectividad':'5G', 'Almacenamiento':'256GB', 'SO':'Android', 'SIM':'Dual SIM','SKU Megasur':'MGS0000034178'}
  },
  
  // ── REALME NUEVOS (Megasur 2026-07) ────────────────────────

  { id:411, name:'REALME C100 5G 4/256GB PURPURA', brand:'REALME', category:'smartphones',
    price:421.00, oldPrice:496.80, badge:'OFERTA',
    image:'img/productos/MGS0000034180-0.jpg',
    images:['img/productos/MGS0000034180-0.jpg'],
    description:'Conectividad: 5G',
    specs:{'Conectividad':'5G','Almacenamiento':'256GB','SO':'Android','SIM':'Dual SIM','SKU Megasur':'MGS0000034180'}
  },
  { id:412, name:'REALME C71 4/256GB FOREST OWL', brand:'REALME', category:'smartphones',
    price:268.45, oldPrice:316.75, badge:'OFERTA',
    image:'img/productos/MGS0000034145-0.jpg',
    images:['img/productos/MGS0000034145-0.jpg'],
    description:'Conectividad: 4G LTE',
    specs:{'Conectividad':'4G LTE','Almacenamiento':'256GB','SO':'Android','SIM':'Dual SIM','SKU Megasur':'MGS0000034145'}
  },
  { id:413, name:'REALME NOTE 70T 4/256GB NEGRO', brand:'REALME', category:'smartphones',
    price:234.95, oldPrice:277.25, badge:'OFERTA',
    image:'img/productos/DSP0000000020-0.jpg',
    images:['img/productos/DSP0000000020-0.jpg'],
    description:'Conectividad: 4G LTE',
    specs:{'Conectividad':'4G LTE','Almacenamiento':'256GB','SO':'Android','SIM':'Dual SIM','SKU Megasur':'DSP0000000020'}
  },
  // ── TCL ────────────────────────────────────────────────────

  { id:155, name:'TCL 60 SE NXTPAPER 5G 8/256GB GRIS', brand:'TCL', category:'smartphones',
    price:310.6, oldPrice:366.5, badge: 'OFERTA',
    image:'img/productos/MGS0000027846-0.jpg',
    images: [
      'img/productos/MGS0000027846-0.jpg',
      'img/productos/MGS0000027846-1.jpg',
      'img/productos/MGS0000027846-2.jpg',
      'img/productos/MGS0000027846-3.jpg'
    ],
    description:'Conectividad: 5G',
    specs:{'Conectividad':'5G', 'Almacenamiento':'256GB', 'Pantalla':'NXTPAPER (anti-fatiga visual)', 'SO':'Android', 'SIM':'Dual SIM','SKU Megasur':'MGS0000027846'}
  },
  { id:156, name:'TCL 60 SE NXTPAPER 5G 8/256GB VERDE', brand:'TCL', category:'smartphones',
    price:310.6, oldPrice:366.5, badge: 'OFERTA',
    image:'img/productos/MGS0000027847-0.jpg',
    images: [
      'img/productos/MGS0000027847-0.jpg',
      'img/productos/MGS0000027847-1.jpg',
      'img/productos/MGS0000027847-2.jpg',
      'img/productos/MGS0000027847-3.jpg',
      'img/productos/MGS0000027847-4.jpg'
    ],
    description:'Conectividad: 5G',
    specs:{'Conectividad':'5G', 'Almacenamiento':'256GB', 'Pantalla':'NXTPAPER (anti-fatiga visual)', 'SO':'Android', 'SIM':'Dual SIM','SKU Megasur':'MGS0000027847'}
  },
  { id:157, name:'TCL NXTPAPER 70 PRO 5G 8/256GB AZUL', brand:'TCL', category:'smartphones',
    price:549.5, oldPrice:648.4, badge: 'OFERTA',
    image:'img/productos/MGS0000033439-0.jpg',
    images: [
      'img/productos/MGS0000033439-0.jpg',
      'img/productos/MGS0000033439-1.jpg',
      'img/productos/MGS0000033439-2.jpg',
      'img/productos/MGS0000033439-3.jpg',
      'img/productos/MGS0000033439-4.jpg'
    ],
    description:'Conectividad: 5G',
    specs:{'Conectividad':'5G', 'Almacenamiento':'256GB', 'Pantalla':'NXTPAPER (anti-fatiga visual)', 'SO':'Android', 'SIM':'Dual SIM', 'Gama':'Pro / Plus','SKU Megasur':'MGS0000033439'}
  },
  { id:158, name:'TCL NXTPAPER 70 PRO 5G 8/256GB ORO', brand:'TCL', category:'smartphones',
    price:549.5, oldPrice:648.4, badge: 'OFERTA',
    image:'img/productos/MGS0000033440-0.jpg',
    images: [
      'img/productos/MGS0000033440-0.jpg',
      'img/productos/MGS0000033440-1.jpg',
      'img/productos/MGS0000033440-2.jpg',
      'img/productos/MGS0000033440-3.jpg',
      'img/productos/MGS0000033440-4.jpg'
    ],
    description:'Conectividad: 5G',
    specs:{'Conectividad':'5G', 'Almacenamiento':'256GB', 'Pantalla':'NXTPAPER (anti-fatiga visual)', 'SO':'Android', 'SIM':'Dual SIM', 'Gama':'Pro / Plus','SKU Megasur':'MGS0000033440'}
  },
  { id:159, name:'TCL 60 ULTRA NXTPAPER 5G 12/512GB NEGRO', brand:'TCL', category:'smartphones',
    price:972.35, oldPrice:1147.35, badge: 'OFERTA',
    image:'img/productos/MGS0000033437-0.jpg',
    images: [
      'img/productos/MGS0000033437-0.jpg',
      'img/productos/MGS0000033437-1.jpg',
      'img/productos/MGS0000033437-2.jpg',
      'img/productos/MGS0000033437-3.jpg',
      'img/productos/MGS0000033437-4.jpg'
    ],
    description:'Conectividad: 5G',
    specs:{'Conectividad':'5G', 'Almacenamiento':'512GB', 'Pantalla':'NXTPAPER (anti-fatiga visual)', 'SO':'Android', 'SIM':'Dual SIM', 'Gama':'Ultra/Pro Max','SKU Megasur':'MGS0000033437'}
  },
  
  // ── TCL NUEVOS (Megasur 2026-07) ───────────────────────────

  { id:414, name:'TCL 60S 4/128GB NEGRO', brand:'TCL', category:'smartphones',
    price:197.15, oldPrice:232.65, badge:'OFERTA',
    image:'img/productos/MGS0000027638-0.jpg',
    images:['img/productos/MGS0000027638-0.jpg'],
    description:'Conectividad: 4G LTE',
    specs:{'Conectividad':'4G LTE','Almacenamiento':'128GB','SO':'Android','SIM':'Dual SIM','SKU Megasur':'MGS0000027638'}
  },
  { id:415, name:'TCL K70 4/128GB NEGRO', brand:'TCL', category:'smartphones',
    price:272.75, oldPrice:321.85, badge:'OFERTA',
    image:'img/productos/MGS0000003340-0.jpg',
    images:['img/productos/MGS0000003340-0.jpg'],
    description:'Conectividad: 4G LTE',
    specs:{'Conectividad':'4G LTE','Almacenamiento':'128GB','SO':'Android','SIM':'Dual SIM','SKU Megasur':'MGS0000003340'}
  },
  { id:416, name:'TCL K70 SE 4/64GB NEGRO', brand:'TCL', category:'smartphones',
    price:216.10, oldPrice:255.00, badge:'OFERTA',
    image:'img/productos/MGS0000000888-0.jpg',
    images:['img/productos/MGS0000000888-0.jpg'],
    description:'Conectividad: 4G LTE',
    specs:{'Conectividad':'4G LTE','Almacenamiento':'64GB','SO':'Android','SIM':'Dual SIM','SKU Megasur':'MGS0000000888'}
  },
  // ── MOTOROLA ───────────────────────────────────────────────

  { id:160, name:'MOTOROLA MOTO G05 4/128GB VERDE', brand:'MOTOROLA', category:'smartphones',
    price:208.85, oldPrice:246.45, badge: 'OFERTA',
    image:'img/productos/DSP0000040159-0.jpg',
    images: [
      'img/productos/DSP0000040159-0.jpg',
      'img/productos/DSP0000040159-1.jpg',
      'img/productos/DSP0000040159-2.jpg',
      'img/productos/DSP0000040159-3.jpg',
      'img/productos/DSP0000040159-4.jpg'
    ],
    description:'Conectividad: 4G LTE',
    specs:{'Conectividad':'4G LTE', 'Almacenamiento':'128GB', 'SO':'Android', 'SIM':'Dual SIM','SKU Megasur':'DSP0000040159'}
  },
  { id:162, name:'MOTOROLA MOTO G15 8/128GB NARANJA', brand:'MOTOROLA', category:'smartphones',
    price:229.05, oldPrice:270.3, badge: 'OFERTA',
    image:'img/productos/DSP0000029690-0.jpg',
    images: [
      'img/productos/DSP0000029690-0.jpg',
      'img/productos/DSP0000029690-1.jpg',
      'img/productos/DSP0000029690-2.jpg',
      'img/productos/DSP0000029690-3.jpg',
      'img/productos/DSP0000029690-4.jpg'
    ],
    description:'Conectividad: 4G LTE',
    specs:{'Conectividad':'4G LTE', 'Almacenamiento':'128GB', 'SO':'Android', 'SIM':'Dual SIM','SKU Megasur':'DSP0000029690'}
  },
  { id:163, name:'MOTOROLA MOTO G15 8/128GB VERDE', brand:'MOTOROLA', category:'smartphones',
    price:229.05, oldPrice:270.3, badge: 'OFERTA',
    image:'img/productos/DSP0000029691-0.jpg',
    images: [
      'img/productos/DSP0000029691-0.jpg',
      'img/productos/DSP0000029691-1.jpg',
      'img/productos/DSP0000029691-2.jpg',
      'img/productos/DSP0000029691-3.jpg',
      'img/productos/DSP0000029691-4.jpg'
    ],
    description:'Conectividad: 4G LTE',
    specs:{'Conectividad':'4G LTE', 'Almacenamiento':'128GB', 'SO':'Android', 'SIM':'Dual SIM','SKU Megasur':'DSP0000029691'}
  },
  { id:161, name:'MOTOROLA MOTO G85 5G 12/256GB GRIS', brand:'MOTOROLA', category:'smartphones',
    price:269, oldPrice:317.42, badge: 'OFERTA',
    image:'img/productos/DSP0000027349-0.jpg',
    images: [
      'img/productos/DSP0000027349-0.jpg',
      'img/productos/DSP0000027349-1.jpg',
      'img/productos/DSP0000027349-2.jpg',
      'img/productos/DSP0000027349-3.jpg',
      'img/productos/DSP0000027349-4.jpg'
    ],
    description:'Conectividad: 5G',
    specs:{'Conectividad':'5G', 'Almacenamiento':'256GB', 'SO':'Android', 'SIM':'Dual SIM','SKU Megasur':'DSP0000027349'}
  },
  { id:164, name:'MOTOROLA THINKPHONE 25 5G 8/256GB CARBON BLACK', brand:'MOTOROLA', category:'smartphones',
    price:862.5, oldPrice:1017.75, badge: 'OFERTA',
    image:'img/productos/DSP0000035470-0.jpg',
    images: [
      'img/productos/DSP0000035470-0.jpg',
      'img/productos/DSP0000035470-1.jpg',
      'img/productos/DSP0000035470-2.jpg',
      'img/productos/DSP0000035470-3.jpg'
    ],
    description:'Conectividad: 5G',
    specs:{'Conectividad':'5G', 'Almacenamiento':'256GB', 'SO':'Android', 'SIM':'Dual SIM','SKU Megasur':'DSP0000035470'}
  },
  
  // ── MOTOROLA NUEVOS (Megasur 2026-07) ──────────────────────

  { id:417, name:'MOTOROLA MOTO EDGE 60 PRO 5G 12/512GB AZUL', brand:'MOTOROLA', category:'smartphones',
    price:882.20, oldPrice:1041.00, badge:'NUEVO',
    image:'img/productos/DSP0000000548-0.jpg',
    images:['img/productos/DSP0000000548-0.jpg'],
    description:'Conectividad: 5G',
    specs:{'Conectividad':'5G','Almacenamiento':'512GB','SO':'Android','SIM':'Dual SIM','Gama':'Pro / Plus','SKU Megasur':'DSP0000000548'}
  },
  { id:418, name:'MOTOROLA MOTO G35 5G 8/256GB GREYSTONE', brand:'MOTOROLA', category:'smartphones',
    price:334.05, oldPrice:394.20, badge:'OFERTA',
    image:'img/productos/DSP0000000549-0.jpg',
    images:['img/productos/DSP0000000549-0.jpg'],
    description:'Conectividad: 5G',
    specs:{'Conectividad':'5G','Almacenamiento':'256GB','SO':'Android','SIM':'Dual SIM','SKU Megasur':'DSP0000000549'}
  },
  { id:419, name:'MOTOROLA MOTO EDGE 60 FUSION 5G 8/256GB AMAZONTE', brand:'MOTOROLA', category:'smartphones',
    price:502.55, oldPrice:593.00, badge:'NUEVO',
    image:'img/productos/DSP0000000550-0.jpg',
    images:['img/productos/DSP0000000550-0.jpg'],
    description:'Conectividad: 5G',
    specs:{'Conectividad':'5G','Almacenamiento':'256GB','SO':'Android','SIM':'Dual SIM','Gama':'Pro / Plus','SKU Megasur':'DSP0000000550'}
  },
  { id:420, name:'MOTOROLA MOTO G86 5G 8/256GB AZUL OSCURO', brand:'MOTOROLA', category:'smartphones',
    price:449.20, oldPrice:530.05, badge:'OFERTA',
    image:'img/productos/DSP0000000551-0.jpg',
    images:['img/productos/DSP0000000551-0.jpg'],
    description:'Conectividad: 5G',
    specs:{'Conectividad':'5G','Almacenamiento':'256GB','SO':'Android','SIM':'Dual SIM','SKU Megasur':'DSP0000000551'}
  },
  // ── HAMMER ─────────────────────────────────────────────────

  { id:165, name:'RUGERIZADO HAMMER IRON V 6+6/64GB NEGRO', brand:'HAMMER', category:'smartphones',
    price:361.85, oldPrice:427, badge: 'OFERTA',
    image:'img/productos/DSP0000023573-0.jpg',
    images: [
      'img/productos/DSP0000023573-0.jpg',
      'img/productos/DSP0000023573-1.jpg',
      'img/productos/DSP0000023573-2.jpg',
      'img/productos/DSP0000023573-4.jpg'
    ],
    description:'Conectividad: 4G LTE',
    specs:{'Conectividad':'4G LTE', 'Almacenamiento':'64GB', 'SO':'Android', 'SIM':'Dual SIM','SKU Megasur':'DSP0000023573'}
  },
  { id:166, name:'RUGERIZADO HAMMER IRON V 6+6/64GB NARANJA', brand:'HAMMER', category:'smartphones',
    price:358.45, oldPrice:422.95, badge: 'OFERTA',
    image:'img/productos/DSP0000023574-0.jpg',
    images: [
      'img/productos/DSP0000023574-0.jpg',
      'img/productos/DSP0000023574-1.jpg',
      'img/productos/DSP0000023574-3.jpg',
      'img/productos/DSP0000023574-4.jpg'
    ],
    description:'Conectividad: 4G LTE',
    specs:{'Conectividad':'4G LTE', 'Almacenamiento':'64GB', 'SO':'Android', 'SIM':'Dual SIM','SKU Megasur':'DSP0000023574'}
  },
  { id:168, name:'RUGERIZADO HAMMER BLADE VA 5G 8/128GB NEGRO', brand:'HAMMER', category:'smartphones',
    price:432.9, oldPrice:510.8, badge: 'OFERTA',
    image:'img/productos/DSP0000027300-0.jpg',
    images: [
      'img/productos/DSP0000027300-0.jpg',
      'img/productos/DSP0000027300-1.jpg',
      'img/productos/DSP0000027300-2.jpg',
      'img/productos/DSP0000027300-3.jpg',
      'img/productos/DSP0000027300-4.jpg'
    ],
    description:'Conectividad: 5G',
    specs:{'Conectividad':'5G', 'Almacenamiento':'128GB', 'SO':'Android', 'SIM':'Dual SIM','SKU Megasur':'DSP0000027300'}
  },
  { id:169, name:'HAMMER CONSTRUCTION 2 5G 6/128GB PLATA', brand:'HAMMER', category:'smartphones',
    price:589.65, oldPrice:695.8, badge: 'OFERTA',
    image:'img/productos/MGS0000025076-0.jpg',
    images: [
      'img/productos/MGS0000025076-0.jpg',
      'img/productos/MGS0000025076-1.jpg',
      'img/productos/MGS0000025076-2.jpg',
      'img/productos/MGS0000025076-3.jpg',
      'img/productos/MGS0000025076-4.jpg'
    ],
    description:'Conectividad: 5G',
    specs:{'Conectividad':'5G', 'Almacenamiento':'128GB', 'SO':'Android', 'SIM':'Dual SIM','SKU Megasur':'MGS0000025076'}
  },
  { id:167, name:'RUGERIZADO HAMMER BLADE V 5G 8/256GB NEGRO', brand:'HAMMER', category:'smartphones',
    price:299, oldPrice:352.82, badge: 'OFERTA',
    image:'img/productos/DSP0000023575-0.jpg',
    images: [
      'img/productos/DSP0000023575-0.jpg',
      'img/productos/DSP0000023575-1.jpg',
      'img/productos/DSP0000023575-2.jpg',
      'img/productos/DSP0000023575-3.jpg',
      'img/productos/DSP0000023575-4.jpg'
    ],
    description:'Conectividad: 5G',
    specs:{'Conectividad':'5G', 'Almacenamiento':'256GB', 'SO':'Android', 'SIM':'Dual SIM','SKU Megasur':'DSP0000023575'}
  }
  // ── HAMMER NUEVOS (Megasur 2026-07) ────────────────────────

  { id:421, name:'RUGERIZADO HAMMER IRON 6 6/128GB NEGRO', brand:'HAMMER', category:'smartphones',
    price:475.35, oldPrice:560.90, badge:'NUEVO',
    image:'img/productos/MGS0000000864-0.jpg',
    images:['img/productos/MGS0000000864-0.jpg'],
    description:'Conectividad: 4G LTE',
    specs:{'Conectividad':'4G LTE','Almacenamiento':'128GB','SO':'Android','SIM':'Dual SIM','SKU Megasur':'MGS0000000864'}
  },
  { id:422, name:'RUGERIZADO HAMMER ENERGY X2 5G 6/128GB NARANJA', brand:'HAMMER', category:'smartphones',
    price:537.05, oldPrice:633.70, badge:'NUEVO',
    image:'img/productos/MGS0000000022-0.jpg',
    images:['img/productos/MGS0000000022-0.jpg'],
    description:'Conectividad: 5G',
    specs:{'Conectividad':'5G','Almacenamiento':'128GB','SO':'Android','SIM':'Dual SIM','SKU Megasur':'MGS0000000022'}
  },
  { id:423, name:'RUGERIZADO HAMMER RANGER 4G 6/128GB NEGRO VERDE', brand:'HAMMER', category:'smartphones',
    price:484.50, oldPrice:571.70, badge:'NUEVO',
    image:'img/productos/MGS0000000028-0.jpg',
    images:['img/productos/MGS0000000028-0.jpg'],
    description:'Conectividad: 4G LTE',
    specs:{'Conectividad':'4G LTE','Almacenamiento':'128GB','SO':'Android','SIM':'Dual SIM','SKU Megasur':'MGS0000000028'}
  },
);

// ─── SVG GENERATORS