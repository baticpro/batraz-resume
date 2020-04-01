import React from 'react';
import './loader.css';

const Loader = ({ size, loading }) =>
  loading ? <div className={`loader ${size}`}>Loading...</div> : null;

export default Loader;
