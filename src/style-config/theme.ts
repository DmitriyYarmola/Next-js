export const theme = {
	colors: {
		black: '#000000',
		white: '#ffffff',
		red: 'red',
		grey: 'grey',
	},
	weights: {
		bold: '700',
		semiBold: '600',
		regular: '400',
	},
}

export interface ThemeType {
	theme: typeof theme
}
