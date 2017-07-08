import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import injectTapEventPlugin from 'react-tap-event-plugin';
import Landing from './components/landing';
import Search from './components/search';
import Signup from './components/signup';

const Index = () => (
  <MuiThemeProvider>
    <Router>
      <switch>
        <Route exact path="/search" component={Search} />
        <Route exact path="/" component={Landing} />
        <Route exact path="/signup" component={Signup} />
      </switch>
    </Router>
  </MuiThemeProvider>

);


render(React.createElement(Index), document.getElementById('app'));
