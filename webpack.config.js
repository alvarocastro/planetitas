var path = require('path'),
	webpack = require('webpack');

module.exports = {
	debug: true,
	devtool: 'source-map',

	entry: [
		//'./src/theme/main.less',
		'./src/main.js'
	],
	output: {
		path: __dirname + '/dist',
		filename: 'main.js'
	},
	module: {
		loaders: [
			{
				test: /\.js$/,
				//include: path.join(__dirname, 'src'),
				loader: 'babel-loader',
				query: {
					presets: ['es2015'],
				}
			}
		]
	},
	resolve: {
		extensions: ['', '.js', '.json'] 
	},
	devServer: {
		contentBase: './src'
	}
};
