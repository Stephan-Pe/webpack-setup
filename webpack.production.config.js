const path = require("path");
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');


module.exports = {
  entry: {
    'index': './src/index.js',
    'about': './src/about.js'
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
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
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
      filename: 'index.html',
      chunks: ['index'],
      title: 'Index',
      //filename: 'subfolder/custom_filename.html', // options listed on GitHub
      template: 'src/page-template.hbs',
      description: 'Some description',
      minify: true
    }),
    new HtmlWebpackPlugin({
      filename: 'about.html',
      chunks: ['about'],
      title: 'About',
      //filename: 'subfolder/custom_filename.html', // options listed on GitHub
      template: 'src/page-template.hbs',
      description: 'About',
      minify: true
    })
  ]
};
