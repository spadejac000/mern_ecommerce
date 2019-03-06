import React, { Component } from 'react';
import Product from './Product';
import './products.css';

class Products extends Component {
  state = {
    products: [
      {
        name: 'belt',
        price: '$20',
        amount: 89,
        id: 1
      },
      {
        name: 'restaurant linin',
        price: '$20000',
        amount: 0,
        id: 2
      },
      {
        name: 'soldier',
        price: '$6.99',
        amount: 29,
        id: 3
      },
      {
        name: 'shoelace',
        price: '$20',
        amount: 1000,
        id: 4
      }
    ]
  }

  render() {
    const {products} = this.state
    return (
      <div className="products_layout">
        <React.Fragment>
          {products.map(product => (
            <Product 
              key={product.id}
              product={product} 
            />
          ))}
        </React.Fragment>
      </div>
    )
  }
}

export default Products;
