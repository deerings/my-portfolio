import adapter from '@sveltejs/adapter-static';

/** @type {import('@sveltejs/kit').Config} */
const config = {
  kit: {
    adapter: adapter({
      pages: 'build',
      assets: 'build',
      fallback: '404.html',
      precompress: false,
      strict: true,
      trailingSlash: 'always',
    }),
    paths: {
      base: process.env.NODE_ENV === 'production' ? '/my-portfolio' : '',
    }
  }
};
export default config;