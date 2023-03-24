<script lang="ts">
	import { namespacesFile, type Triple } from '$lib/assets/data';
	import { compactURI, getChildren } from '$lib/utils';
	export let uri: string;
	export let triples: Triple[];
	let show = true;
	const children = getChildren(uri, triples).sort((a, b) =>
		a.toLowerCase() > b.toLowerCase() ? 1 : -1
	);
	$: uri = compactURI(uri, namespacesFile, ':');
</script>

<li class="m-0 pt-3 px-1 relative {children.length > 0 ? 'parent_li' : ''}">
	<span
		class="border border-gray-400 rounded-md px-3 py-2 inline-block"
		class:caret={children.length > 0}
		class:caret-down={show}
		on:click={() => (show = !show)}
		on:keypress
	>
		{uri}
	</span>
	{#if show}
		<ul class="m-0 pl-10 block">
			{#each children as d}
				<svelte:self bind:triples uri={d} />
			{/each}
		</ul>
	{/if}
</li>

<style>
	.caret {
		cursor: pointer;
		user-select: none; /* Prevent text selection */
	}

	/* Create the caret/arrow with a unicode, and style it */
	.caret::before {
		content: '\25B6';
		color: black;
		display: inline-block;
		margin-right: 6px;
	}
	.caret-down::before {
		transform: rotate(90deg);
	}
</style>
