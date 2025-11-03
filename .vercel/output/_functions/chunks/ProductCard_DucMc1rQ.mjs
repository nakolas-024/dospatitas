import { e as createComponent, f as createAstro, m as maybeRenderHead, h as addAttribute, r as renderTemplate } from './astro/server_QFBcFQ3r.mjs';
import 'clsx';
/* empty css                         */

const $$Astro = createAstro();
const $$ProductCard = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$ProductCard;
  const { product } = Astro2.props;
  if (!product) return null;
  const imageUrl = product.image_url_ref || "/images/placeholder.png";
  const modalId = `modal-${product.id}`;
  return renderTemplate`${maybeRenderHead()}<div class="product-card" data-astro-cid-tjdfhdqb> <div class="image-wrapper" data-astro-cid-tjdfhdqb> <img${addAttribute(imageUrl, "src")}${addAttribute(product.name || "Producto", "alt")} loading="lazy" data-astro-cid-tjdfhdqb> </div> <h3 data-astro-cid-tjdfhdqb>${product.name || "Sin nombre"}</h3> <p class="category" data-astro-cid-tjdfhdqb>${product.category || "Sin categor\xEDa"}</p> <button class="view-btn" type="button"${addAttribute(`document.getElementById('${modalId}').showModal()`, "onclick")} data-astro-cid-tjdfhdqb>
Ver más
</button> </div> `;
}, "C:/Users/Luctus Umbram/Desktop/desblook/astropages/DOSPATITAS/dospatitas.cl/src/components/ProductCard.astro", void 0);

export { $$ProductCard as $ };
