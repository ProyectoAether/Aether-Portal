import { OWL_CLASS, RDF_TYPE } from '$lib/uri';
import { ontologies } from '$lib/utils';
import { readable } from 'svelte/store';
import indexes from '../assets/index.json';

export const numTriples = readable<number>(ontologies.length);

export const numClasses = readable<number>(
	ontologies.filter((t) => t.predicate === RDF_TYPE && t.object === OWL_CLASS).length
);
export const numOntologies = readable<number>(Object.keys(indexes).length);
