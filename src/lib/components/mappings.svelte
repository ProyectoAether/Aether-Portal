<script lang="ts">
	import type { Triple } from '$lib/assets/types';
	import namespaces from '$lib/assets/namespaces.json';

	export let ontologies: Triple[];
	function getOntology(uri: string): string {
		const coincidence = [];
		for (const ontologyURI of Object.keys(namespaces)) {
			if (uri.includes(ontologyURI)) {
				coincidence.push(ontologyURI);
			}
		}
		let result = coincidence[0];
		for (const c of coincidence) {
			if (c.length > result.length) {
				result = c;
			}
		}
		return result;
	}
	type TripleKey = 'object' | 'predicate' | 'subject';
	function getMappings(data: Triple[]) {
		const count = new Map<string, Set<string>>();
		for (const uri of Object.keys(namespaces)) {
			count.set(uri, new Set());
		}
		for (const d of data) {
			for (const s of ['object', 'predicate', 'subject']) {
				const ontology = getOntology(d[s as TripleKey]);
				let currSet = count.get(ontology);
				console.log(currSet, ontology);
				if (currSet !== undefined && ontology !== undefined) {
					count.set(ontology, currSet.add(d[s as TripleKey]));
				}
			}
		}
		return count;
	}
	$: mappings = Array.from(getMappings(ontologies)).filter(([_, count]) => count.size > 0);
</script>

<div class="overflow-x-auto">
	<table class="table w-full">
		<thead>
			<tr>
				<th />
				<th>Ontology</th>
				<th>Mappings</th>
			</tr>
		</thead>
		<tbody>
			{#if mappings.length > 0}
				{#each mappings as [ontology, count], i}
					<tr>
						<th>{i + 1}</th>
						<td
							><a href={ontology} target="_blank" rel="noreferrer" class="link link-primary"
								>{ontology}</a
							></td
						>
						<td>{count.size}</td>
					</tr>
				{/each}
			{:else}
				<div class="flex justify-center items-center">
					<h2 class="text-2xl">No Mappings</h2>
				</div>
			{/if}
		</tbody>
	</table>
</div>
