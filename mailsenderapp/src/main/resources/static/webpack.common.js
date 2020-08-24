const path = require("path");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    entry: {
		app: './js/script.js',
	},

	plugins: [
		new CleanWebpackPlugin(),
		new HtmlWebpackPlugin({
		  title: "Production",
		  template: 'C:/Users/Jan/Desktop/infa/MailSender/mailsenderapp/src/index.ejs',
		}),
	],

	output: {
		filename: "[name].bundle.js",
		path: path.resolve(__dirname, "dist"),
	},
	
    devtool: "source-map",
    module: {
			rules: [
				{
					test: /\.jsx$|\.es6$|\.js$/,
					use: {
						loader: 'babel-loader',
						options: {
							presets: ['@babel/preset-env'],
						}
					},
					exclude: /(node_modules|bower_components)/
        		},
        
				{
					test: /\.css$/,
          			loader: 'css-loader',
				},
				
				{
					test: /\.handlebars$/, 
					loader: "handlebars-loader"
				},

				{
					test: /\.(png|jpg|gif)$/,
					use: [
						{
							loader: 'file-loader',
							options: {
								name: '[name].[ext]',
								outputPath: 'images/'
							}
						}
					]
				},
			],
		},
    resolve: {
      extensions: ['.js', '.json']
    }
  };