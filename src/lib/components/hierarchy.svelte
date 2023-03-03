<script lang="ts">
	import type { Triple } from '$lib/assets/types';
	import { getRootsURI } from '$lib/utils';
	import HierarchyNode from '$lib/components/node.svelte';

	export let triples: Triple[] = [];
	export let compacted: boolean = false;
	const roots = getRootsURI(triples);
</script>

<ul data-testid="hierarchy-tree" class="container">
	{#each roots as root}
		<HierarchyNode data={root} {triples} level={0} bind:compacted />
	{/each}
</ul>
