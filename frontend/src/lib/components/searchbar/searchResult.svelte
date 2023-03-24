<script lang="ts">
	import { base } from '$app/paths';
	import { indexFile, namespacesFile } from '$lib/assets/data';
	import type { SearchResult } from '$lib/stores/search';
	import LinkIcon from '$lib/assets/svg/link-icon.svg';
	import { compactURI } from '$lib/utils';
	import { sha256 } from 'js-sha256';
	import aZ from '$lib/assets/svg/a-z.svg';
	import zA from '$lib/assets/svg/z-a.svg';
	export let compacted: boolean;
	export let results: SearchResult[];
	export let offset: number;
	export let limit: number;
	export let alphabeticalOrder: boolean;

	function sort(data: SearchResult[], alphabeticalOrder: boolean) {
		if (alphabeticalOrder) {
			return data.sort((a, b) =>
				compactURI(a.uri, namespacesFile, ':').toLowerCase() >=
				compactURI(b.uri, namespacesFile).toLowerCase()
					? 1
					: -1
			);
		} else {
			return data.sort((a, b) =>
				compactURI(a.uri, namespacesFile, ':').toLowerCase() <
				compactURI(b.uri, namespacesFile).toLowerCase()
					? 1
					: -1
			);
		}
	}
	$: ordered = sort(results, alphabeticalOrder);
</script>

{#if ordered.length > 0}
	<div class="overflow-x-auto">
		<table class="table w-full table-fixed">
			<thead>
				<th class="w-1/12" />
				<th class="flex gap-2 items-center"
					><span>Name</span>
					<button on:click={() => (alphabeticalOrder = !alphabeticalOrder)}>
						{#if alphabeticalOrder}
							<img class="w-6 h-6" src={aZ} alt="A-Z sort" height="44px" width="44px" />
						{:else}
							<img class="w-6 h-6" src={zA} alt="Z-A sort" height="44px" width="44px" />
						{/if}
					</button>
				</th>
				<th>Type</th>
				<th>Ontology</th>
			</thead>
			<tbody>
				{#each ordered.slice(offset * limit, (offset + 1) * limit) as result, index}
					{@const uri = indexFile[result.ontologyID].uri}
					<tr class="hover">
						<th class="w-1/12">{index + 1 + limit * offset}</th>
						<td class="whitespace-normal break-all">
							<span class="align-middle inline-block">
								{compacted ? compactURI(result.uri, namespacesFile, ':') : result.uri}
							</span>
							<a href={result.uri} class="align-middle inline-block"
								><img
									class="w-4 mr-2"
									width="40px"
									height="40px"
									src={LinkIcon}
									alt="Documentation Link Icon"
								/></a
							>
						</td>
						<td class="whitespace-normal break-all">
							{compacted ? compactURI(result.type, namespacesFile, ':') : result.type}
						</td>
						<td class="whitespace-normal break-all">
							<a
								href="{base}/ontologies/{sha256(uri)}"
								class="link text-primary align-middle inline-block"
								>{compacted ? compactURI(uri, namespacesFile, '') : uri}</a
							>
							<a href={result.uri} class="align-middle inline-block">
								<img
									class="w-8 p-2"
									width="40px"
									height="40px"
									src={LinkIcon}
									alt="Documentation Link Icon"
								/>
							</a>
						</td>
					</tr>
				{/each}
			</tbody>
		</table>
	</div>
{:else}
	<slot name="fallback" />
{/if}
