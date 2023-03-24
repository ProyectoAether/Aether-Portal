<script lang="ts">
	import Pagination from '$lib/components/pagination/pagination.svelte';
	import Searchbar from '$lib/components/searchbar/searchbar.svelte';
	import SearchResult from '$lib/components/searchbar/searchResult.svelte';
	import { searchStore, filtered } from '$lib/stores/search';

	let compacted = true;
</script>

<svelte:head>
	<title>Search</title>
	<meta
		name="description"
		content="Quickly filter properties and classes of a ontology by their name, 
        it will show a link to redirect the user to the individual's documentation external link"
	/>
</svelte:head>

<main>
	<Searchbar
		title={'Search for Classes and Properties'}
		bind:searchQuery={$searchStore.searchQuery}
	>
		<section class="container" slot="search-options">
			<label class="cursor-pointer flex items-center gap-4 py-4">
				<span class="label-text">Compact</span>
				<input type="checkbox" class="toggle toggle-primary" bind:checked={compacted} />
			</label>
		</section>

		<section class="container" slot="search-results">
			<SearchResult
				results={$filtered}
				offset={$searchStore.options.offset}
				limit={$searchStore.options.limit}
				bind:compacted
				bind:alphabeticalOrder={$searchStore.options.alphabeticalOrder}
			>
				<h2 slot="fallback" class="p-10 italic font-bold text-3xl">No matching Classes</h2>
			</SearchResult>
			{#if $filtered.length > 0}
				<div class="py-8 flex md:justify-start justify-center mt-auto">
					<Pagination
						totalElements={$filtered.length}
						bind:offset={$searchStore.options.offset}
						elementsPerPage={$searchStore.options.limit}
					/>
				</div>
			{/if}
		</section></Searchbar
	>
</main>
