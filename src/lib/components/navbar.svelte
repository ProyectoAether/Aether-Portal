<script lang="ts">
	import ThemeToggle from '$lib/components/themeToggle.svelte';
</script>

<nav class="navbar bg-base-100">
	<div class="navbar-start gap-3">
		<div class="dropdown">
			<div class="btn btn-ghost lg:hidden">
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
			</div>
			<ul class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
				<li>
					<a data-testid="ontologies-link" href="/ontologies#class-input">Classes</a>
				</li>
				<li>
					<a data-testid="ontologies-link" href="/ontologies#ontology-input">Ontologies</a>
				</li>
			</ul>
		</div>

		<h1>
			<a data-testid="home-link" class="text-2xl p-4 font-bold inline-block" href="/"
				>Ontology Portal</a
			>
		</h1>

		<ul class="menu menu-horizontal px-1 gap-3 text-primary-content">
			<li>
				<a data-testid="ontologies-link" class="btn btn-primary" href="/ontologies#class-input"
					>Classes</a
				>
			</li>
			<li>
				<a data-testid="ontologies-link" class="btn btn-primary" href="/ontologies#ontology-input"
					>Ontologies</a
				>
			</li>
		</ul>
	</div>
	<div class="navbar-end gap-4">
		<ThemeToggle />
	</div>
</nav>
