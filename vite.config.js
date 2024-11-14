import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

export default defineConfig({
  plugins: [sveltekit()],
  resolve: {
    alias: {
      '@lib': '/src/lib', // Alias to resolve imports from the 'src/lib' folder
    },
  },
});
