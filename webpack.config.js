var webpack = require('webpack');
var path = require('path');

const APP_DIR = path.resolve(__dirname, 'src/client/app');
const BUILD_DIR = path.resolve(__dirname, 'src/client/public');

const config = {
	entry: APP_DIR + '/index.jsx',
	output: {
		path: BUILD_DIR,
		filename: 'bundle.js'
	},
	module: {
		loaders: [
			{
				test: /\.jsx?/,
				include: APP_DIR,
				loader: 'babel'
			},
			{
				test: /\.json/,
				include: APP_DIR,
				loader: 'json'
			}
		]
	}
};

module.exports = config;
