<script>
	import '/src/app.postcss';
	import Navbar from '$lib/components/layout/navbar.svelte';
	import Footer from '$lib/components/layout/footer.svelte';
	import ScrollToTop from '$lib/components/scrollToTop.svelte';
</script>

<Navbar />
<slot />
<ScrollToTop />
<Footer />
