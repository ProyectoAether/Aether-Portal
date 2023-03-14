<script lang="ts">
	import { compactURI, type CompactURIProps } from '$lib/utils';
	import namespaces from '$lib/assets/namespaces.json';
	import { OWL_ONTOLOGY, RDF_TYPE } from '$lib/uri';
	import type { Triple } from '$lib/assets/types';
	export let compacted: CompactURIProps;
	export let offset: number;
	export let limit: number;
	export let ontologies: Triple[];
	function isURL(target: string): boolean {
		try {
			new URL(target);
			return true;
		} catch {
			return false;
		}
	}
</script>

<div class="overflow-x-auto my-10">
	<table id="data" data-testid="triples-table" class="table table-compact w-full">
		<thead>
			<tr>
				<th />
				<th>Subject</th>
				<th>Predicate</th>
				<th>Object</th>
			</tr>
		</thead>
		<tbody>
			{#each ontologies.slice(offset * limit, (offset + 1) * limit) as triple, index}
				<tr class="hover">
					<th>{index + 1}</th>
					<td class="whitespace-pre-wrap"
						><a class="link link-primary" href={triple.subject} rel="noreferrer" target="_blank"
							>{compacted.compacted
								? compactURI(triple.subject, namespaces, compacted.sep)
								: triple.subject}</a
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
							>{compacted.compacted
								? compactURI(triple.predicate, namespaces, compacted.sep)
								: triple.predicate}</a
						></td
					>
					<td class="whitespace-pre-wrap">
						{#if isURL(triple['object'])}
							<a class="link link-primary" href={triple.object} rel="noreferrer" target="_blank"
								>{compacted.compacted
									? compactURI(triple.object, namespaces, compacted.sep)
									: triple.object}</a
							>
						{:else}
							{compacted.compacted
								? compactURI(triple.object, namespaces, compacted.sep)
								: triple.object}
						{/if}
					</td>
				</tr>
			{/each}
		</tbody>
	</table>
</div>
