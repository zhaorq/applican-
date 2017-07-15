
import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './client/containers/app';


const Index = () => (
  <Router>
    <App />
  </Router>

);


render(React.createElement(Index), document.getElementById('app'));
