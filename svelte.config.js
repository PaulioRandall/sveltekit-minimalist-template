import adapter from '@sveltejs/adapter-auto'
import path from 'path'

import { watchP69, filesP69, svelteP69 } from 'p69'
import tokens from './src/styles/index.js'

if (process.env.NODE_ENV === 'development') {
	watchP69(tokens)
} else {
	await filesP69(tokens)
}

export default {
	kit: {
		adapter: adapter(),
		alias: {
			$routes: path.resolve('./src/routes'),
		},
	},
	preprocess: [svelteP69(tokens)],
}
