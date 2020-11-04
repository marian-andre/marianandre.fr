import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLongArrowAltDown } from '@fortawesome/free-solid-svg-icons';

import './Scrollblock.css';

function Scrollblock() {
  return (
    <div id="scrollblock">
      <FontAwesomeIcon icon={faLongArrowAltDown} />
    </div>
  );
}

export default Scrollblock;
