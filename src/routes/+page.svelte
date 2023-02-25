<svelte:head>
<title>Ontology Portal</title>
</svelte:head>
<script lang="ts">
	import Searchbar from '$lib/searchbar.svelte';
	import Hero from '$lib/hero.svelte';
	import { onMount } from 'svelte';
	let searchInput: HTMLInputElement;
	let heroButton: HTMLButtonElement;

	onMount(() => {
		const focusSearchBar = (event: MouseEvent) => {
			event.preventDefault();
			searchInput.focus();
			// get div height
			const yOffsetPixels: number = -250;
			const y: number =
				searchInput.getBoundingClientRect().top + window.pageYOffset + yOffsetPixels;
			window.scrollTo({ top: y, behavior: 'smooth' });
		};

		heroButton.addEventListener('click', (event: MouseEvent) => {
			focusSearchBar(event);
		});
		return () => heroButton.removeEventListener('click', focusSearchBar);
	});
</script>

<main class="min-h-screen">
	<Hero bind:heroButton />
	<div class="container">
		<Searchbar bind:searchInput />
	</div>
</main>
