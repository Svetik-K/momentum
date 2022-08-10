const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: './src/js/index.js',
    output: {
        path: path.resolve(__dirname, 'dest'),
        filename: 'bundle.js'    
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html',
        }),
        new CleanWebpackPlugin(),
        new CopyWebpackPlugin({
            patterns: [
                { from: path.resolve(__dirname, 'src/favicon.ico'), to: path.resolve(__dirname, 'dest') },
                { from: path.resolve(__dirname, 'src/assets/sounds'), to: path.resolve(__dirname, 'dest/assets/sounds') },
                { from: path.resolve(__dirname, 'src/assets/svg'), to: path.resolve(__dirname, 'dest/assets/svg') },
                { from: path.resolve(__dirname, 'src/assets/images'), to: path.resolve(__dirname, 'dest/assets/images') },
                { from: path.resolve(__dirname, 'src/fonts'), to: path.resolve(__dirname, 'dest/fonts') },
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