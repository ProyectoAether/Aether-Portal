<script lang="ts">
	import type { MetadataField } from '$lib/utils';

	export let value: number | string[];
	export let field: MetadataField;
	export let imported: string[];
</script>

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
