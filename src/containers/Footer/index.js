import React from 'react';

import './Footer.css';

function Footer() {
  return (
    <div id="footer">
      {`© Copyright ${new Date().getFullYear()} - Marian ANDRÉ`}
    </div>
  );
}

export default Footer;
