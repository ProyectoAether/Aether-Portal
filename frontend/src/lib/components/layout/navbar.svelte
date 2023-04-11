<script lang="ts">
	import { base } from '$app/paths';
	import AetherPortalLogo from '$lib/assets/svg/aether-portal-logo.svg';
	import accordion from '$lib/assets/svg/accordion.svg';
</script>

<nav class="navbar bg-base-100 shadow-sm text-primary">
	<div class="navbar-start w-full md:w-2/3">
		<div class="dropdown">
			<button tabindex="0" class="btn btn-ghost lg:hidden">
				<img class="w-8" src={accordion} width="8px" height="8px" alt="Navbar accordion" />
				<span class="sr-only">Navigation accordion</span>
			</button>
			<ul class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
				<li>
					<a data-testid="class-link" href="{base}/search" class="active:bg-secondary active:text-white">Search</a>
				</li>
				<li>
					<a data-testid="ontologies-link" class="active:bg-secondary active:text-white" href="{base}/ontologies"
						>Ontologies</a
					>
				</li>
				<li>
					<a href="{base}/submit" class="active:bg-secondary active:text-white">Submit</a>
				</li>
			</ul>
		</div>

		<a data-testid="home-link" class="text-2xl p-4 font-bold inline-block" href="{base}/"
			><img
				class="w-44"
				src={AetherPortalLogo}
				width="180px"
				height="85px"
				alt="Aether Portal Logo"
			/></a
		>
		<div class="navbar-start hidden lg:flex">
			<ul class="menu menu-horizontal px-1">
				<li>
					<a data-testid="class-link" class="font-medium active:bg-secondary active:text-white" href="{base}/search"
						>Search</a
					>
				</li>
				<li>
					<a
						data-testid="ontology-link"
						class="font-medium active:bg-secondary active:text-white"
						href="{base}/ontologies">Ontologies</a
					>
				</li>
				<li>
					<a class="font-medium active:bg-secondary active:text-white" href="{base}/submit">Submit</a>
				</li>
			</ul>
		</div>
	</div>
</nav>
