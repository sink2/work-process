import path from 'path';
import webpack from 'webpack';
import htmlWebpackPlugin from 'html-webpack-plugin';
import extractTextPlugin from 'extract-text-webpack-plugin';


export default {
    entry: path.resolve(__dirname, '../src/index.jsx'),
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
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: 'babel-loader',
                        query: {
                            presets: ['es2015', 'react']
                        }
                    }
                ],
            },
            {
                test: /\.less$/,
                use: [
                    'style-loader',
                    { loader: 'css-loader', options: { importLoaders: 1 } },
                    'less-loader'
                ]
            }
        ]
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new htmlWebpackPlugin({
            title: 'test',
            filename: 'index.html',
            template: path.resolve(__dirname, '../src/index.html'),
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