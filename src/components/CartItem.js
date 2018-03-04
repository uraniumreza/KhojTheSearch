import React, { Component } from 'react';
import '../App.css';

export default class CartItem extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div className="CartItem">
        <p>1. Dark Side of the Moon</p>
        <p>$220</p>
      </div>
    );
  }
}
