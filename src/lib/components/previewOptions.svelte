<script lang="ts">
	export let view: number;
	export let compacted: boolean;
</script>

<div class="my-6 flex gap-4">
	<input
		type="radio"
		id="table-view"
		data-testid="table-view"
		bind:group={view}
		name="radio-7"
		class="radio radio-info"
		value={0}
	/>
	<label for="table-view">Table View</label>

	<input
		type="radio"
		id="hierarchy-view"
		data-testid="hierarchy-view"
		bind:group={view}
		name="radio-7"
		class="radio radio-info"
		value={1}
	/>
	<label for="hierarchy-view">Class Hierarchy View</label>
	<label for="compact" class="ml-10">Compact</label>
	<input
		type="checkbox"
		data-testid="compact-toggle"
		id="compact"
		class="toggle toggle-accent"
		bind:checked={compacted}
	/>
</div>
