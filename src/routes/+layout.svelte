<script>
	import '../app.postcss';
	import Navbar from '$lib/navbar.svelte';
	import Footer from '$lib/footer.svelte';
	import Breadcrumb from '$lib/breadcrumb.svelte';
</script>

<Navbar />
<Breadcrumb />
<slot/>
<Footer />
