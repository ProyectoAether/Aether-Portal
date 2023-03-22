<script lang="ts">
	import OntologySearchResult from '$lib/components/searchbar/ontologySearchResult.svelte';
	import Pagination from '$lib/components/pagination/pagination.svelte';
	import Searchbar from '$lib/components/searchbar/searchbar.svelte';
	import { ontologySearchStore, filteredOntologies } from '$lib/stores/search';
	import aZ from '$lib/assets/svg/a-z.svg';
	import zA from '$lib/assets/svg/z-a.svg';
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
	<Searchbar bind:searchQuery={$ontologySearchStore.searchQuery} title={'Search Ontologies'} />

	<section class="container pl-10">
		<button
			on:click={() =>
				($ontologySearchStore.options.alphabeticalOrder =
					!$ontologySearchStore.options.alphabeticalOrder)}
		>
			{#if $ontologySearchStore.options.alphabeticalOrder}
				<img class="w-8 h-8" src={aZ} alt="A-Z sort" height="44px" width="44px" />
			{:else}
				<img class="w-8 h-8" src={zA} alt="Z-A sort" height="44px" width="44px" />
			{/if}
		</button>
	</section>
	<section class="container">
		<OntologySearchResult
			ids={$filteredOntologies}
			offset={$ontologySearchStore.options.offset}
			limit={$ontologySearchStore.options.limit}
			alphabeticalOrder={$ontologySearchStore.options.alphabeticalOrder}
		>
			<h2 slot="fallback" class="p-10 italic font-bold text-3xl">No matching Ontologies</h2>
		</OntologySearchResult>
		{#if $filteredOntologies.length > 0}
			<div class="py-8 flex md:justify-start justify-center mt-auto">
				<Pagination
					totalElements={$filteredOntologies.length}
					bind:offset={$ontologySearchStore.options.offset}
					elementsPerPage={$ontologySearchStore.options.limit}
				/>
			</div>
		{/if}
	</section>
</main>
