import React, { Component } from 'react';


import Header from './Header/Header';
import Footer from './Footer/Footer';
import Login from './Login/Login';

import './App.css';
import './reset.css';


class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <div id="app-container">
        {this.props.children}
        </div>
        <Footer />
      </div>
    )
  }
};


export default App;
