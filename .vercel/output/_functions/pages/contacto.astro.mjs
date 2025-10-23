import { e as createComponent, n as renderComponent, r as renderTemplate, m as maybeRenderHead, h as addAttribute } from '../chunks/astro/server_QFBcFQ3r.mjs';
import { $ as $$Layout, b as $$Header, c as $$Icon, d as $$Footer } from '../chunks/Layout_nYBf6Sp5.mjs';
/* empty css                                    */
export { renderers } from '../renderers.mjs';

const $$Contacto = createComponent(($$result, $$props, $$slots) => {
  const contactMethods = [
    {
      icon: "mdi:whatsapp",
      title: "WhatsApp",
      text: "La forma m\xE1s r\xE1pida de hablar con nosotros. Haz clic aqu\xED para enviarnos un mensaje.",
      href: "https://wa.me/56966306409",
      cta: "Enviar Mensaje"
    },
    {
      icon: "mdi:instagram",
      title: "Instagram",
      text: "S\xEDguenos para ver nuestros \xFAltimos dise\xF1os, novedades y promociones especiales.",
      href: "https://www.instagram.com/TUPERFILDEINSTAGRAM",
      cta: "Seguir en Instagram"
    },
    {
      icon: "mdi:email-outline",
      title: "Correo Electr\xF3nico",
      text: "Para consultas m\xE1s detalladas o colaboraciones, puedes escribirnos un email.",
      href: "mailto:tuemail@example.com",
      cta: "Escribir Correo"
    }
  ];
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Contacto", "data-astro-cid-2mxdoeuz": true }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Header", $$Header, { "data-astro-cid-2mxdoeuz": true })} ${maybeRenderHead()}<main class="contact-page" data-astro-cid-2mxdoeuz> <div class="container" data-astro-cid-2mxdoeuz> <div class="page-header" data-astro-cid-2mxdoeuz> <h1 data-astro-cid-2mxdoeuz>Ponte en Contacto</h1> <p class="subtitle" data-astro-cid-2mxdoeuz>¿Tienes alguna pregunta o quieres hacer un pedido especial? ¡Estamos aquí para ayudarte!</p> </div> <div class="contact-grid" data-astro-cid-2mxdoeuz> ${contactMethods.map((method) => renderTemplate`<div class="contact-card" data-astro-cid-2mxdoeuz> <div class="icon-wrapper" data-astro-cid-2mxdoeuz> ${renderComponent($$result2, "Icon", $$Icon, { "name": method.icon, "size": 40, "data-astro-cid-2mxdoeuz": true })} </div> <h3 data-astro-cid-2mxdoeuz>${method.title}</h3> <p data-astro-cid-2mxdoeuz>${method.text}</p> <a${addAttribute(method.href, "href")} class="contact-button" target="_blank" rel="noopener noreferrer" data-astro-cid-2mxdoeuz> ${method.cta} </a> </div>`)} </div> </div> </main> ${renderComponent($$result2, "Footer", $$Footer, { "data-astro-cid-2mxdoeuz": true })} ` })} `;
}, "C:/Users/Luctus Umbram/Desktop/astropages/DOSPATITAS/dospatitas.cl/src/pages/contacto.astro", void 0);

const $$file = "C:/Users/Luctus Umbram/Desktop/astropages/DOSPATITAS/dospatitas.cl/src/pages/contacto.astro";
const $$url = "/contacto";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Contacto,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
