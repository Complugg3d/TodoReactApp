import React from 'react';
const ReactDOM = require('react-dom');
import expect from 'expect';
import $ from 'jquery';
import TestUtils from 'react-addons-test-utils';

import { TodoSearch } from 'todo-search';

describe('TodoSearch', () => {
  it('should exists', () => {
    expect(TodoSearch).toExist();
  });

  it('should dispatch set searchText on input changed', () => {
    var spy = expect.createSpy();
    var searchText = 'dog';
    var todoSearch = TestUtils.renderIntoDocument(<TodoSearch dispatch={spy}/>);

    todoSearch.refs.searchText.value = searchText;
    TestUtils.Simulate.change(todoSearch.refs.searchText);

    var action = {
      type: 'SET_SEARCH_TEXT',
      searchText
    }
    expect(spy).toHaveBeenCalledWith(action);
  });

  it('should dispatch toggleShowCompleted when checkbox checked', () => {
    var spy = expect.createSpy();
    var showCompleted = true;
    var todoSearch = TestUtils.renderIntoDocument(<TodoSearch dispatch={spy}/>);

    todoSearch.refs.showCompleted.checked = showCompleted;

    TestUtils.Simulate.change(todoSearch.refs.showCompleted);
    var action = {
      type: 'TOGGLE_SHOW_COMPLETED'
    }
    expect(spy).toHaveBeenCalledWith(action);
  });
});
