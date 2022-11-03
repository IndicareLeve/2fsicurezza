<script>
	import NavBar from '$lib/components/NavBar.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import '../app.css';
</script>

<NavBar />

<main>
	<slot />
</main>

<Footer />
