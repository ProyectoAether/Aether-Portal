import type { Triple } from '$lib/assets/types';
import { render, screen } from '@testing-library/svelte';
import Pagination from './pagination.svelte';

describe('Pagination', async () => {
	const triples: Triple[] = [
		{ subject: '', object: '', predicate: '' },
		{ subject: '', object: '', predicate: '' },
		{ subject: '', object: '', predicate: '' },
		{ subject: '', object: '', predicate: '' },
		{ subject: '', object: '', predicate: '' },
		{ subject: '', object: '', predicate: '' }
	];
	it('shows the go back button if there is a previous page available', async () => {
		const limit: number = 2;
		let offset: number = 0;
		render(Pagination, { limit, triples, offset });
		expect(screen.queryByTestId('go-back-btn')).not.toBeInTheDocument();
		offset = 1;
		render(Pagination, { limit, triples, offset });
		expect(screen.getByTestId('go-back-btn')).toBeInTheDocument();
	});

	it('shows the go next button if there is a next page available', async () => {
		const limit: number = 2;
		let offset: number = 2;
		render(Pagination, { limit, triples, offset });
		expect(screen.queryByTestId('go-next-btn')).not.toBeInTheDocument();
		offset = 1;
		render(Pagination, { limit, triples, offset });
		expect(screen.getByTestId('go-next-btn')).toBeInTheDocument();
	});
	it('shows the previous page numbers', async () => {
		let limit: number = 2;
		const offset: number = 2;
		render(Pagination, { limit, triples, offset });
		expect(screen.getByText('3')).toBeInTheDocument();
		expect(screen.getByText('2')).toBeInTheDocument();
		expect(screen.getByText('1')).toBeInTheDocument();
	});
	it('does not show previous page numbers', async () => {
		const offset: number = 2;
		const limit = 6;
		render(Pagination, { limit, triples, offset });
		expect(screen.queryByText('3')).not.toBeInTheDocument();
		expect(screen.queryByText('3')).not.toBeInTheDocument();
		expect(screen.getByText('1')).toBeInTheDocument();
	});
	it('shows the next page numbers', async () => {
		const offset: number = 1;
		const limit = 3;
		render(Pagination, { limit, triples, offset });
		expect(screen.queryByText('3')).not.toBeInTheDocument();
		expect(screen.queryByText('2')).toBeInTheDocument();
		expect(screen.getByText('1')).toBeInTheDocument();
	});

	it('does not show the next page numbers', async () => {
		const offset: number = 2;
		const limit = 6;
		render(Pagination, { limit, triples, offset });
		expect(screen.queryByText('3')).not.toBeInTheDocument();
		expect(screen.queryByText('2')).not.toBeInTheDocument();
		expect(screen.getByText('1')).toBeInTheDocument();
	});
});
