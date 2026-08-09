import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";
import { fileURLToPath, URL } from "node:url";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), "");
  const engineTarget = env.VITE_ENGINE_BASE || "http://localhost:8080";

  return {
    plugins: [react(), tailwindcss()],
    resolve: {
      alias: {
        "@ra": fileURLToPath(new URL("./src", import.meta.url)),
      },
    },
    server: {
      port: 5173,
      proxy: {
        "/api": {
          target: engineTarget,
          changeOrigin: true,
        },
        "/health": {
          target: engineTarget,
          changeOrigin: true,
        },
      },
    },
  };
});
