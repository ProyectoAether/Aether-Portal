<script lang="ts">
	import { page } from '$app/stores';
	import AetherPortalLogo from '$lib/svg/aetherPortalLogo.svelte';
	$: show = $page.url.pathname === '/ontologies' ? false : true;
</script>

<nav class="navbar bg-base-100">
	<div class="navbar-start">
		<div class="dropdown">
			<label tabindex="0" class="btn btn-ghost lg:hidden">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					class="h-5 w-5"
					fill="none"
					viewBox="0 0 24 24"
					stroke="currentColor"
					><path
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						d="M4 6h16M4 12h8m-8 6h16"
					/></svg
				>
			</label>
			<ul
				tabindex="0"
				class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
			>
				<li>
					<a data-testid="class-link" href="/ontologies#class-input">Classes</a>
				</li>
				<li>
					<a data-testid="ontologies-link" href="/ontologies#ontology-input">Ontologies</a>
				</li>

				<li>
					<a href="/help"> Help </a>
				</li>
			</ul>
		</div>

		<a data-testid="home-link" class="text-2xl p-4 font-bold inline-block" href="/"
			><AetherPortalLogo /></a
		>
		<div class="navbar-start hidden lg:flex">
			<ul class="menu menu-horizontal px-1">
				{#if show}
					<li>
						<a data-testid="class-link" href="/ontologies#class-input">Classes</a>
					</li>
					<li>
						<a data-testid="ontology-link" href="/ontologies#ontology-input">Ontologies</a>
					</li>

					<li class="self-end">
						<a class="inline-flex w-full" href="/help">Help</a>
					</li>
				{/if}
			</ul>
		</div>
	</div>
</nav>
