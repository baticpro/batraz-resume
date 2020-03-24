import React from 'react';
import './sidebar.css';

const Sidebar = ({children}) => (
  <div className={'sidebar'}>
    {children}
  </div>
);

export default Sidebar;
