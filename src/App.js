import React, { Component } from 'react';

import ProductSearch from './components/ProductSearch';
import Cart from './components/Cart';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div className="App">
        <ProductSearch />
        <Cart />
      </div>
    );
  }
}

export default App;
