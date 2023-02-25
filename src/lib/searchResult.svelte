<script lang="ts">
	import { filteredData, searchStore } from '$lib/stores/search';
	import { compactURI, expandURI, isURI } from '$lib/utils';
	import namespaces from '$lib/assets/namespaces.json';
</script>

{#if $filteredData.slice($searchStore.options.offset * $searchStore.options.limit, ($searchStore.options.offset + 1) * $searchStore.options.limit).length > 0}
	<div class="container overflow-x-auto">
		<table class="table w-full">
			<thead>
				<th>Subject</th>
				<th>Predicate</th>
				<th>Object</th>
			</thead>
			<tbody>
				{#each $filteredData.slice($searchStore.options.offset * $searchStore.options.limit, ($searchStore.options.offset + 1) * $searchStore.options.limit) as filtered}
					<tr class="hover">
						<td class="whitespace-pre-wrap flex justify-between items-center gap-4"
							><a
								class="link link-primary"
								href={expandURI(filtered['subject'], namespaces)}
								rel="noreferrer"
								target="_blank">{filtered['subject']}</a
							>
							{#if compactURI(filtered.predicate,namespaces) === 'vann:preferredNamespacePrefix'}
								<a
									href={`/ontologies/previews?uri=${expandURI(filtered['subject'], namespaces)}`}
									class="ml-auto btn btn-secondary btn-sm">Inspect</a
								>
							{/if}
						</td>
						<td class="whitespace-pre-wrap"
							><a
								class="link link-primary"
								href={expandURI(filtered['predicate'], namespaces)}
								rel="noreferrer"
								target="_blank">{filtered['predicate']}</a
							></td
						>
						<td class="whitespace-pre-wrap">
							{#if isURI(expandURI(filtered['object'], namespaces))}
								<a
									class="link link-primary"
									href={expandURI(filtered['object'], namespaces)}
									rel="noreferrer"
									target="_blank">{filtered['object']}</a
								>
							{:else}
								{filtered['object']}
							{/if}
						</td>
					</tr>
				{/each}
			</tbody>
		</table>
	</div>
{:else}
	<h2 class="p-10 italic font-bold text-3xl">No matching results</h2>
{/if}
