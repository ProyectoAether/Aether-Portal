<script lang="ts">
	import type { Triple } from '$lib/assets/data';
	import { compactURI, getChildren, type CompactURIProps } from '$lib/utils';
	import namespaces from '$lib/assets/ontologies/namespaces.json';
	import { afterUpdate } from 'svelte';
	import { fade } from 'svelte/transition';
	import { typewriter } from '$lib/transitions/typewriter';
	export let data: string;
	export let triples: Triple[];
	export let show = true;
	export let compacted: CompactURIProps;
	const children = getChildren(data, triples);
	$: data = compacted.compacted ? compactURI(data, namespaces, compacted.sep) : data;
	export let visited: Set<string>;

	afterUpdate(() => {
		visited.add(data);
	});
	const id = crypto.randomUUID();
</script>

<input class="absolute" type="checkbox" {id} bind:checked={show} />
{#if children.length > 0}
	<label
		in:typewriter={{ speed: 12 }}
		for={id}
		class="tree-label cursor-pointer relative inline-block">{data}</label
	>
{:else}
	<span in:typewriter={{ speed: 12 }} class="tree-label relative inline-block">{data}</span>
{/if}
{#if show}
	{#if visited.has(data)}
		<ul>
			{#each children as d, i}
				<li class="py-4 leading-5 relative pl-4 pb-4" transition:fade>
					<svelte:self
						bind:triples
						data={d}
						id={id + children.length + i}
						bind:compacted
						bind:visited
					/>
				</li>
			{/each}
		</ul>
	{/if}
{/if}

<style>
	input {
		clip: rect(0, 0, 0, 0);
	}
	input:checked ~ ul {
		display: block;
	}

	label.tree-label:before {
		background: #0af;
		color: #fff;
		position: relative;
		z-index: 1;
		float: left;
		margin: 0 1em 0 -2em;
		width: 1em;
		height: 1em;
		border-radius: 1em;
		content: '+';
		text-align: center;
		line-height: 0.9em;
	}

	:checked ~ label.tree-label:before {
		content: '–';
	}

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

	.tree-label:after {
		position: absolute;
		top: 0;
		left: -1.45em;
		display: block;
		height: 0.5em;
		width: 1em;
		border-bottom: 1px dashed #777;
		border-left: 1px dashed #777;
		border-radius: 0 0 0 0.3em;
		content: '';
	}

	label.tree-label:after {
		border-bottom: 0;
	}

	:checked ~ label.tree-label:after {
		border-radius: 0 0.3em 0 0;
		border-top: 1px dashed #777;
		border-right: 1px dashed #777;
		border-bottom: 0;
		border-left: 0;
		bottom: 2px;
		top: 0.5em;
	}

	li:last-child:before {
		height: 1em;
	}
</style>
