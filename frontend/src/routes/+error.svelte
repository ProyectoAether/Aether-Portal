<script>
	import { page } from '$app/stores';
</script>

<main class="min-h-screen flex justify-center items-center">
	<div class="hero">
		<div class="max-w-md text-center">
			<h1 class="text-5xl font-bold">{$page.error?.code || 404} {$page.error?.message}</h1>
		</div>
	</div>
</main>
