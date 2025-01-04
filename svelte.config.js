import { vitePreprocess } from '@sveltejs/vite-plugin-svelte'; // Correct import
import sveltePreprocess from 'svelte-preprocess';

/** @type {import('@sveltejs/kit').Config} */
const config = {
  kit: {
    // Configure base path for GitHub Pages
    paths: {
      base: '/my-portfolio',  // Make sure this matches your GitHub repository name
    },
    prerender: {
      // Handle 404 errors gracefully
      handleHttpError: ({ status }) => {
        if (status === 404) {
          return { status: 200, body: 'Page not found' }; // Handle 404 errors
        }
      },
    },
  },
  preprocess: [
    vitePreprocess(),
    sveltePreprocess(),
  ],
};

export default config;
