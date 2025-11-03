import { e as createComponent, f as createAstro, n as renderComponent, r as renderTemplate, m as maybeRenderHead, h as addAttribute, o as Fragment } from '../../chunks/astro/server_QFBcFQ3r.mjs';
import { $ as $$Layout, a as $$ProductFullCard } from '../../chunks/Layout_BkFvdts8.mjs';
import { $ as $$ProductCard } from '../../chunks/ProductCard_DucMc1rQ.mjs';
import { s as supabase } from '../../chunks/supabaseClient_B4WHuzkJ.mjs';
/* empty css                                     */
export { renderers } from '../../renderers.mjs';

const $$Astro = createAstro();
const $$slug = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$slug;
  const { slug } = Astro2.params;
  const categoryMap = {
    ninas: "Ni\xF1as",
    // Asegúrate que estos coincidan EXACTAMENTE con tu DB
    ninos: "Ni\xF1os",
    veterinarios: "Mascotas"
    // Asumiendo que usas 'Mascotas' en la DB
  };
  const categoryName = categoryMap[slug] || slug;
  let pageTitle = `Cat\xE1logo - ${categoryName}`;
  if (categoryName === "Mascotas") pageTitle = "Cat\xE1logo - Carnets de Control para Mascotas";
  else if (categoryName === "Ni\xF1os") pageTitle = "Cat\xE1logo - Carnets de Control para Ni\xF1os";
  else if (categoryName === "Ni\xF1as") pageTitle = "Cat\xE1logo - Carnets de Control para Ni\xF1as";
  let products = [];
  let fetchError = null;
  try {
    const { data, error } = await supabase.from("products").select("id, name, category, image_url_ref, image_url_full").eq("category", categoryName).order("created_at", { ascending: false });
    if (error) throw error;
    products = data || [];
  } catch (err) {
    console.error(`Error al cargar productos para categor\xEDa '${categoryName}':`, err);
    fetchError = err;
  }
  const allCategories = [
    { name: "Ni\xF1os", href: "/categoria/ninos", id: "Ni\xF1os" },
    // Usar '/categoria/...'
    { name: "Ni\xF1as", href: "/categoria/ninas", id: "Ni\xF1as" },
    { name: "Mascotas", href: "/categoria/veterinarios", id: "Mascotas" }
  ];
  const currentCategory = categoryName;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": pageTitle, "data-astro-cid-nlmqd6up": true }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="catalog-page" data-astro-cid-nlmqd6up> <div class="container" data-astro-cid-nlmqd6up> <div class="catalog-header" data-astro-cid-nlmqd6up> <h1 data-astro-cid-nlmqd6up>${pageTitle.replace("Cat\xE1logo - ", "")}</h1>   ${categoryName === "Mascotas" && renderTemplate`<p class="subtitle" data-astro-cid-nlmqd6up>Lleva un registro de vacunas y visitas 🐾</p>`} ${categoryName === "Ni\xF1os" && renderTemplate`<p class="subtitle" data-astro-cid-nlmqd6up>Un recuerdo especial para su crecimiento.</p>`} ${categoryName === "Ni\xF1as" && renderTemplate`<p class="subtitle" data-astro-cid-nlmqd6up>Diseños encantadores para ellas.</p>`} </div>  <nav class="category-nav" data-astro-cid-nlmqd6up> <ul data-astro-cid-nlmqd6up> ${allCategories.map((cat) => renderTemplate`<li data-astro-cid-nlmqd6up> <a${addAttribute(cat.href, "href")}${addAttribute({ active: cat.id === currentCategory }, "class:list")} data-astro-cid-nlmqd6up> ${cat.name} </a> </li>`)} </ul> </nav>  ${fetchError ? renderTemplate`<p class="error" data-astro-cid-nlmqd6up> <strong data-astro-cid-nlmqd6up>Error al cargar productos:</strong> ${fetchError.message || "Error desconocido."} <br data-astro-cid-nlmqd6up><small data-astro-cid-nlmqd6up>(Ver consola del servidor y RLS en Supabase)</small> </p>` : renderTemplate`<div class="product-grid" data-astro-cid-nlmqd6up> ${products.length > 0 ? products.map((product) => renderTemplate`${renderComponent($$result2, "Fragment", Fragment, { "data-astro-cid-nlmqd6up": true }, { "default": async ($$result3) => renderTemplate`${renderComponent($$result3, "ProductCard", $$ProductCard, { "product": product, "data-astro-cid-nlmqd6up": true })} ${renderComponent($$result3, "ProductFullCard", $$ProductFullCard, { "product": product, "data-astro-cid-nlmqd6up": true })} ` })}`) : renderTemplate`<p class="no-products-message" data-astro-cid-nlmqd6up>
Aún no hay productos en la categoría "${categoryName}". ¡Vuelve pronto!
</p>`} </div>`} </div> </main> ` })} `;
}, "C:/Users/Luctus Umbram/Desktop/desblook/astropages/DOSPATITAS/dospatitas.cl/src/pages/categoria/[slug].astro", void 0);

const $$file = "C:/Users/Luctus Umbram/Desktop/desblook/astropages/DOSPATITAS/dospatitas.cl/src/pages/categoria/[slug].astro";
const $$url = "/categoria/[slug]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$slug,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
