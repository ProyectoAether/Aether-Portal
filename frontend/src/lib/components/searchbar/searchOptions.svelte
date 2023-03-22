<script lang="ts">
	export let compacted: boolean | undefined;
	export let alphabeticalOrder: boolean | undefined;
</script>

<div class="flex flex-wrap gap-4 py-5">
	{#if compacted !== undefined}
		<div class="form-control ">
			<label class="cursor-pointer label">
				<span class="label-text ml-auto mr-2">Compact</span>
				<input type="checkbox" class="toggle toggle-primary" bind:checked={compacted} />
			</label>
		</div>
	{/if}
	<div class="form-control ">
		<label class="cursor-pointer label">
			<span class="label-text ml-auto mr-2">Z-A</span>
			<input type="checkbox" class="toggle toggle-primary" bind:checked={alphabeticalOrder} />
			<span class="label-text mr-auto ml-2">A-Z</span>
		</label>
	</div>
</div>
