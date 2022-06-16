<script lang="ts">
	export let title = '';
	export let link = '';
	export let bg_color = 'white';
</script>

<div class="p-5 text-center bg-{bg_color}">
	<div class="font-['Oswald'] tracking-wide text-3xl uppercase">
		{title}
	</div>
	<p class="text-base leading-relaxed py-2 container mx-auto">
		<slot />
	</p>
	{#if link}
		<div class="my-3 flex">
			<a class="bg-2f-blue-500 text-white px-3 py-2 rounded-sm w-full" href="antintrusione">
				Scopri di più
			</a>
		</div>
	{/if}
</div>
