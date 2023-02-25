<script lang="ts">
	import type { Triple } from '$lib/assets/types';
	export let triples: Triple[];
</script>

<div class="overflow-x-auto my-10">
	<table class="table table-compact w-full">
		<thead>
			<th>Subject</th>
			<th>Predicate</th>
			<th>Object</th>
		</thead>
		<tbody>
			{#each triples as t}
				<tr>
					<td class="whitespace-pre-wrap">{t.subject}</td>
					<td class="whitespace-pre-wrap">{t.predicate}</td>
					<td class="whitespace-pre-wrap">{t.object}</td>
				</tr>
			{/each}
		</tbody>
	</table>
</div>
