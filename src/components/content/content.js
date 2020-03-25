import React from 'react';
import BlocksSlider from './block-slider/blocks-slider';
import './content.css';
import AboutMe from './blocks/about-me';

const Content = () => (
  <div className="content">
    <BlocksSlider
      items={[
        { component: <AboutMe />, inClass: 'animated fadeIn', outClass: 'animated fadeOut' },
        {
          component: <div>test 2</div>,
          inClass: 'animated zoomInUp',
          outClass: 'animated zoomInDown',
        },
        { component: <div>test 3</div>, inClass: 'animated fadeIn', outClass: 'animated fadeOut' },
      ]}
    />
  </div>
);

export default Content;
