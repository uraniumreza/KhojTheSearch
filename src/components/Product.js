import React, { Component } from 'react';
import '../App.css';

export default class Product extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div className="Product">
        <img
          id="image"
          src="https://upload.wikimedia.org/wikipedia/commons/c/c6/Sierpinski_square.jpg"
          alt="Dark Side of the Moon"
          height="220"
          width="220"
        />
        Dark Side of The Moon
        <button id="button" type="button">
          + Cart
        </button>
        <div className="Price">220 BDT</div>
      </div>
    );
  }
}
