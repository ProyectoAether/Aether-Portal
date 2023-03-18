import type { Triple } from '$lib/assets/types';
import { render, screen } from '@testing-library/svelte';
import HierarchyNode from './node.svelte';
describe('Hierarchy node', () => {
	const triples: Triple[] = [
		{
			subject: 'foo',
			predicate: 'http://www.w3.org/1999/02/22-rdf-syntax-ns#type',
			object: 'http://www.w3.org/2002/07/owl#Class'
		},
		{
			subject: 'bar',
			predicate: 'http://www.w3.org/1999/02/22-rdf-syntax-ns#type',
			object: 'http://www.w3.org/2002/07/owl#Class'
		},
		{ subject: 'foo', predicate: 'http://www.w3.org/2000/01/rdf-schema#subClassOf', object: 'bar' }
	];
	it('shows the root classes', async () => {
		render(HierarchyNode, {
			triples: triples,
			data: 'bar',
			level: 0,
			visited: new Set<string>(),
			compacted: false
		});
		expect(screen.getByText('bar')).toBeInTheDocument();
	});

	it('shows the open icon', async () => {
		render(HierarchyNode, {
			triples: triples,
			data: 'bar',
			level: 0,
			visited: new Set<string>(),
			compacted: false
		});
		expect(screen.getByTestId('open-icon')).toBeInTheDocument();
	});

	it('shows the close icon', async () => {
		render(HierarchyNode, {
			triples: triples,
			data: 'bar',
			level: 0,
			show: false,
			visited: new Set<string>(),
			compacted: false
		});
		expect(screen.getByTestId('close-icon')).toBeInTheDocument();
	});

	it('does not show any icon', async () => {
		render(HierarchyNode, {
			triples: [
				{
					subject: 'bar',
					predicate: 'http://www.w3.org/1999/02/22-rdf-syntax-ns#type',
					object: 'http://www.w3.org/2002/07/owl#Class'
				}
			],
			data: 'bar',
			level: 0,
			visited: new Set<string>(),
			compacted: false
		});
		expect(screen.queryByTestId('close-icon')).not.toBeInTheDocument();
		expect(screen.queryByTestId('open-icon')).not.toBeInTheDocument();
	});

	it('does not stackoverflow with reflexive subclass relationship', () => {
		render(HierarchyNode, {
			triples: [
				{
					subject: 'bar',
					predicate: 'http://www.w3.org/1999/02/22-rdf-syntax-ns#type',
					object: 'http://www.w3.org/2002/07/owl#Class'
				},

				{
					subject: 'bar',
					predicate: 'http://www.w3.org/2000/01/rdf-schema#subClassOf',
					object: 'bar'
				}
			],
			data: 'bar',
			level: 0,
			visited: new Set<string>(),
			compacted: false
		});
	});
});
