import { sizer } from 'p69/util'

import theme from './theme.js'
import font from './font.js'

export default {
	theme: theme,
	font: font,
	space: sizer({
		xxs: 2,
		xs: 4,
		sm: 8,
		md: 16,
		lg: 24,
		xl: 32,
		xxl: 64,
		xxxl: 96,
	}),
}
