import React from 'react';
import './about-me.scss';
import { MY_AGE, MY_COUNTRY, MY_MAIL, MY_TOWN } from '../../../config';
import { GiSpeedometer, GiThreeFriends, GiMiddleArrow } from 'react-icons/gi';
import { MdEventAvailable } from 'react-icons/md';

const AboutMe = () => (
  <div className="about-me content-container">
    <h3>
      About <span>Me</span>
    </h3>

    <div className="flex-grid">
      <div className="about-descr flex-50">
        <p>
          Hi! My name is Batraz. I'm frontend developer. My main technologies are React for web and
          ReactNative for mobile apps. I like resolving interesting projects and difficult tasks. My
          lovely hobby is making mobile games on Unity3D engine. Also I've some backend background
          on the nodeJS and PHP.
        </p>
      </div>
      <div className="about-meta flex-50">
        <ul>
          <li>
            <span>Age:</span> {MY_AGE}
          </li>
          <li>
            <span>Residence:</span> {MY_COUNTRY}
          </li>
          <li>
            <span>Address:</span> {MY_TOWN}
          </li>
          <li>
            <span>E-mail:</span> {MY_MAIL}
          </li>
        </ul>
      </div>
    </div>

    <p className="my-opinion">
      “Your work is going to fill a large part of your life, and the only way to be truly satisfied
      is to do what you believe is great work.”
      <br />
      <small>- Steve Jobs</small>
    </p>

    <h4 className="section-header">
      I maintain high <span>Level</span> of
    </h4>

    <div className="about-skills flex-grid">
      <div className="skill-item flex-50">
        <MdEventAvailable size={70} />
        <h4>Quality</h4>
        <p>I always do my job with quality and remember about maintaining</p>
      </div>
      <div className="skill-item flex-50">
        <GiSpeedometer size={70} />
        <h4>Speed</h4>
        <p>I always thinking about one important business rule: to make it faster than others</p>
      </div>
      <div className="skill-item flex-50">
        <GiMiddleArrow size={70} />
        <h4>Accuracy</h4>
        <p>I making my job with all compliance of technical documents</p>
      </div>
      <div className="skill-item flex-50">
        <GiThreeFriends size={70} />
        <h4>Friendship</h4>
        <p>If you need my help, I always open for suggestions and supporting</p>
      </div>
    </div>
  </div>
);

export default AboutMe;
