<script lang="ts">
	import { base } from '$app/paths';
	export let uri: string;
	export let logo: string | undefined;
	export let title: string;
	export let label: string | undefined;
	export let description: string | undefined;
	import { formatURI } from '$lib/utils';
</script>

<a
	href="{base}/ontologies/previews?uri={formatURI(uri)}"
	class="card shadow-xl hover:shadow-sm hover:bg-base-200"
>
	{#if logo}
		<figure class="px-10 pt-10">
			<img src={logo} height="100px" width="100px" alt="ontology-icon" class="rounded-xl" />
		</figure>
	{/if}
	<div class="card-body items-center text-center">
		<h2 class="card-title">{title}</h2>
		<div class="p-4 line-clamp-6">
			<span>{label || ''}</span>
			<span class="italic text-base-content line-clamp-6">{description || ''}</span>
		</div>
	</div>
</a>
