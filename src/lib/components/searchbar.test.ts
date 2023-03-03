import { render, screen } from '@testing-library/svelte';
import Searchbar from './searchbar.svelte';
import { expect } from 'vitest';
import userEvent from '@testing-library/user-event';

it('shows shortcut hint', async () => {
	render(Searchbar, { compacted: false });
	expect(screen.getByTestId('shortcut-hint')).toBeInTheDocument();
});
it('shows search header', async () => {
	render(Searchbar, { compacted: false });
	expect(screen.getByText('Search')).toBeInTheDocument();
});

describe('ontology filter button', async () => {
	it('shows the ontology placeholder on hover', async () => {
		render(Searchbar, { compacted: false });
		const ontologyFilterBtn = screen.getByTestId('ontology-filter');
		expect(ontologyFilterBtn).toBeInTheDocument();
		const user = userEvent.setup();
		await user.hover(ontologyFilterBtn);
		expect(screen.getByTestId('search-input').getAttribute('placeholder')).toBe(
			'http://www.w3.org/2002/07/owl#Ontology'
		);
	});
	it('writes the ontology filter on click', async () => {
		render(Searchbar, { compacted: false });
		const ontologyFilterBtn = screen.getByTestId('ontology-filter');
		expect(ontologyFilterBtn).toBeInTheDocument();
		const user = userEvent.setup();
		await user.click(ontologyFilterBtn);
		expect((screen.getByTestId('search-input') as HTMLInputElement).value).toBe(
			'http://www.w3.org/2002/07/owl#Ontology'
		);
	});
	it('resets the ontology placeholder on leave', async () => {
		render(Searchbar, { compacted: false });
		const ontologyFilterBtn = screen.getByTestId('ontology-filter');
		expect(ontologyFilterBtn).toBeInTheDocument();
		const user = userEvent.setup();
		await user.hover(ontologyFilterBtn);
		expect(screen.getByTestId('search-input').getAttribute('placeholder')).toBe(
			'http://www.w3.org/2002/07/owl#Ontology'
		);
		await user.unhover(ontologyFilterBtn);

		expect(screen.getByTestId('search-input').getAttribute('placeholder')).toBe(
			'Search class or ontology'
		);
	});
});
