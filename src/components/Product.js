import React, { Component } from 'react';
import '../App.css';

export default class Product extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  handleAddCart = product => {
    this.props.addToCart(product);
    console.log('+ Cart Clicked!', product);
  };

  render() {
    const { product } = this.props;
    return (
      <div className="Product">
        <img
          id="image"
          src={product.images[0]}
          alt={product.description}
          height="220"
          width="220"
        />
        {product.title}
        <button id="button" type="button" onClick={() => this.handleAddCart(product)}>
          + Cart
        </button>
        <div className="Price">&#2547; {product.price}</div>
      </div>
    );
  }
}
