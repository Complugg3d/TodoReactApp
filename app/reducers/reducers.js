import uuid from 'uuid';
import moment from 'moment';

export var searchTextReducer = (state = '', action) => {
  switch (action.type) {
    case 'SET_SEARCH_TEXT':
        return action.searchText;
      break;
    default:
      return state;
  }
};

export var showCompletedReducer = (state = false, action) => {
  switch (action.type) {
    case 'TOGGLE_SHOW_COMPLETED':
        return !state
      break;
    default:
      return state;
  };
};

export var todosReducer = (state = [], action) => {
  switch (action.type) {
    case 'ADD_TODO':
        return [
          ...state,
          action.todo
        ];
      break;
    case 'UPDATE_TODO':
        return state.map((todo) => {
          if(action.id === todo.id) {
            return {
              ...todo,
              ...action.updates
            }
          }
          return todo;
        });
      break;
    case 'ADD_TODOS':
        return [
          ...state,
          ...action.todos
        ]
      break;
    default:
      return state;
  };
};

export var checkLoginReducer = (state = {
  loggedIn: false,
  uid: null
}, action) => {
  switch(action.type) {
    case 'DO_LOGIN':
      return {
        loggedIn: action.loggedIn,
        uid: action.uid
      };  
      break;
    default:
      return state;
  };
};
