import expect from 'expect';
import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';
import $ from 'jquery';

import { TodoAddForm } from 'todo-add-form';

describe('TodoApp', () => {
  it('should exist', () => {
    expect(TodoAddForm).toExist();
  });

  it('should dispatch add todo when valid todo text', () => {
    var spy = expect.createSpy();
    var todoText = 'something very large';
    var action = {
      type: 'ADD_TODO',
      text: todoText
    }
    var todoAddForm = TestUtils.renderIntoDocument(<TodoAddForm dispatch={spy}/>);
    var $el = $(ReactDOM.findDOMNode(todoAddForm));

    todoAddForm.refs.todoText.value = todoText;
    TestUtils.Simulate.submit($el.find('form')[0]);

    expect(spy).toHaveBeenCalledWith(action);
  });

  it('should not dispatch add todo when invalid todo text', () => {
    var spy = expect.createSpy();
    var todoAddForm = TestUtils.renderIntoDocument(<TodoAddForm dispatch={spy}/>);
    var $el = $(ReactDOM.findDOMNode(todoAddForm));

    todoAddForm.refs.todoText.value = '';
    TestUtils.Simulate.submit($el.find('form')[0]);

    expect(spy).toNotHaveBeenCalled();
  });

}); 
