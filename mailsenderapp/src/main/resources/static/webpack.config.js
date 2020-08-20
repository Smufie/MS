module.exports = {
    entry: './js/script.js',
    output: {
      publicPath: './'
    },
    mode: 'development',

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