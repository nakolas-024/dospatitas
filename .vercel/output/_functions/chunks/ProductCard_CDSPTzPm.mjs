import { e as createComponent, f as createAstro, m as maybeRenderHead, h as addAttribute, r as renderTemplate } from './astro/server_DVBAnwcH.mjs';
import 'kleur/colors';
import 'clsx';
/* empty css                         */

const $$Astro = createAstro();
const $$ProductCard = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$ProductCard;
  const { product } = Astro2.props;
  if (!product || typeof product !== "object") {
    console.error("ProductCard recibi\xF3 una prop 'product' inv\xE1lida:", Astro2.props);
    return null;
  }
  const productJsonString = JSON.stringify(product);
  return renderTemplate`${maybeRenderHead()}<div class="product-card"${addAttribute(productJsonString, "data-product")} data-astro-cid-tjdfhdqb> <div class="img-wrapper" data-astro-cid-tjdfhdqb> <img${addAttribute(product.image_url_ref || "/images/placeholder.png", "src")}${addAttribute(product.name || "Producto", "alt")} loading="lazy" data-astro-cid-tjdfhdqb> </div> <h3 data-astro-cid-tjdfhdqb>${product.name || "Nombre no disponible"}</h3> <p class="category" data-astro-cid-tjdfhdqb>${product.category || "Categor\xEDa no disponible"}</p> </div> `;
}, "C:/Users/Luctus Umbram/Desktop/astro pages/DOSPATITAS/dospatitas.cl/src/components/ProductCard.astro", void 0);

export { $$ProductCard as $ };
