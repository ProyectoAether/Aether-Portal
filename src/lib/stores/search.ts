import { writable, derived } from 'svelte/store';
import ontologies from '$lib/assets/ontologies.json';
import { compactURI } from '$lib/utils';
import type { Triple, Ontology } from '$lib/assets/types';
import { typeURI, rdfsType } from '$lib/assets/types';

interface SearchOptions {
	owlClass: true;
	owlDatatypeProperty: true;
	owlObjectProperty: true;
	owlNamedIndividual: true;
	isCompacted: boolean;
	limit: number;
	offset: number;
	alphabeticalOrder: boolean;
}

interface SearchParams {
	ontologies: Ontology;
	searchQuery: string;
	options: SearchOptions;
}

const defaultSearchOptions: SearchOptions = {
	owlClass: true,
	owlDatatypeProperty: true,
	owlObjectProperty: true,
	owlNamedIndividual: true,
	isCompacted: true,
	alphabeticalOrder: false,
	limit: 10,
	offset: 0
};
export const searchStore = writable<SearchParams>({
	ontologies: ontologies,
	searchQuery: '',
	options: defaultSearchOptions
});
export const filteredData = derived(searchStore, ($searchStore) => searchHandler($searchStore));

function filterByType(data: Triple[], options: SearchOptions): Triple[] {
	const elements = data.reduce((acc, curr) => {
		if (!acc.has(curr.subject)) {
			acc.set(curr.subject, true);
		}
		return acc;
	}, new Map<string, boolean>());
	for (const curr of data) {
		if (!options.owlClass && curr.object === typeURI.owlClass && curr.predicate === rdfsType) {
			elements.delete(curr.subject);
		}
		if (
			!options.owlDatatypeProperty &&
			curr.object === typeURI.owlDatatypeProperty &&
			curr.predicate === rdfsType
		) {
			elements.delete(curr.subject);
		}
		if (
			!options.owlObjectProperty &&
			curr.object === typeURI.owlObjectProperty &&
			curr.predicate === rdfsType
		) {
			elements.delete(curr.subject);
		}
		if (
			options.owlNamedIndividual &&
			curr.object === typeURI.owlNamedIndividual &&
			curr.predicate === rdfsType
		) {
			elements.delete(curr.subject);
		}
	}
	return data.filter((d) => elements.has(d.subject));
}

function getCompactedURI(data: Triple[]): Triple[] {
	return data.map((d) => {
		return {
			subject: compactURI(d.subject),
			predicate: compactURI(d.predicate),
			object: compactURI(d.object)
		};
	});
}

function searchHandler(searchStore: SearchParams) {
	const { searchQuery, ontologies, options } = searchStore;
	const triples: Triple[] = Object.values(ontologies).reduce((acc, curr) => {
		acc.push(...curr);
		return acc;
	}, []);
	const typeFiltered = filterByType(triples, options);
	const queryFiltered: Triple[] = typeFiltered
		.filter(
			(el) =>
				el.subject.toLowerCase().includes(searchQuery.toLowerCase()) ||
				el.predicate.toLowerCase().includes(searchQuery.toLowerCase()) ||
				el.object.toLowerCase().includes(searchQuery.toLowerCase())
		)

	const compacted = options.isCompacted ? getCompactedURI(queryFiltered) : queryFiltered;

	const result = compacted.sort((a, b) => {
		if (!options.alphabeticalOrder) {
			return (a.subject + a.predicate + a.object).toLowerCase() >
				(b.subject + b.predicate + b.object).toLowerCase()
				? 1
				: -1;
		} else {
			return (a.subject + a.predicate + a.object).toLowerCase() <=
				(b.subject + b.predicate + b.object).toLowerCase()
				? 1
				: -1;
		}
	});
	return result;
}
