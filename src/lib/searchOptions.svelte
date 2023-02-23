<script lang="ts">
	import { searchStore } from '$lib/stores/search';
</script>

<div class="grid place-items-start sm:grid-cols-2 lg:grid-cols-4 md:grid-cols-3 py-6 px-3">
	<div class="form-control ">
		<label class="cursor-pointer label">
			<span class="label-text ml-auto mr-2">Classes</span>
			<input
				type="checkbox"
				class="toggle toggle-primary"
				bind:checked={$searchStore.options.owlClass}
			/>
		</label>
	</div>
	<div class="form-control"> 
		<label class="cursor-pointer label">
			<span class="label-text ml-auto mr-2">Datatype Properties</span>
			<input
				type="checkbox"
				class="toggle toggle-primary"
				bind:checked={$searchStore.options.owlDatatypeProperty}
			/>
		</label>
	</div>
	<div class="form-control ">
		<label class="cursor-pointer label">
			<span class="label-text ml-auto mr-2">Object Properties</span>
			<input
				type="checkbox"
				class="toggle toggle-primary"
				bind:checked={$searchStore.options.owlObjectProperty}
			/>
		</label>
	</div>
	<div class="form-control ">
		<label class="cursor-pointer label">
			<span class="label-text ml-auto mr-2">Individuals</span>
			<input
				type="checkbox"
				class="toggle toggle-primary"
				bind:checked={$searchStore.options.owlNamedIndividual}
			/>
		</label>
	</div>
	<div class="form-control ">
		<label class="cursor-pointer label">
			<span class="label-text ml-auto mr-2">Compact</span>
			<input
				type="checkbox"
				class="toggle toggle-primary"
				bind:checked={$searchStore.options.isCompacted}
			/>
		</label>
	</div>
	<div class="form-control ">
		<label class="cursor-pointer label">
			<span class="label-text ml-auto mr-2">Z-A</span>
			<input
				type="checkbox"
				class="toggle toggle-primary"
				bind:checked={$searchStore.options.alphabeticalOrder}
			/>
			<span class="label-text mr-auto ml-2">A-Z</span>
		</label>
	</div>

</div>
