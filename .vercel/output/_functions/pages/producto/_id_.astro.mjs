import { e as createComponent, f as createAstro, n as renderComponent, r as renderTemplate, m as maybeRenderHead, h as addAttribute } from '../../chunks/astro/server_QFBcFQ3r.mjs';
import { $ as $$Layout } from '../../chunks/Layout_BkFvdts8.mjs';
import { s as supabase } from '../../chunks/supabaseClient_B4WHuzkJ.mjs';
/* empty css                                   */
export { renderers } from '../../renderers.mjs';

const $$Astro = createAstro();
const $$id = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$id;
  const { id } = Astro2.params;
  let product = null;
  let fetchError = null;
  try {
    const { data, error } = await supabase.from("products").select("id, name, category, image_url_ref, image_url_full, description").eq("id", id).single();
    if (error && error.code !== "PGRST116") {
      throw error;
    }
    product = data;
  } catch (err) {
    console.error(`Error al cargar producto con ID ${id}:`, err);
    fetchError = err;
  }
  const pageTitle = fetchError ? "Error" : product ? product.name : "Producto no encontrado";
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": `${pageTitle} | Dos Patitas`, "data-astro-cid-mvbiubgv": true }, { "default": async ($$result2) => renderTemplate`${maybeRenderHead()}<main class="product-page container" data-astro-cid-mvbiubgv>  ${fetchError ? renderTemplate`<p class="error" data-astro-cid-mvbiubgv> <strong data-astro-cid-mvbiubgv>Error al cargar el producto:</strong> ${fetchError.message || "Error desconocido."} <br data-astro-cid-mvbiubgv><small data-astro-cid-mvbiubgv>(Ver consola del servidor)</small> </p>` : product ? (
    // Renderizar el componente ProductFullCard con los datos del producto
    // NOTA: ProductFullCard ahora es un <dialog>, se mostrará directamente aquí.
    // Si quisieras que se muestre como antes (tarjeta + modal), necesitarías ProductCard aquí también.
    // Asumiendo que esta página ES la vista detallada:
    renderTemplate`<div class="product-detail-view" data-astro-cid-mvbiubgv>  <img${addAttribute(product.image_url_full || product.image_url_ref || "/images/placeholder.png", "src")}${addAttribute(product.name, "alt")} class="product-image-full" data-astro-cid-mvbiubgv> <h2 data-astro-cid-mvbiubgv>${product.name}</h2> <p class="category-label" data-astro-cid-mvbiubgv>${product.category}</p> <p class="description-text" data-astro-cid-mvbiubgv>${product.description || "Descripci\xF3n no disponible."}</p>   </div>`
  ) : renderTemplate`<p class="no-product" data-astro-cid-mvbiubgv>Lo sentimos, no pudimos encontrar este producto.</p>`} </main> ` })}  `;
}, "C:/Users/Luctus Umbram/Desktop/desblook/astropages/DOSPATITAS/dospatitas.cl/src/pages/producto/[id].astro", void 0);

const $$file = "C:/Users/Luctus Umbram/Desktop/desblook/astropages/DOSPATITAS/dospatitas.cl/src/pages/producto/[id].astro";
const $$url = "/producto/[id]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$id,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
