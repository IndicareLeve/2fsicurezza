<script>
	import NavBar from '../lib/navbar/NavBar.svelte';
	import Footer from '../lib/footer/Footer.svelte';
	import '../app.css';
</script>

<NavBar />

<main>
	<slot />
</main>

<Footer />
