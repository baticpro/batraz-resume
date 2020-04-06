import { hot } from 'react-hot-loader/root';
import React, { useEffect } from 'react';
import Main from './components/layout/main';
import Sidebar from './components/sidebar/sidebar';
import Content from './components/content/content';
import ProfileInfo from './components/profile-info/profile-info';
import Menu from './components/menu/menu';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import { loadRecaptcha } from './utils/re-captcha';

const App = () => {
  useEffect(() => {
    loadRecaptcha();
  }, []);

  return (
    <Provider store={store}>
      <Main>
        <Sidebar>
          <ProfileInfo />
        </Sidebar>
        <Content />
        <Menu />
      </Main>
    </Provider>
  );
};

export default hot(App);
