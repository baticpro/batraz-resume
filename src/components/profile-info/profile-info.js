import React from 'react';
import Avatar from './ui/avatar/avatar';
import Links from './ui/links/links';
import Button from '../shared/button';
import './profile-info.css';

const ProfileInfo = () => (
  <div className="profile-info">
    <Avatar />
    <Links />
    <Button className="rounded-button" onClick={() => {}} title="Download CV" />
  </div>
);

export default ProfileInfo;
