import { render, screen } from '@testing-library/svelte';
import SearchOptions from './searchOptions.svelte';

it('shows all options', () => {
	render(SearchOptions, {
		compacted: false,
		alphabeticalOrder: false,
		owlClass: false,
		owlDatatypeProperty: false,
		owlObjectProperty: false,
		owlIndividuals: false
	});
	screen.getByText('Classes');
	screen.getByText('Datatype Properties');
	screen.getByText('Object Properties');
	screen.getByText('Individuals');
	screen.getByText('Compact');
	screen.getByText('A-Z');
	screen.getByText('Z-A');
});
