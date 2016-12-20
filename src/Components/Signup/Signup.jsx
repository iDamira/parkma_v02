import React from 'react';

import './Signup.css';

const Signup = props => (
  <div id="signup-container">

    <input
      type='text'
      placeholder='Username'
    />

    <input
      type='text'
      placeholder='Password'
    />

    <button type='submit'>Signup</button>

  </div>
);

export default Signup;
