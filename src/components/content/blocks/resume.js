import React from 'react';
import './resume.scss';
import ProgressBar from './ui/progress-bar';

const Resume = () => (
  <div className="content-container resume">
    <h3>
      Resume <span>Me</span>
    </h3>

    <p className="resume-description">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi blanditiis dolor ducimus
      eligendi ipsa, libero, nemo qui quibusdam quis soluta temporibus voluptas! Alias amet maxime
      nihil, tempore temporibus totam veniam?
    </p>

    <div className="flex-grid">
      <div className="flex-60 working-stamp">
        <h4>Experience</h4>

        <div className="working-item">
          <div className="working-meta">
            <strong>2008 - current</strong>
            <br />
            <span>Jetruby Agancy</span>
          </div>
          <div className="working-position">
            <h5>React Native Developer</h5>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi at eius enim expedita
              explicabo non ratione? Ab blanditiis cum cumque dolorem exercitationem iste laudantium
              perferendis quidem reprehenderit sequi tempora, voluptatibus.
            </p>
          </div>
        </div>
        <div className="working-item">
          <div className="working-meta">
            <strong>2008 - current</strong>
            <br />
            <span>Jetruby Agancy</span>
          </div>
          <div className="working-position">
            <h5>React Native Developer</h5>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi at eius enim expedita
              explicabo non ratione? Ab blanditiis cum cumque dolorem exercitationem iste laudantium
              perferendis quidem reprehenderit sequi tempora, voluptatibus.
            </p>
          </div>
        </div>
      </div>

      <div className="flex-40 skills-progress">
        <h4>
          My <span>Skills</span>
        </h4>

        <div className="skill-bar">
          <div className="skill-meta">
            <div className="flex-grid">
              <div className="flex-50 skill-name">React</div>
              <div className="flex-50 skill-percentage">98%</div>
            </div>
            <ProgressBar value={98} />
          </div>
        </div>
        <div className="skill-bar">
          <div className="skill-meta">
            <div className="flex-grid">
              <div className="flex-50 skill-name">React</div>
              <div className="flex-50 skill-percentage">98%</div>
            </div>
            <ProgressBar value={98} />
          </div>
        </div>
        <div className="skill-bar">
          <div className="skill-meta">
            <div className="flex-grid">
              <div className="flex-50 skill-name">React</div>
              <div className="flex-50 skill-percentage">98%</div>
            </div>
            <ProgressBar value={98} />
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Resume;
