const React = require('react');
const ReactDOM = require('react-dom');
var { Provider } = require('react-redux');
import { Route, Router, IndexRoute, hashHistory } from 'react-router';
import TodoApp from 'todo-app';
import Main from 'main';
import Login from 'login';

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
    <Router history={hashHistory}>
      <Route path="/" component={Main}>
        <IndexRoute component={Login}/>
        <Route path="todos" component={TodoApp} />
      </Route>
    </Router>
  </Provider>,
  document.getElementById('app')
);
