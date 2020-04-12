import React from 'react';
import ReactDOMServer from 'react-dom/server';
import templateFn from './template';
import App from '../src/App';

const html = ReactDOMServer.renderToString(
  <App />
);
const template = templateFn(html);
console.log(template);

