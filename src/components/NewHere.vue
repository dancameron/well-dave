<template>
	<div v-if="newHere" class="relative z-40" aria-labelledby="modal-title" role="dialog" aria-modal="true">

		<div class="fixed inset-0 bg-gray-900 bg-opacity-60 transition-opacity"></div>

		<div class="fixed inset-0 z-10 overflow-y-auto">
			<div class="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">

				<div
				  v-if="deets"
				  class="relative transform overflow-hidden rounded-lg bg-white px-4 pt-5 pb-4 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-xl sm:p-6">
					<div class="text-center">
						<h3 class="text-lg font-semibold leading-6 text-gray-900" id="modal-title">
							<b>Well, Dave</b> is a set of&hellip;
						</h3>

						<div class="mt-2">
							<p class="mb-2 font-semibold text-sm text-gray-600">
								Jeff Cannata's ingenious limerick movie reviews on The Filmcast.
							</p>

							<div class="m-2 sm:mt-3 text-sm text-gray-600">
								<span>You might ask "why does Jeff start each of his reviews with a limerick?", <b>well, friend</b>, it's rather unbelievable, have a listen&hellip;</span>
								<div v-if="listen">
									<iframe width="100%" height="300"
									        src="https://embeds.audioboom.com/posts/7959002/embed/hero?player_theme=dark&t=4088"
									        style="background-color: transparent; display: block; padding: 0; width: 100%; max-width: 700px;"
									        frameborder="0" allowtransparency="allowtransparency" scrolling="no"
									        title="Audioboom player" allow="autoplay"
									        sandbox="allow-downloads allow-forms allow-popups allow-same-origin allow-scripts allow-storage-access-by-user-activation allow-top-navigation-by-user-activation"></iframe>
								</div>

								<button v-else v-on:click="listen = true" type="button"
								        class="mt-2 group inline-flex w-full justify-center rounded-md bg-sky-50 text-sky-600 px-3 py-2 text-sm font-semibold shadow-sm hover:bg-sky-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-600">
									<span
								        class="hidden group-hover:flex"><b>Be warned</b>, this may be disturbing&hellip;</span>
									<span class="flex group-hover:hidden">Audio Clip</span>
								</button>

							</div>
							<div class="p-3 bg-gray-50 rounded text-sm text-gray-500">
								<p class="mb-2">
										<span class="text-sky-600 font-bold mr-1">
											<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
											     stroke-width="1.5" stroke="currentColor"
											     class="text-sky-600 inline-block w-6 h-6 mr-1 -mt-1">
                                                <path stroke-linecap="round" stroke-linejoin="round" d="M21 11.25v8.25a1.5 1.5 0 01-1.5 1.5H5.25a1.5 1.5 0 01-1.5-1.5v-8.25M12 4.875A2.625 2.625 0 109.375 7.5H12m0-2.625V7.5m0-2.625A2.625 2.625 0 1114.625 7.5H12m0 0V21m-8.625-9.75h18c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125h-18c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z" /></svg>
											Would you like your very own limerick
										</span>
									    the likes of which have been featured on this site!? You can have your very own carefully crafted by Jeff and delivered to you or a loved one by video on <a
									  target="_blank"
									  href="https://www.cameo.com/jeffcannata"
									  class="cursor-pointer underline">cameo.com/jeffcannata</a>.
								</p>
							</div>
						</div>
					</div>
					<div class="m-2 sm:mt-3">
						<button v-on:click="lesGo" type="button"
						        class="group inline-flex w-full justify-center rounded-md bg-sky-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-sky-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-600">
							<span class="hidden group-hover:flex">Good Luck!</span>
							<span class="flex group-hover:hidden">Play Game</span>
						</button>
					</div>
				</div>
				<div
				  v-else
				  class="relative transform overflow-hidden rounded-lg bg-white px-4 pt-5 pb-4 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-xl sm:p-6">
					<div class="text-center">
						<h3 class="text-lg font-semibold leading-6 text-gray-900" id="modal-title">
							<b>Well, Dave</b> is a&hellip;
						</h3>
						<div class="mt-2">
							<p class="mb-2 text-sm text-gray-500">
									<span class="text-gray-400 mr-1">&hellip;movie trivia game, maybe, a limerick word
									game?...hmmm...okay, sooo, it's a</span>
								<i class="font-semibold">movie-trivia-limerick-word-game</i>, made by fans of <a
							  target="_blank"
							  href="https://audioboom.com/channels/4997224-the-filmcast-aka-the-slashfilmcast"
							  class="cursor-pointer underline">The
								Filmcast</a>.
							</p>
							<div class="p-3 bg-gray-50 rounded text-sm text-gray-500">
								<p class="mb-2">
										<span class="text-sky-600 font-bold mr-1">
											<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
											     stroke-width="1.5" stroke="currentColor"
											     class="text-sky-600 inline-block w-6 h-6 mr-1 -mt-1">
												<path stroke-linecap="round" stroke-linejoin="round"
												      d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5"/>
											</svg>
											How to play:
										</span> You'll try to guess the movie title based on an incomplete
									limerick.
									You can always reveal that last word of the limerick, and you'll have plenty of
									hints to help you get the movie title.
								</p>
								<p class="">Oh, yeah, after <span
								  class="text-sky-600 font-bold">{{ setTotal }}</span> movies, your score is calculated
									based on how well you answered and the help provided. Will you try and guess all
									<span
									  class="text-sky-600">{{ questions.length }}</span>?</p>
							</div>
						</div>
					</div>
					<h3 class="text-sm font-semibold leading-6 text-gray-900 mt-4 text-center" id="modal-title">
						Familiar with the Jeff's Limerick Movie Reviews on the Filmcast?
					</h3>
					<div class="m-2 sm:mt-3">
						<button v-on:click="deets = true" type="button"
						        class="group inline-flex w-full justify-center rounded-md bg-sky-50 text-sky-600 px-3 py-2 text-sm font-semibold shadow-sm hover:bg-sky-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-600">
							<span class="hidden group-hover:flex">Learn the Troubling Truth</span>
							<span class="flex group-hover:hidden">Give me the Deets</span>
						</button>
					</div>
					<div class="m-2 sm:mt-3">
						<button v-on:click="lesGo" type="button"
						        class="group inline-flex w-full justify-center rounded-md bg-sky-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-sky-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-600">
							<span class="hidden group-hover:flex">Good Luck!</span>
							<span class="flex group-hover:hidden">Yeah, Dave is a Tyrant</span>
						</button>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>
<script>
export default {
	name: 'NewHere',
	props: {
		newHere: Boolean,
		questions: {},
		setTotal: {}
	},
	data() {
		return {
			deets: false,
			listen: false
		}
	},
	methods: {
		lesGo(start) {
			this.$emit('lesGo')
		}
	}
}
</script>
