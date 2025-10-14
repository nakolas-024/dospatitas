import type { APIRoute } from 'astro';
import { supabase } from '../../lib/supabaseClient';

export const get: APIRoute = async () => {
  const { data, error } = await supabase.from('products').select('*').order('created_at');
  if (error) return new Response(error.message, { status: 500 });
  return new Response(JSON.stringify(data), { headers: { 'Content-Type': 'application/json' } });
};

export const post: APIRoute = async ({ request }) => {
  const { name, category, image_ref, image_full } = await request.json();
  const { data, error } = await supabase.from('products').insert([{ name, category, image_ref, image_full }]).single();
  if (error) return new Response(error.message, { status: 500 });
  return new Response(JSON.stringify(data), { headers: { 'Content-Type': 'application/json' } });
};

export const put: APIRoute = async ({ request }) => {
  const { id, name, category, image_ref, image_full } = await request.json();
  const { data, error } = await supabase.from('products')
    .update({ name, category, image_ref, image_full })
    .eq('id', id)
    .single();
  if (error) return new Response(error.message, { status: 500 });
  return new Response(JSON.stringify(data), { headers: { 'Content-Type': 'application/json' } });
};

export const del: APIRoute = async ({ request }) => {
  const { id } = await request.json();
  const { error } = await supabase.from('products').delete().eq('id', id);
  if (error) return new Response(error.message, { status: 500 });
  return new Response('Deleted', { status: 200 });
};
