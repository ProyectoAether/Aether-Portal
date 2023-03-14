<script lang="ts">
	import { getRootsURI, type CompactURIProps } from '$lib/utils';
	import HierarchyNode from '$lib/components/node.svelte';
	import type { Triple } from '$lib/assets/types';

	export let compacted: CompactURIProps;
	let visited = new Set<string>();
	export let ontologies: Triple[];
</script>

<ul data-testid="hierarchy-tree" class="container">
	{#each getRootsURI(ontologies) as root}
		<HierarchyNode data={root} triples={ontologies} level={0} bind:compacted bind:visited />
	{/each}
</ul>
