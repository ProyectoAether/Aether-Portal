import { screen, render } from '@testing-library/svelte';
import Stats from './stats.svelte';
it('shows number of triples', async () => {
	render(Stats);
	expect(screen.getByText('Number of Triples')).toBeInTheDocument();
	const div = screen.getByTestId('num-triples');
	expect(Number(div.textContent)).toBe(836);
});

it('shows number of classes', async () => {
	render(Stats);
	expect(screen.getByText('Number of Classes')).toBeInTheDocument();
	const div = screen.getByTestId('num-classes');
	expect(Number(div.textContent)).toBe(116);
});

it('shows number of ontologies', async () => {
	render(Stats);
	expect(screen.getByText('Number of Ontologies')).toBeInTheDocument();
	const div = screen.getByTestId('num-ontologies');
	expect(Number(div.textContent)).toBe(7);
});
