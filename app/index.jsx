import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import injectTapEventPlugin from 'react-tap-event-plugin';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Landing from './components/landing';
import Search from './components/search';

injectTapEventPlugin();

const Index = () => (
  <MuiThemeProvider>
    <Router>
      <switch>
        <Route exact path="/search" component={Search} />
        <Route exact path="/" component={Landing} />
      </switch>
    </Router>
  </MuiThemeProvider>

);


render(React.createElement(Index), document.getElementById('app'));

