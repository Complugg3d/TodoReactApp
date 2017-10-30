import React, { Component } from 'react';
import * as Redux from 'react-redux';
import TodoList from 'todo-list';
import TodoAddForm from 'todo-add-form';
import TodoSearch from 'todo-search';

export class TodoApp extends Component {
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

export default Redux.connect()(TodoApp);
