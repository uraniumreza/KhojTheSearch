import React, { Component } from 'react';

import CartItem from './CartItem';
import '../App.css';

export default class Cart extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div className="Cart">
        <h3>Cart</h3>
        <CartItem />
      </div>
    );
  }
}
