var path = require('path');
var webpack = require("webpack");

module.exports = {
    entry: {
        app: './src/app.js',
        vendor: ['lodash', 'angular']
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'app.bundle.js'
    },
    module: {
        loaders: [
            {
                test: /\.js?$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                query: {
                    presets: ["latest"]
                }
            },
            {
                test: /\.html?$/,
                loader: 'html-loader'
            }
        ]
    },
    plugins: [
        new webpack.optimize.CommonsChunkPlugin({name:"vendor", filename: "vendor.bundle.js"}),
        new webpack.optimize.UglifyJsPlugin()
  ]
}