require('@babel/register', {
  presets: ["@babel/preset-env", "@babel/preset-react"]
});
require('babel-polyfill');
require["extensions"]['.scss'] = () => {};
require["extensions"]['.css'] = () => {};

const images = [];
require["extensions"]['.jpg'] = (module, filename) => {
  const path = filename.split('/assets')[1];
  images.push(path);
};

window = {};

const webpack = require('webpack');
const ssrConfig = require('./webpack.ssr');
webpack(ssrConfig).run();

let template = require('./index');
template = template.default.replace(/\[object Object]/, images);

const fs = require('fs');
fs.writeFileSync('./public/dist/index.html', template.trim());
