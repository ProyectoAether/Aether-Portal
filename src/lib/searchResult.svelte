<script lang="ts">
	import { filteredData } from '$lib/stores/search';

	import { namespaces as myNamespaces } from '$lib/assets/types';
	function formatURI(uri: string) {
		const tmp = uri;
		for (const namespace of myNamespaces) {
			uri = uri.replace(namespace, '');
		}
		return uri === '' ? tmp : uri;
	}
	function formatType(uri?: string | string[]) {
		if (uri === undefined) {
			return;
		}
		const namespaces = ['owl:', 'rdfs:', 'rdf:', ...myNamespaces];
		if (Array.isArray(uri)) {
			uri = uri.join('</p><p class="text-right>');
		}
		let result: string = `<p class="text-right">${uri}</p>`;

		for (const n of namespaces) {
			result = result.replace(n, '');
		}
		return result;
	}
	// function expandURI(uri: string) {}
</script>

<div class="py-3 text-sm">
	{#each $filteredData as filtered}
		{#each filtered['item']['@graph'] as innerFilter}
			<div
				class="flex justify-start cursor-pointer text-gray-700 hover:text-blue-400 hover:bg-blue-100 rounded-md px-2 py-2 my-2"
			>
				<span class="bg-green-400  h-2 w-2 m-2 rounded-full" />
				<div class="flex-grow font-medium px-2">
					{formatURI(innerFilter['@id'])}
				</div>
				<div class="text-sm  font-normal text-gray-500 tracking-wide">
					{@html formatType(innerFilter['@type'])}
					<a class="link link-primary block whitespace-nowrap" href={innerFilter['@id']}
						>{innerFilter['@id']}</a
					>
				</div>
			</div>
		{/each}
	{/each}
</div>
