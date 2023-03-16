<script lang="ts">
	import { error } from '@sveltejs/kit';
	import MetadataTable from '$lib/components/metadataTable.svelte';
	import TriplesTable from '$lib/components/triplesTable.svelte';
	import Hierarchy from '$lib/components/hierarchy.svelte';
	import Pagination from '$lib/components/pagination.svelte';
	import PreviewOptions from '$lib/components/previewOptions.svelte';
	import Mappings from '$lib/components/mappings.svelte';
	import { fade } from 'svelte/transition';
	import { compactURI, type CompactURIProps } from '$lib/utils';
	import namespaces from '$lib/assets/ontologies/namespaces.json';
	import type { OntologyPageResponse } from './+page';
	import type { OntologyData, OntologyMetadata, Triple } from '$lib/assets/data';

	export let data: OntologyPageResponse;
	if (data.statusCode === 404 || !data.ontologies || !data.metadata || !data.uri) {
		throw error(data.statusCode, 'Resource Not Found');
	}
	let ontologies: OntologyData = data.ontologies;
	const uri: string = data.uri;
	const metadata: OntologyMetadata = data.metadata;
	let view: number = 0;
	let compacted: CompactURIProps = { compacted: true, sep: ':' };
	let limit: number = 10;
	let offset: number = 0;

	let imports: string[] = structuredClone(metadata.imports);

	function getAllTriples(uris: string[], ontologies: OntologyData) {
		return uris.reduce((acc, curr) => {
			acc.push(...ontologies[curr]);
			return acc;
		}, [] as Triple[]);
	}

	$: allTriples = getAllTriples([...imports, uri], ontologies);
</script>

<svelte:head>
	<title>{compactURI('', namespaces)}</title>
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
			<Pagination bind:offset {limit} total={allTriples.length} />
		{:else if view === 1}
			<Hierarchy bind:compacted triples={allTriples} />
		{:else if view === 2}
			<Mappings excludedURI={uri} triples={allTriples} />
		{/if}
	</section>
</main>
