import React, { Component } from 'react';

class TodoAddForm extends Component {
  constructor(props) {
    super(props);
  }
  onFormSubmit(e) {
    e.preventDefault();
    let todoText = this.refs.todoText.value;
    if(todoText.length > 0) {
      this.refs.todoText.value = '';
      this.props.onAddTodo(todoText);
    } else {
      this.refs.todoText.focus();
    }
  }
  render() {
    return (
      <div className="container__footer">
        <form onSubmit={this.onFormSubmit.bind(this)}>
          <input type='text' ref="todoText" placeholder="What you need to do?" />
          <button className="button expanded hollow">Add Todo</button>
        </form>
      </div>
    );
  }
}

export default TodoAddForm;
