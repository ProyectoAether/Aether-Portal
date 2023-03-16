<script lang="ts">
	import {
		OWL_CLASS,
		OWL_DATATYPE_PROPERTY,
		OWL_NAMED_INDIVIDUAL,
		OWL_OBJECT_PROPERTY,
		RDF_TYPE,
		type OntologyData,
		type OntologyMetadata,
		type Triple
	} from '$lib/assets/data';
	import MetadataTableRow from './metadataTableRow.svelte';

	export let metadata: OntologyMetadata;
	export let triples: Triple[];
	export let imports: string[];
	const stringFields: string[] = [
		'title',
		'uri',
		'label',
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
			numIndividuals: 0,
			numClasses: 0,
			numDatatypeProperties: 0,
			numObjecProperties: 0
		};
		const options = {
			[OWL_NAMED_INDIVIDUAL]: () => (stats.numIndividuals = ++stats.numIndividuals),
			[OWL_CLASS]: () => (stats.numClasses = ++stats.numClasses),
			[OWL_DATATYPE_PROPERTY]: () => (stats.numDatatypeProperties = ++stats.numDatatypeProperties),
			[OWL_OBJECT_PROPERTY]: () => (stats.numObjecProperties = ++stats.numObjecProperties)
		};
		for (const { predicate, object } of imported) {
			if (predicate !== RDF_TYPE) {
				continue;
			}
			const adder = options[object];
			if (adder) {
				adder();
			}
		}
		return stats;
	}
	$: stats = getStats(triples);
</script>

<table class="table table-normal border border-base-200">
	<tbody>
		{#each stringFields as field}
			<tr>
				<th class="whitespace-pre-wrap bg-base-200 uppercase">{field}</th>
				<td class="whitespace-pre-wrap">
					<MetadataTableRow {field} value={metadata[field]} bind:imports />
				</td>
			</tr>
		{/each}
		<tr>
			<th class="whitespace-pre-wrap bg-base-200 uppercase">Number of classes</th>
			<td class="whitespace-pre-wrap">
				<MetadataTableRow field="Number of classes" value={stats.numClasses} bind:imports />
			</td>
		</tr>
		<tr>
			<th class="whitespace-pre-wrap bg-base-200 uppercase">Number of datatype properties</th>
			<td class="whitespace-pre-wrap">
				<MetadataTableRow
					field="Number of datatype properties"
					value={stats.numDatatypeProperties}
					bind:imports
				/>
			</td>
		</tr>
		<tr>
			<th class="whitespace-pre-wrap bg-base-200 uppercase">Number of object properties</th>
			<td class="whitespace-pre-wrap">
				<MetadataTableRow
					field="Number of object properties"
					value={stats.numObjecProperties}
					bind:imports
				/>
			</td>
		</tr>

		<tr>
			<th class="whitespace-pre-wrap bg-base-200 uppercase">Number of named individuals</th>
			<td class="whitespace-pre-wrap">
				<MetadataTableRow
					field="Number of named individuals"
					value={stats.numIndividuals}
					bind:imports
				/>
			</td>
		</tr>
	</tbody>
</table>
