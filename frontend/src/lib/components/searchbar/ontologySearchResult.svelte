<script lang="ts">
	import { indexFile } from '$lib/assets/data';
	import type { OntologySearchResult } from '$lib/stores/search';
	import OntologyCard from '$lib/components/card/ontologyCard.svelte';
	export let results: OntologySearchResult[];
	export let offset: number;
	export let limit: number;
</script>

{#if results.length > 0}
	<div class="my-12 grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-4 gap-10">
		{#each results.slice(offset * limit, (offset + 1) * limit) as result}
			<OntologyCard
				uri={result.uri}
				description={indexFile[result.uri].description}
				label={indexFile[result.uri].label}
				title={indexFile[result.uri].title}
				logo={indexFile[result.uri].logo}
			/>
		{/each}
	</div>
{:else}
	<slot name="fallback" />
{/if}
