import React from 'react';
import Navbar from '../Navbar/Navbar';
import './Header.css';

const Header = props => (
  <div id="header-container">
    <div id="logo">
      <h1>PARKMA</h1>
    </div>
    <Navbar />
  </div>
);

export default Header;
