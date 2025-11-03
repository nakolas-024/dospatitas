import { e as createComponent, f as createAstro, k as renderHead, h as addAttribute, l as renderScript, r as renderTemplate } from '../../chunks/astro/server_QFBcFQ3r.mjs';
import 'clsx';
import { s as supabase } from '../../chunks/supabaseClient_B4WHuzkJ.mjs';
/* empty css                                        */
export { renderers } from '../../renderers.mjs';

const $$Astro = createAstro();
const prerender = false;
const $$Dashboard = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Dashboard;
  let actionMessage = null;
  let initialProducts = [];
  let loadError = null;
  let filterCategory = Astro2.url.searchParams.get("category") || "Todos";
  let searchQuery = Astro2.url.searchParams.get("search") || "";
  if (Astro2.request.method === "POST") {
    try {
      const data = await Astro2.request.formData();
      const action = data.get("action");
      const id = data.get("id");
      if (action === "add") {
        const name = data.get("name");
        const category = data.get("category");
        const imgRef = data.get("imgRef");
        const imgFull = data.get("imgFull");
        if (!(imgRef instanceof File) || !(imgFull instanceof File)) {
          throw new Error("Los archivos de imagen no son v\xE1lidos.");
        }
        const fileRefName = `${Date.now()}-${imgRef.name.replace(/\s+/g, "_")}`;
        const fileFullName = `${Date.now()}-${imgFull.name.replace(/\s+/g, "_")}`;
        const { data: uploadRefData, error: uploadRefError } = await supabase.storage.from("product-images").upload(fileRefName, imgRef);
        if (uploadRefError) throw new Error(`Error subiendo imagen ref: ${uploadRefError.message}`);
        const { data: uploadFullData, error: uploadFullError } = await supabase.storage.from("product-images").upload(fileFullName, imgFull);
        if (uploadFullError) {
          await supabase.storage.from("product-images").remove([fileRefName]);
          throw new Error(`Error subiendo imagen full: ${uploadFullError.message}`);
        }
        const { data: urlRefData } = supabase.storage.from("product-images").getPublicUrl(fileRefName);
        const { data: urlFullData } = supabase.storage.from("product-images").getPublicUrl(fileFullName);
        const urlRef = urlRefData?.publicUrl;
        const urlFull = urlFullData?.publicUrl;
        if (!urlRef || !urlFull) {
          await supabase.storage.from("product-images").remove([fileRefName, fileFullName]);
          throw new Error("No se pudieron obtener las URLs p\xFAblicas de las im\xE1genes.");
        }
        const { error: insertError } = await supabase.from("products").insert([{
          name,
          category,
          image_url_ref: urlRef,
          image_url_full: urlFull
        }]);
        if (insertError) throw insertError;
        actionMessage = "Producto agregado correctamente \u{1F389}";
      } else if (action === "delete") {
        if (!id) throw new Error("ID de producto no proporcionado para eliminar.");
        const { error: deleteError } = await supabase.from("products").delete().eq("id", id);
        if (deleteError) throw deleteError;
        actionMessage = "Producto eliminado";
      } else if (action === "edit") {
        if (!id) throw new Error("ID de producto no proporcionado para editar.");
        const name = data.get("name");
        const category = data.get("category");
        const { error: updateError } = await supabase.from("products").update({ name, category }).eq("id", id);
        if (updateError) throw updateError;
        actionMessage = "Producto actualizado";
      }
      filterCategory = data.get("category") || "Todos";
      searchQuery = data.get("search") || "";
      const redirectUrl = `/admin/dashboard?status=success&message=${encodeURIComponent(actionMessage || "Acci\xF3n completada")}&category=${filterCategory}&search=${searchQuery}`;
      return Astro2.redirect(redirectUrl, 303);
    } catch (err) {
      console.error("Error processing POST:", err);
      actionMessage = `Error: ${err.message}`;
      const redirectUrl = `/admin/dashboard?status=error&message=${encodeURIComponent(actionMessage)}&category=${filterCategory}&search=${searchQuery}`;
      return Astro2.redirect(redirectUrl, 303);
    }
  }
  try {
    let query = supabase.from("products").select("*").order("created_at", { ascending: false });
    if (filterCategory && filterCategory !== "Todos") {
      query = query.eq("category", filterCategory);
    }
    if (searchQuery) {
      query = query.ilike("name", `%${searchQuery}%`);
    }
    const { data, error } = await query;
    if (error) throw error;
    initialProducts = data || [];
    console.log(`Productos cargados: ${initialProducts.length}`);
  } catch (err) {
    console.error("Error fetching products:", err);
    loadError = `Error al cargar productos: ${err.message}`;
  }
  const urlParams = new URLSearchParams(Astro2.url.search);
  const status = urlParams.get("status");
  const messageFromRedirect = urlParams.get("message");
  const displayMessage = status ? messageFromRedirect : null;
  return renderTemplate`<html lang="es" data-astro-cid-x6qnsptu> <head><meta charset="UTF-8"><title>Dashboard Admin | Dos Patitas</title>${renderHead()}</head> <body class="font-sans" data-astro-cid-x6qnsptu> <header class="header" data-astro-cid-x6qnsptu> <h1 data-astro-cid-x6qnsptu>Dos Patitas - Panel Admin</h1> <div class="user-menu" data-astro-cid-x6qnsptu> <span data-astro-cid-x6qnsptu>Admin</span>  <button class="logout-btn" data-astro-cid-x6qnsptu>Cerrar sesión</button> </div> </header> <div class="dashboard" data-astro-cid-x6qnsptu> <aside class="sidebar" data-astro-cid-x6qnsptu> <nav data-astro-cid-x6qnsptu> <ul data-astro-cid-x6qnsptu> <li class="active" data-astro-cid-x6qnsptu>Productos</li> <li data-astro-cid-x6qnsptu>Pedidos</li>  <li data-astro-cid-x6qnsptu>Usuarios</li> <li data-astro-cid-x6qnsptu>Ajustes</li>  </ul> </nav> </aside> <main class="main-content" data-astro-cid-x6qnsptu>  ${displayMessage && renderTemplate`<p${addAttribute(`message ${status === "error" ? "message-error" : "message-success"}`, "class")} data-astro-cid-x6qnsptu>${displayMessage}</p>`} ${loadError && renderTemplate`<p class="message message-error" data-astro-cid-x6qnsptu>${loadError}</p>`}  <div class="filters card" data-astro-cid-x6qnsptu> <form method="get" class="filter-form" data-astro-cid-x6qnsptu>   <input type="text" name="search" placeholder="Buscar producto..."${addAttribute(searchQuery || "", "value")} data-astro-cid-x6qnsptu> <select name="category" data-astro-cid-x6qnsptu> <option value="Todos" data-astro-cid-x6qnsptu>Todos</option> <option value="Niños"${addAttribute(filterCategory === "Ni\xF1os", "selected")} data-astro-cid-x6qnsptu>Niños</option> <option value="Niñas"${addAttribute(filterCategory === "Ni\xF1as", "selected")} data-astro-cid-x6qnsptu>Niñas</option> <option value="Mascotas"${addAttribute(filterCategory === "Mascotas", "selected")} data-astro-cid-x6qnsptu>Mascotas</option> </select> <button type="submit" data-astro-cid-x6qnsptu>Filtrar</button>  ${(searchQuery || filterCategory !== "Todos") && renderTemplate`<a href="/admin/dashboard" style="padding: 0.6rem; text-decoration: none; color: #555;" data-astro-cid-x6qnsptu>Limpiar</a>`} </form> </div>  <div class="card" data-astro-cid-x6qnsptu> <h2 data-astro-cid-x6qnsptu>Agregar nuevo producto</h2> <form method="post" enctype="multipart/form-data" class="form" data-astro-cid-x6qnsptu> <input type="hidden" name="action" value="add" data-astro-cid-x6qnsptu> <div data-astro-cid-x6qnsptu><label data-astro-cid-x6qnsptu>Nombre</label><input type="text" name="name" placeholder="Nombre del producto" required data-astro-cid-x6qnsptu></div> <div data-astro-cid-x6qnsptu><label data-astro-cid-x6qnsptu>Categoría</label><select name="category" required data-astro-cid-x6qnsptu> <option value="Niños" data-astro-cid-x6qnsptu>Niños</option> <option value="Niñas" data-astro-cid-x6qnsptu>Niñas</option> <option value="Mascotas" data-astro-cid-x6qnsptu>Mascotas</option> </select></div> <div data-astro-cid-x6qnsptu><label data-astro-cid-x6qnsptu>Imagen de referencia (.jpg, .png, .webp)</label><input type="file" name="imgRef" accept="image/jpeg, image/png, image/webp" required data-astro-cid-x6qnsptu></div> <div data-astro-cid-x6qnsptu><label data-astro-cid-x6qnsptu>Imagen cuerpo completo (.jpg, .png, .webp)</label><input type="file" name="imgFull" accept="image/jpeg, image/png, image/webp" required data-astro-cid-x6qnsptu></div> <button type="submit" data-astro-cid-x6qnsptu>Agregar producto</button> </form> </div>  <h2 data-astro-cid-x6qnsptu>Productos Cargados (${initialProducts.length})</h2> <div class="product-grid" data-astro-cid-x6qnsptu> ${initialProducts.length === 0 && !loadError && renderTemplate`<p data-astro-cid-x6qnsptu>No se encontraron productos con los filtros actuales.</p>`} ${initialProducts.map((p) => renderTemplate`<div class="product-card" data-astro-cid-x6qnsptu> <img${addAttribute(p.image_url_ref, "src")}${addAttribute(p.name, "alt")}${addAttribute(`openImageModal('${p.image_url_full}')`, "onclick")} title="Haz clic para ver imagen completa" data-astro-cid-x6qnsptu> <div class="product-info" data-astro-cid-x6qnsptu> <h3 data-astro-cid-x6qnsptu>${p.name}</h3> <p data-astro-cid-x6qnsptu>${p.category}</p> <div class="card-actions" data-astro-cid-x6qnsptu> <button class="edit-btn"${addAttribute(`openEditModal('${p.id}','${p.name}','${p.category}')`, "onclick")} data-astro-cid-x6qnsptu>Editar</button> <form method="post" style="margin: 0;" data-astro-cid-x6qnsptu>  <input type="hidden" name="id"${addAttribute(p.id, "value")} data-astro-cid-x6qnsptu> <input type="hidden" name="action" value="delete" data-astro-cid-x6qnsptu> <button type="submit" onclick="return confirm('¿Estás seguro de eliminar este producto?')" data-astro-cid-x6qnsptu>Eliminar</button> </form> </div> </div> </div>`)} </div> </main> </div>  <div id="editModal" class="modal" data-astro-cid-x6qnsptu> <div class="modal-content" data-astro-cid-x6qnsptu> <span class="close" onclick="closeEditModal()" data-astro-cid-x6qnsptu>&times;</span> <h3 data-astro-cid-x6qnsptu>Editar producto</h3> <form method="post" id="editForm" data-astro-cid-x6qnsptu> <input type="hidden" name="action" value="edit" data-astro-cid-x6qnsptu> <input type="hidden" name="id" id="edit-id" data-astro-cid-x6qnsptu>  <label data-astro-cid-x6qnsptu>Nombre</label> <input type="text" name="name" id="edit-name" placeholder="Nombre" required data-astro-cid-x6qnsptu> <label data-astro-cid-x6qnsptu>Categoría</label> <select name="category" id="edit-category" required data-astro-cid-x6qnsptu> <option value="Niños" data-astro-cid-x6qnsptu>Niños</option> <option value="Niñas" data-astro-cid-x6qnsptu>Niñas</option> <option value="Mascotas" data-astro-cid-x6qnsptu>Mascotas</option> </select> <button type="submit" data-astro-cid-x6qnsptu>Actualizar</button> </form> </div> </div>  <div id="imageModal" class="modal" onclick="closeImageModal()" data-astro-cid-x6qnsptu>  <div class="modal-content" data-astro-cid-x6qnsptu>  <span class="close" onclick="closeImageModal()" data-astro-cid-x6qnsptu>&times;</span> <img class="modal-img" id="modalImage" alt="Imagen completa del producto" data-astro-cid-x6qnsptu> </div> </div>  ${renderScript($$result, "C:/Users/Luctus Umbram/Desktop/desblook/astropages/DOSPATITAS/dospatitas.cl/src/pages/admin/dashboard.astro?astro&type=script&index=0&lang.ts")} </body> </html>`;
}, "C:/Users/Luctus Umbram/Desktop/desblook/astropages/DOSPATITAS/dospatitas.cl/src/pages/admin/dashboard.astro", void 0);

const $$file = "C:/Users/Luctus Umbram/Desktop/desblook/astropages/DOSPATITAS/dospatitas.cl/src/pages/admin/dashboard.astro";
const $$url = "/admin/dashboard";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Dashboard,
  file: $$file,
  prerender,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
