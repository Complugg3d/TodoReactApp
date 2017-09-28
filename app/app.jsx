const React = require('react');
const ReactDOM = require('react-dom');
var { Provider } = require('react-redux');
import { Route, Router, IndexRoute, hashHistory } from 'react-router';
import TodoApp from 'todo-app';

const actions = require('actions');
var store = require('configureStore').configure();
import TodoAPI from 'TodoAPI';

store.dispatch(actions.startAddTodos());
//load foundation
//require('style!css!foundation-sites/dist/css/foundation.min.css');
$(document).foundation();

//load custom css
require('style!css!sass!applicationStyles')



ReactDOM.render(
  <Provider store={store}>
    <TodoApp />
  </Provider>,
  document.getElementById('app')
);
