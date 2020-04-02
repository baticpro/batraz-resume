import React from 'react';
import './loader.scss';

const Loader = ({ size, loading }) =>
  loading ? <div className={`loader ${size}`}>Loading...</div> : null;

export default Loader;
