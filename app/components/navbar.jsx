import React from 'react';
import { Link } from 'react-router-dom';
import Appbar from 'muicss/lib/react/appbar';
import Button from 'muicss/lib/react/button';

const NavBar = () => (
  <Appbar>
    <table width="100%">
      <tbody>
        <tr className="mui--appbar-height">
          <td className="mui--text-title">
            <Link to={'/'} className="mui--text-title mui--text-light">AppliCAN</Link>
          </td>
          <td style={{ textAlign: 'right' }}>
            <Button color="accent">
              <Link to={'/login'} className="mui--text-body2 mui--text-light">Login </Link>
            </Button>
          </td>
        </tr>
      </tbody>
    </table>
  </Appbar>
);

export default NavBar;
