import React, { Component } from 'react';
import '../App.css';

export default class CartItem extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    const { index, item } = this.props;
    return (
      <div className="cartItem">
        <p>{`${index + 1}.`}</p>
        <p id="cartItemTitle">{`${item.title}`}</p>
        <p>&#2547;{` ${item.price}`}</p>
      </div>
    );
  }
}
