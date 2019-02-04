import React, { Component } from 'react';

class FlickrSearch extends Component {
  render() {
    return (
      <div>
        <SearchForm />
        <Gallery />
      </div>
    );
  }
}

class SearchForm extends Component {
  constructor() {
    super();
    this.state = {query: ''};
    this._handleInput = this._handleInput.bind(this);
  }

  _handleInput(e) {
    this.setState({query: e.target.value});
  }

  _handleSubmit(e) {
    e.preventDefault();
    console.log('submit');
  }

  render() {
    return (
      <form onSubmit={ this._handleSubmit }>
        <input type="search" placeholder="Butterfly" required onInput={ this._handleInput }/>
        <input type="submit" value="Search" />
      </form>
    );
  }
}

class Gallery extends Component {
  render() {
    return (
      <h2>Gallery</h2>
    );
  }
}

export default FlickrSearch;
