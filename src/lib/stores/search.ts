import { writable, derived } from 'svelte/store';
import {
	OWL_CLASS,
	OWL_DATATYPE_PROPERTY,
	OWL_NAMED_INDIVIDUAL,
	OWL_OBJECT_PROPERTY,
	OWL_ONTOLOGY
} from '$lib/assets/data';
import type { Quad } from '$lib/assets/data';
import indexes from '$lib/assets/ontologies/index.json';
import fuzzysort from 'fuzzysort';
import { ontologies, QuadSorter } from '$lib/utils';

function filter(query: string, data: Quad[], guard: (el: Quad) => boolean, keys: string[]): Quad[] {
	return fuzzysort
		.go(query, data, { keys, all: true })
		.filter((el) => el[0] && guard(el.obj) && (el.score === -Infinity || el.score > -300))
		.map((el) => el.obj);
}

export interface SearchOptions {
	owlClass: true;
	owlDatatypeProperty: true;
	owlObjectProperty: true;
	owlNamedIndividual: true;
	limit: number;
	offset: number;
	alphabeticalOrder: boolean;
}

export interface SearchParams {
	data: Quad[];
	searchQuery: string;
	options: SearchOptions;
}

const defaultSearchOptions: SearchOptions = {
	owlClass: true,
	owlDatatypeProperty: true,
	owlObjectProperty: true,
	owlNamedIndividual: true,
	alphabeticalOrder: true,
	limit: 10,
	offset: 0
};
export const reset = () =>
	classSearchStore.set({
		data: ontologies,
		searchQuery: '',
		options: defaultSearchOptions
	});
export const classSearchStore = writable<SearchParams>({
	data: ontologies,
	searchQuery: '',
	options: structuredClone(defaultSearchOptions)
});
export const ontologySearchStore = writable<SearchParams>({
	data: ontologies,
	searchQuery: '',
	options: structuredClone(defaultSearchOptions)
});

const namespaces = [
	'https://brickschema.org/schema/Brick#',
	'http://www.w3.org/ns/csvw#',
	'http://purl.org/dc/elements/1.1/',
	'http://www.w3.org/ns/dcat#',
	'http://purl.org/dc/dcmitype/',
	'http://purl.org/dc/terms/',
	'http://purl.org/dc/dcam/',
	'http://purl.org/net/opmv/ns#',
	'http://usefulinc.com/ns/doap#',
	'http://xmlns.com/foaf/0.1/',
	'http://www.opengis.net/ont/geosparql#',
	'http://www.w3.org/ns/odrl/2/',
	'http://www.w3.org/ns/org#',
	'http://www.w3.org/ns/dx/prof/',
	'http://www.w3.org/ns/prov#',
	'http://purl.org/linked-data/cube#',
	'https://schema.org/',
	'http://www.w3.org/ns/shacl#',
	'http://www.w3.org/2004/02/skos/core#',
	'http://www.w3.org/ns/sosa/',
	'http://www.w3.org/ns/ssn/',
	'http://www.w3.org/2006/time#',
	'http://purl.org/vocab/vann/',
	'http://rdfs.org/ns/void#',
	'http://www.w3.org/2002/07/owl#',
	'http://www.w3.org/1999/02/22-rdf-syntax-ns#',
	'http://www.w3.org/2000/01/rdf-schema#',
	'http://www.w3.org/2001/XMLSchema#',
	'http://www.w3.org/XML/1998/namespace'
];

export const filteredClasses = derived(classSearchStore, classSearchHandler);
export const filteredOntologies = derived(ontologySearchStore, ontologySearchHandler);

export interface ClassSearchResult {
	uri: string;
	ontologyURI: string;
}

export interface OntologySearchResult {
	uri: string;
	label?: string;
	description?: string;
}

function isCommonVocab(element: string): boolean {
	for (const n of namespaces) {
		if (element.includes(n)) {
			return true;
		}
	}
	return false;
}

function getLabelAndDescription(uri: string): {
	label: string | undefined;
	description: string | undefined;
} {
	return {
		label: indexes[uri].label,
		description: indexes[uri].description
	};
}

function ontologySearchHandler(searchStore: SearchParams): OntologySearchResult[] {
	const { searchQuery, data: ontologies, options } = searchStore;
	const queryFiltered = filter(
		searchQuery,
		ontologies,
		(el) =>
			(el.object === OWL_ONTOLOGY ||
				el.object === OWL_NAMED_INDIVIDUAL ||
				el.object === OWL_DATATYPE_PROPERTY ||
				el.object === OWL_OBJECT_PROPERTY) &&
			!isCommonVocab(el.subject),
		['subject', 'predicate', 'object']
	);

	const sorter = new QuadSorter(queryFiltered);

	const sortedResult = options.alphabeticalOrder
		? sorter.alphabeticalSort().getResult()
		: sorter.reverseAlphabeticalSort().getResult();

	const uris = new Set(sortedResult.map((el) => el.ontology));
	const results = Array.from(uris).map((el) => ({
		uri: el,
		...getLabelAndDescription(el)
	}));
	return results;
}

function classSearchHandler(searchStore: SearchParams): ClassSearchResult[] {
	const { searchQuery, data: ontologies, options } = searchStore;
	const queryFiltered = filter(
		searchQuery,
		ontologies,
		(el) => el.object === OWL_CLASS && !isCommonVocab(el.subject),
		['subject', 'ontologyURI']
	);
	// const typesToShow = {
	// 	owlClass: options.owlClass,
	// 	owlDatatypeProperty: options.owlDatatypeProperty,
	// 	owlObjectProperty: options.owlObjectProperty,
	// 	owlNamedIndividual: options.owlNamedIndividual
	// };
	//
	// const queryFiltered = filterer
	// 	.filterByType(typesToShow, typeURI, RDF_TYPE)
	// 	.filterByQuery(searchQuery
	// 	.getResult();

	const sorter = new QuadSorter(queryFiltered);

	const result = options.alphabeticalOrder
		? sorter.alphabeticalSort().getResult()
		: sorter.reverseAlphabeticalSort().getResult();

	return Array.from(new Set(result.map((el) => ({ uri: el.subject, ontologyURI: el.ontology }))));
}
