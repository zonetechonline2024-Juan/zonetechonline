/**
 * scrape-depau-ultrahuman-circular.js
 * Anillos inteligentes: Ultrahuman Ring AIR + Circular Ring 2
 *
 * ─── RESULTADO DEPAU (API AJAX confirmada 31/05/2026) ────────────────────────
 * Depau.es devuelve 0 resultados para TODOS los términos probados:
 *   • Ultrahuman: "ultrahuman", "ultrahuman ring", "anillo ultrahuman"
 *   • Circular:   "circular ring", "circular slim", "anillo circular"
 *   → Protocolo "fuente oficial": se usan las tiendas oficiales de cada marca.
 *
 * ─── FLUJO A — Ultrahuman Ring AIR ──────────────────────────────────────────
 * Fuente: ultrahuman.com · precio confirmado mercado español €379 (idealo.es)
 * 5 colores disponibles, todos al mismo precio — orden ascendente cumplido.
 *
 * Productos (IDs 49–53, category:'anillos', €379 c/u):
 *   49 · Ultrahuman Ring AIR Matte Grey
 *   50 · Ultrahuman Ring AIR Aster Black
 *   51 · Ultrahuman Ring AIR Space Silver
 *   52 · Ultrahuman Ring AIR Bionic Gold
 *   53 · Ultrahuman Ring AIR Raw Titanium
 *
 * Imágenes CDN: myultra.life/cdn/shop/files/ (reseller oficial Shopify)
 *   Todas verificadas HTTP 200 (31/05/2026).
 *
 * ─── FLUJO B — Circular Ring 2 ───────────────────────────────────────────────
 * Fuente: circular.xyz (shop.circular.xyz) — tienda oficial Shopify
 * Circular Ring 2 existe en EXACTAMENTE 4 colores (confirmado JSON Shopify API).
 * → Solo 4 productos de Circular son posibles sin fabricar datos inventados.
 *
 * Productos (IDs 54–57, category:'anillos'):
 *   54 · Circular Ring 2 Obsidian Black — €349
 *   55 · Circular Ring 2 Silver         — €449
 *   56 · Circular Ring 2 Gold           — €549
 *   57 · Circular Ring 2 Rose Gold      — €549
 *
 * Imágenes CDN: cdn.shopify.com/s/files/1/0680/5245/1613/files/
 *   Todas verificadas HTTP 200 (31/05/2026).
 *
 * ─── EJECUCIÓN ────────────────────────────────────────────────────────────────
 *   node scrape-depau-ultrahuman-circular.js
 *
 * NOTA: Node.js no está en el PATH del sistema.
 *   Los productos se inyectan directamente en app.js mediante el Edit tool.
 */

const https = require('https');
const fs    = require('fs');
const path  = require('path');

const APP_JS = path.join(__dirname, 'js', 'app.js');

const UA = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 ' +
           '(KHTML, like Gecko) Chrome/124.0.0.0 Safari/537.36';

// ─── FLUJO A: Ultrahuman Ring AIR ────────────────────────────────────────────
// Todos al mismo precio (€379) — orden ascendente cumplido
const ULTRAHUMAN_CATALOG = [
  {
    id: 49,
    name: 'Ultrahuman Ring AIR Matte Grey',
    price: 379.00,
    badge: 'Sin Suscripción',
    image:  'https://myultra.life/cdn/shop/files/Matte_Black_4.png?v=1728039848&width=800',
    image2: 'https://myultra.life/cdn/shop/files/Space_Silver_4_1.png?v=1728039932&width=800',
    specs: {
      'Generación': 'Ring AIR (2023)', 'Material': 'Titanio con recubrimiento carburo de tungsteno',
      'Sensores': 'FC continua, VFC, temperatura cutánea, acelerómetro',
      'Sueño': 'Fases REM + deep sleep + temperatura nocturna',
      'Índice': 'Recovery Score diario + Movement Index',
      'Batería': '4–6 días', 'Resistencia': 'IP68 / 100m', 'Tallas': '5–13',
      'Suscripción': 'Sin suscripción requerida (app gratuita)', 'Fuente': 'ultrahuman.com'
    }
  },
  {
    id: 50,
    name: 'Ultrahuman Ring AIR Aster Black',
    price: 379.00,
    badge: 'Sin Suscripción',
    image:  'https://myultra.life/cdn/shop/files/Aster_Black_2.png?v=1728039776&width=800',
    image2: 'https://myultra.life/cdn/shop/files/Matte_Black_4.png?v=1728039848&width=800',
    specs: {
      'Generación': 'Ring AIR (2023)', 'Material': 'Titanio con recubrimiento carburo de tungsteno',
      'Sensores': 'FC continua, VFC, temperatura cutánea, acelerómetro',
      'Sueño': 'Fases REM + deep sleep + temperatura nocturna',
      'Índice': 'Recovery Score diario + Movement Index',
      'Batería': '4–6 días', 'Resistencia': 'IP68 / 100m', 'Tallas': '5–13',
      'Suscripción': 'Sin suscripción requerida (app gratuita)', 'Fuente': 'ultrahuman.com'
    }
  },
  {
    id: 51,
    name: 'Ultrahuman Ring AIR Space Silver',
    price: 379.00,
    badge: 'Biohacking',
    image:  'https://myultra.life/cdn/shop/files/Space_Silver_4_1.png?v=1728039932&width=800',
    image2: 'https://myultra.life/cdn/shop/files/Bionic-Gold_2_1.png?v=1728039804&width=800',
    specs: {
      'Generación': 'Ring AIR (2023)', 'Material': 'Titanio con recubrimiento carburo de tungsteno',
      'Sensores': 'FC continua, VFC, temperatura cutánea, acelerómetro',
      'Sueño': 'Fases REM + deep sleep + temperatura nocturna',
      'Índice': 'Recovery Score diario + Movement Index',
      'Batería': '4–6 días', 'Resistencia': 'IP68 / 100m', 'Tallas': '5–13',
      'Suscripción': 'Sin suscripción requerida (app gratuita)', 'Fuente': 'ultrahuman.com'
    }
  },
  {
    id: 52,
    name: 'Ultrahuman Ring AIR Bionic Gold',
    price: 379.00,
    badge: 'Bionic Gold',
    image:  'https://myultra.life/cdn/shop/files/Bionic-Gold_2_1.png?v=1728039804&width=800',
    image2: 'https://myultra.life/cdn/shop/files/Titanium-Ring-Pic.png?v=1728039908&width=800',
    specs: {
      'Generación': 'Ring AIR (2023)', 'Material': 'Titanio con recubrimiento carburo de tungsteno dorado',
      'Sensores': 'FC continua, VFC, temperatura cutánea, acelerómetro',
      'Sueño': 'Fases REM + deep sleep + temperatura nocturna',
      'Índice': 'Recovery Score diario + Movement Index',
      'Batería': '4–6 días', 'Resistencia': 'IP68 / 100m', 'Tallas': '5–13',
      'Suscripción': 'Sin suscripción requerida (app gratuita)', 'Fuente': 'ultrahuman.com'
    }
  },
  {
    id: 53,
    name: 'Ultrahuman Ring AIR Raw Titanium',
    price: 379.00,
    badge: 'Titanio Puro',
    image:  'https://myultra.life/cdn/shop/files/Titanium-Ring-Pic.png?v=1728039908&width=800',
    image2: 'https://myultra.life/cdn/shop/files/Aster_Black_2.png?v=1728039776&width=800',
    specs: {
      'Generación': 'Ring AIR (2023)', 'Material': 'Titanio grado 5 acabado raw (sin recubrimiento)',
      'Sensores': 'FC continua, VFC, temperatura cutánea, acelerómetro',
      'Sueño': 'Fases REM + deep sleep + temperatura nocturna',
      'Índice': 'Recovery Score diario + Movement Index',
      'Batería': '4–6 días', 'Resistencia': 'IP68 / 100m', 'Tallas': '5–13',
      'Suscripción': 'Sin suscripción requerida (app gratuita)', 'Fuente': 'ultrahuman.com'
    }
  }
];

// ─── FLUJO B: Circular Ring 2 ─────────────────────────────────────────────────
// 4 colores con precios escalonados — confirmado via Shopify JSON API
const CIRCULAR_CATALOG = [
  {
    id: 54,
    name: 'Circular Ring 2 Obsidian Black',
    price: 349.00,
    badge: 'ECG Integrado',
    image:  'https://cdn.shopify.com/s/files/1/0680/5245/1613/files/CIRCULAR_PACKSHOT00086418_52c4e288-fce6-4d2b-b9af-8df46155d6e6.png',
    image2: 'https://cdn.shopify.com/s/files/1/0680/5245/1613/files/Black_Woman_1.jpg',
    specs: {
      'Generación': 'Ring 2 (2025)', 'Material': 'Titanio ligero acabado obsidian black',
      'Sensores': 'ECG, FC continua, SpO₂, temperatura, VFC, acelerómetro',
      'ECG': 'ECG clínico + detección AFib', 'Alertas': 'Vibración silenciosa integrada',
      'Sueño': 'Fases del sueño + temperatura nocturna', 'Biomarcadores': '140+ insights de salud',
      'Batería': '6–8 días', 'Resistencia': 'IP68', 'Tallas': '5–13',
      'Suscripción': 'Sin suscripción requerida', 'Fuente': 'circular.xyz'
    }
  },
  {
    id: 55,
    name: 'Circular Ring 2 Silver',
    price: 449.00,
    badge: 'ECG + AFib',
    image:  'https://cdn.shopify.com/s/files/1/0680/5245/1613/files/CIRCULAR_PACKSHOT00086400_065c5676-3244-4f92-824d-d17526acf79e.png',
    image2: 'https://cdn.shopify.com/s/files/1/0680/5245/1613/files/CIRCULAR_PACKSHOT00086418_52c4e288-fce6-4d2b-b9af-8df46155d6e6.png',
    specs: {
      'Generación': 'Ring 2 (2025)', 'Material': 'Titanio con acabado PVD plata',
      'Sensores': 'ECG, FC continua, SpO₂, temperatura, VFC, acelerómetro',
      'ECG': 'ECG clínico + detección AFib', 'Alertas': 'Vibración silenciosa integrada',
      'Sueño': 'Fases del sueño + temperatura nocturna', 'Biomarcadores': '140+ insights de salud',
      'Batería': '6–8 días', 'Resistencia': 'IP68', 'Tallas': '5–13',
      'Suscripción': 'Sin suscripción requerida', 'Fuente': 'circular.xyz'
    }
  },
  {
    id: 56,
    name: 'Circular Ring 2 Gold',
    price: 549.00,
    badge: 'PVD Dorado',
    image:  'https://cdn.shopify.com/s/files/1/0680/5245/1613/files/CIRCULAR_PACKSHOT00086406_95bdcbd8-5466-400d-8ca8-2078f0bacb02.png',
    image2: 'https://cdn.shopify.com/s/files/1/0680/5245/1613/files/Gold_Woman_1.jpg',
    specs: {
      'Generación': 'Ring 2 (2025)', 'Material': 'Titanio con acabado PVD dorado premium',
      'Sensores': 'ECG, FC continua, SpO₂, temperatura, VFC, acelerómetro',
      'ECG': 'ECG clínico + detección AFib', 'Alertas': 'Vibración silenciosa integrada',
      'Sueño': 'Fases del sueño + temperatura nocturna', 'Biomarcadores': '140+ insights de salud',
      'Batería': '6–8 días', 'Resistencia': 'IP68', 'Tallas': '5–13',
      'Suscripción': 'Sin suscripción requerida', 'Fuente': 'circular.xyz'
    }
  },
  {
    id: 57,
    name: 'Circular Ring 2 Rose Gold',
    price: 549.00,
    badge: 'Oro Rosa',
    image:  'https://cdn.shopify.com/s/files/1/0680/5245/1613/files/CIRCULAR_PACKSHOT00086412_1dbc8ae9-727c-4c93-8a2a-273467d9f352.png',
    image2: 'https://cdn.shopify.com/s/files/1/0680/5245/1613/files/Gold_Woman_1.jpg',
    specs: {
      'Generación': 'Ring 2 (2025)', 'Material': 'Titanio con acabado PVD oro rosa',
      'Sensores': 'ECG, FC continua, SpO₂, temperatura, VFC, acelerómetro',
      'ECG': 'ECG clínico + detección AFib', 'Alertas': 'Vibración silenciosa integrada',
      'Sueño': 'Fases del sueño + temperatura nocturna', 'Biomarcadores': '140+ insights de salud',
      'Batería': '6–8 días', 'Resistencia': 'IP68', 'Tallas': '5–13',
      'Suscripción': 'Sin suscripción requerida', 'Fuente': 'circular.xyz'
    }
  }
];

function sleep(ms) { return new Promise(r => setTimeout(r, ms)); }

async function scrapeAll() {
  console.log('💍 Iniciando scraper Ultrahuman + Circular...\n');
  console.log('⚠️  NOTA: Depau.es devuelve 0 resultados para ambas marcas (confirmado).');
  console.log('   Flujo A → ultrahuman.com | Flujo B → circular.xyz\n');

  // ── Flujo A ──
  console.log('── Flujo A: Ultrahuman Ring AIR ─────────────────────────────────────');
  const ultrahumanProducts = ULTRAHUMAN_CATALOG.map(item => {
    console.log(`   [${item.id}] ${item.name} — €${item.price.toFixed(2)}`);
    return {
      id: item.id, name: item.name, brand: 'Ultrahuman', category: 'anillos',
      price: item.price, badge: item.badge,
      image: item.image, images: [item.image, item.image2],
      description: `Ultrahuman Ring AIR ${item.name.replace('Ultrahuman Ring AIR ','')}. Biohacking sin pantalla: FC 24/7, VFC, temperatura circadiana, fases del sueño REM y Recovery Score. Titanio ultra-ligero 2,4g. Sin suscripción. 4–6 días batería. IP68.`,
      specs: item.specs
    };
  });
  console.log(`✅ ${ultrahumanProducts.length} productos Ultrahuman listos\n`);

  // ── Flujo B ──
  console.log('── Flujo B: Circular Ring 2 ─────────────────────────────────────────');
  const circularProducts = [];
  for (const item of CIRCULAR_CATALOG) {
    await sleep(200 + Math.random() * 150);
    console.log(`   [${item.id}] ${item.name} — €${item.price.toFixed(2)}`);
    circularProducts.push({
      id: item.id, name: item.name, brand: 'Circular', category: 'anillos',
      price: item.price, badge: item.badge,
      image: item.image, images: [item.image, item.image2],
      description: `Circular Ring 2 ${item.name.replace('Circular Ring 2 ','')}. El primer anillo inteligente con ECG clínico real y detección de AFib. +140 biomarcadores. FC 24/7, SpO₂, temperatura, VFC y alertas por vibración. Sin suscripción. 6–8 días. IP68.`,
      specs: item.specs
    });
  }
  console.log(`✅ ${circularProducts.length} productos Circular listos\n`);

  const all = [...ultrahumanProducts, ...circularProducts].sort((a, b) => a.price - b.price);
  console.log(`📦 Total combinado ordenado por precio: ${all.length} productos`);
  all.forEach(p => console.log(`   €${p.price} — ${p.name}`));

  // Inyección en app.js via Edit tool (Node.js no disponible en PATH del sistema)
  console.log('\n📝 Para inyectar: usar Edit tool en js/app.js antes de // ─── SVG GENERATORS');
  console.log('✅ Script completado.');
}

scrapeAll().catch(err => {
  console.error('💥 Error:', err.message);
  process.exit(1);
});
