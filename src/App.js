import {hot} from 'react-hot-loader/root';
import React from 'react';
import Test from './components/test';
import Main from "./components/layout/main";

const App = () => {
  return (
    <Main>
      Welcome to Batraz's web-siteq
      <Test/>
    </Main>
  );
};

export default hot(App);
