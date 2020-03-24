import React from 'react';
import avatar from '../../../../assets/images/avatar.jpg';
import './avatar.css';

const Avatar = () => (
  <div className="avatar-box">
    <img className="avatar" src={avatar} alt="Batraz Dzhioev" />
    <h2 className="my-name">Batraz Dzhioev</h2>
    <h3 className="my-position">Frontend Developer</h3>
  </div>
);

export default Avatar;
