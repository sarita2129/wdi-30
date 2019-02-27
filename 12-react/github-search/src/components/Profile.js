import React, { Component } from 'react';
import Github from '../utils';

export default class Profile extends Component {
  constructor() {
    super();
    this.state = { user: null, repos: null };
  }

  componentDidMount() {
    const username = this.props.match.params.username;
    Github.getUserInfo(username).then((result) => {
      this.setState({
        user: result.data
      })
    });
  }

  render() {
    return (
      <div className="profile">
        <h2>Github User Details</h2>
        <UserInfo />
        <Repositories />
      </div>
    );
  }
}

class UserInfo extends Component {
  render() {
    return (
      <h3>User Info coming soon</h3>
    );
  }
}

class Repositories extends Component {
  render() {
    return (
      <h3>Repos coming soon</h3>
    );
  }
}
