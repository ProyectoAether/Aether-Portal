<script lang="ts">
	import AetherIcon from '$lib/aetherIcon.svelte';
	import Stats from '$lib/stats.svelte';
	import { typewriter } from '$lib/customTransitions';
	import { onMount } from 'svelte';
	export let heroButton: HTMLButtonElement;
	let show = false;
	onMount(() => {
		show = true;
	});
</script>

<div class="hero min-h-screen relative">
	<div class="hero-overlay absolute inset-0 gradient" />
	<div class="hero-content text-center text-neutral-content">
		<div class="max-w-md flex flex-col justify-center items-center">
			<AetherIcon />
			{#if show}
				<p class="italic mb-10 md:text-xl text-[#1E1D82] " in:typewriter={{ speed: 3 }}>
					This is an ontology portal that allows for quick search and preview of the most relevant
					ontologies of the Aether project.
				</p>
			{/if}
			<Stats />
			<button class="btn glass shadow text-primary my-10" bind:this={heroButton}>Get Started</button
			>
		</div>
	</div>
</div>

<style>
	.gradient {
		background-image: linear-gradient(
			129deg,
			hsl(325deg 76% 51%) 0%,
			hsl(284deg 70% 73%) 26%,
			hsl(257deg 70% 86%) 39%,
			hsl(202deg 92% 90%) 50%,
			hsl(215deg 77% 81%) 61%,
			hsl(221deg 73% 70%) 74%,
			hsl(220deg 76% 51%) 100%
		);
		filter: blur(125px);
	}
</style>
