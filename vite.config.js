import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      app: "/src/app/",
      modules: "/src/modules/",
      interface: "/src/interface/",
      styles: "/src/styles/",
      shared: "/src/shared/",
    },
  },
  server: {
    proxy: {
      "/api": {
        target: "https://services.vector-vs.com/price-list-internal", // URL вашого сервера
        changeOrigin: true, // Змінює заголовок Origin, щоб співпадав із сервером
        rewrite: (path) => path.replace(/^\/api/, ""),
      },
    },
  },
});
