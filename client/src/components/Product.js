import React, { Component } from 'react';
import { 
  Card, 
  CardImg, 
  CardText, 
  CardBody, 
  CardTitle, 
  CardSubtitle, 
  Button,
  Form
} from 'reactstrap';
// import {connect} from 'react-redux';
// import {getProducts, addProduct} from '../actions/productActions';
// import PropTypes from 'prop-types';


class Product extends Component {

  // onSubmit = (e) => {
  //   e.preventDefault()
  //   const newProduct = {
  //     name: this.state.name
  //   }

  //   // add product via addProduct action
  //   this.props.addProduct(newProduct)

  //   // close modal
  //   this.toggle();
  // }

  render() {
    const {id, thumbnailUrl, title} = this.props.product;
    return (
      <Card className="product_card">
        <CardImg top width="100%" src={thumbnailUrl} alt="Card image cap" />
        <CardBody>
          <CardTitle>{title}</CardTitle>
          <CardSubtitle>{id}</CardSubtitle>
          <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
          <Form onSubmit={this.onSubmit}>
            <Button
              onClick={this.onClick}
            >Add To Cart
            </Button>
          </Form>
        </CardBody>
      </Card>
    );
  }
}

// Product.propTypes = {
//   getProducts: PropTypes.func.isRequired,
//   product: PropTypes.object.isRequired
// }

// const mapStateToProps = (state) => ({
//   product: state.product
// });

// export default connect(mapStateToProps, {getProducts, addProduct})(Product);

export default Product;
