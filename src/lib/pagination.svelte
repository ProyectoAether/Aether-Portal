<script lang="ts">
	import { searchStore, filteredData } from '$lib/stores/search';
</script>

<div class="btn-group m-12">
	{#if $searchStore.options.offset + 1 > 1}
		<button
			class="btn btn-md"
			on:click={() => ($searchStore.options.offset = $searchStore.options.offset - 1)}
			>Previous</button
		>
	{/if}
	{#each [1, 0] as i}
		{#if $searchStore.options.offset - i > 0}
			<button
				class="btn btn-md"
				on:click={() => ($searchStore.options.offset = $searchStore.options.offset - i - 1)}
				>{$searchStore.options.offset - i}</button
			>
		{/if}
	{/each}
	<button class="btn btn-md btn-active">{$searchStore.options.offset + 1}</button>
	{#each [0, 1] as i}
		{#if $searchStore.options.offset + i + 2 < $filteredData.length / $searchStore.options.limit + 1}
			<button class="btn btn-md" on:click={() => ($searchStore.options.offset += i + 1)}
				>{$searchStore.options.offset + i + 2}</button
			>
		{/if}
	{/each}
	{#if $searchStore.options.offset + 2 < $filteredData.length / $searchStore.options.limit + 1}
		<button class="btn btn-md" on:click={() => ($searchStore.options.offset += 1)}>Next</button>
	{/if}
</div>
