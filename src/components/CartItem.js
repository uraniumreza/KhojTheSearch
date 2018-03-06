import React from 'react';
import PropTypes from 'prop-types';

import '../App.css';

const CartItem = props => {
  const { index, item } = props;
  return (
    <div className="cartItem">
      <p>{`${index + 1}.`}</p>
      <p id="cartItemTitle">{`${item.title}`}</p>
      <p>&#2547;{` ${item.price}`}</p>
    </div>
  );
};

CartItem.propTypes = {
  index: PropTypes.number,
  item: PropTypes.shape,
};

CartItem.defaultProps = {
  index: 0,
  item: [],
};

export default CartItem;
