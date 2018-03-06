import React, { Component } from 'react';
import PropTypes from 'prop-types';

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
    this.props.updateSearchString(value);
    this.setState({ searching: true }, this.searchProduct(value));
  };

  searchProduct = searchString => {
    fetch(`http://es.backpackbang.com:9200/products/amazon/_search?q=title:${searchString}`)
      .then(response => response.json())
      .then(myJson => {
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

    this.setState({ searching: false }, this.props.updateListOfProducts(listOfProducts));
  };

  render() {
    return (
      <div className="productSearch">
        <div className="header">
          <button className="backForward" onClick={() => this.props.loadState('PREVIOUS')}>
            {'<'}
          </button>
          <SearchBar
            searchString={this.props.searchString}
            getSearchString={this.getSearchString}
          />
          <button className="backForward" onClick={() => this.props.loadState('FORWARD')}>
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

ProductSearch.propTypes = {
  addToCart: PropTypes.func.isRequired,
  loadState: PropTypes.func.isRequired,
  updateSearchString: PropTypes.func.isRequired,
  updateListOfProducts: PropTypes.func.isRequired,
  listOfProducts: PropTypes.arrayOf(PropTypes.object),
  searchString: PropTypes.string,
};

ProductSearch.defaultProps = {
  listOfProducts: undefined,
  searchString: undefined,
};
