'use strict';
(function() {
  var tpl = document.createElement('template');
  tpl.innerHTML = '\
<!-- NAVBAR -->\
<nav class="navbar scrolled" id="navbar">\
  <div class="nav-container">\
    <a href="index.html" class="nav-logo">ZONE<span>TECH</span>ONLINE</a>\
    <div class="nav-links" id="nav-links">\
\
      <div class="nav-item">\
        <a href="/relojes" class="nav-link">Relojes <svg class="nav-chev" viewBox="0 0 12 12" fill="none"><path d="M2 4l4 4 4-4" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg></a>\
        <div class="mega-drop"><div class="mega-inner">\
          <div class="mega-left">\
            <span class="mega-cat-lbl">Relojes Inteligentes</span>\
            <a href="/relojes" class="mega-all-link">Ver todos los relojes <span>cargando →</span></a>\
            <div class="mega-brands" data-filter="watches"></div>\
          </div>\
          <div class="mega-right">\
            <div class="mega-img-box"><img src="img/productos/1108-apple-watch-se-3-gps-40mm-caja-de-aluminio-blanco-estrella-con-correa-deportiva-blanco-estrella-m-l-f5cd37f4-3157-43fd-8e1e-70024c314a33.jpg" alt="Apple Watch SE3" loading="lazy"></div>\
            <a href="/relojes" class="mega-see">Ver catálogo →</a>\
          </div>\
        </div></div>\
      </div>\
\
      <div class="nav-item">\
        <a href="/auriculares" class="nav-link">Auriculares <svg class="nav-chev" viewBox="0 0 12 12" fill="none"><path d="M2 4l4 4 4-4" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg></a>\
        <div class="mega-drop"><div class="mega-inner">\
          <div class="mega-left">\
            <span class="mega-cat-lbl">Auriculares Premium</span>\
            <a href="/auriculares" class="mega-all-link">Ver auriculares <span>cargando →</span></a>\
            <div class="mega-brands" data-filter="headphones"></div>\
          </div>\
          <div class="mega-right">\
            <div class="mega-img-box"><img src="img/productos/art_sony-aur_wh-ch720n_bk_1.jpg" alt="Sony WH-CH720N" loading="lazy"></div>\
            <a href="/auriculares" class="mega-see">Ver auriculares →</a>\
          </div>\
        </div></div>\
      </div>\
\
      <div class="nav-item">\
        <a href="/altavoces" class="nav-link">Altavoces <svg class="nav-chev" viewBox="0 0 12 12" fill="none"><path d="M2 4l4 4 4-4" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg></a>\
        <div class="mega-drop"><div class="mega-inner">\
          <div class="mega-left">\
            <span class="mega-cat-lbl">Altavoces</span>\
            <a href="/altavoces" class="mega-all-link">Ver todos los altavoces <span>cargando →</span></a>\
            <div class="mega-brands" data-filter="speakers"></div>\
          </div>\
          <div class="mega-right">\
            <div class="mega-img-box"><img src="img/productos/art_jbl-alt_flip6_bk_1.jpg" alt="JBL Flip 6" loading="lazy"></div>\
            <a href="/altavoces" class="mega-see">Ver catálogo →</a>\
          </div>\
        </div></div>\
      </div>\
\
      <div class="nav-item">\
        <a href="/gaming" class="nav-link">Teclados Gaming <svg class="nav-chev" viewBox="0 0 12 12" fill="none"><path d="M2 4l4 4 4-4" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg></a>\
        <div class="mega-drop"><div class="mega-inner">\
          <div class="mega-left">\
            <span class="mega-cat-lbl">Teclados Gaming</span>\
            <a href="/gaming" class="mega-all-link">Ver todos los periféricos <span>cargando →</span></a>\
            <div class="mega-brands" data-filter="peripherals"></div>\
          </div>\
          <div class="mega-right">\
            <div class="mega-img-box"><img src="img/productos/MGS0000033622-0.jpg" alt="Teclado Gaming ASUS TUF" loading="lazy"></div>\
            <a href="/gaming" class="mega-see">Ver catálogo →</a>\
          </div>\
        </div></div>\
      </div>\
\
      <div class="nav-item">\
        <a href="/smartphones" class="nav-link">Smartphones <svg class="nav-chev" viewBox="0 0 12 12" fill="none"><path d="M2 4l4 4 4-4" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg></a>\
        <div class="mega-drop"><div class="mega-inner">\
          <div class="mega-left">\
            <span class="mega-cat-lbl">Smartphones</span>\
            <a href="/smartphones" class="mega-all-link">Ver todos los smartphones <span>cargando →</span></a>\
            <div class="mega-brands" data-filter="smartphones"></div>\
          </div>\
          <div class="mega-right">\
            <div class="mega-img-box"><img src="img/productos/MGS0000033302-0.jpg" alt="Samsung Galaxy A37" loading="lazy"></div>\
            <a href="/smartphones" class="mega-see">Ver catálogo →</a>\
          </div>\
        </div></div>\
      </div>\
\
    </div>\
    <div class="nav-actions">\
      <button class="nav-icon-btn" id="search-btn" aria-label="Buscar">\
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/></svg>\
      </button>\
      <button class="btn-login" id="login-btn">\
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>\
        <span>Acceder</span>\
      </button>\
      <button class="nav-icon-btn cart-btn" id="cart-toggle" aria-label="Carrito">\
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/><line x1="3" y1="6" x2="21" y2="6"/><path d="M16 10a4 4 0 0 1-8 0"/></svg>\
        <span class="cart-badge" id="cart-count">0</span>\
      </button>\
      <button class="nav-icon-btn hamburger" id="menu-toggle" aria-label="Menú">\
        <span></span><span></span><span></span>\
      </button>\
    </div>\
  </div>\
</nav>\
\
<!-- MOBILE NAV DRAWER -->\
<div class="mobile-nav-overlay" id="mobile-nav-overlay"></div>\
<aside class="mobile-nav-drawer" id="mobile-nav-drawer" aria-label="Menú de navegación">\
  <div class="mnd-header">\
    <span class="mnd-brand">ZONE<span>TECH</span>ONLINE</span>\
    <button class="mnd-close" id="mobile-nav-close" aria-label="Cerrar menú">\
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>\
    </button>\
  </div>\
  <nav class="mnd-nav">\
    <a href="catalogo.html" class="mnd-link mnd-link-all">\
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/></svg>\
      Todos los productos\
    </a>\
    <div class="mnd-divider"></div>\
    <a href="/relojes" class="mnd-link">\
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="8"/><polyline points="12 6 12 12 16 14"/></svg>\
      Relojes Inteligentes\
    </a>\
    <a href="/auriculares" class="mnd-link">\
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 18v-6a9 9 0 0 1 18 0v6"/><path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3z"/><path d="M3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z"/></svg>\
      Auriculares\
    </a>\
    <a href="/altavoces" class="mnd-link">\
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/><path d="M15.54 8.46a5 5 0 0 1 0 7.07"/></svg>\
      Altavoces\
    </a>\
    <a href="/gaming" class="mnd-link">\
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="6" width="20" height="12" rx="2"/><path d="M6 10h.01M10 10h.01M14 10h.01M18 10h.01M8 14h8"/></svg>\
      Teclados Gaming\
    </a>\
    <a href="/smartphones" class="mnd-link">\
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="5" y="2" width="14" height="20" rx="2"/><line x1="12" y1="18" x2="12.01" y2="18"/></svg>\
      Smartphones\
    </a>\
    <div class="mnd-divider"></div>\
    <a href="index.html#configurador" class="mnd-link">\
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="3"/><path d="M19.07 4.93a10 10 0 0 1 0 14.14M4.93 4.93a10 10 0 0 0 0 14.14"/></svg>\
      Configurador Exclusivo\
    </a>\
    <a href="mis-pedidos.html" class="mnd-link">\
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/><line x1="3" y1="6" x2="21" y2="6"/><path d="M16 10a4 4 0 0 1-8 0"/></svg>\
      Mis Pedidos\
    </a>\
    <a href="lista-deseos.html" class="mnd-link">\
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>\
      Lista de Deseos\
    </a>\
  </nav>\
  <div class="mnd-footer">\
    <a href="checkout.html" class="btn-primary" style="display:flex;align-items:center;gap:8px;justify-content:center;width:100%;padding:14px;">\
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/><line x1="3" y1="6" x2="21" y2="6"/><path d="M16 10a4 4 0 0 1-8 0"/></svg>\
      Ir al Carrito\
    </a>\
  </div>\
</aside>\
\
<!-- SIDE CART -->\
<aside class="side-cart" id="side-cart">\
  <div class="side-cart-header">\
    <h3>Tu Carrito</h3>\
    <button class="close-btn" id="close-cart" aria-label="Cerrar">\
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>\
    </button>\
  </div>\
  <div class="side-cart-body" id="cart-items">\
    <div class="cart-empty" id="cart-empty">\
      <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" opacity="0.3"><path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/><line x1="3" y1="6" x2="21" y2="6"/><path d="M16 10a4 4 0 0 1-8 0"/></svg>\
      <p>Tu carrito está vacío</p>\
      <span>Agrega productos para comenzar</span>\
    </div>\
  </div>\
  <div class="side-cart-footer" id="cart-footer" style="display:none">\
    <div class="cart-subtotal"><span>Subtotal</span><span id="cart-total">€0</span></div>\
    <div class="cart-shipping"><span>Envío</span><span class="free-shipping">GRATIS</span></div>\
    <div class="cart-divider"></div>\
    <div class="cart-total-row"><span>Total</span><span id="cart-grand-total">€0</span></div>\
    <button class="btn-primary btn-block" id="checkout-btn">Proceder al Pago</button>\
    <button class="btn-ghost btn-block" id="continue-shopping">Seguir Comprando</button>\
  </div>\
</aside>\
\
<!-- SEARCH OVERLAY -->\
<div class="search-overlay" id="search-overlay">\
  <div class="search-wrap">\
    <div class="search-bar-row">\
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/></svg>\
      <input type="text" class="search-input" id="search-input" placeholder="Busca producto, marca o categoría..." autocomplete="off">\
      <button class="search-close" id="search-close">\
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>\
      </button>\
    </div>\
    <p class="search-hint">Pulsa <kbd>Esc</kbd> para cerrar</p>\
    <div class="search-cats" id="search-cats">\
      <button class="search-cat-btn" onclick="searchByCategory(\'all\')">Todos</button>\
      <button class="search-cat-btn" onclick="searchByCategory(\'watches\')">⌚ Relojes</button>\
      <button class="search-cat-btn" onclick="searchByCategory(\'headphones\')">🎧 Auriculares</button>\
      <button class="search-cat-btn" onclick="searchByCategory(\'speakers\')">🔊 Altavoces</button>\
      <button class="search-cat-btn" onclick="searchByCategory(\'peripherals\')">⌨️ Teclados Gaming</button>\
      <button class="search-cat-btn" onclick="searchByCategory(\'smartphones\')">📱 Smartphones</button>\
    </div>\
    <div class="search-results" id="search-results"></div>\
  </div>\
</div>';

  document.currentScript.parentNode.insertBefore(tpl.content, document.currentScript);
})();
