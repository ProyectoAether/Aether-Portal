<script lang="ts">
	import Pagination from '$lib/components/pagination/pagination.svelte';
	import Searchbar from '$lib/components/searchbar/searchbar.svelte';
	import SearchResultComponent from '$lib/components/searchbar/searchResult.svelte';
	import type ColumnTable from 'arquero/dist/types/table/column-table';
	import { searchableFile } from '$lib/assets/data';
	import { escape } from 'arquero';
	import type { SearchResult } from '$lib/components/searchbar/types';
	const search = {
		searchQuery: '',
		options: {
			offset: 0,
			alphabeticalOrder: true,
			limit: 10
		}
	};
	function filterByQuery(data: ColumnTable, query: string): SearchResult[] {
		if (query.length === 0) {
			return data.objects() as SearchResult[];
		}
		return data
			.filter(
				escape((el: SearchResult) => el.uri.toUpperCase().includes(query.toUpperCase()))
			)
			.objects() as SearchResult[];
	}
	$: filtered = filterByQuery(searchableFile, search.searchQuery);
</script>

<svelte:head>
	<title>Search</title>
	<meta
		name="description"
		content="Quickly filter properties and classes of a ontology by their name, 
        it will show a link to redirect the user to the individual's documentation external link"
	/>
</svelte:head>

<main class="min-h-screen">
	<Searchbar title={'Search for Classes and Properties'} bind:searchQuery={search.searchQuery}>
		<section class="container" slot="search-results">
			<SearchResultComponent
				results={filtered}
				offset={search.options.offset}
				limit={search.options.limit}
				bind:alphabeticalOrder={search.options.alphabeticalOrder}
			>
				<h2 slot="fallback" class="h-96 p-10 italic font-bold text-3xl">No matching Classes</h2>
			</SearchResultComponent>
			{#if filtered.length > 0}
				<div class="py-8 flex md:justify-start justify-center mt-auto">
					<Pagination
						totalElements={filtered.length}
						bind:offset={search.options.offset}
						elementsPerPage={search.options.limit}
					/>
				</div>
			{/if}
		</section></Searchbar
	>
</main>
