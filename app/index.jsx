import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './components/home';
import NavBar from './navbar';

const Index = () => (
  <Router>
    <div>
      <NavBar />
      <Route exact path="/" component={Home} />
    </div>
  </Router>
);


render(React.createElement(Index), document.getElementById('app'));

