<script lang="ts">
	import AetherIcon from '$lib/aetherIcon.svelte';
	import Stats from '$lib/stats.svelte';
	export let heroButton: HTMLButtonElement;
</script>

<div class="hero min-h-screen">
	<div class="hero-overlay bg-opacity-60" />
	<div class="hero-content text-center text-neutral-content">
		<div class="max-w-md flex flex-col justify-center items-center">
			<AetherIcon />
			<p class="italic mb-10 md:text-xl">
				This is an ontology portal that allows for quick search and preview of the most relevant
				ontologies of the Aether project. For more information checkout <a
					href="http://www.aether.es">here</a
				>
			</p>
			<Stats />
			<button class="btn btn-primary my-10" bind:this={heroButton}>Get Started</button>
		</div>
	</div>
</div>
