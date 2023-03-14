<script lang="ts">
	import type { CompactURIProps } from '$lib/utils';

	export let view: number;
	export let compacted: CompactURIProps;
</script>

<div class="my-6 p-6 grid grid-cols-1 gap-10 md:grid-cols-3">
	<label for="table-view" class="flex justify-center items-center gap-4">
		<input
			type="radio"
			id="table-view"
			data-testid="table-view"
			bind:group={view}
			name="radio-7"
			class="radio radio-info"
			value={0}
		/>
		<span>Table View</span></label
	>

	<label for="hierarchy-view" class="flex justify-center items-center gap-4">
		<input
			type="radio"
			id="hierarchy-view"
			data-testid="hierarchy-view"
			bind:group={view}
			name="radio-7"
			class="radio radio-info"
			value={1}
		/>

		<span>Class Hierarchy View</span>
	</label>
	<label for="compact" class="flex justify-center items-center gap-4">
		<span>Compact</span>
		<input
			type="checkbox"
			data-testid="compact-toggle"
			id="compact"
			class="toggle toggle-accent"
			bind:checked={compacted.compacted}
		/>
	</label>
</div>
