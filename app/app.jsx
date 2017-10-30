const React = require('react');
const ReactDOM = require('react-dom');
var { Provider } = require('react-redux');
import { hashHistory } from 'react-router';

const actions = require('actions');
var store = require('configureStore').configure();
import TodoAPI from 'TodoAPI';
import firebase from 'app/firebase/';
import router from 'app/router/';

firebase.auth().onAuthStateChanged((user) => {
  if(user) {
    hashHistory.push('/todos');
  } else {
    hashHistory.push('/');
  }
});

store.dispatch(actions.startAddTodos());
//load foundation
//require('style!css!foundation-sites/dist/css/foundation.min.css');
$(document).foundation();

//load custom css
require('style!css!sass!applicationStyles')

ReactDOM.render(
  <Provider store={store}>
    {router}     
  </Provider>,
  document.getElementById('app')
);
