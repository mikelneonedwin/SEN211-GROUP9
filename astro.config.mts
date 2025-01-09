import tailwind from "@astrojs/tailwind";
import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind()],
  build: {
    assets: "assets",
  },
  output: "static",
  vite: {
    build: {
      minify: false,
      cssMinify: true,
      assetsInlineLimit: 0,
      rollupOptions: {
        output: {
          assetFileNames: "assets/[name][extname]",
        },
      },
    },
  },
});
