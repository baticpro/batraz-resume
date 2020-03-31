import React from 'react';
import './progress-bar.css';

const ProgressBar = ({ value }) => (
  <div className="progress-bar">
    <div className="bar" style={{ width: `${value}%` }} />
  </div>
);

export default ProgressBar;
