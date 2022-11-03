<script>
	import Siterow from '$lib/components/Siterow.svelte';
	import CallUs from '$lib/components/CallUs.svelte';

	import Antincendio1 from '$lib/images/antincendio/1-868f1797.jpg';
	import Antincendio2 from '$lib/images/antincendio/2.png';
	import Antincendio3 from '$lib/images/antincendio/3.png';
	import Antincendio4 from '$lib/images/antincendio/4.png';
	import Antincendio5 from '$lib/images/antincendio/5.png';
	import Antincendio6 from '$lib/images/antincendio/6.png';
</script>

<title>Progettazione e manutenzione di sistemi e impianti antincendio | 2F Sicurezza</title>

<div
	class="sticky top-24 -z-10 h-[35vh] flex items-stretch bg-cover bg-center bg-[url('/src/lib/images/antincendio/AdobeStock_507564262.jpeg')]"
/>
<CallUs />
<Siterow
	title="Progettazione, installazione e manutenzione di impianti antincendio in Lombardia"
	bg_color="bg-2f-blue-200"
>
	2F Sicurezza a Treviglio è un punto di riferimento anche per tutto ciò che riguarda gli impianti
	antincendio, con interventi per l'installazione e la manutenzione dei sistemi messi a punto dalle
	migliori marche, tra cui, in particolare, gli impianti Ochiki, completi di sistemi di rilevazione
	incendio e spegnimento e dotati delle ultime tecnologie oggi disponibili sul mercato.
</Siterow>
<Siterow title="Come funziona un impianto antincendio" bg_color="bg-gray-100">
	Installare un impianto antincendio consente di mettere in sicurezza un edificio: questi
	apparecchi, infatti, per prima cosa permettono di rilevare e quindi di intervenire il più
	rapidamente possibile in caso di deflagrazione. Per reagire immediatamente, inoltre, gli impianti
	antincendio emettono materie autoestinguenti come l'anidride carbonica, i gas inerti, la schiuma,
	le soluzioni idriche.
	<br /><br />
	La 2F Sicurezza di Treviglio, in provincia di Bergamo, si è specializzata nell'installazione di impianti
	antincendio di tutte le tipologie, grazie a uno staff preparato e competente, sempre al servizio del
	cliente per interventi personalizzati nonché per la manutenzione.
</Siterow>
<Siterow title="Dalla progettazione alla manutenzione" bg_color="bg-2f-blue-200">
	<p class="text-base leading-relaxed pt-2">
		La 2F Sicurezza è a disposizione dei suoi clienti nell'ambito degli impianti antincendio in
		materia di:
	</p>
	<ul class="list-disc list-inside p-3">
		<li>Progettazione di impianti antincendio</li>
		<li>Fornitura e installazione di impianti antincendio</li>
		<li>Fornitura e installazione di estintori</li>
		<li>Impianti di rilevazione antincendio (fumo, fiamma, gas e così via)</li>
		<li>Manutenzione ordinaria e straordinaria degli impianti antincendio</li>
	</ul>
	<p>
		Per saperne di più è sufficiente contattare l'azienda di Treviglio con una telefonata, inviando
		un messaggio di posta elettronica oppure compilando in ogni sua parte il modulo di contatto che
		si trova nell'ultima pagina di questo sito: un incaricato della ditta si occuperà di fornire una
		risposta concreta a tutte le domande nonché preventivi accurati e completi.
	</p>
</Siterow>
<div class="p-5 text-center bg-white">
	<div class="font-['Oswald'] tracking-wide text-3xl uppercase" />
	<div class="grid grid-cols-2 items-center gap-3">
		<img src={Antincendio1} alt="antincendio 1" />
		<img src={Antincendio6} alt="antincendio 6" />
		<img src={Antincendio2} alt="antincendio 2" />
		<img src={Antincendio3} alt="antincendio 3" />
		<img src={Antincendio4} alt="antincendio 4" />
		<img src={Antincendio5} alt="antincendio 5" />
	</div>
</div>
