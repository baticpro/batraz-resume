import React from 'react';
import BlocksSlider from "./block-slider/blocks-slider";

const Content = () => (
  <div>
    <BlocksSlider items={[
      {component: <div>test 1</div>, inClass: 'animated fadeIn', outClass: 'animated fadeOut'},
      {component: <div>test 2</div>, inClass: 'animated fadeIn', outClass: 'animated fadeOut'},
      {component: <div>test 3</div>, inClass: 'animated fadeIn', outClass: 'animated fadeOut'},
    ]}/>
  </div>
);

export default Content;
