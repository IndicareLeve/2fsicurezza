<script>
	import { slide } from 'svelte/transition';

	let isMenuOpen = false;
	const toggleMenu = () => (isMenuOpen = !isMenuOpen);
</script>

<header class="sticky top-0 shadow-sm bg-white">
	<div class="flex justify-center relative py-2 px-8">
		<img class="h-20" src="img/logo-8f6a29bc-1920w.jpg" alt="logo 2fsicurezza" />
		<button type="button" on:click={toggleMenu}>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				class="absolute left-2 top-8 h-10 w-10 text-gray-500"
				fill="none"
				viewBox="0 0 24 24"
				stroke="currentColor"
				stroke-width="1"
			>
				<path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16" />
			</svg>
		</button>
	</div>
	{#if isMenuOpen}
		<ul
			class="text-lg text-center absolute w-full bg-white text-gray-700 font-semibold uppercase"
			transition:slide
			on:click={toggleMenu}
		>
			<li class="p-4 mx-4 border-t"><a href="/">Home</a></li>
			<li class="p-4 mx-4 border-t"><a href="/antintrustione">Antintrusione</a></li>
			<li class="p-4 mx-4 border-t"><a href="/videosorveglianza">Videosorveglianza</a></li>
			<li class="p-4 mx-4 border-y"><a href="/impianti-antincendio">Impianti Antincendio</a></li>
		</ul>
	{/if}
</header>
