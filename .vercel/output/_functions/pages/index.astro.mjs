import { e as createComponent, m as maybeRenderHead, r as renderTemplate, n as renderComponent } from '../chunks/astro/server_DVBAnwcH.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../chunks/Layout_BddiXToK.mjs';
import 'clsx';
/* empty css                                 */
import { $ as $$ProductCard } from '../chunks/ProductCard_CDSPTzPm.mjs';
import { p as products } from '../chunks/products_BrpJIsaH.mjs';
export { renderers } from '../renderers.mjs';

const $$Hero = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section class="hero" data-astro-cid-bbe6dxrz> <div class="hero-content container" data-astro-cid-bbe6dxrz> <div class="text-box" data-astro-cid-bbe6dxrz> <h1 data-astro-cid-bbe6dxrz>El recuerdo más lindo de su crecimiento</h1> <p data-astro-cid-bbe6dxrz>Carnets de control sano personalizados para niños, niñas y mascotas. (Somos ex colorfull.cl)</p> <a href="/catalogo" class="hero-button" data-astro-cid-bbe6dxrz>Ver Diseños</a> </div> </div> </section> `;
}, "C:/Users/Luctus Umbram/Desktop/astro pages/DOSPATITAS/dospatitas.cl/src/components/Hero.astro", void 0);

const $$Index = createComponent(($$result, $$props, $$slots) => {
  function shuffle(array) {
    return array.map((value) => ({ value, sort: Math.random() })).sort((a, b) => a.sort - b.sort).map(({ value }) => value);
  }
  const featuredProducts = shuffle(products).slice(0, 6);
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Dos Patitas - Carnets de Control Sano Personalizados", "data-astro-cid-j7pv25f6": true }, { "default": ($$result2) => renderTemplate`${maybeRenderHead()}<main data-astro-cid-j7pv25f6> ${renderComponent($$result2, "Hero", $$Hero, { "data-astro-cid-j7pv25f6": true })} ${featuredProducts.length > 0 && renderTemplate`<section class="featured-products" data-astro-cid-j7pv25f6> <div class="container" data-astro-cid-j7pv25f6> <div class="section-header" data-astro-cid-j7pv25f6> <h2 data-astro-cid-j7pv25f6>Diseños Destacados</h2> <p class="subtitle" data-astro-cid-j7pv25f6>Una selección de nuestros carnets más queridos.</p> </div> <div class="product-grid" data-astro-cid-j7pv25f6> ${featuredProducts.map((product) => (
    // Pasamos el objeto 'product' completo
    renderTemplate`${renderComponent($$result2, "ProductCard", $$ProductCard, { "product": product, "data-astro-cid-j7pv25f6": true })}`
  ))} </div> <div class="section-footer" data-astro-cid-j7pv25f6> <a href="/catalogo" class="btn-view-all" data-astro-cid-j7pv25f6>
Ver todos los diseños &rarr;
</a> </div> </div> </section>`} </main> ` })} `;
}, "C:/Users/Luctus Umbram/Desktop/astro pages/DOSPATITAS/dospatitas.cl/src/pages/index.astro", void 0);

const $$file = "C:/Users/Luctus Umbram/Desktop/astro pages/DOSPATITAS/dospatitas.cl/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
