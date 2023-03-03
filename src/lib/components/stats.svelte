<script>
	import { numTriples, numClasses, numOntologies } from '$lib/stores/statistics';
</script>

<div class="stats shadow stats-vertical md:stats-horizontal">
	<div class="stat">
		<div class="stat-title">Number of Triples</div>
		<div data-testid="num-triples" class="stat-value text-secondary">{$numTriples}</div>
	</div>

	<div class="stat">
		<div class="stat-title">Number of Classes</div>
		<div data-testid="num-classes" class="stat-value text-secondary">{$numClasses}</div>
	</div>

	<div class="stat">
		<div class="stat-title">Number of Ontologies</div>
		<div data-testid="num-ontologies" class="stat-value text-secondary">{$numOntologies}</div>
	</div>
</div>
