<script lang="ts">
	import Hero from '$lib/components/hero.svelte';
	import OntologyCard from '$lib/components/card/ontologyCard.svelte';
	import { indexFile } from '$lib/assets/data';
	const sortedByCreation = Object.entries(indexFile).sort(([, a], [, b]) =>
		new Date(a.created).getTime() < new Date(b.created).getTime() ? 1 : -1
	);
</script>

<svelte:head>
	<title>Aether Portal</title>
	<meta
		name="description"
		content="An ontology portal that allows for quick search and preview of the most relevant ontologies from the Aether Project.
                Several BigData algorithms are shown here and the user can filter and get a ontology by its properties or name."
	/>
</svelte:head>

<main class="min-h-screen px-6">
	<Hero />
	<div class="my-12 grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-4 gap-10 place-items-center">
		{#each sortedByCreation.slice(0, 10) as [id, file]}
			<OntologyCard
				{id}
				description={file.description}
				title={file.title}
				logo={file.logo}
			/>
		{/each}
	</div>
</main>
