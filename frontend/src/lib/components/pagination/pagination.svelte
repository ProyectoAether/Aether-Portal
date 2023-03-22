<script lang="ts">
	import { afterUpdate } from 'svelte';
	export let offset: number;
	export let totalElements: number;
	export let elementsPerPage: number;
	if ((offset + 1) * elementsPerPage > totalElements) {
		offset = 0;
	}
	afterUpdate(() => {
		if (totalElements < offset * elementsPerPage) {
			offset = 0;
		}
	});
	const buttons = [-1, 0, 1];
	const numPages = Math.floor(totalElements / elementsPerPage);
	$: noMorePrevious = offset == 0;
	$: noMoreNext = offset == numPages;
</script>

<div class="btn-group btn-group-horizontal">
	{#if numPages > 2}
		<button
			data-testid="go-to-start-btn"
			class="btn btn-xs md:btn-md"
			disabled={noMorePrevious}
			on:click={() => (offset = 0)}
			aria-label="Go to first page"
			><svg
				aria-hidden="true"
				class="w-5 h-5 mr-2"
				fill="currentColor"
				viewBox="0 0 20 20"
				xmlns="http://www.w3.org/2000/svg"
				><path
					fill-rule="evenodd"
					d="M7.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l2.293 2.293a1 1 0 010 1.414z"
					clip-rule="evenodd"
				/></svg
			></button
		>
		<button
			disabled={noMorePrevious}
			data-testid="go-back-btn"
			class="btn btn-xs md:btn-md"
			on:click={() => (offset = offset - 1)}>Prev</button
		>
	{/if}
	{#if offset === numPages && numPages > 1}
		<button class="btn btn-xs md:btn-md" on:click={() => (offset = offset + buttons[0])}
			>{offset + buttons[0]}</button
		>
	{/if}
	{#each buttons as button}
		{#if offset + button >= 0 && offset + button <= numPages}
			<button
				class="btn btn-xs md:btn-md {button === 0 ? 'btn-active' : ''}"
				on:click={() => (offset = offset + button)}>{offset + 1 + button}</button
			>
		{/if}
	{/each}
	{#if offset === 0 && numPages > 2}
		<button
			class="btn btn-xs md:btn-md"
			on:click={() => (offset = offset + buttons[buttons.length - 1])}
			>{buttons[buttons.length - 1] + 2 + offset}</button
		>
	{/if}
	{#if numPages > 1}
		<button
			disabled={noMoreNext}
			data-testid="go-next-btn"
			class="btn btn-xs md:btn-md"
			on:click={() => (offset += 1)}>Next</button
		>
		<button
			data-testid="go-to-end-btn"
			class="btn btn-xs md:btn-md"
			disabled={noMoreNext}
			on:click={() => (offset = numPages)}
			aria-label="Go to last page"
			><svg
				aria-hidden="true"
				class="w-5 h-5 ml-2"
				fill="currentColor"
				viewBox="0 0 20 20"
				xmlns="http://www.w3.org/2000/svg"
				><path
					fill-rule="evenodd"
					d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
					clip-rule="evenodd"
				/></svg
			></button
		>
	{/if}
</div>
