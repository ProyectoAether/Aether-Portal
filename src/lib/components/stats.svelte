<script lang="ts">
	import { numTotalTriples, numTotalClasses, numOntologies } from '$lib/stores/statistics';
	// @ts-ignore
	import Countup from 'svelte-countup';
</script>

<div class="stats shadow stats-vertical md:stats-horizontal">
	<div class="stat">
		<div class="stat-title">Number of Triples</div>
		<div data-testid="num-triples" class="stat-value text-secondary">
			<Countup value={$numTotalTriples} />
		</div>
	</div>

	<div class="stat">
		<div class="stat-title">Number of Classes</div>
		<div data-testid="num-classes" class="stat-value text-secondary">
			<Countup value={$numTotalClasses} />
		</div>
	</div>

	<div class="stat">
		<div class="stat-title">Number of Ontologies</div>
		<div data-testid="num-ontologies" class="stat-value text-secondary">
			<Countup value={$numOntologies} />
		</div>
	</div>
</div>
