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
      <div>
        <form>
          <input type='text' ref="user" placeholder="User" />
          <input type='password' ref="password" placeholder="Password" />
          <button className="button expanded hollow">Login</button>
        </form>
      </div>
    );
  }
}

export default connect()(Login);