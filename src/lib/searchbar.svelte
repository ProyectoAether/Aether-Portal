<script lang="ts">
	import { searchStore } from '$lib/stores/search';
	import { onMount } from 'svelte';
	import SearchOptions from '$lib/searchOptions.svelte';
	import { goto } from '$app/navigation';
	import SearchResult from '$lib/searchResult.svelte';

	export let searchInput: HTMLInputElement;
	export let showInlineResult = true;

	function handleOnSubmit(event: SubmitEvent) {
		event.preventDefault();
		goto('/ontologies');
	}

	onMount(() => {
		const handler = (event: KeyboardEvent) => {
			if (event.key.toLowerCase() === 'f' && event.ctrlKey === true) {
				event.preventDefault();
				searchInput.focus();
			}
		};
		document.addEventListener('keydown', (event) => {
			handler(event);
		});
		return () => document.removeEventListener('keydown', handler);
	});
</script>

<form on:submit={handleOnSubmit}>
	<div class="w-full mx-auto px-6">
		<div class="flex justify-center p-4 px-3 py-10">
			<div class="w-full max-w-6xl">
				<div class="bg-white shadow-md rounded-lg px-3 py-2 mb-4">
					<h2 class="block text-gray-700 text-2xl font-semibold py-2 px-2">Search</h2>
					<div class="mx-4 italic bg-gray-200 rounded-lg px-4 py-2 inline-block">
						Press <kbd class="kbd kbd-sm">Ctrl</kbd> +
						<kbd class="kbd kbd-sm">f</kbd>
						to start searching
					</div>
					<SearchOptions />
					<div class="mb-4 flex items-center bg-gray-200 rounded-md">
						<div class="pl-2">
							<svg
								class="fill-current text-gray-500 w-6 h-6"
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 24 24"
							>
								<path
									class="heroicon-ui"
									d="M16.32 14.9l5.39 5.4a1 1 0 0 1-1.42 1.4l-5.38-5.38a8 8 0 1 1 1.41-1.41zM10 16a6 6 0 1 0 0-12 6 6 0 0 0 0 12z"
								/>
							</svg>
						</div>
						<input
							class="w-full rounded-md bg-gray-200 text-gray-700 leading-tight focus:outline-none py-2 px-2"
							id="search"
							type="text"
							bind:value={$searchStore.searchQuery}
							placeholder="Search class or ontology"
							bind:this={searchInput}
							autocomplete="off"
						/>
					</div>
					<svelte:component this={showInlineResult ? SearchResult : undefined} />
				</div>
			</div>
		</div>
	</div>
</form>
