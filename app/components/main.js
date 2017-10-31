import React, { Component } from 'react';
var { connect } = require('react-redux');
var actions = require('actions');

export class Main extends Component {
  constructor(props) {
    super(props);
  }
  
  onLogout(e) {
    e.preventDefault();
    
    var { dispatch } = this.props;
    dispatch(actions.startLogout());    
  }
  
  renderLogout() {
    return (
      <div className="page-actions">
        <a href="#" onClick={this.onLogout.bind(this)}>Logout</a>
      </div>
    );
  }
  
  render() {
    var props = this.props;
    return (
      <div>
        {(props.checkLogin.loggedIn) ? this.renderLogout() : null}
        <h1 className="page-title">Todo App</h1>
        <div className="row">
          <div className="columns small-centered small-11 medium-6 large-5">
            <div className="container">
              {props.children}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default connect(
  (state) => {
    return state;
  })(Main);