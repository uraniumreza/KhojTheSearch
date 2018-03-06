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

  loadState = action => {
    const { snapshot, currentState } = this.state;
    let loadingState = currentState;

    if (action === 'FORWARD' && snapshot.length > currentState + 1) {
      loadingState += 1;
    }
    if (action === 'PREVIOUS' && currentState > 0) {
      loadingState -= 1;
    }

    if (loadingState !== currentState) {
      this.setState({
        cartItems: snapshot[loadingState].cartItems || [],
        searchString: snapshot[loadingState].searchString || '',
        listOfProducts: snapshot[loadingState].listOfProducts || undefined,
        currentState: loadingState,
      });
    }
  };

  updateListOfProducts = products => {
    this.setState({ listOfProducts: products });
  };

  updateSearchString = searchString => {
    this.setState({ searchString });
  };

  addToCart = item => {
    this.setState({ cartItems: [...this.state.cartItems, item] });
  };

  clearCart = () => {
    // console.log('Clear Cart Pressed!');
    this.setState({ cartItems: [] });
  };

  render() {
    return (
      <div className="App">
        <ProductSearch
          loadState={this.loadState}
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
