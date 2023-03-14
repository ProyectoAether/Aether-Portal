<script lang="ts">
	import {
		fields,
		isMetadataField,
		isStatistic,
		type MetadataField,
		type MetadataFieldPredicate,
		type OntologyMetadata
	} from '$lib/utils';
	import type { Triple } from '$lib/assets/types';
	import MetadataTableRow from './metadataTableRow.svelte';
	export let baseOntology: Triple[];
	export let ontologies: Triple[];
	let metadata: OntologyMetadata<MetadataField, string[] | number> = new Map<
		MetadataField,
		string[] | number
	>();

	function getMetadata(fields: MetadataFieldPredicate, ontology: Triple[], ontologies: Triple[]) {
		for (const [field, predicate] of Object.entries(fields)) {
			if (isMetadataField(field)) {
				metadata.set(
					field as MetadataField,
					ontology.filter((x) => x.predicate === predicate).map((x) => x.object)
				);
			} else if (isStatistic(field)) {
				metadata.set(
					field as MetadataField,
					// in this case it's the object
					ontologies.filter((x) => x.object === predicate).map((x) => x.object).length
				);
			}
		}
		return metadata;
	}
</script>

<table class="table table-normal border border-base-200">
	<tbody>
		{#each Array.from(getMetadata(fields, baseOntology, ontologies)) as [field, value]}
			<tr>
				<th class="whitespace-pre-wrap bg-base-200">{field}</th>
				<td class="whitespace-pre-wrap">
					<MetadataTableRow {value} {field} />
				</td>
			</tr>
		{/each}
	</tbody>
</table>
