import { OWL_CLASS, OWL_ONTOLOGY, RDF_TYPE } from '$lib/assets/data';
import { render, screen } from '@testing-library/svelte';
import TriplesTable from './triplesTable.svelte';

describe('Triples Table', async () => {
	const triples = [
		{ subject: 'ontology', predicate: RDF_TYPE, object: OWL_ONTOLOGY },
		{ subject: 'class', predicate: RDF_TYPE, object: OWL_CLASS },
		{ subject: 'class2', predicate: RDF_TYPE, object: OWL_CLASS }
	];

	it('shows inspect button on ontologies', async () => {
		const offset = 0;
		const limit = 10;
		const compacted = false;
		render(TriplesTable, { triples, elementsPerPage: limit, offset, compacted });
		expect(screen.getByText('Inspect')).toBeInTheDocument();
	});

	it('it compacts URI', async () => {
		const offset = 0;
		const limit = 10;
		const compacted = true;
		render(TriplesTable, { triples, elementsPerPage: limit, offset, compacted });
		expect(screen.getAllByText('owl:Class')[0]).toBeInTheDocument();
	});
	it('it only shows triples in the limit', async () => {
		const offset = 0;
		const limit = 2;
		const compacted = false;
		render(TriplesTable, { triples, elementsPerPage: limit, offset, compacted });
		expect(screen.queryByText('class2')).not.toBeInTheDocument();
	});
	it('it only shows triples in the offset-limit range', async () => {
		const offset = 1;
		const limit = 2;
		const compacted = true;
		render(TriplesTable, { triples, elementsPerPage: limit, offset, compacted });
		expect(screen.queryByText('ontology')).not.toBeInTheDocument();
		expect(screen.queryByText('class')).not.toBeInTheDocument();
	});
});
