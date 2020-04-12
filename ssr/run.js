require('@babel/register', {
  presets: ["@babel/preset-env", "@babel/preset-react"]
});
require('babel-polyfill');

require["extensions"]['.scss'] = () => {};
require["extensions"]['.css'] = () => {};
require["extensions"]['.jpg'] = () => {};

window = {};

//require('babel-polyfill');

require('./index');
