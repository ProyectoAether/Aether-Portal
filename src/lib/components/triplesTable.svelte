<script lang="ts">
	import type { Triple } from '$lib/assets/types';
	import { compactURI } from '$lib/utils';
	import namespaces from '$lib/assets/namespaces.json';
	import { OWL_ONTOLOGY, RDF_TYPE } from '$lib/uri';
	export let triples: Triple[];
	export let compacted: boolean;
	export let offset: number;
	export let limit: number;
</script>

<div class="overflow-x-auto my-10">
	<table data-testid="triples-table" class="table table-compact w-full">
		<thead>
			<tr>
				<th />
				<th>Subject</th>
				<th>Predicate</th>
				<th>Object</th>
			</tr>
		</thead>
		<tbody>
			{#each triples.slice(offset * limit, (offset + 1) * limit) as triple, index}
				<tr class="hover">
					<th>{index + 1}</th>
					<td class="whitespace-pre-wrap"
						><a class="link link-primary" href={triple.subject} rel="noreferrer" target="_blank"
							>{compacted ? compactURI(triple.subject, namespaces) : triple.subject}</a
						>
						{#if triple.predicate === RDF_TYPE && triple.object === OWL_ONTOLOGY}
							<a
								href={`/ontologies/previews?uri=${triple.subject}`}
								class="ml-auto btn btn-secondary btn-sm">Inspect</a
							>
						{/if}
					</td>
					<td class="whitespace-pre-wrap"
						><a class="link link-primary" href={triple.predicate} rel="noreferrer" target="_blank"
							>{compacted ? compactURI(triple.predicate, namespaces) : triple.predicate}</a
						></td
					>
					<td class="whitespace-pre-wrap">
						{#if triple['object']}
							<a class="link link-primary" href={triple.object} rel="noreferrer" target="_blank"
								>{compacted ? compactURI(triple.object, namespaces) : triple.object}</a
							>
						{:else}
							{compacted ? compactURI(triple.object, namespaces) : triple.object}
						{/if}
					</td>
				</tr>
			{/each}
		</tbody>
	</table>
</div>
