<script lang="ts">
	import { page } from '$app/stores';
	import { error } from '@sveltejs/kit';
	import indexes from '$lib/assets/ontologies/index.json';
	import MetadataTable from '$lib/components/metadataTable.svelte';
	import TriplesTable from '$lib/components/triplesTable.svelte';
	import Hierarchy from '$lib/components/hierarchy.svelte';
	import Pagination from '$lib/components/pagination.svelte';
	import PreviewOptions from '$lib/components/previewOptions.svelte';
	import Mappings from '$lib/components/mappings.svelte';
	import { ontologies, ontologyURI } from '$lib/stores/imports';
	import { fade } from 'svelte/transition';
	import { compactURI, type CompactURIProps } from '$lib/utils';
	import namespaces from '$lib/assets/ontologies/namespaces.json';

	let uri = $page.url.searchParams.get('uri');
	if (uri === null || uri === undefined) {
		throw error(404, {
			message: 'Not found'
		});
	}
	if ($page.url.searchParams.get('hasTag') === '') {
		uri = uri + '#';
	}
	if (!Object.keys(indexes).includes(uri)) {
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
	<title>{compactURI(uri, namespaces)}</title>
</svelte:head>
<main class="container min-h-screen py-6">
	{#await $ontologies}
		<div class="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
			<div
				class="inline-block h-24 w-24 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"
				role="status"
			>
				<span
					class="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]"
					>Loading...</span
				>
			</div>
		</div>
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
			{:else if view === 2}
				<Mappings ontologies={allOntologies} />
			{/if}
		</section>
	{/await}
</main>
