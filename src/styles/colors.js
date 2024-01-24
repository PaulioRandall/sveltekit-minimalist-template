import { rgbsToColors } from 'p69/util'

export const rgbs = {
	ice_cream: [250, 250, 250],
	light_sky_purple: [210, 210, 230],
	very_light_sky_blue: [231, 245, 255],
	jet_blue: [30, 85, 175],
	dark_navy_grey: [5, 10, 60],
	very_dark_navy: [5, 10, 35],
	burly_wood: [222, 184, 135],
	rosy_red: [255, 145, 145],
	blood_red: [115, 16, 16],
	very_dark_grey: [40, 40, 40],
}

export const colors = rgbsToColors(rgbs)
