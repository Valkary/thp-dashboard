import { defineConfig } from 'astro/config';
import solidJs from "@astrojs/solid-js";
import tailwind from "@astrojs/tailwind";

import compress from 'vite-plugin-compression';

// https://astro.build/config
export default defineConfig({
  site: "https://thp.dev",
  integrations: [solidJs(), tailwind()],
  vite: {
    plugins: [compress({
      ext: '.br',
      algorithm: 'brotliCompress'
    }), compress({
      ext: '.gz',
      algorithm: 'gzip'
    })]
  }
});