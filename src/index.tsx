import React from 'react';
import ReactDOM from 'react-dom';
// import { BrowserRouter as Router } from 'react-router-dom';
import { HashRouter as Router } from 'react-router-dom';
import { App } from './script/App';

import './styles/style.scss';

ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.getElementById('root'),
);
