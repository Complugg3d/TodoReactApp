import React, { Component } from 'react';
import Todo from 'todo';
var { connect } = require('react-redux');

export class TodoList extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    var { todos } = this.props;

    var renderTodos = () => {
      if (todos.length === 0) {
        return (
          <p className="container__message">Nothing To Do</p>
        );
      }
      return todos.map((todo) => {
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
    return {
      todos: state.todos
    }
  }
)(TodoList);
