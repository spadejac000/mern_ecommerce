import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Header from './/components/Header';
import Products from './/components/Products';

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <div className="container">
          <Products />
        </div>
      </div>
    );
  }
}

export default App;
