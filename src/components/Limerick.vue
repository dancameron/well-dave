<template>
	<div class="sm:flex pb-12">
		<div class="relative">
			<span class="absolute top-5 left-5 -ml-px h-full w-0.5 bg-gray-50 md:bg-gray-200" aria-hidden="true"></span>
			<div class="relative flex items-start space-x-4">
				<div class="relative -ml-2">

					<img
					  class="flex h-14 w-14 items-center justify-center rounded-full bg-gray-400 ring-8 ring-white"
					  src="https://pbs.twimg.com/profile_images/1215353085435858945/2Mo37MGA_400x400.jpg">

					<span class="absolute -bottom-0.5 -right-1 rounded-tl bg-white px-0.5 py-px">
				   <svg class="h-4 w-4 text-gray-300" viewBox="0 0 20 20" fill="currentColor"
				        aria-hidden="true">
				     <path fill-rule="evenodd"
				           d="M10 2c-2.236 0-4.43.18-6.57.524C1.993 2.755 1 4.014 1 5.426v5.148c0 1.413.993 2.67 2.43 2.902.848.137 1.705.248 2.57.331v3.443a.75.75 0 001.28.53l3.58-3.579a.78.78 0 01.527-.224 41.202 41.202 0 005.183-.5c1.437-.232 2.43-1.49 2.43-2.903V5.426c0-1.413-.993-2.67-2.43-2.902A41.289 41.289 0 0010 2zm0 7a1 1 0 100-2 1 1 0 000 2zM8 8a1 1 0 11-2 0 1 1 0 012 0zm5 1a1 1 0 100-2 1 1 0 000 2z"
				           clip-rule="evenodd"/>
				   </svg>
				 </span>

				</div>

				<div class="min-w-0 flex-1">

					<div class="mb-2 sm:mb-8 text-lg sm:text-xl text-gray-700 font-sans font-black capitalize">
						I guess you could say my thoughts on <input v-model="movie" type="text"
						                                            class="inline bg-gray-50 h-8 text-xl border-0 border-b-2 border-dashed p-1.5 text-gray-900 placeholder:text-gray-300 hover:border-solid focus-visible:outline-none focus:border-sky-600 focus:border-solid sm:leading-6"
						                                            :class="{'text-sky-600 border-sky-400': !errors.movie, 'border-red-200 text-red-400 focus:text-sky-600': errors.movie }"
						                                            placeholder="Movie Title"
						                                            aria-describedby="Movie Title"> are best summed up
						in
						the form of a limerick
					</div>
					<div class="w-auto">
						<ul class="font-serif">
							<li class="mb-1 sm:text-xl text-gray-800"
							    v-for="(line, index) in currentQuestion.limerick">
								<span v-if="true" v-html="line" />
								<span v-else v-html="limerickLine(line)" class="capitalize" />
								<span v-if="currentQuestion.limerick.length === index+1" class="inline relative">
										<input v-model="end" type="text"
										       class="inline bg-gray-50 w-40 h-8 text-lg border-0 border-b-2 border-dashed p-1.5 pr-8 text-gray-900 placeholder:text-gray-300 hover:border-solid focus-visible:outline-none focus:border-sky-600 focus:border-solid sm:leading-6"
										       :class="{'text-sky-600 border-sky-400': !errors.end, 'border-red-200 text-red-400 focus:text-sky-600': errors.end }"
										       placeholder="..." aria-describedby="Last Word">.
										<span title="Fill in the last word" v-on:click="giveLimerickEnd()"
										      class="absolute cursor-pointer -top-1 right-2">
											<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
											     stroke-width="1.5" stroke="currentColor"
											     class="inline w-5 h-5 text-sky-200 hover:text-sky-400">
											  <path stroke-linecap="round" stroke-linejoin="round"
											        d="M16.712 4.33a9.027 9.027 0 011.652 1.306c.51.51.944 1.064 1.306 1.652M16.712 4.33l-3.448 4.138m3.448-4.138a9.014 9.014 0 00-9.424 0M19.67 7.288l-4.138 3.448m4.138-3.448a9.014 9.014 0 010 9.424m-4.138-5.976a3.736 3.736 0 00-.88-1.388 3.737 3.737 0 00-1.388-.88m2.268 2.268a3.765 3.765 0 010 2.528m-2.268-4.796a3.765 3.765 0 00-2.528 0m4.796 4.796c-.181.506-.475.982-.88 1.388a3.736 3.736 0 01-1.388.88m2.268-2.268l4.138 3.448m0 0a9.027 9.027 0 01-1.306 1.652c-.51.51-1.064.944-1.652 1.306m0 0l-3.448-4.138m3.448 4.138a9.014 9.014 0 01-9.424 0m5.976-4.138a3.765 3.765 0 01-2.528 0m0 0a3.736 3.736 0 01-1.388-.88 3.737 3.737 0 01-.88-1.388m2.268 2.268L7.288 19.67m0 0a9.024 9.024 0 01-1.652-1.306 9.027 9.027 0 01-1.306-1.652m0 0l4.138-3.448M4.33 16.712a9.014 9.014 0 010-9.424m4.138 5.976a3.765 3.765 0 010-2.528m0 0c.181-.506.475-.982.88-1.388a3.736 3.736 0 011.388-.88m-2.268 2.268L4.33 7.288m6.406 1.18L7.288 4.33m0 0a9.024 9.024 0 00-1.652 1.306A9.025 9.025 0 004.33 7.288"/>
											</svg>
										</span>
									</span>
							</li>
						</ul>
					</div>
					<div class="my-4">
						<div>
							<button type="button"
							        class="rounded-md bg-sky-100 px-12 py-3 text-md font-bold text-sky-500 hover:text-sky-700 hover:bg-sky-200 focus:outline-none focus:ring-2 focus:ring-sky-600 focus:ring-offset-2 focus:ring-offset-sky-50"
							        v-on:click="answerLimerick()">Guess
							</button>
						</div>
						<div v-if="errors.movie || errors.end" class="mt-4 rounded-md p-4 bg-red-100"
						     :class="{'bg-yellow-50': errors.movie === false || errors.end === false}">
							<div class="flex">
								<div class="ml-3">
									<h3 class="text-sm font-bold text-red-700">
										Whoops!</h3>
									<div class="my-2 text-sm text-red-700">
										<ul role="list" class="list-disc space-y-1 pl-5">
											<li v-if="errors.movie">That movie title guess was wrong. When did they last
												review
												that movie?
											</li>
											<li v-else class="text-sky-900">
												Nice, you got the title right but...
											</li>
											<li v-if="errors.end">You got that ending to the limerick wrong. I think
												Jeff
												woulda ended it better!?!
											</li>
											<li v-else class="text-sky-900">
												At least you got the end right. Maybe you misspelled the movie?
											</li>
										</ul>
									</div>
									<h3 class="text-sm font-bold text-red-700">
										That's a bummer. Keep trying. After all, it is free.</h3>
								</div>
							</div>
						</div>

					</div>
				</div>
			</div>
		</div>
		<div
		  class="w-auto -ml-8 sm:ml-0 lg:max-w-1/5 xl:w-1/3 mt-4 lg:mt-0 rounded-sm text-xs">
			<div class="pl-8 group">
				<ul class="text-gray-300 flex flex-col mx-auto divide-y divide-dashed">
					<li v-for="(hint, index) in currentQuestion.hints" class="py-2 flex items-baseline space-x-3 cursor-zoom-in">

						<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
						     stroke="currentColor" class="-ml-1 mr-1 h-5 w-5 flex-shrink-0 self-center text-gray-200" :class="{'text-sky-300': index <= currentQuestion.hintsNeeded-1 }">
							<path stroke-linecap="round" stroke-linejoin="round"
							      d="M15.75 15.75l-2.489-2.489m0 0a3.375 3.375 0 10-4.773-4.773 3.375 3.375 0 004.774 4.774zM21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
						</svg>

						<span class="select-none"
						      :class="{'blur-0 text-gray-600': index <= currentQuestion.hintsNeeded-1, 'blur-sm': index > currentQuestion.hintsNeeded-1 }">{{
								hint
							}}</span>
					</li>
				</ul>
				<div class="block mt-2" v-if="currentQuestion.hintsNeeded < currentQuestion.hints.length">
					<div class="flex">
						<button type="button"
						        class="w-full rounded-md text-sky-200 bg-gray-50 px-2 py-1.5 text-sm font-bold group-hover:bg-sky-50 group-hover:text-sky-300 focus:outline-none focus:ring-0"
						        :class="{'bg-red-100 text-red-700': errors.movie || errors.end}"
						        v-on:click="revealHint()">
							<span>{{ helpText }}</span>
						</button>
					</div>
				</div>
				<div class="block mt-2" v-else>
					<div class="-mx-2 -my-1.5 flex text-sky-300">
						<button type="button"
						        class="w-full rounded-md bg-sky-50 px-2 py-1.5 text-sm font-bold hover:bg-red-200 hover:text-red-700 focus:outline-none focus:ring-2 focus:ring-red-600 focus:ring-offset-2 focus:ring-offset-red-50"
						        v-on:click="skip()">
							Take the L ... Get Answer
						</button>
					</div>
				</div>
			</div>
		</div>

	</div>
</template>
<script>
export default {
	name: 'Limerick',
	props: {
		quote: {},
		currentQuestion: {},
		errors: {},
		inputs: {}
	},
	data() {
		return {
			movie: this.inputs.movie,
			end: this.inputs.end
		}
	},
	methods: {
		limerickLine(line) {
			let movie = this.currentQuestion.movie.toLowerCase();
			return line.toLowerCase().replace(movie, '<span class="group"><span class="hidden group-hover:inline">'+movie+'</span><span class="inline group-hover:hidden text-sky-500 border-sky-300 border-dashed">[Spoiler]</span></span>')
		},
		answerLimerick() {
			this.$emit('answer-limerick', {movie: this.movie, end: this.end})
		},
		revealHint() {
			this.$emit('show-hint')
		},
		skip() {
			this.$emit('next-question')
		},
		giveLimerickEnd() {
			this.end = this.currentQuestion.answers.end
			this.$emit('show-end')
		}
	},
	computed: {
		helpText() {
			let ht = "Hol'up ... Reveal a Hint"
			if (1 === this.currentQuestion.hintsNeeded) {
				ht = "Sigh ... Reveal Another"
			} else if (1 < this.currentQuestion.hintsNeeded) {
				ht = "Sheesh ... the Last One Too"
			}
			return ht
		}
	},
	watch: {
		movie: function (newAnswer, oldAnswer) {
			if (newAnswer !== oldAnswer) {
				this.errors.movie = false
				this.errors.end = false
			}
		},
		end: function (newAnswer, oldAnswer) {
			if (newAnswer !== oldAnswer) {
				this.errors.end = false
				this.errors.movie = false
			}
		}
	},
}
</script>
