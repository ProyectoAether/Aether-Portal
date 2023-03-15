<script lang="ts">
	import OntologySearchResult from '$lib/components/ontologySearchResult.svelte';
	import Pagination from '$lib/components/pagination.svelte';
	import Searchbar from '$lib/components/searchbar.svelte';
	import SearchOptions from '$lib/components/searchOptions.svelte';
	import ClassSearchResult from '$lib/components/classSearchResult.svelte';
	import {
		classSearchStore,
		filteredClasses,
		ontologySearchStore,
		filteredOntologies
	} from '$lib/stores/search';
	import type { CompactURIProps } from '$lib/utils';

	let compactedClass: CompactURIProps = { compacted: true, sep: ':' };
</script>

<svelte:head>
	<title>Ontologies</title>
</svelte:head>

<main class="min-h-screen">
	<section class="grid grid-cols-1 xl:grid-cols-2 grid-flow-row container px-5">
		<Searchbar
			id="class-input"
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
					<Pagination
						total={$filteredClasses.length}
						bind:offset={$classSearchStore.options.offset}
						limit={$classSearchStore.options.limit}
					/>
				{/if}
			</section></Searchbar
		>
		<Searchbar
			id="ontology-input"
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
	</section>
</main>

<style>
</style>
