const express = require('express');
const app = express();

const webpack = require('webpack');
const webpackConfig = require('./webpack.config');

const compiler = webpack(webpackConfig);

app.use(express.static('public'));

app.use(
  require('webpack-dev-middleware')(compiler, {
    noInfo: true,
    publicPath: webpackConfig.output.publicPath
  })
);

app.use(require('webpack-hot-middleware')(compiler));

app.get('/', (req, res) =>
  res.sendFile(path.resolve(__dirname, './public/index.html'))
);

app.listen(3000, function () {
  console.log('App running on the http://localhost:3000!');
});
