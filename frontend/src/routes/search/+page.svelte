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
				<div class="py-8 flex justify-center">
					<Pagination
						totalElements={$filtered.length}
						bind:offset={$searchStore.options.offset}
						elementsPerPage={$searchStore.options.limit}
					/>
				</div>
			{/if}
		</section></Searchbar
	>

	<svg class="ml-2 h-4 w-4 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
		<path
			fill-rule="evenodd"
			clip-rule="evenodd"
			d="M6 7l4-4 4 4-1.414 1.414L10 4.828l-2.586 2.586L6 7z"
		/>
		<path
			fill-rule="evenodd"
			clip-rule="evenodd"
			d="M6 13l4 4 4-4-1.414-1.414L10 15.172l-2.586-2.586L6 13z"
		/>
	</svg>
</main>
