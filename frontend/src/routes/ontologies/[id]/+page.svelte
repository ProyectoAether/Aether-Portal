<script lang="ts">
	import MetadataTable from '$lib/components/metadata/metadataTable.svelte';
	import TriplesTable from '$lib/components/triplesTable.svelte';
	import Hierarchy from '$lib/components/tree/hierarchy.svelte';
	import Pagination from '$lib/components/pagination/pagination.svelte';
	import PreviewOptions from '$lib/components/previewOptions.svelte';
	import Mappings from '$lib/components/metadata/mappings.svelte';
	import { fade } from 'svelte/transition';
	import type { OntologyPageResponse } from './+page';
	import { sha256 } from 'js-sha256';
	import {
		indexFile,
		type OntologyURI,
		type OntologyData,
		type OntologyMetadata,
		type Triple,
		type OntologyID
	} from '$lib/assets/data';

	export let data: OntologyPageResponse;
	let ontologies: OntologyData = data.ontologies;
	const uri: OntologyURI = data.uri;
	const metadata: OntologyMetadata = data.metadata;
	let view = 0;
	let compacted = { compacted: true, sep: ':' };
	let limit = 10;
	let offset = 0;

	let imports: OntologyURI[] = structuredClone(metadata.imports) as OntologyURI[];

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
	<section class="container" in:fade>
		<MetadataTable bind:imports {metadata} triples={allTriples} />
		<PreviewOptions bind:view bind:compacted />
		{#if view === 0}
			<TriplesTable triples={allTriples} {compacted} {offset} {limit} />
			<div class="px-4">
				<Pagination bind:offset {limit} total={allTriples.length} />
			</div>
		{:else if view === 1}
			<Hierarchy bind:compacted triples={allTriples} />
		{:else if view === 2}
			<Mappings excludedURI={uri} triples={allTriples} />
		{/if}
	</section>
</main>
