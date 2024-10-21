import path from "path";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  optimizeDeps: {
    include: ['isomorphic-fetch'], // Include isomorphic-fetch to optimize it for the browser
  },
  ssr: {
    noExternal: ['isomorphic-fetch', 'pexels'], // Exclude libraries that need Node.js features
  },
  // Optionally, set build options for chunk sizes
  build: {
    rollupOptions: {
      output: {
        manualChunks: (id) => {
          if (id.includes('node_modules')) {
            return id.split('node_modules/')[1].split('/')[0].toString(); // Split out vendor chunks
          }
        },
      },
      chunkSizeWarningLimit: 600, // Adjust the chunk size limit if needed
    },
  },
});
