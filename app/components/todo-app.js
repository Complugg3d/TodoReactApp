import React, { Component } from 'react';
import TodoList from 'todo-list';
import TodoAddForm from 'todo-add-form';
import TodoSearch from 'todo-search';
import uuid from 'uuid';
import moment from 'moment';

class TodoApp extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>        
        <TodoSearch/>
        <TodoList/>
        <TodoAddForm/>          
      </div>
    )
  }
}

export default TodoApp;
