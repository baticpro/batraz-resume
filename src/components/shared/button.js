import React from 'react';
import './button.scss';

const Button = ({ onClick, title, className }) => (
  <a onClick={onClick} className={`button ${className}`}>
    {title}
  </a>
);

export default Button;
