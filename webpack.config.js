const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: {
        main: './src/js/index.js',
        audio: './src/js/audio.js'
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].[contenthash].js'    
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html',
        }),
        new CleanWebpackPlugin(),
        new CopyWebpackPlugin({
            patterns: [
                { from: path.resolve(__dirname, 'src/favicon.ico'), to: path.resolve(__dirname, 'dist') },
                { from: path.resolve(__dirname, 'src/assets/sounds'), to: path.resolve(__dirname, 'dist/assets/sounds') },
                { from: path.resolve(__dirname, 'src/assets/svg'), to: path.resolve(__dirname, 'dist/assets/svg') },
                { from: path.resolve(__dirname, 'src/fonts'), to: path.resolve(__dirname, 'dist/fonts') },
                { from: path.resolve(__dirname, 'src/js/quotes.json'), to: path.resolve(__dirname, 'dist/quotes.json') },
            ],
        })
    ],
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
        ]
    }
};