var webpack = require('webpack')

module.exports = {
    entry: "./app/entry.jsx",
    output: {
        path: __dirname+"/dist",
        filename: "bundle.js"
    },
    module: {
        loaders:[{
            test: /\.jsx?$/,
            exclude: /(node_modules|bower_components)/,
            loader: 'babel',
            query: {
                "presets": ["stage-1","react", "es2015"],
                plugins: [
                    "syntax-class-properties",
                    "transform-decorators"]
            }
        }]
    },
    plugins: [new webpack.optimize.UglifyJsPlugin()],
    devtool: "source-map"
};
