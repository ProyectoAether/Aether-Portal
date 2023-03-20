import type { Triple } from '$lib/assets/data';
import { render, screen } from '@testing-library/svelte';
import { expect } from 'vitest';
import Hierarchy from './hierarchy.svelte';

it('always shows the tree', () => {
	render(Hierarchy);
	expect(screen.getByTestId('hierarchy-tree')).toBeInTheDocument();
});

it('shows a class', async () => {
	const triples: Triple[] = [
		{
			subject: 'foo',
			predicate: 'http://www.w3.org/1999/02/22-rdf-syntax-ns#type',
			object: 'http://www.w3.org/2002/07/owl#Class'
		}
	];

	render(Hierarchy, {
		triples
	});
	expect(screen.getByText('foo')).toBeInTheDocument();
});

it('shows nothing', async () => {
	render(Hierarchy, { triples: [] });
	expect(screen.queryByText('does not match')).not.toBeInTheDocument();
});
