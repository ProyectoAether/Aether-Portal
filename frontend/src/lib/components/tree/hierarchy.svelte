<script lang="ts">
	import { getRootsURI } from '$lib/utils';
	import HierarchyNode from '$lib/components/tree/hierarchyNode.svelte';
	import type { Triple } from '$lib/assets/data';

	export let triples: Triple[];
	$: roots = getRootsURI(triples);
</script>

{#if roots.length > 0}
	<ul class="pl-10 block tree" data-testid="hierarchy-tree">
		{#each roots as root}
			<HierarchyNode uri={root} {triples} />
		{/each}
	</ul>
{:else}
	<div class="container">
		<h2 class="text-2xl">No Classes</h2>
	</div>
{/if}

<style global>
	/* Reference: https://codepen.io/axelaredz/pen/WNzPxb*/
	.tree li::before,
	.tree li::after {
		content: '';
		left: -20px;
		position: absolute;
		right: auto;
	}
	.tree li::before {
		border-left: 1px solid #999;
		bottom: 50px;
		height: 100%;
		top: 0;
		width: 1px;
	}
	.tree li::after {
		border-top: 1px solid #999;
		height: 20px;
		top: 30px;
		width: 25px;
	}
	.tree li.parent_li > span {
		cursor: pointer;
	}
	.tree > ul > li::before,
	.tree > ul > li::after {
		border: 0;
	}
	.tree li:last-child::before {
		height: 30px;
	}
	.tree li.parent_li > span:hover,
	.tree li.parent_li > span:hover + ul li span {
		background: #eee;
		border: 1px solid #94a0b4;
		color: #000;
	}
</style>
