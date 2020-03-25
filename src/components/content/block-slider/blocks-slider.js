import React, { useState, useRef } from 'react';
import 'animate.css';
import './booking-slider.css';

const BlocksSlider = ({ items }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const prevIndex = useRef(null);

  const renderItem = (item, index) => {
    const { component, inClass, outClass } = item;
    let className = null;

    if (activeIndex === index) {
      className = inClass + ' delay-05s';
    } else if (prevIndex === index) {
      className = outClass;
    }

    if (!className) return null;

    return <div className={`slider-item ${className}`}>{component}</div>;
  };

  // TODO for debug
  const next = () => {
    prevIndex.current = activeIndex;
    setActiveIndex(activeIndex + 1);
  };

  return (
    <div className="slider-container" onClick={next}>
      {items.map((item, index) => {
        return renderItem(item, index);
      })}
    </div>
  );
};

export default BlocksSlider;
