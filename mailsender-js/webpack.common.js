const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	entry: ['./src/multiselect-master/multiselect.min.js', './js/script.js'],

	plugins: [
		new CleanWebpackPlugin(),
		new HtmlWebpackPlugin({
			title: 'Production',
		}),
	],

	output: {
		filename: '[name].bundle.js',
		path: path.resolve(
			'C:/Users/Jan/Desktop/infa/MailSender/mailsenderapp/src/main/resources/static'
		),
	},

	devtool: 'source-map',
	module: {
		rules: [
			{
				test: /\.(png|jpg|gif)$/,
				use: [
					{
						loader: 'file-loader',
						options: {
							name: '[name].[ext]',
							outputPath: 'images/',
						},
					},
				],
			},

			{
				test: /\.(ttf|eot|woff|woff2|svg)$/,
				use: {
					loader: 'file-loader',
					options: {
						name: '[name].[ext]',
						outputPath: 'fonts/',
					},
				},
			},

			{
				test: /\.jsx$|\.es6$/,
				use: {
					loader: 'babel-loader',
					options: {
						presets: ['@babel/preset-env'],
					},
				},
				exclude: /(node_modules|bower_components)/,
			},

			{
				test: /\.js$/,
				exclude: /(node_modules|bower_components)/,
				use: ['babel-loader', 'eslint-loader'],
			},

			{
				test: /\.s(a|c)ss$/,
				loader: ['style-loader', 'css-loader', 'resolve-url-loader', 'sass-loader'],
			},

			{
				test: /\.hbs$/,
				loader: 'handlebars-loader',
			},
		],
	},
	resolve: {
		extensions: ['.js', '.json'],
	},
};
