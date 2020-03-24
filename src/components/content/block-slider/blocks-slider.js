import React, {useState} from 'react';
import 'animate.css';

const BlocksSlider = ({items}) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const renderItem = (item, index) => {
    const {component, inClass, outClass} = item;
    let className = activeIndex === index ? inClass : outClass;

    return (
      <div className={className}>
        {component}
      </div>
    )
  };

  return (
    <div onClick={() => setActiveIndex(activeIndex + 1)}>
      {items.map((item, index) => {
        return renderItem(item, index)
      })}
    </div>
  )
};

export default BlocksSlider;
