import React, { Component } from 'react';

class ToDo extends Component {
  handleDelete() {
    this.props.deleteTodo(this.props.index)
  }
  render() {
    return (
      <li>
        <input type="checkbox" checked={ this.props.isCompleted } onChange={ this.props.toggleComplete } />
        <span>{ this.props.description }</span><button onClick={ this.handleDelete.bind(this) } className="clear-btn">Clear</button>
      </li>
    );
  }
}

export default ToDo;
