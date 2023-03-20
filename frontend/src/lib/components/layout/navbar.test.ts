import { render, screen } from '@testing-library/svelte';
import Navbar from './navbar.svelte';

it('shows all the text', async () => {
	render(Navbar);
	expect(screen.getByText('Show all'));
	expect(screen.getByText('Ontology Portal'));
});

describe('navigations', async () => {
	it('navigation to /ontologies', async () => {
		render(Navbar);
		const link = screen.getByTestId('home-link');
		expect(link).toBeInTheDocument();
	});

	it('navigation to /', async () => {
		render(Navbar);
		const link = screen.getByTestId('home-link');
		expect(link).toBeInTheDocument();
	});
});
