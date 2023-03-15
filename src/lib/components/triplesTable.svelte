<script lang="ts">
	import { compactURI, type CompactURIProps } from '$lib/utils';
	import namespaces from '$lib/assets/ontologies/namespaces.json';
	import type { Triple } from '$lib/assets/types';
	import LinkIcon from '$lib/svg/linkIcon.svelte';
	export let compacted: CompactURIProps;
	export let offset: number;
	export let limit: number;
	export let ontologies: Triple[];
	function isURL(target: string): boolean {
		try {
			new URL(target);
			return true;
		} catch {
			return false;
		}
	}
</script>

<div class="overflow-x-auto my-10">
	<table id="data" data-testid="triples-table" class="table table-compact w-full">
		<thead>
			<tr>
				<th />
				<th>Subject</th>
				<th>Predicate</th>
				<th>Object</th>
			</tr>
		</thead>
		<tbody>
			{#each ontologies.slice(offset * limit, (offset + 1) * limit) as triple, index}
				<tr class="hover">
					<th>{index + 1}</th>
					<td>
						<span>
							{compacted.compacted
								? compactURI(triple.subject, namespaces, compacted.sep)
								: triple.subject}
						</span>
						<a href={triple.subject} class="inline-block" rel="noreferrer" target="_blank"
							><LinkIcon /></a
						>
					</td>
					<td class="">
						<span>
							{compacted.compacted
								? compactURI(triple.predicate, namespaces, compacted.sep)
								: triple.predicate}
						</span>
						<a href={triple.predicate} class="inline-block" rel="noreferrer" target="_blank"
							><LinkIcon /></a
						>
					</td>
					<td class="whitespace-nowrap">
						{#if isURL(triple['object'])}
							<span>
								{compacted.compacted
									? compactURI(triple.object, namespaces, compacted.sep)
									: triple.object}
							</span>
							<a href={triple.object} rel="noreferrer" class="inline-block" target="_blank"
								><LinkIcon /></a
							>
						{:else}
							{compacted.compacted
								? compactURI(triple.object, namespaces, compacted.sep)
								: triple.object}
						{/if}
					</td>
				</tr>
			{/each}
		</tbody>
	</table>
</div>
