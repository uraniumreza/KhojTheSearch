import React from 'react';
import PropTypes from 'prop-types';

import { ClipLoader } from 'react-spinners';
import Product from './Product';
import '../App.css';

const ProductShowcase = props => {
  let collectionOfProducts = [];
  const { listOfProducts } = props;
  if (listOfProducts) {
    collectionOfProducts = listOfProducts.map(item => (
      <Product key={item.id} product={item} addToCart={props.addToCart} />
    ));
  }

  if (props.searching) {
    return (
      <div className="loading">
        <ClipLoader size={100} color="#BBB" loading />
      </div>
    );
  }

  return (
    <div className="productShowcase">
      {typeof listOfProducts === 'undefined' && (
        <h1 className="message">What&apos;ll you buy today?</h1>
      )}
      {listOfProducts &&
        listOfProducts.length === 0 && (
          <h1 className="message">
            Sorry that thing doesn&apos;t seem to exist. Try anything else?
          </h1>
        )}
      {listOfProducts && listOfProducts.length > 0 && collectionOfProducts}
    </div>
  );
};

ProductShowcase.propTypes = {
  searching: PropTypes.bool,
  listOfProducts: PropTypes.arrayOf(PropTypes.object),
  addToCart: PropTypes.func.isRequired,
};

ProductShowcase.defaultProps = {
  searching: false,
  listOfProducts: undefined,
};

export default ProductShowcase;
