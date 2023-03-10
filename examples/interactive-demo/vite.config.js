import { defineConfig } from "vite";

export default defineConfig({
  base: "/dot.wasm/",
  server: {
    fs: {
      // Allow serving files from one level up to the project root
      allow: ["../.."],
    },
  },
});
