import { writable, derived } from 'svelte/store';
import {
	indexFile,
<<<<<<< HEAD
	namespacesFile,
=======
>>>>>>> develop
	OWL_CLASS,
	OWL_DATATYPE_PROPERTY,
	OWL_NAMED_INDIVIDUAL,
	OWL_OBJECT_PROPERTY,
	OWL_ONTOLOGY,
<<<<<<< HEAD
	RDF_TYPE,
	type Index,
	type OntologyID,
	type OWLType,
	type Triple
} from '$lib/assets/data';
import type { Quad } from '$lib/assets/data';
import Fuse from 'fuse.js';
import { compactURI } from '$lib/utils';

function searchByQuery(
	query: string,
	data: Quad[],
	typeGuard: (el: Quad) => boolean,
	keys: string[]
): Quad[] {
	const filteredByType = data.filter((el) => typeGuard(el));
	if (query.trim().length === 0) {
		return filteredByType;
	}
	const fuse = new Fuse(filteredByType, { keys, findAllMatches: true });

	return fuse.search(query).map((el) => el.item);
=======
	type Index,
	type OntologyURI,
	type Triple
} from '$lib/assets/data';
import type { Quad } from '$lib/assets/data';
import fuzzysort from 'fuzzysort';
import { QuadSorter } from '$lib/utils';

function filter(query: string, data: Quad[], guard: (el: Quad) => boolean, keys: string[]): Quad[] {
	return fuzzysort
		.go(query, data, { keys, all: true })
		.filter((el) => el[0] && guard(el.obj) && (el.score === -Infinity || el.score > -300))
		.map((el) => el.obj);
>>>>>>> develop
}

async function getAllOntologies(index: Index): Promise<Quad[][]> {
	const imports = Object.entries(index).map(async ([uri, file]) => {
		const module = await import(`../../lib/assets/ontologies/${file.filename}.json`);
		const triples = module.default as Triple[];
<<<<<<< HEAD
		return triples.map((el) => ({ ...el, ontologyID: uri } as Quad));
=======
		return triples.map((el) => ({ ...el, ontology: uri } as Quad));
>>>>>>> develop
	});
	return Promise.all(imports);
}
const ontologies = (await Promise.all(await getAllOntologies(indexFile))).flat();

export interface SearchOptions {
<<<<<<< HEAD
=======
	owlClass: true;
	owlDatatypeProperty: true;
	owlObjectProperty: true;
	owlNamedIndividual: true;
>>>>>>> develop
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
<<<<<<< HEAD
=======
	owlClass: true,
	owlDatatypeProperty: true,
	owlObjectProperty: true,
	owlNamedIndividual: true,
>>>>>>> develop
	alphabeticalOrder: true,
	limit: 10,
	offset: 0
};
export const reset = () =>
<<<<<<< HEAD
	searchStore.set({
=======
	classSearchStore.set({
>>>>>>> develop
		data: ontologies,
		searchQuery: '',
		options: defaultSearchOptions
	});
<<<<<<< HEAD
export const searchStore = writable<SearchParams>({
=======
export const classSearchStore = writable<SearchParams>({
>>>>>>> develop
	data: ontologies,
	searchQuery: '',
	options: structuredClone(defaultSearchOptions)
});
export const ontologySearchStore = writable<SearchParams>({
	data: ontologies,
	searchQuery: '',
	options: structuredClone(defaultSearchOptions)
});

<<<<<<< HEAD
const commonVocabNamespaces = [
	'https://brickschema.org/schema/Brick#',
	'http://www.w3.org/ns/csvw#',
	'http://www.w3.org/ns/dcat#',
=======
const namespaces = [
	'https://brickschema.org/schema/Brick#',
	'http://www.w3.org/ns/csvw#',
	'http://purl.org/dc/elements/1.1/',
	'http://www.w3.org/ns/dcat#',
	'http://purl.org/dc/dcmitype/',
	'http://purl.org/dc/terms/',
	'http://purl.org/dc/dcam/',
	'http://purl.org/net/opmv/ns#',
>>>>>>> develop
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
<<<<<<< HEAD
	'http://www.w3.org/XML/1998/namespace',
	'https://w3id.org/obda/vocabulary#',
	'http://creativecommons.org/ns#',
	'https://doi.org/',
	'http://www.w3.org/2003/11/swrl#',
	'http://swrl.stanford.edu/ontologies/3.3/swrla.owl#',
	'http://www.w3.org/2003/11/swrlb#'
];

export const filtered = derived(searchStore, searchHandler);
export const filteredOntologies = derived(ontologySearchStore, ontologySearchHandler);

export interface SearchResult {
	uri: string;
	ontologyID: OntologyID;
	type: OWLType;
}

function isCommonVocab(element: string): boolean {
	for (const n of commonVocabNamespaces) {
=======
	'http://www.w3.org/XML/1998/namespace'
];

export const filteredClasses = derived(classSearchStore, classSearchHandler);
export const filteredOntologies = derived(ontologySearchStore, ontologySearchHandler);

export interface ClassSearchResult {
	uri: string;
	ontologyURI: string;
}

export interface OntologySearchResult {
	uri: OntologyURI;
	label?: string;
	description?: string;
}

function isCommonVocab(element: string): boolean {
	for (const n of namespaces) {
>>>>>>> develop
		if (element.includes(n)) {
			return true;
		}
	}
	return false;
}

<<<<<<< HEAD
function ontologySearchHandler(searchStore: SearchParams): OntologyID[] {
	const { searchQuery, data: ontologies } = searchStore;
	const filtered = searchByQuery(
		searchQuery,
		ontologies,
		(el) =>
			!isCommonVocab(el.subject) &&
			el.predicate === RDF_TYPE &&
			(el.object === OWL_ONTOLOGY ||
				el.object === OWL_NAMED_INDIVIDUAL ||
				el.object === OWL_DATATYPE_PROPERTY ||
				el.object === OWL_OBJECT_PROPERTY),
		['subject', 'predicate', 'object']
	);

	const result = filtered.map((el) => ({ ...el, subject: compactURI(el.subject, namespacesFile) }));

	return Array.from(new Set<OntologyID>(result.map((el) => el.ontologyID) as OntologyID[]));
}

function searchHandler(searchStore: SearchParams): SearchResult[] {
	const { searchQuery, data: ontologies } = searchStore;
	const filtered = searchByQuery(
		searchQuery,
		ontologies,
		(el) =>
			el.predicate === RDF_TYPE &&
			!isCommonVocab(el.subject) &&
			(el.object === OWL_DATATYPE_PROPERTY ||
				el.object === OWL_OBJECT_PROPERTY ||
				el.object === OWL_NAMED_INDIVIDUAL ||
				el.object === OWL_CLASS),
		['subject', 'object']
	);
	return filtered.map((el) => ({
		uri: el.subject,
		ontologyID: el.ontologyID,
		type: el.object as OWLType
	}));
=======
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
		uri: el as OntologyURI
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
>>>>>>> develop
}
