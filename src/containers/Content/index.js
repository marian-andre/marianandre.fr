import React from 'react';

import Me from '../../components/Me';
import Portfolio from '../../components/Portfolio';
import Showcase from '../../components/Showcase';
import Spacer from '../../components/Spacer';
import Jobs from '../../components/Jobs';
import Studies from '../../components/Studies';

import './Content.css';

function Content() {
  return (
    <div id="content">
      <div id="scrollable">
        <Showcase />

        <Spacer />

        <Me />

        <Spacer />

        <Portfolio />

        <Spacer />

        <Jobs />

        <Spacer />

        <Studies />
      </div>
    </div>
  );
}

export default Content;
