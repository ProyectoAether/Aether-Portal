<script lang="ts">
	import { statsFile } from '$lib/assets/data';
    // @ts-ignore
	import Countup from 'svelte-countup';
	const duration = 1200;
</script>

<div class="stats shadow-lg stats-vertical lg:stats-horizontal text-sm md:text-lg">
	<div class="stat">
		<div class="stat-title">Number of Ontologies</div>
		<div data-testid="num-ontologies" class="stat-value text-primary">
			<Countup value={statsFile.numOntologies} {duration} />
		</div>
	</div>
	<div class="stat">
		<div class="stat-title">Number of Classes</div>
		<div data-testid="num-classes" class="stat-value text-primary">
			<Countup value={statsFile.numClasses} {duration} />
		</div>
	</div>
	<div class="stat">
		<div class="stat-title">Number of Datatype Properties</div>
		<div data-testid="num-triples" class="stat-value text-primary">
			<Countup value={statsFile.numDatatypeProperties} {duration} />
		</div>
	</div>

	<div class="stat">
		<div class="stat-title">Number of Object Properties</div>
		<div data-testid="num-triples" class="stat-value text-primary">
			<Countup value={statsFile.numObjectProperties} {duration} />
		</div>
	</div>
</div>
