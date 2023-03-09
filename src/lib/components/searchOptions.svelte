<script lang="ts">
	export let compacted: boolean;
	export let owlClass: boolean;
	export let owlDatatypeProperty: boolean;
	export let owlObjectProperty: boolean;
	export let owlIndividuals: boolean;
	export let alphabeticalOrder: boolean;
</script>

<div class="grid place-items-start sm:grid-cols-2 lg:grid-cols-4 md:grid-cols-3 py-6 px-3">
	<div class="form-control ">
		<label class="cursor-pointer label">
			<span class="label-text ml-auto mr-2">Classes</span>
			<input type="checkbox" class="toggle toggle-primary" bind:checked={owlClass} />
		</label>
	</div>
	<div class="form-control">
		<label class="cursor-pointer label">
			<span class="label-text ml-auto mr-2">Datatype Properties</span>
			<input type="checkbox" class="toggle toggle-primary" bind:checked={owlDatatypeProperty} />
		</label>
	</div>
	<div class="form-control ">
		<label class="cursor-pointer label">
			<span class="label-text ml-auto mr-2">Object Properties</span>
			<input type="checkbox" class="toggle toggle-primary" bind:checked={owlObjectProperty} />
		</label>
	</div>
	<div class="form-control ">
		<label class="cursor-pointer label">
			<span class="label-text ml-auto mr-2">Individuals</span>
			<input type="checkbox" class="toggle toggle-primary" bind:checked={owlIndividuals} />
		</label>
	</div>
	<div class="form-control ">
		<label class="cursor-pointer label">
			<span class="label-text ml-auto mr-2">Compact</span>
			<input type="checkbox" class="toggle toggle-primary" bind:checked={compacted} />
		</label>
	</div>
	<div class="form-control ">
		<label class="cursor-pointer label">
			<span class="label-text ml-auto mr-2">Z-A</span>
			<input type="checkbox" class="toggle toggle-primary" bind:checked={alphabeticalOrder} />
			<span class="label-text mr-auto ml-2">A-Z</span>
		</label>
	</div>
</div>
