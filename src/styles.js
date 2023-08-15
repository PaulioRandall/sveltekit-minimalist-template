const newSpacingFunc = (sizePx, base = 16) => {
	return (fmt = 'px') => {
		switch (fmt) {
			case 'px':
				return sizePx + 'px'
			case 'em':
				return sizePx / base + 'em'
			case 'rem':
				return sizePx / base + 'rem'
			default:
				throw new Error(`Unknown spacing fmt '${fmt}'`)
		}
	}
}

export default {
	text: {
		family: {
			helvetica: ['Helvetica', 'Arial', 'Verdana'],
		},
		size: {
			// https://utopia.fyi/
			md: 'clamp(1.06rem, calc(0.98rem + 0.39vw), 1.38rem)',
			xl: 'clamp(2.59rem, calc(2.32rem + 1.34vw), 3.66rem)',
		},
	},
	color: {
		light: {
			base: 'rgb(255, 255, 255)',
			text: 'rgb(11, 19, 43)',
			link: 'rgb(20, 20, 255)',
			strong: 'Navy',
		},
		dark: {
			base: 'rgb(5, 10, 35)',
			text: 'rgb(231, 245, 255)',
			link: 'rgb(255, 145, 145)',
			strong: 'BurlyWood',
		},
	},
	space: {
		sm: newSpacingFunc(8),
		md: newSpacingFunc(16),
		lg: newSpacingFunc(32),
		xl: newSpacingFunc(48),
	},
}
