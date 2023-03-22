<script lang="ts">
	export let offset: number;
	export let totalElements: number;
	export let elementsPerPage: number;
	export let numButtons = 3;
	const numPages = Math.ceil(totalElements / elementsPerPage);
	const pages = Array(numPages)
		.fill(0)
		.map((_, i) => i + 1);
	const maxStartPage = Math.max(numPages - numButtons, 0);
	// offset + 1 is the current page number
	$: noMorePrevious = offset + 1 === 1;
	$: noMoreNext = offset + 1 === numPages;
	$: startPage = Math.min(Math.max(offset - Math.floor(numButtons / 2), 0), maxStartPage);
	$: endPage = Math.min(startPage + numButtons, numPages);

	function goToPage(page: number) {
		// offset + 1 is the current page number
		offset = page - 1;
	}
</script>

<div class="btn-group btn-group-horizontal">
	{#if numPages > 1}
		<button
			data-testid="go-to-start-btn"
			class="btn btn-xs md:btn-md"
			disabled={noMorePrevious}
			on:click={() => goToPage(1)}
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
			on:click={() => goToPage(startPage + 1)}>Prev</button
		>
	{/if}
	{#each pages.slice(startPage, endPage) as page}
		<button
			class="btn btn-xs md:btn-md"
			class:btn-active={offset === page - 1}
			on:click={() => goToPage(page)}
		>
			{page}
		</button>
	{/each}
	{#if numPages > 1}
		<button
			disabled={noMoreNext}
			data-testid="go-next-btn"
			class="btn btn-xs md:btn-md"
			on:click={() => goToPage(endPage)}>Next</button
		>
		<button
			data-testid="go-to-end-btn"
			class="btn btn-xs md:btn-md"
			disabled={noMoreNext}
			on:click={() => goToPage(numPages)}
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
