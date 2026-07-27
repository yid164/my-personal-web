// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://yid164.github.io',
  base: '/my-personal-web',
  vite: {
    plugins: [tailwindcss()]
  }
});