import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import App from './app';
import NavBar from './navbar';

const Index = () => (
  <Router>
    <div>
      <NavBar />
      <Route exact path="/" component={App} />
    </div>
  </Router>
);


render(React.createElement(Index), document.getElementById('app'));

