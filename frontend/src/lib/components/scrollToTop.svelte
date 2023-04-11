<script>
	import { fade } from 'svelte/transition';

	let hidden = true;
	function goTop() {
		document.body.scrollIntoView();
	}
	export let showOnPx = 150;

	function scrollContainer() {
		return document.documentElement || document.body;
	}

	function handleOnScroll() {
		if (!scrollContainer()) {
			return;
		}

		if (scrollContainer().scrollTop > showOnPx) {
			hidden = false;
		} else {
			hidden = true;
		}
	}
</script>

<svelte:window on:scroll={handleOnScroll} />

{#if !hidden}
	<button
		class="btn-circle flex justify-center items-center fixed right-5 bottom-5 z-50 cursor-pointer  bg-secondary p-3"
		transition:fade
		on:click={(e) => {
			e.preventDefault();
			goTop();
		}}
	>
		<svg xmlns="http://www.w3.org/2000/svg" height="48" viewBox="0 96 960 960" width="48"
			><path
				d="M450 896V370L202 618l-42-42 320-320 320 320-42 42-248-248v526h-60Z"
				fill="white"
			/></svg
		>
	</button>
{/if}
