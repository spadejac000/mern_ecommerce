import React, { Component } from 'react';
import axios from 'axios';
import Product from './Product';
import './products.css';

class Products extends Component {
  state = {
    products: [],
  }

  componentDidMount() {
    axios
      .get('http://jsonplaceholder.typicode.com/photos?albumId=1')
      .then(res => {
        this.setState({
          products: res.data.slice(0, 7)
        })
      })
  }

  render() {
    const {products} = this.state
    return (
      <div>
        <h1 className="text-center">Products</h1>
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
      </div>
    )
  }
}

export default Products;
