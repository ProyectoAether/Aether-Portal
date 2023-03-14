<script lang="ts">
	import namespaces from '$lib/assets/namespaces.json';
	import type { ClassSearchResult } from '$lib/stores/search';
	import LinkIcon from '$lib/svg/linkIcon.svelte';
	import { compactURI, type CompactURIProps } from '$lib/utils';
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
				<th>Name</th>
				<th>Documentation</th>
			</thead>
			<tbody>
				{#each results.slice(offset * limit, (offset + 1) * limit) as result, i}
					<tr>
						<th>{i + 1}</th>
						<td>
							<a
								href={`/ontologies/previews?uri=${result.ontologyURI}`}
								class="link link-primary link-hover whitespace-nowrap"
								>{compacted.compacted
									? compactURI(result.uri, namespaces, compacted.sep)
									: result.uri}</a
							>
						</td>

						<td class="flex justify-center">
							<a
								href={result.uri}
								class="link link-primary whitespace-nowrap bg-base-200 p-2 rounded-md hover:bg-base-300 transition-colors"
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
