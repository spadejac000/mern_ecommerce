import React, { Component } from 'react';
import axios from 'axios';
import { Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button } from 'reactstrap';


class Product extends Component {
  state = {
    products: [],
  }

  componentDidMount() {
    axios
      .get('http://jsonplaceholder.typicode.com/photos?albumId=1')
      .then(res => {
        console.log(res.data)
        this.setState({
          products: res.data
        })
      })
  }

  render() {
    const {products} = this.state;
    console.log('product...', products)
    return (
      <Card className="product_card">
        <CardImg top width="100%" src={products.url} alt="Card image cap" />
        <CardBody>
          <CardTitle>{products.title}</CardTitle>
          <CardSubtitle>{products.id}</CardSubtitle>
          <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
          <Button>Add To Cart</Button>
        </CardBody>
      </Card>
    );
  }
}

export default Product;
