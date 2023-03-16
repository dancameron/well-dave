<template>
	<div class="relative bg-gray-900">
		<h1 v-if="currentQuestion.answered === 'skipped'"
		    class="-mt-12 flex items-center space-x-4 mb-4 text-red-500">
			<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
			     stroke="currentColor" class="w-6 h-6 text-red-600">
				<path stroke-linecap="round" stroke-linejoin="round"
				      d="M15.75 10.5l4.72-4.72a.75.75 0 011.28.53v11.38a.75.75 0 01-1.28.53l-4.72-4.72M12 18.75H4.5a2.25 2.25 0 01-2.25-2.25V9m12.841 9.091L16.5 19.5m-1.409-1.409c.407-.407.659-.97.659-1.591v-9a2.25 2.25 0 00-2.25-2.25h-9c-.621 0-1.184.252-1.591.659m12.182 12.182L2.909 5.909M1.5 4.5l1.409 1.409"/>
			</svg>

			<span class="font-semibold leading-7 tracking-tight text-xl uppercase">No Worries, It's Just a Silly Game.</span>
		</h1>
		<header v-else
		        class="-mt-12 flex items-center space-x-3 mb-4 text-indigo-500">
			<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
			     stroke="currentColor" class="w-8 h-8 text-indigo-600">
				<path stroke-linecap="round"
				      d="M15.75 10.5l4.72-4.72a.75.75 0 011.28.53v11.38a.75.75 0 01-1.28.53l-4.72-4.72M4.5 18.75h9a2.25 2.25 0 002.25-2.25v-9a2.25 2.25 0 00-2.25-2.25h-9A2.25 2.25 0 002.25 7.5v9a2.25 2.25 0 002.25 2.25z"/>
			</svg>
			<span class="font-semibold leading-7 tracking-tight text-xl uppercase">Noice. You Got It!</span>
		</header>
		<template v-if="currentQuestion.omdb">
			<div
			  class="h-80 w-1/3 overflow-hidden bg-indigo-600 rounded-xl md:absolute md:left-0 md:h-full">
				<img class="h-full w-full object-cover"
				     :src="currentQuestion.omdb.Poster"
				     :alt="currentQuestion.omdb.title">
				<div class="absolute left-0 bottom-0 bg-gray-900/60 w-full h-auto px-8 py-4">
					<div class="mx-auto text-md font-serif tracking-tight text-gray-500" v-for="(line, index) in currentQuestion.limerick">
						<span class="inline">{{line}}</span> <span v-if="currentQuestion.limerick.length === index+1" class="inline text-indigo-400 italic">{{ limerickAnswer }}.</span>
					</div>
				</div>
			</div>
			<div class="relative mx-auto max-w-7xl py-12 lg:px-8">
				<div class="pr-6 pl-6 md:ml-auto md:pl-16 w-2/3 lg:pr-0">
					<div class="flex items-center space-x-4 mt-2">
						<div
						  class="mt-2 text-2xl font-bold tracking-tight text-white">
							"{{ currentQuestion.omdb.Title }}" {{ currentQuestion.omdb.Year }}
						</div>
						<div
						  class="inline-flex whitespace-nowrap items-center rounded-full bg-gray-700 px-3 py-1 mt-2.5 text-xs font-medium text-indigo-400">
							{{ currentQuestion.omdb.Rated }}
						</div>
					</div>
					<div class="mt-2 text-lg tracking-tight text-gray-400">Director
						{{ currentQuestion.omdb.Director }}
					</div>
					<div class="flex flex-row space-x-2 mt-2">
									<span
									  class="inline-flex items-center rounded-full bg-indigo-100 px-3 py-0.5 text-sm font-medium text-gray-800">{{
											currentQuestion.omdb.Genre
										}}</span>
					</div>
					<p class="mt-6 text-base leading-7 text-gray-300">
						{{ currentQuestion.omdb.Plot }}</p>
					<div class="mt-4 text-gray-300">
						<a target="_blank" :href="currentQuestion.audioboom"
						   class="flex items-center space-x-2">
							<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
							     stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
								<path stroke-linecap="round" stroke-linejoin="round"
								      d="M19.114 5.636a9 9 0 010 12.728M16.463 8.288a5.25 5.25 0 010 7.424M6.75 8.25l4.72-4.72a.75.75 0 011.28.53v15.88a.75.75 0 01-1.28.53l-4.72-4.72H4.51c-.88 0-1.704-.507-1.938-1.354A9.01 9.01 0 012.25 12c0-.83.112-1.633.322-2.396C2.806 8.756 3.63 8.25 4.51 8.25H6.75z"/>
							</svg>
							<span class="text-sm">
							{{ currentQuestion.episodeTitle }}
							<div class="flex items-center space-x-1 text-xs text-gray-400">
								<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
								     stroke-width="1.5" stroke="currentColor" class="w-3 h-3">
									<path stroke-linecap="round" stroke-linejoin="round"
									      d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"/>
								</svg>
								<span>
									{{ currentQuestion.timestamp }}
								</span>
							</div>
						</span>
						</a>

					</div>
					<div class="mt-16">
						<a href="#"
						   v-on:click.prevent="nextQuestion"
						   class="inline-flex rounded-md bg-indigo-600 px-3.5 py-2.5 text-lg font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white">Next</a>
					</div>
				</div>
			</div>
		</template>
		<template v-else>
			<div class="flex items-center justify-center mt-32">
				<div
				  class="inline-block h-12 w-12 animate-spin rounded-full border-8 border-solid border-indigo-700 border-r-transparent align-[-0.125em] text-primary motion-reduce:animate-[spin_1.5s_linear_infinite]"
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
	props: {
		currentQuestion: {}
	},
	beforeMount() {
		this.getOmdb()
	},
	methods: {
		async getOmdb() {
			let response = await fetch("http://www.omdbapi.com/?apikey=4caa9831&i=" + this.currentQuestion.imdbId);
			this.currentQuestion.omdb = await response.json();
		},
		nextQuestion() {
			this.$emit('set-rand-question')
		}
	},
	computed: {
		limerickLastLine() {
			return this.currentQuestion.limerick[this.currentQuestion.limerick.length - 1]
		},
		limerickAnswer() {
			if (Array.isArray(this.currentQuestion.answers.end)) {
				return this.currentQuestion.answers.end[0]
			}
			return this.currentQuestion.answers.end
		}
	}
}
</script>
