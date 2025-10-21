// @ts-check
import { defineConfig } from 'astro/config';
import icon from "astro-icon";
import vercel from '@astrojs/vercel/serverless'; // Adapter para Vercel

export default defineConfig({
  output: 'server',       // necesario para SSR
  adapter: vercel(),       // usar Vercel serverless
  integrations: [
    icon()
  ]
});
