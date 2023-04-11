<script lang="ts">
	import {
		OWL_CLASS,
		OWL_DATATYPE_PROPERTY,
		OWL_NAMED_INDIVIDUAL,
		OWL_OBJECT_PROPERTY,
		RDF_TYPE,
		type OntologyMetadata,
		type OWLType,
		type Triple,
		type OntologyURI
	} from '$lib/assets/data';
	import MetadataTableRow from '$lib/components/metadata/metadataTableRow.svelte';

	export let metadata: OntologyMetadata;
	export let triples: Triple[];
	export let failedImports: OntologyURI[];
	export let imports: OntologyURI[];
	const stringFields: (keyof OntologyMetadata)[] = [
		'title',
		'uri',
		'prefix',
		'description',
		'creator',
		'publisher',
		'created',
		'rights',
		'imports'
	];
	function getStats(imported: Triple[]) {
		let stats = {
			'Number of Individuals': 0,
			'Number of Classes': 0,
			'Number of Datatype Properties': 0,
			'Number of Object Properties': 0
		};
		const options = {
			[OWL_NAMED_INDIVIDUAL]: () => ++stats['Number of Individuals'],
			[OWL_CLASS]: () => ++stats['Number of Classes'],
			[OWL_DATATYPE_PROPERTY]: () => ++stats['Number of Datatype Properties'],
			[OWL_OBJECT_PROPERTY]: () => ++stats['Number of Object Properties']
		};
		for (const { predicate, object } of imported) {
			if (predicate !== RDF_TYPE) {
				continue;
			}
			const adder = options[object as OWLType];
			if (adder) {
				adder();
			}
		}
		return stats;
	}
	$: stats = getStats(triples);
</script>

<table class="table table-normal">
	<tbody>
		{#each stringFields as field}
			<tr>
				<th class="text-primary whitespace-pre-wrap bg-base-200 uppercase">{field}</th>
				<td class="whitespace-pre-wrap">
					<MetadataTableRow {field} {failedImports} value={metadata[field]} bind:imports />
				</td>
			</tr>
		{/each}
		{#each Object.entries(stats) as [field, value]}
			<tr>
				<th class="text-primary whitespace-pre-wrap bg-base-200 uppercase">{field}</th>
				<td class="whitespace-pre-wrap">
					<p>{value}</p>
				</td>
			</tr>
		{/each}
	</tbody>
</table>

<style>
	th {
		font-size: calc(1vh + 0.5rem);
	}
	td {
		font-size: calc(1vh + 0.5rem);
	}
</style>
