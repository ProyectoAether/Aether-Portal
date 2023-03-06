<script lang="ts">
	import Searchbar from '$lib/components/searchbar.svelte';
	import SearchResult from '$lib/components/searchResult.svelte';
	import Hero from '$lib/components/hero.svelte';
	import { filteredData, searchStore } from '$lib/stores/search';
	let compacted: boolean = false;
</script>

<svelte:head>
	<title>Ontology Portal</title>
</svelte:head>

<main class="min-h-screen">
	<Hero />
	<div class="container">
		<Searchbar bind:compacted>
			<SearchResult
				{compacted}
				results={$filteredData}
				offset={$searchStore.options.offset}
				limit={$searchStore.options.limit}
			/>
		</Searchbar>
	</div>
</main>
