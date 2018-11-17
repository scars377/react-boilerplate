const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');


module.exports = {
  mode: 'development',
  devtool: 'eval',
  devServer: {
    historyApiFallback: true,
    proxy: {
      '/api': 'http://localhost:8081',
    },
  },

  // context: path.resolve('./src'),
  entry: {
    main: path.resolve('./src/main.js'),
  },
  output: {
    path: path.resolve('./dist'),
    filename: '[name].[hash].js',
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve('./src/index.html'),
    }),
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        include: path.resolve('./src'),
        loader: 'babel-loader',
      },
    ],
  },
};
