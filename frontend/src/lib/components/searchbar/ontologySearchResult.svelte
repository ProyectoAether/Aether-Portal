<script lang="ts">
	import { indexFile, type OntologyID } from '$lib/assets/data';
	import OntologyCard from '$lib/components/card/ontologyCard.svelte';
	export let ids: OntologyID[];
	export let offset: number;
	export let limit: number;
	export let alphabeticalOrder: boolean;
	$: sorted = alphabeticalOrder
		? Array.from(ids).sort((a, b) =>
				indexFile[a].uri.toLowerCase() >= indexFile[b].uri.toLowerCase() ? 1 : -1
		  )
		: Array.from(ids).sort((a, b) =>
				indexFile[a].uri.toLowerCase() < indexFile[b].uri.toLowerCase() ? 1 : -1
		  );
</script>

{#if ids.length > 0}
	<div class="my-12 grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-4 gap-10 place-items-center">
		{#each sorted.slice(offset * limit, (offset + 1) * limit) as id}
			<OntologyCard
				{id}
				description={indexFile[id].description}
				label={indexFile[id].label}
				title={indexFile[id].title}
				logo={indexFile[id].logo}
			/>
		{/each}
	</div>
{:else}
	<slot name="fallback" />
{/if}
