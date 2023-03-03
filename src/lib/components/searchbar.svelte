<script lang="ts">
	import { searchStore } from '$lib/stores/search';
	import { onMount } from 'svelte';
	import SearchOptions from '$lib/components/searchOptions.svelte';
	import { goto } from '$app/navigation';

	export let compacted: boolean;
	let searchInput: HTMLInputElement;
	function handleOnSubmit(event: SubmitEvent) {
		event.preventDefault();
		goto('/ontologies');
	}
	onMount(() => {
		const handler = (event: KeyboardEvent) => {
			if (event.key.toLowerCase() === 'k' && event.ctrlKey === true) {
				event.preventDefault();
				const yOffsetPixels: number = -350;
				const y: number =
					searchInput.getBoundingClientRect().top + window.pageYOffset + yOffsetPixels;
				window.scrollTo({ top: y, behavior: 'smooth' });
				searchInput.focus();
			}
		};
		document.addEventListener('keydown', (event) => {
			handler(event);
		});
		return () => document.removeEventListener('keydown', handler);
	});
</script>

<form on:submit={handleOnSubmit} class="container p-10">
	<h2 class="text-2xl font-semibold py-2 px-2">Search</h2>
	<div
		data-testid="shortcut-hint"
		class="mx-4 italic bg-gray-200 rounded-lg px-4 py-2 inline-block"
	>
		<span class="text-black">Press</span>
		<kbd class="kbd">Ctrl</kbd>
		<span class="text-black">+</span>
		<kbd class="kbd">k</kbd>
		<span class="text-black">to start searching</span>
	</div>
	<SearchOptions bind:compacted />
	<div class="mb-4 flex items-center input input-bordered w-full max-w-x  rounded-lg shadow">
		<div class="pl-2">
			<svg class="fill-current  w-6 h-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
				<path
					class="heroicon-ui"
					d="M16.32 14.9l5.39 5.4a1 1 0 0 1-1.42 1.4l-5.38-5.38a8 8 0 1 1 1.41-1.41zM10 16a6 6 0 1 0 0-12 6 6 0 0 0 0 12z"
				/>
			</svg>
		</div>
		<input
			data-testid="search-input"
			class="w-full focus:outline-none py-2 px-2"
			id="search"
			type="text"
			tabindex="0"
			bind:value={$searchStore.searchQuery}
			bind:this={searchInput}
			placeholder="Search class or ontology"
			autocomplete="off"
		/>
		<div class="tooltip text-left tooltip-left" data-tip="http://www.w3.org/2002/07/owl#Ontology">
			<button
				data-testid="ontology-filter"
				type="reset"
				class="ml-auto mr-4 p-2 badge badge-secondary"
				on:click={(e) => {
					e.preventDefault();
					$searchStore.searchQuery = 'http://www.w3.org/2002/07/owl#Ontology';
					searchInput.focus();
				}}
				on:focus={() => undefined}
				on:mouseover={() => (searchInput.placeholder = 'http://www.w3.org/2002/07/owl#Ontology')}
				on:mouseleave={() => (searchInput.placeholder = 'Search class or ontology')}
				>#Ontologies</button
			>
		</div>
	</div>
	<slot />
</form>
