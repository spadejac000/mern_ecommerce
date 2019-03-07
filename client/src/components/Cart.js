import React, { Component } from 'react';
import {connect} from 'react-redux';
import {getProducts} from '../actions/productActions';
import PropTypes from 'prop-types';

class Cart extends Component {

  componentDidMount() {
    this.props.getProducts();
  }

  render() {
    const {products} = this.props.product;
    return (
      <div>
        
      </div>
    )
  }
}

ShoppingList.propTypes = {
  getProducts: PropTypes.func.isRequired,
  product: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
  product: state.product
});

export default connect(mapStateToProps, {getProducts})(Cart);
