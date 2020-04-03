import React from 'react';
import { MdMailOutline } from 'react-icons/md';
import { FiGithub } from 'react-icons/fi';
import { FaTelegramPlane } from 'react-icons/fa';
import './links.scss';
import { MY_GIT, MY_MAIL, MY_TELEGRAM } from '../../../../config';

const Links = () => (
  <ul className="profile-items">
    <li>
      <a href={`mailto:${MY_MAIL}`}>
        <MdMailOutline size={35} />
      </a>
    </li>
    <li>
      <a href={`https://github.com/${MY_GIT}`} target="_blank" rel="noopener noreferrer">
        <FiGithub size={35} />
      </a>
    </li>
    <li>
      <a href={`tg://resolve?domain=${MY_TELEGRAM}`}>
        <FaTelegramPlane size={35} />
      </a>
    </li>
  </ul>
);

export default Links;
