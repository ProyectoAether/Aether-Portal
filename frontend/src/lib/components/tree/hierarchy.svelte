<script lang="ts">
	import { getRootsURI, type CompactURIProps } from '$lib/utils';
	import HierarchyNode from '$lib/components/tree/node.svelte';
	import type { Triple } from '$lib/assets/data';
	import { fade } from 'svelte/transition';

	export let compacted: CompactURIProps;
	let visited = new Set<string>();
	export let triples: Triple[];
	$: roots = getRootsURI(triples);
</script>

{#if roots.length > 0}
	<ul data-testid="hierarchy-tree">
		{#each roots as root}
			<li class="py-4 leading-5 relative pl-4 pb-4" transition:fade>
				<HierarchyNode data={root} {triples} bind:compacted bind:visited />
			</li>
		{/each}
	</ul>
{:else}
	<div class="container">
		<h2 class="text-2xl">No Classes</h2>
	</div>
{/if}

<style>
	li:before {
		position: absolute;
		top: 0;
		bottom: 0;
		left: -0.5em;
		display: block;
		width: 0;
		border-left: 1px dashed #777;
		content: '';
	}
</style>
