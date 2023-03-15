<script setup>

import Conversation from "./components/Conversation.vue";
import Limerick from "./components/Limerick.vue";
import AnswerScreen from "./components/AnswerScreen.vue";
import Stats from "./components/Stats.vue";</script>

<template>
	<div class="font-sans" :class="{'bg-gray-900': answeredOrSkipped}">

		<div v-if="!finished" class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

			<div class="mx-auto max-w-5xl sm:py-32">

				<div v-if="answeredOrSkipped">
					<AnswerScreen :current-question="currentQuestion" @set-rand-question="setRandQuestion"/>
				</div>

				<div class="flow-root" v-else>
					<ul role="list" class="-mb-8">
						<li v-for="(quote,index) in currentConversation">

							<Limerick v-if="quote.limerick" :quote="quote" :inputs="inputs" :errors="errors"
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

		<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

			<div class="flex items-center justify-between space-x-6 text-xs">
				<button
				  class="text-gray-300 bg-gray-50 hover:text-gray-800 hover:bg-brand-yellow px-2 py-1 text-left"
				  v-on:click.prevent="restart">
					Restart
				</button>
				<span class="text-gray-300 hover:text-gray-500">Version: {{ version }}</span>
			</div>

		</div>
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
			setTotal: 2,
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
	},
	methods: {

		getCache() {
			let cache = localStorage.getItem(this.cacheKey)
			if (!cache) {
				return false;
			}
			return JSON.parse(cache)

		},
		skipCurrentLimerick() {
			let question = this.questions[this.findQuestionIndexById(this.currentQuestionId)];
			question.answered = 'skipped'
			// log when skipped
			this.answerLog.push({
				'id': this.currentQuestionId,
				'hintsUsed': question.hintsNeeded,
				'answered': false,
				'time': Date.now()
			})
		},
		upSetTotal() {
			this.setTotal = this.setTotal+10
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
				return undefined === q.answered || false === q.answered;
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
			question.hintsNeeded++
			this.setCache()
		},

		answerLimerick(inputs) {
			this.inputs = inputs
			let question = this.questions[this.findQuestionIndexById(this.currentQuestionId)];

			// check if movie answer is correct
			if (Array.isArray(question.answers.movie)) {
				this.errors.movie = (question.answers.movie.findIndex(x => x.toLowerCase() === this.inputs.movie.toLowerCase()) < 0)
			} else {
				console.log(question.answers.movie)
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

