import React, { Component } from 'react';
import axios from 'axios';

const SERVER_URL = 'http://localhost:3000/secrets.json'; // Change this in production.

class SecretForm extends Component {
  constructor() {
    super();
    this.state = { content: '' };
    this._handleSubmit = this._handleSubmit.bind(this);
    this._handleChange = this._handleChange.bind(this);
  }

  _handleSubmit(e) {
    e.preventDefault();
    this.props.onSubmit( this.state.content );
    this.setState({content: ''}); // Clear out the form for the next secret.
    // How would we give focus back to the textarea? refs
  }

  _handleChange(e) {
    this.setState( { content: e.target.value } );
  }

  render() {
    return (
      <form onSubmit={ this._handleSubmit }>
        <textarea onChange={ this._handleChange } value={ this.state.content }></textarea>
        <input type="submit" value="Tell" />
      </form>
    );
  }
}

class Gallery extends Component {
  render() {
    return (
      <div>
        { this.props.secrets.map( (s) => <p key={s.id}>{s.content}</p> ) }
      </div>
    );
  }
}

class Secrets extends Component {
  constructor() {
    super();
    this.state = {
      // TODO: Get these secrets from AJAX
      secrets: [
        {id: 1, content: 'Test secret'},
        {id: 2, content: 'Test secret about vegetable oil'},
        {id: 3, content: 'Something about Michael Jackson'}
      ]
    };
    this.saveSecret = this.saveSecret.bind(this);
  }

  saveSecret(content) {
    // TODO: Make a POST request to the server
    const secret = {
      id: Math.random(),
      content: content
    };

    // Spread operator ...
    this.setState({ secrets: [...this.state.secrets, secret] });

    axios.post(SERVER_URL, {content}).then((results) => {
      console.log('secrets updated on server');
    });
  }

  render() {
    return (
      <div>
        <h1>Tell Us All Your Secrets</h1>
        <SecretForm onSubmit={ this.saveSecret }   />
        <Gallery secrets={ this.state.secrets }/>
      </div>
    );
  }
}

export default Secrets;
