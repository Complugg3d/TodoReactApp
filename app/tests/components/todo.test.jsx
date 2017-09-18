import React from 'react';
const ReactDOM = require('react-dom');
import expect from 'expect';
import $ from 'jquery';
import TestUtils from 'react-addons-test-utils';
import { Todo } from 'todo';

describe('Todo', () => {
  it('should exist', () => {
    expect(Todo).toExist();
  });

  it('should dispatch toggleTodo action on click', () => {
    var todoData = {
      id: 199,
      text: 'write some',
      completed: true
    };

    var spy = expect.createSpy();

    var todo = TestUtils.renderIntoDocument(<Todo {...todoData} dispatch={spy}/>);
    var $el = $(ReactDOM.findDOMNode(todo));
    TestUtils.Simulate.click($el[0]);
    expect(spy).toHaveBeenCalledWith({
      type: 'TOGGLE_TODO',
      id: todoData.id
    });
  });
});
