import { e as createComponent, n as renderComponent, r as renderTemplate, m as maybeRenderHead, h as addAttribute } from '../../chunks/astro/server_DVBAnwcH.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../../chunks/Layout_BddiXToK.mjs';
import { $ as $$ProductCard } from '../../chunks/ProductCard_CDSPTzPm.mjs';
import { s as supabase } from '../../chunks/supabaseClient_B4WHuzkJ.mjs';
/* empty css                                    */
export { renderers } from '../../renderers.mjs';

const $$Ninos = createComponent(async ($$result, $$props, $$slots) => {
  let products = [];
  let fetchError = null;
  try {
    const { data, error } = await supabase.from("products").select("*").eq("category", "Ni\xF1os").order("created_at", { ascending: false });
    if (error) throw error;
    products = data || [];
    console.log(`Productos de Ni\xF1os cargados: ${products.length}`);
  } catch (err) {
    console.error("Error al cargar productos de Supabase:", err);
    fetchError = err;
  }
  const allCategories = [
    { name: "Ni\xF1os", href: "/catalogo/ninos", id: "Ni\xF1os" },
    { name: "Ni\xF1as", href: "/catalogo/ninas", id: "Ni\xF1as" },
    { name: "Mascotas", href: "/catalogo/veterinarios", id: "Mascotas" }
  ];
  const currentCategory = "Ni\xF1os";
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Cat\xE1logo - Carnets de Control Sano para Ni\xF1os", "data-astro-cid-rlijm7es": true }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="catalog-page" data-astro-cid-rlijm7es> <div class="container" data-astro-cid-rlijm7es> <div class="catalog-header" data-astro-cid-rlijm7es> <h1 data-astro-cid-rlijm7es>Carnets de Control Sano para Niños</h1> <p class="subtitle" data-astro-cid-rlijm7es>Un recuerdo único y personalizado para seguir cada etapa de su crecimiento.</p> </div> <nav class="category-nav" data-astro-cid-rlijm7es> <ul data-astro-cid-rlijm7es> ${allCategories.map((cat) => renderTemplate`<li data-astro-cid-rlijm7es> <a${addAttribute(cat.href, "href")}${addAttribute({ active: cat.id === currentCategory }, "class:list")} data-astro-cid-rlijm7es> ${cat.name} </a> </li>`)} </ul> </nav> ${fetchError ? renderTemplate`<p class="error" data-astro-cid-rlijm7es> <strong data-astro-cid-rlijm7es>Error al cargar productos:</strong> ${fetchError.message || "Ocurri\xF3 un error desconocido."} <br data-astro-cid-rlijm7es> <small data-astro-cid-rlijm7es>(Revisa la consola del servidor o las políticas RLS en Supabase)</small> </p>` : renderTemplate`<div class="product-grid" data-astro-cid-rlijm7es> ${products.length > 0 ? products.map((product) => renderTemplate`${renderComponent($$result2, "ProductCard", $$ProductCard, { "product": product, "data-astro-cid-rlijm7es": true })}`) : renderTemplate`<p class="no-products-message" data-astro-cid-rlijm7es>
Aún no hemos agregado productos en esta categoría. ¡Vuelve pronto!
</p>`} </div>`} </div> </main> ` })} `;
}, "C:/Users/Luctus Umbram/Desktop/astro pages/DOSPATITAS/dospatitas.cl/src/pages/catalogo/ninos.astro", void 0);

const $$file = "C:/Users/Luctus Umbram/Desktop/astro pages/DOSPATITAS/dospatitas.cl/src/pages/catalogo/ninos.astro";
const $$url = "/catalogo/ninos";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Ninos,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
