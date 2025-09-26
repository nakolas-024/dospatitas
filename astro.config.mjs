// @ts-check
import { defineConfig } from 'astro/config';
import icon from "astro-icon"; // <-- 1. AÑADE ESTA LÍNEA

// https://astro.build/config
export default defineConfig({
  // 2. AÑADE ESTA SECCIÓN COMPLETA
  integrations: [
    icon() 
  ]
});
