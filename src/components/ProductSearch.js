import React, { Component } from 'react';

import ProductShowcase from './ProductShowcase';
import SearchBar from './SearchBar';
import '../App.css';

export default class ProductSearch extends Component {
  constructor(props) {
    super(props);

    this.state = {
      searchString: undefined,
    };
  }

  getSearchString = value => {
    console.log('This is the search string: ', value);
    this.setState({ searchString: value });
  };

  render() {
    return (
      <div className="ProductSearch">
        <SearchBar getSearchString={this.getSearchString} />
        <ProductShowcase />
      </div>
    );
  }
}
