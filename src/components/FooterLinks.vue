<template>
	<footer class="bg-white/5 pb-16">
		<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 md:flex md:items-center md:justify-between">

			<div class="flex justify-center items-center whitespace-nowrap space-x-6 md:order-2 pt-8 sm:pt-0">
				<a
				  href="https://www.cameo.com/jeffcannata"
				  target="_blank"
				  class="flex flex-inline space-x-1 items-center text-sky-400 hover:text-sky-500">
					<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
					     stroke="currentColor" class="w-4 h-4">
						<path stroke-linecap="round" stroke-linejoin="round"
						      d="M21 11.25v8.25a1.5 1.5 0 01-1.5 1.5H5.25a1.5 1.5 0 01-1.5-1.5v-8.25M12 4.875A2.625 2.625 0 109.375 7.5H12m0-2.625V7.5m0-2.625A2.625 2.625 0 1114.625 7.5H12m0 0V21m-8.625-9.75h18c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125h-18c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z"/>
					</svg>
					<span class="text-xs">Get Personalized Limericks</span>
				</a>
				<a
				  href="https://www.bit.ly/runjeffrun"
				  target="_blank"
				  class="flex flex-inline space-x-1 items-center text-sky-400 hover:text-sky-500">
					<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" fill="currentColor" stroke="currentColor" class="w-4 h-4">
						<!--! Font Awesome Pro 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
						<path
						  d="M320 48a48 48 0 1 0 -96 0 48 48 0 1 0 96 0zM125.7 175.5c9.9-9.9 23.4-15.5 37.5-15.5c1.9 0 3.8 .1 5.6 .3L137.6 254c-9.3 28 1.7 58.8 26.8 74.5l86.2 53.9-25.4 88.8c-4.9 17 5 34.7 22 39.6s34.7-5 39.6-22l28.7-100.4c5.9-20.6-2.6-42.6-20.7-53.9L238 299l30.9-82.4 5.1 12.3C289 264.7 323.9 288 362.7 288H384c17.7 0 32-14.3 32-32s-14.3-32-32-32H362.7c-12.9 0-24.6-7.8-29.5-19.7l-6.3-15c-14.6-35.1-44.1-61.9-80.5-73.1l-48.7-15c-11.1-3.4-22.7-5.2-34.4-5.2c-31 0-60.8 12.3-82.7 34.3L57.4 153.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l23.1-23.1zM91.2 352H32c-17.7 0-32 14.3-32 32s14.3 32 32 32h69.6c19 0 36.2-11.2 43.9-28.5L157 361.6l-9.5-6c-17.5-10.9-30.5-26.8-37.9-44.9L91.2 352z"/>
					</svg>
					<span class="text-xs">Help Jeff Fundraise</span>
				</a>
			</div>
			<div class="flex justify-center items-center whitespace-nowrap space-x-6 md:order-3 py-8">

				<a
				  href="https://forms.gle/wRV5Cw1Y2qeVoTALA"
				  target="_blank"
				  class="flex flex-inline space-x-1 items-center text-gray-400 hover:text-gray-500">
					<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
					     stroke="currentColor" class="w-4 h-4">
						<path stroke-linecap="round" stroke-linejoin="round"
						      d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"/>
					</svg>
					<span class="text-xs">Submit Limerick</span>
				</a>

				<a
				  :href="'https://github.com/dancameron/well-dave/issues/new?assignees=dancameron&labels=bug&template=typo-or-wrong-info-report.md&title=Info+for+'+currentQuestionId+'+is+Wrong'"
				  target="_blank"
				  class="flex flex-inline space-x-1 items-center text-gray-400 hover:text-gray-500">
					<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
					     stroke="currentColor" class="w-4 h-4">
						<path stroke-linecap="round" stroke-linejoin="round"
						      d="M12 12.75c1.148 0 2.278.08 3.383.237 1.037.146 1.866.966 1.866 2.013 0 3.728-2.35 6.75-5.25 6.75S6.75 18.728 6.75 15c0-1.046.83-1.867 1.866-2.013A24.204 24.204 0 0112 12.75zm0 0c2.883 0 5.647.508 8.207 1.44a23.91 23.91 0 01-1.152 6.06M12 12.75c-2.883 0-5.647.508-8.208 1.44.125 2.104.52 4.136 1.153 6.06M12 12.75a2.25 2.25 0 002.248-2.354M12 12.75a2.25 2.25 0 01-2.248-2.354M12 8.25c.995 0 1.971-.08 2.922-.236.403-.066.74-.358.795-.762a3.778 3.778 0 00-.399-2.25M12 8.25c-.995 0-1.97-.08-2.922-.236-.402-.066-.74-.358-.795-.762a3.734 3.734 0 01.4-2.253M12 8.25a2.25 2.25 0 00-2.248 2.146M12 8.25a2.25 2.25 0 012.248 2.146M8.683 5a6.032 6.032 0 01-1.155-1.002c.07-.63.27-1.222.574-1.747m.581 2.749A3.75 3.75 0 0115.318 5m0 0c.427-.283.815-.62 1.155-.999a4.471 4.471 0 00-.575-1.752M4.921 6a24.048 24.048 0 00-.392 3.314c1.668.546 3.416.914 5.223 1.082M19.08 6c.205 1.08.337 2.187.392 3.314a23.882 23.882 0 01-5.223 1.082"/>
					</svg>
					<span class="text-xs">Report Bug</span>
				</a>

				<a href="https://github.com/dancameron/well-dave" target="_blank"
				   class="flex flex-inline space-x-1 items-center text-gray-400 hover:text-gray-500">
					<svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
						<path fill-rule="evenodd"
						      d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
						      clip-rule="evenodd"/>
					</svg>
					<span class="text-xs">GitHub</span>
				</a>

			</div>
			<div class="flex justify-center items-center whitespace-nowrap space-x-6 md:order-1">
				<a href="https://audioboom.com/channels/4997224-the-filmcast-aka-the-slashfilmcast" target="_blank"
				   class="flex flex-inline space-x-1 items-center text-gray-400 hover:text-gray-500">
					<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
					     stroke="currentColor" class="w-4 h-4">
						<path stroke-linecap="round" stroke-linejoin="round"
						      d="M12 18.75a6 6 0 006-6v-1.5m-6 7.5a6 6 0 01-6-6v-1.5m6 7.5v3.75m-3.75 0h7.5M12 15.75a3 3 0 01-3-3V4.5a3 3 0 116 0v8.25a3 3 0 01-3 3z"/>
					</svg>
					<span class="text-xs">Version {{ v }}</span>
				</a>
				<button v-on:click.prevent="restart"
				        class="flex flex-inline space-x-1 items-center text-gray-400 hover:text-sky-500">
					<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
					     stroke="currentColor" class="w-4 h-4">
						<path stroke-linecap="round" stroke-linejoin="round"
						      d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99"/>
					</svg>
					<span class="text-xs">Reboot</span>
				</button>
			</div>

		</div>

	</footer>
</template>
<script>
export default {
	name: 'FooterLinks',
	props: {
		currentQuestionId: {},
		v: ''
	},
	methods: {
		restart() {
			this.$emit('restart')
		}
	}
}
</script>
