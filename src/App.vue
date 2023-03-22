<script setup>

import Conversation from "./components/Conversation.vue";
import Limerick from "./components/Limerick.vue";
import AnswerScreen from "./components/AnswerScreen.vue";
import Stats from "./components/Stats.vue";
import FooterLinks from "./components/FooterLinks.vue";
import BonusLimericks from "./components/BonusLimericks.vue";
import FooterNav from "./FooterNav.vue";</script>

<template>
	<div class="font-sans" :class="{'bg-gray-900': answeredOrSkipped}">

		<div v-if="!finished" class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

			<div class="mx-auto py-8 sm:py-4 lg:py-12 flex items-center space-x-3 text-sky-600">
				<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
				     stroke="currentColor" class="w-12 h-12 -rotate-45">
					<path stroke-linecap="round" stroke-linejoin="round"
					      d="M3.375 19.5h17.25m-17.25 0a1.125 1.125 0 01-1.125-1.125M3.375 19.5h1.5C5.496 19.5 6 18.996 6 18.375m-3.75 0V5.625m0 12.75v-1.5c0-.621.504-1.125 1.125-1.125m18.375 2.625V5.625m0 12.75c0 .621-.504 1.125-1.125 1.125m1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125m0 3.75h-1.5A1.125 1.125 0 0118 18.375M20.625 4.5H3.375m17.25 0c.621 0 1.125.504 1.125 1.125M20.625 4.5h-1.5C18.504 4.5 18 5.004 18 5.625m3.75 0v1.5c0 .621-.504 1.125-1.125 1.125M3.375 4.5c-.621 0-1.125.504-1.125 1.125M3.375 4.5h1.5C5.496 4.5 6 5.004 6 5.625m-3.75 0v1.5c0 .621.504 1.125 1.125 1.125m0 0h1.5m-1.5 0c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125m1.5-3.75C5.496 8.25 6 7.746 6 7.125v-1.5M4.875 8.25C5.496 8.25 6 8.754 6 9.375v1.5m0-5.25v5.25m0-5.25C6 5.004 6.504 4.5 7.125 4.5h9.75c.621 0 1.125.504 1.125 1.125m1.125 2.625h1.5m-1.5 0A1.125 1.125 0 0118 7.125v-1.5m1.125 2.625c-.621 0-1.125.504-1.125 1.125v1.5m2.625-2.625c.621 0 1.125.504 1.125 1.125v1.5c0 .621-.504 1.125-1.125 1.125M18 5.625v5.25M7.125 12h9.75m-9.75 0A1.125 1.125 0 016 10.875M7.125 12C6.504 12 6 12.504 6 13.125m0-2.25C6 11.496 5.496 12 4.875 12M18 10.875c0 .621-.504 1.125-1.125 1.125M18 10.875c0 .621.504 1.125 1.125 1.125m-2.25 0c.621 0 1.125.504 1.125 1.125m-12 5.25v-5.25m0 5.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125m-12 0v-1.5c0-.621-.504-1.125-1.125-1.125M18 18.375v-5.25m0 5.25v-1.5c0-.621.504-1.125 1.125-1.125M18 13.125v1.5c0 .621.504 1.125 1.125 1.125M18 13.125c0-.621.504-1.125 1.125-1.125M6 13.125v1.5c0 .621-.504 1.125-1.125 1.125M6 13.125C6 12.504 5.496 12 4.875 12m-1.5 0h1.5m-1.5 0c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125M19.125 12h1.5m0 0c.621 0 1.125.504 1.125 1.125v1.5c0 .621-.504 1.125-1.125 1.125m-17.25 0h1.5m14.25 0h1.5"/>
				</svg>
				<span class="font-logo tracking-wide text-6xl">Well Dave<span class="font-sans font-thin">&hellip;</span></span>

			</div>

			<div class="mx-auto">

				<div v-if="answeredOrSkipped">
					<AnswerScreen :current-question="currentQuestion" @set-rand-question="setRandQuestion"/>
				</div>

				<div class="flow-root" v-else>
					<ul role="list" class="-mb-8">
						<li v-for="(quote,index) in currentConversation">

							<Limerick v-if="quote.limerick" :quote="quote" :inputs="inputs" :errors="errors"
							          :currentQuestion="currentQuestion" @answer-limerick="answerLimerick"
							          @show-hint="showHint" @show-end="giveLimerickEnd"
							          @next-question="skipCurrentLimerick"/>

							<div class="relative pb-8" v-else-if="quote.bonusLimericks">
								<BonusLimericks :current-question="currentQuestion"/>
							</div>

							<Limerick v-else-if="quote.bonusLimerick" :quote="quote" :inputs="inputs" :errors="errors"
							          :currentQuestion="currentQuestion" @answer-limerick="answerLimerick"
							          @show-hint="showHint" @next-question="skipCurrentLimerick"/>

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
			finished: false,
			setTotal: 10,
			answerLog: [],
			errors: {movie: false, end: false},
			questions: questionsJSON,
			currentQuestionId: false,
			cacheKey: 'wellDave' + __APP_VERSION__.version,
			inputs: {movie: '', end: ''},
			version: __APP_VERSION__.version,
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
				this.questions = cache.questions;
				this.currentQuestionId = cache.currentQuestionId
			} catch (e) {
				console.log(e)
				this.restart()
			}
		} else {
			this.setRandQuestion()
		}

		// TODO This sorts the movies but is really not necessary when live
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
			if (this.setTotal <= this.limericksAttempted.length) {
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

			// check if movie answer is correct
			if (Array.isArray(question.answers.movie)) {
				this.errors.movie = (question.answers.movie.findIndex(x => x.toLowerCase() === this.inputs.movie.toLowerCase()) < 0)
			} else {
				this.errors.movie = !(this.inputs.movie.toLowerCase() === question.answers.movie.toLowerCase())
			}

			// check if end is correct
			if (Array.isArray(question.answers.end)) {
				this.errors.end = (question.answers.end.findIndex(x => x.toLowerCase() === this.inputs.end.toLowerCase()) < 0)
			} else {
				this.errors.end = !(this.inputs.end.toLowerCase() === question.answers.end.toLowerCase())
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
				currentQuestionId: this.currentQuestionId,
				answerLog: this.answerLog,
				inputs: this.inputs,
				errors: this.errors,
				questions: this.questions,
				finished: this.finished,
			})
			localStorage.setItem(this.cacheKey, cache);
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

