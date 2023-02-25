<script lang="ts">
	import Pagination from '$lib/pagination.svelte';
	import Searchbar from '$lib/searchbar.svelte';
	import SearchResult from '$lib/searchResult.svelte';
	import { filteredData } from '$lib/stores/search';

	let searchInput: HTMLInputElement;
</script>

<svelte:head>
	<title>Ontologies</title>
</svelte:head>

<main class="min-h-screen">
	<Searchbar bind:searchInput showInlineResult={false} />
	<section class="container ">
		<SearchResult />
		{#if $filteredData.length > 0}
			<Pagination />
		{/if}
	</section>
</main>
