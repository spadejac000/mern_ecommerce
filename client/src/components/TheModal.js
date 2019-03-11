import React, { Component } from 'react';
import {connect} from 'react-redux';
import {getProducts, deleteProduct, addProduct} from '../actions/productActions';
import PropTypes from 'prop-types';
import {
  Container,
  Button,
  ModalHeader,
  Modal,
  ModalBody,
  Form,
  FormGroup,
  Label,
  Input
} from 'reactstrap';

class TheModal extends Component {

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
    e.preventDefault()
    const newProduct = {
      name: this.state.name
    }

    // add product via addProduct action
    this.props.addProduct(newProduct)

    // close modal
    this.toggle();
  }

  render() {
    return (
      <Container>
        <Button
          color="dark"
          style={{marginBottom: "2rem"}}
          onClick={this.toggle}
        >
          Add Product
        </Button>

        <Modal
          isOpen={this.state.modal}
          toggle={this.toggle}
        >
          <ModalHeader toggle={this.toggle}>
            Add To Cart
          </ModalHeader>
          <ModalBody>
            <Form onSubmit={this.onSubmit}>
              <FormGroup>
                <Label for="product">Product</Label>
                <Input
                  type="text"
                  name="name"
                  id="item"
                  placeholder="Add Product"
                  onChange={this.onChange}
                />
                <Button
                  color="dark"
                  style={{marginTop: '2rem'}} block
                >
                  Add Product
                </Button>
              </FormGroup>
            </Form>
          </ModalBody>
        </Modal>
      </Container>
    )
  }
}

TheModal.propTypes = {
  getProducts: PropTypes.func.isRequired,
  product: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
  product: state.product
});

export default connect(mapStateToProps, {getProducts, deleteProduct, addProduct})(TheModal);