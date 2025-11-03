import { e as createComponent, m as maybeRenderHead, r as renderTemplate, n as renderComponent, o as Fragment } from '../chunks/astro/server_QFBcFQ3r.mjs';
import { $ as $$Layout, a as $$ProductFullCard } from '../chunks/Layout_BkFvdts8.mjs';
import 'clsx';
/* empty css                                 */
import { $ as $$ProductCard } from '../chunks/ProductCard_DucMc1rQ.mjs';
import { s as supabase } from '../chunks/supabaseClient_B4WHuzkJ.mjs';
export { renderers } from '../renderers.mjs';

const $$Hero = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section class="hero" data-astro-cid-bbe6dxrz> <div class="hero-content container" data-astro-cid-bbe6dxrz> <div class="text-box" data-astro-cid-bbe6dxrz> <h1 data-astro-cid-bbe6dxrz>El recuerdo más lindo de su crecimiento</h1> <p data-astro-cid-bbe6dxrz>Carnets de control sano personalizados para niños, niñas y mascotas. (Somos ex colorfull.cl)</p> <a href="/catalogo" class="hero-button" data-astro-cid-bbe6dxrz>Ver Diseños</a> </div> </div> </section> `;
}, "C:/Users/Luctus Umbram/Desktop/desblook/astropages/DOSPATITAS/dospatitas.cl/src/components/Hero.astro", void 0);

const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  function shuffle(array) {
    let currentIndex = array.length, randomIndex;
    while (currentIndex !== 0) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
      [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
    }
    return array;
  }
  let featuredProducts = [];
  let fetchError = null;
  try {
    const { data: allProducts, error } = await supabase.from("products").select("id, name, category, image_url_ref, image_url_full").limit(50);
    if (error) throw error;
    if (allProducts && allProducts.length > 0) {
      featuredProducts = shuffle([...allProducts]).slice(0, 6);
    }
    console.log(`\u2705 Productos destacados cargados: ${featuredProducts.length}`);
  } catch (err) {
    console.error("\u274C Error al cargar productos destacados desde Supabase:", err);
    fetchError = err;
  }
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Dos Patitas - Carnets de Control Sano Personalizados", "data-astro-cid-j7pv25f6": true }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<main data-astro-cid-j7pv25f6> ${renderComponent($$result2, "Hero", $$Hero, { "data-astro-cid-j7pv25f6": true })}  <section class="featured-products" data-astro-cid-j7pv25f6> <div class="container" data-astro-cid-j7pv25f6> <div class="section-header" data-astro-cid-j7pv25f6> <h2 data-astro-cid-j7pv25f6>Diseños Destacados</h2> <p class="subtitle" data-astro-cid-j7pv25f6>Una selección de nuestros carnets más queridos.</p> </div> ${fetchError ? renderTemplate`<p class="error" data-astro-cid-j7pv25f6> <strong data-astro-cid-j7pv25f6>Error al cargar productos destacados:</strong> ${fetchError.message || "Error desconocido."} <br data-astro-cid-j7pv25f6><small data-astro-cid-j7pv25f6>(Ver consola del servidor)</small> </p>` : featuredProducts.length > 0 ? renderTemplate`<div class="product-grid" data-astro-cid-j7pv25f6> ${featuredProducts.map((product) => renderTemplate`${renderComponent($$result2, "Fragment", Fragment, { "data-astro-cid-j7pv25f6": true }, { "default": async ($$result3) => renderTemplate`${renderComponent($$result3, "ProductCard", $$ProductCard, { "product": product, "data-astro-cid-j7pv25f6": true })} ${renderComponent($$result3, "ProductFullCard", $$ProductFullCard, { "product": product, "data-astro-cid-j7pv25f6": true })} ` })}`)} </div>` : renderTemplate`<p class="no-products-message" data-astro-cid-j7pv25f6>No hay productos destacados para mostrar.</p>`} <div class="section-footer" data-astro-cid-j7pv25f6> <a href="/catalogo/ninos" class="btn-view-all" data-astro-cid-j7pv25f6> 
Ver todos los diseños &rarr;
</a> </div> </div> </section> </main> ` })} `;
}, "C:/Users/Luctus Umbram/Desktop/desblook/astropages/DOSPATITAS/dospatitas.cl/src/pages/index.astro", void 0);

const $$file = "C:/Users/Luctus Umbram/Desktop/desblook/astropages/DOSPATITAS/dospatitas.cl/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
