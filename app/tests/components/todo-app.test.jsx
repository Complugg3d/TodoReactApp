import React from 'react';
const ReactDOM = require('react-dom');
import expect from 'expect';
import $ from 'jquery';
import TestUtils from 'react-addons-test-utils';
import TodoApp from 'todo-app';

describe('TodoApp', () => {
  it('should exist', () => {
    expect(TodoApp).toExist();
  });

  it('should add todo to the todos state on handleAddTodo', () => {
    var todoText = "test text";
    
    var todoApp = TestUtils.renderIntoDocument(<TodoApp/>);
    
    todoApp.setState({
      todos: []
    });
    todoApp.handleAddTodo(todoText);
    
    expect(todoApp.state.todos[0].text).toBe(todoText);
  });
});
