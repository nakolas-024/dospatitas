import { e as createComponent, f as createAstro, k as renderHead, r as renderTemplate, n as renderComponent } from '../../chunks/astro/server_DVBAnwcH.mjs';
import 'kleur/colors';
import { p as products } from '../../chunks/products_BrpJIsaH.mjs';
import { $ as $$ProductCard } from '../../chunks/ProductCard_CDSPTzPm.mjs';
export { renderers } from '../../renderers.mjs';

const $$Astro = createAstro();
const $$slug = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$slug;
  const { slug } = Astro2.params;
  const categoryMap = {
    ninas: "ni\xF1as",
    ninos: "ni\xF1os",
    veterinarios: "veterinarios"
  };
  const categoryName = categoryMap[slug] || "";
  const filteredProducts = products.filter((p) => p.category === categoryName);
  return renderTemplate`<html lang="es"> <head><title>Catálogo - ${categoryName}</title>${renderHead()}</head> <body> <h1>Productos - ${categoryName}</h1> ${filteredProducts.length === 0 ? renderTemplate`<p>No hay productos en esta categoría.</p>` : renderTemplate`<div class="grid grid-cols-1 md:grid-cols-3 gap-4"> ${filteredProducts.map((product) => renderTemplate`${renderComponent($$result, "ProductCard", $$ProductCard, { "imgSrc": product.images[0] || "/images/placeholder.png", "title": product.name, "category": product.category })}`)} </div>`} </body></html>`;
}, "C:/Users/Luctus Umbram/Desktop/astro pages/DOSPATITAS/dospatitas.cl/src/pages/categoria/[slug].astro", void 0);

const $$file = "C:/Users/Luctus Umbram/Desktop/astro pages/DOSPATITAS/dospatitas.cl/src/pages/categoria/[slug].astro";
const $$url = "/categoria/[slug]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$slug,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
