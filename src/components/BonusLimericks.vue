<template>
	<div class="py-4 md:py-8">
		<span class="absolute top-5 left-5 -ml-px h-full w-0.5 bg-gray-50 md:bg-gray-200" aria-hidden="true"></span>
		<div class="relative flex items-start space-x-4">
			<div class="relative ml-1 mt-1.5 sm:mt-0">

				<img
				  class="flex h-8 w-8 items-center justify-center rounded-full bg-gray-100 ring-8 ring-white"
				  src="https://pbs.twimg.com/profile_images/1215353085435858945/2Mo37MGA_400x400.jpg">

			</div>

			<div class="min-w-0 flex-1">
				<div class="min-w-0 flex-1 cursor-pointer" v-on:click="display = !display">
					<div class="-mt-0.5 -ml-6 mb-5 py-2 px-5 inline-block text-xs text-sky-400 font-sans bg-sky-50 rounded-full">
						<span class="flex flex-shrink space-x-2 items-center">
							<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
							     stroke="currentColor" class="w-5 h-5 text-sky-200">
								<path stroke-linecap="round" stroke-linejoin="round"
								      d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 01-.825-.242m9.345-8.334a2.126 2.126 0 00-.476-.095 48.64 48.64 0 00-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0011.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155"/>
							</svg>
							<span>Bonus Limerick! Hidden for the Unsullied Lifestyle. Click to Reveal.</span>
						</span>
					</div>
					<div class="flex flex-wrap">
						<div class="w-auto lg:pr-16  lg:w-3/4 xl:w-2/3">
							<div>
								<ul class="text-gray-200 text-lg font-block"
								    :class="{'text-gray-500 font-serif  hover:text-gray-600': display }">
									<li
									  v-for="line in bonusLimerick">
										{{ line }}
									</li>
								</ul>
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
	name: 'BonusLimerick',
	props: {
		bonusLimerick: {}
	},
	data() {
		return {
			display: false
		}
	}
}
</script>
