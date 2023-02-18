<script lang="ts">
	import { onMount } from 'svelte';
	import jsonLD from '$lib/assets/ontology.json';
	import Fuse from 'fuse.js';
	import { clickOutside } from '$lib/clickOutside';
	let isDropdownOpen = false;

	function toggleDropdown() {
		isDropdownOpen = !isDropdownOpen;
	}
	function handleClickOutside() {
		isDropdownOpen = false;
	}
	let filterQuery = '';
	let fuse: Fuse<string>;

	$: filteredDatas = filterQuery ? fuse.search(filterQuery).map((result) => result.item) : datas;

	let datas: string[] = [];
	onMount(() => {
		datas = [...jsonLD['@graph'].map((graph) => graph['@id'])];
		fuse = new Fuse(datas, { keys: ['@graph.@graph'] });
	});
	const categories = ['Classes', 'Ontologies'];
</script>

<div class="min-h-screen py-36 flex flex-col gap-12 container mx-auto px-44">
	<h1 class="text-blue text-6xl">Ontology portal</h1>

	<form>
		<div class="flex relative">
			<label
				for="search-dropdown"
				class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Your Email</label
			>
			<button
				id="dropdown-button"
				data-dropdown-toggle="dropdown"
				class="flex-shrink-0  z-10 inline-flex items-center py-2.5 px-4 text-sm font-medium text-center text-gray-900 bg-gray-100 border border-gray-300 rounded-l-lg hover:bg-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700 dark:text-white dark:border-gray-600"
				use:clickOutside
				on:outclick={handleClickOutside}
				type="button"
				on:click={toggleDropdown}
				>All categories <svg
					aria-hidden="true"
					class="w-4 h-4 ml-1"
					fill="currentColor"
					viewBox="0 0 20 20"
					xmlns="http://www.w3.org/2000/svg"
					><path
						fill-rule="evenodd"
						d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
						clip-rule="evenodd"
					/></svg
				></button
			>
			<div
				id="dropdown"
				class={`z-10 ${
					isDropdownOpen ? '' : 'hidden'
				} bg-white divide-y absolute my-11 divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700`}
			>
				<ul class="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdown-button">
					{#each categories as category}
						<li>
							<button
								type="button"
								class="inline-flex w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
								>{category}</button
							>
						</li>
					{/each}
				</ul>
			</div>

			<div class="relative w-full">
				<input
					type="search"
					id="search-dropdown"
					class="block p-2.5 w-full z-20 text-sm text-gray-900 bg-gray-50 rounded-r-lg border-l-gray-50 border-l-2 border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-l-gray-700  dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:border-blue-500"
					placeholder="Search Mockups, Logos, Design Templates..."
					bind:value={filterQuery}
					required
				/>
				<button
					type="submit"
					class="absolute top-0 right-0 p-2.5 text-sm font-medium text-white bg-blue-700 rounded-r-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
				>
					<svg
						aria-hidden="true"
						class="w-5 h-5"
						fill="none"
						stroke="currentColor"
						viewBox="0 0 24 24"
						xmlns="http://www.w3.org/2000/svg"
						><path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
						/></svg
					>
					<span class="sr-only">Search</span>
				</button>
			</div>
		</div>
	</form>
	{#each filteredDatas as data}
		<div>{data}</div>
	{/each}
</div>
<!-- <div>{JSON.stringify(data)}</div> -->
<div class="w-full max-w-screen-xl mx-auto px-6">
	<div class="flex justify-center p-4 px-3 py-10">
		<div class="w-full max-w-md">
			<div class="bg-white shadow-md rounded-lg px-3 py-2 mb-4">
				<div class="block text-gray-700 text-lg font-semibold py-2 px-2">Item List</div>
				<div class="flex items-center bg-gray-200 rounded-md">
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
						placeholder="Search teams or members"
					/>
				</div>
				<div class="py-3 text-sm">
					<div
						class="flex justify-start cursor-pointer text-gray-700 hover:text-blue-400 hover:bg-blue-100 rounded-md px-2 py-2 my-2"
					>
						<span class="bg-gray-400 h-2 w-2 m-2 rounded-full" />
						<div class="flex-grow font-medium px-2">Tighten Co.</div>
						<div class="text-sm font-normal text-gray-500 tracking-wide">Team</div>
					</div>
					<div
						class="flex justify-start cursor-pointer text-gray-700 hover:text-blue-400 hover:bg-blue-100 rounded-md px-2 py-2 my-2"
					>
						<span class="bg-green-400 h-2 w-2 m-2 rounded-full" />
						<div class="flex-grow font-medium px-2">Taylor Otwell</div>
						<div class="text-sm font-normal text-gray-500 tracking-wide">Member</div>
					</div>
					<div
						class="flex justify-start cursor-pointer text-gray-700 hover:text-blue-400 hover:bg-blue-100 rounded-md px-2 py-2 my-2"
					>
						<span class="bg-gray-400 h-2 w-2 m-2 rounded-full" />
						<div class="flex-grow font-medium px-2">Adam Wathan</div>
						<div class="text-sm font-normal text-gray-500 tracking-wide">Member</div>
					</div>
					<div
						class="flex justify-start cursor-pointer text-gray-700 hover:text-blue-400 hover:bg-blue-100 rounded-md px-2 py-2 my-2"
					>
						<span class="bg-gray-400 h-2 w-2 m-2 rounded-full" />
						<div class="flex-grow font-medium px-2">Duke Street Studio Inc.</div>
						<div class="text-sm font-normal text-gray-500 tracking-wide">Team</div>
					</div>
					<div
						class="flex justify-start cursor-pointer text-gray-700 hover:text-blue-400 hover:bg-blue-100 rounded-md px-2 py-2 my-2"
					>
						<span class="bg-green-400 h-2 w-2 m-2 rounded-full" />
						<div class="flex-grow font-medium px-2">Jeffrey Wey</div>
						<div class="text-sm font-normal text-gray-500 tracking-wide">Member</div>
					</div>
				</div>
				<div class="block bg-gray-200 text-sm text-right py-2 px-3 -mx-3 -mb-2 rounded-b-lg">
					<button class="hover:text-gray-600 text-gray-500 font-bold py-2 px-4"> Cancel </button>
					<button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
						Invite
					</button>
				</div>
			</div>
		</div>
	</div>
</div>
