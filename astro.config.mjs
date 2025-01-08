// @ts-check
import { defineConfig } from "astro/config";

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind()],
  vite: {
    build: {
      minify: false,
      cssMinify: false,
      assetsInlineLimit: 0
    },
  },
});
