import React from 'react';
const ReactDOM = require('react-dom');
import expect from 'expect';
import $ from 'jquery';
import TestUtils from 'react-addons-test-utils';

import TodoSearch from 'todo-search';

describe('TodoSearch', () => {
  it('should exists', () => {
    expect(TodoSearch).toExist();
  });

  it('should call onSearch when entered input text', () => {
    var spy = expect.createSpy();
    var searchText = 'dog';
    var todoSearch = TestUtils.renderIntoDocument(<TodoSearch onSearch={spy}/>);

    todoSearch.refs.searchText.value = searchText;

    TestUtils.Simulate.change(todoSearch.refs.searchText);

    expect(spy).toHaveBeenCalledWith(false, searchText);
  });

  it('should call onSearch with proper checked value', () => {
    var spy = expect.createSpy();
    var showCompleted = true;
    var todoSearch = TestUtils.renderIntoDocument(<TodoSearch onSearch={spy}/>);

    todoSearch.refs.showCompleted.checked = showCompleted;

    TestUtils.Simulate.change(todoSearch.refs.showCompleted);

    expect(spy).toHaveBeenCalledWith(showCompleted, '');
  });
});
