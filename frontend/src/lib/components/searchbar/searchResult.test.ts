import type { Triple } from '$lib/assets/data';
import { OWL_CLASS, RDF_TYPE } from '$lib/assets/data';
import { screen, render } from '@testing-library/svelte';
import SearchResult from './searchResult.svelte';
it('shows not matching result if there is not result', async () => {
	const compacted = false;
	const results: Triple[] = [];
	const offset = 0;
	const limit = 10;
	render(SearchResult, { compacted, results, offset, limit });
	expect(screen.getByText('No matching results')).toBeInTheDocument();
});

it('shows result if there is result', async () => {
	const compacted = false;
	const results: Triple[] = [{ subject: 'something', predicate: RDF_TYPE, object: OWL_CLASS }];
	const offset = 0;
	const limit = 10;
	render(SearchResult, { compacted, results, offset, limit });
	expect(screen.queryByText('No matching results')).not.toBeInTheDocument();
});
