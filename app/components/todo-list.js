import React, { Component } from 'react';
import Todo from 'todo';
var { connect } = require('react-redux');
var TodoAPI = require('TodoAPI');

export class TodoList extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    var { todos, showCompleted, searchText } = this.props;

    var todosInScreen =TodoAPI.filterTodos(todos, showCompleted, searchText);

    var renderTodos = () => {
      if (todosInScreen.length === 0) {
        return (
          <p className="container__message">Nothing To Do</p>
        );
      }
      return todosInScreen.map((todo) => {
        return <Todo key={todo.id} {...todo}/>;
      });
    };

    return (
      <div>
        {renderTodos()}
      </div>
    );
  }
}



export default connect(
  (state) => {
    return state;
  }
)(TodoList);
