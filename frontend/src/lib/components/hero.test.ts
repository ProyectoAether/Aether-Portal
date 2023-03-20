import { render, screen } from '@testing-library/svelte';
import Hero from './hero.svelte';

it('show text directly', async () => {
	const description =
		'This is an ontology portal that allows for quick search and preview of the most relevant ontologies of the Aether project.';
	render(Hero, { show: true });
	expect(screen.queryByText(description)).toBeInTheDocument();
});

it('does not show text directly', async () => {
	const description =
		'This is an ontology portal that allows for quick search and preview of the most relevant ontologies of the Aether project.';
	render(Hero);
	expect(screen.queryByText(description)).not.toBeInTheDocument();
});

it('shows aether logo', async () => {
	const { container } = render(Hero);
	expect(container.querySelector('#aether-icon')).toBeInTheDocument();
});
