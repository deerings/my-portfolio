import adapter from '@sveltejs/adapter-static';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter({
			fallback: '404.html'
		}),
		paths: {
			base: process.env.BASE_PATH || '/my-portfolio' // Set BASE_PATH to '/my-portfolio'
		},
	},
};

export default config;