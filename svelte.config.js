import adapter from '@sveltejs/adapter-static';

const config = {
  kit: {
    adapter: adapter({
      paths: {
        base: '/my-portfolio',  // Make sure this matches the base path for GitHub Pages
      },
    }),
    // other configurations...
  },
};

export default config;
