import { render, screen } from '@testing-library/svelte';
import MetadataTableRow from '$lib/components/metadataTableRow.svelte';

it('shows value', () => {
	render(MetadataTableRow, { value: 'a title' });
	expect(screen.getByText('a title')).toBeInTheDocument();
});

it('shows value array', () => {
	render(MetadataTableRow, { value: ['a title', 'second title'] });
	expect(screen.getByText('a title')).toBeInTheDocument();
	expect(screen.getByText('second title')).toBeInTheDocument();
});
