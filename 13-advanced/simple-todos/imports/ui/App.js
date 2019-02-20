import React, { Component } from 'react';

import Task from './Task';

export default class App extends Component {
  getTasks() {
    return [
      { _id: 1, text: 'This is the first task'},
      { _id: 2, text: 'This is the second task'},
      { _id: 3, text: 'This is the third task'},
      { _id: 4, text: 'This is the last task'},
    ]
  }

  renderTasks() {
    return this.getTasks().map((task) => (
      <Task key={task._id} task={task} />
    ));
  }

  render() {
    return (
      <div className="container">
        <header>
          <h1>Todo List</h1>
        </header>
        <ul>
          {this.renderTasks()}
        </ul>
      </div>
    );
  }
}
