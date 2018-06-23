const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const { VueLoaderPlugin } = require('vue-loader');

const config = {
	entry:{
		main: './main'
	},
	output:{
		path: path.join(__dirname,'./dist'),
		publicPath: '/dist/',
		filename: 'main.js'
	},
	module:{
		rules: [
			{
				test: /\.vue$/,
				loader: 'vue-loader',
				options: {
					loaders: {
						css: ExtractTextPlugin.extract({
							use: 'css-loader?minimize',
							fallback: 'vue-style-loader'
						})
					}
				}
			},
			{
				test: /\.js$/,
				loader: 'babel-loader',
				exclude: /node_modules/
			},
			{
				test: /\.css$/,
				use: ExtractTextPlugin.extract({
					use: 'css-loader',
					fallback: 'style-loader'
				})
			},
			{
				test: /\.less$/,
				use: [{
                    loader: "style-loader" 
                }, {
                    loader: "css-loader" 
                }, {
                    loader: "less-loader",
                    options:{
                        sourceMap: true
                    }
                }]
			},
			{
				test: /\.(gif|jpg|png|woff|svg|eot|ttf)\??.*$/,
				loader: 'url-loader?limit=1024',
				options: {
					sourceMap: true
				}
			}
		]
	},
	plugins: [
		new ExtractTextPlugin('main.css'),
		new VueLoaderPlugin()
	]
};
module.exports = config;
