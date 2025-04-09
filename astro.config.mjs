import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import icon from "astro-icon";

// https://astro.build/config
export default defineConfig({
  site: "https://namdarine.com", // 나중에 네 도메인으로 바꿔도 됨
  integrations: [
    mdx(),
    sitemap(),
    icon({
      collections: {
        ri: () => import("@iconify-json/ri/icons.json"), // ← 여기 추가!
      },
    }),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
});