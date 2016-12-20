import React from 'react';

import './Login.css';

const Login = props => (
  <div id="login-container">

    <input
      type='text'
      placeholder='Username'
    />

    <input
      type='text'
      placeholder='Password'
    />

    <button type='submit'>Login</button>

  </div>
);

export default Login;
