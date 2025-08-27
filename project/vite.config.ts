import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/sb1-jpdein7l/',
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});
