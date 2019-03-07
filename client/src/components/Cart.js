import React, { Component } from 'react';
import {connect} from 'react-redux';
import {getProducts} from '../actions/productActions';
import PropTypes from 'prop-types';
import {
  Container,
  ListGroup,
  ListGroupItem,
  Button
} from 'reactstrap';
import {CSSTransitions, TransitionGroup} from 'react-transition-group';
import uuid from 'uuid';

class Cart extends Component {
  state = {
    products: [
      {
        id: uuid(),
        name: 'bicycle',
        image: 'https://www.pe.com/wp-content/uploads/2018/11/636337794_27186637-1.jpg?w=525',
        price: 20
      },
      {
        id: uuid(),
        name: 'poster',
        image: 'https://www.pe.com/wp-content/uploads/2018/11/636337794_27186637-1.jpg?w=525',
        price: 1000
      },
      {
        id: uuid(),
        name: 'vehicle',
        image: 'https://www.pe.com/wp-content/uploads/2018/11/636337794_27186637-1.jpg?w=525',
        price: 67
      },
      {
        id: uuid(),
        name: 'diamond ring',
        image: 'https://www.pe.com/wp-content/uploads/2018/11/636337794_27186637-1.jpg?w=525',
        price: 29
      }
    ]
  }

  componentDidMount() {
    this.props.getProducts();
  }

  render() {
    const {products} = this.state;
    return (
      <Container>
        
      </Container>
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
