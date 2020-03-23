const path = require('path');
const webpack = require("webpack");
const HtmlWebPackPlugin = require("html-webpack-plugin");

const htmlPlugin = new HtmlWebPackPlugin({
  template: "./src/index.html",
  filename: "../index.html"
});

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.join(__dirname, 'public/dist'),
    filename: "bundle.js",
    publicPath: "/"
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      }
    ]
  },
  plugins: [
    htmlPlugin,
    new webpack.HotModuleReplacementPlugin()
  ]
};
