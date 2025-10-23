// astro.config.mjs
import { defineConfig } from 'astro/config';
import vercel from '@astrojs/vercel'; // ✅ Este es el correcto
import icon from 'astro-icon';

export default defineConfig({
  output: 'server',       // Necesario para SSR
  adapter: vercel(),      // ✅ No uses /serverless
  integrations: [icon()],
});
