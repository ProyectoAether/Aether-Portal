<script lang="ts">
	import { onMount } from 'svelte';
	import { goto } from '$app/navigation';

	export let searchQuery: string;
	export let title: string;
	export let kbShortcut: string;
	let searchInput: HTMLInputElement;
	function handleOnSubmit(event: SubmitEvent) {
		event.preventDefault();
		goto('/ontologies');
	}
	onMount(() => {
		const handler = (event: KeyboardEvent) => {
			if (event.key.toLowerCase() === kbShortcut && event.ctrlKey === true) {
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
	<h2 class="text-2xl font-semibold py-2 px-2">{title}</h2>
	<div data-testid="shortcut-hint" class="italic bg-gray-200 rounded-lg px-4 py-2 inline-block">
		<span class="text-black">Press</span>
		<kbd class="kbd">Ctrl</kbd>
		<span class="text-black">+</span>
		<kbd class="kbd">{kbShortcut}</kbd>
		<span class="text-black">to start searching</span>
	</div>
	<slot name="search-options" />
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
			bind:value={searchQuery}
			bind:this={searchInput}
			placeholder={title}
			autocomplete="off"
		/>
	</div>
	<slot name="search-results" />
</form>
