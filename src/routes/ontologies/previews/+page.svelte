<script lang="ts">
	import { page } from '$app/stores';
	import { error } from '@sveltejs/kit';
	import indexes from '$lib/assets/index.json';
	import MetadataTable from '$lib/components/metadataTable.svelte';
	import TriplesTable from '$lib/components/triplesTable.svelte';
	import Hierarchy from '$lib/components/hierarchy.svelte';
	import Pagination from '$lib/components/pagination.svelte';
	import PreviewOptions from '$lib/components/previewOptions.svelte';
	import { ontologies, ontologyURI } from '$lib/stores/imports';
	import { fade } from 'svelte/transition';
	import type { CompactURIProps } from '$lib/utils';

	const uri = $page.url.searchParams.get('uri') + '/';
	if (uri === null || uri === undefined || !Object.keys(indexes).includes(uri)) {
		throw error(404, {
			message: 'Not found'
		});
	}
	ontologyURI.set(uri);

	let view = 0;
	let compacted: CompactURIProps = { compacted: true, sep: ':' };
	let limit: number = 10;
	let offset: number = 0;
</script>

<svelte:head>
	<title>{uri}</title>
</svelte:head>
<main class="container min-h-screen py-6">
	{#await $ontologies}
		Loading...
	{:then data}
		{@const allOntologies = data[0].map((el) => el['default']).flat()}
		{@const baseOntology = data[1].map((el) => el['default']).flat()}
		<section class="container" in:fade>
			<MetadataTable ontologies={allOntologies} {baseOntology} />
			<PreviewOptions bind:view bind:compacted />
			{#if view === 0}
				<TriplesTable ontologies={allOntologies} {compacted} {offset} {limit} />
				<Pagination bind:offset {limit} total={allOntologies.length} />
			{:else if view === 1}
				<Hierarchy {compacted} ontologies={allOntologies} />
			{/if}
		</section>
	{/await}
</main>
