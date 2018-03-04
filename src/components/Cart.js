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
    let collectionOfItems = [];
    collectionOfItems = cartItems.map((item, index) => <CartItem index={index} item={item} />);
    return (
      <div className="Cart">
        <h3>Cart</h3>
        {collectionOfItems}
      </div>
    );
  }
}
