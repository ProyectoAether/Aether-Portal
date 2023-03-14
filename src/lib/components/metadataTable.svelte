<script lang="ts">
	import type { Triple } from '$lib/assets/types';
	import { metadata } from '$lib/stores/metadata';
	import { fields } from '$lib/utils';
	import MetadataTableRow from './metadataTableRow.svelte';

	export let baseOntology: Triple[];
	export let ontologies: Triple[];
</script>

<table class="table table-normal border border-base-200">
	<tbody>
		{#each Array.from($metadata(fields, baseOntology, ontologies)) as [field, value]}
			<tr>
				<th class="whitespace-pre-wrap bg-base-200">{field}</th>
				<td class="whitespace-pre-wrap">
					<MetadataTableRow {value} {field} />
				</td>
			</tr>
		{/each}
	</tbody>
</table>
