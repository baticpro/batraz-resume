import React from 'react';
import BlocksSlider from './block-slider/blocks-slider';
import './content.scss';
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
          inClass: 'animated pulse',
          outClass: 'animated zoomOutLeft',
        },
        {
          name: 'resume',
          component: <Resume />,
          inClass: 'animated pulse',
          outClass: 'animated zoomInDown',
        },
        {
          name: 'contacts',
          component: <Contacts />,
          inClass: 'animated pulse',
          outClass: 'animated zoomOutLeft',
        },
      ]}
    />
  </div>
);

export default Content;
