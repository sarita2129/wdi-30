import React, { useState, useEffect } from 'react';
import Github from '../utils';

export default (props) => {
  const [user, setUser] = useState(null);
  const [repos, setRepos] = useState(null);
  const [dataLoaded, setDataLoaded] = useState(false);

  useEffect(() => {
    if (dataLoaded) {
      return;
    }

    const username = props.match.params.username;

    Github.getUserInfo(username).then((result) => {
      setUser(result.data);
    });

    Github.getUserRepos(username).then((result) => {
      setRepos(result.data);
    })

    setDataLoaded(true);
  });

  return (
    <div className="profile">
      <h2>Github User Details</h2>
      <UserInfo user={ user } />
      <Repositories repos={ repos } />
    </div>
  )
};

const UserInfo = (props) => {
  if (props.user === null) {
    return (<div className="info">Loading...</div>);
  }

  // Destructuring
  const { login, followers, following, public_repos, public_gists } = props.user;

  return (
    <div className="info">
      <h3>Stats for {login}</h3>
      <p>Followers: {followers}</p>
      <p>Following: {following}</p>
      <p>Repos: {public_repos}</p>
      <p>Gists: {public_gists}</p>
    </div>
  );
}

const Repositories = (props) => {
  if (props.repos === null) {
    return (<div className="info">Loading...</div>);
  }

  const userRepos = props.repos.map((r) => {
    return (
      <li key={r.id}>
        <a href={r.html_url} target="_blank" rel="noopener noreferrer">
          {r.name}
        </a>
      </li>
    )
  });

  return (
    <div className="repos">
      <h3>User Repositories</h3>
      <ul>
        {userRepos}
      </ul>
    </div>
  );
}
