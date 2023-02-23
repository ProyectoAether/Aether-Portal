import ontologies from '$lib/assets/ontologies.json';
import type { Triple } from '$lib/assets/types';
import { rdfsType, typeURI } from '$lib/assets/types';
import { readable } from 'svelte/store';

const triples: Triple[] = Object.values(ontologies).reduce((acc, curr) => {
	acc.push(...curr);
	return acc;
}, []);

export const numTriples = readable<number>(triples.length);

export const numClasses = readable<number>(
	triples.filter((t) => t.predicate === rdfsType && t.object === typeURI.owlClass).length
);
export const numOntologies = readable<number>(Object.keys(ontologies).length);
