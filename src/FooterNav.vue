<template>
	<nav class="invisible sm:visible fixed bottom-0 left-0 w-full py-4 rounded-xs bg-gray-50 border border-gray-100" aria-label="Footer">
		<div class="max-w-7xl mx-4 sm:mx-auto sm:flex justify-between gap-4">

			<div class="flex items-center mb-4 sm:mb-0">
				<span class="text-xs text-gray-400 italic">All information provided is saved on your device and is not transmitted to any server.</span>
			</div>

			<div class="flex items-center">

				<div class="group relative w-96">

					<button type="button"
					        class="relative w-full cursor-default text-sm text-indigo-300 rounded-md border border-gray-200 bg-white py-2 px-5 text-left shadow-sm focus:border-indigo focus:outline-none focus:ring-1 focus:ring-indigo"
					        aria-haspopup="listbox" aria-expanded="true" aria-labelledby="listbox-label">
						Easy Mode
						<span class="text-xs text-gray-300">(sully yourself and jump to a limerick)</span>
					</button>

					<ul
					  class="invisible group-hover:visible absolute bottom-0 z-10 max-h-60 w-full overflow-auto rounded-md bg-white pb-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm"
					  role="listbox">
						<li
						  class="group text-indigo-400 bg-gray-50 hover:bg-indigo-500 cursor-not-allowed relative cursor-default select-none py-2 pl-3 pr-9 hover:bg-indigo-500 hover:text-white active:bg-indigo-dark active:text-white">
							<a target="_blank"
							   href="https://github.com/dancameron/well-dave/issues/new?assignees=dancameron&labels=bug&template=submit-new-limerick.md"
							   class="flex items-center space-x-2">
								<span>Submit Limerick</span>
								<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
								     stroke-width="1.5" stroke="currentColor" class="w-4 h-4">
									<path stroke-linecap="round" stroke-linejoin="round"
									      d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"/>
								</svg>
							</a>
						</li>
						<li v-for="question in questions" class="group relative cursor-pointer select-none font-normal block truncate">
							<a
							  v-if="question.incomplete"
							  target="_blank"
							  :href="'https://github.com/dancameron/well-dave/issues/new?assignees=dancameron&labels=bug&template=submit-new-limerick.md&title=Limerick+From+'+question.episodeTitle"
							  class="py-2 px-3 text-red-500 hover:bg-red-500 hover:text-white block truncate"
							  role="option">
								{{ question.episodeTitle }}
							</a>
							<div
							  v-else
							  v-on:click.prevent="goToMovie(question)"
							  class="py-2 px-3 text-gray-900 hover:bg-indigo-500 hover:text-white active:bg-indigo-dark active:text-white block truncate"
							  role="option">
								{{ question.episodeTitle }}
							</div>
						</li>

					</ul>
				</div>

			</div>
		</div>
	</nav>
</template>
<script>
export default {
	name: 'FooterNav',
	props: {
		questions: {}
	},
	methods: {
		goToMovie(question) {
			if (question.incomplete) {
				return;
			}
			this.$emit('go-to-movie', question.imdbId)
		}
	}
}
</script>
