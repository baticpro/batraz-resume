import {hot} from 'react-hot-loader/root';
import React from 'react';
import Main from "./components/layout/main";
import Sidebar from "./components/sidebar/sidebar";
import Content from "./components/content/content";
import ProfileInfo from "./components/profile-info/profile-info";

const App = () => {
  return (
    <Main>
      <Sidebar>
        <ProfileInfo/>
      </Sidebar>
      <Content>
        wefw
      </Content>
    </Main>
  );
};

export default hot(App);
