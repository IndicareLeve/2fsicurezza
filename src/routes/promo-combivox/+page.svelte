<script lang="ts">
	import Siterow from '$lib/components/Siterow.svelte';
	import Kit_wilma_pro from '$lib/images/kit-wilma-pro.jpg';
	import Kit_wilma_pro_video from '$lib/images/kit-wilma-pro-video.jpg';
</script>

<title>Promo Combivox | 2F Sicurezza</title>

<Siterow title="Promozione sistema antifurto Combivox" bg_color="bg-2f-blue-200">
	2F Sicurezza grazie all'esperienza maturata negli anni è orgogliosa di proporre una promozione
	<span class="underline">tutto incluso</span>
	che include:
	<ul class="list-disc">
		<li>Installazione</li>
		<li>Configurazione</li>
		<li>Sistema Cloud</li>
		<li>Garanzia 24 mesi</li>
	</ul>
</Siterow>
<Siterow bg_color="bg-gray-100"
	>La promozione prevede due kit a seconda delle diverse esigenze della clientela:</Siterow
>
<Siterow title="Kit Wilma PRO">
	<div class="flex justify-center">
		<img class="w-[30vh]" src={Kit_wilma_pro} alt="Kit_wilma_pro" />
	</div>
	<p>
		Un sistema completo per la sorveglianza della vostra abitazione! Include la centrale operativa
		Wilma Pro, un sensore Tacto con magnete da finestra, un sensore di movimento infrarossi Tauro IR
		e il telecomando per la gestione del sistema Lubeo PRO.
	</p>
	<div class="mt-8 italic">Al prezzo promozionale di 800€ + IVA</div>
</Siterow>
<Siterow title="Kit Wilma PRO Video">
	<div class="flex justify-center">
		<img class="w-[30vh]" src={Kit_wilma_pro_video} alt="Kit_wilma_pro" />
	</div>
	<p>
		Include tutte le funzionalità del kit Wilma Pro, ma sostituisce il sensore Tauro con la versione
		Video, con esclusive funzioni di videoverifica e videocontrollo.
	</p>
	<div class="mt-8 italic">Al prezzo promozionale di 1000€ + IVA</div>
</Siterow>
<Siterow
	title="Ogni Kit può essere personalizzato secondo le vostre esigenze"
	bg_color="bg-2f-blue-200"
/>
<Siterow
	title="Nessun abbonamento ricorrente da pagare, dopo l'installazione l'impianto è completamente vostro!"
	bg_color="bg-gray-100"
/>
