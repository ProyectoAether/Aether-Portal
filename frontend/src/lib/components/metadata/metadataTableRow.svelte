<script lang="ts">
	export let value: string[] | string | number;
	export let field: string;
	export let imports: string[];
</script>

{#if Array.isArray(value)}
	{#each value as v}
		{#if field === 'imports'}
			<div class="form-control">
				<label class="cursor-pointer label justify-start gap-2">
					<input
						type="checkbox"
						bind:group={imports}
						value={v}
						name="imported"
						class="checkbox checkbox-primary"
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
