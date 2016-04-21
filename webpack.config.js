var webpack = require('webpack');
var path = require('path');

module.exports = {
    entry: [
        'webpack/hot/dev-server',
        'webpack-dev-server/client?http://localhost:8080',
        path.resolve(__dirname, 'example/app.js')
    ],
    output: {
        path: path.resolve(__dirname, 'example'),
        publicPath: '/',
        filename: './bundle.js'
    },
    resolve: {
        root: path.resolve(__dirname, '.'),
        extensions: ['', '.js', '.jsx','.less', '.css']
    },
    module: {
        loaders:[
            {
                test: /\.js[x]?$/,
                exclude: /node_modules/,
                loader: 'babel'
            }, {
                test: /\.less$/,
                loader: 'style!css!autoprefixer!less'
            }, {
                test: /\.css/,
                loader: 'style!css'
            }, {
                test: /\.(png|jpg|gif)$/,
                loader: 'url?limit=25000'
            },
            { 
                test: /\.(eot|woff|svg|ttf)$/, 
                loader: 'file?name=static/font/[hash].[ext]' 
            }
        ]
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.ProvidePlugin({
          React: "react",
          ReactDOM: "react-dom",
          'classNames': 'classnames'
        }),
    ]
};