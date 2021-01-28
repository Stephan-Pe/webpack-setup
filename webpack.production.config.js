const path = require("path");
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: {
    'hello-world': './src/hello-world.js',
    'ford': './src/ford.js'
  },
  output: {
    filename: "[name].[contenthash].js",
    path: path.resolve(__dirname, "./dist"),
      publicPath: '' // external path can be used https://siteart.ch/
  },
  mode: "production",
  optimization: {
    splitChunks: {
      chunks: 'all',
      minSize: 3000
    }
  },
  module: {
    rules: [
      {
        test: /\.(png|jpg)$/,
        use: ["file-loader"],
      },
      {
          test: /\.css$/,
          use: [
            MiniCssExtractPlugin.loader, 'css-loader'
          ]
      },
      {
          test: /\.scss$/,
          use: [
            MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'
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
      }
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: '[name].[contenthash].css',
    }),
    new CleanWebpackPlugin({
      cleanOnceBeforeBuildPatterns: [
        '**/*', 
        path.join(process.cwd(), 'build/**/*')
      ]
    }),
    new HtmlWebpackPlugin({
      filename: 'hello-world.html',
      chunks: ['hello-world'],
      title: 'Hello World',
      //filename: 'subfolder/custom_filename.html', // options listed on GitHub
      template: 'src/page-template.hbs',
      description: 'Some description',
      minify: true
    }),
    new HtmlWebpackPlugin({
      filename: 'ford.html',
      chunks: ['ford'],
      title: 'Ford',
      //filename: 'subfolder/custom_filename.html', // options listed on GitHub
      template: 'src/page-template.hbs',
      description: 'Ford',
      minify: true
    })
  ]
};
