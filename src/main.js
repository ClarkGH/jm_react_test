import React from 'react';
import ReactDOM from 'react-dom';

import App from './App/App';
import songs from './json/songs';

ReactDOM.render(
  <App songs={songs} />,
  document.getElementById('root'),
);   