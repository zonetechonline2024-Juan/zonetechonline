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
// Fuente: Depau.es — scraping 30/05/2026 — 5 productos Xiaomi ordenados por precio ascendente
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

  // ── 2 · Xiaomi Watch S3 ──────────────────────────────────────────────────
  {
    id: 2,
    name: 'Xiaomi Watch S3',
    brand: 'Xiaomi',
    category: 'relojes',
    price: 99.95,
    oldPrice: 129.95,
    badge: 'Nuevo 2024',
    image: 'https://cdn2.depau.es/articulos/448/448/fixed/art_xia-reloj%20watch%20s3%20bk_1.jpg',
    images: [
      'https://cdn2.depau.es/articulos/448/448/fixed/art_xia-reloj%20watch%20s3%20bk_1.jpg',
      'https://cdn2.depau.es/articulos/448/448/fixed/art_xia-reloj%20watch%20s3%20sv_1.jpg'
    ],
    description: 'Smartwatch premium con pantalla AMOLED 1,43" HD y cristal de zafiro. GPS integrado, 150+ modos deportivos, NFC y llamadas Bluetooth. Hasta 12 días de batería.',
    specs: {
      'Pantalla': 'AMOLED 1,43" HD',
      'Cristal': 'Zafiro',
      'NFC': 'Sí',
      'GPS': 'Integrado',
      'Llamadas BT': 'Sí',
      'Batería': 'Hasta 12 días',
      'SKU': 'XIA-RELOJ WATCH S3 BK'
    }
  },

  // ── 3 · Xiaomi Watch S4 Sport ────────────────────────────────────────────
  {
    id: 3,
    name: 'Xiaomi Watch S4 Sport',
    brand: 'Xiaomi',
    category: 'relojes',
    price: 149.95,
    oldPrice: 179.95,
    badge: 'Sport Edition',
    image: 'https://cdn2.depau.es/articulos/448/448/fixed/art_xia-reloj%20watch%20s4%20sport%20bk_1.jpg',
    images: [
      'https://cdn2.depau.es/articulos/448/448/fixed/art_xia-reloj%20watch%20s4%20sport%20bk_1.jpg',
      'https://cdn2.depau.es/articulos/448/448/fixed/art_xia-reloj%20watch%20s3%20bk_1.jpg'
    ],
    description: 'Smartwatch deportivo premium con GPS dual banda y pantalla AMOLED 1,43". Más de 140 modos deportivos, ECG, SpO₂, NFC y hasta 10 días de batería.',
    specs: {
      'Pantalla': 'AMOLED 1,43"',
      'GPS': 'Dual banda',
      'ECG': 'Sí',
      'NFC': 'Sí',
      'Modos deportivos': '140+',
      'Batería': 'Hasta 10 días',
      'SKU': 'XIA-RELOJ WATCH S4 SPORT BK'
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

// ─── AMAZFIT PRODUCTS (fuente: es.amazfit.com — scraping 30/05/2026) ─────────
PRODUCTS.push(

  // ── 6 · Helio Core ─────────────────────────────────────────────────────────
  {
    id: 6,
    name: 'Amazfit Helio Core',
    brand: 'Amazfit',
    category: 'relojes',
    price: 69.90,
    oldPrice: 89.90,
    badge: 'Nuevo',
    image: 'https://cdn.shopify.com/s/files/1/0489/7642/9207/files/RiceGrain-Front-Purple.png?v=1765509715',
    images: [
      'https://cdn.shopify.com/s/files/1/0489/7642/9207/files/RiceGrain-Front-Purple.png?v=1765509715',
      'https://cdn.shopify.com/s/files/1/0489/7642/9207/files/RiceGrain-Front-Red.png?v=1765509714'
    ],
    description: 'Módulo sensor BioTracker™ profesional. Monitorización cardíaca, SpO₂ y EDA en tiempo real 24/7. Compatible con correa Helio Strap. Sin suscripción requerida.',
    specs: {
      'Tecnología': 'BioTracker™',
      'Sensores': 'Cardíaco, SpO₂, EDA',
      'Monitorización': '24/7',
      'SKU': 'HCPU-C1204004022',
      'Fuente': 'es.amazfit.com'
    }
  },

  // ── 7 · Bip 6 ──────────────────────────────────────────────────────────────
  {
    id: 7,
    name: 'Amazfit Bip 6',
    brand: 'Amazfit',
    category: 'relojes',
    price: 79.90,
    oldPrice: 99.90,
    badge: 'Más vendido',
    image: 'https://cdn.shopify.com/s/files/1/0489/7642/9207/files/Pamir_Black.png?v=1739789594',
    images: [
      'https://cdn.shopify.com/s/files/1/0489/7642/9207/files/Pamir_Black.png?v=1739789594',
      'https://cdn.shopify.com/s/files/1/0489/7642/9207/files/Pamir_Red.png?v=1739789594'
    ],
    description: 'Pantalla AMOLED 1,97". Más de 140 modos deportivos. GPS integrado con mapas gratuitos. Frecuencia cardíaca y SpO₂ 24/7. Entrenamiento de fuerza inteligente. Batería 10 días.',
    specs: {
      'Pantalla': 'AMOLED 1,97"',
      'GPS': 'Integrado + mapas gratis',
      'Modos deportivos': '140+',
      'Batería': '10 días',
      'SKU': 'BIP6BK-C1201035002',
      'Fuente': 'es.amazfit.com'
    }
  },

  // ── 8 · Active 2 ────────────────────────────────────────────────────────────
  {
    id: 8,
    name: 'Amazfit Active 2',
    brand: 'Amazfit',
    category: 'relojes',
    price: 99.90,
    oldPrice: 129.90,
    badge: 'Oferta',
    image: 'https://cdn.shopify.com/s/files/1/0489/7642/9207/files/Active_2-Black-1_98854113-545f-43f3-b4f3-a4b98588cb52.png?v=1740568454',
    images: [
      'https://cdn.shopify.com/s/files/1/0489/7642/9207/files/Active_2-Black-1_98854113-545f-43f3-b4f3-a4b98588cb52.png?v=1740568454',
      'https://cdn.shopify.com/s/files/1/0489/7642/9207/files/Active_2-Leather-1.png?v=1740568454'
    ],
    description: 'Diseño premium de acero inoxidable. Pantalla AMOLED vibrante. Frecuencia cardíaca 24/7 con BioTracker™. Análisis avanzado del sueño. Disponible con NFC (Zepp Pay).',
    specs: {
      'Carcasa': 'Acero inoxidable',
      'Pantalla': 'AMOLED',
      'NFC': 'Zepp Pay (versión Premium)',
      'BioTracker': '™ generación 5',
      'SKU': 'ACTIVE2RBK-C0208005007',
      'Fuente': 'es.amazfit.com'
    }
  },

  // ── 9 · Bip Max ─────────────────────────────────────────────────────────────
  {
    id: 9,
    name: 'Amazfit Bip Max',
    brand: 'Amazfit',
    category: 'relojes',
    price: 99.90,
    oldPrice: 119.90,
    badge: 'Nuevo 2026',
    image: 'https://cdn.shopify.com/s/files/1/0489/7642/9207/files/c04ee96481311d51542727498983b0f3e7.png?v=1779187647',
    images: [
      'https://cdn.shopify.com/s/files/1/0489/7642/9207/files/c04ee96481311d51542727498983b0f3e7.png?v=1779187647',
      'https://cdn.shopify.com/s/files/1/0489/7642/9207/files/d164e518d55d1775a943f549a5e89a01.png?v=1779187648'
    ],
    description: 'Pantalla AMOLED 2,07" ultra-legible. Hasta 20 días de batería. 4 GB para mapas descargables. Métricas de salud avanzadas BioCharge™. Entrenamiento híbrido inteligente.',
    specs: {
      'Pantalla': 'AMOLED 2,07"',
      'Almacenamiento': '4 GB (mapas)',
      'Batería': 'Hasta 20 días',
      'Tecnología': 'BioCharge™',
      'SKU': 'BIPMAXSL-C1211035001',
      'Fuente': 'es.amazfit.com'
    }
  },

  // ── 10 · Active 3 Premium ───────────────────────────────────────────────────
  {
    id: 10,
    name: 'Amazfit Active 3 Premium',
    brand: 'Amazfit',
    category: 'relojes',
    price: 169.90,
    oldPrice: 199.90,
    badge: 'Premium',
    image: 'https://cdn.shopify.com/s/files/1/0489/7642/9207/files/PP-Black-1.png?v=1773387119',
    images: [
      'https://cdn.shopify.com/s/files/1/0489/7642/9207/files/PP-Black-1.png?v=1773387119',
      'https://cdn.shopify.com/s/files/1/0489/7642/9207/files/PP-Blue_8387726d-aa59-42fe-8bee-1145b2b7e28b.png?v=1773387119'
    ],
    description: 'Smartwatch premium de acero inoxidable con cristal de zafiro. Pantalla AMOLED 1,75". BioTracker™ 5 con ECG. GPS multibanda. Zepp Pay NFC. Hasta 10 días de batería.',
    specs: {
      'Carcasa': 'Acero inoxidable',
      'Cristal': 'Zafiro',
      'GPS': 'Multibanda',
      'ECG': 'Sí',
      'NFC': 'Zepp Pay',
      'SKU': 'A3PBK-C1208005006',
      'Fuente': 'es.amazfit.com'
    }
  }

);

// ─── HUAWEI PRODUCTS (fuente: consumer.huawei.com/es — scraping 30/05/2026) ──
PRODUCTS.push(

  // ── 11 · HUAWEI Band 9 ─────────────────────────────────────────────────────
  {
    id: 11,
    name: 'HUAWEI Band 9',
    brand: 'Huawei',
    category: 'relojes',
    price: 49.99,
    oldPrice: 69.99,
    badge: 'Oferta',
    image: 'https://consumer.huawei.com/dam/content/dam/huawei-cbg-site/common/mkt/plp-x/wearables-v5/product-shelf-and-pop-up/view-all/all-band9.jpeg',
    images: [
      'https://consumer.huawei.com/dam/content/dam/huawei-cbg-site/common/mkt/plp-x/wearables-v5/product-shelf-and-pop-up/view-all/all-band9.jpeg',
      'https://consumer.huawei.com/dam/content/dam/huawei-cbg-site/common/mkt/pdp/wearables/band9/img/kv/video/band9-kv-mob.jpg'
    ],
    description: 'Diseño delgado y ligero ideal para todo el día. Monitorización del sueño basada en ciencia, 100 modos de entrenamiento, SpO₂ y frecuencia cardíaca continua. Hasta 14 días de batería.',
    specs: {
      'Pantalla': 'AMOLED 1,47"',
      'Modos deportivos': '100+',
      'Batería': 'Hasta 14 días',
      'SpO₂': 'Sí',
      'Resistencia': '5 ATM',
      'Fuente': 'consumer.huawei.com'
    }
  },

  // ── 12 · HUAWEI Band 10 ────────────────────────────────────────────────────
  {
    id: 12,
    name: 'HUAWEI Band 10',
    brand: 'Huawei',
    category: 'relojes',
    price: 59.99,
    oldPrice: 79.99,
    badge: 'Nuevo',
    image: 'https://consumer.huawei.com/dam/content/dam/huawei-cbg-site/common/mkt/plp-x/wearables-v5/product-shelf-and-pop-up/view-all/all-band10.jpeg',
    images: [
      'https://consumer.huawei.com/dam/content/dam/huawei-cbg-site/common/mkt/plp-x/wearables-v5/product-shelf-and-pop-up/view-all/all-band10.jpeg',
      'https://consumer.huawei.com/dam/content/dam/huawei-cbg-site/common/mkt/pdp/wearables/band10/videos/huawei-band-10-kv-poster.jpg'
    ],
    description: 'Sensación de ligereza con gestión científica del sueño y 100 modos deportivos. Pantalla AMOLED más brillante, SpO₂ continuo y frecuencia cardíaca 24/7. Hasta 14 días de batería.',
    specs: {
      'Pantalla': 'AMOLED 1,62"',
      'Modos deportivos': '100+',
      'Batería': 'Hasta 14 días',
      'SpO₂': 'Sí',
      'Resistencia': '5 ATM',
      'Fuente': 'consumer.huawei.com'
    }
  },

  // ── 13 · HUAWEI Band 11 ────────────────────────────────────────────────────
  {
    id: 13,
    name: 'HUAWEI Band 11',
    brand: 'Huawei',
    category: 'relojes',
    price: 79.99,
    oldPrice: 99.99,
    badge: 'Nuevo 2026',
    image: 'https://consumer.huawei.com/dam/content/dam/huawei-cbg-site/common/mkt/plp-x/wearables-v5/0226-2026-huawei-innovative-product-launch/product-shelf-and-pop-up/view-all/all-band11.jpg',
    images: [
      'https://consumer.huawei.com/dam/content/dam/huawei-cbg-site/common/mkt/plp-x/wearables-v5/0226-2026-huawei-innovative-product-launch/product-shelf-and-pop-up/view-all/all-band11.jpg',
      'https://consumer.huawei.com/dam/content/dam/huawei-cbg-site/common/mkt/pdp/wearables/band11/images/hero/huawei-band-11-kv-xs.jpg'
    ],
    description: 'Diseño delgado y cómodo. Pantalla AMOLED de 1,62" con 1.500 nits de brillo. Seguimiento científico del sueño y gestión del bienestar emocional. NFC incluido.',
    specs: {
      'Pantalla': 'AMOLED 1,62" 1500 nits',
      'NFC': 'Sí',
      'Modos deportivos': '100+',
      'Batería': 'Hasta 14 días',
      'Resistencia': '5 ATM',
      'Fuente': 'consumer.huawei.com'
    }
  },

  // ── 14 · HUAWEI WATCH FIT 3 ───────────────────────────────────────────────
  {
    id: 14,
    name: 'HUAWEI WATCH FIT 3',
    brand: 'Huawei',
    category: 'relojes',
    price: 99.99,
    oldPrice: 129.99,
    badge: 'Más vendido',
    image: 'https://consumer.huawei.com/dam/content/dam/huawei-cbg-site/common/mkt/plp-x/wearables-v5/product-shelf-and-pop-up/view-all/all-watch-fit3.jpeg',
    images: [
      'https://consumer.huawei.com/dam/content/dam/huawei-cbg-site/common/mkt/plp-x/wearables-v5/product-shelf-and-pop-up/view-all/all-watch-fit3.jpeg',
      'https://consumer.huawei.com/dam/content/dam/huawei-cbg-site/common/mkt/pdp/admin-image/wearables/watch-fit3/grey.png'
    ],
    description: 'Smartwatch premium ultra delgado con pantalla AMOLED cuadrada de 1,82". GPS integrado, 97 modos deportivos, frecuencia cardíaca y SpO₂ 24/7. Hasta 10 días de batería.',
    specs: {
      'Pantalla': 'AMOLED 1,82" cuadrada',
      'GPS': 'Integrado',
      'Modos deportivos': '97',
      'Batería': 'Hasta 10 días',
      'Espesor': '6,99 mm',
      'Fuente': 'consumer.huawei.com'
    }
  },

  // ── 15 · HUAWEI WATCH FIT 4 ───────────────────────────────────────────────
  {
    id: 15,
    name: 'HUAWEI WATCH FIT 4',
    brand: 'Huawei',
    category: 'relojes',
    price: 129.99,
    oldPrice: 159.99,
    badge: 'Premium',
    image: 'https://consumer.huawei.com/dam/content/dam/huawei-cbg-site/common/mkt/plp-x/wearables-v5/0515-2025-huawei-innovative-product-launch/product-shelf-and-pop-up/view-all/all-watch-fit4.jpg',
    images: [
      'https://consumer.huawei.com/dam/content/dam/huawei-cbg-site/common/mkt/plp-x/wearables-v5/0515-2025-huawei-innovative-product-launch/product-shelf-and-pop-up/view-all/all-watch-fit4.jpg',
      'https://consumer.huawei.com/dam/content/dam/huawei-cbg-site/common/mkt/pdp/wearables/watch-fit4/images/kv/huawei-watch-fit4-kv-xs-thumb.jpg'
    ],
    description: 'Diseño esbelto ultradelgado de 9,5 mm y 27 g con pantalla cuadrada AMOLED. GPS de doble banda, monitorización de salud avanzada, 100+ modos deportivos y Huawei Health App.',
    specs: {
      'Pantalla': 'AMOLED cuadrada',
      'GPS': 'Doble banda',
      'Espesor': '9,5 mm',
      'Peso': '27 g',
      'Modos deportivos': '100+',
      'Fuente': 'consumer.huawei.com'
    }
  }

);

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
  },

  // ── 17 · Samsung Galaxy Watch Ultra 47mm ────────────────────────────────────
  {
    id: 17,
    name: 'Samsung Galaxy Watch Ultra 47mm Blanco',
    brand: 'Samsung',
    category: 'relojes',
    price: 549.99,
    oldPrice: 649.99,
    badge: 'Ultra Premium',
    image: 'https://cdn2.depau.es/articulos/448/448/fixed/art_sam-reloj%20l705%2047%20bt%20wh_1.jpg',
    images: [
      'https://cdn2.depau.es/articulos/448/448/fixed/art_sam-reloj%20l705%2047%20bt%20wh_1.jpg',
      'https://cdn2.depau.es/articulos/448/448/fixed/art_sam-reloj%20l500%2046%20bt%20wh_1.jpg'
    ],
    description: 'El smartwatch más avanzado de Samsung. Carcasa de Titanio Grado 4. Super AMOLED 1,5" ultra resistente. GPS multibanda, ECG, SpO₂, composición corporal y presión arterial. Galaxy AI completo. Hasta 60h batería.',
    specs: {
      'Pantalla': 'Super AMOLED 1,5"',
      'Carcasa': 'Titanio Grado 4',
      'GPS': 'Multibanda',
      'ECG + Presión arterial': 'Sí',
      'Galaxy AI': 'Sí',
      'Batería': 'Hasta 60h (100h modo ahorro)',
      'P/N Depau': 'SAM-RELOJ L705 47 BT WH',
      'Fuente': 'depau.es'
    }
  },

  // ── 18 · Galaxy Watch 7 40mm ────────────────────────────────────────────────
  {
    id: 18,
    name: 'Samsung Galaxy Watch 7 40mm Verde',
    brand: 'Samsung',
    category: 'relojes',
    price: 249.99,
    oldPrice: 299.99,
    badge: 'Nuevo 2024',
    image: 'https://cdn2.depau.es/articulos/448/448/fixed/art_sam-reloj%20l300%2040%20bt%20gree_1.jpg',
    images: [
      'https://cdn2.depau.es/articulos/448/448/fixed/art_sam-reloj%20l300%2040%20bt%20gree_1.jpg',
      'https://cdn2.depau.es/articulos/448/448/fixed/art_sam-reloj%20l310%2044%20bt%20sv_1.jpg'
    ],
    description: 'Smartwatch con procesador 3nm de última generación. Super AMOLED 1,3" circular. GPS multibanda, ECG, SpO₂, temperatura y sensor de composición corporal. Galaxy AI. Hasta 40h batería.',
    specs: {
      'Pantalla': 'Super AMOLED 1,3" circular',
      'Procesador': '3nm',
      'GPS': 'Multibanda',
      'ECG': 'Sí',
      'Composición corporal': 'Sí',
      'Batería': 'Hasta 40h (87h modo ahorro)',
      'P/N Depau': 'SAM-RELOJ L300 40 BT GREE',
      'Fuente': 'depau.es'
    }
  },

  // ── 19 · Galaxy Watch 7 44mm ────────────────────────────────────────────────
  {
    id: 19,
    name: 'Samsung Galaxy Watch 7 44mm Plata',
    brand: 'Samsung',
    category: 'relojes',
    price: 279.99,
    oldPrice: 329.99,
    badge: 'Más vendido',
    image: 'https://cdn2.depau.es/articulos/448/448/fixed/art_sam-reloj%20l310%2044%20bt%20sv_1.jpg',
    images: [
      'https://cdn2.depau.es/articulos/448/448/fixed/art_sam-reloj%20l310%2044%20bt%20sv_1.jpg',
      'https://cdn2.depau.es/articulos/448/448/fixed/art_sam-reloj%20l300%2040%20bt%20gree_1.jpg'
    ],
    description: 'Smartwatch 44mm con pantalla Super AMOLED 1,5" circular. Procesador 3nm. GPS multibanda, ECG, SpO₂, temperatura y composición corporal avanzada. Galaxy AI integrado. Hasta 40h batería.',
    specs: {
      'Pantalla': 'Super AMOLED 1,5" circular',
      'Procesador': '3nm',
      'GPS': 'Multibanda',
      'ECG': 'Sí',
      'Galaxy AI': 'Sí',
      'Batería': 'Hasta 40h (87h modo ahorro)',
      'P/N Depau': 'SAM-RELOJ L310 44 BT SV',
      'Fuente': 'depau.es'
    }
  },

  // ── 20 · Galaxy Watch 8 Classic 46mm ───────────────────────────────────────
  {
    id: 20,
    name: 'Samsung Galaxy Watch 8 Classic 46mm Blanco',
    brand: 'Samsung',
    category: 'relojes',
    price: 449.99,
    oldPrice: 499.99,
    badge: 'Premium',
    image: 'https://cdn2.depau.es/articulos/448/448/fixed/art_sam-reloj%20l500%2046%20bt%20wh_1.jpg',
    images: [
      'https://cdn2.depau.es/articulos/448/448/fixed/art_sam-reloj%20l500%2046%20bt%20wh_1.jpg',
      'https://cdn2.depau.es/articulos/448/448/fixed/art_sam-reloj%20l310%2044%20bt%20sv_1.jpg'
    ],
    description: 'Smartwatch premium de 46mm con bisel rotatorio físico icónico. Super AMOLED 1,5". ECG, SpO₂, composición corporal y presión arterial. Galaxy AI completo. Resistencia 5 ATM. Hasta 40h batería.',
    specs: {
      'Pantalla': 'Super AMOLED 1,5"',
      'Bisel': 'Rotatorio físico',
      'GPS': 'Multibanda',
      'ECG + Presión arterial': 'Sí',
      'Galaxy AI': 'Sí',
      'Batería': 'Hasta 40h (87h modo ahorro)',
      'P/N Depau': 'SAM-RELOJ L500 46 BT WH',
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

// ─── GARMIN PRODUCTS (fuente: garmin.com/es-ES — datos de referencia mayo 2026) ─
PRODUCTS.push(

  // ── 26 · Garmin Forerunner 55 ──────────────────────────────────────────────
  {
    id: 26,
    name: 'Garmin Forerunner 55',
    brand: 'Garmin',
    category: 'relojes',
    price: 149.99,
    oldPrice: 209.99,
    badge: 'Oferta',
    image: 'https://res.garmin.com/en/products/010-02562-00/f/010-02562-00-xlarge-01-01.jpg',
    images: [
      'https://res.garmin.com/en/products/010-02562-00/f/010-02562-00-xlarge-01-01.jpg',
      'https://res.garmin.com/en/products/010-02562-00/f/010-02562-00-xlarge-02-01.jpg'
    ],
    description: 'Smartwatch GPS de running para principiantes y aficionados. GPS integrado con rutas de carrera descargables. Frecuencia cardíaca en muñeca 24/7. Hasta 20h GPS / 2 semanas en modo reloj. Coach de carrera incluido.',
    specs: {
      'GPS': 'Integrado',
      'Batería': 'Hasta 20h GPS / 2 semanas reloj',
      'Frecuencia cardíaca': '24/7 en muñeca',
      'Coach de carrera': 'Sí',
      'Resistencia': '5 ATM',
      'Peso': '35g',
      'SKU': '010-02562-00',
      'Fuente': 'garmin.com/es-ES'
    }
  },

  // ── 27 · Garmin Instinct 2S ────────────────────────────────────────────────
  {
    id: 27,
    name: 'Garmin Instinct 2S',
    brand: 'Garmin',
    category: 'relojes',
    price: 199.99,
    oldPrice: 279.99,
    badge: 'Rugged GPS',
    image: 'https://res.garmin.com/en/products/010-02563-10/f/010-02563-10-xlarge-01-01.jpg',
    images: [
      'https://res.garmin.com/en/products/010-02563-10/f/010-02563-10-xlarge-01-01.jpg',
      'https://res.garmin.com/en/products/010-02563-10/f/010-02563-10-xlarge-02-01.jpg'
    ],
    description: 'Smartwatch GPS resistente con carcasa de fibra de vidrio reforzada. Norma militar MIL-STD-810. GPS multibanda. Frecuencia cardíaca, SpO₂ y monitorización del estrés 24/7. Hasta 28h GPS / 21 días reloj.',
    specs: {
      'GPS': 'Multibanda',
      'Resistencia': 'MIL-STD-810 + 10 ATM',
      'Batería': 'Hasta 28h GPS / 21 días reloj',
      'Frecuencia cardíaca': '24/7',
      'SpO₂': 'Sí',
      'Peso': '40g',
      'SKU': '010-02563-10',
      'Fuente': 'garmin.com/es-ES'
    }
  },

  // ── 28 · Garmin Vivoactive 5 ───────────────────────────────────────────────
  {
    id: 28,
    name: 'Garmin Vivoactive 5',
    brand: 'Garmin',
    category: 'relojes',
    price: 229.99,
    oldPrice: 279.99,
    badge: 'AMOLED',
    image: 'https://res.garmin.com/en/products/010-02862-10/f/010-02862-10-xlarge-01-01.jpg',
    images: [
      'https://res.garmin.com/en/products/010-02862-10/f/010-02862-10-xlarge-01-01.jpg',
      'https://res.garmin.com/en/products/010-02862-10/f/010-02862-10-xlarge-02-01.jpg'
    ],
    description: 'Smartwatch fitness con pantalla AMOLED vibrante y siempre encendida. GPS integrado. Más de 25 modos deportivos. Monitorización de salud completa: frecuencia cardíaca, SpO₂, estrés y sueño. Pagos Garmin Pay (NFC). Hasta 11 días batería.',
    specs: {
      'Pantalla': 'AMOLED siempre encendida',
      'GPS': 'Integrado',
      'Modos deportivos': '25+',
      'NFC (Garmin Pay)': 'Sí',
      'Batería': 'Hasta 11 días / 18h GPS',
      'SpO₂ + Estrés': 'Sí',
      'SKU': '010-02862-10',
      'Fuente': 'garmin.com/es-ES'
    }
  },

  // ── 29 · Garmin Venu 3S ────────────────────────────────────────────────────
  {
    id: 29,
    name: 'Garmin Venu 3S',
    brand: 'Garmin',
    category: 'relojes',
    price: 299.99,
    oldPrice: 369.99,
    badge: 'Salud Avanzada',
    image: 'https://res.garmin.com/en/products/010-02785-00/f/010-02785-00-xlarge-01-01.jpg',
    images: [
      'https://res.garmin.com/en/products/010-02785-00/f/010-02785-00-xlarge-01-01.jpg',
      'https://res.garmin.com/en/products/010-02785-00/f/010-02785-00-xlarge-02-01.jpg'
    ],
    description: 'Smartwatch de salud y bienestar con pantalla AMOLED 1,2" (41mm). Seguimiento del sueño avanzado con fases REM. Frecuencia cardíaca, SpO₂ y variabilidad del ritmo cardíaco 24/7. Perfiles de edad corporal. Garmin Pay NFC. Hasta 10 días batería.',
    specs: {
      'Pantalla': 'AMOLED 1,2" (41mm)',
      'GPS': 'Integrado',
      'Sueño avanzado': 'Fases REM',
      'NFC (Garmin Pay)': 'Sí',
      'Batería': 'Hasta 10 días / 20h GPS',
      'VFC + SpO₂': '24/7',
      'SKU': '010-02785-00',
      'Fuente': 'garmin.com/es-ES'
    }
  },

  // ── 30 · Garmin Forerunner 265 ─────────────────────────────────────────────
  {
    id: 30,
    name: 'Garmin Forerunner 265',
    brand: 'Garmin',
    category: 'relojes',
    price: 349.99,
    oldPrice: 449.99,
    badge: 'Running Pro',
    image: 'https://res.garmin.com/en/products/010-02810-00/f/010-02810-00-xlarge-01-01.jpg',
    images: [
      'https://res.garmin.com/en/products/010-02810-00/f/010-02810-00-xlarge-01-01.jpg',
      'https://res.garmin.com/en/products/010-02810-00/f/010-02810-00-xlarge-02-01.jpg'
    ],
    description: 'Smartwatch GPS de running avanzado con pantalla AMOLED siempre encendida. Morning Report diario. Métricas de carrera avanzadas: potencia en carrera, cadencia y dinámica de carrera. Frecuencia cardíaca, SpO₂ y sueño. Garmin Pay NFC. Hasta 13 días batería.',
    specs: {
      'Pantalla': 'AMOLED 1,3" AOD',
      'GPS': 'Multibanda',
      'Métricas running': 'Potencia + dinámica + cadencia',
      'NFC (Garmin Pay)': 'Sí',
      'Batería': 'Hasta 13 días / 20h GPS',
      'Morning Report': 'Sí',
      'SKU': '010-02810-00',
      'Fuente': 'garmin.com/es-ES'
    }
  }

);

// ─── COROS PRODUCTS (fuente: coros.com/es — datos de referencia mayo 2026) ───
PRODUCTS.push(

  // ── 21 · COROS Pace 3 ──────────────────────────────────────────────────────
  {
    id: 21,
    name: 'COROS Pace 3',
    brand: 'Coros',
    category: 'relojes',
    price: 229.99,
    oldPrice: 259.99,
    badge: 'GPS Sport',
    image: 'https://content.coros.com/product/PACE3/WPACE3-NVY.png',
    images: [
      'https://content.coros.com/product/PACE3/WPACE3-NVY.png',
      'https://content.coros.com/product/PACE3/WPACE3-WHT.png'
    ],
    description: 'Smartwatch GPS deportivo ultraligero (30g). Pantalla MIP 1,3" de bajo consumo. GPS dual frecuencia L1+L5. Batería hasta 17 días (modo normal) o 38h GPS continuo. Bisel de titanio. 5 ATM.',
    specs: {
      'Pantalla': 'MIP 1,3"',
      'GPS': 'Dual frecuencia L1+L5',
      'Peso': '30g',
      'Batería': 'Hasta 17 días / 38h GPS',
      'Material': 'Titanio + PC',
      'Resistencia': '5 ATM',
      'SKU': 'WPACE3-NVY',
      'Fuente': 'coros.com/es'
    }
  },

  // ── 22 · COROS Apex 2 ──────────────────────────────────────────────────────
  {
    id: 22,
    name: 'COROS Apex 2',
    brand: 'Coros',
    category: 'relojes',
    price: 299.99,
    oldPrice: 349.99,
    badge: 'Multideporte',
    image: 'https://content.coros.com/product/APEX2/WAPX2-BLK.png',
    images: [
      'https://content.coros.com/product/APEX2/WAPX2-BLK.png',
      'https://content.coros.com/product/APEX2/WAPX2-WHT.png'
    ],
    description: 'Smartwatch multideporte con bisel de titanio. Pantalla MIP 1,2". GPS multibanda dual frecuencia. Hasta 30 días de batería (modo normal) o 45h GPS continuo. 39g. Resistencia 5 ATM.',
    specs: {
      'Pantalla': 'MIP 1,2"',
      'GPS': 'Dual frecuencia multibanda',
      'Peso': '39g',
      'Batería': 'Hasta 30 días / 45h GPS',
      'Bisel': 'Titanio',
      'Resistencia': '5 ATM',
      'SKU': 'WAPX2-BLK',
      'Fuente': 'coros.com/es'
    }
  },

  // ── 23 · COROS Apex 2 Pro ──────────────────────────────────────────────────
  {
    id: 23,
    name: 'COROS Apex 2 Pro',
    brand: 'Coros',
    category: 'relojes',
    price: 399.99,
    oldPrice: 449.99,
    badge: 'Cristal Zafiro',
    image: 'https://content.coros.com/product/APEX2PRO/WAPX2P-BLK.png',
    images: [
      'https://content.coros.com/product/APEX2PRO/WAPX2P-BLK.png',
      'https://content.coros.com/product/APEX2PRO/WAPX2P-WHT.png'
    ],
    description: 'Smartwatch premium con cristal de zafiro y titanio. Pantalla MIP 1,3". GPS dual frecuencia con 3D navigation y mapas topográficos descargables. Batería 40 días (normal) o 75h GPS. 52g.',
    specs: {
      'Pantalla': 'MIP 1,3"',
      'Cristal': 'Zafiro',
      'GPS': 'Dual frecuencia + 3D Nav',
      'Mapas': 'Topográficos descargables',
      'Peso': '52g',
      'Batería': 'Hasta 40 días / 75h GPS',
      'SKU': 'WAPX2P-BLK',
      'Fuente': 'coros.com/es'
    }
  },

  // ── 24 · COROS Vertix 2S ───────────────────────────────────────────────────
  {
    id: 24,
    name: 'COROS Vertix 2S',
    brand: 'Coros',
    category: 'relojes',
    price: 549.99,
    oldPrice: 599.99,
    badge: 'Titanio + DLC',
    image: 'https://content.coros.com/product/VERTIX2S/WVTX2S-LUW.png',
    images: [
      'https://content.coros.com/product/VERTIX2S/WVTX2S-LUW.png',
      'https://content.coros.com/product/VERTIX2S/WVTX2S-IRG.png'
    ],
    description: 'Smartwatch de aventura extrema con carcasa de titanio y revestimiento DLC. Pantalla MIP 1,4". GPS dual frecuencia. Hasta 60 días de batería o 140h GPS continuo. Mapas topográficos offline. 79g.',
    specs: {
      'Pantalla': 'MIP 1,4"',
      'Material': 'Titanio + DLC',
      'GPS': 'Dual frecuencia',
      'Mapas': 'Topográficos + rutas offline',
      'Peso': '79g',
      'Batería': 'Hasta 60 días / 140h GPS',
      'SKU': 'WVTX2S-LUW',
      'Fuente': 'coros.com/es'
    }
  },

  // ── 25 · COROS Vertix 3 ────────────────────────────────────────────────────
  {
    id: 25,
    name: 'COROS Vertix 3',
    brand: 'Coros',
    category: 'relojes',
    price: 699.99,
    oldPrice: 749.99,
    badge: 'Flagship 2025',
    image: 'https://content.coros.com/product/VERTIX3/WVTX3-NVY.png',
    images: [
      'https://content.coros.com/product/VERTIX3/WVTX3-NVY.png',
      'https://content.coros.com/product/VERTIX3/WVTX3-BLK.png'
    ],
    description: 'El smartwatch GPS más avanzado de COROS. Pantalla AMOLED 1,5" con modo siempre encendida. Titanio aeroespacial. GPS triple banda L1/L2/L5. Batería 60+ días. Mapas topográficos Premium + navegación turn-by-turn. 89g.',
    specs: {
      'Pantalla': 'AMOLED 1,5" AOD',
      'Material': 'Titanio aeroespacial',
      'GPS': 'Triple banda L1/L2/L5',
      'Mapas': 'Topográficos Premium + turn-by-turn',
      'Peso': '89g',
      'Batería': 'Hasta 60+ días',
      'SKU': 'WVTX3-NVY',
      'Fuente': 'coros.com/es'
    }
  }

);

// ─── OURA PRODUCTS (fuente: ouraring.com/es — scraping 31/05/2026) ────────────
PRODUCTS.push(

  // ── 36 · Oura Ring 4 Silver ────────────────────────────────────────────────
  {
    id: 36,
    name: 'Oura Ring 4 Silver',
    brand: 'Oura',
    category: 'anillos',
    price: 379.00,
    oldPrice: 399.00,
    badge: 'Más Vendido',
    image: 'https://ourahealth.imgix.net/hardware-pdp/hero-carousel/or4-silver-front-view.png?ixlib=js-3.8.0&auto=format&fit=max&fm=png&q=70&w=640&s=cdb9c169128343f367e1fd3ffaa2774d',
    images: [
      'https://ourahealth.imgix.net/hardware-pdp/hero-carousel/or4-silver-front-view.png?ixlib=js-3.8.0&auto=format&fit=max&fm=png&q=70&w=640&s=cdb9c169128343f367e1fd3ffaa2774d',
      'https://ourahealth.imgix.net/hardware-pdp/hero-carousel/or4-silver-angle-view.png?ixlib=js-3.8.0&auto=format&fit=max&fm=png&q=70&w=640&s=17a83c15ef354926ed18e173bc2ca469'
    ],
    description: 'Anillo inteligente Gen 4 en titanio Silver. Sin pantalla ni botones: monitorización 24/7 sin interrupciones. Mide frecuencia cardíaca continua, variabilidad del ritmo cardíaco (VFC), temperatura corporal, SpO₂ y fases del sueño con REM. App Oura con puntuación de preparación diaria. 5-8 días de batería. Resistente al agua 100m (IP68).',
    specs: {
      'Generación':   'Gen 4 (2024)',
      'Material':     'Titanio grado 5 sin costuras',
      'Sensores':     'FC continua, VFC, SpO₂, temperatura, acelerómetro',
      'Sueño':        'Fases REM + temperatura nocturna',
      'Batería':      '5–8 días',
      'Resistencia':  'IP68 / 100m',
      'Tallas':       'US 4–15',
      'Suscripción':  'Oura Membership 5,99 €/mes (1er mes gratis)',
      'Fuente':       'ouraring.com/es'
    }
  },

  // ── 37 · Oura Ring 4 Matte Black ──────────────────────────────────────────
  {
    id: 37,
    name: 'Oura Ring 4 Matte Black',
    brand: 'Oura',
    category: 'anillos',
    price: 379.00,
    oldPrice: 399.00,
    badge: 'Gen 4 2024',
    image: 'https://ourahealth.imgix.net/hardware-pdp/hero-carousel/or4-black-front-view.png?ixlib=js-3.8.0&auto=format&fit=max&fm=png&q=70&w=640&s=78994683c391863a343782c00ae8a89f',
    images: [
      'https://ourahealth.imgix.net/hardware-pdp/hero-carousel/or4-black-front-view.png?ixlib=js-3.8.0&auto=format&fit=max&fm=png&q=70&w=640&s=78994683c391863a343782c00ae8a89f',
      'https://ourahealth.imgix.net/hardware-pdp/hero-carousel/or4-black-angle-view.png?ixlib=js-3.8.0&auto=format&fit=max&fm=png&q=70&w=384&s=f764f25561959902eaf00f2fc0edf22e'
    ],
    description: 'Anillo inteligente Gen 4 en titanio Matte Black. Diseño discreto y elegante para el día a día. Monitorización 24/7 de frecuencia cardíaca, VFC, temperatura corporal, SpO₂ y calidad del sueño con fases REM. Puntuación diaria de preparación y resiliencia. Batería 5-8 días. Resistente 100m.',
    specs: {
      'Generación':   'Gen 4 (2024)',
      'Material':     'Titanio grado 5 acabado negro mate',
      'Sensores':     'FC continua, VFC, SpO₂, temperatura, acelerómetro',
      'Sueño':        'Fases REM + temperatura nocturna',
      'Batería':      '5–8 días',
      'Resistencia':  'IP68 / 100m',
      'Tallas':       'US 4–15',
      'Suscripción':  'Oura Membership 5,99 €/mes (1er mes gratis)',
      'Fuente':       'ouraring.com/es'
    }
  },

  // ── 38 · Oura Ring 4 Gold ─────────────────────────────────────────────────
  {
    id: 38,
    name: 'Oura Ring 4 Gold',
    brand: 'Oura',
    category: 'anillos',
    price: 429.00,
    oldPrice: 449.00,
    badge: 'PVD Dorado',
    image: 'https://ourahealth.imgix.net/hardware-pdp/hero-carousel/or4-gold-front-view.png?ixlib=js-3.8.0&auto=format&fit=max&fm=png&q=70&w=640&s=2bd90c45332b7acc832820223ef4823c',
    images: [
      'https://ourahealth.imgix.net/hardware-pdp/hero-carousel/or4-gold-front-view.png?ixlib=js-3.8.0&auto=format&fit=max&fm=png&q=70&w=640&s=2bd90c45332b7acc832820223ef4823c',
      'https://ourahealth.imgix.net/hardware-pdp/hero-carousel/or4-gold-angle-view.png?ixlib=js-3.8.0&auto=format&fit=max&fm=png&q=70&w=384&s=1fd1df315142e08bfce4419eb6f0c9d0'
    ],
    description: 'Anillo inteligente Gen 4 en titanio con acabado PVD dorado premium. Salud avanzada en un diseño de joyería: frecuencia cardíaca continua, VFC, temperatura corporal, SpO₂ y seguimiento del sueño. Puntuación de preparación diaria. Batería 5-8 días. IP68. Elegancia y tecnología en un solo anillo.',
    specs: {
      'Generación':   'Gen 4 (2024)',
      'Material':     'Titanio con acabado PVD dorado',
      'Sensores':     'FC continua, VFC, SpO₂, temperatura, acelerómetro',
      'Sueño':        'Fases REM + temperatura nocturna',
      'Batería':      '5–8 días',
      'Resistencia':  'IP68 / 100m',
      'Tallas':       'US 4–15',
      'Suscripción':  'Oura Membership 5,99 €/mes (1er mes gratis)',
      'Fuente':       'ouraring.com/es'
    }
  },

  // ── 39 · Oura Ring 4 Rose Gold ────────────────────────────────────────────
  {
    id: 39,
    name: 'Oura Ring 4 Rose Gold',
    brand: 'Oura',
    category: 'anillos',
    price: 429.00,
    oldPrice: 449.00,
    badge: 'Oro Rosa',
    image: 'https://ourahealth.imgix.net/hardware-pdp/hero-carousel/or4-rose-gold-angle-view.png?ixlib=js-3.8.0&auto=format&fit=max&fm=png&q=70&w=640&s=bf5c7934bb57c1517fdc75794feaec42',
    images: [
      'https://ourahealth.imgix.net/hardware-pdp/hero-carousel/or4-rose-gold-angle-view.png?ixlib=js-3.8.0&auto=format&fit=max&fm=png&q=70&w=640&s=bf5c7934bb57c1517fdc75794feaec42',
      'https://ourahealth.imgix.net/hardware-pdp/hero-carousel/or4-rose-gold-angle-view.png?ixlib=js-3.8.0&auto=format&fit=max&fm=png&q=70&w=750&s=6a48ca7115ea0c3137b091e7c1f8f441'
    ],
    description: 'Anillo inteligente Gen 4 en titanio con acabado PVD oro rosa. Para quienes no separan salud y elegancia. Monitorización completa de sueño con fases REM, frecuencia cardíaca 24/7, variabilidad del ritmo cardíaco, temperatura cutánea y SpO₂. Batería 5-8 días. IP68.',
    specs: {
      'Generación':   'Gen 4 (2024)',
      'Material':     'Titanio con acabado PVD oro rosa',
      'Sensores':     'FC continua, VFC, SpO₂, temperatura, acelerómetro',
      'Sueño':        'Fases REM + temperatura nocturna',
      'Batería':      '5–8 días',
      'Resistencia':  'IP68 / 100m',
      'Tallas':       'US 4–15',
      'Suscripción':  'Oura Membership 5,99 €/mes (1er mes gratis)',
      'Fuente':       'ouraring.com/es'
    }
  },

  // ── 40 · Oura Ring 4 Ceramic Midnight ─────────────────────────────────────
  {
    id: 40,
    name: 'Oura Ring 4 Ceramic Midnight',
    brand: 'Oura',
    category: 'anillos',
    price: 429.00,
    oldPrice: 549.00,
    badge: 'Edición Cerámica',
    image: 'https://ourahealth.imgix.net/jade-pop/midnight-angle-view.png?ixlib=js-3.8.0&auto=format&fit=max&fm=png&q=70&w=640&s=bf42d084c6b4879bf7249163a42de566',
    images: [
      'https://ourahealth.imgix.net/jade-pop/midnight-angle-view.png?ixlib=js-3.8.0&auto=format&fit=max&fm=png&q=70&w=640&s=bf42d084c6b4879bf7249163a42de566',
      'https://ourahealth.imgix.net/jade-pop/or4-ceramic-finish-picker-lifestyle-midnight.jpg?ixlib=js-3.8.0&auto=format&fit=crop&fm=png&ar=257%3A190&crop=focalpoint&fp-x=0.52&fp-y=0.35&fp-z=1.3&q=70&w=640&s=e6faee2ce10f1d9da7e9f11945a4ef6c'
    ],
    description: 'Edición especial Oura Ring 4 Ceramic Midnight en zirconia de alto rendimiento con interior de titanio. El acabado más exclusivo de la gama, con un color azul medianoche único. Mismos sensores Gen 4: FC continua, VFC, SpO₂, temperatura y fases del sueño. PVP original 549€. Batería 5-8 días. IP68.',
    specs: {
      'Generación':   'Gen 4 Ceramic (2025)',
      'Material':     'Exterior cerámica de zirconia · Interior titanio',
      'Sensores':     'FC continua, VFC, SpO₂, temperatura, acelerómetro',
      'Sueño':        'Fases REM + temperatura nocturna',
      'Batería':      '5–8 días',
      'Resistencia':  'IP68 / 100m',
      'Tallas':       'US 4–15',
      'Suscripción':  'Oura Membership 5,99 €/mes (1er mes gratis)',
      'Fuente':       'ouraring.com/es'
    }
  }

);

// ─── SAMSUNG RING PRODUCTS (fuente: samsung.com/es — datos de referencia mayo 2026) ─
PRODUCTS.push(

  // ── 41 · Samsung Galaxy Ring Titanio Negro ─────────────────────────────────
  {
    id: 41,
    name: 'Samsung Galaxy Ring Titanio Negro',
    brand: 'Samsung',
    category: 'anillos',
    price: 449.00,
    badge: 'Sin Suscripción',
    image: 'https://images.samsung.com/is/image/samsung/p6pim/sa_en/sm-q509nzkamea/gallery/sa-en-galaxy-ring-q500-sm-q509nzkamea-543808321?$1164_776_PNG$',
    images: [
      'https://images.samsung.com/is/image/samsung/p6pim/sa_en/sm-q509nzkamea/gallery/sa-en-galaxy-ring-q500-sm-q509nzkamea-543808321?$1164_776_PNG$'
    ],
    description: 'Anillo inteligente Samsung Galaxy Ring en titanio negro. FC continua 24/7, temperatura cutánea, acelerómetro y detección de irregularidades cardíacas. Integración profunda con Samsung Health y Galaxy AI para puntuación de bienestar diaria. Sin cuota mensual. 6–7 días de batería. IP68, resistente a 100m. Tallas 5–13.',
    specs: {
      'Generación':   'Galaxy Ring (2024)',
      'Material':     'Titanio grado 4 acabado negro',
      'Sensores':     'FC continua, temperatura cutánea, acelerómetro',
      'Batería':      '6–7 días',
      'Resistencia':  'IP68 / 100m',
      'Tallas':       '5–13',
      'Compatibilidad': 'Android 11+ / Samsung Health',
      'Suscripción':  'Sin suscripción requerida',
      'Fuente':       'samsung.com/es'
    }
  },

  // ── 42 · Samsung Galaxy Ring Titanio Plata ─────────────────────────────────
  {
    id: 42,
    name: 'Samsung Galaxy Ring Titanio Plata',
    brand: 'Samsung',
    category: 'anillos',
    price: 449.00,
    badge: 'Sin Suscripción',
    image: 'https://images.samsung.com/is/image/samsung/p6pim/sa_en/sm-q508nzsamea/gallery/sa-en-galaxy-ring-q500-sm-q508nzsamea-543808229?$1164_776_PNG$',
    images: [
      'https://images.samsung.com/is/image/samsung/p6pim/sa_en/sm-q508nzsamea/gallery/sa-en-galaxy-ring-q500-sm-q508nzsamea-543808229?$1164_776_PNG$'
    ],
    description: 'Anillo inteligente Samsung Galaxy Ring en titanio plata. Diseño elegante con salud completa: FC 24/7, temperatura cutánea, SpO₂ pasivo, detección de ciclo menstrual y puntuación energética con Galaxy AI. Sin suscripción mensual. 6–7 días. IP68 100m. Tallas 5–13.',
    specs: {
      'Generación':   'Galaxy Ring (2024)',
      'Material':     'Titanio grado 4 acabado plata',
      'Sensores':     'FC continua, temperatura cutánea, acelerómetro',
      'Batería':      '6–7 días',
      'Resistencia':  'IP68 / 100m',
      'Tallas':       '5–13',
      'Compatibilidad': 'Android 11+ / Samsung Health',
      'Suscripción':  'Sin suscripción requerida',
      'Fuente':       'samsung.com/es'
    }
  },

  // ── 43 · Samsung Galaxy Ring Titanio Oro ───────────────────────────────────
  {
    id: 43,
    name: 'Samsung Galaxy Ring Titanio Oro',
    brand: 'Samsung',
    category: 'anillos',
    price: 449.00,
    badge: 'Edición Dorada',
    image: 'https://images.samsung.com/is/image/samsung/p6pim/sa_en/sm-q508nzdamea/gallery/sa-en-galaxy-ring-q500-sm-q508nzdamea-543808157?$1164_776_PNG$',
    images: [
      'https://images.samsung.com/is/image/samsung/p6pim/sa_en/sm-q508nzdamea/gallery/sa-en-galaxy-ring-q500-sm-q508nzdamea-543808157?$1164_776_PNG$'
    ],
    description: 'Anillo inteligente Samsung Galaxy Ring en titanio con acabado dorado. Tecnología y joyería en uno: FC 24/7, temperatura cutánea, detección de irregularidades del ritmo cardíaco, Galaxy AI y puntuación de bienestar diaria. Sin suscripción. 6–7 días batería. IP68 100m. Tallas 5–13.',
    specs: {
      'Generación':   'Galaxy Ring (2024)',
      'Material':     'Titanio grado 4 acabado dorado',
      'Sensores':     'FC continua, temperatura cutánea, acelerómetro',
      'Batería':      '6–7 días',
      'Resistencia':  'IP68 / 100m',
      'Tallas':       '5–13',
      'Compatibilidad': 'Android 11+ / Samsung Health',
      'Suscripción':  'Sin suscripción requerida',
      'Fuente':       'samsung.com/es'
    }
  }

);

// ─── RINGCONN PRODUCTS (fuente: ringconn.com — datos de referencia mayo 2026) ──
PRODUCTS.push(

  // ── 44 · RingConn Gen 2 Air Silver Galaxy ──────────────────────────────────
  {
    id: 44,
    name: 'RingConn Gen 2 Air Silver Galaxy',
    brand: 'RingConn',
    category: 'anillos',
    price: 219.00,
    oldPrice: 249.00,
    badge: 'Más Ligero',
    image: 'https://ringconn.com/cdn/shop/files/ringconn_gen_2_air_1.png?v=1763612203',
    images: [
      'https://ringconn.com/cdn/shop/files/ringconn_gen_2_air_1.png?v=1763612203',
      'https://ringconn.com/cdn/shop/files/ringconn_gen_2_air_3.png?v=1762162664'
    ],
    description: 'El anillo inteligente más ligero de RingConn (≈2g). FC continua 24/7, SpO₂, temperatura corporal y análisis de sueño por fases. App iOS/Android sin suscripción mensual. Diseño ultra-fino en plata galaxy para uso 24 horas. Batería 8–10 días. IP68. Tallas 7–14.',
    specs: {
      'Generación':   'Gen 2 Air (2024)',
      'Material':     'Titanio fino acabado silver galaxy',
      'Sensores':     'FC continua, SpO₂, temperatura, acelerómetro',
      'Sueño':        'Fases del sueño + temperatura nocturna',
      'Batería':      '8–10 días',
      'Resistencia':  'IP68',
      'Tallas':       '7–14',
      'Suscripción':  'Sin suscripción requerida',
      'Fuente':       'ringconn.com'
    }
  },

  // ── 45 · RingConn Gen 2 Air Dune Gold ──────────────────────────────────────
  {
    id: 45,
    name: 'RingConn Gen 2 Air Dune Gold',
    brand: 'RingConn',
    category: 'anillos',
    price: 219.00,
    oldPrice: 249.00,
    badge: 'Entrada Gama',
    image: 'https://ringconn.com/cdn/shop/files/ringconn_gen_2_air_3.png?v=1762162664',
    images: [
      'https://ringconn.com/cdn/shop/files/ringconn_gen_2_air_3.png?v=1762162664',
      'https://ringconn.com/cdn/shop/files/ringconn_gen_2_air_1.png?v=1763612203'
    ],
    description: 'RingConn Gen 2 Air en acabado dune gold: acceso a la salud inteligente sin barreras. Ultra-ligero (≈2g), FC 24/7, SpO₂, temperatura y seguimiento del sueño. Sin cuota de suscripción. Ideal para quien empieza con anillos inteligentes. Batería 8–10 días. IP68. Tallas 7–14.',
    specs: {
      'Generación':   'Gen 2 Air (2024)',
      'Material':     'Titanio fino acabado dune gold',
      'Sensores':     'FC continua, SpO₂, temperatura, acelerómetro',
      'Sueño':        'Fases del sueño + temperatura nocturna',
      'Batería':      '8–10 días',
      'Resistencia':  'IP68',
      'Tallas':       '7–14',
      'Suscripción':  'Sin suscripción requerida',
      'Fuente':       'ringconn.com'
    }
  },

  // ── 46 · RingConn Gen 2 Future Silver ──────────────────────────────────────
  {
    id: 46,
    name: 'RingConn Gen 2 Future Silver',
    brand: 'RingConn',
    category: 'anillos',
    price: 299.00,
    oldPrice: 329.00,
    badge: 'Sin Suscripción',
    image: 'https://ringconn.com/cdn/shop/files/RingConn_Smart_Ring_Gen_2-Silver_a529d976-de15-49c4-9c1c-8afc1be2aa51.png?v=1756459360&width=1472',
    images: [
      'https://ringconn.com/cdn/shop/files/RingConn_Smart_Ring_Gen_2-Silver_a529d976-de15-49c4-9c1c-8afc1be2aa51.png?v=1756459360&width=1472',
      'https://ringconn.com/cdn/shop/files/RingConn_Smart_Ring_Gen_2-Royal_Gold.png?v=1757058366&width=1472'
    ],
    description: 'RingConn Gen 2 Future Silver: análisis de salud completo y permanente. FC continua, VFC, SpO₂, temperatura corporal y análisis profundo del sueño con fases REM. Sin suscripción mensual. Sensores mejorados respecto al Gen 1. Batería 8–10 días. IP68. Tallas 6–21.',
    specs: {
      'Generación':   'Gen 2 (2024)',
      'Material':     'Titanio grado 5 acabado future silver',
      'Sensores':     'FC continua, VFC, SpO₂, temperatura, acelerómetro',
      'Sueño':        'Fases REM + temperatura nocturna',
      'Batería':      '8–10 días',
      'Resistencia':  'IP68',
      'Tallas':       '6–21',
      'Suscripción':  'Sin suscripción requerida',
      'Fuente':       'ringconn.com'
    }
  },

  // ── 47 · RingConn Gen 2 Royal Gold ─────────────────────────────────────────
  {
    id: 47,
    name: 'RingConn Gen 2 Royal Gold',
    brand: 'RingConn',
    category: 'anillos',
    price: 299.00,
    oldPrice: 329.00,
    badge: 'Joyería Tech',
    image: 'https://ringconn.com/cdn/shop/files/RingConn_Smart_Ring_Gen_2-Royal_Gold.png?v=1757058366&width=1472',
    images: [
      'https://ringconn.com/cdn/shop/files/RingConn_Smart_Ring_Gen_2-Royal_Gold.png?v=1757058366&width=1472',
      'https://ringconn.com/cdn/shop/files/RingConn_Smart_Ring_Gen_2-Silver_a529d976-de15-49c4-9c1c-8afc1be2aa51.png?v=1756459360&width=1472'
    ],
    description: 'RingConn Gen 2 Royal Gold: donde la joyería se une a la tecnología de salud. FC 24/7, VFC, SpO₂, temperatura corporal y análisis del sueño con fases REM. Sin suscripción mensual. Acabado premium en oro real. Batería 8–10 días. IP68. Tallas 6–21.',
    specs: {
      'Generación':   'Gen 2 (2024)',
      'Material':     'Titanio con acabado Royal Gold',
      'Sensores':     'FC continua, VFC, SpO₂, temperatura, acelerómetro',
      'Sueño':        'Fases REM + temperatura nocturna',
      'Batería':      '8–10 días',
      'Resistencia':  'IP68',
      'Tallas':       '6–21',
      'Suscripción':  'Sin suscripción requerida',
      'Fuente':       'ringconn.com'
    }
  },

  // ── 48 · RingConn Gen 3 Future Silver ──────────────────────────────────────
  {
    id: 48,
    name: 'RingConn Gen 3 Future Silver',
    brand: 'RingConn',
    category: 'anillos',
    price: 349.00,
    oldPrice: 399.00,
    badge: 'Última Generación',
    image: 'https://ringconn.com/cdn/shop/files/4a_adbf22ab-187c-42db-af96-d84983e7bb60.webp',
    images: [
      'https://ringconn.com/cdn/shop/files/4a_adbf22ab-187c-42db-af96-d84983e7bb60.webp',
      'https://ringconn.com/cdn/shop/files/1a_9e4056a6-6b65-41d1-804e-03aaa2818425.webp'
    ],
    description: 'RingConn Gen 3 Future Silver: la generación más avanzada con gestión vascular activa. FC 24/7, VFC, SpO₂, temperatura corporal, análisis del sueño y estrés. Diseño ultrafino de última generación. Sin suscripción mensual. Batería 10–12 días. IP68. Tallas 5–13.',
    specs: {
      'Generación':   'Gen 3 (2025)',
      'Material':     'Titanio de alta resistencia',
      'Sensores':     'FC continua, VFC, SpO₂, temperatura, estrés, vascular',
      'Sueño':        'Fases REM avanzadas + temperatura',
      'Batería':      '10–12 días',
      'Resistencia':  'IP68',
      'Tallas':       '5–13',
      'Suscripción':  'Sin suscripción requerida',
      'Fuente':       'ringconn.com'
    }
  }

);

// ─── ULTRAHUMAN PRODUCTS (fuente: ultrahuman.com — datos de referencia mayo 2026) ──
PRODUCTS.push(

  // ── 49 · Ultrahuman Ring AIR Matte Grey ────────────────────────────────────
  {
    id: 49,
    name: 'Ultrahuman Ring AIR Matte Grey',
    brand: 'Ultrahuman',
    category: 'anillos',
    price: 379.00,
    badge: 'Sin Suscripción',
    image: 'https://myultra.life/cdn/shop/files/Matte_Black_4.png?v=1728039848&width=800',
    images: [
      'https://myultra.life/cdn/shop/files/Matte_Black_4.png?v=1728039848&width=800',
      'https://myultra.life/cdn/shop/files/Space_Silver_4_1.png?v=1728039932&width=800'
    ],
    description: 'Ultrahuman Ring AIR Matte Grey: el anillo inteligente más ligero del mundo (2,4g), fabricado en titanio con recubrimiento de carburo de tungsteno. Monitorización 24/7 sin pantalla ni distracciones: FC continua, VFC, temperatura cutánea, fases del sueño (REM, profundo, ligero) e índice de recuperación diario. App gratuita sin suscripción. Batería 4–6 días. IP68 / 100m.',
    specs: {
      'Generación':   'Ring AIR (2023)',
      'Material':     'Titanio con recubrimiento carburo de tungsteno',
      'Sensores':     'FC continua, VFC, temperatura cutánea, acelerómetro',
      'Sueño':        'Fases REM + deep sleep + temperatura nocturna',
      'Índice':       'Recovery Score diario + Movement Index',
      'Batería':      '4–6 días',
      'Resistencia':  'IP68 / 100m',
      'Tallas':       '5–13',
      'Suscripción':  'Sin suscripción requerida (app gratuita)',
      'Fuente':       'ultrahuman.com'
    }
  },

  // ── 50 · Ultrahuman Ring AIR Aster Black ───────────────────────────────────
  {
    id: 50,
    name: 'Ultrahuman Ring AIR Aster Black',
    brand: 'Ultrahuman',
    category: 'anillos',
    price: 379.00,
    badge: 'Sin Suscripción',
    image: 'https://myultra.life/cdn/shop/files/Aster_Black_2.png?v=1728039776&width=800',
    images: [
      'https://myultra.life/cdn/shop/files/Aster_Black_2.png?v=1728039776&width=800',
      'https://myultra.life/cdn/shop/files/Matte_Black_4.png?v=1728039848&width=800'
    ],
    description: 'Ultrahuman Ring AIR Aster Black: biohacking sin pantalla en titanio negro aster. Análisis circadiano continuo: temperatura cutánea para detectar desfases de ritmo circadiano, VFC para medir estrés y recuperación, y fases del sueño con IA. Índice de preparación diaria. Sin cuota mensual. 4–6 días batería. IP68.',
    specs: {
      'Generación':   'Ring AIR (2023)',
      'Material':     'Titanio con recubrimiento carburo de tungsteno',
      'Sensores':     'FC continua, VFC, temperatura cutánea, acelerómetro',
      'Sueño':        'Fases REM + deep sleep + temperatura nocturna',
      'Índice':       'Recovery Score diario + Movement Index',
      'Batería':      '4–6 días',
      'Resistencia':  'IP68 / 100m',
      'Tallas':       '5–13',
      'Suscripción':  'Sin suscripción requerida (app gratuita)',
      'Fuente':       'ultrahuman.com'
    }
  },

  // ── 51 · Ultrahuman Ring AIR Space Silver ──────────────────────────────────
  {
    id: 51,
    name: 'Ultrahuman Ring AIR Space Silver',
    brand: 'Ultrahuman',
    category: 'anillos',
    price: 379.00,
    badge: 'Biohacking',
    image: 'https://myultra.life/cdn/shop/files/Space_Silver_4_1.png?v=1728039932&width=800',
    images: [
      'https://myultra.life/cdn/shop/files/Space_Silver_4_1.png?v=1728039932&width=800',
      'https://myultra.life/cdn/shop/files/Bionic-Gold_2_1.png?v=1728039804&width=800'
    ],
    description: 'Ultrahuman Ring AIR Space Silver: monitorización circadiana avanzada en acabado plata espacial. Temperatura cutánea nocturna para detectar ciclo menstrual, inflamación o desfase horario. FC 24/7, VFC, fases del sueño con IA y puntuación de recuperación. Ultra-ligero 2,4g. Sin suscripción. IP68.',
    specs: {
      'Generación':   'Ring AIR (2023)',
      'Material':     'Titanio con recubrimiento carburo de tungsteno',
      'Sensores':     'FC continua, VFC, temperatura cutánea, acelerómetro',
      'Sueño':        'Fases REM + deep sleep + temperatura nocturna',
      'Índice':       'Recovery Score diario + Movement Index',
      'Batería':      '4–6 días',
      'Resistencia':  'IP68 / 100m',
      'Tallas':       '5–13',
      'Suscripción':  'Sin suscripción requerida (app gratuita)',
      'Fuente':       'ultrahuman.com'
    }
  },

  // ── 52 · Ultrahuman Ring AIR Bionic Gold ───────────────────────────────────
  {
    id: 52,
    name: 'Ultrahuman Ring AIR Bionic Gold',
    brand: 'Ultrahuman',
    category: 'anillos',
    price: 379.00,
    badge: 'Bionic Gold',
    image: 'https://myultra.life/cdn/shop/files/Bionic-Gold_2_1.png?v=1728039804&width=800',
    images: [
      'https://myultra.life/cdn/shop/files/Bionic-Gold_2_1.png?v=1728039804&width=800',
      'https://myultra.life/cdn/shop/files/Titanium-Ring-Pic.png?v=1728039908&width=800'
    ],
    description: 'Ultrahuman Ring AIR Bionic Gold: el anillo de biohacking en su acabado más llamativo. Titanio dorado con sensores de salud completos: FC 24/7, VFC, temperatura cutánea, análisis de sueño REM y puntuación de recuperación con inteligencia artificial. Pesa solo 2,4g. Sin suscripción. IP68 / 100m.',
    specs: {
      'Generación':   'Ring AIR (2023)',
      'Material':     'Titanio con recubrimiento carburo de tungsteno dorado',
      'Sensores':     'FC continua, VFC, temperatura cutánea, acelerómetro',
      'Sueño':        'Fases REM + deep sleep + temperatura nocturna',
      'Índice':       'Recovery Score diario + Movement Index',
      'Batería':      '4–6 días',
      'Resistencia':  'IP68 / 100m',
      'Tallas':       '5–13',
      'Suscripción':  'Sin suscripción requerida (app gratuita)',
      'Fuente':       'ultrahuman.com'
    }
  },

  // ── 53 · Ultrahuman Ring AIR Raw Titanium ──────────────────────────────────
  {
    id: 53,
    name: 'Ultrahuman Ring AIR Raw Titanium',
    brand: 'Ultrahuman',
    category: 'anillos',
    price: 379.00,
    badge: 'Titanio Puro',
    image: 'https://myultra.life/cdn/shop/files/Titanium-Ring-Pic.png?v=1728039908&width=800',
    images: [
      'https://myultra.life/cdn/shop/files/Titanium-Ring-Pic.png?v=1728039908&width=800',
      'https://myultra.life/cdn/shop/files/Aster_Black_2.png?v=1728039776&width=800'
    ],
    description: 'Ultrahuman Ring AIR Raw Titanium: acabado titanio en bruto para los que prefieren el minimalismo extremo. Monitorización biológica completa: FC continua, variabilidad del ritmo cardíaco, temperatura cutánea para análisis circadiano, fases del sueño y puntuación diaria de recuperación. 2,4g. Sin suscripción. IP68.',
    specs: {
      'Generación':   'Ring AIR (2023)',
      'Material':     'Titanio grado 5 acabado raw (sin recubrimiento)',
      'Sensores':     'FC continua, VFC, temperatura cutánea, acelerómetro',
      'Sueño':        'Fases REM + deep sleep + temperatura nocturna',
      'Índice':       'Recovery Score diario + Movement Index',
      'Batería':      '4–6 días',
      'Resistencia':  'IP68 / 100m',
      'Tallas':       '5–13',
      'Suscripción':  'Sin suscripción requerida (app gratuita)',
      'Fuente':       'ultrahuman.com'
    }
  }

);

// ─── CIRCULAR PRODUCTS (fuente: circular.xyz — datos de referencia mayo 2026) ─
PRODUCTS.push(

  // ── 54 · Circular Ring 2 Obsidian Black ────────────────────────────────────
  {
    id: 54,
    name: 'Circular Ring 2 Obsidian Black',
    brand: 'Circular',
    category: 'anillos',
    price: 349.00,
    badge: 'ECG Integrado',
    image: 'https://cdn.shopify.com/s/files/1/0680/5245/1613/files/CIRCULAR_PACKSHOT00086418_52c4e288-fce6-4d2b-b9af-8df46155d6e6.png',
    images: [
      'https://cdn.shopify.com/s/files/1/0680/5245/1613/files/CIRCULAR_PACKSHOT00086418_52c4e288-fce6-4d2b-b9af-8df46155d6e6.png',
      'https://cdn.shopify.com/s/files/1/0680/5245/1613/files/Black_Woman_1.jpg'
    ],
    description: 'Circular Ring 2 Obsidian Black: el primer anillo inteligente con ECG clínico real y detección de fibrilación auricular (AFib). Más de 140 biomarcadores. FC continua, SpO₂, temperatura, VFC, estrés y ciclo menstrual. Alertas silenciosas por vibración. Sin suscripción mensual. Titanio ligero. Batería 6–8 días. IP68.',
    specs: {
      'Generación':   'Ring 2 (2025)',
      'Material':     'Titanio ligero acabado obsidian black',
      'Sensores':     'ECG, FC continua, SpO₂, temperatura, VFC, acelerómetro',
      'ECG':          'ECG clínico + detección AFib',
      'Alertas':      'Vibración silenciosa integrada',
      'Sueño':        'Fases del sueño + temperatura nocturna',
      'Biomarcadores':'140+ insights de salud',
      'Batería':      '6–8 días',
      'Resistencia':  'IP68',
      'Tallas':       '5–13',
      'Suscripción':  'Sin suscripción requerida',
      'Fuente':       'circular.xyz'
    }
  },

  // ── 55 · Circular Ring 2 Silver ────────────────────────────────────────────
  {
    id: 55,
    name: 'Circular Ring 2 Silver',
    brand: 'Circular',
    category: 'anillos',
    price: 449.00,
    badge: 'ECG + AFib',
    image: 'https://cdn.shopify.com/s/files/1/0680/5245/1613/files/CIRCULAR_PACKSHOT00086400_065c5676-3244-4f92-824d-d17526acf79e.png',
    images: [
      'https://cdn.shopify.com/s/files/1/0680/5245/1613/files/CIRCULAR_PACKSHOT00086400_065c5676-3244-4f92-824d-d17526acf79e.png',
      'https://cdn.shopify.com/s/files/1/0680/5245/1613/files/CIRCULAR_PACKSHOT00086418_52c4e288-fce6-4d2b-b9af-8df46155d6e6.png'
    ],
    description: 'Circular Ring 2 Silver: el acabado plata premium del anillo inteligente con ECG real. Detección de arritmias (AFib) clínicamente validada, +140 biomarcadores de salud. FC 24/7, SpO₂, temperatura, VFC y análisis profundo del sueño. Alertas por vibración. Sin suscripción mensual. Empresa francesa. Batería 6–8 días. IP68.',
    specs: {
      'Generación':   'Ring 2 (2025)',
      'Material':     'Titanio con acabado PVD plata',
      'Sensores':     'ECG, FC continua, SpO₂, temperatura, VFC, acelerómetro',
      'ECG':          'ECG clínico + detección AFib',
      'Alertas':      'Vibración silenciosa integrada',
      'Sueño':        'Fases del sueño + temperatura nocturna',
      'Biomarcadores':'140+ insights de salud',
      'Batería':      '6–8 días',
      'Resistencia':  'IP68',
      'Tallas':       '5–13',
      'Suscripción':  'Sin suscripción requerida',
      'Fuente':       'circular.xyz'
    }
  },

  // ── 56 · Circular Ring 2 Gold ──────────────────────────────────────────────
  {
    id: 56,
    name: 'Circular Ring 2 Gold',
    brand: 'Circular',
    category: 'anillos',
    price: 549.00,
    badge: 'PVD Dorado',
    image: 'https://cdn.shopify.com/s/files/1/0680/5245/1613/files/CIRCULAR_PACKSHOT00086406_95bdcbd8-5466-400d-8ca8-2078f0bacb02.png',
    images: [
      'https://cdn.shopify.com/s/files/1/0680/5245/1613/files/CIRCULAR_PACKSHOT00086406_95bdcbd8-5466-400d-8ca8-2078f0bacb02.png',
      'https://cdn.shopify.com/s/files/1/0680/5245/1613/files/Gold_Woman_1.jpg'
    ],
    description: 'Circular Ring 2 Gold: joyería de titanio dorado con ECG clínico. El anillo más exclusivo de Circular: acabado PVD dorado, +140 biomarcadores, ECG con detección de arritmias, alertas por vibración y toda la salud avanzada sin pagar suscripción mensual. Empresa francesa fundada en Paris. Batería 6–8 días. IP68.',
    specs: {
      'Generación':   'Ring 2 (2025)',
      'Material':     'Titanio con acabado PVD dorado premium',
      'Sensores':     'ECG, FC continua, SpO₂, temperatura, VFC, acelerómetro',
      'ECG':          'ECG clínico + detección AFib',
      'Alertas':      'Vibración silenciosa integrada',
      'Sueño':        'Fases del sueño + temperatura nocturna',
      'Biomarcadores':'140+ insights de salud',
      'Batería':      '6–8 días',
      'Resistencia':  'IP68',
      'Tallas':       '5–13',
      'Suscripción':  'Sin suscripción requerida',
      'Fuente':       'circular.xyz'
    }
  },

  // ── 57 · Circular Ring 2 Rose Gold ─────────────────────────────────────────
  {
    id: 57,
    name: 'Circular Ring 2 Rose Gold',
    brand: 'Circular',
    category: 'anillos',
    price: 549.00,
    badge: 'Oro Rosa',
    image: 'https://cdn.shopify.com/s/files/1/0680/5245/1613/files/CIRCULAR_PACKSHOT00086412_1dbc8ae9-727c-4c93-8a2a-273467d9f352.png',
    images: [
      'https://cdn.shopify.com/s/files/1/0680/5245/1613/files/CIRCULAR_PACKSHOT00086412_1dbc8ae9-727c-4c93-8a2a-273467d9f352.png',
      'https://cdn.shopify.com/s/files/1/0680/5245/1613/files/Gold_Woman_1.jpg'
    ],
    description: 'Circular Ring 2 Rose Gold: el anillo inteligente con ECG en acabado oro rosa. Para quienes combinan salud avanzada con joyería premium. ECG clínico, detección de AFib, FC 24/7, SpO₂, temperatura, VFC y +140 biomarcadores. Alertas de salud por vibración silenciosa. Sin suscripción. Batería 6–8 días. IP68.',
    specs: {
      'Generación':   'Ring 2 (2025)',
      'Material':     'Titanio con acabado PVD oro rosa',
      'Sensores':     'ECG, FC continua, SpO₂, temperatura, VFC, acelerómetro',
      'ECG':          'ECG clínico + detección AFib',
      'Alertas':      'Vibración silenciosa integrada',
      'Sueño':        'Fases del sueño + temperatura nocturna',
      'Biomarcadores':'140+ insights de salud',
      'Batería':      '6–8 días',
      'Resistencia':  'IP68',
      'Tallas':       '5–13',
      'Suscripción':  'Sin suscripción requerida',
      'Fuente':       'circular.xyz'
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
  cart = cart.filter(function(i) { return i.id !== productId; });
  saveCart();
  updateCartBadge();
  renderCartItems();
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
    return '<div class="cart-item">' +
      '<div class="cart-item-svg">' + cartImg + '</div>' +
      '<div class="cart-item-info">' +
        '<span class="cart-item-brand">' + item.brand + '</span>' +
        '<span class="cart-item-name">' + item.name + '</span>' +
        '<div class="cart-item-controls">' +
          '<button onclick="changeQty(' + item.id + ',-1)">−</button>' +
          '<span>' + item.qty + '</span>' +
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
    }, i * 55);
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
    setTimeout(function() { card.style.transition = 'opacity .38s ease,transform .38s ease'; card.style.opacity = '1'; card.style.transform = 'translateY(0)'; }, i * 50);
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
      '<p class="qv-desc">' + product.description + '</p>' +
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
    badge.textContent = (as ? (as.dataset.name || as.title) : 'Slate Black') + ' · ' + (am ? am.dataset.finish : 'Plata');
  }

  // ── Color swatches ──
  document.querySelectorAll('#strap-colors .swatch').forEach(function(swatch) {
    swatch.addEventListener('click', function() {
      document.querySelectorAll('#strap-colors .swatch').forEach(function(s) { s.classList.remove('active'); });
      swatch.classList.add('active');
      var nameEl = document.getElementById('strap-name');
      if (nameEl) nameEl.textContent = swatch.dataset.name || swatch.title;
      swapWatchImg(swatch.dataset.img);
      updateConfigBadge();
    });
  });

  // ── Material buttons ──
  document.querySelectorAll('#case-materials .material-btn').forEach(function(btn) {
    btn.addEventListener('click', function() {
      document.querySelectorAll('#case-materials .material-btn').forEach(function(b) { b.classList.remove('active'); });
      btn.classList.add('active');
      var price = parseInt(btn.dataset.price);
      var priceEl = document.getElementById('config-price');
      var saveEl = document.getElementById('config-save');
      if (priceEl) priceEl.textContent = '€' + price;
      if (saveEl) saveEl.textContent = 'Ahorras €' + (159 - price);
      swapWatchImg(btn.dataset.img);
      updateConfigBadge();
    });
  });

  // ── Add to cart ──
  var addBtn = document.getElementById('add-config-to-cart');
  if (addBtn) {
    addBtn.addEventListener('click', function() {
      var orig = addBtn.innerHTML;
      addBtn.innerHTML = '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg> ¡Añadido al Carrito!';
      addBtn.disabled = true;
      setTimeout(function() { addBtn.innerHTML = orig; addBtn.disabled = false; }, 2200);
      addToCart(15);
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
  var slides = document.querySelectorAll('.slide');
  var dots = document.querySelectorAll('.slider-dot');
  var progress = document.getElementById('slider-progress');
  var prevBtn = document.getElementById('slider-prev');
  var nextBtn = document.getElementById('slider-next');
  if (!slides.length) return;

  var current = 0;
  var total = slides.length;
  var duration = 7000;
  var timer;
  var progressTimer;

  // Navbar tints per slide: purple, gold, teal
  var navTints = [
    { bg: 'rgba(50,25,110,.58)',  border: 'rgba(99,102,241,.25)' },
    { bg: 'rgba(80,42,4,.60)',    border: 'rgba(251,191,36,.22)' },
    { bg: 'rgba(4,56,66,.60)',    border: 'rgba(45,212,191,.22)' }
  ];

  function updateNavTint(idx) {
    var navbar = document.getElementById('navbar');
    if (!navbar || navbar.classList.contains('scrolled')) return;
    navbar.style.setProperty('--nav-bg', navTints[idx].bg);
    navbar.style.setProperty('--nav-border', navTints[idx].border);
    navbar.style.background = navTints[idx].bg;
    navbar.style.borderBottomColor = navTints[idx].border;
  }

  function goTo(idx) {
    slides[current].classList.remove('active');
    dots[current].classList.remove('active');
    current = (idx + total) % total;
    slides[current].classList.add('active');
    dots[current].classList.add('active');
    updateNavTint(current);
    startProgress();
  }

  function startProgress() {
    clearInterval(timer);
    clearInterval(progressTimer);
    if (progress) { progress.style.transition = 'none'; progress.style.width = '0%'; }
    requestAnimationFrame(function() {
      requestAnimationFrame(function() {
        if (progress) { progress.style.transition = 'width ' + duration + 'ms linear'; progress.style.width = '100%'; }
      });
    });
    timer = setTimeout(function() { goTo(current + 1); }, duration);
  }

  if (prevBtn) prevBtn.addEventListener('click', function() { goTo(current - 1); });
  if (nextBtn) nextBtn.addEventListener('click', function() { goTo(current + 1); });
  dots.forEach(function(dot) {
    dot.addEventListener('click', function() { goTo(parseInt(dot.dataset.index)); });
  });

  // Pause on hover
  var slider = document.getElementById('hero');
  if (slider) {
    slider.addEventListener('mouseenter', function() { clearTimeout(timer); clearInterval(progressTimer); });
    slider.addEventListener('mouseleave', function() { startProgress(); });
  }

  // Touch swipe
  var touchX = 0;
  document.getElementById('hero').addEventListener('touchstart', function(e) { touchX = e.touches[0].clientX; }, {passive:true});
  document.getElementById('hero').addEventListener('touchend', function(e) {
    var diff = touchX - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 40) { diff > 0 ? goTo(current + 1) : goTo(current - 1); }
  }, {passive:true});

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

    if (/running|correr|atletism|marath|triatl|carrera|5k|10k/.test(ql)) {
      return 'Para running y atletismo, el <strong>Garmin Forerunner 265</strong> (€349,99) es nuestra referencia: AMOLED AOD, GPS multibanda, potencia de carrera y Morning Report. El <strong>Garmin Forerunner 55</strong> (€149,99) es ideal para empezar con GPS y coach de carrera. Y el <strong>COROS Apex 2 Pro</strong> (€399,99) con 75h GPS para ultra-distancia. <a class="ai-msg-link" href="catalogo.html?filter=watches&brand=Garmin">Ver Garmin →</a>';
    }

    if (/deporte|fitnes|entrenamiento|sport|ejercicio/.test(ql)) {
      return 'Para deporte y entrenamiento, el <strong>Amazfit Bip 6</strong> (€79,90) destaca con AMOLED 1,97", 140+ modos deportivos y GPS con mapas. El <strong>Garmin Vivoactive 5</strong> (€229,99) añade AMOLED siempre encendida, NFC y 25+ modos. Y el <strong>Garmin Instinct 2S</strong> (€199,99) con carcasa MIL-STD-810 para deporte extremo. <a class="ai-msg-link" href="catalogo.html?filter=watches">Ver relojes deportivos →</a>';
    }

    if (/sue[ñn]o|dormir|sleep|descanso|recuperaci[oó]n/.test(ql)) {
      return 'Para analizar tu sueño en profundidad, el <strong>Amazfit Active 2</strong> (€99,90) usa BioTracker™ 5 con análisis avanzado de fases del sueño. El <strong>Amazfit Active 3 Premium</strong> (€169,90) añade ECG y cristal de zafiro para el usuario más exigente. <a class="ai-msg-link" href="catalogo.html?filter=watches&brand=Amazfit">Ver Amazfit →</a>';
    }

    if (/bater[ií]a|autonom[ií]a|carga|dura|aguant/.test(ql)) {
      return 'En autonomía de batería, el <strong>Amazfit Bip Max</strong> (€99,90) lidera con <strong>hasta 20 días</strong> de batería y pantalla AMOLED 2,07". El <strong>Amazfit Bip 6</strong> (€79,90) también ofrece 10 días con GPS activo. Ambos son imbatibles en su rango de precio. <a class="ai-msg-link" href="catalogo.html?filter=watches">Ver relojes →</a>';
    }

    if (/salud|ecg|coraz[oó]n|spo2|oxigeno|frecuencia card[ií]aca|presi[oó]n/.test(ql)) {
      return 'Para monitorización de salud avanzada, el <strong>Amazfit Active 3 Premium</strong> (€169,90) incluye ECG, SpO₂, frecuencia cardíaca 24/7 y GPS multibanda con cristal de zafiro. El <strong>Amazfit Active 2</strong> (€99,90) ofrece BioTracker™ 5 con SpO₂ continuo a mejor precio. <a class="ai-msg-link" href="catalogo.html?filter=watches&brand=Amazfit">Ver Amazfit →</a>';
    }

    if (/auricular|tws|earbuds|sonido|m[uú]sica/.test(ql)) {
      return 'En este momento nuestro catálogo incluye <strong>35 relojes inteligentes</strong> y <strong>13 anillos inteligentes</strong> (Oura, Samsung Galaxy Ring y RingConn). Próximamente incorporaremos auriculares premium. ¿Te ayudo a elegir un reloj o anillo? <a class="ai-msg-link" href="catalogo.html">Ver catálogo →</a>';
    }

    if (/amazfit|bip|active|helio|balance|gtr|gts/.test(ql)) {
      return 'Toda la gama Amazfit disponible: <strong>Helio Core</strong> (€69,90) · <strong>Bip 6</strong> (€79,90) · <strong>Active 2</strong> (€99,90) · <strong>Bip Max</strong> (€99,90) · <strong>Active 3 Premium</strong> (€169,90). Todos con GPS integrado y monitorización de salud 24/7. <a class="ai-msg-link" href="catalogo.html?filter=watches&brand=Amazfit">Ver Amazfit →</a>';
    }

    if (/samsung|galaxy watch/.test(ql)) {
      return 'Samsung en ZoneTechOnline: <strong>5 relojes Galaxy Watch</strong> (Galaxy Watch 7 40mm €249,99 · Watch 7 44mm €279,99 · Watch 8 Classic €449,99 · Watch Ultra €549,99) y <strong>3 anillos Galaxy Ring</strong> (Negro/Plata/Oro a €449, sin suscripción). <a class="ai-msg-link" href="catalogo.html?brand=Samsung">Ver Samsung →</a>';
    }

    if (/galaxy ring|samsung ring/.test(ql)) {
      return 'El <strong>Samsung Galaxy Ring</strong> está disponible en 3 acabados de titanio: <strong>Titanio Negro</strong> · <strong>Titanio Plata</strong> · <strong>Titanio Oro</strong> — todos a €449. FC 24/7, temperatura cutánea, Galaxy AI y <strong>sin cuota de suscripción</strong>. Batería 6–7 días. IP68. Integración perfecta con Samsung Health. <a class="ai-msg-link" href="catalogo.html?filter=rings&brand=Samsung">Ver Galaxy Ring →</a>';
    }

    if (/ringconn|ring conn/.test(ql)) {
      return 'Toda la gama <strong>RingConn</strong> (5 modelos sin suscripción): <strong>Gen 2 Air Silver</strong> (€219) · <strong>Gen 2 Air Dune Gold</strong> (€219) · <strong>Gen 2 Future Silver</strong> (€299) · <strong>Gen 2 Royal Gold</strong> (€299) · <strong>Gen 3 Future Silver</strong> (€349). FC, VFC, SpO₂, temperatura y sueño. <a class="ai-msg-link" href="catalogo.html?filter=rings&brand=RingConn">Ver RingConn →</a>';
    }

    if (/huawei|band 9|band 10|band 11|watch fit/.test(ql)) {
      return 'Toda la gama Huawei disponible: <strong>Band 9</strong> (€49,99) · <strong>Band 10</strong> (€59,99) · <strong>Band 11</strong> (€79,99) · <strong>WATCH FIT 3</strong> (€99,99) · <strong>WATCH FIT 4</strong> (€129,99). Pulseras y smartwatches con hasta 14 días de batería y 100+ modos deportivos. <a class="ai-msg-link" href="catalogo.html?filter=watches&brand=Huawei">Ver Huawei →</a>';
    }

    if (/xiaomi|redmi|mi band/.test(ql)) {
      return 'Toda la gama Xiaomi (5 relojes): <strong>Smart Band 9</strong> (€39,95) · <strong>Redmi Watch 5 Active</strong> Negro/Plata (€49,95) con AMOLED 2,05" y 20 días · <strong>Watch S3</strong> (€99,95) con cristal de zafiro y NFC · <strong>Watch S4 Sport</strong> (€149,95) con GPS dual y ECG. <a class="ai-msg-link" href="catalogo.html?brand=Xiaomi">Ver Xiaomi →</a>';
    }

    if (/barato|econ[oó]mico|precio|asequible|oferta|descuento|bajo precio|menos de/.test(ql)) {
      return 'Los relojes más económicos: <strong>Xiaomi Smart Band 9</strong> (€39,95), <strong>Redmi Watch 5 Active</strong> (€49,95), <strong>HUAWEI Band 9</strong> (€49,99) y <strong>Amazfit Helio Core</strong> (€69,90). Tecnología de calidad desde €39,95. <a class="ai-msg-link" href="catalogo.html?filter=watches">Ver relojes →</a>';
    }

    if (/premium|caro|mejor|top|m[aá]s completo|el mejor/.test(ql)) {
      return 'Nuestros relojes más premium: <strong>COROS Vertix 3</strong> (€699,99) AMOLED + GPS triple banda, <strong>COROS Vertix 2S</strong> (€549,99) titanio+DLC y 140h GPS, <strong>Samsung Galaxy Watch Ultra</strong> (€549,99) con Titanio Grado 4, <strong>Samsung Galaxy Watch 8 Classic</strong> (€449,99) con bisel rotatorio, <strong>Amazfit Active 3 Premium</strong> (€169,90) con ECG y zafiro. <a class="ai-msg-link" href="catalogo.html?filter=watches">Ver premium →</a>';
    }

    if (/apple|iphone|apple watch|series 11|watch se/.test(ql)) {
      return 'Toda la gama Apple Watch (5 modelos): <strong>SE3 GPS 40mm</strong> (€249) · <strong>SE3 GPS 44mm</strong> (€279) · <strong>SE3 Cellular 40mm</strong> (€299) · <strong>SE3 Cellular 44mm</strong> (€329) · <strong>Series 11 GPS 42mm</strong> (€399) con ECG, SpO₂ y temperatura. Todos con imágenes reales de Depau. <a class="ai-msg-link" href="catalogo.html?filter=watches&brand=Apple">Ver Apple Watch →</a>';
    }

    if (/garmin|forerunner|vivoactive|venu|instinct|f[eé]nix|fenix/.test(ql)) {
      return 'Toda la gama Garmin (5 relojes): <strong>Forerunner 55</strong> (€149,99) GPS running · <strong>Instinct 2S</strong> (€199,99) MIL-STD-810 · <strong>Vivoactive 5</strong> (€229,99) AMOLED+NFC · <strong>Venu 3S</strong> (€299,99) salud avanzada · <strong>Forerunner 265</strong> (€349,99) running pro AMOLED. <a class="ai-msg-link" href="catalogo.html?filter=watches&brand=Garmin">Ver Garmin →</a>';
    }

    if (/coros|pace|apex|vertix/.test(ql)) {
      return 'Toda la gama COROS (5 relojes): <strong>Pace 3</strong> (€229,99) · <strong>Apex 2</strong> (€299,99) · <strong>Apex 2 Pro</strong> (€399,99) con cristal de zafiro · <strong>Vertix 2S</strong> (€549,99) titanio+DLC, 140h GPS · <strong>Vertix 3</strong> (€699,99) AMOLED, triple banda GPS. Especializados en atletismo y aventura extrema. <a class="ai-msg-link" href="catalogo.html?filter=watches&brand=Coros">Ver COROS →</a>';
    }

    if (/ultrahuman|ring air/.test(ql)) {
      return 'Toda la gama <strong>Ultrahuman Ring AIR</strong> (5 colores, €379 c/u — sin suscripción): <strong>Matte Grey</strong> · <strong>Aster Black</strong> · <strong>Space Silver</strong> · <strong>Bionic Gold</strong> · <strong>Raw Titanium</strong>. Titanio ultra-ligero 2,4g, FC 24/7, VFC, temperatura circadiana, sueño REM y Recovery Score. 4–6 días. IP68. <a class="ai-msg-link" href="catalogo.html?filter=rings&brand=Ultrahuman">Ver Ultrahuman →</a>';
    }

    if (/circular|ring 2|ecg.*anillo|anillo.*ecg/.test(ql)) {
      return 'Toda la gama <strong>Circular Ring 2</strong> (4 colores — el único anillo con ECG clínico real): <strong>Obsidian Black</strong> (€349) · <strong>Silver</strong> (€449) · <strong>Gold</strong> (€549) · <strong>Rose Gold</strong> (€549). ECG + detección de AFib, +140 biomarcadores, alertas por vibración. Sin suscripción. Empresa francesa. <a class="ai-msg-link" href="catalogo.html?filter=rings&brand=Circular">Ver Circular →</a>';
    }

    if (/oura|oura ring/.test(ql)) {
      return 'Toda la gama <strong>Oura Ring</strong> (5 anillos Gen 4): <strong>Silver</strong> (€379) · <strong>Matte Black</strong> (€379) · <strong>Gold</strong> (€429) · <strong>Rose Gold</strong> (€429) · <strong>Ceramic Midnight</strong> (€429, PVP €549). Titanio, FC 24/7, VFC, SpO₂, temperatura, sueño REM. 5-8 días. IP68. <a class="ai-msg-link" href="catalogo.html?filter=rings&brand=Oura">Ver Oura Ring →</a>';
    }

    if (/anillo|anillos|ring inteligente|smart ring/.test(ql)) {
      return 'Tenemos <strong>22 anillos inteligentes</strong> de 5 marcas: <strong>Oura Ring Gen 4</strong> (5 modelos, desde €379) · <strong>Samsung Galaxy Ring</strong> (3 colores, €449) · <strong>RingConn</strong> (5 modelos Gen 2+3, desde €219) · <strong>Ultrahuman Ring AIR</strong> (5 colores, €379) · <strong>Circular Ring 2</strong> (4 colores, desde €349, con ECG). <a class="ai-msg-link" href="catalogo.html?filter=rings">Ver todos los anillos →</a>';
    }

    if (/compar|mejor|recomiend|sugier|cu[aá]l|qu[eé].*comprar/.test(ql)) {
      return 'Para recomendarte mejor, cuéntame: ¿buscas reloj o anillo inteligente? ¿Practicas deporte? ¿Salud avanzada o precio ajustado? Tenemos <strong>35 relojes</strong> (7 marcas) y <strong>22 anillos</strong> (Oura, Samsung, RingConn, Ultrahuman, Circular) — desde €39,95. <a class="ai-msg-link" href="catalogo.html">Explorar catálogo →</a>';
    }

    return 'En ZoneTechOnline tenemos <strong>57 wearables</strong>: 35 relojes inteligentes (Apple, Samsung, Huawei, Amazfit, Xiaomi, Coros, Garmin) y 22 anillos inteligentes (Oura Ring, Samsung Galaxy Ring, RingConn, Ultrahuman Ring AIR y Circular Ring 2 — desde €219). Pregúntame sobre batería, deporte, salud, precio o cualquier modelo y te ayudo a elegir. <a class="ai-msg-link" href="catalogo.html">Ver catálogo →</a>';
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
        appendMsg('¡Hola! Soy el asistente de ZoneTechOnline. Tenemos <strong>35 relojes inteligentes</strong> y <strong>22 anillos inteligentes</strong> (Oura, Samsung Ring, RingConn, Ultrahuman y Circular) — 57 wearables en total, desde €39,95. ¿Buscas reloj, anillo inteligente o quieres que te recomiende algo?', 'bot');
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
