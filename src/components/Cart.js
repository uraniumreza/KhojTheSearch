import React from 'react';
import PropTypes from 'prop-types';

import CartItem from './CartItem';
import '../App.css';

const Cart = props => {
  const { cartItems } = props;
  let buttonDisabled;
  if (cartItems.length > 0) buttonDisabled = false;
  else buttonDisabled = true;
  let collectionOfItems = [];
  collectionOfItems = cartItems.map((item, index) => (
    <CartItem key={item.id} index={index} item={item} />
  ));
  return (
    <div className="cart">
      <h2>Cart</h2>
      <button
        disabled={buttonDisabled}
        id="borderLessButton"
        type="button"
        onClick={() => props.clearCart()}
      >
        Clear Cart
      </button>
      {collectionOfItems}
      {buttonDisabled && <h4 className="message">You have no item in your cart</h4>}
    </div>
  );
};

Cart.propTypes = {
  cartItems: PropTypes.arrayOf(PropTypes.object),
  clearCart: PropTypes.func.isRequired,
};

Cart.defaultProps = {
  cartItems: [],
};

export default Cart;
