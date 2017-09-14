import expect from 'expect';
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
});
