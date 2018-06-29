import path from 'path';
import htmlWebpackPlugin from 'html-webpack-plugin';

export default {
    entry: path.resolve(__dirname, '../src/index.jsx'),
    output: {
        path: path.resolve(__dirname, '../dist'),
        filename: 'bundle.js',
    },
    mode: "production",
    resolve: {
        extensions: ['*', '.js', '.jsx'],
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
                test: /\.css$/,
                use: [
                    {
                        loader: 'style-loader'
                    },
                    {
                        loader: 'css-loader'
                    },
                ]
            }
        ]
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