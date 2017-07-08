import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Landing from './components/landing';
import Search from './components/search';
import Signup from './components/signup';
import Login from './components/login';

const Index = () => (
  <MuiThemeProvider>
    <Router>
      <switch>
        <Route exact path="/search" component={Search} />
        <Route exact path="/" component={Landing} />
        <Route exact path="/signup" component={Signup} />
        <Route exact path="/login" component={Login} />
      </switch>
    </Router>
  </MuiThemeProvider>

);


render(React.createElement(Index), document.getElementById('app'));
