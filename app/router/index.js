import react from 'react';
import {Route, Router, IndexRoute, hashHistory} from 'react-router';

import TodoApp from 'todo-app';
import Main from 'main';
import Login from 'login';
import firebase from 'app/firebase/';

var requireLogin = (nextState, replace, next) => {
  if(!firebase.auth().currentUser) {
    replace('/');
  }
  next();
};

var redirectIfLogin = (nextState, replace, next) => {
  if(firebase.auth().currentUser) {
    replace('/todos');
  }
  next();
};

export default (
  <Router history={hashHistory}>
    <Route path="/" component={Main}>
      <IndexRoute component={Login} onEnter={redirectIfLogin}/>
      <Route path="todos" component={TodoApp} onEnter={requireLogin}/>
    </Route>
  </Router>
);