<script lang="ts">
	import OntologySearchResult from '$lib/components/searchbar/ontologySearchResult.svelte';
	import Pagination from '$lib/components/pagination/pagination.svelte';
	import Searchbar from '$lib/components/searchbar/searchbar.svelte';
	import SearchOptions from '$lib/components/searchbar/searchOptions.svelte';
	import { ontologySearchStore, filteredOntologies } from '$lib/stores/search';
</script>

<svelte:head>
	<title>Ontologies</title>
	<meta
		name="description"
		content="Quickly filter a ontology by their name, 
        it will show a link to redirect the user to its documentation, as well as its name/URI and label"
	/>
</svelte:head>

<main class="min-h-screen">
	<Searchbar bind:searchQuery={$ontologySearchStore.searchQuery} title={'Search Ontologies'}>
		<section class="container" slot="search-options">
			<SearchOptions
				compacted={true}
				bind:alphabeticalOrder={$ontologySearchStore.options.alphabeticalOrder}
			/>
		</section>
		<section class="container" slot="search-results">
			<OntologySearchResult
				ids={$filteredOntologies}
				offset={$ontologySearchStore.options.offset}
				limit={$ontologySearchStore.options.limit}
			>
				<h2 slot="fallback" class="p-10 italic font-bold text-3xl">No matching Ontologies</h2>
			</OntologySearchResult>
			{#if $filteredOntologies.length > 0}
				<Pagination
					total={$filteredOntologies.length}
					bind:offset={$ontologySearchStore.options.offset}
					limit={$ontologySearchStore.options.limit}
				/>
			{/if}
		</section>
	</Searchbar>
</main>

<style>
</style>
