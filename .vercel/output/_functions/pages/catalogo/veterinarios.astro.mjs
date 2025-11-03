import { e as createComponent, n as renderComponent, r as renderTemplate, m as maybeRenderHead, h as addAttribute, o as Fragment } from '../../chunks/astro/server_QFBcFQ3r.mjs';
import { $ as $$Layout, a as $$ProductFullCard } from '../../chunks/Layout_BkFvdts8.mjs';
import { $ as $$ProductCard } from '../../chunks/ProductCard_DucMc1rQ.mjs';
import { s as supabase } from '../../chunks/supabaseClient_B4WHuzkJ.mjs';
/* empty css                                           */
export { renderers } from '../../renderers.mjs';

const $$Veterinarios = createComponent(async ($$result, $$props, $$slots) => {
  let products = [];
  let fetchError = null;
  try {
    const { data, error } = await supabase.from("products").select("*").eq("category", "Mascotas").order("created_at", { ascending: false });
    if (error) throw error;
    products = data || [];
  } catch (err) {
    console.error("Error al cargar productos de Supabase:", err);
    fetchError = err;
  }
  const allCategories = [
    { name: "Ni\xF1os", href: "/catalogo/ninos", id: "Ni\xF1os" },
    { name: "Ni\xF1as", href: "/catalogo/ninas", id: "Ni\xF1as" },
    { name: "Mascotas", href: "/catalogo/veterinarios", id: "Mascotas" }
  ];
  const currentCategory = "Mascotas";
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Cat\xE1logo - Carnets de Control para Mascotas", "data-astro-cid-nxkt2tdo": true }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="catalog-page" data-astro-cid-nxkt2tdo> <div class="container" data-astro-cid-nxkt2tdo> <div class="catalog-header" data-astro-cid-nxkt2tdo> <h1 data-astro-cid-nxkt2tdo>Carnets de Control para Mascotas</h1> <p class="subtitle" data-astro-cid-nxkt2tdo>Lleva un registro de vacunas y visitas de tu mejor amigo 🐾</p> </div>  <nav class="category-nav" data-astro-cid-nxkt2tdo> <ul data-astro-cid-nxkt2tdo> ${allCategories.map((cat) => renderTemplate`<li data-astro-cid-nxkt2tdo> <a${addAttribute(cat.href, "href")}${addAttribute({ active: cat.id === currentCategory }, "class:list")} data-astro-cid-nxkt2tdo> ${cat.name} </a> </li>`)} </ul> </nav>  ${fetchError ? renderTemplate`<p class="error" data-astro-cid-nxkt2tdo> <strong data-astro-cid-nxkt2tdo>Error al cargar productos:</strong> ${fetchError.message || "Error desconocido."} <br data-astro-cid-nxkt2tdo><small data-astro-cid-nxkt2tdo>(Ver consola y RLS en Supabase)</small> </p>` : renderTemplate`<div class="product-grid" data-astro-cid-nxkt2tdo> ${products.length > 0 ? products.map((product) => renderTemplate`${renderComponent($$result2, "Fragment", Fragment, { "data-astro-cid-nxkt2tdo": true }, { "default": async ($$result3) => renderTemplate`${renderComponent($$result3, "ProductCard", $$ProductCard, { "product": product, "data-astro-cid-nxkt2tdo": true })} ${renderComponent($$result3, "ProductFullCard", $$ProductFullCard, { "product": product, "data-astro-cid-nxkt2tdo": true })} ` })}`) : renderTemplate`<p class="no-products-message" data-astro-cid-nxkt2tdo>
Aún no hay productos en esta categoría.
</p>`} </div>`} </div> </main> ` })}  `;
}, "C:/Users/Luctus Umbram/Desktop/desblook/astropages/DOSPATITAS/dospatitas.cl/src/pages/catalogo/veterinarios.astro", void 0);

const $$file = "C:/Users/Luctus Umbram/Desktop/desblook/astropages/DOSPATITAS/dospatitas.cl/src/pages/catalogo/veterinarios.astro";
const $$url = "/catalogo/veterinarios";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Veterinarios,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
