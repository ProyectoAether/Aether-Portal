<script lang="ts">
	import { OWL_CLASS, type OntologyURI, type Triple } from '$lib/assets/data';
	import { getUniformURI, isURI } from '$lib/utils';
	import Menu from '$lib/assets/svg/menu.svg';
	import LinkIcon from '$lib/assets/svg/link-icon.svg';

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
	const mappings: [string, Set<string>, boolean][] = Array.from(getMappings(triples))
		.filter(([, count]) => count.size > 0)
		.sort(([, countA], [, countB]) => (countA.size > countB.size ? -1 : 1))
		.map(([ontology, count]: [string, Set<string>]) => [ontology, count, false]);
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
			{#each mappings as [ontology, count, show], i}
				<tr>
					<th>{i + 1}</th>
					<td
						><a href={ontology} target="_blank" rel="noreferrer" class="link text-primary">
							{ontology}
						</a>
					</td>
					<td class="flex items-center gap-3">
						<p>{count.size}</p>
						<button class="btn btn-ghost" on:click={() => (show = !show)}
							><img src={Menu} alt="toggle" class="w-8" width="8px" height="8px" /></button
						>
					</td>
				</tr>
				{#if show}
					{#each Array.from(count) as c, j}
						<tr>
							<th>
								{i + 1}.{j + 1}
							</th>
							<th>
								<span class="align-middle">
									{compactMapping(c, ontology)}
								</span>
								<a href={c} rel="noreferrer" target="_blank" class="inline-block align-middle"
									><img
										src={LinkIcon}
										height="40px"
										width="40px"
										class="w-4 mr-2"
										alt="Documentation Link Icon"
									/></a
								>
							</th>
							<td />
						</tr>
					{/each}
				{/if}
			{/each}
		</tbody>
	</table>
{:else}
	<div class="flex justify-center items-center py-44">
		<h2 class="text-2xl">No Mappings</h2>
	</div>
{/if}
