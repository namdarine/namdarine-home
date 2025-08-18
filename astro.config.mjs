import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import icon from "astro-icon";
import path from "path";

// https://astro.build/config
export default defineConfig({
  site: "https://namdarine.com",
  integrations: [
    mdx(),
    sitemap(),
    icon({
      collections: {
        mdi: () => import('@iconify-json/mdi/icons.json'),
        ri: () => import("@iconify-json/ri/icons.json"),
        "circle-flags": () => import("@iconify-json/circle-flags/icons.json"),
      },
    }),
  ],
  vite: {
    plugins: [tailwindcss()],
    resolve: {
      alias: {
        "@": path.resolve("./src"),
        "~": path.resolve("."),
      },
    },
  },
});