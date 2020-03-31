import React from 'react';
import BlocksSlider from './block-slider/blocks-slider';
import './content.css';
import AboutMe from './blocks/about-me';
import Resume from './blocks/resume';
import Contacts from './blocks/contacts';

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
          component: <Resume />,
          inClass: 'animated zoomInUp',
          outClass: 'animated zoomInDown',
        },
        {
          name: 'contacts',
          component: <Contacts />,
          inClass: 'animated fadeIn',
          outClass: 'animated fadeOut',
        },
      ]}
    />
  </div>
);

export default Content;
