<script lang="ts">
	import OntologySearchResult from '$lib/components/searchbar/ontologySearchResult.svelte';
	import Pagination from '$lib/components/pagination/pagination.svelte';
	import Searchbar from '$lib/components/searchbar/searchbar.svelte';
	import SearchOptions from '$lib/components/searchbar/searchOptions.svelte';
	import { classSearchStore, ontologySearchStore, filteredOntologies } from '$lib/stores/search';
</script>

<svelte:head>
	<title>Ontologies</title>
</svelte:head>

<main class="min-h-screen">
	<Searchbar
		bind:searchQuery={$ontologySearchStore.searchQuery}
		title={'Search Ontologies'}
		kbShortcut={'i'}
	>
		<section class="container" slot="search-options">
			<SearchOptions
				bind:alphabeticalOrder={$ontologySearchStore.options.alphabeticalOrder}
				bind:owlClass={$classSearchStore.options.owlClass}
				bind:owlDatatypeProperty={$classSearchStore.options.owlDatatypeProperty}
				bind:owlObjectProperty={$classSearchStore.options.owlObjectProperty}
				bind:owlIndividuals={$classSearchStore.options.owlNamedIndividual}
			/>
		</section>
		<section class="container" slot="search-results">
			<OntologySearchResult
				results={$filteredOntologies}
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
