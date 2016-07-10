var webpack = require('webpack');
var path = require('path');

const APP_DIR = path.resolve(__dirname, 'assets/scripts');

const config = {
	entry: APP_DIR + '/main.js',
	output: {
		path: APP_DIR,
		filename: 'bundle.js'
	},
	module: {
		loaders: [
			{
				test: /\.js$/,
				include: APP_DIR,
				loader: 'babel'
			},
		]
	}
};

module.exports = config;
