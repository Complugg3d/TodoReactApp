import React, { Component } from 'react';
import TodoList from 'todo-list';
import TodoAddForm from 'todo-add-form';
import TodoSearch from 'todo-search';
import uuid from 'uuid';

import TodoAPI from 'TodoAPI';

class TodoApp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showCompleted: false,
      searchText: '',
      todos: TodoAPI.getTodos()
    };

  }
  componentDidUpdate () {
    TodoAPI.setTodos(this.state.todos);
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
    var { todos, showCompleted, searchText } = this.state;
    var filteredTodos = TodoAPI.filterTodos(todos, showCompleted, searchText);
    return (
      <div>
        <TodoSearch onSearch={this.handleSearch.bind(this)}/>
        <TodoList todos={filteredTodos} onToggle={this.handleToggle.bind(this)}/>
        <TodoAddForm onAddTodo={this.handleAddTodo.bind(this)}/>
      </div>
    )
  }
}

export default TodoApp;
