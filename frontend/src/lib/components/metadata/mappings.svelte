<script lang="ts">
	import type { OntologyURI, Triple } from '$lib/assets/data';
	import { getUniformURI, isURI } from '$lib/utils';

	export let triples: Triple[];
	export let excludedURI: string;
	function getOntology(uri: string): OntologyURI | undefined {
		let result: string | undefined;
		for (let i = uri.length - 1; i > 0; i--) {
			if (uri[i] === '/' || uri[i] === '#') {
				result = uri.slice(0, i);
				break;
			}
		}
		return isURI(result) ? (result as OntologyURI) : undefined;
	}
	type TripleKey = 'object' | 'predicate' | 'subject';
	function getMappings(data: Triple[]) {
		const count = new Map<OntologyURI, Set<OntologyURI>>();
		for (const d of data) {
			for (const s of ['object', 'predicate', 'subject']) {
				let ontology = getOntology(d[s as TripleKey]) as OntologyURI;
				if (ontology === undefined || ontology === getUniformURI(excludedURI)) {
					continue;
				}

				if (new URL(ontology).pathname === '/') {
					ontology = d[s as TripleKey] as OntologyURI;
				}
				let currSet = count.get(ontology);
				if (currSet !== undefined) {
					count.set(ontology, currSet.add(d[s as TripleKey] as OntologyURI));
				} else {
					count.set(ontology, new Set());
				}
			}
		}
		return count;
	}
	$: mappings = Array.from(getMappings(triples))
		.filter(([, count]) => count.size > 0)
		.sort(([, countA], [, countB]) => (countA.size > countB.size ? -1 : 1));
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
							><a href={ontology} target="_blank" rel="noreferrer" class="link text-primary">
								{ontology}
							</a>
						</td>
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
