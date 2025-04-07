import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      app: "/src/app/",
      pages: "/src/pages/",
      features: "/src/features/",
      layout: "/src/layout/",
      store: "/src/store/",
      hooks: "/src/hooks/",
      lib: "/src/lib/",
      utils: "/src/utils/",
      shared: "/src/shared/",

      modules: "/src/modules/",
      styles: "/src/styles/",
    },
  },
  server: {
    proxy: {
      "/api": {
        target: "https://services.vector-vs.com/price-list-internal", // URL вашого сервера
        changeOrigin: true, // Змінює заголовок Origin, щоб співпадав із сервером
        rewrite: (path) => path.replace(/^\/api/, ""),
      },
      "/conf": {
        target: "https://services.vector-vs.com//price-list-internal", // URL вашого сервера
        changeOrigin: true, // Змінює заголовок Origin, щоб співпадав із сервером
        rewrite: (path) => path.replace(/^\/api/, ""),
      },
    },
  },
});
