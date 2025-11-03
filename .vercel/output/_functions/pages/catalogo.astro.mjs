import { e as createComponent, n as renderComponent, r as renderTemplate, m as maybeRenderHead, h as addAttribute } from '../chunks/astro/server_QFBcFQ3r.mjs';
import { $ as $$Layout } from '../chunks/Layout_BkFvdts8.mjs';
/* empty css                                    */
export { renderers } from '../renderers.mjs';

const $$Catalogo = createComponent(($$result, $$props, $$slots) => {
  const categories = [
    {
      name: "Ni\xF1os",
      href: "/catalogo/ninos",
      description: "Carnets de control personalizados con dise\xF1os divertidos y alegres."
    },
    {
      name: "Ni\xF1as",
      href: "/catalogo/ninas",
      description: "Dise\xF1os encantadores, coloridos y \xFAnicos para acompa\xF1ar su crecimiento."
    },
    {
      name: "Mascotas",
      href: "/catalogo/veterinarios",
      description: "Lleva el registro de vacunas y visitas del mejor amigo de la familia."
    }
  ];
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Cat\xE1logo - Molly Inc.", "data-astro-cid-bg7e42cm": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="catalog-page" data-astro-cid-bg7e42cm> <section class="catalog-header" data-astro-cid-bg7e42cm> <div class="container" data-astro-cid-bg7e42cm> <h1 data-astro-cid-bg7e42cm>Catálogo de Diseños</h1> <p class="subtitle" data-astro-cid-bg7e42cm>
Explora nuestras categorías y encuentra el carnet perfecto para tus seres más importantes.
</p> </div> </section> <section class="catalog-grid-section" data-astro-cid-bg7e42cm> <div class="container" data-astro-cid-bg7e42cm> <div class="category-grid" data-astro-cid-bg7e42cm> ${categories.map((cat) => renderTemplate`<a${addAttribute(cat.href, "href")} class="category-card" data-astro-cid-bg7e42cm> <div class="card-content" data-astro-cid-bg7e42cm> <h2 data-astro-cid-bg7e42cm>${cat.name}</h2> <p data-astro-cid-bg7e42cm>${cat.description}</p> </div> </a>`)} </div> </div> </section> </main> ` })} `;
}, "C:/Users/Luctus Umbram/Desktop/desblook/astropages/DOSPATITAS/dospatitas.cl/src/pages/catalogo.astro", void 0);

const $$file = "C:/Users/Luctus Umbram/Desktop/desblook/astropages/DOSPATITAS/dospatitas.cl/src/pages/catalogo.astro";
const $$url = "/catalogo";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Catalogo,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
