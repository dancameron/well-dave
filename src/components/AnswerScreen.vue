<template>
	<div class="pb-12">
		<h1 v-if="currentQuestion.answered === 'skipped'"
		    class="flex items-center space-x-4 mb-4 text-red-500">
			<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
			     stroke="currentColor" class="w-6 h-6 text-red-600">
				<path stroke-linecap="round" stroke-linejoin="round"
				      d="M15.75 10.5l4.72-4.72a.75.75 0 011.28.53v11.38a.75.75 0 01-1.28.53l-4.72-4.72M12 18.75H4.5a2.25 2.25 0 01-2.25-2.25V9m12.841 9.091L16.5 19.5m-1.409-1.409c.407-.407.659-.97.659-1.591v-9a2.25 2.25 0 00-2.25-2.25h-9c-.621 0-1.184.252-1.591.659m12.182 12.182L2.909 5.909M1.5 4.5l1.409 1.409"/>
			</svg>

			<span
			  class="font-semibold leading-7 tracking-tight text-xl uppercase">No Worries, It's Just a Silly Game.</span>
		</h1>
		<header v-else
		        class="flex items-center space-x-3 mb-4 text-sky-500">
			<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
			     stroke="currentColor" class="w-8 h-8 text-sky-600">
				<path stroke-linecap="round"
				      d="M15.75 10.5l4.72-4.72a.75.75 0 011.28.53v11.38a.75.75 0 01-1.28.53l-4.72-4.72M4.5 18.75h9a2.25 2.25 0 002.25-2.25v-9a2.25 2.25 0 00-2.25-2.25h-9A2.25 2.25 0 002.25 7.5v9a2.25 2.25 0 002.25 2.25z"/>
			</svg>
			<span class="font-semibold leading-7 tracking-tight text-xl uppercase">Noice. You Got It!</span>
		</header>
		<div v-if="currentQuestion.omdb" class="sm:flex pb-8">
			<div
			  class="mx-auto sm:m-0 w-full sm:w-2/5 md:w-1/3 lg:w-1/4 overflow-hidden">
				<div class="group rounded-xl group">
					<img v-if="!showEmbed" class="h-auto w-full rounded-tr-lg rounded-tl-lg"
					     :src="currentQuestion.omdb.Poster"
					     :alt="currentQuestion.omdb.title">
					<div v-if="showEmbed"  class="relative">
						<div class="absolute z-10 top-0 left-0 flex items-center justify-center">
							<div
							  class="inline-block h-12 w-12 animate-spin rounded-full border-8 border-solid border-sky-400 border-r-transparent align-[-0.125em] text-primary motion-reduce:animate-[spin_1.5s_linear_infinite]"
							  role="status">
								<span
					                class="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">Loading...</span>
							</div>
						</div>
						<iframe
						    class="relative z-20"
						    width="100%" height="300"
					        :src="'https://embeds.audioboom.com/posts/'+episodeId+'/embed/hero?player_theme=dark&t='+timeStamp"
					        style="background-color: transparent; display: block; padding: 0; width: 100%; max-width: 700px;"
					        frameborder="0" allowtransparency="allowtransparency" scrolling="no"
					        title="Audioboom player" allow="autoplay"
					        sandbox="allow-downloads allow-forms allow-popups allow-same-origin allow-scripts allow-storage-access-by-user-activation allow-top-navigation-by-user-activation"></iframe>

					</div>
					<div
					  v-on:click="showEmbed = true"
					  class="cursor-pointer bg-gray-900/90 sm:bg-gray-900/80 w-full px-8 py-4 text-gray-400 group-hover:bg-gray-900/90 group-hover:text-gray-300">
						<div class="mx-auto text-md font-serif tracking-tight"
						     v-for="(line, index) in currentQuestion.limerick">
							<span class="inline">{{ line }}</span> <span
						  v-if="currentQuestion.limerick.length === index+1"
						  class="inline text-sky-400 italic">{{ limerickAnswer }}.</span>
						</div>
					</div>
				</div>
			</div>
			<div class="flex-initial w-full sm:pl-12 sm:w-3/5">
				<div class="sm:pl-6">
					<div class="flex items-center space-x-4 mt-2">
						<div
						  class="mt-2 text-2xl font-bold tracking-tight text-white">
							"{{ currentQuestion.omdb.Title }}" {{ currentQuestion.omdb.Year }}
						</div>
						<div
						  class="inline-flex whitespace-nowrap items-center rounded-full bg-gray-700 px-3 py-1 mt-2.5 text-xs font-medium text-sky-400">
							{{ currentQuestion.omdb.Rated }}
						</div>
					</div>
					<div class="mt-2 text-lg tracking-tight text-sky-300">Director:
						{{ currentQuestion.omdb.Director }}
					</div>
					<p class="mt-2 text-base leading-7 text-gray-300">
						{{ currentQuestion.omdb.Plot }}
					</p>
					<p class="text-sm font-medium text-gray-500">
						{{ currentQuestion.omdb.Genre }}
					</p>
					<div class="mt-12">

						<div class="block sm:inline-block py-2 px-4 text-sky-700 bg-sky-200 hover:text-sky-800 hover:bg-sky-100 rounded-lg">
							<div v-on:click="showTheEmbed"
							     class="flex items-center cursor-pointer space-x-3">
								<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
								     stroke-width="1.5" stroke="currentColor" class="w-8 h-8">
									<path stroke-linecap="round" stroke-linejoin="round"
									      d="M19.114 5.636a9 9 0 010 12.728M16.463 8.288a5.25 5.25 0 010 7.424M6.75 8.25l4.72-4.72a.75.75 0 011.28.53v15.88a.75.75 0 01-1.28.53l-4.72-4.72H4.51c-.88 0-1.704-.507-1.938-1.354A9.01 9.01 0 012.25 12c0-.83.112-1.633.322-2.396C2.806 8.756 3.63 8.25 4.51 8.25H6.75z"/>
								</svg>
								<div class="text-sm">
									<b v-if="!showEmbed">Click to Listen</b>
									<b v-else>Listening...</b><br/>

									<div class="flex items-center space-x-2 text-xs">
										<div>{{ currentQuestion.episodeTitle }}</div>
										<div class="hidden md:flex text-xs">
											<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
											     stroke-width="1.5" stroke="currentColor" class="mt-0 mr-1 w-4 h-4">
												<path stroke-linecap="round" stroke-linejoin="round"
												      d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"/>
											</svg>
											<span>{{ currentQuestion.timestamp }}</span>
										</div>
									</div>

								</div>
							</div>

						</div>

						<div class="mt-12">
							<a href="#"
							   v-on:click.prevent="nextQuestion"
							   class="block sm:inline-flex text-center rounded-md bg-sky-600 px-3.5 py-3 text-lg font-semibold text-white shadow-sm hover:bg-sky-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white">Next</a>
						</div>
					</div>

				</div>
			</div>
		</div>
		<template v-else>
			<div class="flex items-center justify-center mt-32">
				<div
				  class="inline-block h-12 w-12 animate-spin rounded-full border-8 border-solid border-sky-700 border-r-transparent align-[-0.125em] text-primary motion-reduce:animate-[spin_1.5s_linear_infinite]"
				  role="status">
					<span
					  class="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">Loading...</span>
				</div>
			</div>
		</template>
	</div>
</template>
<script>
export default {
	name: 'AnswerScreen',
	data() {
		return {
			showEmbed: false
		}
	},
	props: {
		currentQuestion: {}
	},
	beforeMount() {
		this.getOmdb()
	},
	methods: {
		async getOmdb() {
			let response = await fetch("http://www.omdbapi.com/?apikey=4caa9831&i=" + this.currentQuestion.imdbId.split('?')[0])
			this.currentQuestion.omdb = await response.json()
		},
		nextQuestion() {
			this.$emit('set-rand-question')
		},
		showTheEmbed() {
			this.showEmbed = true
			window.scrollTo(0, 0);
		}
	},
	computed: {
		limerickAnswer() {
			if (Array.isArray(this.currentQuestion.answers.end)) {
				return this.currentQuestion.answers.end[0]
			}
			return this.currentQuestion.answers.end
		},
		episodeId() {
			// example https://audioboom.com/posts/7976066-ep-643-eternals-guest-katie-smith-wong
			console.log(this.currentQuestion.audioboom.match(new RegExp("audioboom.com/posts/(.*)-ep-")))
			return this.currentQuestion.audioboom.match(new RegExp("audioboom.com/posts/(.*)-ep-"))[1];
		},
		timeStamp() {
			const [hours, minutes, seconds] = this.currentQuestion.timestamp.split(':');
			return Number(hours) * 60 * 60 + Number(minutes) * 60 + Number(seconds);
		}

	}
}
</script>
