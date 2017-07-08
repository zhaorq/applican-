import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import NavBar from './navbar';
import Home from './components/home';
import Signup from './components/signup';

const Index = () => (
  <Router>
    <MuiThemeProvider>
      <div>
        <NavBar />
        <Route exact path="/" component={Home} />
        <Route path="/signup" component={Signup} />
      </div>
    </MuiThemeProvider>
  </Router>
);


render(React.createElement(Index), document.getElementById('app'));
