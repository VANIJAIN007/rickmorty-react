import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,         // allows using global test functions like `test`, `expect`
    environment: 'jsdom',  // provides a DOM-like environment for React components
    setupFiles: './vitest.setup.js', // optional setup file
  },
});
