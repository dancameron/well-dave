<template>
	<div class="w-full bg-gray-50">

		<div class="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">

			<div class="mx-auto mb-12 max-w-7xl sm:px-6">
				<div
				  class="relative isolate overflow-hidden bg-gray-900 px-6 py-24 text-center shadow-2xl sm:rounded-3xl sm:px-16">
					<p class="-mt-8 mb-2 mx-auto max-w-2xl uppercase font-bold text-indigo-400">Total Score: <span
					  class="font-thin">{{ totalScore }} points</span></p>

					<h2 class="mx-auto max-w-2xl text-3xl font-bold tracking-tight text-white sm:text-4xl">Thank you for
						playing!</h2>

					<p v-if="remainingLimericks"
					   class="mx-auto mt-6 max-w-xl font-serif text-lg leading-8 text-gray-300">Below you'll find some
						stats but you don't need to stop. There are still <span
						  class="font-bold">{{ remainingLimericks }}</span> limericks you haven't yet answered.</p>
					<p v-else class="mx-auto mt-6 max-w-xl text-lg leading-8 text-gray-300 font-serif">Truly cannot
						believe you finished the entire game. That's pretty spectacular. Don't tell anyone but you got
						some bonus points.</p>
					<div class="mt-10 flex items-center justify-center gap-x-6">
						<a v-if="remainingLimericks" v-on:click="nextQuestion"
						   class="cursor-pointer rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white">
							Play on
						</a>
						<a href="https://www.patreon.com/filmpodcast" target="_blank"
						   class="text-sm font-semibold leading-6 text-white">Support The Filmcast <span
						  aria-hidden="true">→</span></a>
					</div>
					<svg viewBox="0 0 1024 1024"
					     class="absolute top-1/3 left-1/2 -z-10 h-[64rem] w-[64rem] -translate-x-1/2 [mask-image:radial-gradient(closest-side,white,transparent)]"
					     aria-hidden="true">
						<circle cx="512" cy="512" r="512" fill="url(#827591b1-ce8c-4110-b064-7cb85a0b1217)"
						        fill-opacity="0.7"/>
						<defs>
							<radialGradient id="827591b1-ce8c-4110-b064-7cb85a0b1217">
								<stop stop-color="#7775D6"/>
								<stop offset="1" stop-color="#E935C1"/>
							</radialGradient>
						</defs>
					</svg>
				</div>
			</div>

			<dl
			  class="mt-5 grid grid-cols-1 divide-y divide-gray-200 overflow-hidden rounded-lg bg-white shadow md:grid-cols-4 md:divide-y-0 md:divide-x">
				<div class="px-4 py-5 sm:p-6">
					<dt class="text-base font-normal text-gray-900">Answered Correctly</dt>
					<dd class="mt-1 flex items-center justify-between md:block lg:flex">
						<div class="flex items-baseline text-2xl font-semibold text-indigo-600">
							{{ limericksAnswered }}
							<span class="ml-2 text-sm font-medium text-gray-500">of {{ totalLimericksAttempted }}</span>
						</div>

						<div
						  class="inline-flex items-baseline rounded-full px-3 py-1 text-sm font-medium bg-indigo-50 text-indigo-800 md:mt-2 lg:mt-0">
							<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
							     stroke="currentColor"
							     class="-ml-1 mr-1 h-5 w-5 flex-shrink-0 self-center text-indigo-400">
								<path stroke-linecap="round" stroke-linejoin="round"
								      d="M10.125 2.25h-4.5c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125v-9M10.125 2.25h.375a9 9 0 019 9v.375M10.125 2.25A3.375 3.375 0 0113.5 5.625v1.5c0 .621.504 1.125 1.125 1.125h1.5a3.375 3.375 0 013.375 3.375M9 15l2.25 2.25L15 12"/>
							</svg>

							{{ percentAnswered }}%
						</div>
					</dd>
					<dd class="mt-3">
						<span
						  class="text-sm font-medium text-gray-300">Well Dave has {{
								totalLimericks
							}} total limericks</span>
					</dd>
				</div>

				<div class="px-4 py-5 sm:p-6">
					<dt class="text-base font-normal text-gray-900">Calculated Score</dt>
					<dd class="mt-1 flex items-center justify-between md:block lg:flex">

						<div
						  class="flex items-baseline text-2xl font-semibold text-indigo-600 mt-1">
							<span v-for="i in 5">
								<svg v-if="isHalfStar(i)" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"
								     stroke="currentColor"
								     class="h-7 w-7 flex-shrink-0 self-center text-yellow-400 fill-current">
								  <path
								    d="M288 376.4l.1-.1 26.4 14.1 85.2 45.5-16.5-97.6-4.8-28.7 20.7-20.5 70.1-69.3-96.1-14.2-29.3-4.3-12.9-26.6L288.1 86.9l-.1 .3V376.4zm175.1 98.3c2 12-3 24.2-12.9 31.3s-23 8-33.8 2.3L288.1 439.8 159.8 508.3C149 514 135.9 513.1 126 506s-14.9-19.3-12.9-31.3L137.8 329 33.6 225.9c-8.6-8.5-11.7-21.2-7.9-32.7s13.7-19.9 25.7-21.7L195 150.3 259.4 18c5.4-11 16.5-18 28.8-18s23.4 7 28.8 18l64.3 132.3 143.6 21.2c12 1.8 22 10.2 25.7 21.7s.7 24.2-7.9 32.7L438.5 329l24.6 145.7z"/></svg>

								<svg v-else-if="i <= Math.floor(totalStars)" xmlns="http://www.w3.org/2000/svg"
								     viewBox="0 0 576 512"
								     stroke="currentColor"
								     class="h-7 w-7  flex-shrink-0 self-center text-yellow-400 fill-current">
								  <path
								    d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"/></svg>

								<svg v-else xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"
								     stroke="currentColor"
								     class="h-7 w-7  flex-shrink-0 self-center text-gray-200 fill-current">
								  <path
								    d="M287.9 0C297.1 0 305.5 5.25 309.5 13.52L378.1 154.8L531.4 177.5C540.4 178.8 547.8 185.1 550.7 193.7C553.5 202.4 551.2 211.9 544.8 218.2L433.6 328.4L459.9 483.9C461.4 492.9 457.7 502.1 450.2 507.4C442.8 512.7 432.1 513.4 424.9 509.1L287.9 435.9L150.1 509.1C142.9 513.4 133.1 512.7 125.6 507.4C118.2 502.1 114.5 492.9 115.1 483.9L142.2 328.4L31.11 218.2C24.65 211.9 22.36 202.4 25.2 193.7C28.03 185.1 35.5 178.8 44.49 177.5L197.7 154.8L266.3 13.52C270.4 5.249 278.7 0 287.9 0L287.9 0zM287.9 78.95L235.4 187.2C231.9 194.3 225.1 199.3 217.3 200.5L98.98 217.9L184.9 303C190.4 308.5 192.9 316.4 191.6 324.1L171.4 443.7L276.6 387.5C283.7 383.7 292.2 383.7 299.2 387.5L404.4 443.7L384.2 324.1C382.9 316.4 385.5 308.5 391 303L476.9 217.9L358.6 200.5C350.7 199.3 343.9 194.3 340.5 187.2L287.9 78.95z"/></svg>
							</span>
						</div>

						<div
						  class="inline-flex items-baseline rounded-full px-3 py-1 text-sm font-medium bg-yellow-50 text-yellow-900 md:mt-2 lg:mt-0">
							<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
							     stroke="currentColor"
							     class="-ml-1 mr-1 h-5 w-5 flex-shrink-0 self-center text-yellow-400">
								<path stroke-linecap="round" stroke-linejoin="round"
								      d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z"/>
							</svg>


							{{ totalScore }} pts
						</div>

					</dd>
					<dd class="mt-3">
						<span
						  class="text-sm font-medium text-gray-300">Indeed, this game is rather difficult</span>
					</dd>
				</div>

				<div class="px-4 py-5 sm:p-6">
					<dt class="text-base font-normal text-gray-900">Endings Given</dt>
					<dd class="mt-1 flex items-center justify-between md:block lg:flex">
						<div class="flex items-baseline text-2xl font-semibold text-orange-600">
							{{ endingsProvided }}
							<span
							  class="ml-2 text-sm font-medium text-gray-500">of {{
									totalLimericksAttempted
								}} available</span>
						</div>

						<div
						  class="inline-flex items-baseline rounded-full px-3 py-1 text-sm font-medium bg-orange-50 text-orange-900 md:mt-2 lg:mt-0">
							<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
							     stroke="currentColor"
							     class="-ml-1 mr-1 h-5 w-5 flex-shrink-0 self-center text-orange-500">
								<path stroke-linecap="round" stroke-linejoin="round"
								      d="M16.712 4.33a9.027 9.027 0 011.652 1.306c.51.51.944 1.064 1.306 1.652M16.712 4.33l-3.448 4.138m3.448-4.138a9.014 9.014 0 00-9.424 0M19.67 7.288l-4.138 3.448m4.138-3.448a9.014 9.014 0 010 9.424m-4.138-5.976a3.736 3.736 0 00-.88-1.388 3.737 3.737 0 00-1.388-.88m2.268 2.268a3.765 3.765 0 010 2.528m-2.268-4.796a3.765 3.765 0 00-2.528 0m4.796 4.796c-.181.506-.475.982-.88 1.388a3.736 3.736 0 01-1.388.88m2.268-2.268l4.138 3.448m0 0a9.027 9.027 0 01-1.306 1.652c-.51.51-1.064.944-1.652 1.306m0 0l-3.448-4.138m3.448 4.138a9.014 9.014 0 01-9.424 0m5.976-4.138a3.765 3.765 0 01-2.528 0m0 0a3.736 3.736 0 01-1.388-.88 3.737 3.737 0 01-.88-1.388m2.268 2.268L7.288 19.67m0 0a9.024 9.024 0 01-1.652-1.306 9.027 9.027 0 01-1.306-1.652m0 0l4.138-3.448M4.33 16.712a9.014 9.014 0 010-9.424m4.138 5.976a3.765 3.765 0 010-2.528m0 0c.181-.506.475-.982.88-1.388a3.736 3.736 0 011.388-.88m-2.268 2.268L4.33 7.288m6.406 1.18L7.288 4.33m0 0a9.024 9.024 0 00-1.652 1.306A9.025 9.025 0 004.33 7.288"/>
							</svg>
							{{ percentEndGiven }}%
						</div>
					</dd>
					<dd class="mt-3">
						<span
						  class="text-sm font-medium text-gray-300">Some very clever limericks</span>
					</dd>
				</div>

				<div class="px-4 py-5 sm:p-6">
					<dt class="text-base font-normal text-gray-900">Hints Viewed</dt>
					<dd class="mt-1 flex items-center justify-between md:block lg:flex">
						<div class="flex items-baseline text-2xl font-semibold text-green-600">
							{{ helpUsed }}
							<span
							  class="ml-2 text-sm font-medium text-gray-500">of {{ helpAvailable }} available</span>
						</div>

						<div
						  class="inline-flex items-baseline rounded-full px-3 py-1 text-sm font-medium bg-green-50 text-green-900 md:mt-2 lg:mt-0">
							<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
							     stroke="currentColor"
							     class="-ml-1 mr-1 h-5 w-5 flex-shrink-0 self-center text-green-500">
								<path stroke-linecap="round" stroke-linejoin="round"
								      d="M12 18v-5.25m0 0a6.01 6.01 0 001.5-.189m-1.5.189a6.01 6.01 0 01-1.5-.189m3.75 7.478a12.06 12.06 0 01-4.5 0m3.75 2.383a14.406 14.406 0 01-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 10-7.517 0c.85.493 1.509 1.333 1.509 2.316V18"/>
							</svg>
							{{ percentHelp }}%
						</div>
					</dd>
					<dd class="mt-3">
						<span
						  class="text-sm font-medium text-gray-300">Hopefully the help was helpful</span>
					</dd>
				</div>
			</dl>
		</div>

	</div>
</template>
<script>
export default {
	name: 'Stats',
	props: {
		answerLog: {},
		questions: Array
	},
	methods: {
		nextQuestion() {
			this.$emit('continue')
		},
		isHalfStar(i) {
			// is half star at all
			if (((this.totalStars - Math.floor(this.totalStars)) === 0)) {
				return false
			}
			return this.totalStars + 1 === ((this.totalStars + 1 - Math.floor(this.totalStars + 1)) + i)
		}
	},
	computed: {
		totalLimericks() {
			return this.questions.length
		},
		limericksAttempted() {
			return this.questions.filter(function (q) {
				return true === q.answered || 'skipped' === q.answered;
			})
		},
		totalLimericksAttempted() {
			return this.limericksAttempted.length
		},
		limericksAnswered() {
			return this.limericksAttempted.filter(function (q) {
				return true === q.answered;
			}).length
		},
		remainingLimericks() {
			return this.totalLimericks - this.totalLimericksAttempted
		},
		percentAnswered() {
			return Math.floor((this.limericksAnswered / this.totalLimericksAttempted) * 100)
		},
		endingsProvided() {
			let gaveEnd = 0
			this.limericksAttempted.forEach(function (q) {
				gaveEnd = gaveEnd + q.gaveEnd
			})
			return gaveEnd
		},
		helpUsed() {
			let needed = 0
			this.limericksAttempted.forEach(function (q) {
				needed = needed + q.hintsNeeded
			})
			return needed
		},
		helpAvailable() {
			let hints = 0
			this.limericksAttempted.forEach(function (q) {
				hints = hints + q.hints.length
			})
			return hints
		},
		percentEndGiven() {
			return Math.floor((this.endingsProvided / this.totalLimericksAttempted) * 100)
		},
		percentHelp() {
			return Math.floor((this.helpUsed / this.helpAvailable) * 100)
		},
		wrongAnswers() {
			return this.answerLog.filter(function (q) {
				return false === q.answered;
			}).length
		},
		totalScore() {
			// start with the percent as a score of 100
			// assuming the game is set at 10 limericks per set, that would be
			// 10 points per limerick
			// take 1 points off if ending was shown
			// take .75 points off for help
			// take .5 point off for answering incorrectly
			// that way if someone gets 3 hints and guesses wrong once they'd get 5 points.
			// added points if you complete all questions
			let bonus = 0
			if (0 === this.remainingLimericks) {
				bonus = this.totalLimericksAttempted * .5
			}
			console.log(this.endingsProvided)
			return ((Math.floor((this.limericksAnswered / this.totalLimericksAttempted) * 100)) + bonus) - Math.floor(((this.endingsProvided) + (this.helpUsed * .75) + (this.wrongAnswers * .5)));
		},
		totalStars() {
			let s = this.totalScore / 20
			return Number((Math.round(s * 2) / 2).toFixed(1))
		}
	}
}
</script>
