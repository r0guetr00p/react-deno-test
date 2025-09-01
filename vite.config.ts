import { defineConfig } from "vite";
import path from "node:path";

import deno from "@deno/vite-plugin";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

import "react";
import "react-dom";

export default defineConfig({
  root: "./client",
  envDir: "../",
  server: {
    port: 3000,
  },
  plugins: [
    react(),
    deno(),
    tailwindcss(),
  ],
  optimizeDeps: {
    include: [
      "react/jsx-runtime",
      "@supabase/supabase-js",
    ],
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./client/src"),
    },
  },
});
