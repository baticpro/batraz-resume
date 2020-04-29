import React from 'react';
import './resume.scss';
import ProgressBar from './ui/progress-bar';
import { MY_EXPERIENCE, MY_SKILLS } from '../../../config';

const Resume = () => (
  <div className="content-container resume">
    <h3>
      Resume <span>Me</span>
    </h3>

    <p className="resume-description">
      On this section You can find out information of my experience and skills. I love technologies
      and always try to extend my knowledge in different platforms.
    </p>

    <div className="flex-grid">
      <div className="flex-60 working-stamp">
        <h4>Experience</h4>

        {MY_EXPERIENCE.map((item) => (
          <div key={item.date} className="working-item">
            <div className="working-meta">
              <strong>{item.date}</strong>
              <br />
              <span>{item.company}</span>
            </div>
            <div className="working-position">
              <h5>{item.position}</h5>
              <p>{item.description}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="flex-40 skills-progress">
        <h4>
          My <span>Skills</span>
        </h4>

        {MY_SKILLS.map((item) => (
          <div key={item.name} className="skill-bar">
            <div className="skill-meta">
              <div className="flex-grid">
                <div className="flex-50 skill-name">{item.name}</div>
                <div className="flex-50 skill-percentage">{item.value}%</div>
              </div>
              <ProgressBar value={item.value} />
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
);

export default Resume;
