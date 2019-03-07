import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button } from 'reactstrap';


class Product extends Component {

  render() {
    const {id, thumbnailUrl, title} = this.props.product;
    return (
      <Card className="product_card">
        <CardImg top width="100%" src={thumbnailUrl} alt="Card image cap" />
        <CardBody>
          <CardTitle>{title}</CardTitle>
          <CardSubtitle>{id}</CardSubtitle>
          <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
          <Button>Add To Cart</Button>
        </CardBody>
      </Card>
    );
  }
}

export default Product;
