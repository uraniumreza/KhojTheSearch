import React, { Component } from 'react';
import '../App.css';

export default class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div className="SearchBar">
        <input id="searchBar" type="text" placeholder="Search..." />
        <button id="searchButton" type="button">
          Search
        </button>
      </div>
    );
  }
}
