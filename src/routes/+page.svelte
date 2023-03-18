<script lang="ts">
	import Hero from '$lib/components/hero.svelte';
	import OntologyCard from '$lib/components/card/ontologyCard.svelte';
	import { indexFile, type Index, type OntologyMetadata, type OntologyURI } from '$lib/assets/data';
	function getMax(indexFile: Index): [OntologyURI, OntologyMetadata] | [] {
		const entries = Object.entries(indexFile);
		if (entries.length === 0) {
			return [];
		}

		let max = entries[0];
		for (let i = 1; i < entries.length; ++i) {
			const mostRecentDate = new Date(max[1].created).getTime();
			const currDate = new Date(entries[i][1].created).getTime();
			if (mostRecentDate < currDate) {
				max = entries[i];
			}
		}
		return max as [OntologyURI, OntologyMetadata];
	}
	function getMostRecent(
		indexFile: Index,
		maxResult: number = 10
	): [OntologyURI, OntologyMetadata][] | [] {
		const clonedIndex = structuredClone(indexFile);
		const result = [];
		for (let i = 0; i < maxResult; ++i) {
			const max = getMax(clonedIndex);
			if (max.length === 0) {
				break;
			}
			result.push(max);
			delete clonedIndex[max[0]];
		}
		return result;
	}
</script>

<svelte:head>
	<title>Aether Portal</title>
</svelte:head>

<main class="min-h-screen px-6">
	<Hero />
	<div class="my-12 grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-4 gap-10">
		{#each getMostRecent(indexFile, 10) as [uri, file]}
			<OntologyCard
				{uri}
				description={file.description}
				label={file.label}
				title={file.title}
				logo={file.logo}
			/>
		{/each}
	</div>
</main>
