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
        todo: {
          id: 'asd213',
          text: 'Do something',
          completed: false,
          createdAt: 123234523
        }
      };

      var res = reducers.todosReducer(df([]), df(action));

      expect(res.length).toEqual(1);
      expect(res[0]).toEqual(action.todo);
    });

    it('should update a todo', () => {
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

      var updates = {
        completed: false,
        completedAt: null
      };

      var action = {
        type: 'UPDATE_TODO',
        id: todos[1].id,
        updates
      };

      var res = reducers.todosReducer(df(todos), df(action));

      expect(res[1].completed).toBe(updates.completed);
      expect(res[1].completedAt).toBe(updates.completedAt);
      expect(res[1].text).toEqual(todos[1].text);
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
  
  describe('checkLoginReducer', () => {
    it('should login a user', () => {      

      var action = {
        type: 'DO_LOGIN',
        loggedIn: true,
        uid: '123asd'
      };

      var res = reducers.checkLoginReducer(df({}), df(action));

      expect(res.loggedIn).toBe(true);
      expect(res.uid).toEqual(action.uid);
    });
    it('should logout a user', () => {      

      var action = {
        type: 'DO_LOGOUT',
        loggedIn: false
      };

      var res = reducers.checkLoginReducer(df({}), df(action));

      expect(res.loggedIn).toBe(false);
    });
  });
});
