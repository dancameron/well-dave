<script setup>

import Conversation from "./components/Conversation.vue";
import Limerick from "./components/Limerick.vue";
import AnswerScreen from "./components/AnswerScreen.vue";
import Stats from "./components/Stats.vue";
import FooterLinks from "./components/FooterLinks.vue";
import BonusLimerick from "./components/BonusLimericks.vue";
import FooterNav from "./components/FooterNav.vue";
import NewHere from "./components/NewHere.vue";</script>

<template>
	<div class="font-sans" :class="{'bg-sky-900 bg-gradient-to-t via-sky-900 from-black': answeredOrSkipped}">

		<NewHere :new-here="newHere === true" @lesGo="lesGo" :questions="questions" :set-total="setTotal"/>

		<div v-if="!finished" class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8" :class="{'blur': newHere === true}">

			<div class="mx-auto py-4 sm:py-8 lg:py-12 flex items-center text-sky-500">
				<svg class="hidden sm:flex mr-3 h-6 w-6 md:h-12 md:w-12 text-sky-100" aria-hidden="true"
				     focusable="false" data-prefix="fal"
				     data-icon="popcorn" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
					<path fill="currentColor"
					      d="M444.8 198.3C441.7 194.3 437 192 432 192h-416C11 192 6.281 194.3 3.25 198.3c-3 3.984-4 9.156-2.656 13.97l80 288C82.5 507.2 88.81 512 96 512h256c7.188 0 13.5-4.797 15.41-11.72l80-288C448.8 207.5 447.8 202.3 444.8 198.3zM339.8 480H108.2L37.06 224h61.06l30.04 210.3C129.3 442.3 136.2 448 143.1 448c.75 0 1.531-.0469 2.281-.1562c8.75-1.25 14.84-9.359 13.59-18.11L130.5 224L208 224V432c0 8.844 7.156 16 16 16s16-7.156 16-16V224L317.5 224l-29.39 205.7c-1.25 8.75 4.844 16.86 13.59 18.11C302.5 447.1 303.3 448 304 448c7.812 0 14.66-5.75 15.81-13.73L349.9 224h61.06L339.8 480zM22.41 147.1c5.969-10.73 15.41-19.09 26.72-24.06C47.5 111.3 49.75 99.03 55.94 88.5c9.625-16.83 27.12-27.36 46.31-28.75c5.719-16.83 19.41-30.42 37.44-35.95c11.88-3.844 24.75-3.719 36.5 .125c7.219-10 17.56-17.53 29.59-21.25c25.16-7.547 51.69 1.75 65.81 21.28c11.88-3.922 24.84-4.062 36.91-.2187c18 5.656 31.66 19.27 37.31 36.03c19.16 1.406 36.66 11.95 46.34 28.91c6.062 10.66 8.281 22.69 6.656 34.34c11 4.891 20.34 13.11 26.59 23.73c4.5 7.609 1.938 17.42-5.656 21.89c-7.625 4.422-17.44 1.984-21.91-5.672c-4.375-7.391-12.09-12.23-20.66-12.92c-5.406-.4531-10.22-3.609-12.78-8.391c-2.562-4.797-2.531-10.55 .0938-15.31c3.781-6.844 3.719-15.02-.1562-21.83c-5.438-9.547-17.28-14.64-28.59-12.36c-4.625 1-9.5-.2656-13.19-3.25s-5.875-7.453-5.938-12.2c-.1562-10.14-7.312-19.17-17.81-22.47c-8.344-2.672-17.66-1.172-24.75 4.062c-4.812 3.594-11.28 4.203-16.75 1.469c-4.25-2.141-7.281-6.031-8.375-10.53c-.0625-.2187-.1562-.4375-.2187-.6562C244.4 35.84 229.4 29 215.2 33.28C207.2 35.72 200.9 42 198.4 50.06C196.8 54.97 193 58.83 188.1 60.42C183.2 62.02 177.8 61.17 173.7 58.14c-7-5.094-16.16-6.5-24.38-3.828C138.7 57.56 131.6 66.59 131.4 76.83c-.125 4.734-2.312 9.156-6 12.12C121.7 91.89 116.9 93.16 112.3 92.16C100.9 89.89 89.09 94.97 83.66 104.5c-4 6.781-4.031 15.02-.25 21.66C86.09 130.9 86.19 136.7 83.69 141.5S76.38 149.5 70.97 150c-8.844 .8125-16.75 5.641-20.62 12.61C47.44 167.9 41.97 170.9 36.38 170.9c-2.656 0-5.312-.6406-7.781-2.016C20.88 164.5 18.09 154.8 22.41 147.1z"></path>
				</svg>
				<img
				  class="flex sm:hidden mr-3 h-8 w-8 rounded-full bg-gray-400 ring-8 ring-white"
				  src="https://pbs.twimg.com/profile_images/1215353085435858945/2Mo37MGA_400x400.jpg">
				<span class="font-logo text-2xl md:text-5xl" :class="{'text-sky-50': answeredOrSkipped}">Well, Dave<span
				  class="font-sans font-thin">&hellip;</span></span>
			</div>

			<div class="mx-auto">

				<div v-if="answeredOrSkipped">
					<AnswerScreen :current-question="currentQuestion" @set-rand-question="setRandQuestion"/>
				</div>

				<div class="pb-8 sm:pb-24 flow-root" v-else>
					<ul role="list" class="-mb-8">
						<li v-for="(quote,index) in currentConversation">

							<Limerick v-if="quote.limerick" :quote="quote" :inputs="inputs" :errors="errors"
							          :currentQuestion="currentQuestion" @answer-limerick="answerLimerick"
							          @show-hint="showHint" @show-end="giveLimerickEnd"
							          @next-question="skipCurrentLimerick"/>

							<div class="relative pb-8" v-else-if="quote.bonusLimerick">
								<BonusLimerick :bonusLimerick="currentQuestion.bonusLimericks[quote.bonusLimerick-1]"/>
							</div>

							<Conversation v-else :quote="quote"
							              :last="(index !== currentConversation.length - 1)"/>
						</li>
					</ul>
				</div>

			</div>

		</div>

		<Stats v-else :questions="questions" :answerLog="answerLog" @continue="upSetTotal"/>

		<FooterLinks :current-question-id="currentQuestionId" :v="version" @restart="restart"/>

		<FooterNav @go-to-movie="goToMoviePage" :questions="questions"/>

	</div>
</template>

<script>

// data import
import questionsJSON from "./questions.json"

export default {
	name: 'WellDaveApp',
	data() {
		return {
			newHere: true,
			finished: false,
			setTotal: 10,
			answerLog: [],
			errors: {movie: false, end: false},
			questions: questionsJSON,
			currentQuestionId: false,
			cacheKey: 'wellDaveEp.711.c', // sigh, I didn't consider progress being saved, so this is a perma-key
			inputs: {movie: '', end: ''},
			version: '613-711',
		}
	},
	mounted() {
		if (this.getCache()) {
			try {
				let cache = this.getCache();
				this.finished = cache.finished;
				this.answerLog = cache.answerLog;
				this.inputs = cache.inputs;
				this.errors = cache.errors;
				this.currentQuestionId = cache.currentQuestionId;

				if (cache.newHere > 1680034412000 ) {
					this.newHere = false
				}

				// Yeah, I should have created a different data set but a small project turned bigger than I originally set out to do...knowing not a lot of people would use it.
				let attempted = cache.questions.filter(function (q) {
					return true === q.answered || 'skipped' === q.answered;
				})
				if (attempted.length) {
					for (const cached of attempted) {
						let qToUpdate = this.questions[this.findQuestionIndexById(cached.imdbId)];
						qToUpdate.answered = cached.answered
						qToUpdate.hintsNeeded = cached.hintsNeeded
						qToUpdate.gaveEnd = cached.gaveEnd
					}
				}

			} catch (e) {
				console.log(e)
				this.restart()
			}
		} else {
			this.setRandQuestion()
		}

		// TODO This sorts the movies but is really not necessary when live
		// for the footer nav though?
		this.questions.sort(function (a, b) {
			if (a.episodeTitle > b.episodeTitle) {
				return -1;
			}
			if (a.episodeTitle < b.episodeTitle) {
				return 1;
			}
			return 0;
		})


	},
	methods: {

		getCache() {
			let cache = localStorage.getItem(this.cacheKey)
			if (!cache) {
				return false;
			}
			return JSON.parse(cache)

		},
		goToMoviePage(id) {
			console.log(id)
			let question = this.questions[this.findQuestionIndexById(id)];
			console.log(question)
			this.currentQuestionId = id
			question.answered = false
			question.hintsNeeded = 0
			question.gaveEnd = false
			window.scrollTo(0, 0)
			this.setCache()
		},
		skipCurrentLimerick() {
			this.inputs = {movie: '', end: ''}
			let question = this.questions[this.findQuestionIndexById(this.currentQuestionId)];
			question.answered = 'skipped'
			// log when skipped
			this.answerLog.push({
				'id': this.currentQuestionId,
				'hintsUsed': question.hintsNeeded,
				'gaveEnd': question.gaveEnd,
				'answered': false,
				'time': Date.now()
			})
		},
		upSetTotal() {
			this.setTotal = this.setTotal + this.setTotal
			this.finished = false
			this.setRandQuestion()
		},
		setRandQuestion() {

			// check if answered a set yet
			if (this.setTotal === this.limericksAttempted.length) {
				this.finished = true
				window.scrollTo(0, 0);
				this.setCache()
				return;
			}

			let qs = this.questions.filter(function (q) {
				return (undefined === q.answered || false === q.answered) && (undefined === q.incomplete);
			});

			// no more limericks!
			if (qs.length === 0) {
				this.finished = true
				window.scrollTo(0, 0);
				this.setCache()
				return;
			}

			// just keep on keepin on
			let randomIndex = Math.floor(Math.random() * qs.length)
			let question = qs[randomIndex]

			question.answered = false
			question.hintsNeeded = 0
			question.gaveEnd = false

			//this.currentQuestionId = 'tt10872600' // todo testing
			this.currentQuestionId = question.imdbId
			this.errors = {movie: '', end: ''}

			window.scrollTo(0, 0);
			this.setCache()
		},

		findQuestionIndexById(id) {
			return this.questions.findIndex(x => x.imdbId === id);
		},

		showHint() {
			let question = this.questions[this.findQuestionIndexById(this.currentQuestionId)];
			question.hintsNeeded = question.hintsNeeded + 1
			this.setCache()
		},

		giveLimerickEnd() {
			let question = this.questions[this.findQuestionIndexById(this.currentQuestionId)];
			question.gaveEnd = true
			this.setCache()
		},

		answerLimerick(inputs) {
			this.inputs = inputs
			let question = this.questions[this.findQuestionIndexById(this.currentQuestionId)];

			let movieGuess = this.inputs.movie.replace(/\W/g, '').toLowerCase();
			let endGuess = this.inputs.end.replace(/\W/g, '').toLowerCase();

			// check if movie answer is correct
			if (Array.isArray(question.answers.movie)) {
				this.errors.movie = (question.answers.movie.findIndex(x => x.replace(/\W/g, '').toLowerCase() === movieGuess) < 0)
			} else {
				this.errors.movie = !(movieGuess === question.answers.movie.replace(/\W/g, '').toLowerCase())
			}

			// check if end is correct
			if (Array.isArray(question.answers.end)) {
				this.errors.end = (question.answers.end.findIndex(x => x.replace(/\W/g, '').toLowerCase() === endGuess) < 0)
			} else {
				this.errors.end = !(endGuess === question.answers.end.replace(/\W/g, '').toLowerCase())
			}

			// log if answered correctly
			if (!this.errors.movie && !this.errors.end) {
				this.inputs = {movie: '', end: ''}
				question.answered = true
			}

			// log everytime
			this.answerLog.push({
				'id': this.currentQuestionId,
				'inputs': this.inputs,
				'errors': this.errors,
				'hintsUsed': question.hintsNeeded,
				'gaveEnd': question.gaveEnd,
				'answered': question.answered,
				'time': Date.now()
			})
			this.setCache()
		},

		setCache() {
			let cache = JSON.stringify({
				newHere: this.newHere,
				currentQuestionId: this.currentQuestionId,
				answerLog: this.answerLog,
				inputs: this.inputs,
				errors: this.errors,
				questions: this.questions,
				finished: this.finished,
			})
			localStorage.setItem(this.cacheKey, cache);
		},
		lesGo() {
			this.newHere = Date.now()
			this.setCache()
		},
		restart() {
			this.removeCache();
			location.reload();
			window.scrollTo(0, 0);
		},

		removeCache(e) {
			console.log('CACHE REMOVAL: ', this.cacheKey)
			localStorage.removeItem(this.cacheKey);
		}

	},

	computed: {
		limericksAttempted() {
			return this.questions.filter(function (q) {
				return true === q.answered || 'skipped' === q.answered;
			})
		},
		answeredOrSkipped() {
			if (!this.currentQuestionId || this.finished) {
				return false
			}
			let answered = this.questions[this.findQuestionIndexById(this.currentQuestionId)].answered;
			if (undefined === answered) {
				return false
			} else if ('skipped' === answered) {
				return true
			}
			return answered
		},
		currentQuestion() {
			if (!this.currentQuestionId) {
				return false
			}
			return this.questions[this.findQuestionIndexById(this.currentQuestionId)]
		},
		currentConversation() {
			return this.currentQuestion.conversation
		}
	},

	watch: {}
}
</script>

