<script lang="ts">
	import Hero from '$lib/components/hero.svelte';
	const cardsImgs = [
		{
			name: 'clm',
			type: 'jpg',
			title: 'Universidad de Castilla la Mancha'
		},
		{
			name: 'khaos',
			type: 'jpeg',
			title: 'Grupo de investigación Khaos Research'
		},
		{
			name: 'uma',
			type: 'jpg',
			title: 'Universidad de Málaga'
		},
		{
			name: 'alicante',
			type: 'jpg',
			title: 'Universidad de Alicante'
		},
		{
			name: 'us',
			type: 'png',
			title: 'Universidad de Sevilla'
		}
	];
</script>

<svelte:head>
	<title>Ontology Portal</title>
</svelte:head>

<main class="min-h-screen">
	<Hero />
	<div class="my-16 container grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-10 justify-center">
		{#each cardsImgs as { name, type, title }}
			<div class="card glass">
				<figure><img src={`/src/lib/assets/img/${name}.${type}`} alt={title} /></figure>
				<div class="card-body">
					<p>{title}</p>
				</div>
			</div>
		{/each}
	</div>
</main>
