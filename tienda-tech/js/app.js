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
const PRODUCTS = [
  // RELOJES
  { id:1,  name:'Garmin Venu 3',           brand:'Garmin',          category:'relojes',    price:399, oldPrice:449,  badge:'Más Vendido',
    image: 'https://www.heartratemonitorsusa.com/cdn/shop/files/garmin-heart-rate-monitors-whitestone-passivated-45mm-garmin-venu-3-gps-smartwatch-33241766297773.jpg?v=1693405476&width=600',
    specs:{ GPS:'Sí', ECG:'No', HRV:'Sí', SpO2:'Sí', Sueño:'Avanzado', Batería:'14 días', Pantalla:'AMOLED 1.4"', Resistencia:'5 ATM' },
    description:'Smartwatch premium con AMOLED 1.4", Garmin Pay y más de 25 deportes indoor. Monitorización avanzada de sueño, estrés y HRV.' },
  { id:2,  name:'Garmin Forerunner 265',   brand:'Garmin',          category:'relojes',    price:349, oldPrice:399,  badge:'Running Pro',
    image: 'https://www.heartratemonitorsusa.com/cdn/shop/products/garmin-heart-rate-monitors-265-aqua-garmin-forerunner-265-265s-gps-watch-32791405461677.jpg?v=1762262748&width=600',
    specs:{ GPS:'Sí', ECG:'No', HRV:'Sí', SpO2:'Sí', Sueño:'Avanzado', Batería:'15 días', Pantalla:'AMOLED 1.3"', Resistencia:'5 ATM' },
    description:'Training Readiness, cargas de entrenamiento y planes adaptativos. El reloj favorito de los corredores serios.' },
  { id:3,  name:'Garmin Instinct 2 Solar', brand:'Garmin',          category:'relojes',    price:399, oldPrice:null, badge:'Solar ∞',
    image: 'https://shop.gohunt.com/cdn/shop/products/Instinct-2-Solar-1.jpg?v=1644449013&width=600',
    specs:{ GPS:'Sí', ECG:'No', HRV:'Sí', SpO2:'Sí', Sueño:'Sí', Batería:'Ilimitada (Solar)', Pantalla:'MIP 0.9"', Resistencia:'10 ATM' },
    description:'Carga solar ilimitada. Diseño MIL-STD-810 resistente a golpes, temperatura extrema y altitud.' },
  { id:4,  name:'Withings ScanWatch Nova', brand:'Withings',        category:'relojes',    price:299, oldPrice:349,  badge:'ECG Médico',
    image: 'https://www-assets.withings.com/pages/products/scanwatch-nova/media/hero/masterpiece_light.jpg',
    specs:{ GPS:'No', ECG:'Sí ✓FDA', HRV:'Sí', SpO2:'Sí', Sueño:'Avanzado', Batería:'30 días', Pantalla:'OLED Híbrido', Resistencia:'5 ATM' },
    description:'El único reloj híbrido con ECG certificado médicamente. Diseño suizo analógico con sensor óptico avanzado.' },
  { id:5,  name:'Withings ScanWatch Light', brand:'Withings',       category:'relojes',    price:149, oldPrice:179,  badge:'Precio Acceso',
    image: 'https://www-assets.withings.com/pages/products/scanwatch-light/media/hero/hero-visual-colored.jpg',
    specs:{ GPS:'No', ECG:'No', HRV:'No', SpO2:'Sí', Sueño:'Sí', Batería:'30 días', Pantalla:'OLED Híbrido', Resistencia:'5 ATM' },
    description:'30 días de batería y SpO2 continuos. El híbrido elegante de entrada con diseño analógico francés clásico.' },
  { id:6,  name:'Polar Pacer Pro',         brand:'Polar',           category:'relojes',    price:279, oldPrice:309,  badge:'Atletas',
    image: 'https://www.polar.com/img/static/pacer-pro-rd/gallery/pacer-pro-gold-1.webp',
    specs:{ GPS:'Sí', ECG:'No', HRV:'Sí', SpO2:'Sí', Sueño:'Nightly Recharge', Batería:'35h GPS', Pantalla:'MIP 1.2"', Resistencia:'10 ATM' },
    description:'GPS ultra-preciso con altímetro barométrico. Nightly Recharge, Polar Flow y análisis deportivo de élite.' },
  { id:7,  name:'Polar Ignite 3',          brand:'Polar',           category:'relojes',    price:199, oldPrice:229,  badge:'Fitness',
    image: 'https://www.polar.com/img/static/ignite3/serene-ksp.png',
    specs:{ GPS:'Sí', ECG:'No', HRV:'Sí', SpO2:'Sí', Sueño:'Sí', Batería:'30h GPS', Pantalla:'AMOLED 1.28"', Resistencia:'5 ATM' },
    description:'AMOLED brillante con Polar Fitness Test y FitSpark. Te guía en cada entrenamiento con Daily Energy.' },
  { id:8,  name:'Suunto Race S',           brand:'Suunto',          category:'relojes',    price:399, oldPrice:null, badge:'Aventura',
    image: 'https://us.suunto.com/cdn/shop/files/Suunto_Race_S_Stainless_Steel.png?v=1778325640&width=600',
    specs:{ GPS:'Sí', ECG:'No', HRV:'Sí', SpO2:'Sí', Sueño:'Sí', Batería:'40h GPS', Pantalla:'AMOLED 1.43"', Resistencia:'10 ATM' },
    description:'AMOLED 1.43" en acero inoxidable. Navegación offline con mapas topográficos y métricas de rendimiento avanzadas.' },
  { id:9,  name:'Fitbit Versa 4',          brand:'Fitbit',          category:'relojes',    price:199, oldPrice:229,  badge:'Google',
    image: 'https://www.heartratemonitorsusa.com/cdn/shop/products/heartratemonitorsusa-com-black-fitbit-versa-4-smartwatch-32134887866541.jpg?v=1661340456&width=600',
    specs:{ GPS:'Sí', ECG:'No', HRV:'Sí', SpO2:'Sí', Sueño:'Google Sleep', Batería:'6 días', Pantalla:'AMOLED 1.58"', Resistencia:'5 ATM' },
    description:'Google Maps, Google Wallet y Alexa integrados. Daily Readiness Score y compatible con Android e iOS.' },

  // ANILLOS
  { id:10, name:'Oura Ring 4 Oro',         brand:'Oura',            category:'anillos',    price:349, oldPrice:null, badge:'Top Ventas',
    image: 'https://ourahealth.imgix.net/blue-sky/pop/gen4/finishes-carousel-slide-gold.png',
    specs:{ Sensores:'18 sensores', HRV:'Sí', SpO2:'Sí', Temperatura:'Sí', Sueño:'Avanzado', Batería:'8 días', Resistencia:'100m', 'Sin Pantalla':'Sí' },
    description:'El anillo de salud más avanzado del mundo. Titanio dorado ligero, 8 días de batería y seguimiento 24/7.' },
  { id:11, name:'Oura Ring 4 Plata',       brand:'Oura',            category:'anillos',    price:299, oldPrice:null, badge:'Nuevo Gen 4',
    image: 'https://ourahealth.imgix.net/blue-sky/pop/gen4/finishes-carousel-slide-silver.png',
    specs:{ Sensores:'18 sensores', HRV:'Sí', SpO2:'Sí', Temperatura:'Sí', Sueño:'Avanzado', Batería:'8 días', Resistencia:'100m', 'Sin Pantalla':'Sí' },
    description:'Generation 4 en plateado. Readiness Score mejorado, detección de ciclo menstrual y SpO2 continuo.' },
  { id:12, name:'Oura Ring 4 Negro',       brand:'Oura',            category:'anillos',    price:299, oldPrice:null, badge:null,
    image: 'https://ourahealth.imgix.net/blue-sky/pop/gen4/finishes-carousel-slide-black.png',
    specs:{ Sensores:'18 sensores', HRV:'Sí', SpO2:'Sí', Temperatura:'Sí', Sueño:'Avanzado', Batería:'8 días', Resistencia:'100m', 'Sin Pantalla':'Sí' },
    description:'Edición stealth en titanio negro. Sin pantalla, máxima discreción. Monitorización 24/7 de salud completa.' },
  { id:13, name:'Samsung Galaxy Ring',     brand:'Samsung',         category:'anillos',    price:349, oldPrice:399,  badge:'Galaxy AI',
    image: 'https://images.samsung.com/uk/galaxy-ring/feature/galaxy-ring-kv-startframe-pc.jpg',
    specs:{ Sensores:'Avanzados', HRV:'Sí', SpO2:'Sí', Temperatura:'Sí', Sueño:'Galaxy Sleep', Batería:'7 días', Resistencia:'10 ATM', 'Sin Pantalla':'Sí' },
    description:'Integración total con Galaxy AI y Energy Score personalizado. Compatible con todos los dispositivos Samsung Galaxy.' },
  { id:14, name:'Circular Ring Slim',      brand:'Circular',        category:'anillos',    price:299, oldPrice:329,  badge:'Europeo',
    image: 'https://cdn.prod.website-files.com/5c9cf810e0682292a9da04b8/67405d8273fdaa216e875aa7_Circular%20Official%202025%20-%20Black.png',
    specs:{ Sensores:'Multi', HRV:'Sí', SpO2:'Sí', Temperatura:'Sí', Sueño:'Sí', Batería:'5 días', Resistencia:'5 ATM', 'Sin Pantalla':'Sí' },
    description:'Startup francesa. El anillo inteligente más delgado del mercado con app Circular Premium incluida.' },

  // AURICULARES
  { id:15, name:'Jabra Elite 10',          brand:'Jabra',           category:'auriculares', price:249, oldPrice:299, badge:'ANC Pro',
    image: 'https://assets2.jabra.com/b/7/5/b/b75b82be7fd5871ad06b603ffc74a492d31fe2fd_1_Elite_10_Cream.png',
    specs:{ ANC:'MultiSensor', Batería:'6h + 27h', Resistencia:'IP57', Driver:'10mm', Multipoint:'Sí', Codec:'SBC/AAC/LC3' },
    description:'ANC MultiSensor con Dolby Audio y ComfortFit. Los earbuds de referencia de Jabra para uso profesional.' },
  { id:16, name:'Jabra Elite 4 Active',    brand:'Jabra',           category:'auriculares', price:99,  oldPrice:129, badge:'Sport',
    image: 'https://c1.neweggimages.com/productimage/nb640/AFWTD2201170ZQE7EC3.jpg',
    specs:{ ANC:'Ajustable', Batería:'7h + 21h', Resistencia:'IP57', Driver:'6mm', Multipoint:'Sí', Codec:'SBC/AAC' },
    description:'IP57 para entrenamientos intensos. ANC ajustable y modo HearThrough. Perfecto para gym y running.' },
  { id:17, name:'Sennheiser Momentum 4',   brand:'Sennheiser',      category:'auriculares', price:279, oldPrice:349, badge:'60H Batería',
    image: 'https://us.sennheiser-hearing.com/cdn/shop/files/MOMENTUM_4_Black.jpg?v=1759511980',
    specs:{ ANC:'Adaptive', Batería:'60h', Resistencia:'IP54', Driver:'42mm', Multipoint:'Sí', Codec:'aptX Adaptive' },
    description:'60 horas de batería líder de mercado. Adaptive ANC y ecualizador paramétrico. Audio Hi-Fi alemán.' },
  { id:18, name:'Sennheiser MOMENTUM TW3', brand:'Sennheiser',      category:'auriculares', price:199, oldPrice:249, badge:'Hi-Fi TWS',
    image: 'https://us.sennheiser-hearing.com/cdn/shop/files/Screenshot2024-02-12132746_47cb7128-5cbb-4f06-885c-5da9a21d3277.png?v=1767999878',
    specs:{ ANC:'Adaptativo', Batería:'7h + 28h', Resistencia:'IPX4', Driver:'7mm', Multipoint:'Sí', Codec:'aptX' },
    description:'True Wireless con ANC adaptativo y sonido de firma Sennheiser. Compatible con Google Assistant y Alexa.' },
  { id:19, name:'B&O Beoplay EX',          brand:'Bang & Olufsen',  category:'auriculares', price:399, oldPrice:449, badge:'Lujo',
    image: 'https://images.ctfassets.net/8cd2csgvqd3m/7AdyFHvn7QPcZ9aMbfEewY/033578369b617f673a919aa98ff4b4db/Beoplay-EX-Black-Anthracite-Hero.png?q=85&fm=png&w=600&h=600&fit=fill',
    specs:{ ANC:'Adaptive B&O', Batería:'6h + 14h', Resistencia:'IP57', Driver:'9.2mm', Multipoint:'No', Codec:'aptX Adaptive' },
    description:'Diseño danés premiado en aluminio anodizado. ANC Adaptive con algoritmo exclusivo B&O y sonido de firma única.' },
  { id:20, name:'Bose QC Ultra Earbuds',   brand:'Bose',            category:'auriculares', price:299, oldPrice:349, badge:'Mejor ANC',
    image: 'https://assets.bosecreative.com/transform/bb7b1552-1001-446f-bfd5-f7e2c4ee31ee/QCUEII_DeepPlum_Ecomm-Gallery-1-1634x1224?format=webp&quality=90&io=width:600,height:600,transform:fit',
    specs:{ ANC:'WorldClass', Batería:'6h + 24h', Resistencia:'IPX4', Driver:'9.3mm', Multipoint:'Sí', Codec:'SBC/AAC/aptX' },
    description:'El mejor ANC del mundo según pruebas independientes. Immersive Audio con detección de movimiento de cabeza.' },
  { id:21, name:'Bose QuietComfort 45',    brand:'Bose',            category:'auriculares', price:279, oldPrice:329, badge:'Over-Ear',
    image: 'https://assets.bosecreative.com/transform/788fa4e9-26f2-4c34-ba4b-be028d456603/QC45_WhiteSmoke_001_RGB?io=width:600,height:600,transform:fit',
    specs:{ ANC:'QuietComfort', Batería:'24h', Resistencia:'IPX4', Driver:'40mm', Multipoint:'Sí', Codec:'SBC/AAC' },
    description:'La diadema icónica con ANC más confortable del mercado. TriPort acoustic y comodidad para horas de uso.' },

  // GAFAS
  { id:22, name:'Ray-Ban Meta Wayfarer',   brand:'Ray-Ban Meta',    category:'gafas',      price:329, oldPrice:null, badge:'Meta AI',
    image: 'https://lookaside.fbsbx.com/elementpath/media/?media_id=1556964719066752&version=1776971541&transcode_extension=webp',
    specs:{ Cámara:'12MP', Audio:'Altavoces Abiertos', Batería:'4h / 36h caja', IA:'Meta AI', Resistencia:'IPX4', Bluetooth:'5.3' },
    description:'Cámara 12MP, altavoces abiertos y Meta AI para responder preguntas sobre lo que ves. El Wayfarer reinventado.' },
  { id:23, name:'Ray-Ban Meta Headliner',  brand:'Ray-Ban Meta',    category:'gafas',      price:379, oldPrice:null, badge:'Nuevo 2024',
    image: 'https://assets.lensdirect.com/uploads/images/full/LDRayBanStock_20240901_713e363efe952f81552661f8dbc926a8.jpg',
    specs:{ Cámara:'12MP', Audio:'Altavoces Abiertos', Batería:'4h / 36h caja', IA:'Meta AI', Resistencia:'IPX4', Bluetooth:'5.3' },
    description:'Forma hexagonal exclusiva con Meta AI, cámara 12MP y altavoces de apertura acústica. Edición 2024.' },
  { id:24, name:'Bose Frames Tempo',       brand:'Bose',            category:'gafas',      price:199, oldPrice:229,  badge:'Sport',
    image: 'https://c1.neweggimages.com/productimage/nb640/26-627-114-S04.jpg',
    specs:{ Cámara:'No', Audio:'Bose Open Ear', Batería:'8h', IA:'Alexa', Resistencia:'IPX4', Bluetooth:'5.1' },
    description:'Diseñadas para deporte activo. Audio abierto Bose, lentes polarizadas intercambiables y resistencia IPX4.' },
  { id:25, name:'Bose Frames Alto',        brand:'Bose',            category:'gafas',      price:229, oldPrice:249,  badge:'Clásico',
    image: 'https://c1.neweggimages.com/productimage/nb640/26-627-097-S01.jpg',
    specs:{ Cámara:'No', Audio:'Bose Open Ear', Batería:'5.5h', IA:'Alexa', Resistencia:'IPX4', Bluetooth:'5.1' },
    description:'Marco cuadrado premium con altavoces abiertos Bose y sonido espacial privado. Diseño clásico en acetato.' },
  { id:26, name:'Huawei Eyewear 2',        brand:'Huawei',          category:'gafas',      price:199, oldPrice:229,  badge:'Hi-Res Audio',
    image: 'https://consumer.huawei.com/dam/content/dam/huawei-cbg-site/common/mkt/pdp/audio/huawei-eyewear-2/new/img/kv/huawei-eyewear-2-kv.jpg',
    specs:{ Cámara:'No', Audio:'Hi-Res Dual', Batería:'11h', IA:'Celia AI', Resistencia:'IP54', Bluetooth:'5.2' },
    description:'Certificación Hi-Res Audio con doble altavoz y 11 horas de batería. Diseño óptico intercambiable en ópticos.' },

  // ALTAVOCES
  { id:27, name:'Sonos Roam 2',            brand:'Sonos',           category:'altavoces',  price:179, oldPrice:199,  badge:'Portátil',
    image: 'https://imageresizer.linksunlimited.com/Product/UID/4662d985-15a5-4c9a-8b8b-9b079ee23b7c.png',
    specs:{ Batería:'10h', Resistencia:'IP67', Potencia:'10W', WiFi:'Sí', Bluetooth:'5.0', Multiroom:'Sonos Ecosystem' },
    description:'WiFi + Bluetooth, True Play automático y carga inalámbrica. El portátil del ecosistema Sonos. IP67.' },
  { id:28, name:'Sonos Era 100',           brand:'Sonos',           category:'altavoces',  price:279, oldPrice:null, badge:'Estéreo',
    image: 'https://www.turntablelab.com/cdn/shop/files/sonos-era-100-speaker-black.jpg?v=1762284236',
    specs:{ Batería:'Con cable', Resistencia:'No', Potencia:'2×25W', WiFi:'Sí', Bluetooth:'5.0', Multiroom:'Sonos Ecosystem' },
    description:'Sonido estéreo verdadero desde un altavoz compacto. Trueplay, Apple AirPlay 2 y WiFi dual band.' },
  { id:29, name:'Marshall Emberton III',   brand:'Marshall',        category:'altavoces',  price:109, oldPrice:129,  badge:'32H Rock',
    image: 'https://c1.neweggimages.com/productimage/nb640/A15TD2501291EAF8M22.jpg',
    specs:{ Batería:'32h', Resistencia:'IP67', Potencia:'20W', WiFi:'No', Bluetooth:'5.3', Multiroom:'No' },
    description:'32 horas de batería siendo el líder de mercado en su rango. IP67 y sonido 360° con firma Marshall.' },
  { id:30, name:'Marshall Tufton',         brand:'Marshall',        category:'altavoces',  price:399, oldPrice:449,  badge:'80W',
    image: 'https://c1.neweggimages.com/productimage/nb640/B7VES22052815LVKZD4.jpg',
    specs:{ Batería:'20h', Resistencia:'IPX2', Potencia:'80W', WiFi:'No', Bluetooth:'5.0', Multiroom:'Stack Mode' },
    description:'80W de potencia pura con graves profundos. Stack Mode para emparejar dos Tufton. El más potente de Marshall.' },
  { id:31, name:'B&O Beolit 20',           brand:'Bang & Olufsen',  category:'altavoces',  price:449, oldPrice:499,  badge:'Premium 90W',
    image: 'https://images.ctfassets.net/8cd2csgvqd3m/3rUMHE0GRKR0eACCntNBlr/2dc73adfb01a3bbf79e19f12578376d5/BL20_Grey_iphone_2.png',
    specs:{ Batería:'37h', Resistencia:'IP67', Potencia:'90W', WiFi:'No', Bluetooth:'5.1', Multiroom:'No' },
    description:'Diseño danés con mango de cuero y aluminio. 90W, 37h batería, IP67 y sonido 360° con firma B&O.' },
  { id:32, name:'JBL Charge 5',            brand:'JBL',             category:'altavoces',  price:169, oldPrice:199,  badge:'Power Bank',
    image: 'https://c1.neweggimages.com/productimage/nb640/A1J7D210419S5QJH.jpg',
    specs:{ Batería:'20h', Resistencia:'IP67', Potencia:'40W', WiFi:'No', Bluetooth:'5.1', Multiroom:'PartyBoost' },
    description:'Power bank integrado para cargar tu móvil. JBL PartyBoost, 40W de potencia y bajos profundos. IP67.' },
  { id:33, name:'Bose SoundLink Flex',     brand:'Bose',            category:'altavoces',  price:149, oldPrice:179,  badge:'Flota en Agua',
    image: 'https://c1.neweggimages.com/productimage/nb640/55-772-054-V07.jpg',
    specs:{ Batería:'12h', Resistencia:'IP67', Potencia:'20W', WiFi:'No', Bluetooth:'5.3', Multiroom:'No' },
    description:'Flota en el agua. PositionIQ para sonido óptimo en cualquier posición. El compañero perfecto al aire libre.' },

  // MÁSCARAS LED
  { id:34, name:'CurrentBody Skin LED',        brand:'CurrentBody',      category:'mascaras', price:299, oldPrice:349, badge:'FDA · 264 LEDs',
    image: 'https://us.currentbody.com/cdn/shop/files/1_3c4dd6ee-ff67-4a7b-90a7-dceac5d1fb44_800x.png',
    specs:{ Longitudes:'633nm + 830nm', LEDs:'264', Sesión:'10 min', Frecuencia:'Diario', Cobertura:'Cara completa', Certificación:'FDA Cleared' },
    description:'La favorita de los dermatólogos. 264 LEDs rojo e infrarrojo para estimular el colágeno. Certificada FDA.' },
  { id:35, name:'Omnilux Contour Face',        brand:'Omnilux',          category:'mascaras', price:395, oldPrice:null, badge:'Uso Médico',
    image: 'https://cdn.shopify.com/s/files/1/0482/6736/2466/files/Contour_Face_Cover_Image.jpg?v=1756958460&width=600',
    specs:{ Longitudes:'633nm + 830nm', LEDs:'132', Sesión:'10 min', Frecuencia:'3x/semana', Cobertura:'Cara completa', Certificación:'FDA Cleared' },
    description:'La máscara LED usada en clínicas médicas estéticas. Panel LED flexible que se adapta a todos los contornos.' },
  { id:36, name:'Dr. Dennis Gross SpectraLite', brand:'Dr. Dennis Gross', category:'mascaras', price:395, oldPrice:null, badge:'Triple Onda',
    image: 'https://www.drdennisgross.com/dw/image/v2/BBSK_PRD/on/demandware.static/-/Sites-itemmaster_ddg/default/dw4e54ef8d/2025/October/FaceWarePro/01_DRx_FWP_OnWhite.jpg',
    specs:{ Longitudes:'630nm + 415nm + 850nm', LEDs:'162', Sesión:'3 min', Frecuencia:'Diario', Cobertura:'Cara completa', Certificación:'FDA Cleared' },
    description:'Triple longitud de onda: rojo antienvejecimiento + azul anti-acné + infrarrojo reparador. Solo 3 minutos.' },
  { id:37, name:'Foreo UFO 3',                 brand:'Foreo',            category:'mascaras', price:329, oldPrice:369,  badge:'Smart 90s',
    image: 'https://assets.foreo.com/files/static/2025-12/ecomm_UFO-3_Pink_1.webp',
    specs:{ Longitudes:'617nm + 830nm + 415nm', LEDs:'Array LED', Sesión:'90 segundos', Frecuencia:'Diario', Cobertura:'Cara', Certificación:'Dermatólogos' },
    description:'LED + crioterapia + termoterapia + masaje en 90 segundos. App Foreo para rutinas personalizadas. Sueco.' },
  { id:38, name:'NuFace Trinity+',             brand:'NuFace',           category:'mascaras', price:289, oldPrice:329,  badge:'Microcorrientes',
    image: 'https://www.mynuface.com/cdn/shop/files/01_Silo_Trinity_Complete.jpg?v=1777906292&width=600',
    specs:{ Longitudes:'630nm + 830nm', LEDs:'ELE Attachment', Sesión:'5 min', Frecuencia:'Diario', Cobertura:'Cara + cuello', Certificación:'FDA Cleared' },
    description:'Microcorrientes + LED rojo e infrarrojo. Define el contorno facial y reduce arrugas en 4 semanas. Clínico.' }
];

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

// ─── CART STATE ──────────────────────────────────────────────────────────────

var cart = JSON.parse(localStorage.getItem('zt_cart') || '[]');
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
    cart.push({ id: productId, name: product.name, brand: product.brand, price: product.price, qty: 1, category: product.category });
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

  grid.innerHTML = filtered.map(function(product) {
    var badgeHTML = product.badge ? '<span class="product-badge">' + product.badge + '</span>' : '';
    var discount = product.oldPrice ? Math.round((1 - product.price / product.oldPrice) * 100) : 0;
    var oldPriceHTML = product.oldPrice ? '<span class="product-old-price">€' + product.oldPrice + '</span>' : '';
    var discountHTML = discount > 0 ? '<span class="product-discount">-' + discount + '%</span>' : '';
    var shortDesc = product.description.length > 90 ? product.description.substring(0, 90) + '...' : product.description;
    var stars = '★★★★' + (product.id % 3 === 0 ? '★' : '½');
    var reviews = 40 + (product.id * 7) % 180;

    return '<article class="product-card">' +
      '<span class="product-brand">' + product.brand + '</span>' +
      badgeHTML +
      '<div class="product-img" onclick="openQuickView(' + product.id + ')">' +
        productImgHTML(product, 'product-real-img', 'product-svg-back') +
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
    grid.innerHTML = '<div style="grid-column:1/-1;text-align:center;padding:80px 20px;color:var(--text-3)"><svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" style="margin:0 auto 16px;display:block;opacity:.4"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/></svg><p>No se encontraron productos</p></div>';
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
    return '<article class="product-card">' +
      '<span class="product-brand">' + product.brand + '</span>' +
      badgeHTML +
      '<div class="product-img" onclick="openQuickView(' + product.id + ')">' +
        productImgHTML(product, 'product-real-img', 'product-svg-back') +
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

  content.innerHTML =
    '<div class="qv-svg-wrap">' + productImgHTML(product, 'qv-real-img', 'qv-svg-back') + '</div>' +
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
      if (saveEl) saveEl.textContent = 'Ahorras €' + (449 - price);
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
      addToCart(1);
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

// ─── INIT ─────────────────────────────────────────────────────────────────────

document.addEventListener('DOMContentLoaded', function() {
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
    var featuredIds = [7, 13, 19, 22, 29, 34];
    renderProducts('all', function(p) { return featuredIds.indexOf(p.id) !== -1; });
  }
  renderCartItems();
  updateCartBadge();
  renderComparator();
  initConfigurator();
  initScrollReveal();
  initNewsletter();
  initSmoothScroll();
  initClearComparator();

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
