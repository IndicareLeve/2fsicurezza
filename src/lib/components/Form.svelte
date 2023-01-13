<script lang="ts">
	import website from '$lib/config/website';
	import { onMount, onDestroy } from 'svelte';
	import { browser } from '$app/environment';

	type Request = {
		name: string;
		email: string;
		message: string;
		done: boolean;
		pending: boolean;
		captchaValidated: boolean;
		error: boolean;
	};

	const { hcaptchaSitekey, siteUrl } = website;

	let hcaptcha = { execute: async (_a, _b) => ({ response: '' }), render: (_a, _b) => {} };
	let hcaptchaWidgetID;

	onMount(() => {
		if (browser) {
			hcaptcha = window.hcaptcha;
			if (hcaptcha.render) {
				hcaptchaWidgetID = hcaptcha.render('hcaptcha', {
					sitekey: hcaptchaSitekey,
					size: 'invisible'
				});
			}
		}
	});

	onDestroy(() => {
		if (browser) {
			hcaptcha = { execute: async () => ({ response: '' }), render: () => {} };
		}
	});

	export let request: Request = { name: '', email: '', message: '', done: false } as Request;

	async function handleSubmit() {
		request.pending = true;

		try {
			const { response: hCaptchaResponse } = await hcaptcha.execute(hcaptchaWidgetID, {
				async: true
			});

			const data = new FormData(this);

			const result = await fetch(`${siteUrl}/api/verify`, {
				method: 'POST',
				credentials: 'omit',
				headers: {
					'Content-Type': 'application/json'
				},
				body: JSON.stringify({
					name: data.get('name'),
					replyTo: data.get('replyTo'),
					message: data.get('message'),
					response: hCaptchaResponse
				})
			});

			if (result.status >= 400) {
				request.error = true;
			} else {
				request.done = true;
			}
		} catch (error) {
			request.error = true;
			console.error('Error in contact form submission');
		}
	}
</script>

<svelte:head>
	<script src="https://js.hcaptcha.com/1/api.js?render=explicit&hl=it" async defer></script>
</svelte:head>

<section
	style="background-image: var(--background-image, linear-gradient(to bottom, #ffffff 50%, #3b76a2 50%))"
>
	{#if request.done === false}
		<div class="container mx-auto bg-white shadow-xl p-8 grid grid-cols-1 gap-8">
			<span class="font-bold text-3xl md:text-center">
				Per più informazioni compila il form, rispondiamo entro 24h
			</span>
			<form
				class="grid grid-cols-1 md:grid-cols-2 gap-6"
				name="contatti"
				on:submit|preventDefault={handleSubmit}
			>
				<input
					value={request.name}
					name="name"
					type="text"
					placeholder="Nome"
					class="font-thin w-full py-2 border-0 border-b border-gray-200 focus:ring-0 focus:outline-0 focus:border-black"
					required
				/>
				<input
					value={request.email}
					name="replyTo"
					type="email"
					placeholder="Email"
					class="font-thin w-full py-2 border-0 border-b border-gray-200 focus:ring-0 focus:outline-0 focus:border-black"
					required
				/>
				<textarea
					value={request.message}
					cols="30"
					rows="3"
					name="message"
					class="font-thin w-full border-0 border-b border-gray-200 focus:ring-0 focus:outline-0 focus:border-b-black md:col-span-2"
					placeholder="Il tuo messaggio"
					required
				/>
				<button
					class="flex w-max bg-2f-blue-500 p-2 rounded-sm disabled:bg-gray-300"
					type="submit"
					disabled={request.pending === true}
					><svg
						xmlns="http://www.w3.org/2000/svg"
						class="h-6 w-6 text-white"
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
					<span class="text-white pl-2">Invia Messaggio</span></button
				>
				<div id="hcaptcha" class="h-captcha" data-sitekey={hcaptchaSitekey} data-size="invisible" />
			</form>
			{#if request.error === true}
				<span class="text-red-500"
					>Qualcosa è andato storto, ti invitiamo a riprovare più tardi!</span
				>
			{/if}
		</div>
	{:else}
		<div class="container mx-auto bg-white shadow-xl p-8 grid grid-cols-1 gap-8">
			<span class="font-bold text-3xl md:text-center"
				>Grazie per averci contattato, riceverai una risposta al più presto!</span
			>
		</div>
	{/if}
</section>

<style>
	.contact-section {
		background-image: linear-gradient(to bottom, #ffffff 50%, #3b76a2 50%);
	}
</style>
