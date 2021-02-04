const path = require("path");
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');


module.exports = {
    entry: {
        'index': './src/index.js',
        'about': './src/about.js'
    },
    output: {
        filename: "[name].bundle.js",
        path: path.resolve(__dirname, "./dist"),
        publicPath: '' // external path can be used https://siteart.ch/
    },
    mode: "development",
    devServer: {
        contentBase: path.resolve(__dirname, "./dist"),
        index: 'index.html',
        port: 9002,
        writeToDisk: true
    },
    module: {
        rules: [
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: 'asset/resource',
            },
            {
                test: /\.css$/,
                use: [
                    'style-loader', 'css-loader'
                ]
            },
            {
                test: /\.scss$/,
                use: [
                    'style-loader', 'css-loader', 'sass-loader'
                ]
            },
            {
                test: /\.js$/,
                exclude: /node-modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/env'],
                        plugins: ['@babel/plugin-proposal-class-properties']
                    }
                }
            },
            {
                test: /\.hbs$/,
                use: [
                    'handlebars-loader'
                ]
            },
            {
                test: /\.(woff2|woff|ttf)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: '[name].[ext]',
                            outputPath: 'fonts/'
                        }
                    }
                ]
            }
        ],
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            filename: 'index.html',
            chunks: ['index'],
            title: 'My Webpack',
            template: 'src/page-template.hbs',
            description: 'Project start'
        }),
        new HtmlWebpackPlugin({
            filename: 'about.html',
            chunks: ['about'],
            title: 'About',
            template: 'src/another-template.hbs',
            description: 'About'
        })
    ],
};
