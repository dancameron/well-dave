<template>
	<template v-for="bonusLimerick in currentQuestion.bonusLimericks">
		<span class="absolute top-5 left-5 -ml-px h-full w-0.5 bg-gray-50 md:bg-gray-200" aria-hidden="true"></span>
		<div class="relative flex items-start space-x-4 group">
			<div class="relative mt-4 md:mt-1">

				<img
				  class="flex h-6 w-6 md:h-12 md:w-12 items-center justify-center rounded-full bg-gray-400 ring-8 ring-white"
				  src="https://pbs.twimg.com/profile_images/1215353085435858945/2Mo37MGA_400x400.jpg">

				<span
				  class="absolute -bottom-0.5 -right-1 rounded-tl bg-white px-0.5 py-px">
				  <svg class="h-4 w-4 text-gray-300" viewBox="0 0 20 20" fill="currentColor"
				       aria-hidden="true">
				    <path fill-rule="evenodd"
				          d="M10 2c-2.236 0-4.43.18-6.57.524C1.993 2.755 1 4.014 1 5.426v5.148c0 1.413.993 2.67 2.43 2.902.848.137 1.705.248 2.57.331v3.443a.75.75 0 001.28.53l3.58-3.579a.78.78 0 01.527-.224 41.202 41.202 0 005.183-.5c1.437-.232 2.43-1.49 2.43-2.903V5.426c0-1.413-.993-2.67-2.43-2.902A41.289 41.289 0 0010 2zm0 7a1 1 0 100-2 1 1 0 000 2zM8 8a1 1 0 11-2 0 1 1 0 012 0zm5 1a1 1 0 100-2 1 1 0 000 2z"
				          clip-rule="evenodd"/>
				  </svg>
				</span>

			</div>

			<div class="min-w-0 flex-1 cursor-pointer" v-on:click="display = !display">
				<div class="mt-3 mb-5 text-xl text-gray-400 group-hover:text-gray-700 font-sans font-black">
					Bonus Limerick! Possibly Spoilery, i.e. Possibly a Free Hint
				</div>
				<div class="flex flex-wrap">
					<div class="w-auto lg:pr-16  lg:w-3/4 xl:w-2/3">
						<div>
							<ul class="font-serif text-gray-300 group-hover:text-gray-700" :class="{'blur-sm': !display }">
								<li class="mb-1 text-xl"
								    v-for="line in bonusLimerick">
									{{ line }}
								</li>
							</ul>
						</div>
					</div>
				</div>

			</div>

		</div>
	</template>
</template>
<script>
export default {
	name: 'BonusLimericks',
	props: {
		currentQuestion: {}
	},
	data() {
		return {
			display: false
		}
	}
}
</script>
