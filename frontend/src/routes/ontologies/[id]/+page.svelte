<script lang="ts">
	import MetadataTable from '$lib/components/metadata/metadataTable.svelte';
	import TriplesTable from '$lib/components/triplesTable.svelte';
	import Hierarchy from '$lib/components/tree/hierarchy.svelte';
	import Pagination from '$lib/components/pagination/pagination.svelte';
	import PreviewOptions from '$lib/components/previewOptions.svelte';
	import Mappings from '$lib/components/metadata/mappings.svelte';
	import type { OntologyPageResponse } from '$route/ontologies/[id]/+page';
	import { _View } from '$route/ontologies/[id]/+page';
	import { sha256 } from 'js-sha256';
	import {
		indexFile,
		type OntologyURI,
		type OntologyData,
		type Triple,
		type OntologyID,
		type OWLType,
		OWL_NAMED_INDIVIDUAL,
		OWL_DATATYPE_PROPERTY,
		OWL_OBJECT_PROPERTY,
		OWL_CLASS
	} from '$lib/assets/data';
	import TableFilter from '$lib/components/tableFilter.svelte';

	export let data: OntologyPageResponse;
	let ontologies = data.ontologies;
	const uri = data.uri;
	const metadata = data.metadata;
	let view: _View = _View.Table;
	let compacted = true;
	let elementsPerPage = 10;
	let offset = 0;
	let imports = data.imports;

	let tableFilter: OWLType[] = [
		OWL_CLASS,
		OWL_OBJECT_PROPERTY,
		OWL_DATATYPE_PROPERTY,
		OWL_NAMED_INDIVIDUAL
	];

	function getAllTriples(uris: OntologyURI[], ontologies: OntologyData) {
		return uris.reduce((acc, curr) => {
			acc.push(...ontologies[sha256(curr) as OntologyID]);
			return acc;
		}, [] as Triple[]);
	}
	let availableImports = imports.filter((el) => el.status).map((el) => el.uri);
	let failedImports = imports.filter((el) => !el.status).map((el) => el.uri);

	const title = indexFile[sha256(uri) as OntologyID].title;
	let allTriples = getAllTriples([...availableImports, uri], ontologies);
	let numElements = allTriples.length;
</script>

<svelte:head>
	<title>{title}</title>
	<meta
		name="description"
		content="Shows the ontology's metadata and statistics such as the number 
        of classes and number of properties, it will also show the entire collection of triples
        that the ontology stores"
	/>
</svelte:head>
<main class="container min-h-screen py-6">
	<section class="container px-2">
		<MetadataTable
			bind:imports={availableImports}
			{failedImports}
			{metadata}
			triples={allTriples}
		/>
		<PreviewOptions bind:view bind:compacted />
		{#if view === _View.Table}
			<TableFilter bind:tableFilter />
			<TriplesTable
				{tableFilter}
				bind:numElements
				triples={allTriples}
				{compacted}
				{offset}
				{elementsPerPage}
			/>
			<div class="px-4 flex justify-center md:justify-start container mt-auto">
				<Pagination bind:offset {elementsPerPage} totalElements={numElements} />
			</div>
		{:else if view === _View.Hierarchy}
			<Hierarchy triples={allTriples} />
		{:else if view === _View.Mapping}
			<Mappings excludedURI={uri} triples={allTriples} />
		{/if}
	</section>
</main>
