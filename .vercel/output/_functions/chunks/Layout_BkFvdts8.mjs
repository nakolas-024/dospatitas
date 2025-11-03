import { e as createComponent, f as createAstro, m as maybeRenderHead, h as addAttribute, s as spreadAttributes, r as renderTemplate, n as renderComponent, l as renderScript, p as defineScriptVars, q as renderSlot, k as renderHead } from './astro/server_QFBcFQ3r.mjs';
/* empty css                         */
import 'clsx';

const $$Astro$3 = createAstro();
const $$Icon = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$Icon;
  const { name, size = 24, class: className, ...rest } = Astro2.props;
  return renderTemplate`${name === "dospatitas" ? (
    // 🐾 Logo principal (imagen)
    renderTemplate`${maybeRenderHead()}<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 564.55 216"${addAttribute(["icon", `icon-${name}`, className], "class:list")}${addAttribute(size, "width")} height="auto" preserveAspectRatio="xMidYMid meet"${spreadAttributes(rest)} data-astro-cid-patnjmll><image width="564.55" height="216" href="/images/dospatitas-logo.png" data-astro-cid-patnjmll></image></svg>`
  ) : name === "cart" ? (
    // 🛒 Ícono carrito
    renderTemplate`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"${addAttribute(["icon", `icon-${name}`, className], "class:list")}${addAttribute(size, "width")}${addAttribute(size, "height")}${spreadAttributes(rest)} data-astro-cid-patnjmll><path stroke="none" d="M0 0h24v24H0z" fill="none" data-astro-cid-patnjmll></path><path d="M6 19m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" data-astro-cid-patnjmll></path><path d="M17 19m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" data-astro-cid-patnjmll></path><path d="M17 17h-11v-14h-2" data-astro-cid-patnjmll></path><path d="M6 5l14 1l-1 7h-13" data-astro-cid-patnjmll></path></svg>`
  ) : name === "facebook" ? (
    // 📘 Ícono Facebook
    renderTemplate`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"${addAttribute(["icon", `icon-${name}`, className], "class:list")}${addAttribute(size, "width")}${addAttribute(size, "height")}${spreadAttributes(rest)} data-astro-cid-patnjmll><path stroke="none" d="M0 0h24v24H0z" fill="none" data-astro-cid-patnjmll></path><path d="M7 10v4h3v7h4v-7h3l1 -4h-4v-2a1 1 0 0 1 1 -1h3v-4h-3a5 5 0 0 0 -5 5v2h-3" data-astro-cid-patnjmll></path></svg>`
  ) : name === "whatsapp" ? (
    // 💬 Ícono WhatsApp
    renderTemplate`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"${addAttribute(["icon", `icon-${name}`, className], "class:list")}${addAttribute(size, "width")}${addAttribute(size, "height")}${spreadAttributes(rest)} data-astro-cid-patnjmll><path stroke="none" d="M0 0h24v24H0z" fill="none" data-astro-cid-patnjmll></path><path d="M3 21l1.65 -3.8a9 9 0 1 1 3.4 2.9l-5.05 .9" data-astro-cid-patnjmll></path><path d="M9 10a.5 .5 0 0 0 1 0v-1a.5 .5 0 0 0 -1 0v1a5 5 0 0 0 5 5h1a.5 .5 0 0 0 0 -1h-1a.5 .5 0 0 0 0 1" data-astro-cid-patnjmll></path></svg>`
  ) : null}`;
}, "C:/Users/Luctus Umbram/Desktop/desblook/astropages/DOSPATITAS/dospatitas.cl/src/components/Icon.astro", void 0);

var __freeze$3 = Object.freeze;
var __defProp$3 = Object.defineProperty;
var __template$3 = (cooked, raw) => __freeze$3(__defProp$3(cooked, "raw", { value: __freeze$3(cooked.slice()) }));
var _a$3;
const $$Astro$2 = createAstro();
const $$Header = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Header;
  const allNavLinks = [
    {
      text: "Cat\xE1logo",
      href: "/catalogo",
      submenu: [
        { text: "Ni\xF1os", href: "/catalogo/ninos" },
        { text: "Ni\xF1as", href: "/catalogo/ninas" },
        { text: "Mascotas", href: "/catalogo/veterinarios" }
      ]
    },
    {
      text: "C\xF3mo Comprar",
      href: "#",
      modalId: "how-to-buy-modal"
      // ID para el atributo data-open-modal
    },
    {
      text: "Contacto",
      href: "/contacto"
    }
  ];
  const currentPath = Astro2.url.pathname;
  const navLinks = allNavLinks.filter((link) => {
    if (link.text === "C\xF3mo Comprar" && currentPath !== "/") return false;
    return true;
  });
  return renderTemplate(_a$3 || (_a$3 = __template$3(["", '<header id="site-header" data-astro-cid-3ef6ksr2> <div class="container" data-astro-cid-3ef6ksr2> <a href="/" class="logo" data-astro-cid-3ef6ksr2> <img src="/images/dospatitas-logo.png" alt="Dos Patitas Logo" data-astro-cid-3ef6ksr2> </a> <nav class="desktop-nav" data-astro-cid-3ef6ksr2> <ul data-astro-cid-3ef6ksr2> ', ' </ul> </nav> <button id="hamburger-menu" class="hamburger-menu" aria-label="Abrir men\xFA de navegaci\xF3n" aria-expanded="false" data-astro-cid-3ef6ksr2> ', ' </button> </div> </header> <div id="mobile-menu-panel" class="mobile-menu-panel" aria-hidden="true" data-astro-cid-3ef6ksr2> <div class="panel-header" data-astro-cid-3ef6ksr2> <h4 data-astro-cid-3ef6ksr2>Men\xFA</h4> <button id="close-menu" class="close-menu" aria-label="Cerrar men\xFA de navegaci\xF3n" data-astro-cid-3ef6ksr2> ', ' </button> </div> <nav class="mobile-nav" data-astro-cid-3ef6ksr2> <ul data-astro-cid-3ef6ksr2> ', ` </ul> </nav> </div> <script>
// Script SOLO para el men\xFA m\xF3vil y el efecto scroll
document.addEventListener("DOMContentLoaded", () => {
  const hamburgerBtn = document.getElementById('hamburger-menu');
  const closeMenuBtn = document.getElementById('close-menu');
  const mobileMenuPanel = document.getElementById('mobile-menu-panel');

  if (hamburgerBtn && closeMenuBtn && mobileMenuPanel) {
    hamburgerBtn.addEventListener('click', () => {
      mobileMenuPanel.classList.add('is-open');
      hamburgerBtn.setAttribute('aria-expanded', 'true');
      mobileMenuPanel.setAttribute('aria-hidden', 'false');
    });

    closeMenuBtn.addEventListener('click', () => {
      mobileMenuPanel.classList.remove('is-open');
      hamburgerBtn.setAttribute('aria-expanded', 'false');
      mobileMenuPanel.setAttribute('aria-hidden', 'true');
    });
  }

  const header = document.getElementById('site-header');
  if (header) {
    window.addEventListener('scroll', () => {
      header.classList.toggle('scrolled', window.scrollY > 10);
    });
  }
});
<\/script> `])), maybeRenderHead(), navLinks.map((link) => {
    const isActive = currentPath === link.href || link.submenu && link.submenu.some((s) => s.href === currentPath);
    return renderTemplate`<li${addAttribute(`has-dropdown ${isActive ? "active" : ""}`, "class")} data-astro-cid-3ef6ksr2> <a${addAttribute(link.href, "href")} class="nav-link"${addAttribute(link.submenu ? "false" : void 0, "aria-expanded")}${addAttribute(link.modalId, "data-open-modal")} Atributo para que HowToBuyModal lo detecte data-astro-cid-3ef6ksr2> ${link.text} ${link.submenu && renderTemplate`${renderComponent($$result, "Icon", $$Icon, { "name": "chevron-down", "size": 16, "data-astro-cid-3ef6ksr2": true })}`} </a> ${link.submenu && renderTemplate`<ul class="dropdown-menu" data-astro-cid-3ef6ksr2> ${link.submenu.map((sublink) => renderTemplate`<li data-astro-cid-3ef6ksr2><a${addAttribute(sublink.href, "href")}${addAttribute(currentPath === sublink.href ? "active" : "", "class")} data-astro-cid-3ef6ksr2>${sublink.text}</a></li>`)} </ul>`} </li>`;
  }), renderComponent($$result, "Icon", $$Icon, { "name": "menu", "size": 32, "data-astro-cid-3ef6ksr2": true }), renderComponent($$result, "Icon", $$Icon, { "name": "close", "size": 32, "data-astro-cid-3ef6ksr2": true }), navLinks.map((link) => renderTemplate`<li data-astro-cid-3ef6ksr2> <a${addAttribute(link.href, "href")}${addAttribute(link.modalId, "data-open-modal")} data-astro-cid-3ef6ksr2>${link.text}</a> ${link.submenu && renderTemplate`<ul class="mobile-submenu" data-astro-cid-3ef6ksr2> ${link.submenu.map((sublink) => renderTemplate`<li data-astro-cid-3ef6ksr2><a${addAttribute(sublink.href, "href")}${addAttribute(currentPath === sublink.href ? "active" : "", "class")} data-astro-cid-3ef6ksr2>- ${sublink.text}</a></li>`)} </ul>`} </li>`));
}, "C:/Users/Luctus Umbram/Desktop/desblook/astropages/DOSPATITAS/dospatitas.cl/src/components/Header.astro", void 0);

const $$Footer = createComponent(($$result, $$props, $$slots) => {
  const socialLinks = [
    { href: "https://www.instagram.com/TUPERFILDEINSTAGRAM", label: "Instagram", icon: "mdi:instagram" },
    { href: "https://www.facebook.com/TUPAGINADEFACEBOOK", label: "Facebook", icon: "mdi:facebook" },
    { href: "https://wa.me/56966306409", label: "WhatsApp", icon: "mdi:whatsapp" }
  ];
  const linkColumns = [
    { title: "Tienda", links: [
      { href: "/catalogo/ninos", text: "Ni\xF1os" },
      { href: "/catalogo/ninas", text: "Ni\xF1as" },
      { href: "/catalogo/veterinarios", text: "Mascotas" }
    ] },
    { title: "Ayuda", links: [
      { href: "#", text: "C\xF3mo Comprar", modal: "how-to-buy-modal" },
      // Necesita que HowToBuyModal detecte 'data-open-modal'
      { href: "/preguntas-frecuentes", text: "Preguntas Frecuentes" },
      { href: "/contacto", text: "Contacto" }
    ] }
  ];
  const currentYear = (/* @__PURE__ */ new Date()).getFullYear();
  return renderTemplate`${maybeRenderHead()}<footer class="site-footer" data-astro-cid-sz7xmlte> <div class="footer-content container" data-astro-cid-sz7xmlte> <div class="footer-brand" data-astro-cid-sz7xmlte> <a href="/" class="logo" data-astro-cid-sz7xmlte> <img src="/images/dospatitas-logo-blanco.png" alt="Dos Patitas Logo Blanco" data-astro-cid-sz7xmlte> </a> <p class="tagline" data-astro-cid-sz7xmlte>Recuerdos personalizados para cada etapa de la vida.</p> </div> ${linkColumns.map((column) => renderTemplate`<div class="footer-links" data-astro-cid-sz7xmlte> <h4 data-astro-cid-sz7xmlte>${column.title}</h4> <ul data-astro-cid-sz7xmlte> ${column.links.map((link) => renderTemplate`<li data-astro-cid-sz7xmlte><a${addAttribute(link.href, "href")}${addAttribute(link.modal, "data-open-modal")} data-astro-cid-sz7xmlte>${link.text}</a></li>`)} </ul> </div>`)} </div> <div class="footer-bottom container" data-astro-cid-sz7xmlte> <div class="copyright" data-astro-cid-sz7xmlte> <p data-astro-cid-sz7xmlte>&copy; ${currentYear} Dos Patitas. Todos los derechos reservados.</p> <p class="made-with-love" data-astro-cid-sz7xmlte>Hecho con ❤️</p> <a href="/admin/login" class="admin-access" data-astro-cid-sz7xmlte>Acceso administrador</a> </div> <div class="social-links" data-astro-cid-sz7xmlte> ${socialLinks.map((link) => renderTemplate`<a${addAttribute(link.href, "href")} target="_blank" rel="noopener noreferrer"${addAttribute(`Visita nuestro ${link.label}`, "aria-label")} data-astro-cid-sz7xmlte> ${renderComponent($$result, "Icon", $$Icon, { "name": link.icon, "size": 24, "data-astro-cid-sz7xmlte": true })} </a>`)} </div> </div> </footer> `;
}, "C:/Users/Luctus Umbram/Desktop/desblook/astropages/DOSPATITAS/dospatitas.cl/src/components/Footer.astro", void 0);

const $$HowToBuyModal = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div id="how-to-buy-modal" class="modal-overlay hidden" data-astro-cid-bb3nzyrh> <div class="modal-content" data-astro-cid-bb3nzyrh> <button class="modal-close-btn" aria-label="Cerrar modal" data-astro-cid-bb3nzyrh>×</button> <h3 data-astro-cid-bb3nzyrh>¿Cómo Comprar?</h3> <ol class="steps-list" data-astro-cid-bb3nzyrh> <li data-astro-cid-bb3nzyrh><strong data-astro-cid-bb3nzyrh>Explora los diseños:</strong> Navega por nuestro catálogo y elige tus carnets favoritos.</li> <li data-astro-cid-bb3nzyrh><strong data-astro-cid-bb3nzyrh>Añade a tu pedido:</strong> Usa el botón "Agregar al carro" en cada producto que te guste.</li> <li data-astro-cid-bb3nzyrh><strong data-astro-cid-bb3nzyrh>Revisa tu pedido:</strong> Haz clic en el botón flotante de WhatsApp para ver tu selección.</li> <li data-astro-cid-bb3nzyrh><strong data-astro-cid-bb3nzyrh>Envíanos tu pedido:</strong> Presiona "Hacer Pedido" para enviarnos un mensaje de WhatsApp con tu lista.</li> <li data-astro-cid-bb3nzyrh><strong data-astro-cid-bb3nzyrh>Coordinamos por WhatsApp:</strong> Nos pondremos en contacto contigo para confirmar los datos de personalización y el pago.</li> </ol> </div> </div> ${renderScript($$result, "C:/Users/Luctus Umbram/Desktop/desblook/astropages/DOSPATITAS/dospatitas.cl/src/components/HowToBuyModal.astro?astro&type=script&index=0&lang.ts")} `;
}, "C:/Users/Luctus Umbram/Desktop/desblook/astropages/DOSPATITAS/dospatitas.cl/src/components/HowToBuyModal.astro", void 0);

var __freeze$2 = Object.freeze;
var __defProp$2 = Object.defineProperty;
var __template$2 = (cooked, raw) => __freeze$2(__defProp$2(cooked, "raw", { value: __freeze$2(raw || cooked.slice()) }));
var _a$2;
const $$Cart = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate(_a$2 || (_a$2 = __template$2(["", `<div id="cart-panel" class="cart-window" aria-hidden="true"> <div class="panel-header"> <h3>Tu Pedido</h3> <button id="close-cart-btn" class="close-btn" aria-label="Cerrar carrito">\xD7</button> </div> <div id="cart-items-container" class="cart-items-container"> <p class="empty-cart-message">Tu carrito est\xE1 vac\xEDo.</p> </div> <div class="panel-footer"> <a id="whatsapp-checkout-btn" href="#" class="whatsapp-btn disabled" target="_blank" rel="noopener noreferrer">
Hacer Pedido por WhatsApp
</a> </div> </div> <!-- Bot\xF3n flotante --> <button id="open-cart" class="floating-btn cart-btn" aria-label="Ver carrito">\u{1F6D2}</button> <script type="module">
  const cartPanel = document.getElementById('cart-panel');
  const openCartBtn = document.getElementById('open-cart');
  const closeCartBtn = document.getElementById('close-cart-btn');
  const itemsContainer = document.getElementById('cart-items-container');
  const checkoutBtn = document.getElementById('whatsapp-checkout-btn');
  const WHATSAPP_NUMBER = '56958473816';

  if (!cartPanel || !closeCartBtn || !openCartBtn || !itemsContainer || !checkoutBtn) return;

  // Abrir y cerrar panel
  openCartBtn.addEventListener('click', () => cartPanel.classList.add('is-open'));
  closeCartBtn.addEventListener('click', () => cartPanel.classList.remove('is-open'));

  // Actualizar contenido del carrito
  const updateCart = () => {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    if (!Array.isArray(cart)) cart = [];

    if (cart.length === 0) {
      itemsContainer.innerHTML = '<p class="empty-cart-message">Tu carrito est\xE1 vac\xEDo.</p>';
      checkoutBtn.classList.add('disabled');
      checkoutBtn.href = '#';
      return;
    }

    let html = '';
    cart.forEach(item => {
      html += \`
        <div class="cart-card" data-id="\${item.id}">
          <div class="cart-card-body">
            <p class="cart-item-name">\${item.name}</p>
            <div class="cart-controls">
              <button class="btn-qty" data-action="decrease">\u2212</button>
              <span class="qty-count">\${item.quantity}</span>
              <button class="btn-qty" data-action="increase">+</button>
              <button class="btn-remove" aria-label="Eliminar">\xD7</button>
            </div>
          </div>
        </div>
      \`;
    });
    itemsContainer.innerHTML = html;
    checkoutBtn.classList.remove('disabled');
    updateWhatsappLink(cart);
  };

  // Link WhatsApp
  const updateWhatsappLink = (cart) => {
    let text = "Hola! Quiero pedir los siguientes productos:%0A";
    cart.forEach(i => { text += \`- \${i.name} x\${i.quantity}%0A\`; });
    checkoutBtn.href = cart.length ? \`https://wa.me/\${WHATSAPP_NUMBER}?text=\${text}\` : '#';
  };

  // Modificar cantidad
  const modifyQuantity = (id, action) => {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    const index = cart.findIndex(p => p.id == id);
    if (index > -1) {
      cart[index].quantity = action === 'increase' ? cart[index].quantity + 1 : cart[index].quantity -1;
      if (cart[index].quantity < 1) cart.splice(index,1);
      localStorage.setItem('cart', JSON.stringify(cart));
      updateCart();
    }
  };

  // Eliminar producto
  const removeItem = (id) => {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    const index = cart.findIndex(p => p.id == id);
    if (index > -1) {
      cart.splice(index,1);
      localStorage.setItem('cart', JSON.stringify(cart));
      updateCart();
    }
  };

  // Eventos de los botones del carrito
  itemsContainer.addEventListener('click', e => {
    const card = e.target.closest('.cart-card');
    if (!card) return;
    const id = card.dataset.id;
    if (e.target.matches('.btn-qty')) modifyQuantity(id, e.target.dataset.action);
    if (e.target.matches('.btn-remove')) removeItem(id);
  });

  // Inicializar
  updateCart();
<\/script> `], ["", `<div id="cart-panel" class="cart-window" aria-hidden="true"> <div class="panel-header"> <h3>Tu Pedido</h3> <button id="close-cart-btn" class="close-btn" aria-label="Cerrar carrito">\xD7</button> </div> <div id="cart-items-container" class="cart-items-container"> <p class="empty-cart-message">Tu carrito est\xE1 vac\xEDo.</p> </div> <div class="panel-footer"> <a id="whatsapp-checkout-btn" href="#" class="whatsapp-btn disabled" target="_blank" rel="noopener noreferrer">
Hacer Pedido por WhatsApp
</a> </div> </div> <!-- Bot\xF3n flotante --> <button id="open-cart" class="floating-btn cart-btn" aria-label="Ver carrito">\u{1F6D2}</button> <script type="module">
  const cartPanel = document.getElementById('cart-panel');
  const openCartBtn = document.getElementById('open-cart');
  const closeCartBtn = document.getElementById('close-cart-btn');
  const itemsContainer = document.getElementById('cart-items-container');
  const checkoutBtn = document.getElementById('whatsapp-checkout-btn');
  const WHATSAPP_NUMBER = '56958473816';

  if (!cartPanel || !closeCartBtn || !openCartBtn || !itemsContainer || !checkoutBtn) return;

  // Abrir y cerrar panel
  openCartBtn.addEventListener('click', () => cartPanel.classList.add('is-open'));
  closeCartBtn.addEventListener('click', () => cartPanel.classList.remove('is-open'));

  // Actualizar contenido del carrito
  const updateCart = () => {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    if (!Array.isArray(cart)) cart = [];

    if (cart.length === 0) {
      itemsContainer.innerHTML = '<p class="empty-cart-message">Tu carrito est\xE1 vac\xEDo.</p>';
      checkoutBtn.classList.add('disabled');
      checkoutBtn.href = '#';
      return;
    }

    let html = '';
    cart.forEach(item => {
      html += \\\`
        <div class="cart-card" data-id="\\\${item.id}">
          <div class="cart-card-body">
            <p class="cart-item-name">\\\${item.name}</p>
            <div class="cart-controls">
              <button class="btn-qty" data-action="decrease">\u2212</button>
              <span class="qty-count">\\\${item.quantity}</span>
              <button class="btn-qty" data-action="increase">+</button>
              <button class="btn-remove" aria-label="Eliminar">\xD7</button>
            </div>
          </div>
        </div>
      \\\`;
    });
    itemsContainer.innerHTML = html;
    checkoutBtn.classList.remove('disabled');
    updateWhatsappLink(cart);
  };

  // Link WhatsApp
  const updateWhatsappLink = (cart) => {
    let text = "Hola! Quiero pedir los siguientes productos:%0A";
    cart.forEach(i => { text += \\\`- \\\${i.name} x\\\${i.quantity}%0A\\\`; });
    checkoutBtn.href = cart.length ? \\\`https://wa.me/\\\${WHATSAPP_NUMBER}?text=\\\${text}\\\` : '#';
  };

  // Modificar cantidad
  const modifyQuantity = (id, action) => {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    const index = cart.findIndex(p => p.id == id);
    if (index > -1) {
      cart[index].quantity = action === 'increase' ? cart[index].quantity + 1 : cart[index].quantity -1;
      if (cart[index].quantity < 1) cart.splice(index,1);
      localStorage.setItem('cart', JSON.stringify(cart));
      updateCart();
    }
  };

  // Eliminar producto
  const removeItem = (id) => {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    const index = cart.findIndex(p => p.id == id);
    if (index > -1) {
      cart.splice(index,1);
      localStorage.setItem('cart', JSON.stringify(cart));
      updateCart();
    }
  };

  // Eventos de los botones del carrito
  itemsContainer.addEventListener('click', e => {
    const card = e.target.closest('.cart-card');
    if (!card) return;
    const id = card.dataset.id;
    if (e.target.matches('.btn-qty')) modifyQuantity(id, e.target.dataset.action);
    if (e.target.matches('.btn-remove')) removeItem(id);
  });

  // Inicializar
  updateCart();
<\/script> `])), maybeRenderHead());
}, "C:/Users/Luctus Umbram/Desktop/desblook/astropages/DOSPATITAS/dospatitas.cl/src/components/Cart.astro", void 0);

var __freeze$1 = Object.freeze;
var __defProp$1 = Object.defineProperty;
var __template$1 = (cooked, raw) => __freeze$1(__defProp$1(cooked, "raw", { value: __freeze$1(cooked.slice()) }));
var _a$1;
const $$Astro$1 = createAstro();
const $$ProductFullCard = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$ProductFullCard;
  const { product } = Astro2.props;
  if (!product || typeof product !== "object") return null;
  const imageUrl = product.image_url_full || product.image_url_ref || "/images/placeholder.png";
  const modalId = `modal-${product.id}`;
  const productDataForScript = {
    id: product.id,
    name: product.name,
    image_url_ref: product.image_url_ref
  };
  return renderTemplate(_a$1 || (_a$1 = __template$1(["", "<dialog", ' class="product-modal" data-astro-cid-oakdjyop> <div class="modal-content" data-astro-cid-oakdjyop> <button class="close-modal" aria-label="Cerrar"', " data-astro-cid-oakdjyop>\xD7</button> <img", "", ' class="modal-image" loading="lazy" data-astro-cid-oakdjyop> <h2 data-astro-cid-oakdjyop>', "</h2> ", ' <button class="add-to-cart-btn" type="button" data-astro-cid-oakdjyop>\nA\xF1adir al carrito \u{1F6D2}\n</button> </div> <script>(function(){', "\n    const dialog = document.getElementById(modalId);\n    const addToCartButton = dialog.querySelector('.add-to-cart-btn');\n\n    dialog.addEventListener('click', (event) => {\n      if (event.target === dialog) dialog.close();\n    });\n\n    dialog.addEventListener('close', () => {\n        if (addToCartButton) {\n            addToCartButton.textContent = 'A\xF1adir al carrito \u{1F6D2}';\n            addToCartButton.disabled = false;\n        }\n    });\n\n    if (addToCartButton) {\n      addToCartButton.addEventListener('click', () => {\n        const productToAdd = productData;\n        if (!productToAdd || !productToAdd.id) return;\n\n        let cart = [];\n        try { cart = JSON.parse(localStorage.getItem('cart')) || []; } catch(e) {}\n        if (!Array.isArray(cart)) cart = [];\n\n        const existingIndex = cart.findIndex(item => item.id == productToAdd.id);\n        if (existingIndex > -1) {\n          cart[existingIndex].quantity = (cart[existingIndex].quantity || 0) + 1;\n        } else {\n          cart.push({ ...productToAdd, quantity: 1 });\n        }\n\n        localStorage.setItem('cart', JSON.stringify(cart));\n        document.dispatchEvent(new CustomEvent('cartUpdated'));\n\n        addToCartButton.textContent = '\u2705 Agregado';\n        addToCartButton.disabled = true;\n\n        setTimeout(() => { dialog.close(); }, 1000);\n      });\n    }\n  })();<\/script> </dialog> "])), maybeRenderHead(), addAttribute(modalId, "id"), addAttribute(`document.getElementById('${modalId}').close()`, "onclick"), addAttribute(imageUrl, "src"), addAttribute(product.name, "alt"), product.name, product.description && renderTemplate`<p class="description" data-astro-cid-oakdjyop>${product.description}</p>`, defineScriptVars({ modalId, productData: productDataForScript }));
}, "C:/Users/Luctus Umbram/Desktop/desblook/astropages/DOSPATITAS/dospatitas.cl/src/components/ProductFullCard.astro", void 0);

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Astro = createAstro();
const $$Layout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Layout;
  const { title } = Astro2.props;
  const siteName = "Dos Patitas";
  const fullTitle = `${title} | ${siteName}`;
  const description = "Dise\xF1amos carnets de control sano \xFAnicos y personalizados.";
  const currentUrl = Astro2.url.href;
  return renderTemplate(_a || (_a = __template(['<html lang="es"> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><title>', '</title><meta name="description"', '><link rel="icon" type="image/svg+xml" href="/favicon.svg"><link rel="canonical"', '><meta name="generator"', '><link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin><link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700&display=swap" rel="stylesheet">', "</head> <body> ", " ", " ", " ", " ", " ", ` <a href="https://wa.me/+56966306409" class="floating-btn whatsapp-btn" target="_blank" rel="noopener noreferrer" aria-label="Contactar por WhatsApp">\u{1F4AC}</a> <button id="open-cart" class="floating-btn cart-btn" aria-label="Ver carrito">\u{1F6D2}</button> <script>
    document.addEventListener("DOMContentLoaded", () => {
      const cartPanel = document.getElementById("cart-panel");
      const openCart = document.getElementById("open-cart");
      if (cartPanel && openCart) {
        openCart.addEventListener("click", () => {
          cartPanel.classList.add("is-open");
          cartPanel.setAttribute("aria-hidden","false");
          document.dispatchEvent(new CustomEvent('cartUpdated'));
        });
      }
    });
  <\/script>  </body> </html>`])), fullTitle, addAttribute(description, "content"), addAttribute(currentUrl, "href"), addAttribute(Astro2.generator, "content"), renderHead(), renderComponent($$result, "Header", $$Header, {}), renderSlot($$result, $$slots["default"]), renderComponent($$result, "Footer", $$Footer, {}), renderComponent($$result, "HowToBuyModal", $$HowToBuyModal, {}), renderComponent($$result, "ProductModal", $$ProductFullCard, {}), renderComponent($$result, "Cart", $$Cart, {}));
}, "C:/Users/Luctus Umbram/Desktop/desblook/astropages/DOSPATITAS/dospatitas.cl/src/layouts/Layout.astro", void 0);

export { $$Layout as $, $$ProductFullCard as a, $$Icon as b };
