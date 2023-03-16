<template>
	<div class="relative pb-8">
		<span class="absolute top-5 left-5 -ml-px h-full w-0.5 bg-gray-50 md:bg-gray-200" aria-hidden="true"></span>
		<div class="relative flex items-start space-x-4">
			<div class="relative mt-4 md:mt-1">

				<img
				  class="flex h-8 w-8 md:h-16 md:w-16 items-center justify-center rounded-full bg-gray-400 ring-8 ring-white"
				  src="https://pbs.twimg.com/profile_images/1215353085435858945/2Mo37MGA_400x400.jpg">

				<span class="absolute -bottom-0.5 -right-1 rounded-tl bg-white px-0.5 py-px">
				   <svg class="h-6 w-6 text-gray-300" viewBox="0 0 20 20" fill="currentColor"
				        aria-hidden="true">
				     <path fill-rule="evenodd"
				           d="M10 2c-2.236 0-4.43.18-6.57.524C1.993 2.755 1 4.014 1 5.426v5.148c0 1.413.993 2.67 2.43 2.902.848.137 1.705.248 2.57.331v3.443a.75.75 0 001.28.53l3.58-3.579a.78.78 0 01.527-.224 41.202 41.202 0 005.183-.5c1.437-.232 2.43-1.49 2.43-2.903V5.426c0-1.413-.993-2.67-2.43-2.902A41.289 41.289 0 0010 2zm0 7a1 1 0 100-2 1 1 0 000 2zM8 8a1 1 0 11-2 0 1 1 0 012 0zm5 1a1 1 0 100-2 1 1 0 000 2z"
				           clip-rule="evenodd"/>
				   </svg>
				 </span>

			</div>

			<div class="min-w-0 flex-1">
				<div class="mb-8 text-2xl text-gray-700 font-sans font-black capitalize">
					I guess you could say my thoughts on <input v-model="movie" type="text"
					                                            class="inline bg-gray-50 h-8 text-xl border-0 border-b-2 border-dashed p-1.5 text-gray-900 placeholder:text-gray-400 hover:border-solid focus-visible:outline-none focus:border-indigo-600 focus:border-solid sm:leading-6"
					                                            :class="{'text-indigo-600 border-indigo-300': !errors.movie, 'border-red-200 text-red-400 focus:text-indigo-600': errors.movie }"
					                                            placeholder="Movie Title"
					                                            aria-describedby="Movie Title"> are best summed up in
					the form of a limerick
				</div>
				<div class="flex flex-wrap">
					<div class="w-auto lg:pr-16  lg:w-3/4 xl:w-2/3">
						<div>
							<ul class="font-serif">
								<li class="mb-1 text-xl text-gray-800"
								    v-for="(line, index) in currentQuestion.limerick">
									{{ line }}
									<span v-if="currentQuestion.limerick.length === index+1" class="inline">
										<input v-model="end" type="text"
										       class="inline bg-gray-50 w-32 h-8 text-lg border-0 border-b-2 border-dashed p-1.5 text-gray-900 placeholder:text-gray-400 hover:border-solid focus-visible:outline-none focus:border-indigo-600 focus:border-solid sm:leading-6"
										       :class="{'text-indigo-600 border-indigo-300': !errors.end, 'border-red-200 text-red-400 focus:text-indigo-600': errors.end }"
										       placeholder="Last Word" aria-describedby="Last Word">.
									</span>
								</li>
							</ul>
						</div>
					</div>
					<div class="w-auto lg:w-1/4 xl:w-1/3 mt-4 lg:mt-0 rounded-sm text-xs bg-gray-50 px-4 drop-shadow-sm">
						<div class="pt-1 pb-4">
							<ul class="text-gray-300 flex flex-col mx-auto divide-y divide-dashed">
								<li v-for="(hint, index) in currentQuestion.hints" class="py-2"
								    :class="{'blur-0 text-gray-700': index <= currentQuestion.hintsNeeded-1, 'blur-sm': index > currentQuestion.hintsNeeded-1 }">
									<span class="cursor-help select-none">{{ hint }}</span>
								</li>
							</ul>
							<div class="block mt-2" v-if="currentQuestion.hintsNeeded < currentQuestion.hints.length">
								<div class="flex text-indigo-300">
									<button type="button"
									        class="w-full rounded-md bg-indigo-50 px-2 py-1.5 text-sm font-bold hover:bg-orange-100 hover:text-red-700 focus:outline-none focus:ring-0"
									        :class="{'bg-red-100 text-red-700': errors.movie || errors.end}"
									        v-on:click="revealHint()">
										<span>{{ helpText }}</span>
									</button>
								</div>
							</div>
							<div class="block mt-2" v-else>
								<div class="-mx-2 -my-1.5 flex text-indigo-300">
									<button type="button"
									        class="w-full rounded-md bg-indigo-50 px-2 py-1.5 text-sm font-bold hover:bg-red-200 hover:text-red-700 focus:outline-none focus:ring-2 focus:ring-red-600 focus:ring-offset-2 focus:ring-offset-red-50"
									        v-on:click="skip()">
										Take the L, Get Answer
									</button>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div class="my-4">
					<div>
						<button type="button"
						        class="rounded-md bg-indigo-100 px-12 py-3 text-md font-bold text-indigo-400 hover:text-indigo-700 hover:bg-indigo-200 focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:ring-offset-2 focus:ring-offset-indigo-50"
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
										<li v-else class="text-indigo-900">
											Nice, you got the title right but...
										</li>
										<li v-if="errors.end">You got that ending to the limerick wrong. I think Jeff
											woulda ended it better!?!
										</li>
										<li v-else class="text-indigo-900">
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
		answerLimerick() {
			this.$emit('answer-limerick', {movie: this.movie, end: this.end})
		},
		revealHint() {
			this.$emit('show-hint')
		},
		skip() {
			this.$emit('next-question')
		},
	},
	computed: {
		helpText() {
			let ht = "Hol'up, Get a Hint"
			if (1 === this.currentQuestion.hintsNeeded) {
				ht = "Sigh, Get Another"
			} else if (1 < this.currentQuestion.hintsNeeded) {
				ht = "Roll dem Dice, Get Last Hint"
			}
			return ht
		}
	},
	watch: {
		movie: function (newAnswer, oldAnswer) {
			if ( newAnswer !== oldAnswer ) {
				this.errors.movie = false
				this.errors.end = false
			}
		},
		end: function (newAnswer, oldAnswer) {
			if ( newAnswer !== oldAnswer ) {
				this.errors.end = false
				this.errors.movie = false
			}
		}
	},
}
</script>
