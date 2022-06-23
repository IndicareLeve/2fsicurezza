import preprocess from 'svelte-preprocess';
import adapter from '@sveltejs/adapter-netlify';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: preprocess({
		postcss: true
	}),
	kit: {
		adapter: adapter(),
		prerender: {
			concurrency: 1,
			crawl: true,
			default: true,
			enabled: true,
			entries: ['*'],
			onError: 'fail'
		}
	}
};

export default config;
