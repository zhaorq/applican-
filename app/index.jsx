import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import injectTapEventPlugin from 'react-tap-event-plugin';
import Landing from './components/landing';
import Search from './components/search';

injectTapEventPlugin();

const Index = () => (
  <Router>
    <switch>
      <Route exact path="/search" component={Search} />
      <Route exact path="/" component={Landing} />
    </switch>
  </Router>
);


render(React.createElement(Index), document.getElementById('app'));

