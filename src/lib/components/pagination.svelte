<script lang="ts">
	import type { Triple } from '$lib/assets/types';
	import { afterUpdate } from 'svelte';
	export let offset: number;
	export let triples: Triple[];
	export let limit: number;
	if ((offset + 1) * limit > triples.length) {
		offset = 0;
	}
	afterUpdate(() => {
		if (triples.slice((offset - 1) * limit, offset * limit).length === 0) {
			offset = 0;
		}
	});
</script>

<div class="btn-group m-12">
	{#if offset + 1 > 1}
		<button data-testid="go-back-btn" class="btn btn-md" on:click={() => (offset = offset - 1)}
			>Prev</button
		>
	{/if}
	{#each [2, 1] as i}
		{#if offset - i >= 0}
			<button class="btn btn-md" on:click={() => (offset = offset - i)}>{offset - i + 1}</button>
		{/if}
	{/each}
	<button class="btn btn-md btn-active">{offset + 1}</button>
	{#each [1, 2] as i}
		{#if offset + 1 + i <= triples.length / limit + 1}
			<button class="btn btn-md" on:click={() => (offset += i)}>{offset + i + 1}</button>
		{/if}
	{/each}
	{#if offset + 1 <= triples.length / limit}
		<button data-testid="go-next-btn" class="btn btn-md" on:click={() => (offset += 1)}>Next</button
		>
	{/if}
</div>
