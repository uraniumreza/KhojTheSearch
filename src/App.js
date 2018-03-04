import React, { Component } from 'react';

import ProductSearch from './components/ProductSearch';
import Cart from './components/Cart';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      cartItems: [],
    };
  }

  addToCart = item => {
    const { cartItems } = this.state;
    cartItems.push(item);
    this.setState({ cartItems });
    console.log(cartItems);
  };

  render() {
    return (
      <div className="App">
        <ProductSearch addToCart={this.addToCart} />
        <Cart cartItems={this.state.cartItems} />
      </div>
    );
  }
}

export default App;
