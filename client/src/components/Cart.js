import React, { Component } from 'react';
import {connect} from 'react-redux';
import {getProducts, deleteProduct, addProduct} from '../actions/productActions';
import PropTypes from 'prop-types';
import {
  Container,
  ListGroup,
  ListGroupItem,
  Button
} from 'reactstrap';
import {CSSTransition, TransitionGroup} from 'react-transition-group';
import uuid from 'uuid';
import TheModal from './TheModal';

class Cart extends Component {
  state = {
    modal: false,
    name: ''
  }

  toggle = () => {
    this.setState({
      modal: !this.state.modal
    })
  }

  componentDidMount() {
    this.props.getProducts();
  }

  onDeleteClick = (id) => {
    this.props.deleteProduct(id);
  }

  onChange = (e) => {
    this.setState({[e.target.name]: e.target.value})
  }

  onSubmit = (e) => {
    e.preventDefault();

    const newProduct = {
      id: uuid(),
      name: this.state.name
    }

    // add product via addProduct action
    this.props.addProduct(newProduct)

    // close modal
    this.toggle();
  }

  render() {
    const {products} = this.props.product;
    return (
      <Container>
        <TheModal />
        <ListGroup>
          <TransitionGroup className="cart-product-list">
            {products.map(({_id, name, image, price}) => (
              <CSSTransition key={_id} timeout={500} classNames="fade">
                <ListGroupItem>
                  <Button
                    className="remove-btn"
                    color="danger"
                    size="sm"
                    onClick={this.onDeleteClick.bind(this, _id)}
                  >
                    &times;
                  </Button>
                  {name}
                </ListGroupItem>
              </CSSTransition>
            ))}
          </TransitionGroup>
        </ListGroup>
      </Container>
    )
  }
}

Cart.propTypes = {
  getProducts: PropTypes.func.isRequired,
  product: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
  product: state.product
});

export default connect(mapStateToProps, {getProducts, deleteProduct, addProduct})(Cart);
