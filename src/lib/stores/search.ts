import { writable, derived } from 'svelte/store';
import ontologies from '$lib/assets/ontologies.json';
import { SearchFilter, TripleSorter, type TypesFilter } from '$lib/utils';
import type { Ontology, Triple } from '$lib/assets/types';
import { typeURI } from '$lib/assets/types';
import { getOntologiesTriples } from '$lib/utils';
import { RDF_TYPE } from '$lib/uri';

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
	ontologies: Ontology;
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
	searchStore.set({
		ontologies: ontologies,
		searchQuery: '',
		options: defaultSearchOptions
	});
export const searchStore = writable<SearchParams>({
	ontologies: ontologies,
	searchQuery: '',
	options: defaultSearchOptions
});
export const filteredData = derived(searchStore, searchHandler);

function searchHandler(searchStore: SearchParams): Triple[] {
	const { searchQuery, ontologies, options } = searchStore;
	const triples: Triple[] = getOntologiesTriples(ontologies);
	const filterer = new SearchFilter(triples);
	const typesToShow: TypesFilter = {
		owlClass: options.owlClass,
		owlDatatypeProperty: options.owlDatatypeProperty,
		owlObjectProperty: options.owlObjectProperty,
		owlNamedIndividual: options.owlNamedIndividual
	};

	const queryFiltered = filterer
		.filterByType(typesToShow, typeURI, RDF_TYPE)
		.filterByQuery(searchQuery)
		.getResult();

	const sorter = new TripleSorter(queryFiltered);

	const result = options.alphabeticalOrder
		? sorter.alphabeticalSort().getResult()
		: sorter.reverseAlphabeticalSort().getResult();

	if (
		result.slice(options.offset * options.limit, (options.offset + 1) * options.limit).length <= 0
	) {
		options.offset = 0;
	}
	return result;
}
