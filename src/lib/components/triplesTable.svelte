<script lang="ts">
	import type { Triple } from '$lib/assets/types';
	import { compactURI } from '$lib/utils';
	import namespaces from '$lib/assets/namespaces.json';
	export let triples: Triple[];
	export let compacted: boolean;
	export let offset: number;
	export let limit: number;
</script>

<div class="overflow-x-auto my-10">
	<table class="table table-compact w-full">
		<thead>
			<th>Subject</th>
			<th>Predicate</th>
			<th>Object</th>
		</thead>
		<tbody>
			{#each triples.slice(offset * limit, (offset + 1) * limit) as t}
				<tr class="hover">
					<td class="whitespace-pre-wrap"
						><a class="link link-primary" href={t['subject']} rel="noreferrer" target="_blank"
							>{compacted ? compactURI(t['subject'], namespaces) : t['subject']}</a
						>
						{#if t.predicate === 'http://www.w3.org/1999/02/22-rdf-syntax-ns#type' && t.object === 'http://www.w3.org/2002/07/owl#Ontology'}
							<a
								href={`/ontologies/previews?uri=${t['subject']}`}
								class="ml-auto btn btn-secondary btn-sm">Inspect</a
							>
						{/if}
					</td>
					<td class="whitespace-pre-wrap"
						><a class="link link-primary" href={t['predicate']} rel="noreferrer" target="_blank"
							>{compacted ? compactURI(t['predicate'], namespaces) : t['predicate']}</a
						></td
					>
					<td class="whitespace-pre-wrap">
						{#if t['object']}
							<a class="link link-primary" href={t['object']} rel="noreferrer" target="_blank"
								>{compacted ? compactURI(t['object'], namespaces) : t['object']}</a
							>
						{:else}
							{compacted ? compactURI(t['object'], namespaces) : t['object']}
						{/if}
					</td>
				</tr>
			{/each}
		</tbody>
	</table>
</div>
