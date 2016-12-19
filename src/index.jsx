import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, hashHistory, IndexRoute } from 'react-router';


import App from './Components/App';
import Login from './Components/Login/Login';
import Signup from './Components/Signup/Signup';



ReactDOM.render((
  <Router history={hashHistory}>
    <Route path="/" component={App}>
    <Route path="/login" component={Login} />
    <Route path="/signup" component={Signup} />
    </Route>
  </Router>
  ), document.querySelector('#app'));


