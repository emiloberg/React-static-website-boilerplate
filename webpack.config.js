const StaticSiteGeneratorPlugin = require('static-site-generator-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const webpack = require('webpack');
const path = require('path');

const DEVELOPMENT = process.env.NODE_ENV === 'development';
const PRODUCTION = !DEVELOPMENT;

var locals = {
	paths: [
		'/'
	]
};

const entry = PRODUCTION
	?	{
			main: [
				'./src/root.prod.js'
				//css: './scss/app.scss'
			]
		}
	:	{
			main: [
				'./src/root.dev.js',
				'webpack-dev-server/client?http://localhost:3000',
				'webpack/hot/only-dev-server'
			]
	};

const plugins = PRODUCTION
	?	[
			new StaticSiteGeneratorPlugin('main', locals.paths, locals),
			new ExtractTextPlugin('style.css'),
			new webpack.NoErrorsPlugin()
		]
	:	[
			new webpack.HotModuleReplacementPlugin(),
			new ExtractTextPlugin('style.css'),
			new webpack.NoErrorsPlugin()
		];

module.exports = {
	entry,
	output: {
		filename: 'bundle.js',
		path: path.join(__dirname, 'dist'),
		libraryTarget: 'umd'
	},
	module: {
		loaders: [{
			test: /\.jsx?$/,
			exclude: /node_modules/,
			loaders: ['react-hot', 'babel']
		},
			{
				test: /\.scss/,
				exclude: /node_modules/,
				loader: ExtractTextPlugin.extract(
					'style-loader',
					'!css-loader!sass-loader'
				)
			}
		]
	},
	plugins
};
