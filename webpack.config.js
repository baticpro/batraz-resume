const path = require('path');
const webpack = require("webpack");
const HtmlWebPackPlugin = require("html-webpack-plugin");

const htmlPlugin = new HtmlWebPackPlugin({
  template: "./src/index.html"
});

const hotReloadPlugin = new webpack.HotModuleReplacementPlugin();

module.exports = {
  entry: [
    'webpack-hot-middleware/client',
    './src/index.js'
  ],
  mode: 'development',
  output: {
    path: path.join(__dirname, 'public/dist'),
    filename: "bundle.js",
    publicPath: "/"
  },
  devtool: 'inline-source-map',
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(png|jpe?g|gif)$/i,
        use: [
          {
            loader: 'file-loader',
          },
        ],
      }
    ]
  },
  resolve: {
    alias: {
      'react-dom': '@hot-loader/react-dom',
    },
  },
  plugins: [
    hotReloadPlugin,
    htmlPlugin,
  ]
};
