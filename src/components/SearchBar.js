import React, { Component } from 'react';
import '../App.css';

export default class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  onFormSubmit = e => {
    e.preventDefault();
    const searchString = e.target.elements.searchString.value;
    if (searchString) {
      this.props.getSearchString(searchString);
    }
  };

  render() {
    return (
      <form className="SearchBar" onSubmit={this.onFormSubmit}>
        <input id="searchBar" type="text" name="searchString" placeholder="Search..." />
        <button id="searchButton">Search</button>
      </form>
    );
  }
}
