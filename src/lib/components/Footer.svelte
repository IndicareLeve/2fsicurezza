<script lang="ts">
	import Form from '$lib/components/Form.svelte';
</script>

<footer class="pt-12">
	<Form />
	<section class="grid grid-cols-1 text-center bg-2f-blue-300 text-gray-100 py-4 space-y-2">
		<span class="uppercase font-bold">2F Sicurezza</span>
		<div>
			<div class="text-xs">Sede di Treviglio:</div>
			<div class="flex justify-center">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					class="h-6 w-6"
					fill="none"
					viewBox="0 0 24 24"
					stroke="currentColor"
					stroke-width="2"
				>
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
					/>
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
					/>
				</svg>
				<a
					class="ml-1 underline"
					rel="noreferrer"
					href="https://goo.gl/maps/WxXCTUhLjtQv8Aic6"
					target="_blank">Via Goito, 22 - 24047 Treviglio (BG)</a
				>
			</div>
		</div>
		<div>
			<div class="text-xs">Sede di Bergamo:</div>
			<div class="flex justify-center">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					class="h-6 w-6"
					fill="none"
					viewBox="0 0 24 24"
					stroke="currentColor"
					stroke-width="2"
				>
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
					/>
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
					/>
				</svg>
				<a
					class="ml-1 underline"
					rel="noreferrer"
					href="https://goo.gl/maps/ZogyDiWT4QMGMe5E8"
					target="_blank">Via della Clementina, 2 - 24125 Bergamo</a
				>
			</div>
		</div>
		<div class="flex justify-center">
			<svg
				xmlns="http://www.w3.org/2000/svg"
				class="h-6 w-6"
				fill="none"
				viewBox="0 0 24 24"
				stroke="currentColor"
				stroke-width="2"
			>
				<path
					stroke-linecap="round"
					stroke-linejoin="round"
					d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
				/>
			</svg>
			<a class="ml-1 underline" href="tel:+393395676172">+39 339 5676172</a>
		</div>
		<div class="flex justify-center">
			<svg
				xmlns="http://www.w3.org/2000/svg"
				class="h-6 w-6"
				fill="none"
				viewBox="0 0 24 24"
				stroke="currentColor"
				stroke-width="2"
			>
				<path
					stroke-linecap="round"
					stroke-linejoin="round"
					d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
				/>
			</svg>
			<a class="ml-1 underline" href="tel:+390363346264">+39 0363 346264</a>
		</div>
		<div class="flex justify-center">
			<svg
				xmlns="http://www.w3.org/2000/svg"
				class="h-6 w-6"
				fill="none"
				viewBox="0 0 24 24"
				stroke="currentColor"
				stroke-width="2"
			>
				<path
					stroke-linecap="round"
					stroke-linejoin="round"
					d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
				/>
			</svg>
			<a class="ml-1 underline" href="mailto:info@2fsicurezza.com">info@2fsicurezza.com</a>
		</div>
	</section>
	<section class="bg-2f-blue-500 text-gray-100 pt-4">
		<ul class="text-center">
			<li class="p-4 uppercase"><a href="/">Home</a></li>
			<li class="p-4 uppercase"><a href="/antintrusione">Antintrusione</a></li>
			<li class="p-4 uppercase"><a href="/videosorveglianza">Videosorveglianza</a></li>
			<li class="p-4 uppercase"><a href="/impianti-antincendio">Impianti Antincendio</a></li>
			<li class="text-sm pt-8">© 2F Sicurezza</li>
			<li class="text-xs p-2">
				Built by <a class="underline decoration-double" href="http://indicareleve.me"
					>IndicareLeve</a
				>
			</li>
		</ul>
	</section>
</footer>
