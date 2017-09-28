import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import expect from 'expect';

import firebase,{ firebaseRef } from 'app/firebase/';
var actions = require('actions');

var createMockStore = configureMockStore([thunk]);

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
      todo: {
        id: '123abc',
        text: 'Anything',
        completed: false,
        createdAt: 0
      }
    };

    var res = actions.addTodo(action.todo);

    expect(res).toEqual(action);
  });

  it('should create todo and dispatch add todo', (done) => {
    const store = createMockStore({});
    const todoText = 'My todo item';

    store.dispatch(actions.startAddTodo(todoText)).then((todo) => {
      const actions = store.getActions();
      expect(actions[0]).toInclude({
        type: 'ADD_TODO'
      });
      expect(actions[0].todo).toInclude({ text: todoText });
      done();
    }).catch(done);
  });

  it('should generate add todos acion obj', () => {
    var todos = [{
      id: '111',
      text: 'asd',
      completed: false,
      completedAt: undefined,
      createdAt: 3300
    }];

    var action = {
      type: 'ADD_TODOS',
      todos
    };

    var res = actions.addTodos(todos);
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
      type: 'UPDATE_TODO',
      id: 1,
      updates: {
        completed: false
      }
    };

    var res = actions.updateTodo(action.id, action.updates);

    expect(res).toEqual(action);
  });

  describe('test with firebase todos', () => {
    var testTodoRef;

    beforeEach((done) => {
      var todosRef = firebaseRef.child('todos');
      todosRef.remove().then(() => {
        testTodoRef = firebaseRef.child('todos').push();

        return testTodoRef.set({
          text: 'something todo',
          completed: false,
          createdAt: 1233454567
        });
      })
      .then(() => done())
      .catch(done);
    });

    afterEach((done) => {
      testTodoRef.remove().then(() => done());
    });

    it('should toggle todo and dispatch UPDATE_TODO action', (done) => {
      const store = createMockStore({});
      const action = actions.startToggleTodo(testTodoRef.key, true);

      store.dispatch(action).then(() => {
        const mockActions = store.getActions();

        expect(mockActions[0]).toInclude({
          type: 'UPDATE_TODO',
          id: testTodoRef.key
        });
        expect(mockActions[0].updates).toInclude({
          completed: true
        });
        expect(mockActions[0].updates.completedAt).toExist();
        done();
      }, done);
    });

    it('should populate todos and dispatch ADD_TODOS action', (done) => {
      const store = createMockStore({});
      const action = actions.startAddTodos();

      store.dispatch(action).then(() => {
        const mockActions = store.getActions();
        expect(mockActions[0].type).toBe('ADD_TODOS');
        expect(mockActions[0].todos.length).toBe(1);
        expect(mockActions[0].todos[0]).toInclude({
          text: 'something todo',
          completed: false,
          createdAt: 1233454567
        });
        expect(1).toBe(1);
        done();
      }, done);
    });
  });
});
