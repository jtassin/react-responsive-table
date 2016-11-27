var webpack = require('webpack');
var UglifyJsPlugin = webpack.optimize.UglifyJsPlugin;
var path = require('path');

var libraryName = 'react-responsive-table';

var plugins = [], outputFile;

plugins.push(new UglifyJsPlugin({ minimize: true }));
var outputFile = 'index.js';

var config = {
    entry: __dirname + '/src/index.js',
    devtool: 'source-map',
    output: {
        path: __dirname + '/dist',
        filename: outputFile,
        library: libraryName,
        libraryTarget: 'umd',
        umdNamedDefine: true
    },
    module: {
        loaders: [
            {
                test: /(\.jsx|\.js)$/,
                loader: 'babel',
                exclude: /(node_modules|bower_components)/
            },
            {
                test: /(\.jsx|\.js)$/,
                loader: "eslint-loader",
                exclude: /node_modules/
            }
        ]
    },
  resolve: {
    extensions: ['', '.js', '.jsx'],
  },
    externals: {
        react: 'react',
        'react-style-proptype': 'react-style-proptype'
    },
    plugins: plugins
};

module.exports = config;
