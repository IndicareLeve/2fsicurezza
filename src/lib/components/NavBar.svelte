<script>
	import { slide } from 'svelte/transition';
	import { page } from '$app/stores';

	let isMenuOpen = false;
	const toggleMenu = () => (isMenuOpen = !isMenuOpen);
	import logo_2f from '$lib/images/logo-8f6a29bc-1920w.jpg';
</script>

<header class="sticky top-0 shadow-sm bg-white md:hidden">
	<div class="flex justify-center relative py-2 px-8">
		<img class="h-20" src={logo_2f} alt="logo 2fsicurezza" />
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
			<li class="p-4 mx-4 border-t"><a href="/antintrusione">Antintrusione</a></li>
			<li class="p-4 mx-4 border-t"><a href="/videosorveglianza">Videosorveglianza</a></li>
			<li class="p-4 mx-4 border-y"><a href="/impianti-antincendio">Impianti Antincendio</a></li>
		</ul>
	{/if}
</header>

<header class="sticky top-0 shadow-sm bg-white hidden md:block">
	<div class="flex justify-between py-2 px-8">
		<img class="h-20" src={logo_2f} alt="logo 2fsicurezza" />
		<div class="flex items-center text-xl gap-3 font-thin">
			<a class:active={$page.url.pathname === '/'} href="/">Home</a>
			<a class:active={$page.url.pathname === '/antintrusione'} href="/antintrusione"
				>Antintrusione</a
			>
			<a class:active={$page.url.pathname === '/videosorveglianza'} href="/videosorveglianza"
				>Videosorveglianza</a
			>
			<a class:active={$page.url.pathname === '/impianti-antincendio'} href="/impianti-antincendio"
				>Impianti antincendio</a
			>
		</div>
	</div>
</header>

<style>
	.active {
		@apply underline underline-offset-8;
	}
</style>
