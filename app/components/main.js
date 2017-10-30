import React, { Component } from 'react';
import moment from 'moment';
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
  
  render() {
    var props = this.props;
    return (
      <div>
        <div className="page-actions">
          <a href="#" onClick={this.onLogout.bind(this)}>Logout</a>
        </div>
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

export default connect()(Main);