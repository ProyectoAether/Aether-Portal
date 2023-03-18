<script lang="ts">
	import namespaces from '$lib/assets/ontologies/namespaces.json';
	import type { ClassSearchResult } from '$lib/stores/search';
	import LinkIcon from '$lib/svg/linkIcon.svelte';
	import { compactURI, formatURI, type CompactURIProps } from '$lib/utils';
	export let compacted: CompactURIProps;
	export let results: ClassSearchResult[];
	export let offset: number;
	export let limit: number;
</script>

{#if results.length > 0}
	<div class="overflow-x-auto">
		<table class="table w-full">
			<thead>
				<th />
				<th>Class Name</th>
				<th>Ontology</th>
				<th>Documentation</th>
			</thead>
			<tbody>
				{#each results.slice(offset * limit, (offset + 1) * limit) as result, index}
					<tr class="hover">
						<th>{index + 1 + limit * offset}</th>
						<td>
							<p class="whitespace-nowrap">
								{compacted.compacted
									? compactURI(result.uri, namespaces, compacted.sep)
									: result.uri}
							</p>
						</td>
						<td>
							<a
								href={`/ontologies/previews?uri=${formatURI(result.ontologyURI)}`}
								class="link link-primary link-hover whitespace-nowrap"
								>{compacted.compacted
									? compactURI(result.ontologyURI, namespaces, '')
									: result.ontologyURI}</a
							>
						</td>
						<td class="flex">
							<a
								href={formatURI(result.uri)}
								class="link link-primary whitespace-nowrap bg-primary-focus p-2 rounded-md hover:bg-base-300 transition-colors"
								><LinkIcon /></a
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
