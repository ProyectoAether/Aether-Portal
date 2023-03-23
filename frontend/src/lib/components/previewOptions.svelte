<script lang="ts">
	import { _View } from '$route/ontologies/[id]/+page';
	import { fade } from 'svelte/transition';

	export let view: _View;
	export let compacted: boolean;
</script>

<div
	class="my-6 p-6 grid grid-cols-1 place-items-start md:place-items-center gap-10 md:grid-cols-4"
>
	<label for="table-view" class="cursor-pointer flex justify-center items-center gap-4">
		<input
			type="radio"
			id="table-view"
			data-testid="table-view"
			bind:group={view}
			class="radio radio-info"
			value={_View.Table}
		/>
		<span>Table</span></label
	>

	<label for="hierarchy-view" class="cursor-pointer flex justify-center items-center gap-4">
		<input
			type="radio"
			id="hierarchy-view"
			data-testid="hierarchy-view"
			bind:group={view}
			class="radio radio-info"
			value={_View.Hierarchy}
		/>

		<span>Class Hierarchy</span>
	</label>

	<label for="mappings" class="cursor-pointer flex justify-center items-center gap-4">
		<input
			type="radio"
			data-testid="mappings-toggle"
			id="mappings"
			class="radio radio-info"
			bind:group={view}
			value={_View.Mapping}
		/>
		<span>Mappings</span>
	</label>
	<label
		for="compact"
		class="cursor-pointer flex justify-center items-center gap-4"
		transition:fade
	>
		<input
			type="checkbox"
			data-testid="compact-toggle"
			id="compact"
			disabled={view === _View.Mapping}
			class="toggle toggle-info"
			bind:checked={compacted}
		/>
		<span>Compact</span>
	</label>
</div>
