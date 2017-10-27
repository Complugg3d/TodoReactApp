import React, { Component } from 'react';
import * as Redux from 'react-redux';
import TodoList from 'todo-list';
import TodoAddForm from 'todo-add-form';
import TodoSearch from 'todo-search';

import * as actions from 'actions';


export class TodoApp extends Component {
  constructor(props) {
    super(props);
  }
  
  onLogout(e) {
    e.preventDefault();
    
    var { dispatch } = this.props;
    dispatch(actions.startLogout());    
  }
  
  render() {
    return (
      <div>       
        <div className="page-actions">
          <a href="#" onclick={this.onLogout.bind(this)}>Logout</a>
        </div>
        <TodoSearch/>
        <TodoList/>
        <TodoAddForm/>          
      </div>
    )
  }
}

export default Redux.connect()(TodoApp);
