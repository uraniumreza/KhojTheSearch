import React, { Component } from 'react';
import '../App.css';

export default class Product extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

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
        <p id="title">{product.title}</p>
        <button id="button" type="button">
          + Cart
        </button>
        <div className="Price">{product.price} BDT</div>
      </div>
    );
  }
}
