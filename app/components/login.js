import React, { Component } from 'react';
import moment from 'moment';
var { connect } = require('react-redux');
var actions = require('actions');

export class Login extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="callout callout-auth">
        <h3>Login</h3>
        <p>login with github account below</p>
        <button className="button">Login with GitHub</button>
      </div>
    );
  }
}

export default connect()(Login);