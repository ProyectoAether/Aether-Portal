<script>
	import '/src/app.postcss';
	import Navbar from '$lib/components/layout/navbar.svelte';
	import Footer from '$lib/components/layout/footer.svelte';
</script>

<Navbar />
<slot />
<Footer />
