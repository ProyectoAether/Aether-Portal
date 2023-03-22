<script lang="ts">
<<<<<<< HEAD
	import { compactURI, isURI } from '$lib/utils';
	import namespaces from '$lib/assets/ontologies/namespaces.json';
	import type { Triple } from '$lib/assets/data';
	import LinkIcon from '$lib/assets/svg/link-icon.svg';
	import Modal from '$lib/components/modal/modal.svelte';
	export let compacted: boolean;
	export let offset: number;
	export let elementsPerPage: number;
	export let triples: Triple[];
=======
	import { compactURI, type CompactURIProps } from '$lib/utils';
	import namespaces from '$lib/assets/ontologies/namespaces.json';
	import type { Triple } from '$lib/assets/data';
	import LinkIcon from '$lib/svg/linkIcon.svelte';
	import Modal from '$lib/components/modal/modal.svelte';
	export let compacted: CompactURIProps;
	export let offset: number;
	export let limit: number;
	export let triples: Triple[];
	function isURL(target: string): boolean {
		try {
			new URL(target);
			return true;
		} catch {
			return false;
		}
	}
>>>>>>> develop
</script>

<div class="overflow-x-auto my-10">
	<table id="data" data-testid="triples-table" class=" table table-compact w-full">
		<thead>
			<tr>
				<th />
				<th>Subject</th>
				<th>Predicate</th>
				<th>Object</th>
			</tr>
		</thead>
		<tbody>
<<<<<<< HEAD
			{#each triples.slice(offset * elementsPerPage, (offset + 1) * elementsPerPage) as triple, index}
				<tr>
					<th>{index + 1 + elementsPerPage * offset}</th>
					<td>
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
					<td>
						<span>
							{compacted ? compactURI(triple.predicate, namespaces, ':') : triple.predicate}
						</span>
					</td>
					<td>
						{#if isURI(triple['object'])}
							<div>
								<span class="inline-block align-middle">
									{compacted ? compactURI(triple.object, namespaces, ':') : triple.object}
=======
			{#each triples.slice(offset * limit, (offset + 1) * limit) as triple, index}
				<tr>
					<th>{index + 1 + limit * offset}</th>
					<td>
						<div class="flex items-center gap-3">
							<span>
								{compacted.compacted
									? compactURI(triple.subject, namespaces, compacted.sep)
									: triple.subject}
							</span>
							<a
								href={triple.subject}
								class="link link-primary whitespace-nowrap bg-primary-focus p-2 rounded-md hover:bg-base-300 transition-colors"
								rel="noreferrer"
								target="_blank"><LinkIcon /></a
							>
						</div>
					</td>
					<td>
						<div class="flex items-center gap-3">
							<span>
								{compacted.compacted
									? compactURI(triple.predicate, namespaces, compacted.sep)
									: triple.predicate}
							</span>
						</div></td
					>
					<td class="whitespace-nowrap">
						{#if isURL(triple['object'])}
							<div class="flex items-center gap-3">
								<span>
									{compacted.compacted
										? compactURI(triple.object, namespaces, compacted.sep)
										: triple.object}
>>>>>>> develop
								</span>
								<a
									href={triple.object}
									rel="noreferrer"
<<<<<<< HEAD
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
=======
									class="link link-primary whitespace-nowrap bg-primary-focus p-2 rounded-md hover:bg-base-300 transition-colors"
									target="_blank"><LinkIcon /></a
								>
							</div>
						{:else if triple.object.length > 30 && compactURI(triple.subject, namespaces, compacted.sep) != null}
							<Modal
								value={triple.object}
								title={compacted.compacted
									? compactURI(triple.subject, namespaces, compacted.sep)
									: triple.subject}
							/>
						{:else}
							{compacted.compacted
								? compactURI(triple.object, namespaces, compacted.sep)
								: triple.object}
>>>>>>> develop
						{/if}
					</td>
				</tr>
			{/each}
		</tbody>
	</table>
</div>
