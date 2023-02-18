import { writable, derived } from 'svelte/store';
import Fuse  from 'fuse.js';
import jsonLD from '$lib/assets/ontology.json'
import type {OntologyGraph} from '$lib/assets/types'

export const searchQuery = writable("");
export const filteredData = derived(searchQuery, $searchQuery => searchHandler($searchQuery, jsonLD['@graph']))

function searchHandler(searchQuery:string, data : OntologyGraph[]  ) {
	const fuse = new Fuse(data, {
		keys: ['@graph.@id', '@id']
	});
	return fuse.search(searchQuery);
}
