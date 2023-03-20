<template>
	<footer class="bg-white">
		<div class="mx-auto max-w-7xl my-4 md:flex md:items-center md:justify-between lg:px-8">
			<div class="flex justify-center items-center whitespace-nowrap space-x-6 md:order-2">


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
				        class="flex flex-inline space-x-1 items-center text-gray-400 hover:text-gray-500">
					<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
					     stroke="currentColor" class="w-4 h-4">
						<path stroke-linecap="round" stroke-linejoin="round"
						      d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99"/>
					</svg>
					<span class="text-xs">Reboot</span>
				</button>

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

			<div class="mt-8 md:order-1 md:mt-0">
				<p class="text-center text-xs leading-5 text-gray-500">&copy; 2023 <a target="_blank" href="http://thefilmcast.com">The Film Cast</a>. All rights
					reserved.</p>
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
