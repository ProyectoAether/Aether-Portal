<script lang="ts">
	import type { OWLType } from '$lib/assets/data';

	export let tableFilter: OWLType[];
	export let disabled: boolean;
	$: data = [
		{ label: 'Classes', value: 'http://www.w3.org/2002/07/owl#Class' },
		{ label: 'Object properties', value: 'http://www.w3.org/2002/07/owl#ObjectProperty' },
		{ label: 'Datatype properties', value: 'http://www.w3.org/2002/07/owl#DatatypeProperty' },
		{ label: 'Individuals', value: 'http://www.w3.org/2002/07/owl#NamedIndividual' }
	];
</script>

<div
	class="my-6 p-6 grid grid-cols-1 place-items-start md:place-items-center gap-10 md:grid-cols-4"
>
	{#each data as { label, value }}
		<label class="cursor-pointer flex justify-center items-center gap-4">
			<span class="label-text">{label}</span>
			<input
				type="checkbox"
                {disabled}
				bind:group={tableFilter}
				class="checkbox checkbox-primary"
				{value}
			/>
		</label>
	{/each}
</div>
