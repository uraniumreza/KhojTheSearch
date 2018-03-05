import React, { Component } from 'react';

import { ClipLoader } from 'react-spinners';
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
      collectionOfProducts = listOfProducts.map(item => (
        <Product key={item.id} product={item} addToCart={this.props.addToCart} />
      ));
    }

    if (this.props.searching) {
      return (
        <div className="Loading">
          <ClipLoader size={100} color="#BBB" loading />
        </div>
      );
    }

    return (
      <div className="ProductShowcase">
        {/* <h1>What&apos;ll you buy today?</h1> */}
        {collectionOfProducts}
      </div>
    );
  }
}
