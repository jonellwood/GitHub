import React from 'react';
import PropTypes from 'prop-types';

const Login = (props) => (
  <nav className="lgoin">
    <h2>Admin Login</h2>
    <p>Sign in to manage site</p>
      <button className="github"
      onClick={() => props.authenticate('Github')}>
        Log in with Github
      </button>
      <button className="facebook"
      onClick={() => props.authenticate('Facbook')}>
        Log in with Facebook
      </button>
      <button className="twitter"
      onClick={() => props.authenticate('Twitter')}>
        Log in with Twitter
      </button>
  </nav>
);

Login.propTypes = {
  authenticate: PropTypes.func.isRequired
}

export default Login;
