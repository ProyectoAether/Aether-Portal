<script lang="ts">
	import { base } from '$app/paths';
	import { indexFile } from '$lib/assets/data';
	import namespaces from '$lib/assets/ontologies/namespaces.json';
	import type { SearchResult } from '$lib/stores/search';
	import LinkIcon from '$lib/assets/svg/link-icon.svg';
	import { compactURI } from '$lib/utils';
	export let compacted: boolean;
	export let results: SearchResult[];
	export let offset: number;
	export let limit: number;
</script>

{#if results.length > 0}
	<div class="overflow-x-auto">
		<table class="table w-full">
			<thead>
				<th />
				<th>Name</th>
				<th>Type</th>
				<th>Ontology</th>
				<th>Documentation</th>
			</thead>
			<tbody>
				{#each results.slice(offset * limit, (offset + 1) * limit) as result, index}
					{@const uri = indexFile[result.ontologyID].uri}
					<tr class="hover">
						<th>{index + 1 + limit * offset}</th>
						<td>
							<p class="whitespace-nowrap">
								{compacted ? compactURI(result.uri, namespaces, ':') : uri}
							</p>
						</td>
						<td>
							<p class="whitespace-nowrap">
								{compacted ? compactURI(result.type, namespaces, ':') : uri}
							</p>
						</td>
						<td>
							<a
								href="{base}/ontologies/{uri}"
								class="link text-primary-focus link-hover whitespace-nowrap"
								>{compacted ? compactURI(uri, namespaces, '') : uri}</a
							>
						</td>
						<td class="flex">
							<a
								href={result.uri}
								class="link link-primary whitespace-nowrap bg-primary-focus p-2 rounded-md hover:bg-base-300 transition-colors"
								><img
									class="w-8"
									width="40px"
									height="40px"
									src={LinkIcon}
									alt="Documentation Link Icon"
								/></a
							>
						</td>
					</tr>
				{/each}
			</tbody>
		</table>
	</div>
{:else}
	<slot name="fallback" />
{/if}
