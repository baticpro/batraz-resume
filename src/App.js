import { hot } from 'react-hot-loader/root';
import React from 'react';
import Test from "./components/test";

const App = () => {
  return (
    <div>
      Welcome to Batraz's web-site
      <Test/>
    </div>
  );
};

export default hot(App);
