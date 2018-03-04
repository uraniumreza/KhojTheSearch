import React, { Component } from 'react';

import Product from './Product';
import '../App.css';

export default class ProductShowcase extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    let collectionOfProducts = [];
    const List = [1, 2, 3, 4, 5, 6, 7, 8, 9, 1, 2, 3, 4, 5];
    collectionOfProducts = List.map(() => <Product />);

    return (
      <div className="ProductShowcase">
        {/* <h1>What&apos;ll you buy today?</h1> */}
        {collectionOfProducts}
      </div>
    );
  }
}
