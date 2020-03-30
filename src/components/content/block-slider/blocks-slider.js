import React from 'react';
import 'animate.css';
import './blocks-slider.css';
import { connect } from 'react-redux';

const BlocksSlider = ({ active, items }) => {
  const renderItem = (item) => {
    const { component, inClass, name } = item;
    let className = null;

    if (active === name) {
      className = inClass + ' delay-05s';
    }

    if (!className) return null;

    return <div className={`slider-item shadowed ${className}`}>{component}</div>;
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
