const path = require('path');
const htmlWebpackPlugin = require('html-webpack-plugin')
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