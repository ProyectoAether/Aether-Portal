<script lang="ts">
	import { base } from '$app/paths';
	import LinkIcon from '$lib/assets/svg/link-icon.svg';
	import { sha256 } from 'js-sha256';
	import aZ from '$lib/assets/svg/a-z.svg';
	import zA from '$lib/assets/svg/z-a.svg';
	import type { SearchResult } from '$lib/components/searchbar/types';
	import { namespacesFile } from '$lib/assets/data';

	export let results: SearchResult[];
	export let offset: number;
	export let limit: number;
	export let alphabeticalOrder: boolean;
	$: alphabeticalOrder
		? results.sort((a, b) => (a.compacted.toLowerCase() > b.compacted.toLowerCase() ? 1 : -1))
		: results.sort((a, b) => (a.compacted.toLowerCase() < b.compacted.toLowerCase() ? 1 : -1));
</script>

{#if results.length > 0}
	<div class="overflow-x-auto">
		<table class="table w-full table-fixed">
			<thead>
				<th class="w-1/12" />
				<th class="flex gap-2 items-center"
					><span>Name</span>
					<button on:click={() => (alphabeticalOrder = !alphabeticalOrder)}>
						{#if alphabeticalOrder}
							<img class="w-6 h-6" src={aZ} alt="A-Z sort" height="44px" width="44px" />
						{:else}
							<img class="w-6 h-6" src={zA} alt="Z-A sort" height="44px" width="44px" />
						{/if}
					</button>
				</th>
				<th>Type</th>
				<th>Ontology</th>
			</thead>
			<tbody>
				{#each results.slice(offset * limit, (offset + 1) * limit) as s, index}
					<tr class="hover">
						<th class="w-1/12">{index + 1 + limit * offset}</th>
						<td class="whitespace-normal break-all">
							<span class="align-middle">
								{s.compacted}
							</span>
							<a href={s.uri} class="align-middle inline-block"
								><img
									class="w-4 mr-2"
									width="40px"
									height="40px"
									src={LinkIcon}
									alt="Documentation Link Icon"
								/></a
							>
						</td>
						<td class="whitespace-normal break-all capitalize">
							{s.data_type.replace('_', ' ')}
						</td>
						<td class="whitespace-normal break-all">
							<a
								href="{base}/ontologies/{sha256(s.ontology)}"
								class="link text-primary align-middle inline"
								>{namespacesFile[s.ontology] || s.ontology}</a
							>
							<a href={s.ontology} class="align-middle inline-block">
								<img
									class="w-8 p-2"
									width="40px"
									height="40px"
									src={LinkIcon}
									alt="Documentation Link Icon"
								/>
							</a>
						</td>
					</tr>
				{/each}
			</tbody>
		</table>
	</div>
{:else}
	<slot name="fallback" />
{/if}
