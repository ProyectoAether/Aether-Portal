<script lang="ts">
	import Searchbar from '$lib/components/searchbar.svelte';
	import SearchResult from '$lib/components/searchResult.svelte';
	import Hero from '$lib/components/hero.svelte';
	let compacted: boolean = false;
</script>

<svelte:head>
	<title>Ontology Portal</title>
</svelte:head>

<main class="min-h-screen">
	<Hero/>
	<div class="container">
		<Searchbar bind:compacted>
			<SearchResult {compacted} />
		</Searchbar>
	</div>
</main>
