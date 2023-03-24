<script lang="ts">
	import type { OntologyURI } from '$lib/assets/data';
	import { isURI } from '$lib/utils';

	export let value: string[] | string | number;
	export let field: string;
	export let imports: OntologyURI[];
	export let failedImports: OntologyURI[];
</script>

{#if Array.isArray(value)}
	{#each value as v}
		{#if field === 'imports'}
			{@const failed = failedImports.includes(v)}
			<div class:tooltip={failed} data-tip={failed ? v + ' is not available' : ''}>
				<label
					class:hover:cursor-not-allowed={failed}
					class="cursor-pointer label justify-start gap-2"
				>
					<input
						type="checkbox"
						bind:group={imports}
						disabled={failed}
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
{:else if typeof value === 'string' && isURI(value)}
	<a class="link link-primary" href={value}>{value}</a>
{:else}
	<p>{value}</p>
{/if}
