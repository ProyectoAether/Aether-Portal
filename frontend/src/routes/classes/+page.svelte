<script lang="ts">
	import Pagination from '$lib/components/pagination/pagination.svelte';
	import Searchbar from '$lib/components/searchbar/searchbar.svelte';
	import SearchOptions from '$lib/components/searchbar/searchOptions.svelte';
	import ClassSearchResult from '$lib/components/searchbar/classSearchResult.svelte';
	import { classSearchStore, filteredClasses } from '$lib/stores/search';
	import type { CompactURIProps } from '$lib/utils';

	let compactedClass: CompactURIProps = { compacted: true, sep: ':' };
</script>

<svelte:head>
	<title>Classes</title>
</svelte:head>

<main>
	<Searchbar
		title={'Search Classes'}
		kbShortcut={'k'}
		bind:searchQuery={$classSearchStore.searchQuery}
	>
		<section class="container" slot="search-options">
			<SearchOptions
				bind:compacted={compactedClass.compacted}
				bind:alphabeticalOrder={$classSearchStore.options.alphabeticalOrder}
				bind:owlClass={$classSearchStore.options.owlClass}
				bind:owlDatatypeProperty={$classSearchStore.options.owlDatatypeProperty}
				bind:owlObjectProperty={$classSearchStore.options.owlObjectProperty}
				bind:owlIndividuals={$classSearchStore.options.owlNamedIndividual}
			/>
		</section>

		<section class="container" slot="search-results">
			<ClassSearchResult
				results={$filteredClasses}
				offset={$classSearchStore.options.offset}
				limit={$classSearchStore.options.limit}
				bind:compacted={compactedClass}
			>
				<h2 slot="fallback" class="p-10 italic font-bold text-3xl">No matching Classes</h2>
			</ClassSearchResult>
			{#if $filteredClasses.length > 0}
				<div class="py-4">
					<Pagination
						total={$filteredClasses.length}
						bind:offset={$classSearchStore.options.offset}
						limit={$classSearchStore.options.limit}
					/>
				</div>
			{/if}
		</section></Searchbar
	>
</main>
