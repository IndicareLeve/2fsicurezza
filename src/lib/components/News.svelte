<script>
	import Kit_wilma_pro from '$lib/images/kit-wilma-pro.jpg';

	let isModalOpen = false;
	const toggleModal = () => (isModalOpen = !isModalOpen);
</script>

<div
	class="relative z-10"
	class:hidden={isModalOpen}
	aria-labelledby="modal-title"
	role="dialog"
	aria-modal="true"
>
	<!--
    Background backdrop, show/hide based on modal state.

    Entering: "ease-out duration-300"
      From: "opacity-0"
      To: "opacity-100"
    Leaving: "ease-in duration-200"
      From: "opacity-100"
      To: "opacity-0"
  -->
	<div class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />

	<div class="fixed inset-0 z-10 overflow-y-auto">
		<div class="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
			<!--
        Modal panel, show/hide based on modal state.

        Entering: "ease-out duration-300"
          From: "opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
          To: "opacity-100 translate-y-0 sm:scale-100"
        Leaving: "ease-in duration-200"
          From: "opacity-100 translate-y-0 sm:scale-100"
          To: "opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
      -->
			<div
				class="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg"
			>
				<div class="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
					<div class="sm:flex sm:items-start">
						<div class="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
							<div class="flex justify-between">
								<h3 class="text-lg font-medium leading-6 text-gray-900" id="modal-title">
									Novità!
								</h3>
								<button on:click={toggleModal}>
									<svg
										xmlns="http://www.w3.org/2000/svg"
										fill="none"
										viewBox="0 0 24 24"
										stroke-width="1.5"
										stroke="currentColor"
										class="w-6 h-6 text-red-500"
									>
										<path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
									</svg>
								</button>
							</div>
							<div class="mt-2">
								<img src={Kit_wilma_pro} alt="kit wilma pro" />
								<p class="text-gray-500">
									Da oggi puoi richiedere l'installazione del sistema di allarme Wilma Pro a partire
									da 800€ tutto incluso, e l'impianto rimane di tua proprietà!
								</p>
							</div>
							<div class="mt-4 flex justify-center">
								<a
									href="/promo-combivox"
									type="button"
									class="inline-flex w-full justify-center rounded-md border border-gray-300 bg-2f-blue-500 text-white px-4 py-2 text-base font-medium shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
									>Maggiori informazioni</a
								>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>
