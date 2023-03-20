import preprocess from 'svelte-preprocess';
import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/kit/vite';

const DEPLOY_PLATFORM = process.env.NODE_ENV === 'production' ? '/Aether-Portal' : '';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://kit.svelte.dev/docs/integrations#preprocessors
	// for more information about preprocessors
	preprocess: [
		vitePreprocess(),
		preprocess({
			postcss: true
		})
	],

	kit: {
		adapter: adapter(),
		paths: {
			base: DEPLOY_PLATFORM
		},
		prerender: {
			handleMissingId: 'warn'
		}
	}
};

export default config;
