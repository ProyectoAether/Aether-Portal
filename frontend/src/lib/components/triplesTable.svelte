<script lang="ts">
	import { compactURI, isURI } from '$lib/utils';
	import namespaces from '$lib/assets/ontologies/namespaces.json';
	import {
		OTHERS,
		OWL_CLASS,
		OWL_DATATYPE_PROPERTY,
		OWL_NAMED_INDIVIDUAL,
		OWL_OBJECT_PROPERTY,
		type OWLType,
		type Triple
	} from '$lib/assets/data';
	import LinkIcon from '$lib/assets/svg/link-icon.svg';
	import Modal from '$lib/components/modal/modal.svelte';

	export let compacted: boolean;
	export let offset: number;
	export let elementsPerPage: number;
	export let triples: Triple[];
	export let tableFilter: OWLType[];
	export let numElements: number;

	function getFilteredTriple(triples: Triple[], filters: OWLType[]): Triple[] {
		const res = [];
		const allFilters = [
			OWL_CLASS,
			OWL_OBJECT_PROPERTY,
			OWL_DATATYPE_PROPERTY,
			OWL_NAMED_INDIVIDUAL
		];
		for (const f of filters) {
			if (f === OTHERS) {
				res.push(...triples.filter((x) => !allFilters.includes(x.object)));
			} else {
				res.push(...triples.filter((x) => x.object === f));
			}
		}
		return res;
	}

	const order = [OWL_CLASS, OWL_OBJECT_PROPERTY, OWL_DATATYPE_PROPERTY, OWL_NAMED_INDIVIDUAL];

	function compareObjects(a: Triple, b: Triple) {
		const objectA = a.object;
		const objectB = b.object;

		// Check if the subjects are in the order array
		const isObjectAValid = order.includes(objectA);
		const isObjectBValid = order.includes(objectB);

		// If both subjects are in the order array, compare their indexes
		if (isObjectAValid && isObjectBValid) {
			const indexA = order.indexOf(objectA);
			const indexB = order.indexOf(objectB);

			return indexA - indexB;
		} else if (isObjectAValid) {
			// If only subject A is valid, put subject B last
			return -1;
		} else {
			// If only subject B is valid, put subject A last
			return 1;
		} // Get the indexes of the subjects in the order array
	}
	$: data = getFilteredTriple(triples, tableFilter).sort(compareObjects);
	$: numElements = data.length;
</script>

{#if data.length <= 0}
	<div class="flex justify-center items-center py-44">
		<h2 class="text-2xl">No results</h2>
	</div>
{:else}
	<div class="overflow-x-auto auto my-10">
		<table id="data" data-testid="triples-table" class="table table-compact w-full table-fixed">
			<thead class="text-primary">
				<tr>
					<th class="w-1/12" />
					<th>Subject</th>
					<th>Predicate</th>
					<th>Object</th>
				</tr>
			</thead>
			<tbody>
				{#each data.slice(offset * elementsPerPage, (offset + 1) * elementsPerPage) as triple, index}
					<tr>
						<th class="w-1/12 text-primary">{index + 1 + elementsPerPage * offset}</th>
						<td class="whitespace-normal break-all">
							<span class="align-middle">
								{compacted ? compactURI(triple.subject, namespaces, ':') : triple.subject}
							</span>
							<a
								href={triple.subject}
								rel="noreferrer"
								target="_blank"
								class="inline-block align-middle"
								><img
									src={LinkIcon}
									height="40px"
									width="40px"
									class="w-4 mr-2"
									alt="Documentation Link Icon"
								/></a
							>
						</td>
						<td class="whitespace-normal break-all">
							<span>
								{compacted ? compactURI(triple.predicate, namespaces, ':') : triple.predicate}
							</span>
						</td>
						<td class="whitespace-normal break-all">
							{#if isURI(triple['object'])}
								<div>
									<span class="inline align-middle">
										{compacted ? compactURI(triple.object, namespaces, ':') : triple.object}
									</span>
									<a
										href={triple.object}
										rel="noreferrer"
										target="_blank"
										class="inline-block align-middle"
									>
										<img
											src={LinkIcon}
											class="w-4 mr-2"
											height="40px"
											width="40px"
											alt="Documentation Link Icon"
										/>
									</a>
								</div>
							{:else if triple.object.length > 30}
								<Modal
									value={triple.object}
									title={compacted ? compactURI(triple.subject, namespaces, ':') : triple.subject}
								/>
							{:else}
								<p>{triple.object}</p>
							{/if}
						</td>
					</tr>
				{/each}
			</tbody>
		</table>
	</div>
{/if}
