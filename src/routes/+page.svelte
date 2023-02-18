<script lang="ts">
	import Searchbar from '$lib/searchbar.svelte';
	import Hero from '$lib/hero.svelte';
	import { onMount } from 'svelte';
	let searchInput: HTMLInputElement;
	let heroButton: HTMLButtonElement;
	onMount(() => {
		const focusSearchBar = (event) => {
			event.preventDefault();
			searchInput.focus();
		};

		heroButton.addEventListener('click', (event) => {
			focusSearchBar(event);
		});
		return () => heroButton.removeEventListener('click', focusSearchBar);
	});
</script>

<main class="min-h-screen">
	<Hero bind:heroButton />
	<Searchbar bind:searchInput />
</main>
