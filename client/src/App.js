import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Header from './/components/Header';
import Product from './/components/Product';

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <div className="container">
          <Product />
        </div>
      </div>
    );
  }
}

export default App;
