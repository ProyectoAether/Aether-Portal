<script lang="ts">
	import TriplesTable from '$lib/components/triplesTable.svelte';
	import type { Triple } from '$lib/assets/types';
	export let compacted: boolean;
	export let results: Triple[];
	export let offset: number;
	export let limit: number;
</script>

{#if results.length > 0}
	<TriplesTable triples={results} {offset} {limit} {compacted} />
{:else}
	<h2 class="p-10 italic font-bold text-3xl">No matching results</h2>
{/if}
