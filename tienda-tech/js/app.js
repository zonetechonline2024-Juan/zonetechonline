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
    price:619, oldPrice:730.42, badge: 'OFERTA',
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
  // ── XIAOMI ─────────────────────────────────────────────────

  { id:145, name:'XIAOMI REDMI A7 PRO 4/128GB AZUL', brand:'XIAOMI', category:'smartphones',
    price:129, oldPrice:152.22, badge: 'OFERTA',
    image:'img/productos/MGS0000033059-0.jpg',
    images: [
      'img/productos/MGS0000033059-0.jpg'
    ],
    description:'Conectividad: 4G LTE',
    specs:{'Conectividad':'4G LTE', 'Almacenamiento':'128GB', 'SO':'Android', 'SIM':'Dual SIM', 'Gama':'Pro / Plus','SKU Megasur':'MGS0000033059'}
  },
  { id:146, name:'XIAOMI REDMI A7 PRO 4/128GB VERDE', brand:'XIAOMI', category:'smartphones',
    price:129, oldPrice:152.22, badge: 'OFERTA',
    image:'img/productos/MGS0000033060-0.jpg',
    images: [
      'img/productos/MGS0000033060-0.jpg'
    ],
    description:'Conectividad: 4G LTE',
    specs:{'Conectividad':'4G LTE', 'Almacenamiento':'128GB', 'SO':'Android', 'SIM':'Dual SIM', 'Gama':'Pro / Plus','SKU Megasur':'MGS0000033060'}
  },
  { id:148, name:'XIAOMI REDMI NOTE 15 8GB 256GB 6.77" NEGRO', brand:'XIAOMI', category:'smartphones',
    price:199, oldPrice:234.82, badge: 'OFERTA',
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
    price:199, oldPrice:234.82, badge: 'OFERTA',
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
  // ── REALME ─────────────────────────────────────────────────

  { id:154, name:'REALME C100 5G 4/256GB VERDE', brand:'REALME', category:'smartphones',
    price:149, oldPrice:175.82, badge: 'OFERTA',
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
    price:199, oldPrice:234.82, badge: 'OFERTA',
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
    price:199, oldPrice:234.82, badge: 'OFERTA',
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
    price:249, oldPrice:293.82, badge: 'OFERTA',
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
    price:249, oldPrice:293.82, badge: 'OFERTA',
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
  // ── TCL ────────────────────────────────────────────────────

  { id:155, name:'TCL 60 SE NXTPAPER 5G 8/256GB GRIS', brand:'TCL', category:'smartphones',
    price:199, oldPrice:234.82, badge: 'OFERTA',
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
    price:199, oldPrice:234.82, badge: 'OFERTA',
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
    price:249, oldPrice:293.82, badge: 'OFERTA',
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
    price:249, oldPrice:293.82, badge: 'OFERTA',
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
    price:329, oldPrice:388.22, badge: 'OFERTA',
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
  // ── MOTOROLA ───────────────────────────────────────────────

  { id:160, name:'MOTOROLA MOTO G05 4/128GB VERDE', brand:'MOTOROLA', category:'smartphones',
    price:109, oldPrice:128.62, badge: 'OFERTA',
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
    price:159, oldPrice:187.62, badge: 'OFERTA',
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
    price:159, oldPrice:187.62, badge: 'OFERTA',
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
    price:449, oldPrice:529.82, badge: 'OFERTA',
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
  // ── HAMMER ─────────────────────────────────────────────────

  { id:165, name:'RUGERIZADO HAMMER IRON V 6+6/64GB NEGRO', brand:'HAMMER', category:'smartphones',
    price:149, oldPrice:175.82, badge: 'OFERTA',
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
    price:149, oldPrice:175.82, badge: 'OFERTA',
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
    price:249, oldPrice:293.82, badge: 'OFERTA',
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
    price:279, oldPrice:329.22, badge: 'OFERTA',
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
  var placeholder = '<div class="' + svgWrapClass + ' product-img-ph"><svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,.12)" stroke-width="1.5"><rect x="3" y="5" width="18" height="14" rx="2"/><circle cx="9" cy="11" r="2"/><path d="M21 15l-5-5L5 19"/></svg></div>';
  if (!product.image) return placeholder;
  return '<img class="' + imgClass + '" src="' + product.image + '" alt="' + product.name + '" loading="lazy" ' +
    'onerror="this.style.display=\'none\';this.nextElementSibling.style.display=\'flex\'">' + placeholder;
}

function productCardGalleryHTML(product) {
  var imgs = (product.images && product.images.length > 1) ? product.images : null;
  var mainImg = product.image
    ? '<img class="product-real-img" src="' + product.image + '" alt="' + product.name + '" loading="lazy" onerror="this.style.display=\'none\';this.nextElementSibling.style.display=\'flex\'">'
    : '';
  var svgBack = '<div class="product-svg-back product-img-ph"><svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,.12)" stroke-width="1.5"><rect x="3" y="5" width="18" height="14" rx="2"/><circle cx="9" cy="11" r="2"/><path d="M21 15l-5-5L5 19"/></svg></div>';
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
  if (product.inStock === false) {
    showToast('Este producto está temporalmente sin stock');
    return;
  }
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

// ─── WISHLIST ─────────────────────────────────────────────────────────────────
function getWishlist() {
  try { return JSON.parse(localStorage.getItem('zt_wishlist') || '[]'); } catch(e) { return []; }
}
function isInWishlist(id) {
  return getWishlist().some(function(item) { return item.id === id; });
}
function toggleWishlist(id, btn) {
  var list = getWishlist();
  var idx = -1;
  list.forEach(function(item, i) { if (item.id === id) idx = i; });
  var product = PRODUCTS.find(function(p) { return p.id === id; });
  if (!product) return;
  if (idx >= 0) {
    list.splice(idx, 1);
    showToast('Eliminado de tu lista de deseos');
    if (btn) { btn.classList.remove('active'); btn.title = 'Añadir a favoritos'; var path = btn.querySelector('path'); if (path) path.setAttribute('fill','none'); }
  } else {
    list.push({ id: product.id, name: product.name, brand: product.brand || '', price: product.price, image: product.image || '', category: product.category || '' });
    showToast('❤️ Añadido a tu lista de deseos');
    if (btn) { btn.classList.add('active'); btn.title = 'Quitar de favoritos'; var path = btn.querySelector('path'); if (path) path.setAttribute('fill','#f87171'); }
  }
  localStorage.setItem('zt_wishlist', JSON.stringify(list));
}

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
    var isOOS = product.inStock === false;
    var badgeHTML = isOOS
      ? '<span class="product-badge product-badge--oos">AGOTADO</span>'
      : (product.badge ? '<span class="product-badge">' + product.badge + '</span>' : '');
    var discount = product.oldPrice ? Math.round((1 - product.price / product.oldPrice) * 100) : 0;
    var oldPriceHTML = product.oldPrice ? '<span class="product-old-price">€' + product.oldPrice + '</span>' : '';
    var discountHTML = (!isOOS && discount > 0) ? '<span class="product-discount">-' + discount + '%</span>' : '';
    var shortDesc = product.description.length > 90 ? product.description.substring(0, 90) + '...' : product.description;
    var inWl = isInWishlist(product.id);
    var wlFill = inWl ? '#f87171' : 'none';
    var wlClass = inWl ? ' active' : '';
    var wlTitle = inWl ? 'Quitar de favoritos' : 'Añadir a favoritos';
    var cartBtn = isOOS
      ? '<button class="btn-cart btn-cart--oos" disabled>Sin stock</button>'
      : '<button class="btn-cart" onclick="addToCart(' + product.id + ')">Añadir al carrito</button>';

    return '<article class="product-card' + (isOOS ? ' product-card--oos' : '') + '" data-product-id="' + product.id + '">' +
      '<span class="product-brand">' + product.brand + '</span>' +
      badgeHTML +
      '<div class="product-img" onclick="openQuickView(' + product.id + ')">' +
        productCardGalleryHTML(product) +
        '<div class="product-qv-overlay"><span>Vista rápida</span></div>' +
      '</div>' +
      '<div class="product-info">' +
        '<h3 class="product-name">' + product.name + '</h3>' +
        '<p class="product-desc">' + shortDesc + '</p>' +
        '<div class="product-price-row">' +
          '<span class="product-price">€' + product.price.toLocaleString() + '</span>' +
          oldPriceHTML + discountHTML +
        '</div>' +
        '<div class="product-actions">' +
          cartBtn +
          '<button class="btn-wishlist' + wlClass + '" onclick="toggleWishlist(' + product.id + ', this)" title="' + wlTitle + '">' +
            '<svg width="14" height="14" viewBox="0 0 24 24" fill="' + wlFill + '" stroke="#f87171" stroke-width="2"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>' +
          '</button>' +
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
    var bDecoded = decodeURIComponent(brandKey).toLowerCase();
    filtered = filtered.filter(function(p) { return (p.brand || '').toLowerCase() === bDecoded; });
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
    var isOOS2 = product.inStock === false;
    var badgeHTML = isOOS2
      ? '<span class="product-badge product-badge--oos">AGOTADO</span>'
      : (product.badge ? '<span class="product-badge">' + product.badge + '</span>' : '');
    var discount = product.oldPrice ? Math.round((1 - product.price / product.oldPrice) * 100) : 0;
    var oldPriceHTML = product.oldPrice ? '<span class="product-old-price">€' + product.oldPrice + '</span>' : '';
    var discountHTML = (!isOOS2 && discount > 0) ? '<span class="product-discount">-' + discount + '%</span>' : '';
    var descRaw = Array.isArray(product.description) ? product.description.join('. ') : (product.description || '');
    var shortDesc = descRaw.length > 88 ? descRaw.substring(0, 88) + '...' : descRaw;
    var inWl2 = isInWishlist(product.id);
    var wlFill2 = inWl2 ? '#f87171' : 'none';
    var wlClass2 = inWl2 ? ' active' : '';
    var wlTitle2 = inWl2 ? 'Quitar de favoritos' : 'Añadir a favoritos';
    var cartBtn2 = isOOS2
      ? '<button class="btn-cart btn-cart--oos" disabled>Sin stock</button>'
      : '<button class="btn-cart" onclick="addToCart(' + product.id + ')">Añadir al carrito</button>';

    return '<article class="product-card' + (isOOS2 ? ' product-card--oos' : '') + '" data-product-id="' + product.id + '">' +
      '<span class="product-brand">' + product.brand + '</span>' +
      badgeHTML +
      '<div class="product-img" onclick="openQuickView(' + product.id + ')">' +
        productCardGalleryHTML(product) +
        '<div class="product-qv-overlay"><span>Vista rápida</span></div>' +
      '</div>' +
      '<div class="product-info">' +
        '<h3 class="product-name">' + product.name + '</h3>' +
        '<p class="product-desc">' + shortDesc + '</p>' +
        '<div class="product-price-row"><span class="product-price">€' + product.price.toLocaleString() + '</span>' + oldPriceHTML + discountHTML + '</div>' +
        '<div class="product-actions">' +
          cartBtn2 +
          '<button class="btn-wishlist' + wlClass2 + '" onclick="toggleWishlist(' + product.id + ', this)" title="' + wlTitle2 + '">' +
            '<svg width="14" height="14" viewBox="0 0 24 24" fill="' + wlFill2 + '" stroke="#f87171" stroke-width="2"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>' +
          '</button>' +
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

  var specsHTML = product.specs ? Object.keys(product.specs).map(function(key) {
    var val = product.specs[key];
    return '<div class="qv-spec-row"><span class="qv-spec-label">' + key + '</span><span class="qv-spec-value">' + val + '</span></div>';
  }).join('') : '';

  var qvDiscount = product.oldPrice ? Math.round((1 - product.price / product.oldPrice) * 100) : 0;

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
      '<p class="qv-desc">' + (product.description || product.badge || '') + '</p>' +
      '<div class="qv-specs">' + specsHTML + '</div>' +
      '<div class="qv-price-row">' +
        '<span class="qv-price">€' + product.price.toLocaleString() + '</span>' +
        (product.oldPrice ? '<span class="qv-old-price">€' + product.oldPrice + '</span>' : '') +
        (qvDiscount > 0 ? '<span style="background:rgba(52,211,153,.15);color:var(--green);font-size:12px;font-weight:700;padding:3px 10px;border-radius:100px">-' + qvDiscount + '%</span>' : '') +
      '</div>' +
      '<div class="qv-trust-row">' +
        '<span class="qv-trust-item">✓ Garantía oficial 2 años</span>' +
        '<span class="qv-trust-item">✓ Envío gratis · 5 a 8 días hábiles</span>' +
        '<span class="qv-trust-item">✓ Devolución 30 días</span>' +
      '</div>' +
      (product.inStock === false
        ? '<button class="btn-primary qv-add-btn" disabled style="opacity:.45;cursor:not-allowed;background:rgba(99,102,241,.2)">Sin stock temporalmente</button>'
        : '<button class="btn-primary qv-add-btn" onclick="addToCart(' + product.id + ');closeQuickView()">Añadir al carrito — €' + product.price.toLocaleString() + '</button>') +
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
    if (p.specs) Object.keys(p.specs).forEach(function(k) {
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
      if (swatch.dataset.img) swapWatchImg(swatch.dataset.img);
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

  // ── Init: apply default color state and load correct image on page load ──
  var activeSwatch = document.querySelector('#strap-colors .swatch.active');
  if (activeSwatch) {
    var initImg = document.getElementById('config-watch-svg');
    if (initImg && activeSwatch.dataset.img) initImg.src = activeSwatch.dataset.img;
    applyColorFilter(activeSwatch.dataset.color, true);
  }

  // ── Consigue el tuyo: añade al carrito y abre panel lateral ──
  var addBtn = document.getElementById('add-config-to-cart');
  if (addBtn) {
    addBtn.addEventListener('click', function() {
      var orig = addBtn.innerHTML;
      addBtn.innerHTML = '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg> ¡Añadido al Carrito!';
      addBtn.disabled = true;
      setTimeout(function() { addBtn.innerHTML = orig; addBtn.disabled = false; }, 2200);
      addToCart(16);
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

  // ══ FUENTE ÚNICA DE VERDAD: registro de marcas desde PRODUCTS ══
  // Mapeo inverso: category string → filter key
  var CAT_TO_FK = {};
  Object.keys(FILTER_MAP).forEach(function(fk) {
    if (fk !== 'all') CAT_TO_FK[FILTER_MAP[fk]] = fk;
  });

  // Construye el registro global de marcas
  var BRAND_REGISTRY = {}; // key = "fk::brand_lower"
  PRODUCTS.forEach(function(p) {
    var cat   = (p.category || '').trim();
    var brand = (p.brand || '').trim();
    if (!cat || !brand) return;
    var fk = CAT_TO_FK[cat];
    if (!fk) return;
    var key = fk + '::' + brand.toLowerCase();
    if (!BRAND_REGISTRY[key]) {
      BRAND_REGISTRY[key] = {
        name:   brand,
        filter: fk,
        url:    'catalogo.html?filter=' + fk + '&brand=' + encodeURIComponent(brand),
        count:  0
      };
    }
    BRAND_REGISTRY[key].count++;
  });

  // ══ GENERA LINKS EN CADA DROPDOWN ══
  document.querySelectorAll('.mega-brands[data-filter]').forEach(function(container) {
    var fk = container.getAttribute('data-filter');
    if (!FILTER_MAP[fk]) return;

    var brands = Object.values(BRAND_REGISTRY)
      .filter(function(b) { return b.filter === fk; })
      .sort(function(a, b) { return b.count - a.count || a.name.localeCompare(b.name); })
      .slice(0, 6);

    container.innerHTML = brands.map(function(b) {
      return '<a href="' + b.url + '" class="mega-b" data-nav="' + b.url + '">' +
             '<strong>' + b.name + '</strong>' +
             '<span class="mega-bc">' + b.count + ' modelo' + (b.count !== 1 ? 's' : '') + '</span>' +
             '</a>';
    }).join('');

    // Actualiza "Ver X modelos →"
    var catKey = FILTER_MAP[fk];
    var total  = PRODUCTS.filter(function(p) { return p.category === catKey; }).length;
    var span   = container.closest('.mega-left') && container.closest('.mega-left').querySelector('.mega-all-link span');
    if (span) span.textContent = total + ' modelos →';
  });

  // ══ HOVER: clase JS garantiza pointer-events durante toda la interacción ══
  document.querySelectorAll('.nav-item').forEach(function(item) {
    var drop = item.querySelector('.mega-drop');
    if (!drop) return;
    var closeTimer;
    function open()  { clearTimeout(closeTimer); item.classList.add('mega-open'); }
    function close() { closeTimer = setTimeout(function() { item.classList.remove('mega-open'); }, 200); }
    item.addEventListener('mouseenter', open);
    item.addEventListener('mouseleave', close);
    drop.addEventListener('mouseenter', open);
    drop.addEventListener('mouseleave', close);
  });

  // ══ NAVEGACIÓN CENTRALIZADA: un solo handler, máxima fiabilidad ══
  document.addEventListener('click', function(e) {
    // Links de marca (.mega-b con data-nav)
    var brandLink = e.target.closest('[data-nav]');
    if (brandLink) {
      var url = brandLink.getAttribute('data-nav');
      if (url) { window.location.href = url; return; }
    }
    // "Ver todos" (.mega-all-link) y CTA lateral (.mega-see)
    var catLink = e.target.closest('a.mega-all-link, a.mega-see');
    if (catLink) {
      var href = catLink.getAttribute('href');
      if (href && href[0] !== '#') { window.location.href = href; }
    }
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
  var btn = form.querySelector('button[type="submit"]');
  var input = form.querySelector('input[type="email"]');
  var disclaimer = form.closest('.newsletter-content') && form.closest('.newsletter-content').querySelector('.newsletter-disclaimer');

  form.addEventListener('submit', function(e) {
    e.preventDefault();
    var email = (input && input.value || '').trim();
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      input && input.focus();
      return;
    }
    if (btn) { btn.disabled = true; btn.textContent = 'Enviando…'; }

    fetch('/api/review', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ action: 'newsletter', email: email })
    })
    .then(function(r) { return r.json(); })
    .then(function(data) {
      if (data.success) {
        form.innerHTML = '<p style="color:#a5b4fc;font-weight:600;font-size:15px;">✅ ¡Suscrito! Recibirás novedades y ofertas exclusivas en tu email.</p>';
      } else {
        if (btn) { btn.disabled = false; btn.textContent = 'Suscribirme'; }
        showToast(data.error || 'Error al suscribirse. Inténtalo de nuevo.');
      }
    })
    .catch(function() {
      if (btn) { btn.disabled = false; btn.textContent = 'Suscribirme'; }
      showToast('Error de conexión. Inténtalo de nuevo.');
    });
  });
}

// ─── MOBILE MENU ─────────────────────────────────────────────────────────────

function initMobileMenu() {
  var toggle  = document.getElementById('menu-toggle');
  var drawer  = document.getElementById('mobile-nav-drawer');
  var overlay = document.getElementById('mobile-nav-overlay');
  var closeBtn = document.getElementById('mobile-nav-close');
  if (!toggle || !drawer) return;

  function openMenu() {
    drawer.classList.add('open');
    overlay && overlay.classList.add('open');
    document.body.style.overflow = 'hidden';
    toggle.setAttribute('aria-expanded', 'true');
  }
  function closeMenu() {
    drawer.classList.remove('open');
    overlay && overlay.classList.remove('open');
    document.body.style.overflow = '';
    toggle.setAttribute('aria-expanded', 'false');
  }

  toggle.addEventListener('click', function() {
    drawer.classList.contains('open') ? closeMenu() : openMenu();
  });
  closeBtn && closeBtn.addEventListener('click', closeMenu);
  overlay && overlay.addEventListener('click', closeMenu);
  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') closeMenu();
  });
  drawer.querySelectorAll('.mnd-link').forEach(function(link) {
    link.addEventListener('click', function() { closeMenu(); });
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

var CATEGORY_LABELS = { relojes:'Relojes', auriculares:'Auriculares', altavoces:'Altavoces', 'teclados gaming':'Teclados Gaming', smartphones:'Smartphones' };

function initSearch() {
  var overlay   = document.getElementById('search-overlay');
  var searchBtn = document.getElementById('search-btn');
  var closeBtn  = document.getElementById('search-close');
  var input     = document.getElementById('search-input');
  var results   = document.getElementById('search-results');
  if (!overlay || !input) return;

  var focusedIdx    = -1;
  var debounceTimer = null;

  // Grupos de sinónimos — se expande la consulta con todos los términos del grupo
  var SYNONYMS = [
    ['reloj', 'relojes', 'watch', 'watches', 'smartwatch', 'smart watch', 'reloj inteligente', 'pulsera', 'smart band', 'banda', 'wearable'],
    ['auricular', 'auriculares', 'headphone', 'headphones', 'headset', 'cascos', 'earphone', 'earphones', 'earbuds', 'earbud', 'audifono', 'audifonos'],
    ['altavoz', 'altavoces', 'speaker', 'speakers', 'bocina', 'bocinas', 'parlante', 'parlantes', 'sonos'],
    ['teclado', 'teclados', 'keyboard', 'keyboards', 'gaming', 'periferico', 'perifericos'],
    ['smartphone', 'smartphones', 'telefono', 'telefonos', 'movil', 'moviles', 'celular', 'celulares', 'phone', 'iphone', 'android'],
    ['airpods', 'air pods', 'airpod'],
    ['galaxy watch', 'samsung watch', 'samsung reloj', 'galaxywatch'],
    ['galaxy a', 'samsung galaxy', 'samsung phone', 'samsung movil'],
    ['sony wh', 'sony xm', 'sony auriculares', 'wh1000', 'xm5', 'xm4'],
  ];

  function norm(s) {
    return (s || '').toLowerCase()
      .normalize('NFD').replace(/[̀-ͯ]/g, '')
      .replace(/[^a-z0-9 ]/g, ' ')
      .replace(/\s+/g, ' ')
      .trim();
  }

  function expandQuery(q) {
    var terms = [q];
    SYNONYMS.forEach(function(group) {
      var hit = group.some(function(syn) {
        var sn = norm(syn);
        return q === sn || q.includes(sn) || sn.includes(q);
      });
      if (hit) group.forEach(function(syn) { var sn = norm(syn); if (terms.indexOf(sn) === -1) terms.push(sn); });
    });
    return terms;
  }

  function scoreProduct(p, q) {
    if (!q) return 1;
    var name  = norm(p.name);
    var brand = norm(p.brand);
    var cat   = norm(CATEGORY_LABELS[p.category] || p.category || '');
    var desc  = norm(p.description || '');
    var terms = expandQuery(q);
    var best  = 0;
    terms.forEach(function(t) {
      if (!t) return;
      var s = 0;
      if (name === t || brand === t)    s = 100;
      else if (name.startsWith(t))      s = 90;
      else if (brand.startsWith(t))     s = 85;
      else if (name.includes(t))        s = 70;
      else if (brand.includes(t))       s = 65;
      else if (cat.includes(t))         s = 50;
      else if (desc.includes(t))        s = 30;
      else {
        t.split(' ').forEach(function(word) {
          if (word.length > 2) {
            if (name.includes(word))  s = Math.max(s, 45);
            if (brand.includes(word)) s = Math.max(s, 40);
            if (cat.includes(word))   s = Math.max(s, 28);
          }
        });
      }
      best = Math.max(best, s);
    });
    return best;
  }

  function openSearch() {
    overlay.classList.add('open');
    document.body.style.overflow = 'hidden';
    focusedIdx = -1;
    setTimeout(function() { input.focus(); }, 80);
    renderSearchResults('');
  }

  function closeSearch() {
    overlay.classList.remove('open');
    document.body.style.overflow = '';
    input.value = '';
    focusedIdx = -1;
  }

  function moveFocus(dir) {
    var items = results.querySelectorAll('.search-result-item');
    if (!items.length) return;
    items[focusedIdx] && items[focusedIdx].classList.remove('focused');
    focusedIdx = Math.max(-1, Math.min(items.length - 1, focusedIdx + dir));
    if (focusedIdx >= 0) {
      items[focusedIdx].classList.add('focused');
      items[focusedIdx].scrollIntoView({ block: 'nearest' });
    }
  }

  if (searchBtn) searchBtn.addEventListener('click', openSearch);
  if (closeBtn)  closeBtn.addEventListener('click', closeSearch);
  overlay.addEventListener('click', function(e) { if (e.target === overlay) closeSearch(); });

  document.addEventListener('keydown', function(e) {
    if ((e.ctrlKey || e.metaKey) && e.key === 'k') { e.preventDefault(); openSearch(); return; }
    if (!overlay.classList.contains('open')) return;
    if (e.key === 'Escape')    { closeSearch(); return; }
    if (e.key === 'ArrowDown') { e.preventDefault(); moveFocus(1); return; }
    if (e.key === 'ArrowUp')   { e.preventDefault(); moveFocus(-1); return; }
    if (e.key === 'Enter') {
      var items = results.querySelectorAll('.search-result-item');
      if (focusedIdx >= 0 && items[focusedIdx]) {
        items[focusedIdx].click();
      } else if (items.length === 1) {
        items[0].click();
      }
    }
  });

  input.addEventListener('input', function() {
    focusedIdx = -1;
    clearTimeout(debounceTimer);
    debounceTimer = setTimeout(function() { renderSearchResults(input.value.trim()); }, 60);
  });

  function catIcon(cat) {
    return cat === 'relojes' ? '⌚' : cat === 'auriculares' ? '🎧' : cat === 'altavoces' ? '🔊' : cat === 'teclados gaming' ? '⌨️' : cat === 'smartphones' ? '📱' : '✨';
  }

  function renderSearchResults(query) {
    var q = norm(query);

    if (!q) {
      results.innerHTML =
        '<p style="font-size:12px;color:var(--text-3);margin-bottom:10px;text-align:center;">Explorar por categoría</p>' +
        '<div class="search-cats">' +
        Object.keys(FILTER_MAP).filter(function(k) { return k !== 'all'; }).map(function(k) {
          var label = CATEGORY_LABELS[FILTER_MAP[k]] || k;
          return '<button class="search-cat-btn" onclick="window._searchGoCategory(\'' + k + '\')">' + catIcon(FILTER_MAP[k]) + ' ' + label + '</button>';
        }).join('') +
        '</div>';
      return;
    }

    var scored = PRODUCTS.map(function(p) {
      return { p: p, score: scoreProduct(p, q) };
    }).filter(function(x) { return x.score > 0; })
      .sort(function(a, b) { return b.score - a.score; })
      .slice(0, 8);

    if (!scored.length) {
      results.innerHTML =
        '<div class="search-empty">' +
        '<svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/></svg>' +
        '<p>Sin resultados para <strong>"' + query + '"</strong></p>' +
        '<p style="margin-top:6px;font-size:12px">Prueba con el nombre de marca o categoría.</p>' +
        '</div>';
      return;
    }

    results.innerHTML = scored.map(function(x) {
      var p = x.p;
      var imgHtml = p.image
        ? '<img class="sri-img" src="' + p.image + '" alt="" loading="lazy" onerror="this.style.display=\'none\'">'
        : '<div class="sri-img sri-img-ph">' + catIcon(p.category) + '</div>';
      return '<div class="search-result-item" data-product-id="' + p.id + '" onclick="window._searchGoProduct(' + p.id + ')" role="option" tabindex="-1">' +
        imgHtml +
        '<div class="sri-info"><div class="sri-name">' + p.name + '</div>' +
        '<div class="sri-meta">' + (CATEGORY_LABELS[p.category] || p.category) + ' · ' + p.brand + '</div></div>' +
        '<div class="sri-price">€' + Number(p.price).toFixed(2) + '</div>' +
        '</div>';
    }).join('');
  }

  window.searchByCategory = function(cat) { closeSearch(); filterAndScroll(cat); };

  // Navega al producto desde cualquier página
  window._searchGoProduct = function(id) {
    closeSearch();
    var product = PRODUCTS.find(function(p) { return String(p.id) === String(id); });
    if (!product) return;
    var filterKey = 'all';
    Object.keys(FILTER_MAP).forEach(function(k) {
      if (FILTER_MAP[k] === product.category) filterKey = k;
    });

    function highlight(id) {
      setTimeout(function() {
        var el = document.querySelector('[data-product-id="' + id + '"]');
        if (el) {
          el.scrollIntoView({ behavior: 'smooth', block: 'center' });
          el.classList.add('highlight-pulse');
          setTimeout(function() { el.classList.remove('highlight-pulse'); }, 1800);
        }
      }, 350);
    }

    if (document.getElementById('catalog-grid')) {
      var curBrand = new URLSearchParams(window.location.search).get('brand') || '';
      renderCatalogGrid('catalog-grid', filterKey, curBrand);
      highlight(id);
      return;
    }
    if (document.getElementById('products-grid')) {
      setFilter(filterKey);
      highlight(id);
      return;
    }
    // Cualquier otra página (index.html, etc.) → navegar al catálogo
    window.location.href = 'catalogo.html?filter=' + filterKey + '&product=' + id;
  };

  // Navega a categoría desde cualquier página
  window._searchGoCategory = function(filterKey) {
    closeSearch();
    if (document.getElementById('catalog-grid')) {
      renderCatalogGrid('catalog-grid', filterKey);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else if (document.getElementById('products-grid')) {
      filterAndScroll(filterKey);
    } else {
      window.location.href = 'catalogo.html?filter=' + filterKey;
    }
  };

  // Compatibilidad con llamadas antiguas a goToProduct
  window.goToProduct = window._searchGoProduct;
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
      var initial   = firstName.charAt(0).toUpperCase();

      // ── Build avatar button ──────────────────────────────────────
      loginBtn.classList.add('logged-in');
      loginBtn.innerHTML =
        '<div class="ud-btn-avatar">' + initial + '</div>' +
        '<span>' + firstName + '</span>' +
        '<svg class="ud-chevron" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="6 9 12 15 18 9"/></svg>';

      // ── Provider badge ───────────────────────────────────────────
      var prov = user.provider || 'Email';
      var provIcon = prov === 'Google'
        ? '<svg width="11" height="11" viewBox="0 0 24 24"><path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/><path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/><path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z"/><path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/></svg>'
        : prov === 'Facebook'
        ? '<svg width="11" height="11" viewBox="0 0 24 24" fill="#1877F2"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>'
        : '<svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>';

      var joinedText = user.joined
        ? 'Miembro desde ' + new Date(user.joined).toLocaleDateString('es-ES', { year: 'numeric', month: 'long' })
        : 'ZoneTechOnline';

      var couponRow = user.discount
        ? '<button class="ud-item" id="ud-coupon">' +
            '<div class="ud-item-icon"><svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#a78bfa" stroke-width="2"><path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z"/><line x1="7" y1="7" x2="7.01" y2="7"/></svg></div>' +
            '<span class="ud-item-label">Mi cupón de descuento</span>' +
            '<span class="ud-chip">ZONE10</span>' +
          '</button>'
        : '';

      // ── Build dropdown HTML ──────────────────────────────────────
      var dropdown = document.createElement('div');
      dropdown.className = 'user-dropdown';
      dropdown.id = 'user-dropdown';
      dropdown.innerHTML =
        '<div class="ud-header">' +
          '<div class="ud-avatar">' + initial + '</div>' +
          '<div class="ud-info">' +
            '<div class="ud-name">' + (user.name || 'Usuario') + '</div>' +
            '<div class="ud-email">' + (user.email || '') + '</div>' +
            '<span class="ud-provider-badge">' + provIcon + ' ' + prov + '</span>' +
          '</div>' +
        '</div>' +
        '<div class="ud-menu">' +
          '<button class="ud-item" id="ud-pedidos">' +
            '<div class="ud-item-icon"><svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#6ee7b7" stroke-width="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg></div>' +
            '<span class="ud-item-label">Mis pedidos</span>' +
            '<span class="ud-item-arrow">›</span>' +
          '</button>' +
          '<button class="ud-item" id="ud-wishlist">' +
            '<div class="ud-item-icon"><svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#f87171" stroke-width="2"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg></div>' +
            '<span class="ud-item-label">Lista de deseos</span>' +
            '<span class="ud-item-arrow">›</span>' +
          '</button>' +
          couponRow +
          '<button class="ud-item" id="ud-cuenta">' +
            '<div class="ud-item-icon"><svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#93c5fd" stroke-width="2"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg></div>' +
            '<span class="ud-item-label">Mi cuenta</span>' +
            '<span class="ud-item-arrow">›</span>' +
          '</button>' +
          '<div class="ud-divider"></div>' +
          '<button class="ud-item ud-item-danger" id="ud-logout">' +
            '<div class="ud-item-icon"><svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#f87171" stroke-width="2"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/><polyline points="16 17 21 12 16 7"/><line x1="21" y1="12" x2="9" y2="12"/></svg></div>' +
            '<span class="ud-item-label">Cerrar sesión</span>' +
          '</button>' +
        '</div>' +
        '<div class="ud-footer">' + joinedText + '</div>';

      // ── Wrap button + dropdown in container ──────────────────────
      var wrap = document.createElement('div');
      wrap.className = 'user-menu-wrap';
      loginBtn.parentNode.insertBefore(wrap, loginBtn);
      wrap.appendChild(loginBtn);
      wrap.appendChild(dropdown);

      // ── Toggle open/close ────────────────────────────────────────
      function openDropdown() {
        dropdown.classList.add('open');
        loginBtn.classList.add('open');
      }
      function closeDropdown() {
        dropdown.classList.remove('open');
        loginBtn.classList.remove('open');
      }

      loginBtn.addEventListener('click', function(e) {
        e.stopPropagation();
        dropdown.classList.contains('open') ? closeDropdown() : openDropdown();
      });

      document.addEventListener('click', function(e) {
        if (!wrap.contains(e.target)) closeDropdown();
      });

      document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') closeDropdown();
      });

      dropdown.addEventListener('click', function(e) { e.stopPropagation(); });

      // ── Menu actions ─────────────────────────────────────────────
      dropdown.querySelector('#ud-pedidos').addEventListener('click', function() {
        closeDropdown();
        window.location.href = 'mis-pedidos.html';
      });

      dropdown.querySelector('#ud-wishlist').addEventListener('click', function() {
        closeDropdown();
        window.location.href = 'lista-deseos.html';
      });

      if (couponRow) {
        dropdown.querySelector('#ud-coupon').addEventListener('click', function() {
          closeDropdown();
          if (navigator.clipboard && navigator.clipboard.writeText) {
            navigator.clipboard.writeText('ZONE10').then(function() {
              showToast('✅ Código ZONE10 copiado — aplícalo en el carrito para tu 10% de descuento.');
            }).catch(function() {
              showToast('🎁 Tu código: ZONE10 — introdúcelo al pagar para obtener el 10% dto.');
            });
          } else {
            showToast('🎁 Tu código: ZONE10 — introdúcelo al pagar para obtener el 10% dto.');
          }
        });
      }

      dropdown.querySelector('#ud-cuenta').addEventListener('click', function() {
        closeDropdown();
        window.location.href = 'mi-cuenta.html';
      });

      dropdown.querySelector('#ud-logout').addEventListener('click', function() {
        closeDropdown();
        localStorage.removeItem('zt_user');
        showToast('Sesión cerrada. ¡Hasta pronto, ' + firstName + '!');
        setTimeout(function() { location.reload(); }, 1200);
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
    { bg:'rgba(3,10,3,.88)',    border:'rgba(34,197,94,.28)'  },  // slide-1: verde oscuro (fitness watch)
    { bg:'rgba(8,3,22,.88)',    border:'rgba(168,85,247,.28)' },  // slide-2: violeta oscuro (auriculares)
    { bg:'rgba(18,3,3,.88)',    border:'rgba(239,68,68,.28)'  },  // slide-3: rojo oscuro (gaming RGB)
    { bg:'rgba(2,6,22,.88)',    border:'rgba(59,130,246,.28)' }   // slide-4: azul marino (smartphone)
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
    if (!iframe || iframe.getAttribute('src')) return;

    // Añadir enablejsapi para recibir eventos de error de YouTube
    var src = iframe.dataset.src;
    if (src.indexOf('enablejsapi') === -1) src += '&enablejsapi=1&origin=' + encodeURIComponent(location.origin);
    iframe.src = src;

    var wrap = slide.querySelector('.slide-video-wrap');

    // Fallback por timeout: si en 10s el iframe no respondió visualmente, ocultarlo
    var errorTimer = setTimeout(function() {
      if (wrap) wrap.classList.add('video-unavailable');
    }, 10000);

    iframe.addEventListener('load', function() { clearTimeout(errorTimer); }, { once: true });
    iframe.addEventListener('error', function() {
      clearTimeout(errorTimer);
      if (wrap) wrap.classList.add('video-unavailable');
    }, { once: true });
  }

  // Detectar errores de YouTube Iframe API (vídeo no disponible → código 100/101/150)
  window.addEventListener('message', function(e) {
    if (!e.data || typeof e.data !== 'string') return;
    var msg;
    try { msg = JSON.parse(e.data); } catch (_) { return; }
    if (msg.event === 'onError') {
      // Buscar el iframe del que provino el mensaje
      slides.forEach(function(sl) {
        var fr = sl.querySelector('iframe');
        if (!fr) return;
        try {
          var url = new URL(fr.src);
          if (url.origin === e.origin || e.origin === 'https://www.youtube.com') {
            var w = sl.querySelector('.slide-video-wrap');
            if (w) w.classList.add('video-unavailable');
          }
        } catch (_) {}
      });
    }
  });

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
  // Defer slide-0 YouTube iframe so the first paint is not blocked
  setTimeout(function() { activateIframe(slides[0]); }, 1500);
  updateNavTint(0);
  startProgress();
}

// ─── AUTH MODAL ───────────────────────────────────────────────────────────────

function initAuthModal() {
  // Inyectar el modal en cualquier página donde no exista (catalogo.html, etc.)
  if (!document.getElementById('auth-backdrop')) {
    var tpl = document.createElement('div');
    tpl.innerHTML =
      '<div class="auth-modal-backdrop" id="auth-backdrop">' +
        '<div class="auth-modal" id="auth-modal">' +
          '<button class="auth-modal-close" id="auth-close" aria-label="Cerrar">' +
            '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>' +
          '</button>' +
          '<div class="auth-modal-promo">' +
            '<div class="auth-promo-badge">🎁 OFERTA EXCLUSIVA</div>' +
            '<div class="auth-promo-discount">-10%</div>' +
            '<p class="auth-promo-text">en tu primera compra al registrarte hoy</p>' +
          '</div>' +
          '<div class="auth-tabs">' +
            '<button class="auth-tab active" data-tab="login">Iniciar sesión</button>' +
            '<button class="auth-tab" data-tab="register">Crear cuenta</button>' +
          '</div>' +
          '<div class="auth-form" id="form-login">' +
            '<p class="auth-quick-text">Accede con tu email o redes sociales. También puedes ir a la página completa de inicio de sesión.</p>' +
            '<button class="btn-primary btn-block" onclick="window.location.href=\'login.html\'">Ir a Iniciar Sesión</button>' +
            '<p class="auth-link" style="margin-top:12px">¿No tienes cuenta? <a href="register.html">Crear cuenta gratis</a></p>' +
          '</div>' +
          '<div class="auth-form hidden" id="form-register">' +
            '<p class="auth-quick-text">Crea tu cuenta y obtén un <strong>10% de descuento</strong> en tu primera compra con el código <strong>ZONE10</strong>.</p>' +
            '<button class="btn-primary btn-block" onclick="window.location.href=\'register.html\'">Crear cuenta y obtener 10%</button>' +
            '<p class="auth-legal" style="margin-top:12px">Al registrarte aceptas nuestra <a href="politica-privacidad.html">política de privacidad</a> (RGPD)</p>' +
          '</div>' +
          '<div class="auth-divider"><span>o accede rápido con</span></div>' +
          '<div class="auth-social">' +
            '<button class="btn-social" onclick="window.location.href=\'login.html\'">' +
              '<svg width="18" height="18" viewBox="0 0 24 24"><path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/><path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/><path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/><path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/></svg>' +
              'Google' +
            '</button>' +
            '<button class="btn-social" onclick="window.location.href=\'login.html\'">' +
              '<svg width="18" height="18" viewBox="0 0 24 24" fill="#1877F2"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>' +
              'Facebook' +
            '</button>' +
          '</div>' +
        '</div>' +
      '</div>';
    document.body.appendChild(tpl.firstElementChild);
  }

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

  // Solo abrir modal si el usuario NO está ya logueado (si está logueado, el dropdown ya gestiona el click)
  if (loginBtn && !localStorage.getItem('zt_user')) loginBtn.addEventListener('click', openAuth);
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

// ─── MANIFESTO CHIPS ──────────────────────────────────────────────────────────

function renderManifestoChips() {
  if (typeof PRODUCTS === 'undefined') return;

  var CLEAN_RE = /^(?:RELOJ\s+INTELIGENTE|SMARTWATCH|MOVIL|SMARTPHONE|TELEFONO\s+MOVIL|RUGERIZADO|TECLADO\s+GAMING|TECLADO|AURICULARES?\s+(?:GAMING\s+)?|ALTAVOZ(?:ES)?|SPEAKER)\s+/i;

  function chipLabel(p) {
    var brand = (p.brand || '').trim();
    var name  = (p.name  || '').replace(CLEAN_RE, '').trim();
    // Si el nombre ya empieza por la marca, usar el nombre limpio directamente
    if (name.toLowerCase().startsWith(brand.toLowerCase())) return name.slice(0, 40);
    // Si no, anteponer la marca
    return (brand + ' ' + name).slice(0, 42);
  }

  var cats = [
    { id: 'mf-chips-relojes',     cat: 'relojes',        filter: 'watches'     },
    { id: 'mf-chips-auriculares', cat: 'auriculares',     filter: 'headphones'  },
    { id: 'mf-chips-teclados',    cat: 'teclados gaming', filter: 'peripherals' },
    { id: 'mf-chips-altavoces',   cat: 'altavoces',       filter: 'speakers'    },
    { id: 'mf-chips-smartphones', cat: 'smartphones',     filter: 'smartphones' },
  ];

  cats.forEach(function(cfg) {
    var el = document.getElementById(cfg.id);
    if (!el) return;

    // Elige 4 productos representativos (distintas marcas prioritariamente)
    var pool = PRODUCTS.filter(function(p) { return p.category === cfg.cat && p.price; });
    var seen = {}, chosen = [];
    pool.forEach(function(p) {
      if (chosen.length >= 4) return;
      var bk = (p.brand || '').toLowerCase();
      if (!seen[bk]) { seen[bk] = true; chosen.push(p); }
    });
    if (chosen.length < 4) {
      pool.forEach(function(p) {
        if (chosen.length >= 4) return;
        if (chosen.indexOf(p) === -1) chosen.push(p);
      });
    }

    el.innerHTML = '';
    chosen.forEach(function(p) {
      var a = document.createElement('a');
      // URL directa al producto específico con scroll + highlight
      a.href = 'catalogo.html?filter=' + cfg.filter + '&product=' + p.id;
      a.className = 'mf-device-chip';
      a.setAttribute('aria-label', 'Ver ' + chipLabel(p));
      a.textContent = chipLabel(p);
      el.appendChild(a);
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
  var selectedR    = 0;
  var hints = ['','Muy mala','Mala','Regular','Buena','¡Excelente!'];

  // ── Custom product dropdown (reemplaza datalist nativo) ──
  var crDrop = document.getElementById('cr-product-drop');
  if (productSel && crDrop) {
    var dropOpen = false;

    // Construye filterKey a partir de la categoría del producto
    function productUrl(p) {
      var fk = 'all';
      Object.keys(FILTER_MAP).forEach(function(k) {
        if (FILTER_MAP[k] === p.category) fk = k;
      });
      return 'catalogo.html?filter=' + fk + '&product=' + p.id;
    }

    function renderDrop(query) {
      var q = (query || '').toLowerCase().trim();
      var matches = q.length < 1
        ? PRODUCTS.slice(0, 30)
        : PRODUCTS.filter(function(p) {
            return (p.name + ' ' + p.brand).toLowerCase().indexOf(q) !== -1;
          }).slice(0, 40);

      if (!matches.length) {
        crDrop.innerHTML = '<div class="cr-pd-empty">Sin resultados para "' + query + '"</div>';
      } else {
        crDrop.innerHTML = matches.map(function(p) {
          var url = productUrl(p);
          return '<div class="cr-pd-item" data-name="' + p.name + ' — ' + p.brand + '" data-url="' + url + '" role="option" tabindex="-1">' +
            '<div class="cr-pd-item-info">' +
              '<div class="cr-pd-name">' + p.name + '</div>' +
              '<div class="cr-pd-meta"><span class="cr-pd-brand">' + p.brand + '</span> · €' + Number(p.price).toFixed(2) + '</div>' +
            '</div>' +
            '<a href="' + url + '" class="cr-pd-nav" data-nav="' + url + '" tabindex="-1">Ver →</a>' +
          '</div>';
        }).join('');
      }
    }

    function openDrop() {
      renderDrop(productSel.value);
      crDrop.classList.add('open');
      productSel.setAttribute('aria-expanded', 'true');
      dropOpen = true;
    }
    function closeDrop() {
      crDrop.classList.remove('open');
      productSel.setAttribute('aria-expanded', 'false');
      dropOpen = false;
    }

    // Abrir al hacer focus / input
    productSel.addEventListener('focus', function() { openDrop(); });
    productSel.addEventListener('input', function() { renderDrop(productSel.value); if (!dropOpen) openDrop(); });

    // Cerrar al hacer click fuera
    document.addEventListener('click', function(e) {
      var wrap = document.getElementById('cr-product-wrap');
      if (wrap && !wrap.contains(e.target)) closeDrop();
    });

    // Clic en item: selecciona y cierra (sin navegar)
    // Clic en "Ver →": navega a la ficha del producto
    crDrop.addEventListener('click', function(e) {
      var navLink = e.target.closest('[data-nav]');
      if (navLink) {
        e.stopPropagation();
        window.location.href = navLink.getAttribute('data-nav');
        return;
      }
      var item = e.target.closest('.cr-pd-item');
      if (item) {
        productSel.value = item.getAttribute('data-name');
        closeDrop();
        productSel.focus();
      }
    });

    // Navegación por teclado
    productSel.addEventListener('keydown', function(e) {
      var items = crDrop.querySelectorAll('.cr-pd-item');
      var focused = crDrop.querySelector('.cr-pd-item[aria-selected="true"]');
      var idx = focused ? Array.prototype.indexOf.call(items, focused) : -1;
      if (e.key === 'ArrowDown') {
        e.preventDefault();
        if (!dropOpen) openDrop();
        var next = items[idx + 1] || items[0];
        if (focused) focused.removeAttribute('aria-selected');
        if (next) next.setAttribute('aria-selected', 'true');
      } else if (e.key === 'ArrowUp') {
        e.preventDefault();
        var prev = items[idx - 1] || items[items.length - 1];
        if (focused) focused.removeAttribute('aria-selected');
        if (prev) prev.setAttribute('aria-selected', 'true');
      } else if (e.key === 'Enter') {
        if (focused) {
          e.preventDefault();
          productSel.value = focused.getAttribute('data-name');
          closeDrop();
        }
      } else if (e.key === 'Escape') {
        closeDrop();
      }
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
      body: JSON.stringify({ name: name, product: product, rating: parseInt(rating), text: text })
    })
    .then(function(r) { return r.json(); })
    .then(function(data) {
      if (data.success) {
        form.reset();
        selectedR = 0;
        if (ratingIn) ratingIn.value = '';
        if (charEl) charEl.textContent = '0';
        if (hintEl) hintEl.textContent = 'Toca para valorar';
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

    // ── Helpers ────────────────────────────────────────────────────────────
    function fmt(n) { return '€' + Number(n).toFixed(2).replace('.', ','); }
    function safeMin(arr) {
      if (!arr || !arr.length) return 0;
      return arr.reduce(function(m, p) { return p.price < m ? p.price : m; }, Infinity);
    }
    function byCat(cat) {
      return PRODUCTS.filter(function(p) { return p.category === cat && p.price; });
    }
    function byBrand(brand) {
      var bl = brand.toLowerCase();
      return PRODUCTS.filter(function(p) { return p.brand && p.brand.toLowerCase() === bl && p.price; });
    }
    function byCatBrand(cat, brand) {
      var bl = brand.toLowerCase();
      return PRODUCTS.filter(function(p) { return p.category === cat && p.brand && p.brand.toLowerCase() === bl && p.price; });
    }
    function topN(arr, n, asc) {
      return arr.slice().sort(function(a, b) { return asc ? a.price - b.price : b.price - a.price; }).slice(0, n);
    }
    function cleanName(name) {
      return name.replace(/^(?:MOVIL|SMARTPHONE|TELEFONO MOVIL|RUGERIZADO|TECLADO|AURICULARES?)\s+/i, '').trim();
    }
    // Obtiene el valor exacto de brand del catálogo (respeta mayúsculas reales)
    function realBrand(name) {
      var bl = name.toLowerCase();
      var p = PRODUCTS.filter(function(x) { return x.brand && x.brand.toLowerCase() === bl; })[0];
      return p ? p.brand : name;
    }
    var catToFilter = { 'relojes':'watches', 'auriculares':'headphones', 'altavoces':'speakers', 'teclados gaming':'peripherals', 'smartphones':'smartphones' };
    function listItems(arr, n, asc) {
      if (!arr || !arr.length) return '<em>Sin stock disponible</em>';
      return topN(arr, n, asc).map(function(p) {
        var fk = catToFilter[p.category] || 'all';
        return '<a class="ai-msg-link ai-prod-link" href="catalogo.html?filter=' + fk + '&product=' + p.id + '">' + cleanName(p.name) + ' (' + fmt(p.price) + ')</a>';
      }).join(' · ');
    }
    // Genera botón CTA con URL correcta y aria-label accesible
    function cta(label, fk, brand) {
      var rb = brand ? realBrand(brand) : null;
      var url = rb
        ? 'catalogo.html?filter=' + fk + '&brand=' + encodeURIComponent(rb)
        : 'catalogo.html?filter=' + fk;
      return '<a class="ai-msg-link" href="' + url + '" aria-label="Ver ' + label + '">' + label + ' →</a>';
    }
    function brandCounts(arr) {
      var m = {};
      arr.forEach(function(p) { if (p.brand) m[p.brand] = (m[p.brand] || 0) + 1; });
      return m;
    }
    function brandCountStr(arr, n) {
      var bc = brandCounts(arr);
      return Object.keys(bc).slice(0, n || 4).map(function(b) {
        return '<strong>' + b + '</strong> (' + bc[b] + ')';
      }).join(' · ');
    }

    // ── Live stats ─────────────────────────────────────────────────────────
    var allPriced   = PRODUCTS.filter(function(p) { return p.price; });
    var relojes     = byCat('relojes');
    var auriculares = byCat('auriculares');
    var altavoces   = byCat('altavoces');
    var gaming      = byCat('teclados gaming');
    var phones      = byCat('smartphones');

    // ══════════════════════════════════════════════════════════════════════
    // PRODUCTOS ESPECÍFICOS (más específico primero)
    // ══════════════════════════════════════════════════════════════════════

    // ── AirPods → auriculares + Apple ──────────────────────────────────────
    if (/airpods?|air pods?/.test(ql)) {
      var airp = byCatBrand('auriculares', 'Apple');
      var src  = airp.length ? airp : byBrand('Apple');
      return 'AirPods <strong>Apple</strong> (' + src.length + ' modelos desde ' + fmt(safeMin(src)) + '): ' +
             listItems(src, 4, true) + '. ' +
             cta('Ver AirPods', 'headphones', 'Apple');
    }

    // ── iPhone → smartphones + Apple ──────────────────────────────────────
    if (/iphone/.test(ql)) {
      var iphp = byCatBrand('smartphones', 'Apple');
      var src  = iphp.length ? iphp : byBrand('Apple');
      return 'iPhone <strong>Apple</strong> (' + src.length + ' modelos desde ' + fmt(safeMin(src)) + '): ' +
             listItems(src, 4, true) + '. ' +
             cta('Ver iPhone', 'smartphones', 'Apple');
    }

    // ── Apple Watch / Watch SE / Series → relojes + Apple ─────────────────
    if (/apple watch|watch se|series \d+/.test(ql)) {
      var awp = byCatBrand('relojes', 'Apple');
      var src  = awp.length ? awp : byBrand('Apple');
      return '<strong>Apple Watch</strong> (' + src.length + ' modelos desde ' + fmt(safeMin(src)) + '): ' +
             listItems(src, 4, true) + '. WatchOS 11 · resistencia 50m. ' +
             cta('Ver Apple Watch', 'watches', 'Apple');
    }

    // ── Apple genérico → muestra todos los productos Apple por categoría ───
    if (/\bapple\b/.test(ql)) {
      var allApple  = byBrand('Apple');
      var apWatches = byCatBrand('relojes', 'Apple');
      var apAir     = byCatBrand('auriculares', 'Apple');
      var apPhone   = byCatBrand('smartphones', 'Apple');
      var ctaLinks  = [];
      if (apWatches.length) ctaLinks.push(cta('Apple Watch', 'watches', 'Apple'));
      if (apAir.length)     ctaLinks.push(cta('AirPods', 'headphones', 'Apple'));
      if (apPhone.length)   ctaLinks.push(cta('iPhone', 'smartphones', 'Apple'));
      return 'Gama <strong>Apple</strong> (' + allApple.length + ' productos desde ' + fmt(safeMin(allApple)) + '): ' +
             listItems(allApple, 5, true) + '. ' + ctaLinks.join(' ');
    }

    // ── Garmin → relojes deportivos ───────────────────────────────────────
    if (/garmin|forerunner|fen[i]x|venu|vivoactive|instinct/.test(ql)) {
      var gp  = byCatBrand('relojes', 'Garmin');
      var src = gp.length ? gp : byBrand('Garmin');
      return 'Gama <strong>Garmin</strong> (' + src.length + ' relojes desde ' + fmt(safeMin(src)) + '): ' +
             listItems(src, 5, true) + '. GPS multibanda · Salud avanzada · Deportes. ' +
             cta('Ver Garmin', 'watches', 'Garmin');
    }

    // ── Samsung Galaxy Watch → relojes ────────────────────────────────────
    if (/galaxy watch|galaxy.*reloj|reloj.*samsung/.test(ql)) {
      var sgw = byCatBrand('relojes', 'Samsung');
      var src = sgw.length ? sgw : byCat('relojes');
      return '<strong>Samsung Galaxy Watch</strong> (' + src.length + ' modelos desde ' + fmt(safeMin(src)) + '): ' +
             listItems(src, 4, true) + '. ' +
             cta('Ver Galaxy Watch', 'watches', 'Samsung');
    }

    // ── Samsung Galaxy A/S → smartphones ─────────────────────────────────
    if (/galaxy [as]\d|samsung.*m[oó]vil|samsung.*smartphone|m[oó]vil.*samsung/.test(ql)) {
      var ssp = byCatBrand('smartphones', 'Samsung');
      var src = ssp.length ? ssp : phones;
      return '<strong>Samsung Smartphones</strong> (' + src.length + ' modelos desde ' + fmt(safeMin(src)) + '): ' +
             listItems(src, 4, true) + '. ' +
             cta('Ver Samsung Phones', 'smartphones', 'Samsung');
    }

    // ── Samsung genérico → multi-categoría ───────────────────────────────
    if (/\bsamsung\b/.test(ql)) {
      var sAll     = byBrand('Samsung');
      var sWatches = byCatBrand('relojes', 'Samsung');
      var sPhones  = byCatBrand('smartphones', 'Samsung');
      var sCtas    = [];
      if (sWatches.length) sCtas.push(cta('Relojes Samsung', 'watches', 'Samsung'));
      if (sPhones.length)  sCtas.push(cta('Phones Samsung', 'smartphones', 'Samsung'));
      return 'Gama <strong>Samsung</strong> (' + sAll.length + ' productos desde ' + fmt(safeMin(sAll)) + '): ' +
             listItems(sAll, 4, true) + '. ' + (sCtas.length ? sCtas.join(' ') : cta('Ver Samsung', 'watches', 'Samsung'));
    }

    // ── Sony auriculares (específico) ─────────────────────────────────────
    if (/sony.*auricular|auricular.*sony|wh[\-. ]c|wf[\-. ]c|ult wear/.test(ql)) {
      var sa  = byCatBrand('auriculares', 'Sony');
      var src = sa.length ? sa : byBrand('Sony');
      return '<strong>Sony Auriculares</strong> (' + src.length + ' modelos desde ' + fmt(safeMin(src)) + '): ' +
             listItems(src, 5, true) + '. Cancelación de ruido · Hi-Res Audio. ' +
             cta('Ver Sony', 'headphones', 'Sony');
    }

    // ── Sony genérico → auriculares (categoría principal de Sony) ─────────
    if (/\bsony\b/.test(ql)) {
      var soAll  = byBrand('Sony');
      var soHead = byCatBrand('auriculares', 'Sony');
      var src    = soAll.length ? soAll : auriculares;
      return '<strong>Sony</strong> (' + src.length + ' productos desde ' + fmt(safeMin(src)) + '): ' +
             listItems(src, 5, true) + '. ' +
             cta('Ver Sony', 'headphones', 'Sony');
    }

    // ── JBL → altavoces ───────────────────────────────────────────────────
    if (/\bjbl\b|jbl go|jbl clip|jbl flip|jbl charge/.test(ql)) {
      var jp  = byBrand('JBL');
      var src = jp.length ? jp : altavoces;
      return '<strong>JBL</strong> (' + src.length + ' altavoces desde ' + fmt(safeMin(src)) + '): ' +
             listItems(src, 5, true) + '. Portátiles · Resistentes al agua. ' +
             cta('Ver JBL', 'speakers', 'JBL');
    }

    // ── Xiaomi → relojes + posiblemente phones ────────────────────────────
    if (/xiaomi|redmi watch|mi band|smart band/.test(ql)) {
      var xAll     = byBrand('Xiaomi');
      var xWatches = byCatBrand('relojes', 'Xiaomi');
      var xPhones  = byCatBrand('smartphones', 'Xiaomi');
      var xCta     = xWatches.length
        ? cta('Ver Xiaomi Relojes', 'watches', 'Xiaomi')
        : (xPhones.length ? cta('Ver Xiaomi Phones', 'smartphones', 'Xiaomi') : cta('Ver Xiaomi', 'watches', 'Xiaomi'));
      var src = xAll.length ? xAll : relojes;
      return 'Gama <strong>Xiaomi</strong> (' + src.length + ' productos desde ' + fmt(safeMin(src)) + '): ' +
             listItems(src, 5, true) + '. ' + xCta;
    }

    // ── TCL → smartphones ─────────────────────────────────────────────────
    if (/\btcl\b|nxtpaper/.test(ql)) {
      var tp  = byCatBrand('smartphones', 'TCL');
      var src = tp.length ? tp : phones;
      return '<strong>TCL NXTPAPER</strong> (' + src.length + ' smartphones desde ' + fmt(safeMin(src)) + '): ' +
             listItems(src, 5, true) + '. ' +
             cta('Ver TCL', 'smartphones', 'TCL');
    }

    // ── ASUS → periféricos gaming (+ auriculares gaming si aplica) ─────────
    if (/\basus\b|\brog\b/.test(ql)) {
      var asusGam = byCatBrand('teclados gaming', 'ASUS');
      var asusAur = byCatBrand('auriculares', 'ASUS');
      var src     = asusGam.length ? asusGam : (asusAur.length ? asusAur : byBrand('ASUS'));
      var aCta    = asusGam.length
        ? cta('Ver ASUS Gaming', 'peripherals', 'ASUS')
        : cta('Ver ASUS', 'headphones', 'ASUS');
      return '<strong>ASUS ROG</strong> (' + src.length + ' modelos desde ' + fmt(safeMin(src)) + '): ' +
             listItems(src, 4, true) + '. ' + aCta;
    }

    // ── Logitech → periféricos/altavoces ─────────────────────────────────
    if (/logitech/.test(ql)) {
      var logAll  = byBrand('LOGITECH');
      if (!logAll.length) logAll = byBrand('Logitech');
      var src = logAll.length ? logAll : gaming;
      return '<strong>Logitech</strong> (' + src.length + ' productos desde ' + fmt(safeMin(src)) + '): ' +
             listItems(src, 4, true) + '. ' +
             cta('Ver Logitech', 'peripherals', 'LOGITECH');
    }

    // ══════════════════════════════════════════════════════════════════════
    // CATEGORÍAS (menos específico)
    // ══════════════════════════════════════════════════════════════════════

    // ── auriculares ───────────────────────────────────────────────────────
    if (/auricular|tws|earbuds|cascos|headphone|in.ear|inalámbrico.*escuchar/.test(ql)) {
      return 'Auriculares (' + auriculares.length + ' modelos · ' + brandCountStr(auriculares, 4) +
             ' · desde ' + fmt(safeMin(auriculares)) + '): ' +
             listItems(auriculares, 4, true) + '. ' +
             cta('Ver auriculares', 'headphones', null);
    }

    // ── altavoces ─────────────────────────────────────────────────────────
    if (/altavoz|altavoces|speaker|bocina|bluetooth.*sonido|sonido.*bluetooth/.test(ql)) {
      return 'Altavoces (' + altavoces.length + ' modelos · ' + brandCountStr(altavoces, 3) +
             ' · desde ' + fmt(safeMin(altavoces)) + '): ' +
             listItems(altavoces, 4, true) + '. ' +
             cta('Ver altavoces', 'speakers', null);
    }

    // ── relojes / deportivo / running ─────────────────────────────────────
    if (/reloj|smartwatch|wearable|deport|running|fitness|pulsera|salud/.test(ql)) {
      return 'Relojes inteligentes (' + relojes.length + ' modelos · ' + brandCountStr(relojes, 4) +
             ' · desde ' + fmt(safeMin(relojes)) + '): ' +
             listItems(relojes, 4, true) + '. ' +
             cta('Ver relojes', 'watches', null);
    }

    // ── gaming / teclado / periférico ─────────────────────────────────────
    if (/gaming|teclado|perif[eé]rico|ratón|mouse/.test(ql)) {
      return 'Periféricos gaming (' + gaming.length + ' modelos · ' + brandCountStr(gaming, 3) +
             ' · desde ' + fmt(safeMin(gaming)) + '): ' +
             listItems(gaming, 4, true) + '. ' +
             cta('Ver gaming', 'peripherals', null);
    }

    // ── smartphones / móvil / teléfono ───────────────────────────────────
    if (/smartphone|m[oó]vil|tel[eé]fono|celular/.test(ql)) {
      return 'Smartphones (' + phones.length + ' modelos · ' + brandCountStr(phones, 4) +
             ' · desde ' + fmt(safeMin(phones)) + '): ' +
             listItems(phones, 4, true) + '. ' +
             cta('Ver smartphones', 'smartphones', null);
    }

    // ── precio: los más baratos ───────────────────────────────────────────
    if (/barato|econ[oó]mico|precio|asequible|oferta|bajo precio|menos de/.test(ql)) {
      return 'Los más económicos del catálogo: ' + listItems(allPriced, 4, true) +
             '. <a class="ai-msg-link" href="catalogo.html" aria-label="Ver catálogo completo">Ver catálogo →</a>';
    }

    // ── precio: premium ───────────────────────────────────────────────────
    if (/premium|caro|mejor|top|m[aá]s completo|el mejor/.test(ql)) {
      return 'Los más premium: ' + listItems(allPriced, 3, false) +
             '. <a class="ai-msg-link" href="catalogo.html" aria-label="Ver catálogo completo">Ver catálogo →</a>';
    }

    // ── recomendación general ─────────────────────────────────────────────
    if (/compar|recomiend|sugier|cu[aá]l|qu[eé].*comprar/.test(ql)) {
      return '¿Qué buscas? ' +
             '<a class="ai-msg-link ai-prod-link" href="catalogo.html?filter=watches">Relojes (' + relojes.length + ')</a> · ' +
             '<a class="ai-msg-link ai-prod-link" href="catalogo.html?filter=headphones">Auriculares (' + auriculares.length + ')</a> · ' +
             '<a class="ai-msg-link ai-prod-link" href="catalogo.html?filter=speakers">Altavoces (' + altavoces.length + ')</a> · ' +
             '<a class="ai-msg-link ai-prod-link" href="catalogo.html?filter=peripherals">Gaming (' + gaming.length + ')</a> · ' +
             '<a class="ai-msg-link ai-prod-link" href="catalogo.html?filter=smartphones">Smartphones (' + phones.length + ')</a>';
    }

    // ── fallback dinámico ─────────────────────────────────────────────────
    return 'En ZoneTechOnline tenemos <strong>' + PRODUCTS.length + ' productos</strong>: ' +
           '<strong>Relojes</strong> (' + relojes.length + ') · ' +
           '<strong>Auriculares</strong> (' + auriculares.length + ') · ' +
           '<strong>Altavoces</strong> (' + altavoces.length + ') · ' +
           '<strong>Periféricos</strong> (' + gaming.length + ') · ' +
           '<strong>Smartphones</strong> (' + phones.length + ') — desde ' + fmt(safeMin(allPriced)) + '. ' +
           '<a class="ai-msg-link" href="catalogo.html" aria-label="Ver catálogo completo">Ver catálogo →</a>';
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
      // Calcular métricas del catálogo en tiempo real
      var allPriced = PRODUCTS.filter(function(p) { return p.price; });
      var minPrice  = allPriced.reduce(function(m, p) { return p.price < m ? p.price : m; }, Infinity);
      var fmtMin    = '€' + minPrice.toFixed(2).replace('.', ',');
      var nRel  = PRODUCTS.filter(function(p) { return p.category === 'relojes';         }).length;
      var nAur  = PRODUCTS.filter(function(p) { return p.category === 'auriculares';     }).length;
      var nAlt  = PRODUCTS.filter(function(p) { return p.category === 'altavoces';       }).length;
      var nGam  = PRODUCTS.filter(function(p) { return p.category === 'teclados gaming'; }).length;
      var nPho  = PRODUCTS.filter(function(p) { return p.category === 'smartphones';     }).length;
      setTimeout(function() {
        appendMsg(
          '¡Hola! Soy el asistente de ZoneTechOnline. Tenemos <strong>' + PRODUCTS.length + ' productos</strong> en catálogo: ' +
          '<strong>' + nRel + ' relojes</strong> · ' +
          '<strong>' + nAur + ' auriculares</strong> · ' +
          '<strong>' + nAlt + ' altavoces</strong> · ' +
          '<strong>' + nGam + ' periféricos</strong> · ' +
          '<strong>' + nPho + ' smartphones</strong> — desde ' + fmtMin + '. ¿Qué buscas?',
          'bot'
        );
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

// ─── CHEAPEST SHOWCASE (1 producto más barato por categoría) ─────────────────
function renderCheapestShowcase() {
  var grid = document.getElementById('cheapest-grid');
  if (!grid) return;

  var CATS = [
    { key: 'relojes',         label: 'Relojes Inteligentes', bdg: 'sc-bdg-green'  },
    { key: 'auriculares',     label: 'Auriculares',           bdg: 'sc-bdg-gold'   },
    { key: 'altavoces',       label: 'Altavoces',             bdg: 'sc-bdg-accent' },
    { key: 'teclados gaming', label: 'Teclados Gaming',       bdg: 'sc-bdg-orange' },
    { key: 'smartphones',     label: 'Smartphones',           bdg: 'sc-bdg-red'    },
  ];

  var html = '';
  CATS.forEach(function(cat) {
    var p = PRODUCTS
      .filter(function(x) { return x.category === cat.key && x.price; })
      .sort(function(a, b) { return a.price - b.price; })[0];

    if (!p) return;

    var desc = Array.isArray(p.description)
      ? p.description.slice(0, 2).join('. ')
      : (typeof p.description === 'string' ? p.description.slice(0, 110) : '');

    var badge = p.badge
      || (Array.isArray(p.description) && p.description[0] ? p.description[0].slice(0, 40) : cat.label);

    var name = p.name
      .replace(/^(?:MOVIL|SMARTPHONE|TELEFONO MOVIL|RUGERIZADO)\s+/i, '')
      .trim();

    var priceStr = '€' + p.price.toFixed(2).replace('.', ',');

    html +=
      '<div class="sc-card">' +
        '<div class="sc-img-wrap">' +
          '<img class="sc-img" src="' + (p.image || '') + '" alt="' + name + '" loading="lazy" onerror="this.style.display=\'none\'">' +
          '<span class="sc-bdg ' + cat.bdg + '">' + badge + '</span>' +
        '</div>' +
        '<div class="sc-body">' +
          '<div class="sc-meta-row">' +
            '<span class="sc-brand">' + (p.brand || '') + '</span>' +
            '<span class="sc-cat">' + cat.label + '</span>' +
          '</div>' +
          '<div class="sc-name">' + name + '</div>' +
          '<div class="sc-desc">' + desc + '</div>' +
          '<div class="sc-footer">' +
            '<div class="sc-price">' + priceStr + '<small>IVA incluido</small></div>' +
            '<button class="sc-btn-add" onclick="addToCart(' + p.id + ')">+ Carrito</button>' +
          '</div>' +
        '</div>' +
      '</div>';
  });

  grid.innerHTML = html;
}

// ─── SHOWCASE (5 estrellas por categoría + 3 opciones accesibles = grid 4×2) ──
function renderShowcase() {
  var grid = document.getElementById('showcase-grid');
  if (!grid) return;

  var CATS = [
    { key: 'relojes',         label: 'Relojes Inteligentes', bdg: 'sc-bdg-green'  },
    { key: 'auriculares',     label: 'Auriculares Premium',   bdg: 'sc-bdg-gold'   },
    { key: 'altavoces',       label: 'Altavoces',             bdg: 'sc-bdg-accent' },
    { key: 'teclados gaming', label: 'Periféricos Gaming',    bdg: 'sc-bdg-orange' },
    { key: 'smartphones',     label: 'Smartphones',           bdg: 'sc-bdg-red'    },
  ];

  // 3 productos accesibles fijos para completar el grid 4×2
  var EXTRA = [
    { id: 1,   label: 'Reloj Inteligente', bdg: 'sc-bdg-green'  },
    { id: 62,  label: 'Auriculares',        bdg: 'sc-bdg-gold'   },
    { id: 127, label: 'Altavoz Portátil',   bdg: 'sc-bdg-accent' },
  ];

  var CAT_FILTER = { 'relojes':'watches', 'auriculares':'headphones', 'altavoces':'speakers', 'teclados gaming':'peripherals', 'smartphones':'smartphones' };

  function buildCard(p, catLabel, catBdg) {
    var fk  = CAT_FILTER[p.category] || 'all';
    var url = 'catalogo.html?filter=' + fk + '&product=' + p.id;

    var desc = Array.isArray(p.description)
      ? p.description.slice(0, 2).join('. ')
      : (typeof p.description === 'string' ? p.description.slice(0, 110) : '');

    var badge = p.badge
      || (Array.isArray(p.description) && p.description[0] ? p.description[0].slice(0, 40) : catLabel);

    var name = p.name
      .replace(/^(?:MOVIL|SMARTPHONE|TELEFONO MOVIL|RUGERIZADO|TECLADO)\s+/i, '')
      .trim();

    var priceStr = '€' + p.price.toFixed(2).replace('.', ',');

    return '<div class="sc-card" role="article">' +
      '<div class="sc-img-wrap">' +
        '<a href="' + url + '" class="sc-img-link" aria-hidden="true" tabindex="-1">' +
          '<img class="sc-img" src="' + (p.image || '') + '" alt="' + name + '" loading="lazy" onerror="this.style.display=\'none\'">' +
        '</a>' +
        '<span class="sc-bdg ' + catBdg + '">' + badge + '</span>' +
      '</div>' +
      '<div class="sc-body">' +
        '<div class="sc-meta-row">' +
          '<span class="sc-brand">' + (p.brand || '') + '</span>' +
          '<span class="sc-cat">' + catLabel + '</span>' +
        '</div>' +
        '<a href="' + url + '" class="sc-name" aria-label="Ver ' + name + '">' + name + '</a>' +
        '<div class="sc-desc">' + desc + '</div>' +
        '<div class="sc-footer">' +
          '<div class="sc-price">' + priceStr + '<small>IVA incluido</small></div>' +
          '<div class="sc-actions">' +
            '<a class="sc-btn-view" href="' + url + '" aria-label="Ver producto ' + name + '">Ver Producto <span class="sc-arrow">→</span></a>' +
            '<button class="sc-btn-add" onclick="addToCart(' + p.id + ')" aria-label="Añadir ' + name + ' al carrito">+ Carrito</button>' +
          '</div>' +
        '</div>' +
      '</div>' +
    '</div>';
  }

  var html = '';

  CATS.forEach(function(cat) {
    var p = PRODUCTS
      .filter(function(x) { return x.category === cat.key && x.price; })
      .sort(function(a, b) { return (b.price || 0) - (a.price || 0); })[0];
    if (!p) return;
    html += buildCard(p, cat.label, cat.bdg);
  });

  EXTRA.forEach(function(acc) {
    var p = PRODUCTS.filter(function(x) { return x.id === acc.id; })[0];
    if (!p) return;
    html += buildCard(p, acc.label, acc.bdg);
  });

  grid.innerHTML = html;
}

// ─── PRODUCTOS ESTRELLA (footer dinámico) ────────────────────────────────────
function renderProductosEstrella() {
  var grid = document.getElementById('footer-products-grid');
  if (!grid) return;

  var CATS = [
    { key: 'relojes',     label: 'Relojes Inteligentes', filter: 'watches'     },
    { key: 'auriculares', label: 'Auriculares',           filter: 'headphones'  },
    { key: 'altavoces',   label: 'Altavoces',             filter: 'speakers'    },
    { key: 'teclados gaming', label: 'Periféricos Gaming',    filter: 'peripherals' },
    { key: 'smartphones', label: 'Smartphones',           filter: 'smartphones' },
  ];

  var html = '';
  CATS.forEach(function(cat) {
    var products = PRODUCTS
      .filter(function(p) { return p.category === cat.key; })
      .slice(0, 4);
    if (!products.length) return;

    // Dos columnas por categoría: productos 1-2 y 3-4
    [[0, 1], [2, 3]].forEach(function(pair) {
      var group = products.slice(pair[0], pair[1] + 1).filter(Boolean);
      if (!group.length) return;

      var brands = group
        .map(function(p) { return p.brand; })
        .filter(function(v, i, a) { return a.indexOf(v) === i; })
        .slice(0, 2).join(' · ');

      var names = group
        .map(function(p) {
          return p.name
            .replace(/^(?:MOVIL|SMARTPHONE|TELEFONO MOVIL|RUGERIZADO)\s+/i, '')
            .trim().slice(0, 38);
        })
        .join(' · ');

      var desc = group[0].description;
      var specLine = Array.isArray(desc)
        ? desc.slice(0, 2).join(' · ')
        : (typeof desc === 'string' ? desc.slice(0, 70) : '');

      var minPrice = Math.min.apply(null, group.map(function(p) { return p.price || 9999; }));
      var priceStr = minPrice < 9999 ? 'desde ' + minPrice.toFixed(2) + ' EUR' : '';

      html += '<div class="footer-product-item">' +
        '<span class="footer-product-cat">' + cat.label + ' · ' + brands + '</span>' +
        '<a href="catalogo.html?filter=' + cat.filter + '" class="footer-product-link">' + names + '</a>' +
        '<span class="footer-product-tag">' + specLine + (priceStr ? ' · ' + priceStr : '') + '</span>' +
      '</div>';
    });
  });

  grid.innerHTML = html;
}

// ─── INIT ─────────────────────────────────────────────────────────────────────

document.addEventListener('DOMContentLoaded', function() {
  initMegaMenu();
  initNavbar();
  initMobileMenu();
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
  renderShowcase();
  renderProductosEstrella();
  renderManifestoChips();

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



