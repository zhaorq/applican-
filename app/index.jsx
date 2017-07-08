import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import NavBar from './navbar';
import Home from './components/home';

const Index = () => (
  <Router>
    <MuiThemeProvider>
      <div>
        <NavBar />
        <Route exact path="/" component={Home} />
      </div>
    </MuiThemeProvider>
  </Router>
);


render(React.createElement(Index), document.getElementById('app'));
