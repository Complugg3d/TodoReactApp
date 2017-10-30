import React, { Component } from 'react';
import * as Redux from 'react-redux';
import * as actions from 'actions';

export class Login extends Component {
  constructor(props) {
    super(props);
  }
  onLogin() {
    var { dispatch } = this.props;
    dispatch(actions.startLogin());
  }
  render() {
    return (
      <div className="callout callout-auth">
        <h3>Login</h3>
        <p>login with github account below</p>
        <button className="button" onClick={this.onLogin.bind(this)}>Login with GitHub</button>
      </div>
    );
  }
}

export default Redux.connect()(Login);