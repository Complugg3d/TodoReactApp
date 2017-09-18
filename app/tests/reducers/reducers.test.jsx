import expect from 'expect';
import uuid from 'uuid';
import moment from 'moment';
const df = require('deep-freeze-strict');

var reducers = require('reducers');

describe('Reducers', () => {
  describe('searchTextReducer', () => {
    it('should set search Text', () => {
      var action = {
        type: 'SET_SEARCH_TEXT',
        searchText: 'dog'
      };

      var res = reducers.searchTextReducer(df(''), df(action));

      expect(res).toEqual(action.searchText);
    });
  });

  describe('showCompletedReducer', () => {
    it('should flip showCompleted', () => {
      var action = {
        type: 'TOGGLE_SHOW_COMPLETED'
      };

      var state = false
      var res = reducers.showCompletedReducer(df(state), df(action));

      expect(res).toBe(true);
    });
  });

  describe('todosReducer', () => {
    it('should add new todo', () => {
      var action = {
        type: 'ADD_TODO',
        text: 'walk the dog'
      };

      var res = reducers.todosReducer(df([]), df(action));

      expect(res.length).toEqual(1);
      expect(res[0].text).toEqual(action.text);
    });

    it('should toggle a todo', () => {
      var todos = [{
        id: uuid(),
        text: 'something 1',
        completed: false,
        createdAt: moment().unix(),
        completedAt: undefined
      },{
        id: uuid(),
        text: 'something 2',
        completed: true,
        createdAt: moment().unix(),
        completedAt: moment().unix()
      },{
        id: uuid(),
        text: 'something 3',
        completed: false,
        createdAt: moment().unix(),
        completedAt: undefined
      }];

      var action = {
        type: 'TOGGLE_TODO',
        id: todos[1].id
      };

      var res = reducers.todosReducer(df(todos), df(action));

      expect(res[1].completed).toBe(false);
      expect(res[1].completedAt).toBe(undefined);
    });

    it('should add existing todos', () => {
      var todos = [{
        id: uuid(),
        text: 'something 1',
        completed: false,
        createdAt: moment().unix(),
        completedAt: undefined
      },{
        id: uuid(),
        text: 'something 2',
        completed: true,
        createdAt: moment().unix(),
        completedAt: moment().unix()
      },{
        id: uuid(),
        text: 'something 3',
        completed: false,
        createdAt: moment().unix(),
        completedAt: undefined
      }];

      var action = {
        type: 'ADD_TODOS',
        todos
      };

      var res = reducers.todosReducer(df([]), df(action));

      expect(res.length).toEqual(3);
      expect(res[0]).toEqual(todos[0]);
    });
  });
});
