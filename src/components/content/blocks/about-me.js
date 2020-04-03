import React from 'react';
import './about-me.scss';
import { MY_AGE, MY_COUNTRY, MY_MAIL, MY_TOWN } from '../../../config';
import { GiSpeedometer, GiThreeFriends, GiMiddleArrow, GiFat } from 'react-icons/gi';

const AboutMe = () => (
  <div className="about-me content-container">
    <h3>
      About <span>Me</span>
    </h3>

    <div className="flex-grid">
      <div className="about-descr flex-50">
        <p>
          Experienced Javascript Developer with a demonstrated history of working in the internet
          industry. Skilled in PHP, C#, React.js, Unity, and React Native. Strong engineering
          professional with a Master of Computer Applications - MCA focused in Computer Science from
          North-Caucasus State Technical University.
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
      I try to <span>Keep</span>
    </h4>

    <div className="about-skills flex-grid">
      <div className="skill-item flex-50">
        <GiFat size={70} />
        <h4>Quality</h4>
        <p>
          Now I hardly working on this text. Now I hardly working on this text. Now I hardly working
          on this text.
        </p>
      </div>
      <div className="skill-item flex-50">
        <GiSpeedometer size={70} />
        <h4>Speed </h4>
        <p>
          Now I hardly working on this text. Now I hardly working on this text. Now I hardly working
          on this text.
        </p>
      </div>
      <div className="skill-item flex-50">
        <GiMiddleArrow size={70} />
        <h4>Accuracy</h4>
        <p>
          Now I hardly working on this text. Now I hardly working on this text. Now I hardly working
          on this text.
        </p>
      </div>
      <div className="skill-item flex-50">
        <GiThreeFriends size={70} />
        <h4>Friendly</h4>
        <p>
          Now I hardly working on this text. Now I hardly working on this text. Now I hardly working
          on this text.
        </p>
      </div>
    </div>
  </div>
);

export default AboutMe;
