import React, { Component } from 'react';

import CartItem from './CartItem';
import '../App.css';

export default class Cart extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    const { cartItems } = this.props;
    let buttonDisabled;
    if (cartItems.length > 0) buttonDisabled = false;
    else buttonDisabled = true;
    let collectionOfItems = [];
    collectionOfItems = cartItems.map((item, index) => <CartItem index={index} item={item} />);
    return (
      <div className="Cart">
        <h2>Cart</h2>
        <button
          disabled={buttonDisabled}
          id="borderLessButton"
          type="button"
          onClick={() => this.props.clearCart()}
        >
          Clear Cart
        </button>
        {collectionOfItems}
      </div>
    );
  }
}
