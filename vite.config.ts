import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/on-the-fly-energy-landing/',
  // Remove the base path for universal compatibility
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});
