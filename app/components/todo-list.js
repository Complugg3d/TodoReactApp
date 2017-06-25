import React, { Component } from 'react';
import Todo from 'todo';


class TodoList extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    var { todos } = this.props;

    var renderTodos = () => {
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

export default TodoList;
