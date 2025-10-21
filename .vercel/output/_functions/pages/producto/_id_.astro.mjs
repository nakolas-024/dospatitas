import { e as createComponent, f as createAstro, r as renderTemplate, h as addAttribute, m as maybeRenderHead, n as renderComponent } from '../../chunks/astro/server_DVBAnwcH.mjs';
import 'kleur/colors';
import { $ as $$Layout, a as $$Header, c as $$Footer } from '../../chunks/Layout_BddiXToK.mjs';
import 'clsx';
/* empty css                                   */
import { s as supabase } from '../../chunks/supabaseClient_B4WHuzkJ.mjs';
export { renderers } from '../../renderers.mjs';

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(raw || cooked.slice()) }));
var _a;
const $$Astro$1 = createAstro();
const $$ProductFullCard = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$ProductFullCard;
  const { product } = Astro2.props;
  if (!product || typeof product !== "object") {
    console.error("ProductFullCard recibi\xF3 una prop 'product' inv\xE1lida:", Astro2.props);
    return null;
  }
  return renderTemplate(_a || (_a = __template(["", '<div class="product-full-modal"', ' data-astro-cid-oakdjyop> <div class="modal-overlay" data-astro-cid-oakdjyop></div> <div class="modal-content" data-astro-cid-oakdjyop> <button class="modal-close" aria-label="Cerrar" data-astro-cid-oakdjyop>&times;</button> <div class="modal-image" data-astro-cid-oakdjyop> <img', "", ' data-astro-cid-oakdjyop> </div> <div class="modal-info" data-astro-cid-oakdjyop> <h2 data-astro-cid-oakdjyop>', '</h2> <p class="category" data-astro-cid-oakdjyop>', "</p> <button class=\"btn-add-cart\" data-astro-cid-oakdjyop>Agregar al carrito</button> </div> </div> </div> <script type=\"module\">\ndocument.addEventListener('DOMContentLoaded', () => {\n  const modal = document.getElementById(`modal-${product.id}`);\n  const closeBtn = modal.querySelector('.modal-close');\n  const overlay = modal.querySelector('.modal-overlay');\n\n  // Funci\xF3n de cerrar\n  const closeModal = () => modal.classList.remove('open');\n\n  closeBtn.addEventListener('click', closeModal);\n  overlay.addEventListener('click', closeModal);\n\n  // Abrir modal cuando se haga click en la card correspondiente\n  const productCard = document.querySelector(`.product-card[data-product*='\"id\":${JSON.stringify(product.id)}']`);\n  if (productCard) {\n    productCard.addEventListener('click', () => modal.classList.add('open'));\n  }\n});\n<\/script> "], ["", '<div class="product-full-modal"', ' data-astro-cid-oakdjyop> <div class="modal-overlay" data-astro-cid-oakdjyop></div> <div class="modal-content" data-astro-cid-oakdjyop> <button class="modal-close" aria-label="Cerrar" data-astro-cid-oakdjyop>&times;</button> <div class="modal-image" data-astro-cid-oakdjyop> <img', "", ' data-astro-cid-oakdjyop> </div> <div class="modal-info" data-astro-cid-oakdjyop> <h2 data-astro-cid-oakdjyop>', '</h2> <p class="category" data-astro-cid-oakdjyop>', "</p> <button class=\"btn-add-cart\" data-astro-cid-oakdjyop>Agregar al carrito</button> </div> </div> </div> <script type=\"module\">\ndocument.addEventListener('DOMContentLoaded', () => {\n  const modal = document.getElementById(\\`modal-\\${product.id}\\`);\n  const closeBtn = modal.querySelector('.modal-close');\n  const overlay = modal.querySelector('.modal-overlay');\n\n  // Funci\xF3n de cerrar\n  const closeModal = () => modal.classList.remove('open');\n\n  closeBtn.addEventListener('click', closeModal);\n  overlay.addEventListener('click', closeModal);\n\n  // Abrir modal cuando se haga click en la card correspondiente\n  const productCard = document.querySelector(\\`.product-card[data-product*='\"id\":\\${JSON.stringify(product.id)}']\\`);\n  if (productCard) {\n    productCard.addEventListener('click', () => modal.classList.add('open'));\n  }\n});\n<\/script> "])), maybeRenderHead(), addAttribute(`modal-${product.id}`, "id"), addAttribute(product.image_url_full || "/images/placeholder.png", "src"), addAttribute(product.name || "Producto", "alt"), product.name, product.category);
}, "C:/Users/Luctus Umbram/Desktop/astro pages/DOSPATITAS/dospatitas.cl/src/components/ProductFullCard.astro", void 0);

const $$Astro = createAstro();
const $$id = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$id;
  const { id } = Astro2.params;
  const { data: product, error } = await supabase.from("products").select("*").eq("id", id).single();
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": product ? product.name : "Producto", "data-astro-cid-mvbiubgv": true }, { "default": async ($$result2) => renderTemplate` ${renderComponent($$result2, "Header", $$Header, { "data-astro-cid-mvbiubgv": true })} ${maybeRenderHead()}<main class="product-page" data-astro-cid-mvbiubgv> ${error ? renderTemplate`<p class="error" data-astro-cid-mvbiubgv>Error al cargar el producto.</p>` : product ? renderTemplate`${renderComponent($$result2, "ProductFullCard", $$ProductFullCard, { "product": product, "data-astro-cid-mvbiubgv": true })}` : renderTemplate`<p class="no-product" data-astro-cid-mvbiubgv>Producto no encontrado.</p>`} </main> ${renderComponent($$result2, "Footer", $$Footer, { "data-astro-cid-mvbiubgv": true })} ` })} `;
}, "C:/Users/Luctus Umbram/Desktop/astro pages/DOSPATITAS/dospatitas.cl/src/pages/producto/[id].astro", void 0);

const $$file = "C:/Users/Luctus Umbram/Desktop/astro pages/DOSPATITAS/dospatitas.cl/src/pages/producto/[id].astro";
const $$url = "/producto/[id]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$id,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
