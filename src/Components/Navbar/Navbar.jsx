import React from 'react';
import { Link } from 'react-router';

import './Navbar.css';

const Navbar = props => (
  <div id="navbar-container">

    <Link to='/'>
    <button>
      Home
    </button>
    </Link>

    <Link to='/login'>
     <button>
        Login
     </button>
    </Link>

    <Link to='/signup'>
      <button>
        Signup
      </button>
    </Link>

  </div>
);

export default Navbar;

