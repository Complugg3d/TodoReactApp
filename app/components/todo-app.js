import React, { Component } from 'react';
import TodoList from 'todo-list';
import TodoAddForm from 'todo-add-form';
import TodoSearch from 'todo-search';

class TodoApp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showCompleted: false,
      searchText: '',
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
  handleAddTodo(text) {
    alert('new todo:' + text);
  }
  handleSearch(showCompleted, searchText){
    this.setState({
      showCompleted: showCompleted,
      searchText: searchText.toLowerCase()
    });
  }
  render() {
    var { todos } = this.state;
    return (
      <div>
        <TodoSearch onSearch={this.handleSearch.bind(this)}/>
        <TodoList todos={todos}/>
        <TodoAddForm onAddTodo={this.handleAddTodo.bind(this)}/>
      </div>
    )
  }
}

export default TodoApp;
