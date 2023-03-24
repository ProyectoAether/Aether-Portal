import preprocess from 'svelte-preprocess';
import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/kit/vite';
import indexFile from './src/lib/assets/ontologies/index.json' assert { type: "json" };

const entries = Object.keys(indexFile).map((id) => `/ontologies/${id}`);
entries.push("/", "/submit", "/ontologies", "/search")

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
		alias: {
			$route: 'src/routes'
		},
		adapter: adapter(),
		prerender: {
			entries
		}
	}
};

export default config;
