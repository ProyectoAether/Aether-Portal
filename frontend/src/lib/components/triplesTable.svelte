<script lang="ts">
	import { compactURI } from '$lib/utils';
	import namespaces from '$lib/assets/ontologies/namespaces.json';
	import type { Triple } from '$lib/assets/data';
	import LinkIcon from '$lib/assets/svg/link-icon.svg';
	import Modal from '$lib/components/modal/modal.svelte';
	export let compacted: boolean;
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
			{#each triples.slice(offset * limit, (offset + 1) * limit) as triple, index}
				<tr>
					<th>{index + 1 + limit * offset}</th>
					<td>
						<div class="flex items-center gap-3">
							<span>
								{compacted ? compactURI(triple.subject, namespaces, ':') : triple.subject}
							</span>
							<a
								href={triple.subject}
								class="link link-primary whitespace-nowrap bg-primary-focus p-2 rounded-md hover:bg-base-300 transition-colors"
								rel="noreferrer"
								target="_blank"
								><img
									src={LinkIcon}
									height="40px"
									width="40px"
									class="w-6 h-6"
									alt="Documentation Link Icon"
								/></a
							>
						</div>
					</td>
					<td>
						<div class="flex items-center gap-3">
							<span>
								{compacted ? compactURI(triple.predicate, namespaces, ':') : triple.predicate}
							</span>
						</div></td
					>
					<td class="whitespace-nowrap">
						{#if isURL(triple['object'])}
							<div class="flex items-center gap-3">
								<span>
									{compacted ? compactURI(triple.object, namespaces, ':') : triple.object}
								</span>
								<a
									href={triple.object}
									rel="noreferrer"
									class="link link-primary whitespace-nowrap bg-primary-focus p-2 rounded-md hover:bg-base-300 transition-colors"
									target="_blank"
									><img
										class="w-6 h-6"
										height="40px"
										width="40px"
										src={LinkIcon}
										alt="Documentation Link Icon"
									/></a
								>
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
