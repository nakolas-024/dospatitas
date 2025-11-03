import { e as createComponent, f as createAstro, n as renderComponent, r as renderTemplate, m as maybeRenderHead } from '../../chunks/astro/server_QFBcFQ3r.mjs';
import { $ as $$Layout } from '../../chunks/Layout_BkFvdts8.mjs';
/* empty css                                    */
export { renderers } from '../../renderers.mjs';

const $$Astro = createAstro();
const prerender = false;
const $$Login = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Login;
  let error = "";
  if (Astro2.request.method === "POST") {
    const contentType = Astro2.request.headers.get("content-type") || "";
    let user = "";
    let pass = "";
    if (contentType.includes("application/x-www-form-urlencoded")) {
      const body = await Astro2.request.text();
      const params = new URLSearchParams(body);
      user = params.get("user") || "";
      pass = params.get("pass") || "";
    }
    if (user === "dospatitas" && pass === "dospatitas2025") {
      return new Response(null, {
        status: 302,
        headers: {
          // --- CORRECCIÓN AQUÍ ---
          Location: "/admin/dashboard",
          // Apunta a dashboard.astro
          // ---------------------
          "Set-Cookie": `auth=true; Path=/; HttpOnly; SameSite=Lax; Max-Age=86400`
          // Cookie válida por 1 día
        }
      });
    } else {
      error = "Usuario o contrase\xF1a incorrectos";
    }
  }
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Iniciar sesi\xF3n | Dospatitas", "data-astro-cid-rf56lckb": true }, { "default": async ($$result2) => renderTemplate`  ${maybeRenderHead()}<main data-astro-cid-rf56lckb> <form method="POST" enctype="application/x-www-form-urlencoded" data-astro-cid-rf56lckb> <img src="/images/dospatitas-logo.png" alt="Dospatitas" class="logo" data-astro-cid-rf56lckb> <h1 data-astro-cid-rf56lckb>Acceso Administrativo</h1> <label for="user" data-astro-cid-rf56lckb>Usuario</label> <input type="text" id="user" name="user" placeholder="Ej: dospatitas" required data-astro-cid-rf56lckb> <label for="pass" data-astro-cid-rf56lckb>Contraseña</label> <input type="password" id="pass" name="pass" placeholder="••••••••••" required data-astro-cid-rf56lckb> <button type="submit" data-astro-cid-rf56lckb>Ingresar</button> ${error && renderTemplate`<p class="error" data-astro-cid-rf56lckb>${error}</p>`} </form> </main> ` })}`;
}, "C:/Users/Luctus Umbram/Desktop/desblook/astropages/DOSPATITAS/dospatitas.cl/src/pages/admin/login.astro", void 0);

const $$file = "C:/Users/Luctus Umbram/Desktop/desblook/astropages/DOSPATITAS/dospatitas.cl/src/pages/admin/login.astro";
const $$url = "/admin/login";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Login,
  file: $$file,
  prerender,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
