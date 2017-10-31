import firebase, { firebaseRef, githubProvider } from 'app/firebase/';
import moment from 'moment';

export var setSearchText = (searchText) => {
  return {
    type: 'SET_SEARCH_TEXT',
    searchText
  };
};

export var toggleShowCompleted = () => {
  return {
    type: 'TOGGLE_SHOW_COMPLETED'
  }
}

export var addTodo = (todo) => {
  return {
    type: 'ADD_TODO',
    todo
  };
};

export var startAddTodo = (text) => {
  return (dispatch, getState) => {
    var todo = {
      text,
      completed: false,
      createdAt: moment().unix(),
      completedAt: null
    };

    var todoRef = firebaseRef.child('todos').push(todo);

    return todoRef.then(() => {
      dispatch(addTodo({
        ...todo,
        id: todoRef.key
      }));
    });
  };
};

export var addTodos = (todos) => {
  return {
    type: 'ADD_TODOS',
    todos
  };
};

export var startAddTodos = () => {
  return (dispatch, getState) => {
    return firebaseRef.child('todos').once('value').then((snapshot) => {
      var firebaseTodos = snapshot.val() || {};
      var firebaseTodosKeys = Object.keys(snapshot.val());
      var todos = [];

      firebaseTodosKeys.forEach((todoId) => {
        todos.push({id:todoId, ...firebaseTodos[todoId]});
      });
      dispatch(addTodos(todos));
    }, (e) => {
      console.log('unable to fetch value', e);
    });
  };
}

export var updateTodo = (id, updates) => {
  return {
    type: 'UPDATE_TODO',
    id,
    updates
  };
};

export var startToggleTodo = (id, completed) => {
  return (dispatch, getState) => {
    var todoRef = firebaseRef.child(`todos/${id}`);

    var updates = {
      completed,
      completedAt: completed ? moment().unix() : null
    };

    return todoRef.update(updates).then(() => {
      dispatch(updateTodo(id, updates))
    });
  };
};

export var checkLogin = (checkLoginObj) => {
  return {
    type: 'DO_LOGIN',
    loggedIn: checkLoginObj.loggedIn,
    uid: checkLoginObj.uid
  };
};

export var startLogin = function () {
  return (dispatch, getState) => {
    return firebase.auth().signInWithPopup(githubProvider).then((result) => {
      console.log('success login', result);
      dispatch(checkLogin({
        loggedIn: true,
        uid: result.user.uid
      }));
    }, (error) => {
      console.log('Unable to auth', error);
    });
  };
};

export var startLogout = function () {
  return (dispatch, getState) => {
    return firebase.auth().signOut().then(() => {
      console.log('logged out');
      dispatch(checkLogin());
    });
  };
};
