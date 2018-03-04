import React, { Component } from 'react';

import ProductShowcase from './ProductShowcase';
import SearchBar from './SearchBar';
import '../App.css';

export default class ProductSearch extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div className="ProductSearch">
        <SearchBar />
        <ProductShowcase />
      </div>
    );
  }
}
