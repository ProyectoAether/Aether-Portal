<script lang="ts">
	import Searchbar from '$lib/searchbar.svelte';
	import SearchResult from '$lib/searchResult.svelte';
	import Hero from '$lib/hero.svelte';
	import { onMount } from 'svelte';
	let searchInput: HTMLInputElement;
	let heroButton: HTMLButtonElement;
	let compacted: boolean = false;

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

<svelte:head>
	<title>Ontology Portal</title>
</svelte:head>

<main class="min-h-screen">
	<Hero bind:heroButton />
	<div class="container">
		<Searchbar bind:searchInput bind:compacted>
			<SearchResult {compacted} />
		</Searchbar>
	</div>
</main>
