import expect from 'expect';
var actions = require('actions');

describe('actions', () => {
  it('should generate searchText action', () => {
    var action = {
      type: 'SET_SEARCH_TEXT',
      searchText: 'search some text'
    };

    var response = actions.setSearchText(action.searchText);

    expect(response).toEqual(action);
  });

  it('should generate add todo action', () => {
    var action = {
      type: 'ADD_TODO',
      text: 'thing to do'
    };

    var res = actions.addTodo(action.text);

    expect(res).toEqual(action);
  });

  it('should toggle show completed', () => {
    var action = {
      type: 'TOGGLE_SHOW_COMPLETED'
    };

    var res = actions.toggleShowCompleted();

    expect(res).toEqual(action);
  });

  it('should toggle one todo', () => {
    var action = {
      type: 'TOGGLE_TODO',
      id: 1
    };

    var res = actions.toggleTodo(action.id);

    expect(res).toEqual(action);
  });
});
