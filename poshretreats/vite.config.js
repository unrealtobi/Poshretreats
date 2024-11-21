import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/', // Root-relative path for Render deployment
  build: {
    outDir: 'dist', // Ensure the build output directory is 'dist'
    sourcemap: true, // Optional for debugging
  },
});
