import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [
    react(),
  ],
  resolve: {
    alias: {
      '@': path.resolve('src'), // Use 'src' directly
    },
  },
  server: {
    open: true, // Automatically open the app in the browser on startup
    port: 3000, // Customize the port (optional)
    hmr: true, // Hot module replacement for faster development
  },
  build: {
    target: 'esnext', // Use the latest JavaScript syntax
    outDir: 'dist', // Output directory for build
    assetsDir: 'assets', // Directory for static assets
    sourcemap: false, // Disable sourcemaps in production for smaller build size (optional)
    minify: 'esbuild', // Use esbuild for minification, it's faster than Terser
    chunkSizeWarningLimit: 500, // Set a custom chunk size warning limit (in KB)
    rollupOptions: {
      output: {
        manualChunks: (id) => {
          if (id.includes('node_modules')) {
            // Split vendor code into separate chunk
            return 'vendor';
          }
        },
      },
    },
  },
  optimizeDeps: {
    // Pre-bundle dependencies for faster startup time
    include: ['react', 'react-dom'],
  },
  esbuild: {
    treeShaking: true, // Ensure tree-shaking is enabled in production
  },
});
