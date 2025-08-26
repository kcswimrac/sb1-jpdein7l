import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/sb1-jpdein7l/',
  // Remove the base path for universal compatibility
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});
