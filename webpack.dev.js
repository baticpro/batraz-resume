const webpack = require('webpack');
const merge = require('webpack-merge');
const common = require('./webpack.common.js');

const hotReloadPlugin = new webpack.HotModuleReplacementPlugin();

module.exports = merge(common, {
  entry: ['webpack-hot-middleware/client', 'babel-polyfill', './src/run.js'],
  mode: 'development',
  devtool: 'inline-source-map',
  resolve: {
    alias: {
      'react-dom': '@hot-loader/react-dom',
    },
  },
  plugins: [hotReloadPlugin],
});
