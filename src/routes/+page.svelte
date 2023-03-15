<script lang="ts">
	import Hero from '$lib/components/hero.svelte';
	const cardsImgs = [
		{
			name: 'clm',
			type: 'jpg',
			title: 'Universidad de Castilla la Mancha',
			span: '1/2'
		},
		{
			name: 'khaos',
			type: 'jpeg',
			title: 'Grupo de investigación Khaos Research',
			span: '2/4'
		},
		{
			name: 'uma',
			type: 'jpg',
			title: 'Universidad de Málaga',
			span: '1/3'
		},
		{
			name: 'alicante',
			type: 'jpg',
			title: 'Universidad de Alicante',
			span: 3
		},
		{
			name: 'us',
			type: 'png',
			title: 'Universidad de Sevilla',
			span: '1/3'
		},
		{
			name: 'aether',
			type: 'png',
			title: 'Aether',
			span: '1/3'
		}
	];
</script>

<svelte:head>
	<title>Ontology Portal</title>
</svelte:head>

<main class="min-h-screen">
	<Hero />
	<div class="container grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-4 gap-10">
		{#each cardsImgs as { name, type, title }}
			<div class="card shadow-xl">
				<figure class="px-10 pt-10">
					<img class="rounded-xl" src={`/src/lib/assets/img/${name}.${type}`} alt={title} />
				</figure>
				<div class={`card-body`}>
					<p>{title}</p>
				</div>
			</div>
		{/each}
	</div>
</main>
