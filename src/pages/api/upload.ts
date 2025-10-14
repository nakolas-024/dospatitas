import type { APIRoute } from 'astro';
import { supabase } from '../../lib/supabaseClient';

export const post: APIRoute = async ({ request }) => {
  const form = await request.formData();
  const file = form.get('file') as File;
  const bucket = form.get('bucket') as string;

  if (!file || !bucket) return new Response('Bad request', { status: 400 });

  const filename = `${Date.now()}_${file.name}`;
  const { error } = await supabase.storage.from(bucket).upload(filename, file);

  if (error) return new Response(error.message, { status: 500 });

  const { publicUrl, error: urlError } = supabase.storage
    .from(bucket)
    .getPublicUrl(filename);

  if (urlError) return new Response(urlError.message, { status: 500 });

  return new Response(JSON.stringify({ url: publicUrl }), {
    headers: { 'Content-Type': 'application/json' },
  });
};
