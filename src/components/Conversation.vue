<template>
	<div class="relative pb-8 group group">
		<span v-if="last" class="absolute top-5 left-5 -ml-px h-full w-0.5 bg-gray-50 md:bg-gray-200" aria-hidden="true"></span>
		<div class="relative flex items-start space-x-4">
			<div class="relative ml-1">

				<img
				  v-if="speakerAvatar !== false"
				  class="flex h-8 w-8 items-center justify-center rounded-full bg-gray-400 ring-8 ring-white"
				  :src="speakerAvatar">

				<div
				  v-else
				  class="flex h-8 w-8 items-center justify-center rounded-full bg-gray-100 ring-8 ring-white">
					<svg class="h-6 w-6 text-gray-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
						<path fill-rule="evenodd"
						      d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-5.5-2.5a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0zM10 12a5.99 5.99 0 00-4.793 2.39A6.483 6.483 0 0010 16.5a6.483 6.483 0 004.793-2.11A5.99 5.99 0 0010 12z"
						      clip-rule="evenodd"/>
					</svg>
				</div>

				<span class="absolute -bottom-0.5 -right-1 rounded-tl bg-white px-0.5 py-px">
				   <svg class="h-4 w-4 text-gray-300" viewBox="0 0 20 20" fill="currentColor"
				        aria-hidden="true">
				     <path fill-rule="evenodd"
				           d="M10 2c-2.236 0-4.43.18-6.57.524C1.993 2.755 1 4.014 1 5.426v5.148c0 1.413.993 2.67 2.43 2.902.848.137 1.705.248 2.57.331v3.443a.75.75 0 001.28.53l3.58-3.579a.78.78 0 01.527-.224 41.202 41.202 0 005.183-.5c1.437-.232 2.43-1.49 2.43-2.903V5.426c0-1.413-.993-2.67-2.43-2.902A41.289 41.289 0 0010 2zm0 7a1 1 0 100-2 1 1 0 000 2zM8 8a1 1 0 11-2 0 1 1 0 012 0zm5 1a1 1 0 100-2 1 1 0 000 2z"
				           clip-rule="evenodd"/>
				   </svg>
				 </span>

			</div>

			<div class="min-w-0 flex-1">
				<div>
					<div class="text-xs font-bold text-gray-400 group-hover:text-gray-800">{{ quote.person }}</div>
				</div>
				<div class="text-sm text-gray-400 group-hover:text-gray-800">
					<p>{{ quote.quote }}</p>
				</div>
			</div>
		</div>
	</div>
</template>
<script>
export default {
	name: 'Conversation',
	props: {
		'quote': {},
		'last': false
	},
	computed: {
		speakerAvatar() {
			let img = false
			if (this.quote.person === 'Dave') {
				img = 'https://pbs.twimg.com/profile_images/1391988529375322119/6vlOKkK7_400x400.jpg'
			} else if (this.quote.person === 'Devindra') {
				img = 'https://pbs.twimg.com/profile_images/1367678844862406660/SUrz1DdF_400x400.jpg'
			} else if (this.quote.person === 'Jeff') {
				img = 'https://pbs.twimg.com/profile_images/1215353085435858945/2Mo37MGA_400x400.jpg'
			}
			return img
		}
	}
}
</script>
