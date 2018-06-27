const path = require('path');
const htmlWebpackPlugin = require('html-webpack-plugin')
const webpack = require('webpack')
console.log(path.resolve(__dirname, '../src/index.js'))
module.exports = {
    entry: path.resolve(__dirname, '../src/index.js'),
    output: {
        path: path.resolve(__dirname, '../dist'),
        filename: 'bundle.js',
    },
    mode: "development",
    resolve: {
        extensions: ['*', '.js', '.jsx'],
    },
    devServer: {
        contentBase: '../dist',
        port: '8080',
        host: '127.0.0.1',
        hot: true,
        inline: true
    },
    module: {
        rules: [{
            test: /\.(js|jsx)$/,
            exclude: /node_modules/,
            loader: 'babel-loader',
            query: {
                presets: ['es2015', 'react']
            }
        }]
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new htmlWebpackPlugin({
            title: 'test',
            filename: 'index.html',
            template: path.resolve(__dirname, '../public/index.html'),
            // inject: 'body',
            // favicon: '',
            // minify: {},
            // hash: true,
            // cache: true,
            // showErrors: true,
            // chunks: '',
            // chunksSortMode: '',
            // excludeChunks: '',
            // xhtml: false
        })
    ]
}