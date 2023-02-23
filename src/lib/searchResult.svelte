<script lang="ts">
	import { filteredData, searchStore } from '$lib/stores/search';
	import { expandURI, isURI } from '$lib/utils';
</script>

{#if $filteredData.slice($searchStore.options.offset * $searchStore.options.limit, ($searchStore.options.offset + 1) * $searchStore.options.limit).length > 0}
	<div class="relative overflow-x-auto">
		<table class="table w-full">
			<thead>
				<th>Subject</th>
				<th>Predicate</th>
				<th>Object</th>
			</thead>
			<tbody>
				{#each $filteredData.slice($searchStore.options.offset * $searchStore.options.limit, ($searchStore.options.offset + 1) * $searchStore.options.limit) as filtered}
					<tr class="hover">
						<td class="whitespace-pre-wrap"
							><a
								class="link link-primary"
								href={expandURI(filtered['subject'])}
								rel="noreferrer"
								target="_blank">{filtered['subject']}</a
							></td
						>
						<td class="whitespace-pre-wrap"
							><a
								class="link link-primary"
								href={expandURI(filtered['predicate'])}
								rel="noreferrer"
								target="_blank">{filtered['predicate']}</a
							></td
						>
						<td class="whitespace-pre-wrap">
							{#if isURI(expandURI(filtered['object']))}
								<a
									class="link link-primary"
									href={expandURI(filtered['object'])}
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
