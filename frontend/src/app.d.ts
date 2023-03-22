// See https://kit.svelte.dev/docs/types#app

// for information about these interfaces
declare global {
	namespace App {
		interface Error {
			code: string;
        }
		// interface Locals {}
		// interface PageData {}
		// interface Platform {}

	}

	namespace svelteHTML {
		interface HTMLAttributes {
			'on:outclick'?: (event: CustomEvent) => void;
		}
	}
}

export {};
