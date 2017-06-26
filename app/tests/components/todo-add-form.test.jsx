import expect from 'expect';
import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';
import $ from 'jquery';

import TodoAddForm from 'todo-add-form';

describe('TodoApp', () => {
  it('should exist', () => {
    expect(TodoAddForm).toExist();
  });

  it('should call onAddTodo if valid text entered', () => {
    var spy = expect.createSpy();
    var todoText = 'something very large';
    var todoAddForm = TestUtils.renderIntoDocument(<TodoAddForm onAddTodo={spy}/>);
    var $el = $(ReactDOM.findDOMNode(todoAddForm));

    todoAddForm.refs.todoText.value = todoText;
    TestUtils.Simulate.submit($el.find('form')[0]);
    expect(spy).toHaveBeenCalledWith(todoText);
  });

  it('should not call onAddTodo if not valid text entered', () => {
    var spy = expect.createSpy();
    var todoAddForm = TestUtils.renderIntoDocument(<TodoAddForm onAddTodo={spy}/>);
    var $el = $(ReactDOM.findDOMNode(todoAddForm));

    todoAddForm.refs.todoText.value = '';
    TestUtils.Simulate.submit($el.find('form')[0]);

    expect(spy).toNotHaveBeenCalled();
  });

});
