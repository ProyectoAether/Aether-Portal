<script lang="ts">
	import {
		OTHERS,
		OWL_CLASS,
		OWL_DATATYPE_PROPERTY,
		OWL_NAMED_INDIVIDUAL,
		OWL_OBJECT_PROPERTY,
		type OWLType
	} from '$lib/assets/data';

	export let tableFilter: OWLType[];
	$: data = [
		{ label: 'Classes', value: OWL_CLASS },
		{ label: 'Object properties', value: OWL_OBJECT_PROPERTY },
		{ label: 'Datatype properties', value: OWL_DATATYPE_PROPERTY },
		{ label: 'Individuals', value: OWL_NAMED_INDIVIDUAL },
		{ label: 'Others', value: OTHERS }
	];
</script>

<div
	class="my-6 p-6 grid grid-cols-1 place-items-start md:place-items-center gap-10 md:grid-cols-5"
>
	{#each data as { label, value }}
		<label class="cursor-pointer flex justify-center items-center gap-4">
			<span class="label-text">{label}</span>
			<input type="checkbox" bind:group={tableFilter} class="checkbox checkbox-primary" {value} />
		</label>
	{/each}
</div>
