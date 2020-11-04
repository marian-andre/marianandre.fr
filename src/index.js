import React from 'react';
import ReactDOM from 'react-dom';

import App from './containers/App';

import 'fontsource-roboto';
import 'react-step-progress-bar/styles.css';
import 'semantic-ui-css/semantic.min.css';

import './index.css';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root'),
);
