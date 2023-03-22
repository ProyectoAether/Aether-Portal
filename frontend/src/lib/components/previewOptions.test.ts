import { render, screen } from '@testing-library/svelte';
import PreviewOptions from './previewOptions.svelte';

describe('preview options', async () => {
	const view = 0;
	const compacted = false;
	it('shows a table view radio button', async () => {
		render(PreviewOptions, { view, compacted });
		expect(screen.getByTestId('table-view')).toBeInTheDocument();
	});

	it('shows a hierarchy view radio button', async () => {
		render(PreviewOptions, { view, compacted });
		expect(screen.getByTestId('hierarchy-view')).toBeInTheDocument();
	});

	it('shows a compacted URI toggle', async () => {
		render(PreviewOptions, { view, compacted });
		expect(screen.getByTestId('compact-toggle')).toBeInTheDocument();
	});
});
