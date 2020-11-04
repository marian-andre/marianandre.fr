import React from 'react';

import Scrollblock from '../Scrollblock';

import './Showcase.css';

function Showcase() {
  return (
    <div id="showcase">
      <div className="title-xxl">Technical Team Manager</div>
      <div className="title-xl">Technical Scrum Master</div>
      <div className="title-xl">Senior Fullstack Engineer</div>
      <Scrollblock />
    </div>
  );
}

export default Showcase;
