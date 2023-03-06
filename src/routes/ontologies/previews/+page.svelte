<script lang="ts">
	import { page } from '$app/stores';
	import { error } from '@sveltejs/kit';
	import ontologies from '$lib/assets/ontologies.json';
	import type { Triple, Ontology } from '$lib/assets/types';
	import { MetadataExtractor } from '$lib/utils';
	import type { OntologyMetadata, MetadataField } from '$lib/utils';
	import MetadataTable from '$lib/components/metadataTable.svelte';
	import TriplesTable from '$lib/components/triplesTable.svelte';
	import Hierarchy from '$lib/components/hierarchy.svelte';
	import Pagination from '$lib/components/pagination.svelte';
	import PreviewOptions from '$lib/components/previewOptions.svelte';

	const uri = $page.url.searchParams.get('uri');
	if (uri === null || uri === undefined || !Object.keys(ontologies).includes(uri)) {
		throw error(404, {
			message: 'Not found'
		});
	}
	let imported: string[] = [];
	let extractor: MetadataExtractor = new MetadataExtractor(ontologies as Ontology, uri);
	let metadata: OntologyMetadata<MetadataField, string[] | number> = extractor.getMetadata();
	let triples: Triple[] = extractor.getTiples();
	$: {
		imported = imported;
		extractor = extractor.updateImported(imported);
		metadata = extractor.getMetadata();
		triples = extractor.getTiples();
	}
	let view = 0;
	let compacted = true;
	let limit: number = 10;
	let offset: number = 0;
</script>

<svelte:head>
	<title>{metadata.get('Title') || uri}</title>
</svelte:head>
<main class="container min-h-screen py-6">
	<MetadataTable bind:metadata bind:imported />
	<PreviewOptions bind:view bind:compacted />
	{#if view === 0}
		<TriplesTable {triples} {compacted} {offset} {limit} />
		<Pagination bind:offset {limit} {triples} />
	{:else if view === 1}
		<Hierarchy {triples} {compacted} />
	{/if}
</main>
