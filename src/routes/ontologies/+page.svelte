<script lang="ts">
	import Pagination from '$lib/pagination.svelte';
	import Searchbar from '$lib/searchbar.svelte';
	import SearchResult from '$lib/searchResult.svelte';

	let searchInput: HTMLInputElement;
</script>

<main class="min-h-screen">
	<Searchbar bind:searchInput showInlineResult={false} />
	<section class="p-7">
		<SearchResult />
	</section>
	<Pagination />
</main>
