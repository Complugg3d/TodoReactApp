const React = require('react');
const ReactDOM = require('react-dom');
import { Route, Router, IndexRoute, hashHistory } from 'react-router';
import TodoApp from 'todo-app';

//load foundation
//require('style!css!foundation-sites/dist/css/foundation.min.css');
$(document).foundation();

//load custom css
require('style!css!sass!applicationStyles')



ReactDOM.render(
  <TodoApp />,
  document.getElementById('app')
);
