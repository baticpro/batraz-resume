import React from 'react';
import avatar from '../../../assets/images/avatar.jpg';
import './avatar.css';

const Avatar = () => (
  <div>
    <img className={'avatar'} src={avatar} alt={'Batraz Dzhioev'} />
  </div>
);

export default Avatar;
