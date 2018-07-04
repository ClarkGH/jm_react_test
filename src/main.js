import React from 'react';
import ReactDOM from 'react-dom';

import App from './App/App';
import Songs from './json/songs'

// TODO: remove logs
console.log(Songs);

ReactDOM.render(
  <App />,
  document.getElementById('root'),
);