import { e as createComponent, n as renderComponent, r as renderTemplate, m as maybeRenderHead, h as addAttribute } from '../../chunks/astro/server_DVBAnwcH.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../../chunks/Layout_BddiXToK.mjs';
import { $ as $$ProductCard } from '../../chunks/ProductCard_CDSPTzPm.mjs';
import { s as supabase } from '../../chunks/supabaseClient_B4WHuzkJ.mjs';
/* empty css                                    */
export { renderers } from '../../renderers.mjs';

const $$Ninas = createComponent(async ($$result, $$props, $$slots) => {
  let products = [];
  let fetchError = null;
  try {
    const { data, error } = await supabase.from("products").select("*").eq("category", "Ni\xF1as").order("created_at", { ascending: false });
    if (error) throw error;
    products = data || [];
    console.log(`Productos de Ni\xF1as cargados: ${products.length}`);
  } catch (err) {
    console.error("Error al cargar productos de Supabase:", err);
    fetchError = err;
  }
  const allCategories = [
    { name: "Ni\xF1os", href: "/catalogo/ninos", id: "Ni\xF1os" },
    { name: "Ni\xF1as", href: "/catalogo/ninas", id: "Ni\xF1as" },
    { name: "Mascotas", href: "/catalogo/veterinarios", id: "Mascotas" }
  ];
  const currentCategory = "Ni\xF1as";
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Cat\xE1logo - Carnets de Control Sano para Ni\xF1as", "data-astro-cid-upsirttj": true }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="catalog-page" data-astro-cid-upsirttj> <div class="container" data-astro-cid-upsirttj> <div class="catalog-header" data-astro-cid-upsirttj> <h1 data-astro-cid-upsirttj>Carnets de Control Sano para Niñas</h1> <p class="subtitle" data-astro-cid-upsirttj>Diseños encantadores para registrar sus primeros años de vida.</p> </div> <nav class="category-nav" data-astro-cid-upsirttj> <ul data-astro-cid-upsirttj> ${allCategories.map((cat) => renderTemplate`<li data-astro-cid-upsirttj> <a${addAttribute(cat.href, "href")}${addAttribute({ active: cat.id === currentCategory }, "class:list")} data-astro-cid-upsirttj> ${cat.name} </a> </li>`)} </ul> </nav> ${fetchError ? renderTemplate`<p class="error" data-astro-cid-upsirttj> <strong data-astro-cid-upsirttj>Error al cargar productos:</strong> ${fetchError.message || "Ocurri\xF3 un error desconocido."} <br data-astro-cid-upsirttj> <small data-astro-cid-upsirttj>(Revisa la consola del servidor o las políticas RLS en Supabase)</small> </p>` : renderTemplate`<div class="product-grid" data-astro-cid-upsirttj> ${products.length > 0 ? products.map((product) => renderTemplate`${renderComponent($$result2, "ProductCard", $$ProductCard, { "product": product, "data-astro-cid-upsirttj": true })}`) : renderTemplate`<p class="no-products-message" data-astro-cid-upsirttj>
Aún no hemos agregado productos en esta categoría. ¡Vuelve pronto!
</p>`} </div>`} </div> </main> ` })} `;
}, "C:/Users/Luctus Umbram/Desktop/astro pages/DOSPATITAS/dospatitas.cl/src/pages/catalogo/ninas.astro", void 0);

const $$file = "C:/Users/Luctus Umbram/Desktop/astro pages/DOSPATITAS/dospatitas.cl/src/pages/catalogo/ninas.astro";
const $$url = "/catalogo/ninas";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Ninas,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
