import React from 'react';
const ReactDOM = require('react-dom');
var { Provider } = require('react-redux');
import expect from 'expect';
import $ from 'jquery';
import TestUtils from 'react-addons-test-utils';
import TodoApp from 'todo-app';

var configureStore = require('configureStore');
import TodoList from 'todo-list';

describe('TodoApp', () => {
  it('should exist', () => {
    expect(TodoApp).toExist();
  });

  it('should render todoList', () => {
    var store = configureStore.configure();
    var provider = TestUtils.renderIntoDocument(
      <Provider store={store}>
        <TodoApp/>
      </Provider>
    );

    var todoApp = TestUtils.scryRenderedComponentsWithType(provider, TodoApp)[0];
    var todoList = TestUtils.scryRenderedComponentsWithType(todoApp, TodoList);

    expect(todoList.length).toEqual(1);
  });
});
