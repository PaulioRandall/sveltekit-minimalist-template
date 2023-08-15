import adapter from '@sveltejs/adapter-auto'
import path from 'path'

import p69, { defaultMimeTypes } from 'p69/svelte'
import styles from './src/styles.js'

const p69_options = {
	root: './src',
	amalgamate: './src/routes/styles.css',
	mimeTypes: [undefined, ...defaultMimeTypes],
}

export default {
	kit: {
		adapter: adapter(),
		alias: {
			$routes: path.resolve('./src/routes'),
		},
	},
	preprocess: [p69(styles, p69_options)],
}
