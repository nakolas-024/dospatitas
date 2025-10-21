import { s as supabase } from '../../chunks/supabaseClient_B4WHuzkJ.mjs';
export { renderers } from '../../renderers.mjs';

const post = async ({ request }) => {
  const form = await request.formData();
  const file = form.get("file");
  const bucket = form.get("bucket");
  if (!file || !bucket) return new Response("Bad request", { status: 400 });
  const filename = `${Date.now()}_${file.name}`;
  const { error } = await supabase.storage.from(bucket).upload(filename, file);
  if (error) return new Response(error.message, { status: 500 });
  const { publicUrl, error: urlError } = supabase.storage.from(bucket).getPublicUrl(filename);
  if (urlError) return new Response(urlError.message, { status: 500 });
  return new Response(JSON.stringify({ url: publicUrl }), {
    headers: { "Content-Type": "application/json" }
  });
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  post
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
