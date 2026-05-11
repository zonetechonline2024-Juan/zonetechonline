'use strict';

/* =============================================
   ZONETECHONLINE — APP.JS
   ============================================= */

// ===== PRODUCT DATA =====
const products = [
  {
    id: 1, category: 'watches', name: 'ZTO Pro X',
    price: 299, originalPrice: 399, badge: 'hot', badgeLabel: 'Más Vendido',
    rating: 4.9, reviews: 2847,
    description: 'El smartwatch más avanzado de ZoneTechOnline. AMOLED de 1.96", sensor de temperatura subcutáneo, ECG de grado médico y GPS de doble banda. Resistente al agua hasta 100m.',
    colors: ['#1a1a2e','#c8c8d8','#5b21b6','#0369a1'],
    colorNames: ['Midnight Black','Steel Silver','Cosmic Purple','Ocean Blue'],
    sensors: { spo2: 5, hr: 5, ecg: true, gps: 5, sleep: 5, stress: 5, temp: true, battery: 7 },
    materials: { titanium: 299, aluminum: 249, ceramic: 349 },
    type: 'watch'
  },
  {
    id: 2, category: 'watches', name: 'ZTO Sport S2',
    price: 199, originalPrice: 249, badge: 'new', badgeLabel: 'Nuevo',
    rating: 4.8, reviews: 1203,
    description: 'Diseñado para atletas. Carcasa de titanio aeroespacial, análisis de VO2 max en tiempo real, recuperación muscular y 45 modos deportivos.',
    colors: ['#1a1a2e','#dc2626','#166534','#ca8a04'],
    colorNames: ['Midnight Black','Rojo Sport','Verde Militar','Dorado'],
    sensors: { spo2: 5, hr: 5, ecg: false, gps: 5, sleep: 4, stress: 5, temp: false, battery: 5 },
    materials: { titanium: 199, aluminum: 169, ceramic: null },
    type: 'watch'
  },
  {
    id: 3, category: 'watches', name: 'ZTO Slim C1',
    price: 179, originalPrice: 179, badge: 'best', badgeLabel: 'Elegante',
    rating: 4.7, reviews: 986,
    description: 'Ultra delgado (5.9mm). Diseño inspirado en la alta relojería suiza. Pantalla Always-On con caratulas premium.',
    colors: ['#1a1a2e','#c8c8d8','#b45309','#831843'],
    colorNames: ['Midnight','Plata','Champagne','Rosa Gold'],
    sensors: { spo2: 4, hr: 5, ecg: false, gps: 3, sleep: 5, stress: 4, temp: false, battery: 3 },
    materials: { titanium: null, aluminum: 179, ceramic: 229 },
    type: 'watch'
  },
  {
    id: 4, category: 'watches', name: 'ZTO Lite L1',
    price: 129, originalPrice: 159, badge: 'sale', badgeLabel: '-19%',
    rating: 4.6, reviews: 3421,
    description: 'La puerta de entrada al ecosistema ZoneTechOnline. Todo lo que necesitas, nada de lo que no. Pantalla OLED de 1.7" y batería de 10 días.',
    colors: ['#1a1a2e','#c8c8d8','#f59e0b','#6d28d9'],
    colorNames: ['Negro','Blanco Perla','Amarillo','Violeta'],
    sensors: { spo2: 3, hr: 4, ecg: false, gps: 2, sleep: 4, stress: 3, temp: false, battery: 10 },
    materials: { titanium: null, aluminum: 129, ceramic: null },
    type: 'watch'
  },
  {
    id: 5, category: 'rings', name: 'ZTO Ring Health Pro',
    price: 249, originalPrice: 299, badge: 'hot', badgeLabel: 'Más Vendido',
    rating: 4.8, reviews: 1892,
    description: 'El anillo inteligente más avanzado del mercado. Monitoreo de salud 24/7 invisible y elegante. 7 días de batería. Resistencia al agua IPX8.',
    colors: ['#2a2a2a','#c8c8d8','#b45309','#1e3a5f'],
    colorNames: ['Negro Titanio','Plata','Oro Rosa','Azul Acero'],
    sensors: { spo2: 4, hr: 5, ecg: false, gps: 0, sleep: 5, stress: 4, temp: true, battery: 7 },
    materials: { titanium: 249, aluminum: null, ceramic: null },
    type: 'ring'
  },
  {
    id: 6, category: 'rings', name: 'ZTO Ring Sleep',
    price: 179, originalPrice: 199, badge: 'new', badgeLabel: 'Nuevo',
    rating: 4.9, reviews: 654,
    description: 'Especialista en sueño. Algoritmos de IA para analizar fases REM, detectar apnea y optimizar tu recuperación cada noche.',
    colors: ['#1a1a2e','#c8c8d8','#166534'],
    colorNames: ['Midnight','Plata','Verde Bosque'],
    sensors: { spo2: 5, hr: 4, ecg: false, gps: 0, sleep: 5, stress: 5, temp: true, battery: 8 },
    materials: { titanium: 179, aluminum: null, ceramic: null },
    type: 'ring'
  },
  {
    id: 7, category: 'rings', name: 'ZTO Ring Slim',
    price: 149, originalPrice: 149, badge: 'best', badgeLabel: 'Minimalista',
    rating: 4.7, reviews: 421,
    description: 'El anillo más delgado del mercado (2.1mm). Perfecto para quienes buscan tecnología sin renunciar al estilo.',
    colors: ['#1a1a2e','#c8c8d8','#b45309'],
    colorNames: ['Onyx Black','Steel Silver','Rose Gold'],
    sensors: { spo2: 3, hr: 4, ecg: false, gps: 0, sleep: 4, stress: 3, temp: false, battery: 5 },
    materials: { titanium: 149, aluminum: null, ceramic: null },
    type: 'ring'
  },
  {
    id: 8, category: 'glasses', name: 'ZTO Vision Pro AR',
    price: 399, originalPrice: 499, badge: 'new', badgeLabel: 'Nuevo',
    rating: 4.8, reviews: 312,
    description: 'Realidad aumentada de próxima generación. Proyección holográfica de 43°, asistente de voz IA, llamadas manos libres y cámara integrada de 12MP.',
    colors: ['#1a1a2e','#b45309','#6d28d9'],
    colorNames: ['Matte Black','Bronce','Índigo'],
    sensors: { spo2: 0, hr: 3, ecg: false, gps: 3, sleep: 0, stress: 2, temp: false, battery: 1 },
    materials: { titanium: 399, aluminum: null, ceramic: null },
    type: 'glasses'
  },
  {
    id: 9, category: 'glasses', name: 'ZTO UV Shield Smart',
    price: 279, originalPrice: 329, badge: 'sale', badgeLabel: '-15%',
    rating: 4.6, reviews: 218,
    description: 'Gafas inteligentes con filtro UV adaptativo, monitoreo del índice UV en tiempo real y notificaciones de protección solar.',
    colors: ['#1a1a2e','#c8c8d8','#92400e'],
    colorNames: ['Negro Mate','Cristal','Carey'],
    sensors: { spo2: 0, hr: 2, ecg: false, gps: 2, sleep: 0, stress: 1, temp: false, battery: 2 },
    materials: { titanium: null, aluminum: 279, ceramic: null },
    type: 'glasses'
  }
];

// ===== SVG PRODUCT ILLUSTRATIONS =====
function getProductSVG(product, size = 'md') {
  const s = size === 'sm' ? 0.6 : size === 'lg' ? 1.2 : 1;
  if (product.type === 'watch') return watchSVG(product, s);
  if (product.type === 'ring') return ringSVG(product, s);
  if (product.type === 'glasses') return glassesSVG(product, s);
  return '';
}

function watchSVG(p, s = 1) {
  const col = p.colors[0];
  return `<svg viewBox="0 0 200 270" fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="ws_${p.id}" x1="0" y1="0" x2="1" y2="0">
        <stop offset="0%" stop-color="${col}"/>
        <stop offset="100%" stop-color="${col}aa"/>
      </linearGradient>
      <linearGradient id="wc_${p.id}" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stop-color="#2a2a48"/>
        <stop offset="100%" stop-color="#0e0e22"/>
      </linearGradient>
      <filter id="wg_${p.id}"><feGaussianBlur stdDeviation="2" result="b"/><feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge></filter>
    </defs>
    <ellipse cx="100" cy="260" rx="60" ry="10" fill="rgba(99,102,241,0.1)"/>
    <rect x="65" y="4" width="70" height="62" rx="10" fill="url(#ws_${p.id})"/>
    <rect x="68" y="8" width="64" height="2" rx="1" fill="rgba(255,255,255,0.08)"/>
    <rect x="68" y="14" width="64" height="2" rx="1" fill="rgba(255,255,255,0.06)"/>
    <rect x="68" y="20" width="64" height="2" rx="1" fill="rgba(255,255,255,0.06)"/>
    <rect x="68" y="26" width="64" height="2" rx="1" fill="rgba(255,255,255,0.06)"/>
    <rect x="68" y="32" width="64" height="2" rx="1" fill="rgba(255,255,255,0.06)"/>
    <rect x="68" y="38" width="64" height="2" rx="1" fill="rgba(255,255,255,0.06)"/>
    <rect x="68" y="44" width="64" height="2" rx="1" fill="rgba(255,255,255,0.06)"/>
    <rect x="68" y="50" width="64" height="2" rx="1" fill="rgba(255,255,255,0.06)"/>
    <rect x="16" y="62" width="168" height="146" rx="38" fill="url(#wc_${p.id})" filter="drop-shadow(0 12px 30px rgba(99,102,241,0.25))"/>
    <path d="M54,63 Q100,59 146,63" stroke="rgba(255,255,255,0.1)" stroke-width="1.2" fill="none"/>
    <rect x="26" y="72" width="148" height="126" rx="29" fill="#08081a"/>
    <rect x="34" y="79" width="132" height="112" rx="24" fill="url(#screenG_${p.id})"/>
    <defs><linearGradient id="screenG_${p.id}" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#0c0c22"/><stop offset="100%" stop-color="#050512"/></linearGradient></defs>
    <text x="100" y="116" text-anchor="middle" fill="white" font-family="Space Grotesk,sans-serif" font-size="28" font-weight="700" letter-spacing="-1">09:41</text>
    <text x="100" y="131" text-anchor="middle" fill="#6060a0" font-family="Inter,sans-serif" font-size="9">Mar, 10 Mayo</text>
    <rect x="42" y="138" width="116" height="24" rx="8" fill="rgba(255,53,96,0.1)"/>
    <polyline points="47,150 55,150 59,142 65,158 71,142 77,158 81,150 118,150" stroke="#ff3560" stroke-width="1.5" fill="none" filter="url(#wg_${p.id})"/>
    <text x="148" y="148" text-anchor="middle" fill="#ff3560" font-family="Inter,sans-serif" font-size="8" font-weight="700">72 bpm</text>
    <rect x="42" y="168" width="52" height="18" rx="6" fill="rgba(56,189,248,0.12)"/>
    <text x="68" y="180" text-anchor="middle" fill="#38bdf8" font-family="Inter,sans-serif" font-size="9" font-weight="700">SpO₂ 98%</text>
    <rect x="106" y="168" width="52" height="18" rx="6" fill="rgba(52,211,153,0.12)"/>
    <text x="132" y="180" text-anchor="middle" fill="#34d399" font-family="Inter,sans-serif" font-size="9" font-weight="700">8,450 🦶</text>
    <rect x="182" y="110" width="6" height="22" rx="3" fill="#1e1e38"/>
    <rect x="182" y="140" width="6" height="12" rx="3" fill="#1e1e38"/>
    <rect x="12" y="120" width="6" height="15" rx="3" fill="#1e1e38"/>
    <rect x="65" y="204" width="70" height="62" rx="10" fill="url(#ws_${p.id})"/>
    <rect x="68" y="210" width="64" height="2" rx="1" fill="rgba(255,255,255,0.06)"/>
    <rect x="68" y="216" width="64" height="2" rx="1" fill="rgba(255,255,255,0.06)"/>
    <rect x="68" y="222" width="64" height="2" rx="1" fill="rgba(255,255,255,0.06)"/>
    <rect x="68" y="228" width="64" height="2" rx="1" fill="rgba(255,255,255,0.06)"/>
    <rect x="68" y="234" width="64" height="2" rx="1" fill="rgba(255,255,255,0.06)"/>
    <rect x="68" y="240" width="64" height="2" rx="1" fill="rgba(255,255,255,0.06)"/>
    <rect x="75" y="232" width="50" height="8" rx="4" fill="rgba(255,255,255,0.1)"/>
    <rect x="94" y="228" width="12" height="16" rx="2" fill="rgba(255,255,255,0.18)"/>
  </svg>`;
}

function ringSVG(p, s = 1) {
  const col = p.colors[0];
  return `<svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <radialGradient id="rg_${p.id}" cx="50%" cy="30%" r="65%">
        <stop offset="0%" stop-color="${col}dd"/>
        <stop offset="55%" stop-color="${col}88"/>
        <stop offset="100%" stop-color="${col}22"/>
      </radialGradient>
      <filter id="rf_${p.id}"><feGaussianBlur stdDeviation="2" result="b"/><feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge></filter>
    </defs>
    <ellipse cx="100" cy="100" rx="66" ry="66" fill="none" stroke="rgba(99,102,241,0.15)" stroke-width="1.5"/>
    <ellipse cx="100" cy="100" rx="56" ry="56" fill="none" stroke="url(#rg_${p.id})" stroke-width="28"/>
    <ellipse cx="100" cy="100" rx="56" ry="56" fill="none" stroke="rgba(255,255,255,0.06)" stroke-width="1" stroke-dasharray="5 5"/>
    <ellipse cx="100" cy="100" rx="42" ry="42" fill="none" stroke="rgba(255,255,255,0.04)" stroke-width="1"/>
    <circle cx="100" cy="46" r="5" fill="rgba(99,102,241,0.8)" filter="url(#rf_${p.id})"/>
    <circle cx="108" cy="48" r="3" fill="rgba(99,102,241,0.5)"/>
    <circle cx="92" cy="48" r="3" fill="rgba(99,102,241,0.5)"/>
    <ellipse cx="100" cy="100" rx="28" ry="28" fill="rgba(8,8,20,0.7)"/>
    <text x="100" y="97" text-anchor="middle" fill="rgba(255,255,255,0.9)" font-family="Space Grotesk,sans-serif" font-size="7.5" font-weight="700">ZONETECH</text>
    <text x="100" y="110" text-anchor="middle" fill="rgba(255,255,255,0.4)" font-family="Inter,sans-serif" font-size="7">RING</text>
    <ellipse cx="100" cy="192" rx="50" ry="8" fill="rgba(99,102,241,0.08)"/>
  </svg>`;
}

function glassesSVG(p, s = 1) {
  const col = p.colors[0];
  return `<svg viewBox="0 0 240 160" fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="gg_${p.id}" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stop-color="#06b6d4"/>
        <stop offset="100%" stop-color="#6366f1"/>
      </linearGradient>
      <linearGradient id="lensG_${p.id}" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stop-color="${col}40"/>
        <stop offset="100%" stop-color="${col}15"/>
      </linearGradient>
    </defs>
    <ellipse cx="120" cy="148" rx="80" ry="10" fill="rgba(99,102,241,0.08)"/>
    <line x1="5" y1="78" x2="40" y2="78" stroke="url(#gg_${p.id})" stroke-width="4" stroke-linecap="round"/>
    <rect x="40" y="54" width="68" height="48" rx="22" fill="url(#lensG_${p.id})" stroke="url(#gg_${p.id})" stroke-width="2.5"/>
    <rect x="44" y="58" width="60" height="40" rx="19" fill="rgba(6,182,212,0.04)"/>
    <ellipse cx="70" cy="70" rx="12" ry="8" fill="rgba(255,255,255,0.05)" transform="rotate(-20 70 70)"/>
    <rect x="132" y="54" width="68" height="48" rx="22" fill="url(#lensG_${p.id})" stroke="url(#gg_${p.id})" stroke-width="2.5"/>
    <rect x="136" y="58" width="60" height="40" rx="19" fill="rgba(6,182,212,0.04)"/>
    <ellipse cx="162" cy="70" rx="12" ry="8" fill="rgba(255,255,255,0.05)" transform="rotate(-20 162 70)"/>
    <path d="M108 78 Q120 70 132 78" stroke="url(#gg_${p.id})" stroke-width="3" fill="none" stroke-linecap="round"/>
    <line x1="200" y1="78" x2="235" y2="78" stroke="url(#gg_${p.id})" stroke-width="4" stroke-linecap="round"/>
    <circle cx="70" cy="78" r="4" fill="rgba(6,182,212,0.7)" filter="drop-shadow(0 0 4px rgba(6,182,212,0.8))"/>
    <circle cx="170" cy="78" r="4" fill="rgba(6,182,212,0.7)" filter="drop-shadow(0 0 4px rgba(6,182,212,0.8))"/>
    <text x="70" y="84" text-anchor="middle" fill="rgba(6,182,212,0.7)" font-family="Inter,sans-serif" font-size="8" font-weight="700">AR</text>
    <text x="170" y="84" text-anchor="middle" fill="rgba(6,182,212,0.7)" font-family="Inter,sans-serif" font-size="8" font-weight="700">AR</text>
  </svg>`;
}

// ===== STATE =====
let cart = JSON.parse(localStorage.getItem('nexus-cart') || '[]');
let compareList = [];
let currentFilter = 'all';

// ===== HELPERS =====
function saveCart() {
  localStorage.setItem('nexus-cart', JSON.stringify(cart));
}
function formatPrice(n) {
  return '$' + n.toLocaleString('es-CO');
}
function getSensorRating(val) {
  if (val === 0) return '<span style="color:var(--text-3)">—</span>';
  if (val === true) return '<span style="color:var(--green)">✓</span>';
  if (val === false) return '<span style="color:var(--text-3)">✗</span>';
  const bars = Array.from({length:5}, (_,i) =>
    `<div class="sensor-bar${i < val ? ' filled' : ''}"></div>`
  ).join('');
  return `<div class="sensor-bars">${bars}</div>`;
}

// ===== NAVBAR =====
function initNavbar() {
  const navbar = document.getElementById('navbar');
  const menuToggle = document.getElementById('menu-toggle');
  const navLinks = document.getElementById('nav-links');
  window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 50);
  });
  menuToggle.addEventListener('click', () => {
    navLinks.style.display = navLinks.style.display === 'flex' ? 'none' : 'flex';
    navLinks.style.position = 'fixed';
    navLinks.style.top = '70px';
    navLinks.style.left = '0';
    navLinks.style.right = '0';
    navLinks.style.flexDirection = 'column';
    navLinks.style.background = 'var(--bg-2)';
    navLinks.style.padding = '16px';
    navLinks.style.borderBottom = '1px solid var(--border)';
  });
}

// ===== HERO PARTICLES =====
function initParticles() {
  const canvas = document.getElementById('hero-canvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  let W, H, particles = [];
  function resize() {
    W = canvas.width = window.innerWidth;
    H = canvas.height = window.innerHeight;
  }
  resize();
  window.addEventListener('resize', resize);
  class Particle {
    constructor() { this.reset(); }
    reset() {
      this.x = Math.random() * W;
      this.y = Math.random() * H;
      this.r = Math.random() * 1.5 + 0.3;
      this.alpha = Math.random() * 0.5 + 0.1;
      this.speed = Math.random() * 0.3 + 0.1;
      this.angle = Math.random() * Math.PI * 2;
      this.drift = (Math.random() - 0.5) * 0.01;
    }
    update() {
      this.angle += this.drift;
      this.x += Math.cos(this.angle) * this.speed;
      this.y += Math.sin(this.angle) * this.speed - 0.15;
      if (this.y < -10 || this.x < -10 || this.x > W + 10) this.reset();
    }
    draw() {
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.r, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(99,102,241,${this.alpha})`;
      ctx.fill();
    }
  }
  for (let i = 0; i < 120; i++) particles.push(new Particle());
  function animate() {
    ctx.clearRect(0, 0, W, H);
    particles.forEach(p => { p.update(); p.draw(); });
    requestAnimationFrame(animate);
  }
  animate();
}

// ===== CART =====
function initCart() {
  const toggle = document.getElementById('cart-toggle');
  const closeBtn = document.getElementById('close-cart');
  const continueShopping = document.getElementById('continue-shopping');
  const overlay = document.getElementById('overlay');
  toggle.addEventListener('click', openCart);
  closeBtn.addEventListener('click', closeCart);
  continueShopping && continueShopping.addEventListener('click', closeCart);
  overlay.addEventListener('click', () => {
    closeCart();
    closeModal('quick-view-modal');
  });
  updateCartUI();
}

function openCart() {
  document.getElementById('side-cart').classList.add('open');
  document.getElementById('overlay').classList.add('active');
}
function closeCart() {
  document.getElementById('side-cart').classList.remove('open');
  document.getElementById('overlay').classList.remove('active');
}

function addToCart(productId, variant = '') {
  const product = products.find(p => p.id === productId);
  if (!product) return;
  const existing = cart.find(item => item.id === productId && item.variant === variant);
  if (existing) {
    existing.qty += 1;
  } else {
    cart.push({ id: productId, name: product.name, price: product.price, variant, qty: 1, type: product.type });
  }
  saveCart();
  updateCartUI();
  showToast(`${product.name} añadido al carrito`, 'success');
  animateCartBadge();
  openCart();
}

function removeFromCart(productId, variant) {
  cart = cart.filter(item => !(item.id === productId && item.variant === variant));
  saveCart();
  updateCartUI();
}

function updateQty(productId, variant, delta) {
  const item = cart.find(i => i.id === productId && i.variant === variant);
  if (!item) return;
  item.qty = Math.max(1, item.qty + delta);
  saveCart();
  updateCartUI();
}

function updateCartUI() {
  const itemsContainer = document.getElementById('cart-items');
  const footer = document.getElementById('cart-footer');
  const empty = document.getElementById('cart-empty');
  const countEl = document.getElementById('cart-count');
  const totalEl = document.getElementById('cart-total');
  const grandEl = document.getElementById('cart-grand-total');
  const totalCount = cart.reduce((s, i) => s + i.qty, 0);
  const totalPrice = cart.reduce((s, i) => s + i.price * i.qty, 0);

  countEl.textContent = totalCount;
  countEl.classList.toggle('visible', totalCount > 0);

  if (cart.length === 0) {
    empty.style.display = 'flex';
    footer.style.display = 'none';
    const existingItems = itemsContainer.querySelectorAll('.cart-item');
    existingItems.forEach(el => el.remove());
    return;
  }
  empty.style.display = 'none';
  footer.style.display = 'block';
  totalEl.textContent = formatPrice(totalPrice);
  grandEl.textContent = formatPrice(totalPrice);

  const existingItems = itemsContainer.querySelectorAll('.cart-item');
  existingItems.forEach(el => el.remove());

  cart.forEach(item => {
    const product = products.find(p => p.id === item.id);
    const div = document.createElement('div');
    div.className = 'cart-item';
    div.innerHTML = `
      <div class="cart-item-visual">${getProductSVG(product, 'sm')}</div>
      <div class="cart-item-info">
        <div class="cart-item-name">${item.name}</div>
        <div class="cart-item-variant">${item.variant || 'Estándar'}</div>
        <div class="cart-item-controls">
          <div class="qty-control">
            <button class="qty-btn" onclick="updateQty(${item.id},'${item.variant}',-1)">−</button>
            <span class="qty-val">${item.qty}</span>
            <button class="qty-btn" onclick="updateQty(${item.id},'${item.variant}',1)">+</button>
          </div>
          <span class="cart-item-price">${formatPrice(item.price * item.qty)}</span>
        </div>
      </div>
      <button class="cart-item-remove" onclick="removeFromCart(${item.id},'${item.variant}')" aria-label="Eliminar">✕</button>
    `;
    itemsContainer.appendChild(div);
  });
}

function animateCartBadge() {
  const badge = document.getElementById('cart-count');
  badge.style.transform = 'scale(1.5)';
  setTimeout(() => badge.style.transform = '', 300);
}

// ===== PRODUCTS RENDER =====
function renderProducts(filter = 'all') {
  const grid = document.getElementById('products-grid');
  if (!grid) return;
  grid.innerHTML = '';
  const filtered = filter === 'all' ? products : products.filter(p => p.category === filter);
  filtered.forEach((p, i) => {
    const card = document.createElement('div');
    card.className = 'product-card';
    card.style.animationDelay = `${i * 60}ms`;
    card.dataset.id = p.id;
    card.innerHTML = `
      <div class="product-card-visual">
        ${getProductSVG(p)}
        ${p.badge ? `<span class="product-badge badge-${p.badge}">${p.badgeLabel}</span>` : ''}
        <div class="product-actions">
          <button class="product-action-btn" onclick="event.stopPropagation();toggleWishlist(${p.id})" title="Guardar" aria-label="Guardar">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>
          </button>
          <button class="product-action-btn quick-view-btn" onclick="event.stopPropagation();openQuickView(${p.id})" aria-label="Vista rápida">
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>
            Vista rápida
          </button>
        </div>
        <div class="compare-toggle">
          <label class="compare-check" onclick="event.stopPropagation()">
            <input type="checkbox" onchange="toggleCompare(${p.id},this.checked)" ${compareList.includes(p.id)?'checked':''}>
            Comparar
          </label>
        </div>
      </div>
      <div class="product-info">
        <div class="product-category">${p.category === 'watches' ? 'Reloj Inteligente' : p.category === 'rings' ? 'Anillo Smart' : 'Gafas AR'}</div>
        <div class="product-name">${p.name}</div>
        <div class="product-rating">
          <span class="stars">${'★'.repeat(Math.floor(p.rating))}${p.rating % 1 ? '½' : ''}</span>
          <span class="rating-count">${p.rating} (${p.reviews.toLocaleString()})</span>
        </div>
        <div class="product-price-row">
          <div class="product-price">
            <span class="price-current">${formatPrice(p.price)}</span>
            ${p.originalPrice > p.price ? `<span class="price-original">${formatPrice(p.originalPrice)}</span>` : ''}
          </div>
          <button class="btn-add-cart" onclick="addToCart(${p.id})">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/><line x1="3" y1="6" x2="21" y2="6"/><path d="M16 10a4 4 0 0 1-8 0"/></svg>
            Añadir
          </button>
        </div>
      </div>
    `;
    grid.appendChild(card);
  });
}

function initProductFilters() {
  document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      renderProducts(btn.dataset.filter);
    });
  });
}

function toggleWishlist(id) {
  showToast('Guardado en favoritos ♥', 'success');
}

// ===== QUICK VIEW =====
function openQuickView(productId) {
  const p = products.find(pr => pr.id === productId);
  if (!p) return;
  const content = document.getElementById('quick-view-content');
  const sensorsHtml = [
    { name: 'SpO₂', val: p.sensors.spo2 },
    { name: 'Frec. Cardíaca', val: p.sensors.hr },
    { name: 'ECG', val: p.sensors.ecg },
    { name: 'GPS', val: p.sensors.gps },
    { name: 'Sueño', val: p.sensors.sleep },
    { name: 'Estrés', val: p.sensors.stress },
    { name: 'Temperatura', val: p.sensors.temp },
    { name: 'Batería (días)', val: p.sensors.battery }
  ].filter(s => s.val !== 0 && s.val !== false).map(s => `
    <div class="qv-sensor">
      <div class="qv-sensor-name">${s.name}</div>
      <div class="qv-sensor-val">${s.val === true ? '✓ Sí' : s.val === false ? '✗ No' : s.val === 5 ? 'Excelente' : s.val === 4 ? 'Muy bueno' : s.val === 3 ? 'Bueno' : s.val === 2 ? 'Básico' : s.val + ' días'}</div>
    </div>
  `).join('');

  content.innerHTML = `
    <div class="qv-visual">
      <div class="qv-visual-bg"></div>
      ${getProductSVG(p, 'lg')}
    </div>
    <div class="qv-info">
      <div class="qv-category">${p.category === 'watches' ? 'Reloj Inteligente' : p.category === 'rings' ? 'Anillo Smart' : 'Gafas AR'}</div>
      <h2 class="qv-name">${p.name}</h2>
      <div class="qv-rating">
        <span class="stars">${'★'.repeat(Math.floor(p.rating))}</span>
        <span style="font-size:14px;color:var(--text-2)">${p.rating} · ${p.reviews.toLocaleString()} reseñas</span>
      </div>
      <p class="qv-description">${p.description}</p>
      <div class="qv-sensors">${sensorsHtml}</div>
      <div class="qv-price-row">
        <div>
          <div class="qv-price">${formatPrice(p.price)}</div>
          ${p.originalPrice > p.price ? `<div class="qv-price-original">${formatPrice(p.originalPrice)}</div>` : ''}
        </div>
        <button class="btn-primary btn-lg" onclick="addToCart(${p.id});closeModal('quick-view-modal')">
          Añadir al Carrito
        </button>
      </div>
    </div>
  `;
  openModal('quick-view-modal');
}

// ===== MODAL =====
function openModal(id) {
  document.getElementById(id).classList.add('open');
  document.getElementById('overlay').classList.add('active');
}
function closeModal(id) {
  document.getElementById(id).classList.remove('open');
  const anyOpen = document.querySelector('.modal.open');
  if (!anyOpen) document.getElementById('overlay').classList.remove('active');
}
function initModals() {
  document.getElementById('close-quick-view').addEventListener('click', () => closeModal('quick-view-modal'));
}

// ===== CONFIGURATOR =====
function initConfigurator() {
  const materialPrices = { titanium: 299, aluminum: 249, ceramic: 349 };
  let selectedMaterial = 'titanium';

  document.querySelectorAll('#strap-colors .swatch').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('#strap-colors .swatch').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const hex1 = btn.dataset.hex;
      const hex2 = btn.dataset.hex2;
      document.getElementById('strap-stop-1').setAttribute('stop-color', hex1);
      document.getElementById('strap-stop-2').setAttribute('stop-color', hex2);
    });
  });

  document.querySelectorAll('#case-materials .material-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('#case-materials .material-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      selectedMaterial = btn.dataset.material;
      const price = materialPrices[selectedMaterial] || 299;
      document.getElementById('config-price').textContent = formatPrice(price);
    });
  });

  document.getElementById('add-config-to-cart').addEventListener('click', () => {
    const price = materialPrices[selectedMaterial] || 299;
    const activeSwatch = document.querySelector('#strap-colors .swatch.active');
    const color = activeSwatch ? activeSwatch.title : 'Midnight Black';
    const variant = `${color} · ${selectedMaterial.charAt(0).toUpperCase() + selectedMaterial.slice(1)}`;
    const custom = { id: 99, name: 'ZTO Pro X (Configurado)', price, type: 'watch' };
    const existing = cart.find(i => i.id === 99 && i.variant === variant);
    if (existing) { existing.qty++; }
    else { cart.push({ id: 99, name: custom.name, price, variant, qty: 1, type: 'watch' }); }
    saveCart();
    updateCartUI();
    showToast(`ZTO Pro X configurado añadido al carrito`, 'success');
    animateCartBadge();
    openCart();
  });

  // Drag to rotate
  const wrapper = document.getElementById('config-watch');
  let dragging = false, startX = 0, rotY = 0;
  wrapper.addEventListener('mousedown', e => { dragging = true; startX = e.clientX; wrapper.style.cursor = 'grabbing'; });
  window.addEventListener('mousemove', e => {
    if (!dragging) return;
    const delta = (e.clientX - startX) * 0.4;
    rotY += delta;
    startX = e.clientX;
    wrapper.style.transform = `perspective(800px) rotateY(${rotY}deg)`;
  });
  window.addEventListener('mouseup', () => { dragging = false; wrapper.style.cursor = 'grab'; });
  wrapper.addEventListener('touchstart', e => { dragging = true; startX = e.touches[0].clientX; });
  wrapper.addEventListener('touchmove', e => {
    if (!dragging) return;
    const delta = (e.touches[0].clientX - startX) * 0.4;
    rotY += delta;
    startX = e.touches[0].clientX;
    wrapper.style.transform = `perspective(800px) rotateY(${rotY}deg)`;
  });
  wrapper.addEventListener('touchend', () => { dragging = false; });
}

// ===== COMPARATOR =====
function initComparator() {
  renderQuickCompareBtns();
}

function renderQuickCompareBtns() {
  const container = document.getElementById('quick-compare-btns');
  if (!container) return;
  container.innerHTML = products.map(p => `
    <button class="qc-btn ${compareList.includes(p.id) ? 'in-compare' : ''}" onclick="toggleCompare(${p.id}, ${!compareList.includes(p.id)};this.classList.toggle('in-compare'))">
      ${p.name}
    </button>
  `).join('');
  container.querySelectorAll('.qc-btn').forEach((btn, i) => {
    const p = products[i];
    btn.onclick = () => {
      const inList = compareList.includes(p.id);
      toggleCompare(p.id, !inList);
      btn.classList.toggle('in-compare', !inList);
    };
  });
}

function toggleCompare(productId, add) {
  if (add) {
    if (compareList.length >= 3) { showToast('Máximo 3 productos para comparar', 'error'); return; }
    if (!compareList.includes(productId)) compareList.push(productId);
  } else {
    compareList = compareList.filter(id => id !== productId);
  }
  renderCompareTable();
  renderQuickCompareBtns();
  // Sync checkboxes in product grid
  document.querySelectorAll('[onchange^="toggleCompare"]').forEach(cb => {
    const id = parseInt(cb.getAttribute('onchange').match(/\d+/)[0]);
    cb.checked = compareList.includes(id);
  });
}

function renderCompareTable() {
  const wrapper = document.getElementById('compare-table-wrapper');
  const table = document.getElementById('compare-table');
  if (compareList.length < 2) {
    wrapper.style.display = 'none';
    return;
  }
  wrapper.style.display = 'block';
  const compared = compareList.map(id => products.find(p => p.id === id));
  const cols = compared.length;
  const rows = [
    { label: 'Precio', key: p => formatPrice(p.price) },
    { label: 'Calificación', key: p => `${p.rating}★ (${p.reviews.toLocaleString()})` },
    { label: 'Sensor SpO₂', key: p => getSensorRating(p.sensors.spo2) },
    { label: 'Frec. Cardíaca', key: p => getSensorRating(p.sensors.hr) },
    { label: 'ECG', key: p => getSensorRating(p.sensors.ecg) },
    { label: 'GPS', key: p => getSensorRating(p.sensors.gps) },
    { label: 'Seguimiento Sueño', key: p => getSensorRating(p.sensors.sleep) },
    { label: 'Sensor Estrés', key: p => getSensorRating(p.sensors.stress) },
    { label: 'Temperatura', key: p => getSensorRating(p.sensors.temp) },
    { label: 'Batería (días)', key: p => p.sensors.battery ? `${p.sensors.battery} días` : '<span style="color:var(--text-3)">—</span>' },
  ];
  table.style.setProperty('--cols', cols);
  table.innerHTML = `
    <div class="compare-header" style="grid-template-columns:200px repeat(${cols},1fr)">
      <div class="compare-header-cell">Especificación</div>
      ${compared.map(p => `<div class="compare-header-cell">${p.name}<br><small style="color:var(--text-3);font-weight:400">${formatPrice(p.price)}</small></div>`).join('')}
    </div>
    ${rows.map(row => `
      <div class="compare-row" style="grid-template-columns:200px repeat(${cols},1fr)">
        <div class="compare-cell">${row.label}</div>
        ${compared.map(p => `<div class="compare-cell">${row.key(p)}</div>`).join('')}
      </div>
    `).join('')}
    <div class="compare-row" style="grid-template-columns:200px repeat(${cols},1fr)">
      <div class="compare-cell"></div>
      ${compared.map(p => `<div class="compare-cell"><button class="btn-primary btn-sm" onclick="addToCart(${p.id})">Añadir</button></div>`).join('')}
    </div>
  `;
}

document.addEventListener('DOMContentLoaded', () => {
  const clearBtn = document.getElementById('clear-compare');
  if (clearBtn) clearBtn.addEventListener('click', () => { compareList = []; renderCompareTable(); renderQuickCompareBtns(); });
});

// ===== SCROLL REVEAL =====
function initScrollReveal() {
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -60px 0px' });
  document.querySelectorAll('.section-header, .category-card, .testimonial-card, .feature-item, .configurator-info, .configurator-visual').forEach(el => {
    el.classList.add('reveal');
    observer.observe(el);
  });
}

// ===== TOAST =====
function showToast(message, type = '') {
  const container = document.getElementById('toast-container');
  const icons = { success: '✓', error: '!', '': 'ℹ' };
  const toast = document.createElement('div');
  toast.className = `toast${type ? ' toast-' + type : ''}`;
  toast.innerHTML = `<span class="toast-icon">${icons[type] || icons['']}</span>${message}`;
  container.appendChild(toast);
  setTimeout(() => toast.remove(), 3100);
}

// ===== NEWSLETTER =====
function initNewsletter() {
  const form = document.getElementById('newsletter-form');
  if (!form) return;
  form.addEventListener('submit', e => {
    e.preventDefault();
    showToast('¡Bienvenido a ZoneTechOnline! Revisa tu email.', 'success');
    form.reset();
  });
}

// ===== MICRO-INTERACTIONS =====
function initMicroInteractions() {
  document.querySelectorAll('.btn-primary, .btn-add-cart').forEach(btn => {
    btn.addEventListener('mousedown', () => { btn.style.transform = 'scale(0.96)'; });
    btn.addEventListener('mouseup', () => { btn.style.transform = ''; });
    btn.addEventListener('mouseleave', () => { btn.style.transform = ''; });
  });
}

// ===== HERO VIDEO BTN =====
function initHeroVideo() {
  const btn = document.getElementById('hero-video-btn');
  if (btn) btn.addEventListener('click', () => showToast('Video demo próximamente disponible', ''));
}

// ===== INIT =====
document.addEventListener('DOMContentLoaded', () => {
  initNavbar();
  initParticles();
  initCart();
  renderProducts();
  initProductFilters();
  initConfigurator();
  initComparator();
  initScrollReveal();
  initNewsletter();
  initMicroInteractions();
  initHeroVideo();
  initModals();
});
