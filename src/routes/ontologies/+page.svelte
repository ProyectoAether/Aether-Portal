<script lang="ts">
	import Pagination from '$lib/pagination.svelte';
	import Searchbar from '$lib/searchbar.svelte';
	import SearchResult from '$lib/searchResult.svelte';
	import { searchStore, filteredData } from '$lib/stores/search';

	let searchInput: HTMLInputElement;
	let compacted: boolean;
</script>

<svelte:head>
	<title>Ontologies</title>
</svelte:head>

<main class="min-h-screen">
	<Searchbar bind:searchInput bind:compacted />
	<section class="container ">
		<SearchResult bind:compacted />
		{#if $filteredData.length > 0}
			<Pagination
				triples={$filteredData}
                bind:offset={$searchStore.options.offset}
				limit={$searchStore.options.limit}
			/>
		{/if}
	</section>
</main>
