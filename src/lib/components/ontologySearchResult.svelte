<script lang="ts">
	import namespaces from '$lib/assets/ontologies/namespaces.json';
	import type { OntologySearchResult } from '$lib/stores/search';
	import { compactURI, formatURI } from '$lib/utils';
	import Modal from './modal.svelte';
	export let results: OntologySearchResult[];
	export let offset: number;
	export let limit: number;
</script>

{#if results.length > 0}
	<div class="overflow-x-auto">
		<table class="table w-full">
			<thead>
				<tr>
					<th />
					<th>Name</th>
					<th>Label</th>
					<th>Description</th>
				</tr>
			</thead>
			<tbody>
				{#each results.slice(offset * limit, (offset + 1) * limit) as result, i}
					<tr>
						<th>{i + 1}</th>
						<td
							><a
								class="link link-primary link-hover block"
								href={`/ontologies/previews?uri=${formatURI(result.uri)}`}
								>{compactURI(result.uri, namespaces)}</a
							>
						</td>
						<td>{result.label || ''}</td>
						<td>
							{#if result.description && result.description.length > 30}
								<Modal value={result.description} title={result.uri} />
							{:else if result.description && result.description.length <= 30}
								<p>{result.description}</p>
							{/if}
						</td>
					</tr>
				{/each}
			</tbody>
		</table>
	</div>
{:else}
	<slot name="fallback" />
{/if}
