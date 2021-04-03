var path = require("path");
 
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
var webpack  = require('webpack');

module.exports = {
    mode: process.env.NODE_ENV,
    context: path.resolve(__dirname, './src'),
    entry: {
        index: "index",
    }, 
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: './js/[name].js'
    },
    devServer: {
        compress: true,
        port: 3000,
        stats: {
            assets: true,
            cached: false,
            chunkModules: false,
            chunkOrigins: false,
            chunks: false,
            colors: true,
            hash: false,
            modules: false,
            reasons: false,
            source: false,
            version: false,
            warnings: false,
            historyApiFallback: true,
            children: true
        }
    },
    resolve: {
        modules: [
            path.resolve('src'),
            path.resolve('src/js'),
            path.resolve('src/css'),
            path.resolve('src/scss'),
            path.resolve('src/image'),
            path.resolve('node_modules')
        ],
        extensions: ['.js']
    },
    module: {
        rules: [
            {
                test: /\.html$/,
                use: [{
                    loader: "file-loader",
                    options: {
                        name: '[path][name].[ext]'
                    }
                }]
            },
            {
                test: /\.css$/,
                use: [MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader']
            },
            {
                test: /\.js$/,
                use: 'babel-loader'
            },
            {
                test: /\.(sass|scss)$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    'postcss-loader',
                    'sass-loader'
                ]
            },
            {
                test: /\.(jpe?g|png|gif)$/,
                use: [{
                    loader: 'url-loader',
                    options: {
                        limit:  3000,
                        name: '[path][name].[ext]?[hash:8]'
                    }
                },
                {
                    loader: 'image-webpack-loader',
                    options: {
                        mozjpeg: {
                            progressive: true,
                            quality: 65
                        },
                        optipng: {
                            enabled: false
                        },
                        pngquant: {
                            quality: [0.9,0.98],
                            speed: 4
                        },
                        gifsicle: {
                            interlaced: false
                        }

                    }
                }]
            }
        ]
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: '[name].css',
            chunkFilename: "[id].css"
        }),
        new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery',
            'window.jQuery': 'jquery'
        })
    ]
}