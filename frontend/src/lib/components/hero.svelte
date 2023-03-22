<script lang="ts">
	import Stats from '$lib/components/stats.svelte';
	import AetherPortalLogo from '$lib/assets/svg/aether-portal-logo.svg';
	import { typewriter } from '$lib/transitions/typewriter';
	import { onMount } from 'svelte';
	export let show = false;
	onMount(() => {
		show = true;
	});
</script>

<div class="hero min-h-screen py-12 md:py-0">
	<div class="max-w-md flex flex-col justify-center items-center gap-5 text-center">
		<img src={AetherPortalLogo} alt="Aether Portal Logo" />
		<div class="h-32">
			{#if show}
				<p class="italic mb-10 md:text-xl text-[#1E1D82]" in:typewriter={{ speed: 3 }}>
					This is an ontology portal that allows for quick search and preview of the most relevant
					ontologies of the Aether project.
				</p>
			{/if}
		</div>
		<Stats />
	</div>
</div>
