import type { IndexFile, Triple } from '$lib/assets/types';
import { derived, writable } from 'svelte/store';
import indexes from '$lib/assets/index.json';

export const imports = writable<string[]>([]);
export const ontologyURI = writable<string>('');
export const ontologies = derived([imports, ontologyURI], getOntologies);
export const baseOntology = derived(ontologyURI, getOntology);

function getOntology(uri: string): Promise<Triple[]> {
	return import(`../assets/${(indexes as IndexFile)[uri]}.json`);
}

/**
 * @param data - an array with the list of imported ontologies' URI and the
 *  base ontology's URI
 * @returns The array with all ontologies URI
 */
async function getOntologies(data: [string[], string]): Promise<any[]> {
	if (data[1] === '') {
		return [[], []];
	}
	const base = getOntology(data[1]);
	const promises = data[0].map(
		(el) => import(`../assets/${(indexes as IndexFile)[el + '/']}.json`)
	);
	promises.push(base);
	return [await Promise.all(promises), await Promise.all([base])];
}
