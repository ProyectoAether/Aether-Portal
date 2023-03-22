import type { Ontology } from '$lib/assets/types';
import type { SearchOptions, SearchParams } from './search';
import { classSearchStore, filteredClasses, reset as resetSearch } from './search';
import { get } from 'svelte/store';

describe('derived store', () => {
	beforeEach(() => {
		resetSearch();
	});
	afterEach(() => {
		resetOptions();
	});
	const resetOptions = () => {
		searchOptions = defaultOptions;
	};
	const defaultOptions: SearchOptions = {
		owlClass: true,
		owlDatatypeProperty: true,
		owlObjectProperty: true,
		owlNamedIndividual: true,
		alphabeticalOrder: true,
		limit: 10,
		offset: 0
	};
	let searchOptions: SearchOptions = {
		owlClass: true,
		owlDatatypeProperty: true,
		owlObjectProperty: true,
		owlNamedIndividual: true,
		alphabeticalOrder: true,
		limit: 10,
		offset: 0
	};
	const ontologies: Ontology = {
		ont1: [{ subject: 'foo', predicate: 'bar', object: 'baz' }],
		ont2: [
			{ subject: 'foo', predicate: 'world', object: 'hello' },
			{ subject: 'foo', predicate: 'world', object: 'hello' }
		]
	};
	it('filters and set offset to 0 if it does not return anything in the current offset', () => {
		searchOptions.offset = 0;
		searchOptions.limit = 1;
		const input: SearchParams = {
			searchQuery: 'foo',
			data: ontologies,
			options: searchOptions
		};
		classSearchStore.set(input);
		const updatedInput: SearchParams = {
			searchQuery: 'does not match to anything',
			data: ontologies,
			options: searchOptions
		};
		classSearchStore.update(() => updatedInput);
		expect(get(filteredClasses)).toStrictEqual([]);
		expect(get(classSearchStore).options.offset).toBe(0);
	});
	it('filters and eliminates duplicates', () => {
		const input: SearchParams = {
			searchQuery: 'foo',
			data: ontologies,
			options: searchOptions
		};
		classSearchStore.set(input);
		expect(get(filteredClasses)).toStrictEqual([
			{ subject: 'foo', predicate: 'bar', object: 'baz' },
			{ subject: 'foo', predicate: 'world', object: 'hello' }
		]);
	});
	it('does not match anything', () => {
		const input: SearchParams = {
			searchQuery: 'filter',
			data: ontologies,
			options: searchOptions
		};
		classSearchStore.set(input);
		expect(get(filteredClasses)).toStrictEqual([]);
	});
});
