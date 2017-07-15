import React, { Component } from 'react';
import moment from 'moment';

class Todo extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    var { id, text, completed, createdAt, completedAt } = this.props;
    var renderDate = () => {
      var message = 'Created ';
      var timestamp = createdAt;
      
      if (completed) {
        message = 'Completed ';
        timestamp = completedAt;
      }
      
      return message + moment.unix(timestamp).format('MMM Do YYYY @ h:mm a');
    };
    
    return (
      <div onClick={() => {
        this.props.onToggle(id);
      }}>
      <input type="checkbox" checked={completed}/>
      <p>{text}</p>
      <p>{renderDate()}</p>       
      </div>
    );
  }
}

export default Todo;
