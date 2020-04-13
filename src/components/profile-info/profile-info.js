import React from 'react';
import Avatar from './ui/avatar/avatar';
import Links from './ui/links/links';
import Button from '../shared/button';
import './profile-info.scss';
import { openUrl } from '../../utils/common';
import { MY_LINKEDIN } from '../../config';

const openLinkedin = () => openUrl(MY_LINKEDIN);

const ProfileInfo = () => (
  <div className="profile-info">
    <Avatar />
    <Links />
    <Button className="rounded-button" onClick={openLinkedin} title="LETS IN" />
  </div>
);

export default ProfileInfo;
