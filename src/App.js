import React, { Component } from 'react';

import ProductSearch from './components/ProductSearch';
import Cart from './components/Cart';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      countOfActions: 0,
      currentState: 0,
      cartItems: [],
      snapshot: [
        {
          listOfProducts: undefined,
          cartItems: [],
          searchString: undefined,
        },
      ],
      searchString: undefined,
      listOfProducts: undefined,
    };
  }

  componentWillMount() {
    console.log(...this.state.snapshot);
  }

  componentDidUpdate = (prevProps, prevState) => {
    if (
      prevState.countOfActions === this.state.countOfActions &&
      prevState.searchString === this.state.searchString &&
      this.state.countOfActions === this.state.currentState
    ) {
      const { listOfProducts, cartItems, searchString } = this.state;
      const snapshotElement = {
        listOfProducts,
        cartItems,
        searchString,
      };

      this.setState(
        {
          countOfActions: this.state.countOfActions + 1,
          currentState: this.state.currentState + 1,
          snapshot: [...this.state.snapshot, snapshotElement],
        },
        console.log(this.state.snapshot),
      );
    } else if (Math.abs(this.state.countOfActions - this.state.currentState) === 1) {
      this.setState({ countOfActions: this.state.currentState });
    }
  };

  loadPreviousState = () => {
    console.log('LOAD PREVIOUS STATE', this.state.currentState - 1);
    const { snapshot } = this.state;
    const loadingState = this.state.currentState - 1;
    this.setState({
      cartItems: snapshot[loadingState].cartItems,
      searchString: snapshot[loadingState].searchString,
      listOfProducts: snapshot[loadingState].listOfProducts,
      currentState: loadingState,
    });
  };

  loadForwardState = () => {};

  updateListOfProducts = products => {
    this.setState({ listOfProducts: products });
  };

  updateSearchString = searchString => {
    this.setState({ searchString });
  };

  addToCart = item => {
    const { cartItems } = this.state;
    cartItems.push(item);
    this.setState({ cartItems });
    // console.log(cartItems);
  };

  clearCart = () => {
    // console.log('Clear Cart Pressed!');
    this.setState({ cartItems: [] });
  };

  render() {
    return (
      <div className="App">
        <ProductSearch
          loadPreviousState={this.loadPreviousState}
          searchString={this.state.searchString}
          updateSearchString={this.updateSearchString}
          listOfProducts={this.state.listOfProducts}
          updateListOfProducts={this.updateListOfProducts}
          addToCart={this.addToCart}
        />
        <Cart cartItems={this.state.cartItems} clearCart={this.clearCart} />
      </div>
    );
  }
}

export default App;
