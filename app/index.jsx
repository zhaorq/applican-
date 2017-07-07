import React from 'react';
import { render } from 'react-dom';
import Home from './components/home.jsx';

class App extends React.Component {
  render() {
    return (
      <div>
        <Home />
      </div>
    );
  }
}


render(<App />, document.getElementById('app'));
