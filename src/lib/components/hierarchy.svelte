<script lang="ts">
	import { getRootsURI, type CompactURIProps } from '$lib/utils';
	import HierarchyNode from '$lib/components/node.svelte';
	import type { Triple } from '$lib/assets/types';

	export let compacted: CompactURIProps;
	let visited = new Set<string>();
	export let ontologies: Triple[];
	$: roots = getRootsURI(ontologies);
</script>

{#if roots.length > 0}
	<ul data-testid="hierarchy-tree" class="container">
		{#each roots as root}
			<HierarchyNode data={root} triples={ontologies} level={0} bind:compacted bind:visited />
		{/each}
	</ul>
{:else}
	<div class="flex justify-center items-center">
		<h2 class="text-2xl">No Classes</h2>
	</div>
{/if}
