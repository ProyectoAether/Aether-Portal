<script lang="ts">
	import OntologySearchResult from '$lib/components/searchbar/ontologySearchResult.svelte';
	import Pagination from '$lib/components/pagination/pagination.svelte';
	import Searchbar from '$lib/components/searchbar/searchbar.svelte';
	import aZ from '$lib/assets/svg/a-z.svg';
	import zA from '$lib/assets/svg/z-a.svg';
	import { indexFile, type Index, type OntologyID } from '$lib/assets/data';
	const search = {
		searchQuery: '',
		options: {
			alphabeticalOrder: true,
			minScore: 1,
			offset: 0,
			limit: 10
		}
	};
	function ontologySearchByQuery(query: string, data: Index): OntologyID[] {
		const collection = Object.entries(data);
		if (query.length === 0) {
			return collection.map(([id]) => id) as OntologyID[];
		}
		return collection
			.filter(([, metadata]) => metadata.title.toLowerCase().includes(query.toLowerCase()))
			.map(([id]) => id) as OntologyID[];
	}
	$: filtered = ontologySearchByQuery(search.searchQuery, indexFile);
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
	<Searchbar bind:searchQuery={search.searchQuery} title={'Search Ontologies'} />

	<section class="container px-10 gap-4 grid  md:grid-cols-2 md:place-items-center">
		<button
			class="place-self-end md:place-self-center"
			on:click={() => (search.options.alphabeticalOrder = !search.options.alphabeticalOrder)}
		>
			{#if search.options.alphabeticalOrder}
				<img class="w-8 h-8" src={aZ} alt="A-Z sort" height="44px" width="44px" />
			{:else}
				<img class="w-8 h-8" src={zA} alt="Z-A sort" height="44px" width="44px" />
			{/if}
		</button>
	</section>
	<section class="container">
		<OntologySearchResult
			ids={filtered}
			offset={search.options.offset}
			limit={search.options.limit}
			alphabeticalOrder={search.options.alphabeticalOrder}
		>
			<h2 slot="fallback" class="h-96 p-10 italic font-bold text-3xl">No matching Ontologies</h2>
		</OntologySearchResult>
		{#if filtered.length > 0}
			<div class="py-8 flex md:justify-start justify-center mt-auto">
				<Pagination
					totalElements={filtered.length}
					bind:offset={search.options.offset}
					elementsPerPage={search.options.limit}
				/>
			</div>
		{/if}
	</section>
</main>
