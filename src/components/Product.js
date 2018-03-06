import React from 'react';
import PropTypes from 'prop-types';

import '../App.css';

const Product = props => {
  const { product } = props;
  return (
    <div className="product">
      <img id="image" src={product.images[0]} alt={product.description} height="220" width="220" />
      <p id="title">{product.title}</p>
      <button id="button" type="button" onClick={() => props.addToCart(product)}>
        + Cart
      </button>
      <div className="price">&#2547; {product.price}</div>
    </div>
  );
};

Product.propTypes = {
  addToCart: PropTypes.func.isRequired,
  product: PropTypes.shape,
};

Product.defaultProps = {
  product: {},
};

export default Product;
