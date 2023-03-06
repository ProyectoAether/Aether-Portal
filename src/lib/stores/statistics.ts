import ontologies from '$lib/assets/ontologies.json';
import type { Triple } from '$lib/assets/types';
import { OWL_CLASS, RDF_TYPE } from '$lib/uri';
import { readable } from 'svelte/store';

const triples: Triple[] = Object.values(ontologies).reduce((acc, curr) => {
	acc.push(...curr);
	return acc;
}, []);

export const numTriples = readable<number>(triples.length);

export const numClasses = readable<number>(
	triples.filter((t) => t.predicate === RDF_TYPE && t.object === OWL_CLASS).length
);
export const numOntologies = readable<number>(Object.keys(ontologies).length);
