const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
    mode: 'development',
  entry: {
      index: './src/index.js',
      print: './src/print.js',
  },
  devtool: 'inline-source-map',
  devServer: {
      contentBase: './dist',
  },
  plugins: [
      new CleanWebpackPlugin({ cleanStaleWebpackAssets: false}),
      new HtmlWebpackPlugin({
          title: 'Output Management',
          title: 'Development',
      }),
  ],
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
      rules: [
          {
              test: /\.css$/i,
              use: ['style-loader', 'css-loader'],
          },
          {
              test: /\.(png|svg|jpg|jpeg|gif)$/i,
              type: 'asset/resource',
          },
      ],
  },
};