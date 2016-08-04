var HtmlWebpackPlugin = require('html-webpack-plugin');

var path = require("path");
module.exports = {
    entry: "./examples/index.js",
    module: {
        loaders: [
            {test: /\.css$/, loaders: ['style', 'css']},
            {test: /\.scss$/, loaders: ["style", "css", "sass"]},
            {
                test: /.jsx?$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                query: {
                    presets: ['es2015', 'stage-0', 'react'],
                }
            },
            {test: /\.(png|woff|woff2|eot|ttf|svg|swf|jpg|jpeg|gif)$/, loader: 'url-loader?limit=100000'},
        ]
    },
    output: {
        path: 'dist',
        filename: 'index.js'
    },
    plugins: [new HtmlWebpackPlugin(
        {
            template: 'examples/index.html',
            title: "React responsive table examples"
        }
    )],
    devServer: {
        // Permet d'envoyer les 404 sur index
        historyApiFallback: true
    },
};
