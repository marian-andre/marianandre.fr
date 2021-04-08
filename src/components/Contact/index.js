import React, { PureComponent } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faGithubSquare,
  faLinkedin,
} from '@fortawesome/free-brands-svg-icons';

import './Contact.css';

class Contact extends PureComponent {
  // eslint-disable-next-line class-methods-use-this
  openLink(type) {
    if (type === 'linkedin') {
      window.open('https://www.linkedin.com/in/marian-andre/', '_blank');
    } else if (type === 'github') {
      window.open('https://github.com/marian-andre', '_blank');
    }
  }

  render() {
    return (
      <div id="contact">
        <div className="row title-l">Contact</div>
        <div className="row align-center mt2">
          <FontAwesomeIcon icon={faLinkedin} size="4x" onClick={() => this.openLink('linkedin')} />
          <FontAwesomeIcon icon={faGithubSquare} className="ml1" size="4x" onClick={() => this.openLink('github')} />
        </div>
      </div>
    );
  }
}

export default Contact;
