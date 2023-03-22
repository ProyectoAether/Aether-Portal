<script lang="ts">
	import { View } from '$lib/utils';
	import { fade } from 'svelte/transition';

	export let view: View;
	export let compacted: boolean;
</script>

<div
	class="my-6 p-6 grid grid-cols-1 place-items-start md:place-items-center gap-10 md:grid-cols-4"
>
	<label for="table-view" class="flex justify-center items-center gap-4">
		<input
			type="radio"
			id="table-view"
			data-testid="table-view"
			bind:group={view}
			class="radio radio-info"
			value={View.Table}
		/>
		<span>Table</span></label
	>

	<label for="hierarchy-view" class="flex justify-center items-center gap-4">
		<input
			type="radio"
			id="hierarchy-view"
			data-testid="hierarchy-view"
			bind:group={view}
			class="radio radio-info"
			value={View.Hierarchy}
		/>

		<span>Class Hierarchy</span>
	</label>

	<label for="mappings" class="flex justify-center items-center gap-4">
		<input
			type="radio"
			data-testid="mappings-toggle"
			id="mappings"
			class="radio radio-info"
			bind:group={view}
			value={View.Mapping}
		/>
		<span>Mappings</span>
	</label>
	<label for="compact" class="flex justify-center items-center gap-4" transition:fade>
		<input
			type="checkbox"
			data-testid="compact-toggle"
			id="compact"
			disabled={view !== View.Table}
			class="toggle toggle-info"
			bind:checked={compacted}
		/>
		<span>Compact</span>
	</label>
</div>
