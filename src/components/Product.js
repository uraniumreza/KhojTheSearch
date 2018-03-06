import React, { Component } from 'react';
import PropTypes from 'prop-types';

import '../App.css';

export default class Product extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  handleAddCart = product => {
    this.props.addToCart(product);
  };

  render() {
    const { product } = this.props;
    return (
      <div className="product">
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
        <div className="price">&#2547; {product.price}</div>
      </div>
    );
  }
}

Product.propTypes = {
  addToCart: PropTypes.func.isRequired,
  product: PropTypes.object,
};

Product.defaultProps = {
  product: {},
};
