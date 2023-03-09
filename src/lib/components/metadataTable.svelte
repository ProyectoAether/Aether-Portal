<script lang="ts">
	import type { MetadataField, OntologyMetadata } from '$lib/utils';
	import MetadataTableRow from '$lib/components/metadataTableRow.svelte';
	export let metadata: OntologyMetadata<MetadataField, string[] | number>;
	export let imported: string[];
</script>

<table class="table table-normal border border-base-200">
	<tbody>
		{#each Array.from(metadata) as [field, value]}
			<tr>
				<th class="whitespace-pre-wrap bg-base-200">{field}</th>
				<td class="whitespace-pre-wrap">
					<MetadataTableRow {value} {field} bind:imported />
				</td>
			</tr>
		{/each}
	</tbody>
</table>
