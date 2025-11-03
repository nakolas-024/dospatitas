import { s as supabase } from '../../chunks/supabaseClient_B4WHuzkJ.mjs';
export { renderers } from '../../renderers.mjs';

const get = async () => {
  const { data, error } = await supabase.from("products").select("*").order("created_at");
  if (error) return new Response(error.message, { status: 500 });
  return new Response(JSON.stringify(data), { headers: { "Content-Type": "application/json" } });
};
const post = async ({ request }) => {
  const { name, category, image_ref, image_full } = await request.json();
  const { data, error } = await supabase.from("products").insert([{ name, category, image_ref, image_full }]).single();
  if (error) return new Response(error.message, { status: 500 });
  return new Response(JSON.stringify(data), { headers: { "Content-Type": "application/json" } });
};
const put = async ({ request }) => {
  const { id, name, category, image_ref, image_full } = await request.json();
  const { data, error } = await supabase.from("products").update({ name, category, image_ref, image_full }).eq("id", id).single();
  if (error) return new Response(error.message, { status: 500 });
  return new Response(JSON.stringify(data), { headers: { "Content-Type": "application/json" } });
};
const del = async ({ request }) => {
  const { id } = await request.json();
  const { error } = await supabase.from("products").delete().eq("id", id);
  if (error) return new Response(error.message, { status: 500 });
  return new Response("Deleted", { status: 200 });
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  del,
  get,
  post,
  put
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
