import React from 'react';
import avatar from '../../../../assets/images/avatar.jpg';
import { FaReact } from 'react-icons/fa';
import './avatar.scss';

const Avatar = () => (
  <div className="avatar-box">
    <img className="avatar" src={avatar} alt="Batraz Jioty (Dzhioev)" />
    <h1 className="my-name">Batraz Jioty (Dzhioev)</h1>
    <div className="animated rotateIn delay-5s">
      <FaReact size={50} />
    </div>
    <h2 className="my-position">Senior ReactNative Developer</h2>
  </div>
);

export default Avatar;
