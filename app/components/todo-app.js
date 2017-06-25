import React, { Component } from 'react';
import TodoList from 'todo-list';

class TodoApp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      todos: [
        {
          id: 1,
          text: 'Walk the dog'
        },
        {
          id: 2,
          text: 'Clean the yard'
        },
        {
          id: 3,
          text: 'Get the goods'
        },
        {
          id: 4,
          text: 'Get a hair cut'
        }
      ]
    };

  }
  render() {
    var { todos } = this.state;
    return (
      <div>
        <TodoList todos={todos}/>
      </div>
    )
  }
}

export default TodoApp;
