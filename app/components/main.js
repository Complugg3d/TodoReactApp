import React, { Component } from 'react';
import moment from 'moment';
var { connect } = require('react-redux');
var actions = require('actions');

export class Main extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    var props = this.props;
    return (
      <div>
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