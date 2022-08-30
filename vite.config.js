import { defineConfig } from "vite";
import legacy from "@vitejs/plugin-legacy";

export default defineConfig({
  plugins: [legacy()],
  server: {
    port: 5173,
  },
  build: {
    outDir: "dist",
    sourceMap: true,
    manifest: true,
    rollupOptions: {
      input: "/src/client/main.ts",
    },
  },
});
