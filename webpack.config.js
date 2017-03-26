const path = require('path');
const webpack = require('webpack');

module.exports = {
    entry: {
        'dist/iconimo' : './src/iconimo.js',
        'demo/iconimo' : './src/iconimo.js',
    },
    output: {
        path: path.resolve(__dirname),
        filename: '[name].js',
        libraryTarget: 'umd',
        library: 'Iconimo'
    },
    //devtool: "#source-map",
    module: {
        rules: [
            {
                test: /\.(js)$/,
                use: 'babel-loader',
            }
        ]
    },
    plugins: [
        new webpack.optimize.UglifyJsPlugin({
            //sourceMap: true,
        })
    ]
};