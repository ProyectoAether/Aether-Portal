<script lang="ts">
	import { error } from '@sveltejs/kit';
	import MetadataTable from '$lib/components/metadata/metadataTable.svelte';
	import TriplesTable from '$lib/components/triplesTable.svelte';
	import Hierarchy from '$lib/components/tree/hierarchy.svelte';
	import Pagination from '$lib/components/pagination/pagination.svelte';
	import PreviewOptions from '$lib/components/previewOptions.svelte';
	import Mappings from '$lib/components/metadata/mappings.svelte';
	import { fade } from 'svelte/transition';
	import type { OntologyPageResponse } from './+page';
	import {
		indexFile,
		type OntologyURI,
		type OntologyData,
		type OntologyMetadata,
		type Triple
	} from '$lib/assets/data';

	export let data: OntologyPageResponse;
	if (data.statusCode === 404 || !data.ontologies || !data.metadata || !data.uri) {
		throw error(data.statusCode, 'Resource Not Found');
	}
	let ontologies: OntologyData = data.ontologies;
	const uri: OntologyURI = data.uri;
	const metadata: OntologyMetadata = data.metadata;
	let view: number = 0;
	let compacted = { compacted: true, sep: ':' };
	let limit: number = 10;
	let offset: number = 0;

	let imports: OntologyURI[] = structuredClone(metadata.imports) as OntologyURI[];

	function getAllTriples(uris: OntologyURI[], ontologies: OntologyData) {
		return uris.reduce((acc, curr) => {
			acc.push(...ontologies[curr]!);
			return acc;
		}, [] as Triple[]);
	}

	$: allTriples = getAllTriples([...imports, uri], ontologies);
	const title = indexFile[uri as OntologyURI].title;
</script>

<svelte:head>
	<title>{title}</title>
</svelte:head>
<main class="container min-h-screen py-6">
	<!-- <div class="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"> -->
	<!-- 	<div -->
	<!-- 		class="inline-block h-24 w-24 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]" -->
	<!-- 		role="status" -->
	<!-- 	> -->
	<!-- 		<span -->
	<!-- 			class="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]" -->
	<!-- 			>Loading...</span -->
	<!-- 		> -->
	<!-- 	</div> -->
	<!-- </div> -->

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
