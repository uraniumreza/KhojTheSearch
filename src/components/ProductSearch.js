import React, { Component } from 'react';

import ProductShowcase from './ProductShowcase';
import SearchBar from './SearchBar';
import '../App.css';

export default class ProductSearch extends Component {
  constructor(props) {
    super(props);

    this.state = {
      searching: undefined,
      searchString: undefined,
      listOfProducts: undefined,
    };
  }

  getSearchString = value => {
    console.log('This is the search string: ', value);
    this.setState({ searchString: value, searching: true }, this.searchProduct);
  };

  searchProduct = () => {
    fetch(
      `http://es.backpackbang.com:9200/products/amazon/_search?q=title:${this.state.searchString}`,
    )
      .then(response => response.json())
      .then(myJson => {
        console.log(myJson);
        this.refactorProducts(myJson.hits.hits);
      });
  };

  refactorProducts = searchedProducts => {
    const listOfProducts = [];
    searchedProducts.map(item => {
      const product = {
        id: item._id,
        title: item._source.title,
        description: item._source.description,
        images: item._source.images,
        price: item._source.salePrice,
      };
      listOfProducts.push(product);
    });
    console.log(listOfProducts);
    this.setState({ listOfProducts, searching: false });
  };

  render() {
    return (
      <div className="ProductSearch">
        <SearchBar getSearchString={this.getSearchString} />
        <ProductShowcase
          searching={this.state.searching}
          listOfProducts={this.state.listOfProducts}
          addToCart={this.props.addToCart}
        />
      </div>
    );
  }
}
