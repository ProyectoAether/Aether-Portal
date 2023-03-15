<script lang="ts">
	import Hero from '$lib/components/hero.svelte';
	import indexes from '$lib/assets/ontologies/index.json';
	import { compactURI, formatURI } from '$lib/utils';
	import fallback from '$lib/assets/img/fallback.svg';
	import namespaces from '$lib/assets/ontologies/namespaces.json';
	function fallbackImage(img: Event) {
		img.target.src = fallback;
	}
</script>

<svelte:head>
	<title>Ontology Portal</title>
</svelte:head>

<main class="min-h-screen">
	<Hero />
	<div class="container grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-4 gap-10">
		{#each Object.entries(indexes) as [uri, file]}
			<a href={`/ontologies/previews?uri=${formatURI(uri)}`} class="card glass shadow-xl">
				<figure class="px-10 pt-10">
					<img
						src={file.logo}
						height="100px"
						width="100px"
						alt="ontology-icon"
						class="rounded-xl"
						on:error={fallbackImage}
					/>
				</figure>
				<div class="card-body items-center text-center">
					<h2 class="card-title">{compactURI(uri, namespaces)}</h2>
					<div class="p-4">
						<span>{file.label}</span>
						<span class="italic text-neutral line-clamp-6">{file.description}</span>
					</div>
				</div>
			</a>
		{/each}
	</div>
</main>
