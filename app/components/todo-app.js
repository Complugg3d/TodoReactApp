import React, { Component } from 'react';
import TodoList from 'todo-list';
import TodoAddForm from 'todo-add-form';
import TodoSearch from 'todo-search';
import uuid from 'uuid';

class TodoApp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showCompleted: false,
      searchText: '',
      todos: [
        {
          id: uuid(),
          text: 'Walk the dog',
          completed: false
        },
        {
          id: uuid(),
          text: 'Clean the yard',
          completed: true
        },
        {
          id: uuid(),
          text: 'Get the goods',
          completed: true
        },
        {
          id: uuid(),
          text: 'Get a hair cut',
          completed: false
        }
      ]
    };

  }
  handleAddTodo(text) {
    this.setState({
      todos: [
        ...this.state.todos,
        {
          id: uuid(),
          text: text,
          completed: false
        }
      ]
    })
  }
  handleSearch(showCompleted, searchText){
    this.setState({
      showCompleted: showCompleted,
      searchText: searchText.toLowerCase()
    });
  }
  handleToggle(id) {
    var updatedTodos = this.state.todos.map((todo) => {
      if(todo.id === id) {
        todo.completed = !todo.completed;
      }
      return todo;
    });
    
    this.setState({ todos: updatedTodos });
  }
  render() {
    var { todos } = this.state;
    return (
      <div>
        <TodoSearch onSearch={this.handleSearch.bind(this)}/>
        <TodoList todos={todos} onToggle={this.handleToggle.bind(this)}/>
        <TodoAddForm onAddTodo={this.handleAddTodo.bind(this)}/>
      </div>
    )
  }
}

export default TodoApp;
