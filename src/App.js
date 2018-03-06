import React, { Component } from 'react';

import ProductSearch from './components/ProductSearch';
import Cart from './components/Cart';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      action: '',
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

  componentDidUpdate = (prevProps, prevState) => {
    const {
      action,
      listOfProducts,
      cartItems,
      searchString,
      countOfActions,
      currentState,
    } = this.state;

    if (action === 'SEARCH' || action === 'ADD_TO_CART' || action === 'CLEAR_CART') {
      const snapshotElement = {
        listOfProducts,
        cartItems,
        searchString,
      };

      if (countOfActions !== currentState) {
        this.setState({
          snapshot: [...this.state.snapshot.slice(0, currentState + 1), snapshotElement],
        });
      } else {
        this.setState({
          snapshot: [...this.state.snapshot, snapshotElement],
        });
      }

      this.setState({
        countOfActions: this.state.countOfActions + 1,
        currentState: this.state.currentState + 1,
        action: '',
      });
    }
  };

  loadState = action => {
    const { snapshot, currentState } = this.state;
    let loadingState = currentState;

    if (action === 'FORWARD' && snapshot.length > currentState + 1) {
      loadingState += 1;
      console.log('FOR', snapshot.length, loadingState);
    }
    if (action === 'PREVIOUS' && currentState > 0) {
      loadingState -= 1;
      console.log('BAC');
    }

    if (loadingState !== currentState) {
      this.setState(
        {
          cartItems: snapshot[loadingState].cartItems || [],
          searchString: snapshot[loadingState].searchString || '',
          listOfProducts: snapshot[loadingState].listOfProducts || undefined,
          currentState: loadingState,
        },
        console.log(this.state),
      );
    }
  };

  updateListOfProducts = products => {
    this.setState({ listOfProducts: products, action: 'SEARCH' });
  };

  updateSearchString = searchString => {
    this.setState({ searchString });
  };

  addToCart = item => {
    this.setState({ cartItems: [...this.state.cartItems, item], action: 'ADD_TO_CART' });
  };

  clearCart = () => {
    // console.log('Clear Cart Pressed!');
    this.setState({ cartItems: [], action: 'CLEAR_CART' });
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
