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
		if ((offset + 1) * limit > triples.length) {
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
	{#each [1, 0] as i}
		{#if offset - i > 0}
			<button class="btn btn-md" on:click={() => (offset = offset - i - 1)}>{offset - i}</button>
		{/if}
	{/each}
	<button class="btn btn-md btn-active">{offset + 1}</button>
	{#each [0, 1] as i}
		{#if offset + i + 2 < triples.length / limit}
			<button class="btn btn-md" on:click={() => (offset += i + 1)}>{offset + i + 2}</button>
		{/if}
	{/each}
	{#if offset + 2 < triples.length / limit}
		<button data-testid="go-next-btn" class="btn btn-md" on:click={() => (offset += 1)}>Next</button
		>
	{/if}
</div>
