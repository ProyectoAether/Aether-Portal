<script lang="ts">
	import ThemeToggle from '$lib/components/themeToggle.svelte';
</script>

<nav class="navbar bg-base-100">
	<div class="navbar-start">
		<h1>
			<a data-testid="home-link" class="text-2xl p-4 font-bold inline-block" href="/"
				>Ontology Portal</a
			>
		</h1>
	</div>

	<div class="navbar-end gap-4">
		<div class="flex flex-col-reverse lg:flex-row item-center justify-center">
			<ThemeToggle/>
			<a data-testid="ontologies-link" class="btn btn-primary" href="/ontologies">Show all</a>
		</div>
	</div>
</nav>
