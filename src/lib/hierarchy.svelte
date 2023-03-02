<script lang="ts">
	import type { Triple } from './assets/types';
	import { getRootsURI } from '$lib/utils';
	import HierarchyNode from '$lib/node.svelte';

	export let triples: Triple[];
	export let compacted: boolean;
</script>

<ul class="container">
	{#each getRootsURI(triples) as root}
		<HierarchyNode data={root} {triples} level={0} bind:compacted />
	{/each}
</ul>
