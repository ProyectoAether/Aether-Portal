<script lang="ts">
	import { filteredData, searchStore } from '$lib/stores/search';
	import TriplesTable from '$lib/triplesTable.svelte';
	export let compacted: boolean;
    $: hasData = $filteredData.slice($searchStore.options.offset * $searchStore.options.limit, ($searchStore.options.offset + 1) * $searchStore.options.limit).length > 0;
</script>

{#if hasData}
	<TriplesTable
		triples={$filteredData}
		offset={$searchStore.options.offset}
		limit={$searchStore.options.limit}
		{compacted}
	/>
{:else}
	<h2 class="p-10 italic font-bold text-3xl">No matching results</h2>
{/if}
