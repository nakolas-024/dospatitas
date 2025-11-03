import { renderers } from './renderers.mjs';
import { c as createExports, s as serverEntrypointModule } from './chunks/_@astrojs-ssr-adapter_B7Wy05nL.mjs';
import { manifest } from './manifest_DHJfUuwL.mjs';

const serverIslandMap = new Map();;

const _page0 = () => import('./pages/_image.astro.mjs');
const _page1 = () => import('./pages/admin/dashboard.astro.mjs');
const _page2 = () => import('./pages/admin/login.astro.mjs');
const _page3 = () => import('./pages/api/products.astro.mjs');
const _page4 = () => import('./pages/api/upload.astro.mjs');
const _page5 = () => import('./pages/catalogo/ninas.astro.mjs');
const _page6 = () => import('./pages/catalogo/ninos.astro.mjs');
const _page7 = () => import('./pages/catalogo/veterinarios.astro.mjs');
const _page8 = () => import('./pages/catalogo.astro.mjs');
const _page9 = () => import('./pages/categoria/_slug_.astro.mjs');
const _page10 = () => import('./pages/contacto.astro.mjs');
const _page11 = () => import('./pages/producto/_id_.astro.mjs');
const _page12 = () => import('./pages/index.astro.mjs');
const pageMap = new Map([
    ["node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["src/pages/admin/dashboard.astro", _page1],
    ["src/pages/admin/login.astro", _page2],
    ["src/pages/api/products.ts", _page3],
    ["src/pages/api/upload.ts", _page4],
    ["src/pages/catalogo/ninas.astro", _page5],
    ["src/pages/catalogo/ninos.astro", _page6],
    ["src/pages/catalogo/veterinarios.astro", _page7],
    ["src/pages/catalogo.astro", _page8],
    ["src/pages/categoria/[slug].astro", _page9],
    ["src/pages/contacto.astro", _page10],
    ["src/pages/producto/[id].astro", _page11],
    ["src/pages/index.astro", _page12]
]);

const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    actions: () => import('./noop-entrypoint.mjs'),
    middleware: () => import('./_noop-middleware.mjs')
});
const _args = {
    "middlewareSecret": "55a5484e-1675-4382-a7db-858b70ae0148",
    "skewProtection": false
};
const _exports = createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;
const _start = 'start';
if (Object.prototype.hasOwnProperty.call(serverEntrypointModule, _start)) ;

export { __astrojsSsrVirtualEntry as default, pageMap };
