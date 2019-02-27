import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Home extends Component {

  constructor() {
    super();
    this._randomUser = this._randomUser.bind(this);
  }

  _randomUser() {
    const names = [
      "liaa2",
      "WilliamDGH",
      "bridgetmcmahon",
      "Yiannimoustakas",
      "ElliMoty",
      "noah1987",
      "jessdiv",
      "seando13",
      "akexinad",
      "Helenovs",
      "jing1107",
      "nickec86",
      "sarita2129",
      "fahz1",
      "BrendanShields",
      "exclusiveJeet",
      "dtpearl",
      "jeremyetzine",
      "dmeneses2013",
      "DeclanBoller",
      "Arundhungel1",
      "senorwumpy",
      "wofockham"
    ];
    const index = Math.floor( Math.random() * names.length );
    const username = names[index];
    this.props.history.push(`/details/${ username }`);
  }

  render() {
    return (
      <div className="home">
        <h1>Github Search</h1>
        <Link to="/search">
          <button>Search for a user</button>
        </Link>
        <button onClick={ this._randomUser }>Random user</button>
      </div>
    );
  }
}
