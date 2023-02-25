<script lang="ts">
	import type { MetadataField, OntologyMetadata } from '$lib/utils';
	export let metadata: OntologyMetadata<MetadataField, string[] | number>;
	export let imported: string[];
</script>

<table class="table table-normal border border-base-200">
	<tbody>
		{#each Array.from(metadata) as [field, value]}
			<tr>
				<th class="bg-base-200">{field}</th>
				<td class="whitespace-pre-wrap ">
					{#if Array.isArray(value)}
						{#each value as v}
							{#if field === 'Imports'}
								<div class="form-control">
									<label class="cursor-pointer label justify-start gap-2">
										<input
											type="checkbox"
											bind:group={imported}
											value={v}
											name="imported"
											class="checkbox checkbox-secondary"
										/>
										<span class="label-text">{v}</span>
									</label>
								</div>
							{:else}
								<p>{v}</p>
							{/if}
						{/each}
					{:else}
						<p>{value}</p>
					{/if}
				</td>
			</tr>
		{/each}
	</tbody>
</table>
