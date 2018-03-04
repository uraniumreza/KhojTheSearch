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
    const { listOfProducts } = this.props;
    if (listOfProducts) {
      collectionOfProducts = listOfProducts.map(item => <Product key={item.id} product={item} />);
    }
    return (
      <div className="ProductShowcase">
        {/* <h1>What&apos;ll you buy today?</h1> */}
        {collectionOfProducts}
      </div>
    );
  }
}
