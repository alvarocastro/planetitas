var path = require('path'),
	webpack = require('webpack');

module.exports = {
	context: __dirname + '/',

	entry: [
		//'./src/theme/main.less',
		'./src/main.js'
	],

	output: {
		publicPath: '/',
		filename: 'main.js'
	},

	debug: true,
	devtool: 'source-map',

	module: {
		loaders: [
			{
				test: /\.js$/,
				include: path.join(__dirname, 'src'),
				loader: 'babel-loader',
				query: {
					presets: ['es2015'],
				}
			}
		]
	},
	devServer: {
		contentBase: './src'
	}
}