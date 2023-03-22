<script lang="ts">
	import { base } from '$app/paths';
	import { indexFile } from '$lib/assets/data';
	import namespaces from '$lib/assets/ontologies/namespaces.json';
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
</script>

{#if results.length > 0}
	<div class="overflow-x-auto">
		<table class="table w-full">
			<thead>
				<th />
				<th class="flex gap-2 items-center"
					><span>Name</span>
					<button on:click={() => (alphabeticalOrder = !alphabeticalOrder)}>
						{#if alphabeticalOrder}
							<img class="w-8 h-8" src={aZ} alt="A-Z sort" height="44px" width="44px" />
						{:else}
							<img class="w-8 h-8" src={zA} alt="Z-A sort" height="44px" width="44px" />
						{/if}
					</button>
				</th>
				<th>Type</th>
				<th>Ontology</th>
			</thead>
			<tbody>
				{#each results.slice(offset * limit, (offset + 1) * limit) as result, index}
					{@const uri = indexFile[result.ontologyID].uri}
					<tr class="hover">
						<th>{index + 1 + limit * offset}</th>
						<td class="flex items-center gap-3">
							<span class="whitespace-nowrap">
								{compacted ? compactURI(result.uri, namespaces, ':') : uri}
							</span>
							<a href={result.uri} class="link link-primary whitespace-nowrap"
								><img
									class="w-8 hover:bg-base-200 rounded p-2"
									width="40px"
									height="40px"
									src={LinkIcon}
									alt="Documentation Link Icon"
								/></a
							>
						</td>
						<td>
							<p class="whitespace-nowrap">
								{compacted ? compactURI(result.type, namespaces, ':') : uri}
							</p>
						</td>
						<td class="flex items-center">
							<a
								href="{base}/ontologies/{sha256(uri)}"
								class="link text-primary-focus link-hover whitespace-nowrap"
								>{compacted ? compactURI(uri, namespaces, '') : uri}</a
							>
							<a href={result.uri}>
								<img
									class="w-8 hover:bg-base-200 rounded p-2"
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
