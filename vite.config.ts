import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import * as path from "path";
import env from "./env.dev";
// https://vitejs.dev/config/
export default defineConfig({
  server: {
    port: 5173,
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  plugins: [react()],
  define: {
    ...env,
  },
});
