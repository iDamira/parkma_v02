import React, { Component } from 'react';


import Header from './Header/Header';
import Footer from './Footer/Footer';
import Login from './Login/Login';
import Mapp from './Map/Map';

import './App.css';
import './reset.css';


class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <div id="app-container">

            <div id="map-container">
            <Mapp />
            </div>

            <div id="children-container">
              {this.props.children}
            </div>

        </div>
          <Footer />
      </div>
    )
  }
};


export default App;
