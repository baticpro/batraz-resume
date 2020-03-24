import React from 'react';
import Avatar from './ui/avatar';

const mail = 'baticpro@gmail.com';
const telegram = 'baticpro';
const git = 'baticpro';

const ProfileInfo = () => (
  <div className={'profile-info'}>
    <Avatar />

    <ul className={'profile-items'}>
      <li>
        <a href={`mailto:${mail}`}>{mail}</a>
      </li>
      <li>
        <a href={`tg://resolve?domain=${telegram}`}>@{telegram}</a>
      </li>
      <li>
        <a href={`https://github.com/${git}`} target={'_blank'} rel="noopener noreferrer">
          {git}
        </a>
      </li>
    </ul>
  </div>
);

export default ProfileInfo;
