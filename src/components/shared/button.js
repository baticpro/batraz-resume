import React from 'react';
import './button.css';

const Button = ({ onClick, title, className }) => (
  <a onClick={onClick} className={`button ${className}`}>
    {title}
  </a>
);

export default Button;
