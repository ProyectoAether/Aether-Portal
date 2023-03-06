<script lang="ts">
	import type { Triple } from '$lib/assets/types';
	import CloseIcon from '$lib/svg/closeIcon.svelte';
	import { compactURI, getChildren } from '$lib/utils';
	import { slide } from 'svelte/transition';
	import OpenIcon from '$lib/svg/openIcon.svelte';
	import namespaces from '$lib/assets/namespaces.json';
	import { afterUpdate } from 'svelte';
	export let data: string;
	export let triples: Triple[];
	export let level: number;
	export let show: boolean = true;
	export let compacted: boolean;
	const leftPaddingPX = level * 55;
	const children = getChildren(data, triples);
	$: data = compacted ? compactURI(data, namespaces) : data;
	export let visited: Set<string>;

	afterUpdate(() => {
		visited.add(data);
	});
</script>

<li transition:slide class="p-2 flex" style="padding-left: {leftPaddingPX}px">
	{#if children.length > 0}
		{#if !show}
			<button on:click={() => (show = true)}>
				<CloseIcon />
			</button>
		{:else}
			<button on:click={() => (show = false)}>
				<OpenIcon />
			</button>
		{/if}
	{/if}
	<a class="link link-primary" href={data}>{data}</a>
</li>

{#if show}
	{#if visited.has(data)}
		{#each children as d}
			<svelte:self bind:triples data={d} level={level + 1} bind:compacted bind:visited />
		{/each}
	{/if}
{/if}
