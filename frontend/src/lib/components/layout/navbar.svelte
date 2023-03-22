<script lang="ts">
	import { base } from '$app/paths';
	import AetherPortalLogo from '$lib/svg/aetherPortalLogo.svelte';
</script>

<nav class="navbar bg-base-100 shadow-sm">
	<div class="navbar-start">
		<div class="dropdown">
			<a href="#navigation" class="btn btn-ghost lg:hidden">
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
			</a>
			<ul class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
				<li>
					<a data-testid="class-link" href="{base}/classes#search">Classes</a>
				</li>
				<li>
					<a data-testid="ontologies-link" href="{base}/ontologies#search">Ontologies</a>
				</li>

				<!-- <li> -->
				<!-- 	<a href="/help"> Help </a> -->
				<!-- </li> -->
			</ul>
		</div>

		<a data-testid="home-link" class="text-2xl p-4 font-bold inline-block" href="{base}/"
			><AetherPortalLogo /></a
		>
		<div class="navbar-start hidden lg:flex">
			<ul class="menu menu-horizontal px-1">
				<li>
					<a data-testid="class-link" class="font-medium" href="{base}/classes#search">Classes</a>
				</li>
				<li>
					<a data-testid="ontology-link" class="font-medium" href="{base}/ontologies#search"
						>Ontologies</a
					>
				</li>

				<!-- <li class="self-end"> -->
				<!-- 	<a class="inline-flex w-full" href="/help">Help</a> -->
				<!-- </li> -->
			</ul>
		</div>
	</div>
</nav>
