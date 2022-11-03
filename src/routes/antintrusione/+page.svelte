<script lang="ts">
	import Siterow from '$lib/components/Siterow.svelte';
	import CallUs from '$lib/components/CallUs.svelte';

	let alarms = [
		{
			link: 'http://combivox.it/product/wilma/',
			image: '/src/lib/images/antintrusione/antifurti-2f-sicurezza-treviglio-006.jpg',
			title: 'Novità',
			description:
				'Centrale di allarme wireless 868 MHz, per impianti di piccola e media dimensione'
		},
		{
			link: 'http://combivox.it/product/amica-64/',
			image: '/src/lib/images/antintrusione/antifurti-2f-sicurezza-treviglio-007.jpg',
			title: 'Amica 64',
			description:
				'Centrale 8 zone espandibile fino a 64 per impianti di piccole e medie dimensioni'
		},
		{
			link: 'http://combivox.it/product/amica-128/',
			image: '/src/lib/images/antintrusione/antifurti-2f-sicurezza-treviglio-008.jpg',
			title: 'Amica 128',
			description:
				'Centrale 8 zone espandibile fino a 128 per impianti di medie e grandi dimensioni'
		},
		{
			link: 'http://combivox.it/product/amica-324/',
			image: '/src/lib/images/antintrusione/antifurti-2f-sicurezza-treviglio-009.jpg',
			title: 'Amica 324',
			description: 'Centrale 8 zone espandibile fino a 334 per impianti di grandi dimensioni'
		},
		{
			link: 'http://combivox.it/product/elisa-24/',
			image: '/src/lib/images/antintrusione/antifurti-2f-sicurezza-treviglio-010.jpg',
			title: 'Elisa 24 GSM',
			description:
				'Centrale GSM espandibile a 24 zone per impianti di sicurezza di piccole e medie dimensioni'
		},
		{
			link: 'http://combivox.it/product/elisa/',
			image: '/src/lib/images/antintrusione/antifurti-2f-sicurezza-treviglio-011.jpg',
			title: 'Elisa GSM',
			description: 'Centrale GSM 8 zone, ideale per impianti di piccole dimensioni'
		},
		{
			link: 'http://combivox.it/product/eva-8-24/',
			image: '/src/lib/images/antintrusione/antifurti-2f-sicurezza-treviglio-012.jpg',
			title: 'Eva 8.24',
			description:
				'Centrale 8 zone espandibile fino a 24 ideale per impianti di piccole e medie dimensioni'
		},
		{
			link: 'http://combivox.it/product/midya/',
			image: '/src/lib/images/antintrusione/antifurti-2f-sicurezza-treviglio-013.jpg',
			title: 'Midya GSM',
			description: 'Centrale GSM 6 zone, ideale per piccoli impianti di sicurezza'
		},
		{
			link: 'http://combivox.it/product/wilma/',
			image: '/src/lib/images/antintrusione/antifurti-2f-sicurezza-treviglio-014.jpg',
			title: 'Wilma',
			description:
				'Centrale di allarme wireless 868 MHz, per impianti di piccola e media dimensione'
		},
		{
			link: 'http://combivox.it/product/wilma-micro-ii/',
			image: '/src/lib/images/antintrusione/antifurti-2f-sicurezza-treviglio-015.jpg',
			title: 'Wilma Micro II',
			description: 'Centrale radio 868 MHz per rapide installazioni'
		}
	];
</script>

<title>Progettazione di sistemi antintrusione | 2F Sicurezza</title>

<div
	class="sticky top-24 -z-10 h-[35vh] flex items-stretch bg-cover bg-center bg-[url('/src/lib/images/AdobeStock_129501064.jpeg')]"
/>
<CallUs />
<Siterow
	title="Sistemi antintrusione per abitazioni e aziende in lombardia"
	link="/videosorveglianza"
	bg_color="bg-2f-blue-200"
>
	2F Sicurezza propone specifici servizi per la messa in sicurezza di qualsiasi spazio abitativo o
	luogo di lavoro quali sistemi antintrusione, videocitofoni e sistemi di videosorveglianza,
	impianti antincendio ed estintori. Si tratta, in ogni caso, di sistemi assolutamente programmabili
	sia quando si è all'interno del proprio spazio abitativo sia all'esterno. Tutti gli impianti sono
	dotati di sensori PIR (a singola tecnologia) o PIR+MW(a doppia tecnologia): dispositivi che
	utilizzano le onde elettromagnetiche ad infrarossi e/o le microonde per rilevare qualsiasi tipo di
	movimento nello spazio sorvegliato. Gli infrarossi indicano le variazioni di calore in grado di
	cogliere qualsiasi tipo di presenza o spostamento del corpo in qualsiasi spazio anche quello
	impercettibile ad occhio umano. Tutti i prodotti 2F Sicurezza, tra i migliori sul mercato, sono
	garantiti e certificati nonché conformi alle normative in materia.
</Siterow>
<Siterow title="Antifurto senza fili" bg_color="bg-gray-100">
	2F Sicurezza, specializzata in sistemi antintrusione, offre un'ampia gamma di impianti di
	sorveglianza per proteggere qualsiasi spazio abitativo o luogo di lavoro. Tra questi propone
	dispositivi di antifurto senza fili. Si tratta di una nuova tecnologia che sfrutta la
	comunicazione wireless al posto dei fili. Tutti i dispositivi di questa tipologia di impianto sono
	alimentati tramite batterie. L'antifurto senza fili presenta numerosi vantaggi, tra cui quello di
	ridurre notevolmente i tempi di installazione senza prevedere a carico del cliente costi
	aggiuntivi quali le opere murarie tipiche necessarie per allarmi con fili.
</Siterow>
<Siterow title="Allarmi Combivox">
	2F Sicurezza propone ai propri clienti sistemi antifurto delle migliori marche del settore quali
	quelli del brand Combivox. La prima centrale di antifurto con comunicatore GSM integrato, capace
	di inviare segnalazioni di allarme puntuali dell'evento e di essere telegestita tramite menù
	vocale., è proprio Combivox. La ditta ha realizzato, per prima, prodotti interattivi parlanti, per
	rendere semplice la loro installazione e per essere facilmente utilizzati.
</Siterow>
<div class="grid grid-cols-2 md:grid-cols-4 justify-items-center p-5 gap-2 bg-white">
	{#each alarms as alarm}
		<div class="flex flex-col justify-end">
			<a href={alarm.link}><img src={alarm.image} alt={alarm.title} /></a>
			<div>
				<p class="font-['Oswald'] text-center uppercase tracking-wider text-lg">{alarm.title}</p>
				<p class="text-center text-xs">
					{alarm.description}
				</p>
			</div>
		</div>
	{/each}
</div>
