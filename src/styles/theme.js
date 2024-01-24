import { sizer, colorSchemes, themeVariables } from 'p69/util'
import { colors } from './colors.js'

const colorThemes = {
	light: {
		primary: colors.ice_cream,
		secondary: colors.light_sky_purple,
		strong: colors.jet_blue,
	},
	dark: {
		primary: colors.very_dark_navy,
		secondary: colors.very_dark_grey,
		strong: colors.burly_wood,
	},
}

export default {
	schemes: colorSchemes(colorThemes, 'theme-panel-'),
	color: themeVariables(colorThemes, 'theme-panel-'),
	width: sizer({
		min: 320,
		xs: 600,
		sm: 720,
		md: 920,
		lg: 1200,
	}),
}
