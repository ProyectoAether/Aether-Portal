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
		type OntologyID
	} from '$lib/assets/data';

	export let data: OntologyPageResponse;
	let ontologies = data.ontologies;
	const uri = data.uri;
	const metadata = data.metadata;
	let view: _View = _View.Table;
	let compacted = true;
	let elementsPerPage = 10;
	let offset = 0;
	let imports = metadata.imports;

	function getAllTriples(uris: OntologyURI[], ontologies: OntologyData) {
		return uris.reduce((acc, curr) => {
			acc.push(...ontologies[sha256(curr) as OntologyID]);
			return acc;
		}, [] as Triple[]);
	}

	$: allTriples = getAllTriples([...imports, uri], ontologies);
	const title = indexFile[sha256(uri) as OntologyID].title;
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
		<MetadataTable bind:imports {metadata} triples={allTriples} />
		<PreviewOptions bind:view bind:compacted />
		{#if view === _View.Table}
			<TriplesTable triples={allTriples} {compacted} {offset} {elementsPerPage} />
			<div class="px-4 flex justify-center md:justify-start container mt-auto">
				<Pagination bind:offset {elementsPerPage} totalElements={allTriples.length} />
			</div>
		{:else if view === _View.Hierarchy}
			<Hierarchy triples={allTriples} />
		{:else if view === _View.Mapping}
			<Mappings excludedURI={uri} triples={allTriples} />
		{/if}
	</section>
</main>
