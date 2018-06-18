const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const { VueLoaderPlugin } = require('vue-loader');
const merge = require('webpack-merge');
const webpackBaseConfig = require('./webpack.config');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

webpackBaseConfig.plugins = [];

module.exports = merge(webpackBaseConfig,{
	output: {
		publicPath: 'dist/',
		filename: '[name].[hash].js'
	},
	plugins: [
		new ExtractTextPlugin({
			filename: '[name].[hash].css',
			allChunks: true
		}),
		new VueLoaderPlugin(),
		new webpack.DefinePlugin({
			'process.env': {
				NODE_ENV: '"production"'
			}
		}),
		new HtmlWebpackPlugin({
			filename: '../index_prod.html',
			template: './index.ejs',
			inject: false
		})
	],
	optimization: {
		minimizer: [
			new UglifyJsPlugin({
				uglifyOptions: {
					compress: false
				}
			})
		]
	}
});
