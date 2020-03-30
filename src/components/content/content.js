import React from 'react';
import BlocksSlider from './block-slider/blocks-slider';
import './content.css';
import AboutMe from './blocks/about-me';

const Content = () => (
  <div className="content">
    <BlocksSlider
      items={[
        {
          name: 'about-me',
          component: <AboutMe />,
          inClass: 'animated fadeIn',
          outClass: 'animated fadeOut',
        },
        {
          name: 'resume',
          component: <div>test 2</div>,
          inClass: 'animated zoomInUp',
          outClass: 'animated zoomInDown',
        },
        {
          name: 'contacts',
          component: <div>test 3</div>,
          inClass: 'animated fadeIn',
          outClass: 'animated fadeOut',
        },
      ]}
    />
  </div>
);

export default Content;
