const path = require('path')


module.exports = {
	mode: 'development',
	resolve: {
		extensions: ['.js', '.json', '.png', '.svg', '.xml', '.ts', '.jsx', '.tsx'],
		alias: {
			'@Components' : path.resolve(__dirname, './src/Components'),
			'@Features' : path.resolve(__dirname, './src/Components/Features'),
			'@API' : path.resolve(__dirname, './src/Components/API'),
			'@Pages' : path.resolve(__dirname, './../Pages'),
			'@Lib' : path.resolve(__dirname, './src/Components/Lib'),
			'@UI' : path.resolve(__dirname, './src/Components/UI'),
			'@Styled': path.resolve(__dirname, './src/style-config'),
		},
	},
}
