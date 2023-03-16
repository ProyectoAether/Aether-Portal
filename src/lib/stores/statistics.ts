import { OWL_CLASS, RDF_TYPE } from '$lib/assets/data';
import { ontologies } from '$lib/utils';
import { readable } from 'svelte/store';
import indexes from '../assets/ontologies/index.json';

export const numTotalTriples = readable<number>(ontologies.length);

export const numTotalClasses = readable<number>(
	ontologies.filter((t) => t.predicate === RDF_TYPE && t.object === OWL_CLASS).length
);
export const numOntologies = readable<number>(Object.keys(indexes).length);

