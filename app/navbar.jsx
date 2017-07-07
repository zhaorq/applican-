import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => (
  <header>
    <nav>
      <ul>
        <li><Link to="/">Home</Link></li>
      </ul>
    </nav>
  </header>
);
export default NavBar;
