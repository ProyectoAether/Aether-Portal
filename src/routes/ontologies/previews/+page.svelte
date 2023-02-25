<script lang="ts">
	import { page } from '$app/stores';
	import { error } from '@sveltejs/kit';
	import ontologies from '$lib/assets/ontologies.json';
	import type { Triple, Ontology } from '$lib/assets/types';
	import { MetadataExtractor } from '$lib/utils';
	import type { OntologyMetadata, MetadataField } from '$lib/utils';
	import MetadataTable from '$lib/metadataTable.svelte';
	import TriplesTable from '$lib/triplesTable.svelte';

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
</script>

<svelte:head>
	<title>{metadata.get('Title') || uri}</title>
</svelte:head>
<main class="container min-h-screen py-6">
	<MetadataTable bind:metadata bind:imported />
	<TriplesTable bind:triples />
</main>
