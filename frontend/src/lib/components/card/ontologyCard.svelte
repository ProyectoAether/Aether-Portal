<script lang="ts">
	import { base } from '$app/paths';
	export let id: string;
	export let logo: string | undefined = undefined;
	export let title: string | undefined = undefined;
	export let label: string | undefined = undefined;
	export let description: string | undefined = undefined;
</script>

<a
	href="{base}/ontologies/{id}"
	class="card card-normal shadow-xl hover:shadow-sm hover:bg-base-200 h-96 md:w-96 w-80"
>
	{#if logo}
		<figure class="px-10 pt-10">
			<img src={logo} class="w-16" height="80px" width="80px" alt="ontology-icon" />
		</figure>
	{/if}
	<div class="card-body items-center text-center mt-auto">
		<h2 class="card-title">{title}</h2>
		<div class="p-4 flex flex-col gap-4">
			<span>{label || ''}</span>
			<span class="italic text-base-content line-clamp-3">{description || ''}</span>
		</div>
	</div>
</a>
