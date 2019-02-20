import React, { Component } from 'react';
import { withTracker } from 'meteor/react-meteor-data';

import { Tasks } from '../api/tasks.js'; // Mongo Collection

import Task from './Task'; // Component

class App extends Component {
  renderTasks() {
    return this.props.tasks.map((task) => (
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

// Magic here: you are not expected to understand this.
export default withTracker(() => {
  return {
    tasks: Tasks.find({}).fetch()
  };
})(App);
