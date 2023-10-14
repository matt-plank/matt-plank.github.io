import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import mdPlugin from "vite-plugin-markdown";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    mdPlugin.plugin({
      mode: ["html"],
    }),
    react(),
  ],
});
