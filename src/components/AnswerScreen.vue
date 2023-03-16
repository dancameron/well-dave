<template>
	<div class="relative bg-gray-900" v-if="currentQuestion.omdb">
		<div
		  class="relative h-80 w-1/3 overflow-hidden bg-indigo-600 rounded-xl md:absolute md:left-0 md:h-full">
			<img class="h-full w-full object-cover"
			     :src="currentQuestion.omdb.Poster"
			     alt="">
			<svg viewBox="0 0 926 676" aria-hidden="true"
			     class="absolute left-24 -bottom-24 w-[57.875rem] transform-gpu blur-[118px]">
				<path fill="url(#60c3c621-93e0-4a09-a0e6-4c228a0116d8)" fill-opacity=".4"
				      d="m254.325 516.708-90.89 158.331L0 436.427l254.325 80.281 163.691-285.15c1.048 131.759 36.144 345.144 168.149 144.613C751.171 125.508 707.17-93.823 826.603 41.15c95.546 107.978 104.766 294.048 97.432 373.585L685.481 297.694l16.974 360.474-448.13-141.46Z"/>
				<defs>
					<linearGradient id="60c3c621-93e0-4a09-a0e6-4c228a0116d8" x1="926.392" x2="-109.635"
					                y1=".176" y2="321.024" gradientUnits="userSpaceOnUse">
						<stop stop-color="#776FFF"/>
						<stop offset="1" stop-color="#FF4694"/>
					</linearGradient>
				</defs>
			</svg>
		</div>
		<div class="relative mx-auto max-w-7xl py-12 lg:px-8">
			<div class="pr-6 pl-6 md:ml-auto md:pl-16 w-2/3 lg:pr-0">
				<h2 v-if="currentQuestion.answered === 'skipped'" class="font-semibold leading-7 text-2xl text-red-600">
					Bummer! You got the next one.</h2>
				<h2 v-else class="font-semibold leading-7 text-2xl text-indigo-500">You Got It!</h2>
				<div class="flex items-center space-x-4 mt-2">
					<div
					  class="mt-2 text-2xl font-bold tracking-tight text-white">
						"{{ currentQuestion.omdb.Title }}" {{ currentQuestion.omdb.Year }}
					</div>
					<div
					  class="inline-flex items-center rounded-full bg-gray-700 px-3 py-1 mt-2.5 text-xs font-medium text-indigo-400">
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
			let response = await fetch("http://www.omdbapi.com/?apikey=4caa9831&i="+this.currentQuestion.imdbId);
			this.currentQuestion.omdb = await response.json();

		},
		nextQuestion() {
			this.$emit('set-rand-question')
		}
	}
}
</script>
