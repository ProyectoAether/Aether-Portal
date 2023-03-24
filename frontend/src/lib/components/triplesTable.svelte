<script lang="ts">
	import { compactURI, isURI } from '$lib/utils';
	import namespaces from '$lib/assets/ontologies/namespaces.json';
	import type { Triple } from '$lib/assets/data';
	import LinkIcon from '$lib/assets/svg/link-icon.svg';
	import Modal from '$lib/components/modal/modal.svelte';
	export let compacted: boolean;
	export let offset: number;
	export let elementsPerPage: number;
	export let triples: Triple[];
</script>

<div class="overflow-x-auto auto my-10">
	<table id="data" data-testid="triples-table" class="table table-compact w-full table-fixed">
		<thead>
			<tr>
				<th class="w-1/12" />
				<th>Subject</th>
				<th>Predicate</th>
				<th>Object</th>
			</tr>
		</thead>
		<tbody>
			{#each triples.slice(offset * elementsPerPage, (offset + 1) * elementsPerPage) as triple, index}
				<tr>
					<th class="w-1/12">{index + 1 + elementsPerPage * offset}</th>
					<td class="whitespace-normal break-all">
						<span class="inline-block align-middle">
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
								<span class="inline-block align-middle">
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
