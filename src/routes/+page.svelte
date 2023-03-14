<script lang="ts">
	import Hero from '$lib/components/hero.svelte';
</script>

<svelte:head>
	<title>Ontology Portal</title>
</svelte:head>

<main class="min-h-screen">
	<Hero />
	<div class="my-16 container grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10 justify-center">
		<div class="card glass">
			<figure><img src="/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="car!" /></figure>
			<div class="card-body">
				<h2 class="card-title">Life hack</h2>
				<p>How to park your car at your garage?</p>
			</div>
		</div>
		<div class="card  glass">
			<figure><img src="/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="car!" /></figure>
			<div class="card-body">
				<h2 class="card-title">Life hack</h2>
				<p>How to park your car at your garage?</p>
			</div>
		</div>
		<div class="card  glass">
			<figure><img src="/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="car!" /></figure>
			<div class="card-body">
				<h2 class="card-title">Life hack</h2>
				<p>How to park your car at your garage?</p>
			</div>
		</div>
		<div class="card  glass">
			<figure><img src="/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="car!" /></figure>
			<div class="card-body">
				<h2 class="card-title">Life hack</h2>
				<p>How to park your car at your garage?</p>
			</div>
		</div>
	</div>
</main>
