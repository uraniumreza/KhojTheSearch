import React, { Component } from 'react';

import ProductShowcase from './ProductShowcase';
import SearchBar from './SearchBar';
import '../App.css';

export default class ProductSearch extends Component {
  constructor(props) {
    super(props);

    this.state = {
      searching: undefined,
    };
  }

  getSearchString = value => {
    // console.log('This is the search string: ', value);
    this.props.updateSearchString(value);
    this.setState({ searching: true }, this.searchProduct(value));
  };

  searchProduct = searchString => {
    fetch(`http://es.backpackbang.com:9200/products/amazon/_search?q=title:${searchString}`)
      .then(response => response.json())
      .then(myJson => {
        // console.log(myJson);
        this.refactorProducts(myJson.hits.hits);
      });
  };

  refactorProducts = searchedProducts => {
    let listOfProducts = [];
    // eslint-disable-next-line
    searchedProducts.map(item => {
      const product = {
        id: item._id,
        title: item._source.title,
        description: item._source.description,
        images: item._source.images,
        price: item._source.salePrice,
      };
      listOfProducts = [...listOfProducts, product];
    });
    // console.log(listOfProducts);
    this.setState({ searching: false }, this.props.updateListOfProducts(listOfProducts));
  };

  render() {
    return (
      <div className="ProductSearch">
        <div className="header">
          <button className="backForward" onClick={this.props.loadPreviousState}>
            {'<'}
          </button>
          <SearchBar getSearchString={this.getSearchString} />
          <button className="backForward" onClick={this.props.loadForwardState}>
            {'>'}
          </button>
        </div>
        <ProductShowcase
          searching={this.state.searching}
          listOfProducts={this.props.listOfProducts}
          addToCart={this.props.addToCart}
        />
      </div>
    );
  }
}
