<script lang="ts">
	import { OWL_CLASS, type OntologyURI, type Triple } from '$lib/assets/data';
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
	function getMappings(data: Triple[]) {
		const count = new Map<OntologyURI, Set<OntologyURI>>();
		for (const d of data) {
			if (d.object != OWL_CLASS) {
				continue;
			}
			let ontology = getOntology(d.subject) as OntologyURI;
			if (ontology === undefined || ontology === getUniformURI(excludedURI)) {
				continue;
			}

			if (new URL(ontology).pathname === '/') {
				ontology = d.subject as OntologyURI;
			}
			let currSet = count.get(ontology);

			if (currSet !== undefined) {
				count.set(ontology, currSet.add(d.subject));
			} else {
				count.set(ontology, new Set([d.subject]));
			}
		}
		return count;
	}
	function compactMapping(mapping: OntologyURI, ontology: OntologyURI) {
		mapping = mapping.replace(ontology, '');
		mapping = mapping.replace('/', '');
		mapping = mapping.replace('#', '');
		return mapping;
	}
	$: mappings = Array.from(getMappings(triples))
		.filter(([, count]) => count.size > 0)
		.sort(([, countA], [, countB]) => (countA.size > countB.size ? -1 : 1));
</script>

{#if mappings.length > 0}
	<table class="table w-full">
		<thead>
			<tr>
				<th />
				<th>Ontology</th>
				<th>Referenced classes</th>
			</tr>
		</thead>
		<tbody>
			{#each mappings as [ontology, count], i}
				<tr>
					<th>{i + 1}</th>
					<td
						><a href={ontology} target="_blank" rel="noreferrer" class="link text-primary">
							{ontology}
						</a>
					</td>
					<td>
						<div class="dropdown dropdown-top">
							<label tabindex="0" class="btn m-1">{count.size}</label>
							<ul
								tabindex="0"
								class="dropdown-content absolute menu p-2 shadow bg-base-100 rounded-box shadow-2xl"
							>
								{#each Array.from(count) as c}
									<li>
										<a target="_blank" rel="noreferrer" href={c}>{compactMapping(c, ontology)}</a>
									</li>
								{/each}
							</ul>
						</div></td
					>
				</tr>
			{/each}
		</tbody>
	</table>
{:else}
	<div class="flex justify-center items-center">
		<h2 class="text-2xl">No Mappings</h2>
	</div>
{/if}
