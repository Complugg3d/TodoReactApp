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
          {
            id: uuid(),
            text: action.text,
            completed: false,
            createdAt: moment().unix(),
            completedAt: undefined
          }
        ];
      break;
    case 'TOGGLE_TODO':
        return state.map((todo) => {
          if(action.id === todo.id) {
            var nextCompleted = !todo.completed;
            return {
              ...todo,
              completed: nextCompleted,
              completedAt: nextCompleted? moment().unix() : undefined
            };
          }
          return todo;
        });
      break;

    default:
      return state;
  };
};
