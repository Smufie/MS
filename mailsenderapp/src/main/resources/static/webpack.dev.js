const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');

const DEV_SERVER_ADRESS = 'localhost';
const DEV_SERVER_PORT = '8081';

module.exports = merge(common, {
    mode: 'development',
    devtool: 'inline-source-map',
    devServer: {
        contentBase: './dist',
        host: `${DEV_SERVER_ADRESS}`,
        port: `${DEV_SERVER_PORT}`,
    },
});
