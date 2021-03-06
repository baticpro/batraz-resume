import React from 'react';
import 'animate.css';
import './blocks-slider.scss';
import { connect } from 'react-redux';

const BlocksSlider = ({ active, items }) => {
  const renderItem = (item) => {
    const { component, inClass, name } = item;
    let className = null;

    if (active === name) {
      className = inClass;
    }

    if (!className) return null;

    return (
      <div key={name} className={`slider-item shadowed ${className}`}>
        <div className="slider-content">{component}</div>
      </div>
    );
  };

  return (
    <div className="slider-container">
      {items.map((item) => {
        return renderItem(item);
      })}
    </div>
  );
};

const mapStateToProps = (state) => ({
  active: state.menuReducer.active,
});

export default connect(mapStateToProps)(BlocksSlider);
